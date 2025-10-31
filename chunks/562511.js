n.d(t, {
    A2: () => h,
    S3: () => m,
});
var r = n(647438),
    i = n(442837),
    l = n(704215),
    a = n(570140),
    s = n(645041),
    o = n(271383),
    c = n(430824),
    u = n(594174),
    d = n(731722),
    p = n(864133),
    f = n(981631);
function m(e) {
    let t = (function (e) {
        let t = (0, s.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : f.lds);
        return (
            (0, i.e7)([c.Z, u.default, o.ZP], () => {
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
                let l = o.ZP.getMember(e, i.id);
                return null != l && !l.isPending;
            }, [e]) && !t
        );
    })(e);
    return !(function (e) {
        let t = (0, s.FT)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : f.lds),
            n = (0, i.e7)([p.Z], () => (null === e ? null : p.Z.getGuildLastSeenInfo(e))),
            o = (0, i.e7)([u.default], () => {
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
                    a.Z.dispatch({
                        type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
                        guildId: e,
                        lastSeenInfo: { tag: d },
                    });
            }, [e, d, t, n]),
            null == d || ((null == o ? void 0 : o.identityGuildId) === e && (null == o ? void 0 : o.tag) === d))
        )
            return !1;
        let m = (null == o ? void 0 : o.identityGuildId) === e && (null == o ? void 0 : o.tag) === null,
            h = null === n || (null == n ? void 0 : n.tag) === d;
        return m && !h && t;
    })(e)
        ? t
            ? "available"
            : null
        : "changed";
}
function h(e) {
    return null !== m(e);
}
