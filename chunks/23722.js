n.d(l, { A: () => a });
var i = n(64700),
    t = n(207803),
    r = n(485745);
function a(e) {
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, r.A)(),
        a = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            a.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                l && n ? (0, t.VQ)() : a.current(...i);
            },
            [l, n],
        )
    );
}
