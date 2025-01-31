n.d(t, { Z: () => s });
var i = n(192379),
    r = n(270445),
    a = n(887490);
function s(e, t, n) {
    i.useEffect(() => {
        let i = r.F3.findDocumentOrShadowRoot(e).defaultView;
        if ((null == i ? void 0 : i.ResizeObserver) == null) return;
        let s = a.bN.toDOMNode(e, e),
            o = s.offsetHeight;
        null == n || n(o);
        let l = new i.ResizeObserver(() => {
            let i = a.bN.toDOMNode(e, e).offsetHeight;
            o !== i && (null != t.current && (t.current.style.height = ''.concat(i, 'px')), (o = i), null == n || n(i));
        });
        return l.observe(s), () => l.disconnect();
    }, [t, e, n]);
}
