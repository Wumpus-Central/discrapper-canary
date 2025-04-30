n.d(t, {
    Ng: () => a,
    ZP: () => i,
    zq: () => o
});
var r = n(73800);
function i(e) {
    let t = r.useRef(e);
    r.useEffect(() => t.current(), []);
}
function a(e) {
    let t = r.useRef(e);
    r.useLayoutEffect(() => t.current(), []);
}
function o(e) {
    let t = r.useRef(e);
    r.useEffect(() => {
        t.current = e;
    }),
        r.useEffect(
            () => () => {
                t.current();
            },
            []
        );
}
