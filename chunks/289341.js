n.d(t, { Z: () => g }), n(35282), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(73800),
    i = n(442837),
    l = n(668781),
    a = n(493683),
    o = n(100527),
    s = n(906732),
    c = n(835473),
    u = n(703656),
    d = n(594174),
    p = n(122613),
    h = n(649256),
    f = n(388032);
function g(e) {
    var t, n;
    let { match: g } = e,
        m = null != (n = (0, u.DR)()) ? n : [],
        { analyticsLocations: b } = (0, s.ZP)([...m, o.Z.ACTIVITY_DETAIL_PAGE]),
        { applicationId: _ } = g.params,
        [E] = (0, c.Z)([_]),
        O = null == E || null == (t = E.bot) ? void 0 : t.id,
        y = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return (
        r.useEffect(() => {
            null != O &&
                null != y &&
                (async () => {
                    try {
                        var e;
                        let t = new URL(location.href),
                            n = await a.Z.openPrivateChannel({ recipientIds: O }),
                            r = null != (e = t.searchParams.get('referrer_id')) ? e : void 0,
                            { customId: i } = await (0, h.ur)(_, t.searchParams.get('link_id'), t.searchParams.get('custom_id'));
                        await (0, p.Z)({
                            targetApplicationId: _,
                            channelId: n,
                            analyticsLocations: b,
                            customId: i,
                            referrerId: r
                        });
                    } catch (e) {}
                })();
        }, [b, _, O, y]),
        r.useEffect(() => {
            let e = setTimeout(() => {
                null == O &&
                    l.Z.show({
                        title: f.intl.string(f.t.PtobXV),
                        body: f.intl.string(f.t['IOy+Iy'])
                    });
            }, 5000);
            return () => {
                clearTimeout(e);
            };
        }, [O]),
        null
    );
}
