"use strict";
let r, i, a, s, o, l, u, c, d, _;
n.d(t, { A: () => e8 }), n(938796);
var f = n(735438),
    h = n.n(f),
    p = n(989349),
    g = n.n(p),
    E = n(311907),
    A = n(562465),
    I = n(506774),
    T = n(73153),
    y = n(867051),
    S = n(903223),
    v = n(837011),
    C = n(95701),
    b = n(260509),
    N = n(671759),
    R = n(427157),
    O = n(71393),
    D = n(287809),
    L = n(860689),
    w = n(661191),
    x = n(794967),
    P = n(310527),
    M = n(595818),
    k = n(652215),
    U = n(324580),
    G = n(124759);
let F = !0,
    V = [
        "name",
        "description",
        "icon",
        "splash",
        "banner",
        "homeHeader",
        "afkChannelId",
        "afkTimeout",
        "systemChannelId",
        "verificationLevel",
        "defaultMessageNotifications",
        "explicitContentFilter",
        "features",
        "systemChannelFlags",
        "preferredLocale",
        "rulesChannelId",
        "safetyAlertsChannelId",
        "ownerConfiguredContentLevel",
        "discoverySplash",
        "publicUpdatesChannelId",
        "premiumProgressBarEnabled",
    ],
    B = [
        "brandColorPrimary",
        "description",
        "icon",
        "name",
        "traits",
        "visibility",
        "gameApplicationIds",
        "customBanner",
        "tag",
        "badge",
        "badgeColorPrimary",
        "badgeColorSecondary",
    ],
    j = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    H = !1,
    Y = k.XlH.CLOSED,
    W = {},
    K = null,
    $ = !1,
    z = !1,
    q = !1,
    X = null,
    Z = null,
    Q = null,
    J = 0,
    ee = k.EkJ.NONE,
    et = null,
    en = {
        primaryCategoryId: U.ig,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: F,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: "",
    },
    er = !1,
    ei = en,
    ea = en,
    es = null,
    eo = 0,
    el = null,
    eu = null,
    ec = null;
function ed(e) {
    if (null == o || null == s || s.id !== e) return !1;
    let t = O.A.getGuild(e);
    return null != t && (s === o ? (o = s = t) : (s = t), !0);
}
function e_(e) {
    (H = !0), ef(e);
}
function ef(e) {
    let { guildId: t, section: n, subsection: i, location: a } = e,
        d = O.A.getGuild(t);
    if (null == d) return eh();
    let f = (0, S.$k)(d, { location: "guild-settings" });
    d = (0, y.hZ)(d, "premiumProgressBarEnabled", f);
    let h = v.A.getProfile(t);
    (s = o = d),
        (l = u = h),
        (q = z),
        (Z = X),
        (Y = k.XlH.OPEN),
        (W = {}),
        (K = null),
        (c = w.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (ee = o.mfaLevel),
        (ea = ei),
        (_ = null),
        (et = a),
        em({ section: n ?? r ?? (0, M.x)(), subsection: i ?? null });
}
function eh() {
    (H = !1),
        (Y = k.XlH.CLOSED),
        (s = o = null),
        ($ = !1),
        (q = !1),
        (Z = null),
        (Q = null),
        (J = 0),
        (es = null),
        (eu = null),
        (ec = null),
        (r = null),
        (i = null),
        (a = null),
        (ee = k.EkJ.NONE),
        (d = void 0);
}
function ep(e) {
    let { state: t } = e;
    return (d = t), !1;
}
function em(e) {
    if (null == o) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === k.BEX.INSTANT_INVITES || r === k.BEX.INVITES))
        A.Bo.get({ url: k.Rsh.GUILD_INSTANT_INVITES(o.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            T.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (r === k.BEX.INTEGRATIONS || r === k.BEX.ROLES) {
        if (((c = null), t !== e.section)) return eY(e);
    } else
        r === k.BEX.MEMBERS
            ? (c = (0, b.af)(o))
            : r === k.BEX.VANITY_URL
              ? (0, P.Je)(o.id)
              : r === k.BEX.SAFETY &&
                T.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == i ? k.nd0.SAFETY_OVERVIEW : i,
                });
}
function eg(e) {
    a = e.searchQuery;
}
function eE(e) {
    let { guildId: t } = e;
    W = {};
    let n = O.A.getGuild(t);
    if (null == n) return;
    let r = (0, S.$k)(n, { location: "guild-settings" });
    s = o = (0, y.hZ)(n, "premiumProgressBarEnabled", r);
}
function eA() {
    (Y = k.XlH.SUBMITTING), (W = {});
}
function eI() {
    Y = k.XlH.OPEN;
}
function eT(e) {
    (Y = k.XlH.OPEN), (r = r ?? (0, M.x)()), (i = null), (W = e.errors ?? {});
}
function ey() {
    let e = o;
    if (null == e) return !1;
    V.some((t) => e[t] !== s[t]) || (o = s);
}
function eS(e) {
    if (null == o) return !1;
    V.forEach((t) => {
        null != o && e.hasOwnProperty(t) && (o = (0, y.hZ)(o, t, e[t] ?? null));
    }),
        ey();
}
function ev(e) {
    let { guildId: t } = e;
    if (null == u || null == o || o.id !== t) return !1;
    B.forEach((t) => {
        if (null != u && e.hasOwnProperty(t)) {
            let n = e[t];
            void 0 !== n && (u = { ...u, [t]: n });
        }
    });
}
function eC(e) {
    return new N.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new R.A(e.inviter) : null,
        channel: (0, C.OY)(e.channel),
        guild: null != e.guild ? (0, L.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: g()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function eb(e) {
    eu = e.invites.reduce((e, t) => ((e[t.code] = eC(t)), e), {});
}
function eN(e) {
    (eu = { ...eu }), delete eu[e.code];
}
function eR(e) {
    eu = { ...eu, [e.invite.code]: eC(e.invite) };
}
function eO(e) {
    (es = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), eo++;
}
function eD(e) {
    let { bans: t, guildId: n } = e;
    (el !== n || null == es) && ((el = n), (es = new Map())),
        (es = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), es)),
        eo++;
}
function eL(e) {
    let { user: t, guildId: n } = e;
    if (null == es || null == o || o.id !== n) return !1;
    es.set(t.id, { user: t, reason: null }), eo++;
}
function ew(e) {
    let { user: t, guildId: n } = e;
    if (null == es || null == o || o.id !== n) return !1;
    es.delete(t.id), eo++;
}
function ex(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    {
        let e = O.A.getGuild(o.id);
        if (null == e) return !1;
        if (((l = v.A.getProfile(o.id)), r !== k.BEX.PROFILE && r !== k.BEX.TAG && (u = l), r === k.BEX.PROFILE)) {
            (s = e), (o = e);
            return;
        }
        let t = (s = e),
            n = { ...o };
        V.forEach((r) => {
            if (
                !j.has(r) &&
                (("rulesChannelId" !== r && "publicUpdatesChannelId" !== r) || n[r] !== G.SP) &&
                "features" !== r
            ) {
                if ("ownerConfiguredContentLevel" === r) {
                    t = (0, y.hZ)(t, r, e[r]);
                    return;
                }
                t = (0, y.hZ)(t, r, n[r]);
            }
        }),
            (o = t);
    }
}
function eP(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    eh();
}
function eM(e) {
    let { roleId: t } = e;
    c = t ?? null;
}
function ek(e) {
    let { guildId: t } = e;
    if (!ed(t)) return !1;
}
function eU(e) {
    let { guildId: t } = e;
    if (!ed(t)) return !1;
}
function eG(e) {
    let { guildId: t, roleId: n } = e;
    if (!ed(t)) return !1;
    c === n && (c = null);
}
function eF(e) {
    ($ = !0), (z = q = e.enabled), (X = Z = e.channelId);
}
function eV(e) {
    let { guildId: t, enabled: n, channelId: r } = e;
    if (null == o || o.id !== t) return !1;
    (q = n), (Z = r);
}
function eB(e) {
    (Q = e.code ?? null), (J = e.uses);
}
function ej(e) {
    let { level: t } = e;
    ee = t;
}
function eH(e) {
    ec = e.integrations;
}
function eY(e) {
    if (null == o || Y !== k.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id)) return !1;
    (0, x.c)(o.id);
}
function eW(e) {
    let { guildId: t } = e;
    if (null == o || t !== o.id) return !1;
    o = (0, y.hZ)(o, "features", new Set([...o.features, k.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]));
}
function eK(e) {
    let { guildId: t } = e;
    if (null == o || t !== o.id) return !1;
    o = (0, y.hZ)(
        o,
        "features",
        new Set([...o.features, k.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
    );
}
function e$(e) {
    let { guildId: t, metadata: n } = e;
    null != o &&
        t === o.id &&
        (!1 === er && (er = !0),
        (ea = ei =
            {
                primaryCategoryId: n.primaryCategoryId ?? U.ig,
                secondaryCategoryIds: n.secondaryCategoryIds ?? [],
                keywords: n.keywords ?? [],
                emojiDiscoverabilityEnabled: n.emojiDiscoverabilityEnabled ?? F,
                partnerActionedTimestamp: n.partnerActionedTimestamp ?? null,
                partnerApplicationTimestamp: n.partnerApplicationTimestamp ?? null,
                isPublished: n.isPublished ?? !1,
                reasonsToJoin: n.reasonsToJoin ?? [],
                socialLinks: n.socialLinks ?? [],
                about: n.about ?? "",
            }),
        (W = {}));
}
function ez() {
    ei = ea = en;
}
function eq(e) {
    let { slug: t } = e;
    _ = t;
}
function eX(e) {
    let {} = e;
    _ = null;
}
function eZ(e) {
    let { guildId: t, categoryId: n } = e;
    null != o &&
        t === o.id &&
        ((ea = { ...ea, secondaryCategoryIds: [...ea.secondaryCategoryIds, n] }),
        (ei = { ...ei, secondaryCategoryIds: [...ei.secondaryCategoryIds, n] }));
}
function eQ(e) {
    let t,
        { guildId: n, categoryId: r } = e;
    if (null == o || n !== o.id) return;
    let i = ea.secondaryCategoryIds.indexOf(r);
    -1 !== i && ((t = [...ea.secondaryCategoryIds]).splice(i, 1), (ea = { ...ea, secondaryCategoryIds: t })),
        -1 !== (i = ei.secondaryCategoryIds.indexOf(r)) &&
            ((t = [...ei.secondaryCategoryIds]).splice(i, 1), (ei = { ...ei, secondaryCategoryIds: t }));
}
function eJ(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (W = n ?? {});
}
function e0(e) {
    let {
        guildId: t,
        primaryCategoryId: n,
        keywords: r,
        emojiDiscoverabilityEnabled: i,
        isPublished: a,
        reasonsToJoin: s,
        socialLinks: l,
        about: u,
    } = e;
    null != o &&
        t === o.id &&
        (ea = {
            ...ea,
            primaryCategoryId: null != n ? n : ea.primaryCategoryId,
            keywords: null != r ? r : ea.keywords,
            emojiDiscoverabilityEnabled: i ?? ea.emojiDiscoverabilityEnabled,
            isPublished: a ?? ea.isPublished,
            reasonsToJoin: null != s ? s : ea.reasonsToJoin,
            socialLinks: null != l ? l : ea.socialLinks,
            about: null != u ? u : ea.about,
        });
}
function e1(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (W = n ?? {});
}
function e2(e) {
    let { profile: t } = e;
    t.id === o?.id && (l = u = t);
}
function e3(e) {
    let { guildId: t } = e;
    if (null == o || o.id !== t) return !1;
    K = null;
}
function e6(e) {
    let { profile: t } = e;
    if (u?.id == null || !ed(u.id)) return !1;
    t.id === o?.id && ((l = u = t), (K = null));
}
function e4(e) {
    let { guildId: t, error: n } = e;
    if (null == o || o.id !== t) return !1;
    K = n;
}
function e5(e) {
    let { guildId: t } = e;
    if (u?.id == null || !ed(u.id)) return !1;
    t === o?.id && ((l = u = v.A.getProfile(t)), (K = null));
}
class e7 extends E.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(O.A, v.A, D.default);
    }
    getMetadata() {
        return ea;
    }
    widgetHasChanges() {
        return !1 !== $ && (q !== z || Z !== X);
    }
    hasChanges() {
        return !h().isEqual(o, s) || !h().isEqual(ea, ei) || !h().isEqual(u, l) || this.widgetHasChanges();
    }
    isOpen() {
        return H;
    }
    getSavedRouteState() {
        return d;
    }
    getSection() {
        return r;
    }
    showNotice() {
        return this.hasChanges();
    }
    getGuildId() {
        return null != o ? o.id : null;
    }
    showPublicSuccessModal() {
        return !I.w.get(G.wX);
    }
    getGuild() {
        return o;
    }
    getGuildProfile() {
        return u;
    }
    getWidget() {
        return { enabled: q, channelId: Z };
    }
    isSubmitting() {
        return Y === k.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return er;
    }
    getErrors() {
        return W;
    }
    getError(e) {
        return W[e] ?? null;
    }
    getProfileError() {
        return K;
    }
    getSelectedRoleId() {
        return c;
    }
    getSlug() {
        return _;
    }
    getBans() {
        return [es, eo];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: ec,
            section: r,
            subsection: i,
            errors: W,
            guild: o,
            bans: es,
            bansVersion: eo,
            invites: eu,
            selectedRoleId: c,
            fetchedEmbed: $,
            embedEnabled: q,
            embedChannelId: Z,
            mfaLevel: ee,
            searchQuery: a,
            vanityURLCode: Q,
            vanityURLUses: J,
            originalGuild: s,
            hasChanges: this.hasChanges(),
            guildMetadata: ea,
            analyticsLocation: et,
            isGuildMetadataLoaded: er,
            originalProfile: l,
            profile: u,
        };
    }
}
let e8 = new e7(
    T.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: ef,
              GUILD_SETTINGS_OPEN: e_,
              GUILD_SETTINGS_CLOSE: eh,
              GUILD_SETTINGS_UPDATE: eS,
              GUILD_SETTINGS_PROFILE_UPDATE: ev,
              GUILD_SETTINGS_CANCEL_CHANGES: eE,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: ep,
              GUILD_SETTINGS_SUBMIT: eA,
              GUILD_SETTINGS_SUBMIT_SUCCESS: eI,
              GUILD_SETTINGS_SUBMIT_FAILURE: eT,
              GUILD_SETTINGS_SET_SECTION: em,
              GUILD_SETTINGS_SET_SEARCH_QUERY: eg,
              GUILD_SETTINGS_LOADED_BANS: eO,
              GUILD_SETTINGS_LOADED_BANS_BATCH: eD,
              GUILD_SETTINGS_LOADED_INVITES: eb,
              GUILD_SETTINGS_SET_WIDGET: eF,
              GUILD_SETTINGS_SET_VANITY_URL: eB,
              GUILD_SETTINGS_SET_MFA_SUCCESS: ej,
              GUILD_SETTINGS_ROLE_SELECT: eM,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: eH,
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: eW,
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: eK,
              GUILD_BAN_ADD: eL,
              GUILD_BAN_REMOVE: ew,
              GUILD_ROLE_CREATE: ek,
              GUILD_ROLE_UPDATE: eU,
              GUILD_ROLE_DELETE: eG,
              GUILD_UPDATE: ex,
              GUILD_DELETE: eP,
              GUILD_PROFILE_FETCH_SUCCESS: e2,
              GUILD_PROFILE_UPDATE: e3,
              GUILD_PROFILE_UPDATE_SUCCESS: e6,
              GUILD_PROFILE_UPDATE_FAILURE: e4,
              GUILD_PROFILE_UPDATE_VISIBILITY: e3,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: e5,
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: e4,
              USER_CONNECTIONS_UPDATE: eY,
              GUILD_INTEGRATIONS_UPDATE: eY,
              INSTANT_INVITE_REVOKE_SUCCESS: eN,
              INSTANT_INVITE_CREATE_SUCCESS: eR,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: e$,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: ez,
              GUILD_DISCOVERY_CATEGORY_ADD: eZ,
              GUILD_DISCOVERY_CATEGORY_DELETE: eQ,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: eJ,
              GUILD_UPDATE_DISCOVERY_METADATA: e0,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: e1,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: eq,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: eX,
              GUILD_SETTINGS_WIDGET_UPDATE: eV,
          },
);
