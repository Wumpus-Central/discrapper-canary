let l;
n.d(t, { Z: () => P }), n(388685), n(539854), n(781311), n(35282);
var i,
    r = n(442837),
    a = n(570140),
    o = n(278323),
    s = n(212819),
    u = n(933557),
    c = n(592125),
    d = n(430824),
    f = n(293273),
    g = n(158776),
    h = n(699516),
    p = n(594174),
    E = n(55589),
    N = n(981631);
function O(e, t, n) {
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
let y = [s.h8.TEXT_CHANNEL, s.h8.GROUP_DM, s.h8.USER],
    C = null,
    T = null,
    _ = [],
    m = [];
function I(e) {
    (_ = [..._, e]),
        (m = m.map((e) => {
            var t, n;
            return (
                (t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                O(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n = { sent: _.includes(e.data.record.id) }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t
            );
        })),
        x.emitChange();
}
function S() {
    (C = null), null != l && (l.destroy(), (l = null)), null != T && T();
}
function b() {
    let e = null != C && null != C.application_id ? f.Z.getApplicationActivity(C.application_id) : null;
    if (null != C && (null == e || null == e.party || null == e.party.id)) return S();
}
class v extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, d.Z, f.Z, g.Z, E.Z, p.default);
    }
    getActivity() {
        return C;
    }
    getQuery() {
        var e;
        return null != (e = null == l ? void 0 : l.query) ? e : "";
    }
    getResults() {
        return m;
    }
}
O(v, "displayName", "ActivityInviteModalStore");
let x = new v(a.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (C = e.activity),
                (T = e.resolve),
                (_ = []),
                null == l &&
                    (l = new s.ZP(
                        (e, t) => {
                            (m = (
                                "" === t.trim()
                                    ? (function () {
                                          let e = [];
                                          return (
                                              E.Z.getPrivateChannelIds().forEach((t) => {
                                                  let n = c.Z.getChannel(t);
                                                  if (null != n)
                                                      if (n.type === N.d4z.DM) {
                                                          let t = n.getRecipientId(),
                                                              l = null != t ? p.default.getUser(t) : null;
                                                          null != l &&
                                                              e.push({
                                                                  type: s.h8.USER,
                                                                  record: l,
                                                                  score: 0,
                                                              });
                                                      } else
                                                          n.isMultiUserDM() &&
                                                              e.push({
                                                                  type: s.h8.GROUP_DM,
                                                                  record: n,
                                                                  score: 0,
                                                              });
                                              }),
                                              e
                                          );
                                      })()
                                    : e
                            )
                                .map((e) => {
                                    switch (e.type) {
                                        case s.h8.USER: {
                                            let { record: t } = e;
                                            return {
                                                type: s.h8.USER,
                                                sent: _.includes(t.id),
                                                status: g.Z.getStatus(t.id),
                                                data: e,
                                            };
                                        }
                                        case s.h8.TEXT_CHANNEL: {
                                            var t;
                                            let { record: n } = e,
                                                l = c.Z.getChannel(n.parent_id),
                                                i = d.Z.getGuild(n.guild_id);
                                            return {
                                                type: s.h8.TEXT_CHANNEL,
                                                sent: _.includes(n.id),
                                                categoryName: null != l ? (0, u.F6)(l, p.default, h.Z) : "",
                                                guildName: null != (t = null == i ? void 0 : i.name) ? t : "",
                                                data: e,
                                            };
                                        }
                                        case s.h8.GROUP_DM: {
                                            let { record: t } = e;
                                            return {
                                                type: s.h8.GROUP_DM,
                                                sent: _.includes(t.id),
                                                data: e,
                                            };
                                        }
                                        default:
                                            return null;
                                    }
                                })
                                .filter((e) => null != e)),
                                x.emitChange();
                        },
                        y,
                        100,
                    )),
                l.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != l && l.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == C) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? o.Z.sendActivityInvite({
                      channelId: t,
                      type: N.mFx.JOIN,
                      activity: C,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => I(t))
                : null != n &&
                  o.Z.sendActivityInviteUser({
                      userId: n,
                      type: N.mFx.JOIN,
                      activity: C,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => I(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: S,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != C && (S(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: b,
        RPC_APP_DISCONNECTED: b,
    }),
    P = 12633 == n.j ? x : null;
