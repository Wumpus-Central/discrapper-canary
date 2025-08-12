n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(832912);
function l(e) {
    let { hasMentions: t, truncatedCount: n, className: i } = e;
    return (0, r.jsx)(a.Text, {
        className: o()(s.unreadCount, i, { [s.mention]: t }),
        variant: "text-xs/normal",
        children: n,
    });
}
