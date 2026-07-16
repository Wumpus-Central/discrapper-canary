"use strict";
n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => N,
        default: () => ek,
        mergeUser: () => D,
        transformUser: () => O,
        users: () => g,
    }),
    n(938796),
    n(205816),
    n(321073);
var i = n(435558),
    r = n(665260),
    a = n(155718),
    s = n(807605),
    l = n(821956),
    o = n(628856),
    d = n(945096),
    c = n(47537),
    u = n(244284),
    _ = n(683760),
    E = n(392737),
    A = n(572009),
    h = n(889227),
    I = n(403362),
    f = n(280450),
    p = n(536802),
    T = n(652215),
    m = n(202541);
let g = {},
    S = 0,
    N = "47835198259242069";
function C(e, t, n) {
    let i = g[e];
    if (null == i) return !1;
    let r = i;
    (r = null == n ? i.removeGuildAvatarHash(t) : i.addGuildAvatarHash(t, n)), (g[i.id] = r);
    let a = i !== r;
    return a && S++, a;
}
function R(e, t) {
    let n = g[e];
    return (
        !(null == n || (0, c.D)(n.primaryGuild, t.primary_guild)) &&
        (null == n.primaryGuild || null != t.primary_guild) &&
        ((n.primaryGuild = (0, c.j)(t.primary_guild)), (g[n.id] = n), S++, !0)
    );
}
function O(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, A.nq)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let i = e.nsfw_allowed;
    null != i && ((e.nsfwAllowed = i), delete e.nsfw_allowed);
    let r = e.age_verification_status;
    null != r && ((e.ageVerificationStatus = r), delete e.age_verification_status);
    let a = e.public_flags;
    null != a && ((e.publicFlags = a), delete e.public_flags);
    let s = e.purchased_flags;
    void 0 !== s && ((e.purchasedFlags = s), delete e.purchased_flags);
    let _ = e.premium_usage_flags;
    void 0 !== _ && ((e.premiumUsageFlags = _), delete e.premium_usage_flags),
        null === e.banner_color && delete e.banner_color;
    let h = e.avatar_decoration_data;
    void 0 !== h && ((e.avatarDecorationData = (0, l.Xq)(h)), delete e.avatar_decoration_data);
    let I = e.collectibles;
    void 0 !== I && (delete e.collectibles, (e.collectibles = (0, o.t)(I)));
    let f = e.global_name;
    void 0 !== f && ((e.globalName = f), delete e.global_name);
    let p = e.primary_guild;
    void 0 !== p && (e.primary_guild = (0, c.j)(p));
    let T = e.display_name_styles;
    void 0 !== T && ((e.displayNameStyles = (0, d.mT)(T)), delete e.display_name_styles);
    let m = e.premium_state;
    void 0 !== m && ((e.premiumState = (0, E.f)(m)), delete e.premium_state);
    let g = e.restricted_schedule;
    void 0 !== g && ((e.restrictedSchedule = u.kX.fromServer(g) ?? null), delete e.restricted_schedule);
    let S = e.app_transaction_ids;
    return void 0 !== S && ((e.appTransactionIds = S), delete e.app_transaction_ids), e;
}
function L(e) {
    return e.id !== f.default.getId();
}
function D(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = g[e.id],
        r = void 0 !== e.id && e.id === f.default.getId();
    if (null == i)
        void 0 !== (t = (i = new h.A(O(e))).premiumType) && r && (i.premiumType = y((0, A.I9)(i), i.premiumType));
    else if (n) {
        var a;
        let n,
            s,
            l = O(e);
        void 0 !== (t = l.premium_type ?? l.premiumType) &&
            r &&
            (0, A._D)(l) &&
            ((n = (a = l).premium_type ?? a.premiumType),
            (s = y((0, A._D)(a), n)),
            void 0 !== a.premiumType ? (a.premiumType = s) : void 0 !== a.premium_type && (a.premium_type = s),
            (l = a)),
            (l = (function (e, t) {
                switch (!0) {
                    case null == e.primaryGuild && null == t.primary_guild:
                        break;
                    case null != e.primaryGuild && null == t.primary_guild:
                    case (0, c.D)(e.primaryGuild, t.primary_guild):
                        t.primary_guild = e.primaryGuild;
                        break;
                    default:
                        t.primary_guild = (0, c.j)(t.primary_guild);
                }
                return t;
            })(i, l)),
            (i = i.merge(l));
    }
    (0, A.gX)((0, A.I9)(i), t, i.premiumType);
    let s = g[e.id] !== i;
    return (g[e.id] = i), s && S++, s;
}
function y(e, t) {
    if (!e) return t;
    let n = _.A.getPremiumTypeOverride(),
        i = _.A.getPremiumTypeActual();
    return n === m.$I ? i : n;
}
function v(e, t) {
    if (e?.users == null) return !1;
    for (let n in e.users) {
        let i = e.users[n];
        L(i) && D(i, t);
    }
}
function b(e, t) {
    null != e.author && "SENDING" !== e.state && L(e.author) && D(e.author, t),
        e.mentions?.forEach((e) => {
            L(e) && D(e, t);
        }),
        e.interaction?.user != null && L(e.interaction?.user) && D(e.interaction.user, t),
        e.attachments?.forEach((e) => {
            e.clip_participants?.forEach((e) => {
                L(e) && D(e, t);
            });
        }),
        v(e.resolved, t),
        e.interaction_metadata?.user != null && L(e.interaction_metadata.user) && D(e.interaction_metadata.user, t),
        null != e.message_snapshots &&
            e.message_snapshots.forEach((e) => {
                e.moderator_report?.reported_member?.user != null && D(e.moderator_report.reported_member.user, t),
                    e.moderator_report?.reporting_member?.user != null &&
                        D(e.moderator_report.reporting_member.user, t),
                    Object.values(e.message?.resolved?.users ?? {}).forEach((e) => {
                        L(e) && D(e, t);
                    });
            });
}
function M(e) {
    let { user: t, users: n, guilds: i } = e;
    delete t.premium,
        delete t.banner_color,
        D(t),
        n.forEach((e) => {
            D(e);
        }),
        i.forEach((e) => {
            e.members.forEach((t) => {
                C(t.user.id, e.id, t.avatar), R(t.user.id, t.user);
            });
        }),
        null != g[f.default.getId()] &&
            (g[N] = new h.A({
                id: N,
                username: "Wumpus",
                discriminator: "0",
                globalName: "Wumpus",
                avatar: "c1f86b313385cb97985f1b118851c28c",
            }));
}
function P(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            C(t.user.id, e.id, t.avatar), R(t.user.id, t.user);
        });
    }),
        n?.forEach((e) => {
            e.rawRecipients?.forEach((e) => {
                D(e);
            });
        });
}
function U(e) {
    return !("incomplete" in e);
}
function w(e) {
    if (null != e.users) for (let t of e.users) (t.id in g && U(t)) || (g[t.id] = new h.A(t));
}
function G(e) {
    let { user: t } = e;
    if (!L(t)) return !1;
    D(t);
}
function x(e) {
    let { userId: t, restrictedSchedule: n } = e;
    return D({ id: t, restricted_schedule: n });
}
function k(e) {
    let { userProfile: t } = e;
    if (!L(t.user)) return !1;
    D(t.user);
}
function F(e) {
    let { user: t } = e;
    D(t);
}
function V(e) {
    let { user: t } = e;
    D({ id: t.id, premiumType: t.premiumType }, !0);
}
function B(e) {
    let { messages: t } = e;
    return t.forEach((e) => b(e, !0)), !1;
}
function H(e) {
    let { messages: t, messageReferences: n } = e;
    return t.concat(n).forEach((e) => b(e, !0)), !1;
}
function j(e) {
    let { rawConversations: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t } = e;
            return t?.forEach((e) => b(e, !0));
        }),
        !1
    );
}
function W(e) {
    let { pins: t } = e;
    return (
        t.forEach((e) => {
            let { message: t } = e;
            return b(t, !0);
        }),
        !1
    );
}
function Y(e) {
    let { mostRecentMessages: t } = e;
    return t?.forEach((e) => b(e, !1)), !1;
}
function K(e) {
    let { data: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t, channels: n } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    b(e, !0);
                });
            }),
                n.forEach((e) => {
                    (e.type === T.rbe.DM || e.type === T.rbe.GROUP_DM) &&
                        (e.recipients?.forEach((e) => D(e)), null != e.recipient && D(e.recipient));
                });
        }),
        !1
    );
}
function $(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => b(e, !0)), null != n && n.forEach((e) => D(e.user, !0));
}
function z(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: i } = e;
        null != t && b(t, !0), null != n && b(n, !0), null != i && null != i.user && D(i.user, !0);
    });
}
function q(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && b(t, !0);
    });
}
function Z(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: i } = e;
        if (null == t) return;
        D(t);
        let r = i?.avatar;
        null != r && C(t.id, n, r);
    });
}
function X(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && D(e.other_user);
    });
}
function Q(e) {
    let { item: t } = e;
    null != t.other_user && D(t.other_user);
}
function J(e) {
    let { message: t } = e;
    if ((b(t, !0), null != t.flags && r.Lt(t.flags, T.pr7.URGENT))) {
        let e = g[f.default.getId()];
        return (
            null != e &&
            ((g[f.default.getId()] = e.set("flags", r.lA(e.flags, T.nhx.HAS_UNREAD_URGENT_MESSAGES, !0))), !0)
        );
    }
    return !1;
}
function ee(e) {
    let {
        channel: { rawRecipients: t },
    } = e;
    return null != t && t.forEach((e) => D(e)), !1;
}
function et(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => D(e));
    return !1;
}
let en = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];
function ei(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = g[e.user.id];
            if (null == t) return !1;
            let n = en.reduce((n, r) => {
                if (e.user.hasOwnProperty(r)) {
                    let a = t.set((0, i.camelCase)(r), e.user[r]);
                    (n = n || a !== t), (t = a);
                }
                return n;
            }, !1);
            return !!n && ((g[t.id] = t), n);
        })
        .some((e) => e);
}
function er(e) {
    let { bans: t } = e;
    t.forEach((e) => D(e.user));
}
function ea(e) {
    let { bans: t } = e;
    t.forEach((e) => D(e.user));
}
function es(e) {
    return D(e.user);
}
function el(e) {
    return !!e.isMember && D(e.user);
}
function eo(e) {
    let t = D(e.user);
    return C(e.user.id, e.guildId, e.avatar) || t;
}
function ed(e) {
    let { ops: t } = e;
    for (let e of t)
        if ("INSERT" === e.op || "UPDATE" === e.op) {
            let t = e.item.member?.user;
            if (null == t) continue;
            R(t.id, t);
        }
    return !1;
}
function ec(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let i = D(n.user);
                return C(n.user.id, e.guildId, n.avatar) || i || t;
            }, !1) || n;
    return n;
}
function eu(e) {
    let t = !1;
    for (let n of e.members) D(n.user) && (t = !0), C(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function e_(e) {
    let t = !1;
    for (let n of e.users ?? []) Object.hasOwn(g, n.id) || (t = D(n) || t);
    return t;
}
function eE(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && D(e.member.user) && (n = !0), null != e.presence && D(e.presence.user) && (n = !0);
        }),
        n
    );
}
function eA(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        t?.forEach((e) => {
            null != e.member && D(e.member.user) && (n = !0), null != e.presence && D(e.presence.user) && (n = !0);
        }),
        n
    );
}
function eh(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: i, avatar: r, discriminator: a, bot: s },
            avatar: l,
        } = e;
        n !== f.default.getId() && D({ id: n, username: i, avatar: r, discriminator: a, bot: s }), C(n, t.id, l);
    });
}
function eI(e) {
    return D(e.relationship.user);
}
function ef(e) {
    return D(e.gameRelationship.user);
}
function ep(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => D(t.user) || e, !1);
}
function eT(e) {
    return D(e.suggestion.suggested_user);
}
function em(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => D(t.suggested_user) || e, !1);
}
function eg(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == g[e.id] && (g[e.id] = new h.A(e));
    });
}
function eS(e) {
    let { giftCode: t } = e;
    return null != t.user && D(t.user);
}
function eN(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && D(t);
    });
}
function eC(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: i } = t,
        r = !1;
    return null != n && (r = D(n)), null != i && (r = r || D(i)), r;
}
function eR(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: i } = n;
    return [...t, ...i].reduce((e, t) => D(t) || e, !1);
}
function eO(e) {
    let { users: t } = e;
    return t.reduce((e, t) => D(t) || e, !1);
}
function eL(e) {
    let { users: t } = e;
    return t.reduce((e, t) => D(t) || e, !1);
}
function eD(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => D(t) || e, !1);
}
function ey(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => D(t) || e, !1);
}
function ev(e) {
    let { members: t } = e,
        n = f.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : D(t.member.user) || e), !1);
}
function eb(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && b(e.message, !0);
    }, !1);
}
function eM(e) {
    let { instance: t } = e;
    return t.participants.reduce((e, t) => ((0, s.A)(t) && D(t.member.user)) || e, !1);
}
function eP(e) {
    let {} = e,
        t = g[f.default.getId()];
    return null != t && ((g[f.default.getId()] = t.set("ageVerificationStatus", a.Tk.CLIENT_ONLY_PENDING)), !0);
}
function eU(e) {
    let { status: t } = e,
        n = g[f.default.getId()];
    return (
        null != n &&
        n.ageVerificationStatus === a.Tk.CLIENT_ONLY_PENDING &&
        ((g[f.default.getId()] = n.set("ageVerificationStatus", t)), !0)
    );
}
function ew(e) {
    let { resolved: t } = e;
    return v(t, !0);
}
function eG(e) {
    let { stickers: t } = e;
    return t.reduce((e, t) => (null != t.user && D(t.user)) || e, !1);
}
class ex extends p.A {
    static displayName = "UserStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: M,
            CONNECTION_OPEN_SUPPLEMENTAL: P,
            UPDATE_CLIENT_PREMIUM_TYPE: V,
            OVERLAY_INITIALIZE: w,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: G,
            USER_RESTRICTED_SCHEDULE_UPDATE: x,
            USER_PROFILE_FETCH_SUCCESS: k,
            CURRENT_USER_UPDATE: F,
            PRESENCE_UPDATES: ei,
            SEARCH_MESSAGES_SUCCESS: K,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: K,
            LOAD_MESSAGES_SUCCESS: B,
            LOAD_MESSAGES_AROUND_SUCCESS: B,
            LOAD_RECENT_MENTIONS_SUCCESS: B,
            CONVERSATION_FETCH_SUCCESS: H,
            CONVERSATIONS_FETCH_SUCCESS: j,
            LOAD_PINNED_MESSAGES_SUCCESS: W,
            THREAD_LIST_SYNC: Y,
            MESSAGE_CREATE: J,
            MESSAGE_UPDATE: J,
            GUILD_SETTINGS_LOADED_BANS: er,
            GUILD_SETTINGS_LOADED_BANS_BATCH: ea,
            GUILD_CREATE: eh,
            GUILD_BAN_ADD: es,
            GUILD_BAN_REMOVE: es,
            CHANNEL_RECIPIENT_ADD: el,
            CHANNEL_RECIPIENT_REMOVE: el,
            GUILD_STICKERS_FETCH_SUCCESS: eG,
            GUILD_JOIN_REQUEST_CREATE: eC,
            GUILD_JOIN_REQUEST_UPDATE: eC,
            GUILD_MEMBER_ADD: eo,
            GUILD_MEMBER_UPDATE: eo,
            GUILD_MEMBERS_CHUNK_BATCH: ec,
            GUILD_MEMBER_LIST_UPDATE: ed,
            THREAD_MEMBER_LIST_UPDATE: eE,
            THREAD_MEMBERS_UPDATE: eA,
            CHANNEL_CREATE: ee,
            CHANNEL_UPDATES: et,
            RELATIONSHIP_ADD: eI,
            GAME_RELATIONSHIP_ADD: ef,
            LOAD_RELATIONSHIPS_SUCCESS: ep,
            FRIEND_SUGGESTION_CREATE: eT,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: em,
            AUDIT_LOG_FETCH_SUCCESS: eg,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eg,
            GIFT_CODE_RESOLVE_SUCCESS: eS,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eN,
            LOAD_THREADS_SUCCESS: $,
            LOAD_ARCHIVED_THREADS_SUCCESS: $,
            LOAD_FORUM_POSTS: z,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: Z,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: X,
            NOTIFICATION_CENTER_ITEM_CREATE: Q,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: q,
            PASSIVE_UPDATE_V2: eu,
            LOCAL_MESSAGES_LOADED: e_,
            FAMILY_CENTER_INITIAL_LOAD: eR,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eO,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eD,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: ey,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eL,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: ev,
            LOAD_ICYMI_HYDRATED: eb,
            EMBEDDED_ACTIVITY_UPDATE_V2: eM,
            INITIATE_AGE_VERIFICATION: eP,
            CLOSE_AGE_VERIFICATION_MODAL: eU,
            INTERACTION_MODAL_CREATE: ew,
        });
    }
    initialize() {
        this.waitFor(f.default, _.A);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return { version: ex.LATEST_SNAPSHOT_VERSION, data: { users: [e].filter(I.Vq) } };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(ex.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) g[e.id] = new h.A(e);
        if (null != e.users) for (let t of e.users) (t.id in g && U(t)) || (g[t.id] = new h.A(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) e.rawRecipients?.forEach((e) => D(e, !1));
    }
    getUserStoreVersion() {
        return S;
    }
    getUser(e) {
        if (null != e) return g[e];
    }
    getUsers() {
        return g;
    }
    forEach(e) {
        for (let t in g) if (!1 === e(g[t])) break;
    }
    findByTag(e, t) {
        for (let n in g) {
            let i = g[n];
            if (
                (null != t && i.username === e && i.discriminator === t) ||
                (null == t && i.username === e && i.hasUniqueUsername())
            )
                return i;
        }
    }
    filter(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [];
        for (let t in g) {
            let i = g[t];
            e(i) && n.push(i);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return g[f.default.getId()];
    }
}
let ek = new ex();
