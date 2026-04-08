"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(136722),
    a = n(571356),
    o = n(397927),
    l = n(376092),
    u = n(985018),
    c = n(826938);
function d(e) {
    let { application: t, permissions: n, deniedPermissions: d, onPermissionsChange: _, guild: f } = e,
        p = i.useMemo(() => s.B8(f.permissions), [f.permissions]);
    i.useEffect(() => {
        _(!1, s.pb(n, p));
    }, [p, _, n]);
    let h = l.Q.filter((e) => s.zy(n, e)),
        m = h
            .filter((e) => !s.zy(p, e))
            .map((e) => {
                let t = (0, l.hx)(e),
                    n = !s.zy(d, e);
                return (0, r.jsx)(
                    "li",
                    {
                        className: c.EK,
                        children: (0, r.jsx)(o.Checkbox, { checked: n, onChange: (t) => _(t, e), label: t }),
                    },
                    String(e),
                );
            }),
        E = h
            .filter((e) => s.zy(p, e))
            .map((e) => {
                let t = (0, l.hx)(e);
                return (0, r.jsxs)(
                    "li",
                    {
                        className: c.EK,
                        children: [
                            (0, r.jsx)("div", {
                                className: c.nW,
                                children: (0, r.jsx)(o.PGe, { size: "md", color: "currentColor", className: c.Kk }),
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
                              children: u.intl.format(u.t.sOaT2j, { applicationName: t.name, guildName: f.name }),
                          }),
                          (0, r.jsx)("ul", { className: c.RH, children: m }),
                      ],
                  })
                : null,
            E.length > 0
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(a.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: u.intl.format(u.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, r.jsx)("ul", { className: c.RH, children: E }),
                      ],
                  })
                : null,
        ],
    });
}
