"use strict";
n.d(t, { p: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(187322),
    o = n(285796),
    l = n(715482),
    u = n(862301),
    d = n(460890),
    c = n(930856);
function _(e) {
    let {
        ref: t,
        disabled: n,
        readOnly: i,
        loading: a,
        clearable: o,
        fullWidth: l,
        isOpen: d,
        isInert: _,
        hasValue: h,
        hasError: p,
        showChevronButton: m = !0,
        children: g,
        handleToggle: A,
        handleClear: I,
    } = e;
    return (0, r.jsxs)(u.F, {
        ref: t,
        containerClassName: s()(c.cQ, { [c.Ij]: l }),
        className: s()(c.Bd, { [c.ar]: d, [c.ND]: _ }),
        "data-mana-component": "select-input-field",
        disabled: n,
        readOnly: i,
        fullWidth: l,
        validation: p ? { hasError: !0 } : void 0,
        "aria-busy": a,
        children: [
            (0, r.jsx)("div", { className: c.gt, children: g }),
            (0, r.jsx)(f, { show: !0 === o && !_ && !0 === h, iconSize: m ? "xs" : "sm", onClick: I }),
            (0, r.jsx)(E, { show: m, isOpen: d, onClick: A }),
        ],
    });
}
function f(e) {
    let { show: t, iconSize: n, onClick: i } = e,
        { i18n: s } = (0, d.G9)();
    return t
        ? (0, r.jsx)(a.vN, {
              children: (0, r.jsx)("button", {
                  className: c.mt,
                  "aria-label": s.CLEAR_SELECTION,
                  onClick: i,
                  children: (0, r.jsx)(o.a, { size: n, color: "currentColor" }),
              }),
          })
        : (0, r.jsx)("span", {});
}
function E(e) {
    let { show: t, isOpen: n, onClick: i } = e;
    return t
        ? (0, r.jsx)("button", {
              "aria-hidden": !0,
              tabIndex: -1,
              className: c.E1,
              onMouseDown: (e) => e.preventDefault(),
              onClick: i,
              children: (0, r.jsx)("span", {
                  className: s()(c.t4, { [c.nT]: n }),
                  children: (0, r.jsx)(l.g, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : null;
}
