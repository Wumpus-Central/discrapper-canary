let i, r;
n.r(t), n(653041), n(47120);
var l,
    T,
    I,
    o,
    E = n(392711),
    u = n.n(E),
    N = n(442837),
    a = n(570140),
    _ = n(308063),
    S = n(496675),
    c = n(855674),
    d = n(999382),
    s = n(981631);
let O = [],
    G = [],
    p = null,
    A = null,
    h = null,
    f = !1,
    R = !1,
    Z = s.QZA.CLOSED,
    y = {},
    g = !1,
    C = null;
function P(e) {
    let { section: t } = e;
    if (t !== s.pNK.INTEGRATIONS) return !1;
    if (null == i) {
        let e = d.Z.getGuildId();
        null != e && _.Z.fetchForGuild(e), D(!1);
    }
}
function D(e) {
    if (null != (i = d.Z.getProps().guild) && S.Z.can(s.Plq.MANAGE_GUILD, i)) {
        let e = d.Z.getProps().integrations;
        null == e && (R = !0), (O = null != e ? e : []);
    } else O = [];
    if (((G = null != i && S.Z.can(s.Plq.MANAGE_WEBHOOKS, i) ? c.Z.getWebhooksForGuild(i.id) : []), !e && null != A)) {
        let e = M(A.id);
        null != e && (A = e);
    }
    if (null != h) {
        let e = b(h.id);
        null != e && (h = e);
    }
    (p = null), (Z = s.QZA.OPEN), (y = {}), (g = !1);
}
let v = u().debounce(() => {
    g && (null != A ? u().isEqual(A, M(A.id)) && (g = !1) : null != h && u().isEqual(h, b(h.id)) && (g = !1), !g && W.emitChange());
}, 500);
function M(e) {
    return O.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function b(e) {
    return G.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class m extends (l = N.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z, S.Z);
    }
    hasChanges() {
        return g;
    }
    get guild() {
        return i;
    }
    get integrations() {
        return O;
    }
    get webhooks() {
        return G;
    }
    get editedCommandId() {
        return p;
    }
    get editedIntegration() {
        return A;
    }
    get editedWebhook() {
        return h;
    }
    get formState() {
        return Z;
    }
    getErrors() {
        return y;
    }
    getSection() {
        return null != r ? r : s.b4C.OVERVIEW;
    }
    getSectionId() {
        return C;
    }
    getIntegration(e) {
        return M(e);
    }
    getWebhook(e) {
        return b(e);
    }
    isFetching() {
        return R || f;
    }
    showNotice() {
        return this.hasChanges();
    }
    getApplication(e) {
        var t;
        return null ===
            (t = O.find((t) => {
                var n;
                return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e;
            })) || void 0 === t
            ? void 0
            : t.application;
    }
}
(o = 'GuildSettingsIntegrationsStore'),
    (I = 'displayName') in (T = m)
        ? Object.defineProperty(T, I, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (T[I] = o);
let W = new m(
    a.Z,
    __OVERLAY__
        ? {}
        : {
              INTEGRATION_SETTINGS_INIT: function () {
                  return D(!1);
              },
              INTEGRATION_SETTINGS_SAVE_SUCCESS: function () {
                  return D(!0);
              },
              GUILD_SETTINGS_INIT: P,
              GUILD_SETTINGS_SET_SECTION: P,
              INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                  let { section: t, sectionId: n } = e;
                  (r = t), (C = n);
              },
              INTEGRATION_SETTINGS_START_EDITING_COMMAND: function (e) {
                  let { commandId: t } = e;
                  (p = t), (A = null), (h = null), (y = {}), (g = !0);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function (e) {
                  let { commandId: t } = e;
                  if (null == p || p !== t) return !1;
                  (p = null), (y = {}), (g = !1);
              },
              INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function (e) {
                  let { integrationId: t } = e,
                      n = M(t);
                  if (null == n) return !1;
                  (A = n), (p = null), (h = null), (y = {}), (g = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function () {
                  (A = null), (y = {}), (g = !1);
              },
              INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function (e) {
                  let { settings: t } = e;
                  if (null == A) return !1;
                  (A = { ...A }), null != t.enableEmoticons && A.enable_emoticons !== t.enableEmoticons && ((A.enable_emoticons = t.enableEmoticons), (g = !0)), null != t.expireBehavior && A.expire_behavior !== t.expireBehavior && ((A.expire_behavior = t.expireBehavior), (g = !0)), null != t.expireGracePeriod && A.expire_grace_period !== t.expireGracePeriod && ((A.expire_grace_period = t.expireGracePeriod), (g = !0)), g && v();
              },
              INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                  let { settings: t } = e;
                  if (null == h) return !1;
                  (h = { ...h }), null != t.name && h.name !== t.name && ((h.name = t.name), (g = !0)), void 0 !== t.avatar && h.avatar !== t.avatar && ((h.avatar = t.avatar), (g = !0)), null != t.channelId && h.channel_id !== t.channelId && ((h.channel_id = t.channelId), (g = !0)), g && v();
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                  let { webhookId: t } = e,
                      n = b(t);
                  if (null == n) return !1;
                  (h = n), (p = null), (A = null), (y = {}), (g = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                  (h = null), (y = {}), (g = !1);
              },
              GUILD_SETTINGS_CLOSE: function () {
                  (i = null), (O = []), (G = []), (p = null), (A = null), (h = null), (Z = s.QZA.CLOSED), (g = !1);
              },
              GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                  let { guildId: t, integrations: n } = e;
                  if (null == i || t !== i.id || Z === s.QZA.SUBMITTING) return !1;
                  for (let e of ((R = !1), n))
                      if (
                          null ==
                          O.find((t) => {
                              let { id: n } = t;
                              if (n === e.id) return !0;
                          })
                      ) {
                          var r, l;
                          O.push(e), e.type === (null == A ? void 0 : A.type) && (null === (r = e.account) || void 0 === r ? void 0 : r.id) === (null === (l = A.account) || void 0 === l ? void 0 : l.id) && (A = e);
                      }
                  for (let e = O.length - 1; e >= 0; e--) {
                      let t = O[e],
                          i = n.find((e) => {
                              let { id: n } = e;
                              if (n === t.id) return !0;
                          });
                      if (null != i) {
                          let n = {
                              ...t,
                              ...i
                          };
                          (null == A ? void 0 : A.id) === n.id && (!1 === n.enabled ? (A = null) : !g && (A = n)), (O[e] = n);
                      } else (null == A ? void 0 : A.id) === t.id && (A = null), O.splice(e, 1);
                  }
                  (O = [...O]), v();
              },
              WEBHOOKS_UPDATE: function (e) {
                  let { guildId: t, channelId: n, webhooks: r } = e;
                  if (null == i || t !== i.id || null == r || Z === s.QZA.SUBMITTING) return !1;
                  f = !1;
                  for (let e = G.length - 1; e >= 0; e--) {
                      let t = G[e];
                      if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
                      let i = r.find((e) => {
                          let { id: n } = e;
                          if (n === t.id) return !0;
                      });
                      if (null != i) {
                          let n = {
                              ...t,
                              ...i
                          };
                          (G[e] = n), !g && (null == h ? void 0 : h.id) === n.id && (h = n);
                      } else (null == h ? void 0 : h.id) === t.id && (h = null), G.splice(e, 1);
                  }
                  for (let e of r)
                      null ==
                          G.find((t) => {
                              let { id: n } = t;
                              if (n === e.id) return !0;
                          }) && G.push(e);
                  (G = [...G]), v();
              },
              INTEGRATION_SETTINGS_SUBMITTING: function () {
                  (Z = s.QZA.SUBMITTING), (y = {});
              },
              INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                  var t;
                  if (Z !== s.QZA.SUBMITTING) return !1;
                  (Z = s.QZA.OPEN), (y = null !== (t = e.errors) && void 0 !== t ? t : {});
              }
          }
);
t.default = W;
