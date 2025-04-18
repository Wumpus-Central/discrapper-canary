n.d(t, {
    J: () => a,
    Z: () => o
});
var r = n(192379),
    i = n(149203);
function a(e) {
    let { topEmojis: t, newlyAddedEmojis: n, rowSize: r = i.N6 } = e,
        a = t.slice(0, r - n.length);
    return {
        visibleTopEmojis: a,
        visibleNewlyAddedEmojis: n,
        allEmojis: a.concat(n)
    };
}
function o(e) {
    return r.useMemo(() => a(e), [e]);
}
