n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(317097),
    o = n(827734),
    d = n(785007),
    c = n(933832),
    u = n(939249),
    m = n(834730),
    g = n(265872),
    h = n(508274),
    x = n(714385),
    _ = n(765671),
    p = n(268218),
    A = n(652215),
    E = n(985018),
    f = n(395814);
let j = (0, p.Fe)({ createPromise: () => n.e("66147").then(n.bind(n, 48736)), webpackId: 48736 });
function N(e) {
    return (0, a.OK)(e) > 0.25 ? o.A.unsafe_rawColors.WHITE.css : o.A.unsafe_rawColors.PRIMARY_530.css;
}
function I(e) {
    let { value: t, onChange: n, disabled: s = !1 } = e,
        o = l.useRef(null),
        [_, p] = l.useState(t);
    function j() {
        n(_);
    }
    function I(e) {
        n(e), p(e);
    }
    let C = t === A.TGz,
        b = C ? _ : t,
        v = (0, i.jsx)(c.A, { size: "custom", width: 32, height: 24, color: N(t) }),
        { ref: S, ...T } = (0, d._u)({ orientation: "horizontal", isDisabled: s }),
        y = (0, d.Gx)({ isSelected: C, label: E.intl.formatToPlainString(E.t.ZC69mL, { colorHex: A.TpD }) }),
        R = (0, d.Gx)({ isSelected: !C, label: E.intl.formatToPlainString(E.t["3kiLZZ"], { colorHex: (0, a.Hl)(t) }) });
    return (0, i.jsxs)("div", {
        className: f.NC,
        "aria-label": E.intl.string(E.t["FJjrI/"]),
        ref: S,
        ...T,
        children: [
            (0, i.jsx)("div", {
                className: r()(f.oP, { [f.r9]: s }),
                children: (0, i.jsxs)(u.D, {
                    onClick: s
                        ? void 0
                        : function () {
                              n(A.TGz);
                          },
                    "aria-disabled": s,
                    ...y,
                    children: [
                        (0, i.jsx)("div", {
                            className: f.nf,
                            style: { backgroundColor: A.TpD },
                            children: C ? v : null,
                        }),
                        (0, i.jsx)(m.E, {
                            className: f.br,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: E.intl.string(E.t.Mcfzar),
                        }),
                    ],
                }),
            }),
            (0, i.jsxs)("div", {
                className: r()(f.oP, { [f.r9]: s }),
                children: [
                    (0, i.jsxs)(u.D, {
                        onClick: s ? void 0 : j,
                        "aria-disabled": s,
                        ...R,
                        children: [
                            (0, i.jsx)("div", {
                                className: r()(f.yB, { [f.MU]: b === A.TGz }),
                                style: { "--custom-color": (0, a.Hl)(b) },
                                children: C ? null : v,
                            }),
                            (0, i.jsx)(m.E, {
                                className: f.br,
                                color: "text-default",
                                variant: "text-xs/normal",
                                "aria-hidden": !0,
                                children: E.intl.string(E.t["2ArXy1"]),
                            }),
                        ],
                    }),
                    !s &&
                        (0, i.jsx)(g.Y, {
                            targetElementRef: o,
                            onRequestOpen: j,
                            renderPopout: (e) => (0, i.jsx)(h.VN, { ...e, value: t, onChange: I }),
                            children: (e) =>
                                (0, i.jsx)(u.D, {
                                    ...e,
                                    innerRef: o,
                                    className: f.MC,
                                    "aria-label": E.intl.string(E.t.Qp04hK),
                                    children: (0, i.jsx)(x.d, {
                                        size: "custom",
                                        className: f.cE,
                                        width: 14,
                                        height: 14,
                                        color: N(b),
                                    }),
                                }),
                        }),
                ],
            }),
        ],
    });
}
function C(e) {
    let t,
        { value: n, onChange: l, disabled: s = !1 } = e,
        { ref: r, width: a } = (0, _.Ay)();
    return (
        (t =
            null == a || a < 440
                ? (0, i.jsx)(I, { value: n, onChange: l, disabled: s })
                : (0, i.jsx)(j, { defaultColor: A.TGz, colors: A._tK, value: n, onChange: l, disabled: s })),
        (0, i.jsx)("div", { ref: r, children: t })
    );
}
