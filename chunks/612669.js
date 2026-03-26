"use strict";
n.d(t, { FY: () => A, O9: () => T, PA: () => I, bf: () => S, o1: () => g });
var r = n(311907),
    i = n(780964),
    s = n(840065),
    a = n(287809),
    o = n(97352),
    l = n(166403),
    u = n(927578),
    c = n(427262),
    d = n(593032),
    _ = n(788868),
    f = n(88001),
    p = n(652215),
    h = n(519412),
    m = n(985018);
let E = (e, t) => {
        if (null == t) return null;
        let n = t.recipients?.find((t) => t !== e.id),
            r = a.default.getUser(n);
        return null == r ? null : (0, c.$3)(r);
    },
    g = (e) => {
        let t,
            n,
            { sender: r, channel: a, isSender: o, inviteState: l } = e,
            u = (0, f.DP)();
        if (o) {
            let e = E(r, a);
            if (null == e) return null;
            let o = m.intl.format(h.default.MkcFjx, { receiverName: e, premiumGroupProductName: u });
            switch (l) {
                case f.xI.ACCEPTED:
                    (t = m.intl.formatToPlainString(h.default.K37xCB, { premiumGroupProductName: u })),
                        (n = m.intl.formatToPlainString(h.default["W7e/z1"], { receiverName: e }));
                    break;
                case f.xI.REMOVED:
                case f.xI.NOT_FOUND:
                case f.xI.ERROR:
                    (t = m.intl.formatToPlainString(h.default.YLvraS, { premiumGroupProductName: u })),
                        (n = m.intl.format(h.default.BHxlIR, {
                            premiumGroupProductName: u,
                            onClick: () => {
                                (0, s.openUserSettings)(i.X.SUBSCRIPTIONS_PANEL);
                            },
                        }));
                    break;
                case f.xI.PENDING:
                default:
                    (t = m.intl.formatToPlainString(h.default["5uwv8J"], { premiumGroupProductName: u })),
                        (n = m.intl.formatToPlainString(h.default["AmE0B/"], { receiverName: e }));
            }
            return { message: o, header: t, body: n };
        }
        {
            let e = (0, c.$3)(r),
                i = m.intl.format(h.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: u,
                    helpCenterLink: f.TE,
                });
            switch (l) {
                case f.xI.ACCEPTED:
                    (t = m.intl.string(h.default.ssge1y)),
                        (n = m.intl.formatToPlainString(h.default.fTAcw3, { senderName: e }));
                    break;
                case f.xI.REMOVED:
                case f.xI.NOT_FOUND:
                case f.xI.ERROR:
                    (t = m.intl.formatToPlainString(h.default["AmLUw+"], { premiumGroupProductName: u })),
                        (n = m.intl.formatToPlainString(h.default["7XAuyg"], { premiumGroupProductName: u }));
                    break;
                case f.xI.PENDING:
                default:
                    (t = m.intl.string(h.default.ssge1y)),
                        (n = m.intl.formatToPlainString(h.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: u,
                        }));
            }
            return { message: i, header: t, body: n };
        }
    },
    A = (e) => {
        let { isGift: t } = e;
        return I() && !t;
    },
    I = () => {
        let e = (0, d.A)({ location: "PremiumGroupPurchase" }),
            t = (0, r.bG)([l.A], () => l.A.getPremiumSubscription()),
            n = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
            i = (0, r.bG)([o.A], () => {
                try {
                    let e = (0, u.Rr)(),
                        t = (0, u.I8)(_.gD.PREMIUM_GROUP_MONTH, { purchaseType: p.lid.DEFAULT, currency: e });
                    return null != t;
                } catch {
                    return !1;
                }
            });
        return (
            !n?.isPremiumWithFractionalPremiumOnly() &&
            !!e &&
            !!i &&
            (null == t || (_.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
        );
    },
    T = () => {
        let e = (0, d.A)({ location: "PremiumGroupPurchase" }),
            t = I(),
            n = (0, r.bG)([a.default], () => a.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    S = () => {
        let e = T(),
            t = (0, r.bG)([a.default], () => a.default.getCurrentUser());
        return e && ((0, u.TW)(t) || !(0, u.mv)(t));
    };
