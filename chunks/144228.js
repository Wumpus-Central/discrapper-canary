n.d(t, { z: () => I, T: () => f });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(214660),
    o = n(559106),
    d = n(452027),
    c = n(834730),
    u = n(561802);
function _(e) {
    let { disabled: t, isSelected: n } = e,
        [a, l] = (0, r.useState)(void 0),
        o = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            if (!o.current) {
                o.current = !0;
                return;
            }
            l(n ? "animateIn" : "animateOut");
        }, [n]),
        (0, i.jsx)("div", {
            className: s()([u.standaloneRadioIndicator, "string" == typeof a && u[a]]),
            "data-selected": n,
            "data-disabled": t,
            children: (0, i.jsx)(E, {}),
        })
    );
}
function E() {
    return (0, i.jsxs)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: u.radioIndicator,
        width: 20,
        height: 20,
        viewBox: "0 0 40 40",
        fill: "none",
        shapeRendering: "geometricPrecision",
        children: [
            (0, i.jsx)("circle", { cx: 20, cy: 20, r: 20, className: u.outerRadioBase }),
            (0, i.jsx)("circle", { cx: 20, cy: 20, r: 20, className: u.outerRadioFill }),
            (0, i.jsx)("circle", { cx: 20, cy: 20, r: 8, className: u.innerDotRadio }),
        ],
    });
}
function A(e) {
    let { desc: t, disabled: n, leadingIcon: a, name: d, value: _, isSelected: A } = e,
        h = (0, r.useRef)(null),
        I = (0, r.useRef)(null),
        f = r.useId(),
        p = `${f}label`,
        T = `${f}description`,
        m = null != t && "" !== t,
        [g, S] = (0, r.useState)(void 0),
        N = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            if (!N.current) {
                N.current = !0;
                return;
            }
            S(A ? "animateIn" : "animateOut");
        }, [A]),
        (0, i.jsx)(o.vN, {
            focusTarget: h,
            ringTarget: h,
            within: !0,
            children: (0, i.jsxs)(l.sx, {
                className: s()(u.radioGroupOption, {
                    [u.withLeadingIcon]: null != a,
                    [u.animateIn]: "animateIn" === g,
                    [u.animateOut]: "animateOut" === g,
                }),
                value: _,
                isDisabled: n,
                inputRef: I,
                "aria-labelledby": p,
                "aria-describedby": m ? T : void 0,
                ref: h,
                children: [
                    (0, i.jsx)(E, {}),
                    null != a &&
                        (0, i.jsx)(a, {
                            className: u.radioItemIcon,
                            size: "sm",
                            color: "currentColor",
                            "aria-hidden": !0,
                            focusable: !1,
                        }),
                    (0, i.jsx)(c.E, { id: p, tag: "span", variant: "text-md/normal", children: d }),
                    m
                        ? (0, i.jsx)(c.E, {
                              id: T,
                              className: u.description,
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              children: t,
                          })
                        : null,
                ],
            }),
        })
    );
}
function h(e) {
    let { onChange: t, options: n, value: r, disabled: a = !1, "aria-labelledby": s, ...o } = e,
        c =
            null != t
                ? (e) => {
                      let i = n.find((t) => String(t.value) === e);
                      null != i && t(i.value);
                  }
                : void 0;
    return (0, i.jsx)(d.D, {
        ...o,
        children: (e) =>
            (0, i.jsx)(l.z6, {
                id: e.controlId,
                className: u.group,
                isDisabled: a,
                onChange: c,
                "aria-labelledby": s ?? e.labelId,
                "aria-describedby": e.describedById,
                "aria-errormessage": e.errorMessageId,
                "data-mana-component": "BaseRadioGroup",
                value: null != r ? String(r) : void 0,
                children: n.map((e, t) =>
                    (0, i.jsx)(
                        A,
                        { index: t, ...e, value: String(e.value), isSelected: r === e.value },
                        String(e.value),
                    ),
                ),
            }),
    });
}
function I(e) {
    return (0, i.jsx)(h, { ...e });
}
function f(e) {
    let { disabled: t, checked: n } = e;
    return (0, i.jsx)(_, { disabled: t, isSelected: n });
}
