let i;
t(47120);
var r,
    l,
    u,
    a,
    o = t(392711),
    s = t.n(o),
    c = t(442837),
    d = t(570140),
    E = t(944163),
    f = t(246364),
    I = t(999382),
    h = t(118215),
    m = t(384632),
    _ = t(386885),
    C = t(981631),
    g = t(388032);
let T = {
    verificationDirty: !1,
    guildDirty: !1
};
function N() {
    let e = I.Z.getGuild();
    if (null == e) return;
    let n = h.ZP.getDiscoveryChecklist(e.id);
    if (null != n) return (0, _.V)(e, n);
}
function v() {
    var e;
    let n = I.Z.getGuildId();
    return null == n ? null : null === (e = E.Z.get(n)) || void 0 === e ? void 0 : e.formFields;
}
function A() {
    let e = v();
    if (null == e) return;
    let n = e.find((e) => (0, f.J)(e));
    return null == n
        ? [
              {
                  id: (0, o.uniqueId)(),
                  value: ''
              }
          ]
        : n.values.map((e) => ({
              id: (0, o.uniqueId)(),
              value: e
          }));
}
function S() {
    let e = v();
    if (null == e) return;
    let n = e.find((e) => (0, f.J)(e));
    if (0 === e.length || (1 === e.length && null != n)) {
        let e = {
            field_type: f.QJ.TEXT_INPUT,
            label: g.intl.string(g.t['83ZsRU']),
            required: !0
        };
        return null != n ? [n, e] : [e];
    }
    return [...e];
}
function p(e) {
    return e.hasFeature(C.oNc.DISCOVERABLE) ? m.A.DISCOVERABLE : e.hasFeature(C.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && e.hasFeature(C.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? m.A.APPLY : m.A.INVITE;
}
function x(e, n) {
    let t = e.hasFeature(C.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(C.oNc.CLAN);
    switch (n) {
        case m.A.INVITE:
            return {
                joinType: m.A.INVITE,
                requireTerms: t,
                termRules: A()
            };
        case m.A.APPLY:
            return {
                joinType: m.A.APPLY,
                pendingVerificationFields: S()
            };
        case m.A.DISCOVERABLE:
            return {
                joinType: m.A.DISCOVERABLE,
                settingsView: N(),
                requireTerms: t,
                termRules: A()
            };
    }
}
function D(e, n) {
    var t, i, r, l;
    let { requireTerms: u, termRules: a } = n;
    if (e.hasFeature(C.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || e.hasFeature(C.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== u) return !0;
    let o = null !== (i = v()) && void 0 !== i ? i : [];
    if (o.length > 1) return !0;
    let c = null !== (r = null === (t = o.find((e) => (0, f.J)(e))) || void 0 === t ? void 0 : t.values) && void 0 !== r ? r : [],
        d = null !== (l = null == a ? void 0 : a.map((e) => e.value.trim()).filter((e) => '' !== e)) && void 0 !== l ? l : [];
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
    let n = p(e) !== i.joinType;
    switch (i.joinType) {
        case m.A.INVITE:
            T = {
                verificationDirty: D(e, i),
                guildDirty: n
            };
            break;
        case m.A.APPLY:
            let t;
            let r = v(),
                { pendingVerificationFields: l } = i,
                u = !e.hasFeature(C.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || !e.hasFeature(C.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (t = null == r ? null != l : null != l && !s().isEqual(r, l)),
                (T = {
                    verificationDirty: u || t,
                    guildDirty: n
                });
            break;
        case m.A.DISCOVERABLE:
            T = {
                verificationDirty: D(e, i),
                guildDirty: n || I.Z.hasChanges()
            };
    }
}
function R() {
    if (null == I.Z.getGuildId() || null == i) return !1;
    (i =
        i.joinType === m.A.APPLY
            ? {
                  ...i,
                  pendingVerificationFields: S()
              }
            : {
                  ...i,
                  termRules: A()
              }),
        L();
}
function y(e) {
    let { section: n } = e;
    if (n !== C.pNK.ACCESS) return j();
    let t = I.Z.getGuild();
    if (null == t) return !1;
    let r = p(t);
    (i = x(t, r)), L();
}
function j() {
    (i = void 0),
        (T = {
            verificationDirty: !1,
            guildDirty: !1
        });
}
function F() {
    if ((null == i ? void 0 : i.joinType) !== m.A.DISCOVERABLE) return !1;
    (i = {
        ...i,
        settingsView: N()
    }),
        L();
}
class b extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, E.Z, h.ZP),
            this.syncWith([I.Z, E.Z], () => {
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
(a = 'GuildSettingsJoinRulesStore'),
    (u = 'displayName') in (l = b)
        ? Object.defineProperty(l, u, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[u] = a),
    (n.Z = new b(d.Z, {
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
            (i = x(r, t)), L();
        },
        MEMBER_VERIFICATION_FORM_UPDATE: R,
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: R,
        GUILD_SETTINGS_INIT: y,
        GUILD_SETTINGS_SET_SECTION: y,
        GUILD_SETTINGS_CLOSE: j,
        DISCOVER_CHECKLIST_FETCH_SUCCESS: F,
        GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: F,
        GUILD_SETTINGS_SUBMIT_SUCCESS: F
    }));
