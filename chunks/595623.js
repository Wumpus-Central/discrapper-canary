s.d(t, { Ay: () => $ }), s(321073);
var i = s(735438),
    n = s.n(i),
    a = s(311907),
    r = s(73153),
    l = s(49229),
    o = s(315069),
    u = s(49463),
    h = s(217222),
    c = s(346084),
    A = s(800828),
    m = s(275759),
    d = s(616356),
    p = s(696451),
    N = s(71393),
    I = s(290863),
    E = s(994500),
    y = s(287809),
    g = s(652215),
    f = s(788868);
function C(e) {
    let t = y.default.getUser(e);
    return { user: t, usernameLower: null != t ? t.username.toLowerCase() : null };
}
function D(e) {
    return {
        status: I.A.getStatus(e),
        isMobile: I.A.isMobileOnline(e),
        isVR: I.A.isVROnline(e),
        activities: I.A.getActivities(e),
        applicationStream: d.A.getAnyStreamForUser(e),
    };
}
function L(e) {
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
class w extends o.A {
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
class G {
    _rows;
    constructor(e = []) {
        this._rows = e;
    }
    reset() {
        let e = new Set(),
            t = Array.from(E.A.getMutableRelationships().entries()).map((t) => {
                let [s, i] = t;
                return (
                    i === g.eA$.FRIEND && e.add(s),
                    new w({
                        key: s,
                        type: i,
                        userId: s,
                        nickname: E.A.getNickname(s),
                        ...C(s),
                        ...D(s),
                        ...L(s),
                        spam: E.A.isSpam(s),
                        ignoredUser: E.A.isIgnored(s),
                        giftIntentType:
                            i === g.eA$.FRIEND && m.Ay.getFriendAnniversaries().includes(s)
                                ? f.np.FRIEND_ANNIVERSARY
                                : void 0,
                        applicationId: E.A.getOriginApplicationId(s),
                    })
                );
            }),
            s = [],
            i = A.A.getGameRelationships().values(),
            a = new Set();
        i.forEach((t) => {
            let { id: i, applicationId: n, type: r } = t;
            (r === g.eA$.FRIEND && e.has(i)) ||
                (r === g.eA$.FRIEND && a.has(i)) ||
                (r === g.eA$.FRIEND && a.add(i),
                s.push(
                    new w({
                        key: `${i}-${n}`,
                        type: r,
                        userId: i,
                        applicationId: n,
                        nickname: E.A.getNickname(i),
                        ...C(i),
                        ...D(i),
                        ...L(i),
                        spam: E.A.isSpam(i),
                        ignoredUser: E.A.isIgnored(i),
                        isGameRelationship: !0,
                    }),
                ));
        });
        let r = n().map(
            c.A.getSuggestions(),
            (e) =>
                new w({ key: e.key, userId: e.key, type: 99, nickname: e.name, ...C(e.key), ...D(e.key), ...L(e.key) }),
        );
        return new G(n().concat(t, s, r));
    }
    clone() {
        return new G(this._rows);
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
                    case g.m3P.ONLINE:
                        return t.type === g.eA$.FRIEND && t.status !== g.clD.OFFLINE;
                    case g.m3P.PENDING:
                        return (
                            (t.type === g.eA$.PENDING_INCOMING && !t.spam && !t.ignoredUser) ||
                            t.type === g.eA$.PENDING_OUTGOING
                        );
                    case g.m3P.SPAM:
                        return t.type === g.eA$.PENDING_INCOMING && t.spam;
                    case g.m3P.PENDING_IGNORED:
                        return t.type === g.eA$.PENDING_INCOMING && t.ignoredUser;
                    case g.m3P.SUGGESTIONS:
                        return 99 === t.type;
                    case g.m3P.ALL:
                    default:
                        return t.type === g.eA$.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [g.eA$.FRIEND]: 0,
            [g.eA$.PENDING_INCOMING]: 0,
            [g.eA$.PENDING_OUTGOING]: 0,
            99: 0,
            [g.eA$.BLOCKED]: 0,
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
}
let S = !0,
    v = !1,
    R = g.m3P.ONLINE,
    _ = new G(),
    O = !0,
    P = !1;
function k() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    S && (e || (R !== g.m3P.ONLINE && R !== g.m3P.ADD_FRIEND)) && !v && ((S = !1), (v = !0), l.A.fetchRelationships());
}
function M() {
    if (((S = !0), O ? (v = !1) : k(), (_ = _.reset()), P)) return;
    let e = _.getRelationshipCounts();
    R = 0 === e[g.eA$.FRIEND] ? (0 !== e[g.eA$.PENDING_INCOMING] ? g.m3P.PENDING : g.m3P.ADD_FRIEND) : g.m3P.ONLINE;
}
function F() {
    _ = O ? new G() : _.reset();
}
function x(e) {
    return function () {
        return !O && !!_.update(e) && ((_ = _.clone()), !0);
    };
}
class T extends a.Ay.Store {
    static displayName = "FriendsStore";
    initialize() {
        this.waitFor(h.A, d.A, u.A, c.A, A.A, p.Ay, N.A, m.Ay, I.A, E.A, y.default),
            this.syncWith([E.A], F),
            this.syncWith([A.A], F),
            this.syncWith([c.A], F),
            this.syncWith([m.Ay], F),
            this.syncWith([y.default], x(C)),
            this.syncWith([I.A, d.A], x(D)),
            M();
    }
    getState() {
        return { fetching: v, section: R, rows: _ };
    }
}
let $ = new T(r.h, {
    CONNECTION_OPEN: function () {
        M();
    },
    FRIENDS_SET_SECTION: function (e) {
        (R = e.section), k();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (O = null != t), F(), !O;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        v = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (S = !0), (v = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (R = e.section), (P = !0);
    },
});
