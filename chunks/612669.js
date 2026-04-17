"use strict";
n.d(t, { FY: () => E, O9: () => A, PA: () => g, bf: () => I, o1: () => m });
var r = n(311907),
    i = n(780964),
    s = n(858897),
    a = n(287809),
    o = n(166403),
    l = n(927578),
    u = n(427262),
    c = n(593032),
    d = n(788868),
    _ = n(88001),
    f = n(466919),
    p = n(985018);
let h = (e, t) => {
        if (null == t) return null;
        let n = t.recipients?.find((t) => t !== e.id),
            r = a.default.getUser(n);
        return null == r ? null : (0, u.$3)(r);
    },
    m = (e) => {
        let t,
            n,
            { sender: r, channel: a, isSender: o, inviteState: l } = e,
            c = (0, _.DP)();
        if (o) {
            let e = h(r, a);
            if (null == e) return null;
            let o = p.intl.format(f.default.MkcFjx, { receiverName: e, premiumGroupProductName: c });
            switch (l) {
                case _.xI.ACCEPTED:
                    (t = p.intl.formatToPlainString(f.default.K37xCB, { premiumGroupProductName: c })),
                        (n = p.intl.formatToPlainString(f.default["W7e/z1"], { receiverName: e }));
                    break;
                case _.xI.REMOVED:
                case _.xI.NOT_FOUND:
                case _.xI.ERROR:
                    (t = p.intl.formatToPlainString(f.default.YLvraS, { premiumGroupProductName: c })),
                        (n = p.intl.format(f.default.BHxlIR, {
                            premiumGroupProductName: c,
                            onClick: () => {
                                (0, s.openUserSettings)(i.X.SUBSCRIPTIONS_PANEL);
                            },
                        }));
                    break;
                case _.xI.PENDING:
                default:
                    (t = p.intl.formatToPlainString(f.default["5uwv8J"], { premiumGroupProductName: c })),
                        (n = p.intl.formatToPlainString(f.default["AmE0B/"], { receiverName: e }));
            }
            return { message: o, header: t, body: n };
        }
        {
            let e = (0, u.$3)(r),
                i = p.intl.format(f.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: c,
                    helpCenterLink: _.TE,
                });
            switch (l) {
                case _.xI.ACCEPTED:
                    (t = p.intl.string(f.default.ssge1y)),
                        (n = p.intl.formatToPlainString(f.default.fTAcw3, { senderName: e }));
                    break;
                case _.xI.REMOVED:
                case _.xI.NOT_FOUND:
                case _.xI.ERROR:
                    (t = p.intl.formatToPlainString(f.default["AmLUw+"], { premiumGroupProductName: c })),
                        (n = p.intl.formatToPlainString(f.default["7XAuyg"], { premiumGroupProductName: c }));
                    break;
                case _.xI.PENDING:
                default:
                    (t = p.intl.string(f.default.ssge1y)),
                        (n = p.intl.formatToPlainString(f.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: c,
                        }));
            }
            return { message: i, header: t, body: n };
        }
    },
    E = (e) => {
        let { isGift: t } = e;
        return g() && !t;
    },
    g = () => {
        let e = (0, c.A)({ location: "PremiumGroupPurchase" }),
            t = (0, r.bG)([o.A], () => o.A.getPremiumSubscription()),
            n = (0, r.bG)([a.default], () => a.default.getCurrentUser());
        return (
            !n?.isPremiumWithFractionalPremiumOnly() &&
            !!e &&
            (null == t || (d.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
        );
    },
    A = () => {
        let e = (0, c.A)({ location: "PremiumGroupPurchase" }),
            t = g(),
            n = (0, r.bG)([a.default], () => a.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    I = () => {
        let e = A(),
            t = (0, r.bG)([a.default], () => a.default.getCurrentUser());
        return e && ((0, l.TW)(t) || !(0, l.mv)(t));
    };
