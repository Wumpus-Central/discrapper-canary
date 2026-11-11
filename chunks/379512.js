(n.d(t, { r0: () => L, ax: () => g, xD: () => S, resolveCampaignComponents: () => N }), n(321073));
var i,
    r,
    a = n(896170),
    s = n(160517),
    l =
        (((i = {})[(i.ANNOUNCEMENT_MODAL = 0)] = "ANNOUNCEMENT_MODAL"),
        (i[(i.PREMIUM_TAB = 1)] = "PREMIUM_TAB"),
        (i[(i.MARKETING_PAGE_BANNER = 2)] = "MARKETING_PAGE_BANNER"),
        (i[(i.PAYMENT_MODAL_BANNER = 3)] = "PAYMENT_MODAL_BANNER"),
        (i[(i.MOBILE_BOTTOM_SHEET = 4)] = "MOBILE_BOTTOM_SHEET"),
        (i[(i.GIFT_ICON = 5)] = "GIFT_ICON"),
        (i[(i.GIFT_ICON_COACHMARK = 6)] = "GIFT_ICON_COACHMARK"),
        (i[(i.GIFT_PLAN_SELECTION_CARD_BANNER = 7)] = "GIFT_PLAN_SELECTION_CARD_BANNER"),
        (i[(i.GIFT_CUSTOMIZATION_BANNER = 8)] = "GIFT_CUSTOMIZATION_BANNER"),
        (i[(i.BILLING_SETTINGS_NITRO_GIFT_BANNER = 9)] = "BILLING_SETTINGS_NITRO_GIFT_BANNER"),
        (i[(i.GIFT_REMINDER_NAGBAR = 10)] = "GIFT_REMINDER_NAGBAR"),
        (i[(i.GIFT_REMINDER_COACHMARK = 11)] = "GIFT_REMINDER_COACHMARK"),
        (i[(i.PREMIUM_TAB_TOOLTIP = 12)] = "PREMIUM_TAB_TOOLTIP"),
        (i[(i.PREMIUM_TAB_POPOVER = 13)] = "PREMIUM_TAB_POPOVER"),
        (i[(i.NAGBAR = 14)] = "NAGBAR"),
        (i[(i.PLAN_SELECT_CARD_BANNER = 15)] = "PLAN_SELECT_CARD_BANNER"),
        (i[(i.BILLING_SETTINGS_BANNER = 16)] = "BILLING_SETTINGS_BANNER"),
        (i[(i.SHOP_NAGBAR = 17)] = "SHOP_NAGBAR"),
        (i[(i.GUILD_HEADER_COACHMARK = 18)] = "GUILD_HEADER_COACHMARK"),
        (i[(i.GUILD_BOOST_CHECKOUT_BANNER = 19)] = "GUILD_BOOST_CHECKOUT_BANNER"),
        (i[(i.GUILD_BOOST_MARKETING_PAGE_BANNER = 20)] = "GUILD_BOOST_MARKETING_PAGE_BANNER"),
        (i[(i.GUILD_BOOST_TAB_BANNER = 21)] = "GUILD_BOOST_TAB_BANNER"),
        (i[(i.SHOP_TAB_TOOLTIP = 22)] = "SHOP_TAB_TOOLTIP"),
        (i[(i.PREMIUM_HOME_REWARDS_PERK_CARD = 23)] = "PREMIUM_HOME_REWARDS_PERK_CARD"),
        (i[(i.MARKETING_PAGE_REWARDS_BENTO_BOX = 24)] = "MARKETING_PAGE_REWARDS_BENTO_BOX"),
        (i[(i.OUTBOUND_PROMOTION_POPOVER = 25)] = "OUTBOUND_PROMOTION_POPOVER"),
        (i[(i.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD = 26)] = "OUTBOUND_PROMOTION_CLAIM_MODAL_CARD"),
        (i[(i.SHOP_COACHMARK = 27)] = "SHOP_COACHMARK"),
        i),
    o = n(856793),
    d = n(792673),
    c = n(47807),
    u = n(822571),
    _ = n(365977),
    E = n(474090),
    A = n(767589),
    f = n(682901),
    h = n(792996),
    I = (((r = I || {}).DRAFT = "Draft"), (r.UPCOMING = "Upcoming"), (r.ACTIVE = "Active"), (r.ENDED = "Ended"), r);
let p = { Draft: "start_date", Upcoming: "start_date", Active: "end_date", Ended: "end_date" };
function m(e) {
    if (null == e) return null;
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function T(e, t) {
    let n = m(e.start_date),
        i = m(e.end_date);
    return null != i && t > i
        ? "Ended"
        : 2 !== e.lifecycle_state
          ? "Draft"
          : null == n || null == i || t < n
            ? "Upcoming"
            : "Active";
}
function g(e, t, n) {
    return (0, a.Ht)(e, t, { keys: [n, "id"], sorter: (e) => e.sort((e, t) => e.index - t.index) });
}
function S(e) {
    let t = Date.now();
    return Object.values(I)
        .map((n) => ({
            label: n,
            campaigns: e
                .filter((e) => T(e, t) === n)
                .sort((e, t) => {
                    let i = p[n],
                        r = "Ended" === n ? -1 / 0 : 1 / 0;
                    return (m(t[i]) ?? r) - (m(e[i]) ?? r);
                }),
        }))
        .filter((e) => e.campaigns.length > 0);
}
function N(e, t, n, i, r) {
    let a = s.j.DESKTOP,
        l = e.filter((e) => e.platform === a && !O(e)),
        h = new Map();
    for (let e of l) {
        let t = e.component_type,
            n = h.get(t) ?? [];
        (n.push(e), h.set(t, n));
    }
    return Array.from(h.values()).flatMap((e) => {
        let a = e.filter((e) =>
            (function (e, t, n) {
                if (null == e.premium_type) return !1;
                let i = 0 === e.premium_type ? !(0, E.ki)(t) : (0, E.YE)(t, e.premium_type),
                    r = void 0 === n ? i : e.premium_type === (n ?? 0),
                    a = (function (e, t) {
                        if (void 0 === t) return e.premiumState;
                        if (null === t) return { premiumSource: o.f.NONE, premiumSubscriptionType: d.j.NONE };
                        let n = {
                            [f.PremiumTypes.TIER_0]: d.j.TIER_0,
                            [f.PremiumTypes.TIER_1]: d.j.TIER_1,
                            [f.PremiumTypes.TIER_2]: d.j.TIER_2,
                        };
                        return { premiumSource: o.f.SUBSCRIPTION, premiumSubscriptionType: n[t] };
                    })(t, n);
                return (
                    r &&
                    (a?.premiumSource == null || e.premium_source === a.premiumSource) &&
                    (a?.premiumSubscriptionType == null || e.premium_subscription_type === a.premiumSubscriptionType)
                );
            })(e, t, r),
        );
        return (
            a.length > 0
                ? a
                : e.filter(
                      (e) => null == e.premium_type && null == e.premium_source && null == e.premium_subscription_type,
                  )
        ).map((e) => {
            var t, r, a;
            let s, l;
            return (
                (t = e),
                (r = n),
                (a = i),
                (s = (0, _.v)((0, A.ii)(c.m, t.properties), r)),
                (l = m(a)),
                new u.A({
                    id: t.id,
                    componentType: t.component_type,
                    properties: s,
                    promotionId: t.promotion_id,
                    startDate: null,
                    endDate: null,
                    effectiveStartDate: null,
                    effectiveEndDate: null,
                    promotionEndDate: null == l ? null : new Date(l),
                    promotionPriority: 0,
                })
            );
        });
    });
}
function C(e) {
    return (0, A.ii)(c.m, e.properties);
}
function O(e) {
    return C(e).isDefaultBase;
}
function R(e) {
    if (null === e) return "Not set";
    let t = m(e);
    return null == t
        ? "Unavailable"
        : new Date(t).toLocaleString(h.intl.currentLocale, {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              timeZoneName: "short",
          });
}
function L(e, t) {
    let n = Date.now(),
        i = new Map(),
        r = t.filter((e) => !O(e)),
        a = r.every((e) => null != e.surface_id);
    for (let e of r) i.set(e.surface_id ?? e.id, e);
    let s = new Map(),
        o = 0;
    for (let e of i.values()) {
        let t = (function (e, t) {
            let n = ("number" == typeof e ? l[e] : e) ?? t?.properties.oneofKind;
            if (null != n) {
                let e;
                return (
                    (e = n
                        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
                        .replaceAll("_", " ")
                        .toLowerCase())
                        .charAt(0)
                        .toUpperCase() + e.slice(1).replace(/\bnitro\b/g, "Nitro")
                );
            }
            return null != e ? `Surface type ${e}` : "Unknown surface";
        })(e.component_type, C(e));
        (s.set(t, (s.get(t) ?? 0) + 1),
            (function (e) {
                let { start: t, end: n } = {
                    start: void 0 === e.surface_start_date ? e.start_date : e.surface_start_date,
                    end: void 0 === e.surface_end_date ? e.end_date : e.surface_end_date,
                };
                return null != t || null != n;
            })(e) && o++);
    }
    let d = [
        { label: "Starts", value: R(e.start_date) },
        { label: "Ends", value: R(e.end_date) },
        {
            label: "State",
            value: (function (e, t) {
                if (null == e.lifecycle_state) return "Unavailable";
                let n = T(e, t),
                    i = { 0: "Draft", 2: "Published" }[e.lifecycle_state];
                return null == i || i === n ? n : `${i} (${n})`;
            })(e, n),
        },
    ];
    return (
        null != e.localization_status &&
            d.push({
                label: "Localization",
                value: { 0: "Draft", 1: "Out for localization", 2: "Localized" }[e.localization_status] ?? "Unknown",
            }),
        d.push(
            { label: "Surfaces", value: a ? String(i.size) : "Unavailable" },
            ...Array.from(s)
                .sort((e, t) => {
                    let [n] = e,
                        [i] = t;
                    return n.localeCompare(i);
                })
                .map((e) => {
                    let [t, n] = e;
                    return { label: a ? t : `${t} variants`, value: String(n) };
                }),
            { label: a ? "Timed surfaces" : "Timed variants", value: String(o) },
        ),
        d
    );
}
