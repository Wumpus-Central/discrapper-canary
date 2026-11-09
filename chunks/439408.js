var l = r(477900),
    i = r(582128),
    n = r(452027),
    s = r(559106),
    t = r(771871),
    d = r(834730),
    c = r(523016);
r.d(
    a,
    {},
    {
        u: function (e) {
            let { options: a, value: r, onChange: o, disabled: u = !1, label: b, "aria-label": h } = e,
                p = i.useId(),
                f = i.useRef([]),
                k = a.findIndex((e) => e.value === r),
                m = -1 === k ? 0 : k;
            function v(e) {
                if (u) return;
                let l = a[e];
                null != l && l.value !== r && o(l.value);
            }
            return (0, l.jsx)("div", {
                className: c.kR,
                children: (0, l.jsx)(n.D, {
                    label: b,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            id: e.controlId,
                            className: c.Os,
                            role: "radiogroup",
                            "aria-label": h,
                            "aria-labelledby": e.labelId,
                            "aria-disabled": u,
                            children: a.map((e, i) => {
                                let { value: n, icon: o, title: b, description: h, accent: k } = e,
                                    x = n === r,
                                    y = `${p}-${i}-title`,
                                    j = `${p}-${i}-description`,
                                    g = null != h && "" !== h;
                                return (0, l.jsx)(
                                    s.vN,
                                    {
                                        offset: -6,
                                        children: (0, l.jsxs)("button", {
                                            ref: (e) => {
                                                f.current[i] = e;
                                            },
                                            type: "button",
                                            role: "radio",
                                            className: c.X0,
                                            "aria-checked": x,
                                            "aria-disabled": u,
                                            "aria-labelledby": y,
                                            "aria-describedby": g ? j : void 0,
                                            disabled: u,
                                            tabIndex: u || i !== m ? -1 : 0,
                                            "data-nitro-gradient": (x && "nitro" === k) || void 0,
                                            onClick: () => v(i),
                                            onKeyDown: (e) =>
                                                (function (e, r) {
                                                    if (u || e.altKey || e.ctrlKey || e.metaKey) return;
                                                    let l = r;
                                                    switch (e.key) {
                                                        case "ArrowRight":
                                                        case "ArrowDown":
                                                            l = (r + 1) % a.length;
                                                            break;
                                                        case "ArrowLeft":
                                                        case "ArrowUp":
                                                            l = (r + a.length - 1) % a.length;
                                                            break;
                                                        case "Home":
                                                            l = 0;
                                                            break;
                                                        case "End":
                                                            l = a.length - 1;
                                                            break;
                                                        case " ":
                                                        case "Enter":
                                                            break;
                                                        default:
                                                            return;
                                                    }
                                                    (e.preventDefault(), f.current[l]?.focus(), v(l));
                                                })(e, i),
                                            children: [
                                                (0, l.jsx)("span", {
                                                    className: c.q3,
                                                    "aria-hidden": !0,
                                                    children: (0, l.jsx)(t.T, { disabled: !1, checked: x }),
                                                }),
                                                null != o &&
                                                    (0, l.jsx)(o, {
                                                        className: c.Kk,
                                                        size: "sm",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                        focusable: !1,
                                                    }),
                                                (0, l.jsx)(d.E, {
                                                    id: y,
                                                    tag: "span",
                                                    variant: "body-md/normal",
                                                    children: b,
                                                }),
                                                g &&
                                                    (0, l.jsx)(d.E, {
                                                        id: j,
                                                        tag: "span",
                                                        className: c.h_,
                                                        variant: "body-sm/normal",
                                                        color: "text-subtle",
                                                        children: h,
                                                    }),
                                            ],
                                        }),
                                    },
                                    `${typeof n}:${n}`,
                                );
                            }),
                        }),
                }),
            });
        },
    },
);
