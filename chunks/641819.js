t.d(n, { j: () => g });
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
    S = t(156312),
    x = t(166532),
    T = t(482132),
    I = t(970077),
    P = t(615310),
    h = t(985018),
    A = t(706360);
function g(e) {
    let { handleStepChange: n } = e,
        { selectedSkuId: t } = (0, S.P5)(),
        r = (0, I.A)(),
        g = (0, P.bB)(),
        { setSelectedGiftingPromotionReward: f, selectedGiftingPromotionReward: j, claimableRewards: R } = (0, _.Pv)(),
        M = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        C = (0, a.yK)([p.A], () => p.A.getGiftPromotionRewardSkuIds()),
        N = (0, c.U)(R, j),
        [O, y] = l.useState(N),
        [v, b] = l.useState(!1);
    l.useEffect(() => {
        v || null != j || null == N || (f(N), y(N));
    }, [N, v, j, f]),
        s()(null != r, "Expected plan to selected"),
        s()(null != t, "Expected selectedSkuId"),
        s()(null != g, "Step should be set");
    let k = l.useMemo(() => null != O && (R ?? []).includes(O), [O, R]),
        U = l.useMemo(() => 0 === C.length || null == O || !k, [C, O, k]);
    l.useEffect(() => {
        if (0 === C.length) {
            y(void 0), f(void 0);
            return;
        }
        (null != O && k && C.includes(O)) || null == O || (y(void 0), f(void 0));
    }, [C, k, O, f]);
    let w = (e) => {
            f(e), y(e), b(!0);
        },
        D = C.map((e) =>
            (0, i.jsx)(
                d.k,
                { skuId: e, claimed: null != R && !R.includes(e), user: M, onSelect: w, selectedSkuId: O },
                e,
            ),
        ),
        G = (0, i.jsx)(T.UX, {
            children: (0, i.jsx)(m.Z, {
                onStepChange: n,
                onBackClick: () => n(x.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [r.id],
                selectedPlanId: r.id,
                isNextDisabled: U,
            }),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.rQ0, {
                titleTextVariant: "heading-lg/semibold",
                title: h.intl.string(h.t.OEtqpm),
                subtitle: h.intl.string(h.t.h2nMp0),
            }),
            (0, i.jsx)(o.cwr, {
                children: (0, i.jsx)(u.BJc, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, i.jsx)("div", { className: A.Dq, children: D }),
                }),
            }),
            G,
        ],
    });
}
