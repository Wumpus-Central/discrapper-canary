i.d(n, { A: () => a });
var e = i(582128),
    r = i(267102);
function a(t) {
    let { renderWindow: n } = (0, e.useContext)(r.Ay),
        [i, a] = (0, e.useState)(() => n.matchMedia(t)?.matches ?? !1);
    return (
        (0, e.useEffect)(() => {
            let i = n.matchMedia(t);
            function e(t) {
                a(t?.matches ?? !1);
            }
            return (e(i), i?.addListener(e), () => i?.removeListener(e));
        }, [t, n]),
        i
    );
}
