"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(317097),
    o = n(827734),
    d = n(421380),
    c = n(397927),
    u = n(765671),
    m = n(268218),
    g = n(652215),
    x = n(985018),
    h = n(637900);
let _ = (0, m.Fe)({ createPromise: () => n.e("66147").then(n.bind(n, 48736)), webpackId: 48736 });
function A(e) {
    return (0, a.OK)(e) > 0.25 ? o.A.unsafe_rawColors.WHITE.css : o.A.unsafe_rawColors.PRIMARY_530.css;
}
function p(e) {
    let { value: t, onChange: n, disabled: l = !1 } = e,
        o = s.useRef(null),
        [u, m] = s.useState(t);
    function _() {
        n(u);
    }
    function p(e) {
        n(e), m(e);
    }
    let f = t === g.TGz,
        j = f ? u : t,
        N = (0, i.jsx)(c.A9s, { size: "custom", width: 32, height: 24, color: A(t) }),
        { ref: E, ...b } = (0, d._u)({ orientation: "horizontal", isDisabled: l }),
        T = (0, d.Gx)({ isSelected: f, label: x.intl.formatToPlainString(x.t.ZC69mL, { colorHex: g.TpD }) }),
        C = (0, d.Gx)({ isSelected: !f, label: x.intl.formatToPlainString(x.t["3kiLZZ"], { colorHex: (0, a.Hl)(t) }) });
    return (0, i.jsxs)("div", {
        className: h.NC,
        "aria-label": x.intl.string(x.t["FJjrI/"]),
        ref: E,
        ...b,
        children: [
            (0, i.jsx)("div", {
                className: r()(h.oP, { [h.r9]: l }),
                children: (0, i.jsxs)(c.DUT, {
                    onClick: l
                        ? void 0
                        : function () {
                              n(g.TGz);
                          },
                    "aria-disabled": l,
                    ...T,
                    children: [
                        (0, i.jsx)("div", {
                            className: h.nf,
                            style: { backgroundColor: g.TpD },
                            children: f ? N : null,
                        }),
                        (0, i.jsx)(c.Text, {
                            className: h.br,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: x.intl.string(x.t.Mcfzar),
                        }),
                    ],
                }),
            }),
            (0, i.jsxs)("div", {
                className: r()(h.oP, { [h.r9]: l }),
                children: [
                    (0, i.jsxs)(c.DUT, {
                        onClick: l ? void 0 : _,
                        "aria-disabled": l,
                        ...C,
                        children: [
                            (0, i.jsx)("div", {
                                className: r()(h.yB, { [h.MU]: j === g.TGz }),
                                style: { "--custom-color": (0, a.Hl)(j) },
                                children: f ? null : N,
                            }),
                            (0, i.jsx)(c.Text, {
                                className: h.br,
                                color: "text-default",
                                variant: "text-xs/normal",
                                "aria-hidden": !0,
                                children: x.intl.string(x.t["2ArXy1"]),
                            }),
                        ],
                    }),
                    !l &&
                        (0, i.jsx)(c.YNO, {
                            targetElementRef: o,
                            onRequestOpen: _,
                            renderPopout: (e) => (0, i.jsx)(c.VNw, { ...e, value: t, onChange: p }),
                            children: (e) =>
                                (0, i.jsx)(c.DUT, {
                                    ...e,
                                    innerRef: o,
                                    className: h.MC,
                                    "aria-label": x.intl.string(x.t.Qp04hK),
                                    children: (0, i.jsx)(c.dDg, {
                                        size: "custom",
                                        className: h.cE,
                                        width: 14,
                                        height: 14,
                                        color: A(j),
                                    }),
                                }),
                        }),
                ],
            }),
        ],
    });
}
function f(e) {
    let t,
        { value: n, onChange: s, disabled: l = !1 } = e,
        { ref: r, width: a } = (0, u.Ay)();
    return (
        (t =
            null == a || a < 440
                ? (0, i.jsx)(p, { value: n, onChange: s, disabled: l })
                : (0, i.jsx)(_, { defaultColor: g.TGz, colors: g._tK, value: n, onChange: s, disabled: l })),
        (0, i.jsx)("div", { ref: r, children: t })
    );
}
