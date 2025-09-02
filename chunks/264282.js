n.d(t, { Z: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(755721),
    a = n(481060),
    o = n(670362),
    s = n(46140),
    c = n(388032),
    u = n(477813);
let d = function (e) {
    let { onChange: t, optionClassName: n, selectedFilters: d } = e,
        p = i.useMemo(
            () => [
                {
                    heading: c.intl.string(c.t.vjLqAQ),
                    options: [s.j5.REWARD_VIRTUAL_CURRENCY, s.j5.REWARD_COLLECTIBLE, s.j5.REWARD_IN_GAME],
                },
                {
                    heading: c.intl.string(c.t.Hufmsr),
                    options: [s.j5.QUEST_TYPE_VIDEO, s.j5.QUEST_TYPE_PLAY],
                },
            ],
            [],
        );
    return (0, r.jsx)(o.Z, {
        renderPopout: (e, i) => {
            let { closePopout: f } = e;
            return (0, r.jsxs)("div", {
                children: [
                    p.map((e, p) =>
                        (0, r.jsxs)(
                            "div",
                            {
                                className: u.filterOptionGroup,
                                children: [
                                    (0, r.jsx)(o.g, {
                                        id: i,
                                        children: e.heading,
                                    }),
                                    e.options.map((e, i) =>
                                        (0, r.jsx)(
                                            l.$q,
                                            {
                                                className: n,
                                                innerClassName: u.checkboxInput,
                                                onChange: (n) => {
                                                    let r = new Set(d);
                                                    n.currentTarget.checked ? r.add(e) : r.delete(e), t(r);
                                                },
                                                reverse: !0,
                                                type: l.M0.INVERTED,
                                                value: d.has(e),
                                                children: (0, r.jsx)(a.Text, {
                                                    variant: "text-md/normal",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case s.j5.REWARD_VIRTUAL_CURRENCY:
                                                                return c.intl.string(c.t.ElYQFR);
                                                            case s.j5.REWARD_COLLECTIBLE:
                                                                return c.intl.string(c.t.Jg17Ul);
                                                            case s.j5.REWARD_IN_GAME:
                                                                return c.intl.string(c.t["O/J2kp"]);
                                                            case s.j5.QUEST_TYPE_VIDEO:
                                                                return c.intl.string(c.t.e0iISE);
                                                            case s.j5.QUEST_TYPE_PLAY:
                                                                return c.intl.string(c.t["1nJR4u"]);
                                                        }
                                                    })(e),
                                                }),
                                            },
                                            i,
                                        ),
                                    ),
                                ],
                            },
                            p,
                        ),
                    ),
                    (0, r.jsx)("div", {
                        className: u.filterOptionGroup,
                        children: (0, r.jsx)(a.zxk, {
                            fullWidth: !0,
                            onClick: () => {
                                t(new Set()), f();
                            },
                            size: "sm",
                            text: c.intl.string(c.t.VkKicX),
                            variant: "secondary",
                        }),
                    }),
                ],
            });
        },
        children: (e, t) => {
            var n, i;
            return (0, r.jsx)(
                a.zxk,
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
                        text: c.intl.formatToPlainString(c.t.CEfkXl, { numSelectedFilters: d.size }),
                        icon: a.gXV,
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
