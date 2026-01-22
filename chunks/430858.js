n.d(t, { p: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(763600),
    l = n(985018),
    c = n(526008);
function u(e) {
    let {
        ref: t,
        disabled: n,
        readOnly: i,
        loading: o,
        clearable: l,
        fullWidth: u,
        isOpen: p,
        isInert: _,
        hasValue: h,
        hasError: m,
        showChevronButton: g = !0,
        children: E,
        handleToggle: b,
        handleClear: y,
    } = e;
    return (0, r.jsxs)(s.FON, {
        ref: t,
        containerClassName: a()(c.cQ, { [c.Ij]: u }),
        className: a()(c.Bd, {
            [c.ar]: p,
            [c.ND]: _,
        }),
        "data-mana-component": "select-input-field",
        disabled: n,
        readOnly: i,
        fullWidth: u,
        validation: m ? { hasError: !0 } : void 0,
        "aria-busy": o,
        children: [
            (0, r.jsx)("div", {
                className: c.gt,
                children: E,
            }),
            (0, r.jsx)(d, {
                show: !0 === l && !_ && !0 === h,
                iconSize: g ? "xs" : "sm",
                onClick: y,
            }),
            (0, r.jsx)(f, {
                show: g,
                isOpen: p,
                onClick: b,
            }),
        ],
    });
}
function d(e) {
    let { show: t, iconSize: n, onClick: i } = e;
    return t
        ? (0, r.jsx)(s.vN3, {
              children: (0, r.jsx)("button", {
                  className: c.mt,
                  "aria-label": l.intl.string(o.default.JA5C7L),
                  onClick: i,
                  children: (0, r.jsx)(s.aXh, {
                      size: n,
                      color: "currentColor",
                  }),
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
                  children: (0, r.jsx)(s.g8p, {
                      size: "refresh_sm",
                      color: "currentColor",
                  }),
              }),
          })
        : null;
}
