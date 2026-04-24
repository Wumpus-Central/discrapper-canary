n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(939249),
    r = n(885574),
    s = n(834730),
    o = n(985018),
    c = n(987773);
function d(e) {
    let { message: t } = e;
    return (0, i.jsxs)(a.D, {
        onClick: () => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await n.e("35270").then(n.bind(n, 743461));
                return (n) => (0, i.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: c.L,
        children: [
            (0, i.jsx)(r.m, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(s.E, { variant: "text-xs/normal", className: c.m, children: o.intl.string(o.t["2aXnfa"]) }),
        ],
    });
}
