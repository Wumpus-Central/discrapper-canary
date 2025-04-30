n.d(t, {
    Ng: () => o,
    ZP: () => i,
    zq: () => a
});
var r = n(192379);
function i(e) {
    let t = r.useRef(e);
    r.useEffect(() => t.current(), []);
}
function o(e) {
    let t = r.useRef(e);
    r.useLayoutEffect(() => t.current(), []);
}
function a(e) {
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
