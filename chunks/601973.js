"use strict";
n.d(t, { p: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(187322),
    o = n(285796),
    l = n(715482),
    d = n(862301),
    _ = n(460890),
    u = n(930856);
function c(e) {
    let {
        ref: t,
        disabled: n,
        readOnly: r,
        loading: a,
        clearable: o,
        fullWidth: l,
        isOpen: _,
        isInert: c,
        hasValue: m,
        hasError: f,
        showChevronButton: g = !0,
        children: p,
        handleToggle: A,
        handleClear: I,
        variant: T = "default",
    } = e;
    return (0, i.jsxs)(d.F, {
        ref: t,
        containerClassName: s()(u.cQ, { [u.Ij]: l }),
        className: s()(u.Bd, { [u.ar]: _, [u.ND]: c, [u.O_]: "unsupported_payment_modal_card" === T }),
        "data-mana-component": "select-input-field",
        disabled: n,
        readOnly: r,
        fullWidth: l,
        validation: f ? { hasError: !0 } : void 0,
        "aria-busy": a,
        children: [
            (0, i.jsx)("div", { className: u.gt, children: p }),
            (0, i.jsx)(E, { show: !0 === o && !c && !0 === m, iconSize: g ? "xs" : "sm", onClick: I }),
            (0, i.jsx)(h, { show: g, isOpen: _, onClick: A }),
        ],
    });
}
function E(e) {
    let { show: t, iconSize: n, onClick: r } = e,
        { i18n: s } = (0, _.G9)();
    return t
        ? (0, i.jsx)(a.vN, {
              children: (0, i.jsx)("button", {
                  className: u.mt,
                  "aria-label": s.CLEAR_SELECTION,
                  onClick: r,
                  children: (0, i.jsx)(o.a, { size: n, color: "currentColor" }),
              }),
          })
        : (0, i.jsx)("span", { "aria-hidden": !0 });
}
function h(e) {
    let { show: t, isOpen: n, onClick: r } = e;
    return t
        ? (0, i.jsx)("button", {
              "aria-hidden": !0,
              tabIndex: -1,
              className: u.E1,
              onMouseDown: (e) => e.preventDefault(),
              onClick: r,
              children: (0, i.jsx)("span", {
                  className: s()(u.t4, { [u.nT]: n }),
                  children: (0, i.jsx)(l.g, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : null;
}
