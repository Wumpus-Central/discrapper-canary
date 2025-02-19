n.d(t, {
    FW: () => N,
    Kt: () => O,
    ZC: () => v
}),
    n(230036),
    n(47120);
var r = n(442837),
    i = n(493683),
    l = n(122613),
    o = n(983695),
    a = n(100527),
    s = n(87005),
    c = n(895924),
    u = n(812236),
    d = n(740492),
    p = n(973616),
    h = n(592125),
    g = n(626135),
    f = n(823379),
    m = n(728345),
    b = n(812206),
    _ = n(835473),
    E = n(981631);
async function O(e, t, n) {
    t(e.id);
    let r = e.bot;
    if (null == r)
        try {
            var o, s, d;
            r = null !== (d = null === (o = b.Z.getApplication(e.id)) || void 0 === o ? void 0 : o.bot) && void 0 !== d ? d : null === (s = p.ZP.createFromServer(await (0, m.UM)(e.id))) || void 0 === s ? void 0 : s.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != r) {
        let o;
        let s = null == h.Z.getDMFromUserId(r.id);
        try {
            o = await i.Z.openPrivateChannel([r.id], !1, !1, a.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (g.default.track(E.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
                application_id: e.id,
                is_new_dm: s,
                channel_id: o
            }),
            null == o)
        ) {
            t(void 0);
            return;
        }
        try {
            await (0, u.ZP)(o, e.id);
        } catch (e) {
            if (e.message === u.sV) {
                t(void 0);
                return;
            }
        }
        await (0, l.Z)({
            targetApplicationId: e.id,
            channelId: o,
            analyticsLocations: n,
            commandOrigin: c.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function N() {
    let e = (0, r.e7)([d.ZP], () => d.ZP.showPlayAgain),
        t = v();
    return e && t.length > 0;
}
function v() {
    let e = (0, s.f)({
            context: { type: 'contextless' },
            onlyActivityApps: !0,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !1
        }).frecentApps,
        t = e.map((e) => e.id).sort(),
        n = new Map(
            (0, _.Z)(t)
                .filter(f.lm)
                .map((e) => [e.id, e])
        );
    return e
        .map((e) => n.get(e.id))
        .filter((e) => {
            var t;
            return (0, o.Z)(null == e ? void 0 : null === (t = e.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms);
        });
}
