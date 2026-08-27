"use strict";
r.d(t, { L: () => a });
var n = r(295551),
    i = r(361854),
    o = r(582128);
function a(e = !0) {
    let t = (0, n.Bi)(),
        [r, s] = (function (e = !0) {
            let [t, r] = (0, o.useState)(e),
                n = (0, o.useRef)(!1),
                a = (0, o.useCallback)((e) => {
                    (n.current = !0), r(!!e);
                }, []);
            return (
                (0, i.N)(() => {
                    n.current || r(!1);
                }, []),
                [a, t]
            );
        })(e);
    return { id: s ? t : void 0, ref: r };
}
