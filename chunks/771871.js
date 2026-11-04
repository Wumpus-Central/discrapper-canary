i.d(a, { z: () => h, T: () => v });
var n = i(477900),
    r = i(582128),
    s = i(503698),
    l = i.n(s),
    t = i(189367),
    d = i(559106),
    c = i(452027),
    u = i(834730),
    o = i(561802);
function m(e) {
    let { disabled: a, isSelected: i } = e,
        [s, t] = (0, r.useState)(void 0),
        d = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            if (!d.current) {
                d.current = !0;
                return;
            }
            t(i ? "animateIn" : "animateOut");
        }, [i]),
        (0, n.jsx)("div", {
            className: l()([o.standaloneRadioIndicator, "string" == typeof s && o[s]]),
            "data-selected": i,
            "data-disabled": a,
            children: (0, n.jsx)(f, {}),
        })
    );
}
function f() {
    return (0, n.jsxs)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: o.radioIndicator,
        width: 20,
        height: 20,
        viewBox: "0 0 40 40",
        fill: "none",
        shapeRendering: "geometricPrecision",
        children: [
            (0, n.jsx)("circle", { cx: 20, cy: 20, r: 20, className: o.outerRadioBase }),
            (0, n.jsx)("circle", { cx: 20, cy: 20, r: 20, className: o.outerRadioFill }),
            (0, n.jsx)("circle", { cx: 20, cy: 20, r: 8, className: o.innerDotRadio }),
        ],
    });
}
function b(e) {
    let { desc: a, disabled: i, leadingIcon: s, name: c, value: m, isSelected: b } = e,
        x = (0, r.useRef)(null),
        h = (0, r.useRef)(null),
        v = r.useId(),
        g = `${v}label`,
        p = `${v}description`,
        j = null != a && "" !== a,
        [I, y] = (0, r.useState)(void 0),
        R = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            if (!R.current) {
                R.current = !0;
                return;
            }
            y(b ? "animateIn" : "animateOut");
        }, [b]),
        (0, n.jsx)(d.vN, {
            focusTarget: x,
            ringTarget: x,
            within: !0,
            children: (0, n.jsxs)(t.sx, {
                className: l()(o.radioGroupOption, {
                    [o.withLeadingIcon]: null != s,
                    [o.animateIn]: "animateIn" === I,
                    [o.animateOut]: "animateOut" === I,
                }),
                value: m,
                isDisabled: i,
                inputRef: h,
                "aria-labelledby": g,
                "aria-describedby": j ? p : void 0,
                ref: x,
                children: [
                    (0, n.jsx)(f, {}),
                    null != s &&
                        (0, n.jsx)(s, {
                            className: o.radioItemIcon,
                            size: "sm",
                            color: "currentColor",
                            "aria-hidden": !0,
                            focusable: !1,
                        }),
                    (0, n.jsx)(u.E, { id: g, tag: "span", variant: "body-md/normal", children: c }),
                    j
                        ? (0, n.jsx)(u.E, {
                              id: p,
                              className: o.description,
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              children: a,
                          })
                        : null,
                ],
            }),
        })
    );
}
function x(e) {
    let { onChange: a, options: i, value: r, disabled: s = !1, "aria-labelledby": l, ...d } = e,
        u =
            null != a
                ? (e) => {
                      let n = i.find((a) => String(a.value) === e);
                      null != n && a(n.value);
                  }
                : void 0;
    return (0, n.jsx)(c.D, {
        ...d,
        children: (e) =>
            (0, n.jsx)(t.z6, {
                id: e.controlId,
                className: o.group,
                isDisabled: s,
                onChange: u,
                "aria-labelledby": l ?? e.labelId,
                "aria-describedby": e.describedById,
                "aria-errormessage": e.errorMessageId,
                "data-mana-component": "BaseRadioGroup",
                value: null != r ? String(r) : void 0,
                children: i.map((e, a) =>
                    (0, n.jsx)(
                        b,
                        { index: a, ...e, value: String(e.value), isSelected: r === e.value },
                        String(e.value),
                    ),
                ),
            }),
    });
}
function h(e) {
    return (0, n.jsx)(x, { ...e });
}
function v(e) {
    let { disabled: a, checked: i } = e;
    return (0, n.jsx)(m, { disabled: a, isSelected: i });
}
