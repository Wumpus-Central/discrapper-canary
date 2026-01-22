n.d(t, {
    A: () => i,
}),
    n(896048);
var r = n(64700);
let i = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        [t, n] = r.useState(!1),
        [i, a] = r.useState(0),
        [s, o] = r.useState(!1),
        [l, c] = r.useState(0);
    return (
        r.useEffect(() => {
            i >= e && (o(!0), c(Math.floor(i / e)));
            let t = setTimeout(() => {
                a(0);
            }, 1e3);
            return () => clearTimeout(t);
        }, [i, e]),
        r.useEffect(() => {
            if (!t) {
                let e = setTimeout(() => {
                    o(!1), c(0);
                }, 1e3);
                return () => clearTimeout(e);
            }
            a((e) => e + 1);
        }, [t]),
        {
            onHover: () => {
                n(!0);
            },
            onUnhover: () => {
                n(!1);
            },
            isEasterEggTriggered: s,
            easterEggLevel: l,
        }
    );
};
