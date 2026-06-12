n.d(l, { default: () => v });
var a = n(627968),
    e = n(64700),
    i = n(331322),
    r = n(834730),
    o = n(189213),
    s = n(661531),
    u = n(738188),
    d = n(691540),
    c = n(857250),
    g = n(97483),
    m = n(292666),
    f = n(580630),
    h = n(465323),
    x = n(17928),
    C = n(389462),
    p = n(695515),
    k = n(361157),
    b = n(602339),
    S = n(375708),
    j = n(984355);
function v(t) {
    let { transitionState: l, onClose: n, teenId: v } = t,
        {
            amountInput: y,
            handleAmountChange: E,
            currency: A,
            currencySymbol: M,
            exponent: N,
            isClearingCap: B,
            isOverspending: L,
            canSave: P,
            isSubmitting: w,
            renewalDate: F,
            monthlySpend: D,
            save: G,
        } = (function (t) {
            let l = C.fD.useControlledSetting(t),
                n = (0, x.bG)([p.A], () => p.A.getSpendingLimit()),
                a = (0, x.bG)([p.A], () => p.A.getMonthlyPurchases()?.total_amount ?? null),
                i = (l?.currency ?? n?.currency ?? "usd").toLowerCase(),
                r = h.yR[i] ?? 2,
                o = e.useMemo(() => (0, k.Qn)(i), [i]),
                s = e.useMemo(k.o3, []),
                [u, d] = e.useState(() => (null == l ? "" : String(l.amount / 10 ** r))),
                c = e.useCallback((t) => d((0, k.cU)(t, r)), [r]),
                g = "" === u && null != l,
                m = parseFloat(u),
                f = !Number.isNaN(m) && m >= 0,
                b = g || f,
                S = f ? Math.round(m * 10 ** r) : null,
                j = null != a && a > 0 && null != S && S <= a,
                [v, y] = e.useState(!1),
                E = e.useCallback(async () => {
                    if (b) {
                        y(!0);
                        try {
                            g
                                ? await C.fD.updateControlledSetting(t, null)
                                : null != S && (await C.fD.updateControlledSetting(t, { amount: S, currency: i }));
                        } finally {
                            y(!1);
                        }
                    }
                }, [b, g, S, t, i]);
            return {
                amountInput: u,
                handleAmountChange: c,
                currency: i,
                currencySymbol: o,
                exponent: r,
                isClearingCap: g,
                isOverspending: j,
                canSave: b,
                isSubmitting: v,
                renewalDate: s,
                monthlySpend: a,
                save: E,
            };
        })(v),
        I = async () => {
            try {
                await G(), (0, d.P0)((0, c.o)(S.intl.string(b.default["2WKfG1"]), g.Ck.SUCCESS)), n();
            } catch {
                (0, d.P0)((0, c.o)(S.intl.string(b.default.Wu8BK2), g.Ck.FAILURE));
            }
        },
        R = [
            { variant: "secondary", text: S.intl.string(S.t["ETE/oC"]), onClick: n, disabled: w },
            B
                ? {
                      variant: "critical-primary",
                      text: S.intl.string(b.default.JZDGJ8),
                      onClick: I,
                      disabled: w,
                      loading: w,
                  }
                : { text: S.intl.string(S.t["R3BPH+"]), onClick: I, disabled: !P || w, loading: w },
        ],
        T = null != D && D > 0 ? (0, f.$g)(D, A) : null;
    return (0, a.jsx)(o.Modal, {
        transitionState: l,
        onClose: n,
        title: S.intl.string(b.default.oBkFiL),
        subtitle: S.intl.string(b.default.IFguF2),
        actions: R,
        children: (0, a.jsxs)(i.B, {
            gap: 8,
            children: [
                (0, a.jsx)(r.E, { variant: "text-sm/semibold", children: S.intl.string(b.default.gMeekL) }),
                (0, a.jsx)(r.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: S.intl.formatToPlainString(b.default.IWdrfp, { date: F }),
                }),
                (0, a.jsx)("div", {
                    className: L ? j.B : void 0,
                    children: (0, a.jsx)(m.k, {
                        label: S.intl.string(b.default.gMeekL),
                        hideLabel: !0,
                        value: y,
                        onChange: E,
                        leading: y.length > 0 ? M : void 0,
                        placeholder: S.intl.string(b.default.YEnpaj),
                        inputMode: N > 0 ? "decimal" : "numeric",
                    }),
                }),
                null == T
                    ? null
                    : L
                      ? (0, a.jsxs)(i.B, {
                            direction: "horizontal",
                            gap: 6,
                            align: "start",
                            children: [
                                (0, a.jsx)(u.i, { size: "sm", color: s.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(r.E, {
                                    variant: "text-sm/normal",
                                    className: j.i,
                                    children: S.intl.formatToPlainString(b.default.Tk6x4X, { amount: T, date: F }),
                                }),
                            ],
                        })
                      : (0, a.jsx)(r.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: S.intl.formatToPlainString(b.default.pfAlRY, { amount: T }),
                        }),
            ],
        }),
    });
}
