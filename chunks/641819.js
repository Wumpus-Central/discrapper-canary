t.d(n, {
    j: () => S,
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
    m = t(91053),
    E = t(287809),
    g = t(954571),
    f = t(937008),
    P = t(156312),
    j = t(166532),
    h = t(482132),
    _ = t(652215),
    x = t(985018),
    T = t(907);

function S(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { selectedPlan: i, selectedSkuId: S, step: b } = (0, P.P5)(),
        { setSelectedGiftingPromotionReward: O, selectedGiftingPromotionReward: y, claimableRewards: A } = (0, f.Pv)(),
        I = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        v = (0, a.bG)([p.A], () => p.A.getGiftPromotionRewardSkuIds()),
        R = (0, d.UY)(A, y),
        [C, M] = l.useState(R),
        [N, k] = l.useState(!1);
    l.useEffect(() => {
        N || null != y || null == R || (O(R), M(R));
    }, [R, N, y, O]),
        s()(null != i, "Expected plan to selected"),
        s()(null != S, "Expected selectedSkuId"),
        s()(null != b, "Step should be set");
    let w = l.useMemo(() => null != C && (null != A ? A : []).includes(C), [C, A]),
        D = l.useMemo(() => 0 === v.length || null == C || !w, [v, C, w]);
    l.useEffect(() => {
        if (0 === v.length) {
            M(void 0), O(void 0);
            return;
        }
        (null != C && w && v.includes(C)) || null == C || (M(void 0), O(void 0));
    }, [v, w, C, O]);
    let U = (e) => {
            O(e), M(e), k(!0);
        },
        L = v.map((e) =>
            (0, r.jsx)(
                u.k,
                {
                    skuId: e,
                    claimed: null != A && !A.includes(e),
                    user: I,
                    onSelect: U,
                    selectedSkuId: C,
                },
                e,
            ),
        ),
        G = (0, r.jsx)(h.UX, {
            children: (0, r.jsx)(o.jlY, {
                "data-migration-pending": !0,
                className: T.Hx,
                children: (0, r.jsx)(m.Z, {
                    onStepChange: (e) => {
                        null != I &&
                            null != y &&
                            g.default.track(_.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: I.id,
                                reward_sku_id: y,
                            }),
                            n(e);
                    },
                    onBackClick: () => n(j.pn.PLAN_SELECT),
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
                className: T.Hc,
                direction: c.A.Direction.VERTICAL,
                align: c.A.Align.START,
                separator: !1,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: x.intl.string(x.t.OEtqpm),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: T.GQ,
                        children: x.intl.string(x.t.h2nMp0),
                    }),
                    (0, r.jsx)(o.s_y, {
                        "data-migration-pending": !0,
                        className: T.b,
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
                        className: T.Dq,
                        children: L,
                    }),
                }),
            }),
            G,
        ],
    });
}
