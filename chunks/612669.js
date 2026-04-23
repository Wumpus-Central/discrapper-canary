n.d(t, { FY: () => R, O9: () => C, PA: () => f, bf: () => p, o1: () => N, ux: () => O });
var i = n(17928),
    r = n(554146),
    a = n(826673),
    s = n(780964),
    _ = n(858897),
    l = n(287809),
    o = n(166403),
    E = n(927578),
    d = n(427262),
    c = n(593032),
    u = n(496162),
    I = n(788868),
    A = n(88001),
    T = n(466919),
    S = n(985018);
let N = (e) => {
        let t,
            n,
            { sender: i, channel: r, isSender: a, inviteState: o } = e,
            E = (0, A.DP)();
        if (a) {
            let e = ((e, t) => {
                if (null == t) return null;
                let n = t.recipients?.find((t) => t !== e.id),
                    i = l.default.getUser(n);
                return null == i ? null : (0, d.$3)(i);
            })(i, r);
            if (null == e) return null;
            let a = S.intl.format(T.default.MkcFjx, { receiverName: e, premiumGroupProductName: E });
            switch (o) {
                case A.xI.ACCEPTED:
                    (t = S.intl.formatToPlainString(T.default.K37xCB, { premiumGroupProductName: E })),
                        (n = S.intl.formatToPlainString(T.default["W7e/z1"], { receiverName: e }));
                    break;
                case A.xI.REMOVED:
                case A.xI.NOT_FOUND:
                case A.xI.ERROR:
                    (t = S.intl.formatToPlainString(T.default.YLvraS, { premiumGroupProductName: E })),
                        (n = S.intl.format(T.default.BHxlIR, {
                            premiumGroupProductName: E,
                            onClick: () => {
                                (0, _.openUserSettings)(s.X.SUBSCRIPTIONS_PANEL);
                            },
                        }));
                    break;
                case A.xI.PENDING:
                default:
                    (t = S.intl.formatToPlainString(T.default["5uwv8J"], { premiumGroupProductName: E })),
                        (n = S.intl.formatToPlainString(T.default["AmE0B/"], { receiverName: e }));
            }
            return { message: a, header: t, body: n };
        }
        {
            let e = (0, d.$3)(i),
                r = S.intl.format(T.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: E,
                    helpCenterLink: A.TE,
                });
            switch (o) {
                case A.xI.ACCEPTED:
                    (t = S.intl.string(T.default.ssge1y)),
                        (n = S.intl.formatToPlainString(T.default.fTAcw3, { senderName: e }));
                    break;
                case A.xI.REMOVED:
                case A.xI.NOT_FOUND:
                case A.xI.ERROR:
                    (t = S.intl.formatToPlainString(T.default["AmLUw+"], { premiumGroupProductName: E })),
                        (n = S.intl.formatToPlainString(T.default["7XAuyg"], { premiumGroupProductName: E }));
                    break;
                case A.xI.PENDING:
                default:
                    (t = S.intl.string(T.default.ssge1y)),
                        (n = S.intl.formatToPlainString(T.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: E,
                        }));
            }
            return { message: r, header: t, body: n };
        }
    },
    O = (e, t) =>
        !(
            !e.isPremiumGroupPrimary() ||
            !u.A.getConfig({ location: "PremiumGroupUtils" }) ||
            (0, a.u$)(r.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, t.id).isDismissed ||
            null == t.createdAt ||
            Date.now() - t.createdAt.getTime() < A.qk
        ),
    R = (e) => {
        let { isGift: t } = e;
        return f() && !t;
    },
    f = () => {
        let e = (0, c.A)({ location: "PremiumGroupPurchase" }),
            t = (0, i.bG)([o.A], () => o.A.getPremiumSubscription()),
            n = (0, i.bG)([l.default], () => l.default.getCurrentUser());
        return (
            !n?.isPremiumWithFractionalPremiumOnly() &&
            !!e &&
            (null == t || (I.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
        );
    },
    C = () => {
        let e = (0, c.A)({ location: "PremiumGroupPurchase" }),
            t = f(),
            n = (0, i.bG)([l.default], () => l.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    p = () => {
        let e = C(),
            t = (0, i.bG)([l.default], () => l.default.getCurrentUser());
        return e && ((0, E.TW)(t) || !(0, E.mv)(t));
    };
