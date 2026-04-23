"use strict";
n.d(t, { _: () => a }), n(323874), n(14289), n(35956);
var r = n(64700),
    i = n(835245);
let s = new Worker(new URL("/assets/" + n.u("58531"), n.b));
function a(e, t, n) {
    let a = n && 1 === t && null != e,
        [o, l] = r.useState(void 0);
    return (
        r.useEffect(() => {
            let t = !1;
            return (
                a &&
                    new Promise((t) => {
                        let n = (0, i.A)(),
                            r = (e) => {
                                let {
                                    data: { id: i, png: a },
                                } = e;
                                n === i && (t(a), s.removeEventListener("message", r));
                            };
                        s.addEventListener("message", r), s.postMessage({ id: n, placeholderData: e });
                    }).then((e) => {
                        t || l(e);
                    }),
                () => {
                    t = !0;
                }
            );
        }, [e, a]),
        o
    );
}
