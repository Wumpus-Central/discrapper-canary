"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(267102);
function a(e) {
    let { renderWindow: t } = (0, r.useContext)(i.Ay),
        [n, a] = (0, r.useState)(() => t.matchMedia(e)?.matches ?? !1);
    return (
        (0, r.useEffect)(() => {
            let n = t.matchMedia(e),
                r = (e) => {
                    a(e?.matches ?? !1);
                };
            return r(n), n?.addListener(r), () => n?.removeListener(r);
        }, [e, t]),
        n
    );
}
