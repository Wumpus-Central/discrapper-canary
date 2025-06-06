let r;
n.d(t, { Z: () => j }), n(388685), n(539854), n(781311), n(35282);
var l,
    i = n(442837),
    o = n(570140),
    a = n(278323),
    s = n(212819),
    u = n(933557),
    c = n(592125),
    d = n(430824),
    f = n(293273),
    h = n(158776),
    p = n(699516),
    g = n(594174),
    O = n(55589),
    y = n(981631);
function N(e, t, n) {
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
let b = [s.h8.TEXT_CHANNEL, s.h8.GROUP_DM, s.h8.USER],
    v = null,
    m = null,
    E = [],
    C = [];
function x(e) {
    (E = [...E, e]),
        (C = C.map((e) => {
            var t, n;
            return (
                (t = (function (e) {
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
                                N(e, t, n[t]);
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
        S.emitChange();
}
function I() {
    (v = null), null != r && (r.destroy(), (r = null)), null != m && m();
}
function T() {
    let e = null != v && null != v.application_id ? f.Z.getApplicationActivity(v.application_id) : null;
    if (null != v && (null == e || null == e.party || null == e.party.id)) return I();
}
class P extends (l = i.ZP.Store) {
    initialize() {
        this.waitFor(f.Z);
    }
    getActivity() {
        return v;
    }
    getQuery() {
        var e;
        return null != (e = null == r ? void 0 : r.query) ? e : '';
    }
    getResults() {
        return C;
    }
}
N(P, 'displayName', 'ActivityInviteModalStore');
let S = new P(o.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (v = e.activity),
                (m = e.resolve),
                (E = []),
                null == r &&
                    (r = new s.ZP(
                        (e, t) => {
                            (C = (
                                '' === t.trim()
                                    ? (function () {
                                          let e = [];
                                          return (
                                              O.Z.getPrivateChannelIds().forEach((t) => {
                                                  let n = c.Z.getChannel(t);
                                                  if (null != n)
                                                      if (n.type === y.d4z.DM) {
                                                          let t = n.getRecipientId(),
                                                              r = null != t ? g.default.getUser(t) : null;
                                                          null != r &&
                                                              e.push({
                                                                  type: s.h8.USER,
                                                                  record: r,
                                                                  score: 0
                                                              });
                                                      } else
                                                          n.isMultiUserDM() &&
                                                              e.push({
                                                                  type: s.h8.GROUP_DM,
                                                                  record: n,
                                                                  score: 0
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
                                                sent: E.includes(t.id),
                                                status: h.Z.getStatus(t.id),
                                                data: e
                                            };
                                        }
                                        case s.h8.TEXT_CHANNEL: {
                                            let { record: t } = e,
                                                n = c.Z.getChannel(t.parent_id),
                                                r = d.Z.getGuild(t.guild_id);
                                            return {
                                                type: s.h8.TEXT_CHANNEL,
                                                sent: E.includes(t.id),
                                                categoryName: null != n ? (0, u.F6)(n, g.default, p.Z) : '',
                                                guildName: null != r ? r.toString() : '',
                                                data: e
                                            };
                                        }
                                        case s.h8.GROUP_DM: {
                                            let { record: t } = e;
                                            return {
                                                type: s.h8.GROUP_DM,
                                                sent: E.includes(t.id),
                                                data: e
                                            };
                                        }
                                        default:
                                            return null;
                                    }
                                })
                                .filter((e) => null != e)),
                                S.emitChange();
                        },
                        b,
                        100
                    )),
                r.search('');
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != r && r.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == v) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? a.Z.sendActivityInvite({
                      channelId: t,
                      type: y.mFx.JOIN,
                      activity: v,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => x(t))
                : null != n &&
                  a.Z.sendActivityInviteUser({
                      userId: n,
                      type: y.mFx.JOIN,
                      activity: v,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => x(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: I,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != v && (I(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: T,
        RPC_APP_DISCONNECTED: T
    }),
    j = 12633 == n.j ? S : null;
