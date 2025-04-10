let n;
t.d(i, { Z: () => G }), t(388685), t(781311);
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
    h = t(981631),
    S = t(388032);
function g(e, i, t) {
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
function m(e) {
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
                g(e, i, t[i]);
            });
    }
    return e;
}
function N(e, i) {
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
let p = {
        verificationDirty: !1,
        guildDirty: !1,
        profileDirty: !1
    },
    A = p;
function T() {
    let e = E.Z.getGuild();
    if (null == e) return;
    let i = f.ZP.getDiscoveryChecklist(e.id);
    if (null != i) return (0, _.V)(e, i);
}
function v() {
    var e;
    let i = E.Z.getGuildId();
    return null == i ? null : null == (e = o.Z.get(i)) ? void 0 : e.formFields;
}
function C() {
    let e = v();
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
function D() {
    let e = v();
    if (null == e) return;
    let i = e.find((e) => (0, c.J)(e));
    if (0 === e.length || (1 === e.length && null != i)) {
        let e = {
            field_type: c.QJ.TEXT_INPUT,
            label: S.NW.string(S.t['83ZsRU']),
            required: !0
        };
        return null != i ? [i, e] : [e];
    }
    return [...e];
}
function P(e) {
    return e.hasFeature(h.oNc.DISCOVERABLE) ? I.A.DISCOVERABLE : e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.hasFeature(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? I.A.APPLY : I.A.INVITE;
}
function y(e, i) {
    let t = e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(h.oNc.CLAN);
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
                pendingVerificationFields: D()
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
function L(e, i) {
    var t, n, l, r;
    let { requireTerms: s, termRules: u } = i;
    if (e.hasFeature(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== s) return !0;
    let o = null != (n = v()) ? n : [];
    if (o.length > 1) return !0;
    let d = null != (l = null == (t = o.find((e) => (0, c.J)(e))) ? void 0 : t.values) ? l : [],
        E = null != (r = null == u ? void 0 : u.map((e) => e.value.trim()).filter((e) => '' !== e)) ? r : [];
    return !a().isEqual(d, E);
}
function O() {
    let e = E.Z.getGuild();
    if (null == e || null == n) {
        A = p;
        return;
    }
    let i = P(e) !== n.joinType;
    switch (n.joinType) {
        case I.A.INVITE:
            A = {
                verificationDirty: L(e, n),
                guildDirty: i,
                profileDirty: !1
            };
            break;
        case I.A.APPLY:
            var t, l;
            let r,
                s = v(),
                { pendingVerificationFields: u } = n,
                o = !e.hasFeature(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.hasFeature(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (r = null == s ? null != u : null != u && !a().isEqual(s, u)),
                (A = {
                    verificationDirty: o || r,
                    guildDirty: i,
                    profileDirty: (null == (t = d.Z.getProfile(e.id)) ? void 0 : t.visibility) !== (null == (l = E.Z.getGuildProfile()) ? void 0 : l.visibility)
                });
            break;
        case I.A.DISCOVERABLE:
            A = {
                verificationDirty: L(e, n),
                guildDirty: i || E.Z.hasChanges(),
                profileDirty: !1
            };
    }
}
function R() {
    if (null == E.Z.getGuildId() || null == n) return !1;
    (n = n.joinType === I.A.APPLY ? N(m({}, n), { pendingVerificationFields: D() }) : N(m({}, n), { termRules: C() })), O();
}
function b(e) {
    let { section: i, subsection: t } = e;
    if (i !== h.pNK.ACCESS) return j();
    let l = E.Z.getGuild();
    if (null == l) return !1;
    let r = t === h.KsC.ACCESS_DISCOVERABLE && l.hasFeature(h.oNc.COMMUNITY) ? I.A.DISCOVERABLE : P(l);
    (n = y(l, r)), O();
}
function j() {
    (n = void 0), (A = p);
}
function V() {
    if ((null == n ? void 0 : n.joinType) !== I.A.DISCOVERABLE) return !1;
    (n = N(m({}, n), { settingsView: T() })), O();
}
class x extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, o.Z, f.ZP),
            this.syncWith([E.Z, o.Z], () => {
                O();
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
g(x, 'displayName', 'GuildSettingsJoinRulesStore');
let G = new x(u.Z, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: i, requireTerms: t, termRules: l } = e;
        if (i !== E.Z.getGuildId() || ((null == n ? void 0 : n.joinType) !== I.A.INVITE && (null == n ? void 0 : n.joinType) !== I.A.DISCOVERABLE)) return !1;
        (n = N(m({}, n), {
            requireTerms: t,
            termRules: l
        })),
            O();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: i, formFields: t } = e;
        if (i !== E.Z.getGuildId() || (null == n ? void 0 : n.joinType) !== I.A.APPLY) return !1;
        (n = N(m({}, n), { pendingVerificationFields: t })), O();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: i, joinType: t } = e,
            l = E.Z.getGuild();
        if (i !== (null == l ? void 0 : l.id)) return !1;
        (n = y(l, t)), O();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: R,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: R,
    GUILD_SETTINGS_INIT: b,
    GUILD_SETTINGS_SET_SECTION: b,
    GUILD_SETTINGS_CLOSE: j,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: V,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: V,
    GUILD_SETTINGS_SUBMIT_SUCCESS: V
});
