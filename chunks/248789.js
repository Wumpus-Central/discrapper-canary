(n.d(t, { Y: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(286379),
    a = n(442837),
    s = n(481060),
    l = n(797614),
    c = n(699516),
    u = n(378298),
    d = n(359119),
    f = n(473092),
    _ = n(177342),
    p = n(134612),
    h = n(388032);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { channelId: t, warningId: m, senderId: E } = e,
        y = i.useCallback(() => {
            (0, u.T)(t, [m]);
        }, [t, m]),
        O = (0, a.e7)([c.Z], () => c.Z.isBlocked(E)),
        v = i.useMemo(
            () => ({
                channelId: t,
                warningId: m,
                senderId: E,
                warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2
            }),
            [t, m, E]
        );
    i.useEffect(() => {
        ((0, f.KQ)(b(g({}, v), { viewName: f.pb.SAFETY_WARNING_BANNER })), l.Z.increment({ name: o.V.SAFETY_WARNING_VIEW }));
    }, [v]);
    let I = i.useCallback(
            (e) => {
                (0, f.qc)(b(g({}, v), { cta: e }));
            },
            [v]
        ),
        T = i.useCallback(() => {
            ((0, s.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('49508'), n.e('9738'), n.e('28433')]).then(n.bind(n, 611446));
                    return (n) => {
                        let { transitionState: i, onClose: o } = n;
                        return (0, r.jsx)(e, {
                            otherUserId: E,
                            channelId: t,
                            warningId: m,
                            warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: i,
                            onClose: o
                        });
                    };
                },
                { modalKey: p.X_ }
            ),
                I(f.NM.USER_BANNER_OPEN_SAFETY_TOOLS));
        }, [t, E, m, I]),
        S = i.useCallback(() => {
            (y(), I(f.NM.USER_BANNER_BLOCK_CONFIRM));
        }, [y, I]),
        A = i.useCallback(() => {
            (y(), I(f.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM));
        }, [y, I]),
        N = i.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('19538').then(n.bind(n, 699783));
                return (n) => {
                    let { transitionState: i, onClose: o } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onBlock: S,
                        onBlockAndReport: A,
                        onCancel: () => {
                            (null == o || o(), I(f.NM.USER_BANNER_BLOCK_CANCEL));
                        },
                        onClose: o,
                        userId: E,
                        channelId: t
                    });
                };
            });
        }, [S, A, E, t, I]);
    return (0, r.jsx)(_.Q, {
        channelId: t,
        warningId: m,
        senderId: E,
        warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: h.intl.string(h.t.ZzlB5u),
        description: h.intl.string(h.t['D1aU+v']),
        onDismiss: y,
        buttons: [
            {
                text: h.intl.string(h.t.Qyu4UF),
                variant: 'primary',
                onClick: T
            },
            ...(O
                ? []
                : [
                      {
                          text: h.intl.string(h.t['7q0bNT']),
                          variant: 'secondary',
                          onClick: N
                      }
                  ])
        ]
    });
}
