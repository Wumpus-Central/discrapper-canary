r.d(t, { A: () => p }), r(896048);
var n = r(627968),
    i = r(64700),
    s = r(432022),
    a = r(397927),
    o = r(950191),
    l = r(840065),
    c = r(975571),
    u = r(427262),
    d = r(587510),
    m = r(789622),
    g = r(652215),
    f = r(985018),
    E = r(299043);
function p(e) {
    var t, r;
    let { userRef: p, usernameSuggestionLoading: h = !1, oneClickFlow: O = !1 } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i,
                s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++)
                    (n = r[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                return s;
            }
            if (
                ((s = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        s = Object.getOwnPropertyNames(e);
                    for (n = 0; n < s.length; n++)
                        (r = s[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                    (n = r[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            return s;
        })(e, ["userRef", "usernameSuggestionLoading", "oneClickFlow"]),
        { user: b, editState: S, onClose: v } = y,
        A = (0, o.Ay)(b.id),
        j = (function (e, t, r) {
            switch (e) {
                case m.iv.EDIT_USERNAME:
                    return {
                        header: f.intl.string(f.t["a/zCWh"]),
                        subtitle: f.intl.string(f.t.gGz0se),
                    };
                case m.iv.EDIT_DISPLAY_NAME:
                    return {
                        header: f.intl.string(f.t.SRDNcG),
                        subtitle: f.intl.string(f.t["940AS0"]),
                    };
                case m.iv.PREVIEW:
                    return {
                        header: f.intl.formatToPlainString(f.t.XDHrcj, { displayName: t }),
                        subtitle: f.intl.format(f.t.bWE0ZD, {
                            onClick: () => {
                                r(), (0, l.openUserSettings)();
                            },
                        }),
                    };
                case m.iv.SUGGESTION:
                    return {
                        header: f.intl.string(f.t.F7T4db),
                        subtitle: f.intl.formatToPlainString(f.t.Z8F83a, {}),
                        link: f.intl.format(f.t.i2vB8z, { helpdeskArticle: c.A.getArticleURL(g.MVz.POMELO_FAQ) }),
                    };
                default:
                    return {
                        header: f.intl.string(f.t["a/zCWh"]),
                        subtitle: f.intl.string(f.t.gGz0se),
                    };
            }
        })(S, u.Ay.getName(b), v),
        [_, x] = (0, a.zhh)(() => ({
            opacity: 0,
            y: 10,
        }));
    return (
        i.useEffect(() => {
            x({
                y: 0,
                opacity: 1,
                from: {
                    y: 10,
                    opacity: 0,
                },
            });
        }, [x, S]),
        (0, n.jsxs)("div", {
            className: E.xm,
            children: [
                (0, n.jsxs)(s.animated.div, {
                    style: {
                        opacity: _.opacity,
                        y: _.y,
                    },
                    children: [
                        (0, n.jsx)(a.Heading, {
                            className: E.DD,
                            color: "text-strong",
                            variant: "heading-xl/extrabold",
                            children: j.header,
                        }),
                        (0, n.jsxs)("div", {
                            className: E.VA,
                            children: [
                                (0, n.jsx)(a.Heading, {
                                    color: "text-default",
                                    variant: "heading-sm/medium",
                                    children: j.subtitle,
                                }),
                                null != j.link &&
                                    (0, n.jsx)(a.Text, {
                                        className: E.nf,
                                        color: "text-default",
                                        variant: "text-sm/medium",
                                        children: j.link,
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(
                    d.A,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, y)),
                    (r = r =
                        {
                            displayProfile: A,
                            ref: p,
                            usernameSuggestionLoading: h,
                            oneClickFlow: O,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t),
                ),
            ],
        })
    );
}
