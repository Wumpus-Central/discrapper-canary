n.d(t, { playgroundConfig: () => to });
var o,
    l,
    a = n(582128),
    r = n(175841),
    i = n(597758),
    d = n(477900),
    s = n(517352),
    u = n(232582),
    p = n(308588),
    c = n(821609),
    b = n(192308),
    m = n(273185),
    _ = n(811091),
    A = n(331322),
    I = n(691885),
    f = n(839214),
    N = n(693369),
    T = n(365977),
    E = n(856793),
    g = n(792673),
    S =
        (((o = {})[(o.NONE = 0)] = "NONE"),
        (o[(o.TIER_1 = 1)] = "TIER_1"),
        (o[(o.TIER_2 = 2)] = "TIER_2"),
        (o[(o.TIER_0 = 3)] = "TIER_0"),
        o);
let y = [
    { id: "EVERYONE", label: "Everyone", premiumType: null, premiumSource: null, premiumSubscriptionType: null },
    { id: "NON_NITRO", label: "Non Nitro", premiumType: 0, premiumSource: E.f.NONE, premiumSubscriptionType: g.j.NONE },
    {
        id: "FRACTIONAL_WITHOUT_SUB",
        label: "Nitro Credit w/o sub",
        premiumType: 2,
        premiumSource: E.f.FRACTIONAL_NITRO,
        premiumSubscriptionType: g.j.NONE,
    },
    {
        id: "FRACTIONAL_WITH_TIER_2_SUB",
        label: "Nitro Credit with Nitro Standard sub",
        premiumType: 2,
        premiumSource: E.f.FRACTIONAL_NITRO,
        premiumSubscriptionType: g.j.TIER_2,
    },
    {
        id: "FRACTIONAL_WITH_TIER_1_SUB",
        label: "Nitro Credit with Nitro Classic sub",
        premiumType: 2,
        premiumSource: E.f.FRACTIONAL_NITRO,
        premiumSubscriptionType: g.j.TIER_1,
    },
    {
        id: "FRACTIONAL_WITH_TIER_0_SUB",
        label: "Nitro Credit with Nitro Basic sub",
        premiumType: 2,
        premiumSource: E.f.FRACTIONAL_NITRO,
        premiumSubscriptionType: g.j.TIER_0,
    },
    {
        id: "NITRO_BASIC",
        label: "Nitro Basic",
        premiumType: 3,
        premiumSource: E.f.SUBSCRIPTION,
        premiumSubscriptionType: g.j.TIER_0,
    },
    {
        id: "NITRO_CLASSIC",
        label: "Nitro Classic",
        premiumType: 1,
        premiumSource: E.f.SUBSCRIPTION,
        premiumSubscriptionType: g.j.TIER_1,
    },
    {
        id: "NITRO_STANDARD",
        label: "Nitro Standard",
        premiumType: 2,
        premiumSource: E.f.SUBSCRIPTION,
        premiumSubscriptionType: g.j.TIER_2,
    },
    {
        id: "NITRO_SQUAD",
        label: "Nitro Squad",
        premiumType: 2,
        premiumSource: E.f.SUBSCRIPTION_GROUP,
        premiumSubscriptionType: g.j.TIER_2,
    },
];
function O(e, t, n) {
    let o = y.find((o) => o.premiumType === e && o.premiumSource === t && o.premiumSubscriptionType === n);
    if (null != o) return { id: o.id, label: o.label };
    let l = null == e ? "Any" : S[e],
        a = null == t ? "Any" : E.f[t],
        r = null == n ? "Any" : g.j[n];
    return { id: `CUSTOM:${e ?? "any"}:${t ?? "any"}:${n ?? "any"}`, label: `${l} / ${a} / ${r}` };
}
let R = (0, f.D)(() => ({
    selected: null,
    componentRowsByKind: null,
    availableLocales: [],
    userStateByKind: new Map(),
    localeOverride: null,
}));
function h(e) {
    let t = R.useField("componentRowsByKind"),
        n = R.useField("userStateByKind"),
        o = R.useField("localeOverride"),
        l = s.bt[e];
    return a.useMemo(
        () =>
            (function (e, t, n, o) {
                if (!(0, N.U)(t)) return null;
                let l = s.bt[t],
                    a = e?.get(l);
                if (null == a) return null;
                let r = (function (e, t) {
                    if (0 === e.length) return null;
                    let n = [...e].sort((e, t) => e.platform - t.platform);
                    if (null != t) {
                        let e = n.find(
                            (e) =>
                                !e.isDefaultBase &&
                                O(e.premiumType, e.premiumSource, e.premiumSubscriptionType).id === t,
                        );
                        if (null != e) return e;
                    }
                    return n.find((e) => e.isDefaultBase) ?? n[0];
                })(a, n);
                return null == r ? null : (0, T.v)(r.properties, o ?? "en-US");
            })(t, e, n.get(l) ?? null, o),
        [t, n, o, l, e],
    );
}
function C() {
    let e = R.useField("selected"),
        [t] = a.useState(() => new Date(Date.now() + 6048e5));
    return e?.endDate ?? t;
}
function v(e) {
    return null == e ? "" : "" !== e.darkUrl ? e.darkUrl : e.lightUrl;
}
let P = "__default__";
var M = n(792996),
    L = n(771207);
function x(e) {
    let { label: t, value: n, disabled: o } = e;
    return { id: n, value: n, label: t, disabled: o };
}
function G(e) {
    let t,
        n,
        { componentType: o } = e,
        l = s.bt[o],
        r = R.useField("selected"),
        i = R.useField("componentRowsByKind"),
        u = R.useField("userStateByKind"),
        p = R.useField("localeOverride"),
        c = R.useField("availableLocales"),
        b =
            ((t = s.bt[o]),
            (n = R.useField("componentRowsByKind")),
            a.useMemo(() => {
                let e = n?.get(t) ?? [],
                    o = new Map();
                for (let t of e) {
                    if (t.isDefaultBase) continue;
                    let e = O(t.premiumType, t.premiumSource, t.premiumSubscriptionType);
                    o.has(e.id) || o.set(e.id, e);
                }
                return [...o.values()];
            }, [n, t])),
        m = a.useMemo(
            () =>
                (0, M.getLanguages)()
                    .filter((e) => e.enabled && "en-US" !== e.code)
                    .map((e) => ({ label: e.name, value: e.code }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        _ = a.useMemo(() => {
            let e;
            return (
                (e = new Set(c)),
                [
                    { label: "Default (en-US)", value: P },
                    ...m
                        .filter((e) => "en-US" !== e.value)
                        .map((t) => ({ label: t.label, value: t.value, disabled: !e.has(t.value) })),
                ]
            );
        }, [c, m]),
        f = (i?.get(l)?.length ?? 0) > 0;
    if (null == r || !f) return null;
    let T = b.length >= 1,
        E = [{ label: "Default", value: P }, ...b.map((e) => ({ label: e.label, value: e.id }))];
    return (0, d.jsx)("div", {
        className: L.k,
        children: (0, d.jsxs)(A.B, {
            gap: 16,
            children: [
                T &&
                    (0, d.jsx)(I.l, {
                        label: "User State",
                        value: u.get(l) ?? P,
                        onSelectionChange: (e) =>
                            (function (e, t) {
                                if (!(0, N.U)(e)) return;
                                let n = s.bt[e],
                                    o = new Map(R.getState().userStateByKind);
                                (null == t ? o.delete(n) : o.set(n, t), R.setState({ userStateByKind: o }));
                            })(o, e === P ? null : e),
                        options: E,
                        formatOption: x,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                (0, d.jsx)(I.l, {
                    label: "Locale",
                    value: p ?? P,
                    onSelectionChange: (e) => {
                        var t;
                        return ((t = e === P ? null : e), void R.setState({ localeOverride: t }));
                    },
                    options: _,
                    formatOption: x,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var U = n(47807),
    B = n(767589);
function D(e, t) {
    return U.m.create({ contentIdentifier: e, properties: t });
}
function k(e, t, n, o) {
    return { id: e, component_type: t, promotion_id: n, properties: (0, B.ob)(U.m, o) };
}
function F(e, t) {
    return e === v(t) ? t : "" !== e ? { lightUrl: e, darkUrl: e, lightStaticUrl: e, darkStaticUrl: e } : void 0;
}
var j = n(117513);
let V = "playground-announcement-modal",
    W = _.default.fromTimestamp(Date.UTC(2016, 0, 1)),
    K = {
        name: "Announcement Modal",
        id: "announcement-modal",
        component: function (e) {
            let t = h(s.oW.ANNOUNCEMENT_MODAL_VARIANT_1),
                o = t?.properties.announcementModalVariant1 ?? null;
            return (0, d.jsx)("div", {
                className: j.MT,
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
                                            e.buttonAction !== p.d.UNSPECIFIED
                                                ? e.buttonAction
                                                : (o?.button?.buttonAction ?? p.d.OPEN_TIER_2_PAYMENT_MODAL),
                                        deeplinkSection: o?.button?.deeplinkSection ?? "",
                                        navigableStorefrontApplicationId:
                                            o?.button?.navigableStorefrontApplicationId ??
                                            ("" !== e.navigableStorefrontApplicationId
                                                ? { value: e.navigableStorefrontApplicationId }
                                                : void 0),
                                    },
                                }),
                                D(V, {
                                    oneofKind: "announcementModalVariant1",
                                    announcementModalVariant1: null != o ? { ...o, ...a } : u.ih.create(a),
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
                                    n.e(260218),
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
                                        componentId: V,
                                        promotionId: W,
                                        properties: r,
                                    });
                            },
                            { modalKey: "playground-announcement-modal" },
                        );
                    },
                }),
            });
        },
        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.ANNOUNCEMENT_MODAL_VARIANT_1 }),
        useDefaultOverrides: () => {
            let e = h(s.oW.ANNOUNCEMENT_MODAL_VARIANT_1),
                t = e?.properties.announcementModalVariant1 ?? null;
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
                      buttonAction: t.button?.buttonAction ?? p.d.UNSPECIFIED,
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
                defaultValue: p.d.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: p.d.UNSPECIFIED },
                    { label: "Open Marketing Page", value: p.d.OPEN_MARKETING_PAGE },
                    { label: "Open Shop", value: p.d.OPEN_SHOP },
                    { label: "Open Tier 2 Payment Modal", value: p.d.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: p.d.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: p.d.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: p.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: p.d.OPEN_SOCIAL_LAYER_STOREFRONT },
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
    Y = n(662367);
let $ = "playground-billing-settings-banner",
    z = {
        name: "Nitro Settings Banner",
        id: "billing-settings-banner",
        component: function (e) {
            let t,
                n,
                o,
                l = h(s.oW.BILLING_SETTINGS_BANNER),
                a = l?.properties.billingSettingsBanner ?? null,
                r = R.useField("selected"),
                i = C(),
                u = H.A.createFromServer(
                    k(
                        $,
                        s.oW.BILLING_SETTINGS_BANNER,
                        r?.id ?? "",
                        D($, {
                            oneofKind: "billingSettingsBanner",
                            billingSettingsBanner:
                                ((t = e.showButton
                                    ? {
                                          ...a?.button,
                                          copy: e.buttonCopy,
                                          buttonAction:
                                              e.buttonAction !== p.d.UNSPECIFIED
                                                  ? e.buttonAction
                                                  : (a?.button?.buttonAction ?? p.d.OPEN_TIER_2_PAYMENT_MODAL),
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
                                    asset: F(e.assetUrl, a?.asset),
                                    button: t,
                                    helpArticle: n,
                                }),
                                null != a ? { ...a, ...o } : w.h.create(o)),
                        }),
                    ),
                );
            return (0, d.jsx)("div", { className: j.MT, children: (0, d.jsx)(Y.I, { component: u, endDate: i }) });
        },
        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.BILLING_SETTINGS_BANNER }),
        useDefaultOverrides: () => {
            let e = h(s.oW.BILLING_SETTINGS_BANNER),
                t = e?.properties.billingSettingsBanner ?? null;
            return null == t
                ? null
                : {
                      header: t.header,
                      body: t.body,
                      assetUrl: v(t.asset),
                      showButton: null != t.button,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? p.d.UNSPECIFIED,
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
                defaultValue: p.d.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: p.d.UNSPECIFIED },
                    { label: "Open Marketing Page", value: p.d.OPEN_MARKETING_PAGE },
                    { label: "Open Shop", value: p.d.OPEN_SHOP },
                    { label: "Open Tier 2 Payment Modal", value: p.d.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: p.d.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: p.d.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: p.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: p.d.OPEN_SOCIAL_LAYER_STOREFRONT },
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
var q = n(959129),
    X = n(106512),
    Z =
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
    J = n(67948),
    Q = n(73153),
    ee = n(793574),
    et = n(688810),
    en = n(778705),
    eo = n(852218),
    el = n(682901);
let ea = "playground-gift-customization-banner",
    er = "playground-gift-customization-banner-promotion",
    ei = Z.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var ed = n(307069),
    es = n(95701);
function eu(e) {
    let { id: t, component_type: n, promotion_id: o, properties: l } = e,
        r = C().getTime();
    a.useEffect(() => {
        ((0, i.Ak)(),
            Q.h.dispatch({
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
                        promotion_type: eo.pt.MARKETING_MOMENT,
                        flags: 0,
                        partner_id: null,
                    },
                },
            }));
    }, [t, n, o, l, r]);
}
var ep = n(652215);
let ec = "playground-gift-icon",
    eb = (0, es.createChannelRecord)({ id: "1", guild_id: "1", type: ep.rbe.GUILD_TEXT, name: "playground" });
var em = n(720119),
    e_ = n(40493);
function eA() {}
let eI = (0, es.createChannelRecord)({ id: "1", guild_id: "1", type: ep.rbe.GUILD_TEXT, name: "playground" });
var ef = n(978656);
let eN = "playground-gift-plan-selection-card-banner",
    eT = "playground-gift-plan-selection-card-banner-promotion",
    eE = Z.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var eg = n(823901);
function eS() {}
let ey = "playground-gift-reminder-nagbar";
var eO = n(670474),
    eR = n(371764);
let eh = {
    name: "Marketing Page Banner",
    id: "marketing-page-banner",
    component: function (e) {
        let t,
            n,
            o = h(s.oW.MARKETING_PAGE_BANNER),
            l = o?.properties.marketingPageBanner ?? null,
            a =
                ((t = e.showButton
                    ? {
                          ...l?.button,
                          copy: e.buttonCopy,
                          buttonAction:
                              e.buttonAction !== p.d.UNSPECIFIED
                                  ? e.buttonAction
                                  : (l?.button?.buttonAction ?? p.d.OPEN_TIER_2_PAYMENT_MODAL),
                          deeplinkSection: l?.button?.deeplinkSection ?? "",
                          navigableStorefrontApplicationId:
                              l?.button?.navigableStorefrontApplicationId ??
                              ("" !== e.navigableStorefrontApplicationId
                                  ? { value: e.navigableStorefrontApplicationId }
                                  : void 0),
                      }
                    : void 0),
                (n = { assetUrl: e.assetUrl, header: e.header, body: e.body, button: t }),
                null != l ? { ...l, ...n } : { helpArticleId: "", buttonVariant: eO.F.UNSPECIFIED, ...n });
        return (0, d.jsx)("div", {
            className: j.MT,
            children: (0, d.jsx)(eR.x, {
                componentId: "playground-marketing-page-banner",
                componentType: s.oW.MARKETING_PAGE_BANNER,
                promotionId: "playground-marketing-page-banner-promotion",
                promotionBannerMarketingComponentFields: a,
            }),
        });
    },
    ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.MARKETING_PAGE_BANNER }),
    useDefaultOverrides: () => {
        let e = h(s.oW.MARKETING_PAGE_BANNER),
            t = e?.properties.marketingPageBanner ?? null;
        return null == t
            ? null
            : {
                  header: t.header,
                  body: t.body,
                  assetUrl: t.assetUrl,
                  showButton: null != t.button,
                  buttonCopy: t.button?.copy ?? "",
                  buttonAction: t.button?.buttonAction ?? p.d.UNSPECIFIED,
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
            defaultValue: p.d.UNSPECIFIED,
            options: [
                { label: "Unspecified (use base)", value: p.d.UNSPECIFIED },
                { label: "Open Marketing Page", value: p.d.OPEN_MARKETING_PAGE },
                { label: "Open Shop", value: p.d.OPEN_SHOP },
                { label: "Open Tier 2 Payment Modal", value: p.d.OPEN_TIER_2_PAYMENT_MODAL },
                { label: "Open Tier 1 Payment Modal", value: p.d.OPEN_TIER_1_PAYMENT_MODAL },
                { label: "Open Plan Selection Modal", value: p.d.OPEN_PLAN_SELECTION_MODAL },
                { label: "Open Premium Group Payment Modal", value: p.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                { label: "Open Social Layer Storefront", value: p.d.OPEN_SOCIAL_LAYER_STOREFRONT },
            ],
        },
        navigableStorefrontApplicationId: {
            label: "Navigable Storefront Application ID",
            type: "text",
            defaultValue: "1346069614634864772",
        },
    },
};
var eC = n(754804);
let ev = "playground-nagbar",
    eP = _.default.fromTimestamp(Date.UTC(2016, 0, 1));
var eM = n(834730),
    eL = n(709870),
    ex = n(37126);
let eG =
        "https://cdn.discordapp.com/assets/content/ce3500be6abe18b64c923af6d520c74cc915387831c4cdd5e4240d175417a87a.svg",
    eU = "playground-payment-modal-banner",
    eB = "playground-plan-select-card-banner";
var eD = n(964661),
    ek = n(503698),
    eF = n.n(ek),
    ej = n(612324),
    eV = n(403581),
    eW = n(214947),
    eK = n(34188),
    ew = n(577473),
    eH = n(181254),
    eY = n(765671),
    e$ = n(573999);
function ez() {}
function eq(e) {
    let { icon: t, label: n, selected: o = !1, decoration: l, showHoverGradient: a = !1, ref: r } = e,
        { width: i, ref: s } = (0, eY.Ay)(),
        u = (0, ej.A)(r, s);
    return (0, d.jsxs)("button", {
        ref: u,
        type: "button",
        className: eF()(e$.pc, { [e$.EV]: o }),
        onClick: ez,
        children: [
            a && (0, d.jsx)(eH.ls, { eventTargetRef: s, isNitro: !0, contentWidth: i }),
            (0, d.jsxs)("span", {
                className: e$.Hq,
                children: [
                    (0, d.jsx)(t, { size: "md", color: "currentColor" }),
                    (0, d.jsx)(eM.E, {
                        variant: "body-md/medium",
                        color: "text-strong",
                        className: e$.We,
                        children: n,
                    }),
                    null != l && (0, d.jsx)("div", { className: e$.UT, children: l }),
                ],
            }),
        ],
    });
}
function eX(e) {
    let {
            tabLabel: t = "Nitro",
            selected: n = !1,
            decoration: o,
            showHoverGradient: l = !1,
            nitroRowRef: a,
            wrapNitroRow: r,
        } = e,
        i = (0, d.jsx)(eq, {
            ref: a,
            icon: eV.NitroWheelIcon,
            label: t,
            selected: n,
            decoration: o,
            showHoverGradient: l,
        });
    return (0, d.jsxs)("nav", {
        className: e$.C$,
        children: [
            (0, d.jsx)(eq, { icon: eW.FriendsIcon, label: "Friends" }),
            null != r ? r(i) : i,
            (0, d.jsx)(eq, { icon: eK.ShopIcon, label: "Shop" }),
            (0, d.jsx)(eq, { icon: ew.QuestsIcon, label: "Quests" }),
        ],
    });
}
var eZ = n(52416);
function eJ() {}
let eQ = "playground-premium-tab-popover",
    e0 = {
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
                    buttonAction: u,
                    navigableStorefrontApplicationId: c,
                    assetUrl: b,
                } = e,
                m = h(s.oW.PREMIUM_TAB_POPOVER),
                _ = m?.properties.premiumTabPopover ?? null;
            eu(
                ((n = {
                    header: (t = {
                        header: l,
                        body: r,
                        buttonCopy: i,
                        buttonAction: u,
                        navigableStorefrontApplicationId: c,
                        assetUrl: b,
                    }).header,
                    body: t.body,
                    button: {
                        ..._?.button,
                        copy: t.buttonCopy,
                        buttonAction:
                            t.buttonAction !== p.d.UNSPECIFIED
                                ? t.buttonAction
                                : (_?.button?.buttonAction ?? p.d.OPEN_TIER_2_PAYMENT_MODAL),
                        deeplinkSection: _?.button?.deeplinkSection ?? "",
                        navigableStorefrontApplicationId:
                            _?.button?.navigableStorefrontApplicationId ??
                            ("" !== t.navigableStorefrontApplicationId
                                ? { value: t.navigableStorefrontApplicationId }
                                : void 0),
                    },
                    asset: F(t.assetUrl, _?.asset),
                }),
                (o = D(eQ, {
                    oneofKind: "premiumTabPopover",
                    premiumTabPopover: null != _ ? { ..._, ...n } : { helpArticleId: "", ...n },
                })),
                k(eQ, s.oW.PREMIUM_TAB_POPOVER, "playground-premium-tab-popover-promotion", o)),
            );
            let A = a.useRef(null);
            return (0, d.jsx)(eX, {
                selected: !0,
                nitroRowRef: A,
                wrapNitroRow: (e) => (0, d.jsx)(eZ.A, { targetElementRef: A, dismissPopover: eJ, children: e }),
            });
        },
        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.PREMIUM_TAB_POPOVER }),
        useDefaultOverrides: () => {
            let e = h(s.oW.PREMIUM_TAB_POPOVER),
                t = e?.properties.premiumTabPopover ?? null;
            return null == t
                ? null
                : {
                      header: t.header,
                      body: t.body,
                      buttonCopy: t.button?.copy ?? "",
                      buttonAction: t.button?.buttonAction ?? p.d.UNSPECIFIED,
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
                defaultValue: p.d.UNSPECIFIED,
                options: [
                    { label: "Unspecified (use base)", value: p.d.UNSPECIFIED },
                    { label: "Open Marketing Page", value: p.d.OPEN_MARKETING_PAGE },
                    { label: "Open Shop", value: p.d.OPEN_SHOP },
                    { label: "Open Tier 2 Payment Modal", value: p.d.OPEN_TIER_2_PAYMENT_MODAL },
                    { label: "Open Tier 1 Payment Modal", value: p.d.OPEN_TIER_1_PAYMENT_MODAL },
                    { label: "Open Plan Selection Modal", value: p.d.OPEN_PLAN_SELECTION_MODAL },
                    { label: "Open Premium Group Payment Modal", value: p.d.OPEN_PREMIUM_GROUP_PAYMENT_MODAL },
                    { label: "Open Social Layer Storefront", value: p.d.OPEN_SOCIAL_LAYER_STOREFRONT },
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
var e2 = n(796878);
let e1 = "playground-premium-tab-tooltip";
n(321073);
var e6 = n(896170),
    e7 = n(890497),
    e8 = n(620632);
let e3 = [
    { type: "marketing_moment", label: "Marketing Moments" },
    { type: "gift", label: "Gift Promotions" },
];
function e9(e) {
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
var e5 = n(613556),
    e4 = n(641436),
    te = n(758836);
let tt = "playground-shop-nagbar";
function tn(e, t) {
    return { title: e, stories: [...t].sort((e, t) => e.name.localeCompare(t.name)) };
}
let to = {
    playgroundBaseUrl: "marketing",
    collections: [
        {
            id: "marketing",
            name: "Marketing",
            groups: [
                tn("Premium Surfaces", [
                    K,
                    z,
                    eh,
                    {
                        name: "Nagbar",
                        id: "nagbar",
                        component: function (e) {
                            var t;
                            let n,
                                o,
                                { body: l, ctaLabel: a, helpArticleId: r } = e,
                                i = h(s.oW.NAGBAR),
                                u = i?.properties.nagbar ?? null;
                            return (
                                eu(
                                    ((n = {
                                        body: (t = { body: l, ctaLabel: a, helpArticleId: r }).body,
                                        ctaLabel: t.ctaLabel,
                                        helpArticle:
                                            "" !== t.helpArticleId
                                                ? {
                                                      ...u?.helpArticle,
                                                      id: t.helpArticleId,
                                                      linkText: u?.helpArticle?.linkText ?? "",
                                                  }
                                                : void 0,
                                    }),
                                    (o = D(ev, {
                                        oneofKind: "nagbar",
                                        nagbar:
                                            null != u
                                                ? { ...u, ...n }
                                                : {
                                                      ctaAction: p.d.OPEN_TIER_2_PAYMENT_MODAL,
                                                      deeplinkSection: "",
                                                      ...n,
                                                  },
                                    })),
                                    k(ev, s.oW.NAGBAR, eP, o)),
                                ),
                                (0, d.jsx)("div", { className: j.MT, children: (0, d.jsx)(eC.A, {}) })
                            );
                        },
                        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.NAGBAR }),
                        useDefaultOverrides: () => {
                            let e = h(s.oW.NAGBAR),
                                t = e?.properties.nagbar ?? null;
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
                                    (0, d.jsx)(eM.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The post-purchase \u201COrbs delivered\u201D confirmation modal for the Nitro orbs bonus. Set the orb amount in the controls, then open it.",
                                    }),
                                    (0, d.jsx)(c.$, {
                                        text: "Open Orbs delivered modal",
                                        onClick: () => (0, eL.$)({ orbsAmount: t }),
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
                                    (0, d.jsx)(eM.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "The \u201CYour free Shop item is ready for you\u201D reward modal. Open it to preview.",
                                    }),
                                    (0, d.jsx)(c.$, { text: "Open Shop reward modal", onClick: () => (0, ex.tu)() }),
                                ],
                            });
                        },
                    },
                    {
                        name: "Payment Modal Banner",
                        id: "payment-modal-banner",
                        component: function (e) {
                            let { body: t, assetUrl: n } = e,
                                o = h(s.oW.PAYMENT_MODAL_BANNER);
                            eu(
                                (function (e, t) {
                                    let { body: n, assetUrl: o } = e,
                                        l = { assetUrl: o, body: n },
                                        a = D(eU, {
                                            oneofKind: "paymentModalBanner",
                                            paymentModalBanner: null != t ? { ...t, ...l } : { header: "", ...l },
                                        });
                                    return k(
                                        eU,
                                        s.oW.PAYMENT_MODAL_BANNER,
                                        "playground-payment-modal-banner-promotion",
                                        a,
                                    );
                                })({ body: t, assetUrl: n }, o?.properties.paymentModalBanner ?? null),
                            );
                            let { analyticsLocations: l } = (0, et.Ay)(ee.A.PAYMENT_FLOW_TEST_PAGE);
                            return (0, d.jsx)("div", {
                                className: j.MT,
                                children: (0, d.jsx)(c.$, {
                                    variant: "expressive",
                                    size: "md",
                                    text: "Open Payment Modal",
                                    onClick: () => (0, en.A)({ subscriptionTier: el.pe.TIER_2, analyticsLocations: l }),
                                }),
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.PAYMENT_MODAL_BANNER }),
                        useDefaultOverrides: () => {
                            let e = h(s.oW.PAYMENT_MODAL_BANNER),
                                t = e?.properties.paymentModalBanner ?? null;
                            return null == t ? null : { body: t.body, assetUrl: t.assetUrl };
                        },
                        controls: {
                            body: {
                                label: "Body",
                                type: "text",
                                defaultValue: "Your Nitro offer is waiting - subscribe now to claim it.",
                            },
                            assetUrl: { label: "Asset URL", type: "text", defaultValue: eG },
                        },
                    },
                    {
                        name: "Plan Select Card Banner",
                        id: "plan-select-card-banner",
                        component: function (e) {
                            let { body: t, assetUrl: n } = e,
                                o = h(s.oW.PLAN_SELECT_CARD_BANNER);
                            eu(
                                (function (e, t) {
                                    let { body: n, assetUrl: o } = e,
                                        l = D(eB, {
                                            oneofKind: "planSelectCardBanner",
                                            planSelectCardBanner: { ...t, body: n, asset: F(o, t?.asset) },
                                        });
                                    return k(
                                        eB,
                                        s.oW.PLAN_SELECT_CARD_BANNER,
                                        "playground-plan-select-card-banner-promotion",
                                        l,
                                    );
                                })({ body: t, assetUrl: n }, o?.properties.planSelectCardBanner ?? null),
                            );
                            let { analyticsLocations: l } = (0, et.Ay)(ee.A.PAYMENT_FLOW_TEST_PAGE);
                            return (0, d.jsx)("div", {
                                className: j.MT,
                                children: (0, d.jsx)(c.$, {
                                    variant: "expressive",
                                    size: "md",
                                    text: "Open Select Plan",
                                    onClick: () => (0, en.A)({ analyticsLocations: l }),
                                }),
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.PLAN_SELECT_CARD_BANNER }),
                        useDefaultOverrides: () => {
                            let e = h(s.oW.PLAN_SELECT_CARD_BANNER),
                                t = e?.properties.planSelectCardBanner ?? null;
                            return null == t ? null : { body: t.body, assetUrl: v(t.asset) };
                        },
                        controls: {
                            body: {
                                label: "Body",
                                type: "text",
                                defaultValue: "Join Nitro today and get your second month free! Limited time offer.",
                            },
                            assetUrl: { label: "Asset URL", type: "text", defaultValue: eG },
                        },
                    },
                    {
                        name: "Premium Tab Badge",
                        id: "premium-tab-badge",
                        component: function (e) {
                            let t = (0, d.jsx)(eD.A, {
                                componentId: "playground-premium-tab-badge",
                                componentType: s.oW.PREMIUM_TAB,
                                promotionId: "playground-premium-tab-badge-promotion",
                                badgeCopy: e.badgeCopy,
                                acknowledgedBadgeCopy: e.acknowledgedBadgeCopy,
                                isDismissed: e.isDismissed,
                            });
                            return (0, d.jsx)(eX, {
                                tabLabel: e.tabLabel,
                                selected: e.selected,
                                decoration: t,
                                showHoverGradient: e.showHoverGradient,
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.PREMIUM_TAB }),
                        useDefaultOverrides: () => {
                            let e = h(s.oW.PREMIUM_TAB),
                                t = e?.properties.premiumTab ?? null;
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
                    e0,
                    {
                        name: "Premium Tab Tooltip",
                        id: "premium-tab-tooltip",
                        component: function (e) {
                            var t;
                            let n,
                                o,
                                { header: l, body: a, assetUrl: r } = e,
                                i = h(s.oW.PREMIUM_TAB_TOOLTIP),
                                u = i?.properties.premiumTabTooltip ?? null;
                            return (
                                eu(
                                    ((n = {
                                        header: (t = { header: l, body: a, assetUrl: r }).header,
                                        body: t.body,
                                        asset: F(t.assetUrl, u?.asset),
                                    }),
                                    (o = D(e1, {
                                        oneofKind: "premiumTabTooltip",
                                        premiumTabTooltip: null != u ? { ...u, ...n } : n,
                                    })),
                                    k(e1, s.oW.PREMIUM_TAB_TOOLTIP, "playground-premium-tab-tooltip-promotion", o)),
                                ),
                                (0, d.jsx)(eX, { selected: !0, wrapNitroRow: (e) => (0, d.jsx)(e2.A, { children: e }) })
                            );
                        },
                        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.PREMIUM_TAB_TOOLTIP }),
                        useDefaultOverrides: () => {
                            let e = h(s.oW.PREMIUM_TAB_TOOLTIP),
                                t = e?.properties.premiumTabTooltip ?? null;
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
                    {
                        name: "Shop Nagbar",
                        id: "shop-nagbar",
                        component: function (e) {
                            var t;
                            let n,
                                o,
                                { body: l, ctaLabel: a, helpArticleId: r } = e,
                                i = h(s.oW.SHOP_NAGBAR),
                                u = i?.properties.shopNagbar ?? null;
                            eu(
                                ((n = {
                                    body: (t = { body: l, ctaLabel: a, helpArticleId: r }).body,
                                    ctaLabel: t.ctaLabel,
                                    helpArticle:
                                        "" !== t.helpArticleId
                                            ? {
                                                  ...u?.helpArticle,
                                                  id: t.helpArticleId,
                                                  linkText: u?.helpArticle?.linkText ?? "",
                                              }
                                            : void 0,
                                }),
                                (o = D(tt, {
                                    oneofKind: "shopNagbar",
                                    shopNagbar:
                                        null != u
                                            ? { ...u, ...n }
                                            : { ctaAction: p.d.OPEN_TIER_2_PAYMENT_MODAL, deeplinkSection: "", ...n },
                                })),
                                k(tt, s.oW.SHOP_NAGBAR, "playground-shop-nagbar-promotion", o)),
                            );
                            let c = (0, e4.u)(s.oW.SHOP_NAGBAR),
                                b =
                                    null != c
                                        ? {
                                              shopNagbar: c.surface,
                                              componentId: c.id,
                                              componentType: c.componentType,
                                              promotionId: c.promotionId,
                                          }
                                        : null;
                            return (0, d.jsx)("div", {
                                className: j.MT,
                                children:
                                    null != b &&
                                    (0, d.jsx)(e5.A, {
                                        shopNagbar: b.shopNagbar,
                                        componentId: b.componentId,
                                        componentType: b.componentType,
                                        promotionId: b.promotionId,
                                        tab: te.G2.HOME,
                                        onDismiss: () => {},
                                    }),
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.SHOP_NAGBAR }),
                        useDefaultOverrides: () => {
                            let e = h(s.oW.SHOP_NAGBAR),
                                t = e?.properties.shopNagbar ?? null;
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
                tn("Gifting Surfaces", [
                    {
                        name: "Billing Settings Gift Banner",
                        id: "billing-settings-nitro-gift-banner",
                        component: function (e) {
                            let t,
                                n = h(s.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER),
                                o = n?.properties.billingSettingsNitroGiftBanner ?? null;
                            return (0, d.jsx)("div", {
                                className: j.MT,
                                children: (0, d.jsx)(X.m, {
                                    config:
                                        ((t = {
                                            header: e.header,
                                            body: e.body,
                                            additionalTerms: e.additionalTerms,
                                            textColor: e.textColor,
                                            asset: F(e.assetUrl, o?.asset),
                                            backgroundAsset: F(e.backgroundAssetUrl, o?.backgroundAsset),
                                            gradient: {
                                                colors: [e.gradientStartColor, e.gradientEndColor],
                                                angle: e.gradientAngle,
                                            },
                                        }),
                                        null != o ? { ...o, ...t } : q.v.create(t)),
                                }),
                            });
                        },
                        ControlsExtension: () =>
                            (0, d.jsx)(G, { componentType: s.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER }),
                        useDefaultOverrides: () => {
                            let e = h(s.oW.BILLING_SETTINGS_NITRO_GIFT_BANNER),
                                t = e?.properties.billingSettingsNitroGiftBanner ?? null;
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
                            let { analyticsLocations: t } = (0, et.Ay)(ee.A.PAYMENT_FLOW_TEST_PAGE),
                                n = h(s.oW.GIFT_CUSTOMIZATION_BANNER),
                                o = n?.properties.giftCustomizationBanner ?? null;
                            return (0, d.jsx)("div", {
                                className: j.MT,
                                children: (0, d.jsx)(c.$, {
                                    variant: "expressive",
                                    size: "md",
                                    text: "Open Gift Payment Modal",
                                    onClick: () => {
                                        let n, l, a, r, i;
                                        ((r = {
                                            id: ea,
                                            component_type: s.oW.GIFT_CUSTOMIZATION_BANNER,
                                            promotion_id: er,
                                            properties:
                                                ((n = {
                                                    asset: F(e.assetUrl, o?.asset),
                                                    backgroundAsset: F(e.backgroundAssetUrl, o?.backgroundAsset),
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
                                                              assetVariant: J.u.NORMAL,
                                                              ...n,
                                                          }),
                                                (a = U.m.create({
                                                    contentIdentifier: ea,
                                                    properties: {
                                                        oneofKind: "giftCustomizationBanner",
                                                        giftCustomizationBanner: l,
                                                    },
                                                })),
                                                (0, B.ob)(U.m, a)),
                                        }),
                                            (i = {
                                                id: er,
                                                start_date: new Date(0).toISOString(),
                                                end_date: new Date("2099-01-01").toISOString(),
                                                promotion_type: eo.pt.GIFT_PROMOTION,
                                                flags: 0,
                                                partner_id: null,
                                                marketing_components: [r],
                                                metadata: { gift_promotion: { reward_sku_ids: [ei] } },
                                            }),
                                            Q.h.dispatch({
                                                type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                                promotions: [i],
                                                consumedInboundPromotionId: null,
                                            }),
                                            Q.h.dispatch({
                                                type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                                                purchases: [],
                                            }),
                                            (0, en.A)({
                                                isGift: !0,
                                                subscriptionTier: el.pe.TIER_2,
                                                analyticsLocations: t,
                                            }));
                                    },
                                }),
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.GIFT_CUSTOMIZATION_BANNER }),
                        useDefaultOverrides: () => {
                            let e = h(s.oW.GIFT_CUSTOMIZATION_BANNER),
                                t = e?.properties.giftCustomizationBanner ?? null;
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
                                o = h(s.oW.GIFT_ICON),
                                l = o?.properties.giftIcon ?? null;
                            return (
                                eu(
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
                                    (n = D(ec, { oneofKind: "giftIcon", giftIcon: null != l ? { ...l, ...t } : t })),
                                    k(ec, s.oW.GIFT_ICON, "playground-gift-icon-promotion", n)),
                                ),
                                (0, d.jsx)("div", { className: j.WG, children: (0, d.jsx)(ed.A, { channel: eb }) })
                            );
                        },
                        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.GIFT_ICON }),
                        useDefaultOverrides: () => {
                            let e = h(s.oW.GIFT_ICON),
                                t = e?.properties.giftIcon ?? null;
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
                            let t = h(s.oW.GIFT_ICON_COACHMARK),
                                n = t?.properties.giftIconCoachmark ?? null,
                                o = { header: e.header, body: e.body, asset: F(e.assetUrl, n?.asset) },
                                l = null != n ? { ...n, ...o } : em.l.create(o);
                            return (0, d.jsx)("div", {
                                className: j.WG,
                                children: (0, d.jsx)(e_.A, {
                                    coachmarkConfig: l,
                                    onComplete: eA,
                                    onCheckItOutClick: eA,
                                    markAsDismissed: eA,
                                    children: (0, d.jsx)(ed.A, { channel: eI }),
                                }),
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.GIFT_ICON_COACHMARK }),
                        useDefaultOverrides: () => {
                            let e = h(s.oW.GIFT_ICON_COACHMARK),
                                t = e?.properties.giftIconCoachmark ?? null;
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
                            let { analyticsLocations: t } = (0, et.Ay)(ee.A.PAYMENT_FLOW_TEST_PAGE),
                                n = h(s.oW.GIFT_PLAN_SELECTION_CARD_BANNER),
                                o = n?.properties.giftPlanSelectionCardBanner ?? null;
                            return (0, d.jsx)("div", {
                                className: j.MT,
                                children: (0, d.jsx)(c.$, {
                                    variant: "expressive",
                                    size: "md",
                                    text: "Open Gift Payment Modal",
                                    onClick: () => {
                                        let n, l, a, r, i;
                                        ((r = {
                                            id: eN,
                                            component_type: s.oW.GIFT_PLAN_SELECTION_CARD_BANNER,
                                            promotion_id: eT,
                                            properties:
                                                ((n = {
                                                    avatarAsset: F(e.avatarUrl, o?.avatarAsset),
                                                    bannerAsset: F(e.bannerUrl, o?.bannerAsset),
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
                                                (a = U.m.create({
                                                    contentIdentifier: eN,
                                                    properties: {
                                                        oneofKind: "giftPlanSelectionCardBanner",
                                                        giftPlanSelectionCardBanner: l,
                                                    },
                                                })),
                                                (0, B.ob)(U.m, a)),
                                        }),
                                            (i = {
                                                id: eT,
                                                start_date: new Date(0).toISOString(),
                                                end_date: new Date("2099-01-01").toISOString(),
                                                promotion_type: eo.pt.GIFT_PROMOTION,
                                                flags: 0,
                                                partner_id: null,
                                                marketing_components: [r],
                                                metadata: { gift_promotion: { reward_sku_ids: [eE] } },
                                            }),
                                            Q.h.dispatch({
                                                type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                                promotions: [i],
                                                consumedInboundPromotionId: null,
                                            }),
                                            Q.h.dispatch({
                                                type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                                                purchases: [],
                                            }),
                                            (0, en.A)({ isGift: !0, analyticsLocations: t }));
                                    },
                                }),
                            });
                        },
                        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.GIFT_PLAN_SELECTION_CARD_BANNER }),
                        useDefaultOverrides: () => {
                            let e = h(s.oW.GIFT_PLAN_SELECTION_CARD_BANNER),
                                t = e?.properties.giftPlanSelectionCardBanner ?? null;
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
                                l = h(s.oW.GIFT_REMINDER_NAGBAR),
                                a = l?.properties.giftReminderNagbar ?? null;
                            return (
                                eu(
                                    ((t = { body: { body: o }.body }),
                                    (n = D(ey, {
                                        oneofKind: "giftReminderNagbar",
                                        giftReminderNagbar: null != a ? { ...a, ...t } : t,
                                    })),
                                    k(ey, s.oW.GIFT_REMINDER_NAGBAR, "playground-gift-reminder-nagbar-promotion", n)),
                                ),
                                (0, d.jsx)("div", {
                                    className: j.MT,
                                    children: (0, d.jsx)(eg.y, { markAsDismissed: eS, className: j.gO }),
                                })
                            );
                        },
                        ControlsExtension: () => (0, d.jsx)(G, { componentType: s.oW.GIFT_REMINDER_NAGBAR }),
                        useDefaultOverrides: () => {
                            let e = h(s.oW.GIFT_REMINDER_NAGBAR),
                                t = e?.properties.giftReminderNagbar ?? null;
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
                let e = R.useField("selected"),
                    [t, n] = a.useState([]),
                    o = a.useRef(null);
                a.useEffect(() => {
                    let e = !0;
                    return (
                        (async function () {
                            return (
                                await e8.Bo.get({ url: "/premium-marketing/promotions", rejectWithError: !0 })
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
                    r = a.useCallback((e, n) => e9((0, e6.Ht)(t, n, { keys: ["name"] })), [t]);
                return 0 === t.length
                    ? null
                    : (0, d.jsx)("div", {
                          className: j.$K,
                          children: (0, d.jsx)(e7.Z, {
                              clearable: !0,
                              selectionMode: "single",
                              placeholder: "Load Promo Data",
                              value: e?.id,
                              options: l,
                              customMatchSorter: r,
                              onSelectionChange: function (e) {
                                  if (((o.current = e), null == e))
                                      return void R.setState({
                                          selected: null,
                                          componentRowsByKind: null,
                                          availableLocales: [],
                                          userStateByKind: new Map(),
                                          localeOverride: null,
                                      });
                                  let n = t.find((t) => t.id === e);
                                  null != n &&
                                      (async function (e) {
                                          let t = await e8.Bo.get({
                                                  url: `/premium-marketing/promotions/${e}/components`,
                                                  rejectWithError: !0,
                                              }),
                                              n = new Map();
                                          for (let e of t.body) {
                                              let t = (0, B.ii)(U.m, e.properties),
                                                  o = t.properties.oneofKind;
                                              if (null == o) continue;
                                              let l = n.get(o) ?? [];
                                              (l.push({
                                                  premiumType: e.premium_type,
                                                  premiumSource: e.premium_source,
                                                  premiumSubscriptionType: e.premium_subscription_type,
                                                  platform: e.platform,
                                                  isDefaultBase: t.isDefaultBase,
                                                  properties: t,
                                              }),
                                                  n.set(o, l));
                                          }
                                          return n;
                                      })(n.id)
                                          .then((e) => {
                                              o.current === n.id &&
                                                  (function (e, t) {
                                                      let n = new Set();
                                                      for (let e of t.values())
                                                          for (let t of e) (0, T.x)(t.properties, n);
                                                      R.setState({
                                                          selected: e,
                                                          componentRowsByKind: t,
                                                          availableLocales: [...n].sort(),
                                                          userStateByKind: new Map(),
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
