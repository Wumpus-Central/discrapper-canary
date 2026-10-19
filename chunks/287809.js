(n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => C,
        default: () => eH,
        mergeUser: () => D,
        transformUser: () => L,
        users: () => S,
    }),
    n(938796),
    n(205816),
    n(321073));
var i = n(435558),
    r = n(665260),
    a = n(155718),
    s = n(807605),
    l = n(821956),
    o = n(628856),
    d = n(870600),
    c = n(945096),
    u = n(47537),
    _ = n(244284),
    E = n(683760),
    A = n(392737),
    h = n(572009),
    f = n(889227),
    I = n(403362),
    p = n(280450),
    T = n(536802),
    m = n(652215),
    g = n(202541);
let S = {},
    N = 0,
    C = "47835198259242069";
function O(e, t, n) {
    let i = S[e];
    if (null == i) return !1;
    let r = i;
    ((r = null == n ? i.removeGuildAvatarHash(t) : i.addGuildAvatarHash(t, n)), (S[i.id] = r));
    let a = i !== r;
    return (a && N++, a);
}
function R(e, t) {
    let n = S[e];
    return (
        !(null == n || (0, u.D)(n.primaryGuild, t.primary_guild)) &&
        (null == n.primaryGuild || null != t.primary_guild) &&
        ((n.primaryGuild = (0, u.j)(t.primary_guild)), (S[n.id] = n), N++, !0)
    );
}
function L(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, h.nq)(e.premium_type);
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
    let f = e.avatar_decoration_data;
    void 0 !== f && ((e.avatarDecorationData = (0, l.Xq)(f)), delete e.avatar_decoration_data);
    let I = e.collectibles;
    void 0 !== I && (delete e.collectibles, (e.collectibles = (0, o.t)(I)));
    let p = e.global_name;
    void 0 !== p && ((e.globalName = p), delete e.global_name);
    let T = e.primary_guild;
    void 0 !== T && (e.primary_guild = (0, u.j)(T));
    let m = e.display_name_styles;
    void 0 !== m && ((e.displayNameStyles = (0, c.mT)(m)), delete e.display_name_styles);
    let g = e.typing_indicator_style;
    void 0 !== g && ((e.typingIndicatorStyle = (0, d.cE)(g)), delete e.typing_indicator_style);
    let S = e.vad_colors;
    void 0 !== S && ((e.vadColors = S), delete e.vad_colors);
    let N = e.premium_state;
    void 0 !== N && ((e.premiumState = (0, A.f)(N)), delete e.premium_state);
    let C = e.restricted_schedule;
    void 0 !== C && ((e.restrictedSchedule = _.kX.fromServer(C) ?? null), delete e.restricted_schedule);
    let O = e.app_transaction_ids;
    return (void 0 !== O && ((e.appTransactionIds = O), delete e.app_transaction_ids), e);
}
function y(e) {
    return e.id !== p.default.getId();
}
function D(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = S[e.id],
        r = void 0 !== e.id && e.id === p.default.getId();
    if (null == i) {
        if (void 0 !== (t = (i = new f.A(L(e))).premiumType) && r) {
            let e = (0, h.I9)(i);
            ((i.premiumType = v(e, i.premiumType)), (i.perks = b(e, i.perks)));
        }
    } else if (n) {
        var a;
        let n,
            s,
            l = L(e);
        (void 0 !== (t = l.premium_type ?? l.premiumType) &&
            r &&
            (0, h._D)(l) &&
            ((a = l),
            (s = v((n = (0, h._D)(a)), a.premium_type ?? a.premiumType)),
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
    (0, h.gX)((0, h.I9)(i), t, i.premiumType);
    let s = S[e.id] !== i;
    return ((S[e.id] = i), s && N++, s);
}
function v(e, t) {
    if (!e) return t;
    let n = E.A.getPremiumTypeOverride(),
        i = E.A.getPremiumTypeActual();
    return n === g.$I ? i : n;
}
function b(e, t) {
    return e ? (null === E.A.getPremiumTypeOverride() ? null : E.A.getPerksActual()) : t;
}
function M(e, t) {
    if (e?.users == null) return !1;
    for (let n in e.users) {
        let i = e.users[n];
        y(i) && D(i, t);
    }
}
function P(e, t) {
    (null != e.author && "SENDING" !== e.state && y(e.author) && D(e.author, t),
        e.mentions?.forEach((e) => {
            y(e) && D(e, t);
        }),
        e.interaction?.user != null && y(e.interaction?.user) && D(e.interaction.user, t),
        e.attachments?.forEach((e) => {
            e.clip_participants?.forEach((e) => {
                y(e) && D(e, t);
            });
        }),
        M(e.resolved, t),
        e.interaction_metadata?.user != null && y(e.interaction_metadata.user) && D(e.interaction_metadata.user, t),
        null != e.actor && y(e.actor) && D(e.actor, t),
        null != e.message_snapshots &&
            e.message_snapshots.forEach((e) => {
                (e.moderator_report?.reported_member?.user != null && D(e.moderator_report.reported_member.user, t),
                    e.moderator_report?.reporting_member?.user != null &&
                        D(e.moderator_report.reporting_member.user, t),
                    Object.values(e.message?.resolved?.users ?? {}).forEach((e) => {
                        y(e) && D(e, t);
                    }));
            }));
}
function U(e) {
    let { user: t, users: n, guilds: i } = e;
    (delete t.premium,
        delete t.banner_color,
        D(t),
        n.forEach((e) => {
            D(e);
        }),
        i.forEach((e) => {
            e.members.forEach((t) => {
                (O(t.user.id, e.id, t.avatar), R(t.user.id, t.user));
            });
        }),
        null != S[p.default.getId()] &&
            (S[C] = new f.A({
                id: C,
                username: "Wumpus",
                discriminator: "0",
                globalName: "Wumpus",
                avatar: "c1f86b313385cb97985f1b118851c28c",
            })));
}
function w(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    (t.forEach((e) => {
        e.members.forEach((t) => {
            (O(t.user.id, e.id, t.avatar), R(t.user.id, t.user));
        });
    }),
        n?.forEach((e) => {
            e.rawRecipients?.forEach((e) => {
                D(e);
            });
        }));
}
function G(e) {
    return !("incomplete" in e);
}
function x(e) {
    if (null != e.users) for (let t of e.users) (t.id in S && G(t)) || (S[t.id] = new f.A(t));
}
function k(e) {
    let { user: t } = e;
    if (!y(t)) return !1;
    D(t);
}
function F(e) {
    let { userId: t, restrictedSchedule: n } = e;
    return D({ id: t, restricted_schedule: n });
}
function B(e) {
    let { userProfile: t } = e;
    if (!y(t.user)) return !1;
    D(t.user);
}
function V(e) {
    let { user: t } = e;
    D(t);
}
function H(e) {
    let { user: t } = e;
    return D({ id: t.id, premiumType: v((0, h.I9)(t), t.premiumType) }, !0);
}
function j(e) {
    let { messages: t } = e;
    return (t.forEach((e) => P(e, !0)), !1);
}
function W(e) {
    let { messages: t, messageReferences: n } = e;
    return (t.concat(n).forEach((e) => P(e, !0)), !1);
}
function Y(e) {
    let { rawConversations: t } = e;
    return (
        t.forEach((e) => {
            let { messages: t } = e;
            return t?.forEach((e) => P(e, !0));
        }),
        !1
    );
}
function K(e) {
    let { pins: t } = e;
    return (
        t.forEach((e) => {
            let { message: t } = e;
            return P(t, !0);
        }),
        !1
    );
}
function $(e) {
    let { mostRecentMessages: t } = e;
    return (t?.forEach((e) => P(e, !1)), !1);
}
function z(e) {
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
                    (e.type === m.rbe.DM || e.type === m.rbe.GROUP_DM) &&
                        (e.recipients?.forEach((e) => D(e)), null != e.recipient && D(e.recipient));
                }));
        }),
        !1
    );
}
function X(e) {
    let { messages: t } = e;
    return (t.forEach((e) => P(e, !0)), !1);
}
function q(e) {
    let { firstMessages: t, owners: n } = e;
    (null != t && t.forEach((e) => P(e, !0)), null != n && n.forEach((e) => D(e.user, !0)));
}
function Z(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: i } = e;
        (null != t && P(t, !0), null != n && P(n, !0), null != i && null != i.user && D(i.user, !0));
    });
}
function Q(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && P(t, !0);
    });
}
function J(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: i } = e;
        if (null == t) return;
        D(t);
        let r = i?.avatar;
        null != r && O(t.id, n, r);
    });
}
function ee(e) {
    (null != e.other_user && D(e.other_user), null != e.message && P(e.message, !0));
}
function et(e) {
    let { items: t } = e;
    t.forEach(ee);
}
function en(e) {
    let { item: t } = e;
    ee(t);
}
function ei(e) {
    let { message: t } = e;
    if ((P(t, !0), null != t.flags && r.Lt(t.flags, m.pr7.URGENT))) {
        let e = S[p.default.getId()];
        return (
            null != e &&
            ((S[p.default.getId()] = e.set("flags", r.lA(e.flags, m.nhx.HAS_UNREAD_URGENT_MESSAGES, !0))), !0)
        );
    }
    return !1;
}
function er(e) {
    let {
        channel: { rawRecipients: t },
    } = e;
    return (null != t && t.forEach((e) => D(e)), !1);
}
function ea(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => D(e));
    return !1;
}
let es = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];
function el(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let t = S[e.user.id];
            if (null == t) return !1;
            let n = es.reduce((n, r) => {
                if (e.user.hasOwnProperty(r)) {
                    let a = t.set((0, i.camelCase)(r), e.user[r]);
                    ((n = n || a !== t), (t = a));
                }
                return n;
            }, !1);
            return !!n && ((S[t.id] = t), n);
        })
        .some((e) => e);
}
function eo(e) {
    let { bans: t } = e;
    t.forEach((e) => D(e.user));
}
function ed(e) {
    let { bans: t } = e;
    t.forEach((e) => D(e.user));
}
function ec(e) {
    return D(e.user);
}
function eu(e) {
    return !!e.isMember && D(e.user);
}
function e_(e) {
    let t = D(e.user);
    return O(e.user.id, e.guildId, e.avatar) || t;
}
function eE(e) {
    let { ops: t } = e;
    for (let e of t)
        if ("INSERT" === e.op || "UPDATE" === e.op) {
            let t = e.item.member?.user;
            if (null == t) continue;
            R(t.id, t);
        }
    return !1;
}
function eA(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let i = D(n.user);
                return O(n.user.id, e.guildId, n.avatar) || i || t;
            }, !1) || n;
    return n;
}
function eh(e) {
    let t = !1;
    for (let n of e.members) (D(n.user) && (t = !0), O(n.user.id, e.guildId, n.avatar) && (t = !0));
    return t;
}
function ef(e) {
    let t = !1;
    for (let n of e.users ?? []) Object.hasOwn(S, n.id) || (t = D(n) || t);
    return t;
}
function eI(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            (null != e.member && D(e.member.user) && (n = !0), null != e.presence && D(e.presence.user) && (n = !0));
        }),
        n
    );
}
function ep(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        t?.forEach((e) => {
            (null != e.member && D(e.member.user) && (n = !0), null != e.presence && D(e.presence.user) && (n = !0));
        }),
        n
    );
}
function eT(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: i, avatar: r, discriminator: a, bot: s },
            avatar: l,
        } = e;
        (n !== p.default.getId() && D({ id: n, username: i, avatar: r, discriminator: a, bot: s }), O(n, t.id, l));
    });
}
function em(e) {
    return D(e.relationship.user);
}
function eg(e) {
    return D(e.gameRelationship.user);
}
function eS(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => D(t.user) || e, !1);
}
function eN(e) {
    return D(e.suggestion.suggested_user);
}
function eC(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => D(t.suggested_user) || e, !1);
}
function eO(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == S[e.id] && (S[e.id] = new f.A(e));
    });
}
function eR(e) {
    let { giftCode: t } = e;
    return null != t.user && D(t.user);
}
function eL(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && D(t);
    });
}
function ey(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: i } = t,
        r = !1;
    return (null != n && (r = D(n)), null != i && (r = r || D(i)), r);
}
function eD(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: i } = n;
    return [...t, ...i].reduce((e, t) => D(t) || e, !1);
}
function ev(e) {
    let { users: t } = e;
    return t.reduce((e, t) => D(t) || e, !1);
}
function eb(e) {
    let { users: t } = e;
    return t.reduce((e, t) => D(t) || e, !1);
}
function eM(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => D(t) || e, !1);
}
function eP(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => D(t) || e, !1);
}
function eU(e) {
    let { members: t } = e,
        n = p.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : D(t.member.user) || e), !1);
}
function ew(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && P(e.message, !0);
    }, !1);
}
function eG(e) {
    let { instance: t } = e;
    return t.participants.reduce((e, t) => ((0, s.A)(t) && D(t.member.user)) || e, !1);
}
function ex(e) {
    let {} = e,
        t = S[p.default.getId()];
    return null != t && ((S[p.default.getId()] = t.set("ageVerificationStatus", a.Tk.CLIENT_ONLY_PENDING)), !0);
}
function ek(e) {
    let { status: t } = e,
        n = S[p.default.getId()];
    return (
        null != n &&
        n.ageVerificationStatus === a.Tk.CLIENT_ONLY_PENDING &&
        ((S[p.default.getId()] = n.set("ageVerificationStatus", t)), !0)
    );
}
function eF(e) {
    let { resolved: t } = e;
    return M(t, !0);
}
function eB(e) {
    let { stickers: t } = e;
    return t.reduce((e, t) => (null != t.user && D(t.user)) || e, !1);
}
class eV extends T.A {
    static displayName = "UserStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: U,
            CONNECTION_OPEN_SUPPLEMENTAL: w,
            UPDATE_CLIENT_PREMIUM_TYPE: H,
            OVERLAY_INITIALIZE: x,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: k,
            USER_RESTRICTED_SCHEDULE_UPDATE: F,
            USER_PROFILE_FETCH_SUCCESS: B,
            CURRENT_USER_UPDATE: V,
            PRESENCE_UPDATES: el,
            SEARCH_MESSAGES_SUCCESS: z,
            SMART_SEARCH_FETCH_SUCCESS: X,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: z,
            LOAD_MESSAGES_SUCCESS: j,
            LOAD_MESSAGES_AROUND_SUCCESS: j,
            LOAD_RECENT_MENTIONS_SUCCESS: j,
            CONVERSATION_MESSAGES_FETCH_SUCCESS: W,
            CHANNEL_CONVERSATIONS_FETCH_SUCCESS: Y,
            LOAD_PINNED_MESSAGES_SUCCESS: K,
            THREAD_LIST_SYNC: $,
            MESSAGE_CREATE: ei,
            MESSAGE_UPDATE: ei,
            GUILD_SETTINGS_LOADED_BANS: eo,
            GUILD_SETTINGS_LOADED_BANS_BATCH: ed,
            GUILD_CREATE: eT,
            GUILD_BAN_ADD: ec,
            GUILD_BAN_REMOVE: ec,
            CHANNEL_RECIPIENT_ADD: eu,
            CHANNEL_RECIPIENT_REMOVE: eu,
            GUILD_STICKERS_FETCH_SUCCESS: eB,
            GUILD_JOIN_REQUEST_CREATE: ey,
            GUILD_JOIN_REQUEST_UPDATE: ey,
            GUILD_MEMBER_ADD: e_,
            GUILD_MEMBER_UPDATE: e_,
            GUILD_MEMBERS_CHUNK_BATCH: eA,
            GUILD_MEMBER_LIST_UPDATE: eE,
            THREAD_MEMBER_LIST_UPDATE: eI,
            THREAD_MEMBERS_UPDATE: ep,
            CHANNEL_CREATE: er,
            CHANNEL_UPDATES: ea,
            RELATIONSHIP_ADD: em,
            GAME_RELATIONSHIP_ADD: eg,
            LOAD_RELATIONSHIPS_SUCCESS: eS,
            FRIEND_SUGGESTION_CREATE: eN,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: eC,
            AUDIT_LOG_FETCH_SUCCESS: eO,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eO,
            GIFT_CODE_RESOLVE_SUCCESS: eR,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eL,
            LOAD_THREADS_SUCCESS: q,
            LOAD_ARCHIVED_THREADS_SUCCESS: q,
            LOAD_FORUM_POSTS: Z,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: J,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: et,
            NOTIFICATION_CENTER_ITEM_CREATE: en,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: Q,
            PASSIVE_UPDATE_V2: eh,
            LOCAL_MESSAGES_LOADED: ef,
            FAMILY_CENTER_INITIAL_LOAD: eD,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: ev,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eM,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eP,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eb,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eU,
            LOAD_ICYMI_HYDRATED: ew,
            EMBEDDED_ACTIVITY_UPDATE_V2: eG,
            INITIATE_AGE_VERIFICATION: ex,
            CLOSE_AGE_VERIFICATION_MODAL: ek,
            INTERACTION_MODAL_CREATE: eF,
        });
    }
    initialize() {
        this.waitFor(p.default, E.A);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return { version: eV.LATEST_SNAPSHOT_VERSION, data: { users: [e].filter(I.Vq) } };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eV.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) S[e.id] = new f.A(e);
        if (null != e.users) for (let t of e.users) (t.id in S && G(t)) || (S[t.id] = new f.A(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) e.rawRecipients?.forEach((e) => D(e, !1));
    }
    getUserStoreVersion() {
        return N;
    }
    getUser(e) {
        if (null != e) return S[e];
    }
    getUsers() {
        return S;
    }
    forEach(e) {
        for (let t in S) if (!1 === e(S[t])) break;
    }
    findByTag(e, t) {
        for (let n in S) {
            let i = S[n];
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
        for (let t in S) {
            let i = S[t];
            e(i) && n.push(i);
        }
        return (t && n.sort((e, t) => (e.username > t.username ? 1 : e.username < t.username ? -1 : 0)), n);
    }
    getCurrentUser() {
        return S[p.default.getId()];
    }
}
let eH = new eV();
