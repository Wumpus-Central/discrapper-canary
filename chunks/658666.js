let n;
i.d(t, { Z: () => R }), i(47120), i(566702);
var l,
    r = i(392711),
    s = i.n(r),
    a = i(442837),
    o = i(570140),
    u = i(944163),
    c = i(246364),
    d = i(999382),
    m = i(118215),
    f = i(384632),
    E = i(386885),
    g = i(981631),
    h = i(388032);
function v(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                v(e, t, i[t]);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, n);
                  }
                  return i;
              })(Object(t)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              }),
        e
    );
}
let _ = {
    verificationDirty: !1,
    guildDirty: !1
};
function p() {
    let e = d.Z.getGuild();
    if (null == e) return;
    let t = m.ZP.getDiscoveryChecklist(e.id);
    if (null != t) return (0, E.V)(e, t);
}
function j() {
    var e;
    let t = d.Z.getGuildId();
    return null == t ? null : null === (e = u.Z.get(t)) || void 0 === e ? void 0 : e.formFields;
}
function S() {
    let e = j();
    if (null == e) return;
    let t = e.find((e) => (0, c.J)(e));
    return null == t
        ? [
              {
                  id: (0, r.uniqueId)(),
                  value: ''
              }
          ]
        : t.values.map((e) => ({
              id: (0, r.uniqueId)(),
              value: e
          }));
}
function x() {
    let e = j();
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
function y(e) {
    return e.hasFeature(g.oNc.DISCOVERABLE) ? f.A.DISCOVERABLE : e.hasFeature(g.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.hasFeature(g.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? f.A.APPLY : f.A.INVITE;
}
function b(e, t) {
    let i = e.hasFeature(g.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(g.oNc.CLAN);
    switch (t) {
        case f.A.INVITE:
            return {
                joinType: f.A.INVITE,
                requireTerms: i,
                termRules: S()
            };
        case f.A.APPLY:
            return {
                joinType: f.A.APPLY,
                pendingVerificationFields: x()
            };
        case f.A.DISCOVERABLE:
            return {
                joinType: f.A.DISCOVERABLE,
                settingsView: p(),
                requireTerms: i,
                termRules: S()
            };
    }
}
function O(e, t) {
    var i, n, l, r;
    let { requireTerms: a, termRules: o } = t;
    if (e.hasFeature(g.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.hasFeature(g.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== a) return !0;
    let u = null !== (n = j()) && void 0 !== n ? n : [];
    if (u.length > 1) return !0;
    let d = null !== (l = null === (i = u.find((e) => (0, c.J)(e))) || void 0 === i ? void 0 : i.values) && void 0 !== l ? l : [],
        m = null !== (r = null == o ? void 0 : o.map((e) => e.value.trim()).filter((e) => '' !== e)) && void 0 !== r ? r : [];
    return !s().isEqual(d, m);
}
function T() {
    let e = d.Z.getGuild();
    if (null == e || null == n) {
        _ = {
            verificationDirty: !1,
            guildDirty: !1
        };
        return;
    }
    let t = y(e) !== n.joinType;
    switch (n.joinType) {
        case f.A.INVITE:
            _ = {
                verificationDirty: O(e, n),
                guildDirty: t
            };
            break;
        case f.A.APPLY:
            let i;
            let l = j(),
                { pendingVerificationFields: r } = n,
                a = !e.hasFeature(g.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.hasFeature(g.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (i = null == l ? null != r : null != r && !s().isEqual(l, r)),
                (_ = {
                    verificationDirty: a || i,
                    guildDirty: t
                });
            break;
        case f.A.DISCOVERABLE:
            _ = {
                verificationDirty: O(e, n),
                guildDirty: t || d.Z.hasChanges()
            };
    }
}
function A() {
    if (null == d.Z.getGuildId() || null == n) return !1;
    (n = n.joinType === f.A.APPLY ? I(N({}, n), { pendingVerificationFields: x() }) : I(N({}, n), { termRules: S() })), T();
}
function C(e) {
    let { section: t, subsection: i } = e;
    if (t !== g.pNK.ACCESS) return D();
    let l = d.Z.getGuild();
    if (null == l) return !1;
    let r = i === g.KsC.ACCESS_DISCOVERABLE && l.hasFeature(g.oNc.COMMUNITY) ? f.A.DISCOVERABLE : y(l);
    (n = b(l, r)), T();
}
function D() {
    (n = void 0),
        (_ = {
            verificationDirty: !1,
            guildDirty: !1
        });
}
function P() {
    if ((null == n ? void 0 : n.joinType) !== f.A.DISCOVERABLE) return !1;
    (n = I(N({}, n), { settingsView: p() })), T();
}
class L extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, u.Z, m.ZP),
            this.syncWith([d.Z, u.Z], () => {
                T();
            });
    }
    get pendingState() {
        return n;
    }
    get dirtyState() {
        return _;
    }
    showNotice() {
        return _.guildDirty || _.verificationDirty;
    }
}
v(L, 'displayName', 'GuildSettingsJoinRulesStore');
let R = new L(o.Z, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: t, requireTerms: i, termRules: l } = e;
        if (t !== d.Z.getGuildId() || ((null == n ? void 0 : n.joinType) !== f.A.INVITE && (null == n ? void 0 : n.joinType) !== f.A.DISCOVERABLE)) return !1;
        (n = I(N({}, n), {
            requireTerms: i,
            termRules: l
        })),
            T();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: t, formFields: i } = e;
        if (t !== d.Z.getGuildId() || (null == n ? void 0 : n.joinType) !== f.A.APPLY) return !1;
        (n = I(N({}, n), { pendingVerificationFields: i })), T();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: t, joinType: i } = e,
            l = d.Z.getGuild();
        if (t !== (null == l ? void 0 : l.id)) return !1;
        (n = b(l, i)), T();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: A,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: A,
    GUILD_SETTINGS_INIT: C,
    GUILD_SETTINGS_SET_SECTION: C,
    GUILD_SETTINGS_CLOSE: D,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: P,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: P,
    GUILD_SETTINGS_SUBMIT_SUCCESS: P
});
