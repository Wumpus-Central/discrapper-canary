r.d(n, {
    UE: function () {
        return i;
    },
    c7: function () {
        return f;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(212459),
    c = r(368632);
function d(e) {
    let { children: n } = e,
        { accessoryVisibility: r } = (0, u.Y)();
    return n(
        l()(c.base, {
            [c.forceHidden]: 'FORCE_HIDDEN' === r,
            [c.hidden]: 'INACTIVE' === r
        })
    );
}
function f(e) {
    let { children: n } = e;
    return (0, a.jsx)('div', {
        className: c.group,
        children: n
    });
}
!(function (e) {
    (e.FORCE_HIDDEN = 'FORCE_HIDDEN'), (e.INACTIVE = 'INACTIVE'), (e.VISIBLE = 'VISIBLE');
})(i || (i = {})),
    (n.ZP = o.memo(d));
