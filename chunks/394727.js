n.d(t, { A: () => A }), n(747238), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956);
var r = n(64700),
    i = n(311907),
    l = n(157559),
    a = n(308528),
    s = n(793574),
    o = n(688810),
    c = n(429913),
    u = n(976860),
    d = n(287809),
    p = n(956549),
    f = n(257269),
    h = n(985018);
function A(e) {
    var t, n;
    let { match: A } = e,
        g = null != (t = (0, u.UC)()) ? t : [],
        { analyticsLocations: m } = (0, o.Ay)([...g, s.A.ACTIVITY_DETAIL_PAGE]),
        { applicationId: b } = A.params,
        [_] = (0, c.A)([b]),
        E = null == _ || null == (n = _.bot) ? void 0 : n.id,
        O = (0, i.bG)([d.default], () => d.default.getCurrentUser());
    return (
        r.useEffect(() => {
            null != E &&
                null != O &&
                (async () => {
                    try {
                        var e;
                        let t = new URL(location.href),
                            n = await a.A.openPrivateChannel({ recipientIds: E }),
                            r = null != (e = t.searchParams.get("referrer_id")) ? e : void 0,
                            { customId: i } = await (0, f.d9)(
                                b,
                                t.searchParams.get("link_id"),
                                t.searchParams.get("custom_id"),
                            );
                        await (0, p.A)({
                            targetApplicationId: b,
                            channelId: n,
                            analyticsLocations: m,
                            customId: i,
                            referrerId: r,
                        });
                    } catch (e) {}
                })();
        }, [m, b, E, O]),
        r.useEffect(() => {
            let e = setTimeout(() => {
                null == E &&
                    l.A.show({
                        title: h.intl.string(h.t.PtobXW),
                        body: h.intl.string(h.t["IOy+I5"]),
                    });
            }, 5000);
            return () => {
                clearTimeout(e);
            };
        }, [E]),
        null
    );
}
