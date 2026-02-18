t.d(a, { k: () => n });
var r = t(64700);
function n(e, a) {
    let t = (0, r.useRef)(null);
    return e && t.current && a(e, t.current) && (e = t.current), (t.current = e), e;
}
