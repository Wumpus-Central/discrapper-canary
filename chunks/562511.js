n.d(t, {
    A2: () => m,
    S3: () => g
});
var r = n(192379),
    i = n(442837),
    l = n(704215),
    o = n(645041),
    s = n(314852),
    a = n(65361),
    c = n(271383),
    u = n(430824),
    d = n(594174),
    h = n(731722),
    p = n(864133),
    f = n(981631);
function g(e) {
    let { fetchGuildProfile: t, fetchStatus: n, guildProfile: g } = (0, a.u)(e),
        m = (function (e) {
            let t = (0, o.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : f.lds);
            return (
                (0, i.e7)(
                    [u.Z, d.default, c.ZP],
                    () => {
                        var t;
                        if (null === e) return !1;
                        let n = u.Z.getGuild(e);
                        if (void 0 === n || !(0, h.up)(n) || null == n.profile || null === n.profile.tag) return !1;
                        let r = d.default.getCurrentUser();
                        if (void 0 === r || (null == (t = r.primaryGuild) ? void 0 : t.identityGuildId) === n.id) return !1;
                        let i = c.ZP.getMember(e, r.id);
                        return null != i && !i.isPending;
                    },
                    [e]
                ) && !t
            );
        })(e),
        b = (function (e, t) {
            let n = (0, i.e7)([p.Z], () => (null === e ? null : p.Z.getGuildLastSeenInfo(e))),
                r = (0, i.e7)([d.default], () => {
                    var e;
                    return null == (e = d.default.getCurrentUser()) ? void 0 : e.primaryGuild;
                });
            if (null === t || null === t.tag) return !1;
            let l = (null == r ? void 0 : r.identityGuildId) === e && (null == r ? void 0 : r.tag) === null,
                o = null !== n && n.tag === t.tag;
            return l && !o;
        })(e, g);
    return (r.useEffect(() => {
        n === s.a.NOT_FETCHED && t();
    }, [t, n]),
    null === g)
        ? null
        : b
          ? 'changed'
          : m
            ? 'available'
            : null;
}
function m(e) {
    return null !== g(e);
}
