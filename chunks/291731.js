let i, r, a;
n.d(t, { A: () => v }), n(321073);
var l = n(735438),
    s = n.n(l),
    o = n(311907),
    d = n(73153),
    u = n(824953),
    c = n(863036),
    A = n(71393),
    h = n(576705),
    _ = n(718116),
    E = n(652215);
let p = [],
    m = null,
    g = !1,
    I = E.XlH.CLOSED,
    C = {},
    f = !1,
    T = null;
function S() {
    if (
        ((i = null != (r = c.A.getChannel()) ? A.A.getGuild(r.guild_id) : null),
        (p = null != r && null != i && h.A.can(E.xBc.MANAGE_WEBHOOKS, r) ? _.A.getWebhooksForChannel(i.id, r.id) : []),
        null != m)
    ) {
        let e = O(m.id);
        null != e && (m = e);
    }
    (I = E.XlH.OPEN), (C = {}), (f = !1);
}
let N = s().debounce(() => {
    f && ((null == m || s().isEqual(m, O(m.id))) && (f = !1), f || y.emitChange());
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
        this.waitFor(c.A, A.A, _.A, h.A);
    }
    hasChanges() {
        return f;
    }
    get webhooks() {
        return p;
    }
    get editedWebhook() {
        return m;
    }
    get formState() {
        return I;
    }
    getWebhook(e) {
        return O(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: I === E.XlH.SUBMITTING,
            webhooks: p,
            editedWebhook: m,
            section: a,
            sectionId: T,
            hasChanges: this.hasChanges(),
            isFetching: g,
            errors: C,
        };
    }
}
let y = new L(
        d.h,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: S,
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: S,
                  CHANNEL_SETTINGS_SET_SECTION: function (e) {
                      let { section: t } = e;
                      if (t !== E.p_A.INTEGRATIONS) return !1;
                      if (((a = E.wLn.OVERVIEW), null == i)) {
                          let e = c.A.getChannel(),
                              t = e?.getGuildId();
                          null != e && null != t && (u.A.fetchForChannel(t, e.id), (g = !0)), S();
                      }
                  },
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (a = t), (T = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = O(t);
                      if (null == n) return !1;
                      (m = n), (C = {}), (f = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (m = null), (C = {}), (f = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == m) return !1;
                      (m = { ...m }),
                          null != t.name && m.name !== t.name && ((m.name = t.name), (f = !0)),
                          void 0 !== t.avatar && m.avatar !== t.avatar && ((m.avatar = t.avatar), (f = !0)),
                          null != t.channelId &&
                              m.channel_id !== t.channelId &&
                              ((m.channel_id = t.channelId), (f = !0)),
                          f && N();
                  },
                  CHANNEL_SETTINGS_CLOSE: function () {
                      (r = null), (i = null), (p = []), (m = null), (I = E.XlH.CLOSED);
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: a } = e;
                      if (
                          ((g = !1),
                          null != i && t === i.id && null != r && n === r.id && null != a && I !== E.XlH.SUBMITTING)
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
                                  (p[e] = n), f || m?.id !== n.id || (m = n);
                              } else m?.id === t.id && (m = null), p.splice(e, 1);
                          }
                          for (let e of a)
                              null ==
                                  p.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && p.push(e);
                          (p = [...p]), N();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (I = E.XlH.SUBMITTING), (C = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      if (I !== E.XlH.SUBMITTING) return !1;
                      (I = E.XlH.OPEN), (C = e.errors ?? {});
                  },
              },
    ),
    v = y;
