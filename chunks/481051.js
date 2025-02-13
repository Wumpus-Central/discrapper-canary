n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(705321);
function o(e) {
    let { hasMentions: t, truncatedCount: n, className: l } = e;
    return (0, i.jsx)(r.Text, {
        className: a()(s.unreadCount, l, { [s.mention]: t }),
        variant: 'text-xs/normal',
        children: n
    });
}
