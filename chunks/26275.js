n.d(t, { Z: () => h });
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(481060),
    o = n(49436),
    c = n(968843),
    d = n(698716),
    u = n(526188),
    m = n(388032),
    p = n(782589);
function h() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: l } = r.useContext(u.A),
        h = (0, c.B6)(e.config.expiresAt);
    return (0, a.jsxs)("div", {
        className: p.questAcceptedHeader,
        children: [
            (0, a.jsx)(s.Text, {
                variant: "text-xxs/medium",
                className: i()(p.flex, p.headerText),
                children: m.intl.format(m.t["pX+fmn"], { expirationDate: h }),
            }),
            (0, a.jsx)(d.i, {
                onOpen: t,
                onClose: n,
                onSelect: l,
                questContent: o.jn.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: o.jn.QUEST_BAR_V2,
                children: (e) => {
                    var t, n;
                    return (0, a.jsx)(
                        s.P3F,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (n = n =
                            {
                                className: p.submenuWrapper,
                                "aria-label": m.intl.string(m.t.DEoVWZ),
                                children: (0, a.jsx)(s.xhG, {
                                    size: "md",
                                    color: "currentColor",
                                    className: i()(p.submenuIcon, p.interactiveNormal),
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var a = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, a);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t),
                    );
                },
            }),
        ],
    });
}
