n.d(t, {
    BV: () => j,
    FW: () => C,
    Kt: () => E,
    ZC: () => O
});
var r = n(442837),
    i = n(493683),
    s = n(153867),
    a = n(636449),
    l = n(774226),
    o = n(122613),
    c = n(100527),
    d = n(87005),
    u = n(895924),
    m = n(812236),
    p = n(740492),
    g = n(973616),
    h = n(592125),
    f = n(626135),
    b = n(823379),
    N = n(728345),
    x = n(812206),
    _ = n(981631);
async function E(e, t, n) {
    t(e.id);
    let r = e.bot;
    if (null == r)
        try {
            var s;
            if (((r = null === (s = x.Z.getApplication(e.id)) || void 0 === s ? void 0 : s.bot), null == r)) {
                let t = await (0, N.UM)(e.id);
                (e = t), (r = g.ZP.createFromServer(t).bot);
            }
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != r) {
        let s;
        let d = null == h.Z.getDMFromUserId(r.id);
        try {
            s = (0, a.R)({ isContextless: (0, l.Kb)(e) }) ? await i.Z.getOrEnsurePrivateChannel(r.id) : await i.Z.openPrivateChannel([r.id], !1, !1, c.Z.APP_DMS_QUICK_LAUNCHER);
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
            await (0, m.ZP)(s, e.id);
        } catch (e) {
            if (e.message === m.sV) {
                t(void 0);
                return;
            }
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
function j(e, t) {
    s.ZP.updatedUnsyncedSettings({ showPlayAgain: e }), e || f.default.track(_.rMx.APP_DMS_QUICK_LAUNCHER_HIDDEN, { source: t });
}
function C() {
    let e = (0, r.e7)([p.ZP], () => p.ZP.showPlayAgain),
        { frecentApps: t } = O();
    return e && t.length > 0;
}
function O() {
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
