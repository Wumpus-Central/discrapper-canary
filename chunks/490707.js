l.d(t, { _: () => r });
var n = l(582128),
    a = l(989145);
function r(e, t) {
    let [l, r] = n.useState(null),
        [i, s] = n.useState(!1),
        [u, o] = n.useState(0);
    return (
        n.useEffect(() => {
            let l = !1;
            return (
                (0, a.PK)(e, t).then(
                    (e) => {
                        l || r(e);
                    },
                    () => {
                        l || (0 === u ? o(1) : s(!0));
                    },
                ),
                () => {
                    l = !0;
                }
            );
        }, [e, t, u]),
        {
            src: l,
            gone: i,
            handleError: n.useCallback(() => {
                (r(null),
                    (0, a.n6)(e, t).then(
                        (e) => {
                            e && 0 === u ? o(1) : s(!0);
                        },
                        () => s(!0),
                    ));
            }, [e, t, u]),
        }
    );
}
