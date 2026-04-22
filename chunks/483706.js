l.d(t, { p: () => k });
var n = l(627968),
    i = l(64700),
    s = l(331322),
    a = l(834730),
    r = l(821609),
    d = l(192308),
    c = l(939249),
    u = l(847374),
    o = l(349288),
    x = l(308528),
    h = l(922529),
    m = l(780964),
    g = l(779733),
    j = l(858897),
    A = l(899847),
    v = l(219893),
    f = l(936926),
    E = l(809697),
    N = l(153739),
    p = l(534654),
    T = l(834981),
    S = l(225014),
    y = l(191627),
    C = l(602339),
    _ = l(985018),
    I = l(587349);
let b = (e) => {
        let { title: t, buttonText: l, onButtonPress: i, readOnly: d = !1 } = e;
        return (0, n.jsxs)(s.B, {
            padding: { top: 12, bottom: 12 },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, n.jsx)(a.E, { variant: "text-md/medium", children: t }),
                (0, n.jsx)("div", {
                    className: d ? I.nh : void 0,
                    children: (0, n.jsx)(r.$, { text: l, onClick: i, variant: "secondary", size: "sm", disabled: d }),
                }),
            ],
        });
    },
    R = (e) => {
        let { teenId: t, readOnly: o = !1 } = e,
            x = (0, N.y3)(),
            h = x?.restrictedSchedule?.rules ?? [],
            m = (0, v.I2)(h),
            [g, j] = i.useState(m.length > 0);
        i.useEffect(() => {
            m.length > 0 && j(!0);
        }, [m.length]);
        let A = () => {
            (0, d.openModalLazy)(async () => {
                let { default: e } = await l.e("38842").then(l.bind(l, 6241));
                return (l) => (0, n.jsx)(e, { ...l, teenId: t });
            });
        };
        return 0 === m.length
            ? (0, n.jsx)(b, {
                  title: _.intl.string(C.default["1Op+NP"]),
                  buttonText: _.intl.string(C.default.OwFF4o),
                  onButtonPress: A,
                  readOnly: o,
              })
            : (0, n.jsxs)(s.B, {
                  direction: "vertical",
                  gap: 0,
                  children: [
                      (0, n.jsxs)(c.D, {
                          className: I.dV,
                          onClick: () => j((e) => !e),
                          children: [
                              (0, n.jsx)("div", {
                                  className: I.WB,
                                  children: (0, n.jsxs)(s.B, {
                                      direction: "vertical",
                                      gap: 4,
                                      children: [
                                          (0, n.jsx)(a.E, {
                                              variant: "text-md/medium",
                                              children: _.intl.string(C.default["1Op+NP"]),
                                          }),
                                          (0, n.jsx)(a.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children: _.intl.formatToPlainString(C.default.XfwcpX, {
                                                  count: m.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: I.pt,
                                  children: (0, n.jsx)(u.a, {
                                      size: "sm",
                                      color: "currentColor",
                                      className: `${I.ai} ${g ? I.hg : ""}`,
                                  }),
                              }),
                          ],
                      }),
                      g &&
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  m.map((e) => (0, n.jsx)(S.A, { rule: e, teenId: t, readOnly: o }, e.ruleId)),
                                  (0, n.jsx)(s.B, {
                                      className: `${I.Dp} ${o ? I.nh : ""}`,
                                      children: (0, n.jsx)(r.$, {
                                          text: _.intl.string(C.default.OwFF4o),
                                          onClick: A,
                                          variant: "secondary",
                                          size: "sm",
                                          disabled: o,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              });
    },
    L = () => {
        let e = (0, T.vx)(),
            t = (0, N.y3)(),
            l = (0, f.Vh)({ location: "TimeControlsRow" }),
            i = () => {
                (0, j.openUserSettings)(m.X.CONTENT_AND_SOCIAL_PANEL);
            };
        return (0, n.jsxs)(s.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, n.jsxs)(s.B, {
                    padding: { bottom: 12 },
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    gap: 32,
                    children: [
                        (0, n.jsxs)(s.B, {
                            direction: "vertical",
                            gap: 4,
                            children: [
                                (0, n.jsx)(a.E, {
                                    variant: "text-sm/semibold",
                                    children: _.intl.string(C.default.ahKIJO),
                                }),
                                (0, n.jsx)(a.E, {
                                    variant: "text-md/medium",
                                    color: "text-muted",
                                    children: _.intl.format(C.default.X9rW0j, {
                                        openSettingsHook: (e, t) =>
                                            (0, n.jsx)(o.Anchor, { onClick: i, children: e }, t),
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(r.$, {
                            text: _.intl.formatToPlainString(C.default.ggcjPR, { count: e.length }),
                            onClick: () => {
                                (0, g.default)(), x.A.openPrivateChannel({ recipientIds: e });
                            },
                            variant: "secondary",
                            size: "sm",
                        }),
                    ],
                }),
                l &&
                    t?.id != null &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(h.A, { className: I.yF }), (0, n.jsx)(R, { teenId: t.id, readOnly: !0 })],
                    }),
            ],
        });
    },
    D = () => {
        let e = (0, N.y3)(),
            t = (0, N.tl)(),
            { handleTabChange: l } = (0, E.A)(),
            r = (0, f.Vh)({ location: "TimeControlsRow" });
        i.useEffect(() => {
            e?.id != null && t && A.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]);
        let d = (e) => {
            l(e);
        };
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(s.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, n.jsx)(a.E, { variant: "text-sm/semibold", children: _.intl.string(C.default.ahKIJO) }),
                        (0, n.jsx)(a.E, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: _.intl.string(C.default.Sv236e),
                        }),
                    ],
                }),
                (0, n.jsx)(b, {
                    title: _.intl.string(_.t["+o1pDZ"]),
                    buttonText: _.intl.string(_.t.bt75uw),
                    onButtonPress: () => d(y.u9.CONTENT_AND_SOCIAL),
                }),
                (0, n.jsx)(h.A, { className: I.yF }),
                (0, n.jsx)(b, {
                    title: _.intl.string(_.t.OAuOHD),
                    buttonText: _.intl.string(_.t.bt75uw),
                    onButtonPress: () => d(y.u9.DATA_AND_PRIVACY),
                }),
                r &&
                    e?.id != null &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(h.A, { className: I.yF }), (0, n.jsx)(R, { teenId: e.id })],
                    }),
            ],
        });
    },
    k = () => {
        let e = (0, p.A)();
        return 0 === (0, T.vx)().length
            ? null
            : (0, n.jsx)("div", { className: I.kL, children: e ? (0, n.jsx)(L, {}) : (0, n.jsx)(D, {}) });
    };
