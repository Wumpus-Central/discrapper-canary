n.d(t, { Z: () => s });
var r = n(192379),
    i = n(335218),
    o = n.n(i),
    a = {};
function s(e, t) {
    void 0 === t && (t = o());
    var n = (0, r.useRef)(a),
        i = n.current;
    return (
        (0, r.useEffect)(function () {
            n.current = i;
        }),
        (n.current !== a && t(e, n.current)) || (i = e),
        i
    );
}
