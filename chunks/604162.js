n.d(t, {
    G6: () => i,
    JC: () => l,
    yv: () => o
}),
    n(47120);
var r = n(192379);
let l = (e) => null != e.text;
function o(e) {
    let t = 0 | Math.round(e),
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
function i(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2000,
        [l, o] = (0, r.useState)(e),
        i = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(
            () => () => {
                null != i.current && clearTimeout(i.current);
            },
            [e]
        ),
        [
            l,
            () => {
                o(t),
                    null != i.current && clearTimeout(i.current),
                    (i.current = setTimeout(() => {
                        o(e);
                    }, n));
            }
        ]
    );
}
