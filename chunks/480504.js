a.d(t, { _: () => l }), a(323874), a(14289), a(35956);
var n = a(64700),
    r = a(835245);
let i = new Worker(new URL("/assets/" + a.u("58531"), a.b));
function l(e, t, a) {
    let l = a && 1 === t && null != e,
        [o, s] = n.useState(void 0);
    return (
        n.useEffect(() => {
            let t = !1;
            return (
                l &&
                    new Promise((t) => {
                        let a = (0, r.A)(),
                            n = (e) => {
                                let {
                                    data: { id: r, png: l },
                                } = e;
                                a === r && (t(l), i.removeEventListener("message", n));
                            };
                        i.addEventListener("message", n), i.postMessage({ id: a, placeholderData: e });
                    }).then((e) => {
                        t || s(e);
                    }),
                () => {
                    t = !0;
                }
            );
        }, [e, l]),
        o
    );
}
