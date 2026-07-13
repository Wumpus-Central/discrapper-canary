"use strict";
n.d(t, { Ay: () => k }), n(321073);
var i = n(735438),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(717398),
    o = n(315069),
    d = n(736056),
    c = n(710195),
    u = n(586774),
    _ = n(800828),
    E = n(507104),
    A = n(616356),
    h = n(696451),
    I = n(71393),
    f = n(290863),
    p = n(994500),
    T = n(287809),
    m = n(652215),
    g = n(202541);
function S(e) {
    let t = T.default.getUser(e);
    return { user: t, usernameLower: null != t ? t.username.toLowerCase() : null };
}
function N(e) {
    return {
        status: f.A.getStatus(e),
        isMobile: f.A.isMobileOnline(e),
        isVR: f.A.isVROnline(e),
        activities: f.A.getActivities(e),
        applicationStream: A.A.getAnyStreamForUser(e),
    };
}
function C(e) {
    let t = [];
    return (
        r()(h.Ay.memberOf(e))
            .map(I.A.getGuild)
            .sortBy((e) => (null != e ? e.name.toLowerCase() : null))
            .forEach((e) => {
                null != e && t.push(e);
            }),
        { mutualGuildsLength: t.length, mutualGuilds: t.slice(0, 5) }
    );
}
class O extends o.A {
    key;
    userId;
    type;
    status;
    isMobile;
    isVR;
    activities;
    applicationStream;
    user;
    usernameLower;
    mutualGuildsLength;
    mutualGuilds;
    nickname;
    spam;
    giftIntentType;
    ignoredUser;
    applicationId;
    isGameRelationship;
    constructor(e) {
        super(),
            (this.key = e.key),
            (this.userId = e.userId),
            (this.type = e.type),
            (this.status = e.status),
            (this.activities = e.activities),
            (this.applicationStream = e.applicationStream),
            (this.user = e.user),
            (this.isMobile = e.isMobile),
            (this.isVR = e.isVR),
            (this.usernameLower = e.usernameLower),
            (this.mutualGuildsLength = e.mutualGuildsLength),
            (this.mutualGuilds = e.mutualGuilds),
            (this.nickname = e.nickname),
            (this.spam = e.spam),
            (this.giftIntentType = e.giftIntentType),
            (this.ignoredUser = e.ignoredUser),
            (this.applicationId = e.applicationId),
            (this.isGameRelationship = e.isGameRelationship ?? !1);
    }
    get comparator() {
        return [this.type, this.nickname?.toLowerCase() ?? this.user?.globalName?.toLowerCase() ?? this.usernameLower];
    }
}
class R {
    _rows;
    constructor(e = []) {
        this._rows = e;
    }
    reset() {
        let e = new Set(),
            t = Array.from(p.A.getMutableRelationships().entries()).map((t) => {
                let [n, i] = t;
                return (
                    i === m.eA$.FRIEND && e.add(n),
                    new O({
                        key: n,
                        type: i,
                        userId: n,
                        nickname: p.A.getNickname(n),
                        ...S(n),
                        ...N(n),
                        ...C(n),
                        spam: p.A.isSpam(n),
                        ignoredUser: p.A.isIgnored(n),
                        giftIntentType:
                            i === m.eA$.FRIEND && E.Ay.getFriendAnniversaries().includes(n)
                                ? g.np.FRIEND_ANNIVERSARY
                                : void 0,
                        applicationId: p.A.getOriginApplicationId(n),
                    })
                );
            }),
            n = [],
            i = _.A.getGameRelationships().values(),
            a = new Set();
        i.forEach((t) => {
            let { id: i, applicationId: r, type: s } = t;
            (s === m.eA$.FRIEND && e.has(i)) ||
                (s === m.eA$.FRIEND && a.has(i)) ||
                (s === m.eA$.FRIEND && a.add(i),
                n.push(
                    new O({
                        key: `${i}-${r}`,
                        type: s,
                        userId: i,
                        applicationId: r,
                        nickname: p.A.getNickname(i),
                        ...S(i),
                        ...N(i),
                        ...C(i),
                        spam: p.A.isSpam(i),
                        ignoredUser: p.A.isIgnored(i),
                        isGameRelationship: !0,
                    }),
                ));
        });
        let s = r().map(
            u.A.getSuggestions(),
            (e) =>
                new O({ key: e.key, userId: e.key, type: 99, nickname: e.name, ...S(e.key), ...N(e.key), ...C(e.key) }),
        );
        return new R(r().concat(t, n, s));
    }
    clone() {
        return new R(this._rows);
    }
    update(e) {
        let t = !1;
        for (let n = 0; n < this._rows.length; n++) {
            let i = this._rows[n],
                r = i.merge(e(i.userId));
            (t = t || r !== i), (this._rows[n] = r);
        }
        return t;
    }
    filter(e, t) {
        return r()(this._rows)
            .filter((e) => {
                if (null == e.user) return !1;
                if (null != t && "" !== t) {
                    let n = t.toLowerCase();
                    return [e.usernameLower, e.nickname, e.user.globalName]
                        .map((e) => e?.toLowerCase())
                        .some((e) => e?.includes(n));
                }
                return !0;
            })
            .filter((t) => {
                switch (e) {
                    case m.m3P.ONLINE:
                        return t.type === m.eA$.FRIEND && t.status !== m.clD.OFFLINE;
                    case m.m3P.PENDING:
                        return (
                            (t.type === m.eA$.PENDING_INCOMING && !t.spam && !t.ignoredUser) ||
                            t.type === m.eA$.PENDING_OUTGOING
                        );
                    case m.m3P.SPAM:
                        return t.type === m.eA$.PENDING_INCOMING && t.spam;
                    case m.m3P.PENDING_IGNORED:
                        return t.type === m.eA$.PENDING_INCOMING && t.ignoredUser;
                    case m.m3P.SUGGESTIONS:
                        return 99 === t.type;
                    case m.m3P.ALL:
                    default:
                        return t.type === m.eA$.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [m.eA$.FRIEND]: 0,
            [m.eA$.PENDING_INCOMING]: 0,
            [m.eA$.PENDING_OUTGOING]: 0,
            99: 0,
            [m.eA$.BLOCKED]: 0,
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
}
let L = !0,
    D = !1,
    y = m.m3P.ONLINE,
    v = new R(),
    b = !0,
    M = !1;
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    L && (e || (y !== m.m3P.ONLINE && y !== m.m3P.ADD_FRIEND)) && !D && ((L = !1), (D = !0), l.A.fetchRelationships());
}
function U() {
    if (((L = !0), b ? (D = !1) : P(), (v = v.reset()), M)) return;
    let e = v.getRelationshipCounts();
    y = 0 === e[m.eA$.FRIEND] ? (0 !== e[m.eA$.PENDING_INCOMING] ? m.m3P.PENDING : m.m3P.ADD_FRIEND) : m.m3P.ONLINE;
}
function w() {
    v = b ? new R() : v.reset();
}
function G(e) {
    return function () {
        return !b && !!v.update(e) && ((v = v.clone()), !0);
    };
}
class x extends a.Ay.Store {
    static displayName = "FriendsStore";
    initialize() {
        this.waitFor(c.A, A.A, d.A, u.A, _.A, h.Ay, I.A, E.Ay, f.A, p.A, T.default),
            this.syncWith([p.A], w),
            this.syncWith([_.A], w),
            this.syncWith([u.A], w),
            this.syncWith([E.Ay], w),
            this.syncWith([T.default], G(S)),
            this.syncWith([f.A, A.A], G(N)),
            U();
    }
    getState() {
        return { fetching: D, section: y, rows: v };
    }
}
let k = new x(s.h, {
    CONNECTION_OPEN: function () {
        U();
    },
    FRIENDS_SET_SECTION: function (e) {
        (y = e.section), P();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (b = null != t), w(), !b;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        D = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (L = !0), (D = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (y = e.section), (M = !0);
    },
});
