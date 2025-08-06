n.d(t, { i: () => o });
var r = n(365449),
    i = n(73800);
function o(e) {
    let t = (0, i.useRef)(null);
    return (
        (0, r.b)(() => {
            t.current = e;
        }, [e]),
        (0, i.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
        }, [])
    );
}
