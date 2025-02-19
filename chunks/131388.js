n.d(t, { Z: () => a }), n(47120);
var r = n(192379),
    i = n(40851);
function a(e) {
    let { renderWindow: t } = (0, r.useContext)(i.ZP),
        [n, a] = (0, r.useState)(() => {
            var n, r;
            return null !== (r = null === (n = t.matchMedia(e)) || void 0 === n ? void 0 : n.matches) && void 0 !== r && r;
        });
    return (
        (0, r.useEffect)(() => {
            let n = t.matchMedia(e),
                r = (e) => {
                    var t;
                    a(null !== (t = null == e ? void 0 : e.matches) && void 0 !== t && t);
                };
            return r(n), null == n || n.addListener(r), () => (null == n ? void 0 : n.removeListener(r));
        }, [e, t]),
        n
    );
}
