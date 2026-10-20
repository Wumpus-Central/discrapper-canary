n.d(t, { _: () => a });
var l = n(582128),
    r = n(989145);
function a(e, t) {
    let [n, a] = l.useState(null),
        [i, s] = l.useState(!1),
        [o, u] = l.useState(0);
    return (
        l.useEffect(() => {
            let n = !1;
            return (
                (0, r.PK)(e, t).then(
                    (e) => {
                        n || a(e);
                    },
                    () => {
                        n || (0 === o ? u(1) : s(!0));
                    },
                ),
                () => {
                    n = !0;
                }
            );
        }, [e, t, o]),
        {
            src: n,
            gone: i,
            handleError: l.useCallback(() => {
                (a(null),
                    (0, r.n6)(e, t).then(
                        (e) => {
                            e && 0 === o ? u(1) : s(!0);
                        },
                        () => s(!0),
                    ));
            }, [e, t, o]),
        }
    );
}
