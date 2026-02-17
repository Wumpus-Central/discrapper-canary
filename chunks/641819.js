t.d(n, { j: () => I });
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
    P = t(156312),
    T = t(166532),
    h = t(482132),
    x = t(985018),
    g = t(907);
function I(e) {
    let { handleStepChange: n } = e,
        { selectedPlan: t, selectedSkuId: r, step: I } = (0, P.P5)(),
        { setSelectedGiftingPromotionReward: S, selectedGiftingPromotionReward: A, claimableRewards: f } = (0, _.Pv)(),
        j = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        M = (0, a.bG)([p.A], () => p.A.getGiftPromotionRewardSkuIds()),
        R = (0, c.U)(f, A),
        [C, y] = l.useState(R),
        [N, O] = l.useState(!1);
    l.useEffect(() => {
        N || null != A || null == R || (S(R), y(R));
    }, [R, N, A, S]),
        s()(null != t, "Expected plan to selected"),
        s()(null != r, "Expected selectedSkuId"),
        s()(null != I, "Step should be set");
    let v = l.useMemo(() => null != C && (f ?? []).includes(C), [C, f]),
        b = l.useMemo(() => 0 === M.length || null == C || !v, [M, C, v]);
    l.useEffect(() => {
        if (0 === M.length) {
            y(void 0), S(void 0);
            return;
        }
        (null != C && v && M.includes(C)) || null == C || (y(void 0), S(void 0));
    }, [M, v, C, S]);
    let k = (e) => {
            S(e), y(e), O(!0);
        },
        U = M.map((e) =>
            (0, i.jsx)(
                d.k,
                { skuId: e, claimed: null != f && !f.includes(e), user: j, onSelect: k, selectedSkuId: C },
                e,
            ),
        ),
        w = (0, i.jsx)(h.UX, {
            children: (0, i.jsx)(m.Z, {
                onStepChange: n,
                onBackClick: () => n(T.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [t.id],
                selectedPlanId: t.id,
                isNextDisabled: b,
            }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.rQ0, {
                titleTextVariant: "heading-lg/semibold",
                title: x.intl.string(x.t.OEtqpm),
                subtitle: x.intl.string(x.t.h2nMp0),
            }),
            (0, i.jsx)(o.cwr, {
                children: (0, i.jsx)(u.BJc, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)("div", { className: g.Dq, children: U }),
                }),
            }),
            w,
        ],
    });
}
