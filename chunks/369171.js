t.d(n, {
    UE: function () {
        return r;
    },
    c7: function () {
        return d;
    }
});
var i,
    r,
    a = t(200651),
    l = t(192379),
    o = t(120356),
    s = t.n(o),
    u = t(212459),
    c = t(368632);
((i = r || (r = {})).FORCE_HIDDEN = 'FORCE_HIDDEN'), (i.INACTIVE = 'INACTIVE'), (i.VISIBLE = 'VISIBLE');
function d(e) {
    let { children: n } = e;
    return (0, a.jsx)('div', {
        className: c.group,
        children: n
    });
}
n.ZP = l.memo(function (e) {
    let { children: n } = e,
        { accessoryVisibility: t } = (0, u.Y)();
    return n(
        s()(c.base, {
            [c.forceHidden]: 'FORCE_HIDDEN' === t,
            [c.hidden]: 'INACTIVE' === t
        })
    );
});
