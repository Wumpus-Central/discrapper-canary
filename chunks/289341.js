n.d(t, { Z: () => p }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var i = n(192379),
    l = n(442837),
    r = n(668781),
    a = n(493683),
    s = n(100527),
    o = n(906732),
    d = n(835473),
    c = n(703656),
    u = n(594174),
    h = n(122613),
    m = n(388032);
function p(e) {
    var t, n;
    let { match: p } = e,
        g = null !== (n = (0, c.DR)()) && void 0 !== n ? n : [],
        { analyticsLocations: _ } = (0, o.ZP)([...g, s.Z.ACTIVITY_DETAIL_PAGE]),
        { applicationId: f } = p.params,
        [E] = (0, d.Z)([f]),
        I = null == E ? void 0 : null === (t = E.bot) || void 0 === t ? void 0 : t.id,
        C = (0, l.e7)([u.default], () => u.default.getCurrentUser());
    return (
        i.useEffect(() => {
            null != I &&
                null != C &&
                (async () => {
                    try {
                        var e, t;
                        let n = new URL(location.href),
                            i = null !== (e = n.searchParams.get('custom_id')) && void 0 !== e ? e : void 0,
                            l = null !== (t = n.searchParams.get('referrer_id')) && void 0 !== t ? t : void 0,
                            r = await a.Z.openPrivateChannel(I);
                        await (0, h.Z)({
                            targetApplicationId: f,
                            channelId: r,
                            analyticsLocations: _,
                            customId: i,
                            referrerId: l
                        });
                    } catch (e) {}
                })();
        }, [_, f, I, C]),
        i.useEffect(() => {
            let e = setTimeout(() => {
                null == I &&
                    r.Z.show({
                        title: m.intl.string(m.t.PtobXV),
                        body: m.intl.string(m.t['IOy+Iy'])
                    });
            }, 5000);
            return () => {
                clearTimeout(e);
            };
        }, [I]),
        null
    );
}
