let i;
t(47120);
var r,
    l,
    u,
    o,
    a = t(392711),
    s = t.n(a),
    c = t(442837),
    d = t(570140),
    f = t(944163),
    E = t(246364),
    I = t(999382),
    h = t(118215),
    m = t(384632),
    _ = t(386885),
    g = t(981631),
    C = t(388032);
let T = {
    verificationDirty: !1,
    guildDirty: !1
};
function v() {
    let e = I.Z.getGuild();
    if (null == e) return;
    let n = h.ZP.getDiscoveryChecklist(e.id);
    if (null != n) return (0, _.V)(e, n);
}
function N() {
    var e;
    let n = I.Z.getGuildId();
    return null == n ? null : null === (e = f.Z.get(n)) || void 0 === e ? void 0 : e.formFields;
}
function S() {
    let e = N();
    if (null == e) return;
    let n = e.find((e) => (0, E.J)(e));
    return null == n
        ? [
              {
                  id: (0, a.uniqueId)(),
                  value: ''
              }
          ]
        : n.values.map((e) => ({
              id: (0, a.uniqueId)(),
              value: e
          }));
}
function p() {
    let e = N();
    if (null == e) return;
    let n = e.find((e) => (0, E.J)(e));
    if (0 === e.length || (1 === e.length && null != n)) {
        let e = {
            field_type: E.QJ.TEXT_INPUT,
            label: C.intl.string(C.t['83ZsRU']),
            required: !0
        };
        return null != n ? [n, e] : [e];
    }
    return [...e];
}
function x(e) {
    return e.hasFeature(g.oNc.DISCOVERABLE) ? m.A.DISCOVERABLE : e.hasFeature(g.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? m.A.APPLY : m.A.INVITE;
}
function A(e, n) {
    let t = e.hasFeature(g.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(g.oNc.CLAN);
    switch (n) {
        case m.A.INVITE:
            return {
                joinType: m.A.INVITE,
                requireTerms: t,
                termRules: S()
            };
        case m.A.APPLY:
            return {
                joinType: m.A.APPLY,
                pendingVerificationFields: p()
            };
        case m.A.DISCOVERABLE:
            return {
                joinType: m.A.DISCOVERABLE,
                settingsView: v(),
                requireTerms: t,
                termRules: S()
            };
    }
}
function D(e, n) {
    var t, i, r, l;
    let { requireTerms: u, termRules: o } = n;
    if (e.hasFeature(g.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== u) return !0;
    let a = null !== (i = N()) && void 0 !== i ? i : [];
    if (a.length > 1) return !0;
    let c = null !== (r = null === (t = a.find((e) => (0, E.J)(e))) || void 0 === t ? void 0 : t.values) && void 0 !== r ? r : [],
        d = null !== (l = null == o ? void 0 : o.map((e) => e.value.trim()).filter((e) => '' !== e)) && void 0 !== l ? l : [];
    return !s().isEqual(c, d);
}
function L() {
    let e = I.Z.getGuild();
    if (null == e || null == i) {
        T = {
            verificationDirty: !1,
            guildDirty: !1
        };
        return;
    }
    let n = x(e) !== i.joinType;
    switch (i.joinType) {
        case m.A.INVITE:
            T = {
                verificationDirty: D(e, i),
                guildDirty: n
            };
            break;
        case m.A.APPLY:
            let t;
            let r = N(),
                { pendingVerificationFields: l } = i;
            T = {
                verificationDirty: (t = null == r ? null != l : null != l && !s().isEqual(r, l)),
                guildDirty: n
            };
            break;
        case m.A.DISCOVERABLE:
            T = {
                verificationDirty: D(e, i),
                guildDirty: n || I.Z.hasChanges()
            };
    }
}
function y() {
    if (null == I.Z.getGuildId() || null == i) return !1;
    (i =
        i.joinType === m.A.APPLY
            ? {
                  ...i,
                  pendingVerificationFields: p()
              }
            : {
                  ...i,
                  termRules: S()
              }),
        L();
}
function j(e) {
    let { section: n } = e;
    if (n !== g.pNK.ACCESS) return R();
    let t = I.Z.getGuild();
    if (null == t) return !1;
    let r = x(t);
    (i = A(t, r)), L();
}
function R() {
    (i = void 0),
        (T = {
            verificationDirty: !1,
            guildDirty: !1
        });
}
function b() {
    if ((null == i ? void 0 : i.joinType) !== m.A.DISCOVERABLE) return !1;
    (i = {
        ...i,
        settingsView: v()
    }),
        L();
}
class F extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, f.Z, h.ZP),
            this.syncWith([I.Z, f.Z], () => {
                L();
            });
    }
    get pendingState() {
        return i;
    }
    get dirtyState() {
        return T;
    }
    showNotice() {
        return T.guildDirty || T.verificationDirty;
    }
}
(o = 'GuildSettingsJoinRulesStore'),
    (u = 'displayName') in (l = F)
        ? Object.defineProperty(l, u, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[u] = o),
    (n.Z = new F(d.Z, {
        GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
            let { guildId: n, requireTerms: t, termRules: r } = e;
            if (n !== I.Z.getGuildId() || ((null == i ? void 0 : i.joinType) !== m.A.INVITE && (null == i ? void 0 : i.joinType) !== m.A.DISCOVERABLE)) return !1;
            (i = {
                ...i,
                requireTerms: t,
                termRules: r
            }),
                L();
        },
        GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
            let { guildId: n, formFields: t } = e;
            if (n !== I.Z.getGuildId() || (null == i ? void 0 : i.joinType) !== m.A.APPLY) return !1;
            (i = {
                ...i,
                pendingVerificationFields: t
            }),
                L();
        },
        GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
            let { guildId: n, joinType: t } = e,
                r = I.Z.getGuild();
            if (n !== (null == r ? void 0 : r.id)) return !1;
            (i = A(r, t)), L();
        },
        MEMBER_VERIFICATION_FORM_UPDATE: y,
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: y,
        GUILD_SETTINGS_INIT: j,
        GUILD_SETTINGS_SET_SECTION: j,
        GUILD_SETTINGS_CLOSE: R,
        DISCOVER_CHECKLIST_FETCH_SUCCESS: b,
        GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: b,
        GUILD_SETTINGS_SUBMIT_SUCCESS: b
    }));
