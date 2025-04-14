n.d(t, {
    $y: () => O,
    Kk: () => E,
    NB: () => p,
    en: () => b,
    fi: () => S,
    n_: () => _,
    rS: () => x,
    tS: () => T
}),
    n(415506),
    n(388685);
var l = n(544891),
    r = n(570140),
    i = n(668781),
    s = n(881052),
    a = n(339085),
    o = n(107862),
    c = n(592125),
    d = n(430824),
    u = n(823379),
    m = n(208665),
    N = n(981631),
    I = n(290511),
    h = n(388032);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p() {
    r.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET' });
}
function E(e, t, n) {
    T(
        e,
        m.Z.editedOnboardingPrompts.map((e) => (e.id === t ? g({}, e, n) : e))
    );
}
function S(e, t) {
    T(
        e,
        m.Z.editedOnboardingPrompts.filter((e) => e.id !== t)
    );
}
function T(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (
        (r.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT',
            prompts: t
        }),
        n)
    ) {
        let n = t.map((n) => j(e, t, n));
        r.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS',
            errors: n
        });
    }
}
async function x(e, t) {
    let { dropdownsAllowed: n } = (0, o.RM)(e.id);
    if (!m.Z.hasChanges()) return;
    let l = m.Z.editedOnboardingPrompts;
    null != t && t.ignoreDefaultPrompt && 1 === l.length && (0, I.RF)(l[0]) && (l = []);
    let N = l.map((t) => {
            let l = t.options.map((t) => {
                let n = null == t.roleIds ? t.roleIds : t.roleIds.filter((t) => null != d.Z.getRole(e.id, t)),
                    l = null == t.channelIds ? t.channelIds : t.channelIds.filter((e) => null != c.Z.getChannel(e));
                return f(g({}, t), {
                    roleIds: n,
                    channelIds: l,
                    emoji: (function (e) {
                        var t;
                        if (null != e && ((null == (t = e.emoji) ? void 0 : t.id) == null || null != a.ZP.getCustomEmojiById(e.emoji.id))) return e.emoji;
                    })(t)
                });
            });
            return f(g({}, t), {
                options: l,
                type: l.length >= I.fY && n ? I.FN.DROPDOWN : I.FN.MULTIPLE_CHOICE
            });
        }),
        p = N.filter((e) => e.inOnboarding),
        E = N.filter((e) => !0 !== e.inOnboarding),
        S = N.map((t) => j(e, N, t));
    if (S.filter(u.lm).length > 0)
        throw (
            (r.Z.dispatch({
                type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED',
                errors: S
            }),
            Error('failed to locally validate prompts'))
        );
    if (p.length > I.b3)
        throw (
            (i.Z.show({
                title: h.NW.string(h.t.iLdiqa),
                body: h.NW.formatToPlainString(h.t['cTb/rq'], { numQuestions: I.b3 })
            }),
            r.Z.dispatch({
                type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED',
                errors: S
            }),
            Error('too many prompts in onboarding'))
        );
    let T = [...p, ...E];
    r.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT' });
    try {
        await _(e.id, { prompts: T.map(I.dr) }),
            r.Z.dispatch({
                type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS',
                guildId: e.id,
                updates: { prompts: T }
            });
    } catch (n) {
        var x;
        let { fieldName: e, error: t } = null != (x = new s.Hx(n).getAnyErrorMessageAndField()) ? x : {};
        throw (
            (i.Z.show({
                title: h.NW.string(h.t.iLdiqa),
                body: [e, t].filter(u.lm).join(': ')
            }),
            r.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED' }),
            Error('failed to save prompts'))
        );
    }
}
async function O(e, t) {
    r.Z.dispatch({
        type: 'GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE',
        guildId: e,
        updates: { enabled: t }
    });
    try {
        await _(e, { enabled: t });
    } catch (l) {
        var n;
        let { fieldName: e, error: t } = null != (n = new s.Hx(l).getAnyErrorMessageAndField()) ? n : {};
        i.Z.show({
            title: h.NW.string(h.t.iLdiqa),
            body: [e, t].filter(u.lm).join(': ')
        });
    }
}
async function _(e, t) {
    await l.tn.put({
        url: N.ANM.GUILD_ONBOARDING(e),
        body: t,
        rejectWithError: !1
    });
}
function j(e, t, n) {
    let l = { optionErrors: [] },
        r = !1;
    return n.title.length <= 0 && ((l.title = h.NW.string(h.t.h8Hg1d)), (r = !0)), n.options.length <= 0 && ((l.options = h.NW.string(h.t['64tF+f'])), (r = !0)), n.inOnboarding && t.filter((e) => e.inOnboarding).length > I.b3 && ((l.config = h.NW.formatToPlainString(h.t['cTb/rq'], { numQuestions: I.b3 })), (r = !0)), (l.optionErrors = n.options.map((l) => b(e, t, n, l))), (r = r || l.optionErrors.some((e) => null != e)) ? l : null;
}
function b(e, t, n, l) {
    var r, i, s;
    if (n.singleSelect) {
        let e = new Set(null != (r = l.roleIds) ? r : []);
        for (let l of t)
            if (l.id !== n.id) {
                for (let t of l.options) if (null != t.roleIds && t.roleIds.some((t) => e.has(t))) return h.NW.string(h.t.rKxyvb);
            }
    }
    let a = (null != (i = l.roleIds) ? i : []).filter((t) => null != d.Z.getRole(e.id, t)),
        o = (null != (s = l.channelIds) ? s : []).filter((e) => null != c.Z.getChannel(e));
    return 0 === a.length && 0 === o.length ? h.NW.string(h.t.F6SUWF) : null;
}
