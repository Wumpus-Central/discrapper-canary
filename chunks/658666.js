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
    h = t(246364),
    E = t(999382),
    I = t(118215),
    m = t(384632),
    _ = t(386885),
    C = t(981631),
    g = t(388032);
let T = !1;
function v() {
    let e = E.Z.getGuild();
    if (null == e) return;
    let n = I.ZP.getDiscoveryChecklist(e.id);
    if (null != n) return (0, _.V)(e, n);
}
function N() {
    var e;
    let n = E.Z.getGuildId();
    return null == n ? null : null === (e = f.Z.get(n)) || void 0 === e ? void 0 : e.formFields;
}
function p() {
    let e = N();
    if (null == e) return;
    let n = e.find((e) => (0, h.J)(e));
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
function x() {
    let e = N();
    if (null == e) return;
    let n = e.find((e) => (0, h.J)(e));
    if (0 === e.length || (1 === e.length && null != n)) {
        let e = {
            field_type: h.QJ.TEXT_INPUT,
            label: g.intl.string(g.t['83ZsRU']),
            required: !0
        };
        return null != n ? [n, e] : [e];
    }
    return [...e];
}
function S(e) {
    return e.hasFeature(C.oNc.DISCOVERABLE) ? m.A.DISCOVERABLE : e.hasFeature(C.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? m.A.APPLY : m.A.INVITE;
}
function A(e, n) {
    let t = e.hasFeature(C.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || e.hasFeature(C.oNc.CLAN);
    switch (n) {
        case m.A.INVITE:
            return {
                joinType: m.A.INVITE,
                requireTerms: t,
                termRules: p()
            };
        case m.A.APPLY:
            return {
                joinType: m.A.APPLY,
                pendingVerificationFields: x()
            };
        case m.A.DISCOVERABLE:
            return {
                joinType: m.A.DISCOVERABLE,
                settingsView: v(),
                requireTerms: t,
                termRules: p()
            };
    }
}
function L(e, n) {
    var t, i, r, l;
    let { requireTerms: u, termRules: o } = n,
        a = e.hasFeature(C.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== u,
        c = null !== (r = null === (i = N()) || void 0 === i ? void 0 : null === (t = i.find((e) => (0, h.J)(e))) || void 0 === t ? void 0 : t.values) && void 0 !== r ? r : [],
        d = null !== (l = null == o ? void 0 : o.map((e) => e.value.trim()).filter((e) => '' !== e)) && void 0 !== l ? l : [],
        f = !s().isEqual(c, d);
    return a || f;
}
function j() {
    let e = E.Z.getGuild();
    if (null == e || null == i) {
        T = !1;
        return;
    }
    if (S(e) !== i.joinType) {
        T = !0;
        return;
    }
    switch (i.joinType) {
        case m.A.INVITE:
            T = L(e, i);
            break;
        case m.A.APPLY:
            let n = N(),
                { pendingVerificationFields: t } = i;
            T = null == n ? null != t : null != t && !s().isEqual(n, t);
            break;
        case m.A.DISCOVERABLE:
            T = E.Z.hasChanges() || L(e, i);
    }
}
function b() {
    if (null == E.Z.getGuildId() || null == i) return !1;
    (i =
        i.joinType === m.A.APPLY
            ? {
                  ...i,
                  pendingVerificationFields: x()
              }
            : {
                  ...i,
                  termRules: p()
              }),
        j();
}
function R(e) {
    let { section: n } = e;
    if (n !== C.pNK.ACCESS) return D();
    let t = E.Z.getGuild();
    if (null == t) return !1;
    let r = S(t);
    (i = A(t, r)), j();
}
function D() {
    (i = void 0), (T = !1);
}
class F extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, f.Z, I.ZP),
            this.syncWith([E.Z, f.Z], () => {
                j();
            });
    }
    get pendingState() {
        return i;
    }
    showNotice() {
        return T;
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
            if (n !== E.Z.getGuildId() || ((null == i ? void 0 : i.joinType) !== m.A.INVITE && (null == i ? void 0 : i.joinType) !== m.A.DISCOVERABLE)) return !1;
            (i = {
                ...i,
                requireTerms: t,
                termRules: r
            }),
                j();
        },
        GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
            let { guildId: n, formFields: t } = e;
            if (n !== E.Z.getGuildId() || (null == i ? void 0 : i.joinType) !== m.A.APPLY) return !1;
            (i = {
                ...i,
                pendingVerificationFields: t
            }),
                j();
        },
        GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
            let { guildId: n, joinType: t } = e,
                r = E.Z.getGuild();
            if (n !== (null == r ? void 0 : r.id)) return !1;
            (i = A(r, t)), j();
        },
        MEMBER_VERIFICATION_FORM_UPDATE: b,
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: b,
        GUILD_SETTINGS_INIT: R,
        GUILD_SETTINGS_SET_SECTION: R,
        GUILD_SETTINGS_CLOSE: D,
        DISCOVER_CHECKLIST_FETCH_SUCCESS: function () {
            if ((null == i ? void 0 : i.joinType) !== m.A.DISCOVERABLE || null != i.settingsView) return !1;
            (i = {
                ...i,
                settingsView: v()
            }),
                j();
        }
    }));
