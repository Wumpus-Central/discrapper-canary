n.d(t, { Z: () => s });
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(867506);
function s(e) {
    let { hasMentions: t, truncatedCount: n, className: r } = e;
    return (0, i.jsx)(a.Text, {
        className: l()(o.unreadCount, r, { [o.mention]: t }),
        variant: "text-xs/normal",
        children: n,
    });
}
