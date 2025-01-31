n.d(t, {
    Z: () => a,
    v: () => r
});
let i = '@silent',
    r = new RegExp('^'.concat(i, '(\\s|$)'));
function a(e) {
    return null == e ? [!1, ''] : null == e.match(r) ? [!1, e] : [!0, e.substring(i.length).trim()];
}
