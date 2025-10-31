n.d(t, {
    K: () => _,
    p: () => p,
});
var r = n(647438),
    i = n(442837),
    a = n(728345),
    o = n(812206),
    s = n(621853),
    l = n(484459),
    c = n(602733),
    u = n(314897),
    d = n(430824),
    f = n(164670);
function _(e) {
    let { shouldFetchIfMissing: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, f.K$)(e),
        s = null == e ? void 0 : e.applicationId,
        l = (0, i.e7)([o.Z], () => (null != s ? o.Z.getApplication(s) : null), [s]),
        c = null == l ? void 0 : l.guildId,
        u = (0, i.e7)([d.Z], () => (null != c ? d.Z.getGuild(c) : null), [c]);
    return (
        r.useEffect(() => {
            n && t && null == u && null != e && a.ZP.fetchApplication(e.applicationId, !0);
        }, [u, e, t, n]),
        n ? u : null
    );
}
function p() {
    let e = (0, i.e7)([u.default], () => u.default.getId()),
        { userProfile: t, wishlistId: n } = (0, i.cj)(
            [s.Z],
            () => ({
                userProfile: s.Z.getUserProfile(e),
                wishlistId: s.Z.getFirstWishlistId(e),
            }),
            [e],
        );
    return (
        r.useEffect(() => {
            null != e && null == t && (0, l.Z)(e);
        }, [e, t]),
        (0, c.kZ)(n, e)
    );
}
