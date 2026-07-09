n.r(t), n.d(t, { marketingCollection: () => e5, playgroundConfig: () => e9 });
var o,
    a,
    l,
    r,
    i = n(64700),
    d = n(175841),
    s = n(962644),
    u = n(627968),
    p = n(877624),
    c = n(232582),
    b = n(821609),
    m = n(192308),
    f = n(935208),
    _ = n(331322),
    A = n(691885),
    T = n(839214),
    I =
        (((o = {})[(o.NONE = 0)] = "NONE"),
        (o[(o.SUBSCRIPTION = 1)] = "SUBSCRIPTION"),
        (o[(o.FRACTIONAL_NITRO = 2)] = "FRACTIONAL_NITRO"),
        (o[(o.REVERSE_TRIAL = 3)] = "REVERSE_TRIAL"),
        (o[(o.SUBSCRIPTION_GROUP = 4)] = "SUBSCRIPTION_GROUP"),
        o),
    g =
        (((a = {})[(a.NONE = 0)] = "NONE"),
        (a[(a.BOOST_ONLY = 1)] = "BOOST_ONLY"),
        (a[(a.TIER_0 = 2)] = "TIER_0"),
        (a[(a.TIER_1 = 3)] = "TIER_1"),
        (a[(a.TIER_2 = 4)] = "TIER_2"),
        a),
    N =
        (((l = {})[(l.NONE = 0)] = "NONE"),
        (l[(l.TIER_1 = 1)] = "TIER_1"),
        (l[(l.TIER_2 = 2)] = "TIER_2"),
        (l[(l.TIER_0 = 3)] = "TIER_0"),
        l);
let E = [
    { id: "EVERYONE", label: "Everyone", premiumType: null, premiumSource: null, premiumSubscriptionType: null },
    { id: "NON_NITRO", label: "Non Nitro", premiumType: 0, premiumSource: I.NONE, premiumSubscriptionType: g.NONE },
    {
        id: "FRACTIONAL_WITHOUT_SUB",
        label: "Nitro Credit w/o sub",
        premiumType: 2,
        premiumSource: I.FRACTIONAL_NITRO,
        premiumSubscriptionType: g.NONE,
    },
    {
        id: "FRACTIONAL_WITH_TIER_2_SUB",
        label: "Nitro Credit with Nitro Standard sub",
        premiumType: 2,
        premiumSource: I.FRACTIONAL_NITRO,
        premiumSubscriptionType: g.TIER_2,
    },
    {
        id: "FRACTIONAL_WITH_TIER_1_SUB",
        label: "Nitro Credit with Nitro Classic sub",
        premiumType: 2,
        premiumSource: I.FRACTIONAL_NITRO,
        premiumSubscriptionType: g.TIER_1,
    },
    {
        id: "FRACTIONAL_WITH_TIER_0_SUB",
        label: "Nitro Credit with Nitro Basic sub",
        premiumType: 2,
        premiumSource: I.FRACTIONAL_NITRO,
        premiumSubscriptionType: g.TIER_0,
    },
    {
        id: "NITRO_BASIC",
        label: "Nitro Basic",
        premiumType: 3,
        premiumSource: I.SUBSCRIPTION,
        premiumSubscriptionType: g.TIER_0,
    },
    {
        id: "NITRO_CLASSIC",
        label: "Nitro Classic",
        premiumType: 1,
        premiumSource: I.SUBSCRIPTION,
        premiumSubscriptionType: g.TIER_1,
    },
    {
        id: "NITRO_STANDARD",
        label: "Nitro Standard",
        premiumType: 2,
        premiumSource: I.SUBSCRIPTION,
        premiumSubscriptionType: g.TIER_2,
    },
    {
        id: "NITRO_SQUAD",
        label: "Nitro Squad",
        premiumType: 2,
        premiumSource: I.SUBSCRIPTION_GROUP,
        premiumSubscriptionType: g.TIER_2,
    },
];
function y(e, t, n) {
    let o = E.find((o) => o.premiumType === e && o.premiumSource === t && o.premiumSubscriptionType === n);
    if (null != o) return { id: o.id, label: o.label };
    let a = null == e ? "Any" : N[e],
        l = null == t ? "Any" : I[t],
        r = null == n ? "Any" : g[n];
    return { id: `CUSTOM:${e ?? "any"}:${t ?? "any"}:${n ?? "any"}`, label: `${a} / ${l} / ${r}` };
}
let S = "Localized";
function C(e) {
    return "object" == typeof e && null != e && "string" == typeof e.default && "object" == typeof e.localizations;
}
let O = (0, T.D)(() => ({
    selected: null,
    componentRowsByType: null,
    availableLocales: [],
    userStateByType: new Map(),
    localeOverride: null,
}));
function R(e) {
    let t = O.useField("componentRowsByType"),
        n = O.useField("userStateByType"),
        o = O.useField("localeOverride");
    return i.useMemo(
        () =>
            (function (e, t, n, o) {
                var a, l;
                let r,
                    i = e?.get(t);
                if (null == i) return null;
                let d = (function (e, t) {
                    if (0 === e.length) return null;
                    let n = [...e].sort((e, t) => e.platform - t.platform);
                    if (null != t) {
                        let e = n.find(
                            (e) =>
                                !e.isDefaultBase &&
                                y(e.premiumType, e.premiumSource, e.premiumSubscriptionType).id === t,
                        );
                        if (null != e) return e;
                    }
                    return n.find((e) => e.isDefaultBase) ?? n[0];
                })(i, n);
                return null == d
                    ? null
                    : ((a = d.properties),
                      (l = o ?? "en-US"),
                      (function e(t, n) {
                          if (Array.isArray(t)) {
                              for (let o of t) e(o, n);
                              return;
                          }
                          if ("object" == typeof t && null != t)
                              for (let [o, a] of Object.entries(t)) {
                                  if (o.endsWith(S) && C(a)) {
                                      let e = o.slice(0, -S.length),
                                          l = a.localizations[n] ?? ("" !== a.default ? a.default : null);
                                      null != l && e in t && (t[e] = l);
                                      continue;
                                  }
                                  e(a, n);
                              }
                      })(
                          (r = (function e(t) {
                              if (Array.isArray(t)) return t.map((t) => e(t));
                              if (null == t || "object" != typeof t) return t;
                              let n = Object.getPrototypeOf(t);
                              if (n !== Object.prototype && null !== n) return t;
                              let o = {};
                              for (let [n, a] of Object.entries(t)) o[n] = e(a);
                              return o;
                          })(a)),
                          l,
                      ),
                      r);
            })(t, e, n.get(e) ?? null, o),
        [t, n, o, e],
    );
}
function v(e) {
    return null == e ? "" : "" !== e.darkUrl ? e.darkUrl : e.lightUrl;
}
let h = "__default__";
var P = n(375708),
    L = n(669746);
function U(e) {
    let { label: t, value: n, disabled: o } = e;
    return { id: n, value: n, label: t, disabled: o };
}
function M(e) {
    let t,
        { componentType: n } = e,
        o = O.useField("selected"),
        a = O.useField("componentRowsByType"),
        l = O.useField("userStateByType"),
        r = O.useField("localeOverride"),
        d = O.useField("availableLocales"),
        s =
            ((t = O.useField("componentRowsByType")),
            i.useMemo(() => {
                let e = t?.get(n) ?? [],
                    o = new Map();
                for (let t of e) {
                    if (t.isDefaultBase) continue;
                    let e = y(t.premiumType, t.premiumSource, t.premiumSubscriptionType);
                    o.has(e.id) || o.set(e.id, e);
                }
                return [...o.values()];
            }, [t, n])),
        p = i.useMemo(
            () =>
                (0, P.getLanguages)()
                    .filter((e) => e.enabled && "en-US" !== e.code)
                    .map((e) => ({ label: e.name, value: e.code }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        c = i.useMemo(() => {
            let e;
            return (
                (e = new Set(d)),
                [
                    { label: "Default (en-US)", value: h },
                    ...p
                        .filter((e) => "en-US" !== e.value)
                        .map((t) => ({ label: t.label, value: t.value, disabled: !e.has(t.value) })),
                ]
            );
        }, [d, p]),
        b = (a?.get(n)?.length ?? 0) > 0;
    if (null == o || !b) return null;
    let m = s.length >= 1,
        f = [{ label: "Default", value: h }, ...s.map((e) => ({ label: e.label, value: e.id }))];
    return (0, u.jsx)("div", {
        className: L.k,
        children: (0, u.jsxs)(_.B, {
            gap: 16,
            children: [
                m &&
                    (0, u.jsx)(A.l, {
                        label: "User State",
                        value: l.get(n) ?? h,
                        onSelectionChange: (e) => {
                            var t;
                            let o;
                            return (
                                (t = e === h ? null : e),
                                (o = new Map(O.getState().userStateByType)),
                                void (null == t ? o.delete(n) : o.set(n, t), O.setState({ userStateByType: o }))
                            );
                        },
                        options: f,
                        formatOption: U,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                (0, u.jsx)(A.l, {
                    label: "Locale",
                    value: r ?? h,
                    onSelectionChange: (e) => {
                        var t;
                        return (t = e === h ? null : e), void O.setState({ localeOverride: t });
                    },
                    options: c,
                    formatOption: U,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var x = n(65412),
    B = n(934661);
function G(e, t) {
    return B.m.create({ contentIdentifier: e, properties: t });
}
function D(e, t, n, o) {
    return { id: e, component_type: t, promotion_id: n, properties: (0, x.C)(B.m.toBinary(o)) };
}
function k(e, t) {
    return e === v(t) ? t : "" !== e ? { lightUrl: e, darkUrl: e, lightStaticUrl: e, darkStaticUrl: e } : void 0;
}
var F = n(553706);
let V = "playground-announcement-modal",
    j = f.default.fromTimestamp(Date.now()),
    K = {
        name: "Announcement Modal",
        id: "announcement-modal",
        component: function (e) {
            let t = R(p.C.ANNOUNCEMENT_MODAL),
                o =
                    t?.properties.oneofKind === "announcementModalVariant1"
                        ? t.properties.announcementModalVariant1
                        : null;
            return (0, u.jsx)("div", {
                className: F.MT,
                children: (0, u.jsx)(b.$, {
                    variant: "expressive",
                    size: "md",
                    text: "Open Announcement Modal",
                    onClick: () => {
                        let t,
                            a =
                                ((t = {
                                    modalTopPill: e.modalTopPill,
                                    header: e.header,
                                    subheader: e.subheader,
                                    heroArtImageLinkLightTheme: e.heroArtImageUrl,
                                    heroArtImageLinkDarkTheme: e.heroArtImageUrl,
                                    button: {
                                        ...o?.button,
                                        copy: e.buttonCopy,
                                        buttonAction:
                                            e.buttonAction !== c.dz.UNSPECIFIED
                                                ? e.buttonAction
                                                : (o?.button?.buttonAction ?? c.dz.OPEN_TIER_2_PAYMENT_MODAL),
                                        deeplinkSection: o?.button?.deeplinkSection ?? "",
                                        navigableStorefrontApplicationId:
                                            o?.button?.navigableStorefrontApplicationId ??
                                            ("" !== e.navigableStorefrontApplicationId
                                                ? { value: e.navigableStorefrontApplicationId }
                                                : void 0),
                                    },
                                }),
                                G(V, {
                                    oneofKind: "announcementModalVariant1",
                                    announcementModalVariant1: null != o ? { ...o, ...t } : c.ih.create(t),
                                }));
                        (0, m.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("45733"),
                                    n.e("55532"),
                                    n.e("34454"),
                                    n.e("79154"),
                                    n.e("97782"),
                                    n.e("45588"),
                                    n.e("20056"),
                                    n.e("64622"),
                                    n.e("78340"),
                                    n.e("96137"),
                                    n.e("18997"),
                                    n.e("34691"),
                                    n.e("20287"),
                                    n.e("18024"),
                                    n.e("3131"),
                                    n.e("47177"),
                                    n.e("27272"),
                                    n.e("36149"),
                                    n.e("51778"),
                                    n.e("24914"),
                                    n.e("42714"),
                                    n.e("68532"),
                                    n.e("20382"),
                                    n.e("73165"),
                                    n.e("34268"),
                                    n.e("63333"),
                                    n.e("54372"),
                                ]).then(n.bind(n, 103407));
                                return (t) =>
                                    (0, u.jsx)(e, {
                                        renderModalProps: t,
                                        componentId: V,
                                        promotionId: j,
                                        properties: a,
                                    });
                            },
                            { modalKey: "playground-announcement-modal" },
                        );
                    },
                }),
            });
        },
        ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.ANNOUNCEMENT_MODAL }),
        useDefaultOverrides: () => {
            let e = R(p.C.ANNOUNCEMENT_MODAL),
                t =
                    e?.properties.oneofKind === "announcementModalVariant1"
                        ? e.properties.announcementModalVariant1
                        : null;
            return null == t
                ? null
                : {
                      modalTopPill: t.modalTopPill,
                      header: t.header,
                      subheader: t.subheader,
                      heroArtImageUrl:
                          "" !== t.heroArtImageLinkDarkTheme
                              ? t.heroArtImageLinkDarkTheme
                              : t.heroArtImageLinkLightTheme,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? c.dz.UNSPECIFIED,
                      navigableStorefrontApplicationId: t.button?.navigableStorefrontApplicationId?.value ?? "",
                  };
        },
        controls: {
            modalTopPill: { label: "Top Pill", type: "text", defaultValue: "Limited time offer" },
            header: { label: "Header", type: "text", defaultValue: "Get Nitro and unlock more" },
            subheader: {
                label: "Subheader",
                type: "text",
                defaultValue: "Bigger uploads, HD video, custom emoji everywhere, and more.",
            },
            heroArtImageUrl: {
                label: "Hero Art Image URL",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/2c74e3655641888bfb9bbf8070c30b8230551754fd0a22f660d8cb3cae5c9679.svg",
            },
            buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Get Nitro" },
            buttonAction: {
                label: "Button Action",
                type: "select",
                defaultValue: c.dz.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: c.dz.UNSPECIFIED },
                    { label: "Open Marketing Page", value: c.dz.OPEN_MARKETING_PAGE },
                    { label: "Open Tier 2 Payment Modal", value: c.dz.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: c.dz.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: c.dz.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: c.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: c.dz.OPEN_SOCIAL_LAYER_STOREFRONT },
                ],
            },
            navigableStorefrontApplicationId: {
                label: "Navigable Storefront Application ID",
                type: "text",
                defaultValue: "1346069614634864772",
            },
        },
    };
var w = n(520361),
    z = n(822571),
    H = n(662367);
let W = "playground-billing-settings-banner",
    Y = {
        name: "Nitro Settings Banner",
        id: "billing-settings-banner",
        component: function (e) {
            let t,
                n,
                o,
                a = R(p.C.BILLING_SETTINGS_BANNER),
                l = a?.properties.oneofKind === "billingSettingsBanner" ? a.properties.billingSettingsBanner : null,
                r = O.useField("selected"),
                [d] = i.useState(() => new Date(Date.now() + 6048e5)),
                s = r?.endDate ?? d,
                b = z.A.createFromServer(
                    D(
                        W,
                        p.C.BILLING_SETTINGS_BANNER,
                        r?.id ?? "",
                        G(W, {
                            oneofKind: "billingSettingsBanner",
                            billingSettingsBanner:
                                ((t = e.showButton
                                    ? {
                                          ...l?.button,
                                          copy: e.buttonCopy,
                                          buttonAction:
                                              e.buttonAction !== c.dz.UNSPECIFIED
                                                  ? e.buttonAction
                                                  : (l?.button?.buttonAction ?? c.dz.OPEN_TIER_2_PAYMENT_MODAL),
                                          deeplinkSection: l?.button?.deeplinkSection ?? "",
                                          navigableStorefrontApplicationId:
                                              l?.button?.navigableStorefrontApplicationId ??
                                              ("" !== e.navigableStorefrontApplicationId
                                                  ? { value: e.navigableStorefrontApplicationId }
                                                  : void 0),
                                      }
                                    : void 0),
                                (n =
                                    "" !== e.helpArticleId
                                        ? { ...l?.helpArticle, id: e.helpArticleId, linkText: e.helpArticleLinkText }
                                        : void 0),
                                (o = {
                                    header: e.header,
                                    body: e.body,
                                    asset: k(e.assetUrl, l?.asset),
                                    button: t,
                                    helpArticle: n,
                                }),
                                null != l ? { ...l, ...o } : w.h.create(o)),
                        }),
                    ),
                );
            return (0, u.jsx)("div", { className: F.MT, children: (0, u.jsx)(H.I, { component: b, endDate: s }) });
        },
        ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.BILLING_SETTINGS_BANNER }),
        useDefaultOverrides: () => {
            let e = R(p.C.BILLING_SETTINGS_BANNER),
                t = e?.properties.oneofKind === "billingSettingsBanner" ? e.properties.billingSettingsBanner : null;
            return null == t
                ? null
                : {
                      header: t.header,
                      body: t.body,
                      assetUrl: v(t.asset),
                      showButton: null != t.button,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? c.dz.UNSPECIFIED,
                      navigableStorefrontApplicationId: t.button?.navigableStorefrontApplicationId?.value ?? "",
                      helpArticleId: t.helpArticle?.id ?? "",
                      helpArticleLinkText: t.helpArticle?.linkText ?? "",
                  };
        },
        controls: {
            header: { label: "Header", type: "text", defaultValue: "Get Nitro and unlock more" },
            body: {
                label: "Body",
                type: "text",
                defaultValue: "Bigger uploads, HD video, custom emoji everywhere, and more. Just {price}/month.",
            },
            assetUrl: {
                label: "Asset URL",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/e05c122ded59f9b504af4fc2fdfb9539a22eff9e6fc3e31b84ae97f0d1857915.svg",
            },
            showButton: { label: "Show Button", type: "boolean", defaultValue: !0 },
            buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Claim Offer" },
            buttonAction: {
                label: "Button Action",
                type: "select",
                defaultValue: c.dz.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: c.dz.UNSPECIFIED },
                    { label: "Open Marketing Page", value: c.dz.OPEN_MARKETING_PAGE },
                    { label: "Open Tier 2 Payment Modal", value: c.dz.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: c.dz.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: c.dz.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: c.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: c.dz.OPEN_SOCIAL_LAYER_STOREFRONT },
                ],
            },
            navigableStorefrontApplicationId: {
                label: "Navigable Storefront Application ID",
                type: "text",
                defaultValue: "1346069614634864772",
            },
            helpArticleId: { label: "Help Article ID", type: "text", defaultValue: "" },
            helpArticleLinkText: { label: "Help Article Link Text", type: "text", defaultValue: "Terms apply." },
        },
    };
var $ = n(959129),
    Z = n(815846),
    q =
        (((r = {}).SEASONAL_GIFTING_2024_BALLOONS_REWARD_SKU_ID = "1301993378484850769"),
        (r.SEASONAL_GIFTING_2024_CAT_EARS_REWARD_SKU_ID = "1301993378484850771"),
        (r.SEASONAL_GIFTING_2024_SNOWFLAKES_REWARD_SKU_ID = "1301993378484850773"),
        (r.VALENTINES_GIFTING_2025_HEARTS_SKU_ID = "1326347611069874277"),
        (r.SUMMER_2025_GIFTING_REWARD_SKU_ID = "1369404111484751873"),
        (r.HALLOWEEN_GIFTING_2025_PUMPKIN_TRICK_SKU_ID = "1418326115876864070"),
        (r.HALLOWEEN_GIFTING_2025_PUMPKIN_TREAT_SKU_ID = "1418326116053287093"),
        (r.HALLOWEEN_GIFTING_2025_GHOST_TRICK_SKU_ID = "1418326115927326830"),
        (r.HALLOWEEN_GIFTING_2025_GHOST_TREAT_SKU_ID = "1418326116166533330"),
        (r.HALLOWEEN_GIFTING_2025_SKULL_TRICK_SKU_ID = "1418326115910680656"),
        (r.HALLOWEEN_GIFTING_2025_SKULL_TREAT_SKU_ID = "1418326116128788590"),
        (r.HALLOWEEN_GIFTING_2025_SPIDER_TRICK_SKU_ID = "1418326115893907677"),
        (r.HALLOWEEN_GIFTING_2025_SPIDER_TREAT_SKU_ID = "1418326116094967808"),
        (r.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID = "1343751617303805983"),
        (r.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID = "1377377712104018071"),
        (r.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID = "1343751617328975954"),
        (r.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID = "1464017397081047081"),
        (r.VALENTINES_GIFTING_2026_FULL_HP_SKU_ID = "1464006538304684063"),
        (r.WORLD_CUP_GIFTING_2026_AROUND_THE_WORLD_SKU_ID = "1509955522797768794"),
        (r.WORLD_CUP_GIFTING_2026_GOAL_SKU_ID = "1509962431290675280"),
        r),
    J = n(67948),
    Q = n(228366),
    X = n(793574),
    ee = n(688810),
    et = n(532794),
    en = n(852218),
    eo = n(202541);
let ea = "playground-gift-customization-banner",
    el = "playground-gift-customization-banner-promotion",
    er = q.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var ei = n(365990),
    ed = n(95701);
function es(e) {
    let { id: t, component_type: n, promotion_id: o, properties: a } = e;
    i.useEffect(() => {
        (0, s.Ak)(),
            Q.h.dispatch({
                type: "PREMIUM_MARKETING_PREVIEW",
                data: { id: t, component_type: n, promotion_id: o, properties: a },
            });
    }, [t, n, o, a]);
}
var eu = n(652215);
let ep = "playground-gift-icon",
    ec = (0, ed.createChannelRecord)({ id: "1", guild_id: "1", type: eu.rbe.GUILD_TEXT, name: "playground" });
var eb = n(720119),
    em = n(40493);
function ef() {}
let e_ = (0, ed.createChannelRecord)({ id: "1", guild_id: "1", type: eu.rbe.GUILD_TEXT, name: "playground" });
var eA = n(978656);
let eT = "playground-gift-plan-selection-card-banner",
    eI = "playground-gift-plan-selection-card-banner-promotion",
    eg = q.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var eN = n(823901);
function eE() {}
let ey = "playground-gift-reminder-nagbar";
var eS = n(670474),
    eC = n(371764);
let eO = {
    name: "Marketing Page Banner",
    id: "marketing-page-banner",
    component: function (e) {
        let t,
            n,
            o = R(p.C.MARKETING_PAGE_BANNER),
            a = o?.properties.oneofKind === "marketingPageBanner" ? o.properties.marketingPageBanner : null,
            l =
                ((t = e.showButton
                    ? {
                          ...a?.button,
                          copy: e.buttonCopy,
                          buttonAction:
                              e.buttonAction !== c.dz.UNSPECIFIED
                                  ? e.buttonAction
                                  : (a?.button?.buttonAction ?? c.dz.OPEN_TIER_2_PAYMENT_MODAL),
                          deeplinkSection: a?.button?.deeplinkSection ?? "",
                          navigableStorefrontApplicationId:
                              a?.button?.navigableStorefrontApplicationId ??
                              ("" !== e.navigableStorefrontApplicationId
                                  ? { value: e.navigableStorefrontApplicationId }
                                  : void 0),
                      }
                    : void 0),
                (n = { assetUrl: e.assetUrl, header: e.header, body: e.body, button: t }),
                null != a ? { ...a, ...n } : { helpArticleId: "", buttonVariant: eS.FF.UNSPECIFIED, ...n });
        return (0, u.jsx)("div", {
            className: F.MT,
            children: (0, u.jsx)(eC.x, {
                componentId: "playground-marketing-page-banner",
                promotionBannerMarketingComponentFields: l,
            }),
        });
    },
    ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.MARKETING_PAGE_BANNER }),
    useDefaultOverrides: () => {
        let e = R(p.C.MARKETING_PAGE_BANNER),
            t = e?.properties.oneofKind === "marketingPageBanner" ? e.properties.marketingPageBanner : null;
        return null == t
            ? null
            : {
                  header: t.header,
                  body: t.body,
                  assetUrl: t.assetUrl,
                  showButton: null != t.button,
                  buttonCopy: t.button?.copy ?? "",
                  buttonAction: t.button?.buttonAction ?? c.dz.UNSPECIFIED,
                  navigableStorefrontApplicationId: t.button?.navigableStorefrontApplicationId?.value ?? "",
              };
    },
    controls: {
        header: { label: "Header", type: "text", defaultValue: "Get Nitro and unlock more" },
        body: {
            label: "Body",
            type: "text",
            defaultValue: "Bigger uploads, HD video, custom emoji everywhere, and more. Just {price}/month.",
        },
        assetUrl: {
            label: "Asset URL",
            type: "text",
            defaultValue:
                "https://cdn.discordapp.com/assets/content/7088cd62971948493c32b65337c62856b4d25e7313305f252193263a1f2209d6.svg",
        },
        showButton: { label: "Show Button", type: "boolean", defaultValue: !0 },
        buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Get Nitro" },
        buttonAction: {
            label: "Button Action",
            type: "select",
            defaultValue: c.dz.UNSPECIFIED,
            options: [
                { label: "Unspecified (use base)", value: c.dz.UNSPECIFIED },
                { label: "Open Marketing Page", value: c.dz.OPEN_MARKETING_PAGE },
                { label: "Open Tier 2 Payment Modal", value: c.dz.OPEN_TIER_2_PAYMENT_MODAL },
                { label: "Open Tier 1 Payment Modal", value: c.dz.OPEN_TIER_1_PAYMENT_MODAL },
                { label: "Open Plan Selection Modal", value: c.dz.OPEN_PLAN_SELECTION_MODAL },
                { label: "Open Premium Group Payment Modal", value: c.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                { label: "Open Social Layer Storefront", value: c.dz.OPEN_SOCIAL_LAYER_STOREFRONT },
            ],
        },
        navigableStorefrontApplicationId: {
            label: "Navigable Storefront Application ID",
            type: "text",
            defaultValue: "1346069614634864772",
        },
    },
};
var eR = n(754804);
let ev = "playground-nagbar";
var eh = n(834730),
    eP = n(709870);
let eL =
        "https://cdn.discordapp.com/assets/content/ce3500be6abe18b64c923af6d520c74cc915387831c4cdd5e4240d175417a87a.svg",
    eU = "playground-payment-modal-banner",
    eM = "playground-plan-select-card-banner";
var ex = n(964661),
    eB = n(503698),
    eG = n.n(eB),
    eD = n(612324),
    ek = n(403581),
    eF = n(214947),
    eV = n(34188),
    ej = n(577473),
    eK = n(724029),
    ew = n(765671),
    ez = n(15632);
function eH() {}
let eW = i.forwardRef(function (e, t) {
    let { icon: n, label: o, selected: a = !1, decoration: l, showHoverGradient: r = !1 } = e,
        { width: i, ref: d } = (0, ew.Ay)(),
        s = (0, eD.A)(t, d);
    return (0, u.jsxs)("button", {
        ref: s,
        type: "button",
        className: eG()(ez.pc, { [ez.EV]: a }),
        onClick: eH,
        children: [
            r && (0, u.jsx)(eK.ls, { eventTargetRef: d, isNitro: !0, contentWidth: i }),
            (0, u.jsxs)("span", {
                className: ez.Hq,
                children: [
                    (0, u.jsx)(n, { size: "md", color: "currentColor" }),
                    (0, u.jsx)(eh.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: ez.We,
                        children: o,
                    }),
                    null != l && (0, u.jsx)("div", { className: ez.UT, children: l }),
                ],
            }),
        ],
    });
});
function eY(e) {
    let {
            tabLabel: t = "Nitro",
            selected: n = !1,
            decoration: o,
            showHoverGradient: a = !1,
            nitroRowRef: l,
            wrapNitroRow: r,
        } = e,
        i = (0, u.jsx)(eW, { ref: l, icon: ek.t, label: t, selected: n, decoration: o, showHoverGradient: a });
    return (0, u.jsxs)("nav", {
        className: ez.C$,
        children: [
            (0, u.jsx)(eW, { icon: eF.$, label: "Friends" }),
            null != r ? r(i) : i,
            (0, u.jsx)(eW, { icon: eV.U, label: "Shop" }),
            (0, u.jsx)(eW, { icon: ej.r, label: "Quests" }),
        ],
    });
}
var e$ = n(52416);
function eZ() {}
let eq = "playground-premium-tab-popover",
    eJ = {
        name: "Premium Tab Popover",
        id: "premium-tab-popover",
        component: function (e) {
            var t;
            let n,
                o,
                {
                    header: a,
                    body: l,
                    buttonCopy: r,
                    buttonAction: d,
                    navigableStorefrontApplicationId: s,
                    assetUrl: b,
                } = e,
                m = R(p.C.PREMIUM_TAB_POPOVER),
                f = m?.properties.oneofKind === "premiumTabPopover" ? m.properties.premiumTabPopover : null;
            es(
                ((n = {
                    header: (t = {
                        header: a,
                        body: l,
                        buttonCopy: r,
                        buttonAction: d,
                        navigableStorefrontApplicationId: s,
                        assetUrl: b,
                    }).header,
                    body: t.body,
                    button: {
                        ...f?.button,
                        copy: t.buttonCopy,
                        buttonAction:
                            t.buttonAction !== c.dz.UNSPECIFIED
                                ? t.buttonAction
                                : (f?.button?.buttonAction ?? c.dz.OPEN_TIER_2_PAYMENT_MODAL),
                        deeplinkSection: f?.button?.deeplinkSection ?? "",
                        navigableStorefrontApplicationId:
                            f?.button?.navigableStorefrontApplicationId ??
                            ("" !== t.navigableStorefrontApplicationId
                                ? { value: t.navigableStorefrontApplicationId }
                                : void 0),
                    },
                    asset: k(t.assetUrl, f?.asset),
                }),
                (o = G(eq, {
                    oneofKind: "premiumTabPopover",
                    premiumTabPopover: null != f ? { ...f, ...n } : { helpArticleId: "", ...n },
                })),
                D(eq, p.C.PREMIUM_TAB_POPOVER, "playground-premium-tab-popover-promotion", o)),
            );
            let _ = i.useRef(null);
            return (0, u.jsx)(eY, {
                selected: !0,
                nitroRowRef: _,
                wrapNitroRow: (e) => (0, u.jsx)(e$.A, { targetElementRef: _, dismissPopover: eZ, children: e }),
            });
        },
        ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.PREMIUM_TAB_POPOVER }),
        useDefaultOverrides: () => {
            let e = R(p.C.PREMIUM_TAB_POPOVER),
                t = e?.properties.oneofKind === "premiumTabPopover" ? e.properties.premiumTabPopover : null;
            return null == t
                ? null
                : {
                      header: t.header,
                      body: t.body,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? c.dz.UNSPECIFIED,
                      navigableStorefrontApplicationId: t.button?.navigableStorefrontApplicationId?.value ?? "",
                      assetUrl: v(t.asset),
                  };
        },
        controls: {
            header: { label: "Header", type: "text", defaultValue: "Your Nitro offer is here" },
            body: {
                label: "Body",
                type: "text",
                defaultValue: "Subscribe now to claim bigger uploads, HD video, and more.",
            },
            buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Get Nitro" },
            buttonAction: {
                label: "Button Action",
                type: "select",
                defaultValue: c.dz.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: c.dz.UNSPECIFIED },
                    { label: "Open Marketing Page", value: c.dz.OPEN_MARKETING_PAGE },
                    { label: "Open Tier 2 Payment Modal", value: c.dz.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: c.dz.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: c.dz.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: c.dz.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: c.dz.OPEN_SOCIAL_LAYER_STOREFRONT },
                ],
            },
            navigableStorefrontApplicationId: {
                label: "Navigable Storefront Application ID",
                type: "text",
                defaultValue: "1346069614634864772",
            },
            assetUrl: {
                label: "Asset URL",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/38b775edc3d9b9fbfd496639f0a1deb9b9882c989fa70fdbb86f60dc764c2f80.svg",
            },
        },
    };
var eQ = n(796878);
let eX = "playground-premium-tab-tooltip";
n(321073);
var e0 = n(896170),
    e2 = n(783878),
    e1 = n(636537);
async function e6() {
    return (await e1.Bo.get({ url: "/premium-marketing/promotions", rejectWithError: !0 })).body.map((e) => {
        let { id: t, name: n, type: o, source: a, end_date: l } = e;
        return { id: t, name: n, type: o, source: a, endDate: null != l ? new Date(l) : void 0 };
    });
}
async function e7(e) {
    let t = await e1.Bo.get({ url: `/premium-marketing/promotions/${e}/components`, rejectWithError: !0 }),
        n = new Map();
    for (let e of t.body) {
        let t = B.m.fromBinary((0, x.A)(e.properties)),
            o = n.get(e.component_type) ?? [];
        o.push({
            premiumType: e.premium_type,
            premiumSource: e.premium_source,
            premiumSubscriptionType: e.premium_subscription_type,
            platform: e.platform,
            isDefaultBase: t.isDefaultBase,
            properties: t,
        }),
            n.set(e.component_type, o);
    }
    return n;
}
let e3 = [
    { type: "marketing_moment", label: "Marketing Moments" },
    { type: "gift", label: "Gift Promotions" },
];
function e8(e) {
    let t = [];
    for (let n of e3) {
        let o = e.filter((e) => e.type === n.type);
        if (0 !== o.length)
            for (let e of (t.push({ id: `header-${n.type}`, value: `header-${n.type}`, label: n.label, disabled: !0 }),
            o))
                t.push({ id: e.id, value: e.id, label: e.name });
    }
    return t;
}
function e4(e, t) {
    return { title: e, stories: [...t].sort((e, t) => e.name.localeCompare(t.name)) };
}
let e5 = {
        id: "marketing",
        name: "Marketing",
        groups: [
            e4("Premium Surfaces", [
                K,
                Y,
                eO,
                {
                    name: "Nagbar",
                    id: "nagbar",
                    component: function (e) {
                        var t;
                        let n,
                            o,
                            { body: a, ctaLabel: l, helpArticleId: r } = e,
                            i = R(p.C.NAGBAR),
                            d = i?.properties.oneofKind === "nagbar" ? i.properties.nagbar : null;
                        return (
                            es(
                                ((n = {
                                    body: (t = { body: a, ctaLabel: l, helpArticleId: r }).body,
                                    ctaLabel: t.ctaLabel,
                                    helpArticle:
                                        "" !== t.helpArticleId
                                            ? {
                                                  ...d?.helpArticle,
                                                  id: t.helpArticleId,
                                                  linkText: d?.helpArticle?.linkText ?? "",
                                              }
                                            : void 0,
                                }),
                                (o = G(ev, {
                                    oneofKind: "nagbar",
                                    nagbar:
                                        null != d
                                            ? { ...d, ...n }
                                            : { ctaAction: c.dz.OPEN_TIER_2_PAYMENT_MODAL, deeplinkSection: "", ...n },
                                })),
                                D(ev, p.C.NAGBAR, "playground-nagbar-promotion", o)),
                            ),
                            (0, u.jsx)("div", { className: F.MT, children: (0, u.jsx)(eR.A, {}) })
                        );
                    },
                    ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.NAGBAR }),
                    useDefaultOverrides: () => {
                        let e = R(p.C.NAGBAR),
                            t = e?.properties.oneofKind === "nagbar" ? e.properties.nagbar : null;
                        return null == t
                            ? null
                            : { body: t.body, ctaLabel: t.ctaLabel, helpArticleId: t.helpArticle?.id ?? "" };
                    },
                    controls: {
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Get Nitro and unlock bigger uploads, HD video, custom emoji, and more.",
                        },
                        ctaLabel: { label: "CTA Label", type: "text", defaultValue: "Get Nitro" },
                        helpArticleId: { label: "Help Article ID", type: "text", defaultValue: "" },
                    },
                },
                {
                    name: "Orbs Delivered Modal",
                    id: "nitro-orbs-bonus-modal",
                    component: function (e) {
                        let { orbsAmount: t } = e;
                        return (0, u.jsxs)(_.B, {
                            direction: "vertical",
                            gap: 16,
                            align: "start",
                            children: [
                                (0, u.jsx)(eh.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children:
                                        "The post-purchase \u201COrbs delivered\u201D confirmation modal for the Nitro orbs bonus. Set the orb amount in the controls, then open it.",
                                }),
                                (0, u.jsx)(b.$, {
                                    text: "Open Orbs delivered modal",
                                    onClick: () => (0, eP.$)({ orbsAmount: t }),
                                }),
                            ],
                        });
                    },
                    controls: { orbsAmount: { label: "Orb amount", type: "number", defaultValue: 1e4, minValue: 0 } },
                },
                {
                    name: "Payment Modal Banner",
                    id: "payment-modal-banner",
                    component: function (e) {
                        let { body: t, assetUrl: n } = e,
                            o = R(p.C.PAYMENT_MODAL_BANNER);
                        es(
                            (function (e, t) {
                                let { body: n, assetUrl: o } = e,
                                    a = { assetUrl: o, body: n },
                                    l = G(eU, {
                                        oneofKind: "paymentModalBanner",
                                        paymentModalBanner: null != t ? { ...t, ...a } : { header: "", ...a },
                                    });
                                return D(eU, p.C.PAYMENT_MODAL_BANNER, "playground-payment-modal-banner-promotion", l);
                            })(
                                { body: t, assetUrl: n },
                                o?.properties.oneofKind === "paymentModalBanner"
                                    ? o.properties.paymentModalBanner
                                    : null,
                            ),
                        );
                        let { analyticsLocations: a } = (0, ee.Ay)(X.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, u.jsx)("div", {
                            className: F.MT,
                            children: (0, u.jsx)(b.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Payment Modal",
                                onClick: () => (0, et.A)({ subscriptionTier: eo.pe.TIER_2, analyticsLocations: a }),
                            }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.PAYMENT_MODAL_BANNER }),
                    useDefaultOverrides: () => {
                        let e = R(p.C.PAYMENT_MODAL_BANNER),
                            t =
                                e?.properties.oneofKind === "paymentModalBanner"
                                    ? e.properties.paymentModalBanner
                                    : null;
                        return null == t ? null : { body: t.body, assetUrl: t.assetUrl };
                    },
                    controls: {
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Your Nitro offer is waiting - subscribe now to claim it.",
                        },
                        assetUrl: { label: "Asset URL", type: "text", defaultValue: eL },
                    },
                },
                {
                    name: "Plan Select Card Banner",
                    id: "plan-select-card-banner",
                    component: function (e) {
                        let { body: t, assetUrl: n } = e,
                            o = R(p.C.PLAN_SELECT_CARD_BANNER);
                        es(
                            (function (e, t) {
                                let { body: n, assetUrl: o } = e,
                                    a = G(eM, {
                                        oneofKind: "planSelectCardBanner",
                                        planSelectCardBanner: { ...t, body: n, asset: k(o, t?.asset) },
                                    });
                                return D(
                                    eM,
                                    p.C.PLAN_SELECT_CARD_BANNER,
                                    "playground-plan-select-card-banner-promotion",
                                    a,
                                );
                            })(
                                { body: t, assetUrl: n },
                                o?.properties.oneofKind === "planSelectCardBanner"
                                    ? o.properties.planSelectCardBanner
                                    : null,
                            ),
                        );
                        let { analyticsLocations: a } = (0, ee.Ay)(X.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, u.jsx)("div", {
                            className: F.MT,
                            children: (0, u.jsx)(b.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Select Plan",
                                onClick: () => (0, et.A)({ analyticsLocations: a }),
                            }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.PLAN_SELECT_CARD_BANNER }),
                    useDefaultOverrides: () => {
                        let e = R(p.C.PLAN_SELECT_CARD_BANNER),
                            t =
                                e?.properties.oneofKind === "planSelectCardBanner"
                                    ? e.properties.planSelectCardBanner
                                    : null;
                        return null == t ? null : { body: t.body, assetUrl: v(t.asset) };
                    },
                    controls: {
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Join Nitro today and get your second month free! Limited time offer.",
                        },
                        assetUrl: { label: "Asset URL", type: "text", defaultValue: eL },
                    },
                },
                {
                    name: "Premium Tab Badge",
                    id: "premium-tab-badge",
                    component: function (e) {
                        let t = (0, u.jsx)(ex.A, {
                            componentId: "playground-premium-tab-badge",
                            badgeCopy: e.badgeCopy,
                            acknowledgedBadgeCopy: e.acknowledgedBadgeCopy,
                            isDismissed: e.isDismissed,
                        });
                        return (0, u.jsx)(eY, {
                            tabLabel: e.tabLabel,
                            selected: e.selected,
                            decoration: t,
                            showHoverGradient: e.showHoverGradient,
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.PREMIUM_TAB }),
                    useDefaultOverrides: () => {
                        let e = R(p.C.PREMIUM_TAB),
                            t = e?.properties.oneofKind === "premiumTab" ? e.properties.premiumTab : null;
                        return null == t
                            ? null
                            : {
                                  badgeCopy: t.badgeLabel,
                                  acknowledgedBadgeCopy: t.acknowledgedBadgeLabel,
                                  showHoverGradient: t.showHoverGradient,
                              };
                    },
                    controls: {
                        tabLabel: { label: "Tab Label", type: "text", defaultValue: "Nitro" },
                        selected: { label: "Selected", type: "boolean", defaultValue: !1 },
                        badgeCopy: { label: "Badge Copy", type: "text", defaultValue: "Offer" },
                        acknowledgedBadgeCopy: { label: "Acknowledged Copy", type: "text", defaultValue: "Offer" },
                        isDismissed: { label: "Acknowledged", type: "boolean", defaultValue: !1 },
                        showHoverGradient: { label: "Show hover gradient", type: "boolean", defaultValue: !1 },
                    },
                },
                eJ,
                {
                    name: "Premium Tab Tooltip",
                    id: "premium-tab-tooltip",
                    component: function (e) {
                        var t;
                        let n,
                            o,
                            { header: a, body: l, assetUrl: r } = e,
                            i = R(p.C.PREMIUM_TAB_TOOLTIP),
                            d = i?.properties.oneofKind === "premiumTabTooltip" ? i.properties.premiumTabTooltip : null;
                        return (
                            es(
                                ((n = {
                                    header: (t = { header: a, body: l, assetUrl: r }).header,
                                    body: t.body,
                                    asset: k(t.assetUrl, d?.asset),
                                }),
                                (o = G(eX, {
                                    oneofKind: "premiumTabTooltip",
                                    premiumTabTooltip: null != d ? { ...d, ...n } : n,
                                })),
                                D(eX, p.C.PREMIUM_TAB_TOOLTIP, "playground-premium-tab-tooltip-promotion", o)),
                            ),
                            (0, u.jsx)(eY, { selected: !0, wrapNitroRow: (e) => (0, u.jsx)(eQ.A, { children: e }) })
                        );
                    },
                    ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.PREMIUM_TAB_TOOLTIP }),
                    useDefaultOverrides: () => {
                        let e = R(p.C.PREMIUM_TAB_TOOLTIP),
                            t = e?.properties.oneofKind === "premiumTabTooltip" ? e.properties.premiumTabTooltip : null;
                        return null == t ? null : { header: t.header, body: t.body, assetUrl: v(t.asset) };
                    },
                    controls: {
                        header: { label: "Header", type: "text", defaultValue: "Get Nitro" },
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Unlock bigger uploads, HD video, custom emoji, and more.",
                        },
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/626692d6d8d71b08bd3b9f0f9d846a327960d0e0a5a54adb34f5373731287e98.svg",
                        },
                    },
                },
            ]),
            e4("Gifting Surfaces", [
                {
                    name: "Billing Settings Gift Banner",
                    id: "billing-settings-nitro-gift-banner",
                    component: function (e) {
                        let t,
                            n = R(p.C.BILLING_SETTINGS_NITRO_GIFT_BANNER),
                            o =
                                n?.properties.oneofKind === "billingSettingsNitroGiftBanner"
                                    ? n.properties.billingSettingsNitroGiftBanner
                                    : null;
                        return (0, u.jsx)("div", {
                            className: F.MT,
                            children: (0, u.jsx)(Z.c, {
                                config:
                                    ((t = {
                                        header: e.header,
                                        body: e.body,
                                        additionalTerms: e.additionalTerms,
                                        textColor: e.textColor,
                                        asset: k(e.assetUrl, o?.asset),
                                        backgroundAsset: k(e.backgroundAssetUrl, o?.backgroundAsset),
                                        gradient: {
                                            colors: [e.gradientStartColor, e.gradientEndColor],
                                            angle: e.gradientAngle,
                                        },
                                    }),
                                    null != o ? { ...o, ...t } : $.v.create(t)),
                            }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.BILLING_SETTINGS_NITRO_GIFT_BANNER }),
                    useDefaultOverrides: () => {
                        let e = R(p.C.BILLING_SETTINGS_NITRO_GIFT_BANNER),
                            t =
                                e?.properties.oneofKind === "billingSettingsNitroGiftBanner"
                                    ? e.properties.billingSettingsNitroGiftBanner
                                    : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            header: t.header,
                            body: t.body,
                            additionalTerms: t.additionalTerms,
                            assetUrl: v(t.asset),
                            backgroundAssetUrl: v(t.backgroundAsset),
                            gradientStartColor: n[0] ?? "",
                            gradientEndColor: n[1] ?? "",
                            gradientAngle: t.gradient?.angle ?? 0,
                            textColor: t.textColor,
                        };
                    },
                    controls: {
                        header: { label: "Header", type: "text", defaultValue: "Give the gift of Nitro" },
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue:
                                "Share bigger uploads, HD video, custom emoji, and more with someone special.",
                        },
                        additionalTerms: { label: "Additional Terms", type: "text", defaultValue: "" },
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/f5568af2417d741c736bee8a6dca725049580f72f4ace4be770de662c8ed76d4.png",
                        },
                        backgroundAssetUrl: {
                            label: "Background Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/c0da396fa3e5373677f66f634ee2e5fb32f4d8b85063a908be7f975239145b12.png",
                        },
                        gradientStartColor: { label: "Gradient Start", type: "color", defaultValue: "#7873F5" },
                        gradientEndColor: { label: "Gradient End", type: "color", defaultValue: "#FF6AC2" },
                        gradientAngle: {
                            label: "Gradient Angle",
                            type: "slider",
                            defaultValue: 180,
                            minValue: 0,
                            maxValue: 360,
                        },
                        textColor: { label: "Text Color", type: "color", defaultValue: "#FFFFFF" },
                    },
                },
                {
                    name: "Gift Customization Banner",
                    id: "gift-customization-banner",
                    component: function (e) {
                        let { analyticsLocations: t } = (0, ee.Ay)(X.A.PAYMENT_FLOW_TEST_PAGE),
                            n = R(p.C.GIFT_CUSTOMIZATION_BANNER),
                            o =
                                n?.properties.oneofKind === "giftCustomizationBanner"
                                    ? n.properties.giftCustomizationBanner
                                    : null;
                        return (0, u.jsx)("div", {
                            className: F.MT,
                            children: (0, u.jsx)(b.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let n, a, l, r, i;
                                    (r = {
                                        id: ea,
                                        component_type: p.C.GIFT_CUSTOMIZATION_BANNER,
                                        promotion_id: el,
                                        properties:
                                            ((n = {
                                                asset: k(e.assetUrl, o?.asset),
                                                backgroundAsset: k(e.backgroundAssetUrl, o?.backgroundAsset),
                                                gradient: {
                                                    colors: [e.gradientStartColor, e.gradientEndColor],
                                                    angle: e.gradientAngle,
                                                },
                                            }),
                                            (a =
                                                null != o
                                                    ? { ...o, ...n }
                                                    : {
                                                          assetUrl: "",
                                                          desktopBody: "",
                                                          mobileBody: "",
                                                          backgroundAssetUrl: "",
                                                          assetVariant: J.u.NORMAL,
                                                          ...n,
                                                      }),
                                            (l = B.m.create({
                                                contentIdentifier: ea,
                                                properties: {
                                                    oneofKind: "giftCustomizationBanner",
                                                    giftCustomizationBanner: a,
                                                },
                                            })),
                                            (0, x.C)(B.m.toBinary(l))),
                                    }),
                                        (i = {
                                            id: el,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: en.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [r],
                                            metadata: { gift_promotion: { reward_sku_ids: [er] } },
                                        }),
                                        Q.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [i],
                                            consumedInboundPromotionId: null,
                                        }),
                                        Q.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, et.A)({
                                            isGift: !0,
                                            subscriptionTier: eo.pe.TIER_2,
                                            analyticsLocations: t,
                                        });
                                },
                            }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.GIFT_CUSTOMIZATION_BANNER }),
                    useDefaultOverrides: () => {
                        let e = R(p.C.GIFT_CUSTOMIZATION_BANNER),
                            t =
                                e?.properties.oneofKind === "giftCustomizationBanner"
                                    ? e.properties.giftCustomizationBanner
                                    : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            assetUrl: v(t.asset),
                            backgroundAssetUrl: v(t.backgroundAsset),
                            gradientStartColor: n[0] ?? "",
                            gradientEndColor: n[1] ?? "",
                            gradientAngle: t.gradient?.angle ?? 0,
                        };
                    },
                    controls: {
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/0d3886dfd9f05895ee80f5e441fa818b7edc5fdba6fd2ca543eef5c0a9a8a4d7.png",
                        },
                        backgroundAssetUrl: {
                            label: "Background Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/3b0b1714d586a0d28a37b5f0a23f2f516a25971b57127af11027adb8e3e01a53.png",
                        },
                        gradientStartColor: { label: "Gradient Start", type: "color", defaultValue: "#7873F5" },
                        gradientEndColor: { label: "Gradient End", type: "color", defaultValue: "#FF6AC2" },
                        gradientAngle: {
                            label: "Gradient Angle",
                            type: "slider",
                            defaultValue: 90,
                            minValue: 0,
                            maxValue: 360,
                        },
                    },
                },
                {
                    name: "Gift Icon",
                    id: "gift-icon",
                    component: function (e) {
                        let t,
                            n,
                            o = R(p.C.GIFT_ICON),
                            a = o?.properties.oneofKind === "giftIcon" ? o.properties.giftIcon : null;
                        return (
                            es(
                                ((t = {
                                    boxAnimationUrl: e.boxAnimationUrl,
                                    trinketAnimationUrl: e.trinketAnimationUrl,
                                    trinketGlowAnimationUrl: e.trinketGlowAnimationUrl,
                                    gradient: {
                                        colors: [e.gradientStartColor, e.gradientEndColor],
                                        angle: e.gradientAngle,
                                    },
                                }),
                                (n = G(ep, { oneofKind: "giftIcon", giftIcon: null != a ? { ...a, ...t } : t })),
                                D(ep, p.C.GIFT_ICON, "playground-gift-icon-promotion", n)),
                            ),
                            (0, u.jsx)("div", { className: F.WG, children: (0, u.jsx)(ei.A, { channel: ec }) })
                        );
                    },
                    ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.GIFT_ICON }),
                    useDefaultOverrides: () => {
                        let e = R(p.C.GIFT_ICON),
                            t = e?.properties.oneofKind === "giftIcon" ? e.properties.giftIcon : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            boxAnimationUrl: t.boxAnimationUrl,
                            trinketAnimationUrl: t.trinketAnimationUrl,
                            trinketGlowAnimationUrl: t.trinketGlowAnimationUrl,
                            gradientStartColor: n[0] ?? "",
                            gradientEndColor: n[1] ?? "",
                            gradientAngle: t.gradient?.angle ?? 0,
                        };
                    },
                    controls: {
                        boxAnimationUrl: { label: "Box Animation URL (Lottie)", type: "text", defaultValue: "" },
                        trinketAnimationUrl: {
                            label: "Trinket Animation URL (Lottie)",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/2587f697fb8e499a331c465aee4b37ae2b233d4a21ce130ef9a3032c1455f1c4.lottiejson",
                        },
                        trinketGlowAnimationUrl: {
                            label: "Trinket Glow Animation URL (Lottie)",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/a08eb1072a1016a58c1e5e3d92a9476900d8e8370a29c33c686c39ec9d333fb7.lottiejson",
                        },
                        gradientStartColor: { label: "Gradient Start", type: "color", defaultValue: "#7873F5" },
                        gradientEndColor: { label: "Gradient End", type: "color", defaultValue: "#FF6AC2" },
                        gradientAngle: {
                            label: "Gradient Angle",
                            type: "slider",
                            defaultValue: 180,
                            minValue: 0,
                            maxValue: 360,
                        },
                    },
                },
                {
                    name: "Gift Icon Coachmark",
                    id: "gift-icon-coachmark",
                    component: function (e) {
                        let t = R(p.C.GIFT_ICON_COACHMARK),
                            n = t?.properties.oneofKind === "giftIconCoachmark" ? t.properties.giftIconCoachmark : null,
                            o = { header: e.header, body: e.body, asset: k(e.assetUrl, n?.asset) },
                            a = null != n ? { ...n, ...o } : eb.l.create(o);
                        return (0, u.jsx)("div", {
                            className: F.WG,
                            children: (0, u.jsx)(em.A, {
                                coachmarkConfig: a,
                                onComplete: ef,
                                onCheckItOutClick: ef,
                                markAsDismissed: ef,
                                children: (0, u.jsx)(ei.A, { channel: e_ }),
                            }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.GIFT_ICON_COACHMARK }),
                    useDefaultOverrides: () => {
                        let e = R(p.C.GIFT_ICON_COACHMARK),
                            t = e?.properties.oneofKind === "giftIconCoachmark" ? e.properties.giftIconCoachmark : null;
                        return null == t ? null : { header: t.header, body: t.body, assetUrl: v(t.asset) };
                    },
                    controls: {
                        header: { label: "Header", type: "text", defaultValue: "Gift Nitro" },
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Send Nitro to a friend and claim a free reward for yourself.",
                        },
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/1d586250a524175ec9772040719e124d3ab9fe23d31804273ab9ced2b77446b3.png",
                        },
                    },
                },
                {
                    name: "Gift Plan Selection Card Banner",
                    id: "gift-plan-selection-card-banner",
                    component: function (e) {
                        let { analyticsLocations: t } = (0, ee.Ay)(X.A.PAYMENT_FLOW_TEST_PAGE),
                            n = R(p.C.GIFT_PLAN_SELECTION_CARD_BANNER),
                            o =
                                n?.properties.oneofKind === "giftPlanSelectionCardBanner"
                                    ? n.properties.giftPlanSelectionCardBanner
                                    : null;
                        return (0, u.jsx)("div", {
                            className: F.MT,
                            children: (0, u.jsx)(b.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let n, a, l, r, i;
                                    (r = {
                                        id: eT,
                                        component_type: p.C.GIFT_PLAN_SELECTION_CARD_BANNER,
                                        promotion_id: eI,
                                        properties:
                                            ((n = {
                                                avatarAsset: k(e.avatarUrl, o?.avatarAsset),
                                                bannerAsset: k(e.bannerUrl, o?.bannerAsset),
                                                gradient: {
                                                    colors: [e.gradientStartColor, e.gradientEndColor],
                                                    angle: e.gradientAngle,
                                                },
                                            }),
                                            (a =
                                                null != o
                                                    ? { ...o, ...n }
                                                    : {
                                                          header: "",
                                                          desktopBody: "",
                                                          mobileBody: "",
                                                          bannerAssetUrl: "",
                                                          assetVariant: eA.Y.NORMAL,
                                                          backgroundAssetUrl: "",
                                                          cardAssetUrl: "",
                                                          ...n,
                                                      }),
                                            (l = B.m.create({
                                                contentIdentifier: eT,
                                                properties: {
                                                    oneofKind: "giftPlanSelectionCardBanner",
                                                    giftPlanSelectionCardBanner: a,
                                                },
                                            })),
                                            (0, x.C)(B.m.toBinary(l))),
                                    }),
                                        (i = {
                                            id: eI,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: en.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [r],
                                            metadata: { gift_promotion: { reward_sku_ids: [eg] } },
                                        }),
                                        Q.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [i],
                                            consumedInboundPromotionId: null,
                                        }),
                                        Q.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, et.A)({ isGift: !0, analyticsLocations: t });
                                },
                            }),
                        });
                    },
                    ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.GIFT_PLAN_SELECTION_CARD_BANNER }),
                    useDefaultOverrides: () => {
                        let e = R(p.C.GIFT_PLAN_SELECTION_CARD_BANNER),
                            t =
                                e?.properties.oneofKind === "giftPlanSelectionCardBanner"
                                    ? e.properties.giftPlanSelectionCardBanner
                                    : null;
                        if (null == t) return null;
                        let n = t.gradient?.colors ?? [];
                        return {
                            avatarUrl: v(t.avatarAsset),
                            bannerUrl: v(t.bannerAsset),
                            gradientStartColor: n[0] ?? "",
                            gradientEndColor: n[1] ?? "",
                            gradientAngle: t.gradient?.angle ?? 0,
                        };
                    },
                    controls: {
                        avatarUrl: {
                            label: "Avatar URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/2919c872bfcd7b0eb5fe4fcd68e8eb334037461049eb025eb9646d5b886382ad.png",
                        },
                        bannerUrl: {
                            label: "Banner URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/58b31636da40fd4a599e37013966a825be1655aa29c599f508f4b26255da46eb.png",
                        },
                        gradientStartColor: { label: "Gradient Start", type: "color", defaultValue: "#7873F5" },
                        gradientEndColor: { label: "Gradient End", type: "color", defaultValue: "#FF6AC2" },
                        gradientAngle: {
                            label: "Gradient Angle",
                            type: "slider",
                            defaultValue: 90,
                            minValue: 0,
                            maxValue: 360,
                        },
                    },
                },
                {
                    name: "Gift Reminder Nagbar",
                    id: "gift-reminder-nagbar",
                    component: function (e) {
                        let t,
                            n,
                            { body: o } = e,
                            a = R(p.C.GIFT_REMINDER_NAGBAR),
                            l =
                                a?.properties.oneofKind === "giftReminderNagbar"
                                    ? a.properties.giftReminderNagbar
                                    : null;
                        return (
                            es(
                                ((t = { body: { body: o }.body }),
                                (n = G(ey, {
                                    oneofKind: "giftReminderNagbar",
                                    giftReminderNagbar: null != l ? { ...l, ...t } : t,
                                })),
                                D(ey, p.C.GIFT_REMINDER_NAGBAR, "playground-gift-reminder-nagbar-promotion", n)),
                            ),
                            (0, u.jsx)("div", {
                                className: F.MT,
                                children: (0, u.jsx)(eN.y, { markAsDismissed: eE, className: F.gO }),
                            })
                        );
                    },
                    ControlsExtension: () => (0, u.jsx)(M, { componentType: p.C.GIFT_REMINDER_NAGBAR }),
                    useDefaultOverrides: () => {
                        let e = R(p.C.GIFT_REMINDER_NAGBAR),
                            t =
                                e?.properties.oneofKind === "giftReminderNagbar"
                                    ? e.properties.giftReminderNagbar
                                    : null;
                        return null == t ? null : { body: t.body };
                    },
                    controls: {
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Don't forget - gift Nitro and claim a free reward before the offer ends.",
                        },
                    },
                },
            ]),
        ],
        tags: ["Marketing", "Premium", "Nitro"],
        IconComponent: d.B,
        Provider: function (e) {
            let { children: t } = e;
            return (
                i.useEffect(
                    () => () => {
                        (0, s.Ak)(), (0, s.b8)();
                    },
                    [],
                ),
                t
            );
        },
        HeaderControl: function () {
            let e = O.useField("selected"),
                [t, n] = i.useState([]),
                o = i.useRef(null);
            i.useEffect(() => {
                let e = !0;
                return (
                    e6()
                        .then((t) => {
                            e && n(t);
                        })
                        .catch(() => {}),
                    () => {
                        e = !1;
                    }
                );
            }, []);
            let a = i.useMemo(() => e8(t), [t]),
                l = i.useCallback((e, n) => e8((0, e0.Ht)(t, n, { keys: ["name"] })), [t]);
            return 0 === t.length
                ? null
                : (0, u.jsx)("div", {
                      className: F.$K,
                      children: (0, u.jsx)(e2.Z, {
                          clearable: !0,
                          selectionMode: "single",
                          placeholder: "Load Promo Data",
                          value: e?.id,
                          options: a,
                          customMatchSorter: l,
                          onSelectionChange: function (e) {
                              if (((o.current = e), null == e))
                                  return void O.setState({
                                      selected: null,
                                      componentRowsByType: null,
                                      availableLocales: [],
                                      userStateByType: new Map(),
                                      localeOverride: null,
                                  });
                              let n = t.find((t) => t.id === e);
                              null != n &&
                                  e7(n.id)
                                      .then((e) => {
                                          o.current === n.id &&
                                              (function (e, t) {
                                                  let n = new Set();
                                                  for (let e of t.values())
                                                      for (let t of e)
                                                          !(function e(t, n) {
                                                              if (Array.isArray(t)) {
                                                                  for (let o of t) e(o, n);
                                                                  return;
                                                              }
                                                              if ("object" == typeof t && null != t)
                                                                  for (let [o, a] of Object.entries(t)) {
                                                                      if (o.endsWith(S) && C(a)) {
                                                                          for (let e of Object.keys(a.localizations))
                                                                              n.add(e);
                                                                          continue;
                                                                      }
                                                                      e(a, n);
                                                                  }
                                                          })(t.properties, n);
                                                  O.setState({
                                                      selected: e,
                                                      componentRowsByType: t,
                                                      availableLocales: [...n].sort(),
                                                      userStateByType: new Map(),
                                                      localeOverride: null,
                                                  });
                                              })(n, e);
                                      })
                                      .catch(() => {});
                          },
                      }),
                  });
        },
    },
    e9 = { playgroundBaseUrl: "marketing", collections: [e5] };
