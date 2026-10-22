n.d(t, { _: () => r });
var l = n(582128),
    i = n(989145);
function r(e, t) {
    let [n, r] = l.useState(null),
        [a, u] = l.useState(!1),
        [s, o] = l.useState(0);
    return (
        l.useEffect(() => {
            let n = !1;
            return (
                (0, i.PK)(e, t).then(
                    (e) => {
                        n || r(e);
                    },
                    () => {
                        n || (0 === s ? o(1) : u(!0));
                    },
                ),
                () => {
                    n = !0;
                }
            );
        }, [e, t, s]),
        {
            src: n,
            gone: a,
            handleError: l.useCallback(() => {
                (r(null),
                    (0, i.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : u(!0);
                        },
                        () => u(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
