n.d(t, { a: () => S });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(661531),
    o = n(821609),
    d = n(408278),
    c = n(140735),
    u = n(628284),
    _ = n(695366),
    E = n(885574),
    A = n(738188),
    h = n(789645),
    I = n(460890),
    f = n(834730),
    p = n(271235);
function T(e) {
    let { hidden: t = !1, children: n } = e;
    return (0, i.jsx)("div", {
        className: s()(p.enterExit, { [p.enterExitHidden]: t }),
        children: (0, i.jsx)("div", { className: p.enterExitClip, children: n }),
    });
}
let g = "experimental/body-sm/semibold",
    m = "experimental/body-sm/normal";
function S(e) {
    let { type: t, title: n, message: a, onDismiss: S, action: N, role: C, hidden: O } = e,
        { i18n: R } = (0, I.G9)(),
        L = r.useId(),
        y = r.useId(),
        D = (function (e) {
            let t = { size: "xs", ariaHidden: !0 };
            switch (e) {
                case "positive":
                    return (0, i.jsx)(u.y, { color: l.A.colors.ICON_FEEDBACK_POSITIVE, ...t });
                case "critical":
                    return (0, i.jsx)(_.E, { color: l.A.colors.ICON_FEEDBACK_CRITICAL, ...t });
                case "info":
                    return (0, i.jsx)(E.CircleInformationIcon, { color: l.A.colors.ICON_FEEDBACK_INFO, ...t });
                default:
                    return (0, i.jsx)(A.WarningIcon, { color: l.A.colors.ICON_FEEDBACK_WARNING, ...t });
            }
        })(t);
    return (0, i.jsx)(T, {
        hidden: O,
        children: (0, i.jsxs)("div", {
            role: "static" === C ? void 0 : C,
            className: s()(p.container, p[t]),
            children: [
                (0, i.jsxs)("div", {
                    className: p.iconAndTextContainer,
                    children: [
                        (0, i.jsx)(f.E, {
                            variant: null != n ? g : m,
                            color: "none",
                            className: p.iconContainer,
                            children: D,
                        }),
                        (0, i.jsxs)("div", {
                            className: s()(p.contentsContainer, { [p.vertical]: null != S }),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: p.copyContainer,
                                    children: [
                                        (0, i.jsxs)(c.A, {
                                            id: L,
                                            children: [
                                                (function (e, t) {
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
                                                })(t, R),
                                                ":",
                                            ],
                                        }),
                                        null == n
                                            ? null
                                            : (0, i.jsx)(f.E, { id: y, variant: g, color: "text-strong", children: n }),
                                        (0, i.jsx)(f.E, {
                                            id: null == n ? y : void 0,
                                            variant: m,
                                            color: "text-strong",
                                            children: a,
                                        }),
                                    ],
                                }),
                                null == N
                                    ? null
                                    : (0, i.jsx)(o.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: N.text,
                                          onClick: N.onClick,
                                      }),
                            ],
                        }),
                    ],
                }),
                null != S
                    ? (0, i.jsx)(d.K, {
                          "aria-label": R.DISMISS_BUTTON_LABEL,
                          "aria-describedby": `${L} ${y}`,
                          variant: "color-mix",
                          size: "md",
                          icon: h.P,
                          onClick: S,
                      })
                    : null,
            ],
        }),
    });
}
