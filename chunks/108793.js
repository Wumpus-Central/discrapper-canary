n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(137317),
    a = n(481060),
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
        { userRef: p, usernameSuggestionLoading: y = !1, oneClickFlow: O = !1 } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["userRef", "usernameSuggestionLoading", "oneClickFlow"]);
    let { user: b, editState: S, onClose: _ } = h,
        v = (0, s.ZP)(b.id),
        j = (function (e, t, n) {
            switch (e) {
                case m.Wq.EDIT_USERNAME:
                    return {
                        header: f.intl.string(f.t["a/zCWl"]),
                        subtitle: f.intl.string(f.t.gGz0sb),
                    };
                case m.Wq.EDIT_DISPLAY_NAME:
                    return {
                        header: f.intl.string(f.t.SRDNcH),
                        subtitle: f.intl.string(f.t["940AS0"]),
                    };
                case m.Wq.PREVIEW:
                    return {
                        header: f.intl.formatToPlainString(f.t.XDHrcn, { displayName: t }),
                        subtitle: f.intl.format(f.t.bWE0ZG, {
                            onClick: () => {
                                n(), (0, l.openUserSettings)();
                            },
                        }),
                    };
                case m.Wq.SUGGESTION:
                    return {
                        header: f.intl.string(f.t.F7T4dX),
                        subtitle: f.intl.formatToPlainString(f.t.Z8F83d, {}),
                        link: f.intl.format(f.t["i2vB8/"], { helpdeskArticle: c.Z.getArticleURL(g.BhN.POMELO_FAQ) }),
                    };
                default:
                    return {
                        header: f.intl.string(f.t["a/zCWl"]),
                        subtitle: f.intl.string(f.t.gGz0sb),
                    };
            }
        })(S, u.ZP.getName(b), _),
        [N, x] = (0, a.q_F)(() => ({
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
        (0, r.jsxs)("div", {
            className: E.displayNameContainer,
            children: [
                (0, r.jsxs)(o.animated.div, {
                    style: {
                        opacity: N.opacity,
                        y: N.y,
                    },
                    children: [
                        (0, r.jsx)(a.Heading, {
                            className: E.title,
                            color: "header-primary",
                            variant: "heading-xl/extrabold",
                            children: j.header,
                        }),
                        (0, r.jsxs)("div", {
                            className: E.subtitle,
                            children: [
                                (0, r.jsx)(a.Heading, {
                                    color: "header-secondary",
                                    variant: "heading-sm/medium",
                                    children: j.subtitle,
                                }),
                                null != j.link &&
                                    (0, r.jsx)(a.Text, {
                                        className: E.link,
                                        color: "header-secondary",
                                        variant: "text-sm/medium",
                                        children: j.link,
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
                    })({}, h)),
                    (n = n =
                        {
                            displayProfile: v,
                            ref: p,
                            usernameSuggestionLoading: y,
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
