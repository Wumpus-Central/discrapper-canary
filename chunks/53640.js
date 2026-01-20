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
    g = n(496675),
    h = n(855674),
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
function E(e) {
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
let _ = [],
    O = null,
    v = !1,
    I = m.QZA.CLOSED,
    y = {},
    C = !1,
    S = null;
function T() {
    if (
        ((r = null != (i = p.Z.getChannel()) ? f.Z.getGuild(i.guild_id) : null),
        (_ = null != i && null != r && g.Z.can(m.Plq.MANAGE_WEBHOOKS, i) ? h.Z.getWebhooksForChannel(r.id, i.id) : []),
        null != O)
    ) {
        let e = j(O.id);
        null != e && (O = e);
    }
    (I = m.QZA.OPEN), (y = {}), (C = !1);
}
let N = s().debounce(() => {
    C && ((null == O || s().isEqual(O, j(O.id))) && (C = !1), C || P.emitChange());
}, 500);
function j(e) {
    return _.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
class x extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, f.Z, h.Z, g.Z);
    }
    hasChanges() {
        return C;
    }
    get webhooks() {
        return _;
    }
    get editedWebhook() {
        return O;
    }
    get formState() {
        return I;
    }
    getWebhook(e) {
        return j(e);
    }
    showNotice() {
        return this.hasChanges();
    }
    getProps() {
        return {
            submitting: I === m.QZA.SUBMITTING,
            webhooks: _,
            editedWebhook: O,
            section: l,
            sectionId: S,
            hasChanges: this.hasChanges(),
            isFetching: v,
            errors: y,
        };
    }
}
b(x, "displayName", "ChannelSettingsIntegrationsStore");
let P = new x(
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
                          null != e && null != t && (d.Z.fetchForChannel(t, e.id), (v = !0)), T();
                      }
                  },
                  INTEGRATION_SETTINGS_SET_SECTION: function (e) {
                      let { section: t, sectionId: n } = e;
                      (l = t), (S = n);
                  },
                  INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function (e) {
                      let { webhookId: t } = e,
                          n = j(t);
                      if (null == n) return !1;
                      (O = n), (y = {}), (C = !1);
                  },
                  INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function () {
                      (O = null), (y = {}), (C = !1);
                  },
                  INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function (e) {
                      let { settings: t } = e;
                      if (null == O) return !1;
                      (O = E({}, O)),
                          null != t.name && O.name !== t.name && ((O.name = t.name), (C = !0)),
                          void 0 !== t.avatar && O.avatar !== t.avatar && ((O.avatar = t.avatar), (C = !0)),
                          null != t.channelId &&
                              O.channel_id !== t.channelId &&
                              ((O.channel_id = t.channelId), (C = !0)),
                          C && N();
                  },
                  CHANNEL_SETTINGS_CLOSE: function () {
                      (i = null), (r = null), (_ = []), (O = null), (I = m.QZA.CLOSED);
                  },
                  WEBHOOKS_UPDATE: function (e) {
                      let { guildId: t, channelId: n, webhooks: l } = e;
                      if (
                          ((v = !1),
                          null != r && t === r.id && null != i && n === i.id && null != l && I !== m.QZA.SUBMITTING)
                      ) {
                          for (let e = _.length - 1; e >= 0; e--) {
                              let t = _[e];
                              if (null != n && (null == t ? void 0 : t.channel_id) !== n) continue;
                              let r = l.find((e) => {
                                  let { id: n } = e;
                                  if (n === t.id) return !0;
                              });
                              if (null != r) {
                                  let n = E({}, t, r);
                                  (_[e] = n), C || (null == O ? void 0 : O.id) !== n.id || (O = n);
                              } else (null == O ? void 0 : O.id) === t.id && (O = null), _.splice(e, 1);
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
                      (I = m.QZA.SUBMITTING), (y = {});
                  },
                  INTEGRATION_SETTINGS_SAVE_FAILURE: function (e) {
                      var t;
                      if (I !== m.QZA.SUBMITTING) return !1;
                      (I = m.QZA.OPEN), (y = null != (t = e.errors) ? t : {});
                  },
              },
    ),
    A = P;
