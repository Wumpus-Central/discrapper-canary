var i = n(477900),
    s = n(582128),
    l = n(536637),
    r = n.n(l),
    a = n(855986),
    o = n(506774),
    c = n(834730),
    u = n(403581),
    d = n(28863),
    m = n(939249),
    f = n(789645),
    E = n(669815),
    I = n(404374),
    h = n(780964),
    g = n(766075),
    A = n(166403),
    p = n(448645),
    _ = n(822123),
    N = n(652215),
    C = n(682901),
    y = n(792996),
    x = n(506150);
let j = "premiumRetentionEmojiPickerNotice",
    O = o.w.get(j);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { closePopout: t, channel: n } = e,
                [l, S] = s.useState(!1),
                { subscription: T, hasFetchedSubscriptions: b } = (0, a.cf)([A.A], () => ({
                    subscription: A.A.getPremiumSubscription(),
                    hasFetchedSubscriptions: A.A.hasFetchedSubscriptions(),
                }));
            if (
                (s.useEffect(() => {
                    b || (0, E.hP)();
                }, [b]),
                null == T || !(0, p.PK)(T.status) || l)
            )
                return null;
            let R = T.status === N.Dmq.PAST_DUE ? (0, p.ji)(T).expiresDate : r()(T.currentPeriodStart).add(30),
                v = `${T.id}:${R.toISOString()}`;
            if (O === v) return null;
            let P =
                p.Ay.getPremiumType(T.planId) === C.PremiumTypes.TIER_0
                    ? I.k0.PREMIUM_TIER_0
                    : p.Ay.getPremiumType(T.planId) === C.PremiumTypes.TIER_1
                      ? I.k0.PREMIUM_TIER_1
                      : I.k0.PREMIUM_TIER_2;
            return (0, i.jsxs)(c.E, {
                variant: "body-xs/medium",
                color: "text-default",
                className: x.g$,
                children: [
                    (0, i.jsx)(u.NitroWheelIcon, { size: "md", className: x.lu, color: P }),
                    (0, i.jsxs)("div", {
                        className: x.Xn,
                        children: [
                            (0, i.jsx)(c.E, {
                                variant: "body-xs/normal",
                                children: y.intl.format(y.t.bTMjiO, {
                                    planName: p.Ay.getTierDisplayNameByPlanId(T.planId),
                                    endsAt: R.toDate(),
                                }),
                            }),
                            (0, i.jsx)("div", {
                                children: (0, i.jsx)(d.Anchor, {
                                    onClick: () => {
                                        ((0, _.xf)(n), t(), (0, g.openUserSettings)(h.X.NITRO_PANEL));
                                    },
                                    children: y.intl.string(y.t.W3aavh),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(m.D, {
                        onClick: () => {
                            (o.w.set(j, v), (O = v), S(!0));
                        },
                        children: (0, i.jsx)(f.XSmallIcon, { size: "md", color: "currentColor", className: x.YF }),
                    }),
                ],
            });
        },
    },
);
