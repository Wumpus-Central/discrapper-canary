n.d(t, { Z: () => u }), n(415506);
var r = n(192379),
    i = n(270445),
    o = n(393903),
    a = n(960048),
    s = n(887490);
let l = {
    enabled: !0,
    fireOnMount: !0,
    fireOnDepsChange: !0
};
function c(e) {
    try {
        return s.bN.toDOMNode(e, e);
    } catch (t) {
        let e = Error('Unable to find Slate EditorDOMNode: '.concat(t.message));
        return (e.stack = t.stack), a.Z.captureException(e), null;
    }
}
function u(e, t, n) {
    let a = r.useRef(null),
        s = r.useRef(null),
        u = r.useRef(null);
    r.useLayoutEffect(() => {
        (s.current = c(e)),
            null == s.current &&
                null == u.current &&
                (u.current = setTimeout(() => {
                    s.current = c(e);
                }, 100));
    }, [e]),
        r.useEffect(() => {
            let e = u.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, []);
    let d = r.useCallback(() => {
        let e = s.current;
        if (null == e) return;
        let r = e.offsetHeight;
        a.current !== r && (null != t.current && (t.current.style.height = ''.concat(r, 'px')), (a.current = r), null == n || n(r));
    }, [t, n]);
    (0, o.s)(s, d, [d, e, n], l),
        r.useLayoutEffect(() => {
            let t = i.F3.findDocumentOrShadowRoot(e).defaultView;
            if ((null == t ? void 0 : t.ResizeObserver) == null) return;
            let r = c(e);
            null != r && ((a.current = r.offsetHeight), null == n || n(a.current));
        }, [t, e, n]);
}
