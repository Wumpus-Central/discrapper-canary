"use strict";
n.d(t, { FY: () => T, O9: () => y, PA: () => S, bf: () => v, o1: () => A, ux: () => I });
var r = n(311907),
    i = n(554146),
    s = n(826673),
    a = n(780964),
    o = n(858897),
    l = n(287809),
    u = n(166403),
    c = n(927578),
    d = n(427262),
    _ = n(593032),
    f = n(496162),
    p = n(788868),
    h = n(88001),
    m = n(466919),
    E = n(985018);
let g = (e, t) => {
        if (null == t) return null;
        let n = t.recipients?.find((t) => t !== e.id),
            r = l.default.getUser(n);
        return null == r ? null : (0, d.$3)(r);
    },
    A = (e) => {
        let t,
            n,
            { sender: r, channel: i, isSender: s, inviteState: l } = e,
            u = (0, h.DP)();
        if (s) {
            let e = g(r, i);
            if (null == e) return null;
            let s = E.intl.format(m.default.MkcFjx, { receiverName: e, premiumGroupProductName: u });
            switch (l) {
                case h.xI.ACCEPTED:
                    (t = E.intl.formatToPlainString(m.default.K37xCB, { premiumGroupProductName: u })),
                        (n = E.intl.formatToPlainString(m.default["W7e/z1"], { receiverName: e }));
                    break;
                case h.xI.REMOVED:
                case h.xI.NOT_FOUND:
                case h.xI.ERROR:
                    (t = E.intl.formatToPlainString(m.default.YLvraS, { premiumGroupProductName: u })),
                        (n = E.intl.format(m.default.BHxlIR, {
                            premiumGroupProductName: u,
                            onClick: () => {
                                (0, o.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL);
                            },
                        }));
                    break;
                case h.xI.PENDING:
                default:
                    (t = E.intl.formatToPlainString(m.default["5uwv8J"], { premiumGroupProductName: u })),
                        (n = E.intl.formatToPlainString(m.default["AmE0B/"], { receiverName: e }));
            }
            return { message: s, header: t, body: n };
        }
        {
            let e = (0, d.$3)(r),
                i = E.intl.format(m.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: u,
                    helpCenterLink: h.TE,
                });
            switch (l) {
                case h.xI.ACCEPTED:
                    (t = E.intl.string(m.default.ssge1y)),
                        (n = E.intl.formatToPlainString(m.default.fTAcw3, { senderName: e }));
                    break;
                case h.xI.REMOVED:
                case h.xI.NOT_FOUND:
                case h.xI.ERROR:
                    (t = E.intl.formatToPlainString(m.default["AmLUw+"], { premiumGroupProductName: u })),
                        (n = E.intl.formatToPlainString(m.default["7XAuyg"], { premiumGroupProductName: u }));
                    break;
                case h.xI.PENDING:
                default:
                    (t = E.intl.string(m.default.ssge1y)),
                        (n = E.intl.formatToPlainString(m.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: u,
                        }));
            }
            return { message: i, header: t, body: n };
        }
    },
    I = (e, t) =>
        !(
            !e.isPremiumGroupPrimary() ||
            !f.A.getConfig({ location: "PremiumGroupUtils" }) ||
            (0, s.u$)(i.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, t.id).isDismissed ||
            null == t.createdAt ||
            Date.now() - t.createdAt.getTime() < h.qk
        ),
    T = (e) => {
        let { isGift: t } = e;
        return S() && !t;
    },
    S = () => {
        let e = (0, _.A)({ location: "PremiumGroupPurchase" }),
            t = (0, r.bG)([u.A], () => u.A.getPremiumSubscription()),
            n = (0, r.bG)([l.default], () => l.default.getCurrentUser());
        return (
            !n?.isPremiumWithFractionalPremiumOnly() &&
            !!e &&
            (null == t || (p.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
        );
    },
    y = () => {
        let e = (0, _.A)({ location: "PremiumGroupPurchase" }),
            t = S(),
            n = (0, r.bG)([l.default], () => l.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    v = () => {
        let e = y(),
            t = (0, r.bG)([l.default], () => l.default.getCurrentUser());
        return e && ((0, c.TW)(t) || !(0, c.mv)(t));
    };
