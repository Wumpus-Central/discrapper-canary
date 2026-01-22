l.d(t, { default: () => S }), l(896048), l(321073), l(228524), l(638769), l(733351);
var n = l(627968),
    i = l(64700),
    r = l(158954),
    o = l(311907),
    a = l(843282),
    s = l(397927),
    c = l(736653),
    d = l(573648),
    u = l(627363),
    p = l(587895),
    h = l(240248),
    A = l(555337),
    g = l(441715),
    I = l(549479),
    _ = l(923121),
    f = l(539916),
    x = l(985018),
    O = l(819401);
function S(e) {
    var t;
    let { transitionState: l, onClose: S, connection: v, index: L } = e,
        b = (0, c.Ay)(),
        m = null != v && null != L,
        T = A.A.getGuildId(),
        C = (0, o.bG)([I.A], () => {
            var e;
            return null != (e = I.A.getAllowedApplicationIds(T)) ? e : [];
        }, [T]);
    i.useEffect(() => {
        null != T && (0, g.$)(T);
    }, [T]),
        i.useEffect(() => {
            for (let e of C)
                null != p.A.getApplication(e) || p.A.isFetchingApplication(e) || (0, u.TA)(e).catch(() => {});
        }, [C]);
    let N = (0, o.yK)([p.A], () => {
            let e = [];
            for (let t of C) {
                let l = p.A.getApplication(t);
                null != l && e.push(l);
            }
            return e;
        }, [C]),
        [y, E] = i.useState(() => (null != v ? (0, f.Sq)(v) : void 0)),
        [G, j] = i.useState(null != (t = null == v ? void 0 : v.description) ? t : ""),
        [D, P] = i.useState([]),
        w = i.useMemo(() => {
            let e = [];
            for (let n of d.A.filter((e) => e.enabled && !f.tb.has(e.type))) {
                var t, l;
                let i =
                    "light" === b
                        ? null == (t = n.icon)
                            ? void 0
                            : t.lightPNG
                        : null == (l = n.icon)
                          ? void 0
                          : l.darkPNG;
                e.push({
                    label: n.name,
                    value: "provider:".concat(n.type),
                    icon: i,
                });
            }
            for (let t of N)
                e.push({
                    label: t.name,
                    value: "app:".concat(t.id),
                    icon: t.getIconURL(128),
                });
            for (let t of C)
                null == p.A.getApplication(t) &&
                    p.A.isFetchingApplication(t) &&
                    e.push({
                        label: "Loading...",
                        value: "app:".concat(t),
                        icon: void 0,
                    });
            return e.sort((e, t) => e.label.localeCompare(t.label)), e;
        }, [N, C, b]),
        F = i.useCallback(() => {
            if (null == y || "" === y) return void P(["Please select a connection"]);
            let e = (0, f.vK)(y);
            if (null == e) return void P(["Invalid connection selected"]);
            let t = G.trim(),
                l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(l);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = l[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })(
                    {
                        connection_type: e.type,
                        description: (0, h.uJ)(t) ? void 0 : t,
                    },
                    null != e.applicationId && { application_id: e.applicationId },
                    null != e.providerId && { provider_id: e.providerId },
                ),
                n = (0, f.Ii)(l);
            n.length > 0 ? P(n) : (m ? (0, _.yM)(L, l) : (0, _.sF)(l), S());
        }, [y, G, m, L, S]),
        R = i.useCallback(
            (e) =>
                (0, n.jsxs)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    },
                    children: [
                        e.icon
                            ? "string" == typeof e.icon
                                ? (0, n.jsx)("img", {
                                      src: e.icon,
                                      alt: "",
                                      width: 20,
                                      height: 20,
                                  })
                                : null
                            : (0, n.jsx)(s._xR, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                        (0, n.jsx)("span", { children: e.label }),
                    ],
                }),
            [],
        ),
        U = i.useCallback((e) => {
            if (0 === e.length) return null;
            let t = e[0];
            return (0, n.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                },
                children: [
                    t.icon && "string" == typeof t.icon
                        ? (0, n.jsx)("img", {
                              src: t.icon,
                              alt: "",
                              width: 20,
                              height: 20,
                          })
                        : (0, n.jsx)(s._xR, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                    (0, n.jsx)("span", { children: t.label }),
                ],
            });
        }, []);
    return (0, n.jsx)(r.Modal, {
        transitionState: l,
        title: m ? x.intl.string(x.t.yqegs1) : x.intl.string(x.t.B6qOe2),
        onClose: S,
        actions: [
            {
                variant: "secondary",
                text: x.intl.string(x.t["ETE/oC"]),
                onClick: S,
            },
            {
                variant: "primary",
                text: m ? x.intl.string(x.t["R3BPH+"]) : x.intl.string(x.t.qMOnJu),
                onClick: F,
            },
        ],
        children: (0, n.jsxs)("div", {
            className: O.Qs,
            children: [
                !m &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: x.intl.string(x.t.mGhCgX),
                            }),
                            (0, n.jsx)(s.eIh, {
                                title: x.intl.string(x.t.joNLrt),
                                children: (0, n.jsx)(a.Te, {
                                    value: null != y ? y : "",
                                    onChange: (e) => {
                                        E(e), P([]);
                                    },
                                    options: w,
                                    placeholder: x.intl.string(x.t.Wq1LfI),
                                    renderOptionLabel: R,
                                    renderOptionValue: U,
                                    "data-migration-pending": !0,
                                }),
                            }),
                            D.length > 0 &&
                                (0, n.jsx)("div", {
                                    className: O.sO,
                                    children: D.map((e, t) =>
                                        (0, n.jsxs)(
                                            "div",
                                            {
                                                className: O.Ff,
                                                children: [
                                                    (0, n.jsx)(r.EpV, {
                                                        size: "sm",
                                                        color: "currentColor",
                                                    }),
                                                    (0, n.jsx)(s.Text, {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: e,
                                                    }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px",
                                marginBottom: "8px",
                            },
                            children: [
                                (0, n.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: x.intl.string(x.t.WoyrU8),
                                }),
                                (0, n.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: x.intl.string(x.t.zdWNET),
                                }),
                            ],
                        }),
                        (0, n.jsx)(s.fs1, {
                            value: G,
                            onChange: j,
                            placeholder: x.intl.string(x.t["28bQNf"]),
                            maxLength: f.sd,
                        }),
                    ],
                }),
            ],
        }),
    });
}
