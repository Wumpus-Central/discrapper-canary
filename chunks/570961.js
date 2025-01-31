t.d(n, {
    $y: () => _,
    Kk: () => x,
    NB: () => g,
    en: () => v,
    fi: () => E,
    n_: () => f,
    rS: () => S,
    tS: () => T
}),
    t(411104),
    t(47120);
var l = t(544891),
    i = t(570140),
    s = t(668781),
    r = t(881052),
    a = t(339085),
    o = t(107862),
    d = t(592125),
    c = t(430824),
    u = t(823379),
    m = t(208665),
    I = t(981631),
    h = t(290511),
    N = t(388032);
function g() {
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET' });
}
function x(e, n, t) {
    T(
        e,
        m.Z.editedOnboardingPrompts.map((e) =>
            e.id === n
                ? {
                      ...e,
                      ...t
                  }
                : e
        )
    );
}
function E(e, n) {
    T(
        e,
        m.Z.editedOnboardingPrompts.filter((e) => e.id !== n)
    );
}
function T(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (
        (i.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT',
            prompts: n
        }),
        t)
    ) {
        let t = n.map((t) => p(e, n, t));
        i.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS',
            errors: t
        });
    }
}
async function S(e, n) {
    let { dropdownsAllowed: t } = (0, o.RM)(e.id);
    if (!m.Z.hasChanges()) return;
    let l = m.Z.editedOnboardingPrompts;
    null != n && n.ignoreDefaultPrompt && 1 === l.length && (0, h.RF)(l[0]) && (l = []);
    let I = l.map((n) => {
            let l = n.options.map((n) => {
                let t = null == n.roleIds ? n.roleIds : n.roleIds.filter((n) => null != c.Z.getRole(e.id, n)),
                    l = null == n.channelIds ? n.channelIds : n.channelIds.filter((e) => null != d.Z.getChannel(e));
                return {
                    ...n,
                    roleIds: t,
                    channelIds: l,
                    emoji: (function (e) {
                        var n;
                        if (null != e) {
                            if ((null === (n = e.emoji) || void 0 === n ? void 0 : n.id) == null || null != a.ZP.getCustomEmojiById(e.emoji.id)) return e.emoji;
                        }
                    })(n)
                };
            });
            return {
                ...n,
                options: l,
                type: l.length >= h.fY && t ? h.FN.DROPDOWN : h.FN.MULTIPLE_CHOICE
            };
        }),
        g = I.filter((e) => e.inOnboarding),
        x = I.filter((e) => !0 !== e.inOnboarding),
        E = I.map((n) => p(e, I, n));
    if (E.filter(u.lm).length > 0)
        throw (
            (i.Z.dispatch({
                type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED',
                errors: E
            }),
            Error('failed to locally validate prompts'))
        );
    if (g.length > h.b3)
        throw (
            (s.Z.show({
                title: N.intl.string(N.t.iLdiqa),
                body: N.intl.formatToPlainString(N.t['cTb/rq'], { numQuestions: h.b3 })
            }),
            i.Z.dispatch({
                type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED',
                errors: E
            }),
            Error('too many prompts in onboarding'))
        );
    let T = [...g, ...x];
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT' });
    try {
        await f(e.id, { prompts: T.map(h.dr) }),
            i.Z.dispatch({
                type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS',
                guildId: e.id,
                updates: { prompts: T }
            });
    } catch (t) {
        var S;
        let { fieldName: e, error: n } = null !== (S = new r.Hx(t).getAnyErrorMessageAndField()) && void 0 !== S ? S : {};
        throw (
            (s.Z.show({
                title: N.intl.string(N.t.iLdiqa),
                body: [e, n].filter(u.lm).join(': ')
            }),
            i.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED' }),
            Error('failed to save prompts'))
        );
    }
}
async function _(e, n) {
    i.Z.dispatch({
        type: 'GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE',
        guildId: e,
        updates: { enabled: n }
    });
    try {
        await f(e, { enabled: n });
    } catch (l) {
        var t;
        let { fieldName: e, error: n } = null !== (t = new r.Hx(l).getAnyErrorMessageAndField()) && void 0 !== t ? t : {};
        s.Z.show({
            title: N.intl.string(N.t.iLdiqa),
            body: [e, n].filter(u.lm).join(': ')
        });
    }
}
async function f(e, n) {
    await l.tn.put({
        url: I.ANM.GUILD_ONBOARDING(e),
        body: n,
        rejectWithError: !1
    });
}
function p(e, n, t) {
    let l = { optionErrors: [] },
        i = !1;
    return t.title.length <= 0 && ((l.title = N.intl.string(N.t.h8Hg1d)), (i = !0)), t.options.length <= 0 && ((l.options = N.intl.string(N.t['64tF+f'])), (i = !0)), t.inOnboarding && n.filter((e) => e.inOnboarding).length > h.b3 && ((l.config = N.intl.formatToPlainString(N.t['cTb/rq'], { numQuestions: h.b3 })), (i = !0)), (l.optionErrors = t.options.map((l) => v(e, n, t, l))), (i = i || l.optionErrors.some((e) => null != e)) ? l : null;
}
function v(e, n, t, l) {
    var i, s, r;
    if (t.singleSelect) {
        let e = new Set(null !== (i = l.roleIds) && void 0 !== i ? i : []);
        for (let l of n)
            if (l.id !== t.id) {
                for (let n of l.options) if (null != n.roleIds && n.roleIds.some((n) => e.has(n))) return N.intl.string(N.t.rKxyvb);
            }
    }
    let a = (null !== (s = l.roleIds) && void 0 !== s ? s : []).filter((n) => null != c.Z.getRole(e.id, n)),
        o = (null !== (r = l.channelIds) && void 0 !== r ? r : []).filter((e) => null != d.Z.getChannel(e));
    return 0 === a.length && 0 === o.length ? N.intl.string(N.t.F6SUWF) : null;
}
