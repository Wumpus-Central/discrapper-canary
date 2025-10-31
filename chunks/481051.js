n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(867506);
function s(e) {
    let { hasMentions: t, truncatedCount: n, className: i } = e;
    return (0, r.jsx)(a.Text, {
        className: l()(o.unreadCount, i, { [o.mention]: t }),
        variant: "text-xs/normal",
        children: n,
    });
}
