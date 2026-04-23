n.d(t, {
    ME: () => g,
    NF: () => E,
    P3: () => I,
    WC: () => A,
    YN: () => x,
    dm: () => _,
    fO: () => D,
    gr: () => f,
    xR: () => S,
});
var i = n(636537),
    l = n(228366),
    s = n(157559),
    r = n(845584),
    a = n(159273),
    d = n(734057),
    o = n(317525),
    c = n(403362),
    u = n(655943),
    m = n(652215),
    N = n(539916),
    h = n(985018);
function I() {
    l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET" });
}
function E(e, t, n) {
    A(
        e,
        u.A.editedOnboardingPrompts.map((e) => (e.id === t ? { ...e, ...n } : e)),
    );
}
function g(e, t) {
    A(
        e,
        u.A.editedOnboardingPrompts.filter((e) => e.id !== t),
    );
}
function A(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if ((l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT", prompts: t }), n)) {
        let n = t.map((n) => T(e, t, n));
        l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS", errors: n });
    }
}
function S(e, t) {
    let n;
    if (!u.A.hasChanges()) return null;
    let i =
            ((n = u.A.getChangedPrompts()),
            null != t && t.ignoreDefaultPrompt && 1 === n.length && (0, N.Km)(n[0]) && (n = []),
            n),
        r = u.A.editedOnboardingPrompts,
        m = r.map((t) => {
            if (!i.some((e) => e.id === t.id)) return t;
            let n = t.options.map((t) => {
                let n = null == t.roleIds ? t.roleIds : t.roleIds.filter((t) => null != o.A.getRole(e.id, t)),
                    i = null == t.channelIds ? t.channelIds : t.channelIds.filter((e) => null != d.A.getChannel(e));
                return {
                    ...t,
                    roleIds: n,
                    channelIds: i,
                    emoji: (function (e) {
                        if (null != e && (e.emoji?.id == null || null != a.Ay.getCustomEmojiById(e.emoji.id)))
                            return e.emoji;
                    })(t),
                };
            });
            return { ...t, options: n, type: n.length >= N.Bu ? N.ME.DROPDOWN : N.ME.MULTIPLE_CHOICE };
        });
    if (0 === m.length) return null;
    let I = m.filter((e) => e.inOnboarding),
        E = m.filter((e) => !0 !== e.inOnboarding),
        g = m.map((t) => (i.some((e) => e.id === t.id) ? T(e, m, t) : null));
    if (g.filter(c.Vq).length > 0)
        throw (
            (l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED", errors: g }),
            Error("failed to locally validate prompts"))
        );
    if (I.length > N.D1)
        throw (
            (s.A.show({
                title: h.intl.string(h.t.iLdiqY),
                body: h.intl.formatToPlainString(h.t["cTb/rg"], { numQuestions: N.D1 }),
            }),
            l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED", errors: g }),
            Error("too many prompts in onboarding"))
        );
    return [...I, ...E];
}
async function _(e, t) {
    if (!u.A.hasChanges()) return;
    let n = S(e, t);
    null == n && (n = []), l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT" });
    try {
        await x(e.id, { prompts: n.map(N.SA) }),
            l.h.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
                guildId: e.id,
                updates: { prompts: n },
            });
    } catch (n) {
        let { fieldName: e, error: t } = new r.LG(n).getAnyErrorMessageAndField() ?? {};
        throw (
            (s.A.show({ title: h.intl.string(h.t.iLdiqY), body: [e, t].filter(c.Vq).join(": ") }),
            l.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED" }),
            Error("failed to save prompts"))
        );
    }
}
async function f(e, t) {
    l.h.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE", guildId: e, updates: { enabled: t } });
    try {
        await x(e, { enabled: t });
    } catch (n) {
        let { fieldName: e, error: t } = new r.LG(n).getAnyErrorMessageAndField() ?? {};
        s.A.show({ title: h.intl.string(h.t.iLdiqY), body: [e, t].filter(c.Vq).join(": ") });
    }
}
async function x(e, t) {
    await i.Bo.put({ url: m.Rsh.GUILD_ONBOARDING(e), body: t, rejectWithError: !1 });
}
function T(e, t, n) {
    let i = { optionErrors: [] },
        l = !1;
    return (
        n.title.length <= 0 && ((i.title = h.intl.string(h.t.h8Hg1T)), (l = !0)),
        n.options.length <= 0 && ((i.options = h.intl.string(h.t["64tF+W"])), (l = !0)),
        n.inOnboarding &&
            t.filter((e) => e.inOnboarding).length > N.D1 &&
            ((i.config = h.intl.formatToPlainString(h.t["cTb/rg"], { numQuestions: N.D1 })), (l = !0)),
        (i.optionErrors = n.options.map((i) => D(e, t, n, i))),
        (l = l || i.optionErrors.some((e) => null != e)) ? i : null
    );
}
function D(e, t, n, i) {
    if (n.singleSelect) {
        let e = new Set(i.roleIds ?? []);
        for (let i of t)
            if (i.id !== n.id) {
                for (let t of i.options)
                    if (null != t.roleIds && t.roleIds.some((t) => e.has(t))) return h.intl.string(h.t.rKxyvd);
            }
    }
    let l = (i.roleIds ?? []).filter((t) => null != o.A.getRole(e.id, t)),
        s = (i.channelIds ?? []).filter((e) => null != d.A.getChannel(e));
    return 0 === l.length && 0 === s.length ? h.intl.string(h.t.F6SUWB) : null;
}
