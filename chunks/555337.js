let r, i, a, o, s, l, c, u, d, f;
n.d(t, {
    A: () => tn,
}),
    n(896048),
    n(938796);
var p,
    _ = n(735438),
    h = n.n(_),
    m = n(989349),
    g = n.n(m),
    E = n(311907),
    y = n(562465),
    b = n(506774),
    O = n(73153),
    v = n(867051),
    A = n(903223),
    I = n(837011),
    S = n(95701),
    T = n(260509),
    C = n(671759),
    N = n(427157),
    w = n(71393),
    R = n(287809),
    P = n(860689),
    D = n(661191),
    L = n(794967),
    x = n(310527),
    M = n(595818),
    j = n(652215),
    k = n(324580),
    U = n(124759);

function G(e, t, n) {
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

function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}

function F(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = !0,
    Y = [
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
    W = [
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
    K = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
    z = !1,
    q = j.XlH.CLOSED,
    Z = {},
    Q = null,
    X = !1,
    J = !1,
    $ = !1,
    ee = null,
    et = null,
    en = null,
    er = 0,
    ei = j.EkJ.NONE,
    ea = null,
    eo = {
        primaryCategoryId: k.ig,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: H,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: "",
    },
    es = !1,
    el = eo,
    ec = eo,
    eu = null,
    ed = 0,
    ef = null,
    ep = null,
    e_ = null;

function eh(e) {
    if (null == s || null == o || o.id !== e) return !1;
    let t = w.A.getGuild(e);
    return null != t && (o === s ? (s = o = t) : (o = t), !0);
}

function em(e) {
    (z = !0), eg(e);
}

function eg(e) {
    var t;
    let { guildId: n, section: i, subsection: a, location: d } = e,
        p = w.A.getGuild(n);
    if (null == p) return eE();
    let _ = (0, A.$k)(p, {
        location: "guild-settings",
    });
    p = (0, v.hZ)(p, "premiumProgressBarEnabled", _);
    let h = I.A.getProfile(n);
    (o = s = p),
        (l = c = h),
        ($ = J),
        (et = ee),
        (q = j.XlH.OPEN),
        (Z = {}),
        (Q = null),
        (u = D.default.castGuildIdAsEveryoneGuildRoleId(n)),
        (ei = s.mfaLevel),
        (ec = el),
        (f = null),
        (ea = d),
        eb({
            section: null != (t = null != i ? i : r) ? t : (0, M.x)(),
            subsection: null != a ? a : null,
        });
}

function eE() {
    (z = !1),
        (q = j.XlH.CLOSED),
        (o = s = null),
        (X = !1),
        ($ = !1),
        (et = null),
        (en = null),
        (er = 0),
        (eu = null),
        (ep = null),
        (e_ = null),
        (r = null),
        (i = null),
        (a = null),
        (ei = j.EkJ.NONE),
        (d = void 0);
}

function ey(e) {
    let { state: t } = e;
    return (d = t), !1;
}

function eb(e) {
    if (null == s) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === j.BEX.INSTANT_INVITES || r === j.BEX.INVITES))
        y.Bo.get({
            url: j.Rsh.GUILD_INSTANT_INVITES(s.id),
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then((e) => {
            O.h.dispatch({
                type: "GUILD_SETTINGS_LOADED_INVITES",
                invites: e.body,
            });
        });
    else if (r === j.BEX.INTEGRATIONS || r === j.BEX.ROLES) {
        if (((u = null), t !== e.section)) return eq(e);
    } else
        r === j.BEX.MEMBERS
            ? (u = (0, T.af)(s))
            : r === j.BEX.VANITY_URL
              ? (0, x.Je)(s.id)
              : r === j.BEX.SAFETY &&
                O.h.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == i ? j.nd0.SAFETY_OVERVIEW : i,
                });
}

function eO(e) {
    a = e.searchQuery;
}

function ev(e) {
    let { guildId: t } = e;
    Z = {};
    let n = w.A.getGuild(t);
    if (null == n) return;
    let r = (0, A.$k)(n, {
        location: "guild-settings",
    });
    o = s = (0, v.hZ)(n, "premiumProgressBarEnabled", r);
}

function eA() {
    (q = j.XlH.SUBMITTING), (Z = {});
}

function eI() {
    q = j.XlH.OPEN;
}

function eS(e) {
    var t;
    (q = j.XlH.OPEN), (r = null != r ? r : (0, M.x)()), (i = null), (Z = null != (t = e.errors) ? t : {});
}

function eT() {
    let e = s;
    if (null == e) return !1;
    Y.some((t) => e[t] !== o[t]) || (s = o);
}

function eC(e) {
    if (null == s) return !1;
    Y.forEach((t) => {
        if (null != s && e.hasOwnProperty(t)) {
            var n;
            s = (0, v.hZ)(s, t, null != (n = e[t]) ? n : null);
        }
    }),
        eT();
}

function eN(e) {
    let { guildId: t } = e;
    if (null == c || null == s || s.id !== t) return !1;
    W.forEach((t) => {
        if (null != c && e.hasOwnProperty(t)) {
            let n = e[t];
            void 0 !== n &&
                (c = B(V({}, c), {
                    [t]: n,
                }));
        }
    });
}

function ew(e) {
    var t;
    return new C.A({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new N.A(e.inviter) : null,
        channel: (0, S.OY)(e.channel),
        guild: null != e.guild ? (0, P.DY)(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: g()(null != (t = e.created_at) ? t : void 0),
        flags: e.flags,
        roles: e.roles,
    });
}

function eR(e) {
    ep = e.invites.reduce((e, t) => ((e[t.code] = ew(t)), e), {});
}

function eP(e) {
    (ep = V({}, ep)), delete ep[e.code];
}

function eD(e) {
    ep = B(V({}, ep), {
        [e.invite.code]: ew(e.invite),
    });
}

function eL(e) {
    (eu = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), ed++;
}

function ex(e) {
    let { bans: t, guildId: n } = e;
    (ef !== n || null == eu) && ((ef = n), (eu = new Map())),
        (eu = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), eu)),
        ed++;
}

function eM(e) {
    let { user: t, guildId: n } = e;
    if (null == eu || null == s || s.id !== n) return !1;
    eu.set(t.id, {
        user: t,
        reason: null,
    }),
        ed++;
}

function ej(e) {
    let { user: t, guildId: n } = e;
    if (null == eu || null == s || s.id !== n) return !1;
    eu.delete(t.id), ed++;
}

function ek(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    {
        let e = w.A.getGuild(s.id);
        if (null == e) return !1;
        if (((l = I.A.getProfile(s.id)), r !== j.BEX.PROFILE && r !== j.BEX.TAG && (c = l), r === j.BEX.PROFILE)) {
            (o = e), (s = e);
            return;
        }
        let t = (o = e),
            n = V({}, s);
        Y.forEach((r) => {
            if (
                !K.has(r) &&
                (("rulesChannelId" !== r && "publicUpdatesChannelId" !== r) || n[r] !== U.SP) &&
                "features" !== r
            ) {
                if ("ownerConfiguredContentLevel" === r) {
                    t = (0, v.hZ)(t, r, e[r]);
                    return;
                }
                t = (0, v.hZ)(t, r, n[r]);
            }
        }),
            (s = t);
    }
}

function eU(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    eE();
}

function eG(e) {
    let { roleId: t } = e;
    u = null != t ? t : null;
}

function eV(e) {
    let { guildId: t } = e;
    if (!eh(t)) return !1;
}

function eF(e) {
    let { guildId: t } = e;
    if (!eh(t)) return !1;
}

function eB(e) {
    let { guildId: t, roleId: n } = e;
    if (!eh(t)) return !1;
    u === n && (u = null);
}

function eH(e) {
    (X = !0), (J = $ = e.enabled), (ee = et = e.channelId);
}

function eY(e) {
    let { guildId: t, enabled: n, channelId: r } = e;
    if (null == s || s.id !== t) return !1;
    ($ = n), (et = r);
}

function eW(e) {
    var t;
    (en = null != (t = e.code) ? t : null), (er = e.uses);
}

function eK(e) {
    let { level: t } = e;
    ei = t;
}

function ez(e) {
    e_ = e.integrations;
}

function eq(e) {
    if (null == s || q !== j.XlH.OPEN || ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== s.id)) return !1;
    (0, L.c)(s.id);
}

function eZ(e) {
    let { guildId: t } = e;
    if (null == s || t !== s.id) return !1;
    s = (0, v.hZ)(s, "features", new Set([...s.features, j.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]));
}

function eQ(e) {
    let { guildId: t } = e;
    if (null == s || t !== s.id) return !1;
    s = (0, v.hZ)(
        s,
        "features",
        new Set([...s.features, j.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
    );
}

function eX(e) {
    var t, n, r, i, a, o, l, c, u, d;
    let { guildId: f, metadata: p } = e;
    null != s &&
        f === s.id &&
        (!1 === es && (es = !0),
        (ec = el =
            {
                primaryCategoryId: null != (t = p.primaryCategoryId) ? t : k.ig,
                secondaryCategoryIds: null != (n = p.secondaryCategoryIds) ? n : [],
                keywords: null != (r = p.keywords) ? r : [],
                emojiDiscoverabilityEnabled: null != (i = p.emojiDiscoverabilityEnabled) ? i : H,
                partnerActionedTimestamp: null != (a = p.partnerActionedTimestamp) ? a : null,
                partnerApplicationTimestamp: null != (o = p.partnerApplicationTimestamp) ? o : null,
                isPublished: null != (l = p.isPublished) && l,
                reasonsToJoin: null != (c = p.reasonsToJoin) ? c : [],
                socialLinks: null != (u = p.socialLinks) ? u : [],
                about: null != (d = p.about) ? d : "",
            }),
        (Z = {}));
}

function eJ() {
    el = ec = eo;
}

function e$(e) {
    let { slug: t } = e;
    f = t;
}

function e0(e) {
    let {} = e;
    f = null;
}

function e1(e) {
    let { guildId: t, categoryId: n } = e;
    null != s &&
        t === s.id &&
        ((ec = B(V({}, ec), {
            secondaryCategoryIds: [...ec.secondaryCategoryIds, n],
        })),
        (el = B(V({}, el), {
            secondaryCategoryIds: [...el.secondaryCategoryIds, n],
        })));
}

function e2(e) {
    let t,
        { guildId: n, categoryId: r } = e;
    if (null == s || n !== s.id) return;
    let i = ec.secondaryCategoryIds.indexOf(r);
    -1 !== i &&
        ((t = [...ec.secondaryCategoryIds]).splice(i, 1),
        (ec = B(V({}, ec), {
            secondaryCategoryIds: t,
        }))),
        -1 !== (i = el.secondaryCategoryIds.indexOf(r)) &&
            ((t = [...el.secondaryCategoryIds]).splice(i, 1),
            (el = B(V({}, el), {
                secondaryCategoryIds: t,
            })));
}

function e3(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (Z = null != n ? n : {});
}

function e6(e) {
    let {
        guildId: t,
        primaryCategoryId: n,
        keywords: r,
        emojiDiscoverabilityEnabled: i,
        isPublished: a,
        reasonsToJoin: o,
        socialLinks: l,
        about: c,
    } = e;
    null != s &&
        t === s.id &&
        (ec = B(V({}, ec), {
            primaryCategoryId: null != n ? n : ec.primaryCategoryId,
            keywords: null != r ? r : ec.keywords,
            emojiDiscoverabilityEnabled: null != i ? i : ec.emojiDiscoverabilityEnabled,
            isPublished: null != a ? a : ec.isPublished,
            reasonsToJoin: null != o ? o : ec.reasonsToJoin,
            socialLinks: null != l ? l : ec.socialLinks,
            about: null != c ? c : ec.about,
        }));
}

function e4(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (Z = null != n ? n : {});
}

function e5(e) {
    let { profile: t } = e;
    t.id === (null == s ? void 0 : s.id) && (l = c = t);
}

function e7(e) {
    let { guildId: t } = e;
    if (null == s || s.id !== t) return !1;
    Q = null;
}

function e8(e) {
    let { profile: t } = e;
    if ((null == c ? void 0 : c.id) == null || !eh(c.id)) return !1;
    t.id === (null == s ? void 0 : s.id) && ((l = c = t), (Q = null));
}

function e9(e) {
    let { guildId: t, error: n } = e;
    if (null == s || s.id !== t) return !1;
    Q = n;
}

function te(e) {
    let { guildId: t } = e;
    if ((null == c ? void 0 : c.id) == null || !eh(c.id)) return !1;
    t === (null == s ? void 0 : s.id) && ((l = c = I.A.getProfile(t)), (Q = null));
}
class tt extends (p = E.Ay.Store) {
    initialize() {
        this.waitFor(w.A, I.A, R.default);
    }
    getMetadata() {
        return ec;
    }
    widgetHasChanges() {
        return !1 !== X && ($ !== J || et !== ee);
    }
    hasChanges() {
        return !h().isEqual(s, o) || !h().isEqual(ec, el) || !h().isEqual(c, l) || this.widgetHasChanges();
    }
    isOpen() {
        return z;
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
        return null != s ? s.id : null;
    }
    showPublicSuccessModal() {
        return !b.w.get(U.wX);
    }
    getGuild() {
        return s;
    }
    getGuildProfile() {
        return c;
    }
    getWidget() {
        return {
            enabled: $,
            channelId: et,
        };
    }
    isSubmitting() {
        return q === j.XlH.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return es;
    }
    getErrors() {
        return Z;
    }
    getError(e) {
        var t;
        return null != (t = Z[e]) ? t : null;
    }
    getProfileError() {
        return Q;
    }
    getSelectedRoleId() {
        return u;
    }
    getSlug() {
        return f;
    }
    getBans() {
        return [eu, ed];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: e_,
            section: r,
            subsection: i,
            errors: Z,
            guild: s,
            bans: eu,
            bansVersion: ed,
            invites: ep,
            selectedRoleId: u,
            fetchedEmbed: X,
            embedEnabled: $,
            embedChannelId: et,
            mfaLevel: ei,
            searchQuery: a,
            vanityURLCode: en,
            vanityURLUses: er,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: ec,
            analyticsLocation: ea,
            isGuildMetadataLoaded: es,
            originalProfile: l,
            profile: c,
        };
    }
}
G(tt, "displayName", "GuildSettingsStore");
let tn = new tt(
    O.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_INIT: eg,
              GUILD_SETTINGS_OPEN: em,
              GUILD_SETTINGS_CLOSE: eE,
              GUILD_SETTINGS_UPDATE: eC,
              GUILD_SETTINGS_PROFILE_UPDATE: eN,
              GUILD_SETTINGS_CANCEL_CHANGES: ev,
              GUILD_SETTINGS_SAVE_ROUTE_STACK: ey,
              GUILD_SETTINGS_SUBMIT: eA,
              GUILD_SETTINGS_SUBMIT_SUCCESS: eI,
              GUILD_SETTINGS_SUBMIT_FAILURE: eS,
              GUILD_SETTINGS_SET_SECTION: eb,
              GUILD_SETTINGS_SET_SEARCH_QUERY: eO,
              GUILD_SETTINGS_LOADED_BANS: eL,
              GUILD_SETTINGS_LOADED_BANS_BATCH: ex,
              GUILD_SETTINGS_LOADED_INVITES: eR,
              GUILD_SETTINGS_SET_WIDGET: eH,
              GUILD_SETTINGS_SET_VANITY_URL: eW,
              GUILD_SETTINGS_SET_MFA_SUCCESS: eK,
              GUILD_SETTINGS_ROLE_SELECT: eG,
              GUILD_SETTINGS_LOADED_INTEGRATIONS: ez,
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: eZ,
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: eQ,
              GUILD_BAN_ADD: eM,
              GUILD_BAN_REMOVE: ej,
              GUILD_ROLE_CREATE: eV,
              GUILD_ROLE_UPDATE: eF,
              GUILD_ROLE_DELETE: eB,
              GUILD_UPDATE: ek,
              GUILD_DELETE: eU,
              GUILD_PROFILE_FETCH_SUCCESS: e5,
              GUILD_PROFILE_UPDATE: e7,
              GUILD_PROFILE_UPDATE_SUCCESS: e8,
              GUILD_PROFILE_UPDATE_FAILURE: e9,
              GUILD_PROFILE_UPDATE_VISIBILITY: e7,
              GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS: te,
              GUILD_PROFILE_UPDATE_VISIBILITY_FAILURE: e9,
              USER_CONNECTIONS_UPDATE: eq,
              GUILD_INTEGRATIONS_UPDATE: eq,
              INSTANT_INVITE_REVOKE_SUCCESS: eP,
              INSTANT_INVITE_CREATE_SUCCESS: eD,
              GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eX,
              GUILD_DISCOVERY_METADATA_FETCH_FAIL: eJ,
              GUILD_DISCOVERY_CATEGORY_ADD: e1,
              GUILD_DISCOVERY_CATEGORY_DELETE: e2,
              GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: e3,
              GUILD_UPDATE_DISCOVERY_METADATA: e6,
              GUILD_UPDATE_DISCOVERY_METADATA_FAIL: e4,
              GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: e$,
              GUILD_DISCOVERY_SLUG_FETCH_FAIL: e0,
              GUILD_SETTINGS_WIDGET_UPDATE: eY,
          },
);
