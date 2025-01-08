let e;
i(47120);
var r,
    l,
    s,
    u,
    o = i(392711),
    a = i.n(o),
    c = i(442837),
    g = i(570140),
    d = i(944163),
    E = i(246364),
    I = i(999382),
    f = i(118215),
    h = i(654351),
    N = i(384632),
    T = i(981631),
    m = i(388032);
let _ = !1;
function C() {
    let t = I.Z.getGuild();
    if (null == t) return;
    let n = f.ZP.getDiscoveryChecklist(t.id);
    if (null != n) return (0, h.TJ)(t, n);
}
function A() {
    var t;
    let n = I.Z.getGuildId();
    return null == n ? null : null === (t = d.Z.get(n)) || void 0 === t ? void 0 : t.formFields;
}
function S() {
    let t = A();
    if (null == t) return;
    let n = t.find((t) => (0, E.J)(t));
    return null == n
        ? [
              {
                  id: (0, o.uniqueId)(),
                  value: ''
              }
          ]
        : n.values.map((t) => ({
              id: (0, o.uniqueId)(),
              value: t
          }));
}
function v() {
    let t = A();
    if (null == t) return;
    let n = t.find((t) => (0, E.J)(t));
    if (0 === t.length || (1 === t.length && null != n)) {
        let t = {
            field_type: E.QJ.TEXT_INPUT,
            label: m.intl.string(m.t['83ZsRU']),
            required: !0
        };
        return null != n ? [n, t] : [t];
    }
    return [...t];
}
function p(t) {
    return t.hasFeature(T.oNc.DISCOVERABLE) ? N.A.DISCOVERABLE : t.hasFeature(T.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? N.A.APPLY : N.A.INVITE;
}
function x(t, n) {
    let i = t.hasFeature(T.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || t.hasFeature(T.oNc.CLAN);
    switch (n) {
        case N.A.INVITE:
            return {
                joinType: N.A.INVITE,
                requireTerms: i,
                termRules: S()
            };
        case N.A.APPLY:
            return {
                joinType: N.A.APPLY,
                pendingVerificationFields: v()
            };
        case N.A.DISCOVERABLE:
            return {
                joinType: N.A.DISCOVERABLE,
                settingsView: C(),
                requireTerms: i,
                termRules: S()
            };
    }
}
function R() {
    let t = I.Z.getGuild();
    if (null == t || null == e) {
        _ = !1;
        return;
    }
    if (p(t) !== e.joinType) {
        _ = !0;
        return;
    }
    switch (e.joinType) {
        case N.A.INVITE:
            var n, i, r, l;
            let { requireTerms: s, termRules: u } = e,
                o = t.hasFeature(T.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== s,
                c = null !== (r = null === (i = A()) || void 0 === i ? void 0 : null === (n = i.find((t) => (0, E.J)(t))) || void 0 === n ? void 0 : n.values) && void 0 !== r ? r : [],
                g = null !== (l = null == u ? void 0 : u.map((t) => t.value.trim()).filter((t) => '' !== t)) && void 0 !== l ? l : [],
                d = !a().isEqual(c, g);
            _ = o || d;
            break;
        case N.A.APPLY:
            let f = A(),
                { pendingVerificationFields: h } = e;
            _ = null == f ? null != h : null != h && !a().isEqual(f, h);
            break;
        case N.A.DISCOVERABLE:
            _ = !1;
    }
}
function D() {
    let t = I.Z.getGuild();
    if (null == t) return !1;
    let n = p(t);
    (e = x(t, n)), R();
}
function L() {
    if (null == I.Z.getGuildId() || null == e) return !1;
    (e =
        e.joinType === N.A.APPLY
            ? {
                  ...e,
                  pendingVerificationFields: v()
              }
            : {
                  ...e,
                  termRules: S()
              }),
        R();
}
function G(t) {
    let { section: n } = t;
    return n !== T.pNK.ACCESS ? j() : D();
}
function j() {
    (e = void 0), (_ = !1);
}
class O extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, d.Z, f.ZP),
            this.syncWith([I.Z, d.Z], () => {
                R();
            });
    }
    get pendingState() {
        return e;
    }
    showNotice() {
        return _;
    }
}
(u = 'GuildSettingsJoinRulesStore'),
    (s = 'displayName') in (l = O)
        ? Object.defineProperty(l, s, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[s] = u),
    (n.Z = new O(g.Z, {
        GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (t) {
            let { guildId: n, requireTerms: i, termRules: r } = t;
            if (n !== I.Z.getGuildId() || ((null == e ? void 0 : e.joinType) !== N.A.INVITE && (null == e ? void 0 : e.joinType) !== N.A.DISCOVERABLE)) return !1;
            (e = {
                ...e,
                requireTerms: i,
                termRules: r
            }),
                R();
        },
        GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (t) {
            let { guildId: n, formFields: i } = t;
            if (n !== I.Z.getGuildId() || (null == e ? void 0 : e.joinType) !== N.A.APPLY) return !1;
            (e = {
                ...e,
                pendingVerificationFields: i
            }),
                R();
        },
        GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (t) {
            let { guildId: n, joinType: i } = t,
                r = I.Z.getGuild();
            if (n !== (null == r ? void 0 : r.id)) return !1;
            (e = x(r, i)), R();
        },
        MEMBER_VERIFICATION_FORM_UPDATE: L,
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: L,
        GUILD_SETTINGS_JOIN_RULES_RESET: function () {
            return D();
        },
        GUILD_SETTINGS_INIT: G,
        GUILD_SETTINGS_SET_SECTION: G,
        GUILD_SETTINGS_CLOSE: j,
        DISCOVER_CHECKLIST_FETCH_SUCCESS: function () {
            if ((null == e ? void 0 : e.joinType) !== N.A.DISCOVERABLE || null != e.settingsView) return !1;
            (e = {
                ...e,
                settingsView: C()
            }),
                R();
        }
    }));
