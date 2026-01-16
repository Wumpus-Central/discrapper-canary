n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(81239),
    o = n(481060),
    s = n(687158),
    l = n(518596),
    c = n(63063),
    u = n(51144),
    d = n(544508),
    f = n(801461),
    m = n(981631),
    g = n(388032),
    E = n(991119);
function p(e) {
    var t,
        n,
        { userRef: p, usernameSuggestionLoading: h = !1, oneClickFlow: O = !1 } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["userRef", "usernameSuggestionLoading", "oneClickFlow"]);
    let { user: S, editState: b, onClose: x } = y,
        N = (0, s.ZP)(S.id),
        v = (function (e, t, n) {
            switch (e) {
                case f.Wq.EDIT_USERNAME:
                    return {
                        header: g.intl.string(g.t["a/zCWh"]),
                        subtitle: g.intl.string(g.t.gGz0se),
                    };
                case f.Wq.EDIT_DISPLAY_NAME:
                    return {
                        header: g.intl.string(g.t.SRDNcG),
                        subtitle: g.intl.string(g.t["940AS0"]),
                    };
                case f.Wq.PREVIEW:
                    return {
                        header: g.intl.formatToPlainString(g.t.XDHrcj, { displayName: t }),
                        subtitle: g.intl.format(g.t.bWE0ZD, {
                            onClick: () => {
                                n(), (0, l.openUserSettings)();
                            },
                        }),
                    };
                case f.Wq.SUGGESTION:
                    return {
                        header: g.intl.string(g.t.F7T4db),
                        subtitle: g.intl.formatToPlainString(g.t.Z8F83a, {}),
                        link: g.intl.format(g.t.i2vB8z, { helpdeskArticle: c.Z.getArticleURL(m.BhN.POMELO_FAQ) }),
                    };
                default:
                    return {
                        header: g.intl.string(g.t["a/zCWh"]),
                        subtitle: g.intl.string(g.t.gGz0se),
                    };
            }
        })(b, u.ZP.getName(S), x),
        [T, I] = (0, o.q_F)(() => ({
            opacity: 0,
            y: 10,
        }));
    return (
        i.useEffect(() => {
            I({
                y: 0,
                opacity: 1,
                from: {
                    y: 10,
                    opacity: 0,
                },
            });
        }, [I, b]),
        (0, r.jsxs)("div", {
            className: E.displayNameContainer,
            children: [
                (0, r.jsxs)(a.animated.div, {
                    style: {
                        opacity: T.opacity,
                        y: T.y,
                    },
                    children: [
                        (0, r.jsx)(o.Heading, {
                            className: E.title,
                            color: "text-strong",
                            variant: "heading-xl/extrabold",
                            children: v.header,
                        }),
                        (0, r.jsxs)("div", {
                            className: E.subtitle,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    color: "text-default",
                                    variant: "heading-sm/medium",
                                    children: v.subtitle,
                                }),
                                null != v.link &&
                                    (0, r.jsx)(o.Text, {
                                        className: E.link,
                                        color: "text-default",
                                        variant: "text-sm/medium",
                                        children: v.link,
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(
                    d.Z,
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
                    })({}, y)),
                    (n = n =
                        {
                            displayProfile: N,
                            ref: p,
                            usernameSuggestionLoading: h,
                            oneClickFlow: O,
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
                ),
            ],
        })
    );
}
