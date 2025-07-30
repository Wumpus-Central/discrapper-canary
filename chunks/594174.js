(n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => v,
        default: () => eL,
        mergeUser: () => C,
        transformUser: () => A,
        users: () => y
    }),
    n(997841),
    n(388685),
    n(825670),
    n(539854),
    n(642613));
var r = n(392711),
    i = n(911969),
    a = n(2572),
    o = n(864106),
    s = n(579407),
    l = n(131016),
    c = n(602210),
    u = n(502087),
    d = n(168232),
    f = n(598077),
    _ = n(630388),
    p = n(823379),
    h = n(314897),
    m = n(750041),
    g = n(981631),
    E = n(474936);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let y = {},
    O = 0,
    v = '47835198259242069';
function I(e, t, n) {
    let r = y[e];
    if (null == r) return !1;
    let i = r;
    ((i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (y[r.id] = i));
    let a = r !== i;
    return (a && O++, a);
}
function T(e, t) {
    let n = y[e];
    return !(null == n || (0, c.d)(n.primaryGuild, t.primary_guild)) && (null == n.primaryGuild || null != t.primary_guild) && ((n.primaryGuild = (0, c.l)(t.primary_guild)), (y[n.id] = n), O++, !0);
}
function S(e, t) {
    switch (!0) {
        case null == e.primaryGuild && null == t.primary_guild:
            break;
        case null != e.primaryGuild && null == t.primary_guild:
        case (0, c.d)(e.primaryGuild, t.primary_guild):
            t.primary_guild = e.primaryGuild;
            break;
        default:
            t.primary_guild = (0, c.l)(t.primary_guild);
    }
    return t;
}
function A(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, d.G)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let i = e.age_verification_status;
    null != i && ((e.ageVerificationStatus = i), delete e.age_verification_status);
    let a = e.public_flags;
    if (null != a) {
        if (((e.publicFlags = a), (a & g.xW$.STAFF) != 0)) {
            var u;
            let t = null != (u = e.flags) ? u : 0;
            e.flags = t | g.xW$.STAFF;
        }
        delete e.public_flags;
    }
    let f = e.purchased_flags;
    void 0 !== f && ((e.purchasedFlags = f), delete e.purchased_flags);
    let _ = e.premium_usage_flags;
    (void 0 !== _ && ((e.premiumUsageFlags = _), delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color);
    let p = e.avatar_decoration_data;
    void 0 !== p && ((e.avatarDecorationData = (0, o.FG)(p)), delete e.avatar_decoration_data);
    let h = e.collectibles;
    void 0 !== h && (delete e.collectibles, (e.collectibles = (0, s.Xm)(h)));
    let m = e.global_name;
    void 0 !== m && ((e.globalName = m), delete e.global_name);
    let E = e.primary_guild;
    void 0 !== E && (e.primary_guild = (0, c.l)(E));
    let b = e.display_name_styles;
    return (void 0 !== b && ((e.displayNameStyles = (0, l.bN)(b)), delete e.display_name_styles), e);
}
function N(e) {
    return e.id !== h.default.getId();
}
function C(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = y[e.id],
        i = void 0 !== e.id && e.id === h.default.getId();
    if (null == r) void 0 !== (t = (r = new f.Z(e)).premiumType) && i && (r.premiumType = P((0, d.QI)(r), r.premiumType));
    else if (n) {
        var a;
        let n = A(e);
        (void 0 !== (t = null != (a = n.premium_type) ? a : n.premiumType) && i && (0, d.VR)(n) && (n = R(n)), (n = S(r, n)), (r = r.merge(n)));
    }
    (0, d.jX)((0, d.QI)(r), t, r.premiumType);
    let o = y[e.id] !== r;
    return ((y[e.id] = r), o && O++, o);
}
function R(e) {
    var t;
    let n = null != (t = e.premium_type) ? t : e.premiumType,
        r = P((0, d.VR)(e), n);
    return (void 0 !== e.premiumType ? (e.premiumType = r) : void 0 !== e.premium_type && (e.premium_type = r), e);
}
function P(e, t) {
    if (!e) return t;
    let n = u.Z.getPremiumTypeOverride(),
        r = u.Z.getPremiumTypeActual();
    return n === E.F_ ? r : n;
}
function w(e, t) {
    var n, r, i, a, o, s;
    if (
        (null != e.author && 'SENDING' !== e.state && N(e.author) && C(e.author, t),
        null == (n = e.mentions) ||
            n.forEach((e) => {
                N(e) && C(e, t);
            }),
        (null == (r = e.interaction) ? void 0 : r.user) != null && N(null == (i = e.interaction) ? void 0 : i.user) && C(e.interaction.user, t),
        null == (a = e.attachments) ||
            a.forEach((e) => {
                var n;
                null == (n = e.clip_participants) ||
                    n.forEach((e) => {
                        N(e) && C(e, t);
                    });
            }),
        (null == (o = e.resolved) ? void 0 : o.users) != null)
    )
        for (let n in e.resolved.users) {
            let r = e.resolved.users[n];
            N(r) && C(r, t);
        }
    ((null == (s = e.interaction_metadata) ? void 0 : s.user) != null && N(e.interaction_metadata.user) && C(e.interaction_metadata.user, t),
        null != e.message_snapshots &&
            e.message_snapshots.forEach((e) => {
                var n, r, i, a;
                ((null == (r = e.moderator_report) || null == (n = r.reported_member) ? void 0 : n.user) != null && C(e.moderator_report.reported_member.user, t), (null == (a = e.moderator_report) || null == (i = a.reporting_member) ? void 0 : i.user) != null && C(e.moderator_report.reporting_member.user, t));
            }));
}
function D(e) {
    let { user: t, users: r, guilds: i } = e;
    (delete t.premium,
        delete t.banner_color,
        C(t),
        r.forEach((e) => {
            C(e);
        }),
        n
            .e('831')
            .then(n.bind(n, 475941))
            .then((e) => {
                let { default: t } = e;
                t.preloadStaffMembers();
            }),
        i.forEach((e) => {
            e.members.forEach((t) => {
                (I(t.user.id, e.id, t.avatar), T(t.user.id, t.user));
            });
        }),
        null != y[h.default.getId()] &&
            (y[v] = new f.Z({
                id: v,
                username: 'Wumpus',
                discriminator: '0',
                globalName: 'Wumpus',
                avatar: 'c1f86b313385cb97985f1b118851c28c'
            })));
}
function L(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    (t.forEach((e) => {
        e.members.forEach((t) => {
            (I(t.user.id, e.id, t.avatar), T(t.user.id, t.user));
        });
    }),
        null == n ||
            n.forEach((e) => {
                var t;
                null == (t = e.rawRecipients) ||
                    t.forEach((e) => {
                        C(e);
                    });
            }));
}
function x(e) {
    return !('incomplete' in e);
}
function M(e) {
    if (null != e.users) for (let t of e.users) (t.id in y && x(t)) || (y[t.id] = new f.Z(t));
}
function k(e) {
    let { user: t } = e;
    if (!N(t)) return !1;
    C(t);
}
function j(e) {
    let { userProfile: t } = e;
    if (!N(t.user)) return !1;
    C(t.user);
}
function U(e) {
    let { user: t } = e;
    C(t);
}
function G(e) {
    let { user: t } = e;
    C(t);
}
function B(e) {
    let { messages: t } = e;
    return (t.forEach((e) => w(e, !0)), !1);
}
function V(e) {
    let { pins: t } = e;
    return (
        t.forEach((e) => {
            let { message: t } = e;
            return w(t, !0);
        }),
        !1
    );
}
function F(e) {
    let { mostRecentMessages: t } = e;
    return (null == t || t.forEach((e) => w(e, !1)), !1);
}
function Z(e) {
    let { data: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    w(e, !0);
                });
            });
        }),
        !1
    );
}
function H(e) {
    let { firstMessages: t, owners: n } = e;
    (null != t && t.forEach((e) => w(e, !0)), null != n && n.forEach((e) => C(e.user, !0)));
}
function Y(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        (null != t && w(t, !0), null != n && w(n, !0), null != r && null != r.user && C(r.user, !0));
    });
}
function W(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && w(t, !0);
    });
}
function K(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: r } = e;
        if (null == t) return;
        C(t);
        let i = null == r ? void 0 : r.avatar;
        null != i && I(t.id, n, i);
    });
}
function z(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && C(e.other_user);
    });
}
function q(e) {
    let { item: t } = e;
    null != t.other_user && C(t.other_user);
}
function X(e) {
    let { message: t } = e;
    if ((w(t, !0), null != t.flags && _.yE(t.flags, g.iLy.URGENT))) {
        let e = y[h.default.getId()];
        return null != e && ((y[h.default.getId()] = e.set('flags', _.mB(e.flags, g.xW$.HAS_UNREAD_URGENT_MESSAGES, !0))), !0);
    }
    return !1;
}
function Q(e) {
    let {
        channel: { rawRecipients: t }
    } = e;
    return (null != t && t.forEach((e) => C(e)), !1);
}
function J(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => C(e));
    return !1;
}
let $ = ['username', 'avatar', 'global_name', 'discriminator', 'bot', 'primary_guild'];
function ee(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = y[e.user.id];
            if (null == t) return !1;
            let n = $.reduce((n, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let a = t.set((0, r.camelCase)(i), e.user[i]);
                    ((n = n || a !== t), (t = a));
                }
                return n;
            }, !1);
            return !!n && ((y[t.id] = t), n);
        })
        .some((e) => e);
}
function et(e) {
    let { bans: t } = e;
    t.forEach((e) => C(e.user));
}
function en(e) {
    let { bans: t } = e;
    t.forEach((e) => C(e.user));
}
function er(e) {
    return C(e.user);
}
function ei(e) {
    return !!e.isMember && C(e.user);
}
function ea(e) {
    let t = C(e.user);
    return I(e.user.id, e.guildId, e.avatar) || t;
}
function eo(e) {
    let { ops: t } = e;
    for (let e of t)
        if ('INSERT' === e.op || 'UPDATE' === e.op) {
            var n;
            let t = null == (n = e.item.member) ? void 0 : n.user;
            if (null == t) continue;
            T(t.id, t);
        }
    return !1;
}
function es(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = C(n.user);
                return I(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function el(e) {
    let t = !1;
    for (let n of e.members) (C(n.user) && (t = !0), I(n.user.id, e.guildId, n.avatar) && (t = !0));
    return t;
}
function ec(e) {
    var t;
    let n = !1;
    for (let r of null != (t = e.users) ? t : []) Object.hasOwn(y, r.id) || (n = C(r) || n);
    return n;
}
function eu(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            (null != e.member && C(e.member.user) && (n = !0), null != e.presence && C(e.presence.user) && (n = !0));
        }),
        n
    );
}
function ed(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        null == t ||
            t.forEach((e) => {
                (null != e.member && C(e.member.user) && (n = !0), null != e.presence && C(e.presence.user) && (n = !0));
            }),
        n
    );
}
function ef(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: a, bot: o },
            avatar: s
        } = e;
        (n !== h.default.getId() &&
            C({
                id: n,
                username: r,
                avatar: i,
                discriminator: a,
                bot: o
            }),
            I(n, t.id, s));
    });
}
function e_(e) {
    return C(e.relationship.user);
}
function ep(e) {
    return C(e.gameRelationship.user);
}
function eh(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => C(t.user) || e, !1);
}
function em(e) {
    return C(e.suggestion.suggested_user);
}
function eg(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => C(t.suggested_user) || e, !1);
}
function eE(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == y[e.id] && (y[e.id] = new f.Z(e));
    });
}
function eb(e) {
    let { giftCode: t } = e;
    return null != t.user && C(t.user);
}
function ey(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && C(t);
    });
}
function eO(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return (null != n && (i = i || C(n)), null != r && (i = i || C(r)), i);
}
function ev(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => C(t) || e, !1);
}
function eI(e) {
    let { users: t } = e;
    return t.reduce((e, t) => C(t) || e, !1);
}
function eT(e) {
    let { users: t } = e;
    return t.reduce((e, t) => C(t) || e, !1);
}
function eS(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => C(t) || e, !1);
}
function eA(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => C(t) || e, !1);
}
function eN(e) {
    let { members: t } = e,
        n = h.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : C(t.member.user) || e), !1);
}
function eC(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && w(e.message, !0);
    }, !1);
}
function eR(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, a.Z)(t) && C(t.member.user)) || e, !1);
}
function eP(e) {
    let {} = e,
        t = y[h.default.getId()];
    return null != t && ((y[h.default.getId()] = t.set('ageVerificationStatus', i.F$.CLIENT_ONLY_PENDING)), !0);
}
function ew(e) {
    let { status: t } = e,
        n = y[h.default.getId()];
    return null != n && n.ageVerificationStatus === i.F$.CLIENT_ONLY_PENDING && ((y[h.default.getId()] = n.set('ageVerificationStatus', t)), !0);
}
class eD extends m.Z {
    initialize() {
        this.waitFor(h.default, u.Z);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: eD.LATEST_SNAPSHOT_VERSION,
            data: { users: [e].filter(p.lm) }
        };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eD.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) y[e.id] = new f.Z(e);
        if (null != e.users) for (let t of e.users) (t.id in y && x(t)) || (y[t.id] = new f.Z(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) {
                var n;
                null == (n = e.rawRecipients) || n.forEach((e) => C(e, !1));
            }
    }
    getUserStoreVersion() {
        return O;
    }
    getUser(e) {
        if (null != e) return y[e];
    }
    getUsers() {
        return y;
    }
    forEach(e) {
        for (let t in y) if (!1 === e(y[t])) break;
    }
    findByTag(e, t) {
        for (let n in y) {
            let r = y[n];
            if ((null != t && r.username === e && r.discriminator === t) || (null == t && r.username === e && r.hasUniqueUsername())) return r;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [];
        for (let t in y) {
            let r = y[t];
            e(r) && n.push(r);
        }
        return (t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n);
    }
    getCurrentUser() {
        return y[h.default.getId()];
    }
    constructor() {
        super({
            CONNECTION_OPEN: D,
            CONNECTION_OPEN_SUPPLEMENTAL: L,
            UPDATE_CLIENT_PREMIUM_TYPE: G,
            OVERLAY_INITIALIZE: M,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: k,
            USER_PROFILE_FETCH_SUCCESS: j,
            CURRENT_USER_UPDATE: U,
            PRESENCE_UPDATES: ee,
            SEARCH_MESSAGES_SUCCESS: Z,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: Z,
            LOAD_MESSAGES_SUCCESS: B,
            LOAD_MESSAGES_AROUND_SUCCESS: B,
            LOAD_RECENT_MENTIONS_SUCCESS: B,
            LOAD_PINNED_MESSAGES_SUCCESS: V,
            THREAD_LIST_SYNC: F,
            MESSAGE_CREATE: X,
            MESSAGE_UPDATE: X,
            GUILD_SETTINGS_LOADED_BANS: et,
            GUILD_SETTINGS_LOADED_BANS_BATCH: en,
            GUILD_CREATE: ef,
            GUILD_BAN_ADD: er,
            GUILD_BAN_REMOVE: er,
            CHANNEL_RECIPIENT_ADD: ei,
            CHANNEL_RECIPIENT_REMOVE: ei,
            GUILD_JOIN_REQUEST_CREATE: eO,
            GUILD_JOIN_REQUEST_UPDATE: eO,
            GUILD_MEMBER_ADD: ea,
            GUILD_MEMBER_UPDATE: ea,
            GUILD_MEMBERS_CHUNK_BATCH: es,
            GUILD_MEMBER_LIST_UPDATE: eo,
            THREAD_MEMBER_LIST_UPDATE: eu,
            THREAD_MEMBERS_UPDATE: ed,
            CHANNEL_CREATE: Q,
            CHANNEL_UPDATES: J,
            RELATIONSHIP_ADD: e_,
            GAME_RELATIONSHIP_ADD: ep,
            LOAD_RELATIONSHIPS_SUCCESS: eh,
            FRIEND_SUGGESTION_CREATE: em,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: eg,
            AUDIT_LOG_FETCH_SUCCESS: eE,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eE,
            GIFT_CODE_RESOLVE_SUCCESS: eb,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: ey,
            LOAD_THREADS_SUCCESS: H,
            LOAD_ARCHIVED_THREADS_SUCCESS: H,
            LOAD_FORUM_POSTS: Y,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: K,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: z,
            NOTIFICATION_CENTER_ITEM_CREATE: q,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: W,
            PASSIVE_UPDATE_V2: el,
            LOCAL_MESSAGES_LOADED: ec,
            FAMILY_CENTER_INITIAL_LOAD: ev,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eI,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eS,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eA,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eT,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eN,
            LOAD_ICYMI_HYDRATED: eC,
            EMBEDDED_ACTIVITY_UPDATE_V2: eR,
            INITIATE_AGE_VERIFICATION: eP,
            CLOSE_AGE_VERIFICATION_MODAL: ew
        });
    }
}
(b(eD, 'displayName', 'UserStore'), b(eD, 'LATEST_SNAPSHOT_VERSION', 1));
let eL = new eD();
