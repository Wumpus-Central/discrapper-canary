(r.d(t, { Z: () => E }), r(388685));
var n = r(255367),
    i = r(73800),
    a = r(264738),
    o = r(481060),
    s = r(230711),
    l = r(687158),
    c = r(63063),
    u = r(51144),
    d = r(544508),
    m = r(801461),
    g = r(981631),
    f = r(388032),
    p = r(927687);
function E(e) {
    var t,
        r,
        { userRef: E, usernameSuggestionLoading: h = !1, oneClickFlow: y = !1 } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) ((r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) ((r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
            }
            return i;
        })(e, ['userRef', 'usernameSuggestionLoading', 'oneClickFlow']);
    let { user: b, editState: S, onClose: _ } = O,
        x = (0, l.ZP)(b.id),
        v = (function (e, t, r) {
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
                                (r(), s.Z.open(g.oAB.ACCOUNT));
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
        })(S, u.ZP.getName(b), _),
        [N, j] = (0, o.q_F)(() => ({
            opacity: 0,
            y: 10
        }));
    return (
        i.useEffect(() => {
            j({
                y: 0,
                opacity: 1,
                from: {
                    y: 10,
                    opacity: 0
                }
            });
        }, [j, S]),
        (0, n.jsxs)('div', {
            className: p.displayNameContainer,
            children: [
                (0, n.jsxs)(a.animated.div, {
                    style: {
                        opacity: N.opacity,
                        y: N.y
                    },
                    children: [
                        (0, n.jsx)(o.X6q, {
                            className: p.title,
                            color: 'header-primary',
                            variant: 'heading-xl/extrabold',
                            children: v.header
                        }),
                        (0, n.jsxs)('div', {
                            className: p.subtitle,
                            children: [
                                (0, n.jsx)(o.X6q, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: v.subtitle
                                }),
                                null != v.link &&
                                    (0, n.jsx)(o.Text, {
                                        className: p.link,
                                        color: 'header-secondary',
                                        variant: 'text-sm/medium',
                                        children: v.link
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
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    ((n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n));
                                }));
                        }
                        return e;
                    })({}, O)),
                    (r = r =
                        {
                            displayProfile: x,
                            ref: E,
                            usernameSuggestionLoading: h,
                            oneClickFlow: y
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
