n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(586879);
function o(e) {
    let { hasMentions: t, truncatedCount: n, className: l } = e;
    return (0, i.jsx)(a.Text, {
        className: r()(s.unreadCount, l, { [s.mention]: t }),
        variant: 'text-xs/normal',
        children: n
    });
}
