n.d(t, {
    A: () => v,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(989349),
    s = n.n(a),
    o = n(311907),
    l = n(506774),
    c = n(397927),
    u = n(384904),
    d = n(404374),
    f = n(780964),
    p = n(840065),
    _ = n(166403),
    h = n(927578),
    m = n(822123),
    g = n(652215),
    E = n(788868),
    b = n(985018),
    y = n(617536);
let O = "premiumRetentionEmojiPickerNotice",
    A = l.w.get(O),
    v = (e) => {
        let { closePopout: t, channel: n } = e,
            [a, v] = i.useState(!1),
            { subscription: S, hasFetchedSubscriptions: I } = (0, o.cf)([_.A], () => ({
                subscription: _.A.getPremiumSubscription(),
                hasFetchedSubscriptions: _.A.hasFetchedSubscriptions(),
            }));
        if (
            (i.useEffect(() => {
                I || (0, u.hP)();
            }, [I]),
            null == S || !(0, h.PK)(S.status) || a)
        )
            return null;
        let T = S.status === g.Dmq.PAST_DUE ? (0, h.ji)(S).expiresDate : s()(S.currentPeriodStart).add(E.ph),
            C = "".concat(S.id, ":").concat(T.toISOString());
        if (A === C) return null;
        let N =
            h.Ay.getPremiumType(S.planId) === E.PremiumTypes.TIER_0
                ? d.k0.PREMIUM_TIER_0
                : h.Ay.getPremiumType(S.planId) === E.PremiumTypes.TIER_1
                  ? d.k0.PREMIUM_TIER_1
                  : d.k0.PREMIUM_TIER_2;
        return (0, r.jsxs)("div", {
            className: y.g$,
            children: [
                (0, r.jsx)(c.tvc, {
                    size: "md",
                    className: y.lu,
                    color: N,
                }),
                (0, r.jsxs)("div", {
                    className: y.Xn,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            children: b.intl.format(b.t.bTMjiO, {
                                planName: h.Ay.getTierDisplayNameByPlanId(S.planId),
                                endsAt: T.toDate(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(c.MzZ, {
                                onClick: () => {
                                    (0, m.xf)(n),
                                        t(),
                                        (0, p.openUserSettings)(f.X.NITRO_PANEL, {
                                            section: g.nc_.PREMIUM,
                                        });
                                },
                                children: b.intl.string(b.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(c.DUT, {
                    onClick: () => {
                        l.w.set(O, C), (A = C), v(!0);
                    },
                    children: (0, r.jsx)(c.PGe, {
                        size: "md",
                        color: "currentColor",
                        className: y.YF,
                    }),
                }),
            ],
        });
    };
