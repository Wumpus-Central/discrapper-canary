let i, a, r;
n.d(t, { A: () => D }), n(321073);
var s = n(735438),
    l = n.n(s),
    o = n(17928),
    d = n(228366),
    c = n(824953),
    _ = n(863036),
    E = n(71393),
    u = n(576705),
    A = n(718116),
    I = n(652215);
let T = [],
    h = null,
    S = !1,
    N = I.XlH.CLOSED,
    f = {},
    p = !1,
    m = null;
function O() {
    if (
        ((i = null != (a = _.A.getChannel()) ? E.A.getGuild(a.guild_id) : null),
        (T = null != a && null != i && u.A.can(I.xBc.MANAGE_WEBHOOKS, a) ? A.A.getWebhooksForChannel(i.id, a.id) : []),
        null != h)
    ) {
        let e = R(h.id);
        null != e && (h = e);
    }
    (N = I.XlH.OPEN), (f = {}), (p = !1);
}
let C = l().debounce(() => {
    p && ((null == h || l().isEqual(h, R(h.id))) && (p = !1), p || L.emitChange());
}, 500);
function R(e) {
    return T.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class g extends o.Ay.Store {
    static displayName = "ChannelSettingsIntegrationsStore";
    initialize() {
        this.waitFor(_.A, E.A, A.A, u.A);
    }
    hasChanges() {
        return p;
    }
    get webhooks() {
        return T;
    }
    get editedWebhook() {
        return h;
    }
    get formState() {
        return N;
    }
    getWebhook(e) {
        return R(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: N === I.XlH.SUBMITTING,
            webhooks: T,
            editedWebhook: h,
            section: r,
            sectionId: m,
            hasChanges: this.hasChanges(),
            isFetching: S,
            errors: f,
        };
    }
}
let L = new g(
        d.h,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: O,
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: O,
                  CHANNEL_SETTINGS_SET_SECTION: function (e) {
                      let { section: t } = e;
                      if (t !== I.p_A.INTEGRATIONS) return !1;
                      if (((r = I.wLn.OVERVIEW), null == i)) {
                          let e = _.A.getChannel(),
                              t = e?.getGuildId();
                          null != e && null != t && (c.A.fetchForChannel(t, e.id), (S = !0)), O();
                      }
                  },
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (r = t), (m = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = R(t);
                      if (null == n) return !1;
                      (h = n), (f = {}), (p = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (h = null), (f = {}), (p = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == h) return !1;
                      (h = { ...h }),
                          null != t.name && h.name !== t.name && ((h.name = t.name), (p = !0)),
                          void 0 !== t.avatar && h.avatar !== t.avatar && ((h.avatar = t.avatar), (p = !0)),
                          null != t.channelId &&
                              h.channel_id !== t.channelId &&
                              ((h.channel_id = t.channelId), (p = !0)),
                          p && C();
                  },
                  CHANNEL_SETTINGS_CLOSE: function () {
                      (a = null), (i = null), (T = []), (h = null), (N = I.XlH.CLOSED);
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: r } = e;
                      if (
                          ((S = !1),
                          null != i && t === i.id && null != a && n === a.id && null != r && N !== I.XlH.SUBMITTING)
                      ) {
                          for (let e = T.length - 1; e >= 0; e--) {
                              let t = T[e];
                              if (null != n && t?.channel_id !== n) continue;
                              let i = r.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != i) {
                                  let n = { ...t, ...i };
                                  (T[e] = n), p || h?.id !== n.id || (h = n);
                              } else h?.id === t.id && (h = null), T.splice(e, 1);
                          }
                          for (let e of r)
                              null ==
                                  T.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && T.push(e);
                          (T = [...T]), C();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (N = I.XlH.SUBMITTING), (f = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      if (N !== I.XlH.SUBMITTING) return !1;
                      (N = I.XlH.OPEN), (f = e.errors ?? {});
                  },
              },
    ),
    D = L;
