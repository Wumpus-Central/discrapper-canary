l.d(n, { default: () => S });
var a = l(477900),
    e = l(582128),
    i = l(661531),
    r = l(189213),
    o = l(331322),
    s = l(738188),
    u = l(834730),
    d = l(376357),
    c = l(95477),
    g = l(580630),
    m = l(465323),
    f = l(17928),
    h = l(389462),
    x = l(695515),
    C = l(361157),
    p = l(513687),
    k = l(660183),
    b = l(681364);
function S(t) {
    let { transitionState: n, onClose: l, teenId: S } = t,
        {
            amountInput: j,
            handleAmountChange: v,
            currency: y,
            currencySymbol: E,
            exponent: A,
            isClearingCap: N,
            isOverspending: B,
            canSave: L,
            isSubmitting: M,
            renewalDate: P,
            monthlySpend: w,
            save: F,
        } = (function (t) {
            let n = h.fD.useControlledSetting(t),
                l = (0, f.bG)([x.A], () => x.A.getSpendingLimit()),
                a = (0, f.bG)([x.A], () => x.A.getMonthlyPurchases()?.total_amount ?? null),
                i = (n?.currency ?? l?.currency ?? "usd").toLowerCase(),
                r = m.yR[i] ?? 2,
                o = e.useMemo(() => (0, C.Qn)(i), [i]),
                s = e.useMemo(C.o3, []),
                [u, d] = e.useState(() => (null == n ? "" : String(n.amount / 10 ** r))),
                c = e.useCallback((t) => d((0, C.cU)(t, r)), [r]),
                g = "" === u && null != n,
                p = parseFloat(u),
                k = !Number.isNaN(p) && p >= 0,
                b = g || k,
                S = k ? Math.round(p * 10 ** r) : null,
                j = null != a && a > 0 && null != S && S <= a,
                [v, y] = e.useState(!1),
                E = e.useCallback(async () => {
                    if (b) {
                        y(!0);
                        try {
                            g
                                ? await h.fD.updateControlledSetting(t, null)
                                : null != S && (await h.fD.updateControlledSetting(t, { amount: S, currency: i }));
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
        })(S);
    async function I() {
        try {
            (await F(), (0, d.P0)((0, d.ox)(k.intl.string(p.default["2WKfG1"]), d.Ck.SUCCESS)), l());
        } catch {
            (0, d.P0)((0, d.ox)(k.intl.string(p.default.Wu8BK2), d.Ck.FAILURE));
        }
    }
    let D = [
            { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: l, disabled: M },
            N
                ? {
                      variant: "critical-primary",
                      text: k.intl.string(p.default.JZDGJ8),
                      onClick: I,
                      disabled: M,
                      loading: M,
                  }
                : { text: k.intl.string(k.t["R3BPH+"]), onClick: I, disabled: !L || M, loading: M },
        ],
        G = null != w && w > 0 ? (0, g.$g)(w, y) : null;
    return (0, a.jsx)(r.a, {
        transitionState: n,
        onClose: l,
        title: k.intl.string(p.default.oBkFiL),
        subtitle: k.intl.string(p.default.IFguF2),
        actions: D,
        children: (0, a.jsxs)(o.B, {
            gap: 8,
            children: [
                (0, a.jsx)(u.E, { variant: "text-sm/semibold", children: k.intl.string(p.default.gMeekL) }),
                (0, a.jsx)(u.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: k.intl.formatToPlainString(p.default.IWdrfp, { date: P }),
                }),
                (0, a.jsx)("div", {
                    className: B ? b.B : void 0,
                    children: (0, a.jsx)(c.k, {
                        label: k.intl.string(p.default.gMeekL),
                        hideLabel: !0,
                        value: j,
                        onChange: v,
                        leading: j.length > 0 ? E : void 0,
                        placeholder: k.intl.string(p.default.YEnpaj),
                        inputMode: A > 0 ? "decimal" : "numeric",
                    }),
                }),
                null == G
                    ? null
                    : B
                      ? (0, a.jsxs)(o.B, {
                            direction: "horizontal",
                            gap: 6,
                            align: "start",
                            children: [
                                (0, a.jsx)(s.WarningIcon, { size: "sm", color: i.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    className: b.i,
                                    children: k.intl.formatToPlainString(p.default.Tk6x4X, { amount: G, date: P }),
                                }),
                            ],
                        })
                      : (0, a.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: k.intl.formatToPlainString(p.default.pfAlRY, { amount: G }),
                        }),
            ],
        }),
    });
}
