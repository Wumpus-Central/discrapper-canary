r.d(t, { J: () => a });
var n = r(361854),
    i = r(582128);
let o = i.useInsertionEffect ?? n.N;
function a(e) {
    let t = (0, i.useRef)(null);
    return (
        o(() => {
            t.current = e;
        }, [e]),
        (0, i.useCallback)((...e) => {
            let r = t.current;
            return r?.(...e);
        }, [])
    );
}
