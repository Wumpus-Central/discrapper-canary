let r, i, l;
n.d(t, { Z: () => Z }), n(653041), n(47120);
var o,
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    u = n(570140),
    d = n(308063),
    p = n(388610),
    h = n(430824),
    g = n(496675),
    f = n(855674),
    m = n(981631);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
let E = [],
    O = null,
    N = !1,
    v = m.QZA.CLOSED,
    y = {},
    I = !1,
    C = null;
function S() {
    if (((r = null != (i = p.Z.getChannel()) ? h.Z.getGuild(i.guild_id) : null), (E = null != i && null != r && g.Z.can(m.Plq.MANAGE_WEBHOOKS, i) ? f.Z.getWebhooksForChannel(r.id, i.id) : []), null != O)) {
        let e = P(O.id);
        null != e && (O = e);
    }
    (v = m.QZA.OPEN), (y = {}), (I = !1);
}
let T = s().debounce(() => {
    I && ((null == O || s().isEqual(O, P(O.id))) && (I = !1), I || A.emitChange());
}, 500);
function P(e) {
    return E.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class j extends (o = c.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, h.Z, f.Z, g.Z);
    }
    hasChanges() {
        return I;
    }
    get webhooks() {
        return E;
    }
    get editedWebhook() {
        return O;
    }
    get formState() {
        return v;
    }
    getWebhook(e) {
        return P(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: v === m.QZA.SUBMITTING,
            webhooks: E,
            editedWebhook: O,
            section: l,
            sectionId: C,
            hasChanges: this.hasChanges(),
            isFetching: N,
            errors: y
        };
    }
}
b(j, 'displayName', 'ChannelSettingsIntegrationsStore');
let A = new j(
        u.Z,
        __OVERLAY__
            ? {}
            : {
                  INTEGRATION_SETTINGS_INIT: S,
                  INTEGRATION_SETTINGS_SAVE_SUCCESS: S,
                  CHANNEL_SETTINGS_SET_SECTION: function (e) {
                      let { section: t } = e;
                      if (t !== m.CoT.INTEGRATIONS) return !1;
                      if (((l = m.b4C.OVERVIEW), null == r)) {
                          let e = p.Z.getChannel(),
                              t = null == e ? void 0 : e.getGuildId();
                          null != e && null != t && (d.Z.fetchForChannel(t, e.id), (N = !0)), S();
                      }
                  },
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (l = t), (C = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = P(t);
                      if (null == n) return !1;
                      (O = n), (y = {}), (I = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (O = null), (y = {}), (I = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == O) return !1;
                      (O = _({}, O)), null != t.name && O.name !== t.name && ((O.name = t.name), (I = !0)), void 0 !== t.avatar && O.avatar !== t.avatar && ((O.avatar = t.avatar), (I = !0)), null != t.channelId && O.channel_id !== t.channelId && ((O.channel_id = t.channelId), (I = !0)), I && T();
                  },
                  CHANNEL_SETTINGS_CLOSE: function () {
                      (i = null), (r = null), (E = []), (O = null), (v = m.QZA.CLOSED);
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: l } = e;
                      if (((N = !1), null != r && t === r.id && null != i && n === i.id && null != l && v !== m.QZA.SUBMITTING)) {
                          for (let e = E.length - 1; e >= 0; e--) {
                              let t = E[e];
                              if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
                              let r = l.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != r) {
                                  let n = _({}, t, r);
                                  (E[e] = n), I || (null == O ? void 0 : O.id) !== n.id || (O = n);
                              } else (null == O ? void 0 : O.id) === t.id && (O = null), E.splice(e, 1);
                          }
                          for (let e of l)
                              null ==
                                  E.find((t) => {
                                      let { id: n } = t;
                                      if (n === e.id) return !0;
                                  }) && E.push(e);
                          (E = [...E]), T();
                      }
                  },
                  INTEGRATION_SETTINGS_SUBMITTING: function () {
                      (v = m.QZA.SUBMITTING), (y = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      var t;
                      if (v !== m.QZA.SUBMITTING) return !1;
                      (v = m.QZA.OPEN), (y = null !== (t = e.errors) && void 0 !== t ? t : {});
                  }
              }
    ),
    Z = A;
