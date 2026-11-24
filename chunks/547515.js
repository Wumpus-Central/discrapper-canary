(n.d(t, {
    r0: () => k,
    xj: () => j,
    ET: () => B,
    dn: () => W,
    ax: () => R,
    jJ: () => V,
    xD: () => L,
    resolveCampaignComponents: () => y,
    FJ: () => D,
    rh: () => K,
}),
    n(321073));
var i,
    r = n(896170),
    a = n(160517),
    s = n(517352),
    l = n(856793),
    o = n(792673),
    d = n(554146),
    c = n(82766),
    u = n(822571),
    _ = n(92551),
    E = n(256787),
    A = n(852218),
    f = n(365977),
    h = n(795992),
    I = n(474090),
    p = n(767589),
    m = n(661191),
    g = n(682901),
    T = n(792996),
    S = (((i = S || {}).DRAFT = "Draft"), (i.UPCOMING = "Upcoming"), (i.ACTIVE = "Active"), (i.ENDED = "Ended"), i);
let N = { Draft: "start_date", Upcoming: "start_date", Active: "end_date", Ended: "end_date" };
function C(e) {
    if (null == e) return null;
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function O(e, t) {
    let n = C(e.start_date),
        i = C(e.end_date);
    return null != i && t > i
        ? "Ended"
        : 2 !== e.lifecycle_state
          ? "Draft"
          : null == n || null == i || t < n
            ? "Upcoming"
            : "Active";
}
function R(e, t, n) {
    return (0, r.Ht)(e, t, { keys: [n, "id"], sorter: (e) => e.sort((e, t) => e.index - t.index) });
}
function L(e) {
    let t = Date.now();
    return Object.values(S)
        .map((n) => ({
            label: n,
            campaigns: e
                .filter((e) => O(e, t) === n)
                .sort((e, t) => {
                    let i = N[n],
                        r = "Ended" === n ? -1 / 0 : 1 / 0;
                    return (C(t[i]) ?? r) - (C(e[i]) ?? r);
                }),
        }))
        .filter((e) => e.campaigns.length > 0);
}
function y(e, t, n, i, r) {
    let s = a.j.DESKTOP,
        d = e.filter((e) => e.platform === s && !v(e)),
        c = new Map();
    for (let e of d) {
        let t = e.component_type,
            n = c.get(t) ?? [];
        (n.push(e), c.set(t, n));
    }
    return Array.from(c.values()).flatMap((e) => {
        let a = e.filter((e) =>
            (function (e, t, n) {
                if (null == e.premium_type) return !1;
                let i = 0 === e.premium_type ? !(0, I.ki)(t) : (0, I.YE)(t, e.premium_type),
                    r = void 0 === n ? i : e.premium_type === (n ?? 0),
                    a = (function (e, t) {
                        if (void 0 === t) return e.premiumState;
                        if (null === t) return { premiumSource: l.f.NONE, premiumSubscriptionType: o.j.NONE };
                        let n = {
                            [g.PremiumTypes.TIER_0]: o.j.TIER_0,
                            [g.PremiumTypes.TIER_1]: o.j.TIER_1,
                            [g.PremiumTypes.TIER_2]: o.j.TIER_2,
                        };
                        return { premiumSource: l.f.SUBSCRIPTION, premiumSubscriptionType: n[t] };
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
        ).map((e) => P(e, n, i));
    });
}
function D(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.j.DESKTOP;
    return e.filter((e) => e.platform === i && !v(e)).map((e) => P(e, t, n));
}
function b(e) {
    return (0, p.ii)(c.m, e.properties);
}
function v(e) {
    return b(e).isDefaultBase;
}
function P(e, t, n) {
    let i = (0, f.v)((0, p.ii)(c.m, e.properties), t),
        r = C(n);
    return new u.A({
        id: e.id,
        componentType: e.component_type,
        properties: i,
        promotionId: e.promotion_id,
        startDate: null,
        endDate: null,
        effectiveStartDate: null,
        effectiveEndDate: null,
        promotionEndDate: null == r ? null : new Date(r),
        promotionPriority: 0,
    });
}
function M(e) {
    if (null === e) return "Not set";
    let t = C(e);
    return null == t
        ? "Unavailable"
        : new Date(t).toLocaleString(T.intl.currentLocale, {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              timeZoneName: "short",
          });
}
function U(e) {
    return {
        start: void 0 === e.surface_start_date ? e.start_date : e.surface_start_date,
        end: void 0 === e.surface_end_date ? e.end_date : e.surface_end_date,
    };
}
function w(e) {
    let { start: t, end: n } = U(e);
    return null != t || null != n;
}
function G(e) {
    let t = e
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .replaceAll("_", " ")
        .toLowerCase();
    return t.charAt(0).toUpperCase() + t.slice(1).replace(/\bnitro\b/g, "Nitro");
}
function x(e, t) {
    let n = ("number" == typeof e ? s.oW[e] : e) ?? t?.properties.oneofKind;
    return null != n ? G(n) : null != e ? `Surface type ${e}` : "Unknown surface";
}
function k(e, t) {
    let n = Date.now(),
        i = new Map(),
        r = t.filter((e) => !v(e)),
        a = r.every((e) => null != e.surface_id);
    for (let e of r) i.set(e.surface_id ?? e.id, e);
    let s = new Map(),
        l = 0;
    for (let e of i.values()) {
        let t = x(e.component_type, b(e));
        (s.set(t, (s.get(t) ?? 0) + 1), w(e) && l++);
    }
    let o = [
        { label: "Starts", value: M(e.start_date) },
        { label: "Ends", value: M(e.end_date) },
        {
            label: "State",
            value: (function (e, t) {
                if (null == e.lifecycle_state) return "Unavailable";
                let n = O(e, t),
                    i = { 0: "Draft", 2: "Published" }[e.lifecycle_state];
                return null == i || i === n ? n : `${i} (${n})`;
            })(e, n),
        },
    ];
    return (
        null != e.localization_status &&
            o.push({
                label: "Localization",
                value: { 0: "Draft", 1: "Out for localization", 2: "Localized" }[e.localization_status] ?? "Unknown",
            }),
        o.push(
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
            { label: a ? "Timed surfaces" : "Timed variants", value: String(l) },
        ),
        o
    );
}
function F(e) {
    let t = e.properties.properties,
        n = "";
    ("announcementModalVariant1" === t.oneofKind && (n = t.announcementModalVariant1.header),
        "mobileBottomSheet" === t.oneofKind && (n = t.mobileBottomSheet.header));
    let i = x(e.componentType, e.properties);
    if ("" === n.trim()) return i;
    let r = (0, _.n)(n, e.getFormatVariableValues(T.intl.currentLocale));
    return r.ok ? r.content : i;
}
function B(e, t, n) {
    let i = new Map(t.map((e) => [e.id, e])),
        r = new Set();
    return e.flatMap((e) => {
        if (
            e.componentType !== s.oW.ANNOUNCEMENT_MODAL_VARIANT_1 &&
            e.componentType !== s.oW.MOBILE_BOTTOM_SHEET &&
            e.componentType !== s.oW.ORBS_CONFIRMATION_MODAL
        )
            return [];
        let t = i.get(e.id);
        if (null != t && v(t)) return [];
        let a = `${e.componentType}:${e.id}`;
        return r.has(a)
            ? []
            : (r.add(a),
              [
                  {
                      component: e,
                      ...(function (e, t, n) {
                          var i;
                          let r =
                                  null == (i = t)
                                      ? "Unknown"
                                      : null == i.premium_type
                                        ? "Everyone"
                                        : 0 === i.premium_type
                                          ? "Non-Nitro"
                                          : i.premium_type === g.PremiumTypes.TIER_0
                                            ? "Nitro Basic"
                                            : i.premium_type === g.PremiumTypes.TIER_1
                                              ? "Nitro Classic"
                                              : i.premium_type === g.PremiumTypes.TIER_2
                                                ? "Nitro"
                                                : `Premium tier ${i.premium_type}`,
                              a = "Unavailable";
                          if (null != t && ((a = "Untimed"), w(t))) {
                              let { start: e, end: i } = U(t);
                              a = `${M(e ?? n?.start_date)} to ${M(i ?? n?.end_date)}`;
                          }
                          let s = null;
                          if (t?.experiment_id != null && null != t.experiment_variation_id) {
                              let e = t.experiment_variation_id;
                              s = 0 === e ? "Control" : `Treatment ${e}`;
                          }
                          return { title: F(e), target: r, timing: a, variant: s };
                      })(e, i.get(e.id), n),
                  },
              ]);
    });
}
function V(e) {
    let t = new Map();
    for (let n of e) {
        let e = t.get(n.title) ?? [];
        (e.push(n), t.set(n.title, e));
    }
    return Array.from(t, (e) => {
        let [t, n] = e;
        return { title: t, variants: n };
    });
}
let H = {
    [s.oW.ANNOUNCEMENT_MODAL_VARIANT_1]: [d.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL],
    [s.oW.PREMIUM_TAB]: [d.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE],
    [s.oW.PREMIUM_TAB_POPOVER]: [d.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL],
    [s.oW.NAGBAR]: [d.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL],
    [s.oW.GIFT_REMINDER_COACHMARK]: [d.M.GIFTING_PROMOTION_REMINDER],
    [s.oW.GIFT_REMINDER_NAGBAR]: [d.M.GIFTING_PROMOTION_REMINDER],
    [s.oW.SHOP_NAGBAR]: [d.M.PREMIUM_SHOP_NAGBAR_NOTICE],
    [s.oW.SHOP_TAB_TOOLTIP]: [d.M.SHOP_TAB_TOOLTIP],
    [s.oW.SHOP_COACHMARK]: [d.M.SHOP_TAB_TOOLTIP],
    [s.oW.GUILD_HEADER_COACHMARK]: [d.M.GUILD_HEADER_COACHMARK],
    [s.oW.GUILD_BOOST_TAB_BANNER]: [d.M.GUILD_BOOST_TAB_BANNER, d.M.GUILD_BOOST_TAB_HIGHLIGHT],
};
function j(e) {
    let t = new Map();
    for (let n of e) {
        let e = b(n);
        if (!e.isDefaultBase)
            for (let i of (function (e, t) {
                if (e.component_type === s.oW.MOBILE_BOTTOM_SHEET) {
                    var n;
                    let e = t.properties;
                    return [
                        null != (n = "mobileBottomSheet" === e.oneofKind ? e.mobileBottomSheet : null) &&
                        (0, E.IL)(n.dismissibleContent)
                            ? n.dismissibleContent
                            : d.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
                    ];
                }
                return e.component_type === s.oW.GIFT_ICON
                    ? e.platform === a.j.MOBILE
                        ? [d.M.GIFTING_PROMOTION_ICON]
                        : []
                    : e.component_type === s.oW.GIFT_ICON_COACHMARK
                      ? e.platform === a.j.MOBILE
                          ? [d.M.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET]
                          : [d.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK]
                      : (H[e.component_type] ?? []);
            })(n, e))
                !(function (e, n) {
                    let i = t.get(e) ?? new Set();
                    (i.add(n), t.set(e, i));
                })(
                    i,
                    (function (e, t, n) {
                        if (n === d.M.GUILD_BOOST_TAB_HIGHLIGHT) return "Guild boost tab highlight";
                        let i = x(e.component_type, t);
                        return e.component_type !== s.oW.MOBILE_BOTTOM_SHEET
                            ? i
                            : n === d.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL
                              ? `${i}: announcement`
                              : n === d.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                                ? `${i}: reminder`
                                : `${i}: ${G(d.M[n])}`;
                    })(n, e, i),
                );
    }
    return Array.from(t, (e) => {
        let [t, n] = e;
        return { content: t, label: Array.from(n).join(", ") };
    });
}
function W(e, t) {
    var n = null != t && 0 >= m.default.compare(e, t.lastDismissedObjectId),
        i = t?.lastDismissedAtMs;
    if (!n) return "Not dismissed";
    let r = Number(i);
    return !Number.isFinite(r) || r <= 0 ? "Dismissed" : `Dismissed: ${M(new Date(r).toISOString())}`;
}
function Y(e, t) {
    return e.priority !== t.priority
        ? e.priority - t.priority
        : e.startDate.getTime() !== t.startDate.getTime()
          ? t.startDate.getTime() - e.startDate.getTime()
          : m.default.compare(e.id, t.id);
}
function K(e, t, n) {
    let i = e.filter((e) => e.marketingComponents.length > 0),
        r = (e) => null != t && e.isIncludedInRollout(t, n),
        a = (function (e, t, n) {
            let i = new Map();
            for (let t of e) {
                let e = t.properties.properties.oneofKind;
                if (null == e) continue;
                let n = i.get(e) ?? [];
                (n.push(t), i.set(e, n));
            }
            return new Map(
                Array.from(i, (e) => {
                    let [i, r] = e;
                    return [i, (0, h.A)(r, t, n)];
                }),
            );
        })(
            i.flatMap((e) => e.marketingComponents),
            n,
            r,
        );
    return [...i].sort(Y).map((e) => ({
        id: e.id,
        title: "" === e.promotionKey ? `Campaign ${e.id}` : e.promotionKey,
        details: [
            { label: "Campaign ID", value: e.id },
            { label: "Type", value: G(A.pt[e.promotionType] ?? String(e.promotionType)) },
            { label: "Starts", value: M(e.startDate.toISOString()) },
            { label: "Ends", value: M(e.endDate.toISOString()) },
            { label: "Priority", value: String(e.priority) },
        ],
        surfaces: e.marketingComponents.map((e) => {
            let t = e.properties.properties,
                i = null == t.oneofKind ? null : (a.get(t.oneofKind) ?? null);
            return {
                component: e,
                surface: x(e.componentType, e.properties),
                title: F(e),
                timing: (function (e) {
                    if (!e.isTimed) return "Campaign window";
                    let t = e.effectiveStartDate?.toISOString() ?? null,
                        n = e.effectiveEndDate?.toISOString() ?? null;
                    return `${M(t)} to ${M(n)}`;
                })(e),
                status:
                    null == e.properties.properties.oneofKind
                        ? "Not supported by this client"
                        : null != e.effectiveStartDate && n < e.effectiveStartDate
                          ? "Scheduled"
                          : null != e.effectiveEndDate && n > e.effectiveEndDate
                            ? "Ended"
                            : e.isTimed && !r(e)
                              ? "Rolling out, not reached yet"
                              : i === e
                                ? "Top pick for surface"
                                : i?.promotionId === e.promotionId
                                  ? "Outranked by another surface in this campaign"
                                  : "Outranked by another campaign",
                opensAnnouncementModal: "announcementModalVariant1" === t.oneofKind,
            };
        }),
    }));
}
