t.d(n, {
    j: () => b,
}),
    t(896048);
var l = t(627968),
    r = t(64700),
    i = t(284009),
    s = t.n(i),
    a = t(311907),
    o = t(397927),
    u = t(447784),
    c = t(235986),
    d = t(552736),
    p = t(68545),
    m = t(412260),
    g = t(446929),
    f = t(287809),
    j = t(954571),
    E = t(937008),
    x = t(156312),
    h = t(166532),
    T = t(482132),
    P = t(652215),
    S = t(907);

function b(e) {
    var n, t, i, b, A;
    let { handleStepChange: y, handleClose: v } = e,
        { selectedPlan: I, selectedSkuId: O, step: _ } = (0, x.P5)(),
        { setSelectedGiftingPromotionReward: N, selectedGiftingPromotionReward: C, claimableRewards: M } = (0, E.Pv)(),
        w = (0, d.A)(),
        R = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        k = (0, a.bG)([m.A], () => m.A.getGiftPromotionRewardSkuIds()),
        D = (0, p.UY)(M, C),
        [L, G] = r.useState(D),
        [U, H] = r.useState(!1);
    r.useEffect(() => {
        U || null != C || null == D || (N(D), G(D));
    }, [D, U, C, N]),
        s()(null != I, "Expected plan to selected"),
        s()(null != O, "Expected selectedSkuId"),
        s()(null != _, "Step should be set");
    let B = r.useMemo(() => null != L && (null != M ? M : []).includes(L), [L, M]),
        F = r.useMemo(() => 0 === k.length || null == L || !B, [k, L, B]);
    r.useEffect(() => {
        if (0 === k.length) {
            G(void 0), N(void 0);
            return;
        }
        (null != L && B && k.includes(L)) || null == L || (G(void 0), N(void 0));
    }, [k, B, L, N]);
    let W = (e) => {
            N(e), G(e), H(!0);
        },
        K = k.map((e) =>
            (0, l.jsx)(
                u.k,
                {
                    skuId: e,
                    claimed: null != M && !M.includes(e),
                    user: R,
                    onSelect: W,
                    selectedSkuId: L,
                },
                e,
            ),
        ),
        V = (0, l.jsx)(T.UX, {
            children: (0, l.jsx)(o.jlY, {
                "data-migration-pending": !0,
                className: S.Hx,
                children: (0, l.jsx)(g.Z3, {
                    onStepChange: (e) => {
                        null != R &&
                            null != C &&
                            j.default.track(P.HAw.GIFT_PROMOTION_REWARD_SELECTED, {
                                user_id: R.id,
                                reward_sku_id: C,
                            }),
                            y(e);
                    },
                    onBackClick: () => y(h.pn.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [I.id],
                    selectedPlanId: I.id,
                    isNextDisabled: F,
                }),
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(o.rQ0, {
                "data-migration-pending": !0,
                className: S.Hc,
                direction: c.A.Direction.VERTICAL,
                align: c.A.Align.START,
                separator: !1,
                children: [
                    (0, l.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: null == w || null == (n = w.rewardSelection) ? void 0 : n.heading(),
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: S.GQ,
                        children: null == w || null == (t = w.rewardSelection) ? void 0 : t.primarySubtitle(),
                    }),
                    (null == w || null == (b = w.rewardSelection) || null == (i = b.secondarySubtitle)
                        ? void 0
                        : i.call(b)) != null &&
                        (0, l.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: null == w || null == (A = w.rewardSelection) ? void 0 : A.secondarySubtitle(),
                        }),
                    (0, l.jsx)(o.s_y, {
                        "data-migration-pending": !0,
                        className: S.b,
                        onClick: v,
                    }),
                ],
            }),
            (0, l.jsx)(o.$mQ, {
                "data-migration-pending": !0,
                children: (0, l.jsx)(o.BJc, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", {
                        className: S.Dq,
                        children: K,
                    }),
                }),
            }),
            V,
        ],
    });
}
