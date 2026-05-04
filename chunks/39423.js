"use strict";
n.d(t, { PA: () => T, O9: () => S, o1: () => g, FY: () => I, ux: () => A, bf: () => N });
var i = n(17928),
    r = n(554146),
    s = n(826673),
    a = n(780964),
    o = n(858897),
    l = n(287809),
    u = n(166403),
    c = n(927578),
    d = n(427262),
    _ = n(593032);
let f = (0, n(945810).mj)({
    name: "2026-04-premium-group-primary-reminder-nagbar",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var h = n(788868),
    p = n(88001),
    E = n(466919),
    m = n(375708);
let g = (e) => {
        let t,
            n,
            { sender: i, channel: r, isSender: s, inviteState: u } = e,
            c = (0, p.DP)();
        if (s) {
            let e = ((e, t) => {
                if (null == t) return null;
                let n = t.recipients?.find((t) => t !== e.id),
                    i = l.default.getUser(n);
                return null == i ? null : (0, d.$3)(i);
            })(i, r);
            if (null == e) return null;
            let s = m.intl.format(E.default.MkcFjx, { receiverName: e, premiumGroupProductName: c });
            switch (u) {
                case p.xI.ACCEPTED:
                    (t = m.intl.formatToPlainString(E.default.K37xCB, { premiumGroupProductName: c })),
                        (n = m.intl.formatToPlainString(E.default["W7e/z1"], { receiverName: e }));
                    break;
                case p.xI.REMOVED:
                case p.xI.NOT_FOUND:
                case p.xI.ERROR:
                    (t = m.intl.formatToPlainString(E.default.YLvraS, { premiumGroupProductName: c })),
                        (n = m.intl.format(E.default.BHxlIR, {
                            premiumGroupProductName: c,
                            onClick: () => {
                                (0, o.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL);
                            },
                        }));
                    break;
                case p.xI.PENDING:
                default:
                    (t = m.intl.formatToPlainString(E.default["5uwv8J"], { premiumGroupProductName: c })),
                        (n = m.intl.formatToPlainString(E.default["AmE0B/"], { receiverName: e }));
            }
            return { message: s, header: t, body: n };
        }
        {
            let e = (0, d.$3)(i),
                r = m.intl.format(E.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: c,
                    helpCenterLink: p.TE,
                });
            switch (u) {
                case p.xI.ACCEPTED:
                    (t = m.intl.string(E.default.ssge1y)),
                        (n = m.intl.formatToPlainString(E.default.fTAcw3, { senderName: e }));
                    break;
                case p.xI.REMOVED:
                case p.xI.NOT_FOUND:
                case p.xI.ERROR:
                    (t = m.intl.formatToPlainString(E.default["AmLUw+"], { premiumGroupProductName: c })),
                        (n = m.intl.formatToPlainString(E.default["7XAuyg"], { premiumGroupProductName: c }));
                    break;
                case p.xI.PENDING:
                default:
                    (t = m.intl.string(E.default.ssge1y)),
                        (n = m.intl.formatToPlainString(E.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: c,
                        }));
            }
            return { message: r, header: t, body: n };
        }
    },
    A = (e, t) =>
        !(
            !e.isPremiumGroupPrimary() ||
            !f.getConfig({ location: "PremiumGroupUtils" }) ||
            (0, s.u$)(r.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, t.id).isDismissed ||
            null == t.createdAt ||
            Date.now() - t.createdAt.getTime() < p.qk
        ),
    I = (e) => {
        let { isGift: t } = e;
        return T() && !t;
    },
    T = () => {
        let e = (0, _.A)({ location: "PremiumGroupPurchase" }),
            t = (0, i.bG)([u.A], () => u.A.getPremiumSubscription()),
            n = (0, i.bG)([l.default], () => l.default.getCurrentUser());
        return (
            !n?.isPremiumWithFractionalPremiumOnly() &&
            !!e &&
            (null == t || (h.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
        );
    },
    S = () => {
        let e = (0, _.A)({ location: "PremiumGroupPurchase" }),
            t = T(),
            n = (0, i.bG)([l.default], () => l.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    N = () => {
        let e = S(),
            t = (0, i.bG)([l.default], () => l.default.getCurrentUser());
        return e && ((0, c.TW)(t) || !(0, c.mv)(t));
    };
