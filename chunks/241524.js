s.d(t, { A: () => i });
var a = s(582128),
    c = s(267102);
function i(e) {
    let { renderWindow: t } = (0, a.useContext)(c.Ay),
        [s, i] = (0, a.useState)(() => t.matchMedia(e)?.matches ?? !1);
    return (
        (0, a.useEffect)(() => {
            let s = t.matchMedia(e);
            function a(e) {
                i(e?.matches ?? !1);
            }
            return a(s), s?.addListener(a), () => s?.removeListener(a);
        }, [e, t]),
        s
    );
}
