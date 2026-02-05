n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(158954),
    a = n(397927),
    s = n(915089),
    r = n(985018),
    o = n(535134);
let c = () =>
        n
            .e("44678")
            .then(n.t.bind(n, 144759, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    d = (e) => {
        let t = (0, s.GV)();
        return (0, i.jsxs)(l.dWK, {
            ...e,
            size: "sm",
            children: [
                (0, i.jsx)("div", { className: o.Mp, children: (0, i.jsx)(a.akl, { importData: c, className: o.WG }) }),
                (0, i.jsx)(l.cwr, {
                    children: (0, i.jsxs)("div", {
                        className: o.lq,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: "heading-lg/semibold",
                                className: o.wx,
                                id: t,
                                children: r.intl.format(r.t.z9qozJ, { guildName: e.guildName }),
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: r.intl.string(r.t.nwpqyc),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(l.H7u, {
                    actions: [
                        {
                            variant: "primary",
                            onClick: () => {
                                e.onAccept(), e.onClose();
                            },
                            text: r.intl.string(r.t.NuzmOA),
                        },
                    ],
                    actionsFullWidth: !0,
                }),
            ],
        });
    };
