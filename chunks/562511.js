n.d(t, {
    A2: () => _,
    S3: () => d
});
var r = n(442837),
    i = n(704215),
    o = n(645041),
    l = n(271383),
    s = n(430824),
    a = n(594174),
    c = n(731722),
    u = n(981631);
function d(e) {
    return !(function (e) {
        let t = (0, o.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : u.lds);
        return (
            (0, r.e7)(
                [s.Z, a.default, l.ZP],
                () => {
                    if (t || null === e) return !1;
                    let n = s.Z.getGuild(e);
                    if (void 0 === n) return !1;
                    let r = a.default.getCurrentUser();
                    if (void 0 === r) return !1;
                    let i = l.ZP.getMember(e, r.id);
                    return (
                        null != i &&
                        (function (e, t, n) {
                            if (!(0, c.u)(e) || null == e.profile || n.isPending) return !1;
                            if (null == t.primaryGuild) return !0;
                            let r = null != n.joinedAt ? new Date(n.joinedAt) : null,
                                i = null != r && Date.now() - r.getTime() <= 259200000;
                            return null == t.primaryGuild.identityGuildId && !i;
                        })(n, r, i)
                    );
                },
                [t, e]
            ) && !t
        );
    })(e)
        ? null
        : 'available';
}
function _(e) {
    return null !== d(e);
}
