l.d(n, { default: () => k });
var a = l(477900),
    i = l(582128),
    e = l(661531),
    r = l(189213),
    o = l(331322),
    s = l(738188),
    u = l(834730),
    d = l(858899),
    c = l(95477),
    g = l(580630),
    m = l(465323),
    f = l(17928),
    h = l(389462),
    p = l(695515),
    b = l(361157),
    x = l(83152),
    C = l(105292),
    y = l(681364);
function k(t) {
    let { transitionState: n, onClose: l, teenId: k } = t,
        {
            amountInput: v,
            handleAmountChange: j,
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
                l = (0, f.bG)([p.A], () => p.A.getSpendingLimit()),
                a = (0, f.bG)([p.A], () => p.A.getMonthlyPurchases()?.total_amount ?? null),
                e = (n?.currency ?? l?.currency ?? "usd").toLowerCase(),
                r = m.yR[e] ?? 2,
                o = i.useMemo(() => (0, b.Qn)(e), [e]),
                s = i.useMemo(b.o3, []),
                [u, d] = i.useState(() => (null == n ? "" : String(n.amount / 10 ** r))),
                c = i.useCallback((t) => d((0, b.cU)(t, r)), [r]),
                g = "" === u && null != n,
                x = parseFloat(u),
                C = !Number.isNaN(x) && x >= 0,
                y = g || C,
                k = C ? Math.round(x * 10 ** r) : null,
                v = null != a && a > 0 && null != k && k <= a,
                [j, S] = i.useState(!1),
                E = i.useCallback(async () => {
                    if (y) {
                        S(!0);
                        try {
                            g
                                ? await h.fD.updateControlledSetting(t, null)
                                : null != k && (await h.fD.updateControlledSetting(t, { amount: k, currency: e }));
                        } finally {
                            S(!1);
                        }
                    }
                }, [y, g, k, t, e]);
            return {
                amountInput: u,
                handleAmountChange: c,
                currency: e,
                currencySymbol: o,
                exponent: r,
                isClearingCap: g,
                isOverspending: v,
                canSave: y,
                isSubmitting: j,
                renewalDate: s,
                monthlySpend: a,
                save: E,
            };
        })(k);
    async function F() {
        try {
            (await D(), (0, d.P0)({ text: C.intl.string(x.default["2WKfG1"]), variant: "success" }), l());
        } catch {
            (0, d.P0)({ text: C.intl.string(x.default.Wu8BK2), variant: "critical" });
        }
    }
    let G = [
            { variant: "secondary", text: C.intl.string(C.t["ETE/oC"]), onClick: l, disabled: P },
            N
                ? {
                      variant: "critical-primary",
                      text: C.intl.string(x.default.JZDGJ8),
                      onClick: F,
                      disabled: P,
                      loading: P,
                  }
                : { text: C.intl.string(C.t["R3BPH+"]), onClick: F, disabled: !M || P, loading: P },
        ],
        I = null != L && L > 0 ? (0, g.$g)(L, S) : null;
    return (0, a.jsx)(r.a, {
        transitionState: n,
        onClose: l,
        title: C.intl.string(x.default.oBkFiL),
        subtitle: C.intl.string(x.default.IFguF2),
        actions: G,
        children: (0, a.jsxs)(o.B, {
            gap: 8,
            children: [
                (0, a.jsx)(u.E, { variant: "body-sm/semibold", children: C.intl.string(x.default.gMeekL) }),
                (0, a.jsx)(u.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children: C.intl.formatToPlainString(x.default.IWdrfp, { date: w }),
                }),
                (0, a.jsx)("div", {
                    className: B ? y.B : void 0,
                    children: (0, a.jsx)(c.k, {
                        label: C.intl.string(x.default.gMeekL),
                        hideLabel: !0,
                        value: v,
                        onChange: j,
                        leading: v.length > 0 ? E : void 0,
                        placeholder: C.intl.string(x.default.YEnpaj),
                        inputMode: A > 0 ? "decimal" : "numeric",
                    }),
                }),
                null == I
                    ? null
                    : B
                      ? (0, a.jsxs)(o.B, {
                            direction: "horizontal",
                            gap: 6,
                            align: "start",
                            children: [
                                (0, a.jsx)(s.WarningIcon, { size: "sm", color: e.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(u.E, {
                                    variant: "body-sm/normal",
                                    className: y.i,
                                    children: C.intl.formatToPlainString(x.default.Tk6x4X, { amount: I, date: w }),
                                }),
                            ],
                        })
                      : (0, a.jsx)(u.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: C.intl.formatToPlainString(x.default.pfAlRY, { amount: I }),
                        }),
            ],
        }),
    });
}
