n.d(t, { playgroundConfig: () => tn });
var o,
    l,
    a = n(582128),
    r = n(175841),
    i = n(597758),
    d = n(477900),
    s = n(877624),
    p = n(232582),
    u = n(308588),
    c = n(821609),
    b = n(192308),
    m = n(273185),
    _ = n(811091),
    A = n(331322),
    f = n(691885),
    I = n(839214),
    N = n(365977),
    T = n(856793),
    g = n(792673),
    E =
        (((o = {})[(o.NONE = 0)] = "NONE"),
        (o[(o.TIER_1 = 1)] = "TIER_1"),
        (o[(o.TIER_2 = 2)] = "TIER_2"),
        (o[(o.TIER_0 = 3)] = "TIER_0"),
        o);
let S = [
    { id: "EVERYONE", label: "Everyone", premiumType: null, premiumSource: null, premiumSubscriptionType: null },
    { id: "NON_NITRO", label: "Non Nitro", premiumType: 0, premiumSource: T.f.NONE, premiumSubscriptionType: g.j.NONE },
    {
        id: "FRACTIONAL_WITHOUT_SUB",
        label: "Nitro Credit w/o sub",
        premiumType: 2,
        premiumSource: T.f.FRACTIONAL_NITRO,
        premiumSubscriptionType: g.j.NONE,
    },
    {
        id: "FRACTIONAL_WITH_TIER_2_SUB",
        label: "Nitro Credit with Nitro Standard sub",
        premiumType: 2,
        premiumSource: T.f.FRACTIONAL_NITRO,
        premiumSubscriptionType: g.j.TIER_2,
    },
    {
        id: "FRACTIONAL_WITH_TIER_1_SUB",
        label: "Nitro Credit with Nitro Classic sub",
        premiumType: 2,
        premiumSource: T.f.FRACTIONAL_NITRO,
        premiumSubscriptionType: g.j.TIER_1,
    },
    {
        id: "FRACTIONAL_WITH_TIER_0_SUB",
        label: "Nitro Credit with Nitro Basic sub",
        premiumType: 2,
        premiumSource: T.f.FRACTIONAL_NITRO,
        premiumSubscriptionType: g.j.TIER_0,
    },
    {
        id: "NITRO_BASIC",
        label: "Nitro Basic",
        premiumType: 3,
        premiumSource: T.f.SUBSCRIPTION,
        premiumSubscriptionType: g.j.TIER_0,
    },
    {
        id: "NITRO_CLASSIC",
        label: "Nitro Classic",
        premiumType: 1,
        premiumSource: T.f.SUBSCRIPTION,
        premiumSubscriptionType: g.j.TIER_1,
    },
    {
        id: "NITRO_STANDARD",
        label: "Nitro Standard",
        premiumType: 2,
        premiumSource: T.f.SUBSCRIPTION,
        premiumSubscriptionType: g.j.TIER_2,
    },
    {
        id: "NITRO_SQUAD",
        label: "Nitro Squad",
        premiumType: 2,
        premiumSource: T.f.SUBSCRIPTION_GROUP,
        premiumSubscriptionType: g.j.TIER_2,
    },
];
function y(e, t, n) {
    let o = S.find((o) => o.premiumType === e && o.premiumSource === t && o.premiumSubscriptionType === n);
    if (null != o) return { id: o.id, label: o.label };
    let l = null == e ? "Any" : E[e],
        a = null == t ? "Any" : T.f[t],
        r = null == n ? "Any" : g.j[n];
    return { id: `CUSTOM:${e ?? "any"}:${t ?? "any"}:${n ?? "any"}`, label: `${l} / ${a} / ${r}` };
}
let C = (0, I.D)(() => ({
    selected: null,
    componentRowsByType: null,
    availableLocales: [],
    userStateByType: new Map(),
    localeOverride: null,
}));
function O(e) {
    let t = C.useField("componentRowsByType"),
        n = C.useField("userStateByType"),
        o = C.useField("localeOverride");
    return a.useMemo(
        () =>
            (function (e, t, n, o) {
                let l = e?.get(t);
                if (null == l) return null;
                let a = (function (e, t) {
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
                })(l, n);
                return null == a ? null : (0, N.v)(a.properties, o ?? "en-US");
            })(t, e, n.get(e) ?? null, o),
        [t, n, o, e],
    );
}
function h() {
    let e = C.useField("selected"),
        [t] = a.useState(() => new Date(Date.now() + 6048e5));
    return e?.endDate ?? t;
}
function R(e) {
    return null == e ? "" : "" !== e.darkUrl ? e.darkUrl : e.lightUrl;
}
let v = "__default__";
var P = n(792996),
    M = n(771207);
function L(e) {
    let { label: t, value: n, disabled: o } = e;
    return { id: n, value: n, label: t, disabled: o };
}
function x(e) {
    let t,
        { componentType: n } = e,
        o = C.useField("selected"),
        l = C.useField("componentRowsByType"),
        r = C.useField("userStateByType"),
        i = C.useField("localeOverride"),
        s = C.useField("availableLocales"),
        p =
            ((t = C.useField("componentRowsByType")),
            a.useMemo(() => {
                let e = t?.get(n) ?? [],
                    o = new Map();
                for (let t of e) {
                    if (t.isDefaultBase) continue;
                    let e = y(t.premiumType, t.premiumSource, t.premiumSubscriptionType);
                    o.has(e.id) || o.set(e.id, e);
                }
                return [...o.values()];
            }, [t, n])),
        u = a.useMemo(
            () =>
                (0, P.getLanguages)()
                    .filter((e) => e.enabled && "en-US" !== e.code)
                    .map((e) => ({ label: e.name, value: e.code }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        c = a.useMemo(() => {
            let e;
            return (
                (e = new Set(s)),
                [
                    { label: "Default (en-US)", value: v },
                    ...u
                        .filter((e) => "en-US" !== e.value)
                        .map((t) => ({ label: t.label, value: t.value, disabled: !e.has(t.value) })),
                ]
            );
        }, [s, u]),
        b = (l?.get(n)?.length ?? 0) > 0;
    if (null == o || !b) return null;
    let m = p.length >= 1,
        _ = [{ label: "Default", value: v }, ...p.map((e) => ({ label: e.label, value: e.id }))];
    return (0, d.jsx)("div", {
        className: M.k,
        children: (0, d.jsxs)(A.B, {
            gap: 16,
            children: [
                m &&
                    (0, d.jsx)(f.l, {
                        label: "User State",
                        value: r.get(n) ?? v,
                        onSelectionChange: (e) => {
                            var t;
                            let o;
                            return (
                                (t = e === v ? null : e),
                                (o = new Map(C.getState().userStateByType)),
                                void (null == t ? o.delete(n) : o.set(n, t), C.setState({ userStateByType: o }))
                            );
                        },
                        options: _,
                        formatOption: L,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                (0, d.jsx)(f.l, {
                    label: "Locale",
                    value: i ?? v,
                    onSelectionChange: (e) => {
                        var t;
                        return ((t = e === v ? null : e), void C.setState({ localeOverride: t }));
                    },
                    options: c,
                    formatOption: L,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var G = n(804638),
    U = n(767589);
function B(e, t) {
    return G.m.create({ contentIdentifier: e, properties: t });
}
function D(e, t, n, o) {
    return { id: e, component_type: t, promotion_id: n, properties: (0, U.ob)(G.m, o) };
}
function k(e, t) {
    return e === R(t) ? t : "" !== e ? { lightUrl: e, darkUrl: e, lightStaticUrl: e, darkStaticUrl: e } : void 0;
}
var F = n(117513);
let j = "playground-announcement-modal",
    V = _.default.fromTimestamp(Date.UTC(2016, 0, 1)),
    K = {
        name: "Announcement Modal",
        id: "announcement-modal",
        component: function (e) {
            let t = O(s.C.ANNOUNCEMENT_MODAL),
                o =
                    t?.properties.oneofKind === "announcementModalVariant1"
                        ? t.properties.announcementModalVariant1
                        : null;
            return (0, d.jsx)("div", {
                className: F.MT,
                children: (0, d.jsx)(c.$, {
                    variant: "expressive",
                    size: "md",
                    text: "Open Announcement Modal",
                    onClick: function () {
                        let t,
                            l,
                            a,
                            r =
                                ((t = e.heroAssetUrl),
                                (l = (0, m.r1)(t)),
                                (a = {
                                    modalTopPill: e.modalTopPill,
                                    header: e.header,
                                    subheader: e.subheader,
                                    videoLink: l ? t : "",
                                    heroArtVideoLinkLightTheme: l ? t : "",
                                    heroArtImageLinkDarkTheme: l ? "" : t,
                                    heroArtImageLinkLightTheme: l ? "" : t,
                                    button: {
                                        ...o?.button,
                                        copy: e.buttonCopy,
                                        buttonAction:
                                            e.buttonAction !== u.d.UNSPECIFIED
                                                ? e.buttonAction
                                                : (o?.button?.buttonAction ?? u.d.OPEN_TIER_2_PAYMENT_MODAL),
                                        deeplinkSection: o?.button?.deeplinkSection ?? "",
                                        navigableStorefrontApplicationId:
                                            o?.button?.navigableStorefrontApplicationId ??
                                            ("" !== e.navigableStorefrontApplicationId
                                                ? { value: e.navigableStorefrontApplicationId }
                                                : void 0),
                                    },
                                }),
                                B(j, {
                                    oneofKind: "announcementModalVariant1",
                                    announcementModalVariant1: null != o ? { ...o, ...a } : p.ih.create(a),
                                }));
                        (0, b.mM)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e(227955),
                                    n.e(686889),
                                    n.e(198496),
                                    n.e(560570),
                                    n.e(570385),
                                    n.e(491899),
                                    n.e(889880),
                                    n.e(476662),
                                    n.e(253044),
                                    n.e(311913),
                                    n.e(881717),
                                    n.e(375724),
                                    n.e(999272),
                                    n.e(77413),
                                    n.e(166171),
                                    n.e(267526),
                                    n.e(441674),
                                    n.e(669174),
                                    n.e(490514),
                                    n.e(967062),
                                    n.e(123141),
                                    n.e(166336),
                                    n.e(653383),
                                    n.e(545749),
                                    n.e(363269),
                                    n.e(474172),
                                    n.e(424199),
                                    n.e(125729),
                                    n.e(489218),
                                    n.e(912875),
                                    n.e(862782),
                                    n.e(55348),
                                    n.e(893928),
                                    n.e(776750),
                                    n.e(491279),
                                    n.e(398793),
                                    n.e(53374),
                                    n.e(56021),
                                    n.e(693832),
                                    n.e(346102),
                                    n.e(377766),
                                    n.e(784103),
                                    n.e(614784),
                                    n.e(187856),
                                    n.e(826240),
                                    n.e(68904),
                                    n.e(919307),
                                    n.e(455924),
                                    n.e(409843),
                                    n.e(834386),
                                    n.e(59413),
                                    n.e(250478),
                                    n.e(421658),
                                    n.e(356296),
                                    n.e(118917),
                                    n.e(562168),
                                    n.e(698547),
                                    n.e(24889),
                                    n.e(213924),
                                    n.e(702813),
                                    n.e(68532),
                                    n.e(431714),
                                    n.e(273165),
                                    n.e(365074),
                                    n.e(497746),
                                    n.e(963333),
                                    n.e(390108),
                                ]).then(n.bind(n, 962263));
                                return (t) =>
                                    (0, d.jsx)(e, {
                                        renderModalProps: t,
                                        componentId: j,
                                        promotionId: V,
                                        properties: r,
                                    });
                            },
                            { modalKey: "playground-announcement-modal" },
                        );
                    },
                }),
            });
        },
        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.ANNOUNCEMENT_MODAL }),
        useDefaultOverrides: () => {
            let e = O(s.C.ANNOUNCEMENT_MODAL),
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
                      heroAssetUrl:
                          "" !== t.videoLink
                              ? t.videoLink
                              : "" !== t.heroArtImageLinkDarkTheme
                                ? t.heroArtImageLinkDarkTheme
                                : t.heroArtImageLinkLightTheme,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? u.d.UNSPECIFIED,
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
            heroAssetUrl: {
                label: "Hero Asset URL (image or video)",
                type: "text",
                defaultValue:
                    "https://cdn.discordapp.com/assets/content/2c74e3655641888bfb9bbf8070c30b8230551754fd0a22f660d8cb3cae5c9679.svg",
            },
            buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Get Nitro" },
            buttonAction: {
                label: "Button Action",
                type: "select",
                defaultValue: u.d.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: u.d.UNSPECIFIED },
                    { label: "Open Marketing Page", value: u.d.OPEN_MARKETING_PAGE },
                    { label: "Open Shop", value: u.d.OPEN_SHOP },
                    { label: "Open Tier 2 Payment Modal", value: u.d.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: u.d.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: u.d.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: u.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: u.d.OPEN_SOCIAL_LAYER_STOREFRONT },
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
    H = n(822571),
    W = n(662367);
let Y = "playground-billing-settings-banner",
    z = {
        name: "Nitro Settings Banner",
        id: "billing-settings-banner",
        component: function (e) {
            let t,
                n,
                o,
                l = O(s.C.BILLING_SETTINGS_BANNER),
                a = l?.properties.oneofKind === "billingSettingsBanner" ? l.properties.billingSettingsBanner : null,
                r = C.useField("selected"),
                i = h(),
                p = H.A.createFromServer(
                    D(
                        Y,
                        s.C.BILLING_SETTINGS_BANNER,
                        r?.id ?? "",
                        B(Y, {
                            oneofKind: "billingSettingsBanner",
                            billingSettingsBanner:
                                ((t = e.showButton
                                    ? {
                                          ...a?.button,
                                          copy: e.buttonCopy,
                                          buttonAction:
                                              e.buttonAction !== u.d.UNSPECIFIED
                                                  ? e.buttonAction
                                                  : (a?.button?.buttonAction ?? u.d.OPEN_TIER_2_PAYMENT_MODAL),
                                          deeplinkSection: a?.button?.deeplinkSection ?? "",
                                          navigableStorefrontApplicationId:
                                              a?.button?.navigableStorefrontApplicationId ??
                                              ("" !== e.navigableStorefrontApplicationId
                                                  ? { value: e.navigableStorefrontApplicationId }
                                                  : void 0),
                                      }
                                    : void 0),
                                (n =
                                    "" !== e.helpArticleId
                                        ? { ...a?.helpArticle, id: e.helpArticleId, linkText: e.helpArticleLinkText }
                                        : void 0),
                                (o = {
                                    header: e.header,
                                    body: e.body,
                                    asset: k(e.assetUrl, a?.asset),
                                    button: t,
                                    helpArticle: n,
                                }),
                                null != a ? { ...a, ...o } : w.h.create(o)),
                        }),
                    ),
                );
            return (0, d.jsx)("div", { className: F.MT, children: (0, d.jsx)(W.I, { component: p, endDate: i }) });
        },
        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.BILLING_SETTINGS_BANNER }),
        useDefaultOverrides: () => {
            let e = O(s.C.BILLING_SETTINGS_BANNER),
                t = e?.properties.oneofKind === "billingSettingsBanner" ? e.properties.billingSettingsBanner : null;
            return null == t
                ? null
                : {
                      header: t.header,
                      body: t.body,
                      assetUrl: R(t.asset),
                      showButton: null != t.button,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? u.d.UNSPECIFIED,
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
                defaultValue: u.d.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: u.d.UNSPECIFIED },
                    { label: "Open Marketing Page", value: u.d.OPEN_MARKETING_PAGE },
                    { label: "Open Shop", value: u.d.OPEN_SHOP },
                    { label: "Open Tier 2 Payment Modal", value: u.d.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: u.d.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: u.d.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: u.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: u.d.OPEN_SOCIAL_LAYER_STOREFRONT },
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
    q = n(106512),
    X =
        (((l = {}).SEASONAL_GIFTING_2024_BALLOONS_REWARD_SKU_ID = "1301993378484850769"),
        (l.SEASONAL_GIFTING_2024_CAT_EARS_REWARD_SKU_ID = "1301993378484850771"),
        (l.SEASONAL_GIFTING_2024_SNOWFLAKES_REWARD_SKU_ID = "1301993378484850773"),
        (l.VALENTINES_GIFTING_2025_HEARTS_SKU_ID = "1326347611069874277"),
        (l.SUMMER_2025_GIFTING_REWARD_SKU_ID = "1369404111484751873"),
        (l.HALLOWEEN_GIFTING_2025_PUMPKIN_TRICK_SKU_ID = "1418326115876864070"),
        (l.HALLOWEEN_GIFTING_2025_PUMPKIN_TREAT_SKU_ID = "1418326116053287093"),
        (l.HALLOWEEN_GIFTING_2025_GHOST_TRICK_SKU_ID = "1418326115927326830"),
        (l.HALLOWEEN_GIFTING_2025_GHOST_TREAT_SKU_ID = "1418326116166533330"),
        (l.HALLOWEEN_GIFTING_2025_SKULL_TRICK_SKU_ID = "1418326115910680656"),
        (l.HALLOWEEN_GIFTING_2025_SKULL_TREAT_SKU_ID = "1418326116128788590"),
        (l.HALLOWEEN_GIFTING_2025_SPIDER_TRICK_SKU_ID = "1418326115893907677"),
        (l.HALLOWEEN_GIFTING_2025_SPIDER_TREAT_SKU_ID = "1418326116094967808"),
        (l.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID = "1343751617303805983"),
        (l.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID = "1377377712104018071"),
        (l.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID = "1343751617328975954"),
        (l.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID = "1464017397081047081"),
        (l.VALENTINES_GIFTING_2026_FULL_HP_SKU_ID = "1464006538304684063"),
        (l.WORLD_CUP_GIFTING_2026_AROUND_THE_WORLD_SKU_ID = "1509955522797768794"),
        (l.WORLD_CUP_GIFTING_2026_GOAL_SKU_ID = "1509962431290675280"),
        (l.SUMMER_2026_GOGO_FAKE_SKU_ID = "1533205265724211200"),
        (l.HALLOWEEN_GIFTING_2026_UMBRA_SKU_ID = "1552382432504840293"),
        (l.HALLOWEEN_GIFTING_2026_HEX_SKU_ID = "1552383012002332842"),
        (l.HALLOWEEN_GIFTING_2026_CROWSEPH_SKU_ID = "1552383354190565476"),
        l),
    Z = n(67948),
    J = n(73153),
    Q = n(793574),
    ee = n(688810),
    et = n(778705),
    en = n(852218),
    eo = n(682901);
let el = "playground-gift-customization-banner",
    ea = "playground-gift-customization-banner-promotion",
    er = X.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var ei = n(307069),
    ed = n(95701);
function es(e) {
    let { id: t, component_type: n, promotion_id: o, properties: l } = e,
        r = h().getTime();
    a.useEffect(() => {
        ((0, i.Ak)(),
            J.h.dispatch({
                type: "PREMIUM_MARKETING_PREVIEW",
                data: {
                    id: t,
                    component_type: n,
                    promotion_id: o,
                    properties: l,
                    promotion: {
                        id: o,
                        start_date: new Date(0).toISOString(),
                        end_date: new Date(r).toISOString(),
                        promotion_type: en.pt.MARKETING_MOMENT,
                        flags: 0,
                        partner_id: null,
                    },
                },
            }));
    }, [t, n, o, l, r]);
}
var ep = n(652215);
let eu = "playground-gift-icon",
    ec = (0, ed.createChannelRecord)({ id: "1", guild_id: "1", type: ep.rbe.GUILD_TEXT, name: "playground" });
var eb = n(720119),
    em = n(40493);
function e_() {}
let eA = (0, ed.createChannelRecord)({ id: "1", guild_id: "1", type: ep.rbe.GUILD_TEXT, name: "playground" });
var ef = n(978656);
let eI = "playground-gift-plan-selection-card-banner",
    eN = "playground-gift-plan-selection-card-banner-promotion",
    eT = X.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var eg = n(823901);
function eE() {}
let eS = "playground-gift-reminder-nagbar";
var ey = n(670474),
    eC = n(371764);
let eO = {
    name: "Marketing Page Banner",
    id: "marketing-page-banner",
    component: function (e) {
        let t,
            n,
            o = O(s.C.MARKETING_PAGE_BANNER),
            l = o?.properties.oneofKind === "marketingPageBanner" ? o.properties.marketingPageBanner : null,
            a =
                ((t = e.showButton
                    ? {
                          ...l?.button,
                          copy: e.buttonCopy,
                          buttonAction:
                              e.buttonAction !== u.d.UNSPECIFIED
                                  ? e.buttonAction
                                  : (l?.button?.buttonAction ?? u.d.OPEN_TIER_2_PAYMENT_MODAL),
                          deeplinkSection: l?.button?.deeplinkSection ?? "",
                          navigableStorefrontApplicationId:
                              l?.button?.navigableStorefrontApplicationId ??
                              ("" !== e.navigableStorefrontApplicationId
                                  ? { value: e.navigableStorefrontApplicationId }
                                  : void 0),
                      }
                    : void 0),
                (n = { assetUrl: e.assetUrl, header: e.header, body: e.body, button: t }),
                null != l ? { ...l, ...n } : { helpArticleId: "", buttonVariant: ey.F.UNSPECIFIED, ...n });
        return (0, d.jsx)("div", {
            className: F.MT,
            children: (0, d.jsx)(eC.x, {
                componentId: "playground-marketing-page-banner",
                promotionId: "playground-marketing-page-banner-promotion",
                promotionBannerMarketingComponentFields: a,
            }),
        });
    },
    ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.MARKETING_PAGE_BANNER }),
    useDefaultOverrides: () => {
        let e = O(s.C.MARKETING_PAGE_BANNER),
            t = e?.properties.oneofKind === "marketingPageBanner" ? e.properties.marketingPageBanner : null;
        return null == t
            ? null
            : {
                  header: t.header,
                  body: t.body,
                  assetUrl: t.assetUrl,
                  showButton: null != t.button,
                  buttonCopy: t.button?.copy ?? "",
                  buttonAction: t.button?.buttonAction ?? u.d.UNSPECIFIED,
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
            defaultValue: u.d.UNSPECIFIED,
            options: [
                { label: "Unspecified (use base)", value: u.d.UNSPECIFIED },
                { label: "Open Marketing Page", value: u.d.OPEN_MARKETING_PAGE },
                { label: "Open Shop", value: u.d.OPEN_SHOP },
                { label: "Open Tier 2 Payment Modal", value: u.d.OPEN_TIER_2_PAYMENT_MODAL },
                { label: "Open Tier 1 Payment Modal", value: u.d.OPEN_TIER_1_PAYMENT_MODAL },
                { label: "Open Plan Selection Modal", value: u.d.OPEN_PLAN_SELECTION_MODAL },
                { label: "Open Premium Group Payment Modal", value: u.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                { label: "Open Social Layer Storefront", value: u.d.OPEN_SOCIAL_LAYER_STOREFRONT },
            ],
        },
        navigableStorefrontApplicationId: {
            label: "Navigable Storefront Application ID",
            type: "text",
            defaultValue: "1346069614634864772",
        },
    },
};
var eh = n(754804);
let eR = "playground-nagbar",
    ev = _.default.fromTimestamp(Date.UTC(2016, 0, 1));
var eP = n(834730),
    eM = n(709870),
    eL = n(37126);
let ex =
        "https://cdn.discordapp.com/assets/content/ce3500be6abe18b64c923af6d520c74cc915387831c4cdd5e4240d175417a87a.svg",
    eG = "playground-payment-modal-banner",
    eU = "playground-plan-select-card-banner";
var eB = n(964661),
    eD = n(503698),
    ek = n.n(eD),
    eF = n(612324),
    ej = n(403581),
    eV = n(214947),
    eK = n(34188),
    ew = n(577473),
    eH = n(181254),
    eW = n(765671),
    eY = n(573999);
function ez() {}
function e$(e) {
    let { icon: t, label: n, selected: o = !1, decoration: l, showHoverGradient: a = !1, ref: r } = e,
        { width: i, ref: s } = (0, eW.Ay)(),
        p = (0, eF.A)(r, s);
    return (0, d.jsxs)("button", {
        ref: p,
        type: "button",
        className: ek()(eY.pc, { [eY.EV]: o }),
        onClick: ez,
        children: [
            a && (0, d.jsx)(eH.ls, { eventTargetRef: s, isNitro: !0, contentWidth: i }),
            (0, d.jsxs)("span", {
                className: eY.Hq,
                children: [
                    (0, d.jsx)(t, { size: "md", color: "currentColor" }),
                    (0, d.jsx)(eP.E, {
                        variant: "body-md/medium",
                        color: "text-strong",
                        className: eY.We,
                        children: n,
                    }),
                    null != l && (0, d.jsx)("div", { className: eY.UT, children: l }),
                ],
            }),
        ],
    });
}
function eq(e) {
    let {
            tabLabel: t = "Nitro",
            selected: n = !1,
            decoration: o,
            showHoverGradient: l = !1,
            nitroRowRef: a,
            wrapNitroRow: r,
        } = e,
        i = (0, d.jsx)(e$, {
            ref: a,
            icon: ej.NitroWheelIcon,
            label: t,
            selected: n,
            decoration: o,
            showHoverGradient: l,
        });
    return (0, d.jsxs)("nav", {
        className: eY.C$,
        children: [
            (0, d.jsx)(e$, { icon: eV.FriendsIcon, label: "Friends" }),
            null != r ? r(i) : i,
            (0, d.jsx)(e$, { icon: eK.ShopIcon, label: "Shop" }),
            (0, d.jsx)(e$, { icon: ew.QuestsIcon, label: "Quests" }),
        ],
    });
}
var eX = n(52416);
function eZ() {}
let eJ = "playground-premium-tab-popover",
    eQ = {
        name: "Premium Tab Popover",
        id: "premium-tab-popover",
        component: function (e) {
            var t;
            let n,
                o,
                {
                    header: l,
                    body: r,
                    buttonCopy: i,
                    buttonAction: p,
                    navigableStorefrontApplicationId: c,
                    assetUrl: b,
                } = e,
                m = O(s.C.PREMIUM_TAB_POPOVER),
                _ = m?.properties.oneofKind === "premiumTabPopover" ? m.properties.premiumTabPopover : null;
            es(
                ((n = {
                    header: (t = {
                        header: l,
                        body: r,
                        buttonCopy: i,
                        buttonAction: p,
                        navigableStorefrontApplicationId: c,
                        assetUrl: b,
                    }).header,
                    body: t.body,
                    button: {
                        ..._?.button,
                        copy: t.buttonCopy,
                        buttonAction:
                            t.buttonAction !== u.d.UNSPECIFIED
                                ? t.buttonAction
                                : (_?.button?.buttonAction ?? u.d.OPEN_TIER_2_PAYMENT_MODAL),
                        deeplinkSection: _?.button?.deeplinkSection ?? "",
                        navigableStorefrontApplicationId:
                            _?.button?.navigableStorefrontApplicationId ??
                            ("" !== t.navigableStorefrontApplicationId
                                ? { value: t.navigableStorefrontApplicationId }
                                : void 0),
                    },
                    asset: k(t.assetUrl, _?.asset),
                }),
                (o = B(eJ, {
                    oneofKind: "premiumTabPopover",
                    premiumTabPopover: null != _ ? { ..._, ...n } : { helpArticleId: "", ...n },
                })),
                D(eJ, s.C.PREMIUM_TAB_POPOVER, "playground-premium-tab-popover-promotion", o)),
            );
            let A = a.useRef(null);
            return (0, d.jsx)(eq, {
                selected: !0,
                nitroRowRef: A,
                wrapNitroRow: (e) => (0, d.jsx)(eX.A, { targetElementRef: A, dismissPopover: eZ, children: e }),
            });
        },
        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.PREMIUM_TAB_POPOVER }),
        useDefaultOverrides: () => {
            let e = O(s.C.PREMIUM_TAB_POPOVER),
                t = e?.properties.oneofKind === "premiumTabPopover" ? e.properties.premiumTabPopover : null;
            return null == t
                ? null
                : {
                      header: t.header,
                      body: t.body,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? u.d.UNSPECIFIED,
                      navigableStorefrontApplicationId: t.button?.navigableStorefrontApplicationId?.value ?? "",
                      assetUrl: R(t.asset),
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
                defaultValue: u.d.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: u.d.UNSPECIFIED },
                    { label: "Open Marketing Page", value: u.d.OPEN_MARKETING_PAGE },
                    { label: "Open Shop", value: u.d.OPEN_SHOP },
                    { label: "Open Tier 2 Payment Modal", value: u.d.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: u.d.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: u.d.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: u.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: u.d.OPEN_SOCIAL_LAYER_STOREFRONT },
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
var e0 = n(796878);
let e2 = "playground-premium-tab-tooltip";
n(321073);
var e1 = n(896170),
    e6 = n(890497),
    e7 = n(620632);
let e8 = [
    { type: "marketing_moment", label: "Marketing Moments" },
    { type: "gift", label: "Gift Promotions" },
];
function e9(e) {
    let t = [];
    for (let n of e8) {
        let o = e.filter((e) => e.type === n.type);
        if (0 !== o.length)
            for (let e of (t.push({ id: `header-${n.type}`, value: `header-${n.type}`, label: n.label, disabled: !0 }),
            o))
                t.push({ id: e.id, value: e.id, label: e.name });
    }
    return t;
}
var e3 = n(613556),
    e4 = n(549996),
    e5 = n(758836);
let te = "playground-shop-nagbar";
function tt(e, t) {
    return { title: e, stories: [...t].sort((e, t) => e.name.localeCompare(t.name)) };
}
let tn = {
    playgroundBaseUrl: "marketing",
    collections: [
        {
            id: "marketing",
            name: "Marketing",
            groups: [
                tt("Premium Surfaces", [
                    K,
                    z,
                    eO,
                    {
                        name: "Nagbar",
                        id: "nagbar",
                        component: function (e) {
                            var t;
                            let n,
                                o,
                                { body: l, ctaLabel: a, helpArticleId: r } = e,
                                i = O(s.C.NAGBAR),
                                p = i?.properties.oneofKind === "nagbar" ? i.properties.nagbar : null;
                            return (
                                es(
                                    ((n = {
                                        body: (t = { body: l, ctaLabel: a, helpArticleId: r }).body,
                                        ctaLabel: t.ctaLabel,
                                        helpArticle:
                                            "" !== t.helpArticleId
                                                ? {
                                                      ...p?.helpArticle,
                                                      id: t.helpArticleId,
                                                      linkText: p?.helpArticle?.linkText ?? "",
                                                  }
                                                : void 0,
                                    }),
                                    (o = B(eR, {
                                        oneofKind: "nagbar",
                                        nagbar:
                                            null != p
                                                ? { ...p, ...n }
                                                : {
                                                      ctaAction: u.d.OPEN_TIER_2_PAYMENT_MODAL,
                                                      deeplinkSection: "",
                                                      ...n,
                                                  },
                                    })),
                                    D(eR, s.C.NAGBAR, ev, o)),
                                ),
                                (0, d.jsx)("div", { className: F.MT, children: (0, d.jsx)(eh.A, {}) })
                            );
                        },
                        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.NAGBAR }),
                        useDefaultOverrides: () => {
                            let e = O(s.C.NAGBAR),
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
                            return (0, d.jsxs)(A.B, {
                                direction: "vertical",
                                gap: 16,
                                align: "start",
                                children: [
                                    (0, d.jsx)(eP.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The post-purchase \u201COrbs delivered\u201D confirmation modal for the Nitro orbs bonus. Set the orb amount in the controls, then open it.",
                                    }),
                                    (0, d.jsx)(c.$, {
                                        text: "Open Orbs delivered modal",
                                        onClick: () => (0, eM.$)({ orbsAmount: t }),
                                    }),
                                ],
                            });
                        },
                        controls: {
                            orbsAmount: { label: "Orb amount", type: "number", defaultValue: 1e4, minValue: 0 },
                        },
                    },
                    {
                        name: "Shop Reward Modal",
                        id: "nitro-shop-reward-modal",
                        component: function () {
                            return (0, d.jsxs)(A.B, {
                                direction: "vertical",
                                gap: 16,
                                align: "start",
                                children: [
                                    (0, d.jsx)(eP.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The \u201CYour free Shop item is ready for you\u201D reward modal. Open it to preview.",
                                    }),
                                    (0, d.jsx)(c.$, { text: "Open Shop reward modal", onClick: () => (0, eL.tu)() }),
                                ],
                            });
                        },
                    },
                    {
                        name: "Payment Modal Banner",
                        id: "payment-modal-banner",
                        component: function (e) {
                            let { body: t, assetUrl: n } = e,
                                o = O(s.C.PAYMENT_MODAL_BANNER);
                            es(
                                (function (e, t) {
                                    let { body: n, assetUrl: o } = e,
                                        l = { assetUrl: o, body: n },
                                        a = B(eG, {
                                            oneofKind: "paymentModalBanner",
                                            paymentModalBanner: null != t ? { ...t, ...l } : { header: "", ...l },
                                        });
                                    return D(
                                        eG,
                                        s.C.PAYMENT_MODAL_BANNER,
                                        "playground-payment-modal-banner-promotion",
                                        a,
                                    );
                                })(
                                    { body: t, assetUrl: n },
                                    o?.properties.oneofKind === "paymentModalBanner"
                                        ? o.properties.paymentModalBanner
                                        : null,
                                ),
                            );
                            let { analyticsLocations: l } = (0, ee.Ay)(Q.A.PAYMENT_FLOW_TEST_PAGE);
                            return (0, d.jsx)("div", {
                                className: F.MT,
                                children: (0, d.jsx)(c.$, {
                                    variant: "expressive",
                                    size: "md",
                                    text: "Open Payment Modal",
                                    onClick: () => (0, et.A)({ subscriptionTier: eo.pe.TIER_2, analyticsLocations: l }),
                                }),
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.PAYMENT_MODAL_BANNER }),
                        useDefaultOverrides: () => {
                            let e = O(s.C.PAYMENT_MODAL_BANNER),
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
                            assetUrl: { label: "Asset URL", type: "text", defaultValue: ex },
                        },
                    },
                    {
                        name: "Plan Select Card Banner",
                        id: "plan-select-card-banner",
                        component: function (e) {
                            let { body: t, assetUrl: n } = e,
                                o = O(s.C.PLAN_SELECT_CARD_BANNER);
                            es(
                                (function (e, t) {
                                    let { body: n, assetUrl: o } = e,
                                        l = B(eU, {
                                            oneofKind: "planSelectCardBanner",
                                            planSelectCardBanner: { ...t, body: n, asset: k(o, t?.asset) },
                                        });
                                    return D(
                                        eU,
                                        s.C.PLAN_SELECT_CARD_BANNER,
                                        "playground-plan-select-card-banner-promotion",
                                        l,
                                    );
                                })(
                                    { body: t, assetUrl: n },
                                    o?.properties.oneofKind === "planSelectCardBanner"
                                        ? o.properties.planSelectCardBanner
                                        : null,
                                ),
                            );
                            let { analyticsLocations: l } = (0, ee.Ay)(Q.A.PAYMENT_FLOW_TEST_PAGE);
                            return (0, d.jsx)("div", {
                                className: F.MT,
                                children: (0, d.jsx)(c.$, {
                                    variant: "expressive",
                                    size: "md",
                                    text: "Open Select Plan",
                                    onClick: () => (0, et.A)({ analyticsLocations: l }),
                                }),
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.PLAN_SELECT_CARD_BANNER }),
                        useDefaultOverrides: () => {
                            let e = O(s.C.PLAN_SELECT_CARD_BANNER),
                                t =
                                    e?.properties.oneofKind === "planSelectCardBanner"
                                        ? e.properties.planSelectCardBanner
                                        : null;
                            return null == t ? null : { body: t.body, assetUrl: R(t.asset) };
                        },
                        controls: {
                            body: {
                                label: "Body",
                                type: "text",
                                defaultValue: "Join Nitro today and get your second month free! Limited time offer.",
                            },
                            assetUrl: { label: "Asset URL", type: "text", defaultValue: ex },
                        },
                    },
                    {
                        name: "Premium Tab Badge",
                        id: "premium-tab-badge",
                        component: function (e) {
                            let t = (0, d.jsx)(eB.A, {
                                componentId: "playground-premium-tab-badge",
                                promotionId: "playground-premium-tab-badge-promotion",
                                badgeCopy: e.badgeCopy,
                                acknowledgedBadgeCopy: e.acknowledgedBadgeCopy,
                                isDismissed: e.isDismissed,
                            });
                            return (0, d.jsx)(eq, {
                                tabLabel: e.tabLabel,
                                selected: e.selected,
                                decoration: t,
                                showHoverGradient: e.showHoverGradient,
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.PREMIUM_TAB }),
                        useDefaultOverrides: () => {
                            let e = O(s.C.PREMIUM_TAB),
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
                    eQ,
                    {
                        name: "Premium Tab Tooltip",
                        id: "premium-tab-tooltip",
                        component: function (e) {
                            var t;
                            let n,
                                o,
                                { header: l, body: a, assetUrl: r } = e,
                                i = O(s.C.PREMIUM_TAB_TOOLTIP),
                                p =
                                    i?.properties.oneofKind === "premiumTabTooltip"
                                        ? i.properties.premiumTabTooltip
                                        : null;
                            return (
                                es(
                                    ((n = {
                                        header: (t = { header: l, body: a, assetUrl: r }).header,
                                        body: t.body,
                                        asset: k(t.assetUrl, p?.asset),
                                    }),
                                    (o = B(e2, {
                                        oneofKind: "premiumTabTooltip",
                                        premiumTabTooltip: null != p ? { ...p, ...n } : n,
                                    })),
                                    D(e2, s.C.PREMIUM_TAB_TOOLTIP, "playground-premium-tab-tooltip-promotion", o)),
                                ),
                                (0, d.jsx)(eq, { selected: !0, wrapNitroRow: (e) => (0, d.jsx)(e0.A, { children: e }) })
                            );
                        },
                        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.PREMIUM_TAB_TOOLTIP }),
                        useDefaultOverrides: () => {
                            let e = O(s.C.PREMIUM_TAB_TOOLTIP),
                                t =
                                    e?.properties.oneofKind === "premiumTabTooltip"
                                        ? e.properties.premiumTabTooltip
                                        : null;
                            return null == t ? null : { header: t.header, body: t.body, assetUrl: R(t.asset) };
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
                    {
                        name: "Shop Nagbar",
                        id: "shop-nagbar",
                        component: function (e) {
                            var t;
                            let n,
                                o,
                                { body: l, ctaLabel: a, helpArticleId: r } = e,
                                i = O(s.C.SHOP_NAGBAR),
                                p = i?.properties.oneofKind === "shopNagbar" ? i.properties.shopNagbar : null;
                            es(
                                ((n = {
                                    body: (t = { body: l, ctaLabel: a, helpArticleId: r }).body,
                                    ctaLabel: t.ctaLabel,
                                    helpArticle:
                                        "" !== t.helpArticleId
                                            ? {
                                                  ...p?.helpArticle,
                                                  id: t.helpArticleId,
                                                  linkText: p?.helpArticle?.linkText ?? "",
                                              }
                                            : void 0,
                                }),
                                (o = B(te, {
                                    oneofKind: "shopNagbar",
                                    shopNagbar:
                                        null != p
                                            ? { ...p, ...n }
                                            : { ctaAction: u.d.OPEN_TIER_2_PAYMENT_MODAL, deeplinkSection: "", ...n },
                                })),
                                D(te, s.C.SHOP_NAGBAR, "playground-shop-nagbar-promotion", o)),
                            );
                            let c = (0, e4.c)(s.C.SHOP_NAGBAR),
                                b =
                                    c?.properties.properties.oneofKind === "shopNagbar"
                                        ? {
                                              shopNagbar: c.properties.properties.shopNagbar,
                                              componentId: c.id,
                                              promotionId: c.promotionId,
                                          }
                                        : null;
                            return (0, d.jsx)("div", {
                                className: F.MT,
                                children:
                                    null != b &&
                                    (0, d.jsx)(e3.A, {
                                        shopNagbar: b.shopNagbar,
                                        componentId: b.componentId,
                                        promotionId: b.promotionId,
                                        tab: e5.G2.HOME,
                                        onDismiss: () => {},
                                    }),
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.SHOP_NAGBAR }),
                        useDefaultOverrides: () => {
                            let e = O(s.C.SHOP_NAGBAR),
                                t = e?.properties.oneofKind === "shopNagbar" ? e.properties.shopNagbar : null;
                            return null == t
                                ? null
                                : { body: t.body, ctaLabel: t.ctaLabel, helpArticleId: t.helpArticle?.id ?? "" };
                        },
                        controls: {
                            body: {
                                label: "Body",
                                type: "text",
                                defaultValue: "Get Nitro and your next Shop item is free.",
                            },
                            ctaLabel: { label: "CTA Label", type: "text", defaultValue: "Get Nitro" },
                            helpArticleId: { label: "Help Article ID", type: "text", defaultValue: "" },
                        },
                    },
                ]),
                tt("Gifting Surfaces", [
                    {
                        name: "Billing Settings Gift Banner",
                        id: "billing-settings-nitro-gift-banner",
                        component: function (e) {
                            let t,
                                n = O(s.C.BILLING_SETTINGS_NITRO_GIFT_BANNER),
                                o =
                                    n?.properties.oneofKind === "billingSettingsNitroGiftBanner"
                                        ? n.properties.billingSettingsNitroGiftBanner
                                        : null;
                            return (0, d.jsx)("div", {
                                className: F.MT,
                                children: (0, d.jsx)(q.m, {
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
                        ControlsExtension: () =>
                            (0, d.jsx)(x, { componentType: s.C.BILLING_SETTINGS_NITRO_GIFT_BANNER }),
                        useDefaultOverrides: () => {
                            let e = O(s.C.BILLING_SETTINGS_NITRO_GIFT_BANNER),
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
                                assetUrl: R(t.asset),
                                backgroundAssetUrl: R(t.backgroundAsset),
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
                            let { analyticsLocations: t } = (0, ee.Ay)(Q.A.PAYMENT_FLOW_TEST_PAGE),
                                n = O(s.C.GIFT_CUSTOMIZATION_BANNER),
                                o =
                                    n?.properties.oneofKind === "giftCustomizationBanner"
                                        ? n.properties.giftCustomizationBanner
                                        : null;
                            return (0, d.jsx)("div", {
                                className: F.MT,
                                children: (0, d.jsx)(c.$, {
                                    variant: "expressive",
                                    size: "md",
                                    text: "Open Gift Payment Modal",
                                    onClick: () => {
                                        let n, l, a, r, i;
                                        ((r = {
                                            id: el,
                                            component_type: s.C.GIFT_CUSTOMIZATION_BANNER,
                                            promotion_id: ea,
                                            properties:
                                                ((n = {
                                                    asset: k(e.assetUrl, o?.asset),
                                                    backgroundAsset: k(e.backgroundAssetUrl, o?.backgroundAsset),
                                                    gradient: {
                                                        colors: [e.gradientStartColor, e.gradientEndColor],
                                                        angle: e.gradientAngle,
                                                    },
                                                }),
                                                (l =
                                                    null != o
                                                        ? { ...o, ...n }
                                                        : {
                                                              assetUrl: "",
                                                              desktopBody: "",
                                                              mobileBody: "",
                                                              backgroundAssetUrl: "",
                                                              assetVariant: Z.u.NORMAL,
                                                              ...n,
                                                          }),
                                                (a = G.m.create({
                                                    contentIdentifier: el,
                                                    properties: {
                                                        oneofKind: "giftCustomizationBanner",
                                                        giftCustomizationBanner: l,
                                                    },
                                                })),
                                                (0, U.ob)(G.m, a)),
                                        }),
                                            (i = {
                                                id: ea,
                                                start_date: new Date(0).toISOString(),
                                                end_date: new Date("2099-01-01").toISOString(),
                                                promotion_type: en.pt.GIFT_PROMOTION,
                                                flags: 0,
                                                partner_id: null,
                                                marketing_components: [r],
                                                metadata: { gift_promotion: { reward_sku_ids: [er] } },
                                            }),
                                            J.h.dispatch({
                                                type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                                promotions: [i],
                                                consumedInboundPromotionId: null,
                                            }),
                                            J.h.dispatch({
                                                type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                                                purchases: [],
                                            }),
                                            (0, et.A)({
                                                isGift: !0,
                                                subscriptionTier: eo.pe.TIER_2,
                                                analyticsLocations: t,
                                            }));
                                    },
                                }),
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.GIFT_CUSTOMIZATION_BANNER }),
                        useDefaultOverrides: () => {
                            let e = O(s.C.GIFT_CUSTOMIZATION_BANNER),
                                t =
                                    e?.properties.oneofKind === "giftCustomizationBanner"
                                        ? e.properties.giftCustomizationBanner
                                        : null;
                            if (null == t) return null;
                            let n = t.gradient?.colors ?? [];
                            return {
                                assetUrl: R(t.asset),
                                backgroundAssetUrl: R(t.backgroundAsset),
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
                                o = O(s.C.GIFT_ICON),
                                l = o?.properties.oneofKind === "giftIcon" ? o.properties.giftIcon : null;
                            return (
                                es(
                                    ((t = {
                                        boxAnimationUrl: "",
                                        trinketAnimationUrl:
                                            "https://cdn.discordapp.com/assets/content/2587f697fb8e499a331c465aee4b37ae2b233d4a21ce130ef9a3032c1455f1c4.lottiejson",
                                        trinketGlowAnimationUrl:
                                            "https://cdn.discordapp.com/assets/content/a08eb1072a1016a58c1e5e3d92a9476900d8e8370a29c33c686c39ec9d333fb7.lottiejson",
                                        trinketRiveAnimationUrl: "",
                                        gradient: {
                                            colors: [e.gradientStartColor, e.gradientEndColor],
                                            angle: e.gradientAngle,
                                        },
                                    }),
                                    (n = B(eu, { oneofKind: "giftIcon", giftIcon: null != l ? { ...l, ...t } : t })),
                                    D(eu, s.C.GIFT_ICON, "playground-gift-icon-promotion", n)),
                                ),
                                (0, d.jsx)("div", { className: F.WG, children: (0, d.jsx)(ei.A, { channel: ec }) })
                            );
                        },
                        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.GIFT_ICON }),
                        useDefaultOverrides: () => {
                            let e = O(s.C.GIFT_ICON),
                                t = e?.properties.oneofKind === "giftIcon" ? e.properties.giftIcon : null;
                            if (null == t) return null;
                            let n = t.gradient?.colors ?? [];
                            return {
                                gradientStartColor: n[0] ?? "",
                                gradientEndColor: n[1] ?? "",
                                gradientAngle: t.gradient?.angle ?? 0,
                            };
                        },
                        controls: {
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
                            let t = O(s.C.GIFT_ICON_COACHMARK),
                                n =
                                    t?.properties.oneofKind === "giftIconCoachmark"
                                        ? t.properties.giftIconCoachmark
                                        : null,
                                o = { header: e.header, body: e.body, asset: k(e.assetUrl, n?.asset) },
                                l = null != n ? { ...n, ...o } : eb.l.create(o);
                            return (0, d.jsx)("div", {
                                className: F.WG,
                                children: (0, d.jsx)(em.A, {
                                    coachmarkConfig: l,
                                    onComplete: e_,
                                    onCheckItOutClick: e_,
                                    markAsDismissed: e_,
                                    children: (0, d.jsx)(ei.A, { channel: eA }),
                                }),
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.GIFT_ICON_COACHMARK }),
                        useDefaultOverrides: () => {
                            let e = O(s.C.GIFT_ICON_COACHMARK),
                                t =
                                    e?.properties.oneofKind === "giftIconCoachmark"
                                        ? e.properties.giftIconCoachmark
                                        : null;
                            return null == t ? null : { header: t.header, body: t.body, assetUrl: R(t.asset) };
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
                            let { analyticsLocations: t } = (0, ee.Ay)(Q.A.PAYMENT_FLOW_TEST_PAGE),
                                n = O(s.C.GIFT_PLAN_SELECTION_CARD_BANNER),
                                o =
                                    n?.properties.oneofKind === "giftPlanSelectionCardBanner"
                                        ? n.properties.giftPlanSelectionCardBanner
                                        : null;
                            return (0, d.jsx)("div", {
                                className: F.MT,
                                children: (0, d.jsx)(c.$, {
                                    variant: "expressive",
                                    size: "md",
                                    text: "Open Gift Payment Modal",
                                    onClick: () => {
                                        let n, l, a, r, i;
                                        ((r = {
                                            id: eI,
                                            component_type: s.C.GIFT_PLAN_SELECTION_CARD_BANNER,
                                            promotion_id: eN,
                                            properties:
                                                ((n = {
                                                    avatarAsset: k(e.avatarUrl, o?.avatarAsset),
                                                    bannerAsset: k(e.bannerUrl, o?.bannerAsset),
                                                    gradient: {
                                                        colors: [e.gradientStartColor, e.gradientEndColor],
                                                        angle: e.gradientAngle,
                                                    },
                                                }),
                                                (l =
                                                    null != o
                                                        ? { ...o, ...n }
                                                        : {
                                                              header: "",
                                                              desktopBody: "",
                                                              mobileBody: "",
                                                              bannerAssetUrl: "",
                                                              assetVariant: ef.Y.NORMAL,
                                                              backgroundAssetUrl: "",
                                                              cardAssetUrl: "",
                                                              ...n,
                                                          }),
                                                (a = G.m.create({
                                                    contentIdentifier: eI,
                                                    properties: {
                                                        oneofKind: "giftPlanSelectionCardBanner",
                                                        giftPlanSelectionCardBanner: l,
                                                    },
                                                })),
                                                (0, U.ob)(G.m, a)),
                                        }),
                                            (i = {
                                                id: eN,
                                                start_date: new Date(0).toISOString(),
                                                end_date: new Date("2099-01-01").toISOString(),
                                                promotion_type: en.pt.GIFT_PROMOTION,
                                                flags: 0,
                                                partner_id: null,
                                                marketing_components: [r],
                                                metadata: { gift_promotion: { reward_sku_ids: [eT] } },
                                            }),
                                            J.h.dispatch({
                                                type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                                promotions: [i],
                                                consumedInboundPromotionId: null,
                                            }),
                                            J.h.dispatch({
                                                type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                                                purchases: [],
                                            }),
                                            (0, et.A)({ isGift: !0, analyticsLocations: t }));
                                    },
                                }),
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.GIFT_PLAN_SELECTION_CARD_BANNER }),
                        useDefaultOverrides: () => {
                            let e = O(s.C.GIFT_PLAN_SELECTION_CARD_BANNER),
                                t =
                                    e?.properties.oneofKind === "giftPlanSelectionCardBanner"
                                        ? e.properties.giftPlanSelectionCardBanner
                                        : null;
                            if (null == t) return null;
                            let n = t.gradient?.colors ?? [];
                            return {
                                avatarUrl: R(t.avatarAsset),
                                bannerUrl: R(t.bannerAsset),
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
                                l = O(s.C.GIFT_REMINDER_NAGBAR),
                                a =
                                    l?.properties.oneofKind === "giftReminderNagbar"
                                        ? l.properties.giftReminderNagbar
                                        : null;
                            return (
                                es(
                                    ((t = { body: { body: o }.body }),
                                    (n = B(eS, {
                                        oneofKind: "giftReminderNagbar",
                                        giftReminderNagbar: null != a ? { ...a, ...t } : t,
                                    })),
                                    D(eS, s.C.GIFT_REMINDER_NAGBAR, "playground-gift-reminder-nagbar-promotion", n)),
                                ),
                                (0, d.jsx)("div", {
                                    className: F.MT,
                                    children: (0, d.jsx)(eg.y, { markAsDismissed: eE, className: F.gO }),
                                })
                            );
                        },
                        ControlsExtension: () => (0, d.jsx)(x, { componentType: s.C.GIFT_REMINDER_NAGBAR }),
                        useDefaultOverrides: () => {
                            let e = O(s.C.GIFT_REMINDER_NAGBAR),
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
                                defaultValue:
                                    "Don't forget - gift Nitro and claim a free reward before the offer ends.",
                            },
                        },
                    },
                ]),
            ],
            tags: ["Marketing", "Premium", "Nitro"],
            IconComponent: r.SparklesIcon,
            Provider: function (e) {
                let { children: t } = e;
                return (
                    a.useEffect(
                        () => () => {
                            ((0, i.Ak)(), (0, i.b8)());
                        },
                        [],
                    ),
                    t
                );
            },
            HeaderControl: function () {
                let e = C.useField("selected"),
                    [t, n] = a.useState([]),
                    o = a.useRef(null);
                a.useEffect(() => {
                    let e = !0;
                    return (
                        (async function () {
                            return (
                                await e7.Bo.get({ url: "/premium-marketing/promotions", rejectWithError: !0 })
                            ).body.map((e) => {
                                let { id: t, name: n, type: o, source: l, end_date: a } = e;
                                return {
                                    id: t,
                                    name: n,
                                    type: o,
                                    source: l,
                                    endDate: null != a ? new Date(a) : void 0,
                                };
                            });
                        })()
                            .then((t) => {
                                e && n(t);
                            })
                            .catch(() => {}),
                        () => {
                            e = !1;
                        }
                    );
                }, []);
                let l = a.useMemo(() => e9(t), [t]),
                    r = a.useCallback((e, n) => e9((0, e1.Ht)(t, n, { keys: ["name"] })), [t]);
                return 0 === t.length
                    ? null
                    : (0, d.jsx)("div", {
                          className: F.$K,
                          children: (0, d.jsx)(e6.Z, {
                              clearable: !0,
                              selectionMode: "single",
                              placeholder: "Load Promo Data",
                              value: e?.id,
                              options: l,
                              customMatchSorter: r,
                              onSelectionChange: function (e) {
                                  if (((o.current = e), null == e))
                                      return void C.setState({
                                          selected: null,
                                          componentRowsByType: null,
                                          availableLocales: [],
                                          userStateByType: new Map(),
                                          localeOverride: null,
                                      });
                                  let n = t.find((t) => t.id === e);
                                  null != n &&
                                      (async function (e) {
                                          let t = await e7.Bo.get({
                                                  url: `/premium-marketing/promotions/${e}/components`,
                                                  rejectWithError: !0,
                                              }),
                                              n = new Map();
                                          for (let e of t.body) {
                                              let t = (0, U.ii)(G.m, e.properties),
                                                  o = n.get(e.component_type) ?? [];
                                              (o.push({
                                                  premiumType: e.premium_type,
                                                  premiumSource: e.premium_source,
                                                  premiumSubscriptionType: e.premium_subscription_type,
                                                  platform: e.platform,
                                                  isDefaultBase: t.isDefaultBase,
                                                  properties: t,
                                              }),
                                                  n.set(e.component_type, o));
                                          }
                                          return n;
                                      })(n.id)
                                          .then((e) => {
                                              o.current === n.id &&
                                                  (function (e, t) {
                                                      let n = new Set();
                                                      for (let e of t.values())
                                                          for (let t of e) (0, N.x)(t.properties, n);
                                                      C.setState({
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
    ],
};
