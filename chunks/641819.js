n.d(t, { j: () => T });
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
    S = n(482132),
    P = n(985018),
    I = n(606773);
function T(e) {
    let { handleStepChange: t } = e,
        { selectedPlan: n, selectedSkuId: s, step: T } = (0, h.P5)(),
        { setSelectedGiftingPromotionReward: g, selectedGiftingPromotionReward: A, claimableRewards: j } = (0, _.Pv)(),
        f = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        M = (0, a.yK)([p.A], () => p.A.getGiftPromotionRewardSkuIds()),
        R = (0, c.U)(j, A),
        [y, C] = i.useState(R),
        [N, v] = i.useState(!1);
    i.useEffect(() => {
        N || null != A || null == R || (g(R), C(R));
    }, [R, N, A, g]),
        r()(null != n, "Expected plan to selected"),
        r()(null != s, "Expected selectedSkuId"),
        r()(null != T, "Step should be set");
    let O = i.useMemo(() => null != y && (j ?? []).includes(y), [y, j]),
        b = i.useMemo(() => 0 === M.length || null == y || !O, [M, y, O]);
    i.useEffect(() => {
        if (0 === M.length) {
            C(void 0), g(void 0);
            return;
        }
        (null != y && O && M.includes(y)) || null == y || (C(void 0), g(void 0));
    }, [M, O, y, g]);
    let k = (e) => {
            g(e), C(e), v(!0);
        },
        w = M.map((e) =>
            (0, l.jsx)(
                d.k,
                { skuId: e, claimed: null != j && !j.includes(e), user: f, onSelect: k, selectedSkuId: y },
                e,
            ),
        ),
        U = (0, l.jsx)(S.UX, {
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
                title: P.intl.string(P.t.OEtqpm),
                subtitle: P.intl.string(P.t.h2nMp0),
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
