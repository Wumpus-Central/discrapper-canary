n.d(t, { Ay: () => D, CP: () => j, X$: () => G, _k: () => p, e_: () => T, kP: () => O });
var i = n(228366),
    l = n(157559),
    s = n(181658),
    r = n(709977),
    a = n(591552),
    d = n(713125),
    o = n(961973),
    c = n(608401),
    u = n(529942),
    m = n(209700),
    N = n(734057),
    h = n(71393),
    I = n(403362),
    E = n(997509),
    g = n(863694),
    A = n(107795),
    S = n(400812),
    _ = n(746080),
    f = n(539916),
    x = n(985018);
function T(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_STEP", step: e });
}
function D(e) {
    null != e && i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED", upsellType: e });
}
async function j(e, t) {
    let n = a.A.getEnabled(e),
        r = Array.from(g.A.editedDefaultChannelIds).filter((e) => null != N.A.getChannel(e)),
        [d] = (0, o.ui)(e, [...r]);
    if (n && t === f.SD.ONBOARDING_DEFAULT && d.length < f.Kd)
        return void l.A.show({ title: x.intl.string(x.t.iLdiqY), body: x.intl.string(x.t.JOT74c) });
    try {
        await (0, A.YN)(e, { mode: t });
    } catch (n) {
        let { fieldName: e, error: t } = new s.A(n).getAnyErrorMessageAndField() ?? {};
        l.A.show({ title: x.intl.string(x.t.iLdiqY), body: [e, t].filter(I.Vq).join(": ") });
    }
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_SET_MODE", guildId: e, mode: t });
}
function p(e, t) {
    let n = S.kd.findIndex((e) => e === t);
    -1 !== n && n !== S.kd.length - 1 && T(S.kd[n + 1]);
}
function O(e, t) {
    let n = S.kd.findIndex((e) => e === t);
    -1 !== n && 0 !== n && T(S.kd[n - 1]);
}
async function G(e) {
    let t = h.A.getGuild(e);
    null != t &&
        (E.A.close(),
        (0, u.Tk)(t.id, {
            type: m._.NEW_MEMBER,
            roles: {},
            optInChannels: new Set(),
            optInEnabled: !1,
            onboardingResponses: new Set(),
            onboardingEnabled: !0,
            memberOptions: { isPending: (0, r.Qd)(t), flags: 0 },
        }),
        d.Ay.resetOnboardingStatus(t.id),
        (0, c.Jg)(t.id),
        await (0, c.default)({ guildId: t.id, isPreview: !0, returnChannelId: _.VV.GUILD_HOME }));
}
