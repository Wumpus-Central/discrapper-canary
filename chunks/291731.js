"use strict";
let i, r, s;
n.d(t, { A: () => R }), n(321073);
var a = n(735438),
    o = n.n(a),
    l = n(17928),
    u = n(228366),
    c = n(824953),
    d = n(863036),
    _ = n(71393),
    f = n(576705),
    h = n(718116),
    p = n(652215);
let E = [],
    m = null,
    g = !1,
    A = p.XlH.CLOSED,
    I = {},
    T = !1,
    S = null;
function N() {
    if (
        ((i = null != (r = d.A.getChannel()) ? _.A.getGuild(r.guild_id) : null),
        (E = null != r && null != i && f.A.can(p.xBc.MANAGE_WEBHOOKS, r) ? h.A.getWebhooksForChannel(i.id, r.id) : []),
        null != m)
    ) {
        let e = C(m.id);
        null != e && (m = e);
    }
    (A = p.XlH.OPEN), (I = {}), (T = !1);
}
let y = o().debounce(() => {
    T && ((null == m || o().isEqual(m, C(m.id))) && (T = !1), T || O.emitChange());
}, 500);
function C(e) {
    return E.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class v extends l.Ay.Store {
    static displayName = "ChannelSettingsIntegrationsStore";
    initialize() {
        this.waitFor(d.A, _.A, h.A, f.A);
    }
    hasChanges() {
        return T;
    }
    get webhooks() {
        return E;
    }
    get editedWebhook() {
        return m;
    }
    get formState() {
        return A;
    }
    getWebhook(e) {
        return C(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: A === p.XlH.SUBMITTING,
            webhooks: E,
            editedWebhook: m,
            section: s,
            sectionId: S,
            hasChanges: this.hasChanges(),
            isFetching: g,
            errors: I,
        };
    }
}
let O = new v(
        u.h,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: N,
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: N,
                  CHANNEL_SETTINGS_SET_SECTION: function (e) {
                      let { section: t } = e;
                      if (t !== p.p_A.INTEGRATIONS) return !1;
                      if (((s = p.wLn.OVERVIEW), null == i)) {
                          let e = d.A.getChannel(),
                              t = e?.getGuildId();
                          null != e && null != t && (c.A.fetchForChannel(t, e.id), (g = !0)), N();
                      }
                  },
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (s = t), (S = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = C(t);
                      if (null == n) return !1;
                      (m = n), (I = {}), (T = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (m = null), (I = {}), (T = !1);
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
                          T && y();
                  },
                  CHANNEL_SETTINGS_CLOSE: function () {
                      (r = null), (i = null), (E = []), (m = null), (A = p.XlH.CLOSED);
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: s } = e;
                      if (
                          ((g = !1),
                          null != i && t === i.id && null != r && n === r.id && null != s && A !== p.XlH.SUBMITTING)
                      ) {
                          for (let e = E.length - 1; e >= 0; e--) {
                              let t = E[e];
                              if (null != n && t?.channel_id !== n) continue;
                              let i = s.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != i) {
                                  let n = { ...t, ...i };
                                  (E[e] = n), T || m?.id !== n.id || (m = n);
                              } else m?.id === t.id && (m = null), E.splice(e, 1);
                          }
                          for (let e of s)
                              null ==
                                  E.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && E.push(e);
                          (E = [...E]), y();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (A = p.XlH.SUBMITTING), (I = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      if (A !== p.XlH.SUBMITTING) return !1;
                      (A = p.XlH.OPEN), (I = e.errors ?? {});
                  },
              },
    ),
    R = O;
