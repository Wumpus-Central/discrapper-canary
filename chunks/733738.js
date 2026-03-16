n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(435371),
    s = n(397927),
    o = n(430086),
    d = n(963169),
    c = n(533560),
    u = n(985018),
    A = n(88808);
let h = o.GY.binds["0"],
    _ = o.M$.binds["0"],
    m = (e) => {
        let { firstElementFocusJumpSectionProps: t = {} } = e,
            { canGoBack: n, canGoForward: r } = (0, c.L)();
        return (0, i.jsxs)("div", {
            className: A.y_,
            children: [
                (0, i.jsx)(a.m_, {
                    ariaHidden: !0,
                    shouldShow: n,
                    text: u.intl.string(u.t.B9vzIP),
                    keyboardShortcut: h,
                    children: (0, i.jsx)(s.DUT, {
                        "aria-label": u.intl.string(u.t.B9vzIP),
                        "aria-disabled": !n,
                        className: l()(A.x6, A.aX, { [A.r9]: !n }),
                        onClick: () => (0, d.OE)("nav_button"),
                        ...t,
                        children: (0, i.jsx)(s.rJJ, { size: "sm", color: "currentColor" }),
                    }),
                }),
                (0, i.jsx)(a.m_, {
                    ariaHidden: !0,
                    shouldShow: r,
                    text: u.intl.string(u.t["9KJ29e"]),
                    keyboardShortcut: _,
                    children: (0, i.jsx)(s.DUT, {
                        "aria-label": u.intl.string(u.t["9KJ29e"]),
                        "aria-disabled": !r,
                        className: l()(A.x6, A.sY, { [A.r9]: !r }),
                        onClick: () => (0, d.Qb)("nav_button"),
                        children: (0, i.jsx)(s.EdP, { size: "sm", color: "currentColor" }),
                    }),
                }),
            ],
        });
    };
