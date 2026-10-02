(n.d(t, { A: () => J }), n(321073));
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
    I = n(636889),
    f = n(427262),
    p = n(736347),
    T = n(303911),
    g = n(652215);
let m = { key: "active_now", type: p.ik.ACTIVE_NOW },
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
            return t === g.$pd.PLAYING || t === g.$pd.COMPETING;
        }),
        a = -1 !== r ? i[r] : null,
        l = a?.assets?.large_image ?? a?.assets?.small_image,
        { voiceState: o } = (0, s.t$)({ userId: e, includeNonDiscoverable: !0 });
    return {
        type: p.VZ.FRIEND,
        userId: e,
        name: u.A.getNickname(e) ?? f.Ay.getName(t),
        status: n,
        gameAppId: a?.application_id ?? null,
        gameName: a?.name ?? null,
        gameAssetUrl: (0, A.uD)(a?.application_id, l, 64) ?? null,
        gameActivityIndex: null != a ? r : null,
        voiceChannelId: o?.channelId ?? null,
    };
}
function P(e, t) {
    switch (t) {
        case p.Vj.ACTIVE_NOW:
            if ((0, T.iX)(e.status)) return N;
            if (null != e.gameName || null != e.voiceChannelId) return m;
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
function G(e) {
    ((e.snapshot = null), (b = null));
}
function x(e) {
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
    return (D.set(t.key, t), I.Yr(v, t, T.Ut), (b = null), t);
}
function k(e, t) {
    let n = e.groupsByChannelId.get(t);
    return (
        null == n &&
            ((n = { channelId: t, rows: [], snapshot: null }),
            e.groupsByChannelId.set(t, n),
            I.Yr(e.groups, n, (e, t) => h.default.compare(e.channelId, t.channelId))),
        n
    );
}
function F(e) {
    let t = !1;
    for (let n of v) {
        let i = n.groupsByChannelId.get(e);
        null != i && ((i.snapshot = null), G(n), (t = !0));
    }
    return t;
}
function B() {
    for (let e of (D.clear(), (v = []), (b = null), y.values())) {
        let t = P(e, O),
            n = D.get(t.key) ?? x(t),
            i = U(e);
        null != i ? k(n, i).rows.push(e) : n.rows.push(e);
    }
    for (let e of v) for (let t of (e.rows.sort(w), e.groups)) t.rows.sort(w);
}
function V(e) {
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
                : (n === e.rows && (n = e.rows.slice()), I.Yr(n, i.rows[0], w));
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
function H(e) {
    return !!L && e();
}
function j() {
    if (!L) {
        for (let e of (y.clear(), u.A.getFriendIDs())) {
            let t = M(e);
            null != t && y.set(e, t);
        }
        (B(), (L = !0));
    }
}
function W() {
    let e = L;
    return ((L = !1), y.clear(), D.clear(), (v = []), (b = null), e);
}
function Y(e) {
    let t = y.get(e),
        n = M(e);
    if ((null == t && null == n) || (null != t && null != n && (0, r.A)(t, n))) return !1;
    if (
        (null != t &&
            (function (e) {
                let t,
                    n = P(e, O),
                    i = D.get(n.key);
                if (null == i) return;
                let r = U(e);
                if (null != r) {
                    let t = i.groupsByChannelId.get(r);
                    if (null == t || !I.TF(t.rows, e, w)) return;
                    ((t.snapshot = null),
                        0 === t.rows.length &&
                            (i.groupsByChannelId.delete(t.channelId),
                            I.TF(i.groups, t, (e, t) => h.default.compare(e.channelId, t.channelId))));
                } else if (!I.TF(i.rows, e, w)) return;
                (G(i),
                    0 === i.rows.length &&
                        0 === i.groups.length &&
                        (D.delete(i.key), -1 !== (t = v.indexOf(i)) && v.splice(t, 1), (b = null)));
            })(t),
        null != n)
    ) {
        y.set(e, n);
        let t = P(n, O),
            i = D.get(t.key) ?? x(t),
            r = U(n);
        if (null != r) {
            let e = k(i, r);
            (I.Yr(e.rows, n, w), (e.snapshot = null));
        } else I.Yr(i.rows, n, w);
        G(i);
    } else y.delete(e);
    return !0;
}
function K(e) {
    let t = !1;
    for (let n of e) u.A.isFriend(n) && (t = Y(n) || t);
    return t;
}
function $() {
    return H(() =>
        (function () {
            let e = !1;
            for (let t of u.A.getFriendIDs()) e = Y(t) || e;
            return e;
        })(),
    );
}
function z(e) {
    let { relationship: t } = e;
    return H(() => Y(t.id));
}
function X(e) {
    return H(() => {
        let t = !1;
        for (let n of y.values()) n.voiceChannelId === e && (t = Y(n.userId) || t);
        return t;
    });
}
function Z() {
    return H(() => {
        let e = !1;
        for (let t of Array.from(y.values()))
            E.A.getVoiceStateForUser(t.userId)?.channelId != null && (e = Y(t.userId) || e);
        return e;
    });
}
function q() {
    return H(() => {
        B();
    });
}
class Q extends i.Ay.Store {
    static displayName = "FriendRowStore";
    initialize() {
        (this.waitFor(o.A, l.default, d.A, c.A, u.A, _.default, E.A),
            this.syncWith([l.default], q),
            this.syncWith([d.A], Z));
    }
    getGroupingMode() {
        return O;
    }
    isVoiceGroupingEnabled() {
        return R;
    }
    getSections() {
        return (j(), null == b && (b = 0 === v.length ? C : v.map(V)), b);
    }
    getRow(e) {
        return (j(), y.get(e));
    }
}
let J = new Q(a.h, {
    CONNECTION_OPEN: W,
    OVERLAY_INITIALIZE: W,
    LOGOUT: W,
    CONNECTION_OPEN_SUPPLEMENTAL: $,
    PRESENCES_REPLACE: $,
    GUILD_CREATE: $,
    GUILD_DELETE: $,
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return H(() => {
            let e = !1;
            for (let n of t) {
                let t = n.user?.id;
                null != t && u.A.isFriend(t) && (e = Y(t) || e);
            }
            return e;
        });
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { user: t } = e;
        return H(() => !!u.A.isFriend(t.id) && Y(t.id));
    },
    RELATIONSHIP_ADD: z,
    RELATIONSHIP_UPDATE: z,
    RELATIONSHIP_REMOVE: z,
    USER_UPDATE: function (e) {
        let { user: t } = e;
        return H(() => !!u.A.isFriend(t.id) && Y(t.id));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return H(() => {
            let e = !1;
            for (let n of t)
                (u.A.isFriend(n.userId) && (e = Y(n.userId) || e),
                    null != n.channelId && (e = F(n.channelId) || e),
                    null != n.oldChannelId && n.oldChannelId !== n.channelId && (e = F(n.oldChannelId) || e));
            return e;
        });
    },
    PASSIVE_UPDATE_V2: function (e) {
        let { guildId: t, voiceStates: n, removedVoiceStateUsers: i } = e;
        return H(() => {
            let e = K(n.map((e) => e.userId));
            return (
                (e = K(i) || e),
                (n.length > 0 || i.length > 0) &&
                    (e =
                        (function (e) {
                            let t = !1;
                            for (let n of v) {
                                let i = !1;
                                for (let t of n.groups)
                                    o.A.getChannel(t.channelId)?.getGuildId() === e && ((t.snapshot = null), (i = !0));
                                i && (G(n), (t = !0));
                            }
                            return t;
                        })(t) || e),
                e
            );
        });
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return X(t.id);
    },
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        return X(t);
    },
    FRIENDS_LIST_SET_GROUPING_MODE: function (e) {
        let { mode: t } = e;
        return (
            t !== O &&
            ((O = t),
            H(() => {
                B();
            }))
        );
    },
    FRIENDS_LIST_SET_VOICE_GROUPING_ENABLED: function (e) {
        let { enabled: t } = e;
        return (
            t !== R &&
            ((R = t),
            H(() => {
                B();
            }))
        );
    },
});
