n.d(t, {
    _: () => A,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(731738),
    a = n(311907),
    s = n(397927),
    o = n(831062),
    c = n(994500),
    u = n(544231),
    d = n(349435),
    f = n(665909),
    p = n(576045),
    h = n(327337),
    b = n(985018);

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

function m(e, t) {
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

function A(e) {
    let { channelId: t, warningId: A, senderId: y } = e,
        O = l.useCallback(() => {
            (0, u.xi)(t, [A]);
        }, [t, A]),
        j = (0, a.bG)([c.A], () => c.A.isBlocked(y)),
        v = l.useMemo(
            () => ({
                channelId: t,
                warningId: A,
                senderId: y,
                warningType: d._j.INAPPROPRIATE_CONVERSATION_TIER_2,
            }),
            [t, A, y],
        );
    l.useEffect(() => {
        (0, f.QF)(
            m(g({}, v), {
                viewName: f.gN.SAFETY_WARNING_BANNER,
            }),
        ),
            o.A.increment({
                name: i.K.SAFETY_WARNING_VIEW,
            });
    }, [v]);
    let x = l.useCallback(
            (e) => {
                (0, f._$)(
                    m(g({}, v), {
                        cta: e,
                    }),
                );
            },
            [v],
        ),
        E = l.useCallback(() => {
            (0, s.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("45033"), n.e("46717"), n.e("76486")]).then(
                        n.bind(n, 788099),
                    );
                    return (n) => {
                        let { transitionState: l, onClose: i } = n;
                        return (0, r.jsx)(e, {
                            otherUserId: y,
                            channelId: t,
                            warningId: A,
                            warningType: d._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: l,
                            onClose: i,
                        });
                    };
                },
                {
                    modalKey: h.V,
                },
            ),
                x(f.Wm.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, y, A, x]),
        _ = l.useCallback(() => {
            O(), x(f.Wm.USER_BANNER_BLOCK_CONFIRM);
        }, [O, x]),
        C = l.useCallback(() => {
            O(), x(f.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [O, x]),
        S = l.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("62557").then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: l, onClose: i } = n;
                    return (0, r.jsx)(e, {
                        transitionState: l,
                        onBlock: _,
                        onBlockAndReport: C,
                        onCancel: () => {
                            null == i || i(), x(f.Wm.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: i,
                        userId: y,
                        channelId: t,
                    });
                };
            });
        }, [_, C, y, t, x]);
    return (0, r.jsx)(p.N, {
        channelId: t,
        warningId: A,
        senderId: y,
        warningType: d._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: b.intl.string(b.t.ZzlB5p),
        description: b.intl.string(b.t["D1aU+h"]),
        onDismiss: O,
        buttons: [
            {
                text: b.intl.string(b.t.Qyu4UK),
                variant: "primary",
                onClick: E,
            },
            ...(j
                ? []
                : [
                      {
                          text: b.intl.string(b.t["7q0bNY"]),
                          variant: "secondary",
                          onClick: S,
                      },
                  ]),
        ],
    });
}
