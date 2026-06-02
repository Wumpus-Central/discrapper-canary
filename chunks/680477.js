a.r(t), a.d(t, { marketingCollection: () => ey, playgroundConfig: () => eA });
var n,
    o = a(64700),
    r = a(175841),
    l = a(962644),
    i = a(627968),
    d = a(232582),
    s = a(285402),
    c = a(821609),
    p = a(192308),
    u = a(553706);
let m = "playground-announcement-modal";
var b = a(959129),
    g = a(815846);
function f(e) {
    return { lightUrl: e, darkUrl: e, lightStaticUrl: e, darkStaticUrl: e };
}
var _ = a(65412),
    y =
        (((n = {}).SEASONAL_GIFTING_2024_BALLOONS_REWARD_SKU_ID = "1301993378484850769"),
        (n.SEASONAL_GIFTING_2024_CAT_EARS_REWARD_SKU_ID = "1301993378484850771"),
        (n.SEASONAL_GIFTING_2024_SNOWFLAKES_REWARD_SKU_ID = "1301993378484850773"),
        (n.VALENTINES_GIFTING_2025_HEARTS_SKU_ID = "1326347611069874277"),
        (n.SUMMER_2025_GIFTING_REWARD_SKU_ID = "1369404111484751873"),
        (n.HALLOWEEN_GIFTING_2025_PUMPKIN_TRICK_SKU_ID = "1418326115876864070"),
        (n.HALLOWEEN_GIFTING_2025_PUMPKIN_TREAT_SKU_ID = "1418326116053287093"),
        (n.HALLOWEEN_GIFTING_2025_GHOST_TRICK_SKU_ID = "1418326115927326830"),
        (n.HALLOWEEN_GIFTING_2025_GHOST_TREAT_SKU_ID = "1418326116166533330"),
        (n.HALLOWEEN_GIFTING_2025_SKULL_TRICK_SKU_ID = "1418326115910680656"),
        (n.HALLOWEEN_GIFTING_2025_SKULL_TREAT_SKU_ID = "1418326116128788590"),
        (n.HALLOWEEN_GIFTING_2025_SPIDER_TRICK_SKU_ID = "1418326115893907677"),
        (n.HALLOWEEN_GIFTING_2025_SPIDER_TREAT_SKU_ID = "1418326116094967808"),
        (n.SEASONAL_GIFTING_2025_HEAD_IN_THE_CLOUDS_SKU_ID = "1343751617303805983"),
        (n.SEASONAL_GIFTING_2025_STARFALL_TIDES_SKU_ID = "1377377712104018071"),
        (n.SEASONAL_GIFTING_2025_MIRAGE_SKU_ID = "1343751617328975954"),
        (n.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID = "1464017397081047081"),
        (n.VALENTINES_GIFTING_2026_FULL_HP_SKU_ID = "1464006538304684063"),
        n),
    A = a(877624),
    I = a(67948),
    T = a(228366),
    S = a(793574),
    U = a(688810),
    E = a(532794),
    h = a(852218),
    C = a(788868);
let N = "playground-gift-customization-banner",
    x = "playground-gift-customization-banner-promotion",
    L = y.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
function G(e) {
    return { lightUrl: e, darkUrl: e, lightStaticUrl: e, darkStaticUrl: e };
}
var k = a(336618),
    v = a(95701);
function R(e) {
    let { id: t, component_type: a, promotion_id: n, properties: r } = e;
    o.useEffect(() => {
        (0, l.Ak)(),
            T.h.dispatch({
                type: "PREMIUM_MARKETING_PREVIEW",
                data: { id: t, component_type: a, promotion_id: n, properties: r },
            });
    }, [t, a, n, r]);
}
var V = a(652215);
let P = "playground-gift-icon",
    O = (0, v.createChannelRecord)({ id: "1", guild_id: "1", type: V.rbe.GUILD_TEXT, name: "playground" });
var B = a(720119),
    M = a(743477),
    F = a(40493);
let D = () => {},
    j = (0, v.createChannelRecord)({ id: "1", guild_id: "1", type: V.rbe.GUILD_TEXT, name: "playground" }),
    K = "playground-gift-plan-selection-card-banner",
    H = "playground-gift-plan-selection-card-banner-promotion",
    w = y.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
function W(e) {
    return { lightUrl: e, darkUrl: e, lightStaticUrl: e, darkStaticUrl: e };
}
var z = a(823901);
let Y = () => {},
    $ = "playground-gift-reminder-nagbar";
var X = a(371764);
let q = "playground-marketing-page-banner";
var J = a(754804);
let Q = "playground-nagbar",
    Z = "playground-payment-modal-banner";
var ee = a(964661),
    et = a(503698),
    ea = a.n(et),
    en = a(834730),
    eo = a(403581),
    er = a(214947),
    el = a(34188),
    ei = a(577473),
    ed = a(15632);
let es = () => {},
    ec = o.forwardRef(function (e, t) {
        let { icon: a, label: n, selected: o = !1, decoration: r } = e;
        return (0, i.jsxs)("button", {
            ref: t,
            type: "button",
            className: ea()(ed.pc, { [ed.EV]: o }),
            onClick: es,
            children: [
                (0, i.jsx)(a, { size: "md", color: "currentColor" }),
                (0, i.jsx)(en.E, { variant: "text-md/medium", color: "text-strong", className: ed.We, children: n }),
                null != r && (0, i.jsx)("div", { className: ed.UT, children: r }),
            ],
        });
    });
function ep(e) {
    let { tabLabel: t = "Nitro", selected: a = !1, decoration: n, nitroRowRef: o, wrapNitroRow: r } = e,
        l = (0, i.jsx)(ec, { ref: o, icon: eo.t, label: t, selected: a, decoration: n });
    return (0, i.jsxs)("nav", {
        className: ed.C$,
        children: [
            (0, i.jsx)(ec, { icon: er.$, label: "Friends" }),
            null != r ? r(l) : l,
            (0, i.jsx)(ec, { icon: el.U, label: "Shop" }),
            (0, i.jsx)(ec, { icon: ei.r, label: "Quests" }),
        ],
    });
}
var eu = a(52416);
let em = () => {},
    eb = "playground-premium-tab-popover";
var eg = a(796878);
let ef = "playground-premium-tab-tooltip";
function e_(e, t) {
    return { title: e, stories: [...t].sort((e, t) => e.name.localeCompare(t.name)) };
}
let ey = {
        id: "marketing",
        name: "Marketing",
        groups: [
            e_("Premium Surfaces", [
                {
                    name: "Announcement Modal",
                    id: "announcement-modal",
                    component: function (e) {
                        return (0, i.jsx)("div", {
                            className: u.MT,
                            children: (0, i.jsx)(c.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Announcement Modal",
                                onClick: () => {
                                    let t,
                                        n =
                                            ((t = d.ih.create({
                                                modalTopPill: e.modalTopPill,
                                                header: e.header,
                                                subheader: e.subheader,
                                                heroArtImageLinkLightTheme: e.heroArtImageUrl,
                                                heroArtImageLinkDarkTheme: e.heroArtImageUrl,
                                                button: {
                                                    copy: e.buttonCopy,
                                                    buttonAction: d.dz.OPEN_TIER_2_PAYMENT_MODAL,
                                                    deeplinkSection: "",
                                                },
                                            })),
                                            s.m.create({
                                                contentIdentifier: m,
                                                properties: {
                                                    oneofKind: "announcementModalVariant1",
                                                    announcementModalVariant1: t,
                                                },
                                            }));
                                    (0, p.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.all([
                                                a.e("1279"),
                                                a.e("72811"),
                                                a.e("79264"),
                                                a.e("90665"),
                                                a.e("22513"),
                                                a.e("71192"),
                                                a.e("78383"),
                                                a.e("13878"),
                                                a.e("19401"),
                                                a.e("66161"),
                                                a.e("14947"),
                                                a.e("71100"),
                                                a.e("5636"),
                                                a.e("58435"),
                                                a.e("69484"),
                                                a.e("40955"),
                                                a.e("58735"),
                                                a.e("78014"),
                                                a.e("39995"),
                                                a.e("25568"),
                                                a.e("63016"),
                                                a.e("68953"),
                                                a.e("55642"),
                                                a.e("80889"),
                                                a.e("32697"),
                                                a.e("61872"),
                                                a.e("78340"),
                                                a.e("207"),
                                                a.e("89281"),
                                                a.e("57036"),
                                                a.e("57174"),
                                                a.e("98839"),
                                                a.e("88941"),
                                                a.e("61379"),
                                                a.e("43039"),
                                                a.e("88077"),
                                                a.e("25693"),
                                                a.e("32606"),
                                                a.e("32817"),
                                                a.e("28154"),
                                                a.e("13681"),
                                                a.e("53729"),
                                                a.e("48804"),
                                                a.e("21690"),
                                                a.e("10004"),
                                                a.e("55314"),
                                                a.e("89094"),
                                                a.e("29177"),
                                                a.e("32551"),
                                                a.e("76881"),
                                                a.e("4369"),
                                                a.e("23353"),
                                                a.e("50015"),
                                                a.e("38835"),
                                                a.e("11523"),
                                                a.e("44695"),
                                                a.e("44376"),
                                                a.e("31644"),
                                                a.e("45723"),
                                                a.e("70697"),
                                                a.e("18546"),
                                                a.e("53930"),
                                                a.e("90244"),
                                                a.e("18943"),
                                                a.e("70653"),
                                                a.e("53614"),
                                                a.e("31825"),
                                                a.e("36320"),
                                                a.e("20320"),
                                                a.e("31390"),
                                                a.e("47017"),
                                                a.e("90889"),
                                                a.e("99657"),
                                                a.e("26780"),
                                                a.e("44265"),
                                                a.e("99141"),
                                                a.e("84103"),
                                                a.e("17225"),
                                                a.e("30920"),
                                                a.e("25990"),
                                                a.e("11527"),
                                                a.e("63095"),
                                                a.e("39734"),
                                                a.e("68647"),
                                                a.e("35344"),
                                                a.e("63070"),
                                                a.e("64615"),
                                                a.e("96443"),
                                                a.e("87225"),
                                                a.e("75134"),
                                                a.e("84967"),
                                                a.e("55184"),
                                                a.e("23216"),
                                                a.e("87079"),
                                                a.e("73547"),
                                                a.e("84456"),
                                                a.e("47555"),
                                                a.e("21435"),
                                                a.e("99593"),
                                                a.e("61935"),
                                                a.e("62168"),
                                                a.e("69875"),
                                                a.e("58157"),
                                                a.e("16900"),
                                                a.e("91381"),
                                                a.e("60107"),
                                                a.e("20287"),
                                                a.e("96137"),
                                                a.e("18997"),
                                                a.e("3131"),
                                                a.e("47177"),
                                                a.e("27272"),
                                                a.e("36149"),
                                                a.e("51778"),
                                                a.e("24914"),
                                                a.e("97563"),
                                                a.e("20382"),
                                                a.e("63333"),
                                                a.e("73165"),
                                                a.e("66017"),
                                                a.e("46592"),
                                            ]).then(a.bind(a, 40899));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    renderModalProps: t,
                                                    componentId: m,
                                                    promotionId: "playground-announcement-modal-promotion",
                                                    properties: n,
                                                });
                                        },
                                        { modalKey: "playground-announcement-modal" },
                                    );
                                },
                            }),
                        });
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
                    },
                },
                {
                    name: "Marketing Page Banner",
                    id: "marketing-page-banner",
                    component: function (e) {
                        let t = {
                            contentIdentifier: q,
                            properties: {
                                oneofKind: "marketingPageBanner",
                                marketingPageBanner: {
                                    assetUrl: e.assetUrl,
                                    header: e.header,
                                    body: e.body,
                                    helpArticleId: "",
                                    button: e.showButton
                                        ? {
                                              copy: e.buttonCopy,
                                              buttonAction: d.dz.OPEN_TIER_2_PAYMENT_MODAL,
                                              deeplinkSection: "",
                                          }
                                        : void 0,
                                },
                            },
                        };
                        return "marketingPageBanner" !== t.properties.oneofKind
                            ? null
                            : (0, i.jsx)("div", {
                                  className: u.MT,
                                  children: (0, i.jsx)(X.x, {
                                      componentId: q,
                                      promotionBannerMarketingComponentFields: t.properties.marketingPageBanner,
                                  }),
                              });
                    },
                    controls: {
                        header: { label: "Header", type: "text", defaultValue: "Get Nitro and unlock more" },
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue:
                                "Bigger uploads, HD video, custom emoji everywhere, and more. Just {price}/month.",
                        },
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/7088cd62971948493c32b65337c62856b4d25e7313305f252193263a1f2209d6.svg",
                        },
                        showButton: { label: "Show Button", type: "boolean", defaultValue: !0 },
                        buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Get Nitro" },
                    },
                },
                {
                    name: "Nagbar",
                    id: "nagbar",
                    component: function (e) {
                        var t;
                        let a,
                            { body: n, ctaLabel: o, helpArticleId: r } = e;
                        return (
                            R(
                                ((t = { body: n, ctaLabel: o, helpArticleId: r }),
                                (a = s.m.create({
                                    contentIdentifier: Q,
                                    properties: {
                                        oneofKind: "nagbar",
                                        nagbar: {
                                            body: t.body,
                                            ctaLabel: t.ctaLabel,
                                            ctaAction: d.dz.OPEN_TIER_2_PAYMENT_MODAL,
                                            deeplinkSection: "",
                                            helpArticle:
                                                "" !== t.helpArticleId ? { id: t.helpArticleId, linkText: "" } : void 0,
                                        },
                                    },
                                })),
                                {
                                    id: Q,
                                    component_type: A.C.NAGBAR,
                                    promotion_id: "playground-nagbar-promotion",
                                    properties: (0, _.C)(s.m.toBinary(a)),
                                }),
                            ),
                            (0, i.jsx)("div", { className: u.MT, children: (0, i.jsx)(J.A, {}) })
                        );
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
                    name: "Payment Modal Banner",
                    id: "payment-modal-banner",
                    component: function (e) {
                        let { body: t, assetUrl: a } = e;
                        R(
                            (function (e) {
                                let { body: t, assetUrl: a } = e,
                                    n = s.m.create({
                                        contentIdentifier: Z,
                                        properties: {
                                            oneofKind: "paymentModalBanner",
                                            paymentModalBanner: { assetUrl: a, header: "", body: t },
                                        },
                                    });
                                return {
                                    id: Z,
                                    component_type: A.C.PAYMENT_MODAL_BANNER,
                                    promotion_id: "playground-payment-modal-banner-promotion",
                                    properties: (0, _.C)(s.m.toBinary(n)),
                                };
                            })({ body: t, assetUrl: a }),
                        );
                        let { analyticsLocations: n } = (0, U.Ay)(S.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, i.jsx)("div", {
                            className: u.MT,
                            children: (0, i.jsx)(c.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Payment Modal",
                                onClick: () => (0, E.A)({ subscriptionTier: C.pe.TIER_2, analyticsLocations: n }),
                            }),
                        });
                    },
                    controls: {
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Your Nitro offer is waiting - subscribe now to claim it.",
                        },
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/ce3500be6abe18b64c923af6d520c74cc915387831c4cdd5e4240d175417a87a.svg",
                        },
                    },
                },
                {
                    name: "Premium Tab Badge",
                    id: "premium-tab-badge",
                    component: function (e) {
                        let t = (0, i.jsx)(ee.A, {
                            componentId: "playground-premium-tab-badge",
                            badgeCopy: e.badgeCopy,
                            acknowledgedBadgeCopy: e.acknowledgedBadgeCopy,
                            isDismissed: e.isDismissed,
                        });
                        return (0, i.jsx)(ep, { tabLabel: e.tabLabel, selected: e.selected, decoration: t });
                    },
                    controls: {
                        tabLabel: { label: "Tab Label", type: "text", defaultValue: "Nitro" },
                        selected: { label: "Selected", type: "boolean", defaultValue: !1 },
                        badgeCopy: { label: "Badge Copy", type: "text", defaultValue: "Offer" },
                        acknowledgedBadgeCopy: { label: "Acknowledged Copy", type: "text", defaultValue: "Offer" },
                        isDismissed: { label: "Acknowledged", type: "boolean", defaultValue: !1 },
                    },
                },
                {
                    name: "Premium Tab Popover",
                    id: "premium-tab-popover",
                    component: function (e) {
                        var t;
                        let a,
                            { header: n, body: r, buttonCopy: l, assetUrl: c } = e;
                        R(
                            ((t = { header: n, body: r, buttonCopy: l, assetUrl: c }),
                            (a = s.m.create({
                                contentIdentifier: eb,
                                properties: {
                                    oneofKind: "premiumTabPopover",
                                    premiumTabPopover: {
                                        header: t.header,
                                        body: t.body,
                                        helpArticleId: "",
                                        button: {
                                            copy: t.buttonCopy,
                                            buttonAction: d.dz.OPEN_TIER_2_PAYMENT_MODAL,
                                            deeplinkSection: "",
                                        },
                                        asset: {
                                            lightUrl: t.assetUrl,
                                            darkUrl: t.assetUrl,
                                            lightStaticUrl: t.assetUrl,
                                            darkStaticUrl: t.assetUrl,
                                        },
                                    },
                                },
                            })),
                            {
                                id: eb,
                                component_type: A.C.PREMIUM_TAB_POPOVER,
                                promotion_id: "playground-premium-tab-popover-promotion",
                                properties: (0, _.C)(s.m.toBinary(a)),
                            }),
                        );
                        let p = o.useRef(null);
                        return (0, i.jsx)(ep, {
                            selected: !0,
                            nitroRowRef: p,
                            wrapNitroRow: (e) =>
                                (0, i.jsx)(eu.A, { targetElementRef: p, dismissPopover: em, children: e }),
                        });
                    },
                    controls: {
                        header: { label: "Header", type: "text", defaultValue: "Your Nitro offer is here" },
                        body: {
                            label: "Body",
                            type: "text",
                            defaultValue: "Subscribe now to claim bigger uploads, HD video, and more.",
                        },
                        buttonCopy: { label: "Button Copy", type: "text", defaultValue: "Get Nitro" },
                        assetUrl: {
                            label: "Asset URL",
                            type: "text",
                            defaultValue:
                                "https://cdn.discordapp.com/assets/content/38b775edc3d9b9fbfd496639f0a1deb9b9882c989fa70fdbb86f60dc764c2f80.svg",
                        },
                    },
                },
                {
                    name: "Premium Tab Tooltip",
                    id: "premium-tab-tooltip",
                    component: function (e) {
                        var t;
                        let a,
                            { header: n, body: o, assetUrl: r } = e;
                        return (
                            R(
                                ((t = { header: n, body: o, assetUrl: r }),
                                (a = s.m.create({
                                    contentIdentifier: ef,
                                    properties: {
                                        oneofKind: "premiumTabTooltip",
                                        premiumTabTooltip: {
                                            header: t.header,
                                            body: t.body,
                                            asset: {
                                                lightUrl: t.assetUrl,
                                                darkUrl: t.assetUrl,
                                                lightStaticUrl: t.assetUrl,
                                                darkStaticUrl: t.assetUrl,
                                            },
                                        },
                                    },
                                })),
                                {
                                    id: ef,
                                    component_type: A.C.PREMIUM_TAB_TOOLTIP,
                                    promotion_id: "playground-premium-tab-tooltip-promotion",
                                    properties: (0, _.C)(s.m.toBinary(a)),
                                }),
                            ),
                            (0, i.jsx)(ep, { selected: !0, wrapNitroRow: (e) => (0, i.jsx)(eg.A, { children: e }) })
                        );
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
            e_("Gifting Surfaces", [
                {
                    name: "Billing Settings Gift Banner",
                    id: "billing-settings-nitro-gift-banner",
                    component: function (e) {
                        return (0, i.jsx)("div", {
                            className: u.MT,
                            children: (0, i.jsx)(g.c, {
                                config: b.v.create({
                                    header: e.header,
                                    body: e.body,
                                    additionalTerms: e.additionalTerms,
                                    textColor: e.textColor,
                                    asset: "" !== e.assetUrl ? f(e.assetUrl) : void 0,
                                    backgroundAsset: "" !== e.backgroundAssetUrl ? f(e.backgroundAssetUrl) : void 0,
                                    gradient: {
                                        colors: [e.gradientStartColor, e.gradientEndColor],
                                        angle: e.gradientAngle,
                                    },
                                }),
                            }),
                        });
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
                                "https://cdn.discordapp.com/assets/content/e1211660bfdc7f22e21f411490eda65161c0b3bfe85204920fcff660aa78ab08.png",
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
                        let { analyticsLocations: t } = (0, U.Ay)(S.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, i.jsx)("div", {
                            className: u.MT,
                            children: (0, i.jsx)(c.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let a, n, o;
                                    (n = {
                                        id: N,
                                        component_type: A.C.GIFT_CUSTOMIZATION_BANNER,
                                        promotion_id: x,
                                        properties:
                                            ((a = s.m.create({
                                                contentIdentifier: N,
                                                properties: {
                                                    oneofKind: "giftCustomizationBanner",
                                                    giftCustomizationBanner: {
                                                        assetUrl: "",
                                                        desktopBody: "",
                                                        mobileBody: "",
                                                        backgroundAssetUrl: "",
                                                        asset: G(e.assetUrl),
                                                        backgroundAsset: G(e.backgroundAssetUrl),
                                                        gradient: {
                                                            colors: [e.gradientStartColor, e.gradientEndColor],
                                                            angle: e.gradientAngle,
                                                        },
                                                        assetVariant: I.u.NORMAL,
                                                    },
                                                },
                                            })),
                                            (0, _.C)(s.m.toBinary(a))),
                                    }),
                                        (o = {
                                            id: x,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: h.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [n],
                                            metadata: { gift_promotion: { reward_sku_ids: [L] } },
                                        }),
                                        T.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [o],
                                            consumedInboundPromotionId: null,
                                        }),
                                        T.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, E.A)({ isGift: !0, subscriptionTier: C.pe.TIER_2, analyticsLocations: t });
                                },
                            }),
                        });
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
                                "https://cdn.discordapp.com/assets/content/aea39461d76e04fccff7ceb6176cea55cbbb80164731f836c3711b8b98ecf360.png",
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
                        let t;
                        return (
                            R(
                                ((t = s.m.create({
                                    contentIdentifier: P,
                                    properties: {
                                        oneofKind: "giftIcon",
                                        giftIcon: {
                                            boxAnimationUrl: e.boxAnimationUrl,
                                            trinketAnimationUrl: e.trinketAnimationUrl,
                                            trinketGlowAnimationUrl: e.trinketGlowAnimationUrl,
                                            gradient: {
                                                colors: [e.gradientStartColor, e.gradientEndColor],
                                                angle: e.gradientAngle,
                                            },
                                        },
                                    },
                                })),
                                {
                                    id: P,
                                    component_type: A.C.GIFT_ICON,
                                    promotion_id: "playground-gift-icon-promotion",
                                    properties: (0, _.C)(s.m.toBinary(t)),
                                }),
                            ),
                            (0, i.jsx)("div", { className: u.WG, children: (0, i.jsx)(k.A, { channel: O }) })
                        );
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
                        var t;
                        let a = B.l.create({
                            header: e.header,
                            body: e.body,
                            asset:
                                "" !== e.assetUrl
                                    ? { lightUrl: (t = e.assetUrl), darkUrl: t, lightStaticUrl: t, darkStaticUrl: t }
                                    : void 0,
                        });
                        return (0, i.jsx)("div", {
                            className: u.WG,
                            children: (0, i.jsx)(F.A, {
                                coachmarkConfig: a,
                                onComplete: D,
                                onCheckItOutClick: D,
                                markAsDismissed: D,
                                children: (0, i.jsx)(M.A, { channel: j }),
                            }),
                        });
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
                        let { analyticsLocations: t } = (0, U.Ay)(S.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, i.jsx)("div", {
                            className: u.MT,
                            children: (0, i.jsx)(c.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let a, n, o;
                                    (n = {
                                        id: K,
                                        component_type: A.C.GIFT_PLAN_SELECTION_CARD_BANNER,
                                        promotion_id: H,
                                        properties:
                                            ((a = s.m.create({
                                                contentIdentifier: K,
                                                properties: {
                                                    oneofKind: "giftPlanSelectionCardBanner",
                                                    giftPlanSelectionCardBanner: {
                                                        header: "",
                                                        desktopBody: "",
                                                        mobileBody: "",
                                                        bannerAssetUrl: "",
                                                        backgroundAssetUrl: "",
                                                        cardAssetUrl: "",
                                                        avatarAsset: "" !== e.avatarUrl ? W(e.avatarUrl) : void 0,
                                                        bannerAsset: "" !== e.bannerUrl ? W(e.bannerUrl) : void 0,
                                                        gradient: {
                                                            colors: [e.gradientStartColor, e.gradientEndColor],
                                                            angle: e.gradientAngle,
                                                        },
                                                    },
                                                },
                                            })),
                                            (0, _.C)(s.m.toBinary(a))),
                                    }),
                                        (o = {
                                            id: H,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: h.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [n],
                                            metadata: { gift_promotion: { reward_sku_ids: [w] } },
                                        }),
                                        T.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [o],
                                            consumedInboundPromotionId: null,
                                        }),
                                        T.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, E.A)({ isGift: !0, analyticsLocations: t });
                                },
                            }),
                        });
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
                        var t;
                        let a,
                            { body: n } = e;
                        return (
                            R(
                                ((t = { body: n }),
                                (a = s.m.create({
                                    contentIdentifier: $,
                                    properties: {
                                        oneofKind: "giftReminderNagbar",
                                        giftReminderNagbar: { body: t.body },
                                    },
                                })),
                                {
                                    id: $,
                                    component_type: A.C.GIFT_REMINDER_NAGBAR,
                                    promotion_id: "playground-gift-reminder-nagbar-promotion",
                                    properties: (0, _.C)(s.m.toBinary(a)),
                                }),
                            ),
                            (0, i.jsx)("div", {
                                className: u.MT,
                                children: (0, i.jsx)(z.y, { markAsDismissed: Y, className: u.gO }),
                            })
                        );
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
        IconComponent: r.B,
        Provider: function (e) {
            let { children: t } = e;
            return (
                o.useEffect(
                    () => () => {
                        (0, l.Ak)(), (0, l.b8)();
                    },
                    [],
                ),
                t
            );
        },
    },
    eA = { playgroundBaseUrl: "marketing", collections: [ey] };
