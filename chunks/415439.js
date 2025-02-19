n.d(t, {
    FW: () => v,
    Kt: () => N,
    ZC: () => y
}),
    n(230036),
    n(47120);
var r = n(442837),
    i = n(493683),
    l = n(636449),
    o = n(122613),
    a = n(983695),
    s = n(100527),
    c = n(87005),
    u = n(895924),
    d = n(812236),
    p = n(740492),
    h = n(973616),
    g = n(592125),
    f = n(626135),
    m = n(823379),
    b = n(728345),
    _ = n(812206),
    E = n(835473),
    O = n(981631);
async function N(e, t, n) {
    t(e.id);
    let r = e.bot;
    if (null == r)
        try {
            var a, c, p;
            r = null !== (p = null === (a = _.Z.getApplication(e.id)) || void 0 === a ? void 0 : a.bot) && void 0 !== p ? p : null === (c = h.ZP.createFromServer(await (0, b.UM)(e.id))) || void 0 === c ? void 0 : c.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != r) {
        let a;
        let c = null == g.Z.getDMFromUserId(r.id);
        try {
            a = (0, l.R)() ? await i.Z.getOrEnsurePrivateChannel(r.id) : await i.Z.openPrivateChannel([r.id], !1, !1, s.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (f.default.track(O.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
                application_id: e.id,
                is_new_dm: c,
                channel_id: a
            }),
            null == a)
        ) {
            t(void 0);
            return;
        }
        try {
            await (0, d.ZP)(a, e.id);
        } catch (e) {
            if (e.message === d.sV) {
                t(void 0);
                return;
            }
        }
        await (0, o.Z)({
            targetApplicationId: e.id,
            channelId: a,
            analyticsLocations: n,
            commandOrigin: u.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function v() {
    let e = (0, r.e7)([p.ZP], () => p.ZP.showPlayAgain),
        t = y();
    return e && t.length > 0;
}
function y() {
    let e = (0, c.f)({
            context: { type: 'contextless' },
            onlyActivityApps: !0,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !1
        }).frecentApps,
        t = e.map((e) => e.id).sort(),
        n = new Map(
            (0, E.Z)(t)
                .filter(m.lm)
                .map((e) => [e.id, e])
        );
    return e
        .map((e) => n.get(e.id))
        .filter((e) => {
            var t;
            return (0, a.Z)(null == e ? void 0 : null === (t = e.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms);
        });
}
