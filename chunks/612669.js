"use strict";
n.d(t, { FY: () => g, O9: () => I, PA: () => A, bf: () => T, o1: () => E });
var r = n(311907),
    i = n(780964),
    s = n(840065),
    a = n(287809),
    o = n(166403),
    l = n(927578),
    u = n(427262),
    c = n(593032),
    d = n(788868),
    _ = n(88001),
    f = n(652215),
    p = n(519412),
    h = n(985018);
let m = (e, t) => {
        if (null == t) return null;
        let n = t.recipients?.find((t) => t !== e.id),
            r = a.default.getUser(n);
        return null == r ? null : (0, u.$3)(r);
    },
    E = (e) => {
        let t,
            n,
            { sender: r, channel: a, isSender: o, inviteState: l } = e,
            c = (0, _.DP)();
        if (o) {
            let e = m(r, a);
            if (null == e) return null;
            let o = h.intl.format(p.default.MkcFjx, { receiverName: e, premiumGroupProductName: c });
            switch (l) {
                case _.xI.ACCEPTED:
                    (t = h.intl.formatToPlainString(p.default.K37xCB, { premiumGroupProductName: c })),
                        (n = h.intl.formatToPlainString(p.default["W7e/z1"], { receiverName: e }));
                    break;
                case _.xI.REMOVED:
                case _.xI.NOT_FOUND:
                case _.xI.ERROR:
                    (t = h.intl.formatToPlainString(p.default.YLvraS, { premiumGroupProductName: c })),
                        (n = h.intl.format(p.default.BHxlIR, {
                            premiumGroupProductName: c,
                            onClick: () => {
                                (0, s.openUserSettings)(i.X.SUBSCRIPTIONS_PANEL, { section: f.nc_.SUBSCRIPTIONS });
                            },
                        }));
                    break;
                case _.xI.PENDING:
                default:
                    (t = h.intl.formatToPlainString(p.default["5uwv8J"], { premiumGroupProductName: c })),
                        (n = h.intl.formatToPlainString(p.default["AmE0B/"], { receiverName: e }));
            }
            return { message: o, header: t, body: n };
        }
        {
            let e = (0, u.$3)(r),
                i = h.intl.format(p.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: c,
                    helpCenterLink: _.TE,
                });
            switch (l) {
                case _.xI.ACCEPTED:
                    (t = h.intl.string(p.default.ssge1y)),
                        (n = h.intl.formatToPlainString(p.default.fTAcw3, { senderName: e }));
                    break;
                case _.xI.REMOVED:
                case _.xI.NOT_FOUND:
                case _.xI.ERROR:
                    (t = h.intl.formatToPlainString(p.default["AmLUw+"], { premiumGroupProductName: c })),
                        (n = h.intl.formatToPlainString(p.default["7XAuyg"], { premiumGroupProductName: c }));
                    break;
                case _.xI.PENDING:
                default:
                    (t = h.intl.string(p.default.ssge1y)),
                        (n = h.intl.formatToPlainString(p.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: c,
                        }));
            }
            return { message: i, header: t, body: n };
        }
    },
    g = (e) => {
        let { isGift: t } = e;
        return A() && !t;
    },
    A = () => {
        let e = (0, c.A)({ location: "PremiumGroupPurchase" }),
            t = (0, r.bG)([o.A], () => o.A.getPremiumSubscription()),
            n = (0, r.bG)([a.default], () => a.default.getCurrentUser());
        return (
            !n?.isPremiumWithFractionalPremiumOnly() &&
            !!e &&
            (null == t || (d.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
        );
    },
    I = () => {
        let e = (0, c.A)({ location: "PremiumGroupPurchase" }),
            t = A(),
            n = (0, r.bG)([a.default], () => a.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    T = () => {
        let e = I(),
            t = (0, r.bG)([a.default], () => a.default.getCurrentUser());
        return e && ((0, l.TW)(t) || !(0, l.mv)(t));
    };
