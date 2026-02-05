"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    a = n(989349),
    s = n.n(a),
    o = n(311907),
    l = n(506774),
    u = n(397927),
    c = n(384904),
    d = n(404374),
    _ = n(780964),
    f = n(840065),
    p = n(166403),
    h = n(927578),
    m = n(822123),
    g = n(652215),
    E = n(788868),
    A = n(985018),
    I = n(617536);
let T = "premiumRetentionEmojiPickerNotice",
    y = l.w.get(T),
    S = (e) => {
        let { closePopout: t, channel: n } = e,
            [a, S] = i.useState(!1),
            { subscription: v, hasFetchedSubscriptions: C } = (0, o.cf)([p.A], () => ({
                subscription: p.A.getPremiumSubscription(),
                hasFetchedSubscriptions: p.A.hasFetchedSubscriptions(),
            }));
        if (
            (i.useEffect(() => {
                C || (0, c.hP)();
            }, [C]),
            null == v || !(0, h.PK)(v.status) || a)
        )
            return null;
        let b = v.status === g.Dmq.PAST_DUE ? (0, h.ji)(v).expiresDate : s()(v.currentPeriodStart).add(E.ph),
            N = `${v.id}:${b.toISOString()}`;
        if (y === N) return null;
        let R =
            h.Ay.getPremiumType(v.planId) === E.PremiumTypes.TIER_0
                ? d.k0.PREMIUM_TIER_0
                : h.Ay.getPremiumType(v.planId) === E.PremiumTypes.TIER_1
                  ? d.k0.PREMIUM_TIER_1
                  : d.k0.PREMIUM_TIER_2;
        return (0, r.jsxs)("div", {
            className: I.g$,
            children: [
                (0, r.jsx)(u.tvc, { size: "md", className: I.lu, color: R }),
                (0, r.jsxs)("div", {
                    className: I.Xn,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            children: A.intl.format(A.t.bTMjiO, {
                                planName: h.Ay.getTierDisplayNameByPlanId(v.planId),
                                endsAt: b.toDate(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(u.MzZ, {
                                onClick: () => {
                                    (0, m.xf)(n),
                                        t(),
                                        (0, f.openUserSettings)(_.X.NITRO_PANEL, { section: g.nc_.PREMIUM });
                                },
                                children: A.intl.string(A.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(u.DUT, {
                    onClick: () => {
                        l.w.set(T, N), (y = N), S(!0);
                    },
                    children: (0, r.jsx)(u.PGe, { size: "md", color: "currentColor", className: I.YF }),
                }),
            ],
        });
    };
