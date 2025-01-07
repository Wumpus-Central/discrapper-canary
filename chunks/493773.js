r.d(n, {
    N: function () {
        return s;
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
function s(e) {
    let n = i.useRef(e);
    i.useLayoutEffect(() => n.current(), []);
}
