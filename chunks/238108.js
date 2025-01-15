n(47120);
var i = n(192379);
t.Z = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        [t, n] = i.useState(!1),
        [s, r] = i.useState(0),
        [a, l] = i.useState(!1),
        [o, c] = i.useState(0);
    return (
        i.useEffect(() => {
            s >= e && (l(!0), c(Math.floor(s / e)));
            let t = setTimeout(() => {
                r(0);
            }, 1000);
            return () => clearTimeout(t);
        }, [s, e]),
        i.useEffect(() => {
            if (!t) {
                let e = setTimeout(() => {
                    l(!1), c(0);
                }, 1000);
                return () => clearTimeout(e);
            }
            r((e) => e + 1);
        }, [t]),
        {
            onHover: () => {
                n(!0);
            },
            onUnhover: () => {
                n(!1);
            },
            isEasterEggTriggered: a,
            easterEggLevel: o
        }
    );
};
