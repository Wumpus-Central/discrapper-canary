n.d(t, {
    $y: () => x,
    Kk: () => S,
    NB: () => f,
    en: () => j,
    fi: () => E,
    n_: () => O,
    rS: () => T,
    tS: () => p
}),
    n(415506),
    n(388685);
var l = n(544891),
    i = n(570140),
    r = n(668781),
    s = n(881052),
    a = n(339085),
    o = n(592125),
    c = n(430824),
    d = n(823379),
    u = n(208665),
    m = n(981631),
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
function N(e, t) {
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
function f() {
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET' });
}
function S(e, t, n) {
    p(
        e,
        u.Z.editedOnboardingPrompts.map((e) => (e.id === t ? g({}, e, n) : e))
    );
}
function E(e, t) {
    p(
        e,
        u.Z.editedOnboardingPrompts.filter((e) => e.id !== t)
    );
}
function p(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (
        (i.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT',
            prompts: t
        }),
        n)
    ) {
        let n = t.map((n) => _(e, t, n));
        i.Z.dispatch({
            type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS',
            errors: n
        });
    }
}
async function T(e, t) {
    if (!u.Z.hasChanges()) return;
    let n = u.Z.editedOnboardingPrompts;
    null != t && t.ignoreDefaultPrompt && 1 === n.length && (0, I.RF)(n[0]) && (n = []);
    let l = n.map((t) => {
            let n = t.options.map((t) => {
                let n = null == t.roleIds ? t.roleIds : t.roleIds.filter((t) => null != c.Z.getRole(e.id, t)),
                    l = null == t.channelIds ? t.channelIds : t.channelIds.filter((e) => null != o.Z.getChannel(e));
                return N(g({}, t), {
                    roleIds: n,
                    channelIds: l,
                    emoji: (function (e) {
                        var t;
                        if (null != e && ((null == (t = e.emoji) ? void 0 : t.id) == null || null != a.ZP.getCustomEmojiById(e.emoji.id))) return e.emoji;
                    })(t)
                });
            });
            return N(g({}, t), {
                options: n,
                type: n.length >= I.fY ? I.FN.DROPDOWN : I.FN.MULTIPLE_CHOICE
            });
        }),
        m = l.filter((e) => e.inOnboarding),
        f = l.filter((e) => !0 !== e.inOnboarding),
        S = l.map((t) => _(e, l, t));
    if (S.filter(d.lm).length > 0)
        throw (
            (i.Z.dispatch({
                type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED',
                errors: S
            }),
            Error('failed to locally validate prompts'))
        );
    if (m.length > I.b3)
        throw (
            (r.Z.show({
                title: h.intl.string(h.t.iLdiqa),
                body: h.intl.formatToPlainString(h.t['cTb/rq'], { numQuestions: I.b3 })
            }),
            i.Z.dispatch({
                type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED',
                errors: S
            }),
            Error('too many prompts in onboarding'))
        );
    let E = [...m, ...f];
    i.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT' });
    try {
        await O(e.id, { prompts: E.map(I.dr) }),
            i.Z.dispatch({
                type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS',
                guildId: e.id,
                updates: { prompts: E }
            });
    } catch (n) {
        var p;
        let { fieldName: e, error: t } = null != (p = new s.Hx(n).getAnyErrorMessageAndField()) ? p : {};
        throw (
            (r.Z.show({
                title: h.intl.string(h.t.iLdiqa),
                body: [e, t].filter(d.lm).join(': ')
            }),
            i.Z.dispatch({ type: 'GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED' }),
            Error('failed to save prompts'))
        );
    }
}
async function x(e, t) {
    i.Z.dispatch({
        type: 'GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE',
        guildId: e,
        updates: { enabled: t }
    });
    try {
        await O(e, { enabled: t });
    } catch (l) {
        var n;
        let { fieldName: e, error: t } = null != (n = new s.Hx(l).getAnyErrorMessageAndField()) ? n : {};
        r.Z.show({
            title: h.intl.string(h.t.iLdiqa),
            body: [e, t].filter(d.lm).join(': ')
        });
    }
}
async function O(e, t) {
    await l.tn.put({
        url: m.ANM.GUILD_ONBOARDING(e),
        body: t,
        rejectWithError: !1
    });
}
function _(e, t, n) {
    let l = { optionErrors: [] },
        i = !1;
    return n.title.length <= 0 && ((l.title = h.intl.string(h.t.h8Hg1d)), (i = !0)), n.options.length <= 0 && ((l.options = h.intl.string(h.t['64tF+f'])), (i = !0)), n.inOnboarding && t.filter((e) => e.inOnboarding).length > I.b3 && ((l.config = h.intl.formatToPlainString(h.t['cTb/rq'], { numQuestions: I.b3 })), (i = !0)), (l.optionErrors = n.options.map((l) => j(e, t, n, l))), (i = i || l.optionErrors.some((e) => null != e)) ? l : null;
}
function j(e, t, n, l) {
    var i, r, s;
    if (n.singleSelect) {
        let e = new Set(null != (i = l.roleIds) ? i : []);
        for (let l of t)
            if (l.id !== n.id) {
                for (let t of l.options) if (null != t.roleIds && t.roleIds.some((t) => e.has(t))) return h.intl.string(h.t.rKxyvb);
            }
    }
    let a = (null != (r = l.roleIds) ? r : []).filter((t) => null != c.Z.getRole(e.id, t)),
        d = (null != (s = l.channelIds) ? s : []).filter((e) => null != o.Z.getChannel(e));
    return 0 === a.length && 0 === d.length ? h.intl.string(h.t.F6SUWF) : null;
}
