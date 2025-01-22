r.d(n, {
    E: function () {
        return d;
    },
    T: function () {
        return c;
    }
});
var i,
    a = r(192379),
    o = r(610521),
    s = r(442837),
    l = r(607070);
let u = null !== (i = document.getElementById('app-mount')) && void 0 !== i ? i : document;
function c(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = (0, s.e7)([l.Z], () => l.Z.keyboardModeEnabled),
        c = a.useRef(!1);
    return (
        (c.current = !i),
        (0, o.ZP)(e, {
            ...r,
            disableReturnRef: c,
            attachTo: null !== (n = r.attachTo) && void 0 !== n ? n : u,
            returnRef: r.returnRef
        })
    );
}
function d(e) {
    return c(e.containerRef), e.children;
}
