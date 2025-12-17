n.d(t, {
    A2: () => f,
    S3: () => h,
});
var a = n(473749),
    r = n(442837),
    l = n(704215),
    i = n(570140),
    s = n(645041),
    o = n(271383),
    c = n(430824),
    d = n(594174),
    u = n(731722),
    m = n(864133),
    p = n(981631);
function h(e) {
    let t = (function (e) {
        let t = (0, s.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : p.lds);
        return (
            (0, r.e7)([c.Z, d.default, o.ZP], () => {
                var t, n;
                if (null === e) return !1;
                let a = c.Z.getGuild(e);
                if (void 0 === a || !(0, u.up)(a) || null == a.profile || null === a.profile.tag) return !1;
                let r = d.default.getCurrentUser();
                if (
                    void 0 === r ||
                    ((null == (t = r.primaryGuild) ? void 0 : t.identityGuildId) === a.id &&
                        (null == (n = r.primaryGuild) ? void 0 : n.tag) === a.profile.tag)
                )
                    return !1;
                let l = o.ZP.getMember(e, r.id);
                return null != l && !l.isPending;
            }, [e]) && !t
        );
    })(e);
    return !(function (e) {
        let t = (0, s.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : p.lds),
            n = (0, r.e7)([m.Z], () => (null === e ? null : m.Z.getGuildLastSeenInfo(e))),
            o = (0, r.e7)([d.default], () => {
                var e;
                return null == (e = d.default.getCurrentUser()) ? void 0 : e.primaryGuild;
            }),
            u = (0, r.e7)([c.Z], () => {
                var t, n;
                return null == (n = c.Z.getGuild(e)) || null == (t = n.profile) ? void 0 : t.tag;
            });
        if (
            (a.useEffect(() => {
                t &&
                    null === n &&
                    null != e &&
                    null != u &&
                    i.Z.dispatch({
                        type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                        guildId: e,
                        lastSeenInfo: { tag: u },
                    });
            }, [e, u, t, n]),
            null == u || ((null == o ? void 0 : o.identityGuildId) === e && (null == o ? void 0 : o.tag) === u))
        )
            return !1;
        let h = (null == o ? void 0 : o.identityGuildId) === e && (null == o ? void 0 : o.tag) === null,
            f = null === n || (null == n ? void 0 : n.tag) === u;
        return h && !f && t;
    })(e)
        ? t
            ? "available"
            : null
        : "changed";
}
function f(e) {
    return null !== h(e);
}
