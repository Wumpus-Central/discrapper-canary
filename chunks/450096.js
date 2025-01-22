r.d(n, {
    L: function () {
        return h;
    }
});
var i = r(315314);
var a = r(610138);
var o = r(216116);
var s = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(192379),
    d = r(772848);
let f = new Worker(new URL('/assets/' + r.u('77459'), r.b));
function p(e) {
    return new Promise((n) => {
        let r = (0, d.Z)(),
            i = (e) => {
                let {
                    data: { id: a, png: o }
                } = e;
                r === a && (n(o), f.removeEventListener('message', i));
            };
        f.addEventListener('message', i),
            f.postMessage({
                id: r,
                placeholderData: e
            });
    });
}
function h(e, n, r) {
    let i = r && 1 === n && null != e,
        [a, o] = c.useState(void 0);
    return (
        c.useEffect(() => {
            let n = !1;
            return (
                i &&
                    p(e).then((e) => {
                        if (!n) o(e);
                    }),
                () => {
                    n = !0;
                }
            );
        }, [e, i]),
        a
    );
}
