n.d(t, {
    p: () => d,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(426333),
    s = n(934551),
    l = n(862301),
    c = n(460890),
    u = n(594597);

function d(e) {
    let {
        ref: t,
        disabled: n,
        readOnly: i,
        loading: o,
        clearable: s,
        fullWidth: c,
        isOpen: d,
        isInert: _,
        hasValue: h,
        hasError: m,
        showChevronButton: g = !0,
        children: E,
        handleToggle: y,
        handleClear: b,
    } = e;
    return (0, r.jsxs)(l.F, {
        ref: t,
        containerClassName: a()(u.cQ, {
            [u.Ij]: c,
        }),
        className: a()(u.Bd, {
            [u.ar]: d,
            [u.ND]: _,
        }),
        "data-mana-component": "select-input-field",
        disabled: n,
        readOnly: i,
        fullWidth: c,
        validation: m
            ? {
                  hasError: !0,
              }
            : void 0,
        "aria-busy": o,
        children: [
            (0, r.jsx)("div", {
                className: u.gt,
                children: E,
            }),
            (0, r.jsx)(f, {
                show: !0 === s && !_ && !0 === h,
                iconSize: g ? "xs" : "sm",
                onClick: b,
            }),
            (0, r.jsx)(p, {
                show: g,
                isOpen: d,
                onClick: y,
            }),
        ],
    });
}

function f(e) {
    let { show: t, iconSize: n, onClick: i } = e,
        { i18n: a } = (0, c.G9)();
    return t
        ? (0, r.jsx)(o.vN, {
              children: (0, r.jsx)("button", {
                  className: u.mt,
                  "aria-label": a.CLEAR_SELECTION,
                  onClick: i,
                  children: (0, r.jsx)(s.CircleXIcon, {
                      size: n,
                      color: "currentColor",
                  }),
              }),
          })
        : (0, r.jsx)("span", {});
}

function p(e) {
    let { show: t, isOpen: n, onClick: i } = e;
    return t
        ? (0, r.jsx)("button", {
              "aria-hidden": !0,
              tabIndex: -1,
              className: u.E1,
              onClick: i,
              children: (0, r.jsx)("span", {
                  className: a()(u.t4, {
                      [u.nT]: n,
                  }),
                  children: (0, r.jsx)(s.ChevronLargeDownIcon, {
                      size: "refresh_sm",
                      color: "currentColor",
                  }),
              }),
          })
        : null;
}
