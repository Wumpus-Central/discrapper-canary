"use strict";
n.d(t, { Ay: () => G }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(717398),
    l = n(315069),
    u = n(736056),
    c = n(710195),
    d = n(586774),
    _ = n(800828),
    h = n(44862),
    f = n(616356),
    p = n(696451),
    E = n(71393),
    m = n(290863),
    g = n(994500),
    A = n(287809),
    I = n(652215),
    T = n(788868);
function S(e) {
    let t = A.default.getUser(e);
    return { user: t, usernameLower: null != t ? t.username.toLowerCase() : null };
}
function y(e) {
    return {
        status: m.A.getStatus(e),
        isMobile: m.A.isMobileOnline(e),
        isVR: m.A.isVROnline(e),
        activities: m.A.getActivities(e),
        applicationStream: f.A.getAnyStreamForUser(e),
    };
}
function C(e) {
    let t = [];
    return (
        r()(p.Ay.memberOf(e))
            .map(E.A.getGuild)
            .sortBy((e) => (null != e ? e.name.toLowerCase() : null))
            .forEach((e) => {
                null != e && t.push(e);
            }),
        { mutualGuildsLength: t.length, mutualGuilds: t.slice(0, 5) }
    );
}
class N extends l.A {
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
class v {
    _rows;
    constructor(e = []) {
        this._rows = e;
    }
    reset() {
        let e = new Set(),
            t = Array.from(g.A.getMutableRelationships().entries()).map((t) => {
                let [n, i] = t;
                return (
                    i === I.eA$.FRIEND && e.add(n),
                    new N({
                        key: n,
                        type: i,
                        userId: n,
                        nickname: g.A.getNickname(n),
                        ...S(n),
                        ...y(n),
                        ...C(n),
                        spam: g.A.isSpam(n),
                        ignoredUser: g.A.isIgnored(n),
                        giftIntentType:
                            i === I.eA$.FRIEND && h.Ay.getFriendAnniversaries().includes(n)
                                ? T.np.FRIEND_ANNIVERSARY
                                : void 0,
                        applicationId: g.A.getOriginApplicationId(n),
                    })
                );
            }),
            n = [],
            i = _.A.getGameRelationships().values(),
            s = new Set();
        i.forEach((t) => {
            let { id: i, applicationId: r, type: a } = t;
            (a === I.eA$.FRIEND && e.has(i)) ||
                (a === I.eA$.FRIEND && s.has(i)) ||
                (a === I.eA$.FRIEND && s.add(i),
                n.push(
                    new N({
                        key: `${i}-${r}`,
                        type: a,
                        userId: i,
                        applicationId: r,
                        nickname: g.A.getNickname(i),
                        ...S(i),
                        ...y(i),
                        ...C(i),
                        spam: g.A.isSpam(i),
                        ignoredUser: g.A.isIgnored(i),
                        isGameRelationship: !0,
                    }),
                ));
        });
        let a = r().map(
            d.A.getSuggestions(),
            (e) =>
                new N({ key: e.key, userId: e.key, type: 99, nickname: e.name, ...S(e.key), ...y(e.key), ...C(e.key) }),
        );
        return new v(r().concat(t, n, a));
    }
    clone() {
        return new v(this._rows);
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
                    case I.m3P.ONLINE:
                        return t.type === I.eA$.FRIEND && t.status !== I.clD.OFFLINE;
                    case I.m3P.PENDING:
                        return (
                            (t.type === I.eA$.PENDING_INCOMING && !t.spam && !t.ignoredUser) ||
                            t.type === I.eA$.PENDING_OUTGOING
                        );
                    case I.m3P.SPAM:
                        return t.type === I.eA$.PENDING_INCOMING && t.spam;
                    case I.m3P.PENDING_IGNORED:
                        return t.type === I.eA$.PENDING_INCOMING && t.ignoredUser;
                    case I.m3P.SUGGESTIONS:
                        return 99 === t.type;
                    case I.m3P.ALL:
                    default:
                        return t.type === I.eA$.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [I.eA$.FRIEND]: 0,
            [I.eA$.PENDING_INCOMING]: 0,
            [I.eA$.PENDING_OUTGOING]: 0,
            99: 0,
            [I.eA$.BLOCKED]: 0,
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
}
let R = !0,
    O = !1,
    b = I.m3P.ONLINE,
    D = new v(),
    L = !0,
    w = !1;
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    R && (e || (b !== I.m3P.ONLINE && b !== I.m3P.ADD_FRIEND)) && !O && ((R = !1), (O = !0), o.A.fetchRelationships());
}
function P() {
    if (((R = !0), L ? (O = !1) : M(), (D = D.reset()), w)) return;
    let e = D.getRelationshipCounts();
    b = 0 === e[I.eA$.FRIEND] ? (0 !== e[I.eA$.PENDING_INCOMING] ? I.m3P.PENDING : I.m3P.ADD_FRIEND) : I.m3P.ONLINE;
}
function x() {
    D = L ? new v() : D.reset();
}
function k(e) {
    return function () {
        return !L && !!D.update(e) && ((D = D.clone()), !0);
    };
}
class U extends s.Ay.Store {
    static displayName = "FriendsStore";
    initialize() {
        this.waitFor(c.A, f.A, u.A, d.A, _.A, p.Ay, E.A, h.Ay, m.A, g.A, A.default),
            this.syncWith([g.A], x),
            this.syncWith([_.A], x),
            this.syncWith([d.A], x),
            this.syncWith([h.Ay], x),
            this.syncWith([A.default], k(S)),
            this.syncWith([m.A, f.A], k(y)),
            P();
    }
    getState() {
        return { fetching: O, section: b, rows: D };
    }
}
let G = new U(a.h, {
    CONNECTION_OPEN: function () {
        P();
    },
    FRIENDS_SET_SECTION: function (e) {
        (b = e.section), M();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (L = null != t), x(), !L;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        O = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (R = !0), (O = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (b = e.section), (w = !0);
    },
});
