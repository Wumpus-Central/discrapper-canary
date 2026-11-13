var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(363426),
    o = n(559106),
    d = n(820081),
    c = n(834730),
    u = n(140379);
n.d(
    t,
    {},
    {
        J: function (e) {
            let {
                    checked: t,
                    description: n,
                    onChange: a,
                    disabled: _ = !1,
                    displayOnly: E,
                    label: A,
                    labeledBy: f,
                    leadingIcon: h,
                    value: I,
                    labelType: p = "primary",
                    usageVariant: m = "single",
                } = e,
                g = (0, r.useRef)(null),
                T = (0, r.useRef)(null),
                S = (0, r.useRef)(null),
                N = r.useId(),
                C = `${N}label`,
                O = `${N}description`,
                [R, L] = (0, r.useState)(void 0),
                y = (0, r.useRef)(!1),
                D = null != A && "" !== A,
                b = null != n && "" !== n,
                v = null != h ? h : null;
            (0, r.useEffect)(() => {
                if (!y.current) {
                    y.current = !0;
                    return;
                }
                L(t ? "animateIn" : "animateOut");
            }, [t]);
            let P = s()(u.nj, {
                    [u.GA]: D,
                    [u.Gu]: D && null != v,
                    [u.HY]: "animateIn" === R,
                    [u.U9]: "animateOut" === R,
                    [u.YK]: "indicator" !== m,
                }),
                M = (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: u.fb,
                            ref: g,
                            "aria-hidden": !0,
                            children: [
                                (0, i.jsx)("svg", {
                                    className: u.AI,
                                    width: 20,
                                    height: 20,
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)("circle", {
                                        className: u.Om,
                                        cx: "10",
                                        cy: "10",
                                        r: "1.1",
                                        fill: "currentColor",
                                    }),
                                }),
                                (0, i.jsx)(d.CheckmarkSmallBoldIcon, {
                                    className: u.Ho,
                                    size: "sm",
                                    color: "currentColor",
                                }),
                            ],
                        }),
                        D &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    null != v &&
                                        (0, i.jsx)(v, {
                                            className: u.iE,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, i.jsx)(c.E, {
                                        id: C,
                                        tag: "span",
                                        className: u.Pf,
                                        variant: "body-md/normal",
                                        color: "primary" === p ? "text-strong" : "text-subtle",
                                        children: A,
                                    }),
                                    b &&
                                        (0, i.jsx)(c.E, {
                                            id: O,
                                            className: u.h_,
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            children: n,
                                        }),
                                ],
                            }),
                    ],
                });
            return E
                ? (0, i.jsx)("div", {
                      className: P,
                      "data-selected": t || void 0,
                      "data-disabled": _ || void 0,
                      children: M,
                  })
                : (0, i.jsx)(o.vN, {
                      focusTarget: T,
                      ringTarget: S,
                      children: (0, i.jsx)(l.Sc, {
                          ref: S,
                          inputRef: T,
                          "aria-labelledby": f ?? (D ? C : void 0),
                          "aria-describedby": D && b ? O : void 0,
                          isSelected: t,
                          onChange: function (e) {
                              null != a && a(e);
                          },
                          isDisabled: _,
                          isReadOnly: E,
                          "data-mana-component": "checkbox",
                          className: P,
                          value: String(I),
                          children: M,
                      }),
                  });
        },
    },
);
