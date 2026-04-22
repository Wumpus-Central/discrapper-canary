let i, r;
n.r(t), n.d(t, { default: () => M }), n(321073);
var l = n(735438),
    T = n.n(l),
    I = n(311907),
    E = n(73153),
    o = n(824953),
    a = n(576705),
    s = n(718116),
    N = n(555337),
    u = n(652215);
let c = [],
    S = [],
    d = null,
    _ = null,
    h = null,
    O = !1,
    A = !1,
    p = u.XlH.CLOSED,
    G = {},
    f = !1,
    R = null;
function g(e) {
    let { section: t } = e;
    if (t !== u.BEX.INTEGRATIONS) return !1;
    if (null == i) {
        let e = N.A.getGuildId();
        null != e && (o.A.fetchForGuild(e), (O = !0)), y(!1);
    }
}
function y(e) {
    if (null != (i = N.A.getProps().guild) && a.A.can(u.xBc.MANAGE_GUILD, i)) {
        let e = N.A.getProps().integrations;
        null == e && (A = !0), (c = e ?? []);
    } else c = [];
    if (((S = null != i && a.A.can(u.xBc.MANAGE_WEBHOOKS, i) ? s.A.getWebhooksForGuild(i.id) : []), !e && null != _)) {
        let e = C(_.id);
        null != e && (_ = e);
    }
    if (null != h) {
        let e = D(h.id);
        null != e && (h = e);
    }
    (d = null), (p = u.XlH.OPEN), (G = {}), (f = !1);
}
let m = T().debounce(() => {
    f &&
        (null != _ ? T().isEqual(_, C(_.id)) && (f = !1) : null != h && T().isEqual(h, D(h.id)) && (f = !1),
        f || P.emitChange());
}, 500);
function C(e) {
    return c.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function D(e) {
    return S.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class B extends I.Ay.Store {
    static displayName = "GuildSettingsIntegrationsStore";
    initialize() {
        this.waitFor(N.A, s.A, a.A);
    }
    hasChanges() {
        return f;
    }
    get guild() {
        return i;
    }
    get integrations() {
        return c;
    }
    get webhooks() {
        return S;
    }
    get editedCommandId() {
        return d;
    }
    get editedIntegration() {
        return _;
    }
    get editedWebhook() {
        return h;
    }
    get formState() {
        return p;
    }
    getErrors() {
        return G;
    }
    getSection() {
        return r ?? u.wLn.OVERVIEW;
    }
    getSectionId() {
        return R;
    }
    getIntegration(e) {
        return C(e);
    }
    getWebhook(e) {
        return D(e);
    }
    isFetching() {
        return A || O;
    }
    showNotice() {
        return this.hasChanges();
    }
    getApplication(e) {
        return c.find((t) => t.application?.id === e)?.application;
    }
}
let P = new B(
        E.h,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: function () {
                      return y(!1);
                  },
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: function () {
                      return y(!0);
                  },
                  GUILD_SETTINGS_INIT: g,
                  GUILD_SETTINGS_SET_SECTION: g,
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (r = t), (R = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_COMMAND: function (e) {
                      let { commandId: t } = e;
                      (d = t), (_ = null), (h = null), (G = {}), (f = !0);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function (e) {
                      let { commandId: t } = e;
                      if (null == d || d !== t) return !1;
                      (d = null), (G = {}), (f = !1);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function (e) {
                      let { integrationId: t } = e,
                          n = C(t);
                      if (null == n) return !1;
                      (_ = n), (d = null), (h = null), (G = {}), (f = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function () {
                      (_ = null), (G = {}), (f = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function (e) {
                      let { settings: t } = e;
                      if (null == _) return !1;
                      (_ = { ..._ }),
                          null != t.enableEmoticons &&
                              _.enable_emoticons !== t.enableEmoticons &&
                              ((_.enable_emoticons = t.enableEmoticons), (f = !0)),
                          null != t.expireBehavior &&
                              _.expire_behavior !== t.expireBehavior &&
                              ((_.expire_behavior = t.expireBehavior), (f = !0)),
                          null != t.expireGracePeriod &&
                              _.expire_grace_period !== t.expireGracePeriod &&
                              ((_.expire_grace_period = t.expireGracePeriod), (f = !0)),
                          f && m();
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == h) return !1;
                      (h = { ...h }),
                          null != t.name && h.name !== t.name && ((h.name = t.name), (f = !0)),
                          void 0 !== t.avatar && h.avatar !== t.avatar && ((h.avatar = t.avatar), (f = !0)),
                          null != t.channelId &&
                              h.channel_id !== t.channelId &&
                              ((h.channel_id = t.channelId), (f = !0)),
                          f && m();
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = D(t);
                      if (null == n) return !1;
                      (h = n), (d = null), (_ = null), (G = {}), (f = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (h = null), (G = {}), (f = !1);
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (i = null), (c = []), (S = []), (d = null), (_ = null), (h = null), (p = u.XlH.CLOSED), (f = !1);
                  },
                  GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                      let { guildId: t, integrations: n } = e;
                      if (null == i || t !== i.id || p === u.XlH.SUBMITTING) return !1;
                      for (let e of ((A = !1), n))
                          null ==
                              c.find((t) => {
                                  let { id: n } = t;
                                  if (n === e.id) return !0;
                              }) && (c.push(e), e.type === _?.type && e.account?.id === _.account?.id && (_ = e));
                      for (let e = c.length - 1; e >= 0; e--) {
                          let t = c[e],
                              i = n.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                          if (null != i) {
                              let n = { ...t, ...i };
                              _?.id === n.id && (!1 === n.enabled ? (_ = null) : f || (_ = n)), (c[e] = n);
                          } else _?.id === t.id && (_ = null), c.splice(e, 1);
                      }
                      (c = [...c]), m();
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: r } = e;
                      if (((O = !1), null != i && t === i.id && null != r && p !== u.XlH.SUBMITTING)) {
                          for (let e = S.length - 1; e >= 0; e--) {
                              let t = S[e];
                              if (null != n && t?.channel_id !== n) continue;
                              let i = r.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != i) {
                                  let n = { ...t, ...i };
                                  (S[e] = n), f || h?.id !== n.id || (h = n);
                              } else h?.id === t.id && (h = null), S.splice(e, 1);
                          }
                          for (let e of r)
                              null ==
                                  S.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && S.push(e);
                          (S = [...S]), m();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (p = u.XlH.SUBMITTING), (G = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      if (p !== u.XlH.SUBMITTING) return !1;
                      (p = u.XlH.OPEN), (G = e.errors ?? {});
                  },
              },
    ),
    M = P;
