n(47120);
var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140),
    c = n(823379),
    d = n(981631);
let u = [],
    m = {},
    h = null,
    f = 0;
function p(e) {
    let t = null;
    try {
        t = JSON.parse(e.launch_parameters);
    } catch {
        return null;
    }
    if (e.platform_type === d.ABu.XBOX) {
        let n = null == t ? void 0 : t.titleId,
            i = null == t ? void 0 : t.inviteToken;
        return null == n || null == i
            ? null
            : {
                  ...e,
                  parsed_launch_parameters: {
                      titleId: n,
                      inviteToken: i
                  }
              };
    }
    return null;
}
class _ extends (i = o.ZP.Store) {
    getInvites() {
        return u;
    }
    getInviteStatuses() {
        return m;
    }
    isInviteGameInstalled(e) {
        var t;
        return null === (t = m[e.invite_id]) || void 0 === t ? void 0 : t.installed;
    }
    isInviteJoinable(e) {
        var t;
        return null === (t = m[e.invite_id]) || void 0 === t ? void 0 : t.joinable;
    }
    getLastUnseenInvite() {
        return h;
    }
    getUnseenInviteCount() {
        return f;
    }
}
(a = 'GameInviteStore'),
    (l = 'displayName') in (r = _)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new _(s.Z, {
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { gameInvites: t } = e;
            u = t.map(p).filter(c.lm);
        },
        GAME_INVITE_CREATE: function (e) {
            let { gameInvite: t } = e,
                n = p(t);
            null != n && ((u = [n, ...u]), (h = t), (f += 1));
        },
        GAME_INVITE_DELETE: function (e) {
            let { inviteId: t } = e;
            u = u.filter((e) => e.invite_id !== t);
        },
        GAME_INVITE_DELETE_MANY: function (e) {
            let { inviteIds: t } = e;
            u = u.filter((e) => !t.includes(e.invite_id));
        },
        GAME_INVITE_UPDATE_STATUS: function (e) {
            (m = { ...m })[e.inviteId] = {
                installed: e.installed,
                joinable: e.joinable
            };
        },
        GAME_INVITE_CLEAR_UNSEEN: function (e) {
            (h = null), (f = 0);
        }
    }));
