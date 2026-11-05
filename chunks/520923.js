var r = n(477900),
    a = n(582128),
    i = n(503698),
    t = n.n(i),
    c = n(812743),
    o = n(84571),
    l = n(765178),
    d = n(821609),
    u = n(815021),
    m = n(140735),
    p = n(695366),
    v = n(738188),
    x = n(885574),
    y = n(983851),
    h = n(428689),
    g = n(451394),
    j = n(116711),
    A = n(834730),
    b = n(43990),
    f = n(784189);
function N(e) {
    let { variant: s, title: n, message: i, primaryAction: c, secondaryAction: b, onDismiss: N, themeClassName: C } = e,
        { i18n: I } = (0, j.G9)(),
        w = a.useId(),
        _ = a.useId(),
        E = "status" === e.variant,
        B = "status" === e.variant ? e.role : null,
        D =
            "status" === e.variant
                ? (function (e, s) {
                      switch (e) {
                          case "critical":
                              return s.FEEDBACK_CRITICAL_ICON_A11Y_LABEL;
                          case "warning":
                              return s.FEEDBACK_WARNING_ICON_A11Y_LABEL;
                          case "info":
                              return s.FEEDBACK_INFO_ICON_A11Y_LABEL;
                          case "brand":
                          case "connected":
                              return null;
                      }
                  })(e.type, I)
                : null,
        L =
            "status" === e.variant
                ? (function (e) {
                      let s = { size: "refresh_sm", color: "currentColor", "aria-hidden": !0 };
                      switch (e.type) {
                          case "brand":
                              return null;
                          case "critical":
                              return (0, r.jsx)(p.CircleErrorIcon, { ...s });
                          case "warning":
                              return (0, r.jsx)(v.WarningIcon, { ...s });
                          case "info":
                              return (0, r.jsx)(x.CircleInformationIcon, { ...s });
                          case "connected":
                              switch (e.leadingAccessory) {
                                  case "voice":
                                      return (0, r.jsx)(y.VoiceNormalIcon, { ...s });
                                  case "video":
                                      return (0, r.jsx)(h.VideoIcon, { ...s });
                                  case "stage":
                                      return (0, r.jsx)(g.StageIcon, { ...s });
                              }
                      }
                  })(e)
                : null,
        k = (function (e) {
            if ("promotion" === e.variant) return e.leadingAccessory;
            switch (e.type) {
                case "brand":
                case "info":
                    return e.leadingAccessory;
                case "critical":
                case "warning":
                case "connected":
                    return null;
            }
        })(e),
        O = "status" === e.variant ? e.type : (e.type ?? "expressive"),
        q = [D, (0, o.O)(n), (0, o.O)(i)].filter(Boolean).join(", ");
    return (
        a.useEffect(() => {
            "status" === B && l.O.announce(q, "polite");
        }, [B, q]),
        (0, r.jsxs)("div", {
            "data-mana-component": "global-banner",
            "data-global-banner-variant": s,
            "data-global-banner-type": O,
            role: "alert" === B ? "alert" : void 0,
            className: t()(C, f.globalBanner, E ? f.status : f.promotion, f[O], null != N && f.dismissible),
            children: [
                (0, r.jsxs)("div", {
                    className: f.content,
                    children: [
                        (0, r.jsxs)("div", {
                            className: f.copy,
                            children: [
                                null != k
                                    ? (0, r.jsx)("span", {
                                          "aria-hidden": !0,
                                          className: t()(f.iconContainer, f.leadingAccessory),
                                          children: k,
                                      })
                                    : null != L
                                      ? (0, r.jsx)("span", { className: f.iconContainer, children: L })
                                      : null,
                                (0, r.jsxs)(A.E, {
                                    variant: "body-sm/normal",
                                    color: "none",
                                    className: f.message,
                                    children: [
                                        null == D ? null : (0, r.jsxs)(m.A, { id: w, children: [D, ": "] }),
                                        (0, r.jsxs)("span", {
                                            id: _,
                                            children: [
                                                null == n
                                                    ? null
                                                    : (0, r.jsx)(A.E, {
                                                          tag: "strong",
                                                          variant: "body-sm/semibold",
                                                          color: "none",
                                                          className: f.title,
                                                          children: n,
                                                      }),
                                                i,
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        null == c
                            ? null
                            : (0, r.jsxs)("div", {
                                  className: f.actions,
                                  children: [
                                      (0, r.jsx)(d.$, {
                                          ...c,
                                          size: "sm",
                                          variant: E ? "overlay-primary" : "expressive",
                                      }),
                                      null == b
                                          ? null
                                          : (0, r.jsx)(d.$, { ...b, size: "sm", variant: "overlay-secondary" }),
                                  ],
                              }),
                    ],
                }),
                null == N
                    ? null
                    : (0, r.jsx)("div", {
                          className: f.dismiss,
                          children: (0, r.jsx)(u.J, {
                              variant: "color-mix",
                              "aria-label": I.DISMISS_BUTTON_LABEL,
                              "aria-describedby": null == D ? _ : `${w} ${_}`,
                              size: "sm",
                              onClick: N,
                          }),
                      }),
            ],
        })
    );
}
n.d(
    s,
    {},
    {
        q: function (e) {
            return (0, r.jsx)(b.N, { theme: c.NJ.DARK, children: (s) => (0, r.jsx)(N, { ...e, themeClassName: s }) });
        },
    },
);
