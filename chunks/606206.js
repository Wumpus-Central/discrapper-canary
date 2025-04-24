let l;
n.d(t, { Z: () => _ }), n(388685), n(539854), n(781311), n(35282);
var r,
    i = n(442837),
    a = n(570140),
    o = n(278323),
    s = n(212819),
    u = n(933557),
    c = n(592125),
    d = n(430824),
    f = n(293273),
    h = n(158776),
    g = n(699516),
    p = n(594174),
    y = n(55589),
    O = n(981631);
function m(e, t, n) {
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
    E = null,
    b = null,
    N = [],
    C = [];
function x(e) {
    (N = [...N, e]),
        (C = C.map((e) => {
            var t, n;
            return (
                (t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            l.forEach(function (t) {
                                m(e, t, n[t]);
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
        P.emitChange();
}
function I() {
    (E = null), null != l && (l.destroy(), (l = null)), null != b && b();
}
function S() {
    let e = null != E && null != E.application_id ? f.Z.getApplicationActivity(E.application_id) : null;
    if (null != E && (null == e || null == e.party || null == e.party.id)) return I();
}
class T extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(f.Z);
    }
    getActivity() {
        return E;
    }
    getQuery() {
        var e;
        return null != (e = null == l ? void 0 : l.query) ? e : '';
    }
    getResults() {
        return C;
    }
}
m(T, 'displayName', 'ActivityInviteModalStore');
let P = new T(a.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (E = e.activity),
                (b = e.resolve),
                (N = []),
                null == l &&
                    (l = new s.ZP(
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
                                                              l = null != t ? p.default.getUser(t) : null;
                                                          null != l &&
                                                              e.push({
                                                                  type: s.h8.USER,
                                                                  record: l,
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
                                                status: h.Z.getStatus(t.id),
                                                data: e
                                            };
                                        }
                                        case s.h8.TEXT_CHANNEL: {
                                            let { record: t } = e,
                                                n = c.Z.getChannel(t.parent_id),
                                                l = d.Z.getGuild(t.guild_id);
                                            return {
                                                type: s.h8.TEXT_CHANNEL,
                                                sent: N.includes(t.id),
                                                categoryName: null != n ? (0, u.F6)(n, p.default, g.Z) : '',
                                                guildName: null != l ? l.toString() : '',
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
                                P.emitChange();
                        },
                        v,
                        100
                    )),
                l.search('');
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != l && l.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == E) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? o.Z.sendActivityInvite({
                      channelId: t,
                      type: O.mFx.JOIN,
                      activity: E,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => x(t))
                : null != n &&
                  o.Z.sendActivityInviteUser({
                      userId: n,
                      type: O.mFx.JOIN,
                      activity: E,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => x(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: I,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != E && (I(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: S,
        RPC_APP_DISCONNECTED: S
    }),
    _ = 12633 == n.j ? P : null;
