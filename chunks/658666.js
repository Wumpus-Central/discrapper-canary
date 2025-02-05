let t;
n.d(i, { Z: () => P }), n(47120);
var r,
    l,
    a,
    s = n(392711),
    o = n.n(s),
    u = n(442837),
    c = n(570140),
    d = n(944163),
    E = n(246364),
    I = n(999382),
    f = n(118215),
    h = n(384632),
    _ = n(386885),
    m = n(981631),
    T = n(388032);
let C = {
    verificationDirty: !1,
    guildDirty: !1
};
function N() {
    let e = I.Z.getGuild();
    if (null == e) return;
    let i = f.ZP.getDiscoveryChecklist(e.id);
    if (null != i) return (0, _.V)(e, i);
}
function g() {
    var e;
    let i = I.Z.getGuildId();
    return null == i ? null : null === (e = d.Z.get(i)) || void 0 === e ? void 0 : e.formFields;
}
function A() {
    let e = g();
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
    let e = g();
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
    return e.hasFeature(m.oNc.DISCOVERABLE) ? h.A.DISCOVERABLE : e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? h.A.APPLY : h.A.INVITE;
}
function p(e, i) {
    let n = e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(m.oNc.CLAN);
    switch (i) {
        case h.A.INVITE:
            return {
                joinType: h.A.INVITE,
                requireTerms: n,
                termRules: A()
            };
        case h.A.APPLY:
            return {
                joinType: h.A.APPLY,
                pendingVerificationFields: S()
            };
        case h.A.DISCOVERABLE:
            return {
                joinType: h.A.DISCOVERABLE,
                settingsView: N(),
                requireTerms: n,
                termRules: A()
            };
    }
}
function D(e, i) {
    var n, t, r, l;
    let { requireTerms: a, termRules: s } = i;
    if (e.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== a) return !0;
    let u = null !== (t = g()) && void 0 !== t ? t : [];
    if (u.length > 1) return !0;
    let c = null !== (r = null === (n = u.find((e) => (0, E.J)(e))) || void 0 === n ? void 0 : n.values) && void 0 !== r ? r : [],
        d = null !== (l = null == s ? void 0 : s.map((e) => e.value.trim()).filter((e) => '' !== e)) && void 0 !== l ? l : [];
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
        case h.A.INVITE:
            C = {
                verificationDirty: D(e, t),
                guildDirty: i
            };
            break;
        case h.A.APPLY:
            let n;
            let r = g(),
                { pendingVerificationFields: l } = t,
                a = !e.hasFeature(m.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (n = null == r ? null != l : null != l && !o().isEqual(r, l)),
                (C = {
                    verificationDirty: a || n,
                    guildDirty: i
                });
            break;
        case h.A.DISCOVERABLE:
            C = {
                verificationDirty: D(e, t),
                guildDirty: i || I.Z.hasChanges()
            };
    }
}
function R() {
    if (null == I.Z.getGuildId() || null == t) return !1;
    (t =
        t.joinType === h.A.APPLY
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
    let r = I.Z.getGuild();
    if (null == r) return !1;
    let l = n === m.KsC.ACCESS_DISCOVERABLE && r.hasFeature(m.oNc.COMMUNITY) ? h.A.DISCOVERABLE : v(r);
    (t = p(r, l)), L();
}
function y() {
    (t = void 0),
        (C = {
            verificationDirty: !1,
            guildDirty: !1
        });
}
function F() {
    if ((null == t ? void 0 : t.joinType) !== h.A.DISCOVERABLE) return !1;
    (t = {
        ...t,
        settingsView: N()
    }),
        L();
}
class j extends (r = u.ZP.Store) {
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
    (l = 'displayName') in j
        ? Object.defineProperty(j, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (j[l] = a);
let P = new j(c.Z, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: i, requireTerms: n, termRules: r } = e;
        if (i !== I.Z.getGuildId() || ((null == t ? void 0 : t.joinType) !== h.A.INVITE && (null == t ? void 0 : t.joinType) !== h.A.DISCOVERABLE)) return !1;
        (t = {
            ...t,
            requireTerms: n,
            termRules: r
        }),
            L();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: i, formFields: n } = e;
        if (i !== I.Z.getGuildId() || (null == t ? void 0 : t.joinType) !== h.A.APPLY) return !1;
        (t = {
            ...t,
            pendingVerificationFields: n
        }),
            L();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: i, joinType: n } = e,
            r = I.Z.getGuild();
        if (i !== (null == r ? void 0 : r.id)) return !1;
        (t = p(r, n)), L();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: R,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: R,
    GUILD_SETTINGS_INIT: x,
    GUILD_SETTINGS_SET_SECTION: x,
    GUILD_SETTINGS_CLOSE: y,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: F,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: F,
    GUILD_SETTINGS_SUBMIT_SUCCESS: F
});
