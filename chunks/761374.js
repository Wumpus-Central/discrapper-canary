n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    a = n(481060),
    l = n(765250),
    s = n(13245),
    c = n(393238),
    d = n(493773),
    u = n(358221),
    h = n(569545),
    _ = n(199902),
    m = n(314897),
    g = n(592125),
    p = n(355863),
    f = n(944486),
    x = n(804570),
    v = n(350663),
    C = n(610394),
    b = n(340101),
    Z = n(388032),
    I = n(666540);
let j = [];
function w(e, t, n, i) {
    let r = (i - 1) * v.z;
    return e === b.C5.HORIZONTAL ? Math.min(Math.max((t - r) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - r) / i) * 16) / 9, 256));
}
function y(e) {
    let { id: t, size: n, locked: y, padding: E, borderWidth: k, opacity: N, horizontal: S, pinned: T, anchorTop: O, anchorLeft: P } = e,
        L = 2 * E + 2 * k,
        { width: A, height: R } = {
            width: 'number' == typeof n.width ? n.width : 256,
            height: 'number' == typeof n.height ? n.height : 144
        },
        V = (0, o.e7)([f.Z], () => f.Z.getVoiceChannelId()),
        { width: W, height: M, ref: D } = (0, c.Z)(),
        z = (0, o.e7)(
            [p.Z],
            () => {
                var e;
                let n = p.Z.getWidget(t);
                return !!(0, b.ZL)(n) && (null === (e = n.meta.showAllStreams) || void 0 === e || e);
            },
            [t]
        ),
        F = !S,
        G = (0, o.e7)([g.Z], () => g.Z.getChannel(V)),
        B = (0, o.e7)([m.default], () => m.default.getId()),
        U = (O && F) || (P && S),
        H = (!O && F) || (!P && S),
        { participantsVersion: Y, streamParticipants: X } = (0, o.cj)(
            [_.Z, u.Z],
            () => {
                if (null == V)
                    return {
                        streamParticipants: j,
                        participantsVersion: -1
                    };
                let e = new Set(_.Z.getAllActiveStreamsForChannel(V).map((e) => (0, h.V9)(e))),
                    t = (t) => e.has((0, h.V9)(t.stream)),
                    n = u.Z.getStreamParticipants(V).filter((e) => e.user.id !== B && (!!z || t(e)));
                return (
                    n.sort((e, n) => {
                        if (U) {
                            if (t(e) && !t(n)) return -1;
                            if (!t(e) && t(n)) return 1;
                        } else if (H) {
                            if (t(e) && !t(n)) return 1;
                            if (!t(e) && t(n)) return -1;
                        }
                        return e.user.username.localeCompare(n.user.username);
                    }),
                    {
                        streamParticipants: n,
                        activeStreams: e,
                        participantsVersion: u.Z.getParticipantsVersion(V)
                    }
                );
            },
            [V, B, z, U, H]
        ),
        K = X.length,
        Q = null == G || 0 === K,
        q = S ? b.C5.HORIZONTAL : b.C5.VERTICAL,
        { tileWidth: J, layout: $ } = (function (e, t, n, i, o) {
            let a = (function (e, t, n, i) {
                    let r = w(b.C5.HORIZONTAL, e, t, n),
                        o = w(b.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case b.C5.VERTICAL:
                            return o;
                        case b.C5.HORIZONTAL:
                            return r;
                    }
                    let a = ((9 * o) / 16 + v.z) * n - v.z;
                    return e > (16 * t) / 9 ? r : a <= t ? o : (9 * r) / 16 <= t ? r : o;
                })(n, i, t, o),
                l = w(b.C5.VERTICAL, n, i, t),
                s = null != o ? o : a === l ? b.C5.VERTICAL : b.C5.HORIZONTAL,
                [c, d] = r.useState(a);
            return (
                r.useEffect(() => {
                    e || d(a);
                }, [e, a]),
                {
                    layout: s,
                    tileWidth: c
                }
            );
        })(!1, X.length, null != W ? W : A - L, null != M ? M : R - L, q),
        ee = {
            id: t,
            width: A,
            height: R,
            sizeOffset: L,
            layout: $,
            padding: E,
            participants: X.length
        };
    return (!(function (e) {
        let { id: t, streamParticipants: n, layout: i, widgetLayoutSpecs: o } = e,
            a = r.useRef(o);
        r.useEffect(() => void (a.current = o));
        let s = n.length;
        r.useEffect(() => {
            let { id: e, width: t, height: n, sizeOffset: i, layout: r, padding: o } = a.current;
            if (0 === s) {
                (256 !== t || 144 !== n) &&
                    (0, l.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: 256,
                            height: 144
                        }
                    });
                return;
            }
            if (r === b.C5.HORIZONTAL) {
                let t = (16 / 9) * (n - i);
                (0, l.nv)({
                    widgetId: e,
                    size: {
                        fixed: !0,
                        height: n,
                        width: t * s + o * (s - 1) + i
                    }
                });
            } else {
                let n = (9 / 16) * (t - i);
                (0, l.nv)({
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
                if (a.current.participants <= 1) return;
                let { id: e, width: t, height: n, sizeOffset: r, padding: o, participants: s } = a.current;
                if (i === b.C5.HORIZONTAL) {
                    let n = t - r;
                    (0, l.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: n * s + o * (s - 1) + r,
                            height: (9 / 16) * n + r
                        }
                    });
                } else {
                    let t = n - r;
                    (0, l.nv)({
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
                    (0, l.nv)({
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
        s.Z.setGpuBoostRequested(C.zS.OVERLAY_VIDEO_STREAM_RENDERING, !Q);
    }, [Q]),
    (0, d.Z)(() => () => {
        s.Z.setGpuBoostRequested(C.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    Q && y)
        ? null
        : Q && !y
          ? y
              ? null
              : (0, i.jsx)(x.E, {
                    emptyText: Z.intl.string(Z.t['T6+rX1']),
                    icon: a.hGI,
                    absolute: !0
                })
          : (0, i.jsx)('div', {
                className: I.goLiveGridContainer,
                style: { opacity: N },
                ref: D,
                children: (0, i.jsx)(v.Z, {
                    widgetId: t,
                    tileWidth: J,
                    locked: y,
                    layout: $,
                    streamParticipants: X,
                    participantsVersion: Y,
                    pinned: T
                })
            });
}
