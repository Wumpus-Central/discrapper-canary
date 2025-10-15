n.d(t, { q: () => d });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(74655),
    l = n(490340),
    c = n(388032),
    u = n(680765);
function d(e) {
    let {
        ref: t,
        disabled: n,
        readOnly: i,
        loading: o,
        clearable: l,
        fullWidth: c,
        isOpen: d,
        isInert: p,
        hasValue: h,
        hasError: m,
        showChevronButton: g = !0,
        width: E,
        children: b,
        handleToggle: y,
        handleClear: O,
    } = e;
    return (0, r.jsxs)(s.U, {
        ref: t,
        containerClassName: a()(u.selectFieldContainer, { [u.fullWidth]: c }),
        className: a()(u.selectField, {
            [u.isFocused]: d,
            [u.isInert]: p,
        }),
        style: c ? void 0 : { width: "min(".concat(E, ", 100%)") },
        "data-mana-component": "select-input-field",
        disabled: n,
        readOnly: i,
        fullWidth: c,
        validation: m ? { hasError: !0 } : void 0,
        "aria-busy": o,
        children: [
            (0, r.jsx)("div", {
                className: u.selectFieldContent,
                children: b,
            }),
            (0, r.jsx)(f, {
                show: !0 === l && !p && !0 === h,
                iconSize: g ? "xs" : "sm",
                onClick: O,
            }),
            (0, r.jsx)(_, {
                show: g,
                isOpen: d,
                onClick: y,
            }),
        ],
    });
}
function f(e) {
    let { show: t, iconSize: n, onClick: i } = e;
    return t
        ? (0, r.jsx)(o.tEY, {
              children: (0, r.jsx)("button", {
                  className: u.clearButton,
                  "aria-label": c.intl.string(l.default.JA5C7O),
                  onClick: i,
                  children: (0, r.jsx)(o.k$p, {
                      size: n,
                      color: "currentColor",
                  }),
              }),
          })
        : (0, r.jsx)("span", {});
}
function _(e) {
    let { show: t, isOpen: n, onClick: i } = e;
    return t
        ? (0, r.jsx)("button", {
              "aria-hidden": !0,
              tabIndex: -1,
              className: u.chevronButton,
              onClick: i,
              children: (0, r.jsx)("span", {
                  className: a()(u.chevronIcon, { [u.isOpen]: n }),
                  children: (0, r.jsx)(o.hic, {
                      size: "refresh_sm",
                      color: "currentColor",
                  }),
              }),
          })
        : null;
}
