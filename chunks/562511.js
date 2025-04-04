n.d(t, {
    A2: () => m,
    S3: () => h
});
var r = n(192379),
    i = n(442837),
    o = n(704215),
    l = n(645041),
    s = n(314852),
    a = n(65361),
    c = n(271383),
    u = n(430824),
    d = n(594174),
    p = n(731722),
    _ = n(864133),
    f = n(981631);
function h(e) {
    let { fetchGuildProfile: t, fetchStatus: n, guildProfile: h } = (0, a.u)(e),
        m = (function (e) {
            let t = (0, l.FT)(o.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : f.lds);
            return (
                (0, i.e7)(
                    [u.Z, d.default, c.ZP],
                    () => {
                        var t;
                        if (null === e) return !1;
                        let n = u.Z.getGuild(e);
                        if (void 0 === n || !(0, p.u)(n) || null == n.profile) return !1;
                        let r = d.default.getCurrentUser();
                        if (void 0 === r || (null == (t = r.primaryGuild) ? void 0 : t.identityGuildId) === n.id) return !1;
                        let i = c.ZP.getMember(e, r.id);
                        return null != i && !i.isPending;
                    },
                    [e]
                ) && !t
            );
        })(e),
        g = (function (e, t) {
            let n = (0, i.e7)([_.Z], () => (null === e ? null : _.Z.getGuildLastSeenInfo(e))),
                r = (0, i.e7)([d.default], () => {
                    var e;
                    return null == (e = d.default.getCurrentUser()) ? void 0 : e.primaryGuild;
                });
            if (null === t || null === t.tag) return !1;
            let o = (null == r ? void 0 : r.identityGuildId) === e && (null == r ? void 0 : r.tag) === null,
                l = null !== n && n.tag === t.tag;
            return o && !l;
        })(e, h);
    return (r.useEffect(() => {
        n === s.a.NOT_FETCHED && t();
    }, [t, n]),
    null === h)
        ? null
        : g
          ? 'changed'
          : m
            ? 'available'
            : null;
}
function m(e) {
    return null !== h(e);
}
