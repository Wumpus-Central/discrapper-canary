n.d(t, {
    F9: () => s,
    G6: () => u,
    JC: () => o,
    yv: () => l
}),
    n(47120);
var i = n(192379),
    r = n(918701),
    a = n(388032);
let s = (e) => {
        let t = (0, r.si)(e);
        return e.percentComplete > 0 ? a.intl.formatToPlainString(a.t['c59/Tk'], { remainTime: ''.concat(String(t.minutes).padStart(2, '0'), ':').concat(String(t.seconds).padStart(2, '0')) }) : a.intl.formatToPlainString(a.t.GNsKiY, { remainTime: ''.concat(String(t.minutes).padStart(2, '0'), ':').concat(String(t.seconds).padStart(2, '0')) });
    },
    o = (e) => null != e.text;
function l(e) {
    let t = 0 | Math.round(e),
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2000,
        [r, a] = (0, i.useState)(e),
        s = (0, i.useRef)(null),
        o = () => {
            a(t),
                null != s.current && clearTimeout(s.current),
                (s.current = setTimeout(() => {
                    a(e);
                }, n));
        };
    return (
        (0, i.useEffect)(
            () => () => {
                null != s.current && clearTimeout(s.current);
            },
            [e]
        ),
        [r, o]
    );
}
