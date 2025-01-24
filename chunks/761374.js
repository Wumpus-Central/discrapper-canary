n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(765250),
    s = n(13245),
    c = n(393238),
    d = n(493773),
    u = n(358221),
    h = n(569545),
    m = n(199902),
    p = n(314897),
    x = n(592125),
    g = n(355863),
    v = n(944486),
    f = n(804570),
    C = n(350663),
    Z = n(610394),
    b = n(340101),
    j = n(388032),
    _ = n(666540);
let I = [];
function E(e, t, n, i) {
    let r = (i - 1) * C.z;
    return e === b.C5.HORIZONTAL ? Math.min(Math.max((t - r) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - r) / i) * 16) / 9, 256));
}
function k(e) {
    var t;
    let { id: n, size: k, locked: N, padding: w, borderWidth: y, opacity: T, horizontal: S, pinned: L } = e,
        A = 2 * w + 2 * y;
    let { width: O, height: P } = {
            width: 'number' == typeof (t = k).width ? t.width : 256,
            height: 'number' == typeof t.height ? t.height : 144
        },
        V = (0, l.e7)([v.Z], () => v.Z.getVoiceChannelId()),
        { width: M, height: R, ref: D } = (0, c.Z)(),
        z = (0, l.e7)(
            [g.Z],
            () => {
                var e;
                let t = g.Z.getWidget(n);
                return !!(0, b.ZL)(t) && (null === (e = t.meta.showAllStreams) || void 0 === e || e);
            },
            [n]
        ),
        W = (0, l.e7)([x.Z], () => x.Z.getChannel(V)),
        F = (0, l.e7)([p.default], () => p.default.getId()),
        { participantsVersion: G, streamParticipants: B } = (0, l.cj)(
            [m.Z, u.Z],
            () => {
                if (null == V)
                    return {
                        streamParticipants: I,
                        participantsVersion: -1
                    };
                let e = new Set(m.Z.getAllActiveStreamsForChannel(V).map((e) => (0, h.V9)(e))),
                    t = (t) => e.has((0, h.V9)(t.stream)),
                    n = u.Z.getStreamParticipants(V).filter((t) => t.user.id !== F && (!!z || e.has((0, h.V9)(t.stream))));
                return (
                    n.sort((e, n) => (t(e) && !t(n) ? -1 : !t(e) && t(n) ? 1 : e.user.username.localeCompare(n.user.username))),
                    {
                        streamParticipants: n,
                        activeStreams: e,
                        participantsVersion: u.Z.getParticipantsVersion(V)
                    }
                );
            },
            [V, F, z]
        ),
        U = B.length,
        Y = null == W || 0 === U,
        { tileWidth: H, layout: K } = (function (e, t, n, i, l) {
            let o = (function (e, t, n, i) {
                    let r = E(b.C5.HORIZONTAL, e, t, n),
                        l = E(b.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case b.C5.VERTICAL:
                            return l;
                        case b.C5.HORIZONTAL:
                            return r;
                    }
                    let o = ((9 * l) / 16 + C.z) * n - C.z;
                    return e > (16 * t) / 9 ? r : o <= t ? l : (9 * r) / 16 <= t ? r : l;
                })(n, i, t, l),
                a = E(b.C5.VERTICAL, n, i, t),
                s = null != l ? l : o === a ? b.C5.VERTICAL : b.C5.HORIZONTAL,
                [c, d] = r.useState(o);
            return (
                r.useEffect(() => {
                    !e && d(o);
                }, [e, o]),
                {
                    layout: s,
                    tileWidth: c
                }
            );
        })(!1, U, null != M ? M : O - A, null != R ? R : P - A, S ? b.C5.HORIZONTAL : b.C5.VERTICAL),
        X = {
            id: n,
            width: O,
            height: P,
            sizeOffset: A,
            layout: K,
            padding: w,
            participants: B.length
        };
    return (!(function (e) {
        let { id: t, streamParticipants: n, layout: i, widgetLayoutSpecs: l } = e,
            o = r.useRef(l);
        r.useEffect(() => void (o.current = l)),
            r.useEffect(() => {
                let { id: e, width: t, height: i, sizeOffset: r, layout: l, padding: s } = o.current;
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
                if (l === b.C5.HORIZONTAL) {
                    let t = (16 / 9) * (i - r);
                    (0, a.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            height: i,
                            width: t * n.length + s * (n.length - 1) + r
                        }
                    });
                } else {
                    let i = (9 / 16) * (t - r);
                    (0, a.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: t,
                            height: i * n.length + s * (n.length - 1) + r
                        }
                    });
                }
            }, [n.length]),
            r.useEffect(() => {
                if (o.current.participants <= 1) return;
                let { id: e, width: t, height: n, sizeOffset: r, padding: l, participants: s } = o.current;
                if (i === b.C5.HORIZONTAL) {
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
        id: n,
        streamParticipants: B,
        layout: K,
        widgetLayoutSpecs: X
    }),
    r.useEffect(() => {
        s.Z.setGpuBoostRequested(Z.zS.OVERLAY_VIDEO_STREAM_RENDERING, !Y);
    }, [Y]),
    (0, d.Z)(() => () => {
        s.Z.setGpuBoostRequested(Z.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    Y && N)
        ? null
        : Y && !N
          ? N
              ? null
              : (0, i.jsx)(f.E, {
                    emptyText: j.intl.string(j.t['T6+rX1']),
                    icon: o.ScreenArrowIcon,
                    absolute: !0
                })
          : (0, i.jsx)('div', {
                className: _.goLiveGridContainer,
                style: { opacity: T },
                ref: D,
                children: (0, i.jsx)(C.Z, {
                    widgetId: n,
                    tileWidth: H,
                    locked: N,
                    layout: K,
                    streamParticipants: B,
                    participantsVersion: G,
                    pinned: L
                })
            });
}
