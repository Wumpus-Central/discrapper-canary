t.d(n, { j: () => A });
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
    g = t(937008),
    x = t(156312),
    _ = t(166532),
    h = t(482132),
    T = t(985018),
    P = t(606773);
function A(e) {
    let { handleStepChange: n, handleClose: t } = e,
        { selectedPlan: r, selectedSkuId: A, step: S } = (0, x.P5)(),
        { setSelectedGiftingPromotionReward: I, selectedGiftingPromotionReward: j, claimableRewards: f } = (0, g.Pv)(),
        R = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        C = (0, a.bG)([p.A], () => p.A.getGiftPromotionRewardSkuIds()),
        M = (0, c.U)(f, j),
        [N, y] = l.useState(M),
        [b, O] = l.useState(!1);
    l.useEffect(() => {
        b || null != j || null == M || (I(M), y(M));
    }, [M, b, j, I]),
        s()(null != r, "Expected plan to selected"),
        s()(null != A, "Expected selectedSkuId"),
        s()(null != S, "Step should be set");
    let v = l.useMemo(() => null != N && (f ?? []).includes(N), [N, f]),
        k = l.useMemo(() => 0 === C.length || null == N || !v, [C, N, v]);
    l.useEffect(() => {
        if (0 === C.length) {
            y(void 0), I(void 0);
            return;
        }
        (null != N && v && C.includes(N)) || null == N || (y(void 0), I(void 0));
    }, [C, v, N, I]);
    let U = (e) => {
            I(e), y(e), O(!0);
        },
        w = C.map((e) =>
            (0, i.jsx)(
                u.k,
                { skuId: e, claimed: null != f && !f.includes(e), user: R, onSelect: U, selectedSkuId: N },
                e,
            ),
        ),
        L = (0, i.jsx)(h.UX, {
            children: (0, i.jsx)(o.jlY, {
                "data-migration-pending": !0,
                className: P.Hx,
                children: (0, i.jsx)(m.Z, {
                    onStepChange: n,
                    onBackClick: () => n(_.pn.PLAN_SELECT),
                    shouldRenderUpdatedPaymentModal: !0,
                    showBackButton: !0,
                    planOptions: [r.id],
                    selectedPlanId: r.id,
                    isNextDisabled: k,
                }),
            }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.rQ0, {
                "data-migration-pending": !0,
                className: P.Hc,
                direction: d.A.Direction.VERTICAL,
                align: d.A.Align.START,
                separator: !1,
                children: [
                    (0, i.jsx)(o.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: T.intl.string(T.t.OEtqpm),
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: P.GQ,
                        children: T.intl.string(T.t.h2nMp0),
                    }),
                    (0, i.jsx)(o.s_y, { "data-migration-pending": !0, className: P.b, onClick: t }),
                ],
            }),
            (0, i.jsx)(o.$mQ, {
                "data-migration-pending": !0,
                children: (0, i.jsx)(o.BJc, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)("div", { className: P.Dq, children: w }),
                }),
            }),
            L,
        ],
    });
}
