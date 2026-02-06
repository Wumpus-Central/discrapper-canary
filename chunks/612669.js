n.d(t, { O9: () => f, PA: () => A, bf: () => x, o1: () => g });
var i = n(311907),
    l = n(780964),
    a = n(840065),
    r = n(287809),
    s = n(166403),
    o = n(927578),
    d = n(427262),
    c = n(593032),
    u = n(788868),
    m = n(88001),
    _ = n(652215),
    h = n(519412),
    p = n(985018);
let g = (e) => {
        let t,
            n,
            { sender: i, channel: s, isSender: o, inviteState: c } = e,
            u = (0, m.DP)();
        if (o) {
            let e = ((e, t) => {
                if (null == t) return null;
                let n = t.recipients?.find((t) => t !== e.id),
                    i = r.default.getUser(n);
                return null == i ? null : (0, d.$3)(i);
            })(i, s);
            if (null == e) return null;
            let o = p.intl.format(h.default.MkcFjx, { receiverName: e, premiumGroupProductName: u });
            switch (c) {
                case m.xI.ACCEPTED:
                    (t = p.intl.formatToPlainString(h.default.K37xCB, { premiumGroupProductName: u })),
                        (n = p.intl.formatToPlainString(h.default["W7e/z1"], { receiverName: e }));
                    break;
                case m.xI.REMOVED:
                case m.xI.NOT_FOUND:
                case m.xI.ERROR:
                    (t = p.intl.formatToPlainString(h.default.YLvraS, { premiumGroupProductName: u })),
                        (n = p.intl.format(h.default.BHxlIR, {
                            premiumGroupProductName: u,
                            onClick: () => {
                                (0, a.openUserSettings)(l.X.SUBSCRIPTIONS_PANEL, { section: _.nc_.SUBSCRIPTIONS });
                            },
                        }));
                    break;
                case m.xI.PENDING:
                default:
                    (t = p.intl.formatToPlainString(h.default["5uwv8J"], { premiumGroupProductName: u })),
                        (n = p.intl.formatToPlainString(h.default["AmE0B/"], { receiverName: e }));
            }
            return { message: o, header: t, body: n };
        }
        {
            let e = (0, d.$3)(i),
                l = p.intl.format(h.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: u,
                    helpCenterLink: m.TE,
                });
            switch (c) {
                case m.xI.ACCEPTED:
                    (t = p.intl.string(h.default.ssge1y)),
                        (n = p.intl.formatToPlainString(h.default.fTAcw3, { senderName: e }));
                    break;
                case m.xI.REMOVED:
                case m.xI.NOT_FOUND:
                case m.xI.ERROR:
                    (t = p.intl.formatToPlainString(h.default["AmLUw+"], { premiumGroupProductName: u })),
                        (n = p.intl.formatToPlainString(h.default["7XAuyg"], { premiumGroupProductName: u }));
                    break;
                case m.xI.PENDING:
                default:
                    (t = p.intl.string(h.default.ssge1y)),
                        (n = p.intl.formatToPlainString(h.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: u,
                        }));
            }
            return { message: l, header: t, body: n };
        }
    },
    A = () => {
        let e = (0, c.A)({ location: "PremiumGroupPurchase" }),
            t = (0, i.bG)([s.A], () => s.A.getPremiumSubscription()),
            n = (0, i.bG)([r.default], () => r.default.getCurrentUser());
        return (
            !n?.isPremiumWithFractionalPremiumOnly() &&
            !!e &&
            (null == t || (u.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
        );
    },
    f = () => {
        let e = (0, c.A)({ location: "PremiumGroupPurchase" }),
            t = A(),
            n = (0, i.bG)([r.default], () => r.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    x = () => {
        let e = f(),
            t = (0, i.bG)([r.default], () => r.default.getCurrentUser());
        return e && ((0, o.TW)(t) || !(0, o.mv)(t));
    };
