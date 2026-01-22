let r, i;
n.r(t),
    n.d(t, {
        default: () => Q,
    }),
    n(321073),
    n(896048);
var a,
    s = n(735438),
    o = n.n(s),
    l = n(311907),
    c = n(73153),
    u = n(824953),
    d = n(576705),
    f = n(718116),
    p = n(555337),
    _ = n(652215);

function h(e, t, n) {
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

function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = [],
    E = [],
    b = null,
    y = null,
    O = null,
    A = !1,
    v = !1,
    S = _.XlH.CLOSED,
    I = {},
    T = !1,
    C = null;

function N(e) {
    let { section: t } = e;
    if (t !== _.BEX.INTEGRATIONS) return !1;
    if (null == r) {
        let e = p.A.getGuildId();
        null != e && (u.A.fetchForGuild(e), (A = !0)), w(!1);
    }
}

function R(e) {
    let { section: t, sectionId: n } = e;
    (i = t), (C = n);
}

function w(e) {
    if (null != (r = p.A.getProps().guild) && d.A.can(_.xBc.MANAGE_GUILD, r)) {
        let e = p.A.getProps().integrations;
        null == e && (v = !0), (g = null != e ? e : []);
    } else g = [];
    if (((E = null != r && d.A.can(_.xBc.MANAGE_WEBHOOKS, r) ? f.A.getWebhooksForGuild(r.id) : []), !e && null != y)) {
        let e = z(y.id);
        null != e && (y = e);
    }
    if (null != O) {
        let e = q(O.id);
        null != e && (O = e);
    }
    (b = null), (S = _.XlH.OPEN), (I = {}), (T = !1);
}

function P() {
    (r = null), (g = []), (E = []), (b = null), (y = null), (O = null), (S = _.XlH.CLOSED), (T = !1);
}
let D = o().debounce(() => {
    T &&
        (null != y ? o().isEqual(y, z(y.id)) && (T = !1) : null != O && o().isEqual(O, q(O.id)) && (T = !1),
        T || Z.emitChange());
}, 500);

function x(e) {
    let { settings: t } = e;
    if (null == y) return !1;
    (y = m({}, y)),
        null != t.enableEmoticons &&
            y.enable_emoticons !== t.enableEmoticons &&
            ((y.enable_emoticons = t.enableEmoticons), (T = !0)),
        null != t.expireBehavior &&
            y.expire_behavior !== t.expireBehavior &&
            ((y.expire_behavior = t.expireBehavior), (T = !0)),
        null != t.expireGracePeriod &&
            y.expire_grace_period !== t.expireGracePeriod &&
            ((y.expire_grace_period = t.expireGracePeriod), (T = !0)),
        T && D();
}

function L(e) {
    let { settings: t } = e;
    if (null == O) return !1;
    (O = m({}, O)),
        null != t.name && O.name !== t.name && ((O.name = t.name), (T = !0)),
        void 0 !== t.avatar && O.avatar !== t.avatar && ((O.avatar = t.avatar), (T = !0)),
        null != t.channelId && O.channel_id !== t.channelId && ((O.channel_id = t.channelId), (T = !0)),
        T && D();
}

function j() {
    (S = _.XlH.SUBMITTING), (I = {});
}

function M(e) {
    var t;
    if (S !== _.XlH.SUBMITTING) return !1;
    (S = _.XlH.OPEN), (I = null != (t = e.errors) ? t : {});
}

function k(e) {
    let { guildId: t, integrations: n } = e;
    if (null == r || t !== r.id || S === _.XlH.SUBMITTING) return !1;
    for (let e of ((v = !1), n))
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
            let n = m({}, t, r);
            (null == y ? void 0 : y.id) === n.id && (!1 === n.enabled ? (y = null) : T || (y = n)), (g[e] = n);
        } else (null == y ? void 0 : y.id) === t.id && (y = null), g.splice(e, 1);
    }
    (g = [...g]), D();
}

function U(e) {
    let { guildId: t, channelId: n, webhooks: i } = e;
    if (((A = !1), null != r && t === r.id && null != i && S !== _.XlH.SUBMITTING)) {
        for (let e = E.length - 1; e >= 0; e--) {
            let t = E[e];
            if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
            let r = i.find((e) => {
                let { id: n } = e;
                if (n === t.id) return !0;
            });
            if (null != r) {
                let n = m({}, t, r);
                (E[e] = n), T || (null == O ? void 0 : O.id) !== n.id || (O = n);
            } else (null == O ? void 0 : O.id) === t.id && (O = null), E.splice(e, 1);
        }
        for (let e of i)
            null ==
                E.find((t) => {
                    let { id: n } = t;
                    if (n === e.id) return !0;
                }) && E.push(e);
        (E = [...E]), D();
    }
}

function G(e) {
    let { commandId: t } = e;
    (b = t), (y = null), (O = null), (I = {}), (T = !0);
}

function V(e) {
    let { commandId: t } = e;
    if (null == b || b !== t) return !1;
    (b = null), (I = {}), (T = !1);
}

function F(e) {
    let { integrationId: t } = e,
        n = z(t);
    if (null == n) return !1;
    (y = n), (b = null), (O = null), (I = {}), (T = !1);
}

function B() {
    (y = null), (I = {}), (T = !1);
}

function H(e) {
    let { webhookId: t } = e,
        n = q(t);
    if (null == n) return !1;
    (O = n), (b = null), (y = null), (I = {}), (T = !1);
}

function Y() {
    (O = null), (I = {}), (T = !1);
}

function W() {
    return w(!1);
}

function K() {
    return w(!0);
}

function z(e) {
    return g.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}

function q(e) {
    return E.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class X extends (a = l.Ay.Store) {
    initialize() {
        this.waitFor(p.A, f.A, d.A);
    }
    hasChanges() {
        return T;
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
        return S;
    }
    getErrors() {
        return I;
    }
    getSection() {
        return null != i ? i : _.wLn.OVERVIEW;
    }
    getSectionId() {
        return C;
    }
    getIntegration(e) {
        return z(e);
    }
    getWebhook(e) {
        return q(e);
    }
    isFetching() {
        return v || A;
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
h(X, "displayName", "GuildSettingsIntegrationsStore");
let Z = new X(
        c.h,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: W,
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: K,
                  GUILD_SETTINGS_INIT: N,
                  GUILD_SETTINGS_SET_SECTION: N,
                  INTEGRATION_SETTINGS_SET_SECTION: R,
                  INTEGRATION_SETTINGS_START_EDITING_COMMAND: G,
                  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: V,
                  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: F,
                  INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: B,
                  INTEGRATION_SETTINGS_UPDATE_INTEGRATION: x,
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: L,
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: H,
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: Y,
                  GUILD_SETTINGS_CLOSE: P,
                  GUILD_SETTINGS_LOADED_INTEGRATIONS: k,
                  WEBHOOKS_UPDATE: U,
                  INTEGRATION_SETTINGS_SUBMITTING: j,
                  INTEGRATION_SETTINGS_SAVE_FAILURE: M,
              },
    ),
    Q = Z;
