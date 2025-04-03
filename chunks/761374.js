n.d(t, { Z: () => C }), n(47120), n(230036);
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
    h = n(199902),
    f = n(314897),
    m = n(592125),
    g = n(355863),
    y = n(944486),
    O = n(804570),
    v = n(350663),
    b = n(610394),
    _ = n(340101),
    E = n(388032),
    x = n(832985);
let I = [];
function j(e, t, n, i) {
    let r = (i - 1) * v.z;
    return e === _.C5.HORIZONTAL ? Math.min(Math.max((t - r) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - r) / i) * 16) / 9, 256));
}
function C(e) {
    let { id: t, size: n, locked: C, padding: S, borderWidth: N, opacity: Z, horizontal: w, pinned: P, anchorTop: T, anchorLeft: k, showEmpty: D = !0 } = e,
        A = 2 * S + 2 * N,
        { width: L, height: R } = {
            width: 'number' == typeof n.width ? n.width : 256,
            height: 'number' == typeof n.height ? n.height : 144
        },
        W = (0, o.e7)([y.Z], () => y.Z.getVoiceChannelId()),
        { width: M, height: V, ref: z } = (0, c.Z)(),
        U = (0, o.e7)(
            [g.Z],
            () => {
                var e;
                let n = g.Z.getWidget(t);
                return !!(0, _.ZL)(n) && (null == (e = n.meta.showAllStreams) || e);
            },
            [t]
        ),
        G = !w,
        F = (0, o.e7)([m.Z], () => m.Z.getChannel(W)),
        B = (0, o.e7)([f.default], () => f.default.getId()),
        H = (T && G) || (k && w),
        Y = (!T && G) || (!k && w),
        {
            participantsVersion: Q,
            activeStreams: K,
            streamParticipants: X
        } = (0, o.cj)(
            [h.Z, d.Z],
            () => {
                if (null == W)
                    return {
                        streamParticipants: I,
                        participantsVersion: -1,
                        activeStreams: new Set()
                    };
                let e = new Set(h.Z.getAllActiveStreamsForChannel(W).map((e) => (0, p.V9)(e))),
                    t = (t) => e.has((0, p.V9)(t.stream)),
                    n = d.Z.getStreamParticipants(W).filter((e) => e.user.id !== B && (!!U || t(e)));
                return (
                    n.sort((e, n) => {
                        if (H) {
                            if (t(e) && !t(n)) return -1;
                            if (!t(e) && t(n)) return 1;
                        } else if (Y) {
                            if (t(e) && !t(n)) return 1;
                            if (!t(e) && t(n)) return -1;
                        }
                        return e.user.username.localeCompare(n.user.username);
                    }),
                    {
                        streamParticipants: n,
                        activeStreams: e,
                        participantsVersion: d.Z.getParticipantsVersion(W)
                    }
                );
            },
            [W, B, U, H, Y]
        ),
        J = X.length,
        q = null == F || (0 === K.size && C) || (0 === J && !C),
        $ = w ? _.C5.HORIZONTAL : _.C5.VERTICAL,
        { tileWidth: ee, layout: et } = (function (e, t, n, i, o) {
            let l = (function (e, t, n, i) {
                    let r = j(_.C5.HORIZONTAL, e, t, n),
                        o = j(_.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case _.C5.VERTICAL:
                            return o;
                        case _.C5.HORIZONTAL:
                            return r;
                    }
                    let l = ((9 * o) / 16 + v.z) * n - v.z;
                    return e > (16 * t) / 9 ? r : l <= t ? o : (9 * r) / 16 <= t ? r : o;
                })(n, i, t, o),
                a = j(_.C5.VERTICAL, n, i, t),
                s = null != o ? o : l === a ? _.C5.VERTICAL : _.C5.HORIZONTAL,
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
        })(!1, X.length, null != M ? M : L - A, null != V ? V : R - A, $),
        en = {
            id: t,
            width: L,
            height: R,
            sizeOffset: A,
            layout: et,
            padding: S,
            participants: X.length
        };
    return (!(function (e) {
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
            if (r === _.C5.HORIZONTAL) {
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
                if (i === _.C5.HORIZONTAL) {
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
        layout: et,
        widgetLayoutSpecs: en
    }),
    r.useEffect(() => {
        s.Z.setGpuBoostRequested(b.zS.OVERLAY_VIDEO_STREAM_RENDERING, !q);
    }, [q]),
    (0, u.ZP)(() => () => {
        s.Z.setGpuBoostRequested(b.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    (q || !P) && C)
        ? null
        : q && !C
          ? D
              ? C
                  ? null
                  : (0, i.jsx)(O.E, {
                        emptyText: E.NW.string(E.t['T6+rX1']),
                        icon: l.hGI,
                        absolute: !0
                    })
              : null
          : (0, i.jsx)('div', {
                className: x.goLiveGridContainer,
                style: { opacity: Z },
                ref: z,
                children: (0, i.jsx)(v.Z, {
                    widgetId: t,
                    tileWidth: ee,
                    locked: C,
                    layout: et,
                    activeStreams: K,
                    streamParticipants: X,
                    participantsVersion: Q,
                    pinned: P
                })
            });
}
