n.d(t, { A: () => a }), n(896048);
var r = n(64700),
    i = n(267102);
function a(e) {
    let { renderWindow: t } = (0, r.useContext)(i.Ay),
        [n, a] = (0, r.useState)(() => {
            var n, r;
            return null != (n = null == (r = t.matchMedia(e)) ? void 0 : r.matches) && n;
        });
    return (
        (0, r.useEffect)(() => {
            let n = t.matchMedia(e),
                r = (e) => {
                    var t;
                    a(null != (t = null == e ? void 0 : e.matches) && t);
                };
            return r(n), null == n || n.addListener(r), () => (null == n ? void 0 : n.removeListener(r));
        }, [e, t]),
        n
    );
}
