t.d(n, { j: () => I });
var i = t(627968),
    l = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(311907),
    o = t(397927),
    u = t(447784),
    d = t(235986),
    c = t(68545),
    p = t(412260),
    m = t(91053),
    E = t(287809),
    g = t(954571),
    _ = t(937008),
    x = t(156312),
    T = t(166532),
    h = t(482132),
    P = t(652215),
    A = t(985018),
    S = t(907);
function I(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { selectedPlan: r, selectedSkuId: I, step: j } = (0, x.P5)(),
        { setSelectedGiftingPromotionReward: f, selectedGiftingPromotionReward: R, claimableRewards: C } = (0, _.Pv)(),
        M = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        N = (0, a.bG)([p.A], () => p.A.getGiftPromotionRewardSkuIds()),
        y = (0, c.UY)(C, R),
        [O, b] = l.useState(y),
        [v, k] = l.useState(!1);
    l.useEffect(() => {
        v || null != R || null == y || (f(y), b(y));
    }, [y, v, R, f]),
        s()(null != r, "Expected plan to selected"),
        s()(null != I, "Expected selectedSkuId"),
        s()(null != j, "Step should be set");
    let w = l.useMemo(() => null != O && (C ?? []).includes(O), [O, C]),
        U = l.useMemo(() => 0 === N.length || null == O || !w, [N, O, w]);
    l.useEffect(() => {
        if (0 === N.length) {
            b(void 0), f(void 0);
            return;
        }
        (null != O && w && N.includes(O)) || null == O || (b(void 0), f(void 0));
    }, [N, w, O, f]);
    let D = (e) => {
            f(e), b(e), k(!0);
        },
        L = N.map((e) =>
            (0, i.jsx)(
                u.k,
                { skuId: e, claimed: null != C && !C.includes(e), user: M, onSelect: D, selectedSkuId: O },
                e,
            ),
        ),
        G = (0, i.jsx)(h.UX, {
            children: (0, i.jsx)(o.jlY, {
                "data-migration-pending": !0,
                className: S.Hx,
                children: (0, i.jsx)(m.Z, {
                    onStepChange: (e) => {
                        null != M &&
                            null != R &&
                            g.default.track(P.HAw.GIFT_PROMOTION_REWARD_SELECTED, { user_id: M.id, reward_sku_id: R }),
                            n(e);
                    },
                    onBackClick: () => n(T.pn.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [r.id],
                    selectedPlanId: r.id,
                    isNextDisabled: U,
                }),
            }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.rQ0, {
                "data-migration-pending": !0,
                className: S.Hc,
                direction: d.A.Direction.VERTICAL,
                align: d.A.Align.START,
                separator: !1,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: A.intl.string(A.t.OEtqpm),
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: S.GQ,
                        children: A.intl.string(A.t.h2nMp0),
                    }),
                    (0, i.jsx)(o.s_y, { "data-migration-pending": !0, className: S.b, onClick: t }),
                ],
            }),
            (0, i.jsx)(o.$mQ, {
                "data-migration-pending": !0,
                children: (0, i.jsx)(o.BJc, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)("div", { className: S.Dq, children: L }),
                }),
            }),
            G,
        ],
    });
}
