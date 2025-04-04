n.d(t, { Z: () => o }), n(47120);
var r = n(192379),
    i = n(40851);
function o(e) {
    let { renderWindow: t } = (0, r.useContext)(i.ZP),
        [n, o] = (0, r.useState)(() => {
            var n, r;
            return null != (r = null == (n = t.matchMedia(e)) ? void 0 : n.matches) && r;
        });
    return (
        (0, r.useEffect)(() => {
            let n = t.matchMedia(e),
                r = (e) => {
                    var t;
                    o(null != (t = null == e ? void 0 : e.matches) && t);
                };
            return r(n), null == n || n.addListener(r), () => (null == n ? void 0 : n.removeListener(r));
        }, [e, t]),
        n
    );
}
