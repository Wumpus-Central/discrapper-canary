"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(284009),
    s = n.n(i);
function a(e, t) {
    let n = (0, r.useRef)(e),
        i = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
        n.current = e;
    }, [e]),
        (0, r.useEffect)(() => {
            if (null === t) {
                null !== i.current && (clearInterval(i.current), (i.current = null));
                return;
            }
            return (
                (i.current = setInterval(function () {
                    s()(null != n.current, "Missing callback"), n.current();
                }, t)),
                () => clearInterval(i.current)
            );
        }, [t]);
}
