l.d(n, { default: () => S });
var e = l(477900),
    a = l(582128),
    i = l(646514),
    r = l(189213),
    s = l(331322),
    o = l(738188),
    u = l(834730),
    d = l(858899),
    c = l(95477),
    g = l(289873),
    f = l(580630),
    m = l(465323),
    h = l(855986),
    p = l(389462),
    x = l(899847),
    b = l(695515),
    y = l(361157),
    C = l(300538),
    k = l(665956),
    v = l(792996),
    j = l(681364);
function S(t) {
    let { transitionState: n, onClose: l, teenId: S } = t,
        {
            isLoaded: E,
            amountInput: A,
            handleAmountChange: N,
            currency: w,
            currencySymbol: B,
            exponent: L,
            isClearingCap: M,
            isOverspending: P,
            canSave: T,
            isSubmitting: D,
            renewalDate: F,
            monthlySpend: G,
            save: I,
        } = (function (t, n) {
            let l = p.fD.useControlledSetting(t),
                e = (0, h.bG)([b.A], () => b.A.getSpendingLimit()),
                i = (0, h.bG)([b.A], () => b.A.getMonthlyPurchases()?.total_amount ?? null),
                r = (l?.currency ?? e?.currency ?? "usd").toLowerCase(),
                s = m.yR[r] ?? 2,
                o = a.useMemo(() => (0, y.Qn)(r), [r]),
                u = a.useMemo(y.o3, []),
                d = a.useRef(!1),
                c = (0, C.A)(t, () => {
                    ((d.current = !0), n());
                });
            a.useEffect(
                () => () => {
                    d.current && x.Ay.showTeenSettingsLoadErrorToast();
                },
                [],
            );
            let [g, f] = a.useState(null),
                k = g ?? (null == l ? "" : String(l.amount / 10 ** s)),
                v = a.useCallback((t) => f((0, y.cU)(t, s)), [s]),
                j = "" === k && null != l,
                S = parseFloat(k),
                E = !Number.isNaN(S) && S >= 0,
                A = c && (j || E),
                N = E ? Math.round(S * 10 ** s) : null,
                w = null != i && i > 0 && null != N && N <= i,
                [B, L] = a.useState(!1),
                M = a.useCallback(async () => {
                    if (A) {
                        L(!0);
                        try {
                            j
                                ? await p.fD.updateControlledSetting(t, null)
                                : null != N && (await p.fD.updateControlledSetting(t, { amount: N, currency: r }));
                        } finally {
                            L(!1);
                        }
                    }
                }, [A, j, N, t, r]);
            return {
                isLoaded: c,
                amountInput: k,
                handleAmountChange: v,
                currency: r,
                currencySymbol: o,
                exponent: s,
                isClearingCap: j,
                isOverspending: w,
                canSave: A,
                isSubmitting: B,
                renewalDate: u,
                monthlySpend: i,
                save: M,
            };
        })(S, l);
    async function R() {
        try {
            (await I(), (0, d.P0)({ text: v.intl.string(k.default["2WKfG1"]), variant: "success" }), l());
        } catch {
            (0, d.P0)({ text: v.intl.string(k.default.Wu8BK2), variant: "critical" });
        }
    }
    let W = { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: l, disabled: D },
        _ = M
            ? {
                  variant: "critical-primary",
                  text: v.intl.string(k.default.JZDGJ8),
                  onClick: R,
                  disabled: D,
                  loading: D,
              }
            : { text: v.intl.string(v.t["R3BPH+"]), onClick: R, disabled: !T || D, loading: D },
        K = null != G && G > 0 ? (0, f.$g)(G, w) : null;
    return (0, e.jsx)(r.a, {
        transitionState: n,
        onClose: l,
        title: v.intl.string(k.default.oBkFiL),
        subtitle: v.intl.string(k.default.IFguF2),
        actions: E ? [W, _] : [W],
        children: E
            ? (0, e.jsxs)(s.B, {
                  gap: 8,
                  children: [
                      (0, e.jsx)(u.E, { variant: "body-sm/semibold", children: v.intl.string(k.default.gMeekL) }),
                      (0, e.jsx)(u.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: v.intl.formatToPlainString(k.default.IWdrfp, { date: F }),
                      }),
                      (0, e.jsx)("div", {
                          className: P ? j.B : void 0,
                          children: (0, e.jsx)(c.k, {
                              label: v.intl.string(k.default.gMeekL),
                              hideLabel: !0,
                              value: A,
                              onChange: N,
                              leading: A.length > 0 ? B : void 0,
                              placeholder: v.intl.string(k.default.YEnpaj),
                              inputMode: L > 0 ? "decimal" : "numeric",
                          }),
                      }),
                      null == K
                          ? null
                          : P
                            ? (0, e.jsxs)(s.B, {
                                  direction: "horizontal",
                                  gap: 6,
                                  align: "start",
                                  children: [
                                      (0, e.jsx)(o.WarningIcon, {
                                          size: "sm",
                                          color: i.A.colors.ICON_FEEDBACK_WARNING,
                                      }),
                                      (0, e.jsx)(u.E, {
                                          variant: "body-sm/normal",
                                          className: j.i,
                                          children: v.intl.formatToPlainString(k.default.Tk6x4X, {
                                              amount: K,
                                              date: F,
                                          }),
                                      }),
                                  ],
                              })
                            : (0, e.jsx)(u.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: v.intl.formatToPlainString(k.default.pfAlRY, { amount: K }),
                              }),
                  ],
              })
            : (0, e.jsx)(g.y, {}),
    });
}
