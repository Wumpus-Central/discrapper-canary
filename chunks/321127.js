n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(223979);
function o(e) {
    let { attributes: t, children: n, leaf: r, text: o } = e;
    if (r.commandName) {
        let e = a()(s.commandName, { [s.emptyText]: '' === o.text });
        return (0, i.jsx)('span', {
            ...t,
            className: e,
            spellCheck: !1,
            children: n
        });
    }
    return null;
}
