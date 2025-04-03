n.d(t, { Z: () => O }), n(301563);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(686369),
    u = n(813197),
    m = n(430824),
    g = n(768581),
    p = n(921948),
    h = n(434404),
    f = n(981631),
    b = n(570911),
    x = n(388032),
    j = n(364313);
function N(e) {
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
    let { profile: t, canManageGuild: n, handleClick: i, hasCustomBanner: s } = e,
        l = (0, c.dQu)(o.Z.colors.BG_BASE_TERTIARY),
        u = (0, d.q)(t, l.hex());
    return (0, r.jsx)(c.ua7, {
        text: x.NW.string(x.t.W4Nd7e),
        children: (e) =>
            (0, r.jsx)(
                c.P3F,
                _(N({}, e), {
                    'aria-disabled': !n,
                    tabIndex: n ? 0 : -1,
                    'aria-label': x.NW.string(x.t.W4Nd7e),
                    onClick: n ? i : void 0,
                    style: { background: (0, d.d)(u) },
                    className: a()(j.itemContainer, { [j.disabled]: !n }),
                    children: (0, r.jsx)('div', { className: a()({ [j.itemSelected]: !s && null == t.brandColorPrimary }) })
                })
            )
    });
}
function C(e) {
    let { isDiscoverable: t, profile: n, onCustomBannerChange: s, canManageGuild: l } = e,
        o = null != n.customBanner,
        d = i.useMemo(() => {
            if (null == n.customBanner) return null;
            let e = n.customBanner;
            return g.ff.test(e)
                ? e
                : g.ZP.getGuildDiscoverySplashURL({
                      id: n.id,
                      splash: n.customBanner,
                      size: 300 * (0, p.Z)()
                  });
        }, [n]);
    if (!t) return null;
    let m =
        null != d
            ? (0, r.jsx)('img', {
                  className: j.uploadedImage,
                  src: d,
                  alt: '',
                  'aria-hidden': !0
              })
            : (0, r.jsx)(c.dZu, { size: 'md' });
    return (0, r.jsx)('div', {
        className: j.uploadItemContainer,
        children: (0, r.jsx)(c.tEY, {
            within: !0,
            children: (0, r.jsx)('div', {
                className: a()(j.uploadItemWrapper, { [j.uploadItemSelected]: o }),
                children: (0, r.jsxs)('div', {
                    className: a()(j.uploadItem, { [j.disabled]: !l }),
                    children: [
                        m,
                        (0, r.jsx)('div', { className: j.overlay }),
                        (0, r.jsx)(c.vdY, {
                            size: 'custom',
                            className: j.overlayIcon,
                            width: 20,
                            height: 20,
                            color: 'white'
                        }),
                        (0, r.jsx)(u.ZP, {
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
function O(e) {
    var t;
    let { profile: n, onCustomBannerChange: s, canManageGuild: o } = e,
        u = (0, l.e7)([m.Z], () => m.Z.getGuild(n.id)),
        g = null != (t = null == u ? void 0 : u.hasFeature(f.oNc.DISCOVERABLE)) && t,
        p = n.id,
        O = i.useCallback(
            (e) => () => {
                h.Z.updateGuildProfile(p, {
                    brandColorPrimary: e,
                    customBanner: null
                });
            },
            [p]
        ),
        y = i.useCallback((e) => (!g || null == n.customBanner) && e === n.brandColorPrimary, [n, g]);
    return (0, r.jsx)(c.hjN, {
        title: x.NW.string(x.t.BSVog4),
        children: (0, r.jsxs)('div', {
            className: j.grid,
            children: [
                (0, r.jsx)(v, {
                    profile: n,
                    canManageGuild: o,
                    handleClick: O(null),
                    hasCustomBanner: g && null != n.customBanner
                }),
                b.cb.map((e) => {
                    let { name: t, color: n } = e;
                    return (0, r.jsx)(
                        c.ua7,
                        {
                            text: t,
                            children: (e) =>
                                (0, r.jsx)(
                                    c.P3F,
                                    _(N({}, e), {
                                        'aria-disabled': !o,
                                        tabIndex: o ? 0 : -1,
                                        'aria-label': t,
                                        onClick: o ? O(n) : void 0,
                                        style: { background: (0, d.d)(n) },
                                        className: a()(j.itemContainer, { [j.disabled]: !o }),
                                        children: (0, r.jsx)('div', { className: a()({ [j.itemSelected]: y(n) }) })
                                    })
                                )
                        },
                        t
                    );
                }),
                (0, r.jsx)(C, {
                    canManageGuild: o,
                    isDiscoverable: g,
                    profile: n,
                    onCustomBannerChange: s
                })
            ]
        })
    });
}
