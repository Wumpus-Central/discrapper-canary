n.d(t, {
    BV: () => E,
    FW: () => j,
    Kt: () => _,
    ZC: () => C
});
var r = n(442837),
    i = n(493683),
    s = n(153867),
    a = n(636449),
    l = n(122613),
    o = n(100527),
    c = n(87005),
    d = n(895924),
    u = n(812236),
    m = n(740492),
    g = n(973616),
    p = n(592125),
    h = n(626135),
    f = n(823379),
    b = n(728345),
    N = n(812206),
    x = n(981631);
async function _(e, t, n) {
    t(e.id);
    let r = e.bot;
    if (null == r)
        try {
            var s, c, m;
            r = null !== (m = null === (s = N.Z.getApplication(e.id)) || void 0 === s ? void 0 : s.bot) && void 0 !== m ? m : null === (c = g.ZP.createFromServer(await (0, b.UM)(e.id))) || void 0 === c ? void 0 : c.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != r) {
        let s;
        let c = null == p.Z.getDMFromUserId(r.id);
        try {
            s = (0, a.R)() ? await i.Z.getOrEnsurePrivateChannel(r.id) : await i.Z.openPrivateChannel([r.id], !1, !1, o.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (h.default.track(x.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
                application_id: e.id,
                is_new_dm: c,
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
        await (0, l.Z)({
            targetApplicationId: e.id,
            channelId: s,
            analyticsLocations: n,
            commandOrigin: d.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function E(e, t) {
    s.ZP.updatedUnsyncedSettings({ showPlayAgain: e }), e || h.default.track(x.rMx.APP_DMS_QUICK_LAUNCHER_HIDDEN, { source: t });
}
function j() {
    let e = (0, r.e7)([m.ZP], () => m.ZP.showPlayAgain),
        { frecentApps: t } = C();
    return e && t.length > 0;
}
function C() {
    let { frecentApps: e, loading: t } = (0, c.f)({
        context: { type: 'contextless' },
        onlyActivityApps: !0,
        allowCommandFetch: !0,
        includeAuthorizedAppsAndFetch: !1
    });
    return {
        frecentApps: e.map((e) => e.application).filter(f.lm),
        loading: t
    };
}
