"use strict";
n.d(t, { p: () => _ });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(187322),
    l = n(285796),
    o = n(715482),
    d = n(862301),
    c = n(460890),
    u = n(37712);
function _(e) {
    let {
        ref: t,
        disabled: n,
        readOnly: r,
        loading: s,
        clearable: l,
        fullWidth: o,
        isOpen: c,
        isInert: _,
        hasValue: h,
        hasError: I,
        showChevronButton: f = !0,
        children: p,
        handleToggle: T,
        handleClear: m,
        variant: g = "default",
    } = e;
    return (0, i.jsxs)(d.F, {
        ref: t,
        containerClassName: a()(u.cQ, { [u.Ij]: o }),
        className: a()(u.Bd, { [u.ar]: c, [u.ND]: _, [u.O_]: "unsupported_payment_modal_card" === g }),
        "data-mana-component": "select-input-field",
        disabled: n,
        readOnly: r,
        fullWidth: o,
        validation: I ? { hasError: !0 } : void 0,
        "aria-busy": s,
        children: [
            (0, i.jsx)("div", { className: u.gt, children: p }),
            (0, i.jsx)(E, { show: !0 === l && !_ && !0 === h, iconSize: f ? "xs" : "sm", onClick: m }),
            (0, i.jsx)(A, { show: f, isOpen: c, onClick: T }),
        ],
    });
}
function E(e) {
    let { show: t, iconSize: n, onClick: r } = e,
        { i18n: a } = (0, c.G9)();
    return t
        ? (0, i.jsx)(s.vN, {
              children: (0, i.jsx)("button", {
                  className: u.mt,
                  "aria-label": a.CLEAR_SELECTION,
                  onClick: r,
                  children: (0, i.jsx)(l.a, { size: n, color: "currentColor" }),
              }),
          })
        : (0, i.jsx)("span", { "aria-hidden": !0 });
}
function A(e) {
    let { show: t, isOpen: n, onClick: r } = e;
    return t
        ? (0, i.jsx)("button", {
              "aria-hidden": !0,
              tabIndex: -1,
              className: u.E1,
              onMouseDown: (e) => e.preventDefault(),
              onClick: r,
              children: (0, i.jsx)("span", {
                  className: a()(u.t4, { [u.nT]: n }),
                  children: (0, i.jsx)(o.g, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : null;
}
