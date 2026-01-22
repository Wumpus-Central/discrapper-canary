n.d(t, {
    O9: () => b,
    PA: () => E,
    bf: () => y,
    o1: () => g,
});
var r = n(311907),
    i = n(780964),
    a = n(840065),
    s = n(287809),
    o = n(166403),
    l = n(927578),
    c = n(427262),
    u = n(593032),
    d = n(788868),
    f = n(88001),
    p = n(652215),
    _ = n(519412),
    h = n(985018);
let m = (e, t) => {
        var n;
        if (null == t) return null;
        let r = null == (n = t.recipients) ? void 0 : n.find((t) => t !== e.id),
            i = s.default.getUser(r);
        return null == i ? null : (0, c.$3)(i);
    },
    g = (e) => {
        let t,
            n,
            { sender: r, channel: s, isSender: o, inviteState: l } = e,
            u = (0, f.DP)();
        if (o) {
            let e = m(r, s);
            if (null == e) return null;
            let o = h.intl.format(_.default.MkcFjx, {
                receiverName: e,
                premiumGroupProductName: u,
            });
            switch (l) {
                case f.xI.ACCEPTED:
                    (t = h.intl.formatToPlainString(_.default["5uwv8J"], { premiumGroupProductName: u })),
                        (n = h.intl.formatToPlainString(_.default["W7e/z1"], { receiverName: e }));
                    break;
                case f.xI.REMOVED:
                case f.xI.NOT_FOUND:
                case f.xI.ERROR:
                    (t = h.intl.formatToPlainString(_.default.YLvraS, { premiumGroupProductName: u })),
                        (n = h.intl.format(_.default.BHxlIR, {
                            premiumGroupProductName: u,
                            onClick: () => {
                                (0, a.openUserSettings)(i.X.SUBSCRIPTIONS_PANEL, { section: p.nc_.SUBSCRIPTIONS });
                            },
                        }));
                    break;
                case f.xI.PENDING:
                default:
                    (t = h.intl.formatToPlainString(_.default["5uwv8J"], { premiumGroupProductName: u })),
                        (n = h.intl.formatToPlainString(_.default["AmE0B/"], { receiverName: e }));
            }
            return {
                message: o,
                header: t,
                body: n,
            };
        }
        {
            let e = (0, c.$3)(r),
                i = h.intl.format(_.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: u,
                    helpCenterLink: f.TE,
                });
            switch (l) {
                case f.xI.ACCEPTED:
                    (t = h.intl.string(_.default.ssge1y)),
                        (n = h.intl.formatToPlainString(_.default.fTAcw3, { senderName: e }));
                    break;
                case f.xI.REMOVED:
                case f.xI.NOT_FOUND:
                case f.xI.ERROR:
                    (t = h.intl.formatToPlainString(_.default["AmLUw+"], { premiumGroupProductName: u })),
                        (n = h.intl.formatToPlainString(_.default["7XAuyg"], { premiumGroupProductName: u }));
                    break;
                case f.xI.PENDING:
                default:
                    (t = h.intl.string(_.default.ssge1y)),
                        (n = h.intl.formatToPlainString(_.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: u,
                        }));
            }
            return {
                message: i,
                header: t,
                body: n,
            };
        }
    },
    E = () => {
        var e;
        let t = (0, u.A)({ location: "PremiumGroupPurchase" }),
            n = (0, r.bG)([o.A], () => o.A.getPremiumSubscription()),
            i = (0, r.bG)([s.default], () => s.default.getCurrentUser());
        return (
            (null == i || !i.isPremiumWithFractionalPremiumOnly()) &&
            !!t &&
            (null == n || (d.BL.has(null != (e = n.premiumPlanIdFromItems) ? e : "") && !n.isPurchasedExternally))
        );
    },
    b = () => {
        let e = (0, u.A)({ location: "PremiumGroupPurchase" }),
            t = E(),
            n = (0, r.bG)([s.default], () => s.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    y = () => {
        let e = b(),
            t = (0, r.bG)([s.default], () => s.default.getCurrentUser());
        return e && ((0, l.TW)(t) || !(0, l.mv)(t));
    };
