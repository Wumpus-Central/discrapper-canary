n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(985018),
    l = n(875515);
let s = (e) => {
    let { hasHub: t } = e;
    return (0, i.jsxs)("div", {
        className: l.kL,
        children: [
            (0, i.jsx)("div", {
                className: l.zc,
                children: (0, i.jsx)(r.Pfh, { size: "md", color: r.LU0.colors.WHITE.css }),
            }),
            (0, i.jsx)(r.Text, {
                color: "text-strong",
                variant: "text-lg/semibold",
                className: l.wx,
                children: t ? a.intl.string(a.t.hsSHh8) : a.intl.string(a.t.Wf6iij),
            }),
            (0, i.jsx)(r.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: l.__invalid_description,
                children: t ? a.intl.string(a.t.FZ2J3Y) : a.intl.string(a.t.TvHcv6),
            }),
            (0, i.jsx)("div", { className: l.rQ }),
            (0, i.jsx)(r.Button, {
                fullWidth: !0,
                variant: t ? "secondary" : "active",
                onClick: () =>
                    (0, r.mMO)(async () => {
                        let { default: e } = await n.e("98363").then(n.bind(n, 780086));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
                text: t ? a.intl.string(a.t.IyjHD9) : a.intl.string(a.t["KU/aN4"]),
            }),
        ],
    });
};
