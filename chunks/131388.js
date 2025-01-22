r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(40851);
function s(e) {
    let { renderWindow: n } = (0, a.useContext)(o.ZP),
        [r, i] = (0, a.useState)(() => n.matchMedia(e).matches);
    return (
        (0, a.useEffect)(() => {
            let r = n.matchMedia(e),
                a = (e) => {
                    i(null == e ? void 0 : e.matches);
                };
            return a(r), r.addListener(a), () => r.removeListener(a);
        }, [e, n]),
        r
    );
}
