"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    s = n(136722),
    a = n(834730),
    o = n(150934),
    l = n(789645),
    d = n(376092),
    _ = n(985018),
    u = n(751645);
function c(e) {
    let { application: t, permissions: n, deniedPermissions: c, onPermissionsChange: E, guild: h } = e,
        m = r.useMemo(() => s.B8(h.permissions), [h.permissions]);
    r.useEffect(() => {
        E(!1, s.pb(n, m));
    }, [m, E, n]);
    let f = d.Q.filter((e) => s.zy(n, e)),
        g = f
            .filter((e) => !s.zy(m, e))
            .map((e) => {
                let t = (0, d.hx)(e),
                    n = !s.zy(c, e);
                return (0, i.jsx)(
                    "li",
                    { className: u.EK, children: (0, i.jsx)(o.S, { checked: n, onChange: (t) => E(t, e), label: t }) },
                    String(e),
                );
            }),
        p = f
            .filter((e) => s.zy(m, e))
            .map((e) => {
                let t = (0, d.hx)(e);
                return (0, i.jsxs)(
                    "li",
                    {
                        className: u.EK,
                        children: [
                            (0, i.jsx)("div", {
                                className: u.nW,
                                children: (0, i.jsx)(l.P, { size: "md", color: "currentColor", className: u.Kk }),
                            }),
                            (0, i.jsx)(a.E, { variant: "text-md/normal", children: t }),
                        ],
                    },
                    String(e),
                );
            });
    return (0, i.jsxs)("div", {
        className: u.AS,
        children: [
            g.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(a.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: _.intl.format(_.t.sOaT2j, { applicationName: t.name, guildName: h.name }),
                          }),
                          (0, i.jsx)("ul", { className: u.RH, children: g }),
                      ],
                  })
                : null,
            p.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(a.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: _.intl.format(_.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, i.jsx)("ul", { className: u.RH, children: p }),
                      ],
                  })
                : null,
        ],
    });
}
