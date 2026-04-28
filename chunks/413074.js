"use strict";
r.d(t, { A: () => R });
var i = r(627968);
r(64700);
var n = r(534514),
    a = r(17928),
    s = r(554146),
    l = r(331322),
    c = r(778712),
    o = r(834730),
    u = r(821609),
    d = r(403581),
    _ = r(408278),
    f = r(789645),
    p = r(379848),
    m = r(287809),
    h = r(927578);
let b = (0, r(945810).mj)({
    name: "2026-04-premium-group-gift-selection-upsell",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var g = r(286320),
    I = r(783420),
    A = r(224850),
    E = r(612669),
    v = r(788868),
    C = r(88001),
    S = r(49999),
    x = r(466919),
    T = r(985018),
    y = r(761479);
function R() {
    let e = (function (e) {
            let { location: t } = e;
            return b.useConfig({ location: t });
        })({ location: "gift_selection_modal" }),
        t = (0, E.O9)(),
        r = (0, g.b)().slice(0, 3),
        R = (0, a.bG)([m.default], () => m.default.getCurrentUser());
    return e && t
        ? (0, i.jsx)(p.Ay, {
              contentTypes: [s.M.PREMIUM_GROUP_GIFT_SELECTION_UPSELL],
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return null == t
                      ? null
                      : (0, i.jsxs)(l.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 24,
                            className: y.vK,
                            padding: 16,
                            fullWidth: !1,
                            children: [
                                (0, i.jsxs)(l.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 16,
                                    className: y.rf,
                                    fullWidth: !1,
                                    children: [
                                        r.length > 0 &&
                                            (0, i.jsx)(l.B, {
                                                direction: "horizontal",
                                                className: y.Gc,
                                                fullWidth: !1,
                                                gap: 0,
                                                children: r.map((e, t, r) =>
                                                    (0, i.jsx)(
                                                        A.n,
                                                        {
                                                            affinity: e,
                                                            applyMask: t !== r.length - 1,
                                                            size: c._3.SIZE_32,
                                                        },
                                                        e.id,
                                                    ),
                                                ),
                                            }),
                                        (0, i.jsxs)(l.B, {
                                            direction: "vertical",
                                            gap: 4,
                                            fullWidth: !1,
                                            children: [
                                                (0, i.jsx)(n.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: T.intl.string(x.default["9nYcrx"]),
                                                }),
                                                (0, i.jsx)(o.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-default",
                                                    children: T.intl.string(x.default["2MwL4Z"]),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(l.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 12,
                                    className: y.o1,
                                    fullWidth: !1,
                                    children: [
                                        (0, i.jsx)(I.A, {
                                            subscriptionTier: v.pe.TIER_2,
                                            initialPlanId: v.gD.PREMIUM_GROUP_MONTH,
                                            children: (e) => {
                                                let { onClick: t } = e;
                                                return (0, i.jsx)(u.$, {
                                                    variant: "primary",
                                                    size: "sm",
                                                    icon: d.t,
                                                    text: (0, h.TW)(R)
                                                        ? T.intl.string(T.t.IJI7yk)
                                                        : T.intl.formatToPlainString(x.default.LwdrNi, {
                                                              premiumGroupProductName: (0, C.DP)(),
                                                          }),
                                                    onClick: t,
                                                });
                                            },
                                        }),
                                        (0, i.jsx)(_.K, {
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
