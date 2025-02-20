n.d(t, { Z: () => Z }), n(47120), n(230036);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(481060),
    a = n(765250),
    s = n(13245),
    c = n(393238),
    u = n(493773),
    d = n(358221),
    p = n(569545),
    f = n(199902),
    h = n(314897),
    g = n(592125),
    _ = n(355863),
    m = n(944486),
    v = n(237997),
    O = n(444295),
    b = n(804570),
    y = n(350663),
    E = n(610394),
    x = n(340101),
    S = n(981631),
    I = n(388032),
    C = n(507731);
let j = [];
function w(e, t, n, i) {
    let r = (i - 1) * y.z;
    return e === x.C5.HORIZONTAL ? Math.min(Math.max((t - r) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - r) / i) * 16) / 9, 256));
}
function Z(e) {
    let { id: t, size: n, locked: Z, padding: N, borderWidth: P, opacity: T, horizontal: k, pinned: A, anchorTop: D, anchorLeft: R, showEmpty: L = !0 } = e,
        W = 2 * N + 2 * P,
        { width: M, height: z } = {
            width: 'number' == typeof n.width ? n.width : 256,
            height: 'number' == typeof n.height ? n.height : 144
        },
        V = (0, o.e7)([m.Z], () => m.Z.getVoiceChannelId()),
        { width: U, height: F, ref: B } = (0, c.Z)(),
        G = (0, o.e7)(
            [_.Z],
            () => {
                var e;
                let n = _.Z.getWidget(t);
                return !!(0, x.ZL)(n) && (null === (e = n.meta.showAllStreams) || void 0 === e || e);
            },
            [t]
        ),
        H = !k,
        Y = (0, o.e7)([g.Z], () => g.Z.getChannel(V)),
        Q = (0, o.e7)([h.default], () => h.default.getId()),
        K = (D && H) || (R && k),
        X = (!D && H) || (!R && k),
        {
            participantsVersion: J,
            streamParticipants: q,
            participantIds: $
        } = (0, o.cj)(
            [f.Z, d.Z],
            () => {
                if (null == V)
                    return {
                        streamParticipants: j,
                        participantsVersion: -1,
                        participantIds: []
                    };
                let e = new Set(f.Z.getAllActiveStreamsForChannel(V).map((e) => (0, p.V9)(e))),
                    t = (t) => e.has((0, p.V9)(t.stream)),
                    n = d.Z.getStreamParticipants(V).filter((e) => e.user.id !== Q && (!!G || t(e)));
                return (
                    n.sort((e, n) => {
                        if (K) {
                            if (t(e) && !t(n)) return -1;
                            if (!t(e) && t(n)) return 1;
                        } else if (X) {
                            if (t(e) && !t(n)) return 1;
                            if (!t(e) && t(n)) return -1;
                        }
                        return e.user.username.localeCompare(n.user.username);
                    }),
                    {
                        streamParticipants: n,
                        activeStreams: e,
                        participantIds: n.map((e) => e.user.id),
                        participantsVersion: d.Z.getParticipantsVersion(V)
                    }
                );
            },
            [V, Q, G, K, X]
        ),
        ee = q.length,
        et = null == Y || 0 === ee,
        en = k ? x.C5.HORIZONTAL : x.C5.VERTICAL,
        { tileWidth: ei, layout: er } = (function (e, t, n, i, o) {
            let l = (function (e, t, n, i) {
                    let r = w(x.C5.HORIZONTAL, e, t, n),
                        o = w(x.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case x.C5.VERTICAL:
                            return o;
                        case x.C5.HORIZONTAL:
                            return r;
                    }
                    let l = ((9 * o) / 16 + y.z) * n - y.z;
                    return e > (16 * t) / 9 ? r : l <= t ? o : (9 * r) / 16 <= t ? r : o;
                })(n, i, t, o),
                a = w(x.C5.VERTICAL, n, i, t),
                s = null != o ? o : l === a ? x.C5.VERTICAL : x.C5.HORIZONTAL,
                [c, u] = r.useState(l);
            return (
                r.useEffect(() => {
                    e || u(l);
                }, [e, l]),
                {
                    layout: s,
                    tileWidth: c
                }
            );
        })(!1, q.length, null != U ? U : M - W, null != F ? F : z - W, en),
        eo = {
            id: t,
            width: M,
            height: z,
            sizeOffset: W,
            layout: er,
            padding: N,
            participants: q.length
        };
    !(function (e) {
        let { id: t, streamParticipants: n, layout: i, widgetLayoutSpecs: o } = e,
            l = r.useRef(o);
        r.useEffect(() => {
            l.current = o;
        });
        let s = n.length;
        r.useEffect(() => {
            let { id: e, width: t, height: n, sizeOffset: i, layout: r, padding: o } = l.current;
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
            if (r === x.C5.HORIZONTAL) {
                let t = (16 / 9) * (n - i);
                (0, a.nv)({
                    widgetId: e,
                    size: {
                        fixed: !0,
                        height: n,
                        width: t * s + o * (s - 1) + i
                    }
                });
            } else {
                let n = (9 / 16) * (t - i);
                (0, a.nv)({
                    widgetId: e,
                    size: {
                        fixed: !0,
                        width: t,
                        height: n * s + o * (s - 1) + i
                    }
                });
            }
        }, [s]),
            r.useEffect(() => {
                if (l.current.participants <= 1) return;
                let { id: e, width: t, height: n, sizeOffset: r, padding: o, participants: s } = l.current;
                if (i === x.C5.HORIZONTAL) {
                    let n = t - r;
                    (0, a.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: n * s + o * (s - 1) + r,
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
                            height: t * s + o * (s - 1) + r
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
        streamParticipants: q,
        layout: er,
        widgetLayoutSpecs: eo
    }),
        r.useEffect(() => {
            s.Z.setGpuBoostRequested(E.zS.OVERLAY_VIDEO_STREAM_RENDERING, !et);
        }, [et]),
        (0, u.ZP)(() => () => {
            s.Z.setGpuBoostRequested(E.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
        });
    let [el, ea] = r.useState(new Set());
    r.useEffect(() => {
        -1 !== J &&
            ea((e) => {
                let t = new Set($);
                return Array.from(e).filter((e) => !t.has(e)).length > 0 || Array.from(t).filter((t) => !e.has(t)).length > 0 ? t : e;
            });
    }, [$, J]);
    let es = A || !Z;
    return (r.useEffect(() => {
        0 !== el.size &&
            es &&
            (0, O.zi)(S.Odu.VIDEO, {
                locked: v.Z.isInstanceLocked(),
                shownUserIds: Array.from(el),
                liveUserIds: Array.from(el),
                contentInventoryIds: []
            });
    }, [el, es]),
    et && Z)
        ? null
        : et && !Z
          ? L
              ? Z
                  ? null
                  : (0, i.jsx)(b.E, {
                        emptyText: I.NW.string(I.t['T6+rX1']),
                        icon: l.hGI,
                        absolute: !0
                    })
              : null
          : (0, i.jsx)('div', {
                className: C.goLiveGridContainer,
                style: { opacity: T },
                ref: B,
                children: (0, i.jsx)(y.Z, {
                    widgetId: t,
                    tileWidth: ei,
                    locked: Z,
                    layout: er,
                    streamParticipants: q,
                    participantsVersion: J,
                    pinned: A
                })
            });
}
