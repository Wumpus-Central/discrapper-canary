n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(765250),
    s = n(13245),
    d = n(393238),
    c = n(493773),
    u = n(358221),
    h = n(569545),
    _ = n(199902),
    p = n(314897),
    g = n(592125),
    f = n(355863),
    m = n(944486),
    v = n(804570),
    x = n(350663),
    E = n(610394),
    Z = n(340101),
    C = n(388032),
    I = n(666540);
let S = [];
function b(e, t, n, i) {
    let l = (i - 1) * x.z;
    return e === Z.C5.HORIZONTAL ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
}
function y(e) {
    let { id: t, size: n, locked: y, padding: N, borderWidth: w, opacity: T, horizontal: O, pinned: j, anchorTop: k, anchorLeft: R } = e,
        A = 2 * N + 2 * w,
        { width: L, height: M } = {
            width: 'number' == typeof n.width ? n.width : 256,
            height: 'number' == typeof n.height ? n.height : 144
        },
        P = (0, r.e7)([m.Z], () => m.Z.getVoiceChannelId()),
        { width: D, height: z, ref: V } = (0, d.Z)(),
        W = (0, r.e7)(
            [f.Z],
            () => {
                var e;
                let n = f.Z.getWidget(t);
                return !!(0, Z.ZL)(n) && (null === (e = n.meta.showAllStreams) || void 0 === e || e);
            },
            [t]
        ),
        F = !O,
        U = (0, r.e7)([g.Z], () => g.Z.getChannel(P)),
        G = (0, r.e7)([p.default], () => p.default.getId()),
        H = (k && F) || (R && O),
        B = (!k && F) || (!R && O),
        { participantsVersion: Y, streamParticipants: K } = (0, r.cj)(
            [_.Z, u.Z],
            () => {
                if (null == P)
                    return {
                        streamParticipants: S,
                        participantsVersion: -1
                    };
                let e = new Set(_.Z.getAllActiveStreamsForChannel(P).map((e) => (0, h.V9)(e))),
                    t = (t) => e.has((0, h.V9)(t.stream)),
                    n = u.Z.getStreamParticipants(P).filter((e) => e.user.id !== G && (!!W || t(e)));
                return (
                    n.sort((e, n) => {
                        if (H) {
                            if (t(e) && !t(n)) return -1;
                            if (!t(e) && t(n)) return 1;
                        } else if (B) {
                            if (t(e) && !t(n)) return 1;
                            if (!t(e) && t(n)) return -1;
                        }
                        return e.user.username.localeCompare(n.user.username);
                    }),
                    {
                        streamParticipants: n,
                        activeStreams: e,
                        participantsVersion: u.Z.getParticipantsVersion(P)
                    }
                );
            },
            [P, G, W, H, B]
        ),
        Q = K.length,
        X = null == U || 0 === Q,
        J = O ? Z.C5.HORIZONTAL : Z.C5.VERTICAL,
        { tileWidth: q, layout: $ } = (function (e, t, n, i, r) {
            let o = (function (e, t, n, i) {
                    let l = b(Z.C5.HORIZONTAL, e, t, n),
                        r = b(Z.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case Z.C5.VERTICAL:
                            return r;
                        case Z.C5.HORIZONTAL:
                            return l;
                    }
                    let o = ((9 * r) / 16 + x.z) * n - x.z;
                    return e > (16 * t) / 9 ? l : o <= t ? r : (9 * l) / 16 <= t ? l : r;
                })(n, i, t, r),
                a = b(Z.C5.VERTICAL, n, i, t),
                s = null != r ? r : o === a ? Z.C5.VERTICAL : Z.C5.HORIZONTAL,
                [d, c] = l.useState(o);
            return (
                l.useEffect(() => {
                    e || c(o);
                }, [e, o]),
                {
                    layout: s,
                    tileWidth: d
                }
            );
        })(!1, K.length, null != D ? D : L - A, null != z ? z : M - A, J),
        ee = {
            id: t,
            width: L,
            height: M,
            sizeOffset: A,
            layout: $,
            padding: N,
            participants: K.length
        };
    return (!(function (e) {
        let { id: t, streamParticipants: n, layout: i, widgetLayoutSpecs: r } = e,
            o = l.useRef(r);
        l.useEffect(() => void (o.current = r));
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
            if (l === Z.C5.HORIZONTAL) {
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
                if (i === Z.C5.HORIZONTAL) {
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
        streamParticipants: K,
        layout: $,
        widgetLayoutSpecs: ee
    }),
    l.useEffect(() => {
        s.Z.setGpuBoostRequested(E.zS.OVERLAY_VIDEO_STREAM_RENDERING, !X);
    }, [X]),
    (0, c.Z)(() => () => {
        s.Z.setGpuBoostRequested(E.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    X && y)
        ? null
        : X && !y
          ? y
              ? null
              : (0, i.jsx)(v.E, {
                    emptyText: C.intl.string(C.t['T6+rX1']),
                    icon: o.hGI,
                    absolute: !0
                })
          : (0, i.jsx)('div', {
                className: I.goLiveGridContainer,
                style: { opacity: T },
                ref: V,
                children: (0, i.jsx)(x.Z, {
                    widgetId: t,
                    tileWidth: q,
                    locked: y,
                    layout: $,
                    streamParticipants: K,
                    participantsVersion: Y,
                    pinned: j
                })
            });
}
