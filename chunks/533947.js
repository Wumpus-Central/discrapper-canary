let r, i, l;
n.d(t, { Z: () => A }), n(539854), n(388685);
var a,
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(570140),
    d = n(308063),
    p = n(388610),
    f = n(430824),
    h = n(496675),
    g = n(855674),
    m = n(981631);
function b(e, t, n) {
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
function _(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
let O = [],
    E = null,
    y = !1,
    v = m.QZA.CLOSED,
    I = {},
    S = !1,
    C = null;
function T() {
    if (
        ((r = null != (i = p.Z.getChannel()) ? f.Z.getGuild(i.guild_id) : null),
        (O = null != i && null != r && h.Z.can(m.Plq.MANAGE_WEBHOOKS, i) ? g.Z.getWebhooksForChannel(r.id, i.id) : []),
        null != E)
    ) {
        let e = j(E.id);
        null != e && (E = e);
    }
    (v = m.QZA.OPEN), (I = {}), (S = !1);
}
let N = s().debounce(() => {
    S && ((null == E || s().isEqual(E, j(E.id))) && (S = !1), S || x.emitChange());
}, 500);
function j(e) {
    return O.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class P extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, f.Z, g.Z, h.Z);
    }
    hasChanges() {
        return S;
    }
    get webhooks() {
        return O;
    }
    get editedWebhook() {
        return E;
    }
    get formState() {
        return v;
    }
    getWebhook(e) {
        return j(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: v === m.QZA.SUBMITTING,
            webhooks: O,
            editedWebhook: E,
            section: l,
            sectionId: C,
            hasChanges: this.hasChanges(),
            isFetching: y,
            errors: I,
        };
    }
}
b(P, "displayName", "ChannelSettingsIntegrationsStore");
let x = new P(
        u.Z,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: T,
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: T,
                  CHANNEL_SETTINGS_SET_SECTION: function (e) {
                      let { section: t } = e;
                      if (t !== m.CoT.INTEGRATIONS) return !1;
                      if (((l = m.b4C.OVERVIEW), null == r)) {
                          let e = p.Z.getChannel(),
                              t = null == e ? void 0 : e.getGuildId();
                          null != e && null != t && (d.Z.fetchForChannel(t, e.id), (y = !0)), T();
                      }
                  },
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (l = t), (C = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = j(t);
                      if (null == n) return !1;
                      (E = n), (I = {}), (S = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (E = null), (I = {}), (S = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == E) return !1;
                      (E = _({}, E)),
                          null != t.name && E.name !== t.name && ((E.name = t.name), (S = !0)),
                          void 0 !== t.avatar && E.avatar !== t.avatar && ((E.avatar = t.avatar), (S = !0)),
                          null != t.channelId &&
                              E.channel_id !== t.channelId &&
                              ((E.channel_id = t.channelId), (S = !0)),
                          S && N();
                  },
                  CHANNEL_SETTINGS_CLOSE: function () {
                      (i = null), (r = null), (O = []), (E = null), (v = m.QZA.CLOSED);
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: l } = e;
                      if (
                          ((y = !1),
                          null != r && t === r.id && null != i && n === i.id && null != l && v !== m.QZA.SUBMITTING)
                      ) {
                          for (let e = O.length - 1; e >= 0; e--) {
                              let t = O[e];
                              if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
                              let r = l.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != r) {
                                  let n = _({}, t, r);
                                  (O[e] = n), S || (null == E ? void 0 : E.id) !== n.id || (E = n);
                              } else (null == E ? void 0 : E.id) === t.id && (E = null), O.splice(e, 1);
                          }
                          for (let e of l)
                              null ==
                                  O.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && O.push(e);
                          (O = [...O]), N();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (v = m.QZA.SUBMITTING), (I = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      var t;
                      if (v !== m.QZA.SUBMITTING) return !1;
                      (v = m.QZA.OPEN), (I = null != (t = e.errors) ? t : {});
                  },
              },
    ),
    A = x;
