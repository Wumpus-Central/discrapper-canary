let n;
t.d(i, { A: () => V }), t(896048), t(733351);
var l,
    r = t(735438),
    s = t.n(r),
    u = t(311907),
    a = t(73153),
    o = t(60175),
    d = t(513461),
    c = t(837011),
    E = t(555337),
    f = t(834720),
    I = t(894222),
    _ = t(716610),
    S = t(652215),
    A = t(985018);
function g(e, i, t) {
    return (
        i in e
            ? Object.defineProperty(e, i, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[i] = t),
        e
    );
}
function h(e) {
    for (var i = 1; i < arguments.length; i++) {
        var t = null != arguments[i] ? arguments[i] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            n.forEach(function (i) {
                g(e, i, t[i]);
            });
    }
    return e;
}
function T(e, i) {
    return (
        (i = null != i ? i : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : (function (e, i) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(i)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              }),
        e
    );
}
let m = {
        verificationDirty: !1,
        guildDirty: !1,
        profileDirty: !1,
        isAgeRestrictedDirty: !1,
    },
    v = m;
function y() {
    let e = E.A.getGuild();
    if (null == e) return;
    let i = f.Ay.getDiscoveryChecklist(e.id);
    if (null != i) return (0, _.l)(e, i);
}
function p() {
    var e;
    let i = E.A.getGuildId();
    return null == i ? null : null == (e = o.A.get(i)) ? void 0 : e.formFields;
}
function C() {
    let e = p();
    if (null == e) return;
    let i = e.find((e) => (0, d.i7)(e));
    return null == i
        ? [
              {
                  id: (0, r.uniqueId)(),
                  value: "",
              },
          ]
        : i.values.map((e) => ({
              id: (0, r.uniqueId)(),
              value: e,
          }));
}
function D() {
    let e = p();
    if (null == e) return;
    let i = e.find((e) => (0, d.i7)(e));
    if (0 === e.length || (1 === e.length && null != i)) {
        let e = {
            field_type: d.rX.TEXT_INPUT,
            label: A.intl.string(A.t["83ZsRS"]),
            required: !0,
        };
        return null != i ? [i, e] : [e];
    }
    return [...e];
}
function N(e) {
    return e.features.has(S.GuildFeatures.DISCOVERABLE)
        ? I.J.DISCOVERABLE
        : e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)
          ? I.J.APPLY
          : I.J.INVITE;
}
function O(e, i) {
    let t = e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED),
        n = e.ownerConfiguredContentLevel === S.ftr.AGE_RESTRICTED;
    switch (i) {
        case I.J.INVITE:
            return {
                joinType: I.J.INVITE,
                requireTerms: t,
                termRules: C(),
                isAgeRestricted: n,
            };
        case I.J.APPLY:
            return {
                joinType: I.J.APPLY,
                pendingVerificationFields: D(),
                isAgeRestricted: n,
            };
        case I.J.DISCOVERABLE:
            return {
                joinType: I.J.DISCOVERABLE,
                settingsView: y(),
                requireTerms: t,
                termRules: C(),
                isAgeRestricted: n,
            };
    }
}
function R(e, i) {
    var t, n, l, r;
    let { requireTerms: u, termRules: a } = i;
    if (
        e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ||
        e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) !== u
    )
        return !0;
    let o = null != (t = p()) ? t : [];
    if (o.length > 1) return !0;
    let c = null != (n = null == (r = o.find((e) => (0, d.i7)(e))) ? void 0 : r.values) ? n : [],
        E = null != (l = null == a ? void 0 : a.map((e) => e.value.trim()).filter((e) => "" !== e)) ? l : [];
    return !s().isEqual(c, E);
}
function L() {
    let e = E.A.getGuild();
    if (null == e || null == n) {
        v = m;
        return;
    }
    let i = N(e) !== n.joinType,
        t = (e.ownerConfiguredContentLevel === S.ftr.AGE_RESTRICTED) !== n.isAgeRestricted;
    switch (n.joinType) {
        case I.J.INVITE:
            v = {
                verificationDirty: R(e, n),
                guildDirty: i,
                profileDirty: !1,
                isAgeRestrictedDirty: t,
            };
            break;
        case I.J.APPLY:
            var l, r;
            let u,
                a = p(),
                { pendingVerificationFields: o } = n,
                d =
                    !e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) ||
                    !e.features.has(S.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            (u = null == a ? null != o : null != o && !s().isEqual(a, o)),
                (v = {
                    verificationDirty: d || u,
                    guildDirty: i,
                    profileDirty:
                        (null == (l = c.A.getProfile(e.id)) ? void 0 : l.visibility) !==
                        (null == (r = E.A.getGuildProfile()) ? void 0 : r.visibility),
                    isAgeRestrictedDirty: t,
                });
            break;
        case I.J.DISCOVERABLE:
            v = {
                verificationDirty: R(e, n),
                guildDirty: i || E.A.hasChanges(),
                profileDirty: !1,
                isAgeRestrictedDirty: t,
            };
    }
}
function b() {
    if (null == E.A.getGuildId() || null == n) return !1;
    (n = n.joinType === I.J.APPLY ? T(h({}, n), { pendingVerificationFields: D() }) : T(h({}, n), { termRules: C() })),
        L();
}
function P(e) {
    let { section: i, subsection: t } = e;
    if (i !== S.BEX.ACCESS) return j();
    let l = E.A.getGuild();
    if (null == l) return !1;
    let r = t === S.nd0.ACCESS_DISCOVERABLE && l.features.has(S.GuildFeatures.COMMUNITY) ? I.J.DISCOVERABLE : N(l);
    (n = O(l, r)), L();
}
function j() {
    (n = void 0), (v = m);
}
function G() {
    if ((null == n ? void 0 : n.joinType) !== I.J.DISCOVERABLE) return !1;
    (n = T(h({}, n), { settingsView: y() })), L();
}
class F extends (l = u.Ay.Store) {
    initialize() {
        this.waitFor(f.Ay, c.A, E.A, o.A),
            this.syncWith([E.A, o.A], () => {
                L();
            });
    }
    get pendingState() {
        return n;
    }
    get dirtyState() {
        return v;
    }
    showNotice() {
        return v.guildDirty || v.verificationDirty || v.profileDirty || v.isAgeRestrictedDirty;
    }
}
g(F, "displayName", "GuildSettingsJoinRulesStore");
let V = new F(a.h, {
    GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES: function (e) {
        let { guildId: i, requireTerms: t, termRules: l } = e;
        if (
            i !== E.A.getGuildId() ||
            ((null == n ? void 0 : n.joinType) !== I.J.INVITE && (null == n ? void 0 : n.joinType) !== I.J.DISCOVERABLE)
        )
            return !1;
        (n = T(h({}, n), {
            requireTerms: t,
            termRules: l,
        })),
            L();
    },
    GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS: function (e) {
        let { guildId: i, formFields: t } = e;
        if (i !== E.A.getGuildId() || (null == n ? void 0 : n.joinType) !== I.J.APPLY) return !1;
        (n = T(h({}, n), { pendingVerificationFields: t })), L();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE: function (e) {
        let { guildId: i, joinType: t } = e,
            l = E.A.getGuild();
        if (i !== (null == l ? void 0 : l.id)) return !1;
        (n = O(l, t)), L();
    },
    GUILD_SETTINGS_JOIN_RULES_SET_CONTENT_LEVEL: function (e) {
        let { guildId: i, isAgeRestricted: t } = e,
            l = E.A.getGuild();
        if (i !== (null == l ? void 0 : l.id)) return !1;
        (n = T(h({}, null != n ? n : O(l, N(l))), { isAgeRestricted: t })), L();
    },
    MEMBER_VERIFICATION_FORM_UPDATE: b,
    MEMBER_VERIFICATION_FORM_FETCH_FAIL: b,
    GUILD_SETTINGS_INIT: P,
    GUILD_SETTINGS_SET_SECTION: P,
    GUILD_SETTINGS_CLOSE: j,
    DISCOVER_CHECKLIST_FETCH_SUCCESS: G,
    GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: G,
    GUILD_SETTINGS_SUBMIT_SUCCESS: G,
});
