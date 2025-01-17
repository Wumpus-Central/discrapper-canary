n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(442837),
    r = n(481060),
    a = n(765250),
    s = n(13245),
    c = n(393238),
    u = n(493773),
    d = n(358221),
    h = n(569545),
    f = n(199902),
    p = n(314897),
    m = n(592125),
    v = n(355863),
    x = n(944486),
    g = n(804570),
    C = n(350663),
    Z = n(610394),
    _ = n(340101),
    I = n(388032),
    j = n(666540);
let E = [];
function b(e, t, n, i) {
    let l = (i - 1) * C.z;
    return e === _.C5.HORIZONTAL ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
}
function w(e) {
    var t;
    let { id: n, size: w, locked: N, padding: k, borderWidth: y, opacity: L, horizontal: S, pinned: T } = e,
        A = 2 * k + 2 * y;
    let { width: O, height: V } = {
            width: 'number' == typeof (t = w).width ? t.width : 256,
            height: 'number' == typeof t.height ? t.height : 144
        },
        M = (0, o.e7)([x.Z], () => x.Z.getVoiceChannelId()),
        { width: P, height: R, ref: D } = (0, c.Z)(),
        W = (0, o.e7)(
            [v.Z],
            () => {
                var e;
                let t = v.Z.getWidget(n);
                return !!(0, _.ZL)(t) && (null === (e = t.meta.showAllStreams) || void 0 === e || e);
            },
            [n]
        ),
        z = (0, o.e7)([m.Z], () => m.Z.getChannel(M)),
        F = (0, o.e7)([p.default], () => p.default.getId()),
        { participantsVersion: G, streamParticipants: U } = (0, o.cj)(
            [f.Z, d.Z],
            () => {
                if (null == M)
                    return {
                        streamParticipants: E,
                        participantsVersion: -1
                    };
                let e = new Set(f.Z.getAllActiveStreamsForChannel(M).map((e) => (0, h.V9)(e))),
                    t = (t) => e.has((0, h.V9)(t.stream)),
                    n = d.Z.getStreamParticipants(M).filter((t) => t.user.id !== F && (!!W || e.has((0, h.V9)(t.stream))));
                return (
                    n.sort((e, n) => (t(e) && !t(n) ? -1 : !t(e) && t(n) ? 1 : e.user.username.localeCompare(n.user.username))),
                    {
                        streamParticipants: n,
                        activeStreams: e,
                        participantsVersion: d.Z.getParticipantsVersion(M)
                    }
                );
            },
            [M, F, W]
        ),
        B = U.length,
        Y = null == z || 0 === B,
        { tileWidth: H, layout: X } = (function (e, t, n, i, o) {
            let r = (function (e, t, n, i) {
                    let l = b(_.C5.HORIZONTAL, e, t, n),
                        o = b(_.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case _.C5.VERTICAL:
                            return o;
                        case _.C5.HORIZONTAL:
                            return l;
                    }
                    let r = ((9 * o) / 16 + C.z) * n - C.z;
                    return e > (16 * t) / 9 ? l : r <= t ? o : (9 * l) / 16 <= t ? l : o;
                })(n, i, t, o),
                a = b(_.C5.VERTICAL, n, i, t),
                s = null != o ? o : r === a ? _.C5.VERTICAL : _.C5.HORIZONTAL,
                [c, u] = l.useState(r);
            return (
                l.useEffect(() => {
                    !e && u(r);
                }, [e, r]),
                {
                    layout: s,
                    tileWidth: c
                }
            );
        })(!1, B, null != P ? P : O - A, null != R ? R : V - A, S ? _.C5.HORIZONTAL : _.C5.VERTICAL),
        K = {
            id: n,
            width: O,
            height: V,
            sizeOffset: A,
            layout: X,
            padding: k,
            participants: U.length
        };
    return (!(function (e) {
        let { id: t, streamParticipants: n, layout: i, widgetLayoutSpecs: o } = e,
            r = l.useRef(o);
        l.useEffect(() => void (r.current = o)),
            l.useEffect(() => {
                let { id: e, width: t, height: i, sizeOffset: l, layout: o, padding: s } = r.current;
                if (0 === n.length) {
                    (256 !== t || 144 !== i) &&
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
                if (o === _.C5.HORIZONTAL) {
                    let t = (16 / 9) * (i - l);
                    (0, a.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            height: i,
                            width: t * n.length + s * (n.length - 1) + l
                        }
                    });
                } else {
                    let i = (9 / 16) * (t - l);
                    (0, a.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: t,
                            height: i * n.length + s * (n.length - 1) + l
                        }
                    });
                }
            }, [n.length]),
            l.useEffect(() => {
                if (r.current.participants <= 1) return;
                let { id: e, width: t, height: n, sizeOffset: l, padding: o, participants: s } = r.current;
                if (i === _.C5.HORIZONTAL) {
                    let n = t - l;
                    (0, a.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: n * s + o * (s - 1) + l,
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
                            height: t * s + o * (s - 1) + l
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
        id: n,
        streamParticipants: U,
        layout: X,
        widgetLayoutSpecs: K
    }),
    l.useEffect(() => {
        s.Z.setGpuBoostRequested(Z.zS.OVERLAY_VIDEO_STREAM_RENDERING, !Y);
    }, [Y]),
    (0, u.Z)(() => () => {
        s.Z.setGpuBoostRequested(Z.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    Y && N)
        ? null
        : Y && !N
          ? N
              ? null
              : (0, i.jsx)(g.E, {
                    emptyText: I.intl.string(I.t['T6+rX1']),
                    icon: r.ScreenArrowIcon,
                    absolute: !0
                })
          : (0, i.jsx)('div', {
                className: j.goLiveGridContainer,
                style: { opacity: L },
                ref: D,
                children: (0, i.jsx)(C.Z, {
                    widgetId: n,
                    tileWidth: H,
                    locked: N,
                    layout: X,
                    streamParticipants: U,
                    participantsVersion: G,
                    pinned: T
                })
            });
}
