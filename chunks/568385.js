n.d(t, { J: () => _ });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(767958),
    o = n(559106),
    d = n(820081),
    c = n(834730),
    u = n(140379);
function _(e) {
    let {
            checked: t,
            description: n,
            onChange: a,
            disabled: _ = !1,
            displayOnly: E,
            label: A,
            labeledBy: h,
            leadingIcon: I,
            value: f,
            labelType: p = "primary",
            usageVariant: T = "single",
        } = e,
        m = (0, r.useRef)(null),
        g = (0, r.useRef)(null),
        S = (0, r.useRef)(null),
        N = r.useId(),
        C = `${N}label`,
        O = `${N}description`,
        [R, L] = (0, r.useState)(void 0),
        y = (0, r.useRef)(!1),
        D = null != A && "" !== A,
        v = null != n && "" !== n,
        b = null != I ? I : null;
    (0, r.useEffect)(() => {
        if (!y.current) {
            y.current = !0;
            return;
        }
        L(t ? "animateIn" : "animateOut");
    }, [t]);
    let M = s()(u.nj, {
            [u.GA]: D,
            [u.Gu]: D && null != b,
            [u.HY]: "animateIn" === R,
            [u.U9]: "animateOut" === R,
            [u.YK]: "indicator" !== T,
        }),
        P = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: u.fb,
                    ref: m,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)("svg", {
                            className: u.AI,
                            width: 20,
                            height: 20,
                            viewBox: "0 0 20 20",
                            fill: "none",
                            "aria-hidden": !0,
                            children: (0, i.jsx)("circle", {
                                className: u.Om,
                                cx: "10",
                                cy: "10",
                                r: "1.1",
                                fill: "currentColor",
                            }),
                        }),
                        (0, i.jsx)(d.B, { className: u.Ho, size: "sm", color: "currentColor" }),
                    ],
                }),
                D &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != b &&
                                (0, i.jsx)(b, {
                                    className: u.iE,
                                    size: "sm",
                                    color: "currentColor",
                                    "aria-hidden": !0,
                                    focusable: !1,
                                }),
                            (0, i.jsx)(c.E, {
                                id: C,
                                tag: "span",
                                className: u.Pf,
                                variant: "text-md/normal",
                                color: "primary" === p ? "text-strong" : "text-subtle",
                                children: A,
                            }),
                            v &&
                                (0, i.jsx)(c.E, {
                                    id: O,
                                    className: u.h_,
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: n,
                                }),
                        ],
                    }),
            ],
        });
    return E
        ? (0, i.jsx)("div", { className: M, "data-selected": t || void 0, "data-disabled": _ || void 0, children: P })
        : (0, i.jsx)(o.vN, {
              focusTarget: g,
              ringTarget: S,
              children: (0, i.jsx)(l.Sc, {
                  ref: S,
                  inputRef: g,
                  "aria-labelledby": h ?? (D ? C : void 0),
                  "aria-describedby": D && v ? O : void 0,
                  isSelected: t,
                  onChange: function (e) {
                      null != a && a(e);
                  },
                  isDisabled: _,
                  isReadOnly: E,
                  "data-mana-component": "checkbox",
                  className: M,
                  value: String(f),
                  children: P,
              }),
          });
}
