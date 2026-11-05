var i = n(477900),
    l = n(582128),
    s = n(452027),
    r = n(559106),
    a = n(771871),
    o = n(834730),
    u = n(523016);
n.d(
    t,
    {},
    {
        u: function (e) {
            let { options: t, value: n, onChange: d, disabled: c = !1, label: g, "aria-label": m } = e,
                A = l.useId(),
                E = l.useRef([]),
                h = t.findIndex((e) => e.value === n),
                S = -1 === h ? 0 : h;
            function T(e) {
                if (c) return;
                let i = t[e];
                null != i && i.value !== n && d(i.value);
            }
            return (0, i.jsx)("div", {
                className: u.kR,
                children: (0, i.jsx)(s.D, {
                    label: g,
                    children: (e) =>
                        (0, i.jsx)("div", {
                            id: e.controlId,
                            className: u.Os,
                            role: "radiogroup",
                            "aria-label": m,
                            "aria-labelledby": e.labelId,
                            "aria-disabled": c,
                            children: t.map((e, l) => {
                                let { value: s, icon: d, title: g, description: m, accent: h } = e,
                                    p = s === n,
                                    f = `${A}-${l}-title`,
                                    x = `${A}-${l}-description`,
                                    _ = null != m && "" !== m;
                                return (0, i.jsx)(
                                    r.vN,
                                    {
                                        offset: -6,
                                        children: (0, i.jsxs)("button", {
                                            ref: (e) => {
                                                E.current[l] = e;
                                            },
                                            type: "button",
                                            role: "radio",
                                            className: u.X0,
                                            "aria-checked": p,
                                            "aria-disabled": c,
                                            "aria-labelledby": f,
                                            "aria-describedby": _ ? x : void 0,
                                            disabled: c,
                                            tabIndex: c || l !== S ? -1 : 0,
                                            "data-nitro-gradient": (p && "nitro" === h) || void 0,
                                            onClick: () => T(l),
                                            onKeyDown: (e) =>
                                                (function (e, n) {
                                                    if (c || e.altKey || e.ctrlKey || e.metaKey) return;
                                                    let i = n;
                                                    switch (e.key) {
                                                        case "ArrowRight":
                                                        case "ArrowDown":
                                                            i = (n + 1) % t.length;
                                                            break;
                                                        case "ArrowLeft":
                                                        case "ArrowUp":
                                                            i = (n + t.length - 1) % t.length;
                                                            break;
                                                        case "Home":
                                                            i = 0;
                                                            break;
                                                        case "End":
                                                            i = t.length - 1;
                                                            break;
                                                        case " ":
                                                        case "Enter":
                                                            break;
                                                        default:
                                                            return;
                                                    }
                                                    (e.preventDefault(), E.current[i]?.focus(), T(i));
                                                })(e, l),
                                            children: [
                                                (0, i.jsx)("span", {
                                                    className: u.q3,
                                                    "aria-hidden": !0,
                                                    children: (0, i.jsx)(a.T, { disabled: !1, checked: p }),
                                                }),
                                                null != d &&
                                                    (0, i.jsx)(d, {
                                                        className: u.Kk,
                                                        size: "sm",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                        focusable: !1,
                                                    }),
                                                (0, i.jsx)(o.E, {
                                                    id: f,
                                                    tag: "span",
                                                    variant: "body-md/normal",
                                                    children: g,
                                                }),
                                                _ &&
                                                    (0, i.jsx)(o.E, {
                                                        id: x,
                                                        tag: "span",
                                                        className: u.h_,
                                                        variant: "body-sm/normal",
                                                        color: "text-subtle",
                                                        children: m,
                                                    }),
                                            ],
                                        }),
                                    },
                                    `${typeof s}:${s}`,
                                );
                            }),
                        }),
                }),
            });
        },
    },
);
