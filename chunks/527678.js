n.d(t, {
    Ay: () => _,
    CP: () => j,
    X$: () => v,
    _k: () => T,
    e_: () => x,
    kP: () => b,
}),
    n(896048);
var l = n(73153),
    r = n(157559),
    i = n(181658),
    s = n(709977),
    a = n(591552),
    o = n(713125),
    c = n(961973),
    d = n(967305),
    u = n(529942),
    m = n(209700),
    g = n(734057),
    f = n(71393),
    h = n(403362),
    N = n(997509),
    I = n(863694),
    p = n(107795),
    O = n(400812),
    S = n(746080),
    E = n(539916),
    A = n(985018);
function x(e) {
    l.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_STEP",
        step: e,
    });
}
function _(e) {
    null != e &&
        l.h.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED",
            upsellType: e,
        });
}
async function j(e, t) {
    let n = a.A.getEnabled(e),
        s = Array.from(I.A.editedDefaultChannelIds).filter((e) => null != g.A.getChannel(e)),
        [o] = (0, c.ui)(e, [...s]);
    if (n && t === E.SD.ONBOARDING_DEFAULT && o.length < E.Kd)
        return void r.A.show({
            title: A.intl.string(A.t.iLdiqY),
            body: A.intl.string(A.t.JOT74c),
        });
    try {
        await (0, p.YN)(e, { mode: t });
    } catch (n) {
        var d;
        let { fieldName: e, error: t } = null != (d = new i.A(n).getAnyErrorMessageAndField()) ? d : {};
        r.A.show({
            title: A.intl.string(A.t.iLdiqY),
            body: [e, t].filter(h.Vq).join(": "),
        });
    }
    l.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_SET_MODE",
        guildId: e,
        mode: t,
    });
}
function T(e, t) {
    let n = O.kd.findIndex((e) => e === t);
    -1 !== n && n !== O.kd.length - 1 && x(O.kd[n + 1]);
}
function b(e, t) {
    let n = O.kd.findIndex((e) => e === t);
    -1 !== n && 0 !== n && x(O.kd[n - 1]);
}
async function v(e) {
    let t = f.A.getGuild(e);
    null != t &&
        (N.A.close(),
        (0, u.Tk)(t.id, {
            type: m._.NEW_MEMBER,
            roles: {},
            optInChannels: new Set(),
            optInEnabled: !1,
            onboardingResponses: new Set(),
            onboardingEnabled: !0,
            memberOptions: {
                isPending: (0, s.Qd)(t),
                flags: 0,
            },
        }),
        o.Ay.resetOnboardingStatus(t.id),
        (0, d.Jg)(t.id),
        await (0, d.default)({
            guildId: t.id,
            isPreview: !0,
            returnChannelId: S.VV.GUILD_HOME,
        }));
}
