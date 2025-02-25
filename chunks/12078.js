n.d(t, { Z: () => v }), n(301563);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(686369),
    d = n(813197),
    u = n(430824),
    m = n(768581),
    p = n(921948),
    g = n(434404),
    h = n(981631),
    f = n(570911),
    b = n(388032),
    x = n(39205),
    j = n(541946);
function N(e) {
    let { isDiscoverable: t, profile: n, onCustomBannerChange: s } = e,
        l = null != n.customBanner,
        c = i.useMemo(() => {
            if (null == n.customBanner) return null;
            let e = n.customBanner;
            return m.ff.test(e)
                ? e
                : m.ZP.getGuildDiscoverySplashURL({
                      id: n.id,
                      splash: n.customBanner,
                      size: 300 * (0, p.Z)()
                  });
        }, [n]);
    if (!t) return null;
    let u =
        null != c
            ? (0, r.jsx)('img', {
                  className: x.uploadedImage,
                  src: c,
                  alt: '',
                  'aria-hidden': !0
              })
            : (0, r.jsx)(o.dZu, { size: 'md' });
    return (0, r.jsx)('div', {
        className: x.uploadItemContainer,
        children: (0, r.jsx)(o.tEY, {
            within: !0,
            children: (0, r.jsx)('div', {
                className: a()(x.uploadItemWrapper, { [x.uploadItemSelected]: l }),
                children: (0, r.jsxs)('div', {
                    className: x.uploadItem,
                    children: [
                        u,
                        (0, r.jsx)('div', { className: x.overlay }),
                        (0, r.jsx)(o.vdY, {
                            size: 'custom',
                            className: x.overlayIcon,
                            width: 20,
                            height: 20,
                            color: 'white'
                        }),
                        (0, r.jsx)(d.ZP, {
                            multiple: !1,
                            tabIndex: 0,
                            onChange: s
                        })
                    ]
                })
            })
        })
    });
}
function v(e) {
    var t;
    let { profile: n, onCustomBannerChange: s } = e,
        d = (0, l.e7)([u.Z], () => u.Z.getGuild(n.id)),
        m = null !== (t = null == d ? void 0 : d.hasFeature(h.oNc.DISCOVERABLE)) && void 0 !== t && t,
        p = n.id,
        v = i.useCallback(
            (e, t) => () => {
                g.Z.updateGuildProfile(p, {
                    brandColorPrimary: t,
                    customBanner: null
                });
            },
            [p]
        ),
        _ = i.useCallback((e) => (!m || null == n.customBanner) && e === n.brandColorPrimary, [n, m]);
    return (0, r.jsxs)(o.hjN, {
        className: j.section,
        children: [
            (0, r.jsxs)('div', {
                className: j.sectionHeader,
                children: [
                    (0, r.jsx)(o.vwX, { children: b.NW.string(b.t.BSVog4) }),
                    (0, r.jsx)(o.R94, {
                        type: o.geA.DESCRIPTION,
                        children: b.NW.string(b.t['93S9Gx'])
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: x.grid,
                children: [
                    f.cb.map((e) => {
                        let { name: t, color: n } = e;
                        return (0, r.jsx)(
                            o.ua7,
                            {
                                text: t,
                                children: (e) => {
                                    var i, s;
                                    return (0, r.jsx)(
                                        o.P3F,
                                        ((i = (function (e) {
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
                                        })({}, e)),
                                        (s = s =
                                            {
                                                'aria-label': t,
                                                onClick: v(t, n),
                                                style: { background: (0, c.d)(n) },
                                                className: x.itemContainer,
                                                children: (0, r.jsx)('div', { className: a()({ [x.itemSelected]: _(n) }) })
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(s)).forEach(function (e) {
                                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                              }),
                                        i)
                                    );
                                }
                            },
                            t
                        );
                    }),
                    (0, r.jsx)(N, {
                        isDiscoverable: m,
                        profile: n,
                        onCustomBannerChange: s
                    })
                ]
            })
        ]
    });
}
