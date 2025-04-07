let i;
n.d(t, { Z: () => G }), n(388685), n(781311);
var r,
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(570140),
    c = n(944163),
    u = n(246364),
    d = n(314852),
    m = n(999382),
    f = n(118215),
    g = n(384632),
    h = n(386885),
    x = n(981631),
    E = n(388032);
function I(e, t, n) {
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
function p(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
let j = {
        verificationDirty: !1,
        guildDirty: !1,
        profileDirty: !1
    },
    b = j;
function N() {
    let e = m.Z.getGuild();
    if (null == e) return;
    let t = f.ZP.getDiscoveryChecklist(e.id);
    if (null != t) return (0, h.V)(e, t);
}
function y() {
    var e;
    let t = m.Z.getGuildId();
    return null == t ? null : null == (e = c.Z.get(t)) ? void 0 : e.formFields;
}
function _() {
    let e = y();
    if (null == e) return;
    let t = e.find((e) => (0, u.J)(e));
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
function T() {
    let e = y();
    if (null == e) return;
    let t = e.find((e) => (0, u.J)(e));
    if (0 === e.length || (1 === e.length && null != t)) {
        let e = {
            field_type: u.QJ.TEXT_INPUT,
            label: E.NW.string(E.t['83ZsRU']),
            required: !0
        };
        return null != t ? [t, e] : [e];
    }
    return [...e];
}
function O(e) {
    return e.hasFeature(x.oNc.DISCOVERABLE) ? g.A.DISCOVERABLE : e.hasFeature(x.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.hasFeature(x.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? g.A.APPLY : g.A.INVITE;
}
function S(e, t) {
    let n = e.hasFeature(x.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(x.oNc.CLAN);
    switch (t) {
        case g.A.INVITE:
            return {
                joinType: g.A.INVITE,
                requireTerms: n,
                termRules: _()
            };
        case g.A.APPLY:
            return {
                joinType: g.A.APPLY,
                pendingVerificationFields: T()
            };
        case g.A.DISCOVERABLE:
            return {
                joinType: g.A.DISCOVERABLE,
                settingsView: N(),
                requireTerms: n,
                termRules: _()
            };
    }
}
function C(e, t) {
    var n, i, r, l;
    let { requireTerms: s, termRules: o } = t;
    if (e.hasFeature(x.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.hasFeature(x.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== s) return !0;
    let c = null != (i = y()) ? i : [];
    if (c.length > 1) return !0;
    let d = null != (r = null == (n = c.find((e) => (0, u.J)(e))) ? void 0 : n.values) ? r : [],
        m = null != (l = null == o ? void 0 : o.map((e) => e.value.trim()).filter((e) => '' !== e)) ? l : [];
    return !a().isEqual(d, m);
}
function A() {
    let e = m.Z.getGuild();
    if (null == e || null == i) {
        b = j;
        return;
    }
    let t = O(e) !== i.joinType;
    switch (i.joinType) {
        case g.A.INVITE:
            b = {
                verificationDirty: C(e, i),
                guildDirty: t,
                profileDirty: !1
            };
            break;
        case g.A.APPLY:
            var n, r;
            let l,
                s = y(),
                { pendingVerificationFields: o } = i,
                c = !e.hasFeature(x.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.hasFeature(x.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (l = null == s ? null != o : null != o && !a().isEqual(s, o)),
                (b = {
                    verificationDirty: c || l,
                    guildDirty: t,
                    profileDirty: (null == (n = d.Z.getProfile(e.id)) ? void 0 : n.visibility) !== (null == (r = m.Z.getGuildProfile()) ? void 0 : r.visibility)
                });
            break;
        case g.A.DISCOVERABLE:
            b = {
                verificationDirty: C(e, i),
                guildDirty: t || m.Z.hasChanges(),
                profileDirty: !1
            };
    }
}
function P() {
    if (null == m.Z.getGuildId() || null == i) return !1;
    (i = i.joinType === g.A.APPLY ? v(p({}, i), { pendingVerificationFields: T() }) : v(p({}, i), { termRules: _() })), A();
}
function D(e) {
    let { section: t, subsection: n } = e;
    if (t !== x.pNK.ACCESS) return L();
    let r = m.Z.getGuild();
    if (null == r) return !1;
    let l = n === x.KsC.ACCESS_DISCOVERABLE && r.hasFeature(x.oNc.COMMUNITY) ? g.A.DISCOVERABLE : O(r);
    (i = S(r, l)), A();
}
function L() {
    (i = void 0), (b = j);
}
function R() {
    if ((null == i ? void 0 : i.joinType) !== g.A.DISCOVERABLE) return !1;
    (i = v(p({}, i), { settingsView: N() })), A();
}
class w extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, c.Z, f.ZP),
            this.syncWith([m.Z, c.Z], () => {
                A();
            });
    }
    get pendingState() {
        return i;
    }
    get dirtyState() {
        return b;
    }
    showNotice() {
        return b.guildDirty || b.verificationDirty || b.profileDirty;
    }
}
I(w, 'displayName', 'GuildSettingsJoinRulesStore');
let G = new w(o.Z, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: t, requireTerms: n, termRules: r } = e;
        if (t !== m.Z.getGuildId() || ((null == i ? void 0 : i.joinType) !== g.A.INVITE && (null == i ? void 0 : i.joinType) !== g.A.DISCOVERABLE)) return !1;
        (i = v(p({}, i), {
            requireTerms: n,
            termRules: r
        })),
            A();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: t, formFields: n } = e;
        if (t !== m.Z.getGuildId() || (null == i ? void 0 : i.joinType) !== g.A.APPLY) return !1;
        (i = v(p({}, i), { pendingVerificationFields: n })), A();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: t, joinType: n } = e,
            r = m.Z.getGuild();
        if (t !== (null == r ? void 0 : r.id)) return !1;
        (i = S(r, n)), A();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: P,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: P,
    GUILD_SETTINGS_INIT: D,
    GUILD_SETTINGS_SET_SECTION: D,
    GUILD_SETTINGS_CLOSE: L,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: R,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: R,
    GUILD_SETTINGS_SUBMIT_SUCCESS: R
});
