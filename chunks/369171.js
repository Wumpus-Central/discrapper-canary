t.d(n, {
    UE: function () {
        return l;
    },
    c7: function () {
        return d;
    }
});
var i,
    l,
    r = t(200651),
    a = t(192379),
    o = t(120356),
    s = t.n(o),
    u = t(212459),
    c = t(96370);
((i = l || (l = {})).FORCE_HIDDEN = 'FORCE_HIDDEN'), (i.INACTIVE = 'INACTIVE'), (i.VISIBLE = 'VISIBLE');
function d(e) {
    let { children: n } = e;
    return (0, r.jsx)('div', {
        className: c.group,
        children: n
    });
}
n.ZP = a.memo(function (e) {
    let { children: n } = e,
        { accessoryVisibility: t } = (0, u.Y)();
    return n(
        s()(c.base, {
            [c.forceHidden]: 'FORCE_HIDDEN' === t,
            [c.hidden]: 'INACTIVE' === t
        })
    );
});
