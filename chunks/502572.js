var n = t(477900),
    s = t(582128),
    a = t(664343);
t.d(
    i,
    {},
    {
        A: function (e) {
            let { mouseLeaveDelay: i = 100, ...t } = e,
                { children: l, className: c, ...r } = t,
                d = s.useRef(0),
                [o, u] = s.useState(!1);
            return (0, n.jsx)("div", {
                className: c,
                onMouseEnter:
                    0 !== i
                        ? function () {
                              (clearTimeout(d.current), u(!0));
                          }
                        : () => {},
                onMouseLeave:
                    0 !== i
                        ? function () {
                              (clearTimeout(d.current), (d.current = setTimeout(() => u(!1), i)));
                          }
                        : () => {},
                children: (0, n.jsx)(a.ST, {
                    "data-migration-pending": !0,
                    forceOpen: o,
                    disableTooltipPointerEvents: !1,
                    ...r,
                    children: l,
                }),
            });
        },
    },
);
