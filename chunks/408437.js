n.d(t, { p: () => o });
var r = n(484948),
    i = n(159447),
    a = n(473749);
function o(e) {
    let [t, n] = (0, a.useState)(e),
        o = (0, a.useRef)(null),
        s = (0, r.i)(() => {
            if (!o.current) return;
            let e = o.current.next();
            if (e.done) {
                o.current = null;
                return;
            }
            t === e.value ? s() : n(e.value);
        });
    (0, i.b)(() => {
        o.current && s();
    });
    let l = (0, r.i)((e) => {
        (o.current = e(t)), s();
    });
    return [t, l];
}
