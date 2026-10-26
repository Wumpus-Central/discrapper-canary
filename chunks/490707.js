n.d(t, { _: () => i });
var l = n(582128),
    a = n(989145);
function i(e, t) {
    let [n, i] = l.useState(null),
        [r, u] = l.useState(!1),
        [s, o] = l.useState(0);
    return (
        l.useEffect(() => {
            let n = !1;
            return (
                (0, a.PK)(e, t).then(
                    (e) => {
                        n || i(e);
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
            gone: r,
            handleError: l.useCallback(() => {
                (i(null),
                    (0, a.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : u(!0);
                        },
                        () => u(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
