n.d(t, { Z: () => g }), n(301563), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(192379),
    i = n(442837),
    l = n(668781),
    a = n(493683),
    o = n(100527),
    s = n(906732),
    c = n(835473),
    u = n(703656),
    d = n(594174),
    p = n(122613),
    h = n(508686),
    f = n(388032);
function g(e) {
    var t, n;
    let { match: g } = e,
        m = null != (n = (0, u.DR)()) ? n : [],
        { analyticsLocations: b } = (0, s.ZP)([...m, o.Z.ACTIVITY_DETAIL_PAGE]),
        { applicationId: _ } = g.params,
        [E] = (0, c.Z)([_]),
        O = null == E || null == (t = E.bot) ? void 0 : t.id,
        N = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return (
        r.useEffect(() => {
            null != O &&
                null != N &&
                (async () => {
                    try {
                        var e;
                        let t = new URL(location.href),
                            n = await a.Z.openPrivateChannel(O),
                            r = null != (e = t.searchParams.get('referrer_id')) ? e : void 0,
                            { customId: i } = await (0, h.u)(_, t.searchParams.get('link_id'), t.searchParams.get('custom_id'));
                        await (0, p.Z)({
                            targetApplicationId: _,
                            channelId: n,
                            analyticsLocations: b,
                            customId: i,
                            referrerId: r
                        });
                    } catch (e) {}
                })();
        }, [b, _, O, N]),
        r.useEffect(() => {
            let e = setTimeout(() => {
                null == O &&
                    l.Z.show({
                        title: f.NW.string(f.t.PtobXV),
                        body: f.NW.string(f.t['IOy+Iy'])
                    });
            }, 5000);
            return () => {
                clearTimeout(e);
            };
        }, [O]),
        null
    );
}
