n.d(t, { Z: () => m }), n(472816), n(794429);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(373793),
    s = n(243814),
    l = n(993365),
    c = n(481060),
    u = n(211266),
    d = n(713938),
    f = n(388032),
    p = n(282320);
function _(e) {
    let { text: t, error: n, isFake: i } = e;
    return (0, r.jsxs)("div", {
        className: p.scope,
        children: [
            i
                ? (0, r.jsx)(c.k$p, {
                      size: "md",
                      color: "currentColor",
                      className: a()(p.icon, p.fakeScopeIcon),
                  })
                : (0, r.jsx)(c.owK, {
                      size: "md",
                      color: "currentColor",
                      className: a()(p.icon, p.scopeIcon),
                  }),
            (0, r.jsxs)("div", {
                className: p.scopeInner,
                children: [
                    (0, r.jsx)(l.x, {
                        variant: "text-md/normal",
                        color: i ? "text-muted" : void 0,
                        children: t,
                    }),
                    null != n
                        ? (0, r.jsx)(l.x, {
                              variant: "text-xs/normal",
                              color: "text-danger",
                              children: n,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function m(e) {
    var t;
    let {
            application: n,
            accountScopes: i,
            requestedScopes: l,
            integrationType: m,
            errors: h,
            isTrustedName: g = !1,
            noDivider: E = !1,
        } = e,
        b = (0, u.Z)(() => d.ZW[Math.floor(Math.random() * d.ZW.length)]);
    if (0 === i.length) return null;
    let y = b(),
        O = g ? f.t.PZpY9c : f.t["1Hz+Sl"],
        v = m === o.Y.USER_INSTALL && l.includes(s.x.APPLICATIONS_COMMANDS);
    return (0, r.jsxs)("div", {
        className: a()(p.scopes, E ? p.noDivider : void 0),
        children: [
            (0, r.jsx)(c.Heading, {
                variant: "heading-sm/normal",
                className: p.sectionLabel,
                children: f.intl.format(O, { application: null != (t = null == n ? void 0 : n.name) ? t : "" }),
            }),
            i
                .map((e) =>
                    (0, d.CI)(e, i).map((t, n) => {
                        var i;
                        return (0, r.jsx)(
                            _,
                            {
                                text: t,
                                error: 0 === n ? (null == h || null == (i = h[e]) ? void 0 : i[0]) : void 0,
                            },
                            "".concat(e, "-").concat(n),
                        );
                    }),
                )
                .flat(),
            v && (0, r.jsx)(_, { text: f.intl.string(f.t.Ls2XRq) }),
            (0, r.jsx)(_, {
                text: y,
                isFake: !0,
            }),
        ],
    });
}
