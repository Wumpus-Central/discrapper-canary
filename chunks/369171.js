n.d(t, {
    UE: () => u,
    ZP: () => d,
    c7: () => f
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(212459),
    l = n(411546),
    u = (function (e) {
        return (e.FORCE_HIDDEN = 'FORCE_HIDDEN'), (e.INACTIVE = 'INACTIVE'), (e.VISIBLE = 'VISIBLE'), e;
    })({});
function c(e) {
    let { children: t } = e,
        { accessoryVisibility: n } = (0, o.Y)();
    return t(
        s()(l.base, {
            [l.forceHidden]: 'FORCE_HIDDEN' === n,
            [l.hidden]: 'INACTIVE' === n
        })
    );
}
let d = r.memo(c);
function f(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: l.group,
        children: t
    });
}
