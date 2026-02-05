n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(985018),
    r = n(414614);
function s(e) {
    let { message: t } = e;
    return (0, i.jsxs)(l.DUT, {
        onClick: () => {
            (0, l.mMO)(async () => {
                let { default: e } = await n.e("35270").then(n.bind(n, 743461));
                return (n) => (0, i.jsx)(e, { channelId: t.channel_id, messageId: t.id, ...n });
            });
        },
        className: r.L,
        children: [
            (0, i.jsx)(l.mir, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(l.Text, { variant: "text-xs/normal", className: r.m, children: a.intl.string(a.t["2aXnfa"]) }),
        ],
    });
}
