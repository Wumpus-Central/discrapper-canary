n.d(t, { i: () => s });
var r,
    i = n(159447),
    a = n(473749);
let o = null != (r = a.useInsertionEffect) ? r : i.b;
function s(e) {
    let t = (0, a.useRef)(null);
    return (
        o(() => {
            t.current = e;
        }, [e]),
        (0, a.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
        }, [])
    );
}
