let s;
l.d(t, { Z: () => R }), l(47120), l(653041), l(411104);
var r,
    n,
    a,
    i = l(442837),
    u = l(570140),
    c = l(278323),
    o = l(212819),
    d = l(933557),
    h = l(592125),
    _ = l(430824),
    p = l(293273),
    m = l(158776),
    N = l(699516),
    E = l(594174),
    g = l(55589),
    x = l(981631);
let v = [o.h8.TEXT_CHANNEL, o.h8.GROUP_DM, o.h8.USER],
    C = null,
    I = null,
    S = [],
    T = [];
function A(e) {
    (S = [...S, e]),
        (T = T.map((e) => ({
            ...e,
            sent: S.includes(e.data.record.id)
        }))),
        k.emitChange();
}
function f() {
    (C = null), null != s && (s.destroy(), (s = null)), null != I && I();
}
function L() {
    let e = null != C && null != C.application_id ? p.Z.getApplicationActivity(C.application_id) : null;
    if (null != C && (null == e || null == e.party || null == e.party.id)) return f();
}
class y extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(p.Z);
    }
    getActivity() {
        return C;
    }
    getQuery() {
        var e;
        return null !== (e = null == s ? void 0 : s.query) && void 0 !== e ? e : '';
    }
    getResults() {
        return T;
    }
}
(a = 'ActivityInviteModalStore'),
    (n = 'displayName') in y
        ? Object.defineProperty(y, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (y[n] = a);
let k = new y(u.Z, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (C = e.activity),
                (I = e.resolve),
                (S = []),
                null == s &&
                    (s = new o.ZP(
                        (e, t) => {
                            (T = (
                                '' === t.trim()
                                    ? (function () {
                                          let e = [];
                                          return (
                                              g.Z.getPrivateChannelIds().forEach((t) => {
                                                  let l = h.Z.getChannel(t);
                                                  if (null != l) {
                                                      if (l.type === x.d4z.DM) {
                                                          let t = l.getRecipientId(),
                                                              s = null != t ? E.default.getUser(t) : null;
                                                          null != s &&
                                                              e.push({
                                                                  type: o.h8.USER,
                                                                  record: s,
                                                                  score: 0
                                                              });
                                                      } else
                                                          l.isMultiUserDM() &&
                                                              e.push({
                                                                  type: o.h8.GROUP_DM,
                                                                  record: l,
                                                                  score: 0
                                                              });
                                                  }
                                              }),
                                              e
                                          );
                                      })()
                                    : e
                            ).map((e) => {
                                switch (e.type) {
                                    case o.h8.USER: {
                                        let { record: t } = e;
                                        return {
                                            type: o.h8.USER,
                                            sent: S.includes(t.id),
                                            status: m.Z.getStatus(t.id),
                                            data: e
                                        };
                                    }
                                    case o.h8.TEXT_CHANNEL: {
                                        let { record: t } = e,
                                            l = h.Z.getChannel(t.parent_id),
                                            s = _.Z.getGuild(t.guild_id);
                                        return {
                                            type: o.h8.TEXT_CHANNEL,
                                            sent: S.includes(t.id),
                                            categoryName: null != l ? (0, d.F6)(l, E.default, N.Z) : '',
                                            guildName: null != s ? s.toString() : '',
                                            data: e
                                        };
                                    }
                                    case o.h8.GROUP_DM: {
                                        let { record: t } = e;
                                        return {
                                            type: o.h8.GROUP_DM,
                                            sent: S.includes(t.id),
                                            data: e
                                        };
                                    }
                                    default:
                                        throw Error('Unknown Result Type: '.concat(e.type));
                                }
                            })),
                                k.emitChange();
                        },
                        v,
                        100
                    )),
                s.search('');
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != s && s.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == C) return;
            let t = e.channelId,
                l = e.userId;
            null != t
                ? c.Z.sendActivityInvite({
                      channelId: t,
                      type: x.mFx.JOIN,
                      activity: C,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => A(t))
                : null != l &&
                  c.Z.sendActivityInviteUser({
                      userId: l,
                      type: x.mFx.JOIN,
                      activity: C,
                      location: 'Channel Text Area - Invite to Join Modal'
                  }).then(() => A(l));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: f,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != C && (f(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: L,
        RPC_APP_DISCONNECTED: L
    }),
    R = k;
