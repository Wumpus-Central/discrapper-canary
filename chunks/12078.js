n.d(t, { Z: () => E }), n(301563);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(692547),
    c = n(481060),
    A = n(686369),
    d = n(813197),
    u = n(430824),
    g = n(768581),
    f = n(921948),
    m = n(434404),
    p = n(981631),
    h = n(570911),
    C = n(388032),
    b = n(832306);
function v(e) {
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
function x(e, t) {
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
function N(e) {
    let { profile: t, canManageGuild: n, handleClick: i, hasCustomBanner: s } = e,
        l = (0, c.dQu)(o.Z.colors.BG_BASE_TERTIARY),
        d = (0, A.q)(t, l.hex());
    return (0, r.jsx)(c.ua7, {
        text: C.NW.string(C.t.W4Nd7e),
        children: (e) =>
            (0, r.jsx)(
                c.P3F,
                x(v({}, e), {
                    'aria-disabled': !n,
                    tabIndex: n ? 0 : -1,
                    'aria-label': C.NW.string(C.t.W4Nd7e),
                    onClick: n ? i : void 0,
                    style: { background: (0, A.d)(d) },
                    className: a()(b.itemContainer, { [b.disabled]: !n }),
                    children: (0, r.jsx)('div', { className: a()({ [b.itemSelected]: !s && null == t.brandColorPrimary }) })
                })
            )
    });
}
function j(e) {
    let { isDiscoverable: t, profile: n, onCustomBannerChange: s, canManageGuild: l } = e,
        o = null != n.customBanner,
        A = i.useMemo(() => {
            if (null == n.customBanner) return null;
            let e = n.customBanner;
            return g.ff.test(e)
                ? e
                : g.ZP.getGuildDiscoverySplashURL({
                      id: n.id,
                      splash: n.customBanner,
                      size: 300 * (0, f.Z)()
                  });
        }, [n]);
    if (!t) return null;
    let u =
        null != A
            ? (0, r.jsx)('img', {
                  className: b.uploadedImage,
                  src: A,
                  alt: '',
                  'aria-hidden': !0
              })
            : (0, r.jsx)(c.dZu, { size: 'md' });
    return (0, r.jsx)('div', {
        className: b.uploadItemContainer,
        children: (0, r.jsx)(c.tEY, {
            within: !0,
            children: (0, r.jsx)('div', {
                className: a()(b.uploadItemWrapper, { [b.uploadItemSelected]: o }),
                children: (0, r.jsxs)('div', {
                    className: a()(b.uploadItem, { [b.disabled]: !l }),
                    children: [
                        u,
                        (0, r.jsx)('div', { className: b.overlay }),
                        (0, r.jsx)(c.vdY, {
                            size: 'custom',
                            className: b.overlayIcon,
                            width: 20,
                            height: 20,
                            color: 'white'
                        }),
                        (0, r.jsx)(d.ZP, {
                            multiple: !1,
                            tabIndex: 0,
                            onChange: s,
                            disabled: !l
                        })
                    ]
                })
            })
        })
    });
}
function E(e) {
    var t;
    let { profile: n, onCustomBannerChange: s, canManageGuild: o } = e,
        d = (0, l.e7)([u.Z], () => u.Z.getGuild(n.id)),
        g = null !== (t = null == d ? void 0 : d.hasFeature(p.oNc.DISCOVERABLE)) && void 0 !== t && t,
        f = n.id,
        E = i.useCallback(
            (e) => () => {
                m.Z.updateGuildProfile(f, {
                    brandColorPrimary: e,
                    customBanner: null
                });
            },
            [f]
        ),
        I = i.useCallback((e) => (!g || null == n.customBanner) && e === n.brandColorPrimary, [n, g]);
    return (0, r.jsx)(c.hjN, {
        title: C.NW.string(C.t.BSVog4),
        children: (0, r.jsxs)('div', {
            className: b.grid,
            children: [
                (0, r.jsx)(N, {
                    profile: n,
                    canManageGuild: o,
                    handleClick: E(null),
                    hasCustomBanner: g && null != n.customBanner
                }),
                h.cb.map((e) => {
                    let { name: t, color: n } = e;
                    return (0, r.jsx)(
                        c.ua7,
                        {
                            text: t,
                            children: (e) =>
                                (0, r.jsx)(
                                    c.P3F,
                                    x(v({}, e), {
                                        'aria-disabled': !o,
                                        tabIndex: o ? 0 : -1,
                                        'aria-label': t,
                                        onClick: o ? E(n) : void 0,
                                        style: { background: (0, A.d)(n) },
                                        className: a()(b.itemContainer, { [b.disabled]: !o }),
                                        children: (0, r.jsx)('div', { className: a()({ [b.itemSelected]: I(n) }) })
                                    })
                                )
                        },
                        t
                    );
                }),
                (0, r.jsx)(j, {
                    canManageGuild: o,
                    isDiscoverable: g,
                    profile: n,
                    onCustomBannerChange: s
                })
            ]
        })
    });
}
