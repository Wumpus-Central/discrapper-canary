i.d(t, {
    Ay: () => V,
}),
    i(321073),
    i(896048);
var s,
    n = i(735438),
    r = i.n(n),
    o = i(311907),
    a = i(73153),
    l = i(49229),
    u = i(315069),
    c = i(49463),
    h = i(217222),
    p = i(346084),
    d = i(800828),
    m = i(275759),
    A = i(616356),
    y = i(696451),
    N = i(71393),
    f = i(290863),
    g = i(994500),
    O = i(287809),
    v = i(652215),
    I = i(788868);

function E(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            s.forEach(function (t) {
                E(e, t, i[t]);
            });
    }
    return e;
}

function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, s);
                  }
                  return i;
              })(Object(t)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              }),
        e
    );
}

function P(e) {
    let t = O.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null,
    };
}

function D(e) {
    return {
        status: f.A.getStatus(e),
        isMobile: f.A.isMobileOnline(e),
        isVR: f.A.isVROnline(e),
        activities: f.A.getActivities(e),
        applicationStream: A.A.getAnyStreamForUser(e),
    };
}

function S(e) {
    let t = [];
    return (
        r()(y.Ay.memberOf(e))
            .map(N.A.getGuild)
            .sortBy((e) => (null != e ? e.name.toLowerCase() : null))
            .forEach((e) => {
                null != e && t.push(e);
            }),
        {
            mutualGuildsLength: t.length,
            mutualGuilds: t.slice(0, 5),
        }
    );
}
class C extends u.A {
    get comparator() {
        var e, t, i, s, n;
        return [
            this.type,
            null !=
            (e =
                null != (t = null == (i = this.nickname) ? void 0 : i.toLowerCase())
                    ? t
                    : null == (n = this.user) || null == (s = n.globalName)
                      ? void 0
                      : s.toLowerCase())
                ? e
                : this.usernameLower,
        ];
    }
    constructor(e) {
        var t;
        super(),
            E(this, "key", void 0),
            E(this, "userId", void 0),
            E(this, "type", void 0),
            E(this, "status", void 0),
            E(this, "isMobile", void 0),
            E(this, "isVR", void 0),
            E(this, "activities", void 0),
            E(this, "applicationStream", void 0),
            E(this, "user", void 0),
            E(this, "usernameLower", void 0),
            E(this, "mutualGuildsLength", void 0),
            E(this, "mutualGuilds", void 0),
            E(this, "nickname", void 0),
            E(this, "spam", void 0),
            E(this, "giftIntentType", void 0),
            E(this, "ignoredUser", void 0),
            E(this, "applicationId", void 0),
            E(this, "isGameRelationship", void 0),
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
            (this.isGameRelationship = null != (t = e.isGameRelationship) && t);
    }
}
class j {
    reset() {
        let e = new Set(),
            t = Array.from(g.A.getMutableRelationships().entries()).map((t) => {
                let [i, s] = t;
                return (
                    s === v.eA$.FRIEND && e.add(i),
                    new C(
                        w(
                            b(
                                {
                                    key: i,
                                    type: s,
                                    userId: i,
                                    nickname: g.A.getNickname(i),
                                },
                                P(i),
                                D(i),
                                S(i),
                            ),
                            {
                                spam: g.A.isSpam(i),
                                ignoredUser: g.A.isIgnored(i),
                                giftIntentType:
                                    s === v.eA$.FRIEND && m.Ay.getFriendAnniversaries().includes(i)
                                        ? I.np.FRIEND_ANNIVERSARY
                                        : void 0,
                                applicationId: g.A.getOriginApplicationId(i),
                            },
                        ),
                    )
                );
            }),
            i = [],
            s = d.A.getGameRelationships().values(),
            n = new Set();
        s.forEach((t) => {
            let { id: s, applicationId: r, type: o } = t;
            (o === v.eA$.FRIEND && e.has(s)) ||
                (o === v.eA$.FRIEND && n.has(s)) ||
                (o === v.eA$.FRIEND && n.add(s),
                i.push(
                    new C(
                        w(
                            b(
                                {
                                    key: "".concat(s, "-").concat(r),
                                    type: o,
                                    userId: s,
                                    applicationId: r,
                                    nickname: g.A.getNickname(s),
                                },
                                P(s),
                                D(s),
                                S(s),
                            ),
                            {
                                spam: g.A.isSpam(s),
                                ignoredUser: g.A.isIgnored(s),
                                isGameRelationship: !0,
                            },
                        ),
                    ),
                ));
        });
        let o = r().map(
            p.A.getSuggestions(),
            (e) =>
                new C(
                    b(
                        {
                            key: e.key,
                            userId: e.key,
                            type: 99,
                            nickname: e.name,
                        },
                        P(e.key),
                        D(e.key),
                        S(e.key),
                    ),
                ),
        );
        return new j(r().concat(t, i, o));
    }
    clone() {
        return new j(this._rows);
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
        return r()(this._rows)
            .filter((e) => {
                if (null == e.user) return !1;
                if (null != t && "" !== t) {
                    let i = t.toLowerCase();
                    return [e.usernameLower, e.nickname, e.user.globalName]
                        .map((e) => (null == e ? void 0 : e.toLowerCase()))
                        .some((e) => (null == e ? void 0 : e.includes(i)));
                }
                return !0;
            })
            .filter((t) => {
                switch (e) {
                    case v.m3P.ONLINE:
                        return t.type === v.eA$.FRIEND && t.status !== v.clD.OFFLINE;
                    case v.m3P.PENDING:
                        return (
                            (t.type === v.eA$.PENDING_INCOMING && !t.spam && !t.ignoredUser) ||
                            t.type === v.eA$.PENDING_OUTGOING
                        );
                    case v.m3P.SPAM:
                        return t.type === v.eA$.PENDING_INCOMING && t.spam;
                    case v.m3P.PENDING_IGNORED:
                        return t.type === v.eA$.PENDING_INCOMING && t.ignoredUser;
                    case v.m3P.SUGGESTIONS:
                        return 99 === t.type;
                    case v.m3P.ALL:
                    default:
                        return t.type === v.eA$.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [v.eA$.FRIEND]: 0,
            [v.eA$.PENDING_INCOMING]: 0,
            [v.eA$.PENDING_OUTGOING]: 0,
            99: 0,
            [v.eA$.BLOCKED]: 0,
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
    constructor(e = []) {
        E(this, "_rows", void 0), (this._rows = e);
    }
}
let L = !0,
    G = !1,
    R = v.m3P.ONLINE,
    k = new j(),
    _ = !0,
    M = !1;

function F() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    L && (e || (R !== v.m3P.ONLINE && R !== v.m3P.ADD_FRIEND)) && !G && ((L = !1), (G = !0), l.A.fetchRelationships());
}

function x() {
    if (((L = !0), _ ? (G = !1) : F(), (k = k.reset()), M)) return;
    let e = k.getRelationshipCounts();
    R = 0 === e[v.eA$.FRIEND] ? (0 !== e[v.eA$.PENDING_INCOMING] ? v.m3P.PENDING : v.m3P.ADD_FRIEND) : v.m3P.ONLINE;
}

function T() {
    k = _ ? new j() : k.reset();
}

function U(e) {
    return function () {
        return !_ && !!k.update(e) && ((k = k.clone()), !0);
    };
}
class $ extends (s = o.Ay.Store) {
    initialize() {
        this.waitFor(h.A, A.A, c.A, p.A, d.A, y.Ay, N.A, m.Ay, f.A, g.A, O.default),
            this.syncWith([g.A], T),
            this.syncWith([d.A], T),
            this.syncWith([p.A], T),
            this.syncWith([m.Ay], T),
            this.syncWith([O.default], U(P)),
            this.syncWith([f.A, A.A], U(D)),
            x();
    }
    getState() {
        return {
            fetching: G,
            section: R,
            rows: k,
        };
    }
}
E($, "displayName", "FriendsStore");
let V = new $(a.h, {
    CONNECTION_OPEN: function () {
        x();
    },
    FRIENDS_SET_SECTION: function (e) {
        (R = e.section), F();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (_ = null != t), T(), !_;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        G = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (L = !0), (G = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (R = e.section), (M = !0);
    },
});
