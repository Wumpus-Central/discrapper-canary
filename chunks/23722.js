u.d(r, { A: () => c });
var t = u(582128),
    a = u(207803),
    n = u(591179),
    s = u(485745);
function c(e) {
    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        u = !(0, n.X)("useUnsavedProfileChangesGuard"),
        c = (0, s.A)(u),
        i = t.useRef(e);
    return (
        t.useLayoutEffect(() => {
            i.current = e;
        }),
        t.useCallback(
            function () {
                for (var e = arguments.length, u = Array(e), t = 0; t < e; t++) u[t] = arguments[t];
                r && c ? (0, a.VQ)() : i.current(...u);
            },
            [r, c],
        )
    );
}
