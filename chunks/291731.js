let r, i, l;
n.d(t, { A: () => P }), n(321073), n(896048);
var a,
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    u = n(73153),
    d = n(824953),
    p = n(863036),
    f = n(71393),
    h = n(576705),
    A = n(718116),
    g = n(652215);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
let _ = [],
    E = null,
    O = !1,
    y = g.XlH.CLOSED,
    I = {},
    v = !1,
    S = null;
function C() {
    if (
        ((r = null != (i = p.A.getChannel()) ? f.A.getGuild(i.guild_id) : null),
        (_ = null != i && null != r && h.A.can(g.xBc.MANAGE_WEBHOOKS, i) ? A.A.getWebhooksForChannel(r.id, i.id) : []),
        null != E)
    ) {
        let e = T(E.id);
        null != e && (E = e);
    }
    (y = g.XlH.OPEN), (I = {}), (v = !1);
}
let N = o().debounce(() => {
    v && ((null == E || o().isEqual(E, T(E.id))) && (v = !1), v || x.emitChange());
}, 500);
function T(e) {
    return _.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class j extends (a = c.Ay.Store) {
    initialize() {
        this.waitFor(p.A, f.A, A.A, h.A);
    }
    hasChanges() {
        return v;
    }
    get webhooks() {
        return _;
    }
    get editedWebhook() {
        return E;
    }
    get formState() {
        return y;
    }
    getWebhook(e) {
        return T(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: y === g.XlH.SUBMITTING,
            webhooks: _,
            editedWebhook: E,
            section: l,
            sectionId: S,
            hasChanges: this.hasChanges(),
            isFetching: O,
            errors: I,
        };
    }
}
m(j, "displayName", "ChannelSettingsIntegrationsStore");
let x = new j(
        u.h,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: C,
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: C,
                  CHANNEL_SETTINGS_SET_SECTION: function (e) {
                      let { section: t } = e;
                      if (t !== g.p_A.INTEGRATIONS) return !1;
                      if (((l = g.wLn.OVERVIEW), null == r)) {
                          let e = p.A.getChannel(),
                              t = null == e ? void 0 : e.getGuildId();
                          null != e && null != t && (d.A.fetchForChannel(t, e.id), (O = !0)), C();
                      }
                  },
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (l = t), (S = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = T(t);
                      if (null == n) return !1;
                      (E = n), (I = {}), (v = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (E = null), (I = {}), (v = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == E) return !1;
                      (E = b({}, E)),
                          null != t.name && E.name !== t.name && ((E.name = t.name), (v = !0)),
                          void 0 !== t.avatar && E.avatar !== t.avatar && ((E.avatar = t.avatar), (v = !0)),
                          null != t.channelId &&
                              E.channel_id !== t.channelId &&
                              ((E.channel_id = t.channelId), (v = !0)),
                          v && N();
                  },
                  CHANNEL_SETTINGS_CLOSE: function () {
                      (i = null), (r = null), (_ = []), (E = null), (y = g.XlH.CLOSED);
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: l } = e;
                      if (
                          ((O = !1),
                          null != r && t === r.id && null != i && n === i.id && null != l && y !== g.XlH.SUBMITTING)
                      ) {
                          for (let e = _.length - 1; e >= 0; e--) {
                              let t = _[e];
                              if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
                              let r = l.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != r) {
                                  let n = b({}, t, r);
                                  (_[e] = n), v || (null == E ? void 0 : E.id) !== n.id || (E = n);
                              } else (null == E ? void 0 : E.id) === t.id && (E = null), _.splice(e, 1);
                          }
                          for (let e of l)
                              null ==
                                  _.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && _.push(e);
                          (_ = [..._]), N();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (y = g.XlH.SUBMITTING), (I = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      var t;
                      if (y !== g.XlH.SUBMITTING) return !1;
                      (y = g.XlH.OPEN), (I = null != (t = e.errors) ? t : {});
                  },
              },
    ),
    P = x;
