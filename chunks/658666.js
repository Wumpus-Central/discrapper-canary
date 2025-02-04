let t;
n.d(i, { Z: () => P }), n(47120);
var l,
    r,
    a,
    s = n(392711),
    o = n.n(s),
    u = n(442837),
    c = n(570140),
    d = n(944163),
    E = n(246364),
    I = n(999382),
    f = n(118215),
    _ = n(384632),
    h = n(386885),
    m = n(981631),
    T = n(388032);
let C = {
    verificationDirty: !1,
    guildDirty: !1
};
function g() {
    let e = I.Z.getGuild();
    if (null == e) return;
    let i = f.ZP.getDiscoveryChecklist(e.id);
    if (null != i) return (0, h.V)(e, i);
}
function N() {
    var e;
    let i = I.Z.getGuildId();
    return null == i ? null : null === (e = d.Z.get(i)) || void 0 === e ? void 0 : e.formFields;
}
function A() {
    let e = N();
    if (null == e) return;
    let i = e.find((e) => (0, E.J)(e));
    return null == i
        ? [
              {
                  id: (0, s.uniqueId)(),
                  value: ''
              }
          ]
        : i.values.map((e) => ({
              id: (0, s.uniqueId)(),
              value: e
          }));
}
function S() {
    let e = N();
    if (null == e) return;
    let i = e.find((e) => (0, E.J)(e));
    if (0 === e.length || (1 === e.length && null != i)) {
        let e = {
            field_type: E.QJ.TEXT_INPUT,
            label: T.intl.string(T.t['83ZsRU']),
            required: !0
        };
        return null != i ? [i, e] : [e];
    }
    return [...e];
}
function v(e) {
    return e.hasFeature(m.oNc.DISCOVERABLE) ? _.A.DISCOVERABLE : e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? _.A.APPLY : _.A.INVITE;
}
function p(e, i) {
    let n = e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(m.oNc.CLAN);
    switch (i) {
        case _.A.INVITE:
            return {
                joinType: _.A.INVITE,
                requireTerms: n,
                termRules: A()
            };
        case _.A.APPLY:
            return {
                joinType: _.A.APPLY,
                pendingVerificationFields: S()
            };
        case _.A.DISCOVERABLE:
            return {
                joinType: _.A.DISCOVERABLE,
                settingsView: g(),
                requireTerms: n,
                termRules: A()
            };
    }
}
function D(e, i) {
    var n, t, l, r;
    let { requireTerms: a, termRules: s } = i;
    if (e.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== a) return !0;
    let u = null !== (t = N()) && void 0 !== t ? t : [];
    if (u.length > 1) return !0;
    let c = null !== (l = null === (n = u.find((e) => (0, E.J)(e))) || void 0 === n ? void 0 : n.values) && void 0 !== l ? l : [],
        d = null !== (r = null == s ? void 0 : s.map((e) => e.value.trim()).filter((e) => '' !== e)) && void 0 !== r ? r : [];
    return !o().isEqual(c, d);
}
function L() {
    let e = I.Z.getGuild();
    if (null == e || null == t) {
        C = {
            verificationDirty: !1,
            guildDirty: !1
        };
        return;
    }
    let i = v(e) !== t.joinType;
    switch (t.joinType) {
        case _.A.INVITE:
            C = {
                verificationDirty: D(e, t),
                guildDirty: i
            };
            break;
        case _.A.APPLY:
            let n;
            let l = N(),
                { pendingVerificationFields: r } = t,
                a = !e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (n = null == l ? null != r : null != r && !o().isEqual(l, r)),
                (C = {
                    verificationDirty: a || n,
                    guildDirty: i
                });
            break;
        case _.A.DISCOVERABLE:
            C = {
                verificationDirty: D(e, t),
                guildDirty: i || I.Z.hasChanges()
            };
    }
}
function R() {
    if (null == I.Z.getGuildId() || null == t) return !1;
    (t =
        t.joinType === _.A.APPLY
            ? {
                  ...t,
                  pendingVerificationFields: S()
              }
            : {
                  ...t,
                  termRules: A()
              }),
        L();
}
function x(e) {
    let { section: i, subsection: n } = e;
    if (i !== m.pNK.ACCESS) return y();
    let l = I.Z.getGuild();
    if (null == l) return !1;
    let r = n === m.KsC.ACCESS_DISCOVERABLE ? _.A.DISCOVERABLE : v(l);
    (t = p(l, r)), L();
}
function y() {
    (t = void 0),
        (C = {
            verificationDirty: !1,
            guildDirty: !1
        });
}
function j() {
    if ((null == t ? void 0 : t.joinType) !== _.A.DISCOVERABLE) return !1;
    (t = {
        ...t,
        settingsView: g()
    }),
        L();
}
class F extends (l = u.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, d.Z, f.ZP),
            this.syncWith([I.Z, d.Z], () => {
                L();
            });
    }
    get pendingState() {
        return t;
    }
    get dirtyState() {
        return C;
    }
    showNotice() {
        return C.guildDirty || C.verificationDirty;
    }
}
(a = 'GuildSettingsJoinRulesStore'),
    (r = 'displayName') in F
        ? Object.defineProperty(F, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (F[r] = a);
let P = new F(c.Z, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: i, requireTerms: n, termRules: l } = e;
        if (i !== I.Z.getGuildId() || ((null == t ? void 0 : t.joinType) !== _.A.INVITE && (null == t ? void 0 : t.joinType) !== _.A.DISCOVERABLE)) return !1;
        (t = {
            ...t,
            requireTerms: n,
            termRules: l
        }),
            L();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: i, formFields: n } = e;
        if (i !== I.Z.getGuildId() || (null == t ? void 0 : t.joinType) !== _.A.APPLY) return !1;
        (t = {
            ...t,
            pendingVerificationFields: n
        }),
            L();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: i, joinType: n } = e,
            l = I.Z.getGuild();
        if (i !== (null == l ? void 0 : l.id)) return !1;
        (t = p(l, n)), L();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: R,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: R,
    GUILD_SETTINGS_INIT: x,
    GUILD_SETTINGS_SET_SECTION: x,
    GUILD_SETTINGS_CLOSE: y,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: j,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: j,
    GUILD_SETTINGS_SUBMIT_SUCCESS: j
});
