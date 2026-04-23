"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(136722),
    a = n(834730),
    o = n(150934),
    l = n(789645),
    u = n(376092),
    c = n(985018),
    d = n(751645);
function _(e) {
    let { application: t, permissions: n, deniedPermissions: _, onPermissionsChange: f, guild: p } = e,
        h = i.useMemo(() => s.B8(p.permissions), [p.permissions]);
    i.useEffect(() => {
        f(!1, s.pb(n, h));
    }, [h, f, n]);
    let E = u.Q.filter((e) => s.zy(n, e)),
        m = E.filter((e) => !s.zy(h, e)).map((e) => {
            let t = (0, u.hx)(e),
                n = !s.zy(_, e);
            return (0, r.jsx)(
                "li",
                { className: d.EK, children: (0, r.jsx)(o.S, { checked: n, onChange: (t) => f(t, e), label: t }) },
                String(e),
            );
        }),
        g = E.filter((e) => s.zy(h, e)).map((e) => {
            let t = (0, u.hx)(e);
            return (0, r.jsxs)(
                "li",
                {
                    className: d.EK,
                    children: [
                        (0, r.jsx)("div", {
                            className: d.nW,
                            children: (0, r.jsx)(l.P, { size: "md", color: "currentColor", className: d.Kk }),
                        }),
                        (0, r.jsx)(a.E, { variant: "text-md/normal", children: t }),
                    ],
                },
                String(e),
            );
        });
    return (0, r.jsxs)("div", {
        className: d.AS,
        children: [
            m.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(a.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: c.intl.format(c.t.sOaT2j, { applicationName: t.name, guildName: p.name }),
                          }),
                          (0, r.jsx)("ul", { className: d.RH, children: m }),
                      ],
                  })
                : null,
            g.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(a.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: c.intl.format(c.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, r.jsx)("ul", { className: d.RH, children: g }),
                      ],
                  })
                : null,
        ],
    });
}
