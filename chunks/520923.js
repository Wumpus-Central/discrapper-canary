var r = t(477900),
    a = t(582128),
    s = t(503698),
    l = t.n(s),
    i = t(812743),
    o = t(148839),
    c = t(84571),
    u = t(765178),
    d = t(28863),
    m = t(821609),
    f = t(815021),
    v = t(311409),
    h = t(140735),
    p = t(695366),
    x = t(738188),
    N = t(885574),
    y = t(983851),
    j = t(428689),
    g = t(451394),
    E = t(116711),
    b = t(834730),
    I = t(43990),
    A = t(784189);
let C = "body-sm/normal";
function _(e) {
    let {
            variant: n,
            type: t,
            title: s,
            message: i,
            link: d,
            primaryAction: I,
            secondaryAction: _,
            onDismiss: T,
            themeClassName: L,
            ref: B,
        } = e,
        { i18n: O } = (0, E.G9)(),
        D = a.useId(),
        F = a.useId(),
        [k, R] = a.useState(!1),
        z = a.useRef(!1),
        G = a.useRef(!1),
        S = (0, o.A)(() => {
            z.current || ((z.current = !0), T?.());
        });
    a.useEffect(() => {
        if (!k) return;
        let e = setTimeout(S, 600);
        return () => clearTimeout(e);
    }, [k, S]);
    let M =
        null == T
            ? void 0
            : () => {
                  k || R(!0);
              };
    function P(e) {
        return k && e.target === e.currentTarget && "grid-template-rows" === e.nativeEvent.propertyName;
    }
    a.useImperativeHandle(B, () => ({ dismiss: () => M?.() }));
    let K = "status" === e.variant,
        W = "status" === e.variant && "critical" === e.type ? "assertive" : "polite",
        $ =
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
                  })(e.type, O)
                : null,
        U =
            "status" === e.variant
                ? (function (e) {
                      let n = { size: "sm", color: "currentColor", "aria-hidden": !0 };
                      switch (e.type) {
                          case "critical":
                              return (0, r.jsx)(p.CircleErrorIcon, { ...n });
                          case "warning":
                              return (0, r.jsx)(x.WarningIcon, { ...n });
                          case "info":
                              return (0, r.jsx)(N.CircleInformationIcon, { ...n });
                          case "connected":
                              switch (e.leadingAccessory) {
                                  case "voice":
                                      return (0, r.jsx)(y.VoiceNormalIcon, { ...n });
                                  case "video":
                                      return (0, r.jsx)(j.VideoIcon, { ...n });
                                  case "stage":
                                      return (0, r.jsx)(g.StageIcon, { ...n });
                              }
                      }
                  })(e)
                : null,
        Y = (function (e) {
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
        J = "promotion" === e.variant ? e.countdown : null,
        V = [(0, c.O)(s), (0, c.O)(i)].filter(Boolean).join(", "),
        q = (0, o.A)(() => {
            let e = [$, V].filter(Boolean).join(", ");
            "" !== e && u.O.announce(e, W);
        });
    return (
        a.useEffect(() => {
            q();
        }, [W, q]),
        (0, r.jsx)("div", {
            className: l()(A.motion, k && A.exiting),
            onTransitionRun: function (e) {
                P(e) && (G.current = !0);
            },
            onTransitionEnd: function (e) {
                P(e) && S();
            },
            onTransitionCancel: function (e) {
                P(e) && G.current && S();
            },
            children: (0, r.jsx)("div", {
                className: A.motionContent,
                children: (0, r.jsxs)("div", {
                    "data-mana-component": "global-banner",
                    "data-global-banner-variant": n,
                    "data-global-banner-type": t,
                    className: l()(L, A.globalBanner, K ? A.status : A.promotion, A[t]),
                    children: [
                        (0, r.jsxs)(b.E, {
                            variant: C,
                            color: "none",
                            className: A.content,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: A.copy,
                                    children: [
                                        null == J
                                            ? null
                                            : (0, r.jsx)("span", {
                                                  className: A.countdown,
                                                  children: (0, r.jsx)(v.G, {
                                                      ...J,
                                                      size: "md",
                                                      variant: "overlay-secondary",
                                                  }),
                                              }),
                                        null != Y
                                            ? (0, r.jsx)("span", {
                                                  "aria-hidden": !0,
                                                  className: l()(A.iconContainer, A.leadingAccessory),
                                                  children: Y,
                                              })
                                            : null != U
                                              ? (0, r.jsx)("span", { className: A.iconContainer, children: U })
                                              : null,
                                        (0, r.jsxs)(b.E, {
                                            variant: C,
                                            color: "none",
                                            className: A.message,
                                            children: [
                                                null == $ ? null : (0, r.jsxs)(h.A, { id: D, children: [$, ": "] }),
                                                (0, r.jsxs)("span", {
                                                    id: F,
                                                    className: A.selectableContent,
                                                    children: [
                                                        null == s
                                                            ? null
                                                            : (0, r.jsx)(b.E, {
                                                                  tag: "strong",
                                                                  variant: "body-sm/semibold",
                                                                  color: "none",
                                                                  className: A.title,
                                                                  children: s,
                                                              }),
                                                        i,
                                                    ],
                                                }),
                                                null == d ? null : (0, r.jsx)(w, { ...d }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == I
                                    ? null
                                    : (0, r.jsxs)("div", {
                                          className: A.actions,
                                          children: [
                                              (0, r.jsx)(m.$, {
                                                  ...I,
                                                  size: "sm",
                                                  variant: K ? "overlay-primary" : "expressive",
                                              }),
                                              null == _
                                                  ? null
                                                  : (0, r.jsx)(m.$, { ..._, size: "sm", variant: "overlay-secondary" }),
                                          ],
                                      }),
                            ],
                        }),
                        null == T
                            ? null
                            : (0, r.jsx)(b.E, {
                                  variant: C,
                                  color: "none",
                                  className: A.dismiss,
                                  children: (0, r.jsx)(f.J, {
                                      variant: "color-mix",
                                      "aria-label": O.DISMISS_BUTTON_LABEL,
                                      "aria-describedby": null == $ ? F : `${D} ${F}`,
                                      size: "sm",
                                      onClick: M,
                                  }),
                              }),
                    ],
                }),
            }),
        })
    );
}
function w(e) {
    let { text: n, ...t } = e;
    return (0, r.jsx)(d.Anchor, { ...t, className: A.link, children: n });
}
t.d(
    n,
    {},
    {
        q: function (e) {
            let n = "promotion" === e.variant && "nitro" === e.type;
            return (0, r.jsx)(I.N, {
                theme: n ? void 0 : i.NJ.DARK,
                children: (t) => (0, r.jsx)(_, { ...e, themeClassName: n ? void 0 : t }),
            });
        },
    },
);
