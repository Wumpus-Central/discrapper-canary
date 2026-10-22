n.d(t, { A: () => i });
var l = n(582128),
    r = n(17928),
    s = n(11044),
    a = n(287809),
    o = n(503275),
    u = n(606054);
function i(e, t, n) {
    let { project: i, remixProject: d, isSettled: c } = (0, u.A)(e?.conjureProjectId ?? null, t, n),
        m = i?.owner_user_id ?? null;
    l.useEffect(() => {
        n && (0, o.Y_)(m);
    }, [n, m]);
    let v = (0, r.bG)([a.default], () => (null != m ? (a.default.getUser(m) ?? null) : null), [m]),
        f = v?.getAvatarURL(t, 32);
    return (
        l.useEffect(() => {
            n && null != f && (0, s.N)(f);
        }, [n, f]),
        l.useMemo(
            () => ({ creator: v, remixProject: d, isSettled: null != e && c && (null == m || null != v) }),
            [v, d, e, c, m],
        )
    );
}
