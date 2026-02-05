"use strict";
let r, i;
n.r(t), n.d(t, { default: () => $ }), n(321073);
var a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(73153),
    u = n(824953),
    c = n(576705),
    d = n(718116),
    _ = n(555337),
    f = n(652215);
let p = [],
    h = [],
    m = null,
    g = null,
    E = null,
    A = !1,
    I = !1,
    T = f.XlH.CLOSED,
    y = {},
    S = !1,
    v = null;
function C(e) {
    let { section: t } = e;
    if (t !== f.BEX.INTEGRATIONS) return !1;
    if (null == r) {
        let e = _.A.getGuildId();
        null != e && (u.A.fetchForGuild(e), (A = !0)), N(!1);
    }
}
function b(e) {
    let { section: t, sectionId: n } = e;
    (i = t), (v = n);
}
function N(e) {
    if (null != (r = _.A.getProps().guild) && c.A.can(f.xBc.MANAGE_GUILD, r)) {
        let e = _.A.getProps().integrations;
        null == e && (I = !0), (p = e ?? []);
    } else p = [];
    if (((h = null != r && c.A.can(f.xBc.MANAGE_WEBHOOKS, r) ? d.A.getWebhooksForGuild(r.id) : []), !e && null != g)) {
        let e = Y(g.id);
        null != e && (g = e);
    }
    if (null != E) {
        let e = W(E.id);
        null != e && (E = e);
    }
    (m = null), (T = f.XlH.OPEN), (y = {}), (S = !1);
}
function R() {
    (r = null), (p = []), (h = []), (m = null), (g = null), (E = null), (T = f.XlH.CLOSED), (S = !1);
}
let O = s().debounce(() => {
    S &&
        (null != g ? s().isEqual(g, Y(g.id)) && (S = !1) : null != E && s().isEqual(E, W(E.id)) && (S = !1),
        S || z.emitChange());
}, 500);
function D(e) {
    let { settings: t } = e;
    if (null == g) return !1;
    (g = { ...g }),
        null != t.enableEmoticons &&
            g.enable_emoticons !== t.enableEmoticons &&
            ((g.enable_emoticons = t.enableEmoticons), (S = !0)),
        null != t.expireBehavior &&
            g.expire_behavior !== t.expireBehavior &&
            ((g.expire_behavior = t.expireBehavior), (S = !0)),
        null != t.expireGracePeriod &&
            g.expire_grace_period !== t.expireGracePeriod &&
            ((g.expire_grace_period = t.expireGracePeriod), (S = !0)),
        S && O();
}
function L(e) {
    let { settings: t } = e;
    if (null == E) return !1;
    (E = { ...E }),
        null != t.name && E.name !== t.name && ((E.name = t.name), (S = !0)),
        void 0 !== t.avatar && E.avatar !== t.avatar && ((E.avatar = t.avatar), (S = !0)),
        null != t.channelId && E.channel_id !== t.channelId && ((E.channel_id = t.channelId), (S = !0)),
        S && O();
}
function w() {
    (T = f.XlH.SUBMITTING), (y = {});
}
function x(e) {
    if (T !== f.XlH.SUBMITTING) return !1;
    (T = f.XlH.OPEN), (y = e.errors ?? {});
}
function P(e) {
    let { guildId: t, integrations: n } = e;
    if (null == r || t !== r.id || T === f.XlH.SUBMITTING) return !1;
    for (let e of ((I = !1), n))
        null ==
            p.find((t) => {
                let { id: n } = t;
                if (n === e.id) return !0;
            }) && (p.push(e), e.type === g?.type && e.account?.id === g.account?.id && (g = e));
    for (let e = p.length - 1; e >= 0; e--) {
        let t = p[e],
            r = n.find((e) => {
                let { id: n } = e;
                if (n === t.id) return !0;
            });
        if (null != r) {
            let n = { ...t, ...r };
            g?.id === n.id && (!1 === n.enabled ? (g = null) : S || (g = n)), (p[e] = n);
        } else g?.id === t.id && (g = null), p.splice(e, 1);
    }
    (p = [...p]), O();
}
function M(e) {
    let { guildId: t, channelId: n, webhooks: i } = e;
    if (((A = !1), null != r && t === r.id && null != i && T !== f.XlH.SUBMITTING)) {
        for (let e = h.length - 1; e >= 0; e--) {
            let t = h[e];
            if (null != n && t?.channel_id !== n) continue;
            let r = i.find((e) => {
                let { id: n } = e;
                if (n === t.id) return !0;
            });
            if (null != r) {
                let n = { ...t, ...r };
                (h[e] = n), S || E?.id !== n.id || (E = n);
            } else E?.id === t.id && (E = null), h.splice(e, 1);
        }
        for (let e of i)
            null ==
                h.find((t) => {
                    let { id: n } = t;
                    if (n === e.id) return !0;
                }) && h.push(e);
        (h = [...h]), O();
    }
}
function k(e) {
    let { commandId: t } = e;
    (m = t), (g = null), (E = null), (y = {}), (S = !0);
}
function U(e) {
    let { commandId: t } = e;
    if (null == m || m !== t) return !1;
    (m = null), (y = {}), (S = !1);
}
function G(e) {
    let { integrationId: t } = e,
        n = Y(t);
    if (null == n) return !1;
    (g = n), (m = null), (E = null), (y = {}), (S = !1);
}
function V() {
    (g = null), (y = {}), (S = !1);
}
function F(e) {
    let { webhookId: t } = e,
        n = W(t);
    if (null == n) return !1;
    (E = n), (m = null), (g = null), (y = {}), (S = !1);
}
function B() {
    (E = null), (y = {}), (S = !1);
}
function j() {
    return N(!1);
}
function H() {
    return N(!0);
}
function Y(e) {
    return p.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function W(e) {
    return h.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class K extends o.Ay.Store {
    static displayName = "GuildSettingsIntegrationsStore";
    initialize() {
        this.waitFor(_.A, d.A, c.A);
    }
    hasChanges() {
        return S;
    }
    get guild() {
        return r;
    }
    get integrations() {
        return p;
    }
    get webhooks() {
        return h;
    }
    get editedCommandId() {
        return m;
    }
    get editedIntegration() {
        return g;
    }
    get editedWebhook() {
        return E;
    }
    get formState() {
        return T;
    }
    getErrors() {
        return y;
    }
    getSection() {
        return i ?? f.wLn.OVERVIEW;
    }
    getSectionId() {
        return v;
    }
    getIntegration(e) {
        return Y(e);
    }
    getWebhook(e) {
        return W(e);
    }
    isFetching() {
        return I || A;
    }
    showNotice() {
        return this.hasChanges();
    }
    getApplication(e) {
        return p.find((t) => t.application?.id === e)?.application;
    }
}
let z = new K(
        l.h,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: j,
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: H,
                  GUILD_SETTINGS_INIT: C,
                  GUILD_SETTINGS_SET_SECTION: C,
                  INTEGRATION_SETTINGS_SET_SECTION: b,
                  INTEGRATION_SETTINGS_START_EDITING_COMMAND: k,
                  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: U,
                  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: G,
                  INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: V,
                  INTEGRATION_SETTINGS_UPDATE_INTEGRATION: D,
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: L,
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: F,
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: B,
                  GUILD_SETTINGS_CLOSE: R,
                  GUILD_SETTINGS_LOADED_INTEGRATIONS: P,
                  WEBHOOKS_UPDATE: M,
                  INTEGRATION_SETTINGS_SUBMITTING: w,
                  INTEGRATION_SETTINGS_SAVE_FAILURE: x,
              },
    ),
    $ = z;
