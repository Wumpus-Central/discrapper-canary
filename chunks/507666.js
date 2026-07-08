n.r(t), n.d(t, { marketingCollection: () => e0, playgroundConfig: () => e2 });
var o,
    l,
    a,
    r,
    i = n(64700),
    d = n(175841),
    u = n(962644),
    s = n(627968),
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
        (((l = {})[(l.NONE = 0)] = "NONE"),
        (l[(l.BOOST_ONLY = 1)] = "BOOST_ONLY"),
        (l[(l.TIER_0 = 2)] = "TIER_0"),
        (l[(l.TIER_1 = 3)] = "TIER_1"),
        (l[(l.TIER_2 = 4)] = "TIER_2"),
        l),
    N =
        (((a = {})[(a.NONE = 0)] = "NONE"),
        (a[(a.TIER_1 = 1)] = "TIER_1"),
        (a[(a.TIER_2 = 2)] = "TIER_2"),
        (a[(a.TIER_0 = 3)] = "TIER_0"),
        a);
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
    let l = null == e ? "Any" : N[e],
        a = null == t ? "Any" : I[t],
        r = null == n ? "Any" : g[n];
    return { id: `CUSTOM:${e ?? "any"}:${t ?? "any"}:${n ?? "any"}`, label: `${l} / ${a} / ${r}` };
}
let S = "Localized";
function O(e) {
    return "object" == typeof e && null != e && "string" == typeof e.default && "object" == typeof e.localizations;
}
let C = (0, T.D)(() => ({
    selected: null,
    componentRowsByType: null,
    availableLocales: [],
    userStateByType: new Map(),
    localeOverride: null,
}));
function R(e) {
    let t = C.useField("componentRowsByType"),
        n = C.useField("userStateByType"),
        o = C.useField("localeOverride");
    return i.useMemo(
        () =>
            (function (e, t, n, o) {
                var l, a;
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
                    : ((l = d.properties),
                      (a = o ?? "en-US"),
                      (function e(t, n) {
                          if (Array.isArray(t)) {
                              for (let o of t) e(o, n);
                              return;
                          }
                          if ("object" == typeof t && null != t)
                              for (let [o, l] of Object.entries(t)) {
                                  if (o.endsWith(S) && O(l)) {
                                      let e = o.slice(0, -S.length),
                                          a = l.localizations[n] ?? ("" !== l.default ? l.default : null);
                                      null != a && e in t && (t[e] = a);
                                      continue;
                                  }
                                  e(l, n);
                              }
                      })(
                          (r = (function e(t) {
                              if (Array.isArray(t)) return t.map((t) => e(t));
                              if (null == t || "object" != typeof t) return t;
                              let n = Object.getPrototypeOf(t);
                              if (n !== Object.prototype && null !== n) return t;
                              let o = {};
                              for (let [n, l] of Object.entries(t)) o[n] = e(l);
                              return o;
                          })(l)),
                          a,
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
    U = n(669746);
function L(e) {
    let { label: t, value: n, disabled: o } = e;
    return { id: n, value: n, label: t, disabled: o };
}
function M(e) {
    let t,
        { componentType: n } = e,
        o = C.useField("selected"),
        l = C.useField("componentRowsByType"),
        a = C.useField("userStateByType"),
        r = C.useField("localeOverride"),
        d = C.useField("availableLocales"),
        u =
            ((t = C.useField("componentRowsByType")),
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
        b = (l?.get(n)?.length ?? 0) > 0;
    if (null == o || !b) return null;
    let m = u.length >= 1,
        f = [{ label: "Default", value: h }, ...u.map((e) => ({ label: e.label, value: e.id }))];
    return (0, s.jsx)("div", {
        className: U.k,
        children: (0, s.jsxs)(_.B, {
            gap: 16,
            children: [
                m &&
                    (0, s.jsx)(A.l, {
                        label: "User State",
                        value: a.get(n) ?? h,
                        onSelectionChange: (e) => {
                            var t;
                            let o;
                            return (
                                (t = e === h ? null : e),
                                (o = new Map(C.getState().userStateByType)),
                                void (null == t ? o.delete(n) : o.set(n, t), C.setState({ userStateByType: o }))
                            );
                        },
                        options: f,
                        formatOption: L,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                (0, s.jsx)(A.l, {
                    label: "Locale",
                    value: r ?? h,
                    onSelectionChange: (e) => {
                        var t;
                        return (t = e === h ? null : e), void C.setState({ localeOverride: t });
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
var x = n(65412),
    B = n(34869);
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
            return (0, s.jsx)("div", {
                className: F.MT,
                children: (0, s.jsx)(b.$, {
                    variant: "expressive",
                    size: "md",
                    text: "Open Announcement Modal",
                    onClick: () => {
                        let t,
                            l =
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
                                    n.e("34691"),
                                    n.e("20287"),
                                    n.e("18997"),
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
                                    (0, s.jsx)(e, {
                                        renderModalProps: t,
                                        componentId: V,
                                        promotionId: j,
                                        properties: l,
                                    });
                            },
                            { modalKey: "playground-announcement-modal" },
                        );
                    },
                }),
            });
        },
        ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.ANNOUNCEMENT_MODAL }),
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
    z = n(662367);
let H = {
    name: "Nitro Settings Banner",
    id: "billing-settings-banner",
    component: function (e) {
        let t,
            n,
            o,
            l = R(p.C.BILLING_SETTINGS_BANNER),
            a = l?.properties.oneofKind === "billingSettingsBanner" ? l.properties.billingSettingsBanner : null,
            r = C.useField("selected"),
            [d] = i.useState(() => new Date(Date.now() + 6048e5)),
            u = r?.endDate ?? d;
        return (0, s.jsx)("div", {
            className: F.MT,
            children: (0, s.jsx)(z.I, {
                componentId: "playground-billing-settings-banner",
                fields:
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
                    (n =
                        "" !== e.helpArticleId
                            ? { ...a?.helpArticle, id: e.helpArticleId, linkText: e.helpArticleLinkText }
                            : void 0),
                    (o = { header: e.header, body: e.body, asset: k(e.assetUrl, a?.asset), button: t, helpArticle: n }),
                    null != a ? { ...a, ...o } : w.h.create(o)),
                endDate: u,
            }),
        });
    },
    ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.BILLING_SETTINGS_BANNER }),
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
var W = n(959129),
    Y = n(815846),
    $ =
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
    Z = n(67948),
    q = n(228366),
    J = n(793574),
    Q = n(688810),
    X = n(532794),
    ee = n(852218),
    et = n(202541);
let en = "playground-gift-customization-banner",
    eo = "playground-gift-customization-banner-promotion",
    el = $.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var ea = n(365990),
    er = n(95701);
function ei(e) {
    let { id: t, component_type: n, promotion_id: o, properties: l } = e;
    i.useEffect(() => {
        (0, u.Ak)(),
            q.h.dispatch({
                type: "PREMIUM_MARKETING_PREVIEW",
                data: { id: t, component_type: n, promotion_id: o, properties: l },
            });
    }, [t, n, o, l]);
}
var ed = n(652215);
let eu = "playground-gift-icon",
    es = (0, er.createChannelRecord)({ id: "1", guild_id: "1", type: ed.rbe.GUILD_TEXT, name: "playground" });
var ep = n(720119),
    ec = n(40493);
function eb() {}
let em = (0, er.createChannelRecord)({ id: "1", guild_id: "1", type: ed.rbe.GUILD_TEXT, name: "playground" });
var ef = n(978656);
let e_ = "playground-gift-plan-selection-card-banner",
    eA = "playground-gift-plan-selection-card-banner-promotion",
    eT = $.VALENTINES_GIFTING_2026_FULL_HEARTS_SKU_ID;
var eI = n(823901);
function eg() {}
let eN = "playground-gift-reminder-nagbar";
var eE = n(371764);
let ey = {
    name: "Marketing Page Banner",
    id: "marketing-page-banner",
    component: function (e) {
        let t,
            n,
            o = R(p.C.MARKETING_PAGE_BANNER),
            l = o?.properties.oneofKind === "marketingPageBanner" ? o.properties.marketingPageBanner : null,
            a =
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
                (n = { assetUrl: e.assetUrl, header: e.header, body: e.body, button: t }),
                null != l ? { ...l, ...n } : { helpArticleId: "", ...n });
        return (0, s.jsx)("div", {
            className: F.MT,
            children: (0, s.jsx)(eE.x, {
                componentId: "playground-marketing-page-banner",
                promotionBannerMarketingComponentFields: a,
            }),
        });
    },
    ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.MARKETING_PAGE_BANNER }),
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
var eS = n(754804);
let eO = "playground-nagbar";
var eC = n(834730),
    eR = n(709870);
let ev = "playground-payment-modal-banner";
var eh = n(964661),
    eP = n(503698),
    eU = n.n(eP),
    eL = n(403581),
    eM = n(214947),
    ex = n(34188),
    eB = n(577473),
    eG = n(15632);
function eD() {}
let ek = i.forwardRef(function (e, t) {
    let { icon: n, label: o, selected: l = !1, decoration: a } = e;
    return (0, s.jsxs)("button", {
        ref: t,
        type: "button",
        className: eU()(eG.pc, { [eG.EV]: l }),
        onClick: eD,
        children: [
            (0, s.jsx)(n, { size: "md", color: "currentColor" }),
            (0, s.jsx)(eC.E, { variant: "text-md/medium", color: "text-strong", className: eG.We, children: o }),
            null != a && (0, s.jsx)("div", { className: eG.UT, children: a }),
        ],
    });
});
function eF(e) {
    let { tabLabel: t = "Nitro", selected: n = !1, decoration: o, nitroRowRef: l, wrapNitroRow: a } = e,
        r = (0, s.jsx)(ek, { ref: l, icon: eL.t, label: t, selected: n, decoration: o });
    return (0, s.jsxs)("nav", {
        className: eG.C$,
        children: [
            (0, s.jsx)(ek, { icon: eM.$, label: "Friends" }),
            null != a ? a(r) : r,
            (0, s.jsx)(ek, { icon: ex.U, label: "Shop" }),
            (0, s.jsx)(ek, { icon: eB.r, label: "Quests" }),
        ],
    });
}
var eV = n(52416);
function ej() {}
let eK = "playground-premium-tab-popover",
    ew = {
        name: "Premium Tab Popover",
        id: "premium-tab-popover",
        component: function (e) {
            var t;
            let n,
                o,
                {
                    header: l,
                    body: a,
                    buttonCopy: r,
                    buttonAction: d,
                    navigableStorefrontApplicationId: u,
                    assetUrl: b,
                } = e,
                m = R(p.C.PREMIUM_TAB_POPOVER),
                f = m?.properties.oneofKind === "premiumTabPopover" ? m.properties.premiumTabPopover : null;
            ei(
                ((n = {
                    header: (t = {
                        header: l,
                        body: a,
                        buttonCopy: r,
                        buttonAction: d,
                        navigableStorefrontApplicationId: u,
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
                (o = G(eK, {
                    oneofKind: "premiumTabPopover",
                    premiumTabPopover: null != f ? { ...f, ...n } : { helpArticleId: "", ...n },
                })),
                D(eK, p.C.PREMIUM_TAB_POPOVER, "playground-premium-tab-popover-promotion", o)),
            );
            let _ = i.useRef(null);
            return (0, s.jsx)(eF, {
                selected: !0,
                nitroRowRef: _,
                wrapNitroRow: (e) => (0, s.jsx)(eV.A, { targetElementRef: _, dismissPopover: ej, children: e }),
            });
        },
        ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.PREMIUM_TAB_POPOVER }),
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
var ez = n(796878);
let eH = "playground-premium-tab-tooltip";
n(321073);
var eW = n(896170),
    eY = n(783878),
    e$ = n(636537);
async function eZ() {
    return (await e$.Bo.get({ url: "/premium-marketing/promotions", rejectWithError: !0 })).body.map((e) => {
        let { id: t, name: n, type: o, source: l, end_date: a } = e;
        return { id: t, name: n, type: o, source: l, endDate: null != a ? new Date(a) : void 0 };
    });
}
async function eq(e) {
    let t = await e$.Bo.get({ url: `/premium-marketing/promotions/${e}/components`, rejectWithError: !0 }),
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
let eJ = [
    { type: "marketing_moment", label: "Marketing Moments" },
    { type: "gift", label: "Gift Promotions" },
];
function eQ(e) {
    let t = [];
    for (let n of eJ) {
        let o = e.filter((e) => e.type === n.type);
        if (0 !== o.length)
            for (let e of (t.push({ id: `header-${n.type}`, value: `header-${n.type}`, label: n.label, disabled: !0 }),
            o))
                t.push({ id: e.id, value: e.id, label: e.name });
    }
    return t;
}
function eX(e, t) {
    return { title: e, stories: [...t].sort((e, t) => e.name.localeCompare(t.name)) };
}
let e0 = {
        id: "marketing",
        name: "Marketing",
        groups: [
            eX("Premium Surfaces", [
                K,
                H,
                ey,
                {
                    name: "Nagbar",
                    id: "nagbar",
                    component: function (e) {
                        var t;
                        let n,
                            o,
                            { body: l, ctaLabel: a, helpArticleId: r } = e,
                            i = R(p.C.NAGBAR),
                            d = i?.properties.oneofKind === "nagbar" ? i.properties.nagbar : null;
                        return (
                            ei(
                                ((n = {
                                    body: (t = { body: l, ctaLabel: a, helpArticleId: r }).body,
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
                                (o = G(eO, {
                                    oneofKind: "nagbar",
                                    nagbar:
                                        null != d
                                            ? { ...d, ...n }
                                            : { ctaAction: c.dz.OPEN_TIER_2_PAYMENT_MODAL, deeplinkSection: "", ...n },
                                })),
                                D(eO, p.C.NAGBAR, "playground-nagbar-promotion", o)),
                            ),
                            (0, s.jsx)("div", { className: F.MT, children: (0, s.jsx)(eS.A, {}) })
                        );
                    },
                    ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.NAGBAR }),
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
                        return (0, s.jsxs)(_.B, {
                            direction: "vertical",
                            gap: 16,
                            align: "start",
                            children: [
                                (0, s.jsx)(eC.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children:
                                        "The post-purchase \u201COrbs delivered\u201D confirmation modal for the Nitro orbs bonus. Set the orb amount in the controls, then open it.",
                                }),
                                (0, s.jsx)(b.$, {
                                    text: "Open Orbs delivered modal",
                                    onClick: () => (0, eR.$)({ orbsAmount: t }),
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
                        ei(
                            (function (e, t) {
                                let { body: n, assetUrl: o } = e,
                                    l = { assetUrl: o, body: n },
                                    a = G(ev, {
                                        oneofKind: "paymentModalBanner",
                                        paymentModalBanner: null != t ? { ...t, ...l } : { header: "", ...l },
                                    });
                                return D(ev, p.C.PAYMENT_MODAL_BANNER, "playground-payment-modal-banner-promotion", a);
                            })(
                                { body: t, assetUrl: n },
                                o?.properties.oneofKind === "paymentModalBanner"
                                    ? o.properties.paymentModalBanner
                                    : null,
                            ),
                        );
                        let { analyticsLocations: l } = (0, Q.Ay)(J.A.PAYMENT_FLOW_TEST_PAGE);
                        return (0, s.jsx)("div", {
                            className: F.MT,
                            children: (0, s.jsx)(b.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Payment Modal",
                                onClick: () => (0, X.A)({ subscriptionTier: et.pe.TIER_2, analyticsLocations: l }),
                            }),
                        });
                    },
                    ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.PAYMENT_MODAL_BANNER }),
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
                        let t = (0, s.jsx)(eh.A, {
                            componentId: "playground-premium-tab-badge",
                            badgeCopy: e.badgeCopy,
                            acknowledgedBadgeCopy: e.acknowledgedBadgeCopy,
                            isDismissed: e.isDismissed,
                        });
                        return (0, s.jsx)(eF, { tabLabel: e.tabLabel, selected: e.selected, decoration: t });
                    },
                    ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.PREMIUM_TAB }),
                    useDefaultOverrides: () => {
                        let e = R(p.C.PREMIUM_TAB),
                            t = e?.properties.oneofKind === "premiumTab" ? e.properties.premiumTab : null;
                        return null == t
                            ? null
                            : { badgeCopy: t.badgeLabel, acknowledgedBadgeCopy: t.acknowledgedBadgeLabel };
                    },
                    controls: {
                        tabLabel: { label: "Tab Label", type: "text", defaultValue: "Nitro" },
                        selected: { label: "Selected", type: "boolean", defaultValue: !1 },
                        badgeCopy: { label: "Badge Copy", type: "text", defaultValue: "Offer" },
                        acknowledgedBadgeCopy: { label: "Acknowledged Copy", type: "text", defaultValue: "Offer" },
                        isDismissed: { label: "Acknowledged", type: "boolean", defaultValue: !1 },
                    },
                },
                ew,
                {
                    name: "Premium Tab Tooltip",
                    id: "premium-tab-tooltip",
                    component: function (e) {
                        var t;
                        let n,
                            o,
                            { header: l, body: a, assetUrl: r } = e,
                            i = R(p.C.PREMIUM_TAB_TOOLTIP),
                            d = i?.properties.oneofKind === "premiumTabTooltip" ? i.properties.premiumTabTooltip : null;
                        return (
                            ei(
                                ((n = {
                                    header: (t = { header: l, body: a, assetUrl: r }).header,
                                    body: t.body,
                                    asset: k(t.assetUrl, d?.asset),
                                }),
                                (o = G(eH, {
                                    oneofKind: "premiumTabTooltip",
                                    premiumTabTooltip: null != d ? { ...d, ...n } : n,
                                })),
                                D(eH, p.C.PREMIUM_TAB_TOOLTIP, "playground-premium-tab-tooltip-promotion", o)),
                            ),
                            (0, s.jsx)(eF, { selected: !0, wrapNitroRow: (e) => (0, s.jsx)(ez.A, { children: e }) })
                        );
                    },
                    ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.PREMIUM_TAB_TOOLTIP }),
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
            eX("Gifting Surfaces", [
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
                        return (0, s.jsx)("div", {
                            className: F.MT,
                            children: (0, s.jsx)(Y.c, {
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
                                    null != o ? { ...o, ...t } : W.v.create(t)),
                            }),
                        });
                    },
                    ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.BILLING_SETTINGS_NITRO_GIFT_BANNER }),
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
                        let { analyticsLocations: t } = (0, Q.Ay)(J.A.PAYMENT_FLOW_TEST_PAGE),
                            n = R(p.C.GIFT_CUSTOMIZATION_BANNER),
                            o =
                                n?.properties.oneofKind === "giftCustomizationBanner"
                                    ? n.properties.giftCustomizationBanner
                                    : null;
                        return (0, s.jsx)("div", {
                            className: F.MT,
                            children: (0, s.jsx)(b.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let n, l, a, r, i;
                                    (r = {
                                        id: en,
                                        component_type: p.C.GIFT_CUSTOMIZATION_BANNER,
                                        promotion_id: eo,
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
                                            (a = B.m.create({
                                                contentIdentifier: en,
                                                properties: {
                                                    oneofKind: "giftCustomizationBanner",
                                                    giftCustomizationBanner: l,
                                                },
                                            })),
                                            (0, x.C)(B.m.toBinary(a))),
                                    }),
                                        (i = {
                                            id: eo,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: ee.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [r],
                                            metadata: { gift_promotion: { reward_sku_ids: [el] } },
                                        }),
                                        q.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [i],
                                            consumedInboundPromotionId: null,
                                        }),
                                        q.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, X.A)({ isGift: !0, subscriptionTier: et.pe.TIER_2, analyticsLocations: t });
                                },
                            }),
                        });
                    },
                    ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.GIFT_CUSTOMIZATION_BANNER }),
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
                            l = o?.properties.oneofKind === "giftIcon" ? o.properties.giftIcon : null;
                        return (
                            ei(
                                ((t = {
                                    boxAnimationUrl: e.boxAnimationUrl,
                                    trinketAnimationUrl: e.trinketAnimationUrl,
                                    trinketGlowAnimationUrl: e.trinketGlowAnimationUrl,
                                    gradient: {
                                        colors: [e.gradientStartColor, e.gradientEndColor],
                                        angle: e.gradientAngle,
                                    },
                                }),
                                (n = G(eu, { oneofKind: "giftIcon", giftIcon: null != l ? { ...l, ...t } : t })),
                                D(eu, p.C.GIFT_ICON, "playground-gift-icon-promotion", n)),
                            ),
                            (0, s.jsx)("div", { className: F.WG, children: (0, s.jsx)(ea.A, { channel: es }) })
                        );
                    },
                    ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.GIFT_ICON }),
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
                            l = null != n ? { ...n, ...o } : ep.l.create(o);
                        return (0, s.jsx)("div", {
                            className: F.WG,
                            children: (0, s.jsx)(ec.A, {
                                coachmarkConfig: l,
                                onComplete: eb,
                                onCheckItOutClick: eb,
                                markAsDismissed: eb,
                                children: (0, s.jsx)(ea.A, { channel: em }),
                            }),
                        });
                    },
                    ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.GIFT_ICON_COACHMARK }),
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
                        let { analyticsLocations: t } = (0, Q.Ay)(J.A.PAYMENT_FLOW_TEST_PAGE),
                            n = R(p.C.GIFT_PLAN_SELECTION_CARD_BANNER),
                            o =
                                n?.properties.oneofKind === "giftPlanSelectionCardBanner"
                                    ? n.properties.giftPlanSelectionCardBanner
                                    : null;
                        return (0, s.jsx)("div", {
                            className: F.MT,
                            children: (0, s.jsx)(b.$, {
                                variant: "expressive",
                                size: "md",
                                text: "Open Gift Payment Modal",
                                onClick: () => {
                                    let n, l, a, r, i;
                                    (r = {
                                        id: e_,
                                        component_type: p.C.GIFT_PLAN_SELECTION_CARD_BANNER,
                                        promotion_id: eA,
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
                                            (a = B.m.create({
                                                contentIdentifier: e_,
                                                properties: {
                                                    oneofKind: "giftPlanSelectionCardBanner",
                                                    giftPlanSelectionCardBanner: l,
                                                },
                                            })),
                                            (0, x.C)(B.m.toBinary(a))),
                                    }),
                                        (i = {
                                            id: eA,
                                            start_date: new Date(0).toISOString(),
                                            end_date: new Date("2099-01-01").toISOString(),
                                            promotion_type: ee.pt.GIFT_PROMOTION,
                                            flags: 0,
                                            partner_id: null,
                                            marketing_components: [r],
                                            metadata: { gift_promotion: { reward_sku_ids: [eT] } },
                                        }),
                                        q.h.dispatch({
                                            type: "ACTIVE_PROMOTIONS_FETCH_SUCCESS",
                                            promotions: [i],
                                            consumedInboundPromotionId: null,
                                        }),
                                        q.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: [] }),
                                        (0, X.A)({ isGift: !0, analyticsLocations: t });
                                },
                            }),
                        });
                    },
                    ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.GIFT_PLAN_SELECTION_CARD_BANNER }),
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
                            l = R(p.C.GIFT_REMINDER_NAGBAR),
                            a =
                                l?.properties.oneofKind === "giftReminderNagbar"
                                    ? l.properties.giftReminderNagbar
                                    : null;
                        return (
                            ei(
                                ((t = { body: { body: o }.body }),
                                (n = G(eN, {
                                    oneofKind: "giftReminderNagbar",
                                    giftReminderNagbar: null != a ? { ...a, ...t } : t,
                                })),
                                D(eN, p.C.GIFT_REMINDER_NAGBAR, "playground-gift-reminder-nagbar-promotion", n)),
                            ),
                            (0, s.jsx)("div", {
                                className: F.MT,
                                children: (0, s.jsx)(eI.y, { markAsDismissed: eg, className: F.gO }),
                            })
                        );
                    },
                    ControlsExtension: () => (0, s.jsx)(M, { componentType: p.C.GIFT_REMINDER_NAGBAR }),
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
                        (0, u.Ak)(), (0, u.b8)();
                    },
                    [],
                ),
                t
            );
        },
        HeaderControl: function () {
            let e = C.useField("selected"),
                [t, n] = i.useState([]),
                o = i.useRef(null);
            i.useEffect(() => {
                let e = !0;
                return (
                    eZ()
                        .then((t) => {
                            e && n(t);
                        })
                        .catch(() => {}),
                    () => {
                        e = !1;
                    }
                );
            }, []);
            let l = i.useMemo(() => eQ(t), [t]),
                a = i.useCallback((e, n) => eQ((0, eW.Ht)(t, n, { keys: ["name"] })), [t]);
            return 0 === t.length
                ? null
                : (0, s.jsx)("div", {
                      className: F.$K,
                      children: (0, s.jsx)(eY.Z, {
                          clearable: !0,
                          selectionMode: "single",
                          placeholder: "Load Promo Data",
                          value: e?.id,
                          options: l,
                          customMatchSorter: a,
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
                                  eq(n.id)
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
                                                                  for (let [o, l] of Object.entries(t)) {
                                                                      if (o.endsWith(S) && O(l)) {
                                                                          for (let e of Object.keys(l.localizations))
                                                                              n.add(e);
                                                                          continue;
                                                                      }
                                                                      e(l, n);
                                                                  }
                                                          })(t.properties, n);
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
    e2 = { playgroundBaseUrl: "marketing", collections: [e0] };
