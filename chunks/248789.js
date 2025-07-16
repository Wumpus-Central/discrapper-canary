(n.d(t, { Y: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(286379),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    c = n(797614),
    u = n(699516),
    d = n(378298),
    p = n(359119),
    h = n(473092),
    f = n(177342),
    m = n(134612),
    g = n(388032);
function b(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function _(e, t) {
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
        x = i.useCallback(() => {
            (0, d.T)(t, [y]);
        }, [t, y]),
        v = (0, a.e7)([u.Z], () => u.Z.isBlocked(C)),
        j = i.useMemo(
            () => ({
                channelId: t,
                warningId: y,
                senderId: C,
                warningType: p.pj.INAPPROPRIATE_CONVERSATION_TIER_2
            }),
            [t, y, C]
        );
    i.useEffect(() => {
        ((0, h.KQ)(_(b({}, j), { viewName: h.pb.SAFETY_WARNING_BANNER })), c.Z.increment({ name: l.V.SAFETY_WARNING_VIEW }));
    }, [j]);
    let O = i.useCallback(
            (e) => {
                (0, h.qc)(_(b({}, j), { cta: e }));
            },
            [j]
        ),
        E = i.useCallback(() => {
            ((0, s.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('49508'), n.e('89650')]).then(n.bind(n, 611446));
                    return (n) => {
                        let { transitionState: i, onClose: l } = n;
                        return (0, r.jsx)(e, {
                            otherUserId: C,
                            channelId: t,
                            warningId: y,
                            warningType: p.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: i,
                            onClose: l
                        });
                    };
                },
                { modalKey: m.X_ }
            ),
                O(h.NM.USER_BANNER_OPEN_SAFETY_TOOLS));
        }, [t, C, y, O]),
        S = i.useCallback(() => {
            (x(), O(h.NM.USER_BANNER_BLOCK_CONFIRM));
        }, [x, O]),
        P = i.useCallback(() => {
            (x(), O(h.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM));
        }, [x, O]),
        I = i.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('19538').then(n.bind(n, 699783));
                return (n) => {
                    let { transitionState: i, onClose: l } = n;
                    return (0, r.jsx)(e, {
                        transitionState: i,
                        onBlock: S,
                        onBlockAndReport: P,
                        onCancel: () => {
                            (null == l || l(), O(h.NM.USER_BANNER_BLOCK_CANCEL));
                        },
                        onClose: l,
                        userId: C,
                        channelId: t
                    });
                };
            });
        }, [S, P, C, t, O]);
    return (0, r.jsx)(f.Q, {
        channelId: t,
        warningId: y,
        senderId: C,
        warningType: p.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: g.intl.string(g.t.ZzlB5u),
        description: g.intl.string(g.t['D1aU+v']),
        onDismiss: x,
        buttons: [
            {
                text: g.intl.string(g.t.Qyu4UF),
                color: o.zx.Colors.BRAND,
                onclick: E
            },
            ...(v
                ? []
                : [
                      {
                          text: g.intl.string(g.t['7q0bNT']),
                          color: o.zx.Colors.PRIMARY,
                          onclick: I
                      }
                  ])
        ]
    });
}
