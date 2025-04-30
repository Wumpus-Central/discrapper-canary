n.d(t, { Z: () => i });
var r = n(192379);
function i(e) {
    let t = (0, r.useRef)(null),
        n = (0, r.useRef)(null);
    return Object.is(e, n.current) || ((t.current = n.current), (n.current = e)), t.current;
}
