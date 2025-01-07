let i, r, l;
n(653041), n(47120);
var a,
    s,
    o,
    c,
    d = n(392711),
    u = n.n(d),
    h = n(442837),
    m = n(570140),
    p = n(308063),
    g = n(388610),
    f = n(430824),
    _ = n(496675),
    E = n(855674),
    I = n(981631);
let C = [],
    N = null,
    v = !1,
    S = I.QZA.CLOSED,
    T = {},
    A = !1,
    b = null;
function Z() {
    if (((i = null != (r = g.Z.getChannel()) ? f.Z.getGuild(r.guild_id) : null), (C = null != r && null != i && _.Z.can(I.Plq.MANAGE_WEBHOOKS, r) ? E.Z.getWebhooksForChannel(i.id, r.id) : []), null != N)) {
        let e = L(N.id);
        null != e && (N = e);
    }
    (S = I.QZA.OPEN), (T = {}), (A = !1);
}
let x = u().debounce(() => {
    A && ((null == N || u().isEqual(N, L(N.id))) && (A = !1), !A && O.emitChange());
}, 500);
function L(e) {
    return C.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class P extends (a = h.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, f.Z, E.Z, _.Z);
    }
    hasChanges() {
        return A;
    }
    get webhooks() {
        return C;
    }
    get editedWebhook() {
        return N;
    }
    get formState() {
        return S;
    }
    getWebhook(e) {
        return L(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: S === I.QZA.SUBMITTING,
            webhooks: C,
            editedWebhook: N,
            section: l,
            sectionId: b,
            hasChanges: this.hasChanges(),
            isFetching: v,
            errors: T
        };
    }
}
(c = 'ChannelSettingsIntegrationsStore'),
    (o = 'displayName') in (s = P)
        ? Object.defineProperty(s, o, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = c);
let O = new P(
    m.Z,
    __OVERLAY__
        ? {}
        : {
              INTEGRATION_SETTINGS_INIT: Z,
              INTEGRATION_SETTINGS_SAVE_SUCCESS: Z,
              CHANNEL_SETTINGS_SET_SECTION: function (e) {
                  let { section: t } = e;
                  if (t !== I.CoT.INTEGRATIONS) return !1;
                  if (((l = I.b4C.OVERVIEW), null == i)) {
                      let e = g.Z.getChannel(),
                          t = null == e ? void 0 : e.getGuildId();
                      null != e && null != t && (p.Z.fetchForChannel(t, e.id), (v = !0)), Z();
                  }
              },
              INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                  let { section: t, sectionId: n } = e;
                  (l = t), (b = n);
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                  let { webhookId: t } = e,
                      n = L(t);
                  if (null == n) return !1;
                  (N = n), (T = {}), (A = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                  (N = null), (T = {}), (A = !1);
              },
              INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                  let { settings: t } = e;
                  if (null == N) return !1;
                  (N = { ...N }), null != t.name && N.name !== t.name && ((N.name = t.name), (A = !0)), void 0 !== t.avatar && N.avatar !== t.avatar && ((N.avatar = t.avatar), (A = !0)), null != t.channelId && N.channel_id !== t.channelId && ((N.channel_id = t.channelId), (A = !0)), A && x();
              },
              CHANNEL_SETTINGS_CLOSE: function () {
                  (r = null), (i = null), (C = []), (N = null), (S = I.QZA.CLOSED);
              },
              WEBHOOKS_UPDATE: function (e) {
                  let { guildId: t, channelId: n, webhooks: l } = e;
                  if (null == i || t !== i.id || null == r || n !== r.id || null == l || S === I.QZA.SUBMITTING) return !1;
                  v = !1;
                  for (let e = C.length - 1; e >= 0; e--) {
                      let t = C[e];
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
                          (C[e] = n), !A && (null == N ? void 0 : N.id) === n.id && (N = n);
                      } else (null == N ? void 0 : N.id) === t.id && (N = null), C.splice(e, 1);
                  }
                  for (let e of l)
                      null ==
                          C.find((t) => {
                              let { id: n } = t;
                              if (n === e.id) return !0;
                          }) && C.push(e);
                  (C = [...C]), x();
              },
              INTEGRATION_SETTINGS_SUBMITTING: function () {
                  (S = I.QZA.SUBMITTING), (T = {});
              },
              INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                  var t;
                  if (S !== I.QZA.SUBMITTING) return !1;
                  (S = I.QZA.OPEN), (T = null !== (t = e.errors) && void 0 !== t ? t : {});
              }
          }
);
t.Z = O;
