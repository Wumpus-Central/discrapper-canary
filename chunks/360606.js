let i, l;
n.r(t), n.d(t, { default: () => W }), n(653041), n(47120);
var r,
    T,
    I,
    E = n(392711),
    o = n.n(E),
    N = n(442837),
    u = n(570140),
    a = n(308063),
    _ = n(496675),
    S = n(855674),
    d = n(999382),
    c = n(981631);
let s = [],
    O = [],
    p = null,
    G = null,
    A = null,
    h = !1,
    f = !1,
    R = c.QZA.CLOSED,
    Z = {},
    y = !1,
    g = null;
function C(e) {
    let { section: t } = e;
    if (t !== c.pNK.INTEGRATIONS) return !1;
    if (null == i) {
        let e = d.Z.getGuildId();
        null != e && (a.Z.fetchForGuild(e), (h = !0)), P(!1);
    }
}
function P(e) {
    if (null != (i = d.Z.getProps().guild) && _.Z.can(c.Plq.MANAGE_GUILD, i)) {
        let e = d.Z.getProps().integrations;
        null == e && (f = !0), (s = null != e ? e : []);
    } else s = [];
    if (((O = null != i && _.Z.can(c.Plq.MANAGE_WEBHOOKS, i) ? S.Z.getWebhooksForGuild(i.id) : []), !e && null != G)) {
        let e = v(G.id);
        null != e && (G = e);
    }
    if (null != A) {
        let e = M(A.id);
        null != e && (A = e);
    }
    (p = null), (R = c.QZA.OPEN), (Z = {}), (y = !1);
}
let D = o().debounce(() => {
    y && (null != G ? o().isEqual(G, v(G.id)) && (y = !1) : null != A && o().isEqual(A, M(A.id)) && (y = !1), y || m.emitChange());
}, 500);
function v(e) {
    return s.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function M(e) {
    return O.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class b extends (r = N.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, S.Z, _.Z);
    }
    hasChanges() {
        return y;
    }
    get guild() {
        return i;
    }
    get integrations() {
        return s;
    }
    get webhooks() {
        return O;
    }
    get editedCommandId() {
        return p;
    }
    get editedIntegration() {
        return G;
    }
    get editedWebhook() {
        return A;
    }
    get formState() {
        return R;
    }
    getErrors() {
        return Z;
    }
    getSection() {
        return null != l ? l : c.b4C.OVERVIEW;
    }
    getSectionId() {
        return g;
    }
    getIntegration(e) {
        return v(e);
    }
    getWebhook(e) {
        return M(e);
    }
    isFetching() {
        return f || h;
    }
    showNotice() {
        return this.hasChanges();
    }
    getApplication(e) {
        var t;
        return null ===
            (t = s.find((t) => {
                var n;
                return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e;
            })) || void 0 === t
            ? void 0
            : t.application;
    }
}
(I = 'GuildSettingsIntegrationsStore'),
    (T = 'displayName') in b
        ? Object.defineProperty(b, T, {
              value: I,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (b[T] = I);
let m = new b(
        u.Z,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: function () {
                      return P(!1);
                  },
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: function () {
                      return P(!0);
                  },
                  GUILD_SETTINGS_INIT: C,
                  GUILD_SETTINGS_SET_SECTION: C,
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (l = t), (g = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_COMMAND: function (e) {
                      let { commandId: t } = e;
                      (p = t), (G = null), (A = null), (Z = {}), (y = !0);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function (e) {
                      let { commandId: t } = e;
                      if (null == p || p !== t) return !1;
                      (p = null), (Z = {}), (y = !1);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function (e) {
                      let { integrationId: t } = e,
                          n = v(t);
                      if (null == n) return !1;
                      (G = n), (p = null), (A = null), (Z = {}), (y = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function () {
                      (G = null), (Z = {}), (y = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function (e) {
                      let { settings: t } = e;
                      if (null == G) return !1;
                      (G = { ...G }), null != t.enableEmoticons && G.enable_emoticons !== t.enableEmoticons && ((G.enable_emoticons = t.enableEmoticons), (y = !0)), null != t.expireBehavior && G.expire_behavior !== t.expireBehavior && ((G.expire_behavior = t.expireBehavior), (y = !0)), null != t.expireGracePeriod && G.expire_grace_period !== t.expireGracePeriod && ((G.expire_grace_period = t.expireGracePeriod), (y = !0)), y && D();
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == A) return !1;
                      (A = { ...A }), null != t.name && A.name !== t.name && ((A.name = t.name), (y = !0)), void 0 !== t.avatar && A.avatar !== t.avatar && ((A.avatar = t.avatar), (y = !0)), null != t.channelId && A.channel_id !== t.channelId && ((A.channel_id = t.channelId), (y = !0)), y && D();
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = M(t);
                      if (null == n) return !1;
                      (A = n), (p = null), (G = null), (Z = {}), (y = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (A = null), (Z = {}), (y = !1);
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (i = null), (s = []), (O = []), (p = null), (G = null), (A = null), (R = c.QZA.CLOSED), (y = !1);
                  },
                  GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                      let { guildId: t, integrations: n } = e;
                      if (null == i || t !== i.id || R === c.QZA.SUBMITTING) return !1;
                      for (let e of ((f = !1), n))
                          if (
                              null ==
                              s.find((t) => {
                                  let { id: n } = t;
                                  if (n === e.id) return !0;
                              })
                          ) {
                              var l, r;
                              s.push(e), e.type === (null == G ? void 0 : G.type) && (null === (l = e.account) || void 0 === l ? void 0 : l.id) === (null === (r = G.account) || void 0 === r ? void 0 : r.id) && (G = e);
                          }
                      for (let e = s.length - 1; e >= 0; e--) {
                          let t = s[e],
                              i = n.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                          if (null != i) {
                              let n = {
                                  ...t,
                                  ...i
                              };
                              (null == G ? void 0 : G.id) !== n.id || (!1 === n.enabled ? (G = null) : y || (G = n)), (s[e] = n);
                          } else (null == G ? void 0 : G.id) === t.id && (G = null), s.splice(e, 1);
                      }
                      (s = [...s]), D();
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: l } = e;
                      if (((h = !1), null != i && t === i.id && null != l && R !== c.QZA.SUBMITTING)) {
                          for (let e = O.length - 1; e >= 0; e--) {
                              let t = O[e];
                              if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
                              let i = l.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != i) {
                                  let n = {
                                      ...t,
                                      ...i
                                  };
                                  (O[e] = n), y || (null == A ? void 0 : A.id) !== n.id || (A = n);
                              } else (null == A ? void 0 : A.id) === t.id && (A = null), O.splice(e, 1);
                          }
                          for (let e of l)
                              null ==
                                  O.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && O.push(e);
                          (O = [...O]), D();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (R = c.QZA.SUBMITTING), (Z = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      var t;
                      if (R !== c.QZA.SUBMITTING) return !1;
                      (R = c.QZA.OPEN), (Z = null !== (t = e.errors) && void 0 !== t ? t : {});
                  }
              }
    ),
    W = m;
