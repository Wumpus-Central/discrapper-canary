let T, i;
n.r(t), n.d(t, { default: () => U }), n(321073);
var I = n(435558),
    N = n.n(I),
    l = n(17928),
    E = n(228366),
    r = n(824953),
    S = n(576705),
    _ = n(718116),
    a = n(555337),
    o = n(652215);
let u = [],
    s = [],
    d = null,
    G = null,
    c = null,
    A = !1,
    p = !1,
    h = o.XlH.CLOSED,
    O = {},
    R = !1,
    f = null;
function y(e) {
    let { section: t } = e;
    if (t !== o.BEX.INTEGRATIONS) return !1;
    if (null == T) {
        let e = a.A.getGuildId();
        null != e && (r.A.fetchForGuild(e), (A = !0)), g(!1);
    }
}
function g(e) {
    if (null != (T = a.A.getProps().guild) && S.A.can(o.xBc.MANAGE_GUILD, T)) {
        let e = a.A.getProps().integrations;
        null == e && (p = !0), (u = e ?? []);
    } else u = [];
    if (((s = null != T && S.A.can(o.xBc.MANAGE_WEBHOOKS, T) ? _.A.getWebhooksForGuild(T.id) : []), !e && null != G)) {
        let e = D(G.id);
        null != e && (G = e);
    }
    if (null != c) {
        let e = M(c.id);
        null != e && (c = e);
    }
    (d = null), (h = o.XlH.OPEN), (O = {}), (R = !1);
}
let C = N().debounce(() => {
    R &&
        (null != G ? N().isEqual(G, D(G.id)) && (R = !1) : null != c && N().isEqual(c, M(c.id)) && (R = !1),
        R || m.emitChange());
}, 500);
function D(e) {
    return u.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function M(e) {
    return s.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class P extends l.Ay.Store {
    static displayName = "GuildSettingsIntegrationsStore";
    initialize() {
        this.waitFor(a.A, _.A, S.A);
    }
    hasChanges() {
        return R;
    }
    get guild() {
        return T;
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
        return G;
    }
    get editedWebhook() {
        return c;
    }
    get formState() {
        return h;
    }
    getErrors() {
        return O;
    }
    getSection() {
        return i ?? o.wLn.OVERVIEW;
    }
    getSectionId() {
        return f;
    }
    getIntegration(e) {
        return D(e);
    }
    getWebhook(e) {
        return M(e);
    }
    isFetching() {
        return p || A;
    }
    showNotice() {
        return this.hasChanges();
    }
    getApplication(e) {
        return u.find((t) => t.application?.id === e)?.application;
    }
}
let m = new P(
        E.h,
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
                      (i = t), (f = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_COMMAND: function (e) {
                      let { commandId: t } = e;
                      (d = t), (G = null), (c = null), (O = {}), (R = !0);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function (e) {
                      let { commandId: t } = e;
                      if (null == d || d !== t) return !1;
                      (d = null), (O = {}), (R = !1);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function (e) {
                      let { integrationId: t } = e,
                          n = D(t);
                      if (null == n) return !1;
                      (G = n), (d = null), (c = null), (O = {}), (R = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function () {
                      (G = null), (O = {}), (R = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function (e) {
                      let { settings: t } = e;
                      if (null == G) return !1;
                      (G = { ...G }),
                          null != t.enableEmoticons &&
                              G.enable_emoticons !== t.enableEmoticons &&
                              ((G.enable_emoticons = t.enableEmoticons), (R = !0)),
                          null != t.expireBehavior &&
                              G.expire_behavior !== t.expireBehavior &&
                              ((G.expire_behavior = t.expireBehavior), (R = !0)),
                          null != t.expireGracePeriod &&
                              G.expire_grace_period !== t.expireGracePeriod &&
                              ((G.expire_grace_period = t.expireGracePeriod), (R = !0)),
                          R && C();
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == c) return !1;
                      (c = { ...c }),
                          null != t.name && c.name !== t.name && ((c.name = t.name), (R = !0)),
                          void 0 !== t.avatar && c.avatar !== t.avatar && ((c.avatar = t.avatar), (R = !0)),
                          null != t.channelId &&
                              c.channel_id !== t.channelId &&
                              ((c.channel_id = t.channelId), (R = !0)),
                          R && C();
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = M(t);
                      if (null == n) return !1;
                      (c = n), (d = null), (G = null), (O = {}), (R = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (c = null), (O = {}), (R = !1);
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (T = null), (u = []), (s = []), (d = null), (G = null), (c = null), (h = o.XlH.CLOSED), (R = !1);
                  },
                  GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                      let { guildId: t, integrations: n } = e;
                      if (null == T || t !== T.id || h === o.XlH.SUBMITTING) return !1;
                      for (let e of ((p = !1), n))
                          null ==
                              u.find((t) => {
                                  let { id: n } = t;
                                  if (n === e.id) return !0;
                              }) && (u.push(e), e.type === G?.type && e.account?.id === G.account?.id && (G = e));
                      for (let e = u.length - 1; e >= 0; e--) {
                          let t = u[e],
                              T = n.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                          if (null != T) {
                              let n = { ...t, ...T };
                              G?.id === n.id && (!1 === n.enabled ? (G = null) : R || (G = n)), (u[e] = n);
                          } else G?.id === t.id && (G = null), u.splice(e, 1);
                      }
                      (u = [...u]), C();
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: i } = e;
                      if (((A = !1), null != T && t === T.id && null != i && h !== o.XlH.SUBMITTING)) {
                          for (let e = s.length - 1; e >= 0; e--) {
                              let t = s[e];
                              if (null != n && t?.channel_id !== n) continue;
                              let T = i.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != T) {
                                  let n = { ...t, ...T };
                                  (s[e] = n), R || c?.id !== n.id || (c = n);
                              } else c?.id === t.id && (c = null), s.splice(e, 1);
                          }
                          for (let e of i)
                              null ==
                                  s.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && s.push(e);
                          (s = [...s]), C();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (h = o.XlH.SUBMITTING), (O = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      if (h !== o.XlH.SUBMITTING) return !1;
                      (h = o.XlH.OPEN), (O = e.errors ?? {});
                  },
              },
    ),
    U = m;
