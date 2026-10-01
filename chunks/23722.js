n.d(t, { A: () => a });
var i = n(582128),
    r = n(207803),
    u = n(591179),
    l = n(485745);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(0, u.X)("useUnsavedProfileChangesGuard"),
        a = (0, l.A)(n),
        s = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            s.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                t && a ? (0, r.VQ)() : s.current(...n);
            },
            [t, a],
        )
    );
}
