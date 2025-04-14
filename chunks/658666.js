let i;
n.d(t, { Z: () => V }), n(388685), n(781311);
var r,
    l = n(392711),
    o = n.n(l),
    s = n(442837),
    a = n(570140),
    u = n(944163),
    c = n(246364),
    d = n(314852),
    E = n(999382),
    f = n(118215),
    m = n(384632),
    I = n(386885),
    _ = n(981631),
    h = n(388032);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = {
        verificationDirty: !1,
        guildDirty: !1,
        profileDirty: !1
    },
    N = T;
function v() {
    let e = E.Z.getGuild();
    if (null == e) return;
    let t = f.ZP.getDiscoveryChecklist(e.id);
    if (null != t) return (0, I.V)(e, t);
}
function S() {
    var e;
    let t = E.Z.getGuildId();
    return null == t ? null : null == (e = u.Z.get(t)) ? void 0 : e.formFields;
}
function A() {
    let e = S();
    if (null == e) return;
    let t = e.find((e) => (0, c.J)(e));
    return null == t
        ? [
              {
                  id: (0, l.uniqueId)(),
                  value: ''
              }
          ]
        : t.values.map((e) => ({
              id: (0, l.uniqueId)(),
              value: e
          }));
}
function y() {
    let e = S();
    if (null == e) return;
    let t = e.find((e) => (0, c.J)(e));
    if (0 === e.length || (1 === e.length && null != t)) {
        let e = {
            field_type: c.QJ.TEXT_INPUT,
            label: h.NW.string(h.t['83ZsRU']),
            required: !0
        };
        return null != t ? [t, e] : [e];
    }
    return [...e];
}
function b(e) {
    return e.hasFeature(_.oNc.DISCOVERABLE) ? m.A.DISCOVERABLE : e.hasFeature(_.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.hasFeature(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? m.A.APPLY : m.A.INVITE;
}
function O(e, t) {
    let n = e.hasFeature(_.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(_.oNc.CLAN);
    switch (t) {
        case m.A.INVITE:
            return {
                joinType: m.A.INVITE,
                requireTerms: n,
                termRules: A()
            };
        case m.A.APPLY:
            return {
                joinType: m.A.APPLY,
                pendingVerificationFields: y()
            };
        case m.A.DISCOVERABLE:
            return {
                joinType: m.A.DISCOVERABLE,
                settingsView: v(),
                requireTerms: n,
                termRules: A()
            };
    }
}
function D(e, t) {
    var n, i, r, l;
    let { requireTerms: s, termRules: a } = t;
    if (e.hasFeature(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.hasFeature(_.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== s) return !0;
    let u = null != (i = S()) ? i : [];
    if (u.length > 1) return !0;
    let d = null != (r = null == (n = u.find((e) => (0, c.J)(e))) ? void 0 : n.values) ? r : [],
        E = null != (l = null == a ? void 0 : a.map((e) => e.value.trim()).filter((e) => '' !== e)) ? l : [];
    return !o().isEqual(d, E);
}
function R() {
    let e = E.Z.getGuild();
    if (null == e || null == i) {
        N = T;
        return;
    }
    let t = b(e) !== i.joinType;
    switch (i.joinType) {
        case m.A.INVITE:
            N = {
                verificationDirty: D(e, i),
                guildDirty: t,
                profileDirty: !1
            };
            break;
        case m.A.APPLY:
            var n, r;
            let l,
                s = S(),
                { pendingVerificationFields: a } = i,
                u = !e.hasFeature(_.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.hasFeature(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (l = null == s ? null != a : null != a && !o().isEqual(s, a)),
                (N = {
                    verificationDirty: u || l,
                    guildDirty: t,
                    profileDirty: (null == (n = d.Z.getProfile(e.id)) ? void 0 : n.visibility) !== (null == (r = E.Z.getGuildProfile()) ? void 0 : r.visibility)
                });
            break;
        case m.A.DISCOVERABLE:
            N = {
                verificationDirty: D(e, i),
                guildDirty: t || E.Z.hasChanges(),
                profileDirty: !1
            };
    }
}
function j() {
    if (null == E.Z.getGuildId() || null == i) return !1;
    (i = i.joinType === m.A.APPLY ? p(g({}, i), { pendingVerificationFields: y() }) : p(g({}, i), { termRules: A() })), R();
}
function P(e) {
    let { section: t, subsection: n } = e;
    if (t !== _.pNK.ACCESS) return L();
    let r = E.Z.getGuild();
    if (null == r) return !1;
    let l = n === _.KsC.ACCESS_DISCOVERABLE && r.hasFeature(_.oNc.COMMUNITY) ? m.A.DISCOVERABLE : b(r);
    (i = O(r, l)), R();
}
function L() {
    (i = void 0), (N = T);
}
function x() {
    if ((null == i ? void 0 : i.joinType) !== m.A.DISCOVERABLE) return !1;
    (i = p(g({}, i), { settingsView: v() })), R();
}
class F extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, u.Z, f.ZP),
            this.syncWith([E.Z, u.Z], () => {
                R();
            });
    }
    get pendingState() {
        return i;
    }
    get dirtyState() {
        return N;
    }
    showNotice() {
        return N.guildDirty || N.verificationDirty || N.profileDirty;
    }
}
C(F, 'displayName', 'GuildSettingsJoinRulesStore');
let V = new F(a.Z, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: t, requireTerms: n, termRules: r } = e;
        if (t !== E.Z.getGuildId() || ((null == i ? void 0 : i.joinType) !== m.A.INVITE && (null == i ? void 0 : i.joinType) !== m.A.DISCOVERABLE)) return !1;
        (i = p(g({}, i), {
            requireTerms: n,
            termRules: r
        })),
            R();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: t, formFields: n } = e;
        if (t !== E.Z.getGuildId() || (null == i ? void 0 : i.joinType) !== m.A.APPLY) return !1;
        (i = p(g({}, i), { pendingVerificationFields: n })), R();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: t, joinType: n } = e,
            r = E.Z.getGuild();
        if (t !== (null == r ? void 0 : r.id)) return !1;
        (i = O(r, n)), R();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: j,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: j,
    GUILD_SETTINGS_INIT: P,
    GUILD_SETTINGS_SET_SECTION: P,
    GUILD_SETTINGS_CLOSE: L,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: x,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: x,
    GUILD_SETTINGS_SUBMIT_SUCCESS: x
});
