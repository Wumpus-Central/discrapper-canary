n.d(t, { j: () => g });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(311907),
    o = n(732955),
    u = n(397927),
    d = n(447784),
    c = n(68545),
    p = n(412260),
    m = n(91053),
    E = n(287809),
    S = n(413748),
    _ = n(937008),
    I = n(166532),
    P = n(482132),
    x = n(970077),
    T = n(615310),
    A = n(985018),
    h = n(706360);
function g(e) {
    let { handleStepChange: t } = e,
        n = (0, S.t)((e) => e.selectedSkuId),
        r = (0, x.A)(),
        g = (0, T.bB)(),
        { setSelectedGiftingPromotionReward: f, selectedGiftingPromotionReward: j, claimableRewards: R } = (0, _.Pv)(),
        M = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        C = (0, a.yK)([p.A], () => p.A.getGiftPromotionRewardSkuIds()),
        N = (0, c.U)(R, j),
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
                d.k,
                { skuId: e, claimed: null != R && !R.includes(e), user: M, onSelect: w, selectedSkuId: O },
                e,
            ),
        ),
        D = (0, l.jsx)(P.UX, {
            children: (0, l.jsx)(m.Z, {
                onStepChange: t,
                onBackClick: () => t(I.pn.PLAN_SELECT),
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
