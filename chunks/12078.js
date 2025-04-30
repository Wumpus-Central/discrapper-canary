n.d(t, { Z: () => C }), n(35282);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(686369),
    u = n(813197),
    d = n(430824),
    m = n(768581),
    g = n(921948),
    p = n(434404),
    h = n(981631),
    f = n(570911),
    x = n(388032),
    b = n(364313);
function j(e) {
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
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { profile: t, canManageGuild: n, handleClick: i, hasCustomBanner: l } = e,
        a = (0, c.nv)(),
        u = (0, c.qw)(t, a.hex());
    return (0, r.jsx)(o.ua7, {
        text: x.intl.string(x.t.W4Nd7e),
        children: (e) =>
            (0, r.jsx)(
                o.P3F,
                _(j({}, e), {
                    'aria-disabled': !n,
                    tabIndex: n ? 0 : -1,
                    'aria-label': x.intl.string(x.t.W4Nd7e),
                    onClick: n ? i : void 0,
                    style: { background: (0, c.dG)(u) },
                    className: s()(b.itemContainer, { [b.disabled]: !n }),
                    children: (0, r.jsx)('div', { className: s()({ [b.itemSelected]: !l && null == t.brandColorPrimary }) })
                })
            )
    });
}
function O(e) {
    let { isDiscoverable: t, profile: n, onCustomBannerChange: l, canManageGuild: a } = e,
        c = null != n.customBanner,
        d = i.useMemo(() => {
            if (null == n.customBanner) return null;
            let e = n.customBanner;
            return m.ff.test(e)
                ? e
                : m.ZP.getGuildDiscoverySplashURL({
                      id: n.id,
                      splash: n.customBanner,
                      size: 300 * (0, g.Z)()
                  });
        }, [n]);
    if (!t) return null;
    let p =
        null != d
            ? (0, r.jsx)('img', {
                  className: b.uploadedImage,
                  src: d,
                  alt: '',
                  'aria-hidden': !0
              })
            : (0, r.jsx)(o.dZu, { size: 'md' });
    return (0, r.jsx)('div', {
        className: b.uploadItemContainer,
        children: (0, r.jsx)(o.tEY, {
            within: !0,
            children: (0, r.jsx)('div', {
                className: s()(b.uploadItemWrapper, { [b.uploadItemSelected]: c }),
                children: (0, r.jsxs)('div', {
                    className: s()(b.uploadItem, { [b.disabled]: !a }),
                    children: [
                        p,
                        (0, r.jsx)('div', { className: b.overlay }),
                        (0, r.jsx)(o.vdY, {
                            size: 'custom',
                            className: b.overlayIcon,
                            width: 20,
                            height: 20,
                            color: 'white'
                        }),
                        (0, r.jsx)(u.ZP, {
                            multiple: !1,
                            tabIndex: 0,
                            onChange: l,
                            disabled: !a
                        })
                    ]
                })
            })
        })
    });
}
function C(e) {
    var t;
    let { profile: n, onCustomBannerChange: l, canManageGuild: u } = e,
        m = (0, a.e7)([d.Z], () => d.Z.getGuild(n.id)),
        g = null != (t = null == m ? void 0 : m.hasFeature(h.oNc.DISCOVERABLE)) && t,
        C = n.id,
        y = i.useCallback(
            (e) => () => {
                p.Z.updateGuildProfile(C, {
                    brandColorPrimary: e,
                    customBanner: null
                });
            },
            [C]
        ),
        N = i.useCallback((e) => (!g || null == n.customBanner) && e === n.brandColorPrimary, [n, g]);
    return (0, r.jsx)(o.hjN, {
        title: x.intl.string(x.t.BSVog4),
        children: (0, r.jsxs)('div', {
            className: b.grid,
            children: [
                (0, r.jsx)(v, {
                    profile: n,
                    canManageGuild: u,
                    handleClick: y(null),
                    hasCustomBanner: g && null != n.customBanner
                }),
                f.cb.map((e) => {
                    let { name: t, color: n } = e;
                    return (0, r.jsx)(
                        o.ua7,
                        {
                            text: t,
                            children: (e) =>
                                (0, r.jsx)(
                                    o.P3F,
                                    _(j({}, e), {
                                        'aria-disabled': !u,
                                        tabIndex: u ? 0 : -1,
                                        'aria-label': t,
                                        onClick: u ? y(n) : void 0,
                                        style: { background: (0, c.dG)(n) },
                                        className: s()(b.itemContainer, { [b.disabled]: !u }),
                                        children: (0, r.jsx)('div', { className: s()({ [b.itemSelected]: N(n) }) })
                                    })
                                )
                        },
                        t
                    );
                }),
                (0, r.jsx)(O, {
                    canManageGuild: u,
                    isDiscoverable: g,
                    profile: n,
                    onCustomBannerChange: l
                })
            ]
        })
    });
}
