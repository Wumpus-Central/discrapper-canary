n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(765250),
    a = n(393238),
    s = n(358221),
    c = n(569545),
    u = n(199902),
    d = n(314897),
    h = n(592125),
    f = n(355863),
    p = n(944486),
    m = n(350663),
    v = n(340101),
    g = n(804609);
let x = [];
function C(e, t, n, i) {
    let l = (i - 1) * m.z;
    return e === v.C5.HORIZONTAL ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
}
function Z(e) {
    var t;
    let { id: n, size: Z, locked: _, padding: I, borderWidth: j, opacity: E, horizontal: b, pinned: w } = e,
        k = 2 * I + 2 * j;
    let { width: N, height: y } = {
            width: 'number' == typeof (t = Z).width ? t.width : 256,
            height: 'number' == typeof t.height ? t.height : 144
        },
        L = (0, r.e7)([p.Z], () => p.Z.getVoiceChannelId()),
        { width: S, height: T, ref: A } = (0, a.Z)(),
        O = (0, r.e7)(
            [f.Z],
            () => {
                var e;
                let t = f.Z.getWidget(n);
                return !!(0, v.ZL)(t) && (null === (e = t.meta.showAllStreams) || void 0 === e || e);
            },
            [n]
        ),
        P = (0, r.e7)([h.Z], () => h.Z.getChannel(L)),
        V = (0, r.e7)([d.default], () => d.default.getId()),
        { participantsVersion: M, streamParticipants: R } = (0, r.cj)(
            [u.Z, s.Z],
            () => {
                if (null == L)
                    return {
                        streamParticipants: x,
                        participantsVersion: -1
                    };
                let e = new Set(u.Z.getAllActiveStreamsForChannel(L).map((e) => (0, c.V9)(e))),
                    t = (t) => e.has((0, c.V9)(t.stream)),
                    n = s.Z.getStreamParticipants(L).filter((t) => t.user.id !== V && (!!O || e.has((0, c.V9)(t.stream))));
                return (
                    n.sort((e, n) => (t(e) && !t(n) ? -1 : !t(e) && t(n) ? 1 : e.user.username.localeCompare(n.user.username))),
                    {
                        streamParticipants: n,
                        activeStreams: e,
                        participantsVersion: s.Z.getParticipantsVersion(L)
                    }
                );
            },
            [L, V, O]
        ),
        D = R.length,
        z = null == P || 0 === D,
        { tileWidth: W, layout: F } = (function (e, t, n, i, r) {
            let o = (function (e, t, n, i) {
                    let l = C(v.C5.HORIZONTAL, e, t, n),
                        r = C(v.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case v.C5.VERTICAL:
                            return r;
                        case v.C5.HORIZONTAL:
                            return l;
                    }
                    let o = ((9 * r) / 16 + m.z) * n - m.z;
                    return e > (16 * t) / 9 ? l : o <= t ? r : (9 * l) / 16 <= t ? l : r;
                })(n, i, t, r),
                a = C(v.C5.VERTICAL, n, i, t),
                s = null != r ? r : o === a ? v.C5.VERTICAL : v.C5.HORIZONTAL,
                [c, u] = l.useState(o);
            return (
                l.useEffect(() => {
                    !e && u(o);
                }, [e, o]),
                {
                    layout: s,
                    tileWidth: c
                }
            );
        })(!1, D, null != S ? S : N - k, null != T ? T : y - k, b ? v.C5.HORIZONTAL : v.C5.VERTICAL),
        G = {
            id: n,
            width: N,
            height: y,
            sizeOffset: k,
            layout: F,
            padding: I,
            participants: R.length
        };
    return (!(function (e) {
        let { id: t, streamParticipants: n, layout: i, widgetLayoutSpecs: r } = e,
            a = l.useRef(r);
        l.useEffect(() => void (a.current = r)),
            l.useEffect(() => {
                let { id: e, width: t, height: i, sizeOffset: l, layout: r, padding: s } = a.current;
                if (0 === n.length) {
                    (256 !== t || 144 !== i) &&
                        (0, o.nv)({
                            widgetId: e,
                            size: {
                                fixed: !0,
                                width: 256,
                                height: 144
                            }
                        });
                    return;
                }
                if (r === v.C5.HORIZONTAL) {
                    let t = (16 / 9) * (i - l);
                    (0, o.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            height: i,
                            width: t * n.length + s * (n.length - 1) + l
                        }
                    });
                } else {
                    let i = (9 / 16) * (t - l);
                    (0, o.nv)({
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
                if (a.current.participants <= 1) return;
                let { id: e, width: t, height: n, sizeOffset: l, padding: r, participants: s } = a.current;
                if (i === v.C5.HORIZONTAL) {
                    let n = t - l;
                    (0, o.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: n * s + r * (s - 1) + l,
                            height: (9 / 16) * n + l
                        }
                    });
                } else {
                    let t = n - l;
                    (0, o.nv)({
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
                    (0, o.nv)({
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
        streamParticipants: R,
        layout: F,
        widgetLayoutSpecs: G
    }),
    z && _)
        ? null
        : (0, i.jsx)('div', {
              className: g.goLiveGridContainer,
              style: { opacity: E },
              ref: A,
              children: (0, i.jsx)(m.Z, {
                  widgetId: n,
                  tileWidth: W,
                  locked: _,
                  layout: F,
                  streamParticipants: R,
                  participantsVersion: M,
                  pinned: w
              })
          });
}
