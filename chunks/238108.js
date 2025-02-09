n.d(t, { Z: () => r }), n(47120);
var i = n(192379);
let r = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        [t, n] = i.useState(!1),
        [r, a] = i.useState(0),
        [s, l] = i.useState(!1),
        [o, c] = i.useState(0);
    return (
        i.useEffect(() => {
            r >= e && (l(!0), c(Math.floor(r / e)));
            let t = setTimeout(() => {
                a(0);
            }, 1000);
            return () => clearTimeout(t);
        }, [r, e]),
        i.useEffect(() => {
            if (!t) {
                let e = setTimeout(() => {
                    l(!1), c(0);
                }, 1000);
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
            easterEggLevel: o
        }
    );
};
