let r;
n.d(t, { Z: () => S }), n(388685), n(539854), n(781311), n(35282);
var l,
    s = n(442837),
    i = n(570140),
    a = n(278323),
    o = n(212819),
    c = n(933557),
    u = n(592125),
    d = n(430824),
    h = n(293273),
    f = n(158776),
    g = n(699516),
    p = n(594174),
    O = n(55589),
    y = n(981631);
function x(e, t, n) {
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
let b = [o.h8.TEXT_CHANNEL, o.h8.GROUP_DM, o.h8.USER],
    N = null,
    m = null,
    E = [],
    C = [];
function j(e) {
    (E = [...E, e]),
        (C = C.map((e) => {
            var t, n;
            return (
                (t = (function (e) {
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
                                x(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n = { sent: E.includes(e.data.record.id) }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t
            );
        })),
        P.emitChange();
}
function v() {
    (N = null), null != r && (r.destroy(), (r = null)), null != m && m();
}
function T() {
    let e = null != N && null != N.application_id ? h.Z.getApplicationActivity(N.application_id) : null;
    if (null != N && (null == e || null == e.party || null == e.party.id)) return v();
}
class I extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(h.Z);
    }
    getActivity() {
        return N;
    }
    getQuery() {
        var e;
        return null != (e = null == r ? void 0 : r.query) ? e : "";
    }
    getResults() {
        return C;
    }
}
x(I, "displayName", "ActivityInviteModalStore");
let P = new I(i.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (N = e.activity),
                (m = e.resolve),
                (E = []),
                null == r &&
                    (r = new o.ZP(
                        (e, t) => {
                            (C = (
                                "" === t.trim()
                                    ? (function () {
                                          let e = [];
                                          return (
                                              O.Z.getPrivateChannelIds().forEach((t) => {
                                                  let n = u.Z.getChannel(t);
                                                  if (null != n)
                                                      if (n.type === y.d4z.DM) {
                                                          let t = n.getRecipientId(),
                                                              r = null != t ? p.default.getUser(t) : null;
                                                          null != r &&
                                                              e.push({
                                                                  type: o.h8.USER,
                                                                  record: r,
                                                                  score: 0,
                                                              });
                                                      } else
                                                          n.isMultiUserDM() &&
                                                              e.push({
                                                                  type: o.h8.GROUP_DM,
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
                                        case o.h8.USER: {
                                            let { record: t } = e;
                                            return {
                                                type: o.h8.USER,
                                                sent: E.includes(t.id),
                                                status: f.Z.getStatus(t.id),
                                                data: e,
                                            };
                                        }
                                        case o.h8.TEXT_CHANNEL: {
                                            var t;
                                            let { record: n } = e,
                                                r = u.Z.getChannel(n.parent_id),
                                                l = d.Z.getGuild(n.guild_id);
                                            return {
                                                type: o.h8.TEXT_CHANNEL,
                                                sent: E.includes(n.id),
                                                categoryName: null != r ? (0, c.F6)(r, p.default, g.Z) : "",
                                                guildName: null != (t = null == l ? void 0 : l.name) ? t : "",
                                                data: e,
                                            };
                                        }
                                        case o.h8.GROUP_DM: {
                                            let { record: t } = e;
                                            return {
                                                type: o.h8.GROUP_DM,
                                                sent: E.includes(t.id),
                                                data: e,
                                            };
                                        }
                                        default:
                                            return null;
                                    }
                                })
                                .filter((e) => null != e)),
                                P.emitChange();
                        },
                        b,
                        100,
                    )),
                r.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != r && r.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == N) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? a.Z.sendActivityInvite({
                      channelId: t,
                      type: y.mFx.JOIN,
                      activity: N,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => j(t))
                : null != n &&
                  a.Z.sendActivityInviteUser({
                      userId: n,
                      type: y.mFx.JOIN,
                      activity: N,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => j(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: v,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != N && (v(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: T,
        RPC_APP_DISCONNECTED: T,
    }),
    S = 12633 == n.j ? P : null;
