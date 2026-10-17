n.d(t, { a: () => N });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(661531),
    o = n(84571),
    d = n(765178),
    c = n(821609),
    u = n(815021),
    _ = n(140735),
    E = n(628284),
    A = n(695366),
    h = n(885574),
    f = n(738188),
    I = n(460890),
    p = n(834730),
    T = n(271235);
function m(e) {
    let { hidden: t = !1, children: n } = e;
    return (0, i.jsx)("div", {
        className: s()(T.enterExit, { [T.enterExitHidden]: t }),
        children: (0, i.jsx)("div", { className: T.enterExitClip, children: n }),
    });
}
let g = "experimental/body-sm/semibold",
    S = "experimental/body-sm/normal";
function N(e) {
    let { type: t, title: n, message: a, onDismiss: N, action: C, role: O, hidden: R } = e,
        { i18n: L } = (0, I.G9)(),
        y = r.useId(),
        D = r.useId(),
        v = (function (e) {
            let t = { size: "xs", ariaHidden: !0 };
            switch (e) {
                case "positive":
                    return (0, i.jsx)(E.y, { color: l.A.colors.ICON_FEEDBACK_POSITIVE, ...t });
                case "critical":
                    return (0, i.jsx)(A.E, { color: l.A.colors.ICON_FEEDBACK_CRITICAL, ...t });
                case "info":
                    return (0, i.jsx)(h.CircleInformationIcon, { color: l.A.colors.ICON_FEEDBACK_INFO, ...t });
                default:
                    return (0, i.jsx)(f.WarningIcon, { color: l.A.colors.ICON_FEEDBACK_WARNING, ...t });
            }
        })(t),
        b = (function (e, t) {
            switch (e) {
                case "critical":
                    return t.FEEDBACK_CRITICAL_ICON_A11Y_LABEL;
                case "warning":
                    return t.FEEDBACK_WARNING_ICON_A11Y_LABEL;
                case "info":
                    return t.FEEDBACK_INFO_ICON_A11Y_LABEL;
                case "positive":
                    return t.FEEDBACK_POSITIVE_ICON_A11Y_LABEL;
            }
        })(t, L),
        P = [b, (0, o.O)(n), (0, o.O)(a)].filter(Boolean).join(", ");
    return (
        r.useEffect(() => {
            "status" !== O || R || d.O.announce(P, "polite");
        }, [O, R, P]),
        (0, i.jsx)(m, {
            hidden: R,
            children: (0, i.jsxs)("div", {
                role: "alert" === O ? "alert" : void 0,
                className: s()(T.container, T[t]),
                children: [
                    (0, i.jsxs)("div", {
                        className: T.iconAndTextContainer,
                        children: [
                            (0, i.jsx)(p.E, {
                                variant: null != n ? g : S,
                                color: "none",
                                className: T.iconContainer,
                                children: v,
                            }),
                            (0, i.jsxs)("div", {
                                className: s()(T.contentsContainer, { [T.vertical]: null != N }),
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: T.copyContainer,
                                        children: [
                                            (0, i.jsxs)(_.A, { id: y, children: [b, ":"] }),
                                            null == n
                                                ? null
                                                : (0, i.jsx)(p.E, {
                                                      id: D,
                                                      variant: g,
                                                      color: "text-strong",
                                                      children: n,
                                                  }),
                                            (0, i.jsx)(p.E, {
                                                id: null == n ? D : void 0,
                                                variant: S,
                                                color: "text-strong",
                                                children: a,
                                            }),
                                        ],
                                    }),
                                    null == C
                                        ? null
                                        : (0, i.jsx)(c.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: C.text,
                                              onClick: C.onClick,
                                              loading: C.loading,
                                          }),
                                ],
                            }),
                        ],
                    }),
                    null != N
                        ? (0, i.jsx)(p.E, {
                              variant: null != n ? g : S,
                              color: "none",
                              className: T.iconContainer,
                              children: (0, i.jsx)(u.J, {
                                  "aria-label": L.DISMISS_BUTTON_LABEL,
                                  "aria-describedby": `${y} ${D}`,
                                  size: "sm",
                                  onClick: N,
                              }),
                          })
                        : null,
                ],
            }),
        })
    );
}
