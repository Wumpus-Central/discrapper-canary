a.d(t, { A: () => l });
var n = a(64700);
function l(e) {
    let t = (0, n.useRef)(!1),
        a = (0, n.useRef)(null);
    return t.current || ((t.current = !0), (a.current = e())), a;
}
