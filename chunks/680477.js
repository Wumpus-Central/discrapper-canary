a.r(t), a.d(t, { marketingCollection: () => eI, playgroundConfig: () => eT });
var n,
    o = a(64700),
    r = a(175841),
    l = a(962644),
    i = a(627968),
    d = a(232582),
    s = a(285402),
    c = a(821609),
    p = a(192308),
    u = a(935208),
    m = a(553706);
let b = "playground-announcement-modal",
    f = u.default.fromTimestamp(Date.now());
var g = a(959129),
    _ = a(815846);
function y(e) {
    return { lightUrl: e, darkUrl: e, lightStaticUrl: e, darkStaticUrl: e };
}
var A = a(65412),
    I =
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
    T = a(877624),
    S = a(67948),
    U = a(228366),
    E = a(793574),
    h = a(688810),
    C = a(532794),
    N = a(852218),
    x = a(788868);
let L = "playground-gift-customization-banner",
    G = "playground-gift-customization-banner-promotion",
    k = I.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
function v(e) {
    return { lightUrl: e, darkUrl: e, lightStaticUrl: e, darkStaticUrl: e };
}
var R = a(336618),
    V = a(95701);
function P(e) {
    let { id: t, component_type: a, promotion_id: n, properties: r } = e;
    o.useEffect(() => {
        (0, l.Ak)(),
            U.h.dispatch({
                type: "PREMIUM_MARKETING_PREVIEW",
                data: { id: t, component_type: a, promotion_id: n, properties: r },
            });
    }, [t, a, n, r]);
}
var O = a(652215);
let B = "playground-gift-icon",
    M = (0, V.createChannelRecord)({ id: "1", guild_id: "1", type: O.rbe.GUILD_TEXT, name: "playground" });
var F = a(720119),
    D = a(743477),
    j = a(40493);
let K = () => {},
    w = (0, V.createChannelRecord)({ id: "1", guild_id: "1", type: O.rbe.GUILD_TEXT, name: "playground" }),
    H = "playground-gift-plan-selection-card-banner",
    W = "playground-gift-plan-selection-card-banner-promotion",
    z = I.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
function Y(e) {
    return { lightUrl: e, darkUrl: e, lightStaticUrl: e, darkStaticUrl: e };
}
var $ = a(823901);
let X = () => {},
    q = "playground-gift-reminder-nagbar";
var J = a(371764);
let Q = "playground-marketing-page-banner";
var Z = a(754804);
let ee = "playground-nagbar",
    et = "playground-payment-modal-banner";
var ea = a(964661),
    en = a(503698),
    eo = a.n(en),
    er = a(834730),
    el = a(403581),
    ei = a(214947),
    ed = a(34188),
    es = a(577473),
    ec = a(15632);
let ep = () => {},
    eu = o.forwardRef(function (e, t) {
        let { icon: a, label: n, selected: o = !1, decoration: r } = e;
        return (0, i.jsxs)("button", {
            ref: t,
            type: "button",
            className: eo()(ec.pc, { [ec.EV]: o }),
            onClick: ep,
            children: [
                (0, i.jsx)(a, { size: "md", color: "currentColor" }),
                (0, i.jsx)(er.E, { variant: "text-md/medium", color: "text-strong", className: ec.We, children: n }),
                null != r && (0, i.jsx)("div", { className: ec.UT, children: r }),
            ],
        });
    });
function em(e) {
    let { tabLabel: t = "Nitro", selected: a = !1, decoration: n, nitroRowRef: o, wrapNitroRow: r } = e,
        l = (0, i.jsx)(eu, { ref: o, icon: el.t, label: t, selected: a, decoration: n });
    return (0, i.jsxs)("nav", {
        className: ec.C$,
        children: [
            (0, i.jsx)(eu, { icon: ei.$, label: "Friends" }),
            null != r ? r(l) : l,
            (0, i.jsx)(eu, { icon: ed.U, label: "Shop" }),
            (0, i.jsx)(eu, { icon: es.r, label: "Quests" }),
        ],
    });
}
var eb = a(52416);
let ef = () => {},
    eg = "playground-premium-tab-popover";
var e_ = a(796878);
let ey = "playground-premium-tab-tooltip";
function eA(e, t) {
    return { title: e, stories: [...t].sort((e, t) => e.name.localeCompare(t.name)) };
}
let eI = {
        id: "marketing",
        name: "Marketing",
        groups: [
            eA("Premium Surfaces", [
                {
                    name: "Announcement Modal",
                    id: "announcement-modal",
                    component: function (e) {
                        return (0, i.jsx)("div", {
                            className: m.MT,
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
                                                contentIdentifier: b,
                                                properties: {
                                                    oneofKind: "announcementModalVariant1",
                                                    announcementModalVariant1: t,
                                                },
                                            }));
                                    (0, p.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.all([
                                                a.e("45733"),
                                                a.e("39713"),
                                                a.e("38804"),
                                                a.e("90665"),
                                                a.e("22513"),
                                                a.e("42329"),
                                                a.e("37412"),
                                                a.e("92210"),
                                                a.e("35480"),
                                                a.e("68835"),
                                                a.e("2327"),
                                                a.e("71100"),
                                                a.e("5636"),
                                                a.e("58435"),
                                                a.e("69484"),
                                                a.e("68331"),
                                                a.e("7053"),
                                                a.e("48672"),
                                                a.e("39995"),
                                                a.e("25568"),
                                                a.e("63016"),
                                                a.e("92153"),
                                                a.e("55642"),
                                                a.e("80889"),
                                                a.e("32697"),
                                                a.e("43284"),
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
                                                a.e("99593"),
                                                a.e("84456"),
                                                a.e("47555"),
                                                a.e("21435"),
                                                a.e("61935"),
                                                a.e("62168"),
                                                a.e("69875"),
                                                a.e("58157"),
                                                a.e("16900"),
                                                a.e("91381"),
                                                a.e("15754"),
                                                a.e("44111"),
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
                                                a.e("54372"),
                                            ]).then(a.bind(a, 103407));
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    renderModalProps: t,
                                                    componentId: b,
                                                    promotionId: f,
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
                            contentIdentifier: Q,
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
                                  className: m.MT,
                                  children: (0, i.jsx)(J.x, {
                                      componentId: Q,
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
                            P(
                                ((t = { body: n, ctaLabel: o, helpArticleId: r }),
                                (a = s.m.create({
                                    contentIdentifier: ee,
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
                                    id: ee,
                                    component_type: T.C.NAGBAR,
                                    promotion_id: "playground-nagbar-promotion",
                                    properties: (0, A.C)(s.m.toBinary(a)),
                                }),
                            ),
                            (0, i.jsx)("div", { className: m.MT, children: (0, i.jsx)(Z.A, {}) })
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
                        P(
                            (function (e) {
                                let { body: t, assetUrl: a } = e,
                                    n = s.m.create({
                                        contentIdentifier: et,
                                        properties: {
                                            oneofKind: "paymentModalBanner",
                                            paymentModalBanner: { assetUrl: a, header: "", body: t },
                                        },
                                    });
                                return {
                                    id: et,
                                    component_type: T.C.PAYMENT_MODAL_BANNER,
                                    promotion_id: "playground-payment-modal-banner-promotion",
                                    properties: (0, A.C)(s.m.toBinary(n)),
                                };
                            })({ body: t, assetUrl: a }),
                        );
                        let { analyticsLocations: n } = (0, h.Ay)(E.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, i.jsx)("div", {
                            className: m.MT,
                            children: (0, i.jsx)(c.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Payment Modal",
                                onClick: () => (0, C.A)({ subscriptionTier: x.pe.TIER_2, analyticsLocations: n }),
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
                        let t = (0, i.jsx)(ea.A, {
                            componentId: "playground-premium-tab-badge",
                            badgeCopy: e.badgeCopy,
                            acknowledgedBadgeCopy: e.acknowledgedBadgeCopy,
                            isDismissed: e.isDismissed,
                        });
                        return (0, i.jsx)(em, { tabLabel: e.tabLabel, selected: e.selected, decoration: t });
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
                        P(
                            ((t = { header: n, body: r, buttonCopy: l, assetUrl: c }),
                            (a = s.m.create({
                                contentIdentifier: eg,
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
                                id: eg,
                                component_type: T.C.PREMIUM_TAB_POPOVER,
                                promotion_id: "playground-premium-tab-popover-promotion",
                                properties: (0, A.C)(s.m.toBinary(a)),
                            }),
                        );
                        let p = o.useRef(null);
                        return (0, i.jsx)(em, {
                            selected: !0,
                            nitroRowRef: p,
                            wrapNitroRow: (e) =>
                                (0, i.jsx)(eb.A, { targetElementRef: p, dismissPopover: ef, children: e }),
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
                            P(
                                ((t = { header: n, body: o, assetUrl: r }),
                                (a = s.m.create({
                                    contentIdentifier: ey,
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
                                    id: ey,
                                    component_type: T.C.PREMIUM_TAB_TOOLTIP,
                                    promotion_id: "playground-premium-tab-tooltip-promotion",
                                    properties: (0, A.C)(s.m.toBinary(a)),
                                }),
                            ),
                            (0, i.jsx)(em, { selected: !0, wrapNitroRow: (e) => (0, i.jsx)(e_.A, { children: e }) })
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
            eA("Gifting Surfaces", [
                {
                    name: "Billing Settings Gift Banner",
                    id: "billing-settings-nitro-gift-banner",
                    component: function (e) {
                        return (0, i.jsx)("div", {
                            className: m.MT,
                            children: (0, i.jsx)(_.c, {
                                config: g.v.create({
                                    header: e.header,
                                    body: e.body,
                                    additionalTerms: e.additionalTerms,
                                    textColor: e.textColor,
                                    asset: "" !== e.assetUrl ? y(e.assetUrl) : void 0,
                                    backgroundAsset: "" !== e.backgroundAssetUrl ? y(e.backgroundAssetUrl) : void 0,
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
                        let { analyticsLocations: t } = (0, h.Ay)(E.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, i.jsx)("div", {
                            className: m.MT,
                            children: (0, i.jsx)(c.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let a, n, o;
                                    (n = {
                                        id: L,
                                        component_type: T.C.GIFT_CUSTOMIZATION_BANNER,
                                        promotion_id: G,
                                        properties:
                                            ((a = s.m.create({
                                                contentIdentifier: L,
                                                properties: {
                                                    oneofKind: "giftCustomizationBanner",
                                                    giftCustomizationBanner: {
                                                        assetUrl: "",
                                                        desktopBody: "",
                                                        mobileBody: "",
                                                        backgroundAssetUrl: "",
                                                        asset: v(e.assetUrl),
                                                        backgroundAsset: v(e.backgroundAssetUrl),
                                                        gradient: {
                                                            colors: [e.gradientStartColor, e.gradientEndColor],
                                                            angle: e.gradientAngle,
                                                        },
                                                        assetVariant: S.u.NORMAL,
                                                    },
                                                },
                                            })),
                                            (0, A.C)(s.m.toBinary(a))),
                                    }),
                                        (o = {
                                            id: G,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: N.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [n],
                                            metadata: { gift_promotion: { reward_sku_ids: [k] } },
                                        }),
                                        U.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [o],
                                            consumedInboundPromotionId: null,
                                        }),
                                        U.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, C.A)({ isGift: !0, subscriptionTier: x.pe.TIER_2, analyticsLocations: t });
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
                            P(
                                ((t = s.m.create({
                                    contentIdentifier: B,
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
                                    id: B,
                                    component_type: T.C.GIFT_ICON,
                                    promotion_id: "playground-gift-icon-promotion",
                                    properties: (0, A.C)(s.m.toBinary(t)),
                                }),
                            ),
                            (0, i.jsx)("div", { className: m.WG, children: (0, i.jsx)(R.A, { channel: M }) })
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
                        let a = F.l.create({
                            header: e.header,
                            body: e.body,
                            asset:
                                "" !== e.assetUrl
                                    ? { lightUrl: (t = e.assetUrl), darkUrl: t, lightStaticUrl: t, darkStaticUrl: t }
                                    : void 0,
                        });
                        return (0, i.jsx)("div", {
                            className: m.WG,
                            children: (0, i.jsx)(j.A, {
                                coachmarkConfig: a,
                                onComplete: K,
                                onCheckItOutClick: K,
                                markAsDismissed: K,
                                children: (0, i.jsx)(D.A, { channel: w }),
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
                        let { analyticsLocations: t } = (0, h.Ay)(E.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, i.jsx)("div", {
                            className: m.MT,
                            children: (0, i.jsx)(c.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let a, n, o;
                                    (n = {
                                        id: H,
                                        component_type: T.C.GIFT_PLAN_SELECTION_CARD_BANNER,
                                        promotion_id: W,
                                        properties:
                                            ((a = s.m.create({
                                                contentIdentifier: H,
                                                properties: {
                                                    oneofKind: "giftPlanSelectionCardBanner",
                                                    giftPlanSelectionCardBanner: {
                                                        header: "",
                                                        desktopBody: "",
                                                        mobileBody: "",
                                                        bannerAssetUrl: "",
                                                        backgroundAssetUrl: "",
                                                        cardAssetUrl: "",
                                                        avatarAsset: "" !== e.avatarUrl ? Y(e.avatarUrl) : void 0,
                                                        bannerAsset: "" !== e.bannerUrl ? Y(e.bannerUrl) : void 0,
                                                        gradient: {
                                                            colors: [e.gradientStartColor, e.gradientEndColor],
                                                            angle: e.gradientAngle,
                                                        },
                                                    },
                                                },
                                            })),
                                            (0, A.C)(s.m.toBinary(a))),
                                    }),
                                        (o = {
                                            id: W,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: N.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [n],
                                            metadata: { gift_promotion: { reward_sku_ids: [z] } },
                                        }),
                                        U.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [o],
                                            consumedInboundPromotionId: null,
                                        }),
                                        U.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, C.A)({ isGift: !0, analyticsLocations: t });
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
                            P(
                                ((t = { body: n }),
                                (a = s.m.create({
                                    contentIdentifier: q,
                                    properties: {
                                        oneofKind: "giftReminderNagbar",
                                        giftReminderNagbar: { body: t.body },
                                    },
                                })),
                                {
                                    id: q,
                                    component_type: T.C.GIFT_REMINDER_NAGBAR,
                                    promotion_id: "playground-gift-reminder-nagbar-promotion",
                                    properties: (0, A.C)(s.m.toBinary(a)),
                                }),
                            ),
                            (0, i.jsx)("div", {
                                className: m.MT,
                                children: (0, i.jsx)($.y, { markAsDismissed: X, className: m.gO }),
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
    eT = { playgroundBaseUrl: "marketing", collections: [eI] };
