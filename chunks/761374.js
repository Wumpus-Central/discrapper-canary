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
    f = n(199902),
    h = n(314897),
    g = n(592125),
    _ = n(355863),
    m = n(944486),
    v = n(804570),
    O = n(350663),
    b = n(610394),
    y = n(340101),
    E = n(388032),
    x = n(507731);
let S = [];
function I(e, t, n, i) {
    let r = (i - 1) * O.z;
    return e === y.C5.HORIZONTAL ? Math.min(Math.max((t - r) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - r) / i) * 16) / 9, 256));
}
function C(e) {
    let { id: t, size: n, locked: C, padding: j, borderWidth: w, opacity: Z, horizontal: N, pinned: P, anchorTop: T, anchorLeft: k, showEmpty: A = !0 } = e,
        D = 2 * j + 2 * w,
        { width: L, height: R } = {
            width: 'number' == typeof n.width ? n.width : 256,
            height: 'number' == typeof n.height ? n.height : 144
        },
        W = (0, o.e7)([m.Z], () => m.Z.getVoiceChannelId()),
        { width: M, height: z, ref: V } = (0, c.Z)(),
        U = (0, o.e7)(
            [_.Z],
            () => {
                var e;
                let n = _.Z.getWidget(t);
                return !!(0, y.ZL)(n) && (null === (e = n.meta.showAllStreams) || void 0 === e || e);
            },
            [t]
        ),
        F = !N,
        B = (0, o.e7)([g.Z], () => g.Z.getChannel(W)),
        G = (0, o.e7)([h.default], () => h.default.getId()),
        H = (T && F) || (k && N),
        Y = (!T && F) || (!k && N),
        {
            participantsVersion: Q,
            activeStreams: K,
            streamParticipants: X
        } = (0, o.cj)(
            [f.Z, d.Z],
            () => {
                if (null == W)
                    return {
                        streamParticipants: S,
                        participantsVersion: -1,
                        activeStreams: new Set()
                    };
                let e = new Set(f.Z.getAllActiveStreamsForChannel(W).map((e) => (0, p.V9)(e))),
                    t = (t) => e.has((0, p.V9)(t.stream)),
                    n = d.Z.getStreamParticipants(W).filter((e) => e.user.id !== G && (!!U || t(e)));
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
            [W, G, U, H, Y]
        ),
        J = X.length,
        q = null == B || (0 === K.size && C) || (0 === J && !C),
        $ = N ? y.C5.HORIZONTAL : y.C5.VERTICAL,
        { tileWidth: ee, layout: et } = (function (e, t, n, i, o) {
            let l = (function (e, t, n, i) {
                    let r = I(y.C5.HORIZONTAL, e, t, n),
                        o = I(y.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case y.C5.VERTICAL:
                            return o;
                        case y.C5.HORIZONTAL:
                            return r;
                    }
                    let l = ((9 * o) / 16 + O.z) * n - O.z;
                    return e > (16 * t) / 9 ? r : l <= t ? o : (9 * r) / 16 <= t ? r : o;
                })(n, i, t, o),
                a = I(y.C5.VERTICAL, n, i, t),
                s = null != o ? o : l === a ? y.C5.VERTICAL : y.C5.HORIZONTAL,
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
        })(!1, X.length, null != M ? M : L - D, null != z ? z : R - D, $),
        en = {
            id: t,
            width: L,
            height: R,
            sizeOffset: D,
            layout: et,
            padding: j,
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
            if (r === y.C5.HORIZONTAL) {
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
                if (i === y.C5.HORIZONTAL) {
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
    q && C)
        ? null
        : q && !C
          ? A
              ? C
                  ? null
                  : (0, i.jsx)(v.E, {
                        emptyText: E.NW.string(E.t['T6+rX1']),
                        icon: l.hGI,
                        absolute: !0
                    })
              : null
          : (0, i.jsx)('div', {
                className: x.goLiveGridContainer,
                style: { opacity: Z },
                ref: V,
                children: (0, i.jsx)(O.Z, {
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
