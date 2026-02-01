n.d(t, {
    _: () => b,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(731738),
    a = n(311907),
    s = n(397927),
    o = n(831062),
    c = n(994500),
    u = n(544231),
    d = n(349435),
    h = n(665909),
    p = n(576045),
    f = n(327337),
    m = n(985018);

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function b(e) {
    let { channelId: t, warningId: b, senderId: _ } = e,
        y = r.useCallback(() => {
            (0, u.xi)(t, [b]);
        }, [t, b]),
        v = (0, a.bG)([c.A], () => c.A.isBlocked(_)),
        E = r.useMemo(
            () => ({
                channelId: t,
                warningId: b,
                senderId: _,
                warningType: d._j.INAPPROPRIATE_CONVERSATION_TIER_2,
            }),
            [t, b, _],
        );
    r.useEffect(() => {
        (0, h.QF)(
            A(g({}, E), {
                viewName: h.gN.SAFETY_WARNING_BANNER,
            }),
        ),
            o.A.increment({
                name: i.K.SAFETY_WARNING_VIEW,
            });
    }, [E]);
    let O = r.useCallback(
            (e) => {
                (0, h._$)(
                    A(g({}, E), {
                        cta: e,
                    }),
                );
            },
            [E],
        ),
        C = r.useCallback(() => {
            (0, s.mMO)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("43549"),
                        n.e("45033"),
                        n.e("46717"),
                        n.e("76850"),
                    ]).then(n.bind(n, 788099));
                    return (n) => {
                        let { transitionState: r, onClose: i } = n;
                        return (0, l.jsx)(e, {
                            otherUserId: _,
                            channelId: t,
                            warningId: b,
                            warningType: d._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                            transitionState: r,
                            onClose: i,
                        });
                    };
                },
                {
                    modalKey: f.V,
                },
            ),
                O(h.Wm.USER_BANNER_OPEN_SAFETY_TOOLS);
        }, [t, _, b, O]),
        x = r.useCallback(() => {
            y(), O(h.Wm.USER_BANNER_BLOCK_CONFIRM);
        }, [y, O]),
        S = r.useCallback(() => {
            y(), O(h.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM);
        }, [y, O]),
        j = r.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await n.e("84938").then(n.bind(n, 371185));
                return (n) => {
                    let { transitionState: r, onClose: i } = n;
                    return (0, l.jsx)(e, {
                        transitionState: r,
                        onBlock: x,
                        onBlockAndReport: S,
                        onCancel: () => {
                            null == i || i(), O(h.Wm.USER_BANNER_BLOCK_CANCEL);
                        },
                        onClose: i,
                        userId: _,
                        channelId: t,
                    });
                };
            });
        }, [x, S, _, t, O]);
    return (0, l.jsx)(p.N, {
        channelId: t,
        warningId: b,
        senderId: _,
        warningType: d._j.INAPPROPRIATE_CONVERSATION_TIER_2,
        header: m.intl.string(m.t.ZzlB5p),
        description: m.intl.string(m.t["D1aU+h"]),
        onDismiss: y,
        buttons: [
            {
                text: m.intl.string(m.t.Qyu4UK),
                variant: "primary",
                onClick: C,
            },
            ...(v
                ? []
                : [
                      {
                          text: m.intl.string(m.t["7q0bNY"]),
                          variant: "secondary",
                          onClick: j,
                      },
                  ]),
        ],
    });
}
