s.d(t, { Ay: () => $ }), s(321073);
var i = s(735438),
    n = s.n(i),
    a = s(17928),
    r = s(228366),
    l = s(717398),
    o = s(315069),
    u = s(736056),
    h = s(710195),
    c = s(586774),
    d = s(800828),
    A = s(275759),
    m = s(616356),
    p = s(696451),
    N = s(71393),
    I = s(290863),
    g = s(994500),
    E = s(287809),
    y = s(652215),
    f = s(788868);
function C(e) {
    let t = E.default.getUser(e);
    return { user: t, usernameLower: null != t ? t.username.toLowerCase() : null };
}
function v(e) {
    return {
        status: I.A.getStatus(e),
        isMobile: I.A.isMobileOnline(e),
        isVR: I.A.isVROnline(e),
        activities: I.A.getActivities(e),
        applicationStream: m.A.getAnyStreamForUser(e),
    };
}
function D(e) {
    let t = [];
    return (
        n()(p.Ay.memberOf(e))
            .map(N.A.getGuild)
            .sortBy((e) => (null != e ? e.name.toLowerCase() : null))
            .forEach((e) => {
                null != e && t.push(e);
            }),
        { mutualGuildsLength: t.length, mutualGuilds: t.slice(0, 5) }
    );
}
class L extends o.A {
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
            t = Array.from(g.A.getMutableRelationships().entries()).map((t) => {
                let [s, i] = t;
                return (
                    i === y.eA$.FRIEND && e.add(s),
                    new L({
                        key: s,
                        type: i,
                        userId: s,
                        nickname: g.A.getNickname(s),
                        ...C(s),
                        ...v(s),
                        ...D(s),
                        spam: g.A.isSpam(s),
                        ignoredUser: g.A.isIgnored(s),
                        giftIntentType:
                            i === y.eA$.FRIEND && A.Ay.getFriendAnniversaries().includes(s)
                                ? f.np.FRIEND_ANNIVERSARY
                                : void 0,
                        applicationId: g.A.getOriginApplicationId(s),
                    })
                );
            }),
            s = [],
            i = d.A.getGameRelationships().values(),
            a = new Set();
        i.forEach((t) => {
            let { id: i, applicationId: n, type: r } = t;
            (r === y.eA$.FRIEND && e.has(i)) ||
                (r === y.eA$.FRIEND && a.has(i)) ||
                (r === y.eA$.FRIEND && a.add(i),
                s.push(
                    new L({
                        key: `${i}-${n}`,
                        type: r,
                        userId: i,
                        applicationId: n,
                        nickname: g.A.getNickname(i),
                        ...C(i),
                        ...v(i),
                        ...D(i),
                        spam: g.A.isSpam(i),
                        ignoredUser: g.A.isIgnored(i),
                        isGameRelationship: !0,
                    }),
                ));
        });
        let r = n().map(
            c.A.getSuggestions(),
            (e) =>
                new L({ key: e.key, userId: e.key, type: 99, nickname: e.name, ...C(e.key), ...v(e.key), ...D(e.key) }),
        );
        return new w(n().concat(t, s, r));
    }
    clone() {
        return new w(this._rows);
    }
    update(e) {
        let t = !1;
        for (let s = 0; s < this._rows.length; s++) {
            let i = this._rows[s],
                n = i.merge(e(i.userId));
            (t = t || n !== i), (this._rows[s] = n);
        }
        return t;
    }
    filter(e, t) {
        return n()(this._rows)
            .filter((e) => {
                if (null == e.user) return !1;
                if (null != t && "" !== t) {
                    let s = t.toLowerCase();
                    return [e.usernameLower, e.nickname, e.user.globalName]
                        .map((e) => e?.toLowerCase())
                        .some((e) => e?.includes(s));
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
let G = !0,
    S = !1,
    R = y.m3P.ONLINE,
    _ = new w(),
    O = !0,
    P = !1;
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    G && (e || (R !== y.m3P.ONLINE && R !== y.m3P.ADD_FRIEND)) && !S && ((G = !1), (S = !0), l.A.fetchRelationships());
}
function x() {
    if (((G = !0), O ? (S = !1) : k(), (_ = _.reset()), P)) return;
    let e = _.getRelationshipCounts();
    R = 0 === e[y.eA$.FRIEND] ? (0 !== e[y.eA$.PENDING_INCOMING] ? y.m3P.PENDING : y.m3P.ADD_FRIEND) : y.m3P.ONLINE;
}
function F() {
    _ = O ? new w() : _.reset();
}
function M(e) {
    return function () {
        return !O && !!_.update(e) && ((_ = _.clone()), !0);
    };
}
class T extends a.Ay.Store {
    static displayName = "FriendsStore";
    initialize() {
        this.waitFor(h.A, m.A, u.A, c.A, d.A, p.Ay, N.A, A.Ay, I.A, g.A, E.default),
            this.syncWith([g.A], F),
            this.syncWith([d.A], F),
            this.syncWith([c.A], F),
            this.syncWith([A.Ay], F),
            this.syncWith([E.default], M(C)),
            this.syncWith([I.A, m.A], M(v)),
            x();
    }
    getState() {
        return { fetching: S, section: R, rows: _ };
    }
}
let $ = new T(r.h, {
    CONNECTION_OPEN: function () {
        x();
    },
    FRIENDS_SET_SECTION: function (e) {
        (R = e.section), k();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (O = null != t), F(), !O;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        S = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (G = !0), (S = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (R = e.section), (P = !0);
    },
});
