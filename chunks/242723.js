n.d(t, { K: () => c });
var r = n(473749),
    i = n(442837),
    a = n(728345),
    o = n(812206),
    s = n(430824),
    l = n(164670);
function c(e) {
    let { shouldFetchIfMissing: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, l.K$)(e),
        c = null == e ? void 0 : e.applicationId,
        u = (0, i.e7)([o.Z], () => (null != c ? o.Z.getApplication(c) : null), [c]),
        d = null == u ? void 0 : u.guildId,
        f = (0, i.e7)([s.Z], () => (null != d ? s.Z.getGuild(d) : null), [d]);
    return (
        r.useEffect(() => {
            n && t && null == f && null != e && a.ZP.fetchApplication(e.applicationId, !0);
        }, [f, e, t, n]),
        n ? f : null
    );
}
