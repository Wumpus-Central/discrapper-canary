n.d(t, { K: () => c });
var i = n(473749),
    l = n(442837),
    a = n(728345),
    r = n(812206),
    s = n(430824),
    o = n(164670);
function c(e) {
    let { shouldFetchIfMissing: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, o.K$)(e),
        c = null == e ? void 0 : e.applicationId,
        d = (0, l.e7)([r.Z], () => (null != c ? r.Z.getApplication(c) : null), [c]),
        u = null == d ? void 0 : d.guildId,
        f = (0, l.e7)([s.Z], () => (null != u ? s.Z.getGuild(u) : null), [u]);
    return (
        i.useEffect(() => {
            n && t && null == f && null != e && a.ZP.fetchApplication(e.applicationId, !0);
        }, [f, e, t, n]),
        n ? f : null
    );
}
