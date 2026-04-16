n.d(t, { j: () => g });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(311907),
    o = n(732955),
    u = n(397927),
    d = n(558620),
    c = n(94420),
    p = n(447784),
    m = n(68545),
    E = n(412260),
    S = n(91053),
    _ = n(287809),
    I = n(937008),
    P = n(166532),
    x = n(482132),
    T = n(615310),
    A = n(985018),
    h = n(328232);
function g(e) {
    let { handleStepChange: t } = e,
        n = (0, c.t4)((e) => e.selectedSkuId),
        r = (0, d.A)(),
        g = (0, T.bB)(),
        { setSelectedGiftingPromotionReward: f, selectedGiftingPromotionReward: j, claimableRewards: R } = (0, I.Pv)(),
        M = (0, a.bG)([_.default], () => _.default.getCurrentUser()),
        C = (0, a.yK)([E.A], () => E.A.getGiftPromotionRewardSkuIds()),
        N = (0, m.U)(R, j),
        [O, k] = i.useState(N),
        [y, b] = i.useState(!1);
    i.useEffect(() => {
        y || null != j || null == N || (f(N), k(N));
    }, [N, y, j, f]),
        s()(null != r, "Expected plan to selected"),
        s()(null != n, "Expected selectedSkuId"),
        s()(null != g, "Step should be set");
    let v = i.useMemo(() => null != O && (R ?? []).includes(O), [O, R]),
        U = i.useMemo(() => 0 === C.length || null == O || !v, [C, O, v]);
    i.useEffect(() => {
        if (0 === C.length) {
            k(void 0), f(void 0);
            return;
        }
        (null != O && v && C.includes(O)) || null == O || (k(void 0), f(void 0));
    }, [C, v, O, f]);
    let w = (e) => {
            f(e), k(e), b(!0);
        },
        G = C.map((e) =>
            (0, l.jsx)(
                p.k,
                { skuId: e, claimed: null != R && !R.includes(e), user: M, onSelect: w, selectedSkuId: O },
                e,
            ),
        ),
        D = (0, l.jsx)(x.UX, {
            children: (0, l.jsx)(S.Z, {
                onStepChange: t,
                onBackClick: () => t(P.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [r.id],
                selectedPlanId: r.id,
                isNextDisabled: U,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(o.rQ0, {
                titleTextVariant: "heading-lg/semibold",
                title: A.intl.string(A.t.OEtqpm),
                subtitle: A.intl.string(A.t.h2nMp0),
            }),
            (0, l.jsx)(o.cwr, {
                children: (0, l.jsx)(u.BJc, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: h.Dq, children: G }),
                }),
            }),
            D,
        ],
    });
}
