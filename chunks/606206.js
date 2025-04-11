let a;
n.d(t, { Z: () => T }), n(388685), n(539854), n(781311), n(415506), n(35282);
var r,
    i = n(442837),
    o = n(570140),
    l = n(278323),
    c = n(212819),
    s = n(933557),
    u = n(592125),
    _ = n(430824),
    d = n(293273),
    f = n(158776),
    p = n(699516),
    m = n(594174),
    g = n(55589),
    I = n(981631);
function h(e, t, n) {
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
let v = [c.h8.TEXT_CHANNEL, c.h8.GROUP_DM, c.h8.USER],
    b = null,
    y = null,
    S = [],
    E = [];
function C(e) {
    (S = [...S, e]),
        (E = E.map((e) => {
            var t, n;
            return (
                (t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            a.forEach(function (t) {
                                h(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n = { sent: S.includes(e.data.record.id) }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t
            );
        })),
        O.emitChange();
}
function A() {
    (b = null), null != a && (a.destroy(), (a = null)), null != y && y();
}
function N() {
    let e = null != b && null != b.application_id ? d.Z.getApplicationActivity(b.application_id) : null;
    if (null != b && (null == e || null == e.party || null == e.party.id)) return A();
}
class P extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    getActivity() {
        return b;
    }
    getQuery() {
        var e;
        return null != (e = null == a ? void 0 : a.query) ? e : '';
    }
    getResults() {
        return E;
    }
}
h(P, 'displayName', 'ActivityInviteModalStore');
let O = new P(o.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (b = e.activity),
                (y = e.resolve),
                (S = []),
                null == a &&
                    (a = new c.ZP(
                        (e, t) => {
                            (E = (
                                '' === t.trim()
                                    ? (function () {
                                          let e = [];
                                          return (
                                              g.Z.getPrivateChannelIds().forEach((t) => {
                                                  let n = u.Z.getChannel(t);
                                                  if (null != n)
                                                      if (n.type === I.d4z.DM) {
                                                          let t = n.getRecipientId(),
                                                              a = null != t ? m.default.getUser(t) : null;
                                                          null != a &&
                                                              e.push({
                                                                  type: c.h8.USER,
                                                                  record: a,
                                                                  score: 0
                                                              });
                                                      } else
                                                          n.isMultiUserDM() &&
                                                              e.push({
                                                                  type: c.h8.GROUP_DM,
                                                                  record: n,
                                                                  score: 0
                                                              });
                                              }),
                                              e
                                          );
                                      })()
                                    : e
                            ).map((e) => {
                                switch (e.type) {
                                    case c.h8.USER: {
                                        let { record: t } = e;
                                        return {
                                            type: c.h8.USER,
                                            sent: S.includes(t.id),
                                            status: f.Z.getStatus(t.id),
                                            data: e
                                        };
                                    }
                                    case c.h8.TEXT_CHANNEL: {
                                        let { record: t } = e,
                                            n = u.Z.getChannel(t.parent_id),
                                            a = _.Z.getGuild(t.guild_id);
                                        return {
                                            type: c.h8.TEXT_CHANNEL,
                                            sent: S.includes(t.id),
                                            categoryName: null != n ? (0, s.F6)(n, m.default, p.Z) : '',
                                            guildName: null != a ? a.toString() : '',
                                            data: e
                                        };
                                    }
                                    case c.h8.GROUP_DM: {
                                        let { record: t } = e;
                                        return {
                                            type: c.h8.GROUP_DM,
                                            sent: S.includes(t.id),
                                            data: e
                                        };
                                    }
                                    default:
                                        throw Error('Unknown Result Type: '.concat(e.type));
                                }
                            })),
                                O.emitChange();
                        },
                        v,
                        100
                    )),
                a.search('');
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != a && a.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == b) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? l.Z.sendActivityInvite({
                      channelId: t,
                      type: I.mFx.JOIN,
                      activity: b,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => C(t))
                : null != n &&
                  l.Z.sendActivityInviteUser({
                      userId: n,
                      type: I.mFx.JOIN,
                      activity: b,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => C(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: A,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != b && (A(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: N,
        RPC_APP_DISCONNECTED: N
    }),
    T = 12633 == n.j ? O : null;
