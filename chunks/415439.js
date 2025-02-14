n.d(t, {
    FW: () => N,
    Kt: () => C,
    ZC: () => v
}),
    n(47120);
var i = n(442837),
    l = n(493683),
    r = n(122613),
    a = n(983695),
    s = n(100527),
    o = n(87005),
    d = n(895924),
    c = n(812236),
    u = n(740492),
    h = n(973616),
    m = n(592125),
    p = n(626135),
    g = n(823379),
    _ = n(728345),
    f = n(812206),
    E = n(835473),
    I = n(981631);
async function C(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var a, o, u;
            i = null !== (u = null === (a = f.Z.getApplication(e.id)) || void 0 === a ? void 0 : a.bot) && void 0 !== u ? u : null === (o = h.ZP.createFromServer(await (0, _.UM)(e.id))) || void 0 === o ? void 0 : o.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let a;
        let o = null == m.Z.getDMFromUserId(i.id);
        try {
            a = await l.Z.openPrivateChannel([i.id], !1, !1, s.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (p.default.track(I.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
                application_id: e.id,
                is_new_dm: o,
                channel_id: a
            }),
            null == a)
        ) {
            t(void 0);
            return;
        }
        try {
            await (0, c.ZP)(a, e.id);
        } catch (e) {
            if (e.message === c.sV) {
                t(void 0);
                return;
            }
        }
        await (0, r.Z)({
            targetApplicationId: e.id,
            channelId: a,
            analyticsLocations: n,
            commandOrigin: d.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function N() {
    let e = (0, i.e7)([u.ZP], () => u.ZP.showPlayAgain),
        t = v();
    return e && t.length > 0;
}
function v() {
    let e = (0, o.f)({
            context: { type: 'contextless' },
            onlyActivityApps: !0,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !1
        }).frecentApps,
        t = e.map((e) => e.id).sort(),
        n = new Map(
            (0, E.Z)(t)
                .filter(g.lm)
                .map((e) => [e.id, e])
        );
    return e
        .map((e) => n.get(e.id))
        .filter((e) => {
            var t;
            return (0, a.Z)(null == e ? void 0 : null === (t = e.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms);
        });
}
