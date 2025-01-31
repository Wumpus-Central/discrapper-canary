n.d(t, { Z: () => r });
var i = n(192379);
function r(e) {
    let t = (0, i.useRef)(null),
        n = (0, i.useRef)(null);
    return Object.is(e, n.current) || ((t.current = n.current), (n.current = e)), t.current;
}
