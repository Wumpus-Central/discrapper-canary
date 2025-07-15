n.d(t, { i: () => o });
var i = n(365449),
    r = n(73800);
function o(e) {
    let t = (0, r.useRef)(null);
    return (
        (0, i.b)(() => {
            t.current = e;
        }, [e]),
        (0, r.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
        }, [])
    );
}
