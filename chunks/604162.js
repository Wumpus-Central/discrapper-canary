n.d(t, {
    G6: () => l,
    JC: () => o,
    yv: () => i
}),
    n(47120);
var r = n(192379);
let o = (e) => null != e.text;
function i(e) {
    let t = 0 | Math.round(e),
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2000,
        [o, i] = (0, r.useState)(e),
        l = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(
            () => () => {
                null != l.current && clearTimeout(l.current);
            },
            [e]
        ),
        [
            o,
            () => {
                i(t),
                    null != l.current && clearTimeout(l.current),
                    (l.current = setTimeout(() => {
                        i(e);
                    }, n));
            }
        ]
    );
}
