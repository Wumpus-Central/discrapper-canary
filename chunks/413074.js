e.d(t, { A: () => O });
var s = e(477900);
e(582128);
var n = e(297264),
    l = e(17928),
    r = e(554146),
    c = e(331322),
    a = e(778712),
    o = e(834730),
    u = e(821609),
    d = e(403581),
    p = e(408278),
    _ = e(789645),
    I = e(379848),
    f = e(287809),
    k = e(428262);
let h = (0, e(945810).mj)({
    name: "2026-04-premium-group-gift-selection-upsell",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var S = e(286320),
    g = e(579245),
    m = e(783420),
    L = e(862990),
    T = e(202541),
    C = e(88001),
    w = e(49999),
    E = e(466919),
    A = e(375708),
    x = e(421151);
function O() {
    let i = (function (i) {
            let { location: t } = i;
            return h.useConfig({ location: t });
        })({ location: "gift_selection_modal" }),
        t = (0, L.O9)(),
        e = (0, S.b)().slice(0, 3),
        O = (0, l.bG)([f.default], () => f.default.getCurrentUser());
    return i && t
        ? (0, s.jsx)(I.Ay, {
              contentTypes: [r.M.PREMIUM_GROUP_GIFT_SELECTION_UPSELL],
              children: (i) => {
                  let { visibleContent: t, markAsDismissed: l } = i;
                  return null == t
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
                                        e.length > 0 &&
                                            (0, s.jsx)(c.B, {
                                                direction: "horizontal",
                                                className: x.Gc,
                                                fullWidth: !1,
                                                gap: 0,
                                                children: e.map((i, t, e) =>
                                                    (0, s.jsx)(
                                                        g.n,
                                                        {
                                                            affinity: i,
                                                            applyMask: t !== e.length - 1,
                                                            size: a._3.SIZE_32,
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
                                        (0, s.jsx)(m.A, {
                                            subscriptionTier: T.pe.TIER_2,
                                            initialPlanId: T.gD.PREMIUM_GROUP_MONTH,
                                            children: (i) => {
                                                let { onClick: t } = i;
                                                return (0, s.jsx)(u.$, {
                                                    variant: "primary",
                                                    size: "sm",
                                                    icon: d.t,
                                                    text: (0, k.TW)(O)
                                                        ? A.intl.string(A.t.IJI7yk)
                                                        : A.intl.formatToPlainString(E.default.LwdrNi, {
                                                              premiumGroupProductName: (0, C.DP)(),
                                                          }),
                                                    onClick: t,
                                                });
                                            },
                                        }),
                                        (0, s.jsx)(p.K, {
                                            icon: _.P,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": A.intl.string(A.t.cpT0Cq),
                                            onClick: () => l(w.i.USER_DISMISS),
                                        }),
                                    ],
                                }),
                            ],
                        });
              },
          })
        : null;
}
