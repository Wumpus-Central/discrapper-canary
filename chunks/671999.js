r.d(n, {
    B: function () {
        return a;
    },
    J: function () {
        return o;
    }
});
var i = r(411104);
function a(e, n, r) {
    return new MouseEvent(e, {
        screenX: n,
        screenY: r,
        clientX: n,
        clientY: r,
        bubbles: !0,
        view: window
    });
}
function o(e, n, r) {
    let i = document.elementFromPoint(n, r);
    if (null == i) throw Error();
    i.dispatchEvent(e);
}
