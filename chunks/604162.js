r.d(n, {
    F9: function () {
        return l;
    },
    G6: function () {
        return d;
    },
    JC: function () {
        return u;
    },
    yv: function () {
        return c;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(918701),
    s = r(388032);
let l = (e) => {
        let n = (0, o.si)(e);
        return e.percentComplete > 0 ? s.intl.formatToPlainString(s.t['c59/Tk'], { remainTime: ''.concat(String(n.minutes).padStart(2, '0'), ':').concat(String(n.seconds).padStart(2, '0')) }) : s.intl.formatToPlainString(s.t.GNsKiY, { remainTime: ''.concat(String(n.minutes).padStart(2, '0'), ':').concat(String(n.seconds).padStart(2, '0')) });
    },
    u = (e) => null != e.text;
function c(e) {
    let n = 0 | Math.round(e),
        r = n % 60;
    return ''.concat((n - r) / 60, ':').concat(String(r).padStart(2, '0'));
}
function d(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2000,
        [i, o] = (0, a.useState)(e),
        s = (0, a.useRef)(null),
        l = () => {
            o(n),
                null != s.current && clearTimeout(s.current),
                (s.current = setTimeout(() => {
                    o(e);
                }, r));
        };
    return (
        (0, a.useEffect)(
            () => () => {
                null != s.current && clearTimeout(s.current);
            },
            [e]
        ),
        [i, l]
    );
}
