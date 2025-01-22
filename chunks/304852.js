r.d(n, {
    J: function () {
        return o;
    },
    Z: function () {
        return s;
    }
});
var i = r(192379),
    a = r(149203);
function o(e) {
    let { topEmojis: n, newlyAddedEmojis: r, rowSize: i = a.N6 } = e,
        o = n.slice(0, i - r.length);
    return {
        visibleTopEmojis: o,
        visibleNewlyAddedEmojis: r,
        allEmojis: o.concat(r)
    };
}
function s(e) {
    return i.useMemo(() => o(e), [e]);
}
