var i = n(73153),
    l = n(157559),
    s = n(181658),
    r = n(709977),
    a = n(591552),
    d = n(713125),
    o = n(961973),
    c = n(197463),
    u = n(529942),
    E = n(209700),
    I = n(734057),
    N = n(71393),
    S = n(403362),
    m = n(727419),
    g = n(863694),
    h = n(107795),
    _ = n(400812),
    T = n(746080),
    A = n(539916),
    f = n(792996);
function D(t) {
    i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_STEP", step: t });
}
n.d(
    e,
    {},
    {
        Ay: function (t) {
            null != t && i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED", upsellType: t });
        },
        CP: async function (t, e) {
            let n = a.A.getEnabled(t),
                r = Array.from(g.A.editedDefaultChannelIds).filter((t) => null != I.A.getChannel(t)),
                [d] = (0, o.ui)(t, [...r]);
            if (n && e === A.SD.ONBOARDING_DEFAULT && d.length < 0)
                return void l.A.show({ title: f.intl.string(f.t.iLdiqY), body: f.intl.string(f.t.JOT74c) });
            try {
                await (0, h.YN)(t, { mode: e });
            } catch (n) {
                let { fieldName: t, error: e } = new s.A(n).getAnyErrorMessageAndField() ?? {};
                l.A.show({ title: f.intl.string(f.t.iLdiqY), body: [t, e].filter(S.Vq).join(": ") });
            }
            i.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_SET_MODE", guildId: t, mode: e });
        },
        X$: async function (t) {
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
        },
        _k: function (t, e) {
            let n = _.kd.findIndex((t) => t === e);
            -1 !== n && n !== _.kd.length - 1 && D(_.kd[n + 1]);
        },
        e_: D,
        kP: function (t, e) {
            let n = _.kd.findIndex((t) => t === e);
            -1 !== n && 0 !== n && D(_.kd[n - 1]);
        },
    },
);
