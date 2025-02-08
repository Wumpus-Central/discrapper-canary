let t;
l.d(i, { Z: () => P }), l(47120);
var n,
    r,
    s,
    a = l(392711),
    o = l.n(a),
    d = l(442837),
    u = l(570140),
    c = l(944163),
    m = l(246364),
    E = l(999382),
    h = l(118215),
    g = l(384632),
    f = l(386885),
    I = l(981631),
    v = l(388032);
let _ = {
    verificationDirty: !1,
    guildDirty: !1
};
function N() {
    let e = E.Z.getGuild();
    if (null == e) return;
    let i = h.ZP.getDiscoveryChecklist(e.id);
    if (null != i) return (0, f.V)(e, i);
}
function x() {
    var e;
    let i = E.Z.getGuildId();
    return null == i ? null : null === (e = c.Z.get(i)) || void 0 === e ? void 0 : e.formFields;
}
function S() {
    let e = x();
    if (null == e) return;
    let i = e.find((e) => (0, m.J)(e));
    return null == i
        ? [
              {
                  id: (0, a.uniqueId)(),
                  value: ''
              }
          ]
        : i.values.map((e) => ({
              id: (0, a.uniqueId)(),
              value: e
          }));
}
function T() {
    let e = x();
    if (null == e) return;
    let i = e.find((e) => (0, m.J)(e));
    if (0 === e.length || (1 === e.length && null != i)) {
        let e = {
            field_type: m.QJ.TEXT_INPUT,
            label: v.intl.string(v.t['83ZsRU']),
            required: !0
        };
        return null != i ? [i, e] : [e];
    }
    return [...e];
}
function A(e) {
    return e.hasFeature(I.oNc.DISCOVERABLE) ? g.A.DISCOVERABLE : e.hasFeature(I.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.hasFeature(I.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? g.A.APPLY : g.A.INVITE;
}
function C(e, i) {
    let l = e.hasFeature(I.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(I.oNc.CLAN);
    switch (i) {
        case g.A.INVITE:
            return {
                joinType: g.A.INVITE,
                requireTerms: l,
                termRules: S()
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
                requireTerms: l,
                termRules: S()
            };
    }
}
function j(e, i) {
    var l, t, n, r;
    let { requireTerms: s, termRules: a } = i;
    if (e.hasFeature(I.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.hasFeature(I.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== s) return !0;
    let d = null !== (t = x()) && void 0 !== t ? t : [];
    if (d.length > 1) return !0;
    let u = null !== (n = null === (l = d.find((e) => (0, m.J)(e))) || void 0 === l ? void 0 : l.values) && void 0 !== n ? n : [],
        c = null !== (r = null == a ? void 0 : a.map((e) => e.value.trim()).filter((e) => '' !== e)) && void 0 !== r ? r : [];
    return !o().isEqual(u, c);
}
function p() {
    let e = E.Z.getGuild();
    if (null == e || null == t) {
        _ = {
            verificationDirty: !1,
            guildDirty: !1
        };
        return;
    }
    let i = A(e) !== t.joinType;
    switch (t.joinType) {
        case g.A.INVITE:
            _ = {
                verificationDirty: j(e, t),
                guildDirty: i
            };
            break;
        case g.A.APPLY:
            let l;
            let n = x(),
                { pendingVerificationFields: r } = t,
                s = !e.hasFeature(I.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.hasFeature(I.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (l = null == n ? null != r : null != r && !o().isEqual(n, r)),
                (_ = {
                    verificationDirty: s || l,
                    guildDirty: i
                });
            break;
        case g.A.DISCOVERABLE:
            _ = {
                verificationDirty: j(e, t),
                guildDirty: i || E.Z.hasChanges()
            };
    }
}
function L() {
    if (null == E.Z.getGuildId() || null == t) return !1;
    (t =
        t.joinType === g.A.APPLY
            ? {
                  ...t,
                  pendingVerificationFields: T()
              }
            : {
                  ...t,
                  termRules: S()
              }),
        p();
}
function D(e) {
    let { section: i, subsection: l } = e;
    if (i !== I.pNK.ACCESS) return y();
    let n = E.Z.getGuild();
    if (null == n) return !1;
    let r = l === I.KsC.ACCESS_DISCOVERABLE && n.hasFeature(I.oNc.COMMUNITY) ? g.A.DISCOVERABLE : A(n);
    (t = C(n, r)), p();
}
function y() {
    (t = void 0),
        (_ = {
            verificationDirty: !1,
            guildDirty: !1
        });
}
function R() {
    if ((null == t ? void 0 : t.joinType) !== g.A.DISCOVERABLE) return !1;
    (t = {
        ...t,
        settingsView: N()
    }),
        p();
}
class F extends (n = d.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, c.Z, h.ZP),
            this.syncWith([E.Z, c.Z], () => {
                p();
            });
    }
    get pendingState() {
        return t;
    }
    get dirtyState() {
        return _;
    }
    showNotice() {
        return _.guildDirty || _.verificationDirty;
    }
}
(s = 'GuildSettingsJoinRulesStore'),
    (r = 'displayName') in F
        ? Object.defineProperty(F, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (F[r] = s);
let P = new F(u.Z, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: i, requireTerms: l, termRules: n } = e;
        if (i !== E.Z.getGuildId() || ((null == t ? void 0 : t.joinType) !== g.A.INVITE && (null == t ? void 0 : t.joinType) !== g.A.DISCOVERABLE)) return !1;
        (t = {
            ...t,
            requireTerms: l,
            termRules: n
        }),
            p();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: i, formFields: l } = e;
        if (i !== E.Z.getGuildId() || (null == t ? void 0 : t.joinType) !== g.A.APPLY) return !1;
        (t = {
            ...t,
            pendingVerificationFields: l
        }),
            p();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: i, joinType: l } = e,
            n = E.Z.getGuild();
        if (i !== (null == n ? void 0 : n.id)) return !1;
        (t = C(n, l)), p();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: L,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: L,
    GUILD_SETTINGS_INIT: D,
    GUILD_SETTINGS_SET_SECTION: D,
    GUILD_SETTINGS_CLOSE: y,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: R,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: R,
    GUILD_SETTINGS_SUBMIT_SUCCESS: R
});
