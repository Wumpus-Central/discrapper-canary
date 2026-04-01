t.d(n, { j: () => g });
var i = t(627968),
    l = t(64700),
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
    S = t(156312),
    x = t(166532),
    P = t(482132),
    T = t(615310),
    I = t(985018),
    h = t(706360);
function g(e) {
    let { handleStepChange: n } = e,
        { selectedPlan: t, selectedSkuId: r } = (0, S.P5)(),
        g = (0, T.bB)(),
        { setSelectedGiftingPromotionReward: A, selectedGiftingPromotionReward: f, claimableRewards: j } = (0, _.Pv)(),
        R = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        M = (0, a.yK)([p.A], () => p.A.getGiftPromotionRewardSkuIds()),
        C = (0, c.U)(j, f),
        [N, O] = l.useState(C),
        [y, v] = l.useState(!1);
    l.useEffect(() => {
        y || null != f || null == C || (A(C), O(C));
    }, [C, y, f, A]),
        s()(null != t, "Expected plan to selected"),
        s()(null != r, "Expected selectedSkuId"),
        s()(null != g, "Step should be set");
    let b = l.useMemo(() => null != N && (j ?? []).includes(N), [N, j]),
        k = l.useMemo(() => 0 === M.length || null == N || !b, [M, N, b]);
    l.useEffect(() => {
        if (0 === M.length) {
            O(void 0), A(void 0);
            return;
        }
        (null != N && b && M.includes(N)) || null == N || (O(void 0), A(void 0));
    }, [M, b, N, A]);
    let U = (e) => {
            A(e), O(e), v(!0);
        },
        w = M.map((e) =>
            (0, i.jsx)(
                d.k,
                { skuId: e, claimed: null != j && !j.includes(e), user: R, onSelect: U, selectedSkuId: N },
                e,
            ),
        ),
        D = (0, i.jsx)(P.UX, {
            children: (0, i.jsx)(m.Z, {
                onStepChange: n,
                onBackClick: () => n(x.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [t.id],
                selectedPlanId: t.id,
                isNextDisabled: k,
            }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.rQ0, {
                titleTextVariant: "heading-lg/semibold",
                title: I.intl.string(I.t.OEtqpm),
                subtitle: I.intl.string(I.t.h2nMp0),
            }),
            (0, i.jsx)(o.cwr, {
                children: (0, i.jsx)(u.BJc, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)("div", { className: h.Dq, children: w }),
                }),
            }),
            D,
        ],
    });
}
