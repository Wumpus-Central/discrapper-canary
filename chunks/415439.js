n.d(t, {
    BV: () => C,
    FW: () => O,
    Kt: () => j,
    ZC: () => S
});
var i = n(442837),
    r = n(493683),
    s = n(153867),
    l = n(636449),
    a = n(774226),
    o = n(122613),
    c = n(100527),
    d = n(87005),
    u = n(895924),
    m = n(812236),
    g = n(740492),
    p = n(973616),
    h = n(592125),
    f = n(626135),
    b = n(823379),
    _ = n(728345),
    x = n(812206),
    E = n(981631);
async function j(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var s;
            if (((i = null == (s = x.Z.getApplication(e.id)) ? void 0 : s.bot), null == i)) {
                let t = await (0, _.UM)(e.id);
                (e = t), (i = p.ZP.createFromServer(t).bot);
            }
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let s,
            d = null == h.Z.getDMFromUserId(i.id);
        try {
            s =
                (0, l.R)() || (0, a.Kb)(e)
                    ? await r.Z.getOrEnsurePrivateChannel(i.id)
                    : await r.Z.openPrivateChannel({
                          recipientIds: [i.id],
                          location: c.Z.APP_DMS_QUICK_LAUNCHER
                      });
        } catch (e) {
            t(void 0);
        }
        if (
            (f.default.track(E.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
                application_id: e.id,
                is_new_dm: d,
                channel_id: s
            }),
            null == s)
        )
            return void t(void 0);
        try {
            await (0, m.ZP)(s, e.id);
        } catch (e) {
            if (e.message === m.sV) return void t(void 0);
        }
        await (0, o.Z)({
            targetApplicationId: e.id,
            channelId: s,
            analyticsLocations: n,
            commandOrigin: u.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function C(e, t) {
    s.ZP.updatedUnsyncedSettings({ showPlayAgain: e }), e || f.default.track(E.rMx.APP_DMS_QUICK_LAUNCHER_HIDDEN, { source: t });
}
function O() {
    let e = (0, i.e7)([g.ZP], () => g.ZP.showPlayAgain),
        { frecentApps: t } = S();
    return e && t.length > 0;
}
function S() {
    let { frecentApps: e, loading: t } = (0, d.f)({
        context: { type: 'contextless' },
        onlyActivityApps: !0,
        allowCommandFetch: !0,
        includeAuthorizedAppsAndFetch: !1
    });
    return {
        frecentApps: e.map((e) => e.application).filter(b.lm),
        loading: t
    };
}
