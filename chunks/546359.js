(n.d(t, { A: () => et }), n(321073));
var i = n(17928),
    r = n(52133),
    a = n(73153),
    s = n(714114),
    l = n(773669),
    o = n(734057),
    d = n(576705),
    c = n(290863),
    u = n(994500),
    _ = n(287809),
    E = n(977997),
    A = n(970928),
    h = n(935208),
    f = n(636889),
    I = n(427262),
    p = n(736347),
    T = n(303911),
    m = n(652215);
let g = { key: "active_now", type: p.ik.ACTIVE_NOW },
    S = { key: "online", type: p.ik.ONLINE },
    N = { key: "offline", type: p.ik.OFFLINE },
    C = Object.freeze([]),
    O = p.Vj.ACTIVE_NOW,
    R = !0,
    L = !1,
    y = new Map(),
    D = new Map(),
    v = [],
    b = null;
function M(e) {
    if (!u.A.isFriend(e)) return null;
    let t = _.default.getUser(e);
    if (null == t) return null;
    let n = c.A.getStatus(e),
        i = c.A.getActivities(e),
        r = i.findIndex((e) => {
            let { type: t } = e;
            return t === m.$pd.PLAYING || t === m.$pd.COMPETING;
        }),
        a = -1 !== r ? i[r] : null,
        l = a?.assets?.large_image ?? a?.assets?.small_image,
        { voiceState: o } = (0, s.t$)({ userId: e, includeNonDiscoverable: !0 });
    return {
        type: p.VZ.FRIEND,
        userId: e,
        name: u.A.getNickname(e) ?? I.Ay.getName(t),
        status: n,
        gameAppId: a?.application_id ?? null,
        gameName: a?.name ?? null,
        gameAssetUrl: (0, A.uD)(a?.application_id, l, 64) ?? null,
        gameActivityIndex: null != a ? r : null,
        isListening: i.some((e) => {
            let { type: t } = e;
            return t === m.$pd.LISTENING;
        }),
        voiceChannelId: o?.channelId ?? null,
    };
}
function P(e, t) {
    switch (t) {
        case p.Vj.ACTIVE_NOW:
            if ((0, T.iX)(e.status)) return N;
            if (null != e.gameName || null != e.voiceChannelId) return g;
            return S;
        case p.Vj.GAME:
            if (null != e.gameName)
                return {
                    key: `game:${e.gameAppId ?? e.gameName}`,
                    type: p.ik.GAME,
                    gameAppId: e.gameAppId,
                    gameAssetUrl: e.gameAssetUrl,
                    label: e.gameName ?? void 0,
                };
            return (0, T.iX)(e.status) ? N : S;
        case p.Vj.ALPHABETICAL: {
            let t = e.name.normalize("NFD").match(/^\s*(\p{L})/u),
                n = t?.[1].toLocaleUpperCase(l.default.locale) ?? T.Ce;
            return { key: `letter:${n}`, type: p.ik.LETTER, label: n };
        }
    }
}
function U(e) {
    return R && (0, T.kR)(O) ? e.voiceChannelId : null;
}
function w(e, t) {
    return (0, T.fz)(e, t, !(0, T.kR)(O));
}
function G(e, t) {
    return e.isListening !== t.isListening ? (e.isListening ? -1 : 1) : w(e, t);
}
function x(e) {
    return e.type === p.ik.ONLINE ? G : w;
}
function k(e) {
    ((e.snapshot = null), (b = null));
}
function F(e) {
    let t = {
        key: e.key,
        type: e.type,
        label: e.label,
        gameAppId: e.gameAppId ?? void 0,
        gameAssetUrl: e.gameAssetUrl ?? void 0,
        groups: [],
        groupsByChannelId: new Map(),
        rows: [],
        snapshot: null,
    };
    return (D.set(t.key, t), f.Yr(v, t, T.Ut), (b = null), t);
}
function B(e, t) {
    let n = e.groupsByChannelId.get(t);
    return (
        null == n &&
            ((n = { channelId: t, rows: [], snapshot: null }),
            e.groupsByChannelId.set(t, n),
            f.Yr(e.groups, n, (e, t) => h.default.compare(e.channelId, t.channelId))),
        n
    );
}
function V(e) {
    let t = !1;
    for (let n of v) {
        let i = n.groupsByChannelId.get(e);
        null != i && ((i.snapshot = null), k(n), (t = !0));
    }
    return t;
}
function H() {
    for (let e of (D.clear(), (v = []), (b = null), y.values())) {
        let t = P(e, O),
            n = D.get(t.key) ?? F(t),
            i = U(e);
        null != i ? B(n, i).rows.push(e) : n.rows.push(e);
    }
    for (let e of v) {
        let t = x(e);
        for (let n of (e.rows.sort(t), e.groups)) n.rows.sort(t);
    }
}
function j(e) {
    if (null == e.snapshot) {
        let t = [],
            n = e.rows;
        for (let i of e.groups)
            i.rows.length > 1
                ? t.push(
                      (function (e) {
                          if (null == e.snapshot) {
                              let t = Object.keys(E.A.getVoiceStatesForChannel(e.channelId)).length,
                                  n = null != E.A.getVoiceStateForChannel(e.channelId),
                                  i = t - e.rows.length - !!n;
                              e.snapshot = {
                                  type: p.VZ.VOICE_GROUP,
                                  key: `voice:${e.channelId}`,
                                  channelId: e.channelId,
                                  rows: e.rows.slice(),
                                  extraMemberCount: Math.max(0, i),
                              };
                          }
                          return e.snapshot;
                      })(i),
                  )
                : (n === e.rows && (n = e.rows.slice()), f.Yr(n, i.rows[0], x(e)));
        e.snapshot = {
            key: e.key,
            type: e.type,
            label: e.label,
            gameAppId: e.gameAppId,
            gameAssetUrl: e.gameAssetUrl,
            rows: [...t, ...n],
        };
    }
    return e.snapshot;
}
function W(e) {
    return !!L && e();
}
function Y() {
    if (!L) {
        for (let e of (y.clear(), u.A.getFriendIDs())) {
            let t = M(e);
            null != t && y.set(e, t);
        }
        (H(), (L = !0));
    }
}
function K() {
    let e = L;
    return ((L = !1), y.clear(), D.clear(), (v = []), (b = null), e);
}
function $(e) {
    let t = y.get(e),
        n = M(e);
    return (
        !((null == t && null == n) || (null != t && null != n && (0, r.A)(t, n))) &&
        (null != t &&
            (function (e) {
                let t,
                    n = P(e, O),
                    i = D.get(n.key);
                if (null == i) return;
                let r = x(i),
                    a = U(e);
                if (null != a) {
                    let t = i.groupsByChannelId.get(a);
                    if (null == t || !f.TF(t.rows, e, r)) return;
                    ((t.snapshot = null),
                        0 === t.rows.length &&
                            (i.groupsByChannelId.delete(t.channelId),
                            f.TF(i.groups, t, (e, t) => h.default.compare(e.channelId, t.channelId))));
                } else if (!f.TF(i.rows, e, r)) return;
                (k(i),
                    0 === i.rows.length &&
                        0 === i.groups.length &&
                        (D.delete(i.key), -1 !== (t = v.indexOf(i)) && v.splice(t, 1), (b = null)));
            })(t),
        null != n
            ? (y.set(e, n),
              !(function (e) {
                  let t = P(e, O),
                      n = D.get(t.key) ?? F(t),
                      i = x(n),
                      r = U(e);
                  if (null != r) {
                      let t = B(n, r);
                      (f.Yr(t.rows, e, i), (t.snapshot = null));
                  } else f.Yr(n.rows, e, i);
                  k(n);
              })(n))
            : y.delete(e),
        !0)
    );
}
function z(e) {
    let t = !1;
    for (let n of e) u.A.isFriend(n) && (t = $(n) || t);
    return t;
}
function X() {
    return W(() =>
        (function () {
            let e = !1;
            for (let t of u.A.getFriendIDs()) e = $(t) || e;
            return e;
        })(),
    );
}
function q(e) {
    let { relationship: t } = e;
    return W(() => $(t.id));
}
function Z(e) {
    return W(() => {
        let t = !1;
        for (let n of y.values()) n.voiceChannelId === e && (t = $(n.userId) || t);
        return t;
    });
}
function Q() {
    return W(() => {
        let e = !1;
        for (let t of Array.from(y.values()))
            E.A.getVoiceStateForUser(t.userId)?.channelId != null && (e = $(t.userId) || e);
        return e;
    });
}
function J() {
    return W(() => {
        H();
    });
}
class ee extends i.Ay.PersistedStore {
    static displayName = "FriendRowStore";
    static persistKey = "FriendRowStore";
    initialize(e) {
        ((O = e?.groupingMode ?? p.Vj.ACTIVE_NOW),
            (R = e?.voiceGroupingEnabled ?? !0),
            K(),
            this.waitFor(o.A, l.default, d.A, c.A, u.A, _.default, E.A),
            this.syncWith([l.default], J),
            this.syncWith([d.A], Q));
    }
    getState() {
        return { groupingMode: O, voiceGroupingEnabled: R };
    }
    getGroupingMode() {
        return O;
    }
    isVoiceGroupingEnabled() {
        return R;
    }
    getSections() {
        return (Y(), null == b && (b = 0 === v.length ? C : v.map(j)), b);
    }
    getRow(e) {
        return (Y(), y.get(e));
    }
}
let et = new ee(a.h, {
    CONNECTION_OPEN: K,
    OVERLAY_INITIALIZE: K,
    LOGOUT: function () {
        ((O = p.Vj.ACTIVE_NOW), (R = !0), K());
    },
    CONNECTION_OPEN_SUPPLEMENTAL: X,
    PRESENCES_REPLACE: X,
    GUILD_CREATE: X,
    GUILD_DELETE: X,
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return W(() => {
            let e = !1;
            for (let n of t) {
                let t = n.user?.id;
                null != t && u.A.isFriend(t) && (e = $(t) || e);
            }
            return e;
        });
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { user: t } = e;
        return W(() => !!u.A.isFriend(t.id) && $(t.id));
    },
    RELATIONSHIP_ADD: q,
    RELATIONSHIP_UPDATE: q,
    RELATIONSHIP_REMOVE: q,
    USER_UPDATE: function (e) {
        let { user: t } = e;
        return W(() => !!u.A.isFriend(t.id) && $(t.id));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return W(() => {
            let e = !1;
            for (let n of t)
                (u.A.isFriend(n.userId) && (e = $(n.userId) || e),
                    null != n.channelId && (e = V(n.channelId) || e),
                    null != n.oldChannelId && n.oldChannelId !== n.channelId && (e = V(n.oldChannelId) || e));
            return e;
        });
    },
    PASSIVE_UPDATE_V2: function (e) {
        let { guildId: t, voiceStates: n, removedVoiceStateUsers: i } = e;
        return W(() => {
            let e = z(n.map((e) => e.userId));
            return (
                (e = z(i) || e),
                (n.length > 0 || i.length > 0) &&
                    (e =
                        (function (e) {
                            let t = !1;
                            for (let n of v) {
                                let i = !1;
                                for (let t of n.groups)
                                    o.A.getChannel(t.channelId)?.getGuildId() === e && ((t.snapshot = null), (i = !0));
                                i && (k(n), (t = !0));
                            }
                            return t;
                        })(t) || e),
                e
            );
        });
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return Z(t.id);
    },
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        return Z(t);
    },
    FRIENDS_LIST_SET_GROUPING_MODE: function (e) {
        let { mode: t } = e;
        return (
            t !== O &&
            ((O = t),
            W(() => {
                H();
            }),
            !0)
        );
    },
    FRIENDS_LIST_SET_VOICE_GROUPING_ENABLED: function (e) {
        let { enabled: t } = e;
        return (
            t !== R &&
            ((R = t),
            W(() => {
                H();
            }),
            !0)
        );
    },
    FRIENDS_LIST_TEAR_DOWN: K,
});
