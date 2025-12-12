n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    l = n(296009),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(491662),
    u = n(243778),
    d = n(594174),
    f = n(785717),
    g = n(931847),
    p = n(50130),
    m = n(28671),
    b = n(430790),
    h = n(795990),
    y = n(388032),
    O = n(66582);
function v() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, f.KZ)(),
        v = i.useRef(!1),
        j = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        { application: x, config: P } = (0, p.G)(),
        { token: _, fetched: I } = (0, c.o)(null == P ? void 0 : P.application_id),
        w = i.useMemo(
            () =>
                (null == P ? void 0 : P.application_id) != null
                    ? new g.q({
                          type: l.l.APPLICATION,
                          applicationId: P.application_id,
                      })
                    : null,
            [null == P ? void 0 : P.application_id],
        ),
        S = i.useCallback(() => {
            t({ action: "PRESS_ADD_WIDGET" }),
                (0, s.ZDy)(
                    async () => {
                        let { default: e } = await n.e("38576").then(n.bind(n, 925170));
                        return (n) => {
                            var i, l;
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
                                (l = l = { trackUserProfileEditAction: t }),
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
        }, [t]),
        E = null == j || null == x || null == w || !I,
        T = null != _;
    if (
        (i.useEffect(() => {
            !E &&
                T &&
                (v.current ||
                    (e({
                        action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE",
                        applicationId: x.id,
                    }),
                    (v.current = !0)));
        }, [E, T, e, null == x ? void 0 : x.id]),
        E)
    )
        return (0, r.jsx)("div", {
            className: O.loading,
            children: (0, r.jsx)(s.$jN, {}),
        });
    if (!T) return (0, r.jsx)(h.Z, {});
    let C = (0, r.jsxs)(s.Kqy, {
        gap: 4,
        className: O.header,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: y.intl.string(y.t["oqalC+"]),
            }),
            (0, r.jsx)(s.Text, {
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
                    return (0, r.jsxs)(s.Kqy, {
                        gap: 16,
                        align: "center",
                        children: [
                            (0, r.jsx)(s.LZC, { size: 32 }),
                            C,
                            (0, r.jsx)(m.Z, {
                                user: j,
                                application: x,
                                onDismiss: n,
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
                            C,
                            (0, r.jsx)(s.Button, {
                                icon: s.qJs,
                                text: y.intl.string(y.t["lBG2s/"]),
                                size: "md",
                                color: "secondary",
                                onClick: S,
                            }),
                        ],
                    });
            }
        },
    });
}
