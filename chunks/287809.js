(n(938796), n(205816), n(321073));
var i = n(435558),
    r = n(665260),
    a = n(155718),
    s = n(807605),
    l = n(821956),
    o = n(628856),
    d = n(870600),
    c = n(501803),
    u = n(47537),
    _ = n(244284),
    E = n(683760),
    A = n(392737),
    f = n(572009),
    h = n(619019),
    I = n(403362),
    p = n(46653),
    m = n(536802),
    T = n(652215);
n(682901);
let g = {},
    S = 0,
    N = "47835198259242069";
function C(e, t, n) {
    let i = g[e];
    if (null == i) return !1;
    let r = i;
    ((r = null == n ? i.removeGuildAvatarHash(t) : i.addGuildAvatarHash(t, n)), (g[i.id] = r));
    let a = i !== r;
    return (a && S++, a);
}
function O(e, t) {
    let n = g[e];
    return (
        !(null == n || (0, u.D)(n.primaryGuild, t.primary_guild)) &&
        (null == n.primaryGuild || null != t.primary_guild) &&
        ((n.primaryGuild = (0, u.j)(t.primary_guild)), (g[n.id] = n), S++, !0)
    );
}
function R(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, f.nq)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let i = e.nsfw_allowed;
    null != i && ((e.nsfwAllowed = i), delete e.nsfw_allowed);
    let r = e.age_verification_status;
    null != r && ((e.ageVerificationStatus = r), delete e.age_verification_status);
    let a = e.public_flags;
    null != a && ((e.publicFlags = a), delete e.public_flags);
    let s = e.purchased_flags;
    void 0 !== s && ((e.purchasedFlags = s), delete e.purchased_flags);
    let E = e.premium_usage_flags;
    (void 0 !== E && ((e.premiumUsageFlags = E), delete e.premium_usage_flags),
        null === e.banner_color && delete e.banner_color);
    let h = e.avatar_decoration_data;
    void 0 !== h && ((e.avatarDecorationData = (0, l.Xq)(h)), delete e.avatar_decoration_data);
    let I = e.collectibles;
    void 0 !== I && (delete e.collectibles, (e.collectibles = (0, o.t)(I)));
    let p = e.global_name;
    void 0 !== p && ((e.globalName = p), delete e.global_name);
    let m = e.primary_guild;
    void 0 !== m && (e.primary_guild = (0, u.j)(m));
    let T = e.display_name_styles;
    void 0 !== T && ((e.displayNameStyles = (0, c.mT)(T)), delete e.display_name_styles);
    let g = e.typing_indicator_style;
    void 0 !== g && ((e.typingIndicatorStyle = (0, d.cE)(g)), delete e.typing_indicator_style);
    let S = e.premium_state;
    void 0 !== S && ((e.premiumState = (0, A.f)(S)), delete e.premium_state);
    let N = e.restricted_schedule;
    void 0 !== N && ((e.restrictedSchedule = _.kX.fromServer(N) ?? null), delete e.restricted_schedule);
    let C = e.app_transaction_ids;
    return (void 0 !== C && ((e.appTransactionIds = C), delete e.app_transaction_ids), e);
}
function L(e) {
    return e.id !== p.default.getId();
}
function y(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = g[e.id],
        r = void 0 !== e.id && e.id === p.default.getId();
    if (null == i) {
        if (void 0 !== (t = (i = new h.A(R(e))).premiumType) && r) {
            let e = (0, f.I9)(i);
            ((i.premiumType = D(e, i.premiumType)), (i.perks = b(e, i.perks)));
        }
    } else if (n) {
        var a;
        let n,
            s,
            l = R(e);
        (void 0 !== (t = l.premium_type ?? l.premiumType) &&
            r &&
            (0, f._D)(l) &&
            ((a = l),
            (s = D((n = (0, f._D)(a)), a.premium_type ?? a.premiumType)),
            void 0 !== a.premiumType ? (a.premiumType = s) : void 0 !== a.premium_type && (a.premium_type = s),
            (a.perks = b(n, a.perks)),
            (l = a)),
            (l = (function (e, t) {
                switch (!0) {
                    case null == e.primaryGuild && null == t.primary_guild:
                        break;
                    case null != e.primaryGuild && null == t.primary_guild:
                    case (0, u.D)(e.primaryGuild, t.primary_guild):
                        t.primary_guild = e.primaryGuild;
                        break;
                    default:
                        t.primary_guild = (0, u.j)(t.primary_guild);
                }
                return t;
            })(i, l)),
            (i = i.merge(l)));
    }
    (0, f.gX)((0, f.I9)(i), t, i.premiumType);
    let s = g[e.id] !== i;
    return ((g[e.id] = i), s && S++, s);
}
function D(e, t) {
    if (!e) return t;
    let n = E.A.getPremiumTypeOverride(),
        i = E.A.getPremiumTypeActual();
    return void 0 === n ? i : n;
}
function b(e, t) {
    return e ? (null === E.A.getPremiumTypeOverride() ? null : E.A.getPerksActual()) : t;
}
function v(e, t) {
    if (e?.users == null) return !1;
    for (let n in e.users) {
        let i = e.users[n];
        L(i) && y(i, t);
    }
}
function P(e, t) {
    (null != e.author && "SENDING" !== e.state && L(e.author) && y(e.author, t),
        e.mentions?.forEach((e) => {
            L(e) && y(e, t);
        }),
        e.interaction?.user != null && L(e.interaction?.user) && y(e.interaction.user, t),
        e.attachments?.forEach((e) => {
            e.clip_participants?.forEach((e) => {
                L(e) && y(e, t);
            });
        }),
        v(e.resolved, t),
        e.interaction_metadata?.user != null && L(e.interaction_metadata.user) && y(e.interaction_metadata.user, t),
        null != e.actor && L(e.actor) && y(e.actor, t),
        null != e.message_snapshots &&
            e.message_snapshots.forEach((e) => {
                (e.moderator_report?.reported_member?.user != null && y(e.moderator_report.reported_member.user, t),
                    e.moderator_report?.reporting_member?.user != null &&
                        y(e.moderator_report.reporting_member.user, t),
                    Object.values(e.message?.resolved?.users ?? {}).forEach((e) => {
                        L(e) && y(e, t);
                    }));
            }));
}
function M(e) {
    let { user: t, users: n, guilds: i } = e;
    (delete t.premium,
        delete t.banner_color,
        y(t),
        n.forEach((e) => {
            y(e);
        }),
        i.forEach((e) => {
            e.members.forEach((t) => {
                (C(t.user.id, e.id, t.avatar), O(t.user.id, t.user));
            });
        }),
        null != g[p.default.getId()] &&
            (g[N] = new h.A({
                id: N,
                username: "Wumpus",
                discriminator: "0",
                globalName: "Wumpus",
                avatar: "c1f86b313385cb97985f1b118851c28c",
            })));
}
function U(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    (t.forEach((e) => {
        e.members.forEach((t) => {
            (C(t.user.id, e.id, t.avatar), O(t.user.id, t.user));
        });
    }),
        n?.forEach((e) => {
            e.rawRecipients?.forEach((e) => {
                y(e);
            });
        }));
}
function w(e) {
    return !("incomplete" in e);
}
function G(e) {
    if (null != e.users) for (let t of e.users) (t.id in g && w(t)) || (g[t.id] = new h.A(t));
}
function x(e) {
    let { user: t } = e;
    if (!L(t)) return !1;
    y(t);
}
function k(e) {
    let { userId: t, restrictedSchedule: n } = e;
    return y({ id: t, restricted_schedule: n });
}
function F(e) {
    let { userProfile: t } = e;
    if (!L(t.user)) return !1;
    y(t.user);
}
function B(e) {
    let { user: t } = e;
    y(t);
}
function V(e) {
    let { user: t } = e;
    return y({ id: t.id, premiumType: D((0, f.I9)(t), t.premiumType) }, !0);
}
function H(e) {
    let { messages: t } = e;
    return (t.forEach((e) => P(e, !0)), !1);
}
function j(e) {
    let { messages: t, messageReferences: n } = e;
    return (t.concat(n).forEach((e) => P(e, !0)), !1);
}
function W(e) {
    let { rawConversations: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t } = e;
            return t?.forEach((e) => P(e, !0));
        }),
        !1
    );
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
function K(e) {
    let { mostRecentMessages: t } = e;
    return (t?.forEach((e) => P(e, !1)), !1);
}
function $(e) {
    let { data: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t, channels: n } = e;
            (t.forEach((e) => {
                e.forEach((e) => {
                    P(e, !0);
                });
            }),
                n.forEach((e) => {
                    (e.type === T.rbe.DM || e.type === T.rbe.GROUP_DM) &&
                        (e.recipients?.forEach((e) => y(e)), null != e.recipient && y(e.recipient));
                }));
        }),
        !1
    );
}
function X(e) {
    let { messages: t } = e;
    return (t.forEach((e) => P(e, !0)), !1);
}
function z(e) {
    let { firstMessages: t, owners: n } = e;
    (null != t && t.forEach((e) => P(e, !0)), null != n && n.forEach((e) => y(e.user, !0)));
}
function q(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: i } = e;
        (null != t && P(t, !0), null != n && P(n, !0), null != i && null != i.user && y(i.user, !0));
    });
}
function Q(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && P(t, !0);
    });
}
function Z(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: i } = e;
        if (null == t) return;
        y(t);
        let r = i?.avatar;
        null != r && C(t.id, n, r);
    });
}
function J(e) {
    (null != e.other_user && y(e.other_user), null != e.message && P(e.message, !0));
}
function ee(e) {
    let { items: t } = e;
    t.forEach(J);
}
function et(e) {
    let { item: t } = e;
    J(t);
}
function en(e) {
    let { message: t } = e;
    if ((P(t, !0), null != t.flags && r.Lt(t.flags, T.pr7.URGENT))) {
        let e = g[p.default.getId()];
        return (
            null != e &&
            ((g[p.default.getId()] = e.set("flags", r.lA(e.flags, T.nhx.HAS_UNREAD_URGENT_MESSAGES, !0))), !0)
        );
    }
    return !1;
}
function ei(e) {
    let {
        channel: { rawRecipients: t },
    } = e;
    return (null != t && t.forEach((e) => y(e)), !1);
}
function er(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => y(e));
    return !1;
}
let ea = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];
function es(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = g[e.user.id];
            if (null == t) return !1;
            let n = ea.reduce((n, r) => {
                if (e.user.hasOwnProperty(r)) {
                    let a = t.set((0, i.camelCase)(r), e.user[r]);
                    ((n = n || a !== t), (t = a));
                }
                return n;
            }, !1);
            return !!n && ((g[t.id] = t), n);
        })
        .some((e) => e);
}
function el(e) {
    let { bans: t } = e;
    t.forEach((e) => y(e.user));
}
function eo(e) {
    let { bans: t } = e;
    t.forEach((e) => y(e.user));
}
function ed(e) {
    return y(e.user);
}
function ec(e) {
    return !!e.isMember && y(e.user);
}
function eu(e) {
    let t = y(e.user);
    return C(e.user.id, e.guildId, e.avatar) || t;
}
function e_(e) {
    let { ops: t } = e;
    for (let e of t)
        if ("INSERT" === e.op || "UPDATE" === e.op) {
            let t = e.item.member?.user;
            if (null == t) continue;
            O(t.id, t);
        }
    return !1;
}
function eE(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let i = y(n.user);
                return C(n.user.id, e.guildId, n.avatar) || i || t;
            }, !1) || n;
    return n;
}
function eA(e) {
    let t = !1;
    for (let n of e.members) (y(n.user) && (t = !0), C(n.user.id, e.guildId, n.avatar) && (t = !0));
    return t;
}
function ef(e) {
    let t = !1;
    for (let n of e.users ?? []) Object.hasOwn(g, n.id) || (t = y(n) || t);
    return t;
}
function eh(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            (null != e.member && y(e.member.user) && (n = !0), null != e.presence && y(e.presence.user) && (n = !0));
        }),
        n
    );
}
function eI(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        t?.forEach((e) => {
            (null != e.member && y(e.member.user) && (n = !0), null != e.presence && y(e.presence.user) && (n = !0));
        }),
        n
    );
}
function ep(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: i, avatar: r, discriminator: a, bot: s },
            avatar: l,
        } = e;
        (n !== p.default.getId() && y({ id: n, username: i, avatar: r, discriminator: a, bot: s }), C(n, t.id, l));
    });
}
function em(e) {
    return y(e.relationship.user);
}
function eT(e) {
    return y(e.gameRelationship.user);
}
function eg(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => y(t.user) || e, !1);
}
function eS(e) {
    return y(e.suggestion.suggested_user);
}
function eN(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => y(t.suggested_user) || e, !1);
}
function eC(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == g[e.id] && (g[e.id] = new h.A(e));
    });
}
function eO(e) {
    let { giftCode: t } = e;
    return null != t.user && y(t.user);
}
function eR(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && y(t);
    });
}
function eL(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: i } = t,
        r = !1;
    return (null != n && (r = y(n)), null != i && (r = r || y(i)), r);
}
function ey(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: i } = n;
    return [...t, ...i].reduce((e, t) => y(t) || e, !1);
}
function eD(e) {
    let { users: t } = e;
    return t.reduce((e, t) => y(t) || e, !1);
}
function eb(e) {
    let { users: t } = e;
    return t.reduce((e, t) => y(t) || e, !1);
}
function ev(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => y(t) || e, !1);
}
function eP(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => y(t) || e, !1);
}
function eM(e) {
    let { members: t } = e,
        n = p.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : y(t.member.user) || e), !1);
}
function eU(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && P(e.message, !0);
    }, !1);
}
function ew(e) {
    let { instance: t } = e;
    return t.participants.reduce((e, t) => ((0, s.A)(t) && y(t.member.user)) || e, !1);
}
function eG(e) {
    let {} = e,
        t = g[p.default.getId()];
    return null != t && ((g[p.default.getId()] = t.set("ageVerificationStatus", a.Tk.CLIENT_ONLY_PENDING)), !0);
}
function ex(e) {
    let { status: t } = e,
        n = g[p.default.getId()];
    return (
        null != n &&
        n.ageVerificationStatus === a.Tk.CLIENT_ONLY_PENDING &&
        ((g[p.default.getId()] = n.set("ageVerificationStatus", t)), !0)
    );
}
function ek(e) {
    let { resolved: t } = e;
    return v(t, !0);
}
function eF(e) {
    let { stickers: t } = e;
    return t.reduce((e, t) => (null != t.user && y(t.user)) || e, !1);
}
class eB extends m.A {
    static displayName = "UserStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: M,
            CONNECTION_OPEN_SUPPLEMENTAL: U,
            UPDATE_CLIENT_PREMIUM_TYPE: V,
            OVERLAY_INITIALIZE: G,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: x,
            USER_RESTRICTED_SCHEDULE_UPDATE: k,
            USER_PROFILE_FETCH_SUCCESS: F,
            CURRENT_USER_UPDATE: B,
            PRESENCE_UPDATES: es,
            SEARCH_MESSAGES_SUCCESS: $,
            SMART_SEARCH_FETCH_SUCCESS: X,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: $,
            LOAD_MESSAGES_SUCCESS: H,
            LOAD_MESSAGES_AROUND_SUCCESS: H,
            LOAD_RECENT_MENTIONS_SUCCESS: H,
            SAVED_MESSAGES_UPDATE: H,
            BOOKMARKS_FETCH_SUCCESS: H,
            SAVED_MESSAGE_CREATE: H,
            CONVERSATION_MESSAGES_FETCH_SUCCESS: j,
            CHANNEL_CONVERSATIONS_FETCH_SUCCESS: W,
            LOAD_PINNED_MESSAGES_SUCCESS: Y,
            THREAD_LIST_SYNC: K,
            MESSAGE_CREATE: en,
            MESSAGE_UPDATE: en,
            GUILD_SETTINGS_LOADED_BANS: el,
            GUILD_SETTINGS_LOADED_BANS_BATCH: eo,
            GUILD_CREATE: ep,
            GUILD_BAN_ADD: ed,
            GUILD_BAN_REMOVE: ed,
            CHANNEL_RECIPIENT_ADD: ec,
            CHANNEL_RECIPIENT_REMOVE: ec,
            GUILD_STICKERS_FETCH_SUCCESS: eF,
            GUILD_JOIN_REQUEST_CREATE: eL,
            GUILD_JOIN_REQUEST_UPDATE: eL,
            GUILD_MEMBER_ADD: eu,
            GUILD_MEMBER_UPDATE: eu,
            GUILD_MEMBERS_CHUNK_BATCH: eE,
            GUILD_MEMBER_LIST_UPDATE: e_,
            THREAD_MEMBER_LIST_UPDATE: eh,
            THREAD_MEMBERS_UPDATE: eI,
            CHANNEL_CREATE: ei,
            CHANNEL_UPDATES: er,
            RELATIONSHIP_ADD: em,
            GAME_RELATIONSHIP_ADD: eT,
            LOAD_RELATIONSHIPS_SUCCESS: eg,
            FRIEND_SUGGESTION_CREATE: eS,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: eN,
            AUDIT_LOG_FETCH_SUCCESS: eC,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eC,
            GIFT_CODE_RESOLVE_SUCCESS: eO,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eR,
            LOAD_THREADS_SUCCESS: z,
            LOAD_ARCHIVED_THREADS_SUCCESS: z,
            LOAD_FORUM_POSTS: q,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: Z,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: ee,
            NOTIFICATION_CENTER_ITEM_CREATE: et,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: Q,
            PASSIVE_UPDATE_V2: eA,
            LOCAL_MESSAGES_LOADED: ef,
            FAMILY_CENTER_INITIAL_LOAD: ey,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eD,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: ev,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eP,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eb,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eM,
            LOAD_ICYMI_HYDRATED: eU,
            EMBEDDED_ACTIVITY_UPDATE_V2: ew,
            INITIATE_AGE_VERIFICATION: eG,
            CLOSE_AGE_VERIFICATION_MODAL: ex,
            INTERACTION_MODAL_CREATE: ek,
        });
    }
    initialize() {
        this.waitFor(p.default, E.A);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return { version: eB.LATEST_SNAPSHOT_VERSION, data: { users: [e].filter(I.Vq) } };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eB.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) g[e.id] = new h.A(e);
        if (null != e.users) for (let t of e.users) (t.id in g && w(t)) || (g[t.id] = new h.A(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) e.rawRecipients?.forEach((e) => y(e, !1));
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
        return (t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n);
    }
    getCurrentUser() {
        return g[p.default.getId()];
    }
}
let eV = new eB();
n.d(t, {}, { default: eV, oV: R });
