a.d(t, { A: () => n });
var r = a(64700);
function n(e) {
    let t = (0, r.useRef)(!1),
        a = (0, r.useRef)(null);
    return t.current || ((t.current = !0), (a.current = e())), a;
}
