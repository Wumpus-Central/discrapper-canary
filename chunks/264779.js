n(938796);
var i = n(134559),
    r = n(665260),
    a = n(620632),
    s = n(554146),
    l = n(462887),
    o = n(543862),
    d = n(617617),
    c = n(835095),
    u = n(129230),
    _ = n(723702),
    E = n(811091),
    A = n(412260),
    h = n(852218),
    f = n(682901),
    I = n(652215);
function p(e) {
    return { code: e.code, userId: e.user_id, claimedAt: e.claimed_at, promotion: c.A.createFromServer(e.promotion) };
}
function m() {
    let e = A.A.outboundPromotions,
        t = A.A.consumedInboundPromotionId,
        n = e.filter((e) => e.id !== t && !(0, r.Lt)(e.flags, f.$3.SUPPRESS_NOTIFICATION) && !g(e)),
        i =
            d.A.settings.userContent?.recurringDismissibleContentStates[s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]
                ?.lastDismissedObjectId,
        a =
            null == i
                ? n
                : n.filter((e) => {
                      let { id: t } = e;
                      return 1 === E.default.compare(t, i);
                  });
    return 0 === a.length ? null : a.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function g(e) {
    return null != e.partnerId && h.km.has(e.partnerId);
}
function T(e) {
    return !(0, _.un)() || !e.hasFlag(f.$3.IS_BLOCKED_IOS);
}
function S(e) {
    let { promotionType: t } = e;
    return t === h.pt.THIRD_PARTY_OUTBOUND_RECURRING;
}
n.d(
    t,
    {},
    {
        Cp: m,
        HB: S,
        Ng: p,
        OP: T,
        So: function () {
            let e = m();
            return null != e && !(0, o.j6)(s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: 2592e5 });
        },
        WD: function (e, t) {
            let n = (0, l.M)(t) ? "logo-dark" : "logo-light",
                i = window.GLOBAL_ENV.CDN_HOST,
                r = "?size=256";
            return null != i
                ? `https://${i}/promotions/${e}/${n}${r}`
                : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}/promotions/${e}/${n}${r}`;
        },
        Wl: function (e, t) {
            let n = new Set(
                t.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return e.filter((e) => {
                let { promotion: t } = e;
                return !n.has(t.id) && !S(t) && !g(t) && T(t);
            });
        },
        eN: function (e) {
            let t = {};
            for (let { code: n, promotion: i } of e) t[i.id] = n;
            return t;
        },
        g_: g,
        kc: function (e, t) {
            return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat
                ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e))
                : (t.outboundRedemptionPageLink ?? "");
        },
        kd: async function (e) {
            let t,
                { promotionId: n, promotionTitle: r, partnerId: s, analyticsLocations: l } = e,
                o = await a.Bo.post({ url: I.Rsh.CLAIM_OUTBOUND_PROMOTION_CODE(n), rejectWithError: (0, a.fT)() }),
                d = o.body;
            return (
                (t = i.v.DESKTOP),
                u.default.track(I.HAw.OUTBOUND_PROMOTION_CLAIMED, {
                    platform: t,
                    status: o.status,
                    location_stack: l,
                    promotion_id: n,
                    name: r ?? null,
                    partner: s ?? null,
                }),
                p(d)
            );
        },
    },
);
