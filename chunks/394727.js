n.d(t, { A: () => E }), n(323874), n(14289), n(35956);
var i = n(64700),
    r = n(311907),
    a = n(157559),
    l = n(308528),
    s = n(793574),
    o = n(688810),
    d = n(429913),
    u = n(976860),
    c = n(287809),
    A = n(956549),
    h = n(257269),
    _ = n(985018);
function E(e) {
    let { match: t } = e,
        n = (0, u.UC)() ?? [],
        { analyticsLocations: E } = (0, o.Ay)([...n, s.A.ACTIVITY_DETAIL_PAGE]),
        { applicationId: p } = t.params,
        [m] = (0, d.A)([p]),
        g = m?.bot?.id,
        I = (0, r.bG)([c.default], () => c.default.getCurrentUser());
    return (
        i.useEffect(() => {
            null != g &&
                null != I &&
                (async () => {
                    try {
                        let e = new URL(location.href),
                            t = await l.A.openPrivateChannel({ recipientIds: g }),
                            n = e.searchParams.get("referrer_id") ?? void 0,
                            { customId: i } = await (0, h.d9)(
                                p,
                                e.searchParams.get("link_id"),
                                e.searchParams.get("custom_id"),
                            );
                        await (0, A.A)({
                            targetApplicationId: p,
                            channelId: t,
                            analyticsLocations: E,
                            customId: i,
                            referrerId: n,
                        });
                    } catch (e) {}
                })();
        }, [E, p, g, I]),
        i.useEffect(() => {
            let e = setTimeout(() => {
                null == g && a.A.show({ title: _.intl.string(_.t.PtobXW), body: _.intl.string(_.t["IOy+I5"]) });
            }, 5e3);
            return () => {
                clearTimeout(e);
            };
        }, [g]),
        null
    );
}
