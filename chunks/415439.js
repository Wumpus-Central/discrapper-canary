n.d(t, {
    FW: () => O,
    Kt: () => E,
    ZC: () => N
});
var r = n(442837),
    i = n(493683),
    l = n(636449),
    o = n(122613),
    a = n(100527),
    s = n(87005),
    c = n(895924),
    u = n(812236),
    d = n(740492),
    p = n(973616),
    h = n(592125),
    f = n(626135),
    g = n(823379),
    m = n(728345),
    b = n(812206),
    _ = n(981631);
async function E(e, t, n) {
    t(e.id);
    let r = e.bot;
    if (null == r)
        try {
            var s, d, g;
            r = null !== (g = null === (s = b.Z.getApplication(e.id)) || void 0 === s ? void 0 : s.bot) && void 0 !== g ? g : null === (d = p.ZP.createFromServer(await (0, m.UM)(e.id))) || void 0 === d ? void 0 : d.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != r) {
        let s;
        let d = null == h.Z.getDMFromUserId(r.id);
        try {
            s = (0, l.R)() ? await i.Z.getOrEnsurePrivateChannel(r.id) : await i.Z.openPrivateChannel([r.id], !1, !1, a.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (f.default.track(_.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
                application_id: e.id,
                is_new_dm: d,
                channel_id: s
            }),
            null == s)
        ) {
            t(void 0);
            return;
        }
        try {
            await (0, u.ZP)(s, e.id);
        } catch (e) {
            if (e.message === u.sV) {
                t(void 0);
                return;
            }
        }
        await (0, o.Z)({
            targetApplicationId: e.id,
            channelId: s,
            analyticsLocations: n,
            commandOrigin: c.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function O() {
    let e = (0, r.e7)([d.ZP], () => d.ZP.showPlayAgain),
        { frecentApps: t } = N();
    return e && t.length > 0;
}
function N() {
    let { frecentApps: e, loading: t } = (0, s.f)({
        context: { type: 'contextless' },
        onlyActivityApps: !0,
        allowCommandFetch: !0,
        includeAuthorizedAppsAndFetch: !1
    });
    return {
        frecentApps: e.map((e) => e.application).filter(g.lm),
        loading: t
    };
}
