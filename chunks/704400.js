n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(939249),
    s = n(885574),
    r = n(834730),
    o = n(985018),
    d = n(987773);
function c(e) {
    let { message: t } = e;
    return (0, i.jsxs)(a.D, {
        onClick: () => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await n.e("35270").then(n.bind(n, 743461));
                return (n) => (0, i.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: d.L,
        children: [
            (0, i.jsx)(s.m, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(r.E, { variant: "text-xs/normal", className: d.m, children: o.intl.string(o.t["2aXnfa"]) }),
        ],
    });
}
