i.d(t, { Ay: () => $ }), i(321073);
var s = i(735438),
    n = i.n(s),
    a = i(17928),
    r = i(228366),
    l = i(717398),
    o = i(315069),
    u = i(736056),
    c = i(710195),
    h = i(586774),
    d = i(800828),
    A = i(275759),
    p = i(616356),
    m = i(696451),
    N = i(71393),
    I = i(290863),
    y = i(994500),
    g = i(287809),
    E = i(652215),
    f = i(788868);
function _(e) {
    let t = g.default.getUser(e);
    return { user: t, usernameLower: null != t ? t.username.toLowerCase() : null };
}
function C(e) {
    return {
        status: I.A.getStatus(e),
        isMobile: I.A.isMobileOnline(e),
        isVR: I.A.isVROnline(e),
        activities: I.A.getActivities(e),
        applicationStream: p.A.getAnyStreamForUser(e),
    };
}
function v(e) {
    let t = [];
    return (
        n()(m.Ay.memberOf(e))
            .map(N.A.getGuild)
            .sortBy((e) => (null != e ? e.name.toLowerCase() : null))
            .forEach((e) => {
                null != e && t.push(e);
            }),
        { mutualGuildsLength: t.length, mutualGuilds: t.slice(0, 5) }
    );
}
class D extends o.A {
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
class w {
    _rows;
    constructor(e = []) {
        this._rows = e;
    }
    reset() {
        let e = new Set(),
            t = Array.from(y.A.getMutableRelationships().entries()).map((t) => {
                let [i, s] = t;
                return (
                    s === E.eA$.FRIEND && e.add(i),
                    new D({
                        key: i,
                        type: s,
                        userId: i,
                        nickname: y.A.getNickname(i),
                        ..._(i),
                        ...C(i),
                        ...v(i),
                        spam: y.A.isSpam(i),
                        ignoredUser: y.A.isIgnored(i),
                        giftIntentType:
                            s === E.eA$.FRIEND && A.Ay.getFriendAnniversaries().includes(i)
                                ? f.np.FRIEND_ANNIVERSARY
                                : void 0,
                        applicationId: y.A.getOriginApplicationId(i),
                    })
                );
            }),
            i = [],
            s = d.A.getGameRelationships().values(),
            a = new Set();
        s.forEach((t) => {
            let { id: s, applicationId: n, type: r } = t;
            (r === E.eA$.FRIEND && e.has(s)) ||
                (r === E.eA$.FRIEND && a.has(s)) ||
                (r === E.eA$.FRIEND && a.add(s),
                i.push(
                    new D({
                        key: `${s}-${n}`,
                        type: r,
                        userId: s,
                        applicationId: n,
                        nickname: y.A.getNickname(s),
                        ..._(s),
                        ...C(s),
                        ...v(s),
                        spam: y.A.isSpam(s),
                        ignoredUser: y.A.isIgnored(s),
                        isGameRelationship: !0,
                    }),
                ));
        });
        let r = n().map(
            h.A.getSuggestions(),
            (e) =>
                new D({ key: e.key, userId: e.key, type: 99, nickname: e.name, ..._(e.key), ...C(e.key), ...v(e.key) }),
        );
        return new w(n().concat(t, i, r));
    }
    clone() {
        return new w(this._rows);
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
                    case E.m3P.ONLINE:
                        return t.type === E.eA$.FRIEND && t.status !== E.clD.OFFLINE;
                    case E.m3P.PENDING:
                        return (
                            (t.type === E.eA$.PENDING_INCOMING && !t.spam && !t.ignoredUser) ||
                            t.type === E.eA$.PENDING_OUTGOING
                        );
                    case E.m3P.SPAM:
                        return t.type === E.eA$.PENDING_INCOMING && t.spam;
                    case E.m3P.PENDING_IGNORED:
                        return t.type === E.eA$.PENDING_INCOMING && t.ignoredUser;
                    case E.m3P.SUGGESTIONS:
                        return 99 === t.type;
                    case E.m3P.ALL:
                    default:
                        return t.type === E.eA$.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [E.eA$.FRIEND]: 0,
            [E.eA$.PENDING_INCOMING]: 0,
            [E.eA$.PENDING_OUTGOING]: 0,
            99: 0,
            [E.eA$.BLOCKED]: 0,
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
    S = !1,
    G = E.m3P.ONLINE,
    k = new w(),
    R = !0,
    O = !1;
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    L && (e || (G !== E.m3P.ONLINE && G !== E.m3P.ADD_FRIEND)) && !S && ((L = !1), (S = !0), l.A.fetchRelationships());
}
function T() {
    if (((L = !0), R ? (S = !1) : P(), (k = k.reset()), O)) return;
    let e = k.getRelationshipCounts();
    G = 0 === e[E.eA$.FRIEND] ? (0 !== e[E.eA$.PENDING_INCOMING] ? E.m3P.PENDING : E.m3P.ADD_FRIEND) : E.m3P.ONLINE;
}
function x() {
    k = R ? new w() : k.reset();
}
function F(e) {
    return function () {
        return !R && !!k.update(e) && ((k = k.clone()), !0);
    };
}
class M extends a.Ay.Store {
    static displayName = "FriendsStore";
    initialize() {
        this.waitFor(c.A, p.A, u.A, h.A, d.A, m.Ay, N.A, A.Ay, I.A, y.A, g.default),
            this.syncWith([y.A], x),
            this.syncWith([d.A], x),
            this.syncWith([h.A], x),
            this.syncWith([A.Ay], x),
            this.syncWith([g.default], F(_)),
            this.syncWith([I.A, p.A], F(C)),
            T();
    }
    getState() {
        return { fetching: S, section: G, rows: k };
    }
}
let $ = new M(r.h, {
    CONNECTION_OPEN: function () {
        T();
    },
    FRIENDS_SET_SECTION: function (e) {
        (G = e.section), P();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (R = null != t), x(), !R;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        S = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (L = !0), (S = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (G = e.section), (O = !0);
    },
});
