n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(765250),
    s = n(13245),
    d = n(393238),
    u = n(493773),
    c = n(358221),
    h = n(569545),
    _ = n(199902),
    p = n(314897),
    f = n(592125),
    m = n(355863),
    g = n(944486),
    v = n(237997),
    E = n(444295),
    x = n(804570),
    I = n(350663),
    C = n(610394),
    S = n(340101),
    Z = n(981631),
    y = n(388032),
    O = n(667933);
let N = [];
function b(e, t, n, i) {
    let l = (i - 1) * I.z;
    return e === S.C5.HORIZONTAL ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
}
function T(e) {
    let { id: t, size: n, locked: T, padding: w, borderWidth: A, opacity: j, horizontal: k, pinned: R, anchorTop: L, anchorLeft: D } = e,
        P = 2 * w + 2 * A,
        { width: M, height: z } = {
            width: 'number' == typeof n.width ? n.width : 256,
            height: 'number' == typeof n.height ? n.height : 144
        },
        V = (0, r.e7)([g.Z], () => g.Z.getVoiceChannelId()),
        { width: W, height: U, ref: F } = (0, d.Z)(),
        B = (0, r.e7)(
            [m.Z],
            () => {
                var e;
                let n = m.Z.getWidget(t);
                return !!(0, S.ZL)(n) && (null === (e = n.meta.showAllStreams) || void 0 === e || e);
            },
            [t]
        ),
        G = !k,
        H = (0, r.e7)([f.Z], () => f.Z.getChannel(V)),
        Y = (0, r.e7)([p.default], () => p.default.getId()),
        Q = (L && G) || (D && k),
        K = (!L && G) || (!D && k),
        {
            participantsVersion: X,
            streamParticipants: J,
            participantIds: q
        } = (0, r.cj)(
            [_.Z, c.Z],
            () => {
                if (null == V)
                    return {
                        streamParticipants: N,
                        participantsVersion: -1,
                        participantIds: []
                    };
                let e = new Set(_.Z.getAllActiveStreamsForChannel(V).map((e) => (0, h.V9)(e))),
                    t = (t) => e.has((0, h.V9)(t.stream)),
                    n = c.Z.getStreamParticipants(V).filter((e) => e.user.id !== Y && (!!B || t(e)));
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
                        participantsVersion: c.Z.getParticipantsVersion(V)
                    }
                );
            },
            [V, Y, B, Q, K]
        ),
        $ = J.length,
        ee = null == H || 0 === $,
        et = k ? S.C5.HORIZONTAL : S.C5.VERTICAL,
        { tileWidth: en, layout: ei } = (function (e, t, n, i, r) {
            let o = (function (e, t, n, i) {
                    let l = b(S.C5.HORIZONTAL, e, t, n),
                        r = b(S.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case S.C5.VERTICAL:
                            return r;
                        case S.C5.HORIZONTAL:
                            return l;
                    }
                    let o = ((9 * r) / 16 + I.z) * n - I.z;
                    return e > (16 * t) / 9 ? l : o <= t ? r : (9 * l) / 16 <= t ? l : r;
                })(n, i, t, r),
                a = b(S.C5.VERTICAL, n, i, t),
                s = null != r ? r : o === a ? S.C5.VERTICAL : S.C5.HORIZONTAL,
                [d, u] = l.useState(o);
            return (
                l.useEffect(() => {
                    e || u(o);
                }, [e, o]),
                {
                    layout: s,
                    tileWidth: d
                }
            );
        })(!1, J.length, null != W ? W : M - P, null != U ? U : z - P, et),
        el = {
            id: t,
            width: M,
            height: z,
            sizeOffset: P,
            layout: ei,
            padding: w,
            participants: J.length
        };
    !(function (e) {
        let { id: t, streamParticipants: n, layout: i, widgetLayoutSpecs: r } = e,
            o = l.useRef(r);
        l.useEffect(() => {
            o.current = r;
        });
        let s = n.length;
        l.useEffect(() => {
            let { id: e, width: t, height: n, sizeOffset: i, layout: l, padding: r } = o.current;
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
            if (l === S.C5.HORIZONTAL) {
                let t = (16 / 9) * (n - i);
                (0, a.nv)({
                    widgetId: e,
                    size: {
                        fixed: !0,
                        height: n,
                        width: t * s + r * (s - 1) + i
                    }
                });
            } else {
                let n = (9 / 16) * (t - i);
                (0, a.nv)({
                    widgetId: e,
                    size: {
                        fixed: !0,
                        width: t,
                        height: n * s + r * (s - 1) + i
                    }
                });
            }
        }, [s]),
            l.useEffect(() => {
                if (o.current.participants <= 1) return;
                let { id: e, width: t, height: n, sizeOffset: l, padding: r, participants: s } = o.current;
                if (i === S.C5.HORIZONTAL) {
                    let n = t - l;
                    (0, a.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: n * s + r * (s - 1) + l,
                            height: (9 / 16) * n + l
                        }
                    });
                } else {
                    let t = n - l;
                    (0, a.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: (16 / 9) * t + l,
                            height: t * s + r * (s - 1) + l
                        }
                    });
                }
            }, [i]),
            l.useEffect(
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
        widgetLayoutSpecs: el
    }),
        l.useEffect(() => {
            s.Z.setGpuBoostRequested(C.zS.OVERLAY_VIDEO_STREAM_RENDERING, !ee);
        }, [ee]),
        (0, u.ZP)(() => () => {
            s.Z.setGpuBoostRequested(C.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
        });
    let [er, eo] = l.useState(new Set());
    l.useEffect(() => {
        -1 !== X &&
            eo((e) => {
                let t = new Set(q);
                return Array.from(e).filter((e) => !t.has(e)).length > 0 || Array.from(t).filter((t) => !e.has(t)).length > 0 ? t : e;
            });
    }, [q, X]);
    let ea = R || !T;
    return (l.useEffect(() => {
        0 !== er.size &&
            ea &&
            (0, E.zi)(Z.Odu.VIDEO, {
                locked: v.Z.isInstanceLocked(),
                shownUserIds: Array.from(er),
                liveUserIds: Array.from(er),
                contentInventoryIds: []
            });
    }, [er, ea]),
    ee && T)
        ? null
        : ee && !T
          ? T
              ? null
              : (0, i.jsx)(x.E, {
                    emptyText: y.intl.string(y.t['T6+rX1']),
                    icon: o.hGI,
                    absolute: !0
                })
          : (0, i.jsx)('div', {
                className: O.goLiveGridContainer,
                style: { opacity: j },
                ref: F,
                children: (0, i.jsx)(I.Z, {
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
