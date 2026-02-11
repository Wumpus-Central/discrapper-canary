"use strict";
n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => v,
        default: () => eG,
        mergeUser: () => D,
        transformUser: () => R,
        users: () => y,
    }),
    n(938796),
    n(205816),
    n(321073);
var r = n(735438),
    i = n(665260),
    a = n(155718),
    s = n(807605),
    o = n(507698),
    l = n(628856),
    u = n(945096),
    c = n(47537),
    d = n(244284),
    _ = n(683760),
    f = n(392737),
    h = n(572009),
    p = n(427157),
    g = n(403362),
    E = n(961350),
    A = n(536802),
    I = n(652215),
    T = n(788868);
let y = {},
    S = 0,
    v = "47835198259242069";
function C(e, t, n) {
    let r = y[e];
    if (null == r) return !1;
    let i = r;
    (i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (y[r.id] = i);
    let a = r !== i;
    return a && S++, a;
}
function b(e, t) {
    let n = y[e];
    return (
        !(null == n || (0, c.D)(n.primaryGuild, t.primary_guild)) &&
        (null == n.primaryGuild || null != t.primary_guild) &&
        ((n.primaryGuild = (0, c.j)(t.primary_guild)), (y[n.id] = n), S++, !0)
    );
}
function N(e, t) {
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
}
function R(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, h.nq)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let i = e.age_verification_status;
    null != i && ((e.ageVerificationStatus = i), delete e.age_verification_status);
    let a = e.public_flags;
    null != a && ((e.publicFlags = a), delete e.public_flags);
    let s = e.purchased_flags;
    void 0 !== s && ((e.purchasedFlags = s), delete e.purchased_flags);
    let _ = e.premium_usage_flags;
    void 0 !== _ && ((e.premiumUsageFlags = _), delete e.premium_usage_flags),
        null === e.banner_color && delete e.banner_color;
    let p = e.avatar_decoration_data;
    void 0 !== p && ((e.avatarDecorationData = (0, o.Xq)(p)), delete e.avatar_decoration_data);
    let g = e.collectibles;
    void 0 !== g && (delete e.collectibles, (e.collectibles = (0, l.t)(g)));
    let E = e.global_name;
    void 0 !== E && ((e.globalName = E), delete e.global_name);
    let A = e.primary_guild;
    void 0 !== A && (e.primary_guild = (0, c.j)(A));
    let I = e.display_name_styles;
    void 0 !== I && ((e.displayNameStyles = (0, u.mT)(I)), delete e.display_name_styles);
    let T = e.premium_state;
    void 0 !== T && ((e.premiumState = (0, f.f)(T)), delete e.premium_state);
    let y = e.restricted_schedule;
    void 0 !== y && ((e.restrictedSchedule = d.kX.fromServer(y) ?? null), delete e.restricted_schedule);
    let S = e.app_transaction_ids;
    return void 0 !== S && ((e.appTransactionIds = S), delete e.app_transaction_ids), e;
}
function O(e) {
    return e.id !== E.default.getId();
}
function D(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = y[e.id],
        i = void 0 !== e.id && e.id === E.default.getId();
    if (null == r)
        void 0 !== (t = (r = new p.A(e)).premiumType) && i && (r.premiumType = w((0, h.I9)(r), r.premiumType));
    else if (n) {
        let n = R(e);
        void 0 !== (t = n.premium_type ?? n.premiumType) && i && (0, h._D)(n) && (n = L(n)),
            (n = N(r, n)),
            (r = r.merge(n));
    }
    (0, h.gX)((0, h.I9)(r), t, r.premiumType);
    let a = y[e.id] !== r;
    return (y[e.id] = r), a && S++, a;
}
function L(e) {
    let t = e.premium_type ?? e.premiumType,
        n = w((0, h._D)(e), t);
    return void 0 !== e.premiumType ? (e.premiumType = n) : void 0 !== e.premium_type && (e.premium_type = n), e;
}
function w(e, t) {
    if (!e) return t;
    let n = _.A.getPremiumTypeOverride(),
        r = _.A.getPremiumTypeActual();
    return n === T.$I ? r : n;
}
function x(e, t) {
    if (e?.users == null) return !1;
    for (let n in e.users) {
        let r = e.users[n];
        O(r) && D(r, t);
    }
}
function P(e, t) {
    null != e.author && "SENDING" !== e.state && O(e.author) && D(e.author, t),
        e.mentions?.forEach((e) => {
            O(e) && D(e, t);
        }),
        e.interaction?.user != null && O(e.interaction?.user) && D(e.interaction.user, t),
        e.attachments?.forEach((e) => {
            e.clip_participants?.forEach((e) => {
                O(e) && D(e, t);
            });
        }),
        x(e.resolved, t),
        e.interaction_metadata?.user != null && O(e.interaction_metadata.user) && D(e.interaction_metadata.user, t),
        null != e.message_snapshots &&
            e.message_snapshots.forEach((e) => {
                e.moderator_report?.reported_member?.user != null && D(e.moderator_report.reported_member.user, t),
                    e.moderator_report?.reporting_member?.user != null &&
                        D(e.moderator_report.reporting_member.user, t),
                    Object.values(e.message?.resolved?.users ?? {}).forEach((e) => {
                        O(e) && D(e, t);
                    });
            });
}
function M(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        D(t),
        n.forEach((e) => {
            D(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                C(t.user.id, e.id, t.avatar), b(t.user.id, t.user);
            });
        }),
        null != y[E.default.getId()] &&
            (y[v] = new p.A({
                id: v,
                username: "Wumpus",
                discriminator: "0",
                globalName: "Wumpus",
                avatar: "c1f86b313385cb97985f1b118851c28c",
            }));
}
function k(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            C(t.user.id, e.id, t.avatar), b(t.user.id, t.user);
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
function G(e) {
    if (null != e.users) for (let t of e.users) (t.id in y && U(t)) || (y[t.id] = new p.A(t));
}
function F(e) {
    let { user: t } = e;
    if (!O(t)) return !1;
    D(t);
}
function V(e) {
    let { userProfile: t } = e;
    if (!O(t.user)) return !1;
    D(t.user);
}
function B(e) {
    let { user: t } = e;
    D(t);
}
function j(e) {
    let { user: t } = e;
    D({ id: t.id, premiumType: t.premiumType }, !0);
}
function H(e) {
    let { messages: t } = e;
    return t.forEach((e) => P(e, !0)), !1;
}
function Y(e) {
    let { pins: t } = e;
    return (
        t.forEach((e) => {
            let { message: t } = e;
            return P(t, !0);
        }),
        !1
    );
}
function W(e) {
    let { mostRecentMessages: t } = e;
    return t?.forEach((e) => P(e, !1)), !1;
}
function K(e) {
    let { data: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t, channels: n } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    P(e, !0);
                });
            }),
                n.forEach((e) => {
                    (e.type === I.rbe.DM || e.type === I.rbe.GROUP_DM) &&
                        (e.recipients?.forEach((e) => D(e)), null != e.recipient && D(e.recipient));
                });
        }),
        !1
    );
}
function $(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => P(e, !0)), null != n && n.forEach((e) => D(e.user, !0));
}
function z(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && P(t, !0), null != n && P(n, !0), null != r && null != r.user && D(r.user, !0);
    });
}
function q(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && P(t, !0);
    });
}
function X(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: r } = e;
        if (null == t) return;
        D(t);
        let i = r?.avatar;
        null != i && C(t.id, n, i);
    });
}
function Z(e) {
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
    if ((P(t, !0), null != t.flags && i.Lt(t.flags, I.pr7.URGENT))) {
        let e = y[E.default.getId()];
        return (
            null != e &&
            ((y[E.default.getId()] = e.set("flags", i.lA(e.flags, I.nhx.HAS_UNREAD_URGENT_MESSAGES, !0))), !0)
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
function er(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = y[e.user.id];
            if (null == t) return !1;
            let n = en.reduce((n, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let a = t.set((0, r.camelCase)(i), e.user[i]);
                    (n = n || a !== t), (t = a);
                }
                return n;
            }, !1);
            return !!n && ((y[t.id] = t), n);
        })
        .some((e) => e);
}
function ei(e) {
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
function eo(e) {
    return !!e.isMember && D(e.user);
}
function el(e) {
    let t = D(e.user);
    return C(e.user.id, e.guildId, e.avatar) || t;
}
function eu(e) {
    let { ops: t } = e;
    for (let e of t)
        if ("INSERT" === e.op || "UPDATE" === e.op) {
            let t = e.item.member?.user;
            if (null == t) continue;
            b(t.id, t);
        }
    return !1;
}
function ec(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = D(n.user);
                return C(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function ed(e) {
    let t = !1;
    for (let n of e.members) D(n.user) && (t = !0), C(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function e_(e) {
    let t = !1;
    for (let n of e.users ?? []) Object.hasOwn(y, n.id) || (t = D(n) || t);
    return t;
}
function ef(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && D(e.member.user) && (n = !0), null != e.presence && D(e.presence.user) && (n = !0);
        }),
        n
    );
}
function eh(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        t?.forEach((e) => {
            null != e.member && D(e.member.user) && (n = !0), null != e.presence && D(e.presence.user) && (n = !0);
        }),
        n
    );
}
function ep(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: a, bot: s },
            avatar: o,
        } = e;
        n !== E.default.getId() && D({ id: n, username: r, avatar: i, discriminator: a, bot: s }), C(n, t.id, o);
    });
}
function em(e) {
    return D(e.relationship.user);
}
function eg(e) {
    return D(e.gameRelationship.user);
}
function eE(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => D(t.user) || e, !1);
}
function eA(e) {
    return D(e.suggestion.suggested_user);
}
function eI(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => D(t.suggested_user) || e, !1);
}
function eT(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == y[e.id] && (y[e.id] = new p.A(e));
    });
}
function ey(e) {
    let { giftCode: t } = e;
    return null != t.user && D(t.user);
}
function eS(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && D(t);
    });
}
function ev(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = i || D(n)), null != r && (i = i || D(r)), i;
}
function eC(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => D(t) || e, !1);
}
function eb(e) {
    let { users: t } = e;
    return t.reduce((e, t) => D(t) || e, !1);
}
function eN(e) {
    let { users: t } = e;
    return t.reduce((e, t) => D(t) || e, !1);
}
function eR(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => D(t) || e, !1);
}
function eO(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => D(t) || e, !1);
}
function eD(e) {
    let { members: t } = e,
        n = E.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : D(t.member.user) || e), !1);
}
function eL(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && P(e.message, !0);
    }, !1);
}
function ew(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, s.A)(t) && D(t.member.user)) || e, !1);
}
function ex(e) {
    let {} = e,
        t = y[E.default.getId()];
    return null != t && ((y[E.default.getId()] = t.set("ageVerificationStatus", a.Tk.CLIENT_ONLY_PENDING)), !0);
}
function eP(e) {
    let { status: t } = e,
        n = y[E.default.getId()];
    return (
        null != n &&
        n.ageVerificationStatus === a.Tk.CLIENT_ONLY_PENDING &&
        ((y[E.default.getId()] = n.set("ageVerificationStatus", t)), !0)
    );
}
function eM(e) {
    let { resolved: t } = e;
    return x(t, !0);
}
function ek(e) {
    let { stickers: t } = e;
    return t.reduce((e, t) => (null != t.user && D(t.user)) || e, !1);
}
class eU extends A.A {
    static displayName = "UserStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: M,
            CONNECTION_OPEN_SUPPLEMENTAL: k,
            UPDATE_CLIENT_PREMIUM_TYPE: j,
            OVERLAY_INITIALIZE: G,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: F,
            USER_PROFILE_FETCH_SUCCESS: V,
            CURRENT_USER_UPDATE: B,
            PRESENCE_UPDATES: er,
            SEARCH_MESSAGES_SUCCESS: K,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: K,
            LOAD_MESSAGES_SUCCESS: H,
            LOAD_MESSAGES_AROUND_SUCCESS: H,
            LOAD_RECENT_MENTIONS_SUCCESS: H,
            LOAD_PINNED_MESSAGES_SUCCESS: Y,
            THREAD_LIST_SYNC: W,
            MESSAGE_CREATE: J,
            MESSAGE_UPDATE: J,
            GUILD_SETTINGS_LOADED_BANS: ei,
            GUILD_SETTINGS_LOADED_BANS_BATCH: ea,
            GUILD_CREATE: ep,
            GUILD_BAN_ADD: es,
            GUILD_BAN_REMOVE: es,
            CHANNEL_RECIPIENT_ADD: eo,
            CHANNEL_RECIPIENT_REMOVE: eo,
            GUILD_STICKERS_FETCH_SUCCESS: ek,
            GUILD_JOIN_REQUEST_CREATE: ev,
            GUILD_JOIN_REQUEST_UPDATE: ev,
            GUILD_MEMBER_ADD: el,
            GUILD_MEMBER_UPDATE: el,
            GUILD_MEMBERS_CHUNK_BATCH: ec,
            GUILD_MEMBER_LIST_UPDATE: eu,
            THREAD_MEMBER_LIST_UPDATE: ef,
            THREAD_MEMBERS_UPDATE: eh,
            CHANNEL_CREATE: ee,
            CHANNEL_UPDATES: et,
            RELATIONSHIP_ADD: em,
            GAME_RELATIONSHIP_ADD: eg,
            LOAD_RELATIONSHIPS_SUCCESS: eE,
            FRIEND_SUGGESTION_CREATE: eA,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: eI,
            AUDIT_LOG_FETCH_SUCCESS: eT,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eT,
            GIFT_CODE_RESOLVE_SUCCESS: ey,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eS,
            LOAD_THREADS_SUCCESS: $,
            LOAD_ARCHIVED_THREADS_SUCCESS: $,
            LOAD_FORUM_POSTS: z,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: X,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: Z,
            NOTIFICATION_CENTER_ITEM_CREATE: Q,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: q,
            PASSIVE_UPDATE_V2: ed,
            LOCAL_MESSAGES_LOADED: e_,
            FAMILY_CENTER_INITIAL_LOAD: eC,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eb,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eR,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eO,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eN,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eD,
            LOAD_ICYMI_HYDRATED: eL,
            EMBEDDED_ACTIVITY_UPDATE_V2: ew,
            INITIATE_AGE_VERIFICATION: ex,
            CLOSE_AGE_VERIFICATION_MODAL: eP,
            INTERACTION_MODAL_CREATE: eM,
        });
    }
    initialize() {
        this.waitFor(E.default, _.A);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return { version: eU.LATEST_SNAPSHOT_VERSION, data: { users: [e].filter(g.Vq) } };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eU.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) y[e.id] = new p.A(e);
        if (null != e.users) for (let t of e.users) (t.id in y && U(t)) || (y[t.id] = new p.A(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) e.rawRecipients?.forEach((e) => D(e, !1));
    }
    getUserStoreVersion() {
        return S;
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
        for (let t in y) {
            let r = y[t];
            e(r) && n.push(r);
        }
        return t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n;
    }
    getCurrentUser() {
        return y[E.default.getId()];
    }
}
let eG = new eU();
