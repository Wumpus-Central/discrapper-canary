n.d(t, { Z: () => s });
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(153513);
function s(e) {
    let { hasMentions: t, truncatedCount: n, className: r } = e;
    return (0, i.jsx)(a.Text, {
        className: l()(o.unreadCount, r, { [o.mention]: t }),
        variant: "text-xs/normal",
        children: n,
    });
}
