"use strict";
n.d(t, { O9: () => I, PA: () => A, bf: () => T, o1: () => E });
var r = n(311907),
    i = n(780964),
    a = n(840065),
    s = n(287809),
    o = n(166403),
    l = n(927578),
    u = n(427262),
    c = n(593032),
    d = n(788868),
    _ = n(88001),
    f = n(652215),
    h = n(519412),
    p = n(985018);
let g = (e, t) => {
        if (null == t) return null;
        let n = t.recipients?.find((t) => t !== e.id),
            r = s.default.getUser(n);
        return null == r ? null : (0, u.$3)(r);
    },
    E = (e) => {
        let t,
            n,
            { sender: r, channel: s, isSender: o, inviteState: l } = e,
            c = (0, _.DP)();
        if (o) {
            let e = g(r, s);
            if (null == e) return null;
            let o = p.intl.format(h.default.MkcFjx, { receiverName: e, premiumGroupProductName: c });
            switch (l) {
                case _.xI.ACCEPTED:
                    (t = p.intl.formatToPlainString(h.default.K37xCB, { premiumGroupProductName: c })),
                        (n = p.intl.formatToPlainString(h.default["W7e/z1"], { receiverName: e }));
                    break;
                case _.xI.REMOVED:
                case _.xI.NOT_FOUND:
                case _.xI.ERROR:
                    (t = p.intl.formatToPlainString(h.default.YLvraS, { premiumGroupProductName: c })),
                        (n = p.intl.format(h.default.BHxlIR, {
                            premiumGroupProductName: c,
                            onClick: () => {
                                (0, a.openUserSettings)(i.X.SUBSCRIPTIONS_PANEL, { section: f.nc_.SUBSCRIPTIONS });
                            },
                        }));
                    break;
                case _.xI.PENDING:
                default:
                    (t = p.intl.formatToPlainString(h.default["5uwv8J"], { premiumGroupProductName: c })),
                        (n = p.intl.formatToPlainString(h.default["AmE0B/"], { receiverName: e }));
            }
            return { message: o, header: t, body: n };
        }
        {
            let e = (0, u.$3)(r),
                i = p.intl.format(h.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: c,
                    helpCenterLink: _.TE,
                });
            switch (l) {
                case _.xI.ACCEPTED:
                    (t = p.intl.string(h.default.ssge1y)),
                        (n = p.intl.formatToPlainString(h.default.fTAcw3, { senderName: e }));
                    break;
                case _.xI.REMOVED:
                case _.xI.NOT_FOUND:
                case _.xI.ERROR:
                    (t = p.intl.formatToPlainString(h.default["AmLUw+"], { premiumGroupProductName: c })),
                        (n = p.intl.formatToPlainString(h.default["7XAuyg"], { premiumGroupProductName: c }));
                    break;
                case _.xI.PENDING:
                default:
                    (t = p.intl.string(h.default.ssge1y)),
                        (n = p.intl.formatToPlainString(h.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: c,
                        }));
            }
            return { message: i, header: t, body: n };
        }
    },
    A = () => {
        let e = (0, c.A)({ location: "PremiumGroupPurchase" }),
            t = (0, r.bG)([o.A], () => o.A.getPremiumSubscription()),
            n = (0, r.bG)([s.default], () => s.default.getCurrentUser());
        return (
            !n?.isPremiumWithFractionalPremiumOnly() &&
            !!e &&
            (null == t || (d.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
        );
    },
    I = () => {
        let e = (0, c.A)({ location: "PremiumGroupPurchase" }),
            t = A(),
            n = (0, r.bG)([s.default], () => s.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    T = () => {
        let e = I(),
            t = (0, r.bG)([s.default], () => s.default.getCurrentUser());
        return e && ((0, l.TW)(t) || !(0, l.mv)(t));
    };
