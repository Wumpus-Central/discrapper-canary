l.d(n, { default: () => v });
var a = l(477900),
    e = l(582128),
    i = l(661531),
    r = l(189213),
    s = l(331322),
    o = l(738188),
    u = l(834730),
    d = l(858899),
    c = l(95477),
    g = l(580630),
    m = l(465323),
    f = l(17928),
    h = l(389462),
    x = l(695515),
    p = l(361157),
    C = l(513687),
    b = l(660183),
    k = l(681364);
function v(t) {
    let { transitionState: n, onClose: l, teenId: v } = t,
        {
            amountInput: j,
            handleAmountChange: y,
            currency: S,
            currencySymbol: E,
            exponent: A,
            isClearingCap: N,
            isOverspending: B,
            canSave: M,
            isSubmitting: P,
            renewalDate: w,
            monthlySpend: L,
            save: D,
        } = (function (t) {
            let n = h.fD.useControlledSetting(t),
                l = (0, f.bG)([x.A], () => x.A.getSpendingLimit()),
                a = (0, f.bG)([x.A], () => x.A.getMonthlyPurchases()?.total_amount ?? null),
                i = (n?.currency ?? l?.currency ?? "usd").toLowerCase(),
                r = m.yR[i] ?? 2,
                s = e.useMemo(() => (0, p.Qn)(i), [i]),
                o = e.useMemo(p.o3, []),
                [u, d] = e.useState(() => (null == n ? "" : String(n.amount / 10 ** r))),
                c = e.useCallback((t) => d((0, p.cU)(t, r)), [r]),
                g = "" === u && null != n,
                C = parseFloat(u),
                b = !Number.isNaN(C) && C >= 0,
                k = g || b,
                v = b ? Math.round(C * 10 ** r) : null,
                j = null != a && a > 0 && null != v && v <= a,
                [y, S] = e.useState(!1),
                E = e.useCallback(async () => {
                    if (k) {
                        S(!0);
                        try {
                            g
                                ? await h.fD.updateControlledSetting(t, null)
                                : null != v && (await h.fD.updateControlledSetting(t, { amount: v, currency: i }));
                        } finally {
                            S(!1);
                        }
                    }
                }, [k, g, v, t, i]);
            return {
                amountInput: u,
                handleAmountChange: c,
                currency: i,
                currencySymbol: s,
                exponent: r,
                isClearingCap: g,
                isOverspending: j,
                canSave: k,
                isSubmitting: y,
                renewalDate: o,
                monthlySpend: a,
                save: E,
            };
        })(v);
    async function F() {
        try {
            (await D(), (0, d.P0)({ text: b.intl.string(C.default["2WKfG1"]), variant: "success" }), l());
        } catch {
            (0, d.P0)({ text: b.intl.string(C.default.Wu8BK2), variant: "critical" });
        }
    }
    let G = [
            { variant: "secondary", text: b.intl.string(b.t["ETE/oC"]), onClick: l, disabled: P },
            N
                ? {
                      variant: "critical-primary",
                      text: b.intl.string(C.default.JZDGJ8),
                      onClick: F,
                      disabled: P,
                      loading: P,
                  }
                : { text: b.intl.string(b.t["R3BPH+"]), onClick: F, disabled: !M || P, loading: P },
        ],
        I = null != L && L > 0 ? (0, g.$g)(L, S) : null;
    return (0, a.jsx)(r.a, {
        transitionState: n,
        onClose: l,
        title: b.intl.string(C.default.oBkFiL),
        subtitle: b.intl.string(C.default.IFguF2),
        actions: G,
        children: (0, a.jsxs)(s.B, {
            gap: 8,
            children: [
                (0, a.jsx)(u.E, { variant: "text-sm/semibold", children: b.intl.string(C.default.gMeekL) }),
                (0, a.jsx)(u.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: b.intl.formatToPlainString(C.default.IWdrfp, { date: w }),
                }),
                (0, a.jsx)("div", {
                    className: B ? k.B : void 0,
                    children: (0, a.jsx)(c.k, {
                        label: b.intl.string(C.default.gMeekL),
                        hideLabel: !0,
                        value: j,
                        onChange: y,
                        leading: j.length > 0 ? E : void 0,
                        placeholder: b.intl.string(C.default.YEnpaj),
                        inputMode: A > 0 ? "decimal" : "numeric",
                    }),
                }),
                null == I
                    ? null
                    : B
                      ? (0, a.jsxs)(s.B, {
                            direction: "horizontal",
                            gap: 6,
                            align: "start",
                            children: [
                                (0, a.jsx)(o.WarningIcon, { size: "sm", color: i.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    className: k.i,
                                    children: b.intl.formatToPlainString(C.default.Tk6x4X, { amount: I, date: w }),
                                }),
                            ],
                        })
                      : (0, a.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: b.intl.formatToPlainString(C.default.pfAlRY, { amount: I }),
                        }),
            ],
        }),
    });
}
