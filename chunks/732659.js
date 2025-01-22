r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(192379),
    a = r(270445),
    o = r(887490);
function s(e, n, r) {
    i.useEffect(() => {
        let i = a.F3.findDocumentOrShadowRoot(e).defaultView;
        if ((null == i ? void 0 : i.ResizeObserver) == null) return;
        let s = o.bN.toDOMNode(e, e),
            l = s.offsetHeight;
        null == r || r(l);
        let u = new i.ResizeObserver(() => {
            let i = o.bN.toDOMNode(e, e).offsetHeight;
            l !== i && (null != n.current && (n.current.style.height = ''.concat(i, 'px')), (l = i), null == r || r(i));
        });
        return u.observe(s), () => u.disconnect();
    }, [n, e, r]);
}
