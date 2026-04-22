"use strict";
n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => y,
        default: () => ek,
        mergeUser: () => C,
        transformUser: () => R,
        users: () => T,
    }),
    n(938796),
    n(205816),
    n(321073);
var r = n(735438),
    i = n(665260),
    s = n(155718),
    a = n(807605),
    o = n(821956),
    l = n(628856),
    u = n(945096),
    d = n(47537),
    c = n(244284),
    _ = n(683760),
    f = n(392737),
    E = n(572009),
    h = n(427157),
    p = n(403362),
    m = n(961350),
    g = n(536802),
    A = n(652215),
    I = n(788868);
let T = {},
    S = 0,
    y = "47835198259242069";
function N(e, t, n) {
    let r = T[e];
    if (null == r) return !1;
    let i = r;
    (i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (T[r.id] = i);
    let s = r !== i;
    return s && S++, s;
}
function O(e, t) {
    let n = T[e];
    return (
        !(null == n || (0, d.D)(n.primaryGuild, t.primary_guild)) &&
        (null == n.primaryGuild || null != t.primary_guild) &&
        ((n.primaryGuild = (0, d.j)(t.primary_guild)), (T[n.id] = n), S++, !0)
    );
}
function R(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, E.nq)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let i = e.age_verification_status;
    null != i && ((e.ageVerificationStatus = i), delete e.age_verification_status);
    let s = e.public_flags;
    null != s && ((e.publicFlags = s), delete e.public_flags);
    let a = e.purchased_flags;
    void 0 !== a && ((e.purchasedFlags = a), delete e.purchased_flags);
    let _ = e.premium_usage_flags;
    void 0 !== _ && ((e.premiumUsageFlags = _), delete e.premium_usage_flags),
        null === e.banner_color && delete e.banner_color;
    let h = e.avatar_decoration_data;
    void 0 !== h && ((e.avatarDecorationData = (0, o.Xq)(h)), delete e.avatar_decoration_data);
    let p = e.collectibles;
    void 0 !== p && (delete e.collectibles, (e.collectibles = (0, l.t)(p)));
    let m = e.global_name;
    void 0 !== m && ((e.globalName = m), delete e.global_name);
    let g = e.primary_guild;
    void 0 !== g && (e.primary_guild = (0, d.j)(g));
    let A = e.display_name_styles;
    void 0 !== A && ((e.displayNameStyles = (0, u.mT)(A)), delete e.display_name_styles);
    let I = e.premium_state;
    void 0 !== I && ((e.premiumState = (0, f.f)(I)), delete e.premium_state);
    let T = e.restricted_schedule;
    void 0 !== T && ((e.restrictedSchedule = c.kX.fromServer(T) ?? null), delete e.restricted_schedule);
    let S = e.app_transaction_ids;
    return void 0 !== S && ((e.appTransactionIds = S), delete e.app_transaction_ids), e;
}
function v(e) {
    return e.id !== m.default.getId();
}
function C(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = T[e.id],
        i = void 0 !== e.id && e.id === m.default.getId();
    if (null == r)
        void 0 !== (t = (r = new h.A(R(e))).premiumType) && i && (r.premiumType = b((0, E.I9)(r), r.premiumType));
    else if (n) {
        var s;
        let n,
            a,
            o = R(e);
        void 0 !== (t = o.premium_type ?? o.premiumType) &&
            i &&
            (0, E._D)(o) &&
            ((n = (s = o).premium_type ?? s.premiumType),
            (a = b((0, E._D)(s), n)),
            void 0 !== s.premiumType ? (s.premiumType = a) : void 0 !== s.premium_type && (s.premium_type = a),
            (o = s)),
            (o = (function (e, t) {
                switch (!0) {
                    case null == e.primaryGuild && null == t.primary_guild:
                        break;
                    case null != e.primaryGuild && null == t.primary_guild:
                    case (0, d.D)(e.primaryGuild, t.primary_guild):
                        t.primary_guild = e.primaryGuild;
                        break;
                    default:
                        t.primary_guild = (0, d.j)(t.primary_guild);
                }
                return t;
            })(r, o)),
            (r = r.merge(o));
    }
    (0, E.gX)((0, E.I9)(r), t, r.premiumType);
    let a = T[e.id] !== r;
    return (T[e.id] = r), a && S++, a;
}
function b(e, t) {
    if (!e) return t;
    let n = _.A.getPremiumTypeOverride(),
        r = _.A.getPremiumTypeActual();
    return n === I.$I ? r : n;
}
function D(e, t) {
    if (e?.users == null) return !1;
    for (let n in e.users) {
        let r = e.users[n];
        v(r) && C(r, t);
    }
}
function L(e, t) {
    null != e.author && "SENDING" !== e.state && v(e.author) && C(e.author, t),
        e.mentions?.forEach((e) => {
            v(e) && C(e, t);
        }),
        e.interaction?.user != null && v(e.interaction?.user) && C(e.interaction.user, t),
        e.attachments?.forEach((e) => {
            e.clip_participants?.forEach((e) => {
                v(e) && C(e, t);
            });
        }),
        D(e.resolved, t),
        e.interaction_metadata?.user != null && v(e.interaction_metadata.user) && C(e.interaction_metadata.user, t),
        null != e.message_snapshots &&
            e.message_snapshots.forEach((e) => {
                e.moderator_report?.reported_member?.user != null && C(e.moderator_report.reported_member.user, t),
                    e.moderator_report?.reporting_member?.user != null &&
                        C(e.moderator_report.reporting_member.user, t),
                    Object.values(e.message?.resolved?.users ?? {}).forEach((e) => {
                        v(e) && C(e, t);
                    });
            });
}
function w(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        C(t),
        n.forEach((e) => {
            C(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                N(t.user.id, e.id, t.avatar), O(t.user.id, t.user);
            });
        }),
        null != T[m.default.getId()] &&
            (T[y] = new h.A({
                id: y,
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
            N(t.user.id, e.id, t.avatar), O(t.user.id, t.user);
        });
    }),
        n?.forEach((e) => {
            e.rawRecipients?.forEach((e) => {
                C(e);
            });
        });
}
function P(e) {
    return !("incomplete" in e);
}
function U(e) {
    if (null != e.users) for (let t of e.users) (t.id in T && P(t)) || (T[t.id] = new h.A(t));
}
function k(e) {
    let { user: t } = e;
    if (!v(t)) return !1;
    C(t);
}
function x(e) {
    let { userId: t, restrictedSchedule: n } = e;
    return C({ id: t, restricted_schedule: n });
}
function G(e) {
    let { userProfile: t } = e;
    if (!v(t.user)) return !1;
    C(t.user);
}
function V(e) {
    let { user: t } = e;
    C(t);
}
function F(e) {
    let { user: t } = e;
    C({ id: t.id, premiumType: t.premiumType }, !0);
}
function B(e) {
    let { messages: t } = e;
    return t.forEach((e) => L(e, !0)), !1;
}
function H(e) {
    let { pins: t } = e;
    return (
        t.forEach((e) => {
            let { message: t } = e;
            return L(t, !0);
        }),
        !1
    );
}
function Y(e) {
    let { mostRecentMessages: t } = e;
    return t?.forEach((e) => L(e, !1)), !1;
}
function W(e) {
    let { data: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t, channels: n } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    L(e, !0);
                });
            }),
                n.forEach((e) => {
                    (e.type === A.rbe.DM || e.type === A.rbe.GROUP_DM) &&
                        (e.recipients?.forEach((e) => C(e)), null != e.recipient && C(e.recipient));
                });
        }),
        !1
    );
}
function j(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => L(e, !0)), null != n && n.forEach((e) => C(e.user, !0));
}
function K(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && L(t, !0), null != n && L(n, !0), null != r && null != r.user && C(r.user, !0);
    });
}
function $(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && L(t, !0);
    });
}
function z(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: r } = e;
        if (null == t) return;
        C(t);
        let i = r?.avatar;
        null != i && N(t.id, n, i);
    });
}
function q(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && C(e.other_user);
    });
}
function X(e) {
    let { item: t } = e;
    null != t.other_user && C(t.other_user);
}
function Q(e) {
    let { message: t } = e;
    if ((L(t, !0), null != t.flags && i.Lt(t.flags, A.pr7.URGENT))) {
        let e = T[m.default.getId()];
        return (
            null != e &&
            ((T[m.default.getId()] = e.set("flags", i.lA(e.flags, A.nhx.HAS_UNREAD_URGENT_MESSAGES, !0))), !0)
        );
    }
    return !1;
}
function J(e) {
    let {
        channel: { rawRecipients: t },
    } = e;
    return null != t && t.forEach((e) => C(e)), !1;
}
function Z(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => C(e));
    return !1;
}
let ee = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];
function et(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = T[e.user.id];
            if (null == t) return !1;
            let n = ee.reduce((n, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let s = t.set((0, r.camelCase)(i), e.user[i]);
                    (n = n || s !== t), (t = s);
                }
                return n;
            }, !1);
            return !!n && ((T[t.id] = t), n);
        })
        .some((e) => e);
}
function en(e) {
    let { bans: t } = e;
    t.forEach((e) => C(e.user));
}
function er(e) {
    let { bans: t } = e;
    t.forEach((e) => C(e.user));
}
function ei(e) {
    return C(e.user);
}
function es(e) {
    return !!e.isMember && C(e.user);
}
function ea(e) {
    let t = C(e.user);
    return N(e.user.id, e.guildId, e.avatar) || t;
}
function eo(e) {
    let { ops: t } = e;
    for (let e of t)
        if ("INSERT" === e.op || "UPDATE" === e.op) {
            let t = e.item.member?.user;
            if (null == t) continue;
            O(t.id, t);
        }
    return !1;
}
function el(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = C(n.user);
                return N(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function eu(e) {
    let t = !1;
    for (let n of e.members) C(n.user) && (t = !0), N(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function ed(e) {
    let t = !1;
    for (let n of e.users ?? []) Object.hasOwn(T, n.id) || (t = C(n) || t);
    return t;
}
function ec(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && C(e.member.user) && (n = !0), null != e.presence && C(e.presence.user) && (n = !0);
        }),
        n
    );
}
function e_(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        t?.forEach((e) => {
            null != e.member && C(e.member.user) && (n = !0), null != e.presence && C(e.presence.user) && (n = !0);
        }),
        n
    );
}
function ef(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: s, bot: a },
            avatar: o,
        } = e;
        n !== m.default.getId() && C({ id: n, username: r, avatar: i, discriminator: s, bot: a }), N(n, t.id, o);
    });
}
function eE(e) {
    return C(e.relationship.user);
}
function eh(e) {
    return C(e.gameRelationship.user);
}
function ep(e) {
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
function eA(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == T[e.id] && (T[e.id] = new h.A(e));
    });
}
function eI(e) {
    let { giftCode: t } = e;
    return null != t.user && C(t.user);
}
function eT(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && C(t);
    });
}
function eS(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = C(n)), null != r && (i = i || C(r)), i;
}
function ey(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => C(t) || e, !1);
}
function eN(e) {
    let { users: t } = e;
    return t.reduce((e, t) => C(t) || e, !1);
}
function eO(e) {
    let { users: t } = e;
    return t.reduce((e, t) => C(t) || e, !1);
}
function eR(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => C(t) || e, !1);
}
function ev(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => C(t) || e, !1);
}
function eC(e) {
    let { members: t } = e,
        n = m.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : C(t.member.user) || e), !1);
}
function eb(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && L(e.message, !0);
    }, !1);
}
function eD(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, a.A)(t) && C(t.member.user)) || e, !1);
}
function eL(e) {
    let {} = e,
        t = T[m.default.getId()];
    return null != t && ((T[m.default.getId()] = t.set("ageVerificationStatus", s.Tk.CLIENT_ONLY_PENDING)), !0);
}
function ew(e) {
    let { status: t } = e,
        n = T[m.default.getId()];
    return (
        null != n &&
        n.ageVerificationStatus === s.Tk.CLIENT_ONLY_PENDING &&
        ((T[m.default.getId()] = n.set("ageVerificationStatus", t)), !0)
    );
}
function eM(e) {
    let { resolved: t } = e;
    return D(t, !0);
}
function eP(e) {
    let { stickers: t } = e;
    return t.reduce((e, t) => (null != t.user && C(t.user)) || e, !1);
}
class eU extends g.A {
    static displayName = "UserStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: w,
            CONNECTION_OPEN_SUPPLEMENTAL: M,
            UPDATE_CLIENT_PREMIUM_TYPE: F,
            OVERLAY_INITIALIZE: U,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: k,
            USER_RESTRICTED_SCHEDULE_UPDATE: x,
            USER_PROFILE_FETCH_SUCCESS: G,
            CURRENT_USER_UPDATE: V,
            PRESENCE_UPDATES: et,
            SEARCH_MESSAGES_SUCCESS: W,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: W,
            LOAD_MESSAGES_SUCCESS: B,
            LOAD_MESSAGES_AROUND_SUCCESS: B,
            LOAD_RECENT_MENTIONS_SUCCESS: B,
            LOAD_PINNED_MESSAGES_SUCCESS: H,
            THREAD_LIST_SYNC: Y,
            MESSAGE_CREATE: Q,
            MESSAGE_UPDATE: Q,
            GUILD_SETTINGS_LOADED_BANS: en,
            GUILD_SETTINGS_LOADED_BANS_BATCH: er,
            GUILD_CREATE: ef,
            GUILD_BAN_ADD: ei,
            GUILD_BAN_REMOVE: ei,
            CHANNEL_RECIPIENT_ADD: es,
            CHANNEL_RECIPIENT_REMOVE: es,
            GUILD_STICKERS_FETCH_SUCCESS: eP,
            GUILD_JOIN_REQUEST_CREATE: eS,
            GUILD_JOIN_REQUEST_UPDATE: eS,
            GUILD_MEMBER_ADD: ea,
            GUILD_MEMBER_UPDATE: ea,
            GUILD_MEMBERS_CHUNK_BATCH: el,
            GUILD_MEMBER_LIST_UPDATE: eo,
            THREAD_MEMBER_LIST_UPDATE: ec,
            THREAD_MEMBERS_UPDATE: e_,
            CHANNEL_CREATE: J,
            CHANNEL_UPDATES: Z,
            RELATIONSHIP_ADD: eE,
            GAME_RELATIONSHIP_ADD: eh,
            LOAD_RELATIONSHIPS_SUCCESS: ep,
            FRIEND_SUGGESTION_CREATE: em,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: eg,
            AUDIT_LOG_FETCH_SUCCESS: eA,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eA,
            GIFT_CODE_RESOLVE_SUCCESS: eI,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eT,
            LOAD_THREADS_SUCCESS: j,
            LOAD_ARCHIVED_THREADS_SUCCESS: j,
            LOAD_FORUM_POSTS: K,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: z,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: q,
            NOTIFICATION_CENTER_ITEM_CREATE: X,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: $,
            PASSIVE_UPDATE_V2: eu,
            LOCAL_MESSAGES_LOADED: ed,
            FAMILY_CENTER_INITIAL_LOAD: ey,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eN,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eR,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: ev,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eO,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eC,
            LOAD_ICYMI_HYDRATED: eb,
            EMBEDDED_ACTIVITY_UPDATE_V2: eD,
            INITIATE_AGE_VERIFICATION: eL,
            CLOSE_AGE_VERIFICATION_MODAL: ew,
            INTERACTION_MODAL_CREATE: eM,
        });
    }
    initialize() {
        this.waitFor(m.default, _.A);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return { version: eU.LATEST_SNAPSHOT_VERSION, data: { users: [e].filter(p.Vq) } };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eU.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) T[e.id] = new h.A(e);
        if (null != e.users) for (let t of e.users) (t.id in T && P(t)) || (T[t.id] = new h.A(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) e.rawRecipients?.forEach((e) => C(e, !1));
    }
    getUserStoreVersion() {
        return S;
    }
    getUser(e) {
        if (null != e) return T[e];
    }
    getUsers() {
        return T;
    }
    forEach(e) {
        for (let t in T) if (!1 === e(T[t])) break;
    }
    findByTag(e, t) {
        for (let n in T) {
            let r = T[n];
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
        for (let t in T) {
            let r = T[t];
            e(r) && n.push(r);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return T[m.default.getId()];
    }
}
let ek = new eU();
