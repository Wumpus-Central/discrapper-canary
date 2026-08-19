u.d(t, { A: () => l });
var i = u(582128),
    n = u(207803),
    r = u(591179),
    s = u(485745);
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        u = !(0, r.X)("useUnsavedProfileChangesGuard"),
        l = (0, s.A)(u),
        d = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            d.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, u = Array(e), i = 0; i < e; i++) u[i] = arguments[i];
                t && l ? (0, n.VQ)() : d.current(...u);
            },
            [t, l],
        )
    );
}
