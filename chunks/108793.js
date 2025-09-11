r.d(t, { Z: () => p }), r(388685);
var n = r(951288),
    i = r(647438),
    o = r(938288),
    a = r(481060),
    s = r(230711),
    l = r(687158),
    c = r(63063),
    u = r(51144),
    d = r(544508),
    m = r(801461),
    f = r(981631),
    g = r(388032),
    E = r(38579);
function p(e) {
    var t,
        r,
        { userRef: p, usernameSuggestionLoading: O = !1, oneClickFlow: y = !1 } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["userRef", "usernameSuggestionLoading", "oneClickFlow"]);
    let { user: b, editState: S, onClose: _ } = h,
        v = (0, l.ZP)(b.id),
        j = (function (e, t, r) {
            switch (e) {
                case m.Wq.EDIT_USERNAME:
                    return {
                        header: g.intl.string(g.t["a/zCWl"]),
                        subtitle: g.intl.string(g.t.gGz0sb),
                    };
                case m.Wq.EDIT_DISPLAY_NAME:
                    return {
                        header: g.intl.string(g.t.SRDNcH),
                        subtitle: g.intl.string(g.t["940AS0"]),
                    };
                case m.Wq.PREVIEW:
                    return {
                        header: g.intl.formatToPlainString(g.t.XDHrcn, { displayName: t }),
                        subtitle: g.intl.format(g.t.bWE0ZG, {
                            onClick: () => {
                                r(), s.Z.open(f.oAB.ACCOUNT);
                            },
                        }),
                    };
                case m.Wq.SUGGESTION:
                    return {
                        header: g.intl.string(g.t.F7T4dX),
                        subtitle: g.intl.formatToPlainString(g.t.Z8F83d, {}),
                        link: g.intl.format(g.t["i2vB8/"], { helpdeskArticle: c.Z.getArticleURL(f.BhN.POMELO_FAQ) }),
                    };
                default:
                    return {
                        header: g.intl.string(g.t["a/zCWl"]),
                        subtitle: g.intl.string(g.t.gGz0sb),
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
        (0, n.jsxs)("div", {
            className: E.displayNameContainer,
            children: [
                (0, n.jsxs)(o.animated.div, {
                    style: {
                        opacity: N.opacity,
                        y: N.y,
                    },
                    children: [
                        (0, n.jsx)(a.X6q, {
                            className: E.title,
                            color: "header-primary",
                            variant: "heading-xl/extrabold",
                            children: j.header,
                        }),
                        (0, n.jsxs)("div", {
                            className: E.subtitle,
                            children: [
                                (0, n.jsx)(a.X6q, {
                                    color: "header-secondary",
                                    variant: "heading-sm/medium",
                                    children: j.subtitle,
                                }),
                                null != j.link &&
                                    (0, n.jsx)(a.Text, {
                                        className: E.link,
                                        color: "header-secondary",
                                        variant: "text-sm/medium",
                                        children: j.link,
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsx)(
                    d.Z,
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
                    })({}, h)),
                    (r = r =
                        {
                            displayProfile: v,
                            ref: p,
                            usernameSuggestionLoading: O,
                            oneClickFlow: y,
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
