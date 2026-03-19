n.d(t, { j: () => h });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(311907),
    o = n(732955),
    u = n(397927),
    d = n(447784),
    c = n(68545),
    p = n(412260),
    m = n(91053),
    E = n(287809),
    _ = n(937008),
    x = n(156312),
    S = n(166532),
    P = n(482132),
    T = n(985018),
    I = n(606773);
function h(e) {
    let { handleStepChange: t } = e,
        { selectedPlan: n, selectedSkuId: r, step: h } = (0, x.P5)(),
        { setSelectedGiftingPromotionReward: g, selectedGiftingPromotionReward: A, claimableRewards: f } = (0, _.Pv)(),
        j = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        R = (0, a.yK)([p.A], () => p.A.getGiftPromotionRewardSkuIds()),
        M = (0, c.U)(f, A),
        [C, y] = i.useState(M),
        [N, O] = i.useState(!1);
    i.useEffect(() => {
        N || null != A || null == M || (g(M), y(M));
    }, [M, N, A, g]),
        s()(null != n, "Expected plan to selected"),
        s()(null != r, "Expected selectedSkuId"),
        s()(null != h, "Step should be set");
    let v = i.useMemo(() => null != C && (f ?? []).includes(C), [C, f]),
        b = i.useMemo(() => 0 === R.length || null == C || !v, [R, C, v]);
    i.useEffect(() => {
        if (0 === R.length) {
            y(void 0), g(void 0);
            return;
        }
        (null != C && v && R.includes(C)) || null == C || (y(void 0), g(void 0));
    }, [R, v, C, g]);
    let k = (e) => {
            g(e), y(e), O(!0);
        },
        w = R.map((e) =>
            (0, l.jsx)(
                d.k,
                { skuId: e, claimed: null != f && !f.includes(e), user: j, onSelect: k, selectedSkuId: C },
                e,
            ),
        ),
        U = (0, l.jsx)(P.UX, {
            children: (0, l.jsx)(m.Z, {
                onStepChange: t,
                onBackClick: () => t(S.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [n.id],
                selectedPlanId: n.id,
                isNextDisabled: b,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.rQ0, {
                titleTextVariant: "heading-lg/semibold",
                title: T.intl.string(T.t.OEtqpm),
                subtitle: T.intl.string(T.t.h2nMp0),
            }),
            (0, l.jsx)(o.cwr, {
                children: (0, l.jsx)(u.BJc, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: I.Dq, children: w }),
                }),
            }),
            U,
        ],
    });
}
