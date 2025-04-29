n.d(t, { L: () => s }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685);
var r = n(192379),
    i = n(772848);
let o = new Worker(new URL('/assets/' + n.u('77459'), n.b));
function a(e) {
    return new Promise((t) => {
        let n = (0, i.Z)(),
            r = (e) => {
                let {
                    data: { id: i, png: a }
                } = e;
                n === i && (t(a), o.removeEventListener('message', r));
            };
        o.addEventListener('message', r),
            o.postMessage({
                id: n,
                placeholderData: e
            });
    });
}
function s(e, t, n) {
    let i = n && 1 === t && null != e,
        [o, s] = r.useState(void 0);
    return (
        r.useEffect(() => {
            let t = !1;
            return (
                i &&
                    a(e).then((e) => {
                        t || s(e);
                    }),
                () => {
                    t = !0;
                }
            );
        }, [e, i]),
        o
    );
}
