let n;
t.d(i, { Z: () => F }), t(388685), t(781311);
var l,
    r = t(392711),
    s = t.n(r),
    u = t(442837),
    a = t(570140),
    o = t(944163),
    d = t(246364),
    c = t(314852),
    E = t(999382),
    f = t(733895),
    I = t(384632),
    _ = t(386885),
    S = t(981631),
    m = t(388032);
function g(e, i, t) {
    return (
        i in e
            ? Object.defineProperty(e, i, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[i] = t),
        e
    );
}
function h(e) {
    for (var i = 1; i < arguments.length; i++) {
        var t = null != arguments[i] ? arguments[i] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            n.forEach(function (i) {
                g(e, i, t[i]);
            });
    }
    return e;
}
function v(e, i) {
    return (
        (i = null != i ? i : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : (function (e, i) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(i)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              }),
        e
    );
}
let T = {
        verificationDirty: !1,
        guildDirty: !1,
        profileDirty: !1,
        isAgeRestrictedDirty: !1,
    },
    p = T;
function A() {
    let e = E.Z.getGuild();
    if (null == e) return;
    let i = f.ZP.getDiscoveryChecklist(e.id);
    if (null != i) return (0, _.V)(e, i);
}
function C() {
    var e;
    let i = E.Z.getGuildId();
    return null == i ? null : null == (e = o.Z.get(i)) ? void 0 : e.formFields;
}
function D() {
    let e = C();
    if (null == e) return;
    let i = e.find((e) => (0, d.J)(e));
    return null == i
        ? [
              {
                  id: (0, r.uniqueId)(),
                  value: "",
              },
          ]
        : i.values.map((e) => ({
              id: (0, r.uniqueId)(),
              value: e,
          }));
}
function y() {
    let e = C();
    if (null == e) return;
    let i = e.find((e) => (0, d.J)(e));
    if (0 === e.length || (1 === e.length && null != i)) {
        let e = {
            field_type: d.QJ.TEXT_INPUT,
            label: m.intl.string(m.t["83ZsRS"]),
            required: !0,
        };
        return null != i ? [i, e] : [e];
    }
    return [...e];
}
function O(e) {
    return e.features.has(S.GuildFeatures.DISCOVERABLE)
        ? I.A.DISCOVERABLE
        : e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)
          ? I.A.APPLY
          : I.A.INVITE;
}
function P(e, i) {
    let t = e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED),
        n = e.ownerConfiguredContentLevel === S.V_K.AGE_RESTRICTED;
    switch (i) {
        case I.A.INVITE:
            return {
                joinType: I.A.INVITE,
                requireTerms: t,
                termRules: D(),
                isAgeRestricted: n,
            };
        case I.A.APPLY:
            return {
                joinType: I.A.APPLY,
                pendingVerificationFields: y(),
                isAgeRestricted: n,
            };
        case I.A.DISCOVERABLE:
            return {
                joinType: I.A.DISCOVERABLE,
                settingsView: A(),
                requireTerms: t,
                termRules: D(),
                isAgeRestricted: n,
            };
    }
}
function R(e, i) {
    var t, n, l, r;
    let { requireTerms: u, termRules: a } = i;
    if (
        e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ||
        e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) !== u
    )
        return !0;
    let o = null != (n = C()) ? n : [];
    if (o.length > 1) return !0;
    let c = null != (l = null == (t = o.find((e) => (0, d.J)(e))) ? void 0 : t.values) ? l : [],
        E = null != (r = null == a ? void 0 : a.map((e) => e.value.trim()).filter((e) => "" !== e)) ? r : [];
    return !s().isEqual(c, E);
}
function L() {
    let e = E.Z.getGuild();
    if (null == e || null == n) {
        p = T;
        return;
    }
    let i = O(e) !== n.joinType,
        t = (e.ownerConfiguredContentLevel === S.V_K.AGE_RESTRICTED) !== n.isAgeRestricted;
    switch (n.joinType) {
        case I.A.INVITE:
            p = {
                verificationDirty: R(e, n),
                guildDirty: i,
                profileDirty: !1,
                isAgeRestrictedDirty: t,
            };
            break;
        case I.A.APPLY:
            var l, r;
            let u,
                a = C(),
                { pendingVerificationFields: o } = n,
                d =
                    !e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) ||
                    !e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (u = null == a ? null != o : null != o && !s().isEqual(a, o)),
                (p = {
                    verificationDirty: d || u,
                    guildDirty: i,
                    profileDirty:
                        (null == (l = c.Z.getProfile(e.id)) ? void 0 : l.visibility) !==
                        (null == (r = E.Z.getGuildProfile()) ? void 0 : r.visibility),
                    isAgeRestrictedDirty: t,
                });
            break;
        case I.A.DISCOVERABLE:
            p = {
                verificationDirty: R(e, n),
                guildDirty: i || E.Z.hasChanges(),
                profileDirty: !1,
                isAgeRestrictedDirty: t,
            };
    }
}
function N() {
    if (null == E.Z.getGuildId() || null == n) return !1;
    (n = n.joinType === I.A.APPLY ? v(h({}, n), { pendingVerificationFields: y() }) : v(h({}, n), { termRules: D() })),
        L();
}
function b(e) {
    let { section: i, subsection: t } = e;
    if (i !== S.pNK.ACCESS) return G();
    let l = E.Z.getGuild();
    if (null == l) return !1;
    let r = t === S.KsC.ACCESS_DISCOVERABLE && l.features.has(S.GuildFeatures.COMMUNITY) ? I.A.DISCOVERABLE : O(l);
    (n = P(l, r)), L();
}
function G() {
    (n = void 0), (p = T);
}
function j() {
    if ((null == n ? void 0 : n.joinType) !== I.A.DISCOVERABLE) return !1;
    (n = v(h({}, n), { settingsView: A() })), L();
}
class V extends (l = u.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, c.Z, E.Z, o.Z),
            this.syncWith([E.Z, o.Z], () => {
                L();
            });
    }
    get pendingState() {
        return n;
    }
    get dirtyState() {
        return p;
    }
    showNotice() {
        return p.guildDirty || p.verificationDirty || p.profileDirty || p.isAgeRestrictedDirty;
    }
}
g(V, "displayName", "GuildSettingsJoinRulesStore");
let F = new V(a.Z, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: i, requireTerms: t, termRules: l } = e;
        if (
            i !== E.Z.getGuildId() ||
            ((null == n ? void 0 : n.joinType) !== I.A.INVITE && (null == n ? void 0 : n.joinType) !== I.A.DISCOVERABLE)
        )
            return !1;
        (n = v(h({}, n), {
            requireTerms: t,
            termRules: l,
        })),
            L();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: i, formFields: t } = e;
        if (i !== E.Z.getGuildId() || (null == n ? void 0 : n.joinType) !== I.A.APPLY) return !1;
        (n = v(h({}, n), { pendingVerificationFields: t })), L();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: i, joinType: t } = e,
            l = E.Z.getGuild();
        if (i !== (null == l ? void 0 : l.id)) return !1;
        (n = P(l, t)), L();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_CONTENT_LEVEL: function (e) {
        let { guildId: i, isAgeRestricted: t } = e,
            l = E.Z.getGuild();
        if (i !== (null == l ? void 0 : l.id)) return !1;
        (n = v(h({}, null != n ? n : P(l, O(l))), { isAgeRestricted: t })), L();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: N,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: N,
    GUILD_SETTINGS_INIT: b,
    GUILD_SETTINGS_SET_SECTION: b,
    GUILD_SETTINGS_CLOSE: G,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: j,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: j,
    GUILD_SETTINGS_SUBMIT_SUCCESS: j,
});
