"use strict";
n.d(t, { p: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(426333),
    o = n(934551),
    l = n(862301),
    u = n(460890),
    c = n(594597);
function d(e) {
    let {
        ref: t,
        disabled: n,
        readOnly: i,
        loading: s,
        clearable: o,
        fullWidth: u,
        isOpen: d,
        isInert: p,
        hasValue: h,
        hasError: m,
        showChevronButton: g = !0,
        children: E,
        handleToggle: A,
        handleClear: I,
    } = e;
    return (0, r.jsxs)(l.F, {
        ref: t,
        containerClassName: a()(c.cQ, { [c.Ij]: u }),
        className: a()(c.Bd, { [c.ar]: d, [c.ND]: p }),
        "data-mana-component": "select-input-field",
        disabled: n,
        readOnly: i,
        fullWidth: u,
        validation: m ? { hasError: !0 } : void 0,
        "aria-busy": s,
        children: [
            (0, r.jsx)("div", { className: c.gt, children: E }),
            (0, r.jsx)(_, { show: !0 === o && !p && !0 === h, iconSize: g ? "xs" : "sm", onClick: I }),
            (0, r.jsx)(f, { show: g, isOpen: d, onClick: A }),
        ],
    });
}
function _(e) {
    let { show: t, iconSize: n, onClick: i } = e,
        { i18n: a } = (0, u.G9)();
    return t
        ? (0, r.jsx)(s.vN, {
              children: (0, r.jsx)("button", {
                  className: c.mt,
                  "aria-label": a.CLEAR_SELECTION,
                  onClick: i,
                  children: (0, r.jsx)(o.CircleXIcon, { size: n, color: "currentColor" }),
              }),
          })
        : (0, r.jsx)("span", {});
}
function f(e) {
    let { show: t, isOpen: n, onClick: i } = e;
    return t
        ? (0, r.jsx)("button", {
              "aria-hidden": !0,
              tabIndex: -1,
              className: c.E1,
              onClick: i,
              children: (0, r.jsx)("span", {
                  className: a()(c.t4, { [c.nT]: n }),
                  children: (0, r.jsx)(o.ChevronLargeDownIcon, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : null;
}
