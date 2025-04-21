let n;
t.d(i, { Z: () => x }), t(388685), t(781311);
var l,
    r = t(392711),
    a = t.n(r),
    s = t(442837),
    u = t(570140),
    o = t(944163),
    c = t(246364),
    d = t(314852),
    E = t(999382),
    f = t(118215),
    I = t(384632),
    _ = t(386885),
    m = t(981631),
    S = t(388032);
function h(e, i, t) {
    return (
        i in e
            ? Object.defineProperty(e, i, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[i] = t),
        e
    );
}
function g(e) {
    for (var i = 1; i < arguments.length; i++) {
        var t = null != arguments[i] ? arguments[i] : {},
            n = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            n.forEach(function (i) {
                h(e, i, t[i]);
            });
    }
    return e;
}
function p(e, i) {
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
let v = {
        verificationDirty: !1,
        guildDirty: !1,
        profileDirty: !1
    },
    A = v;
function T() {
    let e = E.Z.getGuild();
    if (null == e) return;
    let i = f.ZP.getDiscoveryChecklist(e.id);
    if (null != i) return (0, _.V)(e, i);
}
function N() {
    var e;
    let i = E.Z.getGuildId();
    return null == i ? null : null == (e = o.Z.get(i)) ? void 0 : e.formFields;
}
function C() {
    let e = N();
    if (null == e) return;
    let i = e.find((e) => (0, c.J)(e));
    return null == i
        ? [
              {
                  id: (0, r.uniqueId)(),
                  value: ''
              }
          ]
        : i.values.map((e) => ({
              id: (0, r.uniqueId)(),
              value: e
          }));
}
function P() {
    let e = N();
    if (null == e) return;
    let i = e.find((e) => (0, c.J)(e));
    if (0 === e.length || (1 === e.length && null != i)) {
        let e = {
            field_type: c.QJ.TEXT_INPUT,
            label: S.intl.string(S.t['83ZsRU']),
            required: !0
        };
        return null != i ? [i, e] : [e];
    }
    return [...e];
}
function y(e) {
    return e.hasFeature(m.oNc.DISCOVERABLE) ? I.A.DISCOVERABLE : e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? I.A.APPLY : I.A.INVITE;
}
function O(e, i) {
    let t = e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(m.oNc.CLAN);
    switch (i) {
        case I.A.INVITE:
            return {
                joinType: I.A.INVITE,
                requireTerms: t,
                termRules: C()
            };
        case I.A.APPLY:
            return {
                joinType: I.A.APPLY,
                pendingVerificationFields: P()
            };
        case I.A.DISCOVERABLE:
            return {
                joinType: I.A.DISCOVERABLE,
                settingsView: T(),
                requireTerms: t,
                termRules: C()
            };
    }
}
function D(e, i) {
    var t, n, l, r;
    let { requireTerms: s, termRules: u } = i;
    if (e.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== s) return !0;
    let o = null != (n = N()) ? n : [];
    if (o.length > 1) return !0;
    let d = null != (l = null == (t = o.find((e) => (0, c.J)(e))) ? void 0 : t.values) ? l : [],
        E = null != (r = null == u ? void 0 : u.map((e) => e.value.trim()).filter((e) => '' !== e)) ? r : [];
    return !a().isEqual(d, E);
}
function L() {
    let e = E.Z.getGuild();
    if (null == e || null == n) {
        A = v;
        return;
    }
    let i = y(e) !== n.joinType;
    switch (n.joinType) {
        case I.A.INVITE:
            A = {
                verificationDirty: D(e, n),
                guildDirty: i,
                profileDirty: !1
            };
            break;
        case I.A.APPLY:
            var t, l;
            let r,
                s = N(),
                { pendingVerificationFields: u } = n,
                o = !e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (r = null == s ? null != u : null != u && !a().isEqual(s, u)),
                (A = {
                    verificationDirty: o || r,
                    guildDirty: i,
                    profileDirty: (null == (t = d.Z.getProfile(e.id)) ? void 0 : t.visibility) !== (null == (l = E.Z.getGuildProfile()) ? void 0 : l.visibility)
                });
            break;
        case I.A.DISCOVERABLE:
            A = {
                verificationDirty: D(e, n),
                guildDirty: i || E.Z.hasChanges(),
                profileDirty: !1
            };
    }
}
function b() {
    if (null == E.Z.getGuildId() || null == n) return !1;
    (n = n.joinType === I.A.APPLY ? p(g({}, n), { pendingVerificationFields: P() }) : p(g({}, n), { termRules: C() })), L();
}
function R(e) {
    let { section: i, subsection: t } = e;
    if (i !== m.pNK.ACCESS) return j();
    let l = E.Z.getGuild();
    if (null == l) return !1;
    let r = t === m.KsC.ACCESS_DISCOVERABLE && l.hasFeature(m.oNc.COMMUNITY) ? I.A.DISCOVERABLE : y(l);
    (n = O(l, r)), L();
}
function j() {
    (n = void 0), (A = v);
}
function F() {
    if ((null == n ? void 0 : n.joinType) !== I.A.DISCOVERABLE) return !1;
    (n = p(g({}, n), { settingsView: T() })), L();
}
class V extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, o.Z, f.ZP),
            this.syncWith([E.Z, o.Z], () => {
                L();
            });
    }
    get pendingState() {
        return n;
    }
    get dirtyState() {
        return A;
    }
    showNotice() {
        return A.guildDirty || A.verificationDirty || A.profileDirty;
    }
}
h(V, 'displayName', 'GuildSettingsJoinRulesStore');
let x = new V(u.Z, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: i, requireTerms: t, termRules: l } = e;
        if (i !== E.Z.getGuildId() || ((null == n ? void 0 : n.joinType) !== I.A.INVITE && (null == n ? void 0 : n.joinType) !== I.A.DISCOVERABLE)) return !1;
        (n = p(g({}, n), {
            requireTerms: t,
            termRules: l
        })),
            L();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: i, formFields: t } = e;
        if (i !== E.Z.getGuildId() || (null == n ? void 0 : n.joinType) !== I.A.APPLY) return !1;
        (n = p(g({}, n), { pendingVerificationFields: t })), L();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: i, joinType: t } = e,
            l = E.Z.getGuild();
        if (i !== (null == l ? void 0 : l.id)) return !1;
        (n = O(l, t)), L();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: b,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: b,
    GUILD_SETTINGS_INIT: R,
    GUILD_SETTINGS_SET_SECTION: R,
    GUILD_SETTINGS_CLOSE: j,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: F,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: F,
    GUILD_SETTINGS_SUBMIT_SUCCESS: F
});
