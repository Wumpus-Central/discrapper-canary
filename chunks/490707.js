var n = l(582128),
    a = l(989145);
l.d(
    t,
    {},
    {
        _: function (e, t) {
            let [l, r] = n.useState(null),
                [i, s] = n.useState(!1),
                [o, u] = n.useState(0);
            return (
                n.useEffect(() => {
                    let l = !1;
                    return (
                        (0, a.PK)(e, t).then(
                            (e) => {
                                l || r(e);
                            },
                            () => {
                                l || (0 === o ? u(1) : s(!0));
                            },
                        ),
                        () => {
                            l = !0;
                        }
                    );
                }, [e, t, o]),
                {
                    src: l,
                    gone: i,
                    handleError: n.useCallback(() => {
                        (r(null),
                            (0, a.n6)(e, t).then(
                                (e) => {
                                    e && 0 === o ? u(1) : s(!0);
                                },
                                () => s(!0),
                            ));
                    }, [e, t, o]),
                }
            );
        },
    },
);
