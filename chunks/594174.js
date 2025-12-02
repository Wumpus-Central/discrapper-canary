n.r(t),
    n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: () => S,
        default: () => ek,
        mergeUser: () => P,
        transformUser: () => C,
        users: () => O,
    }),
    n(388685),
    n(997841),
    n(825670),
    n(539854),
    n(642613);
var r = n(392711),
    i = n(95015),
    a = n(911969),
    o = n(2572),
    s = n(864106),
    l = n(579407),
    c = n(131016),
    u = n(602210),
    d = n(502087),
    f = n(921383),
    p = n(168232),
    _ = n(598077),
    m = n(823379),
    h = n(314897),
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
    S = "47835198259242069";
function I(e, t, n) {
    let r = O[e];
    if (null == r) return !1;
    let i = r;
    (i = null == n ? r.removeGuildAvatarHash(t) : r.addGuildAvatarHash(t, n)), (O[r.id] = i);
    let a = r !== i;
    return a && v++, a;
}
function T(e, t) {
    let n = O[e];
    return (
        !(null == n || (0, u.d)(n.primaryGuild, t.primary_guild)) &&
        (null == n.primaryGuild || null != t.primary_guild) &&
        ((n.primaryGuild = (0, u.l)(t.primary_guild)), (O[n.id] = n), v++, !0)
    );
}
function A(e, t) {
    switch (!0) {
        case null == e.primaryGuild && null == t.primary_guild:
            break;
        case null != e.primaryGuild && null == t.primary_guild:
        case (0, u.d)(e.primaryGuild, t.primary_guild):
            t.primary_guild = e.primaryGuild;
            break;
        default:
            t.primary_guild = (0, u.l)(t.primary_guild);
    }
    return t;
}
function C(e) {
    let t = e.mfa_enabled;
    null != t && ((e.mfaEnabled = t), delete e.mfa_enabled);
    let n = (0, p.G)(e.premium_type);
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
    void 0 !== _ && ((e.avatarDecorationData = (0, s.FG)(_)), delete e.avatar_decoration_data);
    let m = e.collectibles;
    void 0 !== m && (delete e.collectibles, (e.collectibles = (0, l.Xm)(m)));
    let h = e.global_name;
    void 0 !== h && ((e.globalName = h), delete e.global_name);
    let g = e.primary_guild;
    void 0 !== g && (e.primary_guild = (0, u.l)(g));
    let E = e.display_name_styles;
    void 0 !== E && ((e.displayNameStyles = (0, c.bN)(E)), delete e.display_name_styles);
    let b = e.premium_state;
    return void 0 !== b && ((e.premiumState = (0, f.C)(b)), delete e.premium_state), e;
}
function N(e) {
    return e.id !== h.default.getId();
}
function P(e) {
    let t,
        n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = O[e.id],
        i = void 0 !== e.id && e.id === h.default.getId();
    if (null == r)
        void 0 !== (t = (r = new _.Z(e)).premiumType) && i && (r.premiumType = w((0, p.QI)(r), r.premiumType));
    else if (n) {
        var a;
        let n = C(e);
        void 0 !== (t = null != (a = n.premium_type) ? a : n.premiumType) && i && (0, p.VR)(n) && (n = R(n)),
            (n = A(r, n)),
            (r = r.merge(n));
    }
    (0, p.jX)((0, p.QI)(r), t, r.premiumType);
    let o = O[e.id] !== r;
    return (O[e.id] = r), o && v++, o;
}
function R(e) {
    var t;
    let n = null != (t = e.premium_type) ? t : e.premiumType,
        r = w((0, p.VR)(e), n);
    return void 0 !== e.premiumType ? (e.premiumType = r) : void 0 !== e.premium_type && (e.premium_type = r), e;
}
function w(e, t) {
    if (!e) return t;
    let n = d.Z.getPremiumTypeOverride(),
        r = d.Z.getPremiumTypeActual();
    return n === b.F_ ? r : n;
}
function D(e, t) {
    if ((null == e ? void 0 : e.users) == null) return !1;
    for (let n in e.users) {
        let r = e.users[n];
        N(r) && P(r, t);
    }
}
function x(e, t) {
    var n, r, i, a, o;
    null != e.author && "SENDING" !== e.state && N(e.author) && P(e.author, t),
        null == (n = e.mentions) ||
            n.forEach((e) => {
                N(e) && P(e, t);
            }),
        (null == (r = e.interaction) ? void 0 : r.user) != null &&
            N(null == (i = e.interaction) ? void 0 : i.user) &&
            P(e.interaction.user, t),
        null == (a = e.attachments) ||
            a.forEach((e) => {
                var n;
                null == (n = e.clip_participants) ||
                    n.forEach((e) => {
                        N(e) && P(e, t);
                    });
            }),
        D(e.resolved, t),
        (null == (o = e.interaction_metadata) ? void 0 : o.user) != null &&
            N(e.interaction_metadata.user) &&
            P(e.interaction_metadata.user, t),
        null != e.message_snapshots &&
            e.message_snapshots.forEach((e) => {
                var n, r, i, a, o, s, l;
                (null == (r = e.moderator_report) || null == (n = r.reported_member) ? void 0 : n.user) != null &&
                    P(e.moderator_report.reported_member.user, t),
                    (null == (a = e.moderator_report) || null == (i = a.reporting_member) ? void 0 : i.user) != null &&
                        P(e.moderator_report.reporting_member.user, t),
                    Object.values(
                        null != (l = null == (s = e.message) || null == (o = s.resolved) ? void 0 : o.users) ? l : {},
                    ).forEach((e) => {
                        N(e) && P(e, t);
                    });
            });
}
function L(e) {
    let { user: t, users: n, guilds: r } = e;
    delete t.premium,
        delete t.banner_color,
        P(t),
        n.forEach((e) => {
            P(e);
        }),
        r.forEach((e) => {
            e.members.forEach((t) => {
                I(t.user.id, e.id, t.avatar), T(t.user.id, t.user);
            });
        }),
        null != O[h.default.getId()] &&
            (O[S] = new _.Z({
                id: S,
                username: "Wumpus",
                discriminator: "0",
                globalName: "Wumpus",
                avatar: "c1f86b313385cb97985f1b118851c28c",
            }));
}
function j(e) {
    let { guilds: t, lazyPrivateChannels: n } = e;
    t.forEach((e) => {
        e.members.forEach((t) => {
            I(t.user.id, e.id, t.avatar), T(t.user.id, t.user);
        });
    }),
        null == n ||
            n.forEach((e) => {
                var t;
                null == (t = e.rawRecipients) ||
                    t.forEach((e) => {
                        P(e);
                    });
            });
}
function M(e) {
    return !("incomplete" in e);
}
function k(e) {
    if (null != e.users) for (let t of e.users) (t.id in O && M(t)) || (O[t.id] = new _.Z(t));
}
function U(e) {
    let { user: t } = e;
    if (!N(t)) return !1;
    P(t);
}
function G(e) {
    let { userProfile: t } = e;
    if (!N(t.user)) return !1;
    P(t.user);
}
function Z(e) {
    let { user: t } = e;
    P(t);
}
function B(e) {
    let { user: t } = e;
    P(
        {
            id: t.id,
            premiumType: t.premiumType,
        },
        !0,
    );
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
                        null == (t = e.recipients) || t.forEach((e) => P(e)), null != e.recipient && P(e.recipient);
                    }
                });
        }),
        !1
    );
}
function W(e) {
    let { firstMessages: t, owners: n } = e;
    null != t && t.forEach((e) => x(e, !0)), null != n && n.forEach((e) => P(e.user, !0));
}
function K(e) {
    let { threads: t } = e;
    Object.values(t).forEach((e) => {
        let { first_message: t, most_recent_message: n, owner: r } = e;
        null != t && x(t, !0), null != n && x(n, !0), null != r && null != r.user && P(r.user, !0);
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
        P(t);
        let i = null == r ? void 0 : r.avatar;
        null != i && I(t.id, n, i);
    });
}
function X(e) {
    let { items: t } = e;
    t.forEach((e) => {
        null != e.other_user && P(e.other_user);
    });
}
function Q(e) {
    let { item: t } = e;
    null != t.other_user && P(t.other_user);
}
function J(e) {
    let { message: t } = e;
    if ((x(t, !0), null != t.flags && i.yE(t.flags, E.iLy.URGENT))) {
        let e = O[h.default.getId()];
        return (
            null != e &&
            ((O[h.default.getId()] = e.set("flags", i.mB(e.flags, E.xW$.HAS_UNREAD_URGENT_MESSAGES, !0))), !0)
        );
    }
    return !1;
}
function $(e) {
    let {
        channel: { rawRecipients: t },
    } = e;
    return null != t && t.forEach((e) => P(e)), !1;
}
function ee(e) {
    let { channels: t } = e;
    for (let { rawRecipients: e } of t) null != e && e.forEach((e) => P(e));
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
    t.forEach((e) => P(e.user));
}
function ei(e) {
    let { bans: t } = e;
    t.forEach((e) => P(e.user));
}
function ea(e) {
    return P(e.user);
}
function eo(e) {
    return !!e.isMember && P(e.user);
}
function es(e) {
    let t = P(e.user);
    return I(e.user.id, e.guildId, e.avatar) || t;
}
function el(e) {
    let { ops: t } = e;
    for (let e of t)
        if ("INSERT" === e.op || "UPDATE" === e.op) {
            var n;
            let t = null == (n = e.item.member) ? void 0 : n.user;
            if (null == t) continue;
            T(t.id, t);
        }
    return !1;
}
function ec(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t)
        n =
            e.members.reduce((t, n) => {
                let r = P(n.user);
                return I(n.user.id, e.guildId, n.avatar) || r || t;
            }, !1) || n;
    return n;
}
function eu(e) {
    let t = !1;
    for (let n of e.members) P(n.user) && (t = !0), I(n.user.id, e.guildId, n.avatar) && (t = !0);
    return t;
}
function ed(e) {
    var t;
    let n = !1;
    for (let r of null != (t = e.users) ? t : []) Object.hasOwn(O, r.id) || (n = P(r) || n);
    return n;
}
function ef(e) {
    let { members: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.member && P(e.member.user) && (n = !0), null != e.presence && P(e.presence.user) && (n = !0);
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
                null != e.member && P(e.member.user) && (n = !0), null != e.presence && P(e.presence.user) && (n = !0);
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
        n !== h.default.getId() &&
            P({
                id: n,
                username: r,
                avatar: i,
                discriminator: a,
                bot: o,
            }),
            I(n, t.id, s);
    });
}
function em(e) {
    return P(e.relationship.user);
}
function eh(e) {
    return P(e.gameRelationship.user);
}
function eg(e) {
    let { relationships: t } = e;
    return t.reduce((e, t) => P(t.user) || e, !1);
}
function eE(e) {
    return P(e.suggestion.suggested_user);
}
function eb(e) {
    let { suggestions: t } = e;
    return t.reduce((e, t) => P(t.suggested_user) || e, !1);
}
function ey(e) {
    let { users: t } = e;
    t.forEach((e) => {
        null == O[e.id] && (O[e.id] = new _.Z(e));
    });
}
function eO(e) {
    let { giftCode: t } = e;
    return null != t.user && P(t.user);
}
function ev(e) {
    let { appliedBoosts: t } = e;
    t.forEach((e) => {
        let { user: t } = e;
        null != t && P(t);
    });
}
function eS(e) {
    let { request: t } = e,
        { user: n, actioned_by_user: r } = t,
        i = !1;
    return null != n && (i = i || P(n)), null != r && (i = i || P(r)), i;
}
function eI(e) {
    let { users: t, familyCenterTeenActivity: n } = e,
        { users: r } = n;
    return [...t, ...r].reduce((e, t) => P(t) || e, !1);
}
function eT(e) {
    let { users: t } = e;
    return t.reduce((e, t) => P(t) || e, !1);
}
function eA(e) {
    let { users: t } = e;
    return t.reduce((e, t) => P(t) || e, !1);
}
function eC(e) {
    let { familyCenterTeenActivity: t } = e;
    if (void 0 === t) return;
    let { users: n } = t;
    return n.reduce((e, t) => P(t) || e, !1);
}
function eN(e) {
    let { familyCenterTeenActivity: t } = e,
        { users: n } = t;
    return n.reduce((e, t) => P(t) || e, !1);
}
function eP(e) {
    let { members: t } = e,
        n = h.default.getId();
    return t.reduce((e, t) => (t.member.user.id === n ? e : P(t.member.user) || e), !1);
}
function eR(e) {
    let { messageItems: t } = e;
    t.forEach((e) => {
        null != e.message && x(e.message, !0);
    }, !1);
}
function ew(e) {
    let { participants: t } = e;
    return t.reduce((e, t) => ((0, o.Z)(t) && P(t.member.user)) || e, !1);
}
function eD(e) {
    let {} = e,
        t = O[h.default.getId()];
    return null != t && ((O[h.default.getId()] = t.set("ageVerificationStatus", a.F$.CLIENT_ONLY_PENDING)), !0);
}
function ex(e) {
    let { status: t } = e,
        n = O[h.default.getId()];
    return (
        null != n &&
        n.ageVerificationStatus === a.F$.CLIENT_ONLY_PENDING &&
        ((O[h.default.getId()] = n.set("ageVerificationStatus", t)), !0)
    );
}
function eL(e) {
    let { resolved: t } = e;
    return D(t, !0);
}
function ej(e) {
    let { stickers: t } = e;
    return t.reduce((e, t) => (null != t.user && P(t.user)) || e, !1);
}
class eM extends g.Z {
    initialize() {
        this.waitFor(h.default, d.Z);
    }
    takeSnapshot() {
        let e = this.getCurrentUser();
        return {
            version: eM.LATEST_SNAPSHOT_VERSION,
            data: { users: [e].filter(m.lm) },
        };
    }
    handleLoadCache(e) {
        let t = this.readSnapshot(eM.LATEST_SNAPSHOT_VERSION);
        if (null != t) for (let e of t.users) O[e.id] = new _.Z(e);
        if (null != e.users) for (let t of e.users) (t.id in O && M(t)) || (O[t.id] = new _.Z(t));
        for (let t of [e.privateChannels, e.initialGuildChannels])
            for (let e of t) {
                var n;
                null == (n = e.rawRecipients) || n.forEach((e) => P(e, !1));
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
        return O[h.default.getId()];
    }
    constructor() {
        super({
            CONNECTION_OPEN: L,
            CONNECTION_OPEN_SUPPLEMENTAL: j,
            UPDATE_CLIENT_PREMIUM_TYPE: B,
            OVERLAY_INITIALIZE: k,
            CACHE_LOADED: (e) => this.handleLoadCache(e),
            USER_UPDATE: U,
            USER_PROFILE_FETCH_SUCCESS: G,
            CURRENT_USER_UPDATE: Z,
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
            GUILD_CREATE: e_,
            GUILD_BAN_ADD: ea,
            GUILD_BAN_REMOVE: ea,
            CHANNEL_RECIPIENT_ADD: eo,
            CHANNEL_RECIPIENT_REMOVE: eo,
            GUILD_STICKERS_FETCH_SUCCESS: ej,
            GUILD_JOIN_REQUEST_CREATE: eS,
            GUILD_JOIN_REQUEST_UPDATE: eS,
            GUILD_MEMBER_ADD: es,
            GUILD_MEMBER_UPDATE: es,
            GUILD_MEMBERS_CHUNK_BATCH: ec,
            GUILD_MEMBER_LIST_UPDATE: el,
            THREAD_MEMBER_LIST_UPDATE: ef,
            THREAD_MEMBERS_UPDATE: ep,
            CHANNEL_CREATE: $,
            CHANNEL_UPDATES: ee,
            RELATIONSHIP_ADD: em,
            GAME_RELATIONSHIP_ADD: eh,
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
            FAMILY_CENTER_INITIAL_LOAD: eI,
            FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eT,
            FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eC,
            FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eN,
            FAMILY_CENTER_REQUEST_LINK_SUCCESS: eA,
            MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eP,
            LOAD_ICYMI_HYDRATED: eR,
            EMBEDDED_ACTIVITY_UPDATE_V2: ew,
            INITIATE_AGE_VERIFICATION: eD,
            CLOSE_AGE_VERIFICATION_MODAL: ex,
            INTERACTION_MODAL_CREATE: eL,
        });
    }
}
y(eM, "displayName", "UserStore"), y(eM, "LATEST_SNAPSHOT_VERSION", 1);
let ek = new eM();
