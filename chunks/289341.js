n.d(t, { Z: () => h }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var i = n(192379),
    l = n(668781),
    r = n(493683),
    a = n(100527),
    s = n(906732),
    o = n(835473),
    c = n(703656),
    d = n(122613),
    u = n(388032);
function h(e) {
    var t, n;
    let { match: h } = e,
        m = null !== (n = (0, c.DR)()) && void 0 !== n ? n : [],
        { analyticsLocations: p } = (0, s.ZP)([...m, a.Z.ACTIVITY_DETAIL_PAGE]),
        { applicationId: g } = h.params,
        [_] = (0, o.Z)([g]),
        f = null == _ ? void 0 : null === (t = _.bot) || void 0 === t ? void 0 : t.id;
    return (
        i.useEffect(() => {
            null != f &&
                (async () => {
                    try {
                        var e, t;
                        let n = new URL(location.href),
                            i = null !== (e = n.searchParams.get('custom_id')) && void 0 !== e ? e : void 0,
                            l = null !== (t = n.searchParams.get('referrer_id')) && void 0 !== t ? t : void 0,
                            a = await r.Z.openPrivateChannel(f);
                        await (0, d.Z)({
                            targetApplicationId: g,
                            channelId: a,
                            analyticsLocations: p,
                            customId: i,
                            referrerId: l
                        });
                    } catch (e) {}
                })();
        }, [p, g, f]),
        i.useEffect(() => {
            let e = setTimeout(() => {
                null == f &&
                    l.Z.show({
                        title: u.intl.string(u.t.PtobXV),
                        body: u.intl.string(u.t['IOy+Iy'])
                    });
            }, 5000);
            return () => {
                clearTimeout(e);
            };
        }, [f]),
        null
    );
}
