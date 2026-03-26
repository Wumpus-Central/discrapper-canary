t.d(n, { j: () => h });
var l = t(627968),
    i = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(311907),
    o = t(732955),
    u = t(397927),
    d = t(447784),
    c = t(68545),
    p = t(412260),
    m = t(91053),
    E = t(287809),
    _ = t(937008),
    x = t(156312),
    S = t(166532),
    P = t(482132),
    T = t(985018),
    I = t(706360);
function h(e) {
    let { handleStepChange: n } = e,
        { selectedPlan: t, selectedSkuId: r, step: h } = (0, x.P5)(),
        { setSelectedGiftingPromotionReward: g, selectedGiftingPromotionReward: A, claimableRewards: f } = (0, _.Pv)(),
        j = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        R = (0, a.yK)([p.A], () => p.A.getGiftPromotionRewardSkuIds()),
        M = (0, c.U)(f, A),
        [C, y] = i.useState(M),
        [N, O] = i.useState(!1);
    i.useEffect(() => {
        N || null != A || null == M || (g(M), y(M));
    }, [M, N, A, g]),
        s()(null != t, "Expected plan to selected"),
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
                onStepChange: n,
                onBackClick: () => n(S.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [t.id],
                selectedPlanId: t.id,
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
