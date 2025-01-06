let e;
i(47120);
var r,
    l,
    s,
    u,
    o = i(392711),
    a = i.n(o),
    c = i(442837),
    d = i(570140),
    g = i(944163),
    E = i(246364),
    I = i(999382),
    f = i(118215),
    h = i(654351),
    T = i(384632),
    N = i(981631),
    C = i(388032);
let _ = !1;
function m() {
    let t = I.Z.getGuild();
    if (null == t) return;
    let n = f.ZP.getDiscoveryChecklist(t.id);
    if (null != n) return (0, h.TJ)(t, n);
}
function S() {
    var t;
    let n = I.Z.getGuildId();
    return null == n ? null : null === (t = g.Z.get(n)) || void 0 === t ? void 0 : t.formFields;
}
function A() {
    let t = S();
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
function p() {
    let t = S();
    if (null == t) return;
    let n = t.find((t) => (0, E.J)(t));
    if (0 === t.length || (1 === t.length && null != n)) {
        let t = {
            field_type: E.QJ.TEXT_INPUT,
            label: C.intl.string(C.t['83ZsRU']),
            required: !0
        };
        return null != n ? [n, t] : [t];
    }
    return [...t];
}
function v(t) {
    return t.hasFeature(N.oNc.DISCOVERABLE) ? T.A.DISCOVERABLE : t.hasFeature(N.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) ? T.A.APPLY : T.A.INVITE;
}
function x(t, n) {
    switch (n) {
        case T.A.INVITE:
            return {
                joinType: T.A.INVITE,
                requireTerms: t.hasFeature(N.oNc.MEMBER_VERIFICATION_GATE_ENABLED) || t.hasFeature(N.oNc.CLAN),
                termRules: A()
            };
        case T.A.APPLY:
            return {
                joinType: T.A.APPLY,
                pendingVerificationFields: p()
            };
        case T.A.DISCOVERABLE:
            return {
                joinType: T.A.DISCOVERABLE,
                settingsView: m()
            };
    }
}
function R() {
    let t = I.Z.getGuild();
    if (null == t || null == e) {
        _ = !1;
        return;
    }
    if (v(t) !== e.joinType) {
        _ = !0;
        return;
    }
    switch (e.joinType) {
        case T.A.INVITE:
            var n, i, r, l;
            let { requireTerms: s, termRules: u } = e,
                o = t.hasFeature(N.oNc.MEMBER_VERIFICATION_GATE_ENABLED) !== s,
                c = null !== (r = null === (i = S()) || void 0 === i ? void 0 : null === (n = i.find((t) => (0, E.J)(t))) || void 0 === n ? void 0 : n.values) && void 0 !== r ? r : [],
                d = null !== (l = null == u ? void 0 : u.map((t) => t.value.trim()).filter((t) => '' !== t)) && void 0 !== l ? l : [],
                g = !a().isEqual(c, d);
            _ = o || g;
            break;
        case T.A.APPLY:
            let f = S(),
                { pendingVerificationFields: h } = e;
            _ = null == f ? null != h : null != h && !a().isEqual(f, h);
            break;
        case T.A.DISCOVERABLE:
            _ = !1;
    }
}
function D() {
    let t = I.Z.getGuild();
    if (null == t) return !1;
    let n = v(t);
    (e = x(t, n)), R();
}
function L() {
    if (null == I.Z.getGuildId()) return !1;
    (null == e ? void 0 : e.joinType) === T.A.APPLY
        ? (e = {
              ...e,
              pendingVerificationFields: p()
          })
        : (null == e ? void 0 : e.joinType) === T.A.INVITE &&
          (e = {
              ...e,
              termRules: A()
          }),
        R();
}
function j(t) {
    let { section: n } = t;
    return n !== N.pNK.ACCESS ? G() : D();
}
function G() {
    (e = void 0), (_ = !1);
}
class O extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, g.Z, f.ZP),
            this.syncWith([I.Z, g.Z], () => {
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
    (n.Z = new O(d.Z, {
        GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (t) {
            let { guildId: n, requireTerms: i, termRules: r } = t;
            if (n !== I.Z.getGuildId() || (null == e ? void 0 : e.joinType) !== T.A.INVITE) return !1;
            (e = {
                ...e,
                requireTerms: i,
                termRules: r
            }),
                R();
        },
        GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (t) {
            let { guildId: n, formFields: i } = t;
            if (n !== I.Z.getGuildId() || (null == e ? void 0 : e.joinType) !== T.A.APPLY) return !1;
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
        GUILD_SETTINGS_INIT: j,
        GUILD_SETTINGS_SET_SECTION: j,
        GUILD_SETTINGS_CLOSE: G,
        DISCOVER_CHECKLIST_FETCH_SUCCESS: function () {
            if ((null == e ? void 0 : e.joinType) !== T.A.DISCOVERABLE || null != e.settingsView) return !1;
            (e = {
                ...e,
                settingsView: m()
            }),
                R();
        }
    }));
