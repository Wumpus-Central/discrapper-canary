"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    s = n(989349),
    a = n.n(s),
    o = n(311907),
    l = n(506774),
    u = n(403581),
    c = n(834730),
    d = n(349288),
    _ = n(939249),
    f = n(789645),
    p = n(323082),
    h = n(404374),
    E = n(780964),
    m = n(858897),
    g = n(166403),
    A = n(927578),
    I = n(822123),
    T = n(652215),
    S = n(788868),
    y = n(985018),
    N = n(542863);
let v = "premiumRetentionEmojiPickerNotice",
    C = l.w.get(v),
    O = (e) => {
        let { closePopout: t, channel: n } = e,
            [s, O] = i.useState(!1),
            { subscription: R, hasFetchedSubscriptions: b } = (0, o.cf)([g.A], () => ({
                subscription: g.A.getPremiumSubscription(),
                hasFetchedSubscriptions: g.A.hasFetchedSubscriptions(),
            }));
        if (
            (i.useEffect(() => {
                b || (0, p.hP)();
            }, [b]),
            null == R || !(0, A.PK)(R.status) || s)
        )
            return null;
        let D = R.status === T.Dmq.PAST_DUE ? (0, A.ji)(R).expiresDate : a()(R.currentPeriodStart).add(S.ph),
            L = `${R.id}:${D.toISOString()}`;
        if (C === L) return null;
        let w =
            A.Ay.getPremiumType(R.planId) === S.PremiumTypes.TIER_0
                ? h.k0.PREMIUM_TIER_0
                : A.Ay.getPremiumType(R.planId) === S.PremiumTypes.TIER_1
                  ? h.k0.PREMIUM_TIER_1
                  : h.k0.PREMIUM_TIER_2;
        return (0, r.jsxs)("div", {
            className: N.g$,
            children: [
                (0, r.jsx)(u.t, { size: "md", className: N.lu, color: w }),
                (0, r.jsxs)("div", {
                    className: N.Xn,
                    children: [
                        (0, r.jsx)(c.E, {
                            variant: "text-xs/normal",
                            children: y.intl.format(y.t.bTMjiO, {
                                planName: A.Ay.getTierDisplayNameByPlanId(R.planId),
                                endsAt: D.toDate(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(d.Anchor, {
                                onClick: () => {
                                    (0, I.xf)(n), t(), (0, m.openUserSettings)(E.X.NITRO_PANEL);
                                },
                                children: y.intl.string(y.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(_.D, {
                    onClick: () => {
                        l.w.set(v, L), (C = L), O(!0);
                    },
                    children: (0, r.jsx)(f.P, { size: "md", color: "currentColor", className: N.YF }),
                }),
            ],
        });
    };
