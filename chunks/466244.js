n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(224640),
    a = n(430993),
    s = n(696208),
    r = n(604121),
    o = n(534514),
    c = n(834730),
    d = n(915089),
    u = n(985018),
    h = n(786147);
let m = () =>
        n
            .e("44678")
            .then(n.t.bind(n, 144759, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    A = (e) => {
        let t = (0, d.GV)();
        return (0, i.jsxs)(l.d, {
            ...e,
            size: "sm",
            children: [
                (0, i.jsx)("div", { className: h.Mp, children: (0, i.jsx)(r.a, { importData: m, className: h.WG }) }),
                (0, i.jsx)(a.c, {
                    children: (0, i.jsxs)("div", {
                        className: h.lq,
                        children: [
                            (0, i.jsx)(o.D, {
                                variant: "heading-lg/semibold",
                                className: h.wx,
                                id: t,
                                children: u.intl.format(u.t.z9qozJ, { guildName: e.guildName }),
                            }),
                            (0, i.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: u.intl.string(u.t.nwpqyc),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(s.H, {
                    actions: [
                        {
                            variant: "primary",
                            onClick: () => {
                                e.onAccept(), e.onClose();
                            },
                            text: u.intl.string(u.t.NuzmOA),
                        },
                    ],
                    actionsFullWidth: !0,
                }),
            ],
        });
    };
