e.d(n, { default: () => S });
var l = e(477900),
    a = e(582128),
    i = e(646514),
    r = e(189213),
    s = e(331322),
    o = e(738188),
    u = e(834730),
    d = e(858899),
    c = e(95477),
    g = e(289873),
    f = e(580630),
    m = e(465323),
    h = e(855986),
    p = e(389462),
    x = e(899847),
    y = e(695515),
    b = e(361157),
    C = e(153739),
    k = e(665956),
    v = e(792996),
    E = e(681364);
function S(t) {
    let { transitionState: n, onClose: e, teenId: S } = t,
        {
            isLoaded: j,
            amountInput: A,
            handleAmountChange: T,
            currency: L,
            currencySymbol: N,
            exponent: w,
            isClearingCap: B,
            isOverspending: M,
            canSave: P,
            isSubmitting: F,
            renewalDate: D,
            monthlySpend: G,
            save: I,
        } = (function (t, n) {
            let e = (0, C.Vt)(t),
                l = p.fD.useControlledSetting(t),
                i = (0, h.bG)([y.A], () => y.A.getSpendingLimit()),
                r = (0, h.bG)([y.A], () => y.A.getMonthlyPurchases()?.total_amount ?? null),
                s = (l?.currency ?? i?.currency ?? "usd").toLowerCase(),
                o = m.yR[s] ?? 2,
                u = a.useMemo(() => (0, b.Qn)(s), [s]),
                d = a.useMemo(b.o3, []),
                c = a.useRef(!1),
                g = a.useEffectEvent(() => {
                    ((c.current = !0), n());
                });
            (a.useEffect(() => {
                if (e) return;
                let n = x.Ay.onTeenSettingsLoadFailure(t, g);
                return (x.Ay.fetchTeenSettingsAndConsents(t), n);
            }, [t, e]),
                a.useEffect(
                    () => () => {
                        c.current && x.Ay.showTeenSettingsLoadErrorToast();
                    },
                    [],
                ));
            let [f, k] = a.useState(null),
                v = f ?? (null == l ? "" : String(l.amount / 10 ** o)),
                E = a.useCallback((t) => k((0, b.cU)(t, o)), [o]),
                S = "" === v && null != l,
                j = parseFloat(v),
                A = !Number.isNaN(j) && j >= 0,
                T = e && (S || A),
                L = A ? Math.round(j * 10 ** o) : null,
                N = null != r && r > 0 && null != L && L <= r,
                [w, B] = a.useState(!1),
                M = a.useCallback(async () => {
                    if (T) {
                        B(!0);
                        try {
                            S
                                ? await p.fD.updateControlledSetting(t, null)
                                : null != L && (await p.fD.updateControlledSetting(t, { amount: L, currency: s }));
                        } finally {
                            B(!1);
                        }
                    }
                }, [T, S, L, t, s]);
            return {
                isLoaded: e,
                amountInput: v,
                handleAmountChange: E,
                currency: s,
                currencySymbol: u,
                exponent: o,
                isClearingCap: S,
                isOverspending: N,
                canSave: T,
                isSubmitting: w,
                renewalDate: d,
                monthlySpend: r,
                save: M,
            };
        })(S, e);
    async function R() {
        try {
            (await I(), (0, d.P0)({ text: v.intl.string(k.default["2WKfG1"]), variant: "success" }), e());
        } catch {
            (0, d.P0)({ text: v.intl.string(k.default.Wu8BK2), variant: "critical" });
        }
    }
    let W = { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: e, disabled: F },
        _ = B
            ? {
                  variant: "critical-primary",
                  text: v.intl.string(k.default.JZDGJ8),
                  onClick: R,
                  disabled: F,
                  loading: F,
              }
            : { text: v.intl.string(v.t["R3BPH+"]), onClick: R, disabled: !P || F, loading: F },
        K = null != G && G > 0 ? (0, f.$g)(G, L) : null;
    return (0, l.jsx)(r.a, {
        transitionState: n,
        onClose: e,
        title: v.intl.string(k.default.oBkFiL),
        subtitle: v.intl.string(k.default.IFguF2),
        actions: j ? [W, _] : [W],
        children: j
            ? (0, l.jsxs)(s.B, {
                  gap: 8,
                  children: [
                      (0, l.jsx)(u.E, { variant: "body-sm/semibold", children: v.intl.string(k.default.gMeekL) }),
                      (0, l.jsx)(u.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: v.intl.formatToPlainString(k.default.IWdrfp, { date: D }),
                      }),
                      (0, l.jsx)("div", {
                          className: M ? E.B : void 0,
                          children: (0, l.jsx)(c.k, {
                              label: v.intl.string(k.default.gMeekL),
                              hideLabel: !0,
                              value: A,
                              onChange: T,
                              leading: A.length > 0 ? N : void 0,
                              placeholder: v.intl.string(k.default.YEnpaj),
                              inputMode: w > 0 ? "decimal" : "numeric",
                          }),
                      }),
                      null == K
                          ? null
                          : M
                            ? (0, l.jsxs)(s.B, {
                                  direction: "horizontal",
                                  gap: 6,
                                  align: "start",
                                  children: [
                                      (0, l.jsx)(o.WarningIcon, {
                                          size: "sm",
                                          color: i.A.colors.ICON_FEEDBACK_WARNING,
                                      }),
                                      (0, l.jsx)(u.E, {
                                          variant: "body-sm/normal",
                                          className: E.i,
                                          children: v.intl.formatToPlainString(k.default.Tk6x4X, {
                                              amount: K,
                                              date: D,
                                          }),
                                      }),
                                  ],
                              })
                            : (0, l.jsx)(u.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: v.intl.formatToPlainString(k.default.pfAlRY, { amount: K }),
                              }),
                  ],
              })
            : (0, l.jsx)(g.y, {}),
    });
}
