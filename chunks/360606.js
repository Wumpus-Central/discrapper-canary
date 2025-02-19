let i, r;
n.r(t), n.d(t, { default: () => W }), n(653041), n(47120);
var l,
    T = n(392711),
    I = n.n(T),
    o = n(442837),
    E = n(570140),
    u = n(308063),
    N = n(496675),
    a = n(855674),
    _ = n(999382),
    S = n(981631);
function c(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
let s = [],
    O = [],
    p = null,
    G = null,
    A = null,
    h = !1,
    f = !1,
    R = S.QZA.CLOSED,
    y = {},
    g = !1,
    Z = null;
function P(e) {
    let { section: t } = e;
    if (t !== S.pNK.INTEGRATIONS) return !1;
    if (null == i) {
        let e = _.Z.getGuildId();
        null != e && (u.Z.fetchForGuild(e), (h = !0)), b(!1);
    }
}
function b(e) {
    if (null != (i = _.Z.getProps().guild) && N.Z.can(S.Plq.MANAGE_GUILD, i)) {
        let e = _.Z.getProps().integrations;
        null == e && (f = !0), (s = null != e ? e : []);
    } else s = [];
    if (((O = null != i && N.Z.can(S.Plq.MANAGE_WEBHOOKS, i) ? a.Z.getWebhooksForGuild(i.id) : []), !e && null != G)) {
        let e = D(G.id);
        null != e && (G = e);
    }
    if (null != A) {
        let e = v(A.id);
        null != e && (A = e);
    }
    (p = null), (R = S.QZA.OPEN), (y = {}), (g = !1);
}
let C = I().debounce(() => {
    g && (null != G ? I().isEqual(G, D(G.id)) && (g = !1) : null != A && I().isEqual(A, v(A.id)) && (g = !1), g || M.emitChange());
}, 500);
function D(e) {
    return s.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function v(e) {
    return O.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class m extends (l = o.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, a.Z, N.Z);
    }
    hasChanges() {
        return g;
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
        return y;
    }
    getSection() {
        return null != r ? r : S.b4C.OVERVIEW;
    }
    getSectionId() {
        return Z;
    }
    getIntegration(e) {
        return D(e);
    }
    getWebhook(e) {
        return v(e);
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
c(m, 'displayName', 'GuildSettingsIntegrationsStore');
let M = new m(
        E.Z,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: function () {
                      return b(!1);
                  },
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: function () {
                      return b(!0);
                  },
                  GUILD_SETTINGS_INIT: P,
                  GUILD_SETTINGS_SET_SECTION: P,
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (r = t), (Z = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_COMMAND: function (e) {
                      let { commandId: t } = e;
                      (p = t), (G = null), (A = null), (y = {}), (g = !0);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function (e) {
                      let { commandId: t } = e;
                      if (null == p || p !== t) return !1;
                      (p = null), (y = {}), (g = !1);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function (e) {
                      let { integrationId: t } = e,
                          n = D(t);
                      if (null == n) return !1;
                      (G = n), (p = null), (A = null), (y = {}), (g = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function () {
                      (G = null), (y = {}), (g = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function (e) {
                      let { settings: t } = e;
                      if (null == G) return !1;
                      (G = d({}, G)), null != t.enableEmoticons && G.enable_emoticons !== t.enableEmoticons && ((G.enable_emoticons = t.enableEmoticons), (g = !0)), null != t.expireBehavior && G.expire_behavior !== t.expireBehavior && ((G.expire_behavior = t.expireBehavior), (g = !0)), null != t.expireGracePeriod && G.expire_grace_period !== t.expireGracePeriod && ((G.expire_grace_period = t.expireGracePeriod), (g = !0)), g && C();
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == A) return !1;
                      (A = d({}, A)), null != t.name && A.name !== t.name && ((A.name = t.name), (g = !0)), void 0 !== t.avatar && A.avatar !== t.avatar && ((A.avatar = t.avatar), (g = !0)), null != t.channelId && A.channel_id !== t.channelId && ((A.channel_id = t.channelId), (g = !0)), g && C();
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = v(t);
                      if (null == n) return !1;
                      (A = n), (p = null), (G = null), (y = {}), (g = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (A = null), (y = {}), (g = !1);
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (i = null), (s = []), (O = []), (p = null), (G = null), (A = null), (R = S.QZA.CLOSED), (g = !1);
                  },
                  GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                      let { guildId: t, integrations: n } = e;
                      if (null == i || t !== i.id || R === S.QZA.SUBMITTING) return !1;
                      for (let e of ((f = !1), n))
                          if (
                              null ==
                              s.find((t) => {
                                  let { id: n } = t;
                                  if (n === e.id) return !0;
                              })
                          ) {
                              var r, l;
                              s.push(e), e.type === (null == G ? void 0 : G.type) && (null === (r = e.account) || void 0 === r ? void 0 : r.id) === (null === (l = G.account) || void 0 === l ? void 0 : l.id) && (G = e);
                          }
                      for (let e = s.length - 1; e >= 0; e--) {
                          let t = s[e],
                              i = n.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                          if (null != i) {
                              let n = d({}, t, i);
                              (null == G ? void 0 : G.id) !== n.id || (!1 === n.enabled ? (G = null) : g || (G = n)), (s[e] = n);
                          } else (null == G ? void 0 : G.id) === t.id && (G = null), s.splice(e, 1);
                      }
                      (s = [...s]), C();
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: r } = e;
                      if (((h = !1), null != i && t === i.id && null != r && R !== S.QZA.SUBMITTING)) {
                          for (let e = O.length - 1; e >= 0; e--) {
                              let t = O[e];
                              if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
                              let i = r.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != i) {
                                  let n = d({}, t, i);
                                  (O[e] = n), g || (null == A ? void 0 : A.id) !== n.id || (A = n);
                              } else (null == A ? void 0 : A.id) === t.id && (A = null), O.splice(e, 1);
                          }
                          for (let e of r)
                              null ==
                                  O.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && O.push(e);
                          (O = [...O]), C();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (R = S.QZA.SUBMITTING), (y = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      var t;
                      if (R !== S.QZA.SUBMITTING) return !1;
                      (R = S.QZA.OPEN), (y = null !== (t = e.errors) && void 0 !== t ? t : {});
                  }
              }
    ),
    W = M;
