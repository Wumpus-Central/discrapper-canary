n.d(t, { Z: () => p });
var r = n(54381),
    s = n(120356),
    o = n.n(s),
    a = n(481060),
    i = n(113434),
    l = n(497505),
    c = n(670638),
    d = n(388032),
    u = n(801252);
function p(e) {
    let { quest: t, onCtxMenuOpen: n, onCtxMenuClose: s, onCtxMenuSelect: p } = e,
        m = (0, i.B6)(t.config.expiresAt);
    return (0, r.jsxs)("div", {
        className: u.questAcceptedHeader,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-xxs/medium",
                className: o()(u.flex, u.headerText),
                children: d.intl.format(d.t["pX+fmn"], { expirationDate: m }),
            }),
            (0, r.jsx)(c.r, {
                onOpen: n,
                onClose: s,
                onSelect: p,
                questContent: l.jn.QUEST_BAR_V2,
                quest: t,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: l.jn.QUEST_BAR_V2,
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        a.P3F,
                        ((t = (function (e) {
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
                        })({}, e)),
                        (n = n =
                            {
                                className: u.submenuWrapper,
                                "aria-label": d.intl.string(d.t.DEoVWZ),
                                children: (0, r.jsx)(a.xhG, {
                                    size: "md",
                                    color: "currentColor",
                                    className: o()(u.submenuIcon, u.interactiveNormal),
                                }),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
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
