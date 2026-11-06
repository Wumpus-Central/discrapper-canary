n.d(e, { yv: () => s });
var t = n(582128),
    a = n(855986),
    u = n(287809);
(n(792996), n(427262));
var r = n(513425),
    i = n(503275);
function s(l) {
    let e = l?.id,
        n = l?.owner_user_id,
        s = (0, a.yK)(
            [r.A],
            () =>
                null == e
                    ? []
                    : [
                          ...new Set(
                              r.A.getMessages(e)
                                  .flatMap((l) => (null != l.user_id && l.user_id !== n ? [l.user_id] : []))
                                  .reverse(),
                          ),
                      ],
            [e, n],
        );
    t.useEffect(() => {
        null != n && ((0, i.Y_)(n), s.forEach(i.Y_));
    }, [n, s]);
    let c = (0, a.bG)([u.default], () => (null == n ? null : u.default.getUser(n)), [n]),
        o = (0, a.yK)([u.default], () => s.map((l) => u.default.getUser(l)).filter((l) => null != l), [s]);
    return t.useMemo(() => ({ creator: c ?? null, collaborators: o }), [c, o]);
}
n(191850);
