n.d(t, {
    R: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(538064),
    s = n(786574),
    o = n(641616),
    c = n(616621),
    u = n(58736);

function d(e) {
    let { onClose: t } = e,
        n = (0, o.x)(),
        i = (0, s.N)(n, a.Ft),
        u = (0, c.A)();
    return (0, r.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "devtools-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": "DevTools Actions",
        children: [
            i,
            (0, r.jsx)(l.rXV, {
                "aria-label": "Playgrounds",
                children: u,
            }),
        ],
    });
}

function p(e) {
    let { className: t, focusSectionProps: n } = e,
        [s, o] = i.useState(!1),
        [c, p] = i.useState(0),
        h = i.useRef(null),
        g = (e) => {
            clearTimeout(c),
                p(
                    setTimeout(() => {
                        o(e);
                    }, 100),
                );
        };
    return (0, r.jsx)("div", {
        onMouseEnter: () => g(!0),
        onMouseLeave: () => g(!1),
        children: (0, r.jsx)(l.YNO, {
            targetElementRef: h,
            shouldShow: s,
            animation: l.YNO.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => o(!0),
            onRequestClose: () => o(!1),
            renderPopout: () =>
                (0, r.jsx)(d, {
                    onClose: () => o(!1),
                }),
            children: (e, i) => {
                let { isShown: s } = i;
                return (0, r.jsx)(
                    u.In,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            ref: h,
                            onClick: () => (0, a.Ft)(),
                            icon: l.VaJ,
                            "aria-label": "DevTools",
                            selected: s,
                            className: t,
                        },
                        n,
                    ),
                );
            },
        }),
    });
}
