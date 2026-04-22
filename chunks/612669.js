"use strict";
n.d(t, { FY: () => I, O9: () => S, PA: () => T, bf: () => y, o1: () => g, ux: () => A });
var r = n(311907),
    i = n(554146),
    s = n(826673),
    a = n(780964),
    o = n(858897),
    l = n(287809),
    u = n(166403),
    d = n(927578),
    c = n(427262),
    _ = n(593032),
    f = n(496162),
    E = n(788868),
    h = n(88001),
    p = n(466919),
    m = n(985018);
let g = (e) => {
        let t,
            n,
            { sender: r, channel: i, isSender: s, inviteState: u } = e,
            d = (0, h.DP)();
        if (s) {
            let e = ((e, t) => {
                if (null == t) return null;
                let n = t.recipients?.find((t) => t !== e.id),
                    r = l.default.getUser(n);
                return null == r ? null : (0, c.$3)(r);
            })(r, i);
            if (null == e) return null;
            let s = m.intl.format(p.default.MkcFjx, { receiverName: e, premiumGroupProductName: d });
            switch (u) {
                case h.xI.ACCEPTED:
                    (t = m.intl.formatToPlainString(p.default.K37xCB, { premiumGroupProductName: d })),
                        (n = m.intl.formatToPlainString(p.default["W7e/z1"], { receiverName: e }));
                    break;
                case h.xI.REMOVED:
                case h.xI.NOT_FOUND:
                case h.xI.ERROR:
                    (t = m.intl.formatToPlainString(p.default.YLvraS, { premiumGroupProductName: d })),
                        (n = m.intl.format(p.default.BHxlIR, {
                            premiumGroupProductName: d,
                            onClick: () => {
                                (0, o.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL);
                            },
                        }));
                    break;
                case h.xI.PENDING:
                default:
                    (t = m.intl.formatToPlainString(p.default["5uwv8J"], { premiumGroupProductName: d })),
                        (n = m.intl.formatToPlainString(p.default["AmE0B/"], { receiverName: e }));
            }
            return { message: s, header: t, body: n };
        }
        {
            let e = (0, c.$3)(r),
                i = m.intl.format(p.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: d,
                    helpCenterLink: h.TE,
                });
            switch (u) {
                case h.xI.ACCEPTED:
                    (t = m.intl.string(p.default.ssge1y)),
                        (n = m.intl.formatToPlainString(p.default.fTAcw3, { senderName: e }));
                    break;
                case h.xI.REMOVED:
                case h.xI.NOT_FOUND:
                case h.xI.ERROR:
                    (t = m.intl.formatToPlainString(p.default["AmLUw+"], { premiumGroupProductName: d })),
                        (n = m.intl.formatToPlainString(p.default["7XAuyg"], { premiumGroupProductName: d }));
                    break;
                case h.xI.PENDING:
                default:
                    (t = m.intl.string(p.default.ssge1y)),
                        (n = m.intl.formatToPlainString(p.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: d,
                        }));
            }
            return { message: i, header: t, body: n };
        }
    },
    A = (e, t) =>
        !(
            !e.isPremiumGroupPrimary() ||
            !f.A.getConfig({ location: "PremiumGroupUtils" }) ||
            (0, s.u$)(i.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, t.id).isDismissed ||
            null == t.createdAt ||
            Date.now() - t.createdAt.getTime() < h.qk
        ),
    I = (e) => {
        let { isGift: t } = e;
        return T() && !t;
    },
    T = () => {
        let e = (0, _.A)({ location: "PremiumGroupPurchase" }),
            t = (0, r.bG)([u.A], () => u.A.getPremiumSubscription()),
            n = (0, r.bG)([l.default], () => l.default.getCurrentUser());
        return (
            !n?.isPremiumWithFractionalPremiumOnly() &&
            !!e &&
            (null == t || (E.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
        );
    },
    S = () => {
        let e = (0, _.A)({ location: "PremiumGroupPurchase" }),
            t = T(),
            n = (0, r.bG)([l.default], () => l.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    y = () => {
        let e = S(),
            t = (0, r.bG)([l.default], () => l.default.getCurrentUser());
        return e && ((0, d.TW)(t) || !(0, d.mv)(t));
    };
