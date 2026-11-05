t.d(l, { yv: () => i });
var n = t(582128),
    a = t(855986),
    u = t(287809);
(t(792996), t(427262));
var r = t(513425),
    s = t(503275);
function i(e) {
    let l = e?.id,
        t = e?.owner_user_id,
        i = (0, a.yK)(
            [r.A],
            () =>
                null == l
                    ? []
                    : [
                          ...new Set(
                              r.A.getMessages(l)
                                  .flatMap((e) => (null != e.user_id && e.user_id !== t ? [e.user_id] : []))
                                  .reverse(),
                          ),
                      ],
            [l, t],
        );
    n.useEffect(() => {
        null != t && ((0, s.Y_)(t), i.forEach(s.Y_));
    }, [t, i]);
    let c = (0, a.bG)([u.default], () => (null == t ? null : u.default.getUser(t)), [t]),
        o = (0, a.yK)([u.default], () => i.map((e) => u.default.getUser(e)).filter((e) => null != e), [i]);
    return n.useMemo(() => ({ creator: c ?? null, collaborators: o }), [c, o]);
}
t(191850);
