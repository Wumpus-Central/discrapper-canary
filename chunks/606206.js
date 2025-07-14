let r;
(n.d(t, { Z: () => P }), n(388685), n(539854), n(781311), n(35282));
var l,
    i = n(442837),
    o = n(570140),
    s = n(278323),
    a = n(212819),
    c = n(933557),
    u = n(592125),
    d = n(430824),
    h = n(293273),
    f = n(158776),
    p = n(699516),
    g = n(594174),
    O = n(55589),
    N = n(981631);
function y(e, t, n) {
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
let b = [a.h8.TEXT_CHANNEL, a.h8.GROUP_DM, a.h8.USER],
    x = null,
    E = null,
    m = [],
    v = [];
function C(e) {
    ((m = [...m, e]),
        (v = v.map((e) => {
            var t, n;
            return (
                (t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                y(e, t, n[t]);
                            }));
                    }
                    return e;
                })({}, e)),
                (n = n = { sent: m.includes(e.data.record.id) }),
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
        S.emitChange());
}
function I() {
    ((x = null), null != r && (r.destroy(), (r = null)), null != E && E());
}
function T() {
    let e = null != x && null != x.application_id ? h.Z.getApplicationActivity(x.application_id) : null;
    if (null != x && (null == e || null == e.party || null == e.party.id)) return I();
}
class j extends (l = i.ZP.Store) {
    initialize() {
        this.waitFor(h.Z);
    }
    getActivity() {
        return x;
    }
    getQuery() {
        var e;
        return null != (e = null == r ? void 0 : r.query) ? e : '';
    }
    getResults() {
        return v;
    }
}
y(j, 'displayName', 'ActivityInviteModalStore');
let S = new j(o.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            ((x = e.activity),
                (E = e.resolve),
                (m = []),
                null == r &&
                    (r = new a.ZP(
                        (e, t) => {
                            ((v = (
                                '' === t.trim()
                                    ? (function () {
                                          let e = [];
                                          return (
                                              O.Z.getPrivateChannelIds().forEach((t) => {
                                                  let n = u.Z.getChannel(t);
                                                  if (null != n)
                                                      if (n.type === N.d4z.DM) {
                                                          let t = n.getRecipientId(),
                                                              r = null != t ? g.default.getUser(t) : null;
                                                          null != r &&
                                                              e.push({
                                                                  type: a.h8.USER,
                                                                  record: r,
                                                                  score: 0
                                                              });
                                                      } else
                                                          n.isMultiUserDM() &&
                                                              e.push({
                                                                  type: a.h8.GROUP_DM,
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
                                        case a.h8.USER: {
                                            let { record: t } = e;
                                            return {
                                                type: a.h8.USER,
                                                sent: m.includes(t.id),
                                                status: f.Z.getStatus(t.id),
                                                data: e
                                            };
                                        }
                                        case a.h8.TEXT_CHANNEL: {
                                            var t;
                                            let { record: n } = e,
                                                r = u.Z.getChannel(n.parent_id),
                                                l = d.Z.getGuild(n.guild_id);
                                            return {
                                                type: a.h8.TEXT_CHANNEL,
                                                sent: m.includes(n.id),
                                                categoryName: null != r ? (0, c.F6)(r, g.default, p.Z) : '',
                                                guildName: null != (t = null == l ? void 0 : l.name) ? t : '',
                                                data: e
                                            };
                                        }
                                        case a.h8.GROUP_DM: {
                                            let { record: t } = e;
                                            return {
                                                type: a.h8.GROUP_DM,
                                                sent: m.includes(t.id),
                                                data: e
                                            };
                                        }
                                        default:
                                            return null;
                                    }
                                })
                                .filter((e) => null != e)),
                                S.emitChange());
                        },
                        b,
                        100
                    )),
                r.search(''));
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != r && r.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == x) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? s.Z.sendActivityInvite({
                      channelId: t,
                      type: N.mFx.JOIN,
                      activity: x,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => C(t))
                : null != n &&
                  s.Z.sendActivityInviteUser({
                      userId: n,
                      type: N.mFx.JOIN,
                      activity: x,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => C(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: I,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != x && (I(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: T,
        RPC_APP_DISCONNECTED: T
    }),
    P = 12633 == n.j ? S : null;
