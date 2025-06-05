r.d(t, { Z: () => O }), r(388685);
var n = r(255367),
    i = r(73800),
    o = r(386230),
    s = r(481060),
    l = r(230711),
    a = r(687158),
    c = r(63063),
    u = r(51144),
    d = r(544508),
    m = r(801461),
    g = r(981631),
    f = r(388032),
    E = r(927687);
function O(e) {
    var t,
        r,
        { userRef: O, usernameSuggestionLoading: h = !1, oneClickFlow: p = !1 } = e,
        y = (function (e, t) {
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
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['userRef', 'usernameSuggestionLoading', 'oneClickFlow']);
    let { user: S, editState: b, onClose: x } = y,
        j = (0, a.ZP)(S.id),
        N = (function (e, t, r) {
            switch (e) {
                case m.Wq.EDIT_USERNAME:
                    return {
                        header: f.intl.string(f.t['a/zCWl']),
                        subtitle: f.intl.string(f.t.gGz0sb)
                    };
                case m.Wq.EDIT_DISPLAY_NAME:
                    return {
                        header: f.intl.string(f.t.SRDNcH),
                        subtitle: f.intl.string(f.t['940AS0'])
                    };
                case m.Wq.PREVIEW:
                    return {
                        header: f.intl.formatToPlainString(f.t.XDHrcn, { displayName: t }),
                        subtitle: f.intl.format(f.t.bWE0ZG, {
                            onClick: () => {
                                r(), l.Z.open(g.oAB.ACCOUNT);
                            }
                        })
                    };
                case m.Wq.SUGGESTION:
                    return {
                        header: f.intl.string(f.t.F7T4dX),
                        subtitle: f.intl.formatToPlainString(f.t.Z8F83d, {}),
                        link: f.intl.format(f.t['i2vB8/'], { helpdeskArticle: c.Z.getArticleURL(g.BhN.POMELO_FAQ) })
                    };
                default:
                    return {
                        header: f.intl.string(f.t['a/zCWl']),
                        subtitle: f.intl.string(f.t.gGz0sb)
                    };
            }
        })(b, u.ZP.getName(S), x),
        [v, T] = (0, s.q_F)(() => ({
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
        (0, n.jsxs)('div', {
            className: E.displayNameContainer,
            children: [
                (0, n.jsxs)(o.animated.div, {
                    style: {
                        opacity: v.opacity,
                        y: v.y
                    },
                    children: [
                        (0, n.jsx)(s.X6q, {
                            className: E.title,
                            color: 'header-primary',
                            variant: 'heading-xl/extrabold',
                            children: N.header
                        }),
                        (0, n.jsxs)('div', {
                            className: E.subtitle,
                            children: [
                                (0, n.jsx)(s.X6q, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: N.subtitle
                                }),
                                null != N.link &&
                                    (0, n.jsx)(s.Text, {
                                        className: E.link,
                                        color: 'header-secondary',
                                        variant: 'text-sm/medium',
                                        children: N.link
                                    })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)(
                    d.Z,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, y)),
                    (r = r =
                        {
                            displayProfile: j,
                            ref: O,
                            usernameSuggestionLoading: h,
                            oneClickFlow: p
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
                    t)
                )
            ]
        })
    );
}
