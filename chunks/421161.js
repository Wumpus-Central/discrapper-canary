n.d(t, { j: () => u });
var l = n(64700),
    r = n(311907),
    i = n(627363),
    s = n(587895),
    a = n(71393),
    o = n(871123);
function u(e) {
    let { shouldFetchIfMissing: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, o.bF)(e),
        u = e?.applicationId,
        d = (0, r.bG)([s.A], () => (null != u ? s.A.getApplication(u) : null), [u]),
        c = d?.guildId,
        C = (0, r.bG)([a.A], () => (null != c ? a.A.getGuild(c) : null), [c]);
    return (
        l.useEffect(() => {
            n && t && null == C && null != e && i.Ay.fetchApplication(e.applicationId, !0);
        }, [C, e, t, n]),
        n ? C : null
    );
}
