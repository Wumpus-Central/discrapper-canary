n.d(t, {
    Ng: () => a,
    ZP: () => r,
    zq: () => s
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
function s(e) {
    let t = i.useRef(e);
    i.useEffect(() => {
        t.current = e;
    }),
        i.useEffect(
            () => () => {
                t.current();
            },
            []
        );
}
