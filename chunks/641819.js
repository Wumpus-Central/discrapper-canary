n.d(t, { j: () => f });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(311907),
    o = n(20742),
    u = n(430993),
    d = n(331322),
    c = n(558620),
    p = n(94420),
    m = n(447784),
    E = n(68545),
    S = n(412260),
    _ = n(91053),
    I = n(287809),
    P = n(937008),
    A = n(166532),
    x = n(482132),
    h = n(615310),
    T = n(985018),
    g = n(328232);
function f(e) {
    let { handleStepChange: t } = e,
        n = (0, p.t4)((e) => e.selectedSkuId),
        r = (0, c.A)(),
        f = (0, h.bB)(),
        { setSelectedGiftingPromotionReward: j, selectedGiftingPromotionReward: R, claimableRewards: M } = (0, P.Pv)(),
        C = (0, a.bG)([I.default], () => I.default.getCurrentUser()),
        y = (0, a.yK)([S.A], () => S.A.getGiftPromotionRewardSkuIds()),
        N = (0, E.U)(M, R),
        [k, b] = i.useState(N),
        [O, v] = i.useState(!1);
    i.useEffect(() => {
        O || null != R || null == N || (j(N), b(N));
    }, [N, O, R, j]),
        s()(null != r, "Expected plan to selected"),
        s()(null != n, "Expected selectedSkuId"),
        s()(null != f, "Step should be set");
    let w = i.useMemo(() => null != k && (M ?? []).includes(k), [k, M]),
        U = i.useMemo(() => 0 === y.length || null == k || !w, [y, k, w]);
    i.useEffect(() => {
        if (0 === y.length) {
            b(void 0), j(void 0);
            return;
        }
        (null != k && w && y.includes(k)) || null == k || (b(void 0), j(void 0));
    }, [y, w, k, j]);
    let D = (e) => {
            j(e), b(e), v(!0);
        },
        G = y.map((e) =>
            (0, l.jsx)(
                m.k,
                { skuId: e, claimed: null != M && !M.includes(e), user: C, onSelect: D, selectedSkuId: k },
                e,
            ),
        ),
        L = (0, l.jsx)(x.UX, {
            children: (0, l.jsx)(_.Z, {
                onStepChange: t,
                onBackClick: () => t(A.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [r.id],
                selectedPlanId: r.id,
                isNextDisabled: U,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: T.intl.string(T.t.OEtqpm),
                subtitle: T.intl.string(T.t.h2nMp0),
            }),
            (0, l.jsx)(u.c, {
                children: (0, l.jsx)(d.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: g.Dq, children: G }),
                }),
            }),
            L,
        ],
    });
}
