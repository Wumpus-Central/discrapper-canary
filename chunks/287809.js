n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => A,
        default: () => ek,
        mergeUser: () => w,
        transformUser: () => C,
        users: () => O,
    }),
    n(896048),
    n(938796),
    n(205816),
    n(321073),
    n(638769);
var r = n(735438),
    i = n(665260),
    a = n(155718),
    o = n(807605),
    s = n(507698),
    l = n(628856),
    c = n(945096),
    u = n(47537),
    d = n(683760),
    f = n(392737),
    p = n(572009),
    _ = n(427157),
    h = n(403362),
    m = n(961350),
    g = n(536802),
    E = n(652215),
    y = n(788868);

function b(e, t, n) {
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
    A = "47835198259242069";

function I(e, t, n) {
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
        !(null == n || (0, u.D)(n.primaryGuild, t.primary_guild)) &&
        (null == n.primaryGuild || null != t.primary_guild) &&
        ((n.primaryGuild = (0, u.j)(t.primary_guild)), (O[n.id] = n), v++, !0)
    );
}

function T(e, t) {
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
}

function C(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, p.nq)(e.premium_type);
    void 0 !== n && ((e.premiumType = n), delete e.premium_type);
    let r = e.nsfw_allowed;
    null != r && ((e.nsfwAllowed = r), delete e.nsfw_allowed);
    let i = e.age_verification_status;
    null != i && ((e.ageVerificationStatus = i), delete e.age_verification_status);
    let a = e.public_flags;
    null != a && ((e.publicFlags = a), delete e.public_flags);
    let o = e.purchased_flags;
    void 0 !== o && ((e.purchasedFlags = o), delete e.purchased_flags);
    let d = e.premium_usage_flags;
    void 0 !== d && ((e.premiumUsageFlags = d), delete e.premium_usage_flags),
        null === e.banner_color && delete e.banner_color;
    let _ = e.avatar_decoration_data;
    void 0 !== _ && ((e.avatarDecorationData = (0, s.Xq)(_)), delete e.avatar_decoration_data);
    let h = e.collectibles;
    void 0 !== h && (delete e.collectibles, (e.collectibles = (0, l.t)(h)));
    let m = e.global_name;
    void 0 !== m && ((e.globalName = m), delete e.global_name);
    let g = e.primary_guild;
    void 0 !== g && (e.primary_guild = (0, u.j)(g));
    let E = e.display_name_styles;
    void 0 !== E && ((e.displayNameStyles = (0, c.mT)(E)), delete e.display_name_styles);
    let y = e.premium_state;
    void 0 !== y && ((e.premiumState = (0, f.f)(y)), delete e.premium_state);
    let b = e.app_transaction_ids;
    return void 0 !== b && ((e.appTransactionIds = b), delete e.app_transaction_ids), e;
}

function N(e) {
    return e.id !== m.default.getId();
}

function w(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = O[e.id],
        i = void 0 !== e.id && e.id === m.default.getId();
    if (null == r)
        void 0 !== (t = (r = new _.A(e)).premiumType) && i && (r.premiumType = P((0, p.I9)(r), r.premiumType));
    else if (n) {
        var a;
        let n = C(e);
        void 0 !== (t = null != (a = n.premium_type) ? a : n.premiumType) && i && (0, p._D)(n) && (n = R(n)),
            (n = T(r, n)),
            (r = r.merge(n));
    }
    (0, p.gX)((0, p.I9)(r), t, r.premiumType);
    let o = O[e.id] !== r;
    return (O[e.id] = r), o && v++, o;
}

function R(e) {
    var t;
    let n = null != (t = e.premium_type) ? t : e.premiumType,
        r = P((0, p._D)(e), n);
    return void 0 !== e.premiumType ? (e.premiumType = r) : void 0 !== e.premium_type && (e.premium_type = r), e;
}

function P(e, t) {
    if (!e) return t;
    let n = d.A.getPremiumTypeOverride(),
        r = d.A.getPremiumTypeActual();
    return n === y.$I ? r : n;
}

function D(e, t) {
    if ((null == e ? void 0 : e.users) == null) return !1;
    for (let n in e.users) {
        let r = e.users[n];
        N(r) && w(r, t);
    }
}

function L(e, t) {
    var n, r, i, a, o;
    null != e.author && "SENDING" !== e.state && N(e.author) && w(e.author, t),
        null == (n = e.mentions) ||
            n.forEach((e) => {
                N(e) && w(e, t);
            }),
        (null == (r = e.interaction) ? void 0 : r.user) != null &&
            N(null == (i = e.interaction) ? void 0 : i.user) &&
            w(e.interaction.user, t),
        null == (a = e.attachments) ||
            a.forEach((e) => {
                var n;
                null == (n = e.clip_participants) ||
                    n.forEach((e) => {
                        N(e) && w(e, t);
                    });
            }),
        D(e.resolved, t),
        (null == (o = e.interaction_metadata) ? void 0 : o.user) != null &&
            N(e.interaction_metadata.user) &&
            w(e.interaction_metadata.user, t),
        null != e.message_snapshots &&
            e.message_snapshots.forEach((e) => {
                var n, r, i, a, o, s, l;
                (null == (i = e.moderator_report) || null == (r = i.reported_member) ? void 0 : r.user) != null &&
                    w(e.moderator_report.reported_member.user, t),
                    (null == (o = e.moderator_report) || null == (a = o.reporting_member) ? void 0 : a.user) != null &&
                        w(e.moderator_report.reporting_member.user, t),
                    Object.values(
                        null != (n = null == (l = e.message) || null == (s = l.resolved) ? void 0 : s.users) ? n : {},
                    ).forEach((e) => {
                        N(e) && w(e, t);
                    });
            });
}

function x(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        w(t),
        n.forEach((e) => {
            w(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                I(t.user.id, e.id, t.avatar), S(t.user.id, t.user);
            });
        }),
        null != O[m.default.getId()] &&
            (O[A] = new _.A({
                id: A,
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
            I(t.user.id, e.id, t.avatar), S(t.user.id, t.user);
        });
    }),
        null == n ||
            n.forEach((e) => {
                var t;
                null == (t = e.rawRecipients) ||
                    t.forEach((e) => {
                        w(e);
                    });
            });
}

function j(e) {
    return !("incomplete" in e);
}

function k(e) {
    if (null != e.users) for (let t of e.users) (t.id in O && j(t)) || (O[t.id] = new _.A(t));
}

function U(e) {
    let { user: t } = e;
    if (!N(t)) return !1;
    w(t);
}

function G(e) {
    let { userProfile: t } = e;
    if (!N(t.user)) return !1;
    w(t.user);
}

function F(e) {
    let { user: t } = e;
    w(t);
}

function V(e) {
    let { user: t } = e;
    w(
        {
            id: t.id,
            premiumType: t.premiumType,
        },
        !0,
    );
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
    return null == t || t.forEach((e) => L(e, !1)), !1;
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
                    if (e.type === E.rbe.DM || e.type === E.rbe.GROUP_DM) {
                        var t;
                        null == (t = e.recipients) || t.forEach((e) => w(e)), null != e.recipient && w(e.recipient);
                    }
                });
        }),
        !1
    );
}

function K(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => L(e, !0)), null != n && n.forEach((e) => w(e.user, !0));
}

function z(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && L(t, !0), null != n && L(n, !0), null != r && null != r.user && w(r.user, !0);
    });
}

function q(e) {
    let { supplementalData: t } = e;
    Object.values(t).forEach((e) => {
        let { message_preview: t } = e;
        null != t && L(t, !0);
    });
}

function Z(e) {
    let { guildScheduledEventUsers: t, guildId: n } = e;
    t.forEach((e) => {
        let { user: t, member: r } = e;
        if (null == t) return;
        w(t);
        let i = null == r ? void 0 : r.avatar;
        null != i && I(t.id, n, i);
    });
}

function Q(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && w(e.other_user);
    });
}

function X(e) {
    let { item: t } = e;
    null != t.other_user && w(t.other_user);
}

function J(e) {
    let { message: t } = e;
    if ((L(t, !0), null != t.flags && i.Lt(t.flags, E.pr7.URGENT))) {
        let e = O[m.default.getId()];
        return (
            null != e &&
            ((O[m.default.getId()] = e.set("flags", i.lA(e.flags, E.nhx.HAS_UNREAD_URGENT_MESSAGES, !0))), !0)
        );
    }
    return !1;
}

function $(e) {
    let {
        channel: { rawRecipients: t },
    } = e;
    return null != t && t.forEach((e) => w(e)), !1;
}

function ee(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => w(e));
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
    t.forEach((e) => w(e.user));
}

function ei(e) {
    let { bans: t } = e;
    t.forEach((e) => w(e.user));
}

function ea(e) {
    return w(e.user);
}

function eo(e) {
    return !!e.isMember && w(e.user);
}

function es(e) {
    let t = w(e.user);
    return I(e.user.id, e.guildId, e.avatar) || t;
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
                let r = w(n.user);
                return I(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}

function eu(e) {
    let t = !1;
    for (let n of e.members) w(n.user) && (t = !0), I(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}

function ed(e) {
    var t;
    let n = !1;
    for (let r of null != (t = e.users) ? t : []) Object.hasOwn(O, r.id) || (n = w(r) || n);
    return n;
}

function ef(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && w(e.member.user) && (n = !0), null != e.presence && w(e.presence.user) && (n = !0);
        }),
        n
    );
}

function ep(e) {
    let { addedMembers: t } = e,
        n = !1;
    return (
        null == t ||
            t.forEach((e) => {
                null != e.member && w(e.member.user) && (n = !0), null != e.presence && w(e.presence.user) && (n = !0);
            }),
        n
    );
}

function e_(e) {
    let { guild: t } = e;
    t.members.forEach((e) => {
        let {
            user: { id: n, username: r, avatar: i, discriminator: a, bot: o },
            avatar: s,
        } = e;
        n !== m.default.getId() &&
            w({
                id: n,
                username: r,
                avatar: i,
                discriminator: a,
                bot: o,
            }),
            I(n, t.id, s);
    });
}

function eh(e) {
    return w(e.relationship.user);
}

function em(e) {
    return w(e.gameRelationship.user);
}

function eg(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => w(t.user) || e, !1);
}

function eE(e) {
    return w(e.suggestion.suggested_user);
}

function ey(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => w(t.suggested_user) || e, !1);
}

function eb(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == O[e.id] && (O[e.id] = new _.A(e));
    });
}

function eO(e) {
    let { giftCode: t } = e;
    return null != t.user && w(t.user);
}

function ev(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && w(t);
    });
}

function eA(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = i || w(n)), null != r && (i = i || w(r)), i;
}

function eI(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => w(t) || e, !1);
}

function eS(e) {
    let { users: t } = e;
    return t.reduce((e, t) => w(t) || e, !1);
}

function eT(e) {
    let { users: t } = e;
    return t.reduce((e, t) => w(t) || e, !1);
}

function eC(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => w(t) || e, !1);
}

function eN(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => w(t) || e, !1);
}

function ew(e) {
    let { members: t } = e,
        n = m.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : w(t.member.user) || e), !1);
}

function eR(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && L(e.message, !0);
    }, !1);
}

function eP(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, o.A)(t) && w(t.member.user)) || e, !1);
}

function eD(e) {
    let {} = e,
        t = O[m.default.getId()];
    return null != t && ((O[m.default.getId()] = t.set("ageVerificationStatus", a.Tk.CLIENT_ONLY_PENDING)), !0);
}

function eL(e) {
    let { status: t } = e,
        n = O[m.default.getId()];
    return (
        null != n &&
        n.ageVerificationStatus === a.Tk.CLIENT_ONLY_PENDING &&
        ((O[m.default.getId()] = n.set("ageVerificationStatus", t)), !0)
    );
}

function ex(e) {
    let { resolved: t } = e;
    return D(t, !0);
}

function eM(e) {
    let { stickers: t } = e;
    return t.reduce((e, t) => (null != t.user && w(t.user)) || e, !1);
}
class ej extends g.A {
    initialize() {
        this.waitFor(m.default, d.A);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: ej.LATEST_SNAPSHOT_VERSION,
            data: {
                users: [e].filter(h.Vq),
            },
        };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(ej.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) O[e.id] = new _.A(e);
        if (null != e.users) for (let t of e.users) (t.id in O && j(t)) || (O[t.id] = new _.A(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) {
                var n;
                null == (n = e.rawRecipients) || n.forEach((e) => w(e, !1));
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
            CONNECTION_OPEN: x,
            CONNECTION_OPEN_SUPPLEMENTAL: M,
            UPDATE_CLIENT_PREMIUM_TYPE: V,
            OVERLAY_INITIALIZE: k,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: U,
            USER_PROFILE_FETCH_SUCCESS: G,
            CURRENT_USER_UPDATE: F,
            PRESENCE_UPDATES: en,
            SEARCH_MESSAGES_SUCCESS: W,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: W,
            LOAD_MESSAGES_SUCCESS: B,
            LOAD_MESSAGES_AROUND_SUCCESS: B,
            LOAD_RECENT_MENTIONS_SUCCESS: B,
            LOAD_PINNED_MESSAGES_SUCCESS: H,
            THREAD_LIST_SYNC: Y,
            MESSAGE_CREATE: J,
            MESSAGE_UPDATE: J,
            GUILD_SETTINGS_LOADED_BANS: er,
            GUILD_SETTINGS_LOADED_BANS_BATCH: ei,
            GUILD_CREATE: e_,
            GUILD_BAN_ADD: ea,
            GUILD_BAN_REMOVE: ea,
            CHANNEL_RECIPIENT_ADD: eo,
            CHANNEL_RECIPIENT_REMOVE: eo,
            GUILD_STICKERS_FETCH_SUCCESS: eM,
            GUILD_JOIN_REQUEST_CREATE: eA,
            GUILD_JOIN_REQUEST_UPDATE: eA,
            GUILD_MEMBER_ADD: es,
            GUILD_MEMBER_UPDATE: es,
            GUILD_MEMBERS_CHUNK_BATCH: ec,
            GUILD_MEMBER_LIST_UPDATE: el,
            THREAD_MEMBER_LIST_UPDATE: ef,
            THREAD_MEMBERS_UPDATE: ep,
            CHANNEL_CREATE: $,
            CHANNEL_UPDATES: ee,
            RELATIONSHIP_ADD: eh,
            GAME_RELATIONSHIP_ADD: em,
            LOAD_RELATIONSHIPS_SUCCESS: eg,
            FRIEND_SUGGESTION_CREATE: eE,
            LOAD_FRIEND_SUGGESTIONS_SUCCESS: ey,
            AUDIT_LOG_FETCH_SUCCESS: eb,
            AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eb,
            GIFT_CODE_RESOLVE_SUCCESS: eO,
            GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: ev,
            LOAD_THREADS_SUCCESS: K,
            LOAD_ARCHIVED_THREADS_SUCCESS: K,
            LOAD_FORUM_POSTS: z,
            GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: Z,
            LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: Q,
            NOTIFICATION_CENTER_ITEM_CREATE: X,
            LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: q,
            PASSIVE_UPDATE_V2: eu,
            LOCAL_MESSAGES_LOADED: ed,
            FAMILY_CENTER_INITIAL_LOAD: eI,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eS,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eC,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eN,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eT,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: ew,
            LOAD_ICYMI_HYDRATED: eR,
            EMBEDDED_ACTIVITY_UPDATE_V2: eP,
            INITIATE_AGE_VERIFICATION: eD,
            CLOSE_AGE_VERIFICATION_MODAL: eL,
            INTERACTION_MODAL_CREATE: ex,
        });
    }
}
b(ej, "displayName", "UserStore"), b(ej, "LATEST_SNAPSHOT_VERSION", 1);
let ek = new ej();
