n.d(t, { Z: () => g }), n(47120);
var r,
    i = n(442837),
    a = n(570140),
    l = n(823379),
    o = n(981631);
function s(e, t, n) {
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
function c(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
let u = [],
    d = {},
    p = null,
    m = 0;
function f(e) {
    let t = null;
    try {
        t = JSON.parse(e.launch_parameters);
    } catch (e) {
        return null;
    }
    if (e.platform_type === o.ABu.XBOX) {
        var n, r;
        let i = null == t ? void 0 : t.titleId,
            a = null == t ? void 0 : t.inviteToken;
        return null == i || null == a
            ? null
            : ((n = c({}, e)),
              (r = r =
                  {
                      parsed_launch_parameters: {
                          titleId: i,
                          inviteToken: a
                      }
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r);
                        }
                        return n;
                    })(Object(r)).forEach(function (e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
              n);
    }
    return null;
}
class h extends (r = i.ZP.Store) {
    getInvites() {
        return u;
    }
    getInviteStatuses() {
        return d;
    }
    isInviteGameInstalled(e) {
        var t;
        return null == (t = d[e.invite_id]) ? void 0 : t.installed;
    }
    isInviteJoinable(e) {
        var t;
        return null == (t = d[e.invite_id]) ? void 0 : t.joinable;
    }
    getLastUnseenInvite() {
        return p;
    }
    getUnseenInviteCount() {
        return m;
    }
}
s(h, 'displayName', 'GameInviteStore');
let g = new h(a.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { gameInvites: t } = e;
        u = t.map(f).filter(l.lm);
    },
    GAME_INVITE_CREATE: function (e) {
        let { gameInvite: t } = e,
            n = f(t);
        null != n && ((u = [n, ...u]), (p = t), (m += 1));
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
        (d = c({}, d))[e.inviteId] = {
            installed: e.installed,
            joinable: e.joinable
        };
    },
    GAME_INVITE_CLEAR_UNSEEN: function (e) {
        (p = null), (m = 0);
    }
});
