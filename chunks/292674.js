"use strict";
n.d(t, { PA: () => N, O9: () => y, o1: () => I, FY: () => S, ux: () => T, bf: () => C });
var i = n(17928),
    r = n(554146),
    s = n(826673),
    a = n(780964),
    o = n(858897),
    l = n(287809),
    u = n(166403),
    c = n(927578),
    d = n(427262),
    _ = n(945810);
let f = (0, _.mj)({
    name: "2025-12-katsudon",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function h(e) {
    let { location: t } = e,
        { enabled: n } = f.useConfig({ location: t });
    return n;
}
let p = (0, _.mj)({
    name: "2026-04-premium-group-primary-reminder-nagbar",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var E = n(788868),
    m = n(88001),
    g = n(466919),
    A = n(375708);
let I = (e) => {
        let t,
            n,
            { sender: i, channel: r, isSender: s, inviteState: u } = e,
            c = (0, m.DP)();
        if (s) {
            let e = ((e, t) => {
                if (null == t) return null;
                let n = t.recipients?.find((t) => t !== e.id),
                    i = l.default.getUser(n);
                return null == i ? null : (0, d.$3)(i);
            })(i, r);
            if (null == e) return null;
            let s = A.intl.format(g.default.MkcFjx, { receiverName: e, premiumGroupProductName: c });
            switch (u) {
                case m.xI.ACCEPTED:
                    (t = A.intl.formatToPlainString(g.default.K37xCB, { premiumGroupProductName: c })),
                        (n = A.intl.formatToPlainString(g.default["W7e/z1"], { receiverName: e }));
                    break;
                case m.xI.REMOVED:
                case m.xI.NOT_FOUND:
                case m.xI.ERROR:
                    (t = A.intl.formatToPlainString(g.default.YLvraS, { premiumGroupProductName: c })),
                        (n = A.intl.format(g.default.BHxlIR, {
                            premiumGroupProductName: c,
                            onClick: () => {
                                (0, o.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL);
                            },
                        }));
                    break;
                case m.xI.PENDING:
                default:
                    (t = A.intl.formatToPlainString(g.default["5uwv8J"], { premiumGroupProductName: c })),
                        (n = A.intl.formatToPlainString(g.default["AmE0B/"], { receiverName: e }));
            }
            return { message: s, header: t, body: n };
        }
        {
            let e = (0, d.$3)(i),
                r = A.intl.format(g.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: c,
                    helpCenterLink: m.TE,
                });
            switch (u) {
                case m.xI.ACCEPTED:
                    (t = A.intl.string(g.default.ssge1y)),
                        (n = A.intl.formatToPlainString(g.default.fTAcw3, { senderName: e }));
                    break;
                case m.xI.REMOVED:
                case m.xI.NOT_FOUND:
                case m.xI.ERROR:
                    (t = A.intl.formatToPlainString(g.default["AmLUw+"], { premiumGroupProductName: c })),
                        (n = A.intl.formatToPlainString(g.default["7XAuyg"], { premiumGroupProductName: c }));
                    break;
                case m.xI.PENDING:
                default:
                    (t = A.intl.string(g.default.ssge1y)),
                        (n = A.intl.formatToPlainString(g.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: c,
                        }));
            }
            return { message: r, header: t, body: n };
        }
    },
    T = (e, t) =>
        !(
            !e.isPremiumGroupPrimary() ||
            !p.getConfig({ location: "PremiumGroupUtils" }) ||
            (0, s.u$)(r.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, t.id).isDismissed ||
            null == t.createdAt ||
            Date.now() - t.createdAt.getTime() < m.qk
        ),
    S = (e) => {
        let { isGift: t } = e;
        return N() && !t;
    },
    N = () => {
        let e = h({ location: "PremiumGroupPurchase" }),
            t = (0, i.bG)([u.A], () => u.A.getPremiumSubscription()),
            n = (0, i.bG)([l.default], () => l.default.getCurrentUser());
        return (
            !n?.isPremiumWithFractionalPremiumOnly() &&
            !!e &&
            (null == t || (E.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
        );
    },
    y = () => {
        let e = h({ location: "PremiumGroupPurchase" }),
            t = N(),
            n = (0, i.bG)([l.default], () => l.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    C = () => {
        let e = y(),
            t = (0, i.bG)([l.default], () => l.default.getCurrentUser());
        return e && ((0, c.TW)(t) || !(0, c.mv)(t));
    };
