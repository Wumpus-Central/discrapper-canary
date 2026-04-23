a.d(t, { A: () => u });
var s = a(627968);
a(64700);
var l = a(101277),
    r = a(827734),
    i = a(834730),
    n = a(821609),
    c = a(192308),
    o = a(985018),
    d = a(943586);
let u = (e) => {
    let { hasHub: t } = e;
    return (0, s.jsxs)("div", {
        className: d.kL,
        children: [
            (0, s.jsx)("div", {
                className: d.zc,
                children: (0, s.jsx)(l.P, { size: "md", color: r.A.colors.WHITE.css }),
            }),
            (0, s.jsx)(i.E, {
                color: "text-strong",
                variant: "text-lg/semibold",
                className: d.wx,
                children: t ? o.intl.string(o.t.hsSHh8) : o.intl.string(o.t.Wf6iij),
            }),
            (0, s.jsx)(i.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: d.__invalid_description,
                children: t ? o.intl.string(o.t.FZ2J3Y) : o.intl.string(o.t.TvHcv6),
            }),
            (0, s.jsx)("div", { className: d.rQ }),
            (0, s.jsx)(n.$, {
                fullWidth: !0,
                variant: t ? "secondary" : "active",
                onClick: () =>
                    (0, c.openModalLazy)(async () => {
                        let { default: e } = await a.e("98363").then(a.bind(a, 780086));
                        return (t) => (0, s.jsx)(e, { ...t });
                    }),
                text: t ? o.intl.string(o.t.IyjHD9) : o.intl.string(o.t["KU/aN4"]),
            }),
        ],
    });
};
