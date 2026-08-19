"use strict";
r.d(t, { J: () => s });
var n,
    o = r(576024),
    i = r(582128);
let a = null != (n = i.useInsertionEffect) ? n : o.N;
function s(e) {
    let t = (0, i.useRef)(null);
    return (
        a(() => {
            t.current = e;
        }, [e]),
        (0, i.useCallback)((...e) => {
            let r = t.current;
            return null == r ? void 0 : r(...e);
        }, [])
    );
}
