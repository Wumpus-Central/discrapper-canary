n.d(e, {
    ME: () => _,
    NF: () => m,
    P3: () => S,
    WC: () => g,
    YN: () => D,
    dm: () => T,
    fO: () => f,
    gr: () => A,
    xR: () => h,
});
var i = n(636537),
    l = n(228366),
    s = n(157559),
    r = n(913122),
    a = n(159273),
    d = n(734057),
    o = n(317525),
    c = n(403362),
    u = n(655943),
    E = n(652215),
    I = n(539916),
    N = n(375708);
function S() {
    l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET" });
}
function m(t, e, n) {
    g(
        t,
        u.A.editedOnboardingPrompts.map((t) => (t.id === e ? { ...t, ...n } : t)),
    );
}
function _(t, e) {
    g(
        t,
        u.A.editedOnboardingPrompts.filter((t) => t.id !== e),
    );
}
function g(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if ((l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT", prompts: e }), n)) {
        let n = e.map((n) => O(t, e, n));
        l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS", errors: n });
    }
}
function h(t, e) {
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
            return { ...e, options: n, type: n.length >= I.Bu ? I.ME.DROPDOWN : I.ME.MULTIPLE_CHOICE };
        });
    if (0 === E.length) return null;
    let S = E.filter((t) => t.inOnboarding),
        m = E.filter((t) => !0 !== t.inOnboarding),
        _ = E.map((e) => (i.some((t) => t.id === e.id) ? O(t, E, e) : null));
    if (_.filter(c.Vq).length > 0)
        throw (
            (l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED", errors: _ }),
            Error("failed to locally validate prompts"))
        );
    if (S.length > I.D1)
        throw (
            (s.A.show({
                title: N.intl.string(N.t.iLdiqY),
                body: N.intl.formatToPlainString(N.t["cTb/rg"], { numQuestions: I.D1 }),
            }),
            l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED", errors: _ }),
            Error("too many prompts in onboarding"))
        );
    return [...S, ...m];
}
async function T(t, e) {
    if (!u.A.hasChanges()) return;
    let n = h(t, e);
    null == n && (n = []), l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT" });
    try {
        await D(t.id, { prompts: n.map(I.SA) }),
            l.h.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
                guildId: t.id,
                updates: { prompts: n },
            });
    } catch (n) {
        let { fieldName: t, error: e } = new r.LG(n).getAnyErrorMessageAndField() ?? {};
        throw (
            (s.A.show({ title: N.intl.string(N.t.iLdiqY), body: [t, e].filter(c.Vq).join(": ") }),
            l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED" }),
            Error("failed to save prompts"))
        );
    }
}
async function A(t, e) {
    l.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE", guildId: t, updates: { enabled: e } });
    try {
        await D(t, { enabled: e });
    } catch (n) {
        let { fieldName: t, error: e } = new r.LG(n).getAnyErrorMessageAndField() ?? {};
        s.A.show({ title: N.intl.string(N.t.iLdiqY), body: [t, e].filter(c.Vq).join(": ") });
    }
}
async function D(t, e) {
    await i.Bo.put({ url: E.Rsh.GUILD_ONBOARDING(t), body: e, rejectWithError: !1 });
}
function O(t, e, n) {
    let i = { optionErrors: [] },
        l = !1;
    return (
        n.title.length <= 0 && ((i.title = N.intl.string(N.t.h8Hg1T)), (l = !0)),
        n.options.length <= 0 && ((i.options = N.intl.string(N.t["64tF+W"])), (l = !0)),
        n.inOnboarding &&
            e.filter((t) => t.inOnboarding).length > I.D1 &&
            ((i.config = N.intl.formatToPlainString(N.t["cTb/rg"], { numQuestions: I.D1 })), (l = !0)),
        (i.optionErrors = n.options.map((i) => f(t, e, n, i))),
        (l = l || i.optionErrors.some((t) => null != t)) ? i : null
    );
}
function f(t, e, n, i) {
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
