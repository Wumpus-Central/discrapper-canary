let r;
n.d(t, { Z: () => T }), n(388685), n(539854), n(781311), n(35282);
var l,
    i = n(442837),
    o = n(570140),
    a = n(278323),
    s = n(212819),
    u = n(933557),
    c = n(592125),
    d = n(430824),
    h = n(293273),
    f = n(158776),
    p = n(699516),
    g = n(594174),
    y = n(55589),
    O = n(981631);
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
let v = [s.h8.TEXT_CHANNEL, s.h8.GROUP_DM, s.h8.USER],
    m = null,
    x = null,
    N = [],
    C = [];
function E(e) {
    (N = [...N, e]),
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
                                b(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n = { sent: N.includes(e.data.record.id) }),
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
function j() {
    (m = null), null != r && (r.destroy(), (r = null)), null != x && x();
}
function I() {
    let e = null != m && null != m.application_id ? h.Z.getApplicationActivity(m.application_id) : null;
    if (null != m && (null == e || null == e.party || null == e.party.id)) return j();
}
class P extends (l = i.ZP.Store) {
    initialize() {
        this.waitFor(h.Z);
    }
    getActivity() {
        return m;
    }
    getQuery() {
        var e;
        return null != (e = null == r ? void 0 : r.query) ? e : '';
    }
    getResults() {
        return C;
    }
}
b(P, 'displayName', 'ActivityInviteModalStore');
let S = new P(o.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (m = e.activity),
                (x = e.resolve),
                (N = []),
                null == r &&
                    (r = new s.ZP(
                        (e, t) => {
                            (C = (
                                '' === t.trim()
                                    ? (function () {
                                          let e = [];
                                          return (
                                              y.Z.getPrivateChannelIds().forEach((t) => {
                                                  let n = c.Z.getChannel(t);
                                                  if (null != n)
                                                      if (n.type === O.d4z.DM) {
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
                                                sent: N.includes(t.id),
                                                status: f.Z.getStatus(t.id),
                                                data: e
                                            };
                                        }
                                        case s.h8.TEXT_CHANNEL: {
                                            let { record: t } = e,
                                                n = c.Z.getChannel(t.parent_id),
                                                r = d.Z.getGuild(t.guild_id);
                                            return {
                                                type: s.h8.TEXT_CHANNEL,
                                                sent: N.includes(t.id),
                                                categoryName: null != n ? (0, u.F6)(n, g.default, p.Z) : '',
                                                guildName: null != r ? r.toString() : '',
                                                data: e
                                            };
                                        }
                                        case s.h8.GROUP_DM: {
                                            let { record: t } = e;
                                            return {
                                                type: s.h8.GROUP_DM,
                                                sent: N.includes(t.id),
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
                        v,
                        100
                    )),
                r.search('');
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != r && r.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == m) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? a.Z.sendActivityInvite({
                      channelId: t,
                      type: O.mFx.JOIN,
                      activity: m,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => E(t))
                : null != n &&
                  a.Z.sendActivityInviteUser({
                      userId: n,
                      type: O.mFx.JOIN,
                      activity: m,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => E(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: j,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != m && (j(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: I,
        RPC_APP_DISCONNECTED: I
    }),
    T = 12633 == n.j ? S : null;
