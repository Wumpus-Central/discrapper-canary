n.d(t, { Y: () => y }), n(388685);
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
    h = n(177342),
    f = n(134612),
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
function y(e) {
    let { channelId: t, warningId: y, senderId: C } = e,
        v = r.useCallback(() => {
            (0, u.T)(t, [y]);
        }, [t, y]),
        _ = (0, a.e7)([c.Z], () => c.Z.isBlocked(C)),
        x = r.useMemo(
            () => ({
                channelId: t,
                warningId: y,
                senderId: C,
                warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
            }),
            [t, y, C],
        );
    r.useEffect(() => {
        (0, p.KQ)(b(g({}, x), { viewName: p.pb.SAFETY_WARNING_BANNER })),
            s.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, [x]);
    let j = r.useCallback(
            (e) => {
                (0, p.qc)(b(g({}, x), { cta: e }));
            },
            [x],
        ),
        O = r.useCallback(() => {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("37031"), n.e("89650"), n.e("41837")]).then(
                        n.bind(n, 611446),
                    );
                    return (n) => {
                        let { transitionState: r, onClose: l } = n;
                        return (0, i.jsx)(e, {
                            otherUserId: C,
                            channelId: t,
                            warningId: y,
                            warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: r,
                            onClose: l,
                        });
                    };
                },
                { modalKey: f.X_ },
            ),
                j(p.NM.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, C, y, j]),
        E = r.useCallback(() => {
            v(), j(p.NM.USER_BANNER_BLOCK_CONFIRM);
        }, [v, j]),
        S = r.useCallback(() => {
            v(), j(p.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [v, j]),
        P = r.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("19538").then(n.bind(n, 699783));
                return (n) => {
                    let { transitionState: r, onClose: l } = n;
                    return (0, i.jsx)(e, {
                        transitionState: r,
                        onBlock: E,
                        onBlockAndReport: S,
                        onCancel: () => {
                            null == l || l(), j(p.NM.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: l,
                        userId: C,
                        channelId: t,
                    });
                };
            });
        }, [E, S, C, t, j]);
    return (0, i.jsx)(h.Q, {
        channelId: t,
        warningId: y,
        senderId: C,
        warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: m.intl.string(m.t.ZzlB5p),
        description: m.intl.string(m.t["D1aU+h"]),
        onDismiss: v,
        buttons: [
            {
                text: m.intl.string(m.t.Qyu4UK),
                variant: "primary",
                onClick: O,
            },
            ...(_
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
