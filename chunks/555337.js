"use strict";
let r, i, s, a, o, l, u, c, d, _;
n.d(t, { A: () => e5 }), n(938796);
var f = n(735438),
    p = n.n(f),
    h = n(989349),
    m = n.n(h),
    E = n(311907),
    g = n(562465),
    A = n(506774),
    I = n(73153),
    T = n(867051),
    S = n(837011),
    y = n(95701),
    v = n(260509),
    N = n(671759),
    C = n(427157),
    R = n(71393),
    O = n(287809),
    b = n(860689),
    D = n(661191),
    L = n(794967),
    w = n(310527),
    M = n(595818),
    x = n(652215),
    P = n(324580),
    k = n(124759);
let U = !0,
    G = [
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
        "officialMessageColor",
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
    V = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    B = !1,
    H = x.XlH.CLOSED,
    j = {},
    Y = null,
    W = !1,
    K = !1,
    $ = !1,
    z = null,
    q = null,
    Z = null,
    X = 0,
    Q = x.EkJ.NONE,
    J = null,
    ee = {
        primaryCategoryId: P.ig,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: U,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: "",
    },
    et = !1,
    en = ee,
    er = ee,
    ei = null,
    es = 0,
    ea = null,
    eo = null,
    el = null;
function eu(e) {
    if (null == o || null == a || a.id !== e) return !1;
    let t = R.A.getGuild(e);
    return null != t && (a === o ? (o = a = t) : (a = t), !0);
}
function ec(e) {
    (B = !0), ed(e);
}
function ed(e) {
    let { guildId: t, section: n, subsection: i, location: s } = e,
        d = R.A.getGuild(t);
    if (null == d) return e_();
    let f = S.A.getProfile(t);
    (a = o = d),
        (l = u = f),
        ($ = K),
        (q = z),
        (H = x.XlH.OPEN),
        (j = {}),
        (Y = null),
        (c = D.default.castGuildIdAsEveryoneGuildRoleId(t)),
        (Q = o.mfaLevel),
        (er = en),
        (_ = null),
        (J = s),
        ep({ section: n ?? r ?? (0, M.x)(), subsection: i ?? null });
}
function e_() {
    (B = !1),
        (H = x.XlH.CLOSED),
        (a = o = null),
        (W = !1),
        ($ = !1),
        (q = null),
        (Z = null),
        (X = 0),
        (ei = null),
        (eo = null),
        (el = null),
        (r = null),
        (i = null),
        (s = null),
        (Q = x.EkJ.NONE),
        (d = void 0);
}
function ef(e) {
    let { state: t } = e;
    return (d = t), !1;
}
function ep(e) {
    if (null == o) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === x.BEX.INSTANT_INVITES || r === x.BEX.INVITES))
        g.Bo.get({ url: x.Rsh.GUILD_INSTANT_INVITES(o.id), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            I.h.dispatch({ type: "GUILD_SETTINGS_LOADED_INVITES", invites: e.body });
        });
    else if (r === x.BEX.INTEGRATIONS || r === x.BEX.ROLES) {
        if (((c = null), t !== e.section)) return eH(e);
    } else
        r === x.BEX.MEMBERS
            ? (c = (0, v.af)(o))
            : r === x.BEX.VANITY_URL
              ? (0, w.Je)(o.id)
              : r === x.BEX.SAFETY &&
                I.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == i ? x.nd0.SAFETY_OVERVIEW : i,
                });
}
function eh(e) {
    s = e.searchQuery;
}
function em(e) {
    let { guildId: t } = e;
    j = {};
    let n = R.A.getGuild(t);
    null != n && (a = o = n);
}
function eE() {
    (H = x.XlH.SUBMITTING), (j = {});
}
function eg() {
    H = x.XlH.OPEN;
}
function eA(e) {
    (H = x.XlH.OPEN), (r = r ?? (0, M.x)()), (i = null), (j = e.errors ?? {});
}
function eI() {
    let e = o;
    if (null == e) return !1;
    G.some((t) => e[t] !== a[t]) || (o = a);
}
function eT(e) {
    if (null == o) return !1;
    G.forEach((t) => {
        null != o && e.hasOwnProperty(t) && (o = (0, T.hZ)(o, t, e[t] ?? null));
    }),
        eI();
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
function ey(e) {
    return new N.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new C.A(e.inviter) : null,
        channel: (0, y.OY)(e.channel),
        guild: null != e.guild ? (0, b.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: m()(e.created_at ?? void 0),
        flags: e.flags,
        roles: e.roles,
    });
}
function ev(e) {
    eo = e.invites.reduce((e, t) => ((e[t.code] = ey(t)), e), {});
}
function eN(e) {
    (eo = { ...eo }), delete eo[e.code];
}
function eC(e) {
    eo = { ...eo, [e.invite.code]: ey(e.invite) };
}
function eR(e) {
    (ei = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), es++;
}
function eO(e) {
    let { bans: t, guildId: n } = e;
    (ea !== n || null == ei) && ((ea = n), (ei = new Map())),
        (ei = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), ei)),
        es++;
}
function eb(e) {
    let { user: t, guildId: n } = e;
    if (null == ei || null == o || o.id !== n) return !1;
    ei.set(t.id, { user: t, reason: null }), es++;
}
function eD(e) {
    let { user: t, guildId: n } = e;
    if (null == ei || null == o || o.id !== n) return !1;
    ei.delete(t.id), es++;
}
function eL(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    {
        let e = R.A.getGuild(o.id);
        if (null == e) return !1;
        if (((l = S.A.getProfile(o.id)), r !== x.BEX.PROFILE && r !== x.BEX.TAG && (u = l), r === x.BEX.PROFILE)) {
            (a = e), (o = e);
            return;
        }
        let t = (a = e),
            n = { ...o };
        G.forEach((r) => {
            if (
                !V.has(r) &&
                (("rulesChannelId" !== r && "publicUpdatesChannelId" !== r) || n[r] !== k.SP) &&
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
function ew(e) {
    if (null == o || o.id !== e.guild.id) return !1;
    e_();
}
function eM(e) {
    let { roleId: t } = e;
    c = t ?? null;
}
function ex(e) {
    let { guildId: t } = e;
    if (!eu(t)) return !1;
}
function eP(e) {
    let { guildId: t } = e;
    if (!eu(t)) return !1;
}
function ek(e) {
    let { guildId: t, roleId: n } = e;
    if (!eu(t)) return !1;
    c === n && (c = null);
}
function eU(e) {
    (W = !0), (K = $ = e.enabled), (z = q = e.channelId);
}
function eG(e) {
    let { guildId: t, enabled: n, channelId: r } = e;
    if (null == o || o.id !== t) return !1;
    ($ = n), (q = r);
}
function eF(e) {
    (Z = e.code ?? null), (X = e.uses);
}
function eV(e) {
    let { level: t } = e;
    Q = t;
}
function eB(e) {
    el = e.integrations;
}
function eH(e) {
    if (null == o || H !== x.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id)) return !1;
    (0, L.c)(o.id);
}
function ej(e) {
    let { guildId: t } = e;
    if (null == o || t !== o.id) return !1;
    o = (0, T.hZ)(o, "features", new Set([...o.features, x.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]));
}
function eY(e) {
    let { guildId: t } = e;
    if (null == o || t !== o.id) return !1;
    o = (0, T.hZ)(
        o,
        "features",
        new Set([...o.features, x.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
    );
}
function eW(e) {
    let { guildId: t, metadata: n } = e;
    null != o &&
        t === o.id &&
        (!1 === et && (et = !0),
        (er = en =
            {
                primaryCategoryId: n.primaryCategoryId ?? P.ig,
                secondaryCategoryIds: n.secondaryCategoryIds ?? [],
                keywords: n.keywords ?? [],
                emojiDiscoverabilityEnabled: n.emojiDiscoverabilityEnabled ?? U,
                partnerActionedTimestamp: n.partnerActionedTimestamp ?? null,
                partnerApplicationTimestamp: n.partnerApplicationTimestamp ?? null,
                isPublished: n.isPublished ?? !1,
                reasonsToJoin: n.reasonsToJoin ?? [],
                socialLinks: n.socialLinks ?? [],
                about: n.about ?? "",
            }),
        (j = {}));
}
function eK() {
    en = er = ee;
}
function e$(e) {
    let { slug: t } = e;
    _ = t;
}
function ez(e) {
    let {} = e;
    _ = null;
}
function eq(e) {
    let { guildId: t, categoryId: n } = e;
    null != o &&
        t === o.id &&
        ((er = { ...er, secondaryCategoryIds: [...er.secondaryCategoryIds, n] }),
        (en = { ...en, secondaryCategoryIds: [...en.secondaryCategoryIds, n] }));
}
function eZ(e) {
    let t,
        { guildId: n, categoryId: r } = e;
    if (null == o || n !== o.id) return;
    let i = er.secondaryCategoryIds.indexOf(r);
    -1 !== i && ((t = [...er.secondaryCategoryIds]).splice(i, 1), (er = { ...er, secondaryCategoryIds: t })),
        -1 !== (i = en.secondaryCategoryIds.indexOf(r)) &&
            ((t = [...en.secondaryCategoryIds]).splice(i, 1), (en = { ...en, secondaryCategoryIds: t }));
}
function eX(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (j = n ?? {});
}
function eQ(e) {
    let {
        guildId: t,
        primaryCategoryId: n,
        keywords: r,
        emojiDiscoverabilityEnabled: i,
        isPublished: s,
        reasonsToJoin: a,
        socialLinks: l,
        about: u,
    } = e;
    null != o &&
        t === o.id &&
        (er = {
            ...er,
            primaryCategoryId: null != n ? n : er.primaryCategoryId,
            keywords: null != r ? r : er.keywords,
            emojiDiscoverabilityEnabled: i ?? er.emojiDiscoverabilityEnabled,
            isPublished: s ?? er.isPublished,
            reasonsToJoin: null != a ? a : er.reasonsToJoin,
            socialLinks: null != l ? l : er.socialLinks,
            about: null != u ? u : er.about,
        });
}
function eJ(e) {
    let { guildId: t, errors: n } = e;
    null != o && t === o.id && (j = n ?? {});
}
function e0(e) {
    let { profile: t } = e;
    t.id === o?.id && (l = u = t);
}
function e1(e) {
    let { guildId: t } = e;
    if (null == o || o.id !== t) return !1;
    Y = null;
}
function e2(e) {
    let { profile: t } = e;
    if (u?.id == null || !eu(u.id)) return !1;
    t.id === o?.id && ((l = u = t), (Y = null));
}
function e3(e) {
    let { guildId: t, error: n } = e;
    if (null == o || o.id !== t) return !1;
    Y = n;
}
function e6(e) {
    let { guildId: t } = e;
    if (u?.id == null || !eu(u.id)) return !1;
    t === o?.id && ((l = u = S.A.getProfile(t)), (Y = null));
}
class e4 extends E.Ay.Store {
    static displayName = "GuildSettingsStore";
    initialize() {
        this.waitFor(R.A, S.A, O.default);
    }
    getMetadata() {
        return er;
    }
    widgetHasChanges() {
        return !1 !== W && ($ !== K || q !== z);
    }
    hasChanges() {
        return !p().isEqual(o, a) || !p().isEqual(er, en) || !p().isEqual(u, l) || this.widgetHasChanges();
    }
    isOpen() {
        return B;
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
        return !A.w.get(k.wX);
    }
    getGuild() {
        return o;
    }
    getGuildProfile() {
        return u;
    }
    getWidget() {
        return { enabled: $, channelId: q };
    }
    isSubmitting() {
        return H === x.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return et;
    }
    getErrors() {
        return j;
    }
    getError(e) {
        return j[e] ?? null;
    }
    getProfileError() {
        return Y;
    }
    getSelectedRoleId() {
        return c;
    }
    getSlug() {
        return _;
    }
    getBans() {
        return [ei, es];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: el,
            section: r,
            subsection: i,
            errors: j,
            guild: o,
            bans: ei,
            bansVersion: es,
            invites: eo,
            selectedRoleId: c,
            fetchedEmbed: W,
            embedEnabled: $,
            embedChannelId: q,
            mfaLevel: Q,
            searchQuery: s,
            vanityURLCode: Z,
            vanityURLUses: X,
            originalGuild: a,
            hasChanges: this.hasChanges(),
            guildMetadata: er,
            analyticsLocation: J,
            isGuildMetadataLoaded: et,
            originalProfile: l,
            profile: u,
        };
    }
}
let e5 = new e4(
    I.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: ed,
              GUILD_SETTINGS_OPEN: ec,
              GUILD_SETTINGS_CLOSE: e_,
              GUILD_SETTINGS_UPDATE: eT,
              GUILD_SETTINGS_PROFILE_UPDATE: eS,
              GUILD_SETTINGS_CANCEL_CHANGES: em,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: ef,
              GUILD_SETTINGS_SUBMIT: eE,
              GUILD_SETTINGS_SUBMIT_SUCCESS: eg,
              GUILD_SETTINGS_SUBMIT_FAILURE: eA,
              GUILD_SETTINGS_SET_SECTION: ep,
              GUILD_SETTINGS_SET_SEARCH_QUERY: eh,
              GUILD_SETTINGS_LOADED_BANS: eR,
              GUILD_SETTINGS_LOADED_BANS_BATCH: eO,
              GUILD_SETTINGS_LOADED_INVITES: ev,
              GUILD_SETTINGS_SET_WIDGET: eU,
              GUILD_SETTINGS_SET_VANITY_URL: eF,
              GUILD_SETTINGS_SET_MFA_SUCCESS: eV,
              GUILD_SETTINGS_ROLE_SELECT: eM,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: eB,
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: ej,
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: eY,
              GUILD_BAN_ADD: eb,
              GUILD_BAN_REMOVE: eD,
              GUILD_ROLE_CREATE: ex,
              GUILD_ROLE_UPDATE: eP,
              GUILD_ROLE_DELETE: ek,
              GUILD_UPDATE: eL,
              GUILD_DELETE: ew,
              GUILD_PROFILE_FETCH_SUCCESS: e0,
              GUILD_PROFILE_UPDATE: e1,
              GUILD_PROFILE_UPDATE_SUCCESS: e2,
              GUILD_PROFILE_UPDATE_FAILURE: e3,
              GUILD_PROFILE_UPDATE_VISIBILITY: e1,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: e6,
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: e3,
              USER_CONNECTIONS_UPDATE: eH,
              GUILD_INTEGRATIONS_UPDATE: eH,
              INSTANT_INVITE_REVOKE_SUCCESS: eN,
              INSTANT_INVITE_CREATE_SUCCESS: eC,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eW,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: eK,
              GUILD_DISCOVERY_CATEGORY_ADD: eq,
              GUILD_DISCOVERY_CATEGORY_DELETE: eZ,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: eX,
              GUILD_UPDATE_DISCOVERY_METADATA: eQ,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: eJ,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: e$,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: ez,
              GUILD_SETTINGS_WIDGET_UPDATE: eG,
          },
);
