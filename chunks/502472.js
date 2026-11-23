var t = n(582128),
    a = n(855986),
    r = n(287809);
(n(570597), n(427262));
var u = n(513425),
    i = n(503275);
(n(191850),
    n(792996),
    n.d(
        e,
        {},
        {
            yv: function (l) {
                let e = l?.id,
                    n = l?.owner_user_id,
                    s = (0, a.yK)(
                        [u.A],
                        () =>
                            null == e
                                ? []
                                : [
                                      ...new Set(
                                          u.A.getMessages(e)
                                              .flatMap((l) => (null != l.user_id && l.user_id !== n ? [l.user_id] : []))
                                              .reverse(),
                                      ),
                                  ],
                        [e, n],
                    );
                t.useEffect(() => {
                    null != n && ((0, i.Y_)(n), s.forEach(i.Y_));
                }, [n, s]);
                let o = (0, a.bG)([r.default], () => (null == n ? null : r.default.getUser(n)), [n]),
                    c = (0, a.yK)([r.default], () => s.map((l) => r.default.getUser(l)).filter((l) => null != l), [s]);
                return t.useMemo(() => ({ creator: o ?? null, collaborators: c }), [o, c]);
            },
        },
    ));
