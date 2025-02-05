n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(481060),
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
    v = n(804570),
    x = n(350663),
    E = n(610394),
    C = n(340101),
    Z = n(388032),
    S = n(666540);
let I = [];
function y(e, t, n, i) {
    let r = (i - 1) * x.z;
    return e === C.C5.HORIZONTAL ? Math.min(Math.max((t - r) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - r) / i) * 16) / 9, 256));
}
function b(e) {
    let { id: t, size: n, locked: b, padding: w, borderWidth: N, opacity: O, horizontal: T, pinned: j, anchorTop: k, anchorLeft: R } = e,
        A = 2 * w + 2 * N,
        { width: L, height: P } = {
            width: 'number' == typeof n.width ? n.width : 256,
            height: 'number' == typeof n.height ? n.height : 144
        },
        D = (0, o.e7)([m.Z], () => m.Z.getVoiceChannelId()),
        { width: M, height: z, ref: V } = (0, d.Z)(),
        W = (0, o.e7)(
            [g.Z],
            () => {
                var e;
                let n = g.Z.getWidget(t);
                return !!(0, C.ZL)(n) && (null === (e = n.meta.showAllStreams) || void 0 === e || e);
            },
            [t]
        ),
        F = !T,
        U = (0, o.e7)([f.Z], () => f.Z.getChannel(D)),
        H = (0, o.e7)([p.default], () => p.default.getId()),
        B = (k && F) || (R && T),
        G = (!k && F) || (!R && T),
        { participantsVersion: Y, streamParticipants: X } = (0, o.cj)(
            [_.Z, u.Z],
            () => {
                if (null == D)
                    return {
                        streamParticipants: I,
                        participantsVersion: -1
                    };
                let e = new Set(_.Z.getAllActiveStreamsForChannel(D).map((e) => (0, h.V9)(e))),
                    t = (t) => e.has((0, h.V9)(t.stream)),
                    n = u.Z.getStreamParticipants(D).filter((e) => e.user.id !== H && (!!W || t(e)));
                return (
                    n.sort((e, n) => {
                        if (B) {
                            if (t(e) && !t(n)) return -1;
                            if (!t(e) && t(n)) return 1;
                        } else if (G) {
                            if (t(e) && !t(n)) return 1;
                            if (!t(e) && t(n)) return -1;
                        }
                        return e.user.username.localeCompare(n.user.username);
                    }),
                    {
                        streamParticipants: n,
                        activeStreams: e,
                        participantsVersion: u.Z.getParticipantsVersion(D)
                    }
                );
            },
            [D, H, W, B, G]
        ),
        K = X.length,
        Q = null == U || 0 === K,
        J = T ? C.C5.HORIZONTAL : C.C5.VERTICAL,
        { tileWidth: q, layout: $ } = (function (e, t, n, i, o) {
            let l = (function (e, t, n, i) {
                    let r = y(C.C5.HORIZONTAL, e, t, n),
                        o = y(C.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case C.C5.VERTICAL:
                            return o;
                        case C.C5.HORIZONTAL:
                            return r;
                    }
                    let l = ((9 * o) / 16 + x.z) * n - x.z;
                    return e > (16 * t) / 9 ? r : l <= t ? o : (9 * r) / 16 <= t ? r : o;
                })(n, i, t, o),
                a = y(C.C5.VERTICAL, n, i, t),
                s = null != o ? o : l === a ? C.C5.VERTICAL : C.C5.HORIZONTAL,
                [d, c] = r.useState(l);
            return (
                r.useEffect(() => {
                    e || c(l);
                }, [e, l]),
                {
                    layout: s,
                    tileWidth: d
                }
            );
        })(!1, X.length, null != M ? M : L - A, null != z ? z : P - A, J),
        ee = {
            id: t,
            width: L,
            height: P,
            sizeOffset: A,
            layout: $,
            padding: w,
            participants: X.length
        };
    return (!(function (e) {
        let { id: t, streamParticipants: n, layout: i, widgetLayoutSpecs: o } = e,
            l = r.useRef(o);
        r.useEffect(() => void (l.current = o));
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
            if (r === C.C5.HORIZONTAL) {
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
                if (i === C.C5.HORIZONTAL) {
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
        streamParticipants: X,
        layout: $,
        widgetLayoutSpecs: ee
    }),
    r.useEffect(() => {
        s.Z.setGpuBoostRequested(E.zS.OVERLAY_VIDEO_STREAM_RENDERING, !Q);
    }, [Q]),
    (0, c.ZP)(() => () => {
        s.Z.setGpuBoostRequested(E.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    Q && b)
        ? null
        : Q && !b
          ? b
              ? null
              : (0, i.jsx)(v.E, {
                    emptyText: Z.intl.string(Z.t['T6+rX1']),
                    icon: l.hGI,
                    absolute: !0
                })
          : (0, i.jsx)('div', {
                className: S.goLiveGridContainer,
                style: { opacity: O },
                ref: V,
                children: (0, i.jsx)(x.Z, {
                    widgetId: t,
                    tileWidth: q,
                    locked: b,
                    layout: $,
                    streamParticipants: X,
                    participantsVersion: Y,
                    pinned: j
                })
            });
}
