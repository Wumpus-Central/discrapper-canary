n.d(t, { Z: () => T });
var r = n(951288),
    i = n(647438),
    l = n(296009),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(491662),
    u = n(243778),
    d = n(594174),
    p = n(785717),
    f = n(931847),
    h = n(86419),
    g = n(50130),
    m = n(860717),
    b = n(430790),
    _ = n(795990),
    O = n(872269),
    E = n(228168),
    y = n(921944),
    v = n(388032),
    I = n(267233);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T() {
    let e = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        { trackUserProfileEditAction: t } = (0, p.KZ)(),
        { application: T, config: j } = (0, g.G)(),
        { token: P, loading: x } = (0, c.o)(null == j ? void 0 : j.application_id),
        A = i.useMemo(
            () =>
                (null == j ? void 0 : j.application_id) != null
                    ? new f.q({
                          type: l.l.APPLICATION,
                          applicationId: j.application_id,
                      })
                    : null,
            [null == j ? void 0 : j.application_id],
        ),
        Z = i.useCallback(() => {
            null != A &&
                ((0, h.qH)(A.type, A),
                t({
                    action: "WIDGET_ADDED",
                    widgetEdited: A.type,
                }),
                (0, O.L$)(E.qb.WIDGET_ADDED));
        }, [A, t]),
        w = i.useCallback(() => {
            t({ action: "PRESS_ADD_WIDGET" }),
                (0, s.ZDy)(
                    async () => {
                        let { default: e } = await n.e("38576").then(n.bind(n, 925170));
                        return (n) => (0, r.jsx)(e, C(S({}, n), { trackUserProfileEditAction: t }));
                    },
                    { stackingBehavior: "stack" },
                );
        }, [t]);
    if (null == e || null == T || null == A || x)
        return (0, r.jsx)("div", {
            className: I.loading,
            children: (0, r.jsx)(s.$jN, {}),
        });
    if (null == P) return (0, r.jsx)(_.Z, {});
    let L = (0, r.jsxs)(s.Kqy, {
        gap: 4,
        className: I.header,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: "heading-md/medium",
                color: "header-primary",
                children: v.intl.string(v.t.oqalCw),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: v.intl.format(v.t.YnNFWV, { applicationName: T.name }),
            }),
        ],
    });
    return (0, r.jsx)(u.ZP, {
        contentTypes: [o.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET],
        bypassAutoDismiss: !0,
        children: (t) => {
            let { visibleContent: n, markAsDismissed: i } = t;
            switch (n) {
                case o.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET:
                    return (0, r.jsxs)(s.Kqy, {
                        gap: 16,
                        align: "center",
                        children: [
                            (0, r.jsx)(s.LZC, { size: 32 }),
                            L,
                            (0, r.jsx)(m.Z, {
                                user: e,
                                widget: A,
                                cta: (0, r.jsx)(N, {
                                    heading: v.intl.format(v.t.OIzLCw, { applicationName: T.name }),
                                    content: v.intl.format(v.t.BQySrq, { applicationName: T.name }),
                                    buttons: (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(s.ua7, {
                                                text: v.intl.string(v.t.WAI6xs),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        s.Yd2,
                                                        C(S({}, e), {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            icon: s.Dio,
                                                            "aria-label": v.intl.string(v.t.WAI6xs),
                                                            onClick: () => {
                                                                i(y.L.USER_DISMISS);
                                                            },
                                                        }),
                                                    ),
                                            }),
                                            (0, r.jsx)(s.ua7, {
                                                text: v.intl.string(v.t.lBG2s7),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        s.Yd2,
                                                        C(S({}, e), {
                                                            variant: "primary",
                                                            size: "sm",
                                                            icon: s.kmB,
                                                            "aria-label": v.intl.formatToPlainString(v.t.KfGahI, {
                                                                applicationName: T.name,
                                                            }),
                                                            onClick: () => {
                                                                i(y.L.TAKE_ACTION), Z();
                                                            },
                                                        }),
                                                    ),
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            (0, r.jsx)(b.Z, {}),
                        ],
                    });
                case null:
                    return (0, r.jsxs)(s.Kqy, {
                        gap: 32,
                        align: "center",
                        children: [
                            (0, r.jsx)(s.LZC, { size: 128 }),
                            L,
                            (0, r.jsx)(s.zxk, {
                                icon: s.qJs,
                                text: v.intl.string(v.t.lBG2s7),
                                size: "md",
                                color: "secondary",
                                onClick: w,
                            }),
                        ],
                    });
            }
        },
    });
}
function N(e) {
    return (0, r.jsxs)(s.Kqy, {
        direction: "horizontal",
        gap: 24,
        padding: 16,
        fullWidth: !1,
        className: I.cta,
        children: [
            (0, r.jsxs)(s.Kqy, {
                gap: 4,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        children: e.heading,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: e.content,
                    }),
                ],
            }),
            (0, r.jsx)(s.Kqy, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                justify: "end",
                fullWidth: !1,
                children: e.buttons,
            }),
        ],
    });
}
