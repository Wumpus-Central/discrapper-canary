n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(454335);
function l(e) {
    let { hasMentions: t, truncatedCount: n, className: i } = e;
    return (0, r.jsx)(o.Text, {
        className: a()(s.unreadCount, i, { [s.mention]: t }),
        variant: 'text-xs/normal',
        children: n
    });
}
