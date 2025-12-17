n.d(t, { M: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(31336),
    o = n(252899),
    s = n(682475),
    c = n(478057),
    u = n(665149);
function d(e) {
    let { onClose: t } = e,
        n = (0, s.F)(),
        i = (0, o.F)(n, a.d8),
        u = (0, c.Z)();
    return (0, r.jsxs)(l.v2r, {
        onSelect: () => {},
        navId: "devtools-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": "DevTools Actions",
        children: [
            i,
            (0, r.jsx)(l.kSQ, {
                "aria-label": "Playgrounds",
                children: u,
            }),
        ],
    });
}
function p(e) {
    let { className: t, focusSectionProps: n } = e,
        [o, s] = i.useState(!1),
        [c, p] = i.useState(0),
        f = i.useRef(null),
        g = (e) => {
            clearTimeout(c),
                p(
                    setTimeout(() => {
                        s(e);
                    }, 100),
                );
        };
    return (0, r.jsx)("div", {
        onMouseEnter: () => g(!0),
        onMouseLeave: () => g(!1),
        children: (0, r.jsx)(l.yRy, {
            targetElementRef: f,
            shouldShow: o,
            animation: l.yRy.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => s(!0),
            onRequestClose: () => s(!1),
            renderPopout: () => (0, r.jsx)(d, { onClose: () => s(!1) }),
            children: (e, i) => {
                let { isShown: o } = i;
                return (0, r.jsx)(
                    u.JO,
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
                            ref: f,
                            onClick: () => (0, a.d8)(),
                            icon: l.Ymb,
                            "aria-label": "DevTools",
                            selected: o,
                            className: t,
                        },
                        n,
                    ),
                );
            },
        }),
    });
}
