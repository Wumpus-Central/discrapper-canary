r.d(n, {
    N: function () {
        return o;
    },
    Z: function () {
        return a;
    }
});
var i = r(192379);
function a(e) {
    let n = i.useRef(e);
    i.useEffect(() => n.current(), []);
}
function o(e) {
    let n = i.useRef(e);
    i.useLayoutEffect(() => n.current(), []);
}
