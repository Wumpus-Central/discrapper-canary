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
    I = n(384632),
    h = n(386885),
    m = n(981631),
    _ = n(388032);
function g(e, t, n) {
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
function N(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
let p = {
        verificationDirty: !1,
        guildDirty: !1,
        profileDirty: !1
    },
    C = p;
function S() {
    let e = E.Z.getGuild();
    if (null == e) return;
    let t = f.ZP.getDiscoveryChecklist(e.id);
    if (null != t) return (0, h.V)(e, t);
}
function A() {
    var e;
    let t = E.Z.getGuildId();
    return null == t ? null : null == (e = u.Z.get(t)) ? void 0 : e.formFields;
}
function v() {
    let e = A();
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
    let e = A();
    if (null == e) return;
    let t = e.find((e) => (0, c.J)(e));
    if (0 === e.length || (1 === e.length && null != t)) {
        let e = {
            field_type: c.QJ.TEXT_INPUT,
            label: _.NW.string(_.t['83ZsRU']),
            required: !0
        };
        return null != t ? [t, e] : [e];
    }
    return [...e];
}
function D(e) {
    return e.hasFeature(m.oNc.DISCOVERABLE) ? I.A.DISCOVERABLE : e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? I.A.APPLY : I.A.INVITE;
}
function O(e, t) {
    let n = e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(m.oNc.CLAN);
    switch (t) {
        case I.A.INVITE:
            return {
                joinType: I.A.INVITE,
                requireTerms: n,
                termRules: v()
            };
        case I.A.APPLY:
            return {
                joinType: I.A.APPLY,
                pendingVerificationFields: y()
            };
        case I.A.DISCOVERABLE:
            return {
                joinType: I.A.DISCOVERABLE,
                settingsView: S(),
                requireTerms: n,
                termRules: v()
            };
    }
}
function b(e, t) {
    var n, i, r, l;
    let { requireTerms: s, termRules: a } = t;
    if (e.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== s) return !0;
    let u = null != (i = A()) ? i : [];
    if (u.length > 1) return !0;
    let d = null != (r = null == (n = u.find((e) => (0, c.J)(e))) ? void 0 : n.values) ? r : [],
        E = null != (l = null == a ? void 0 : a.map((e) => e.value.trim()).filter((e) => '' !== e)) ? l : [];
    return !o().isEqual(d, E);
}
function L() {
    let e = E.Z.getGuild();
    if (null == e || null == i) {
        C = p;
        return;
    }
    let t = D(e) !== i.joinType;
    switch (i.joinType) {
        case I.A.INVITE:
            C = {
                verificationDirty: b(e, i),
                guildDirty: t,
                profileDirty: !1
            };
            break;
        case I.A.APPLY:
            var n, r;
            let l,
                s = A(),
                { pendingVerificationFields: a } = i,
                u = !e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (l = null == s ? null != a : null != a && !o().isEqual(s, a)),
                (C = {
                    verificationDirty: u || l,
                    guildDirty: t,
                    profileDirty: (null == (n = d.Z.getProfile(e.id)) ? void 0 : n.visibility) !== (null == (r = E.Z.getGuildProfile()) ? void 0 : r.visibility)
                });
            break;
        case I.A.DISCOVERABLE:
            C = {
                verificationDirty: b(e, i),
                guildDirty: t || E.Z.hasChanges(),
                profileDirty: !1
            };
    }
}
function R() {
    if (null == E.Z.getGuildId() || null == i) return !1;
    (i = i.joinType === I.A.APPLY ? T(N({}, i), { pendingVerificationFields: y() }) : T(N({}, i), { termRules: v() })), L();
}
function j(e) {
    let { section: t, subsection: n } = e;
    if (t !== m.pNK.ACCESS) return x();
    let r = E.Z.getGuild();
    if (null == r) return !1;
    let l = n === m.KsC.ACCESS_DISCOVERABLE && r.hasFeature(m.oNc.COMMUNITY) ? I.A.DISCOVERABLE : D(r);
    (i = O(r, l)), L();
}
function x() {
    (i = void 0), (C = p);
}
function P() {
    if ((null == i ? void 0 : i.joinType) !== I.A.DISCOVERABLE) return !1;
    (i = T(N({}, i), { settingsView: S() })), L();
}
class F extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, u.Z, f.ZP),
            this.syncWith([E.Z, u.Z], () => {
                L();
            });
    }
    get pendingState() {
        return i;
    }
    get dirtyState() {
        return C;
    }
    showNotice() {
        return C.guildDirty || C.verificationDirty || C.profileDirty;
    }
}
g(F, 'displayName', 'GuildSettingsJoinRulesStore');
let V = new F(a.Z, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: t, requireTerms: n, termRules: r } = e;
        if (t !== E.Z.getGuildId() || ((null == i ? void 0 : i.joinType) !== I.A.INVITE && (null == i ? void 0 : i.joinType) !== I.A.DISCOVERABLE)) return !1;
        (i = T(N({}, i), {
            requireTerms: n,
            termRules: r
        })),
            L();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: t, formFields: n } = e;
        if (t !== E.Z.getGuildId() || (null == i ? void 0 : i.joinType) !== I.A.APPLY) return !1;
        (i = T(N({}, i), { pendingVerificationFields: n })), L();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: t, joinType: n } = e,
            r = E.Z.getGuild();
        if (t !== (null == r ? void 0 : r.id)) return !1;
        (i = O(r, n)), L();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: R,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: R,
    GUILD_SETTINGS_INIT: j,
    GUILD_SETTINGS_SET_SECTION: j,
    GUILD_SETTINGS_CLOSE: x,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: P,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: P,
    GUILD_SETTINGS_SUBMIT_SUCCESS: P
});
