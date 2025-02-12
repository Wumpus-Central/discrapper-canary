n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(765250),
    s = n(13245),
    d = n(393238),
    c = n(493773),
    u = n(358221),
    h = n(569545),
    _ = n(199902),
    p = n(314897),
    f = n(592125),
    g = n(355863),
    m = n(944486),
    v = n(237997),
    E = n(444295),
    I = n(804570),
    x = n(350663),
    C = n(610394),
    S = n(340101),
    Z = n(981631),
    y = n(388032),
    b = n(137256);
let O = [];
function N(e, t, n, i) {
    let r = (i - 1) * x.z;
    return e === S.C5.HORIZONTAL ? Math.min(Math.max((t - r) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - r) / i) * 16) / 9, 256));
}
function T(e) {
    let { id: t, size: n, locked: T, padding: w, borderWidth: k, opacity: A, horizontal: j, pinned: R, anchorTop: L, anchorLeft: D } = e,
        P = 2 * w + 2 * k,
        { width: M, height: z } = {
            width: 'number' == typeof n.width ? n.width : 256,
            height: 'number' == typeof n.height ? n.height : 144
        },
        V = (0, l.e7)([m.Z], () => m.Z.getVoiceChannelId()),
        { width: W, height: U, ref: F } = (0, d.Z)(),
        B = (0, l.e7)(
            [g.Z],
            () => {
                var e;
                let n = g.Z.getWidget(t);
                return !!(0, S.ZL)(n) && (null === (e = n.meta.showAllStreams) || void 0 === e || e);
            },
            [t]
        ),
        G = !j,
        H = (0, l.e7)([f.Z], () => f.Z.getChannel(V)),
        Y = (0, l.e7)([p.default], () => p.default.getId()),
        Q = (L && G) || (D && j),
        K = (!L && G) || (!D && j),
        {
            participantsVersion: X,
            streamParticipants: J,
            participantIds: q
        } = (0, l.cj)(
            [_.Z, u.Z],
            () => {
                if (null == V)
                    return {
                        streamParticipants: O,
                        participantsVersion: -1,
                        participantIds: []
                    };
                let e = new Set(_.Z.getAllActiveStreamsForChannel(V).map((e) => (0, h.V9)(e))),
                    t = (t) => e.has((0, h.V9)(t.stream)),
                    n = u.Z.getStreamParticipants(V).filter((e) => e.user.id !== Y && (!!B || t(e)));
                return (
                    n.sort((e, n) => {
                        if (Q) {
                            if (t(e) && !t(n)) return -1;
                            if (!t(e) && t(n)) return 1;
                        } else if (K) {
                            if (t(e) && !t(n)) return 1;
                            if (!t(e) && t(n)) return -1;
                        }
                        return e.user.username.localeCompare(n.user.username);
                    }),
                    {
                        streamParticipants: n,
                        activeStreams: e,
                        participantIds: n.map((e) => e.user.id),
                        participantsVersion: u.Z.getParticipantsVersion(V)
                    }
                );
            },
            [V, Y, B, Q, K]
        ),
        $ = J.length,
        ee = null == H || 0 === $,
        et = j ? S.C5.HORIZONTAL : S.C5.VERTICAL,
        { tileWidth: en, layout: ei } = (function (e, t, n, i, l) {
            let o = (function (e, t, n, i) {
                    let r = N(S.C5.HORIZONTAL, e, t, n),
                        l = N(S.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case S.C5.VERTICAL:
                            return l;
                        case S.C5.HORIZONTAL:
                            return r;
                    }
                    let o = ((9 * l) / 16 + x.z) * n - x.z;
                    return e > (16 * t) / 9 ? r : o <= t ? l : (9 * r) / 16 <= t ? r : l;
                })(n, i, t, l),
                a = N(S.C5.VERTICAL, n, i, t),
                s = null != l ? l : o === a ? S.C5.VERTICAL : S.C5.HORIZONTAL,
                [d, c] = r.useState(o);
            return (
                r.useEffect(() => {
                    e || c(o);
                }, [e, o]),
                {
                    layout: s,
                    tileWidth: d
                }
            );
        })(!1, J.length, null != W ? W : M - P, null != U ? U : z - P, et),
        er = {
            id: t,
            width: M,
            height: z,
            sizeOffset: P,
            layout: ei,
            padding: w,
            participants: J.length
        };
    !(function (e) {
        let { id: t, streamParticipants: n, layout: i, widgetLayoutSpecs: l } = e,
            o = r.useRef(l);
        r.useEffect(() => {
            o.current = l;
        });
        let s = n.length;
        r.useEffect(() => {
            let { id: e, width: t, height: n, sizeOffset: i, layout: r, padding: l } = o.current;
            if (0 === s) {
                (256 !== t || 144 !== n) &&
                    (0, a.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: 256,
                            height: 144
                        }
                    });
                return;
            }
            if (r === S.C5.HORIZONTAL) {
                let t = (16 / 9) * (n - i);
                (0, a.nv)({
                    widgetId: e,
                    size: {
                        fixed: !0,
                        height: n,
                        width: t * s + l * (s - 1) + i
                    }
                });
            } else {
                let n = (9 / 16) * (t - i);
                (0, a.nv)({
                    widgetId: e,
                    size: {
                        fixed: !0,
                        width: t,
                        height: n * s + l * (s - 1) + i
                    }
                });
            }
        }, [s]),
            r.useEffect(() => {
                if (o.current.participants <= 1) return;
                let { id: e, width: t, height: n, sizeOffset: r, padding: l, participants: s } = o.current;
                if (i === S.C5.HORIZONTAL) {
                    let n = t - r;
                    (0, a.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: n * s + l * (s - 1) + r,
                            height: (9 / 16) * n + r
                        }
                    });
                } else {
                    let t = n - r;
                    (0, a.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: (16 / 9) * t + r,
                            height: t * s + l * (s - 1) + r
                        }
                    });
                }
            }, [i]),
            r.useEffect(
                () => () => {
                    (0, a.nv)({
                        widgetId: t,
                        size: {
                            fixed: !0,
                            width: 256,
                            height: 144
                        }
                    });
                },
                [t]
            );
    })({
        id: t,
        streamParticipants: J,
        layout: ei,
        widgetLayoutSpecs: er
    }),
        r.useEffect(() => {
            s.Z.setGpuBoostRequested(C.zS.OVERLAY_VIDEO_STREAM_RENDERING, !ee);
        }, [ee]),
        (0, c.ZP)(() => () => {
            s.Z.setGpuBoostRequested(C.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
        });
    let [el, eo] = r.useState(new Set());
    r.useEffect(() => {
        -1 !== X &&
            eo((e) => {
                let t = new Set(q);
                return Array.from(e).filter((e) => !t.has(e)).length > 0 || Array.from(t).filter((t) => !e.has(t)).length > 0 ? t : e;
            });
    }, [q, X]);
    let ea = R || !T;
    return (r.useEffect(() => {
        0 !== el.size &&
            ea &&
            (0, E.zi)(Z.Odu.VIDEO, {
                locked: v.Z.isInstanceLocked(),
                shownUserIds: Array.from(el),
                liveUserIds: Array.from(el),
                contentInventoryIds: []
            });
    }, [el, ea]),
    ee && T)
        ? null
        : ee && !T
          ? T
              ? null
              : (0, i.jsx)(I.E, {
                    emptyText: y.intl.string(y.t['T6+rX1']),
                    icon: o.hGI,
                    absolute: !0
                })
          : (0, i.jsx)('div', {
                className: b.goLiveGridContainer,
                style: { opacity: A },
                ref: F,
                children: (0, i.jsx)(x.Z, {
                    widgetId: t,
                    tileWidth: en,
                    locked: T,
                    layout: ei,
                    streamParticipants: J,
                    participantsVersion: X,
                    pinned: R
                })
            });
}
