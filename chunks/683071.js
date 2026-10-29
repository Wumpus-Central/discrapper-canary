n.d(t, { w: () => O });
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
    p = n(331322),
    T = n(834730),
    m = n(278817);
function g(e) {
    let { intro: t, items: n } = e,
        r = (0, i.jsx)("ul", {
            className: m.messageList,
            children: n.map((e, t) => (0, i.jsx)("li", { children: e }, t)),
        });
    return null == t ? r : (0, i.jsxs)(p.B, { gap: 4, children: [(0, i.jsx)("div", { children: t }), r] });
}
function S(e) {
    let { hidden: t = !1, children: n } = e;
    return (0, i.jsx)("div", {
        className: s()(m.enterExit, { [m.enterExitHidden]: t }),
        children: (0, i.jsx)("div", { className: m.enterExitClip, children: n }),
    });
}
let N = "experimental/body-sm/semibold",
    C = "experimental/body-sm/normal";
function O(e) {
    let { type: t, title: n, message: a, messageList: p, onDismiss: O, action: R, role: L, hidden: y } = e,
        { i18n: D } = (0, I.G9)(),
        v = r.useId(),
        b = r.useId(),
        M = (function (e) {
            let t = { size: "xs", "aria-hidden": !0 };
            switch (e) {
                case "success":
                    return (0, i.jsx)(E.y, { color: l.A.colors.ICON_FEEDBACK_POSITIVE, ...t });
                case "critical":
                    return (0, i.jsx)(A.E, { color: l.A.colors.ICON_FEEDBACK_CRITICAL, ...t });
                case "info":
                    return (0, i.jsx)(h.CircleInformationIcon, { color: l.A.colors.ICON_FEEDBACK_INFO, ...t });
                default:
                    return (0, i.jsx)(f.WarningIcon, { color: l.A.colors.ICON_FEEDBACK_WARNING, ...t });
            }
        })(t),
        P = (function (e, t) {
            switch (e) {
                case "critical":
                    return t.FEEDBACK_CRITICAL_ICON_A11Y_LABEL;
                case "warning":
                    return t.FEEDBACK_WARNING_ICON_A11Y_LABEL;
                case "info":
                    return t.FEEDBACK_INFO_ICON_A11Y_LABEL;
                case "success":
                    return t.FEEDBACK_POSITIVE_ICON_A11Y_LABEL;
            }
        })(t, D),
        U = [P, (0, o.O)(n), (0, o.O)(a), ...(p ?? []).map(o.O)].filter(Boolean).join(", ");
    return (
        r.useEffect(() => {
            "status" !== L || y || d.O.announce(U, "polite");
        }, [L, y, U]),
        (0, i.jsx)(S, {
            hidden: y,
            children: (0, i.jsxs)("div", {
                role: "alert" === L ? "alert" : void 0,
                className: s()(m.container, m[t]),
                children: [
                    (0, i.jsxs)("div", {
                        className: m.iconAndTextContainer,
                        children: [
                            (0, i.jsx)(T.E, {
                                variant: null != n ? N : C,
                                color: "none",
                                className: m.iconContainer,
                                children: M,
                            }),
                            (0, i.jsxs)("div", {
                                className: s()(m.contentsContainer, { [m.vertical]: null != O }),
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: m.copyContainer,
                                        children: [
                                            (0, i.jsxs)(_.A, { id: v, children: [P, ":"] }),
                                            null == n
                                                ? null
                                                : (0, i.jsx)(T.E, {
                                                      id: b,
                                                      variant: N,
                                                      color: "text-strong",
                                                      children: n,
                                                  }),
                                            (0, i.jsx)(T.E, {
                                                id: null == n ? b : void 0,
                                                variant: C,
                                                color: "text-strong",
                                                children: null != p ? (0, i.jsx)(g, { intro: a, items: p }) : a,
                                            }),
                                        ],
                                    }),
                                    null == R
                                        ? null
                                        : (0, i.jsx)(c.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: R.text,
                                              onClick: R.onClick,
                                              loading: R.loading,
                                          }),
                                ],
                            }),
                        ],
                    }),
                    null != O
                        ? (0, i.jsx)(T.E, {
                              variant: null != n ? N : C,
                              color: "none",
                              className: m.iconContainer,
                              children: (0, i.jsx)(u.J, {
                                  "aria-label": D.DISMISS_BUTTON_LABEL,
                                  "aria-describedby": `${v} ${b}`,
                                  size: "sm",
                                  onClick: O,
                              }),
                          })
                        : null,
                ],
            }),
        })
    );
}
