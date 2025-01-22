let r;
n(47120), n(653041), n(411104);
var i,
    l,
    a,
    u,
    o = n(442837),
    s = n(570140),
    c = n(278323),
    d = n(212819),
    f = n(933557),
    p = n(592125),
    h = n(430824),
    _ = n(293273),
    E = n(158776),
    m = n(699516),
    g = n(594174),
    C = n(55589),
    v = n(981631);
let A = [d.h8.TEXT_CHANNEL, d.h8.GROUP_DM, d.h8.USER],
    I = null,
    N = null,
    T = [],
    O = [];
function R(e) {
    (T = [...T, e]),
        (O = O.map((e) => ({
            ...e,
            sent: T.includes(e.data.record.id)
        }))),
        y.emitChange();
}
function S() {
    (I = null), null != r && (r.destroy(), (r = null)), null != N && N();
}
function P() {
    let e = null != I && null != I.application_id ? _.Z.getApplicationActivity(I.application_id) : null;
    if (null != I && (null == e || null == e.party || null == e.party.id)) return S();
}
class Z extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(_.Z);
    }
    getActivity() {
        return I;
    }
    getQuery() {
        var e;
        return null !== (e = null == r ? void 0 : r.query) && void 0 !== e ? e : '';
    }
    getResults() {
        return O;
    }
}
(u = 'ActivityInviteModalStore'),
    (a = 'displayName') in (l = Z)
        ? Object.defineProperty(l, a, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = u);
let y = new Z(s.Z, {
    ACTIVITY_INVITE_MODAL_OPEN: function (e) {
        (I = e.activity),
            (N = e.resolve),
            (T = []),
            null == r &&
                (r = new d.ZP(
                    (e, t) => {
                        var n;
                        return (
                            (n = e),
                            void ((O = (
                                '' === t.trim()
                                    ? (function () {
                                          let e = [];
                                          return (
                                              C.Z.getPrivateChannelIds().forEach((t) => {
                                                  let n = p.Z.getChannel(t);
                                                  if (null != n)
                                                      if (n.type === v.d4z.DM) {
                                                          let t = n.getRecipientId(),
                                                              r = null != t ? g.default.getUser(t) : null;
                                                          null != r &&
                                                              e.push({
                                                                  type: d.h8.USER,
                                                                  record: r,
                                                                  score: 0
                                                              });
                                                      } else
                                                          n.isMultiUserDM() &&
                                                              e.push({
                                                                  type: d.h8.GROUP_DM,
                                                                  record: n,
                                                                  score: 0
                                                              });
                                              }),
                                              e
                                          );
                                      })()
                                    : n
                            ).map((e) => {
                                switch (e.type) {
                                    case d.h8.USER: {
                                        let { record: t } = e;
                                        return {
                                            type: d.h8.USER,
                                            sent: T.includes(t.id),
                                            status: E.Z.getStatus(t.id),
                                            data: e
                                        };
                                    }
                                    case d.h8.TEXT_CHANNEL: {
                                        let { record: t } = e,
                                            n = p.Z.getChannel(t.parent_id),
                                            r = h.Z.getGuild(t.guild_id);
                                        return {
                                            type: d.h8.TEXT_CHANNEL,
                                            sent: T.includes(t.id),
                                            categoryName: null != n ? (0, f.F6)(n, g.default, m.Z) : '',
                                            guildName: null != r ? r.toString() : '',
                                            data: e
                                        };
                                    }
                                    case d.h8.GROUP_DM: {
                                        let { record: t } = e;
                                        return {
                                            type: d.h8.GROUP_DM,
                                            sent: T.includes(t.id),
                                            data: e
                                        };
                                    }
                                    default:
                                        throw Error('Unknown Result Type: '.concat(e.type));
                                }
                            })),
                            y.emitChange())
                        );
                    },
                    A,
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
            ? c.Z.sendActivityInvite({
                  channelId: t,
                  type: v.mFx.JOIN,
                  activity: I,
                  location: 'Channel Text Area - Invite to Join Modal'
              }).then(() => R(t))
            : null != n &&
              c.Z.sendActivityInviteUser({
                  userId: n,
                  type: v.mFx.JOIN,
                  activity: I,
                  location: 'Channel Text Area - Invite to Join Modal'
              }).then(() => R(n));
    },
    ACTIVITY_INVITE_MODAL_CLOSE: S,
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        return !!t && null != I && (S(), !0);
    },
    LOCAL_ACTIVITY_UPDATE: P,
    RPC_APP_DISCONNECTED: P
});
t.Z = 12633 == n.j ? y : null;
