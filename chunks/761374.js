n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(442837),
    r = n(481060),
    a = n(765250),
    s = n(393238),
    c = n(358221),
    u = n(569545),
    d = n(199902),
    h = n(314897),
    f = n(592125),
    p = n(355863),
    m = n(944486),
    v = n(804570),
    x = n(350663),
    g = n(340101),
    C = n(388032),
    Z = n(666540);
let _ = [];
function I(e, t, n, i) {
    let l = (i - 1) * x.z;
    return e === g.C5.HORIZONTAL ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
}
function j(e) {
    var t;
    let { id: n, size: j, locked: E, padding: b, borderWidth: w, opacity: k, horizontal: N, pinned: y } = e,
        L = 2 * b + 2 * w;
    let { width: S, height: T } = {
            width: 'number' == typeof (t = j).width ? t.width : 256,
            height: 'number' == typeof t.height ? t.height : 144
        },
        A = (0, o.e7)([m.Z], () => m.Z.getVoiceChannelId()),
        { width: O, height: V, ref: P } = (0, s.Z)(),
        M = (0, o.e7)(
            [p.Z],
            () => {
                var e;
                let t = p.Z.getWidget(n);
                return !!(0, g.ZL)(t) && (null === (e = t.meta.showAllStreams) || void 0 === e || e);
            },
            [n]
        ),
        R = (0, o.e7)([f.Z], () => f.Z.getChannel(A)),
        W = (0, o.e7)([h.default], () => h.default.getId()),
        { participantsVersion: D, streamParticipants: z } = (0, o.cj)(
            [d.Z, c.Z],
            () => {
                if (null == A)
                    return {
                        streamParticipants: _,
                        participantsVersion: -1
                    };
                let e = new Set(d.Z.getAllActiveStreamsForChannel(A).map((e) => (0, u.V9)(e))),
                    t = (t) => e.has((0, u.V9)(t.stream)),
                    n = c.Z.getStreamParticipants(A).filter((t) => t.user.id !== W && (!!M || e.has((0, u.V9)(t.stream))));
                return (
                    n.sort((e, n) => (t(e) && !t(n) ? -1 : !t(e) && t(n) ? 1 : e.user.username.localeCompare(n.user.username))),
                    {
                        streamParticipants: n,
                        activeStreams: e,
                        participantsVersion: c.Z.getParticipantsVersion(A)
                    }
                );
            },
            [A, W, M]
        ),
        F = z.length,
        G = null == R || 0 === F,
        { tileWidth: U, layout: B } = (function (e, t, n, i, o) {
            let r = (function (e, t, n, i) {
                    let l = I(g.C5.HORIZONTAL, e, t, n),
                        o = I(g.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case g.C5.VERTICAL:
                            return o;
                        case g.C5.HORIZONTAL:
                            return l;
                    }
                    let r = ((9 * o) / 16 + x.z) * n - x.z;
                    return e > (16 * t) / 9 ? l : r <= t ? o : (9 * l) / 16 <= t ? l : o;
                })(n, i, t, o),
                a = I(g.C5.VERTICAL, n, i, t),
                s = null != o ? o : r === a ? g.C5.VERTICAL : g.C5.HORIZONTAL,
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
        })(!1, F, null != O ? O : S - L, null != V ? V : T - L, N ? g.C5.HORIZONTAL : g.C5.VERTICAL),
        Y = {
            id: n,
            width: S,
            height: T,
            sizeOffset: L,
            layout: B,
            padding: b,
            participants: z.length
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
                if (o === g.C5.HORIZONTAL) {
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
                if (i === g.C5.HORIZONTAL) {
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
        streamParticipants: z,
        layout: B,
        widgetLayoutSpecs: Y
    }),
    G && E)
        ? null
        : G && !E
          ? E
              ? null
              : (0, i.jsx)(v.E, {
                    emptyText: C.intl.string(C.t['T6+rX1']),
                    icon: r.ScreenArrowIcon,
                    absolute: !0
                })
          : (0, i.jsx)('div', {
                className: Z.goLiveGridContainer,
                style: { opacity: k },
                ref: P,
                children: (0, i.jsx)(x.Z, {
                    widgetId: n,
                    tileWidth: U,
                    locked: E,
                    layout: B,
                    streamParticipants: z,
                    participantsVersion: D,
                    pinned: y
                })
            });
}
