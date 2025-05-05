n.d(t, { Z: () => r }), n(388685);
var i = n(73800);
let r = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        [t, n] = i.useState(!1),
        [r, s] = i.useState(0),
        [l, a] = i.useState(!1),
        [o, c] = i.useState(0);
    return (
        i.useEffect(() => {
            r >= e && (a(!0), c(Math.floor(r / e)));
            let t = setTimeout(() => {
                s(0);
            }, 1000);
            return () => clearTimeout(t);
        }, [r, e]),
        i.useEffect(() => {
            if (!t) {
                let e = setTimeout(() => {
                    a(!1), c(0);
                }, 1000);
                return () => clearTimeout(e);
            }
            s((e) => e + 1);
        }, [t]),
        {
            onHover: () => {
                n(!0);
            },
            onUnhover: () => {
                n(!1);
            },
            isEasterEggTriggered: l,
            easterEggLevel: o
        }
    );
};
