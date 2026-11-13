var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(559106),
    l = n(285796),
    o = n(715482),
    d = n(862301),
    c = n(116711),
    u = n(470791);
function _(e) {
    let { show: t, iconSize: n, onClick: r } = e,
        { i18n: a } = (0, c.G9)();
    return t
        ? (0, i.jsx)(s.vN, {
              children: (0, i.jsx)("button", {
                  type: "button",
                  className: u.mt,
                  "aria-label": a.CLEAR_SELECTION,
                  onClick: r,
                  children: (0, i.jsx)(l.CircleXIcon, { size: n, color: "currentColor" }),
              }),
          })
        : (0, i.jsx)("span", { "aria-hidden": !0 });
}
function E(e) {
    let { show: t, isOpen: n, onClick: r } = e;
    return t
        ? (0, i.jsx)("button", {
              type: "button",
              "aria-hidden": !0,
              tabIndex: -1,
              className: u.E1,
              onMouseDown: (e) => e.preventDefault(),
              onClick: r,
              children: (0, i.jsx)("span", {
                  className: a()(u.t4, { [u.nT]: n }),
                  children: (0, i.jsx)(o.ChevronLargeDownIcon, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : null;
}
n.d(
    t,
    {},
    {
        p: function (e) {
            let {
                ref: t,
                disabled: n,
                readOnly: r,
                loading: s,
                clearable: l,
                fullWidth: o,
                isOpen: c,
                isInert: A,
                hasValue: f,
                hasError: h,
                showChevronButton: I = !0,
                children: p,
                handleToggle: m,
                handleClear: T,
                variant: g = "default",
            } = e;
            return (0, i.jsxs)(d.F, {
                ref: t,
                containerClassName: a()(u.cQ, { [u.Ij]: o }),
                className: a()(u.Bd, { [u.ar]: c, [u.ND]: A, [u.O_]: "unsupported_payment_modal_card" === g }),
                "data-mana-component": "select-input-field",
                disabled: n,
                readOnly: r,
                fullWidth: o,
                validation: h ? { hasError: !0 } : void 0,
                "aria-busy": s,
                children: [
                    (0, i.jsx)("div", { className: u.gt, children: p }),
                    (0, i.jsx)(_, { show: !0 === l && !A && !0 === f, iconSize: I ? "xs" : "sm", onClick: T }),
                    (0, i.jsx)(E, { show: I, isOpen: c, onClick: m }),
                ],
            });
        },
    },
);
