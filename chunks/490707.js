l.d(t, { _: () => i });
var n = l(582128),
    a = l(989145);
function i(e, t) {
    let [l, i] = n.useState(null),
        [r, u] = n.useState(!1),
        [s, o] = n.useState(0);
    return (
        n.useEffect(() => {
            let l = !1;
            return (
                (0, a.PK)(e, t).then(
                    (e) => {
                        l || i(e);
                    },
                    () => {
                        l || (0 === s ? o(1) : u(!0));
                    },
                ),
                () => {
                    l = !0;
                }
            );
        }, [e, t, s]),
        {
            src: l,
            gone: r,
            handleError: n.useCallback(() => {
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
