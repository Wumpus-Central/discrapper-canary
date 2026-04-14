n.d(t, { p: () => j });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(397927),
    a = n(308528),
    o = n(922529),
    d = n(780964),
    c = n(779733),
    u = n(858897),
    m = n(899847),
    g = n(219893),
    _ = n(936926),
    x = n(809697),
    h = n(153739),
    A = n(534654),
    p = n(834981),
    T = n(225014),
    f = n(191627),
    S = n(221425),
    E = n(985018),
    b = n(288530);
let C = (e) => {
        let { title: t, buttonText: n, onButtonPress: s, readOnly: a = !1 } = e;
        return (0, i.jsxs)(l.BJc, {
            padding: { top: 12, bottom: 12 },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [
                (0, i.jsx)(l.EYj, { variant: "text-md/medium", children: t }),
                (0, i.jsx)("div", {
                    className: a ? b.nh : void 0,
                    children: (0, i.jsx)(r.Button, {
                        text: n,
                        onClick: s,
                        variant: "secondary",
                        size: "sm",
                        disabled: a,
                    }),
                }),
            ],
        });
    },
    v = (e) => {
        let { teenId: t, readOnly: a = !1 } = e,
            o = (0, h.y3)(),
            d = o?.restrictedSchedule?.rules ?? [],
            c = (0, g.I2)(d),
            [u, m] = s.useState(c.length > 0);
        s.useEffect(() => {
            c.length > 0 && m(!0);
        }, [c.length]);
        let _ = () => {
            (0, r.mMO)(async () => {
                let { default: e } = await n.e("38842").then(n.bind(n, 6241));
                return (n) => (0, i.jsx)(e, { ...n, teenId: t });
            });
        };
        return 0 === c.length
            ? (0, i.jsx)(C, {
                  title: E.intl.string(S.default["1Op+NP"]),
                  buttonText: E.intl.string(S.default.OwFF4o),
                  onButtonPress: _,
                  readOnly: a,
              })
            : (0, i.jsxs)(l.BJc, {
                  direction: "vertical",
                  gap: 0,
                  children: [
                      (0, i.jsxs)(r.DUT, {
                          className: b.dV,
                          onClick: () => m((e) => !e),
                          children: [
                              (0, i.jsx)("div", {
                                  className: b.WB,
                                  children: (0, i.jsxs)(l.BJc, {
                                      direction: "vertical",
                                      gap: 4,
                                      children: [
                                          (0, i.jsx)(l.EYj, {
                                              variant: "text-md/medium",
                                              children: E.intl.string(S.default["1Op+NP"]),
                                          }),
                                          (0, i.jsx)(l.EYj, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children: E.intl.formatToPlainString(S.default.XfwcpX, {
                                                  count: c.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                  className: b.pt,
                                  children: (0, i.jsx)(r.abt, {
                                      size: "sm",
                                      color: "currentColor",
                                      className: `${b.ai} ${u ? b.hg : ""}`,
                                  }),
                              }),
                          ],
                      }),
                      u &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  c.map((e) => (0, i.jsx)(T.A, { rule: e, teenId: t, readOnly: a }, e.ruleId)),
                                  (0, i.jsx)(l.BJc, {
                                      className: `${b.Dp} ${a ? b.nh : ""}`,
                                      children: (0, i.jsx)(r.Button, {
                                          text: E.intl.string(S.default.OwFF4o),
                                          onClick: _,
                                          variant: "secondary",
                                          size: "sm",
                                          disabled: a,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              });
    },
    N = () => {
        let e = (0, p.vx)(),
            t = (0, h.y3)(),
            n = (0, _.Vh)({ location: "TimeControlsRow" }),
            s = () => {
                (0, u.openUserSettings)(d.X.CONTENT_AND_SOCIAL_PANEL);
            };
        return (0, i.jsxs)(l.BJc, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, i.jsxs)(l.BJc, {
                    padding: { bottom: 12 },
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    gap: 32,
                    children: [
                        (0, i.jsxs)(l.BJc, {
                            direction: "vertical",
                            gap: 4,
                            children: [
                                (0, i.jsx)(l.EYj, {
                                    variant: "text-sm/semibold",
                                    children: E.intl.string(S.default.ahKIJO),
                                }),
                                (0, i.jsx)(l.EYj, {
                                    variant: "text-md/medium",
                                    color: "text-muted",
                                    children: E.intl.format(S.default.X9rW0j, {
                                        openSettingsHook: (e, t) => (0, i.jsx)(r.MzZ, { onClick: s, children: e }, t),
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(r.Button, {
                            text: E.intl.formatToPlainString(S.default.ggcjPR, { count: e.length }),
                            onClick: () => {
                                (0, c.default)(), a.A.openPrivateChannel({ recipientIds: e });
                            },
                            variant: "secondary",
                            size: "sm",
                        }),
                    ],
                }),
                n &&
                    t?.id != null &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.A, { className: b.yF }), (0, i.jsx)(v, { teenId: t.id, readOnly: !0 })],
                    }),
            ],
        });
    },
    I = () => {
        let e = (0, h.y3)(),
            t = (0, h.tl)(),
            { handleTabChange: n } = (0, x.A)(),
            r = (0, _.Vh)({ location: "TimeControlsRow" });
        s.useEffect(() => {
            e?.id != null && t && m.Ay.fetchTeenSettingsAndConsents(e?.id);
        }, [e?.id, t]);
        let a = (e) => {
            n(e);
        };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(l.BJc, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, i.jsx)(l.EYj, { variant: "text-sm/semibold", children: E.intl.string(S.default.ahKIJO) }),
                        (0, i.jsx)(l.EYj, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: E.intl.string(S.default.Sv236e),
                        }),
                    ],
                }),
                (0, i.jsx)(C, {
                    title: E.intl.string(E.t["+o1pDZ"]),
                    buttonText: E.intl.string(E.t.bt75uw),
                    onButtonPress: () => a(f.u9.CONTENT_AND_SOCIAL),
                }),
                (0, i.jsx)(o.A, { className: b.yF }),
                (0, i.jsx)(C, {
                    title: E.intl.string(E.t.OAuOHD),
                    buttonText: E.intl.string(E.t.bt75uw),
                    onButtonPress: () => a(f.u9.DATA_AND_PRIVACY),
                }),
                r &&
                    e?.id != null &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.A, { className: b.yF }), (0, i.jsx)(v, { teenId: e.id })],
                    }),
            ],
        });
    },
    j = () => {
        let e = (0, A.A)();
        return 0 === (0, p.vx)().length
            ? null
            : (0, i.jsx)("div", { className: b.kL, children: e ? (0, i.jsx)(N, {}) : (0, i.jsx)(I, {}) });
    };
