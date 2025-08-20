n.d(t, { Z: () => m });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(113434),
    l = n(497505),
    c = n(670638),
    u = n(388032),
    d = n(319889);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { quest: t, onCtxMenuOpen: n, onCtxMenuClose: i, onCtxMenuSelect: f } = e,
        p = (0, s.B6)(t.config.expiresAt);
    return (0, r.jsxs)("div", {
        className: d.questAcceptedHeader,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-xxs/medium",
                className: a()(d.flex, d.headerText),
                children: u.intl.format(u.t["pX+fmp"], { expirationDate: p }),
            }),
            (0, r.jsx)(c.r, {
                onOpen: n,
                onClose: i,
                onSelect: f,
                questContent: l.jn.QUEST_BAR_V2,
                quest: t,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: l.jn.QUEST_BAR_V2,
                children: (e) =>
                    (0, r.jsx)(
                        o.P3F,
                        h(_({}, e), {
                            className: d.submenuWrapper,
                            "aria-label": u.intl.string(u.t.DEoVWV),
                            children: (0, r.jsx)(o.xhG, {
                                size: "md",
                                color: "currentColor",
                                className: a()(d.submenuIcon, d.interactiveNormal),
                            }),
                        }),
                    ),
            }),
        ],
    });
}
