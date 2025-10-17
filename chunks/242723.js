n.d(t, { K: () => c });
var i = n(647438),
    r = n(442837),
    l = n(728345),
    a = n(812206),
    o = n(430824),
    s = n(164670);
function c(e) {
    let { shouldFetchIfMissing: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, s.K$)(e),
        c = null == e ? void 0 : e.applicationId,
        d = (0, r.e7)([a.Z], () => (null != c ? a.Z.getApplication(c) : null), [c]),
        u = null == d ? void 0 : d.guildId,
        f = (0, r.e7)([o.Z], () => (null != u ? o.Z.getGuild(u) : null), [u]);
    return (
        i.useEffect(() => {
            n && t && null == f && null != e && l.ZP.fetchApplication(e.applicationId, !0);
        }, [f, e, t, n]),
        n ? f : null
    );
}
