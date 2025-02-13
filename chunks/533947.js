let i, l, r;
n.d(t, { Z: () => O }), n(653041), n(47120);
var a,
    s,
    o,
    c = n(392711),
    d = n.n(c),
    u = n(442837),
    h = n(570140),
    m = n(308063),
    p = n(388610),
    g = n(430824),
    _ = n(496675),
    f = n(855674),
    E = n(981631);
let I = [],
    C = null,
    N = !1,
    v = E.QZA.CLOSED,
    T = {},
    S = !1,
    A = null;
function b() {
    if (((i = null != (l = p.Z.getChannel()) ? g.Z.getGuild(l.guild_id) : null), (I = null != l && null != i && _.Z.can(E.Plq.MANAGE_WEBHOOKS, l) ? f.Z.getWebhooksForChannel(i.id, l.id) : []), null != C)) {
        let e = x(C.id);
        null != e && (C = e);
    }
    (v = E.QZA.OPEN), (T = {}), (S = !1);
}
let Z = d().debounce(() => {
    S && ((null == C || d().isEqual(C, x(C.id))) && (S = !1), S || y.emitChange());
}, 500);
function x(e) {
    return I.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class L extends (a = u.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, g.Z, f.Z, _.Z);
    }
    hasChanges() {
        return S;
    }
    get webhooks() {
        return I;
    }
    get editedWebhook() {
        return C;
    }
    get formState() {
        return v;
    }
    getWebhook(e) {
        return x(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: v === E.QZA.SUBMITTING,
            webhooks: I,
            editedWebhook: C,
            section: r,
            sectionId: A,
            hasChanges: this.hasChanges(),
            isFetching: N,
            errors: T
        };
    }
}
(o = 'ChannelSettingsIntegrationsStore'),
    (s = 'displayName') in L
        ? Object.defineProperty(L, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (L[s] = o);
let y = new L(
        h.Z,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: b,
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: b,
                  CHANNEL_SETTINGS_SET_SECTION: function (e) {
                      let { section: t } = e;
                      if (t !== E.CoT.INTEGRATIONS) return !1;
                      if (((r = E.b4C.OVERVIEW), null == i)) {
                          let e = p.Z.getChannel(),
                              t = null == e ? void 0 : e.getGuildId();
                          null != e && null != t && (m.Z.fetchForChannel(t, e.id), (N = !0)), b();
                      }
                  },
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (r = t), (A = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = x(t);
                      if (null == n) return !1;
                      (C = n), (T = {}), (S = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (C = null), (T = {}), (S = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == C) return !1;
                      (C = { ...C }), null != t.name && C.name !== t.name && ((C.name = t.name), (S = !0)), void 0 !== t.avatar && C.avatar !== t.avatar && ((C.avatar = t.avatar), (S = !0)), null != t.channelId && C.channel_id !== t.channelId && ((C.channel_id = t.channelId), (S = !0)), S && Z();
                  },
                  CHANNEL_SETTINGS_CLOSE: function () {
                      (l = null), (i = null), (I = []), (C = null), (v = E.QZA.CLOSED);
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: r } = e;
                      if (((N = !1), null != i && t === i.id && null != l && n === l.id && null != r && v !== E.QZA.SUBMITTING)) {
                          for (let e = I.length - 1; e >= 0; e--) {
                              let t = I[e];
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
                                  (I[e] = n), S || (null == C ? void 0 : C.id) !== n.id || (C = n);
                              } else (null == C ? void 0 : C.id) === t.id && (C = null), I.splice(e, 1);
                          }
                          for (let e of r)
                              null ==
                                  I.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && I.push(e);
                          (I = [...I]), Z();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (v = E.QZA.SUBMITTING), (T = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      var t;
                      if (v !== E.QZA.SUBMITTING) return !1;
                      (v = E.QZA.OPEN), (T = null !== (t = e.errors) && void 0 !== t ? t : {});
                  }
              }
    ),
    O = y;
