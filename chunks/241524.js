i.d(n, { A: () => u });
var e = i(582128),
    r = i(267102);
function u(t) {
    let { renderWindow: n } = (0, e.useContext)(r.Ay),
        [i, u] = (0, e.useState)(() => n.matchMedia(t)?.matches ?? !1);
    return (
        (0, e.useEffect)(() => {
            let i = n.matchMedia(t);
            function e(t) {
                u(t?.matches ?? !1);
            }
            return e(i), i?.addListener(e), () => i?.removeListener(e);
        }, [t, n]),
        i
    );
}
