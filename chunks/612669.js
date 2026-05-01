n.d(t, { FY: () => f, O9: () => m, PA: () => p, bf: () => O, o1: () => S, ux: () => N });
var i = n(17928),
    a = n(554146),
    r = n(826673),
    s = n(780964),
    l = n(858897),
    o = n(287809),
    d = n(166403),
    c = n(927578),
    _ = n(427262),
    E = n(593032),
    u = n(496162),
    A = n(788868),
    I = n(88001),
    T = n(466919),
    h = n(985018);
let S = (e) => {
        let t,
            n,
            { sender: i, channel: a, isSender: r, inviteState: d } = e,
            c = (0, I.DP)();
        if (r) {
            let e = ((e, t) => {
                if (null == t) return null;
                let n = t.recipients?.find((t) => t !== e.id),
                    i = o.default.getUser(n);
                return null == i ? null : (0, _.$3)(i);
            })(i, a);
            if (null == e) return null;
            let r = h.intl.format(T.default.MkcFjx, { receiverName: e, premiumGroupProductName: c });
            switch (d) {
                case I.xI.ACCEPTED:
                    (t = h.intl.formatToPlainString(T.default.K37xCB, { premiumGroupProductName: c })),
                        (n = h.intl.formatToPlainString(T.default["W7e/z1"], { receiverName: e }));
                    break;
                case I.xI.REMOVED:
                case I.xI.NOT_FOUND:
                case I.xI.ERROR:
                    (t = h.intl.formatToPlainString(T.default.YLvraS, { premiumGroupProductName: c })),
                        (n = h.intl.format(T.default.BHxlIR, {
                            premiumGroupProductName: c,
                            onClick: () => {
                                (0, l.openUserSettings)(s.X.SUBSCRIPTIONS_PANEL);
                            },
                        }));
                    break;
                case I.xI.PENDING:
                default:
                    (t = h.intl.formatToPlainString(T.default["5uwv8J"], { premiumGroupProductName: c })),
                        (n = h.intl.formatToPlainString(T.default["AmE0B/"], { receiverName: e }));
            }
            return { message: r, header: t, body: n };
        }
        {
            let e = (0, _.$3)(i),
                a = h.intl.format(T.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: c,
                    helpCenterLink: I.TE,
                });
            switch (d) {
                case I.xI.ACCEPTED:
                    (t = h.intl.string(T.default.ssge1y)),
                        (n = h.intl.formatToPlainString(T.default.fTAcw3, { senderName: e }));
                    break;
                case I.xI.REMOVED:
                case I.xI.NOT_FOUND:
                case I.xI.ERROR:
                    (t = h.intl.formatToPlainString(T.default["AmLUw+"], { premiumGroupProductName: c })),
                        (n = h.intl.formatToPlainString(T.default["7XAuyg"], { premiumGroupProductName: c }));
                    break;
                case I.xI.PENDING:
                default:
                    (t = h.intl.string(T.default.ssge1y)),
                        (n = h.intl.formatToPlainString(T.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: c,
                        }));
            }
            return { message: a, header: t, body: n };
        }
    },
    N = (e, t) =>
        !(
            !e.isPremiumGroupPrimary() ||
            !u.A.getConfig({ location: "PremiumGroupUtils" }) ||
            (0, r.u$)(a.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, t.id).isDismissed ||
            null == t.createdAt ||
            Date.now() - t.createdAt.getTime() < I.qk
        ),
    f = (e) => {
        let { isGift: t } = e;
        return p() && !t;
    },
    p = () => {
        let e = (0, E.A)({ location: "PremiumGroupPurchase" }),
            t = (0, i.bG)([d.A], () => d.A.getPremiumSubscription()),
            n = (0, i.bG)([o.default], () => o.default.getCurrentUser());
        return (
            !n?.isPremiumWithFractionalPremiumOnly() &&
            !!e &&
            (null == t || (A.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
        );
    },
    m = () => {
        let e = (0, E.A)({ location: "PremiumGroupPurchase" }),
            t = p(),
            n = (0, i.bG)([o.default], () => o.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    O = () => {
        let e = m(),
            t = (0, i.bG)([o.default], () => o.default.getCurrentUser());
        return e && ((0, c.TW)(t) || !(0, c.mv)(t));
    };
