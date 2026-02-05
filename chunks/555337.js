"use strict";
let r, i, a, s, o, l, u, c, d, _;
n.d(t, { A: () => e7 }), n(938796);
var f = n(735438),
    p = n.n(f),
    h = n(989349),
    m = n.n(h),
    g = n(311907),
    E = n(562465),
    A = n(506774),
    I = n(73153),
    T = n(867051),
    y = n(903223),
    S = n(837011),
    v = n(95701),
    C = n(260509),
    b = n(671759),
    N = n(427157),
    R = n(71393),
    O = n(287809),
    D = n(860689),
    L = n(661191),
    w = n(794967),
    x = n(310527),
    P = n(595818),
    M = n(652215),
    k = n(324580),
    U = n(124759);
let G = !0,
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
    F = [
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
    B = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    j = !1,
    H = M.XlH.CLOSED,
    Y = {},
    W = null,
    K = !1,
    z = !1,
    $ = !1,
    q = null,
    Z = null,
    Q = null,
    X = 0,
    J = M.EkJ.NONE,
    ee = null,
    et = {
        primaryCategoryId: k.ig,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: G,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: "",
    },
    en = !1,
    er = et,
    ei = et,
    ea = null,
    es = 0,
    eo = null,
    el = null,
    eu = null;
function ec(e) {
    if (null == o || null == s || s.id !== e) return !1;
    let t = R.A.getGuild(e);
    return null != t && (s === o ? (o = s = t) : (s = t), !0);
}
function ed(e) {
    (j = !0), e_(e);
}
function e_(e) {
    let { guildId: t, section: n, subsection: i, location: a } = e,
        d = R.A.getGuild(t);
    if (null == d) return ef();
    let f = (0, y.$k)(d, { location: "guild-settings" });
    d = (0, T.hZ)(d, "premiumProgressBarEnabled", f);
    let p = S.A.getProfile(t);
    (s = o = d),
        (l = u = p),
        ($ = z),
        (Z = q),
        (H = M.XlH.OPEN),
        (Y = {}),
        (W = null),
        (c = L.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (J = o.mfaLevel),
        (ei = er),
        (_ = null),
        (ee = a),
        eh({ section: n ?? r ?? (0, P.x)(), subsection: i ?? null });
}
function ef() {
    (j = !1),
        (H = M.XlH.CLOSED),
        (s = o = null),
        (K = !1),
        ($ = !1),
        (Z = null),
        (Q = null),
        (X = 0),
        (ea = null),
        (el = null),
        (eu = null),
        (r = null),
        (i = null),
        (a = null),
        (J = M.EkJ.NONE),
        (d = void 0);
}
function ep(e) {
    let { state: t } = e;
    return (d = t), !1;
}
function eh(e) {
    if (null == o) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === M.BEX.INSTANT_INVITES || r === M.BEX.INVITES))
        E.Bo.get({ url: M.Rsh.GUILD_INSTANT_INVITES(o.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            I.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (r === M.BEX.INTEGRATIONS || r === M.BEX.ROLES) {
        if (((c = null), t !== e.section)) return eH(e);
    } else
        r === M.BEX.MEMBERS
            ? (c = (0, C.af)(o))
            : r === M.BEX.VANITY_URL
              ? (0, x.Je)(o.id)
              : r === M.BEX.SAFETY &&
                I.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == i ? M.nd0.SAFETY_OVERVIEW : i,
                });
}
function em(e) {
    a = e.searchQuery;
}
function eg(e) {
    let { guildId: t } = e;
    Y = {};
    let n = R.A.getGuild(t);
    if (null == n) return;
    let r = (0, y.$k)(n, { location: "guild-settings" });
    s = o = (0, T.hZ)(n, "premiumProgressBarEnabled", r);
}
function eE() {
    (H = M.XlH.SUBMITTING), (Y = {});
}
function eA() {
    H = M.XlH.OPEN;
}
function eI(e) {
    (H = M.XlH.OPEN), (r = r ?? (0, P.x)()), (i = null), (Y = e.errors ?? {});
}
function eT() {
    let e = o;
    if (null == e) return !1;
    V.some((t) => e[t] !== s[t]) || (o = s);
}
function ey(e) {
    if (null == o) return !1;
    V.forEach((t) => {
        null != o && e.hasOwnProperty(t) && (o = (0, T.hZ)(o, t, e[t] ?? null));
    }),
        eT();
}
function eS(e) {
    let { guildId: t } = e;
    if (null == u || null == o || o.id !== t) return !1;
    F.forEach((t) => {
        if (null != u && e.hasOwnProperty(t)) {
            let n = e[t];
            void 0 !== n && (u = { ...u, [t]: n });
        }
    });
}
function ev(e) {
    return new b.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new N.A(e.inviter) : null,
        channel: (0, v.OY)(e.channel),
        guild: null != e.guild ? (0, D.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: m()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function eC(e) {
    el = e.invites.reduce((e, t) => ((e[t.code] = ev(t)), e), {});
}
function eb(e) {
    (el = { ...el }), delete el[e.code];
}
function eN(e) {
    el = { ...el, [e.invite.code]: ev(e.invite) };
}
function eR(e) {
    (ea = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), es++;
}
function eO(e) {
    let { bans: t, guildId: n } = e;
    (eo !== n || null == ea) && ((eo = n), (ea = new Map())),
        (ea = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ea)),
        es++;
}
function eD(e) {
    let { user: t, guildId: n } = e;
    if (null == ea || null == o || o.id !== n) return !1;
    ea.set(t.id, { user: t, reason: null }), es++;
}
function eL(e) {
    let { user: t, guildId: n } = e;
    if (null == ea || null == o || o.id !== n) return !1;
    ea.delete(t.id), es++;
}
function ew(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    {
        let e = R.A.getGuild(o.id);
        if (null == e) return !1;
        if (((l = S.A.getProfile(o.id)), r !== M.BEX.PROFILE && r !== M.BEX.TAG && (u = l), r === M.BEX.PROFILE)) {
            (s = e), (o = e);
            return;
        }
        let t = (s = e),
            n = { ...o };
        V.forEach((r) => {
            if (
                !B.has(r) &&
                (("rulesChannelId" !== r && "publicUpdatesChannelId" !== r) || n[r] !== U.SP) &&
                "features" !== r
            ) {
                if ("ownerConfiguredContentLevel" === r) {
                    t = (0, T.hZ)(t, r, e[r]);
                    return;
                }
                t = (0, T.hZ)(t, r, n[r]);
            }
        }),
            (o = t);
    }
}
function ex(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    ef();
}
function eP(e) {
    let { roleId: t } = e;
    c = t ?? null;
}
function eM(e) {
    let { guildId: t } = e;
    if (!ec(t)) return !1;
}
function ek(e) {
    let { guildId: t } = e;
    if (!ec(t)) return !1;
}
function eU(e) {
    let { guildId: t, roleId: n } = e;
    if (!ec(t)) return !1;
    c === n && (c = null);
}
function eG(e) {
    (K = !0), (z = $ = e.enabled), (q = Z = e.channelId);
}
function eV(e) {
    let { guildId: t, enabled: n, channelId: r } = e;
    if (null == o || o.id !== t) return !1;
    ($ = n), (Z = r);
}
function eF(e) {
    (Q = e.code ?? null), (X = e.uses);
}
function eB(e) {
    let { level: t } = e;
    J = t;
}
function ej(e) {
    eu = e.integrations;
}
function eH(e) {
    if (null == o || H !== M.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id)) return !1;
    (0, w.c)(o.id);
}
function eY(e) {
    let { guildId: t } = e;
    if (null == o || t !== o.id) return !1;
    o = (0, T.hZ)(o, "features", new Set([...o.features, M.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]));
}
function eW(e) {
    let { guildId: t } = e;
    if (null == o || t !== o.id) return !1;
    o = (0, T.hZ)(
        o,
        "features",
        new Set([...o.features, M.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
    );
}
function eK(e) {
    let { guildId: t, metadata: n } = e;
    null != o &&
        t === o.id &&
        (!1 === en && (en = !0),
        (ei = er =
            {
                primaryCategoryId: n.primaryCategoryId ?? k.ig,
                secondaryCategoryIds: n.secondaryCategoryIds ?? [],
                keywords: n.keywords ?? [],
                emojiDiscoverabilityEnabled: n.emojiDiscoverabilityEnabled ?? G,
                partnerActionedTimestamp: n.partnerActionedTimestamp ?? null,
                partnerApplicationTimestamp: n.partnerApplicationTimestamp ?? null,
                isPublished: n.isPublished ?? !1,
                reasonsToJoin: n.reasonsToJoin ?? [],
                socialLinks: n.socialLinks ?? [],
                about: n.about ?? "",
            }),
        (Y = {}));
}
function ez() {
    er = ei = et;
}
function e$(e) {
    let { slug: t } = e;
    _ = t;
}
function eq(e) {
    let {} = e;
    _ = null;
}
function eZ(e) {
    let { guildId: t, categoryId: n } = e;
    null != o &&
        t === o.id &&
        ((ei = { ...ei, secondaryCategoryIds: [...ei.secondaryCategoryIds, n] }),
        (er = { ...er, secondaryCategoryIds: [...er.secondaryCategoryIds, n] }));
}
function eQ(e) {
    let t,
        { guildId: n, categoryId: r } = e;
    if (null == o || n !== o.id) return;
    let i = ei.secondaryCategoryIds.indexOf(r);
    -1 !== i && ((t = [...ei.secondaryCategoryIds]).splice(i, 1), (ei = { ...ei, secondaryCategoryIds: t })),
        -1 !== (i = er.secondaryCategoryIds.indexOf(r)) &&
            ((t = [...er.secondaryCategoryIds]).splice(i, 1), (er = { ...er, secondaryCategoryIds: t }));
}
function eX(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (Y = n ?? {});
}
function eJ(e) {
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
        (ei = {
            ...ei,
            primaryCategoryId: null != n ? n : ei.primaryCategoryId,
            keywords: null != r ? r : ei.keywords,
            emojiDiscoverabilityEnabled: i ?? ei.emojiDiscoverabilityEnabled,
            isPublished: a ?? ei.isPublished,
            reasonsToJoin: null != s ? s : ei.reasonsToJoin,
            socialLinks: null != l ? l : ei.socialLinks,
            about: null != u ? u : ei.about,
        });
}
function e0(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (Y = n ?? {});
}
function e1(e) {
    let { profile: t } = e;
    t.id === o?.id && (l = u = t);
}
function e2(e) {
    let { guildId: t } = e;
    if (null == o || o.id !== t) return !1;
    W = null;
}
function e3(e) {
    let { profile: t } = e;
    if (u?.id == null || !ec(u.id)) return !1;
    t.id === o?.id && ((l = u = t), (W = null));
}
function e6(e) {
    let { guildId: t, error: n } = e;
    if (null == o || o.id !== t) return !1;
    W = n;
}
function e4(e) {
    let { guildId: t } = e;
    if (u?.id == null || !ec(u.id)) return !1;
    t === o?.id && ((l = u = S.A.getProfile(t)), (W = null));
}
class e5 extends g.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(R.A, S.A, O.default);
    }
    getMetadata() {
        return ei;
    }
    widgetHasChanges() {
        return !1 !== K && ($ !== z || Z !== q);
    }
    hasChanges() {
        return !p().isEqual(o, s) || !p().isEqual(ei, er) || !p().isEqual(u, l) || this.widgetHasChanges();
    }
    isOpen() {
        return j;
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
        return !A.w.get(U.wX);
    }
    getGuild() {
        return o;
    }
    getGuildProfile() {
        return u;
    }
    getWidget() {
        return { enabled: $, channelId: Z };
    }
    isSubmitting() {
        return H === M.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return en;
    }
    getErrors() {
        return Y;
    }
    getError(e) {
        return Y[e] ?? null;
    }
    getProfileError() {
        return W;
    }
    getSelectedRoleId() {
        return c;
    }
    getSlug() {
        return _;
    }
    getBans() {
        return [ea, es];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: eu,
            section: r,
            subsection: i,
            errors: Y,
            guild: o,
            bans: ea,
            bansVersion: es,
            invites: el,
            selectedRoleId: c,
            fetchedEmbed: K,
            embedEnabled: $,
            embedChannelId: Z,
            mfaLevel: J,
            searchQuery: a,
            vanityURLCode: Q,
            vanityURLUses: X,
            originalGuild: s,
            hasChanges: this.hasChanges(),
            guildMetadata: ei,
            analyticsLocation: ee,
            isGuildMetadataLoaded: en,
            originalProfile: l,
            profile: u,
        };
    }
}
let e7 = new e5(
    I.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: e_,
              GUILD_SETTINGS_OPEN: ed,
              GUILD_SETTINGS_CLOSE: ef,
              GUILD_SETTINGS_UPDATE: ey,
              GUILD_SETTINGS_PROFILE_UPDATE: eS,
              GUILD_SETTINGS_CANCEL_CHANGES: eg,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: ep,
              GUILD_SETTINGS_SUBMIT: eE,
              GUILD_SETTINGS_SUBMIT_SUCCESS: eA,
              GUILD_SETTINGS_SUBMIT_FAILURE: eI,
              GUILD_SETTINGS_SET_SECTION: eh,
              GUILD_SETTINGS_SET_SEARCH_QUERY: em,
              GUILD_SETTINGS_LOADED_BANS: eR,
              GUILD_SETTINGS_LOADED_BANS_BATCH: eO,
              GUILD_SETTINGS_LOADED_INVITES: eC,
              GUILD_SETTINGS_SET_WIDGET: eG,
              GUILD_SETTINGS_SET_VANITY_URL: eF,
              GUILD_SETTINGS_SET_MFA_SUCCESS: eB,
              GUILD_SETTINGS_ROLE_SELECT: eP,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: ej,
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: eY,
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: eW,
              GUILD_BAN_ADD: eD,
              GUILD_BAN_REMOVE: eL,
              GUILD_ROLE_CREATE: eM,
              GUILD_ROLE_UPDATE: ek,
              GUILD_ROLE_DELETE: eU,
              GUILD_UPDATE: ew,
              GUILD_DELETE: ex,
              GUILD_PROFILE_FETCH_SUCCESS: e1,
              GUILD_PROFILE_UPDATE: e2,
              GUILD_PROFILE_UPDATE_SUCCESS: e3,
              GUILD_PROFILE_UPDATE_FAILURE: e6,
              GUILD_PROFILE_UPDATE_VISIBILITY: e2,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: e4,
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: e6,
              USER_CONNECTIONS_UPDATE: eH,
              GUILD_INTEGRATIONS_UPDATE: eH,
              INSTANT_INVITE_REVOKE_SUCCESS: eb,
              INSTANT_INVITE_CREATE_SUCCESS: eN,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eK,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: ez,
              GUILD_DISCOVERY_CATEGORY_ADD: eZ,
              GUILD_DISCOVERY_CATEGORY_DELETE: eQ,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: eX,
              GUILD_UPDATE_DISCOVERY_METADATA: eJ,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: e0,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: e$,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: eq,
              GUILD_SETTINGS_WIDGET_UPDATE: eV,
          },
);
