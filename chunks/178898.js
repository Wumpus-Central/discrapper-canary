"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(989349),
    a = n.n(s),
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
    E = n(652215),
    g = n(788868),
    A = n(985018),
    I = n(617536);
let T = "premiumRetentionEmojiPickerNotice",
    S = l.w.get(T),
    y = (e) => {
        let { closePopout: t, channel: n } = e,
            [s, y] = i.useState(!1),
            { subscription: v, hasFetchedSubscriptions: N } = (0, o.cf)([p.A], () => ({
                subscription: p.A.getPremiumSubscription(),
                hasFetchedSubscriptions: p.A.hasFetchedSubscriptions(),
            }));
        if (
            (i.useEffect(() => {
                N || (0, c.hP)();
            }, [N]),
            null == v || !(0, h.PK)(v.status) || s)
        )
            return null;
        let C = v.status === E.Dmq.PAST_DUE ? (0, h.ji)(v).expiresDate : a()(v.currentPeriodStart).add(g.ph),
            R = `${v.id}:${C.toISOString()}`;
        if (S === R) return null;
        let O =
            h.Ay.getPremiumType(v.planId) === g.PremiumTypes.TIER_0
                ? d.k0.PREMIUM_TIER_0
                : h.Ay.getPremiumType(v.planId) === g.PremiumTypes.TIER_1
                  ? d.k0.PREMIUM_TIER_1
                  : d.k0.PREMIUM_TIER_2;
        return (0, r.jsxs)("div", {
            className: I.g$,
            children: [
                (0, r.jsx)(u.tvc, { size: "md", className: I.lu, color: O }),
                (0, r.jsxs)("div", {
                    className: I.Xn,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            children: A.intl.format(A.t.bTMjiO, {
                                planName: h.Ay.getTierDisplayNameByPlanId(v.planId),
                                endsAt: C.toDate(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(u.MzZ, {
                                onClick: () => {
                                    (0, m.xf)(n), t(), (0, f.openUserSettings)(_.X.NITRO_PANEL);
                                },
                                children: A.intl.string(A.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(u.DUT, {
                    onClick: () => {
                        l.w.set(T, R), (S = R), y(!0);
                    },
                    children: (0, r.jsx)(u.PGe, { size: "md", color: "currentColor", className: I.YF }),
                }),
            ],
        });
    };
