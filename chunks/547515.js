(n.d(t, {
    r0: () => G,
    xj: () => B,
    ET: () => x,
    dn: () => V,
    ax: () => C,
    jJ: () => k,
    xD: () => O,
    resolveCampaignComponents: () => R,
    FJ: () => L,
}),
    n(321073));
var i,
    r = n(896170),
    a = n(160517),
    s = n(877624),
    l = n(856793),
    o = n(792673),
    d = n(554146),
    c = n(47807),
    u = n(822571),
    _ = n(92551),
    E = n(256787),
    A = n(365977),
    f = n(474090),
    h = n(767589),
    I = n(811091),
    p = n(682901),
    m = n(792996),
    T = (((i = T || {}).DRAFT = "Draft"), (i.UPCOMING = "Upcoming"), (i.ACTIVE = "Active"), (i.ENDED = "Ended"), i);
let g = { Draft: "start_date", Upcoming: "start_date", Active: "end_date", Ended: "end_date" };
function S(e) {
    if (null == e) return null;
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function N(e, t) {
    let n = S(e.start_date),
        i = S(e.end_date);
    return null != i && t > i
        ? "Ended"
        : 2 !== e.lifecycle_state
          ? "Draft"
          : null == n || null == i || t < n
            ? "Upcoming"
            : "Active";
}
function C(e, t, n) {
    return (0, r.Ht)(e, t, { keys: [n, "id"], sorter: (e) => e.sort((e, t) => e.index - t.index) });
}
function O(e) {
    let t = Date.now();
    return Object.values(T)
        .map((n) => ({
            label: n,
            campaigns: e
                .filter((e) => N(e, t) === n)
                .sort((e, t) => {
                    let i = g[n],
                        r = "Ended" === n ? -1 / 0 : 1 / 0;
                    return (S(t[i]) ?? r) - (S(e[i]) ?? r);
                }),
        }))
        .filter((e) => e.campaigns.length > 0);
}
function R(e, t, n, i, r) {
    let s = a.j.DESKTOP,
        d = e.filter((e) => e.platform === s && !D(e)),
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
                let i = 0 === e.premium_type ? !(0, f.ki)(t) : (0, f.YE)(t, e.premium_type),
                    r = void 0 === n ? i : e.premium_type === (n ?? 0),
                    a = (function (e, t) {
                        if (void 0 === t) return e.premiumState;
                        if (null === t) return { premiumSource: l.f.NONE, premiumSubscriptionType: o.j.NONE };
                        let n = {
                            [p.PremiumTypes.TIER_0]: o.j.TIER_0,
                            [p.PremiumTypes.TIER_1]: o.j.TIER_1,
                            [p.PremiumTypes.TIER_2]: o.j.TIER_2,
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
        ).map((e) => b(e, n, i));
    });
}
function L(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.j.DESKTOP;
    return e.filter((e) => e.platform === i && !D(e)).map((e) => b(e, t, n));
}
function y(e) {
    return (0, h.ii)(c.m, e.properties);
}
function D(e) {
    return y(e).isDefaultBase;
}
function b(e, t, n) {
    let i = (0, A.v)((0, h.ii)(c.m, e.properties), t),
        r = S(n);
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
function v(e) {
    if (null === e) return "Not set";
    let t = S(e);
    return null == t
        ? "Unavailable"
        : new Date(t).toLocaleString(m.intl.currentLocale, {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
              timeZoneName: "short",
          });
}
function P(e) {
    return {
        start: void 0 === e.surface_start_date ? e.start_date : e.surface_start_date,
        end: void 0 === e.surface_end_date ? e.end_date : e.surface_end_date,
    };
}
function M(e) {
    let { start: t, end: n } = P(e);
    return null != t || null != n;
}
function U(e) {
    let t = e
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .replaceAll("_", " ")
        .toLowerCase();
    return t.charAt(0).toUpperCase() + t.slice(1).replace(/\bnitro\b/g, "Nitro");
}
function w(e, t) {
    let n = ("number" == typeof e ? s.C[e] : e) ?? t?.properties.oneofKind;
    return null != n ? U(n) : null != e ? `Surface type ${e}` : "Unknown surface";
}
function G(e, t) {
    let n = Date.now(),
        i = new Map(),
        r = t.filter((e) => !D(e)),
        a = r.every((e) => null != e.surface_id);
    for (let e of r) i.set(e.surface_id ?? e.id, e);
    let s = new Map(),
        l = 0;
    for (let e of i.values()) {
        let t = w(e.component_type, y(e));
        (s.set(t, (s.get(t) ?? 0) + 1), M(e) && l++);
    }
    let o = [
        { label: "Starts", value: v(e.start_date) },
        { label: "Ends", value: v(e.end_date) },
        {
            label: "State",
            value: (function (e, t) {
                if (null == e.lifecycle_state) return "Unavailable";
                let n = N(e, t),
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
function x(e, t, n) {
    let i = new Map(t.map((e) => [e.id, e])),
        r = new Set();
    return e.flatMap((e) => {
        if (e.componentType !== s.C.ANNOUNCEMENT_MODAL && e.componentType !== s.C.MOBILE_BOTTOM_SHEET) return [];
        let t = i.get(e.id);
        if (null != t && D(t)) return [];
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
                                          : i.premium_type === p.PremiumTypes.TIER_0
                                            ? "Nitro Basic"
                                            : i.premium_type === p.PremiumTypes.TIER_1
                                              ? "Nitro Classic"
                                              : i.premium_type === p.PremiumTypes.TIER_2
                                                ? "Nitro"
                                                : `Premium tier ${i.premium_type}`,
                              a = "Unavailable";
                          if (null != t && ((a = "Untimed"), M(t))) {
                              let { start: e, end: i } = P(t);
                              a = `${v(e ?? n?.start_date)} to ${v(i ?? n?.end_date)}`;
                          }
                          let s = null;
                          if (t?.experiment_id != null && null != t.experiment_variation_id) {
                              let e = t.experiment_variation_id;
                              s = 0 === e ? "Control" : `Treatment ${e}`;
                          }
                          return {
                              title: (function (e) {
                                  let t = e.properties.properties,
                                      n = "";
                                  ("announcementModalVariant1" === t.oneofKind &&
                                      (n = t.announcementModalVariant1.header),
                                      "mobileBottomSheet" === t.oneofKind && (n = t.mobileBottomSheet.header));
                                  let i = w(e.componentType, e.properties);
                                  if ("" === n.trim()) return i;
                                  let r = (0, _.n)(n, e.getFormatVariableValues(m.intl.currentLocale));
                                  return r.ok ? r.content : i;
                              })(e),
                              target: r,
                              timing: a,
                              variant: s,
                          };
                      })(e, i.get(e.id), n),
                  },
              ]);
    });
}
function k(e) {
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
let F = {
    [s.C.ANNOUNCEMENT_MODAL]: [d.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL],
    [s.C.PREMIUM_TAB]: [d.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE],
    [s.C.PREMIUM_TAB_POPOVER]: [d.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL],
    [s.C.NAGBAR]: [d.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL],
    [s.C.GIFT_REMINDER_COACHMARK]: [d.M.GIFTING_PROMOTION_REMINDER],
    [s.C.GIFT_REMINDER_NAGBAR]: [d.M.GIFTING_PROMOTION_REMINDER],
    [s.C.SHOP_NAGBAR]: [d.M.PREMIUM_SHOP_NAGBAR_NOTICE],
    [s.C.SHOP_TAB_TOOLTIP]: [d.M.SHOP_TAB_TOOLTIP],
    [s.C.SHOP_COACHMARK]: [d.M.SHOP_TAB_TOOLTIP],
    [s.C.GUILD_HEADER_COACHMARK]: [d.M.GUILD_HEADER_COACHMARK],
    [s.C.GUILD_BOOST_TAB_BANNER]: [d.M.GUILD_BOOST_TAB_BANNER, d.M.GUILD_BOOST_TAB_HIGHLIGHT],
};
function B(e) {
    let t = new Map();
    for (let n of e) {
        let e = y(n);
        if (!e.isDefaultBase)
            for (let i of (function (e, t) {
                if (e.component_type === s.C.MOBILE_BOTTOM_SHEET) {
                    var n;
                    let e = t.properties;
                    return [
                        null != (n = "mobileBottomSheet" === e.oneofKind ? e.mobileBottomSheet : null) &&
                        (0, E.IL)(n.dismissibleContent)
                            ? n.dismissibleContent
                            : d.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
                    ];
                }
                return e.component_type === s.C.GIFT_ICON
                    ? e.platform === a.j.MOBILE
                        ? [d.M.GIFTING_PROMOTION_ICON]
                        : []
                    : e.component_type === s.C.GIFT_ICON_COACHMARK
                      ? e.platform === a.j.MOBILE
                          ? [d.M.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET]
                          : [d.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK]
                      : (F[e.component_type] ?? []);
            })(n, e))
                !(function (e, n) {
                    let i = t.get(e) ?? new Set();
                    (i.add(n), t.set(e, i));
                })(
                    i,
                    (function (e, t, n) {
                        if (n === d.M.GUILD_BOOST_TAB_HIGHLIGHT) return "Guild boost tab highlight";
                        let i = w(e.component_type, t);
                        return e.component_type !== s.C.MOBILE_BOTTOM_SHEET
                            ? i
                            : n === d.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL
                              ? `${i}: announcement`
                              : n === d.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL
                                ? `${i}: reminder`
                                : `${i}: ${U(d.M[n])}`;
                    })(n, e, i),
                );
    }
    return Array.from(t, (e) => {
        let [t, n] = e;
        return { content: t, label: Array.from(n).join(", ") };
    });
}
function V(e, t) {
    var n = null != t && 0 >= I.default.compare(e, t.lastDismissedObjectId),
        i = t?.lastDismissedAtMs;
    if (!n) return "Not dismissed";
    let r = Number(i);
    return !Number.isFinite(r) || r <= 0 ? "Dismissed" : `Dismissed: ${v(new Date(r).toISOString())}`;
}
