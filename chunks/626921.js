n.d(t, { q: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(936806),
    l = n(388032),
    c = n(484050);
function u(e) {
    let {
        ref: t,
        disabled: n,
        readOnly: i,
        loading: s,
        clearable: l,
        fullWidth: u,
        isOpen: _,
        isInert: p,
        hasValue: h,
        hasError: m,
        showChevronButton: g = !0,
        children: E,
        handleToggle: b,
        handleClear: y,
    } = e;
    return (0, r.jsxs)(o.UPk, {
        ref: t,
        containerClassName: a()(c.selectFieldContainer, { [c.fullWidth]: u }),
        className: a()(c.selectField, {
            [c.isFocused]: _,
            [c.isInert]: p,
        }),
        "data-mana-component": "select-input-field",
        disabled: n,
        readOnly: i,
        fullWidth: u,
        validation: m ? { hasError: !0 } : void 0,
        "aria-busy": s,
        children: [
            (0, r.jsx)("div", {
                className: c.selectFieldContent,
                children: E,
            }),
            (0, r.jsx)(d, {
                show: !0 === l && !p && !0 === h,
                iconSize: g ? "xs" : "sm",
                onClick: y,
            }),
            (0, r.jsx)(f, {
                show: g,
                isOpen: _,
                onClick: b,
            }),
        ],
    });
}
function d(e) {
    let { show: t, iconSize: n, onClick: i } = e;
    return t
        ? (0, r.jsx)(o.tEY, {
              children: (0, r.jsx)("button", {
                  className: c.clearButton,
                  "aria-label": l.intl.string(s.default.JA5C7L),
                  onClick: i,
                  children: (0, r.jsx)(o.k$p, {
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
              className: c.chevronButton,
              onClick: i,
              children: (0, r.jsx)("span", {
                  className: a()(c.chevronIcon, { [c.isOpen]: n }),
                  children: (0, r.jsx)(o.hic, {
                      size: "refresh_sm",
                      color: "currentColor",
                  }),
              }),
          })
        : null;
}
