t.d(a, { k: () => r });
var n = t(582128);
function r(e, a) {
    let t = (0, n.useRef)(null);
    return e && t.current && a(e, t.current) && (e = t.current), (t.current = e), e;
}
