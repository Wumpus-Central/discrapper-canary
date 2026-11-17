let i, r, a;
n(321073);
var s = n(435558),
    l = n.n(s),
    o = n(855986),
    d = n(73153),
    c = n(824953),
    u = n(863036),
    _ = n(71393),
    E = n(576705),
    A = n(718116),
    f = n(652215);
let h = [],
    I = null,
    p = !1,
    m = f.XlH.CLOSED,
    g = {},
    T = !1,
    S = null;
function N() {
    if (
        ((i = null != (r = u.A.getChannel()) ? _.A.getGuild(r.guild_id) : null),
        (h = null != r && null != i && E.A.can(f.xBc.MANAGE_WEBHOOKS, r) ? A.A.getWebhooksForChannel(i.id, r.id) : []),
        null != I)
    ) {
        let e = O(I.id);
        null != e && (I = e);
    }
    ((m = f.XlH.OPEN), (g = {}), (T = !1));
}
let C = l().debounce(() => {
    T && ((null == I || l().isEqual(I, O(I.id))) && (T = !1), T || L.emitChange());
}, 500);
function O(e) {
    return h.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class R extends o.Ay.Store {
    static displayName = "ChannelSettingsIntegrationsStore";
    initialize() {
        this.waitFor(u.A, _.A, A.A, E.A);
    }
    hasChanges() {
        return T;
    }
    get webhooks() {
        return h;
    }
    get editedWebhook() {
        return I;
    }
    get formState() {
        return m;
    }
    getWebhook(e) {
        return O(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: m === f.XlH.SUBMITTING,
            webhooks: h,
            editedWebhook: I,
            section: a,
            sectionId: S,
            hasChanges: this.hasChanges(),
            isFetching: p,
            errors: g,
        };
    }
}
let L = new R(
    d.h,
    __OVERLAY__
        ? {}
        : {
              INTEGRATION_SETTINGS_INIT: N,
              INTEGRATION_SETTINGS_SAVE_SUCCESS: N,
              CHANNEL_SETTINGS_SET_SECTION: function (e) {
                  let { section: t } = e;
                  if (t !== f.p_A.INTEGRATIONS) return !1;
                  if (((a = f.wLn.OVERVIEW), null == i)) {
                      let e = u.A.getChannel(),
                          t = e?.getGuildId();
                      (null != e && null != t && (c.A.fetchForChannel(t, e.id), (p = !0)), N());
                  }
              },
              INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                  let { section: t, sectionId: n } = e;
                  ((a = t), (S = n));
              },
              INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                  let { webhookId: t } = e,
                      n = O(t);
                  if (null == n) return !1;
                  ((I = n), (g = {}), (T = !1));
              },
              INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                  ((I = null), (g = {}), (T = !1));
              },
              INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                  let { settings: t } = e;
                  if (null == I) return !1;
                  ((I = { ...I }),
                      null != t.name && I.name !== t.name && ((I.name = t.name), (T = !0)),
                      void 0 !== t.avatar && I.avatar !== t.avatar && ((I.avatar = t.avatar), (T = !0)),
                      null != t.channelId && I.channel_id !== t.channelId && ((I.channel_id = t.channelId), (T = !0)),
                      T && C());
              },
              CHANNEL_SETTINGS_CLOSE: function () {
                  ((r = null), (i = null), (h = []), (I = null), (m = f.XlH.CLOSED));
              },
              WEBHOOKS_UPDATE: function (e) {
                  let { guildId: t, channelId: n, webhooks: a } = e;
                  if (
                      ((p = !1),
                      null != i && t === i.id && null != r && n === r.id && null != a && m !== f.XlH.SUBMITTING)
                  ) {
                      for (let e = h.length - 1; e >= 0; e--) {
                          let t = h[e];
                          if (null != n && t?.channel_id !== n) continue;
                          let i = a.find((e) => {
                              let { id: n } = e;
                              if (n === t.id) return !0;
                          });
                          if (null != i) {
                              let n = { ...t, ...i };
                              ((h[e] = n), T || I?.id !== n.id || (I = n));
                          } else (I?.id === t.id && (I = null), h.splice(e, 1));
                      }
                      for (let e of a)
                          null ==
                              h.find((t) => {
                                  let { id: n } = t;
                                  if (n === e.id) return !0;
                              }) && h.push(e);
                      ((h = [...h]), C());
                  }
              },
              INTEGRATION_SETTINGS_SUBMITTING: function () {
                  ((m = f.XlH.SUBMITTING), (g = {}));
              },
              INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                  if (m !== f.XlH.SUBMITTING) return !1;
                  ((m = f.XlH.OPEN), (g = e.errors ?? {}));
              },
          },
);
n.d(t, {}, { A: L });
