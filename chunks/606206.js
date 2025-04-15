let r;
n.d(t, { Z: () => T }), n(388685), n(539854), n(781311), n(415506), n(35282);
var a,
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
    h = n(981631);
function v(e, t, n) {
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
let b = [c.h8.TEXT_CHANNEL, c.h8.GROUP_DM, c.h8.USER],
    I = null,
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
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                v(e, t, n[t]);
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
        N.emitChange();
}
function O() {
    (I = null), null != r && (r.destroy(), (r = null)), null != y && y();
}
function P() {
    let e = null != I && null != I.application_id ? d.Z.getApplicationActivity(I.application_id) : null;
    if (null != I && (null == e || null == e.party || null == e.party.id)) return O();
}
class A extends (a = i.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    getActivity() {
        return I;
    }
    getQuery() {
        var e;
        return null != (e = null == r ? void 0 : r.query) ? e : '';
    }
    getResults() {
        return E;
    }
}
v(A, 'displayName', 'ActivityInviteModalStore');
let N = new A(o.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (I = e.activity),
                (y = e.resolve),
                (S = []),
                null == r &&
                    (r = new c.ZP(
                        (e, t) => {
                            (E = (
                                '' === t.trim()
                                    ? (function () {
                                          let e = [];
                                          return (
                                              g.Z.getPrivateChannelIds().forEach((t) => {
                                                  let n = u.Z.getChannel(t);
                                                  if (null != n)
                                                      if (n.type === h.d4z.DM) {
                                                          let t = n.getRecipientId(),
                                                              r = null != t ? m.default.getUser(t) : null;
                                                          null != r &&
                                                              e.push({
                                                                  type: c.h8.USER,
                                                                  record: r,
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
                                            r = _.Z.getGuild(t.guild_id);
                                        return {
                                            type: c.h8.TEXT_CHANNEL,
                                            sent: S.includes(t.id),
                                            categoryName: null != n ? (0, s.F6)(n, m.default, p.Z) : '',
                                            guildName: null != r ? r.toString() : '',
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
                                N.emitChange();
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
            if (null == I) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? l.Z.sendActivityInvite({
                      channelId: t,
                      type: h.mFx.JOIN,
                      activity: I,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => C(t))
                : null != n &&
                  l.Z.sendActivityInviteUser({
                      userId: n,
                      type: h.mFx.JOIN,
                      activity: I,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => C(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: O,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != I && (O(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: P,
        RPC_APP_DISCONNECTED: P
    }),
    T = 12633 == n.j ? N : null;
