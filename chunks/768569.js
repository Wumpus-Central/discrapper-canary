n.d(t, { p: () => u });
var i = n(627968);
n(64700);
var r = n(342494),
    a = n(397927),
    l = n(88001),
    s = n(49999),
    o = n(519412),
    d = n(985018),
    c = n(438705);
let u = (e) => {
    let { targetElementRef: t, dismissPopover: u, children: A } = e,
        h = (0, i.jsx)(r.AM, {
            targetElementRef: t,
            title: d.intl.format(o.default["c+NBSl"], { premiumGroupProductName: (0, l.DP)() }),
            body: d.intl.format(o.default.MuUV5u, { premiumGroupProductName: (0, l.DP)(), totalSeats: l.aw }),
            graphic: { type: "image", src: c },
            badge: { type: "beta", variant: "expressive" },
            size: "md",
            align: "top",
            position: "right",
            caretConfig: { align: "start" },
            actions: [
                {
                    text: d.intl.string(o.default["IO+nlU"]),
                    onClick: () => {
                        u(s.i.TAKE_ACTION),
                            (0, a.mMO)(async () => {
                                let { default: e } = await n.e("91976").then(n.bind(n, 526710));
                                return (t) => (0, i.jsx)(e, { ...t });
                            });
                    },
                },
            ],
            onRequestClose: () => u(s.i.USER_DISMISS),
        });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: A }), h] });
};
