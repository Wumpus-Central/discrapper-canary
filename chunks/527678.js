n.d(e, { Ay: () => f, CP: () => G, X$: () => L, _k: () => p, e_: () => O, kP: () => x });
var i = n(228366),
    l = n(157559),
    s = n(181658),
    r = n(709977),
    a = n(591552),
    d = n(713125),
    o = n(961973),
    c = n(608401),
    u = n(529942),
    E = n(209700),
    I = n(734057),
    N = n(71393),
    S = n(403362),
    m = n(468689),
    _ = n(863694),
    g = n(107795),
    h = n(400812),
    T = n(746080),
    A = n(539916),
    D = n(375708);
function O(t) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_STEP", step: t });
}
function f(t) {
    null != t && i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED", upsellType: t });
}
async function G(t, e) {
    let n = a.A.getEnabled(t),
        r = Array.from(_.A.editedDefaultChannelIds).filter((t) => null != I.A.getChannel(t)),
        [d] = (0, o.ui)(t, [...r]);
    if (n && e === A.SD.ONBOARDING_DEFAULT && d.length < A.Kd)
        return void l.A.show({ title: D.intl.string(D.t.iLdiqY), body: D.intl.string(D.t.JOT74c) });
    try {
        await (0, g.YN)(t, { mode: e });
    } catch (n) {
        let { fieldName: t, error: e } = new s.A(n).getAnyErrorMessageAndField() ?? {};
        l.A.show({ title: D.intl.string(D.t.iLdiqY), body: [t, e].filter(S.Vq).join(": ") });
    }
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_SET_MODE", guildId: t, mode: e });
}
function p(t, e) {
    let n = h.kd.findIndex((t) => t === e);
    -1 !== n && n !== h.kd.length - 1 && O(h.kd[n + 1]);
}
function x(t, e) {
    let n = h.kd.findIndex((t) => t === e);
    -1 !== n && 0 !== n && O(h.kd[n - 1]);
}
async function L(t) {
    let e = N.A.getGuild(t);
    null != e &&
        (m.A.close(),
        (0, u.Tk)(e.id, {
            type: E._.NEW_MEMBER,
            roles: {},
            optInChannels: new Set(),
            optInEnabled: !1,
            onboardingResponses: new Set(),
            onboardingEnabled: !0,
            memberOptions: { isPending: (0, r.Qd)(e), flags: 0 },
        }),
        d.Ay.resetOnboardingStatus(e.id),
        (0, c.Jg)(e.id),
        await (0, c.default)({ guildId: e.id, isPreview: !0, returnChannelId: T.VV.GUILD_HOME }));
}
