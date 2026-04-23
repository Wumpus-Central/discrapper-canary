let l;
t.d(i, { A: () => P });
var n = t(735438),
    r = t.n(n),
    s = t(17928),
    a = t(228366),
    u = t(60175),
    d = t(513461),
    E = t(837011),
    o = t(555337),
    c = t(834720),
    I = t(894222),
    _ = t(716610),
    f = t(652215),
    A = t(985018);
let S = { verificationDirty: !1, guildDirty: !1, profileDirty: !1, isAgeRestrictedDirty: !1 },
    T = S;
function h() {
    let e = o.A.getGuild();
    if (null == e) return;
    let i = c.Ay.getDiscoveryChecklist(e.id);
    if (null != i) return (0, _.l)(e, i);
}
function g() {
    let e = o.A.getGuildId();
    return null == e ? null : u.A.get(e)?.formFields;
}
function m() {
    let e = g();
    if (null == e) return;
    let i = e.find((e) => (0, d.i7)(e));
    return null == i
        ? [{ id: (0, n.uniqueId)(), value: "" }]
        : i.values.map((e) => ({ id: (0, n.uniqueId)(), value: e }));
}
function C() {
    let e = g();
    if (null == e) return;
    let i = e.find((e) => (0, d.i7)(e));
    if (0 === e.length || (1 === e.length && null != i)) {
        let e = { field_type: d.rX.TEXT_INPUT, label: A.intl.string(A.t["83ZsRS"]), required: !0 };
        return null != i ? [i, e] : [e];
    }
    return [...e];
}
function R(e) {
    return e.features.has(f.GuildFeatures.DISCOVERABLE)
        ? I.J.DISCOVERABLE
        : e.features.has(f.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            e.features.has(f.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)
          ? I.J.APPLY
          : I.J.INVITE;
}
function N(e, i) {
    let t = e.features.has(f.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED),
        l = e.ownerConfiguredContentLevel === f.ftr.AGE_RESTRICTED;
    switch (i) {
        case I.J.INVITE:
            return { joinType: I.J.INVITE, requireTerms: t, termRules: m(), isAgeRestricted: l };
        case I.J.APPLY:
            return { joinType: I.J.APPLY, pendingVerificationFields: C(), isAgeRestricted: l };
        case I.J.DISCOVERABLE:
            return {
                joinType: I.J.DISCOVERABLE,
                settingsView: h(),
                requireTerms: t,
                termRules: m(),
                isAgeRestricted: !1,
            };
    }
}
function D(e, i) {
    let { requireTerms: t, termRules: l } = i;
    if (
        e.features.has(f.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ||
        e.features.has(f.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) !== t
    )
        return !0;
    let n = g() ?? [];
    if (n.length > 1) return !0;
    let s = n.find((e) => (0, d.i7)(e))?.values ?? [],
        a = l?.map((e) => e.value.trim()).filter((e) => "" !== e) ?? [];
    return !r().isEqual(s, a);
}
function L() {
    let e = o.A.getGuild();
    if (null == e || null == l) {
        T = S;
        return;
    }
    let i = R(e) !== l.joinType,
        t = (e.ownerConfiguredContentLevel === f.ftr.AGE_RESTRICTED) !== l.isAgeRestricted;
    switch (l.joinType) {
        case I.J.INVITE:
            T = { verificationDirty: D(e, l), guildDirty: i, profileDirty: !1, isAgeRestrictedDirty: t };
            break;
        case I.J.APPLY:
            let n,
                s = g(),
                { pendingVerificationFields: a } = l,
                u =
                    !e.features.has(f.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) ||
                    !e.features.has(f.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (n = null == s ? null != a : null != a && !r().isEqual(s, a)),
                (T = {
                    verificationDirty: u || n,
                    guildDirty: i,
                    profileDirty: E.A.getProfile(e.id)?.visibility !== o.A.getGuildProfile()?.visibility,
                    isAgeRestrictedDirty: t,
                });
            break;
        case I.J.DISCOVERABLE:
            T = {
                verificationDirty: D(e, l),
                guildDirty: i || o.A.hasChanges(),
                profileDirty: !1,
                isAgeRestrictedDirty: t,
            };
    }
}
function p() {
    if (null == o.A.getGuildId() || null == l) return !1;
    (l = l.joinType === I.J.APPLY ? { ...l, pendingVerificationFields: C() } : { ...l, termRules: m() }), L();
}
function y(e) {
    let { section: i, subsection: t } = e;
    if (i !== f.BEX.ACCESS) return v();
    let n = o.A.getGuild();
    if (null == n) return !1;
    let r = t === f.nd0.ACCESS_DISCOVERABLE && n.features.has(f.GuildFeatures.COMMUNITY) ? I.J.DISCOVERABLE : R(n);
    (l = N(n, r)), L();
}
function v() {
    (l = void 0), (T = S);
}
function G() {
    if (l?.joinType !== I.J.DISCOVERABLE) return !1;
    (l = { ...l, settingsView: h() }), L();
}
class F extends s.Ay.Store {
    static displayName = "GuildSettingsJoinRulesStore";
    initialize() {
        this.waitFor(c.Ay, E.A, o.A, u.A),
            this.syncWith([o.A, u.A], () => {
                L();
            });
    }
    get pendingState() {
        return l;
    }
    get dirtyState() {
        return T;
    }
    showNotice() {
        return T.guildDirty || T.verificationDirty || T.profileDirty || T.isAgeRestrictedDirty;
    }
}
let P = new F(a.h, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: i, requireTerms: t, termRules: n } = e;
        if (i !== o.A.getGuildId() || (l?.joinType !== I.J.INVITE && l?.joinType !== I.J.DISCOVERABLE)) return !1;
        (l = { ...l, requireTerms: t, termRules: n }), L();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: i, formFields: t } = e;
        if (i !== o.A.getGuildId() || l?.joinType !== I.J.APPLY) return !1;
        (l = { ...l, pendingVerificationFields: t }), L();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: i, joinType: t } = e,
            n = o.A.getGuild();
        if (i !== n?.id) return !1;
        (l = N(n, t)), L();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_CONTENT_LEVEL: function (e) {
        let { guildId: i, isAgeRestricted: t } = e,
            n = o.A.getGuild();
        if (i !== n?.id) return !1;
        (l = { ...(l ?? N(n, R(n))), isAgeRestricted: t }), L();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: p,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: p,
    GUILD_SETTINGS_INIT: y,
    GUILD_SETTINGS_SET_SECTION: y,
    GUILD_SETTINGS_CLOSE: v,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: G,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: G,
    GUILD_SETTINGS_SUBMIT_SUCCESS: G,
});
