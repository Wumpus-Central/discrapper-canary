n.d(t, { j: () => G });
var l = n(627968),
    r = n(64700),
    i = n(17928),
    a = n(20742),
    s = n(430993),
    o = n(331322),
    u = n(71804),
    c = n(558620),
    d = n(211159),
    p = n(503698),
    m = n.n(p),
    h = n(575593),
    A = n(778712),
    E = n(187322),
    C = n(890856),
    y = n(947641),
    _ = n(661531),
    P = n(534514),
    S = n(834730),
    I = n(713517),
    T = n(674658),
    f = n(898461),
    N = n(837015),
    v = n(929283),
    g = n(761365),
    x = n(375708),
    R = n(267861);
let M = (e) => {
    let t,
        n,
        { skuId: i, user: a, claimed: s, onSelect: o, selectedSkuId: u } = e,
        [c, d] = r.useState(null),
        p = r.useCallback((e) => {
            d(e);
        }, []),
        M = r.useMemo(() => ({ current: c }), [c]),
        { isHoveringOrFocusing: b } = (0, I.A)(M),
        L = !s && b,
        { product: j } = (0, T.q)(i);
    if (null == j) return null;
    let O = j.items[0];
    return null == O
        ? null
        : ((0, f.T)(O)
              ? ((n = h.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(v.i, { item: O, user: a, isHighlighted: L, avatarSize: A._3.SIZE_96 })))
              : (0, N.F)(O) &&
                ((n = h.R.NAMEPLATE),
                (t = (0, l.jsx)(g.A, { nameplate: O, user: a, isHighlighted: L, size: "small" }))),
          (0, l.jsx)(E.vN, {
              children: (0, l.jsxs)(C.s, {
                  ref: p,
                  "aria-label": j.name ?? "",
                  onClick: () => {
                      null == i || null == o || s || o(i);
                  },
                  className: m()(R._x, { [R.Vp]: !s, [R.mr]: L, [R.md]: u === i }),
                  children: [
                      (0, l.jsx)("div", {
                          className: m()(R.VH, { [R._Q]: n === h.R.AVATAR_DECORATION, [R.M4]: n === h.R.NAMEPLATE }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: m()(R.i1, { [R.Sf]: s }), children: t }),
                                            s &&
                                                (0, l.jsx)(y.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: _.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: R.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: R.tZ,
                          children: [
                              (0, l.jsx)(P.D, { variant: "heading-md/extrabold", children: j.name }),
                              (0, l.jsx)(S.E, {
                                  variant: "text-sm/normal",
                                  children: s ? x.intl.string(x.t["6cfuDj"]) : x.intl.string(x.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
var b = n(374200),
    L = n(91053),
    j = n(287809),
    O = n(937008),
    w = n(166532),
    D = n(482132),
    U = n(615310),
    k = n(328232);
function G(e) {
    let { handleStepChange: t } = e,
        n = (0, d.t4)((e) => e.selectedSkuId),
        p = (0, c.A)(),
        m = (0, U.bB)(),
        { setSelectedGiftingPromotionReward: h, selectedGiftingPromotionReward: A, claimableRewards: E } = (0, O.Pv)(),
        C = (0, i.bG)([j.default], () => j.default.getCurrentUser()),
        y = (0, i.yK)([b.A], () => b.A.getGiftPromotionRewardSkuIds()),
        _ = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(E, A),
        [P, S] = r.useState(_),
        [I, T] = r.useState(!1);
    r.useEffect(() => {
        I || null != A || null == _ || (h(_), S(_));
    }, [_, I, A, h]);
    let f = { selectedPlan: p, selectedSkuId: n, step: m };
    if (null == p) throw new u.v({ message: "Expected plan to be selected", extraSentryInformation: f });
    if (null == n) throw new u.v({ message: "Expected selectedSkuId", extraSentryInformation: f });
    if (null == m) throw new u.v({ message: "Step should be set", extraSentryInformation: f });
    let N = r.useMemo(() => null != P && (E ?? []).includes(P), [P, E]),
        v = r.useMemo(() => 0 === y.length || null == P || !N, [y, P, N]);
    r.useEffect(() => {
        if (0 === y.length) {
            S(void 0), h(void 0);
            return;
        }
        (null != P && N && y.includes(P)) || null == P || (S(void 0), h(void 0));
    }, [y, N, P, h]);
    let g = (e) => {
            h(e), S(e), T(!0);
        },
        R = y.map((e) =>
            (0, l.jsx)(
                M,
                { skuId: e, claimed: null != E && !E.includes(e), user: C, onSelect: g, selectedSkuId: P },
                e,
            ),
        ),
        G = (0, l.jsx)(D.UX, {
            children: (0, l.jsx)(L.Z, {
                onStepChange: t,
                onBackClick: () => t(w.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [p.id],
                selectedPlanId: p.id,
                isNextDisabled: v,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(a.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: x.intl.string(x.t.OEtqpm),
                subtitle: x.intl.string(x.t.h2nMp0),
            }),
            (0, l.jsx)(s.c, {
                children: (0, l.jsx)(o.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: k.Dq, children: R }),
                }),
            }),
            G,
        ],
    });
}
