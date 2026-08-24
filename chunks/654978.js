"use strict";
r.d(t, { J: () => s });
var n,
    i = r(576024),
    o = r(582128);
let a = null != (n = o.useInsertionEffect) ? n : i.N;
function s(e) {
    let t = (0, o.useRef)(null);
    return (
        a(() => {
            t.current = e;
        }, [e]),
        (0, o.useCallback)((...e) => {
            let r = t.current;
            return null == r ? void 0 : r(...e);
        }, [])
    );
}
