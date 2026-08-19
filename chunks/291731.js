"use strict";
let i, r, a;
n.d(t, { A: () => y }), n(321073);
var s = n(435558),
    l = n.n(s),
    o = n(17928),
    d = n(228366),
    c = n(824953),
    u = n(863036),
    _ = n(71393),
    E = n(576705),
    A = n(718116),
    h = n(652215);
let I = [],
    f = null,
    p = !1,
    T = h.XlH.CLOSED,
    m = {},
    g = !1,
    S = null;
function N() {
    if (
        ((i = null != (r = u.A.getChannel()) ? _.A.getGuild(r.guild_id) : null),
        (I = null != r && null != i && E.A.can(h.xBc.MANAGE_WEBHOOKS, r) ? A.A.getWebhooksForChannel(i.id, r.id) : []),
        null != f)
    ) {
        let e = O(f.id);
        null != e && (f = e);
    }
    (T = h.XlH.OPEN), (m = {}), (g = !1);
}
let C = l().debounce(() => {
    g && ((null == f || l().isEqual(f, O(f.id))) && (g = !1), g || L.emitChange());
}, 500);
function O(e) {
    return I.find((t) => {
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
        return g;
    }
    get webhooks() {
        return I;
    }
    get editedWebhook() {
        return f;
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
            webhooks: I,
            editedWebhook: f,
            section: a,
            sectionId: S,
            hasChanges: this.hasChanges(),
            isFetching: p,
            errors: m,
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
                          null != e && null != t && (c.A.fetchForChannel(t, e.id), (p = !0)), N();
                      }
                  },
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (a = t), (S = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = O(t);
                      if (null == n) return !1;
                      (f = n), (m = {}), (g = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (f = null), (m = {}), (g = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == f) return !1;
                      (f = { ...f }),
                          null != t.name && f.name !== t.name && ((f.name = t.name), (g = !0)),
                          void 0 !== t.avatar && f.avatar !== t.avatar && ((f.avatar = t.avatar), (g = !0)),
                          null != t.channelId &&
                              f.channel_id !== t.channelId &&
                              ((f.channel_id = t.channelId), (g = !0)),
                          g && C();
                  },
                  CHANNEL_SETTINGS_CLOSE: function () {
                      (r = null), (i = null), (I = []), (f = null), (T = h.XlH.CLOSED);
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: a } = e;
                      if (
                          ((p = !1),
                          null != i && t === i.id && null != r && n === r.id && null != a && T !== h.XlH.SUBMITTING)
                      ) {
                          for (let e = I.length - 1; e >= 0; e--) {
                              let t = I[e];
                              if (null != n && t?.channel_id !== n) continue;
                              let i = a.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != i) {
                                  let n = { ...t, ...i };
                                  (I[e] = n), g || f?.id !== n.id || (f = n);
                              } else f?.id === t.id && (f = null), I.splice(e, 1);
                          }
                          for (let e of a)
                              null ==
                                  I.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && I.push(e);
                          (I = [...I]), C();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (T = h.XlH.SUBMITTING), (m = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      if (T !== h.XlH.SUBMITTING) return !1;
                      (T = h.XlH.OPEN), (m = e.errors ?? {});
                  },
              },
    ),
    y = L;
