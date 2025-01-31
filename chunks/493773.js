n.d(t, {
    N: () => a,
    Z: () => r
});
var i = n(192379);
function r(e) {
    let t = i.useRef(e);
    i.useEffect(() => t.current(), []);
}
function a(e) {
    let t = i.useRef(e);
    i.useLayoutEffect(() => t.current(), []);
}
