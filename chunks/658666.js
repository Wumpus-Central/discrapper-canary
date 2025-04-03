let n;
t.d(i, { Z: () => j }), t(47120), t(566702);
var r,
    l = t(392711),
    u = t.n(l),
    o = t(442837),
    a = t(570140),
    s = t(944163),
    E = t(246364),
    c = t(314852),
    d = t(999382),
    I = t(118215),
    f = t(384632),
    _ = t(386885),
    S = t(981631),
    g = t(388032);
function A(e, i, t) {
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
function T(e) {
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
                A(e, i, t[i]);
            });
    }
    return e;
}
function D(e, i) {
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
let h = {
        verificationDirty: !1,
        guildDirty: !1,
        profileDirty: !1
    },
    p = h;
function N() {
    let e = d.Z.getGuild();
    if (null == e) return;
    let i = I.ZP.getDiscoveryChecklist(e.id);
    if (null != i) return (0, _.V)(e, i);
}
function C() {
    var e;
    let i = d.Z.getGuildId();
    return null == i ? null : null == (e = s.Z.get(i)) ? void 0 : e.formFields;
}
function y() {
    let e = C();
    if (null == e) return;
    let i = e.find((e) => (0, E.J)(e));
    return null == i
        ? [
              {
                  id: (0, l.uniqueId)(),
                  value: ''
              }
          ]
        : i.values.map((e) => ({
              id: (0, l.uniqueId)(),
              value: e
          }));
}
function O() {
    let e = C();
    if (null == e) return;
    let i = e.find((e) => (0, E.J)(e));
    if (0 === e.length || (1 === e.length && null != i)) {
        let e = {
            field_type: E.QJ.TEXT_INPUT,
            label: g.NW.string(g.t['83ZsRU']),
            required: !0
        };
        return null != i ? [i, e] : [e];
    }
    return [...e];
}
function L(e) {
    return e.hasFeature(S.oNc.DISCOVERABLE) ? f.A.DISCOVERABLE : e.hasFeature(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.hasFeature(S.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? f.A.APPLY : f.A.INVITE;
}
function P(e, i) {
    let t = e.hasFeature(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(S.oNc.CLAN);
    switch (i) {
        case f.A.INVITE:
            return {
                joinType: f.A.INVITE,
                requireTerms: t,
                termRules: y()
            };
        case f.A.APPLY:
            return {
                joinType: f.A.APPLY,
                pendingVerificationFields: O()
            };
        case f.A.DISCOVERABLE:
            return {
                joinType: f.A.DISCOVERABLE,
                settingsView: N(),
                requireTerms: t,
                termRules: y()
            };
    }
}
function R(e, i) {
    var t, n, r, l;
    let { requireTerms: o, termRules: a } = i;
    if (e.hasFeature(S.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.hasFeature(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== o) return !0;
    let s = null != (n = C()) ? n : [];
    if (s.length > 1) return !0;
    let c = null != (r = null == (t = s.find((e) => (0, E.J)(e))) ? void 0 : t.values) ? r : [],
        d = null != (l = null == a ? void 0 : a.map((e) => e.value.trim()).filter((e) => '' !== e)) ? l : [];
    return !u().isEqual(c, d);
}
function b() {
    let e = d.Z.getGuild();
    if (null == e || null == n) {
        p = h;
        return;
    }
    let i = L(e) !== n.joinType;
    switch (n.joinType) {
        case f.A.INVITE:
            p = {
                verificationDirty: R(e, n),
                guildDirty: i,
                profileDirty: !1
            };
            break;
        case f.A.APPLY:
            var t, r;
            let l,
                o = C(),
                { pendingVerificationFields: a } = n,
                s = !e.hasFeature(S.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.hasFeature(S.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (l = null == o ? null != a : null != a && !u().isEqual(o, a)),
                (p = {
                    verificationDirty: s || l,
                    guildDirty: i,
                    profileDirty: (null == (t = c.Z.getProfile(e.id)) ? void 0 : t.visibility) !== (null == (r = d.Z.getGuildProfile()) ? void 0 : r.visibility)
                });
            break;
        case f.A.DISCOVERABLE:
            p = {
                verificationDirty: R(e, n),
                guildDirty: i || d.Z.hasChanges(),
                profileDirty: !1
            };
    }
}
function v() {
    if (null == d.Z.getGuildId() || null == n) return !1;
    (n = n.joinType === f.A.APPLY ? D(T({}, n), { pendingVerificationFields: O() }) : D(T({}, n), { termRules: y() })), b();
}
function m(e) {
    let { section: i, subsection: t } = e;
    if (i !== S.pNK.ACCESS) return V();
    let r = d.Z.getGuild();
    if (null == r) return !1;
    let l = t === S.KsC.ACCESS_DISCOVERABLE && r.hasFeature(S.oNc.COMMUNITY) ? f.A.DISCOVERABLE : L(r);
    (n = P(r, l)), b();
}
function V() {
    (n = void 0), (p = h);
}
function F() {
    if ((null == n ? void 0 : n.joinType) !== f.A.DISCOVERABLE) return !1;
    (n = D(T({}, n), { settingsView: N() })), b();
}
class G extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, s.Z, I.ZP),
            this.syncWith([d.Z, s.Z], () => {
                b();
            });
    }
    get pendingState() {
        return n;
    }
    get dirtyState() {
        return p;
    }
    showNotice() {
        return p.guildDirty || p.verificationDirty || p.profileDirty;
    }
}
A(G, 'displayName', 'GuildSettingsJoinRulesStore');
let j = new G(a.Z, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: i, requireTerms: t, termRules: r } = e;
        if (i !== d.Z.getGuildId() || ((null == n ? void 0 : n.joinType) !== f.A.INVITE && (null == n ? void 0 : n.joinType) !== f.A.DISCOVERABLE)) return !1;
        (n = D(T({}, n), {
            requireTerms: t,
            termRules: r
        })),
            b();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: i, formFields: t } = e;
        if (i !== d.Z.getGuildId() || (null == n ? void 0 : n.joinType) !== f.A.APPLY) return !1;
        (n = D(T({}, n), { pendingVerificationFields: t })), b();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: i, joinType: t } = e,
            r = d.Z.getGuild();
        if (i !== (null == r ? void 0 : r.id)) return !1;
        (n = P(r, t)), b();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: v,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: v,
    GUILD_SETTINGS_INIT: m,
    GUILD_SETTINGS_SET_SECTION: m,
    GUILD_SETTINGS_CLOSE: V,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: F,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: F,
    GUILD_SETTINGS_SUBMIT_SUCCESS: F
});
