n.d(t, { Y: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
    let { channelId: t, warningId: _, senderId: y } = e,
        C = i.useCallback(() => {
            (0, u.T)(t, [_]);
        }, [t, _]),
        v = (0, a.e7)([c.Z], () => c.Z.isBlocked(y)),
        O = i.useMemo(
            () => ({
                channelId: t,
                warningId: _,
                senderId: y,
                warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
            }),
            [t, _, y],
        );
    i.useEffect(() => {
        (0, p.KQ)(b(g({}, O), { viewName: p.pb.SAFETY_WARNING_BANNER })),
            s.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, [O]);
    let x = i.useCallback(
            (e) => {
                (0, p.qc)(b(g({}, O), { cta: e }));
            },
            [O],
        ),
        E = i.useCallback(() => {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("37031"), n.e("89650"), n.e("41837")]).then(
                        n.bind(n, 611446),
                    );
                    return (n) => {
                        let { transitionState: i, onClose: l } = n;
                        return (0, r.jsx)(e, {
                            otherUserId: y,
                            channelId: t,
                            warningId: _,
                            warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: i,
                            onClose: l,
                        });
                    };
                },
                { modalKey: h.X_ },
            ),
                x(p.NM.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, y, _, x]),
        j = i.useCallback(() => {
            C(), x(p.NM.USER_BANNER_BLOCK_CONFIRM);
        }, [C, x]),
        S = i.useCallback(() => {
            C(), x(p.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [C, x]),
        P = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("19538").then(n.bind(n, 699783));
                return (n) => {
                    let { transitionState: i, onClose: l } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onBlock: j,
                        onBlockAndReport: S,
                        onCancel: () => {
                            null == l || l(), x(p.NM.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: l,
                        userId: y,
                        channelId: t,
                    });
                };
            });
        }, [j, S, y, t, x]);
    return (0, r.jsx)(f.Q, {
        channelId: t,
        warningId: _,
        senderId: y,
        warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: m.intl.string(m.t.ZzlB5p),
        description: m.intl.string(m.t["D1aU+h"]),
        onDismiss: C,
        buttons: [
            {
                text: m.intl.string(m.t.Qyu4UK),
                variant: "primary",
                onClick: E,
            },
            ...(v
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
