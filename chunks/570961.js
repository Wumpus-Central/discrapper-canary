n.d(t, {
    $y: () => x,
    Kk: () => p,
    NB: () => I,
    en: () => j,
    fi: () => O,
    n_: () => T,
    rS: () => S,
    tS: () => E,
}),
    n(415506),
    n(388685);
var l = n(544891),
    i = n(570140),
    r = n(668781),
    a = n(881052),
    s = n(339085),
    o = n(592125),
    c = n(485386),
    d = n(823379),
    u = n(208665),
    m = n(981631),
    g = n(290511),
    h = n(388032);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
function I() {
    i.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET" });
}
function p(e, t, n) {
    E(
        e,
        u.Z.editedOnboardingPrompts.map((e) => (e.id === t ? f({}, e, n) : e)),
    );
}
function O(e, t) {
    E(
        e,
        u.Z.editedOnboardingPrompts.filter((e) => e.id !== t),
    );
}
function E(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (
        (i.Z.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT",
            prompts: t,
        }),
        n)
    ) {
        let n = t.map((n) => _(e, t, n));
        i.Z.dispatch({
            type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS",
            errors: n,
        });
    }
}
async function S(e, t) {
    if (!u.Z.hasChanges()) return;
    let n = u.Z.getChangedPrompts();
    null != t && t.ignoreDefaultPrompt && 1 === n.length && (0, g.RF)(n[0]) && (n = []);
    let l = u.Z.editedOnboardingPrompts.map((t) => {
            if (!n.some((e) => e.id === t.id)) return t;
            let l = t.options.map((t) => {
                let n = null == t.roleIds ? t.roleIds : t.roleIds.filter((t) => null != c.Z.getRole(e.id, t)),
                    l = null == t.channelIds ? t.channelIds : t.channelIds.filter((e) => null != o.Z.getChannel(e));
                return N(f({}, t), {
                    roleIds: n,
                    channelIds: l,
                    emoji: (function (e) {
                        var t;
                        if (
                            null != e &&
                            ((null == (t = e.emoji) ? void 0 : t.id) == null ||
                                null != s.ZP.getCustomEmojiById(e.emoji.id))
                        )
                            return e.emoji;
                    })(t),
                });
            });
            return N(f({}, t), {
                options: l,
                type: l.length >= g.fY ? g.FN.DROPDOWN : g.FN.MULTIPLE_CHOICE,
            });
        }),
        m = l.filter((e) => e.inOnboarding),
        I = l.filter((e) => !0 !== e.inOnboarding),
        p = l.map((t) => (n.some((e) => e.id === t.id) ? _(e, l, t) : null));
    if (p.filter(d.lm).length > 0)
        throw (
            (i.Z.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
                errors: p,
            }),
            Error("failed to locally validate prompts"))
        );
    if (m.length > g.b3)
        throw (
            (r.Z.show({
                title: h.intl.string(h.t.iLdiqY),
                body: h.intl.formatToPlainString(h.t["cTb/rg"], { numQuestions: g.b3 }),
            }),
            i.Z.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
                errors: p,
            }),
            Error("too many prompts in onboarding"))
        );
    let O = [...m, ...I];
    i.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT" });
    try {
        await T(e.id, { prompts: O.map(g.dr) }),
            i.Z.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
                guildId: e.id,
                updates: { prompts: O },
            });
    } catch (n) {
        var E;
        let { fieldName: e, error: t } = null != (E = new a.Hx(n).getAnyErrorMessageAndField()) ? E : {};
        throw (
            (r.Z.show({
                title: h.intl.string(h.t.iLdiqY),
                body: [e, t].filter(d.lm).join(": "),
            }),
            i.Z.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED" }),
            Error("failed to save prompts"))
        );
    }
}
async function x(e, t) {
    i.Z.dispatch({
        type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE",
        guildId: e,
        updates: { enabled: t },
    });
    try {
        await T(e, { enabled: t });
    } catch (l) {
        var n;
        let { fieldName: e, error: t } = null != (n = new a.Hx(l).getAnyErrorMessageAndField()) ? n : {};
        r.Z.show({
            title: h.intl.string(h.t.iLdiqY),
            body: [e, t].filter(d.lm).join(": "),
        });
    }
}
async function T(e, t) {
    await l.tn.put({
        url: m.ANM.GUILD_ONBOARDING(e),
        body: t,
        rejectWithError: !1,
    });
}
function _(e, t, n) {
    let l = { optionErrors: [] },
        i = !1;
    return (
        n.title.length <= 0 && ((l.title = h.intl.string(h.t.h8Hg1T)), (i = !0)),
        n.options.length <= 0 && ((l.options = h.intl.string(h.t["64tF+W"])), (i = !0)),
        n.inOnboarding &&
            t.filter((e) => e.inOnboarding).length > g.b3 &&
            ((l.config = h.intl.formatToPlainString(h.t["cTb/rg"], { numQuestions: g.b3 })), (i = !0)),
        (l.optionErrors = n.options.map((l) => j(e, t, n, l))),
        (i = i || l.optionErrors.some((e) => null != e)) ? l : null
    );
}
function j(e, t, n, l) {
    var i, r, a;
    if (n.singleSelect) {
        let e = new Set(null != (i = l.roleIds) ? i : []);
        for (let l of t)
            if (l.id !== n.id) {
                for (let t of l.options)
                    if (null != t.roleIds && t.roleIds.some((t) => e.has(t))) return h.intl.string(h.t.rKxyvd);
            }
    }
    let s = (null != (r = l.roleIds) ? r : []).filter((t) => null != c.Z.getRole(e.id, t)),
        d = (null != (a = l.channelIds) ? a : []).filter((e) => null != o.Z.getChannel(e));
    return 0 === s.length && 0 === d.length ? h.intl.string(h.t.F6SUWB) : null;
}
