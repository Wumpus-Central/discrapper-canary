n.d(t, { Y: () => y }), n(388685);
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
    h = n(177342),
    f = n(134612),
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
function y(e) {
    let { channelId: t, warningId: y, senderId: C } = e,
        _ = i.useCallback(() => {
            (0, u.T)(t, [y]);
        }, [t, y]),
        v = (0, a.e7)([c.Z], () => c.Z.isBlocked(C)),
        x = i.useMemo(
            () => ({
                channelId: t,
                warningId: y,
                senderId: C,
                warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
            }),
            [t, y, C],
        );
    i.useEffect(() => {
        (0, p.KQ)(b(g({}, x), { viewName: p.pb.SAFETY_WARNING_BANNER })),
            s.Z.increment({ name: l.V.SAFETY_WARNING_VIEW });
    }, [x]);
    let O = i.useCallback(
            (e) => {
                (0, p.qc)(b(g({}, x), { cta: e }));
            },
            [x],
        ),
        j = i.useCallback(() => {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("37031"), n.e("89650"), n.e("41837")]).then(
                        n.bind(n, 611446),
                    );
                    return (n) => {
                        let { transitionState: i, onClose: l } = n;
                        return (0, r.jsx)(e, {
                            otherUserId: C,
                            channelId: t,
                            warningId: y,
                            warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: i,
                            onClose: l,
                        });
                    };
                },
                { modalKey: f.X_ },
            ),
                O(p.NM.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, C, y, O]),
        E = i.useCallback(() => {
            _(), O(p.NM.USER_BANNER_BLOCK_CONFIRM);
        }, [_, O]),
        S = i.useCallback(() => {
            _(), O(p.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [_, O]),
        P = i.useCallback(() => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("19538").then(n.bind(n, 699783));
                return (n) => {
                    let { transitionState: i, onClose: l } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onBlock: E,
                        onBlockAndReport: S,
                        onCancel: () => {
                            null == l || l(), O(p.NM.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: l,
                        userId: C,
                        channelId: t,
                    });
                };
            });
        }, [E, S, C, t, O]);
    return (0, r.jsx)(h.Q, {
        channelId: t,
        warningId: y,
        senderId: C,
        warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: m.intl.string(m.t.ZzlB5u),
        description: m.intl.string(m.t["D1aU+v"]),
        onDismiss: _,
        buttons: [
            {
                text: m.intl.string(m.t.Qyu4UF),
                variant: "primary",
                onClick: j,
            },
            ...(v
                ? []
                : [
                      {
                          text: m.intl.string(m.t["7q0bNT"]),
                          variant: "secondary",
                          onClick: P,
                      },
                  ]),
        ],
    });
}
