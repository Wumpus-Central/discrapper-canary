n.d(t, { Ay: () => k }), n(321073);
var i = n(735438),
    r = n.n(i),
    a = n(311907),
    l = n(73153),
    s = n(49229),
    o = n(315069),
    d = n(49463),
    u = n(217222),
    c = n(346084),
    A = n(800828),
    h = n(275759),
    _ = n(616356),
    E = n(696451),
    p = n(71393),
    m = n(290863),
    g = n(994500),
    I = n(287809),
    C = n(652215),
    f = n(788868);
function T(e) {
    let t = I.default.getUser(e);
    return { user: t, usernameLower: null != t ? t.username.toLowerCase() : null };
}
function S(e) {
    return {
        status: m.A.getStatus(e),
        isMobile: m.A.isMobileOnline(e),
        isVR: m.A.isVROnline(e),
        activities: m.A.getActivities(e),
        applicationStream: _.A.getAnyStreamForUser(e),
    };
}
function N(e) {
    let t = [];
    return (
        r()(E.Ay.memberOf(e))
            .map(p.A.getGuild)
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
class L {
    _rows;
    constructor(e = []) {
        this._rows = e;
    }
    reset() {
        let e = new Set(),
            t = Array.from(g.A.getMutableRelationships().entries()).map((t) => {
                let [n, i] = t;
                return (
                    i === C.eA$.FRIEND && e.add(n),
                    new O({
                        key: n,
                        type: i,
                        userId: n,
                        nickname: g.A.getNickname(n),
                        ...T(n),
                        ...S(n),
                        ...N(n),
                        spam: g.A.isSpam(n),
                        ignoredUser: g.A.isIgnored(n),
                        giftIntentType:
                            i === C.eA$.FRIEND && h.Ay.getFriendAnniversaries().includes(n)
                                ? f.np.FRIEND_ANNIVERSARY
                                : void 0,
                        applicationId: g.A.getOriginApplicationId(n),
                    })
                );
            }),
            n = [],
            i = A.A.getGameRelationships().values(),
            a = new Set();
        i.forEach((t) => {
            let { id: i, applicationId: r, type: l } = t;
            (l === C.eA$.FRIEND && e.has(i)) ||
                (l === C.eA$.FRIEND && a.has(i)) ||
                (l === C.eA$.FRIEND && a.add(i),
                n.push(
                    new O({
                        key: `${i}-${r}`,
                        type: l,
                        userId: i,
                        applicationId: r,
                        nickname: g.A.getNickname(i),
                        ...T(i),
                        ...S(i),
                        ...N(i),
                        spam: g.A.isSpam(i),
                        ignoredUser: g.A.isIgnored(i),
                        isGameRelationship: !0,
                    }),
                ));
        });
        let l = r().map(
            c.A.getSuggestions(),
            (e) =>
                new O({ key: e.key, userId: e.key, type: 99, nickname: e.name, ...T(e.key), ...S(e.key), ...N(e.key) }),
        );
        return new L(r().concat(t, n, l));
    }
    clone() {
        return new L(this._rows);
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
                    case C.m3P.ONLINE:
                        return t.type === C.eA$.FRIEND && t.status !== C.clD.OFFLINE;
                    case C.m3P.PENDING:
                        return (
                            (t.type === C.eA$.PENDING_INCOMING && !t.spam && !t.ignoredUser) ||
                            t.type === C.eA$.PENDING_OUTGOING
                        );
                    case C.m3P.SPAM:
                        return t.type === C.eA$.PENDING_INCOMING && t.spam;
                    case C.m3P.PENDING_IGNORED:
                        return t.type === C.eA$.PENDING_INCOMING && t.ignoredUser;
                    case C.m3P.SUGGESTIONS:
                        return 99 === t.type;
                    case C.m3P.ALL:
                    default:
                        return t.type === C.eA$.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [C.eA$.FRIEND]: 0,
            [C.eA$.PENDING_INCOMING]: 0,
            [C.eA$.PENDING_OUTGOING]: 0,
            99: 0,
            [C.eA$.BLOCKED]: 0,
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
}
let y = !0,
    v = !1,
    b = C.m3P.ONLINE,
    D = new L(),
    R = !0,
    P = !1;
function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    y && (e || (b !== C.m3P.ONLINE && b !== C.m3P.ADD_FRIEND)) && !v && ((y = !1), (v = !0), s.A.fetchRelationships());
}
function M() {
    if (((y = !0), R ? (v = !1) : w(), (D = D.reset()), P)) return;
    let e = D.getRelationshipCounts();
    b = 0 === e[C.eA$.FRIEND] ? (0 !== e[C.eA$.PENDING_INCOMING] ? C.m3P.PENDING : C.m3P.ADD_FRIEND) : C.m3P.ONLINE;
}
function U() {
    D = R ? new L() : D.reset();
}
function x(e) {
    return function () {
        return !R && !!D.update(e) && ((D = D.clone()), !0);
    };
}
class G extends a.Ay.Store {
    static displayName = "FriendsStore";
    initialize() {
        this.waitFor(u.A, _.A, d.A, c.A, A.A, E.Ay, p.A, h.Ay, m.A, g.A, I.default),
            this.syncWith([g.A], U),
            this.syncWith([A.A], U),
            this.syncWith([c.A], U),
            this.syncWith([h.Ay], U),
            this.syncWith([I.default], x(T)),
            this.syncWith([m.A, _.A], x(S)),
            M();
    }
    getState() {
        return { fetching: v, section: b, rows: D };
    }
}
let k = new G(l.h, {
    CONNECTION_OPEN: function () {
        M();
    },
    FRIENDS_SET_SECTION: function (e) {
        (b = e.section), w();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (R = null != t), U(), !R;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        v = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (y = !0), (v = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (b = e.section), (P = !0);
    },
});
