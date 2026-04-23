i.d(t, { Ay: () => M }), i(321073);
var s = i(735438),
    n = i.n(s),
    a = i(17928),
    r = i(228366),
    o = i(49229),
    l = i(315069),
    c = i(736056),
    u = i(710195),
    d = i(586774),
    h = i(800828),
    m = i(275759),
    p = i(616356),
    A = i(696451),
    N = i(71393),
    _ = i(290863),
    I = i(994500),
    g = i(287809),
    y = i(652215),
    f = i(788868);
function E(e) {
    let t = g.default.getUser(e);
    return { user: t, usernameLower: null != t ? t.username.toLowerCase() : null };
}
function v(e) {
    return {
        status: _.A.getStatus(e),
        isMobile: _.A.isMobileOnline(e),
        isVR: _.A.isVROnline(e),
        activities: _.A.getActivities(e),
        applicationStream: p.A.getAnyStreamForUser(e),
    };
}
function C(e) {
    let t = [];
    return (
        n()(A.Ay.memberOf(e))
            .map(N.A.getGuild)
            .sortBy((e) => (null != e ? e.name.toLowerCase() : null))
            .forEach((e) => {
                null != e && t.push(e);
            }),
        { mutualGuildsLength: t.length, mutualGuilds: t.slice(0, 5) }
    );
}
class D extends l.A {
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
class k {
    _rows;
    constructor(e = []) {
        this._rows = e;
    }
    reset() {
        let e = new Set(),
            t = Array.from(I.A.getMutableRelationships().entries()).map((t) => {
                let [i, s] = t;
                return (
                    s === y.eA$.FRIEND && e.add(i),
                    new D({
                        key: i,
                        type: s,
                        userId: i,
                        nickname: I.A.getNickname(i),
                        ...E(i),
                        ...v(i),
                        ...C(i),
                        spam: I.A.isSpam(i),
                        ignoredUser: I.A.isIgnored(i),
                        giftIntentType:
                            s === y.eA$.FRIEND && m.Ay.getFriendAnniversaries().includes(i)
                                ? f.np.FRIEND_ANNIVERSARY
                                : void 0,
                        applicationId: I.A.getOriginApplicationId(i),
                    })
                );
            }),
            i = [],
            s = h.A.getGameRelationships().values(),
            a = new Set();
        s.forEach((t) => {
            let { id: s, applicationId: n, type: r } = t;
            (r === y.eA$.FRIEND && e.has(s)) ||
                (r === y.eA$.FRIEND && a.has(s)) ||
                (r === y.eA$.FRIEND && a.add(s),
                i.push(
                    new D({
                        key: `${s}-${n}`,
                        type: r,
                        userId: s,
                        applicationId: n,
                        nickname: I.A.getNickname(s),
                        ...E(s),
                        ...v(s),
                        ...C(s),
                        spam: I.A.isSpam(s),
                        ignoredUser: I.A.isIgnored(s),
                        isGameRelationship: !0,
                    }),
                ));
        });
        let r = n().map(
            d.A.getSuggestions(),
            (e) =>
                new D({ key: e.key, userId: e.key, type: 99, nickname: e.name, ...E(e.key), ...v(e.key), ...C(e.key) }),
        );
        return new k(n().concat(t, i, r));
    }
    clone() {
        return new k(this._rows);
    }
    update(e) {
        let t = !1;
        for (let i = 0; i < this._rows.length; i++) {
            let s = this._rows[i],
                n = s.merge(e(s.userId));
            (t = t || n !== s), (this._rows[i] = n);
        }
        return t;
    }
    filter(e, t) {
        return n()(this._rows)
            .filter((e) => {
                if (null == e.user) return !1;
                if (null != t && "" !== t) {
                    let i = t.toLowerCase();
                    return [e.usernameLower, e.nickname, e.user.globalName]
                        .map((e) => e?.toLowerCase())
                        .some((e) => e?.includes(i));
                }
                return !0;
            })
            .filter((t) => {
                switch (e) {
                    case y.m3P.ONLINE:
                        return t.type === y.eA$.FRIEND && t.status !== y.clD.OFFLINE;
                    case y.m3P.PENDING:
                        return (
                            (t.type === y.eA$.PENDING_INCOMING && !t.spam && !t.ignoredUser) ||
                            t.type === y.eA$.PENDING_OUTGOING
                        );
                    case y.m3P.SPAM:
                        return t.type === y.eA$.PENDING_INCOMING && t.spam;
                    case y.m3P.PENDING_IGNORED:
                        return t.type === y.eA$.PENDING_INCOMING && t.ignoredUser;
                    case y.m3P.SUGGESTIONS:
                        return 99 === t.type;
                    case y.m3P.ALL:
                    default:
                        return t.type === y.eA$.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [y.eA$.FRIEND]: 0,
            [y.eA$.PENDING_INCOMING]: 0,
            [y.eA$.PENDING_OUTGOING]: 0,
            99: 0,
            [y.eA$.BLOCKED]: 0,
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
}
let x = !0,
    S = !1,
    P = y.m3P.ONLINE,
    L = new k(),
    R = !0,
    w = !1;
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    x && (e || (P !== y.m3P.ONLINE && P !== y.m3P.ADD_FRIEND)) && !S && ((x = !1), (S = !0), o.A.fetchRelationships());
}
function G() {
    if (((x = !0), R ? (S = !1) : O(), (L = L.reset()), w)) return;
    let e = L.getRelationshipCounts();
    P = 0 === e[y.eA$.FRIEND] ? (0 !== e[y.eA$.PENDING_INCOMING] ? y.m3P.PENDING : y.m3P.ADD_FRIEND) : y.m3P.ONLINE;
}
function b() {
    L = R ? new k() : L.reset();
}
function F(e) {
    return function () {
        return !R && !!L.update(e) && ((L = L.clone()), !0);
    };
}
class T extends a.Ay.Store {
    static displayName = "FriendsStore";
    initialize() {
        this.waitFor(u.A, p.A, c.A, d.A, h.A, A.Ay, N.A, m.Ay, _.A, I.A, g.default),
            this.syncWith([I.A], b),
            this.syncWith([h.A], b),
            this.syncWith([d.A], b),
            this.syncWith([m.Ay], b),
            this.syncWith([g.default], F(E)),
            this.syncWith([_.A, p.A], F(v)),
            G();
    }
    getState() {
        return { fetching: S, section: P, rows: L };
    }
}
let M = new T(r.h, {
    CONNECTION_OPEN: function () {
        G();
    },
    FRIENDS_SET_SECTION: function (e) {
        (P = e.section), O();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (R = null != t), b(), !R;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        S = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (x = !0), (S = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (P = e.section), (w = !0);
    },
});
