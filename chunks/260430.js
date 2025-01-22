r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(536091);
var a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(373793),
    u = r(243814),
    c = r(993365),
    d = r(481060),
    f = r(211266),
    p = r(713938),
    h = r(388032),
    _ = r(551182);
function m(e) {
    let { text: n, error: r, isFake: i } = e;
    return (0, a.jsxs)('div', {
        className: _.scope,
        children: [
            i
                ? (0, a.jsx)(d.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: s()(_.icon, _.fakeScopeIcon)
                  })
                : (0, a.jsx)(d.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: s()(_.icon, _.scopeIcon)
                  }),
            (0, a.jsxs)('div', {
                className: _.scopeInner,
                children: [
                    (0, a.jsx)(c.x, {
                        variant: 'text-md/normal',
                        color: i ? 'text-muted' : void 0,
                        children: n
                    }),
                    null != r
                        ? (0, a.jsx)(c.x, {
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: r
                          })
                        : null
                ]
            })
        ]
    });
}
function g(e) {
    var n;
    let { application: r, accountScopes: i, requestedScopes: o, integrationType: s, errors: c, isTrustedName: g = !1 } = e,
        E = (0, f.Z)(() => p.ZW[Math.floor(Math.random() * p.ZW.length)]);
    if (0 === i.length) return null;
    let v = E(),
        y = g ? h.t.PZpY9f : h.t['1Hz+Sk'],
        b = s === l.Y.USER_INSTALL && o.includes(u.x.APPLICATIONS_COMMANDS);
    return (0, a.jsxs)('div', {
        className: _.scopes,
        children: [
            (0, a.jsx)(d.Heading, {
                variant: 'heading-sm/normal',
                className: _.sectionLabel,
                children: h.intl.format(y, { application: null !== (n = null == r ? void 0 : r.name) && void 0 !== n ? n : '' })
            }),
            i
                .map((e) =>
                    (0, p.CI)(e, i).map((n, r) => {
                        var i;
                        return (0, a.jsx)(
                            m,
                            {
                                text: n,
                                error: 0 === r ? (null == c ? void 0 : null === (i = c[e]) || void 0 === i ? void 0 : i[0]) : void 0
                            },
                            ''.concat(e, '-').concat(r)
                        );
                    })
                )
                .flat(),
            b && (0, a.jsx)(m, { text: h.intl.string(h.t.Ls2XRk) }),
            (0, a.jsx)(m, {
                text: v,
                isFake: !0
            })
        ]
    });
}
