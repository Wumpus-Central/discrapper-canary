i.d(t, { A: () => a });
var n = i(582128),
    l = i(207803),
    s = i(591179),
    r = i(485745);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = !(0, s.X)("useUnsavedProfileChangesGuard"),
        a = (0, r.A)(i),
        o = n.useRef(e);
    return (
        n.useLayoutEffect(() => {
            o.current = e;
        }),
        n.useCallback(
            function () {
                for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                t && a ? (0, l.VQ)() : o.current(...i);
            },
            [t, a],
        )
    );
}
