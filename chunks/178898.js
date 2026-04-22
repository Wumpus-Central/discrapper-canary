"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(989349),
    r = n.n(s),
    a = n(311907),
    o = n(506774),
    c = n(403581),
    u = n(834730),
    d = n(349288),
    h = n(939249),
    m = n(789645),
    p = n(323082),
    f = n(404374),
    g = n(780964),
    _ = n(858897),
    x = n(166403),
    A = n(927578),
    C = n(822123),
    E = n(652215),
    I = n(788868),
    v = n(985018),
    y = n(542863);
let S = "premiumRetentionEmojiPickerNotice",
    b = o.w.get(S),
    N = (e) => {
        let { closePopout: t, channel: n } = e,
            [s, N] = l.useState(!1),
            { subscription: T, hasFetchedSubscriptions: j } = (0, a.cf)([x.A], () => ({
                subscription: x.A.getPremiumSubscription(),
                hasFetchedSubscriptions: x.A.hasFetchedSubscriptions(),
            }));
        if (
            (l.useEffect(() => {
                j || (0, p.hP)();
            }, [j]),
            null == T || !(0, A.PK)(T.status) || s)
        )
            return null;
        let R = T.status === E.Dmq.PAST_DUE ? (0, A.ji)(T).expiresDate : r()(T.currentPeriodStart).add(I.ph),
            w = `${T.id}:${R.toISOString()}`;
        if (b === w) return null;
        let L =
            A.Ay.getPremiumType(T.planId) === I.PremiumTypes.TIER_0
                ? f.k0.PREMIUM_TIER_0
                : A.Ay.getPremiumType(T.planId) === I.PremiumTypes.TIER_1
                  ? f.k0.PREMIUM_TIER_1
                  : f.k0.PREMIUM_TIER_2;
        return (0, i.jsxs)("div", {
            className: y.g$,
            children: [
                (0, i.jsx)(c.t, { size: "md", className: y.lu, color: L }),
                (0, i.jsxs)("div", {
                    className: y.Xn,
                    children: [
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/normal",
                            children: v.intl.format(v.t.bTMjiO, {
                                planName: A.Ay.getTierDisplayNameByPlanId(T.planId),
                                endsAt: R.toDate(),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsx)(d.Anchor, {
                                onClick: () => {
                                    (0, C.xf)(n), t(), (0, _.openUserSettings)(g.X.NITRO_PANEL);
                                },
                                children: v.intl.string(v.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(h.D, {
                    onClick: () => {
                        o.w.set(S, w), (b = w), N(!0);
                    },
                    children: (0, i.jsx)(m.P, { size: "md", color: "currentColor", className: y.YF }),
                }),
            ],
        });
    };
