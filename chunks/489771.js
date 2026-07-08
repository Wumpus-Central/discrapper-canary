a.d(r, { t: () => n });
var l = a(248702),
    d = a(517e3),
    o = a(288552),
    t = a(886567),
    s = (0, l.a)((e, r) => {
        let { class: a, type: o = "text", ...t } = e;
        return (0, l.v)("input", { ...t, ref: r, type: o, class: (0, d.n)("IncodeInput", a) });
    }),
    n = (0, l.a)(
        (
            {
                id: e,
                label: r,
                labelHint: a,
                "aria-label": n,
                type: i,
                error: p,
                showErrorIcon: c,
                helper: u,
                showHelperIcon: v,
                closeButton: h,
                rightIcon: I,
                required: C,
                suppressMessages: b = !1,
                class: m,
                value: w,
                ...$
            },
            g,
        ) => {
            let y = `${e}-helper`,
                k = `${e}-error`,
                H = b ? "" : [u ? y : null, p ? k : null].filter(Boolean).join(" ");
            return (0, l.v)("div", {
                class: (0, d.n)("IncodeInputComposed", m),
                children: [
                    r &&
                        (0, l.v)("label", {
                            class: "IncodeInputComposedLabel",
                            htmlFor: e,
                            "data-testid": `${e}-label`,
                            children: [
                                r,
                                a &&
                                    (0, l.v)("span", {
                                        class: "IncodeInputComposedLabelHint",
                                        "data-testid": `${e}-label-hint`,
                                        children: a,
                                    }),
                            ],
                        }),
                    (0, l.v)("div", {
                        class: "IncodeInputComposedWrapper",
                        children: [
                            (0, l.v)(s, {
                                id: e,
                                type: i,
                                ...$,
                                ref: g,
                                required: C,
                                "data-has-value": !!(w && String(w).length > 0),
                                ...(!r && n ? { "aria-label": n } : {}),
                                "aria-describedby": H || void 0,
                                "aria-required": C ? "true" : void 0,
                                "aria-invalid": p ? "true" : void 0,
                                value: w,
                            }),
                            I,
                            h?.show &&
                                (0, l.v)("button", {
                                    type: "button",
                                    "aria-label": "Clear",
                                    class: "IncodeInputComposedClearButton",
                                    onClick: h.onClose,
                                    "data-testid": `${e}-clear`,
                                    children: (0, l.v)(o.o, {
                                        width: 24,
                                        height: 24,
                                        fillColor: "var(--icon-neutral-500)",
                                    }),
                                }),
                        ],
                    }),
                    !b &&
                        p &&
                        (0, l.v)("div", {
                            class: "IncodeInputComposedErrorWrapper",
                            role: "alert",
                            "data-testid": `${e}-error-wrapper`,
                            children: [
                                c &&
                                    (0, l.v)("div", {
                                        class: "IncodeInputComposedIconWrapper",
                                        children: (0, l.v)(o.g, { size: 17 }),
                                    }),
                                (0, l.v)("p", { id: k, class: "IncodeInputComposedError", children: p }),
                            ],
                        }),
                    !b &&
                        u &&
                        !p &&
                        (0, l.v)("div", {
                            class: "IncodeInputComposedHelperWrapper",
                            "data-testid": `${e}-helper-wrapper`,
                            children: [
                                v &&
                                    (0, l.v)("div", {
                                        class: "IncodeInputComposedIconWrapper",
                                        children: (0, l.v)(t.t, { size: 17 }),
                                    }),
                                (0, l.v)("p", { id: y, class: "IncodeInputComposedHelper", children: u }),
                            ],
                        }),
                ],
            });
        },
    );
