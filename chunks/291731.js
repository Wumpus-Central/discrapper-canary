let i, r, a;
n.d(t, { A: () => b }), n(321073);
var l = n(735438),
    s = n.n(l),
    o = n(17928),
    d = n(228366),
    u = n(824953),
    c = n(863036),
    _ = n(71393),
    A = n(576705),
    h = n(718116),
    E = n(652215);
let p = [],
    m = null,
    I = !1,
    g = E.XlH.CLOSED,
    C = {},
    T = !1,
    f = null;
function N() {
    if (
        ((i = null != (r = c.A.getChannel()) ? _.A.getGuild(r.guild_id) : null),
        (p = null != r && null != i && A.A.can(E.xBc.MANAGE_WEBHOOKS, r) ? h.A.getWebhooksForChannel(i.id, r.id) : []),
        null != m)
    ) {
        let e = O(m.id);
        null != e && (m = e);
    }
    (g = E.XlH.OPEN), (C = {}), (T = !1);
}
let S = s().debounce(() => {
    T && ((null == m || s().isEqual(m, O(m.id))) && (T = !1), T || y.emitChange());
}, 500);
function O(e) {
    return p.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class L extends o.Ay.Store {
    static displayName = "ChannelSettingsIntegrationsStore";
    initialize() {
        this.waitFor(c.A, _.A, h.A, A.A);
    }
    hasChanges() {
        return T;
    }
    get webhooks() {
        return p;
    }
    get editedWebhook() {
        return m;
    }
    get formState() {
        return g;
    }
    getWebhook(e) {
        return O(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: g === E.XlH.SUBMITTING,
            webhooks: p,
            editedWebhook: m,
            section: a,
            sectionId: f,
            hasChanges: this.hasChanges(),
            isFetching: I,
            errors: C,
        };
    }
}
let y = new L(
        d.h,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: N,
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: N,
                  CHANNEL_SETTINGS_SET_SECTION: function (e) {
                      let { section: t } = e;
                      if (t !== E.p_A.INTEGRATIONS) return !1;
                      if (((a = E.wLn.OVERVIEW), null == i)) {
                          let e = c.A.getChannel(),
                              t = e?.getGuildId();
                          null != e && null != t && (u.A.fetchForChannel(t, e.id), (I = !0)), N();
                      }
                  },
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (a = t), (f = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = O(t);
                      if (null == n) return !1;
                      (m = n), (C = {}), (T = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (m = null), (C = {}), (T = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == m) return !1;
                      (m = { ...m }),
                          null != t.name && m.name !== t.name && ((m.name = t.name), (T = !0)),
                          void 0 !== t.avatar && m.avatar !== t.avatar && ((m.avatar = t.avatar), (T = !0)),
                          null != t.channelId &&
                              m.channel_id !== t.channelId &&
                              ((m.channel_id = t.channelId), (T = !0)),
                          T && S();
                  },
                  CHANNEL_SETTINGS_CLOSE: function () {
                      (r = null), (i = null), (p = []), (m = null), (g = E.XlH.CLOSED);
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: a } = e;
                      if (
                          ((I = !1),
                          null != i && t === i.id && null != r && n === r.id && null != a && g !== E.XlH.SUBMITTING)
                      ) {
                          for (let e = p.length - 1; e >= 0; e--) {
                              let t = p[e];
                              if (null != n && t?.channel_id !== n) continue;
                              let i = a.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != i) {
                                  let n = { ...t, ...i };
                                  (p[e] = n), T || m?.id !== n.id || (m = n);
                              } else m?.id === t.id && (m = null), p.splice(e, 1);
                          }
                          for (let e of a)
                              null ==
                                  p.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && p.push(e);
                          (p = [...p]), S();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (g = E.XlH.SUBMITTING), (C = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      if (g !== E.XlH.SUBMITTING) return !1;
                      (g = E.XlH.OPEN), (C = e.errors ?? {});
                  },
              },
    ),
    b = y;
