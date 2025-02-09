n.d(t, { Z: () => h }), n(536091);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(373793),
    o = n(243814),
    l = n(993365),
    u = n(481060),
    c = n(211266),
    d = n(713938),
    f = n(388032),
    _ = n(85907);
function p(e) {
    let { text: t, error: n, isFake: r } = e;
    return (0, i.jsxs)('div', {
        className: _.scope,
        children: [
            r
                ? (0, i.jsx)(u.k$p, {
                      size: 'md',
                      color: 'currentColor',
                      className: a()(_.icon, _.fakeScopeIcon)
                  })
                : (0, i.jsx)(u.owK, {
                      size: 'md',
                      color: 'currentColor',
                      className: a()(_.icon, _.scopeIcon)
                  }),
            (0, i.jsxs)('div', {
                className: _.scopeInner,
                children: [
                    (0, i.jsx)(l.x, {
                        variant: 'text-md/normal',
                        color: r ? 'text-muted' : void 0,
                        children: t
                    }),
                    null != n
                        ? (0, i.jsx)(l.x, {
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: n
                          })
                        : null
                ]
            })
        ]
    });
}
function h(e) {
    var t;
    let { application: n, accountScopes: r, requestedScopes: a, integrationType: l, errors: h, isTrustedName: m = !1 } = e,
        g = (0, c.Z)(() => d.ZW[Math.floor(Math.random() * d.ZW.length)]);
    if (0 === r.length) return null;
    let E = g(),
        v = m ? f.t.PZpY9f : f.t['1Hz+Sk'],
        y = l === s.Y.USER_INSTALL && a.includes(o.x.APPLICATIONS_COMMANDS);
    return (0, i.jsxs)('div', {
        className: _.scopes,
        children: [
            (0, i.jsx)(u.X6q, {
                variant: 'heading-sm/normal',
                className: _.sectionLabel,
                children: f.intl.format(v, { application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : '' })
            }),
            r
                .map((e) =>
                    (0, d.CI)(e, r).map((t, n) => {
                        var r;
                        return (0, i.jsx)(
                            p,
                            {
                                text: t,
                                error: 0 === n ? (null == h ? void 0 : null === (r = h[e]) || void 0 === r ? void 0 : r[0]) : void 0
                            },
                            ''.concat(e, '-').concat(n)
                        );
                    })
                )
                .flat(),
            y && (0, i.jsx)(p, { text: f.intl.string(f.t.Ls2XRk) }),
            (0, i.jsx)(p, {
                text: E,
                isFake: !0
            })
        ]
    });
}
