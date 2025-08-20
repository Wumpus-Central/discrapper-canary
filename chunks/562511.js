n.d(t, {
    A2: () => g,
    S3: () => m,
});
var r = n(647438),
    i = n(442837),
    a = n(704215),
    o = n(570140),
    s = n(645041),
    l = n(271383),
    c = n(430824),
    u = n(594174),
    d = n(731722),
    f = n(864133),
    _ = n(981631);
function p(e) {
    let t = (0, s.FT)(a.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : _.lds);
    return (
        (0, i.e7)([c.Z, u.default, l.ZP], () => {
            var t, n;
            if (null === e) return !1;
            let r = c.Z.getGuild(e);
            if (void 0 === r || !(0, d.up)(r) || null == r.profile || null === r.profile.tag) return !1;
            let i = u.default.getCurrentUser();
            if (
                void 0 === i ||
                ((null == (t = i.primaryGuild) ? void 0 : t.identityGuildId) === r.id &&
                    (null == (n = i.primaryGuild) ? void 0 : n.tag) === r.profile.tag)
            )
                return !1;
            let a = l.ZP.getMember(e, i.id);
            return null != a && !a.isPending;
        }, [e]) && !t
    );
}
function h(e) {
    let t = (0, s.FT)(a.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : _.lds),
        n = (0, i.e7)([f.Z], () => (null === e ? null : f.Z.getGuildLastSeenInfo(e))),
        l = (0, i.e7)([u.default], () => {
            var e;
            return null == (e = u.default.getCurrentUser()) ? void 0 : e.primaryGuild;
        }),
        d = (0, i.e7)([c.Z], () => {
            var t, n;
            return null == (n = c.Z.getGuild(e)) || null == (t = n.profile) ? void 0 : t.tag;
        });
    if (
        (r.useEffect(() => {
            t &&
                null === n &&
                null != e &&
                null != d &&
                o.Z.dispatch({
                    type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                    guildId: e,
                    lastSeenInfo: { tag: d },
                });
        }, [e, d, t, n]),
        null == d || ((null == l ? void 0 : l.identityGuildId) === e && (null == l ? void 0 : l.tag) === d))
    )
        return !1;
    let p = (null == l ? void 0 : l.identityGuildId) === e && (null == l ? void 0 : l.tag) === null,
        h = null === n || (null == n ? void 0 : n.tag) === d;
    return p && !h && t;
}
function m(e) {
    let t = p(e);
    return h(e) ? "changed" : t ? "available" : null;
}
function g(e) {
    return null !== m(e);
}
