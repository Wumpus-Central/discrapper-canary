n.d(t, { Z: () => g }), n(301563), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(192379),
    i = n(442837),
    l = n(668781),
    o = n(493683),
    a = n(100527),
    s = n(906732),
    c = n(835473),
    u = n(703656),
    d = n(594174),
    p = n(122613),
    h = n(388032);
function g(e) {
    var t, n;
    let { match: g } = e,
        f = null !== (n = (0, u.DR)()) && void 0 !== n ? n : [],
        { analyticsLocations: m } = (0, s.ZP)([...f, a.Z.ACTIVITY_DETAIL_PAGE]),
        { applicationId: b } = g.params,
        [_] = (0, c.Z)([b]),
        E = null == _ ? void 0 : null === (t = _.bot) || void 0 === t ? void 0 : t.id,
        O = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return (
        r.useEffect(() => {
            null != E &&
                null != O &&
                (async () => {
                    try {
                        var e, t;
                        let n = new URL(location.href),
                            r = null !== (e = n.searchParams.get('custom_id')) && void 0 !== e ? e : void 0,
                            i = null !== (t = n.searchParams.get('referrer_id')) && void 0 !== t ? t : void 0,
                            l = await o.Z.openPrivateChannel(E);
                        await (0, p.Z)({
                            targetApplicationId: b,
                            channelId: l,
                            analyticsLocations: m,
                            customId: r,
                            referrerId: i
                        });
                    } catch (e) {}
                })();
        }, [m, b, E, O]),
        r.useEffect(() => {
            let e = setTimeout(() => {
                null == E &&
                    l.Z.show({
                        title: h.NW.string(h.t.PtobXV),
                        body: h.NW.string(h.t['IOy+Iy'])
                    });
            }, 5000);
            return () => {
                clearTimeout(e);
            };
        }, [E]),
        null
    );
}
