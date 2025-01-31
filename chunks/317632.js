n.d(t, { Z: () => g }), n(47120);
var i,
    l,
    a,
    r = n(442837),
    s = n(570140),
    o = n(823379),
    c = n(981631);
let d = [],
    u = {},
    m = null,
    h = 0;
function _(e) {
    let t = null;
    try {
        t = JSON.parse(e.launch_parameters);
    } catch {
        return null;
    }
    if (e.platform_type === c.ABu.XBOX) {
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
class p extends (i = r.ZP.Store) {
    getInvites() {
        return d;
    }
    getInviteStatuses() {
        return u;
    }
    isInviteGameInstalled(e) {
        var t;
        return null === (t = u[e.invite_id]) || void 0 === t ? void 0 : t.installed;
    }
    isInviteJoinable(e) {
        var t;
        return null === (t = u[e.invite_id]) || void 0 === t ? void 0 : t.joinable;
    }
    getLastUnseenInvite() {
        return m;
    }
    getUnseenInviteCount() {
        return h;
    }
}
(a = 'GameInviteStore'),
    (l = 'displayName') in p
        ? Object.defineProperty(p, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[l] = a);
let g = new p(s.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { gameInvites: t } = e;
        d = t.map(_).filter(o.lm);
    },
    GAME_INVITE_CREATE: function (e) {
        let { gameInvite: t } = e,
            n = _(t);
        null != n && ((d = [n, ...d]), (m = t), (h += 1));
    },
    GAME_INVITE_DELETE: function (e) {
        let { inviteId: t } = e;
        d = d.filter((e) => e.invite_id !== t);
    },
    GAME_INVITE_DELETE_MANY: function (e) {
        let { inviteIds: t } = e;
        d = d.filter((e) => !t.includes(e.invite_id));
    },
    GAME_INVITE_UPDATE_STATUS: function (e) {
        (u = { ...u })[e.inviteId] = {
            installed: e.installed,
            joinable: e.joinable
        };
    },
    GAME_INVITE_CLEAR_UNSEEN: function (e) {
        (m = null), (h = 0);
    }
});
