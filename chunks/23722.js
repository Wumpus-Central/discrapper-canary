t.d(n, { A: () => a });
var l = t(64700),
    i = t(207803),
    r = t(485745);
function a(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        t = (0, r.A)(),
        a = l.useRef(e);
    return (
        l.useLayoutEffect(() => {
            a.current = e;
        }),
        l.useCallback(
            function () {
                for (var e = arguments.length, l = Array(e), r = 0; r < e; r++) l[r] = arguments[r];
                n && t ? (0, i.VQ)() : a.current(...l);
            },
            [n, t],
        )
    );
}
