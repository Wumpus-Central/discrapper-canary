"use strict";
n.d(t, { j: () => F });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(20742),
    o = n(430993),
    l = n(331322),
    u = n(71804),
    c = n(558620),
    d = n(211159),
    _ = n(503698),
    h = n.n(_),
    f = n(575593),
    p = n(778712),
    E = n(187322),
    m = n(890856),
    g = n(947641),
    A = n(661531),
    I = n(534514),
    T = n(834730),
    S = n(713517),
    y = n(674658),
    C = n(898461),
    N = n(837015),
    v = n(929283),
    R = n(761365),
    O = n(375708),
    b = n(267861);
let D = (e) => {
    let t,
        n,
        { skuId: s, user: a, claimed: o, onSelect: l, selectedSkuId: u } = e,
        [c, d] = r.useState(null),
        _ = r.useCallback((e) => {
            d(e);
        }, []),
        D = r.useMemo(() => ({ current: c }), [c]),
        { isHoveringOrFocusing: L } = (0, S.A)(D),
        w = !o && L,
        { product: M } = (0, y.q)(s);
    if (null == M) return null;
    let P = M.items[0];
    return null == P
        ? null
        : ((0, C.T)(P)
              ? ((n = f.R.AVATAR_DECORATION),
                (t = (0, i.jsx)(v.i, { item: P, user: a, isHighlighted: w, avatarSize: p._3.SIZE_96 })))
              : (0, N.F)(P) &&
                ((n = f.R.NAMEPLATE),
                (t = (0, i.jsx)(R.A, { nameplate: P, user: a, isHighlighted: w, size: "small" }))),
          (0, i.jsx)(E.vN, {
              children: (0, i.jsxs)(m.s, {
                  ref: _,
                  "aria-label": M.name ?? "",
                  onClick: () => {
                      null == s || null == l || o || l(s);
                  },
                  className: h()(b._x, { [b.Vp]: !o, [b.mr]: w, [b.md]: u === s }),
                  children: [
                      (0, i.jsx)("div", {
                          className: h()(b.VH, { [b._Q]: n === f.R.AVATAR_DECORATION, [b.M4]: n === f.R.NAMEPLATE }),
                          children:
                              null != t
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", { className: h()(b.i1, { [b.Sf]: o }), children: t }),
                                            o &&
                                                (0, i.jsx)(g.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: A.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: b.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, i.jsxs)("div", {
                          className: b.tZ,
                          children: [
                              (0, i.jsx)(I.D, { variant: "heading-md/extrabold", children: M.name }),
                              (0, i.jsx)(T.E, {
                                  variant: "text-sm/normal",
                                  children: o ? O.intl.string(O.t["6cfuDj"]) : O.intl.string(O.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
var L = n(374200),
    w = n(91053),
    M = n(287809),
    P = n(937008),
    x = n(166532),
    k = n(482132),
    U = n(615310),
    G = n(328232);
function F(e) {
    let { handleStepChange: t } = e,
        n = (0, d.t4)((e) => e.selectedSkuId),
        _ = (0, c.A)(),
        h = (0, U.bB)(),
        { setSelectedGiftingPromotionReward: f, selectedGiftingPromotionReward: p, claimableRewards: E } = (0, P.Pv)(),
        m = (0, s.bG)([M.default], () => M.default.getCurrentUser()),
        g = (0, s.yK)([L.A], () => L.A.getGiftPromotionRewardSkuIds()),
        A = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(E, p),
        [I, T] = r.useState(A),
        [S, y] = r.useState(!1);
    r.useEffect(() => {
        S || null != p || null == A || (f(A), T(A));
    }, [A, S, p, f]);
    let C = { selectedPlan: _, selectedSkuId: n, step: h };
    if (null == _) throw new u.v({ message: "Expected plan to be selected", extraSentryInformation: C });
    if (null == n) throw new u.v({ message: "Expected selectedSkuId", extraSentryInformation: C });
    if (null == h) throw new u.v({ message: "Step should be set", extraSentryInformation: C });
    let N = r.useMemo(() => null != I && (E ?? []).includes(I), [I, E]),
        v = r.useMemo(() => 0 === g.length || null == I || !N, [g, I, N]);
    r.useEffect(() => {
        if (0 === g.length) {
            T(void 0), f(void 0);
            return;
        }
        (null != I && N && g.includes(I)) || null == I || (T(void 0), f(void 0));
    }, [g, N, I, f]);
    let R = (e) => {
            f(e), T(e), y(!0);
        },
        b = g.map((e) =>
            (0, i.jsx)(
                D,
                { skuId: e, claimed: null != E && !E.includes(e), user: m, onSelect: R, selectedSkuId: I },
                e,
            ),
        ),
        F = (0, i.jsx)(k.UX, {
            children: (0, i.jsx)(w.Z, {
                onStepChange: t,
                onBackClick: () => t(x.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [_.id],
                selectedPlanId: _.id,
                isNextDisabled: v,
            }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: O.intl.string(O.t.OEtqpm),
                subtitle: O.intl.string(O.t.h2nMp0),
            }),
            (0, i.jsx)(o.c, {
                children: (0, i.jsx)(l.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)("div", { className: G.Dq, children: b }),
                }),
            }),
            F,
        ],
    });
}
