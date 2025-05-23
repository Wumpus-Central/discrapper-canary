n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(34256);
function s(e) {
    let { hasMentions: t, truncatedCount: n, className: i } = e;
    return (0, r.jsx)(a.Text, {
        className: l()(o.unreadCount, i, { [o.mention]: t }),
        variant: 'text-xs/normal',
        children: n
    });
}
