let i, r, a;
(n.d(t, { A: () => y }), n(321073));
var s = n(435558),
    l = n.n(s),
    o = n(17928),
    d = n(73153),
    c = n(824953),
    u = n(863036),
    _ = n(71393),
    E = n(576705),
    A = n(718116),
    h = n(652215);
let f = [],
    I = null,
    p = !1,
    T = h.XlH.CLOSED,
    g = {},
    m = !1,
    S = null;
function N() {
    if (
        ((i = null != (r = u.A.getChannel()) ? _.A.getGuild(r.guild_id) : null),
        (f = null != r && null != i && E.A.can(h.xBc.MANAGE_WEBHOOKS, r) ? A.A.getWebhooksForChannel(i.id, r.id) : []),
        null != I)
    ) {
        let e = O(I.id);
        null != e && (I = e);
    }
    ((T = h.XlH.OPEN), (g = {}), (m = !1));
}
let C = l().debounce(() => {
    m && ((null == I || l().isEqual(I, O(I.id))) && (m = !1), m || L.emitChange());
}, 500);
function O(e) {
    return f.find((t) => {
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
        return m;
    }
    get webhooks() {
        return f;
    }
    get editedWebhook() {
        return I;
    }
    get formState() {
        return T;
    }
    getWebhook(e) {
        return O(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: T === h.XlH.SUBMITTING,
            webhooks: f,
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
                      if (t !== h.p_A.INTEGRATIONS) return !1;
                      if (((a = h.wLn.OVERVIEW), null == i)) {
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
                      ((I = n), (g = {}), (m = !1));
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      ((I = null), (g = {}), (m = !1));
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == I) return !1;
                      ((I = { ...I }),
                          null != t.name && I.name !== t.name && ((I.name = t.name), (m = !0)),
                          void 0 !== t.avatar && I.avatar !== t.avatar && ((I.avatar = t.avatar), (m = !0)),
                          null != t.channelId &&
                              I.channel_id !== t.channelId &&
                              ((I.channel_id = t.channelId), (m = !0)),
                          m && C());
                  },
                  CHANNEL_SETTINGS_CLOSE: function () {
                      ((r = null), (i = null), (f = []), (I = null), (T = h.XlH.CLOSED));
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: a } = e;
                      if (
                          ((p = !1),
                          null != i && t === i.id && null != r && n === r.id && null != a && T !== h.XlH.SUBMITTING)
                      ) {
                          for (let e = f.length - 1; e >= 0; e--) {
                              let t = f[e];
                              if (null != n && t?.channel_id !== n) continue;
                              let i = a.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != i) {
                                  let n = { ...t, ...i };
                                  ((f[e] = n), m || I?.id !== n.id || (I = n));
                              } else (I?.id === t.id && (I = null), f.splice(e, 1));
                          }
                          for (let e of a)
                              null ==
                                  f.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && f.push(e);
                          ((f = [...f]), C());
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      ((T = h.XlH.SUBMITTING), (g = {}));
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      if (T !== h.XlH.SUBMITTING) return !1;
                      ((T = h.XlH.OPEN), (g = e.errors ?? {}));
                  },
              },
    ),
    y = L;
