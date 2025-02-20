n.d(t, { Z: () => a });
var r = n(192379),
    i = n(270445),
    o = n(887490);
function a(e, t, n) {
    r.useEffect(() => {
        let r = i.F3.findDocumentOrShadowRoot(e).defaultView;
        if ((null == r ? void 0 : r.ResizeObserver) == null) return;
        let a = o.bN.toDOMNode(e, e),
            s = a.offsetHeight;
        null == n || n(s);
        let l = new r.ResizeObserver(() => {
            let r = o.bN.toDOMNode(e, e).offsetHeight;
            s !== r && (null != t.current && (t.current.style.height = ''.concat(r, 'px')), (s = r), null == n || n(r));
        });
        return l.observe(a), () => l.disconnect();
    }, [t, e, n]);
}
