n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => I,
        default: () => eU,
        mergeUser: () => R,
        transformUser: () => C,
        users: () => O,
    }),
    n(388685),
    n(997841),
    n(825670),
    n(539854),
    n(642613);
var r = n(392711),
    i = n(911969),
    a = n(2572),
    o = n(864106),
    s = n(579407),
    l = n(131016),
    c = n(602210),
    u = n(502087),
    d = n(921383),
    f = n(168232),
    _ = n(598077),
    p = n(630388),
    h = n(823379),
    m = n(314897),
    g = n(750041),
    E = n(981631),
    b = n(474936);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let O = {},
    v = 0,
    I = "47835198259242069";
function T(e, t, n) {
    let r = O[e];
    if (null == r) return !1;
    let i = r;
    (i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (O[r.id] = i);
    let a = r !== i;
    return a && v++, a;
}
function S(e, t) {
    let n = O[e];
    return (
        !(null == n || (0, c.d)(n.primaryGuild, t.primary_guild)) &&
        (null == n.primaryGuild || null != t.primary_guild) &&
        ((n.primaryGuild = (0, c.l)(t.primary_guild)), (O[n.id] = n), v++, !0)
    );
}
function A(e, t) {
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
function C(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, f.G)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let i = e.age_verification_status;
    null != i && ((e.ageVerificationStatus = i), delete e.age_verification_status);
    let a = e.public_flags;
    null != a && ((e.publicFlags = a), delete e.public_flags);
    let u = e.purchased_flags;
    void 0 !== u && ((e.purchasedFlags = u), delete e.purchased_flags);
    let _ = e.premium_usage_flags;
    void 0 !== _ && ((e.premiumUsageFlags = _), delete e.premium_usage_flags),
        null === e.banner_color && delete e.banner_color;
    let p = e.avatar_decoration_data;
    void 0 !== p && ((e.avatarDecorationData = (0, o.FG)(p)), delete e.avatar_decoration_data);
    let h = e.collectibles;
    void 0 !== h && (delete e.collectibles, (e.collectibles = (0, s.Xm)(h)));
    let m = e.global_name;
    void 0 !== m && ((e.globalName = m), delete e.global_name);
    let g = e.primary_guild;
    void 0 !== g && (e.primary_guild = (0, c.l)(g));
    let E = e.display_name_styles;
    void 0 !== E && ((e.displayNameStyles = (0, l.bN)(E)), delete e.display_name_styles);
    let b = e.premium_state;
    return void 0 !== b && ((e.premiumState = (0, d.C)(b)), delete e.premium_state), e;
}
function N(e) {
    return e.id !== m.default.getId();
}
function R(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = O[e.id],
        i = void 0 !== e.id && e.id === m.default.getId();
    if (null == r)
        void 0 !== (t = (r = new _.Z(e)).premiumType) && i && (r.premiumType = w((0, f.QI)(r), r.premiumType));
    else if (n) {
        var a;
        let n = C(e);
        void 0 !== (t = null != (a = n.premium_type) ? a : n.premiumType) && i && (0, f.VR)(n) && (n = P(n)),
            (n = A(r, n)),
            (r = r.merge(n));
    }
    (0, f.jX)((0, f.QI)(r), t, r.premiumType);
    let o = O[e.id] !== r;
    return (O[e.id] = r), o && v++, o;
}
function P(e) {
    var t;
    let n = null != (t = e.premium_type) ? t : e.premiumType,
        r = w((0, f.VR)(e), n);
    return void 0 !== e.premiumType ? (e.premiumType = r) : void 0 !== e.premium_type && (e.premium_type = r), e;
}
function w(e, t) {
    if (!e) return t;
    let n = u.Z.getPremiumTypeOverride(),
        r = u.Z.getPremiumTypeActual();
    return n === b.F_ ? r : n;
}
function D(e, t) {
    if ((null == e ? void 0 : e.users) == null) return !1;
    for (let n in e.users) {
        let r = e.users[n];
        N(r) && R(r, t);
    }
}
function x(e, t) {
    var n, r, i, a, o;
    null != e.author && "SENDING" !== e.state && N(e.author) && R(e.author, t),
        null == (n = e.mentions) ||
            n.forEach((e) => {
                N(e) && R(e, t);
            }),
        (null == (r = e.interaction) ? void 0 : r.user) != null &&
            N(null == (i = e.interaction) ? void 0 : i.user) &&
            R(e.interaction.user, t),
        null == (a = e.attachments) ||
            a.forEach((e) => {
                var n;
                null == (n = e.clip_participants) ||
                    n.forEach((e) => {
                        N(e) && R(e, t);
                    });
            }),
        D(e.resolved, t),
        (null == (o = e.interaction_metadata) ? void 0 : o.user) != null &&
            N(e.interaction_metadata.user) &&
            R(e.interaction_metadata.user, t),
        null != e.message_snapshots &&
            e.message_snapshots.forEach((e) => {
                var n, r, i, a, o, s, l;
                (null == (r = e.moderator_report) || null == (n = r.reported_member) ? void 0 : n.user) != null &&
                    R(e.moderator_report.reported_member.user, t),
                    (null == (a = e.moderator_report) || null == (i = a.reporting_member) ? void 0 : i.user) != null &&
                        R(e.moderator_report.reporting_member.user, t),
                    Object.values(
                        null != (l = null == (s = e.message) || null == (o = s.resolved) ? void 0 : o.users) ? l : {},
                    ).forEach((e) => {
                        N(e) && R(e, t);
                    });
            });
}
function L(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        R(t),
        n.forEach((e) => {
            R(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                T(t.user.id, e.id, t.avatar), S(t.user.id, t.user);
            });
        }),
        null != O[m.default.getId()] &&
            (O[I] = new _.Z({
                id: I,
                username: "Wumpus",
                discriminator: "0",
                globalName: "Wumpus",
                avatar: "c1f86b313385cb97985f1b118851c28c",
            }));
}
function M(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            T(t.user.id, e.id, t.avatar), S(t.user.id, t.user);
        });
    }),
        null == n ||
            n.forEach((e) => {
                var t;
                null == (t = e.rawRecipients) ||
                    t.forEach((e) => {
                        R(e);
                    });
            });
}
function j(e) {
    return !("incomplete" in e);
}
function k(e) {
    if (null != e.users) for (let t of e.users) (t.id in O && j(t)) || (O[t.id] = new _.Z(t));
}
function U(e) {
    let { user: t } = e;
    if (!N(t)) return !1;
    R(t);
}
function G(e) {
    let { userProfile: t } = e;
    if (!N(t.user)) return !1;
    R(t.user);
}
function B(e) {
    let { user: t } = e;
    R(t);
}
function Z(e) {
    let { user: t } = e;
    R(t);
}
function F(e) {
    let { messages: t } = e;
    return t.forEach((e) => x(e, !0)), !1;
}
function V(e) {
    let { pins: t } = e;
    return (
        t.forEach((e) => {
            let { message: t } = e;
            return x(t, !0);
        }),
        !1
    );
}
function H(e) {
    let { mostRecentMessages: t } = e;
    return null == t || t.forEach((e) => x(e, !1)), !1;
}
function Y(e) {
    let { data: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t, channels: n } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    x(e, !0);
                });
            }),
                n.forEach((e) => {
                    if (e.type === E.d4z.DM || e.type === E.d4z.GROUP_DM) {
                        var t;
                        null == (t = e.recipients) || t.forEach((e) => R(e)), null != e.recipient && R(e.recipient);
                    }
                });
        }),
        !1
    );
}
function W(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => x(e, !0)), null != n && n.forEach((e) => R(e.user, !0));
}
function K(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && x(t, !0), null != n && x(n, !0), null != r && null != r.user && R(r.user, !0);
    });
}
function z(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && x(t, !0);
    });
}
function q(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: r } = e;
        if (null == t) return;
        R(t);
        let i = null == r ? void 0 : r.avatar;
        null != i && T(t.id, n, i);
    });
}
function X(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && R(e.other_user);
    });
}
function Q(e) {
    let { item: t } = e;
    null != t.other_user && R(t.other_user);
}
function J(e) {
    let { message: t } = e;
    if ((x(t, !0), null != t.flags && p.yE(t.flags, E.iLy.URGENT))) {
        let e = O[m.default.getId()];
        return (
            null != e &&
            ((O[m.default.getId()] = e.set("flags", p.mB(e.flags, E.xW$.HAS_UNREAD_URGENT_MESSAGES, !0))), !0)
        );
    }
    return !1;
}
function $(e) {
    let {
        channel: { rawRecipients: t },
    } = e;
    return null != t && t.forEach((e) => R(e)), !1;
}
function ee(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => R(e));
    return !1;
}
let et = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];
function en(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = O[e.user.id];
            if (null == t) return !1;
            let n = et.reduce((n, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let a = t.set((0, r.camelCase)(i), e.user[i]);
                    (n = n || a !== t), (t = a);
                }
                return n;
            }, !1);
            return !!n && ((O[t.id] = t), n);
        })
        .some((e) => e);
}
function er(e) {
    let { bans: t } = e;
    t.forEach((e) => R(e.user));
}
function ei(e) {
    let { bans: t } = e;
    t.forEach((e) => R(e.user));
}
function ea(e) {
    return R(e.user);
}
function eo(e) {
    return !!e.isMember && R(e.user);
}
function es(e) {
    let t = R(e.user);
    return T(e.user.id, e.guildId, e.avatar) || t;
}
function el(e) {
    let { ops: t } = e;
    for (let e of t)
        if ("INSERT" === e.op || "UPDATE" === e.op) {
            var n;
            let t = null == (n = e.item.member) ? void 0 : n.user;
            if (null == t) continue;
            S(t.id, t);
        }
    return !1;
}
function ec(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = R(n.user);
                return T(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function eu(e) {
    let t = !1;
    for (let n of e.members) R(n.user) && (t = !0), T(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function ed(e) {
    var t;
    let n = !1;
    for (let r of null != (t = e.users) ? t : []) Object.hasOwn(O, r.id) || (n = R(r) || n);
    return n;
}
function ef(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && R(e.member.user) && (n = !0), null != e.presence && R(e.presence.user) && (n = !0);
        }),
        n
    );
}
function e_(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        null == t ||
            t.forEach((e) => {
                null != e.member && R(e.member.user) && (n = !0), null != e.presence && R(e.presence.user) && (n = !0);
            }),
        n
    );
}
function ep(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: a, bot: o },
            avatar: s,
        } = e;
        n !== m.default.getId() &&
            R({
                id: n,
                username: r,
                avatar: i,
                discriminator: a,
                bot: o,
            }),
            T(n, t.id, s);
    });
}
function eh(e) {
    return R(e.relationship.user);
}
function em(e) {
    return R(e.gameRelationship.user);
}
function eg(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => R(t.user) || e, !1);
}
function eE(e) {
    return R(e.suggestion.suggested_user);
}
function eb(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => R(t.suggested_user) || e, !1);
}
function ey(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == O[e.id] && (O[e.id] = new _.Z(e));
    });
}
function eO(e) {
    let { giftCode: t } = e;
    return null != t.user && R(t.user);
}
function ev(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && R(t);
    });
}
function eI(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = i || R(n)), null != r && (i = i || R(r)), i;
}
function eT(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => R(t) || e, !1);
}
function eS(e) {
    let { users: t } = e;
    return t.reduce((e, t) => R(t) || e, !1);
}
function eA(e) {
    let { users: t } = e;
    return t.reduce((e, t) => R(t) || e, !1);
}
function eC(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => R(t) || e, !1);
}
function eN(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => R(t) || e, !1);
}
function eR(e) {
    let { members: t } = e,
        n = m.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : R(t.member.user) || e), !1);
}
function eP(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && x(e.message, !0);
    }, !1);
}
function ew(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, a.Z)(t) && R(t.member.user)) || e, !1);
}
function eD(e) {
    let {} = e,
        t = O[m.default.getId()];
    return null != t && ((O[m.default.getId()] = t.set("ageVerificationStatus", i.F$.CLIENT_ONLY_PENDING)), !0);
}
function ex(e) {
    let { status: t } = e,
        n = O[m.default.getId()];
    return (
        null != n &&
        n.ageVerificationStatus === i.F$.CLIENT_ONLY_PENDING &&
        ((O[m.default.getId()] = n.set("ageVerificationStatus", t)), !0)
    );
}
function eL(e) {
    let { resolved: t } = e;
    return D(t, !0);
}
function eM(e) {
    let { stickers: t } = e;
    return t.reduce((e, t) => (null != t.user && R(ej(t.user))) || e, !1);
}
function ej(e) {
    let { id: t, username: n, avatar: r, discriminator: i, bot: a, globalName: o } = e;
    return {
        id: t,
        username: n,
        avatar: r,
        discriminator: i,
        bot: a,
        global_name: o,
    };
}
class ek extends g.Z {
    initialize() {
        this.waitFor(m.default, u.Z);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: ek.LATEST_SNAPSHOT_VERSION,
            data: { users: [e].filter(h.lm) },
        };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(ek.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) O[e.id] = new _.Z(e);
        if (null != e.users) for (let t of e.users) (t.id in O && j(t)) || (O[t.id] = new _.Z(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) {
                var n;
                null == (n = e.rawRecipients) || n.forEach((e) => R(e, !1));
            }
    }
    getUserStoreVersion() {
        return v;
    }
    getUser(e) {
        if (null != e) return O[e];
    }
    getUsers() {
        return O;
    }
    forEach(e) {
        for (let t in O) if (!1 === e(O[t])) break;
    }
    findByTag(e, t) {
        for (let n in O) {
            let r = O[n];
            if (
                (null != t && r.username === e && r.discriminator === t) ||
                (null == t && r.username === e && r.hasUniqueUsername())
            )
                return r;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [];
        for (let t in O) {
            let r = O[t];
            e(r) && n.push(r);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return O[m.default.getId()];
    }
    constructor() {
        super({
            CONNECTION_OPEN: L,
            CONNECTION_OPEN_SUPPLEMENTAL: M,
            UPDATE_CLIENT_PREMIUM_TYPE: Z,
            OVERLAY_INITIALIZE: k,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: U,
            USER_PROFILE_FETCH_SUCCESS: G,
            CURRENT_USER_UPDATE: B,
            PRESENCE_UPDATES: en,
            SEARCH_MESSAGES_SUCCESS: Y,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: Y,
            LOAD_MESSAGES_SUCCESS: F,
            LOAD_MESSAGES_AROUND_SUCCESS: F,
            LOAD_RECENT_MENTIONS_SUCCESS: F,
            LOAD_PINNED_MESSAGES_SUCCESS: V,
            THREAD_LIST_SYNC: H,
            MESSAGE_CREATE: J,
            MESSAGE_UPDATE: J,
            GUILD_SETTINGS_LOADED_BANS: er,
            GUILD_SETTINGS_LOADED_BANS_BATCH: ei,
            GUILD_CREATE: ep,
            GUILD_BAN_ADD: ea,
            GUILD_BAN_REMOVE: ea,
            CHANNEL_RECIPIENT_ADD: eo,
            CHANNEL_RECIPIENT_REMOVE: eo,
            GUILD_STICKERS_FETCH_SUCCESS: eM,
            GUILD_JOIN_REQUEST_CREATE: eI,
            GUILD_JOIN_REQUEST_UPDATE: eI,
            GUILD_MEMBER_ADD: es,
            GUILD_MEMBER_UPDATE: es,
            GUILD_MEMBERS_CHUNK_BATCH: ec,
            GUILD_MEMBER_LIST_UPDATE: el,
            THREAD_MEMBER_LIST_UPDATE: ef,
            THREAD_MEMBERS_UPDATE: e_,
            CHANNEL_CREATE: $,
            CHANNEL_UPDATES: ee,
            RELATIONSHIP_ADD: eh,
            GAME_RELATIONSHIP_ADD: em,
            LOAD_RELATIONSHIPS_SUCCESS: eg,
            FRIEND_SUGGESTION_CREATE: eE,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: eb,
            AUDIT_LOG_FETCH_SUCCESS: ey,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: ey,
            GIFT_CODE_RESOLVE_SUCCESS: eO,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: ev,
            LOAD_THREADS_SUCCESS: W,
            LOAD_ARCHIVED_THREADS_SUCCESS: W,
            LOAD_FORUM_POSTS: K,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: q,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: X,
            NOTIFICATION_CENTER_ITEM_CREATE: Q,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: z,
            PASSIVE_UPDATE_V2: eu,
            LOCAL_MESSAGES_LOADED: ed,
            FAMILY_CENTER_INITIAL_LOAD: eT,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eS,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eC,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eN,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eA,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eR,
            LOAD_ICYMI_HYDRATED: eP,
            EMBEDDED_ACTIVITY_UPDATE_V2: ew,
            INITIATE_AGE_VERIFICATION: eD,
            CLOSE_AGE_VERIFICATION_MODAL: ex,
            INTERACTION_MODAL_CREATE: eL,
        });
    }
}
y(ek, "displayName", "UserStore"), y(ek, "LATEST_SNAPSHOT_VERSION", 1);
let eU = new ek();
