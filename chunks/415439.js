n.d(t, {
    BV: () => j,
    FW: () => C,
    Kt: () => E,
    ZC: () => O
});
var i = n(442837),
    r = n(493683),
    s = n(153867),
    l = n(636449),
    a = n(122613),
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
    _ = n(812206),
    x = n(981631);
async function E(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var s;
            if (((i = null == (s = _.Z.getApplication(e.id)) ? void 0 : s.bot), null == i)) {
                let t = await (0, b.UM)(e.id);
                (e = t), (i = g.ZP.createFromServer(t).bot);
            }
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let s,
            c = null == p.Z.getDMFromUserId(i.id);
        try {
            s = (0, l.R)()
                ? await r.Z.getOrEnsurePrivateChannel(i.id)
                : await r.Z.openPrivateChannel({
                      recipientIds: [i.id],
                      location: o.Z.APP_DMS_QUICK_LAUNCHER
                  });
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
        )
            return void t(void 0);
        try {
            await (0, u.ZP)(s, e.id);
        } catch (e) {
            if (e.message === u.sV) return void t(void 0);
        }
        await (0, a.Z)({
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
function j(e, t) {
    s.ZP.updatedUnsyncedSettings({ showPlayAgain: e }), e || h.default.track(x.rMx.APP_DMS_QUICK_LAUNCHER_HIDDEN, { source: t });
}
function C() {
    let e = (0, i.e7)([m.ZP], () => m.ZP.showPlayAgain),
        { frecentApps: t } = O();
    return e && t.length > 0;
}
function O() {
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
