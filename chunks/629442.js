"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(136722),
    a = n(834730),
    o = n(150934),
    l = n(789645),
    u = n(376092),
    d = n(985018),
    c = n(751645);
function _(e) {
    let { application: t, permissions: n, deniedPermissions: _, onPermissionsChange: f, guild: E } = e,
        h = i.useMemo(() => s.B8(E.permissions), [E.permissions]);
    i.useEffect(() => {
        f(!1, s.pb(n, h));
    }, [h, f, n]);
    let p = u.Q.filter((e) => s.zy(n, e)),
        m = p
            .filter((e) => !s.zy(h, e))
            .map((e) => {
                let t = (0, u.hx)(e),
                    n = !s.zy(_, e);
                return (0, r.jsx)(
                    "li",
                    { className: c.EK, children: (0, r.jsx)(o.S, { checked: n, onChange: (t) => f(t, e), label: t }) },
                    String(e),
                );
            }),
        g = p
            .filter((e) => s.zy(h, e))
            .map((e) => {
                let t = (0, u.hx)(e);
                return (0, r.jsxs)(
                    "li",
                    {
                        className: c.EK,
                        children: [
                            (0, r.jsx)("div", {
                                className: c.nW,
                                children: (0, r.jsx)(l.P, { size: "md", color: "currentColor", className: c.Kk }),
                            }),
                            (0, r.jsx)(a.E, { variant: "text-md/normal", children: t }),
                        ],
                    },
                    String(e),
                );
            });
    return (0, r.jsxs)("div", {
        className: c.AS,
        children: [
            m.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(a.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: d.intl.format(d.t.sOaT2j, { applicationName: t.name, guildName: E.name }),
                          }),
                          (0, r.jsx)("ul", { className: c.RH, children: m }),
                      ],
                  })
                : null,
            g.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(a.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: d.intl.format(d.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, r.jsx)("ul", { className: c.RH, children: g }),
                      ],
                  })
                : null,
        ],
    });
}
