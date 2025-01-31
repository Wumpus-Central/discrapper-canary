n.d(t, {
    J: () => a,
    Z: () => s
});
var i = n(192379),
    r = n(149203);
function a(e) {
    let { topEmojis: t, newlyAddedEmojis: n, rowSize: i = r.N6 } = e,
        a = t.slice(0, i - n.length);
    return {
        visibleTopEmojis: a,
        visibleNewlyAddedEmojis: n,
        allEmojis: a.concat(n)
    };
}
function s(e) {
    return i.useMemo(() => a(e), [e]);
}
