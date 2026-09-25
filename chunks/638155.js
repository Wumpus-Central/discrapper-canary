l.d(n, { default: () => v });
var a = l(477900),
    e = l(582128),
    i = l(661531),
    r = l(189213),
    o = l(331322),
    s = l(738188),
    u = l(834730),
    d = l(691540),
    c = l(857250),
    g = l(97483),
    m = l(95477),
    f = l(580630),
    h = l(465323),
    x = l(17928),
    C = l(389462),
    p = l(695515),
    k = l(361157),
    b = l(513687),
    S = l(375708),
    j = l(681364);
function v(t) {
    let { transitionState: n, onClose: l, teenId: v } = t,
        {
            amountInput: y,
            handleAmountChange: E,
            currency: A,
            currencySymbol: N,
            exponent: B,
            isClearingCap: L,
            isOverspending: M,
            canSave: P,
            isSubmitting: w,
            renewalDate: F,
            monthlySpend: I,
            save: D,
        } = (function (t) {
            let n = C.fD.useControlledSetting(t),
                l = (0, x.bG)([p.A], () => p.A.getSpendingLimit()),
                a = (0, x.bG)([p.A], () => p.A.getMonthlyPurchases()?.total_amount ?? null),
                i = (n?.currency ?? l?.currency ?? "usd").toLowerCase(),
                r = h.yR[i] ?? 2,
                o = e.useMemo(() => (0, k.Qn)(i), [i]),
                s = e.useMemo(k.o3, []),
                [u, d] = e.useState(() => (null == n ? "" : String(n.amount / 10 ** r))),
                c = e.useCallback((t) => d((0, k.cU)(t, r)), [r]),
                g = "" === u && null != n,
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
        })(v);
    async function G() {
        try {
            (await D(), (0, d.P0)((0, c.o)(S.intl.string(b.default["2WKfG1"]), g.Ck.SUCCESS)), l());
        } catch {
            (0, d.P0)((0, c.o)(S.intl.string(b.default.Wu8BK2), g.Ck.FAILURE));
        }
    }
    let R = [
            { variant: "secondary", text: S.intl.string(S.t["ETE/oC"]), onClick: l, disabled: w },
            L
                ? {
                      variant: "critical-primary",
                      text: S.intl.string(b.default.JZDGJ8),
                      onClick: G,
                      disabled: w,
                      loading: w,
                  }
                : { text: S.intl.string(S.t["R3BPH+"]), onClick: G, disabled: !P || w, loading: w },
        ],
        T = null != I && I > 0 ? (0, f.$g)(I, A) : null;
    return (0, a.jsx)(r.a, {
        transitionState: n,
        onClose: l,
        title: S.intl.string(b.default.oBkFiL),
        subtitle: S.intl.string(b.default.IFguF2),
        actions: R,
        children: (0, a.jsxs)(o.B, {
            gap: 8,
            children: [
                (0, a.jsx)(u.E, { variant: "text-sm/semibold", children: S.intl.string(b.default.gMeekL) }),
                (0, a.jsx)(u.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: S.intl.formatToPlainString(b.default.IWdrfp, { date: F }),
                }),
                (0, a.jsx)("div", {
                    className: M ? j.B : void 0,
                    children: (0, a.jsx)(m.k, {
                        label: S.intl.string(b.default.gMeekL),
                        hideLabel: !0,
                        value: y,
                        onChange: E,
                        leading: y.length > 0 ? N : void 0,
                        placeholder: S.intl.string(b.default.YEnpaj),
                        inputMode: B > 0 ? "decimal" : "numeric",
                    }),
                }),
                null == T
                    ? null
                    : M
                      ? (0, a.jsxs)(o.B, {
                            direction: "horizontal",
                            gap: 6,
                            align: "start",
                            children: [
                                (0, a.jsx)(s.WarningIcon, { size: "sm", color: i.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    className: j.i,
                                    children: S.intl.formatToPlainString(b.default.Tk6x4X, { amount: T, date: F }),
                                }),
                            ],
                        })
                      : (0, a.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: S.intl.formatToPlainString(b.default.pfAlRY, { amount: T }),
                        }),
            ],
        }),
    });
}
