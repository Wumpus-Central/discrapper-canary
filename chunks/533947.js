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
    v = null,
    N = !1,
    T = I.QZA.CLOSED,
    S = {},
    b = !1,
    A = null;
function Z() {
    if (((i = null != (r = g.Z.getChannel()) ? f.Z.getGuild(r.guild_id) : null), (C = null != r && null != i && _.Z.can(I.Plq.MANAGE_WEBHOOKS, r) ? E.Z.getWebhooksForChannel(i.id, r.id) : []), null != v)) {
        let e = L(v.id);
        null != e && (v = e);
    }
    (T = I.QZA.OPEN), (S = {}), (b = !1);
}
let x = u().debounce(() => {
    b && ((null == v || u().isEqual(v, L(v.id))) && (b = !1), !b && P.emitChange());
}, 500);
function L(e) {
    return C.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class y extends (a = h.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, f.Z, E.Z, _.Z);
    }
    hasChanges() {
        return b;
    }
    get webhooks() {
        return C;
    }
    get editedWebhook() {
        return v;
    }
    get formState() {
        return T;
    }
    getWebhook(e) {
        return L(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: T === I.QZA.SUBMITTING,
            webhooks: C,
            editedWebhook: v,
            section: l,
            sectionId: A,
            hasChanges: this.hasChanges(),
            isFetching: N,
            errors: S
        };
    }
}
(c = 'ChannelSettingsIntegrationsStore'),
    (o = 'displayName') in (s = y)
        ? Object.defineProperty(s, o, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = c);
let P = new y(
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
                      null != e && null != t && (p.Z.fetchForChannel(t, e.id), (N = !0)), Z();
                  }
              },
              INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                  let { section: t, sectionId: n } = e;
                  (l = t), (A = n);
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                  let { webhookId: t } = e,
                      n = L(t);
                  if (null == n) return !1;
                  (v = n), (S = {}), (b = !1);
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                  (v = null), (S = {}), (b = !1);
              },
              INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                  let { settings: t } = e;
                  if (null == v) return !1;
                  (v = { ...v }), null != t.name && v.name !== t.name && ((v.name = t.name), (b = !0)), void 0 !== t.avatar && v.avatar !== t.avatar && ((v.avatar = t.avatar), (b = !0)), null != t.channelId && v.channel_id !== t.channelId && ((v.channel_id = t.channelId), (b = !0)), b && x();
              },
              CHANNEL_SETTINGS_CLOSE: function () {
                  (r = null), (i = null), (C = []), (v = null), (T = I.QZA.CLOSED);
              },
              WEBHOOKS_UPDATE: function (e) {
                  let { guildId: t, channelId: n, webhooks: l } = e;
                  if (((N = !1), null != i && t === i.id && null != r && n === r.id && null != l && T !== I.QZA.SUBMITTING)) {
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
                              (C[e] = n), !b && (null == v ? void 0 : v.id) === n.id && (v = n);
                          } else (null == v ? void 0 : v.id) === t.id && (v = null), C.splice(e, 1);
                      }
                      for (let e of l)
                          null ==
                              C.find((t) => {
                                  let { id: n } = t;
                                  if (n === e.id) return !0;
                              }) && C.push(e);
                      (C = [...C]), x();
                  }
              },
              INTEGRATION_SETTINGS_SUBMITTING: function () {
                  (T = I.QZA.SUBMITTING), (S = {});
              },
              INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                  var t;
                  if (T !== I.QZA.SUBMITTING) return !1;
                  (T = I.QZA.OPEN), (S = null !== (t = e.errors) && void 0 !== t ? t : {});
              }
          }
);
t.Z = P;
