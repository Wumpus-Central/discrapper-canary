let r, i;
n.r(t), n.d(t, { default: () => X }), n(539854), n(388685);
var a,
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(308063),
    d = n(496675),
    f = n(855674),
    p = n(999382),
    _ = n(981631);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
let g = [],
    E = [],
    b = null,
    y = null,
    O = null,
    v = !1,
    S = !1,
    I = _.QZA.CLOSED,
    T = {},
    C = !1,
    A = null;
function N(e) {
    let { section: t } = e;
    if (t !== _.pNK.INTEGRATIONS) return !1;
    if (null == r) {
        let e = p.Z.getGuildId();
        null != e && (u.Z.fetchForGuild(e), (v = !0)), R(!1);
    }
}
function P(e) {
    let { section: t, sectionId: n } = e;
    (i = t), (A = n);
}
function R(e) {
    if (null != (r = p.Z.getProps().guild) && d.Z.can(_.Plq.MANAGE_GUILD, r)) {
        let e = p.Z.getProps().integrations;
        null == e && (S = !0), (g = null != e ? e : []);
    } else g = [];
    if (((E = null != r && d.Z.can(_.Plq.MANAGE_WEBHOOKS, r) ? f.Z.getWebhooksForGuild(r.id) : []), !e && null != y)) {
        let e = K(y.id);
        null != e && (y = e);
    }
    if (null != O) {
        let e = z(O.id);
        null != e && (O = e);
    }
    (b = null), (I = _.QZA.OPEN), (T = {}), (C = !1);
}
function D() {
    (r = null), (g = []), (E = []), (b = null), (y = null), (O = null), (I = _.QZA.CLOSED), (C = !1);
}
let w = s().debounce(() => {
    C &&
        (null != y ? s().isEqual(y, K(y.id)) && (C = !1) : null != O && s().isEqual(O, z(O.id)) && (C = !1),
        C || Q.emitChange());
}, 500);
function x(e) {
    let { settings: t } = e;
    if (null == y) return !1;
    (y = h({}, y)),
        null != t.enableEmoticons &&
            y.enable_emoticons !== t.enableEmoticons &&
            ((y.enable_emoticons = t.enableEmoticons), (C = !0)),
        null != t.expireBehavior &&
            y.expire_behavior !== t.expireBehavior &&
            ((y.expire_behavior = t.expireBehavior), (C = !0)),
        null != t.expireGracePeriod &&
            y.expire_grace_period !== t.expireGracePeriod &&
            ((y.expire_grace_period = t.expireGracePeriod), (C = !0)),
        C && w();
}
function L(e) {
    let { settings: t } = e;
    if (null == O) return !1;
    (O = h({}, O)),
        null != t.name && O.name !== t.name && ((O.name = t.name), (C = !0)),
        void 0 !== t.avatar && O.avatar !== t.avatar && ((O.avatar = t.avatar), (C = !0)),
        null != t.channelId && O.channel_id !== t.channelId && ((O.channel_id = t.channelId), (C = !0)),
        C && w();
}
function j() {
    (I = _.QZA.SUBMITTING), (T = {});
}
function M(e) {
    var t;
    if (I !== _.QZA.SUBMITTING) return !1;
    (I = _.QZA.OPEN), (T = null != (t = e.errors) ? t : {});
}
function k(e) {
    let { guildId: t, integrations: n } = e;
    if (null == r || t !== r.id || I === _.QZA.SUBMITTING) return !1;
    for (let e of ((S = !1), n))
        if (
            null ==
            g.find((t) => {
                let { id: n } = t;
                if (n === e.id) return !0;
            })
        ) {
            var i, a;
            g.push(e),
                e.type === (null == y ? void 0 : y.type) &&
                    (null == (i = e.account) ? void 0 : i.id) === (null == (a = y.account) ? void 0 : a.id) &&
                    (y = e);
        }
    for (let e = g.length - 1; e >= 0; e--) {
        let t = g[e],
            r = n.find((e) => {
                let { id: n } = e;
                if (n === t.id) return !0;
            });
        if (null != r) {
            let n = h({}, t, r);
            (null == y ? void 0 : y.id) === n.id && (!1 === n.enabled ? (y = null) : C || (y = n)), (g[e] = n);
        } else (null == y ? void 0 : y.id) === t.id && (y = null), g.splice(e, 1);
    }
    (g = [...g]), w();
}
function U(e) {
    let { guildId: t, channelId: n, webhooks: i } = e;
    if (((v = !1), null != r && t === r.id && null != i && I !== _.QZA.SUBMITTING)) {
        for (let e = E.length - 1; e >= 0; e--) {
            let t = E[e];
            if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
            let r = i.find((e) => {
                let { id: n } = e;
                if (n === t.id) return !0;
            });
            if (null != r) {
                let n = h({}, t, r);
                (E[e] = n), C || (null == O ? void 0 : O.id) !== n.id || (O = n);
            } else (null == O ? void 0 : O.id) === t.id && (O = null), E.splice(e, 1);
        }
        for (let e of i)
            null ==
                E.find((t) => {
                    let { id: n } = t;
                    if (n === e.id) return !0;
                }) && E.push(e);
        (E = [...E]), w();
    }
}
function G(e) {
    let { commandId: t } = e;
    (b = t), (y = null), (O = null), (T = {}), (C = !0);
}
function Z(e) {
    let { commandId: t } = e;
    if (null == b || b !== t) return !1;
    (b = null), (T = {}), (C = !1);
}
function B(e) {
    let { integrationId: t } = e,
        n = K(t);
    if (null == n) return !1;
    (y = n), (b = null), (O = null), (T = {}), (C = !1);
}
function F() {
    (y = null), (T = {}), (C = !1);
}
function V(e) {
    let { webhookId: t } = e,
        n = z(t);
    if (null == n) return !1;
    (O = n), (b = null), (y = null), (T = {}), (C = !1);
}
function H() {
    (O = null), (T = {}), (C = !1);
}
function Y() {
    return R(!1);
}
function W() {
    return R(!0);
}
function K(e) {
    return g.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function z(e) {
    return E.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class q extends (a = l.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, f.Z, d.Z);
    }
    hasChanges() {
        return C;
    }
    get guild() {
        return r;
    }
    get integrations() {
        return g;
    }
    get webhooks() {
        return E;
    }
    get editedCommandId() {
        return b;
    }
    get editedIntegration() {
        return y;
    }
    get editedWebhook() {
        return O;
    }
    get formState() {
        return I;
    }
    getErrors() {
        return T;
    }
    getSection() {
        return null != i ? i : _.b4C.OVERVIEW;
    }
    getSectionId() {
        return A;
    }
    getIntegration(e) {
        return K(e);
    }
    getWebhook(e) {
        return z(e);
    }
    isFetching() {
        return S || v;
    }
    showNotice() {
        return this.hasChanges();
    }
    getApplication(e) {
        var t;
        return null ==
            (t = g.find((t) => {
                var n;
                return (null == (n = t.application) ? void 0 : n.id) === e;
            }))
            ? void 0
            : t.application;
    }
}
m(q, "displayName", "GuildSettingsIntegrationsStore");
let Q = new q(
        c.Z,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: Y,
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: W,
                  GUILD_SETTINGS_INIT: N,
                  GUILD_SETTINGS_SET_SECTION: N,
                  INTEGRATION_SETTINGS_SET_SECTION: P,
                  INTEGRATION_SETTINGS_START_EDITING_COMMAND: G,
                  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: Z,
                  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: B,
                  INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: F,
                  INTEGRATION_SETTINGS_UPDATE_INTEGRATION: x,
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: L,
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: V,
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: H,
                  GUILD_SETTINGS_CLOSE: D,
                  GUILD_SETTINGS_LOADED_INTEGRATIONS: k,
                  WEBHOOKS_UPDATE: U,
                  INTEGRATION_SETTINGS_SUBMITTING: j,
                  INTEGRATION_SETTINGS_SAVE_FAILURE: M,
              },
    ),
    X = Q;
