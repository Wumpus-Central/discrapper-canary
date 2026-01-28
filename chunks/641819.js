t.d(n, {
    j: () => A,
}),
    t(896048);
var r = t(627968),
    l = t(64700),
    i = t(284009),
    s = t.n(i),
    a = t(311907),
    o = t(397927),
    u = t(447784),
    c = t(235986),
    d = t(68545),
    p = t(412260),
    m = t(446929),
    g = t(287809),
    f = t(954571),
    E = t(937008),
    j = t(156312),
    x = t(166532),
    h = t(482132),
    T = t(652215),
    P = t(985018),
    S = t(907);

function A(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { selectedPlan: i, selectedSkuId: A, step: b } = (0, j.P5)(),
        { setSelectedGiftingPromotionReward: y, selectedGiftingPromotionReward: I, claimableRewards: O } = (0, E.Pv)(),
        v = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        _ = (0, a.bG)([p.A], () => p.A.getGiftPromotionRewardSkuIds()),
        N = (0, d.UY)(O, I),
        [C, M] = l.useState(N),
        [R, k] = l.useState(!1);
    l.useEffect(() => {
        R || null != I || null == N || (y(N), M(N));
    }, [N, R, I, y]),
        s()(null != i, "Expected plan to selected"),
        s()(null != A, "Expected selectedSkuId"),
        s()(null != b, "Step should be set");
    let w = l.useMemo(() => null != C && (null != O ? O : []).includes(C), [C, O]),
        D = l.useMemo(() => 0 === _.length || null == C || !w, [_, C, w]);
    l.useEffect(() => {
        if (0 === _.length) {
            M(void 0), y(void 0);
            return;
        }
        (null != C && w && _.includes(C)) || null == C || (M(void 0), y(void 0));
    }, [_, w, C, y]);
    let L = (e) => {
            y(e), M(e), k(!0);
        },
        G = _.map((e) =>
            (0, r.jsx)(
                u.k,
                {
                    skuId: e,
                    claimed: null != O && !O.includes(e),
                    user: v,
                    onSelect: L,
                    selectedSkuId: C,
                },
                e,
            ),
        ),
        U = (0, r.jsx)(h.UX, {
            children: (0, r.jsx)(o.jlY, {
                "data-migration-pending": !0,
                className: S.Hx,
                children: (0, r.jsx)(m.Z3, {
                    onStepChange: (e) => {
                        null != v &&
                            null != I &&
                            f.default.track(T.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: v.id,
                                reward_sku_id: I,
                            }),
                            n(e);
                    },
                    onBackClick: () => n(x.pn.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [i.id],
                    selectedPlanId: i.id,
                    isNextDisabled: D,
                }),
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.rQ0, {
                "data-migration-pending": !0,
                className: S.Hc,
                direction: c.A.Direction.VERTICAL,
                align: c.A.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: P.intl.string(P.t.OEtqpm),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: S.GQ,
                        children: P.intl.string(P.t.h2nMp0),
                    }),
                    (0, r.jsx)(o.s_y, {
                        "data-migration-pending": !0,
                        className: S.b,
                        onClick: t,
                    }),
                ],
            }),
            (0, r.jsx)(o.$mQ, {
                "data-migration-pending": !0,
                children: (0, r.jsx)(o.BJc, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, r.jsx)("div", {
                        className: S.Dq,
                        children: G,
                    }),
                }),
            }),
            U,
        ],
    });
}
