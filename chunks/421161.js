"use strict";
n.d(t, { j: () => u });
var r = n(64700),
    i = n(311907),
    s = n(627363),
    a = n(587895),
    o = n(71393),
    l = n(871123);
function u(e) {
    let { shouldFetchIfMissing: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (0, l.bF)(e),
        u = e?.applicationId,
        c = (0, i.bG)([a.A], () => (null != u ? a.A.getApplication(u) : null), [u]),
        d = c?.guildId,
        _ = (0, i.bG)([o.A], () => (null != d ? o.A.getGuild(d) : null), [d]);
    return (
        r.useEffect(() => {
            n && t && null == _ && null != e && s.Ay.fetchApplication(e.applicationId, !0);
        }, [_, e, t, n]),
        n ? _ : null
    );
}
