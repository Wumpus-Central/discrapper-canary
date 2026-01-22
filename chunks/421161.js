n.d(t, { j: () => c });
var r = n(64700),
    i = n(311907),
    a = n(627363),
    s = n(587895),
    o = n(71393),
    l = n(871123);
function c(e) {
    let { shouldFetchIfMissing: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, l.bF)(e),
        c = null == e ? void 0 : e.applicationId,
        u = (0, i.bG)([s.A], () => (null != c ? s.A.getApplication(c) : null), [c]),
        d = null == u ? void 0 : u.guildId,
        f = (0, i.bG)([o.A], () => (null != d ? o.A.getGuild(d) : null), [d]);
    return (
        r.useEffect(() => {
            n && t && null == f && null != e && a.Ay.fetchApplication(e.applicationId, !0);
        }, [f, e, t, n]),
        n ? f : null
    );
}
