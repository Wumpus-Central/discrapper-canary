r.d(e, { i: () => o });
var n = r(212769),
    i = r(192379);
function o(t) {
    let e = (0, i.useRef)(null);
    return (
        (0, n.b)(() => {
            e.current = t;
        }, [t]),
        (0, i.useCallback)((...t) => {
            let r = e.current;
            return null == r ? void 0 : r(...t);
        }, [])
    );
}
