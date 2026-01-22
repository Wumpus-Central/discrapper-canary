n.d(t, {
    QL: () => b,
    uG: () => y,
    x9: () => E,
    xf: () => g,
});
var r = n(442837),
    i = n(313789),
    a = n(518596),
    o = n(594174),
    s = n(78839),
    l = n(74538),
    c = n(51144),
    u = n(241986),
    d = n(474936),
    f = n(282793),
    p = n(981631),
    _ = n(353149),
    h = n(388032);
let m = (e, t) => {
        var n;
        if (null == t) return null;
        let r = null == (n = t.recipients) ? void 0 : n.find((t) => t !== e.id),
            i = o.default.getUser(r);
        return null == i ? null : (0, c.XM)(i);
    },
    g = (e) => {
        let t,
            n,
            { sender: r, channel: o, isSender: s, inviteState: l } = e,
            u = (0, f.sO)();
        if (s) {
            let e = m(r, o);
            if (null == e) return null;
            let s = h.intl.format(_.default.MkcFjx, {
                receiverName: e,
                premiumGroupProductName: u,
            });
            switch (l) {
                case f.bZ.ACCEPTED:
                    (t = h.intl.formatToPlainString(_.default["5uwv8J"], { premiumGroupProductName: u })),
                        (n = h.intl.formatToPlainString(_.default["W7e/z1"], { receiverName: e }));
                    break;
                case f.bZ.REMOVED:
                case f.bZ.NOT_FOUND:
                case f.bZ.ERROR:
                    (t = h.intl.formatToPlainString(_.default.YLvraS, { premiumGroupProductName: u })),
                        (n = h.intl.format(_.default.BHxlIR, {
                            premiumGroupProductName: u,
                            onClick: () => {
                                (0, a.openUserSettings)(i.n.SUBSCRIPTIONS_PANEL, { section: p.oAB.SUBSCRIPTIONS });
                            },
                        }));
                    break;
                case f.bZ.PENDING:
                default:
                    (t = h.intl.formatToPlainString(_.default["5uwv8J"], { premiumGroupProductName: u })),
                        (n = h.intl.formatToPlainString(_.default["AmE0B/"], { receiverName: e }));
            }
            return {
                message: s,
                header: t,
                body: n,
            };
        } else {
            let e = (0, c.XM)(r),
                i = h.intl.format(_.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: u,
                    helpCenterLink: f.j3,
                });
            switch (l) {
                case f.bZ.ACCEPTED:
                    (t = h.intl.string(_.default.ssge1y)),
                        (n = h.intl.formatToPlainString(_.default.fTAcw3, { senderName: e }));
                    break;
                case f.bZ.REMOVED:
                case f.bZ.NOT_FOUND:
                case f.bZ.ERROR:
                    (t = h.intl.formatToPlainString(_.default["AmLUw+"], { premiumGroupProductName: u })),
                        (n = h.intl.formatToPlainString(_.default["7XAuyg"], { premiumGroupProductName: u }));
                    break;
                case f.bZ.PENDING:
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
        let t = (0, u.Z)({ location: "PremiumGroupPurchase" }),
            n = (0, r.e7)([s.Z], () => s.Z.getPremiumSubscription()),
            i = (0, r.e7)([o.default], () => o.default.getCurrentUser());
        return (
            (null == i || !i.isPremiumWithFractionalPremiumOnly()) &&
            !!t &&
            (null == n || (d.No.has(null != (e = n.premiumPlanIdFromItems) ? e : "") && !n.isPurchasedExternally))
        );
    },
    b = () => {
        let e = (0, u.Z)({ location: "PremiumGroupPurchase" }),
            t = E(),
            n = (0, r.e7)([o.default], () => o.default.getCurrentUser());
        return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
    },
    y = () => {
        let e = b(),
            t = (0, r.e7)([o.default], () => o.default.getCurrentUser());
        return e && ((0, l.I5)(t) || !(0, l.EO)(t));
    };
