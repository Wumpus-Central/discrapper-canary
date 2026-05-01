n.d(t, { A: () => l });
var i = n(64700);
function l(e) {
    let t = (0, i.useRef)(!1),
        n = (0, i.useRef)(null);
    return t.current || ((t.current = !0), (n.current = e())), n;
}
