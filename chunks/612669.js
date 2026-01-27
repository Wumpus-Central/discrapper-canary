n.d(t, {
    O9: () => b,
    PA: () => _,
    bf: () => A,
    o1: () => h,
});
var r = n(311907),
    i = n(780964),
    l = n(840065),
    a = n(287809),
    s = n(166403),
    o = n(927578),
    c = n(427262),
    u = n(593032),
    d = n(788868),
    p = n(88001),
    m = n(652215),
    f = n(519412),
    g = n(985018);
let h = (e) => {
        let t,
            n,
            { sender: r, channel: s, isSender: o, inviteState: u } = e,
            d = (0, p.DP)();
        if (o) {
            let e = ((e, t) => {
                var n;
                if (null == t) return null;
                let r = null == (n = t.recipients) ? void 0 : n.find((t) => t !== e.id),
                    i = a.default.getUser(r);
                return null == i ? null : (0, c.$3)(i);
            })(r, s);
            if (null == e) return null;
            let o = g.intl.format(f.default.MkcFjx, {
                receiverName: e,
                premiumGroupProductName: d,
            });
            switch (u) {
                case p.xI.ACCEPTED:
                    (t = g.intl.formatToPlainString(f.default["5uwv8J"], {
                        premiumGroupProductName: d,
                    })),
                        (n = g.intl.formatToPlainString(f.default["W7e/z1"], {
                            receiverName: e,
                        }));
                    break;
                case p.xI.REMOVED:
                case p.xI.NOT_FOUND:
                case p.xI.ERROR:
                    (t = g.intl.formatToPlainString(f.default.YLvraS, {
                        premiumGroupProductName: d,
                    })),
                        (n = g.intl.format(f.default.BHxlIR, {
                            premiumGroupProductName: d,
                            onClick: () => {
                                (0, l.openUserSettings)(i.X.SUBSCRIPTIONS_PANEL, {
                                    section: m.nc_.SUBSCRIPTIONS,
                                });
                            },
                        }));
                    break;
                case p.xI.PENDING:
                default:
                    (t = g.intl.formatToPlainString(f.default["5uwv8J"], {
                        premiumGroupProductName: d,
                    })),
                        (n = g.intl.formatToPlainString(f.default["AmE0B/"], {
                            receiverName: e,
                        }));
            }
            return {
                message: o,
                header: t,
                body: n,
            };
        }
        {
            let e = (0, c.$3)(r),
                i = g.intl.format(f.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: d,
                    helpCenterLink: p.TE,
                });
            switch (u) {
                case p.xI.ACCEPTED:
                    (t = g.intl.string(f.default.ssge1y)),
                        (n = g.intl.formatToPlainString(f.default.fTAcw3, {
                            senderName: e,
                        }));
                    break;
                case p.xI.REMOVED:
                case p.xI.NOT_FOUND:
                case p.xI.ERROR:
                    (t = g.intl.formatToPlainString(f.default["AmLUw+"], {
                        premiumGroupProductName: d,
                    })),
                        (n = g.intl.formatToPlainString(f.default["7XAuyg"], {
                            premiumGroupProductName: d,
                        }));
                    break;
                case p.xI.PENDING:
                default:
                    (t = g.intl.string(f.default.ssge1y)),
                        (n = g.intl.formatToPlainString(f.default.MkcdX8, {
                            senderName: e,
                            premiumGroupProductName: d,
                        }));
            }
            return {
                message: i,
                header: t,
                body: n,
            };
        }
    },
    _ = () => {
        var e;
        let t = (0, u.A)({
                location: "PremiumGroupPurchase",
            }),
            n = (0, r.bG)([s.A], () => s.A.getPremiumSubscription()),
            i = (0, r.bG)([a.default], () => a.default.getCurrentUser());
        return (
            (null == i || !i.isPremiumWithFractionalPremiumOnly()) &&
            !!t &&
            (null == n || (d.BL.has(null != (e = n.premiumPlanIdFromItems) ? e : "") && !n.isPurchasedExternally))
        );
    },
    b = () => {
        let e = (0, u.A)({
                location: "PremiumGroupPurchase",
            }),
            t = _(),
            n = (0, r.bG)([a.default], () => a.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    A = () => {
        let e = b(),
            t = (0, r.bG)([a.default], () => a.default.getCurrentUser());
        return e && ((0, o.TW)(t) || !(0, o.mv)(t));
    };
