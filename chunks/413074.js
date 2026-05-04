t.d(e, { A: () => M });
var s = t(627968);
t(64700);
var n = t(534514),
    r = t(17928),
    l = t(554146),
    c = t(331322),
    u = t(778712),
    o = t(834730),
    a = t(821609),
    d = t(403581),
    _ = t(408278),
    p = t(789645),
    I = t(379848),
    f = t(287809),
    S = t(927578);
let h = (0, t(945810).mj)({
    name: "2026-04-premium-group-gift-selection-upsell",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var k = t(286320),
    g = t(783420),
    m = t(224850),
    L = t(39423),
    T = t(788868),
    w = t(88001),
    C = t(49999),
    E = t(466919),
    A = t(375708),
    x = t(761479);
function M() {
    let i = (function (i) {
            let { location: e } = i;
            return h.useConfig({ location: e });
        })({ location: "gift_selection_modal" }),
        e = (0, L.O9)(),
        t = (0, k.b)().slice(0, 3),
        M = (0, r.bG)([f.default], () => f.default.getCurrentUser());
    return i && e
        ? (0, s.jsx)(I.Ay, {
              contentTypes: [l.M.PREMIUM_GROUP_GIFT_SELECTION_UPSELL],
              children: (i) => {
                  let { visibleContent: e, markAsDismissed: r } = i;
                  return null == e
                      ? null
                      : (0, s.jsxs)(c.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 24,
                            className: x.vK,
                            padding: 16,
                            fullWidth: !1,
                            children: [
                                (0, s.jsxs)(c.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 16,
                                    className: x.rf,
                                    fullWidth: !1,
                                    children: [
                                        t.length > 0 &&
                                            (0, s.jsx)(c.B, {
                                                direction: "horizontal",
                                                className: x.Gc,
                                                fullWidth: !1,
                                                gap: 0,
                                                children: t.map((i, e, t) =>
                                                    (0, s.jsx)(
                                                        m.n,
                                                        {
                                                            affinity: i,
                                                            applyMask: e !== t.length - 1,
                                                            size: u._3.SIZE_32,
                                                        },
                                                        i.id,
                                                    ),
                                                ),
                                            }),
                                        (0, s.jsxs)(c.B, {
                                            direction: "vertical",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, s.jsx)(n.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: A.intl.string(E.default["9nYcrx"]),
                                                }),
                                                (0, s.jsx)(o.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    children: A.intl.string(E.default["2MwL4Z"]),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)(c.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 12,
                                    className: x.o1,
                                    fullWidth: !1,
                                    children: [
                                        (0, s.jsx)(g.A, {
                                            subscriptionTier: T.pe.TIER_2,
                                            initialPlanId: T.gD.PREMIUM_GROUP_MONTH,
                                            children: (i) => {
                                                let { onClick: e } = i;
                                                return (0, s.jsx)(a.$, {
                                                    variant: "primary",
                                                    size: "sm",
                                                    icon: d.t,
                                                    text: (0, S.TW)(M)
                                                        ? A.intl.string(A.t.IJI7yk)
                                                        : A.intl.formatToPlainString(E.default.LwdrNi, {
                                                              premiumGroupProductName: (0, w.DP)(),
                                                          }),
                                                    onClick: e,
                                                });
                                            },
                                        }),
                                        (0, s.jsx)(_.K, {
                                            icon: p.P,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": A.intl.string(A.t.cpT0Cq),
                                            onClick: () => r(C.i.USER_DISMISS),
                                        }),
                                    ],
                                }),
                            ],
                        });
              },
          })
        : null;
}
