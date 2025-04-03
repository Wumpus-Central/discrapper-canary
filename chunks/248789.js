n.d(t, { Y: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(286379),
    o = n(442837),
    a = n(481060),
    s = n(797614),
    c = n(699516),
    u = n(378298),
    d = n(359119),
    p = n(473092),
    h = n(177342),
    f = n(134612),
    m = n(388032);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let { channelId: t, warningId: _, senderId: C } = e,
        y = i.useCallback(() => {
            (0, u.T)(t, [_]);
        }, [t, _]),
        x = (0, o.e7)([c.Z], () => c.Z.isBlocked(C)),
        v = i.useMemo(
            () => ({
                channelId: t,
                warningId: _,
                senderId: C,
                warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2
            }),
            [t, _, C]
        );
    i.useEffect(() => {
        (0, p.KQ)(b(g({}, v), { viewName: p.pb.SAFETY_WARNING_BANNER })), s.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, [v]);
    let j = i.useCallback(
            (e) => {
                (0, p.qc)(b(g({}, v), { cta: e }));
            },
            [v]
        ),
        O = i.useCallback(() => {
            (0, a.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('49508'), n.e('89650')]).then(n.bind(n, 611446));
                    return (n) => {
                        let { transitionState: i, onClose: l } = n;
                        return (0, r.jsx)(e, {
                            otherUserId: C,
                            channelId: t,
                            warningId: _,
                            warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: i,
                            onClose: l
                        });
                    };
                },
                { modalKey: f.X_ }
            ),
                j(p.NM.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, C, _, j]),
        E = i.useCallback(() => {
            y(), j(p.NM.USER_BANNER_BLOCK_CONFIRM);
        }, [y, j]),
        N = i.useCallback(() => {
            y(), j(p.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [y, j]),
        I = i.useCallback(() => {
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e('19538').then(n.bind(n, 699783));
                return (n) => {
                    let { transitionState: i, onClose: l } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onBlock: E,
                        onBlockAndReport: N,
                        onCancel: () => {
                            null == l || l(), j(p.NM.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: l,
                        userId: C,
                        channelId: t
                    });
                };
            });
        }, [E, N, C, t, j]);
    return (0, r.jsx)(h.Q, {
        channelId: t,
        warningId: _,
        senderId: C,
        warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: m.NW.string(m.t.ZzlB5u),
        description: m.NW.string(m.t['D1aU+v']),
        onDismiss: y,
        buttons: [
            {
                text: m.NW.string(m.t.Qyu4UF),
                color: a.zxk.Colors.BRAND,
                onclick: O
            },
            ...(x
                ? []
                : [
                      {
                          text: m.NW.string(m.t['7q0bNT']),
                          color: a.zxk.Colors.PRIMARY,
                          onclick: I
                      }
                  ])
        ]
    });
}
