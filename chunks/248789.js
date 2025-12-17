n.d(t, { Y: () => C }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(286379),
    a = n(442837),
    o = n(481060),
    s = n(797614),
    c = n(699516),
    u = n(378298),
    d = n(359119),
    p = n(473092),
    f = n(177342),
    h = n(134612),
    m = n(388032);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    let { channelId: t, warningId: C, senderId: y } = e,
        v = r.useCallback(() => {
            (0, u.T)(t, [C]);
        }, [t, C]),
        x = (0, a.e7)([c.Z], () => c.Z.isBlocked(y)),
        O = r.useMemo(
            () => ({
                channelId: t,
                warningId: C,
                senderId: y,
                warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
            }),
            [t, C, y],
        );
    r.useEffect(() => {
        (0, p.KQ)(b(g({}, O), { viewName: p.pb.SAFETY_WARNING_BANNER })),
            s.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, [O]);
    let E = r.useCallback(
            (e) => {
                (0, p.qc)(b(g({}, O), { cta: e }));
            },
            [O],
        ),
        j = r.useCallback(() => {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("37031"), n.e("89650"), n.e("98932")]).then(
                        n.bind(n, 611446),
                    );
                    return (n) => {
                        let { transitionState: r, onClose: l } = n;
                        return (0, i.jsx)(e, {
                            otherUserId: y,
                            channelId: t,
                            warningId: C,
                            warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: r,
                            onClose: l,
                        });
                    };
                },
                { modalKey: h.X_ },
            ),
                E(p.NM.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, y, C, E]),
        S = r.useCallback(() => {
            v(), E(p.NM.USER_BANNER_BLOCK_CONFIRM);
        }, [v, E]),
        _ = r.useCallback(() => {
            v(), E(p.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [v, E]),
        P = r.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("19538").then(n.bind(n, 699783));
                return (n) => {
                    let { transitionState: r, onClose: l } = n;
                    return (0, i.jsx)(e, {
                        transitionState: r,
                        onBlock: S,
                        onBlockAndReport: _,
                        onCancel: () => {
                            null == l || l(), E(p.NM.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: l,
                        userId: y,
                        channelId: t,
                    });
                };
            });
        }, [S, _, y, t, E]);
    return (0, i.jsx)(f.Q, {
        channelId: t,
        warningId: C,
        senderId: y,
        warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: m.intl.string(m.t.ZzlB5p),
        description: m.intl.string(m.t["D1aU+h"]),
        onDismiss: v,
        buttons: [
            {
                text: m.intl.string(m.t.Qyu4UK),
                variant: "primary",
                onClick: j,
            },
            ...(x
                ? []
                : [
                      {
                          text: m.intl.string(m.t["7q0bNY"]),
                          variant: "secondary",
                          onClick: P,
                      },
                  ]),
        ],
    });
}
