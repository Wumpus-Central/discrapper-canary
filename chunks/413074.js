"use strict";
i.d(t, { A: () => L });
var r = i(627968);
i(64700);
var n = i(534514),
    a = i(17928),
    s = i(554146),
    l = i(331322),
    c = i(778712),
    o = i(834730),
    u = i(821609),
    d = i(403581),
    _ = i(408278),
    f = i(789645),
    p = i(379848),
    m = i(287809),
    h = i(927578);
let b = (0, i(945810).mj)({
    name: "2026-04-premium-group-gift-selection-upsell",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var g = i(286320),
    I = i(783420),
    E = i(224850),
    A = i(612669),
    C = i(788868),
    v = i(88001),
    S = i(49999),
    x = i(466919),
    T = i(985018),
    R = i(761479);
function L() {
    let e = (function (e) {
            let { location: t } = e;
            return b.useConfig({ location: t });
        })({ location: "gift_selection_modal" }),
        t = (0, A.O9)(),
        i = (0, g.b)().slice(0, 3),
        L = (0, a.bG)([m.default], () => m.default.getCurrentUser());
    return e && t
        ? (0, r.jsx)(p.Ay, {
              contentTypes: [s.M.PREMIUM_GROUP_GIFT_SELECTION_UPSELL],
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return null == t
                      ? null
                      : (0, r.jsxs)(l.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 24,
                            className: R.vK,
                            padding: 16,
                            fullWidth: !1,
                            children: [
                                (0, r.jsxs)(l.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 16,
                                    className: R.rf,
                                    fullWidth: !1,
                                    children: [
                                        i.length > 0 &&
                                            (0, r.jsx)(l.B, {
                                                direction: "horizontal",
                                                className: R.Gc,
                                                fullWidth: !1,
                                                children: i.map((e, t, i) =>
                                                    (0, r.jsx)(
                                                        E.n,
                                                        {
                                                            affinity: e,
                                                            applyMask: t !== i.length - 1,
                                                            size: c._3.SIZE_32,
                                                        },
                                                        e.id,
                                                    ),
                                                ),
                                            }),
                                        (0, r.jsxs)(l.B, {
                                            direction: "vertical",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, r.jsx)(n.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: T.intl.string(x.default["9nYcrx"]),
                                                }),
                                                (0, r.jsx)(o.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    children: T.intl.string(x.default["2MwL4Z"]),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)(l.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 12,
                                    className: R.o1,
                                    fullWidth: !1,
                                    children: [
                                        (0, r.jsx)(I.A, {
                                            subscriptionTier: C.pe.TIER_2,
                                            initialPlanId: C.gD.PREMIUM_GROUP_MONTH,
                                            children: (e) => {
                                                let { onClick: t } = e;
                                                return (0, r.jsx)(u.$, {
                                                    variant: "primary",
                                                    size: "sm",
                                                    icon: d.t,
                                                    text: (0, h.TW)(L)
                                                        ? T.intl.string(T.t.IJI7yk)
                                                        : T.intl.formatToPlainString(x.default.LwdrNi, {
                                                              premiumGroupProductName: (0, v.DP)(),
                                                          }),
                                                    onClick: t,
                                                });
                                            },
                                        }),
                                        (0, r.jsx)(_.K, {
                                            icon: f.P,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": T.intl.string(T.t.cpT0Cq),
                                            onClick: () => a(S.i.USER_DISMISS),
                                        }),
                                    ],
                                }),
                            ],
                        });
              },
          })
        : null;
}
