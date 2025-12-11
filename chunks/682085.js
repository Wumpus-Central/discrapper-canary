n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    a = n(296009),
    l = n(442837),
    o = n(704215),
    c = n(481060),
    s = n(491662),
    u = n(243778),
    d = n(594174),
    f = n(785717),
    g = n(931847),
    p = n(50130),
    b = n(28671),
    m = n(430790),
    h = n(795990),
    y = n(388032),
    v = n(284459);
function O() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, f.KZ)(),
        O = i.useRef(!1),
        j = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        { application: x, config: P } = (0, p.G)(),
        { token: I, fetched: w } = (0, s.o)(null == P ? void 0 : P.application_id),
        S = i.useMemo(
            () =>
                (null == P ? void 0 : P.application_id) != null
                    ? new g.q({
                          type: a.l.APPLICATION,
                          applicationId: P.application_id,
                      })
                    : null,
            [null == P ? void 0 : P.application_id],
        ),
        E = i.useCallback(() => {
            t({ action: "PRESS_ADD_WIDGET" }),
                (0, c.ZDy)(
                    async () => {
                        let { default: e } = await n.e("38576").then(n.bind(n, 925170));
                        return (n) => {
                            var i, a;
                            return (0, r.jsx)(
                                e,
                                ((i = (function (e) {
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
                                })({}, n)),
                                (a = a = { trackUserProfileEditAction: t }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(a)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                      }),
                                i),
                            );
                        };
                    },
                    { stackingBehavior: "stack" },
                );
        }, [t]),
        _ = null == j || null == x || null == S || !w,
        T = null != I;
    if (
        (i.useEffect(() => {
            !_ &&
                T &&
                (O.current ||
                    (e({
                        action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE",
                        applicationId: x.id,
                    }),
                    (O.current = !0)));
        }, [_, T, e, null == x ? void 0 : x.id]),
        _)
    )
        return (0, r.jsx)("div", {
            className: v.loading,
            children: (0, r.jsx)(c.$jN, {}),
        });
    if (!T) return (0, r.jsx)(h.Z, {});
    let C = (0, r.jsxs)(c.Kqy, {
        gap: 4,
        className: v.header,
        children: [
            (0, r.jsx)(c.Heading, {
                variant: "heading-md/medium",
                color: "header-primary",
                children: y.intl.string(y.t["oqalC+"]),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: y.intl.format(y.t.YnNFWa, { applicationName: x.name }),
            }),
        ],
    });
    return (0, r.jsx)(u.ZP, {
        contentTypes: [o.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET],
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            switch (t) {
                case o.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET:
                    return (0, r.jsxs)(c.Kqy, {
                        gap: 16,
                        align: "center",
                        children: [
                            (0, r.jsx)(c.LZC, { size: 32 }),
                            C,
                            (0, r.jsx)(b.Z, {
                                user: j,
                                application: x,
                                onDismiss: n,
                            }),
                            (0, r.jsx)(m.Z, {}),
                        ],
                    });
                case null:
                    return (0, r.jsxs)(c.Kqy, {
                        gap: 32,
                        align: "center",
                        children: [
                            (0, r.jsx)(c.LZC, { size: 128 }),
                            C,
                            (0, r.jsx)(c.Button, {
                                icon: c.qJs,
                                text: y.intl.string(y.t["lBG2s/"]),
                                size: "md",
                                color: "secondary",
                                onClick: E,
                            }),
                        ],
                    });
            }
        },
    });
}
