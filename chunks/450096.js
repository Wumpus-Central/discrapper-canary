n.d(t, { L: () => o }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(192379),
    r = n(772848);
let a = new Worker(new URL('/assets/' + n.u('77459'), n.b));
function s(e) {
    return new Promise((t) => {
        let n = (0, r.Z)(),
            i = (e) => {
                let {
                    data: { id: r, png: s }
                } = e;
                n === r && (t(s), a.removeEventListener('message', i));
            };
        a.addEventListener('message', i),
            a.postMessage({
                id: n,
                placeholderData: e
            });
    });
}
function o(e, t, n) {
    let r = n && 1 === t && null != e,
        [a, o] = i.useState(void 0);
    return (
        i.useEffect(() => {
            let t = !1;
            return (
                r &&
                    s(e).then((e) => {
                        !t && o(e);
                    }),
                () => {
                    t = !0;
                }
            );
        }, [e, r]),
        a
    );
}
