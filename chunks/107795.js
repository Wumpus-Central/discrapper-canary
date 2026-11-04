var i = n(620632),
    l = n(73153),
    s = n(157559),
    r = n(627784),
    a = n(121681),
    d = n(734057),
    o = n(317525),
    c = n(403362),
    u = n(655943),
    E = n(652215),
    I = n(539916),
    N = n(792996);
function S(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if ((l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT", prompts: e }), n)) {
        let n = e.map((n) => h(t, e, n));
        l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS", errors: n });
    }
}
function m(t, e) {
    let n;
    if (!u.A.hasChanges()) return null;
    let i =
            ((n = u.A.getChangedPrompts()),
            null != e && e.ignoreDefaultPrompt && 1 === n.length && (0, I.Km)(n[0]) && (n = []),
            n),
        r = u.A.editedOnboardingPrompts,
        E = r.map((e) => {
            if (!i.some((t) => t.id === e.id)) return e;
            let n = e.options.map((e) => {
                let n = null == e.roleIds ? e.roleIds : e.roleIds.filter((e) => null != o.A.getRole(t.id, e)),
                    i = null == e.channelIds ? e.channelIds : e.channelIds.filter((t) => null != d.A.getChannel(t));
                return {
                    ...e,
                    roleIds: n,
                    channelIds: i,
                    emoji: (function (t) {
                        if (null != t && (t.emoji?.id == null || null != a.Ay.getCustomEmojiById(t.emoji.id)))
                            return t.emoji;
                    })(e),
                };
            });
            return { ...e, options: n, type: n.length >= 13 ? I.ME.DROPDOWN : I.ME.MULTIPLE_CHOICE };
        });
    if (0 === E.length) return null;
    let S = E.filter((t) => t.inOnboarding),
        m = E.filter((t) => !0 !== t.inOnboarding),
        g = E.map((e) => (i.some((t) => t.id === e.id) ? h(t, E, e) : null));
    if (g.filter(c.Vq).length > 0)
        throw (
            l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED", errors: g }),
            Error("failed to locally validate prompts")
        );
    if (S.length > 4)
        throw (
            s.A.show({
                title: N.intl.string(N.t.iLdiqY),
                body: N.intl.formatToPlainString(N.t["cTb/rg"], { numQuestions: 4 }),
            }),
            l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED", errors: g }),
            Error("too many prompts in onboarding")
        );
    return [...S, ...m];
}
async function g(t, e) {
    await i.Bo.put({ url: E.Rsh.GUILD_ONBOARDING(t), body: e, rejectWithError: (0, i.fT)() });
}
function h(t, e, n) {
    let i = { optionErrors: [] },
        l = !1;
    return (
        n.title.length <= 0 && ((i.title = N.intl.string(N.t.h8Hg1T)), (l = !0)),
        n.options.length <= 0 && ((i.options = N.intl.string(N.t["64tF+W"])), (l = !0)),
        n.inOnboarding &&
            e.filter((t) => t.inOnboarding).length > 4 &&
            ((i.config = N.intl.formatToPlainString(N.t["cTb/rg"], { numQuestions: 4 })), (l = !0)),
        (i.optionErrors = n.options.map((i) => _(t, e, n, i))),
        (l = l || i.optionErrors.some((t) => null != t)) ? i : null
    );
}
function _(t, e, n, i) {
    if (n.singleSelect) {
        let t = new Set(i.roleIds ?? []);
        for (let i of e)
            if (i.id !== n.id) {
                for (let e of i.options)
                    if (null != e.roleIds && e.roleIds.some((e) => t.has(e))) return N.intl.string(N.t.rKxyvd);
            }
    }
    let l = (i.roleIds ?? []).filter((e) => null != o.A.getRole(t.id, e)),
        s = (i.channelIds ?? []).filter((t) => null != d.A.getChannel(t));
    return 0 === l.length && 0 === s.length ? N.intl.string(N.t.F6SUWB) : null;
}
n.d(
    e,
    {},
    {
        ME: function (t, e) {
            S(
                t,
                u.A.editedOnboardingPrompts.filter((t) => t.id !== e),
            );
        },
        NF: function (t, e, n) {
            S(
                t,
                u.A.editedOnboardingPrompts.map((t) => (t.id === e ? { ...t, ...n } : t)),
            );
        },
        P3: function () {
            l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET" });
        },
        WC: S,
        YN: g,
        dm: async function (t, e) {
            if (!u.A.hasChanges()) return;
            let n = m(t, e);
            (null == n && (n = []), l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT" }));
            try {
                (await g(t.id, { prompts: n.map(I.SA) }),
                    l.h.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
                        guildId: t.id,
                        updates: { prompts: n },
                    }));
            } catch (n) {
                let { fieldName: t, error: e } = new r.LG(n).getAnyErrorMessageAndField() ?? {};
                throw (
                    s.A.show({ title: N.intl.string(N.t.iLdiqY), body: [t, e].filter(c.Vq).join(": ") }),
                    l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED" }),
                    Error("failed to save prompts")
                );
            }
        },
        fO: _,
        gr: async function (t, e) {
            l.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE", guildId: t, updates: { enabled: e } });
            try {
                await g(t, { enabled: e });
            } catch (n) {
                let { fieldName: t, error: e } = new r.LG(n).getAnyErrorMessageAndField() ?? {};
                s.A.show({ title: N.intl.string(N.t.iLdiqY), body: [t, e].filter(c.Vq).join(": ") });
            }
        },
        xR: m,
    },
);
