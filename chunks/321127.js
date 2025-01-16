r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(223979);
function l(e) {
    let { attributes: n, children: r, leaf: a, text: l } = e;
    if (a.commandName) {
        let e = s()(o.commandName, { [o.emptyText]: '' === l.text });
        return (0, i.jsx)('span', {
            ...n,
            className: e,
            spellCheck: !1,
            children: r
        });
    }
    return null;
}
