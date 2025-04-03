r.d(t, { Z: () => h }), r(47120);
var n = r(200651),
    i = r(192379),
    s = r(642128),
    o = r(481060),
    a = r(230711),
    l = r(687158),
    c = r(63063),
    u = r(51144),
    d = r(544508),
    g = r(801461),
    m = r(981631),
    f = r(388032),
    E = r(927687);
function h(e) {
    var t,
        r,
        { userRef: h, usernameSuggestionLoading: O = !1, oneClickFlow: p = !1 } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['userRef', 'usernameSuggestionLoading', 'oneClickFlow']);
    let { user: b, editState: S, onClose: N } = y,
        x = (0, l.ZP)(b.id),
        j = (function (e, t, r) {
            switch (e) {
                case g.Wq.EDIT_USERNAME:
                    return {
                        header: f.NW.string(f.t['a/zCWl']),
                        subtitle: f.NW.string(f.t.gGz0sb)
                    };
                case g.Wq.EDIT_DISPLAY_NAME:
                    return {
                        header: f.NW.string(f.t.SRDNcH),
                        subtitle: f.NW.string(f.t['940AS0'])
                    };
                case g.Wq.PREVIEW:
                    return {
                        header: f.NW.formatToPlainString(f.t.XDHrcn, { displayName: t }),
                        subtitle: f.NW.format(f.t.bWE0ZG, {
                            onClick: () => {
                                r(), a.Z.open(m.oAB.ACCOUNT);
                            }
                        })
                    };
                case g.Wq.SUGGESTION:
                    return {
                        header: f.NW.string(f.t.F7T4dX),
                        subtitle: f.NW.formatToPlainString(f.t.Z8F83d, {}),
                        link: f.NW.format(f.t['i2vB8/'], { helpdeskArticle: c.Z.getArticleURL(m.BhN.POMELO_FAQ) })
                    };
                default:
                    return {
                        header: f.NW.string(f.t['a/zCWl']),
                        subtitle: f.NW.string(f.t.gGz0sb)
                    };
            }
        })(S, u.ZP.getName(b), N),
        [v, T] = (0, o.q_F)(() => ({
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
        }, [T, S]),
        (0, n.jsxs)('div', {
            className: E.displayNameContainer,
            children: [
                (0, n.jsxs)(s.animated.div, {
                    style: {
                        opacity: v.opacity,
                        y: v.y
                    },
                    children: [
                        (0, n.jsx)(o.X6q, {
                            className: E.title,
                            color: 'header-primary',
                            variant: 'heading-xl/extrabold',
                            children: j.header
                        }),
                        (0, n.jsxs)('div', {
                            className: E.subtitle,
                            children: [
                                (0, n.jsx)(o.X6q, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: j.subtitle
                                }),
                                null != j.link &&
                                    (0, n.jsx)(o.Text, {
                                        className: E.link,
                                        color: 'header-secondary',
                                        variant: 'text-sm/medium',
                                        children: j.link
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
                            displayProfile: x,
                            ref: h,
                            usernameSuggestionLoading: O,
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
