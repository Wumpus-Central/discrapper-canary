t.d(l, { A: () => a });
var n = t(64700),
    i = t(207803),
    s = t(485745);
function a(e) {
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        t = (0, s.A)(),
        a = n.useRef(e);
    return (
        n.useLayoutEffect(() => {
            a.current = e;
        }),
        n.useCallback(
            function () {
                for (var e = arguments.length, n = Array(e), s = 0; s < e; s++) n[s] = arguments[s];
                l && t ? (0, i.VQ)() : a.current(...n);
            },
            [l, t],
        )
    );
}
