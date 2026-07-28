"use strict";
n.d(t, { A: () => a });
var i = n(582128),
    r = n(267102);
function a(e) {
    let { renderWindow: t } = (0, i.useContext)(r.Ay),
        [n, a] = (0, i.useState)(() => t.matchMedia(e)?.matches ?? !1);
    return (
        (0, i.useEffect)(() => {
            let n = t.matchMedia(e);
            function i(e) {
                a(e?.matches ?? !1);
            }
            return i(n), n?.addListener(i), () => n?.removeListener(i);
        }, [e, t]),
        n
    );
}
