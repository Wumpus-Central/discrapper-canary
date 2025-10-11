n.d(t, { Z: () => E });
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
    h = n(50130),
    g = n(28671),
    m = n(430790),
    b = n(795990),
    _ = n(388032),
    O = n(66582);
function E() {
    let { trackUserProfileEditAction: e } = (0, p.KZ)(),
        t = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        { application: E, config: v } = (0, h.G)(),
        { token: y, fetched: I } = (0, c.o)(null == v ? void 0 : v.application_id),
        S = i.useMemo(
            () =>
                (null == v ? void 0 : v.application_id) != null
                    ? new f.q({
                          type: l.l.APPLICATION,
                          applicationId: v.application_id,
                      })
                    : null,
            [null == v ? void 0 : v.application_id],
        ),
        C = i.useCallback(() => {
            e({ action: "PRESS_ADD_WIDGET" }),
                (0, s.ZDy)(
                    async () => {
                        let { default: t } = await n.e("38576").then(n.bind(n, 925170));
                        return (n) => {
                            var i, l;
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
                                (l = l = { trackUserProfileEditAction: e }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                i),
                            );
                        };
                    },
                    { stackingBehavior: "stack" },
                );
        }, [e]);
    if (null == t || null == E || null == S || !I)
        return (0, r.jsx)("div", {
            className: O.loading,
            children: (0, r.jsx)(s.$jN, {}),
        });
    if (null == y) return (0, r.jsx)(b.Z, {});
    let T = (0, r.jsxs)(s.Kqy, {
        gap: 4,
        className: O.header,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-md/medium",
                color: "header-primary",
                children: _.intl.string(_.t.oqalCw),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: _.intl.format(_.t.YnNFWV, { applicationName: E.name }),
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
                    return (0, r.jsxs)(s.Kqy, {
                        gap: 16,
                        align: "center",
                        children: [
                            (0, r.jsx)(s.LZC, { size: 32 }),
                            T,
                            (0, r.jsx)(g.Z, {
                                user: t,
                                application: E,
                                onDismiss: i,
                            }),
                            (0, r.jsx)(m.Z, {}),
                        ],
                    });
                case null:
                    return (0, r.jsxs)(s.Kqy, {
                        gap: 32,
                        align: "center",
                        children: [
                            (0, r.jsx)(s.LZC, { size: 128 }),
                            T,
                            (0, r.jsx)(s.Button, {
                                icon: s.qJs,
                                text: _.intl.string(_.t.lBG2s7),
                                size: "md",
                                color: "secondary",
                                onClick: C,
                            }),
                        ],
                    });
            }
        },
    });
}
