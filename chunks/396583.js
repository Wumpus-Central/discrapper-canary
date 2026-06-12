"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    r = n(284009),
    s = n.n(r);
function a(e, t) {
    let n = (0, i.useRef)(e),
        r = (0, i.useRef)(null);
    (0, i.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, i.useEffect)(() => {
            if (null === t) {
                null !== r.current && (clearInterval(r.current), (r.current = null));
                return;
            }
            return (
                (r.current = setInterval(function () {
                    s()(null != n.current, "Missing callback"), n.current();
                }, t)),
                () => clearInterval(r.current)
            );
        }, [t]);
}
