n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(311907),
    s = n(435371),
    o = n(397927),
    d = n(430086),
    c = n(729904),
    u = n(963169),
    A = n(985018),
    h = n(88808);
let _ = d.GY.binds["0"],
    m = d.M$.binds["0"],
    p = (e) => {
        let { firstElementFocusJumpSectionProps: t = {} } = e,
            { canGoBack: n, canGoForward: r } = (0, a.cf)([c.A], () => ({
                canGoBack: c.A.canGoBack,
                canGoForward: c.A.canGoForward,
            }));
        return (0, i.jsxs)("div", {
            className: h.y_,
            children: [
                (0, i.jsx)(s.m_, {
                    ariaHidden: !0,
                    shouldShow: n,
                    text: A.intl.string(A.t.B9vzIP),
                    keyboardShortcut: _,
                    children: (0, i.jsx)(o.DUT, {
                        "aria-label": A.intl.string(A.t.B9vzIP),
                        "aria-disabled": !n,
                        className: l()(h.x6, h.aX, { [h.r9]: !n }),
                        onClick: () => (0, u.OE)("nav_button"),
                        ...t,
                        children: (0, i.jsx)(o.rJJ, { size: "sm", color: "currentColor" }),
                    }),
                }),
                (0, i.jsx)(s.m_, {
                    ariaHidden: !0,
                    shouldShow: r,
                    text: A.intl.string(A.t["9KJ29e"]),
                    keyboardShortcut: m,
                    children: (0, i.jsx)(o.DUT, {
                        "aria-label": A.intl.string(A.t["9KJ29e"]),
                        "aria-disabled": !r,
                        className: l()(h.x6, h.sY, { [h.r9]: !r }),
                        onClick: () => (0, u.Qb)("nav_button"),
                        children: (0, i.jsx)(o.EdP, { size: "sm", color: "currentColor" }),
                    }),
                }),
            ],
        });
    };
