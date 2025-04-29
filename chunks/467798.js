n.d(t, {
    Z: () => o,
    v: () => i
}),
    n(413496),
    n(433524),
    n(35282),
    n(781311);
let r = '@silent',
    i = new RegExp('^'.concat(r, '(\\s|$)'));
function o(e) {
    return null == e ? [!1, ''] : null == e.match(i) ? [!1, e] : [!0, e.substring(r.length).trim()];
}
