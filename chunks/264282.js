n.d(t, { Z: () => u }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(670362),
    o = n(46140),
    s = n(388032),
    c = n(477813);
let u = function (e) {
    let { onChange: t, optionClassName: n, selectedFilters: u } = e,
        d = i.useMemo(
            () => [
                {
                    heading: s.intl.string(s.t.vjLqAQ),
                    options: [o.j5.REWARD_VIRTUAL_CURRENCY, o.j5.REWARD_COLLECTIBLE, o.j5.REWARD_IN_GAME],
                },
                {
                    heading: s.intl.string(s.t.Hufmsr),
                    options: [o.j5.QUEST_TYPE_VIDEO, o.j5.QUEST_TYPE_PLAY],
                },
            ],
            [],
        );
    return (0, r.jsx)(a.Z, {
        renderPopout: (e, i) => {
            let { closePopout: p } = e;
            return (0, r.jsxs)("div", {
                children: [
                    d.map((e, d) =>
                        (0, r.jsxs)(
                            "div",
                            {
                                className: c.filterOptionGroup,
                                children: [
                                    (0, r.jsx)(a.g, {
                                        id: i,
                                        children: e.heading,
                                    }),
                                    e.options.map((e, i) =>
                                        (0, r.jsx)(
                                            l.XZJ,
                                            {
                                                className: n,
                                                innerClassName: c.checkboxInput,
                                                onChange: (n) => {
                                                    let r = new Set(u);
                                                    n.currentTarget.checked ? r.add(e) : r.delete(e), t(r);
                                                },
                                                reverse: !0,
                                                type: l.XZJ.Types.INVERTED,
                                                value: u.has(e),
                                                children: (0, r.jsx)(l.Text, {
                                                    variant: "text-md/normal",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case o.j5.REWARD_VIRTUAL_CURRENCY:
                                                                return s.intl.string(s.t.ElYQFR);
                                                            case o.j5.REWARD_COLLECTIBLE:
                                                                return s.intl.string(s.t.Jg17Ul);
                                                            case o.j5.REWARD_IN_GAME:
                                                                return s.intl.string(s.t["O/J2kp"]);
                                                            case o.j5.QUEST_TYPE_VIDEO:
                                                                return s.intl.string(s.t.e0iISE);
                                                            case o.j5.QUEST_TYPE_PLAY:
                                                                return s.intl.string(s.t["1nJR4u"]);
                                                        }
                                                    })(e),
                                                }),
                                            },
                                            i,
                                        ),
                                    ),
                                ],
                            },
                            d,
                        ),
                    ),
                    (0, r.jsx)("div", {
                        className: c.filterOptionGroup,
                        children: (0, r.jsx)(l.zxk, {
                            fullWidth: !0,
                            onClick: () => {
                                t(new Set()), p();
                            },
                            size: "sm",
                            text: s.intl.string(s.t.VkKicX),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) => {
            var n, i;
            return (0, r.jsx)(
                l.zxk,
                ((n = (function (e) {
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
                (i = i =
                    {
                        buttonRef: t,
                        size: "sm",
                        text: s.intl.formatToPlainString(s.t.CEfkXl, { numSelectedFilters: u.size }),
                        icon: l.gXV,
                        iconPosition: "end",
                        variant: "secondary",
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n),
            );
        },
    });
};
