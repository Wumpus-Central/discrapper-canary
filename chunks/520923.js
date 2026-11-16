var r = t(477900),
    s = t(582128),
    a = t(503698),
    i = t.n(a),
    o = t(812743),
    c = t(148839),
    l = t(84571),
    u = t(765178),
    d = t(821609),
    m = t(815021),
    f = t(311409),
    p = t(140735),
    v = t(695366),
    h = t(738188),
    y = t(885574),
    x = t(983851),
    g = t(428689),
    j = t(451394),
    A = t(116711),
    w = t(834730),
    N = t(43990),
    b = t(784189);
let I = "body-sm/normal";
function E(e) {
    let {
            variant: n,
            type: t,
            title: a,
            message: o,
            primaryAction: N,
            secondaryAction: E,
            onDismiss: C,
            themeClassName: _,
            ref: D,
        } = e,
        { i18n: T } = (0, A.G9)(),
        L = s.useId(),
        B = s.useId(),
        [S, O] = s.useState(!1),
        k = s.useRef(!1),
        F = s.useRef(!1),
        R = (0, c.A)(() => {
            k.current || ((k.current = !0), C?.());
        });
    s.useEffect(() => {
        if (!S) return;
        let e = setTimeout(R, 600);
        return () => clearTimeout(e);
    }, [S, R]);
    let z =
        null == C
            ? void 0
            : () => {
                  S || O(!0);
              };
    function G(e) {
        return S && e.target === e.currentTarget && "grid-template-rows" === e.nativeEvent.propertyName;
    }
    s.useImperativeHandle(D, () => ({ dismiss: () => z?.() }));
    let q = "status" === e.variant,
        M = "status" === e.variant ? e.role : null,
        W =
            "status" === e.variant
                ? (function (e, n) {
                      switch (e) {
                          case "critical":
                              return n.FEEDBACK_CRITICAL_ICON_A11Y_LABEL;
                          case "warning":
                              return n.FEEDBACK_WARNING_ICON_A11Y_LABEL;
                          case "info":
                              return n.FEEDBACK_INFO_ICON_A11Y_LABEL;
                          case "connected":
                              return null;
                      }
                  })(e.type, T)
                : null,
        P =
            "status" === e.variant
                ? (function (e) {
                      let n = { size: "sm", color: "currentColor", "aria-hidden": !0 };
                      switch (e.type) {
                          case "critical":
                              return (0, r.jsx)(v.CircleErrorIcon, { ...n });
                          case "warning":
                              return (0, r.jsx)(h.WarningIcon, { ...n });
                          case "info":
                              return (0, r.jsx)(y.CircleInformationIcon, { ...n });
                          case "connected":
                              switch (e.leadingAccessory) {
                                  case "voice":
                                      return (0, r.jsx)(x.VoiceNormalIcon, { ...n });
                                  case "video":
                                      return (0, r.jsx)(g.VideoIcon, { ...n });
                                  case "stage":
                                      return (0, r.jsx)(j.StageIcon, { ...n });
                              }
                      }
                  })(e)
                : null,
        K = (function (e) {
            if ("promotion" === e.variant) return e.leadingAccessory;
            switch (e.type) {
                case "info":
                    return e.leadingAccessory;
                case "critical":
                case "warning":
                case "connected":
                    return null;
            }
        })(e),
        $ = "promotion" === e.variant ? e.countdown : null,
        U = [(0, l.O)(a), (0, l.O)(o)].filter(Boolean).join(", "),
        Y = (0, c.A)(() => {
            null != M && u.O.announce([W, U].filter(Boolean).join(", "), "alert" === M ? "assertive" : "polite");
        });
    return (
        s.useEffect(() => {
            Y();
        }, [M, U, Y]),
        (0, r.jsx)("div", {
            className: i()(b.motion, S && b.exiting),
            onTransitionRun: function (e) {
                G(e) && (F.current = !0);
            },
            onTransitionEnd: function (e) {
                G(e) && R();
            },
            onTransitionCancel: function (e) {
                G(e) && F.current && R();
            },
            children: (0, r.jsx)("div", {
                className: b.motionContent,
                children: (0, r.jsxs)("div", {
                    "data-mana-component": "global-banner",
                    "data-global-banner-variant": n,
                    "data-global-banner-type": t,
                    className: i()(_, b.globalBanner, q ? b.status : b.promotion, b[t]),
                    children: [
                        (0, r.jsxs)(w.E, {
                            variant: I,
                            color: "none",
                            className: b.content,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: b.copy,
                                    children: [
                                        null == $
                                            ? null
                                            : (0, r.jsx)("span", {
                                                  className: b.countdown,
                                                  children: (0, r.jsx)(f.G, {
                                                      ...$,
                                                      size: "md",
                                                      variant: "overlay-secondary",
                                                  }),
                                              }),
                                        null != K
                                            ? (0, r.jsx)("span", {
                                                  "aria-hidden": !0,
                                                  className: i()(b.iconContainer, b.leadingAccessory),
                                                  children: K,
                                              })
                                            : null != P
                                              ? (0, r.jsx)("span", { className: b.iconContainer, children: P })
                                              : null,
                                        (0, r.jsxs)(w.E, {
                                            variant: I,
                                            color: "none",
                                            className: b.message,
                                            children: [
                                                null == W ? null : (0, r.jsxs)(p.A, { id: L, children: [W, ": "] }),
                                                (0, r.jsxs)("span", {
                                                    id: B,
                                                    children: [
                                                        null == a
                                                            ? null
                                                            : (0, r.jsx)(w.E, {
                                                                  tag: "strong",
                                                                  variant: "body-sm/semibold",
                                                                  color: "none",
                                                                  className: b.title,
                                                                  children: a,
                                                              }),
                                                        o,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == N
                                    ? null
                                    : (0, r.jsxs)("div", {
                                          className: b.actions,
                                          children: [
                                              (0, r.jsx)(d.$, {
                                                  ...N,
                                                  size: "sm",
                                                  variant: q ? "overlay-primary" : "expressive",
                                              }),
                                              null == E
                                                  ? null
                                                  : (0, r.jsx)(d.$, { ...E, size: "sm", variant: "overlay-secondary" }),
                                          ],
                                      }),
                            ],
                        }),
                        null == C
                            ? null
                            : (0, r.jsx)(w.E, {
                                  variant: I,
                                  color: "none",
                                  className: b.dismiss,
                                  children: (0, r.jsx)(m.J, {
                                      variant: "color-mix",
                                      "aria-label": T.DISMISS_BUTTON_LABEL,
                                      "aria-describedby": null == W ? B : `${L} ${B}`,
                                      size: "sm",
                                      onClick: z,
                                  }),
                              }),
                    ],
                }),
            }),
        })
    );
}
t.d(
    n,
    {},
    {
        q: function (e) {
            let n = "promotion" === e.variant && "nitro" === e.type;
            return (0, r.jsx)(N.N, {
                theme: n ? void 0 : o.NJ.DARK,
                children: (t) => (0, r.jsx)(E, { ...e, themeClassName: n ? void 0 : t }),
            });
        },
    },
);
