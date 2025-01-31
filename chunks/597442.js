n.d(t, {
    E: () => c,
    T: () => u
});
var i,
    r = n(192379),
    a = n(610521),
    s = n(442837),
    o = n(607070);
let l = null !== (i = document.getElementById('app-mount')) && void 0 !== i ? i : document;
function u(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = (0, s.e7)([o.Z], () => o.Z.keyboardModeEnabled),
        u = r.useRef(!1);
    return (
        (u.current = !i),
        (0, a.ZP)(e, {
            ...n,
            disableReturnRef: u,
            attachTo: null !== (t = n.attachTo) && void 0 !== t ? t : l,
            returnRef: n.returnRef
        })
    );
}
function c(e) {
    return u(e.containerRef), e.children;
}
