n.d(t, { j: () => I });
var l = n(627968),
    i = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(311907),
    o = n(732955),
    u = n(397927),
    d = n(447784),
    c = n(68545),
    p = n(412260),
    m = n(91053),
    E = n(287809),
    _ = n(937008),
    h = n(156312),
    x = n(166532),
    P = n(482132),
    S = n(985018),
    T = n(606773);
function I(e) {
    let { handleStepChange: t } = e,
        { selectedPlan: n, selectedSkuId: s, step: I } = (0, h.P5)(),
        { setSelectedGiftingPromotionReward: g, selectedGiftingPromotionReward: j, claimableRewards: A } = (0, _.Pv)(),
        f = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        M = (0, a.bG)([p.A], () => p.A.getGiftPromotionRewardSkuIds()),
        R = (0, c.U)(A, j),
        [C, y] = i.useState(R),
        [N, v] = i.useState(!1);
    i.useEffect(() => {
        N || null != j || null == R || (g(R), y(R));
    }, [R, N, j, g]),
        r()(null != n, "Expected plan to selected"),
        r()(null != s, "Expected selectedSkuId"),
        r()(null != I, "Step should be set");
    let O = i.useMemo(() => null != C && (A ?? []).includes(C), [C, A]),
        b = i.useMemo(() => 0 === M.length || null == C || !O, [M, C, O]);
    i.useEffect(() => {
        if (0 === M.length) {
            y(void 0), g(void 0);
            return;
        }
        (null != C && O && M.includes(C)) || null == C || (y(void 0), g(void 0));
    }, [M, O, C, g]);
    let k = (e) => {
            g(e), y(e), v(!0);
        },
        w = M.map((e) =>
            (0, l.jsx)(
                d.k,
                { skuId: e, claimed: null != A && !A.includes(e), user: f, onSelect: k, selectedSkuId: C },
                e,
            ),
        ),
        U = (0, l.jsx)(P.UX, {
            children: (0, l.jsx)(m.Z, {
                onStepChange: t,
                onBackClick: () => t(x.pn.PLAN_SELECT),
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
                title: S.intl.string(S.t.OEtqpm),
                subtitle: S.intl.string(S.t.h2nMp0),
            }),
            (0, l.jsx)(o.cwr, {
                children: (0, l.jsx)(u.BJc, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: T.Dq, children: w }),
                }),
            }),
            U,
        ],
    });
}
