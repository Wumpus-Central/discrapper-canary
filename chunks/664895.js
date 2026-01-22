n.d(t, { A: () => o });
var r = n(64700),
    i = n(859141),
    a = n.n(i),
    s = {};
function o(e, t) {
    void 0 === t && (t = a());
    var n = (0, r.useRef)(s),
        i = n.current;
    return (
        (0, r.useEffect)(function () {
            n.current = i;
        }),
        (n.current !== s && t(e, n.current)) || (i = e),
        i
    );
}
