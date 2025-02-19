let r, i;
n.r(t), n.d(t, { default: () => X }), n(653041), n(47120);
var o,
    a = n(392711),
    s = n.n(a),
    l = n(442837),
    c = n(570140),
    u = n(308063),
    d = n(496675),
    f = n(855674),
    p = n(999382),
    _ = n(981631);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = [],
    E = [],
    v = null,
    b = null,
    y = null,
    O = !1,
    S = !1,
    I = _.QZA.CLOSED,
    T = {},
    N = !1,
    A = null;
function C(e) {
    let { section: t } = e;
    if (t !== _.pNK.INTEGRATIONS) return !1;
    if (null == r) {
        let e = p.Z.getGuildId();
        null != e && (u.Z.fetchForGuild(e), (O = !0)), P(!1);
    }
}
function R(e) {
    let { section: t, sectionId: n } = e;
    (i = t), (A = n);
}
function P(e) {
    if (null != (r = p.Z.getProps().guild) && d.Z.can(_.Plq.MANAGE_GUILD, r)) {
        let e = p.Z.getProps().integrations;
        null == e && (S = !0), (g = null != e ? e : []);
    } else g = [];
    if (((E = null != r && d.Z.can(_.Plq.MANAGE_WEBHOOKS, r) ? f.Z.getWebhooksForGuild(r.id) : []), !e && null != b)) {
        let e = K(b.id);
        null != e && (b = e);
    }
    if (null != y) {
        let e = z(y.id);
        null != e && (y = e);
    }
    (v = null), (I = _.QZA.OPEN), (T = {}), (N = !1);
}
function w() {
    (r = null), (g = []), (E = []), (v = null), (b = null), (y = null), (I = _.QZA.CLOSED), (N = !1);
}
let D = s().debounce(() => {
    N && (null != b ? s().isEqual(b, K(b.id)) && (N = !1) : null != y && s().isEqual(y, z(y.id)) && (N = !1), N || Q.emitChange());
}, 500);
function x(e) {
    let { settings: t } = e;
    if (null == b) return !1;
    (b = m({}, b)), null != t.enableEmoticons && b.enable_emoticons !== t.enableEmoticons && ((b.enable_emoticons = t.enableEmoticons), (N = !0)), null != t.expireBehavior && b.expire_behavior !== t.expireBehavior && ((b.expire_behavior = t.expireBehavior), (N = !0)), null != t.expireGracePeriod && b.expire_grace_period !== t.expireGracePeriod && ((b.expire_grace_period = t.expireGracePeriod), (N = !0)), N && D();
}
function L(e) {
    let { settings: t } = e;
    if (null == y) return !1;
    (y = m({}, y)), null != t.name && y.name !== t.name && ((y.name = t.name), (N = !0)), void 0 !== t.avatar && y.avatar !== t.avatar && ((y.avatar = t.avatar), (N = !0)), null != t.channelId && y.channel_id !== t.channelId && ((y.channel_id = t.channelId), (N = !0)), N && D();
}
function M() {
    (I = _.QZA.SUBMITTING), (T = {});
}
function k(e) {
    var t;
    if (I !== _.QZA.SUBMITTING) return !1;
    (I = _.QZA.OPEN), (T = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function j(e) {
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
            var i, o;
            g.push(e), e.type === (null == b ? void 0 : b.type) && (null === (i = e.account) || void 0 === i ? void 0 : i.id) === (null === (o = b.account) || void 0 === o ? void 0 : o.id) && (b = e);
        }
    for (let e = g.length - 1; e >= 0; e--) {
        let t = g[e],
            r = n.find((e) => {
                let { id: n } = e;
                if (n === t.id) return !0;
            });
        if (null != r) {
            let n = m({}, t, r);
            (null == b ? void 0 : b.id) !== n.id || (!1 === n.enabled ? (b = null) : N || (b = n)), (g[e] = n);
        } else (null == b ? void 0 : b.id) === t.id && (b = null), g.splice(e, 1);
    }
    (g = [...g]), D();
}
function U(e) {
    let { guildId: t, channelId: n, webhooks: i } = e;
    if (((O = !1), null != r && t === r.id && null != i && I !== _.QZA.SUBMITTING)) {
        for (let e = E.length - 1; e >= 0; e--) {
            let t = E[e];
            if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
            let r = i.find((e) => {
                let { id: n } = e;
                if (n === t.id) return !0;
            });
            if (null != r) {
                let n = m({}, t, r);
                (E[e] = n), N || (null == y ? void 0 : y.id) !== n.id || (y = n);
            } else (null == y ? void 0 : y.id) === t.id && (y = null), E.splice(e, 1);
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
    (v = t), (b = null), (y = null), (T = {}), (N = !0);
}
function B(e) {
    let { commandId: t } = e;
    if (null == v || v !== t) return !1;
    (v = null), (T = {}), (N = !1);
}
function Z(e) {
    let { integrationId: t } = e,
        n = K(t);
    if (null == n) return !1;
    (b = n), (v = null), (y = null), (T = {}), (N = !1);
}
function F() {
    (b = null), (T = {}), (N = !1);
}
function V(e) {
    let { webhookId: t } = e,
        n = z(t);
    if (null == n) return !1;
    (y = n), (v = null), (b = null), (T = {}), (N = !1);
}
function H() {
    (y = null), (T = {}), (N = !1);
}
function W() {
    return P(!1);
}
function Y() {
    return P(!0);
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
class q extends (o = l.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, f.Z, d.Z);
    }
    hasChanges() {
        return N;
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
        return v;
    }
    get editedIntegration() {
        return b;
    }
    get editedWebhook() {
        return y;
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
        return S || O;
    }
    showNotice() {
        return this.hasChanges();
    }
    getApplication(e) {
        var t;
        return null ===
            (t = g.find((t) => {
                var n;
                return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e;
            })) || void 0 === t
            ? void 0
            : t.application;
    }
}
h(q, 'displayName', 'GuildSettingsIntegrationsStore');
let Q = new q(
        c.Z,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: W,
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: Y,
                  GUILD_SETTINGS_INIT: C,
                  GUILD_SETTINGS_SET_SECTION: C,
                  INTEGRATION_SETTINGS_SET_SECTION: R,
                  INTEGRATION_SETTINGS_START_EDITING_COMMAND: G,
                  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: B,
                  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: Z,
                  INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: F,
                  INTEGRATION_SETTINGS_UPDATE_INTEGRATION: x,
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: L,
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: V,
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: H,
                  GUILD_SETTINGS_CLOSE: w,
                  GUILD_SETTINGS_LOADED_INTEGRATIONS: j,
                  WEBHOOKS_UPDATE: U,
                  INTEGRATION_SETTINGS_SUBMITTING: M,
                  INTEGRATION_SETTINGS_SAVE_FAILURE: k
              }
    ),
    X = Q;
