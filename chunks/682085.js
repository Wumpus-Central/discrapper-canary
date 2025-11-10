n.d(t, { Z: () => O });
var r = n(951288),
    i = n(647438),
    a = n(296009),
    l = n(442837),
    o = n(704215),
    c = n(481060),
    s = n(491662),
    u = n(243778),
    d = n(594174),
    g = n(785717),
    f = n(931847),
    p = n(50130),
    m = n(28671),
    b = n(430790),
    h = n(795990),
    y = n(388032),
    v = n(66582);
function O() {
    let { trackUserProfileEditAction: e } = (0, g.KZ)(),
        t = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        { application: O, config: j } = (0, p.G)(),
        { token: x, fetched: _ } = (0, s.o)(null == j ? void 0 : j.application_id),
        P = i.useMemo(
            () =>
                (null == j ? void 0 : j.application_id) != null
                    ? new f.q({
                          type: a.l.APPLICATION,
                          applicationId: j.application_id,
                      })
                    : null,
            [null == j ? void 0 : j.application_id],
        ),
        I = i.useCallback(() => {
            e({ action: "PRESS_ADD_WIDGET" }),
                (0, c.ZDy)(
                    async () => {
                        let { default: t } = await n.e("38576").then(n.bind(n, 925170));
                        return (n) => {
                            var i, a;
                            return (0, r.jsx)(
                                t,
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
                                (a = a = { trackUserProfileEditAction: e }),
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
        }, [e]);
    if (null == t || null == O || null == P || !_)
        return (0, r.jsx)("div", {
            className: v.loading,
            children: (0, r.jsx)(c.$jN, {}),
        });
    if (null == x) return (0, r.jsx)(h.Z, {});
    let w = (0, r.jsxs)(c.Kqy, {
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
                color: "text-secondary",
                children: y.intl.format(y.t.YnNFWa, { applicationName: O.name }),
            }),
        ],
    });
    return (0, r.jsx)(u.ZP, {
        contentTypes: [o.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET],
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: i } = e;
            switch (n) {
                case o.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET:
                    return (0, r.jsxs)(c.Kqy, {
                        gap: 16,
                        align: "center",
                        children: [
                            (0, r.jsx)(c.LZC, { size: 32 }),
                            w,
                            (0, r.jsx)(m.Z, {
                                user: t,
                                application: O,
                                onDismiss: i,
                            }),
                            (0, r.jsx)(b.Z, {}),
                        ],
                    });
                case null:
                    return (0, r.jsxs)(c.Kqy, {
                        gap: 32,
                        align: "center",
                        children: [
                            (0, r.jsx)(c.LZC, { size: 128 }),
                            w,
                            (0, r.jsx)(c.Button, {
                                icon: c.qJs,
                                text: y.intl.string(y.t["lBG2s/"]),
                                size: "md",
                                color: "secondary",
                                onClick: I,
                            }),
                        ],
                    });
            }
        },
    });
}
