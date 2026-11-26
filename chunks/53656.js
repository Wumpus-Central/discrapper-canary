let i, T;
(n.r(t), n(321073));
var I = n(435558),
    r = n.n(I),
    N = n(855986),
    l = n(73153),
    E = n(824953),
    S = n(576705),
    _ = n(718116),
    a = n(555337),
    o = n(652215);
let u = [],
    s = [],
    d = null,
    c = null,
    G = null,
    p = !1,
    A = !1,
    O = o.XlH.CLOSED,
    h = {},
    R = !1,
    f = null;
function y(e) {
    let { section: t } = e;
    if (t !== o.BEX.INTEGRATIONS) return !1;
    if (null == i) {
        let e = a.A.getGuildId();
        (null != e && (E.A.fetchForGuild(e), (p = !0)), g(!1));
    }
}
function g(e) {
    if (null != (i = a.A.getProps().guild) && S.A.can(o.xBc.MANAGE_GUILD, i)) {
        let e = a.A.getProps().integrations;
        (null == e && (A = !0), (u = e ?? []));
    } else u = [];
    if (((s = null != i && S.A.can(o.xBc.MANAGE_WEBHOOKS, i) ? _.A.getWebhooksForGuild(i.id) : []), !e && null != c)) {
        let e = C(c.id);
        null != e && (c = e);
    }
    if (null != G) {
        let e = D(G.id);
        null != e && (G = e);
    }
    ((d = null), (O = o.XlH.OPEN), (h = {}), (R = !1));
}
let m = r().debounce(() => {
    R &&
        (null != c ? r().isEqual(c, C(c.id)) && (R = !1) : null != G && r().isEqual(G, D(G.id)) && (R = !1),
        R || P.emitChange());
}, 500);
function C(e) {
    return u.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function D(e) {
    return s.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class M extends N.Ay.Store {
    static displayName = "GuildSettingsIntegrationsStore";
    initialize() {
        this.waitFor(a.A, _.A, S.A);
    }
    hasChanges() {
        return R;
    }
    get guild() {
        return i;
    }
    get integrations() {
        return u;
    }
    get webhooks() {
        return s;
    }
    get editedCommandId() {
        return d;
    }
    get editedIntegration() {
        return c;
    }
    get editedWebhook() {
        return G;
    }
    get formState() {
        return O;
    }
    getErrors() {
        return h;
    }
    getSection() {
        return T ?? o.wLn.OVERVIEW;
    }
    getSectionId() {
        return f;
    }
    getIntegration(e) {
        return C(e);
    }
    getWebhook(e) {
        return D(e);
    }
    isFetching() {
        return A || p;
    }
    showNotice() {
        return this.hasChanges();
    }
    getApplication(e) {
        return u.find((t) => t.application?.id === e)?.application;
    }
}
let P = new M(
    l.h,
    __OVERLAY__
        ? {}
        : {
              INTEGRATION_SETTINGS_INIT: function () {
                  return g(!1);
              },
              INTEGRATION_SETTINGS_SAVE_SUCCESS: function () {
                  return g(!0);
              },
              GUILD_SETTINGS_INIT: y,
              GUILD_SETTINGS_SET_SECTION: y,
              INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                  let { section: t, sectionId: n } = e;
                  ((T = t), (f = n));
              },
              INTEGRATION_SETTINGS_START_EDITING_COMMAND: function (e) {
                  let { commandId: t } = e;
                  ((d = t), (c = null), (G = null), (h = {}), (R = !0));
              },
              INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function (e) {
                  let { commandId: t } = e;
                  if (null == d || d !== t) return !1;
                  ((d = null), (h = {}), (R = !1));
              },
              INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function (e) {
                  let { integrationId: t } = e,
                      n = C(t);
                  if (null == n) return !1;
                  ((c = n), (d = null), (G = null), (h = {}), (R = !1));
              },
              INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function () {
                  ((c = null), (h = {}), (R = !1));
              },
              INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function (e) {
                  let { settings: t } = e;
                  if (null == c) return !1;
                  ((c = { ...c }),
                      null != t.enableEmoticons &&
                          c.enable_emoticons !== t.enableEmoticons &&
                          ((c.enable_emoticons = t.enableEmoticons), (R = !0)),
                      null != t.expireBehavior &&
                          c.expire_behavior !== t.expireBehavior &&
                          ((c.expire_behavior = t.expireBehavior), (R = !0)),
                      null != t.expireGracePeriod &&
                          c.expire_grace_period !== t.expireGracePeriod &&
                          ((c.expire_grace_period = t.expireGracePeriod), (R = !0)),
                      R && m());
              },
              INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                  let { settings: t } = e;
                  if (null == G) return !1;
                  ((G = { ...G }),
                      null != t.name && G.name !== t.name && ((G.name = t.name), (R = !0)),
                      void 0 !== t.avatar && G.avatar !== t.avatar && ((G.avatar = t.avatar), (R = !0)),
                      null != t.channelId && G.channel_id !== t.channelId && ((G.channel_id = t.channelId), (R = !0)),
                      R && m());
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                  let { webhookId: t } = e,
                      n = D(t);
                  if (null == n) return !1;
                  ((G = n), (d = null), (c = null), (h = {}), (R = !1));
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                  ((G = null), (h = {}), (R = !1));
              },
              GUILD_SETTINGS_CLOSE: function () {
                  ((i = null), (u = []), (s = []), (d = null), (c = null), (G = null), (O = o.XlH.CLOSED), (R = !1));
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  let { guildId: t, integrations: n } = e;
                  if (null == i || t !== i.id || O === o.XlH.SUBMITTING) return !1;
                  for (let e of ((A = !1), n))
                      null ==
                          u.find((t) => {
                              let { id: n } = t;
                              if (n === e.id) return !0;
                          }) && (u.push(e), e.type === c?.type && e.account?.id === c.account?.id && (c = e));
                  for (let e = u.length - 1; e >= 0; e--) {
                      let t = u[e],
                          i = n.find((e) => {
                              let { id: n } = e;
                              if (n === t.id) return !0;
                          });
                      if (null != i) {
                          let n = { ...t, ...i };
                          (c?.id === n.id && (!1 === n.enabled ? (c = null) : R || (c = n)), (u[e] = n));
                      } else (c?.id === t.id && (c = null), u.splice(e, 1));
                  }
                  ((u = [...u]), m());
              },
              WEBHOOKS_UPDATE: function (e) {
                  let { guildId: t, channelId: n, webhooks: T } = e;
                  if (((p = !1), null != i && t === i.id && null != T && O !== o.XlH.SUBMITTING)) {
                      for (let e = s.length - 1; e >= 0; e--) {
                          let t = s[e];
                          if (null != n && t?.channel_id !== n) continue;
                          let i = T.find((e) => {
                              let { id: n } = e;
                              if (n === t.id) return !0;
                          });
                          if (null != i) {
                              let n = { ...t, ...i };
                              ((s[e] = n), R || G?.id !== n.id || (G = n));
                          } else (G?.id === t.id && (G = null), s.splice(e, 1));
                      }
                      for (let e of T)
                          null ==
                              s.find((t) => {
                                  let { id: n } = t;
                                  if (n === e.id) return !0;
                              }) && s.push(e);
                      ((s = [...s]), m());
                  }
              },
              INTEGRATION_SETTINGS_SUBMITTING: function () {
                  ((O = o.XlH.SUBMITTING), (h = {}));
              },
              INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                  if (O !== o.XlH.SUBMITTING) return !1;
                  ((O = o.XlH.OPEN), (h = e.errors ?? {}));
              },
          },
);
n.d(t, {}, { default: P });
