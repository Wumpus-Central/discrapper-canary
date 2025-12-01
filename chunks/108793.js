n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(666917),
    o = n(481060),
    s = n(687158),
    l = n(518596),
    c = n(63063),
    u = n(51144),
    d = n(544508),
    m = n(801461),
    g = n(981631),
    f = n(388032),
    E = n(631936);
function p(e) {
    var t,
        n,
        { userRef: p, usernameSuggestionLoading: h = !1, oneClickFlow: y = !1 } = e,
        O = (function (e, t) {
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
    let { user: S, editState: b, onClose: _ } = O,
        N = (0, s.ZP)(S.id),
        v = (function (e, t, n) {
            switch (e) {
                case m.Wq.EDIT_USERNAME:
                    return {
                        header: f.intl.string(f.t["a/zCWh"]),
                        subtitle: f.intl.string(f.t.gGz0se),
                    };
                case m.Wq.EDIT_DISPLAY_NAME:
                    return {
                        header: f.intl.string(f.t.SRDNcG),
                        subtitle: f.intl.string(f.t["940AS0"]),
                    };
                case m.Wq.PREVIEW:
                    return {
                        header: f.intl.formatToPlainString(f.t.XDHrcj, { displayName: t }),
                        subtitle: f.intl.format(f.t.bWE0ZD, {
                            onClick: () => {
                                n(), (0, l.openUserSettings)();
                            },
                        }),
                    };
                case m.Wq.SUGGESTION:
                    return {
                        header: f.intl.string(f.t.F7T4db),
                        subtitle: f.intl.formatToPlainString(f.t.Z8F83a, {}),
                        link: f.intl.format(f.t.i2vB8z, { helpdeskArticle: c.Z.getArticleURL(g.BhN.POMELO_FAQ) }),
                    };
                default:
                    return {
                        header: f.intl.string(f.t["a/zCWh"]),
                        subtitle: f.intl.string(f.t.gGz0se),
                    };
            }
        })(b, u.ZP.getName(S), _),
        [x, T] = (0, o.q_F)(() => ({
            opacity: 0,
            y: 10,
        }));
    return (
        i.useEffect(() => {
            T({
                y: 0,
                opacity: 1,
                from: {
                    y: 10,
                    opacity: 0,
                },
            });
        }, [T, b]),
        (0, r.jsxs)("div", {
            className: E.displayNameContainer,
            children: [
                (0, r.jsxs)(a.animated.div, {
                    style: {
                        opacity: x.opacity,
                        y: x.y,
                    },
                    children: [
                        (0, r.jsx)(o.Heading, {
                            className: E.title,
                            color: "header-primary",
                            variant: "heading-xl/extrabold",
                            children: v.header,
                        }),
                        (0, r.jsxs)("div", {
                            className: E.subtitle,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    color: "header-secondary",
                                    variant: "heading-sm/medium",
                                    children: v.subtitle,
                                }),
                                null != v.link &&
                                    (0, r.jsx)(o.Text, {
                                        className: E.link,
                                        color: "header-secondary",
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
                    })({}, O)),
                    (n = n =
                        {
                            displayProfile: N,
                            ref: p,
                            usernameSuggestionLoading: h,
                            oneClickFlow: y,
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
