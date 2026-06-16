"use strict";
n.d(t, { p: () => _ });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(187322),
    o = n(285796),
    l = n(715482),
    u = n(862301),
    c = n(460890),
    d = n(930856);
function _(e) {
    let {
        ref: t,
        disabled: n,
        readOnly: r,
        loading: a,
        clearable: o,
        fullWidth: l,
        isOpen: c,
        isInert: _,
        hasValue: p,
        hasError: E,
        showChevronButton: m = !0,
        children: g,
        handleToggle: A,
        handleClear: I,
        variant: T = "default",
    } = e;
    return (0, i.jsxs)(u.F, {
        ref: t,
        containerClassName: s()(d.cQ, { [d.Ij]: l }),
        className: s()(d.Bd, { [d.ar]: c, [d.ND]: _, [d.O_]: "unsupported_payment_modal_card" === T }),
        "data-mana-component": "select-input-field",
        disabled: n,
        readOnly: r,
        fullWidth: l,
        validation: E ? { hasError: !0 } : void 0,
        "aria-busy": a,
        children: [
            (0, i.jsx)("div", { className: d.gt, children: g }),
            (0, i.jsx)(h, { show: !0 === o && !_ && !0 === p, iconSize: m ? "xs" : "sm", onClick: I }),
            (0, i.jsx)(f, { show: m, isOpen: c, onClick: A }),
        ],
    });
}
function h(e) {
    let { show: t, iconSize: n, onClick: r } = e,
        { i18n: s } = (0, c.G9)();
    return t
        ? (0, i.jsx)(a.vN, {
              children: (0, i.jsx)("button", {
                  className: d.mt,
                  "aria-label": s.CLEAR_SELECTION,
                  onClick: r,
                  children: (0, i.jsx)(o.a, { size: n, color: "currentColor" }),
              }),
          })
        : (0, i.jsx)("span", { "aria-hidden": !0 });
}
function f(e) {
    let { show: t, isOpen: n, onClick: r } = e;
    return t
        ? (0, i.jsx)("button", {
              "aria-hidden": !0,
              tabIndex: -1,
              className: d.E1,
              onMouseDown: (e) => e.preventDefault(),
              onClick: r,
              children: (0, i.jsx)("span", {
                  className: s()(d.t4, { [d.nT]: n }),
                  children: (0, i.jsx)(l.g, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : null;
}
