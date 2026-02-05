n.d(t, { Ay: () => p, CP: () => D, X$: () => j, _k: () => O, e_: () => f, kP: () => G });
var i = n(73153),
    l = n(157559),
    s = n(181658),
    r = n(709977),
    a = n(591552),
    d = n(713125),
    o = n(961973),
    c = n(967305),
    u = n(529942),
    m = n(209700),
    N = n(734057),
    h = n(71393),
    I = n(403362),
    g = n(997509),
    A = n(863694),
    E = n(107795),
    S = n(400812),
    x = n(746080),
    _ = n(539916),
    T = n(985018);
function f(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_STEP", step: e });
}
function p(e) {
    null != e && i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED", upsellType: e });
}
async function D(e, t) {
    let n = a.A.getEnabled(e),
        r = Array.from(A.A.editedDefaultChannelIds).filter((e) => null != N.A.getChannel(e)),
        [d] = (0, o.ui)(e, [...r]);
    if (n && t === _.SD.ONBOARDING_DEFAULT && d.length < _.Kd)
        return void l.A.show({ title: T.intl.string(T.t.iLdiqY), body: T.intl.string(T.t.JOT74c) });
    try {
        await (0, E.YN)(e, { mode: t });
    } catch (n) {
        let { fieldName: e, error: t } = new s.A(n).getAnyErrorMessageAndField() ?? {};
        l.A.show({ title: T.intl.string(T.t.iLdiqY), body: [e, t].filter(I.Vq).join(": ") });
    }
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_SET_MODE", guildId: e, mode: t });
}
function O(e, t) {
    let n = S.kd.findIndex((e) => e === t);
    -1 !== n && n !== S.kd.length - 1 && f(S.kd[n + 1]);
}
function G(e, t) {
    let n = S.kd.findIndex((e) => e === t);
    -1 !== n && 0 !== n && f(S.kd[n - 1]);
}
async function j(e) {
    let t = h.A.getGuild(e);
    null != t &&
        (g.A.close(),
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
        await (0, c.default)({ guildId: t.id, isPreview: !0, returnChannelId: x.VV.GUILD_HOME }));
}
