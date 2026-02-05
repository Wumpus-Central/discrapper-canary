"use strict";
n.d(t, { _: () => o }), n(323874), n(14289), n(35956);
var r = n(64700),
    i = n(835245);
let a = new Worker(new URL("/assets/" + n.u("58531"), n.b));
function s(e) {
    return new Promise((t) => {
        let n = (0, i.A)(),
            r = (e) => {
                let {
                    data: { id: i, png: s },
                } = e;
                n === i && (t(s), a.removeEventListener("message", r));
            };
        a.addEventListener("message", r), a.postMessage({ id: n, placeholderData: e });
    });
}
function o(e, t, n) {
    let i = n && 1 === t && null != e,
        [a, o] = r.useState(void 0);
    return (
        r.useEffect(() => {
            let t = !1;
            return (
                i &&
                    s(e).then((e) => {
                        t || o(e);
                    }),
                () => {
                    t = !0;
                }
            );
        }, [e, i]),
        a
    );
}
