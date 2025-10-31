n.d(t, { Z: () => h }), n(35282), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(647438),
    i = n(442837),
    l = n(668781),
    a = n(493683),
    s = n(100527),
    o = n(906732),
    c = n(835473),
    u = n(703656),
    d = n(594174),
    p = n(122613),
    f = n(649256),
    m = n(388032);
function h(e) {
    var t, n;
    let { match: h } = e,
        g = null != (n = (0, u.DR)()) ? n : [],
        { analyticsLocations: _ } = (0, o.ZP)([...g, s.Z.ACTIVITY_DETAIL_PAGE]),
        { applicationId: b } = h.params,
        [E] = (0, c.Z)([b]),
        O = null == E || null == (t = E.bot) ? void 0 : t.id,
        I = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return (
        r.useEffect(() => {
            null != O &&
                null != I &&
                (async () => {
                    try {
                        var e;
                        let t = new URL(location.href),
                            n = await a.Z.openPrivateChannel({ recipientIds: O }),
                            r = null != (e = t.searchParams.get("referrer_id")) ? e : void 0,
                            { customId: i } = await (0, f.ur)(
                                b,
                                t.searchParams.get("link_id"),
                                t.searchParams.get("custom_id"),
                            );
                        await (0, p.Z)({
                            targetApplicationId: b,
                            channelId: n,
                            analyticsLocations: _,
                            customId: i,
                            referrerId: r,
                        });
                    } catch (e) {}
                })();
        }, [_, b, O, I]),
        r.useEffect(() => {
            let e = setTimeout(() => {
                null == O &&
                    l.Z.show({
                        title: m.intl.string(m.t.PtobXW),
                        body: m.intl.string(m.t["IOy+I5"]),
                    });
            }, 5000);
            return () => {
                clearTimeout(e);
            };
        }, [O]),
        null
    );
}
