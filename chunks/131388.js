n.d(t, { Z: () => a }), n(47120);
var i = n(192379),
    r = n(40851);
function a(e) {
    let { renderWindow: t } = (0, i.useContext)(r.ZP),
        [n, a] = (0, i.useState)(() => t.matchMedia(e).matches);
    return (
        (0, i.useEffect)(() => {
            let n = t.matchMedia(e),
                i = (e) => {
                    a(null == e ? void 0 : e.matches);
                };
            return i(n), n.addListener(i), () => n.removeListener(i);
        }, [e, t]),
        n
    );
}
