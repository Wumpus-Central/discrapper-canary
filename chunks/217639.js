"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(827734),
    o = n(397927),
    l = n(953143),
    u = n(863291),
    c = n(302065),
    d = n(473145),
    _ = n(210273),
    f = n(508155),
    p = n(652215),
    h = n(985018),
    m = n(811027);
let g = function (e) {
    let { guild: t } = e;
    return (0, r.jsx)("div", {
        className: m.uE,
        children: f.t.map((e) =>
            (0, r.jsxs)(
                "div",
                {
                    className: m.$Y,
                    children: [
                        e.tier === p.TVA.TIER_3 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", { className: a()(m.Bt, m.gP) }),
                                    (0, r.jsx)("div", { className: a()(m.Bt, m.zV) }),
                                    (0, r.jsxs)("div", {
                                        className: a()(m.d0, m.OP),
                                        children: [
                                            (0, r.jsx)(c.A, { className: m.qZ }),
                                            (0, r.jsx)(c.A, { className: m.xB }),
                                            (0, r.jsx)(u.A, { className: m.qi }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: a()(m.d0, m.FV),
                                        children: (0, r.jsx)(c.A, { className: m.qZ }),
                                    }),
                                ],
                            }),
                        e.tier === t.premiumTier &&
                            (0, r.jsx)(o.Text, {
                                className: m._E,
                                tag: "div",
                                variant: "text-xs/semibold",
                                color: "always-white",
                                children: h.intl.string(h.t["9JbE3J"]),
                            }),
                        (0, r.jsxs)("div", {
                            className: m.Oj,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    className: m.Xk,
                                    variant: "heading-xxl/semibold",
                                    color: "always-white",
                                    children: (0, d.gb)(e.tier, { useLevels: !1 }),
                                }),
                                (0, r.jsx)(o.Text, {
                                    className: m.$T,
                                    variant: "text-md/normal",
                                    color: "always-white",
                                    children: h.intl.format(h.t.vbAsA7, { numBoostsRequired: p.M2T[e.tier] }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("ul", {
                            className: m.X8,
                            children: e.perks.map((e, t) => {
                                let n = (0, _.X)(e.perkIcon);
                                return null == e.predicate || e.predicate()
                                    ? (0, r.jsxs)(
                                          "li",
                                          {
                                              className: m.de,
                                              children: [
                                                  (0, r.jsxs)(o.Text, {
                                                      className: m.kt,
                                                      variant: "text-md/normal",
                                                      color: "always-white",
                                                      children: [
                                                          (0, r.jsx)(n, { className: m.Kd, color: s.A.colors.WHITE }),
                                                          e.getCopy(),
                                                      ],
                                                  }),
                                                  e.isNew
                                                      ? (0, r.jsx)(l.A, {
                                                            className: m.WN,
                                                            forceUseColorForSparkles: !0,
                                                            shouldInheritBackgroundColor: !0,
                                                            shouldInheritTextColor: !0,
                                                        })
                                                      : null,
                                              ],
                                          },
                                          t,
                                      )
                                    : null;
                            }),
                        }),
                    ],
                },
                e.tier,
            ),
        ),
    });
};
