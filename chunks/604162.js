n.d(t, {
    F9: () => a,
    G6: () => c,
    JC: () => s,
    yv: () => l
}),
    n(47120);
var r = n(192379),
    i = n(918701),
    o = n(388032);
let a = (e) => (e.percentComplete > 0 ? o.NW.formatToPlainString(o.t['c59/Tk'], { remainTime: (0, i.Ah)(e) }) : o.NW.formatToPlainString(o.t.GNsKiY, { remainTime: (0, i.Ah)(e) })),
    s = (e) => null != e.text;
function l(e) {
    let t = 0 | Math.round(e),
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2000,
        [i, o] = (0, r.useState)(e),
        a = (0, r.useRef)(null),
        s = () => {
            o(t),
                null != a.current && clearTimeout(a.current),
                (a.current = setTimeout(() => {
                    o(e);
                }, n));
        };
    return (
        (0, r.useEffect)(
            () => () => {
                null != a.current && clearTimeout(a.current);
            },
            [e]
        ),
        [i, s]
    );
}
