s(321073);
var i = s(435558),
    n = s.n(i),
    a = s(855986),
    r = s(73153),
    l = s(49229),
    o = s(315069),
    u = s(343446),
    c = s(50258),
    h = s(565776),
    d = s(800828),
    A = s(884883),
    m = s(616356),
    p = s(696451),
    N = s(71393),
    I = s(290863),
    E = s(994500),
    g = s(287809),
    y = s(652215),
    f = s(682901);
function v(e) {
    let t = g.default.getUser(e);
    return { user: t, usernameLower: null != t ? t.username.toLowerCase() : null };
}
function C(e) {
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
class G extends o.A {
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
    since;
    constructor(e) {
        (super(),
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
            (this.isGameRelationship = e.isGameRelationship ?? !1),
            (this.since = e.since));
    }
    get comparator() {
        return [this.type, this.nickname?.toLowerCase() ?? this.user?.globalName?.toLowerCase() ?? this.usernameLower];
    }
}
class S {
    _rows;
    constructor(e = []) {
        this._rows = e;
    }
    reset() {
        let e = new Set(),
            t = Array.from(E.A.getMutableRelationships().entries()).map((t) => {
                let [s, i] = t;
                return (
                    i === y.eA$.FRIEND && e.add(s),
                    new G({
                        key: s,
                        type: i,
                        userId: s,
                        nickname: E.A.getNickname(s),
                        ...v(s),
                        ...C(s),
                        ...D(s),
                        spam: E.A.isSpam(s),
                        ignoredUser: E.A.isIgnored(s),
                        giftIntentType:
                            i === y.eA$.FRIEND && A.A.getFriendAnniversaries().includes(s)
                                ? f.np.FRIEND_ANNIVERSARY
                                : void 0,
                        applicationId: E.A.getOriginApplicationId(s),
                        since: E.A.getSince(s),
                    })
                );
            }),
            s = [],
            i = d.A.getGameRelationships().values(),
            a = new Set();
        i.forEach((t) => {
            let { id: i, applicationId: n, type: r, since: l } = t;
            (r === y.eA$.FRIEND && e.has(i)) ||
                (r === y.eA$.FRIEND && a.has(i)) ||
                (r === y.eA$.FRIEND && a.add(i),
                s.push(
                    new G({
                        key: `${i}-${n}`,
                        type: r,
                        userId: i,
                        applicationId: n,
                        nickname: E.A.getNickname(i),
                        ...v(i),
                        ...C(i),
                        ...D(i),
                        spam: E.A.isSpam(i),
                        ignoredUser: E.A.isIgnored(i),
                        isGameRelationship: !0,
                        since: l,
                    }),
                ));
        });
        let r = n().map(
            h.A.getSuggestions(),
            (e) =>
                new G({ key: e.key, userId: e.key, type: 99, nickname: e.name, ...v(e.key), ...C(e.key), ...D(e.key) }),
        );
        return new S(n().concat(t, s, r));
    }
    clone() {
        return new S(this._rows);
    }
    update(e) {
        let t = !1;
        for (let s = 0; s < this._rows.length; s++) {
            let i = this._rows[s],
                n = i.merge(e(i.userId));
            ((t = t || n !== i), (this._rows[s] = n));
        }
        return t;
    }
    filter(e, t) {
        let s = n()(this._rows)
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
        return (
            (e === y.m3P.PENDING || e === y.m3P.SPAM || e === y.m3P.PENDING_IGNORED) &&
                s.sort((e, t) =>
                    e.type !== t.type
                        ? e.type - t.type
                        : e.type !== y.eA$.PENDING_INCOMING
                          ? 0
                          : (t.since ?? "").localeCompare(e.since ?? ""),
                ),
            s
        );
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
let L = !0,
    _ = !1,
    w = y.m3P.ONLINE,
    P = new S(),
    R = !0,
    x = !1,
    O = !1;
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    L && (e || (w !== y.m3P.ONLINE && w !== y.m3P.ADD_FRIEND)) && !_ && ((L = !1), (_ = !0), l.A.fetchRelationships());
}
function k() {
    if (((L = !0), R ? (_ = !1) : M(), (P = P.reset()), x)) return;
    let e = P.getRelationshipCounts();
    w = 0 === e[y.eA$.FRIEND] ? (0 !== e[y.eA$.PENDING_INCOMING] ? y.m3P.PENDING : y.m3P.ADD_FRIEND) : y.m3P.ONLINE;
}
function F() {
    P = R ? new S() : P.reset();
}
function T(e) {
    return function () {
        return !R && !!P.update(e) && ((P = P.clone()), !0);
    };
}
class b extends a.Ay.Store {
    static displayName = "FriendsStore";
    initialize() {
        (this.waitFor(c.A, m.A, u.A, h.A, d.A, p.Ay, N.A, A.A, I.A, E.A, g.default),
            this.syncWith([E.A], F),
            this.syncWith([d.A], F),
            this.syncWith([h.A], F),
            this.syncWith([A.A], F),
            this.syncWith([g.default], T(v)),
            this.syncWith([I.A, m.A], T(C)),
            k());
    }
    getState() {
        return { fetching: _, section: w, rows: P };
    }
    isInitialized() {
        return O;
    }
}
let $ = new b(r.h, {
    CONNECTION_OPEN: function () {
        (k(), (O = !0));
    },
    FRIENDS_SET_SECTION: function (e) {
        ((w = e.section), M());
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return ((R = null != t), F(), !R);
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        _ = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        ((L = !0), (_ = !0));
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        ((w = e.section), (x = !0));
    },
});
s.d(t, {}, { Ay: $ });
