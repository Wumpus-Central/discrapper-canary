n.d(t, { Z: () => h }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(200100),
    o = n(481060),
    l = n(230711),
    a = n(687158),
    c = n(63063),
    u = n(51144),
    d = n(544508),
    g = n(801461),
    m = n(981631),
    f = n(388032),
    E = n(927687);
function h(e) {
    var t,
        n,
        { userRef: h, usernameSuggestionLoading: O = !1, oneClickFlow: p = !1 } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['userRef', 'usernameSuggestionLoading', 'oneClickFlow']);
    let { user: S, editState: b, onClose: x } = y,
        j = (0, a.ZP)(S.id),
        v = (function (e, t, n) {
            switch (e) {
                case g.Wq.EDIT_USERNAME:
                    return {
                        header: f.intl.string(f.t['a/zCWl']),
                        subtitle: f.intl.string(f.t.gGz0sb)
                    };
                case g.Wq.EDIT_DISPLAY_NAME:
                    return {
                        header: f.intl.string(f.t.SRDNcH),
                        subtitle: f.intl.string(f.t['940AS0'])
                    };
                case g.Wq.PREVIEW:
                    return {
                        header: f.intl.formatToPlainString(f.t.XDHrcn, { displayName: t }),
                        subtitle: f.intl.format(f.t.bWE0ZG, {
                            onClick: () => {
                                n(), l.Z.open(m.oAB.ACCOUNT);
                            }
                        })
                    };
                case g.Wq.SUGGESTION:
                    return {
                        header: f.intl.string(f.t.F7T4dX),
                        subtitle: f.intl.formatToPlainString(f.t.Z8F83d, {}),
                        link: f.intl.format(f.t['i2vB8/'], { helpdeskArticle: c.Z.getArticleURL(m.BhN.POMELO_FAQ) })
                    };
                default:
                    return {
                        header: f.intl.string(f.t['a/zCWl']),
                        subtitle: f.intl.string(f.t.gGz0sb)
                    };
            }
        })(b, u.ZP.getName(S), x),
        [N, T] = (0, o.q_F)(() => ({
            opacity: 0,
            y: 10
        }));
    return (
        i.useEffect(() => {
            T({
                y: 0,
                opacity: 1,
                from: {
                    y: 10,
                    opacity: 0
                }
            });
        }, [T, b]),
        (0, r.jsxs)('div', {
            className: E.displayNameContainer,
            children: [
                (0, r.jsxs)(s.animated.div, {
                    style: {
                        opacity: N.opacity,
                        y: N.y
                    },
                    children: [
                        (0, r.jsx)(o.X6q, {
                            className: E.title,
                            color: 'header-primary',
                            variant: 'heading-xl/extrabold',
                            children: v.header
                        }),
                        (0, r.jsxs)('div', {
                            className: E.subtitle,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: v.subtitle
                                }),
                                null != v.link &&
                                    (0, r.jsx)(o.Text, {
                                        className: E.link,
                                        color: 'header-secondary',
                                        variant: 'text-sm/medium',
                                        children: v.link
                                    })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(
                    d.Z,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, y)),
                    (n = n =
                        {
                            displayProfile: j,
                            ref: h,
                            usernameSuggestionLoading: O,
                            oneClickFlow: p
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
                    t)
                )
            ]
        })
    );
}
