r.d(t, { Z: () => v });
var n = r(200651);
r(192379);
var l = r(120356),
    i = r.n(l),
    o = r(481060),
    a = r(328731),
    c = r(442550),
    s = r(435439),
    u = r(206295),
    p = r(297781),
    d = r(313201),
    f = r(231338),
    b = r(388032),
    O = r(217440),
    y = r(72378);
function m(e) {
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
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function g(e) {
    let { className: t, clickableClassName: r, clickable: l, children: a } = e,
        c = (0, d.Dt)();
    if (null != l && 'href' in l) {
        let { ariaDescription: e, href: s } = l;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(o.nn4, {
                    id: c,
                    children: e
                }),
                (0, n.jsx)(o.eee, {
                    className: i()(t, r),
                    href: s,
                    'aria-describedby': c,
                    children: a
                })
            ]
        });
    }
    let { onClick: s, ariaDescription: u } = null != l ? l : {};
    return (0, n.jsxs)(o.g$b.Provider, {
        value: null == s,
        children: [
            null != s &&
                null != u &&
                (0, n.jsx)(o.nn4, {
                    id: c,
                    children: u
                }),
            (0, n.jsx)(o.P3F, {
                onClick: s,
                'aria-describedby': null == s ? void 0 : c,
                className: i()(t, null != s && r),
                children: a
            })
        ]
    });
}
function h(e) {
    var { clickable: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ['clickable']);
    return (0, n.jsx)(
        g,
        j(m({}, r), {
            clickable: j(m({}, t), { ariaDescription: '' }),
            clickableClassName: y.clickable
        })
    );
}
function v(e) {
    let { entry: t, channel: r, title: l, subtitle: y, thumbnailUrl: j, titleClickable: v, subtitleClickable: P, thumbnailClickable: x, providerIconProps: w, style: S = {} } = e,
        C = (0, d.Dt)(),
        { primaryColor: E, secondaryColor: N } = (0, u.Z)(j);
    return (
        null != j && (S.background = 'linear-gradient(45deg, '.concat(E, ', ').concat(N, ')')),
        (0, n.jsx)(o.f6W, {
            theme: f.BR.DARK,
            children: (e) =>
                (0, n.jsxs)('figure', {
                    'aria-roledescription': b.NW.string(b.t.zFfUhI),
                    'aria-labelledby': C,
                    'data-disable-adaptive-theme': !0,
                    className: i()(O.container, e),
                    style: S,
                    children: [
                        (0, n.jsx)(g, {
                            className: O.thumbnailContainer,
                            clickableClassName: O.clickable,
                            clickable: x,
                            children: (0, n.jsx)(c.f, {
                                src: j,
                                constrain: 'width',
                                size: 64,
                                'aria-hidden': !0
                            })
                        }),
                        (0, n.jsxs)('div', {
                            className: O.infoContainer,
                            children: [
                                (0, n.jsx)(a.Z, {
                                    channel: r,
                                    entry: t,
                                    className: O.users
                                }),
                                (0, n.jsx)(o.LZC, { size: 2 }),
                                (0, n.jsx)(h, {
                                    clickable: v,
                                    className: O.clickableText,
                                    children: (0, n.jsx)(o.X6q, {
                                        id: C,
                                        variant: 'heading-md/medium',
                                        lineClamp: 1,
                                        className: i()(O.textPrimary, O.truncatedText),
                                        scaleFontToUserSetting: !0,
                                        children: l
                                    })
                                }),
                                null != y
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(o.LZC, { size: 2 }),
                                              (0, n.jsx)(h, {
                                                  clickable: P,
                                                  className: O.clickableText,
                                                  children: (0, n.jsx)(o.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: i()(O.textSecondary, O.truncatedText),
                                                      lineClamp: 1,
                                                      scaleFontToUserSetting: !0,
                                                      children: y
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, n.jsx)(p.PZ, {
                                    className: O.badges,
                                    entry: t,
                                    location: p.Gt.EMBED
                                })
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: O.headerIcons,
                            children: null != w ? (0, n.jsx)(s.Z, m({}, w)) : null
                        })
                    ]
                })
        })
    );
}
