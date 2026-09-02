e.d(n, { A: () => a });
var i = e(582128),
    r = e(267102);
function a(t) {
    let { renderWindow: n } = (0, i.useContext)(r.Ay),
        [e, a] = (0, i.useState)(() => n.matchMedia(t)?.matches ?? !1);
    return (
        (0, i.useEffect)(() => {
            let e = n.matchMedia(t);
            function i(t) {
                a(t?.matches ?? !1);
            }
            return i(e), e?.addListener(i), () => e?.removeListener(i);
        }, [t, n]),
        e
    );
}
