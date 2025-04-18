n.d(t, { Z: () => h }), n(472816), n(794429);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(373793),
    s = n(243814),
    l = n(993365),
    c = n(481060),
    u = n(211266),
    d = n(713938),
    f = n(388032),
    _ = n(965323);
function p(e) {
    let { text: t, error: n, isFake: i } = e;
    return (0, r.jsxs)('div', {
        className: _.scope,
        children: [
            i
                ? (0, r.jsx)(c.k$p, {
                      size: 'md',
                      color: 'currentColor',
                      className: a()(_.icon, _.fakeScopeIcon)
                  })
                : (0, r.jsx)(c.owK, {
                      size: 'md',
                      color: 'currentColor',
                      className: a()(_.icon, _.scopeIcon)
                  }),
            (0, r.jsxs)('div', {
                className: _.scopeInner,
                children: [
                    (0, r.jsx)(l.x, {
                        variant: 'text-md/normal',
                        color: i ? 'text-muted' : void 0,
                        children: t
                    }),
                    null != n
                        ? (0, r.jsx)(l.x, {
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
    let { application: n, accountScopes: i, requestedScopes: l, integrationType: h, errors: m, isTrustedName: g = !1, noDivider: E = !1 } = e,
        b = (0, u.Z)(() => d.ZW[Math.floor(Math.random() * d.ZW.length)]);
    if (0 === i.length) return null;
    let y = b(),
        v = g ? f.t.PZpY9f : f.t['1Hz+Sk'],
        O = h === o.Y.USER_INSTALL && l.includes(s.x.APPLICATIONS_COMMANDS);
    return (0, r.jsxs)('div', {
        className: a()(_.scopes, E ? _.noDivider : void 0),
        children: [
            (0, r.jsx)(c.X6q, {
                variant: 'heading-sm/normal',
                className: _.sectionLabel,
                children: f.NW.format(v, { application: null != (t = null == n ? void 0 : n.name) ? t : '' })
            }),
            i
                .map((e) =>
                    (0, d.CI)(e, i).map((t, n) => {
                        var i;
                        return (0, r.jsx)(
                            p,
                            {
                                text: t,
                                error: 0 === n ? (null == m || null == (i = m[e]) ? void 0 : i[0]) : void 0
                            },
                            ''.concat(e, '-').concat(n)
                        );
                    })
                )
                .flat(),
            O && (0, r.jsx)(p, { text: f.NW.string(f.t.Ls2XRk) }),
            (0, r.jsx)(p, {
                text: y,
                isFake: !0
            })
        ]
    });
}
