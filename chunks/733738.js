n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(311907),
    s = n(435371),
    o = n(397927),
    d = n(430086),
    c = n(545167),
    u = n(729904),
    A = n(963169),
    h = n(985018),
    _ = n(88808);
let m = d.GY.binds["0"],
    p = d.M$.binds["0"],
    g = (e) => {
        let { firstElementFocusJumpSectionProps: t = {} } = e,
            { titlebarIconSize: n } = (0, c.pz)({ location: "BackForwardButtons" }),
            { canGoBack: r, canGoForward: d } = (0, a.cf)([u.A], () => ({
                canGoBack: u.A.canGoBack,
                canGoForward: u.A.canGoForward,
            }));
        return (0, i.jsxs)("div", {
            className: _.y_,
            children: [
                (0, i.jsx)(s.m_, {
                    ariaHidden: !0,
                    shouldShow: r,
                    text: h.intl.string(h.t.B9vzIP),
                    keyboardShortcut: m,
                    children: (0, i.jsx)(o.DUT, {
                        "aria-label": h.intl.string(h.t.B9vzIP),
                        "aria-disabled": !r,
                        className: l()(_.x6, _.aX, { [_.r9]: !r }),
                        onClick: () => (0, A.OE)("nav_button"),
                        ...t,
                        children: (0, i.jsx)(o.rJJ, { size: n, color: "currentColor" }),
                    }),
                }),
                (0, i.jsx)(s.m_, {
                    ariaHidden: !0,
                    shouldShow: d,
                    text: h.intl.string(h.t["9KJ29e"]),
                    keyboardShortcut: p,
                    children: (0, i.jsx)(o.DUT, {
                        "aria-label": h.intl.string(h.t["9KJ29e"]),
                        "aria-disabled": !d,
                        className: l()(_.x6, _.sY, { [_.r9]: !d }),
                        onClick: () => (0, A.Qb)("nav_button"),
                        children: (0, i.jsx)(o.EdP, { size: n, color: "currentColor" }),
                    }),
                }),
            ],
        });
    };
