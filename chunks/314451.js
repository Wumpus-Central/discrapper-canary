n.d(t, { H: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(782568),
    s = n(63063),
    o = n(665149),
    c = n(388032);
function u(e) {
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
}
let d = () =>
    (0, l.ZDy)(async () => {
        let { default: e } = await n.e("83051").then(n.bind(n, 115072));
        return (t) => (0, r.jsx)(e, u({}, t));
    });
function p(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(l.v2r, {
        onSelect: () => {},
        navId: "staff-help-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": c.intl.string(c.t.HpQykc),
        children: (0, r.jsxs)(l.kSQ, {
            children: [
                (0, r.jsx)(l.sNh, {
                    id: "staff-help-bug-reporter",
                    label: c.intl.string(c.t["5LqopY"]),
                    icon: l.nnZ,
                    action: d,
                }),
                (0, r.jsx)(l.sNh, {
                    id: "staff-help-center",
                    label: "Go to Help Center",
                    icon: l.rgF,
                    action: () => (0, a.Z)(s.w),
                }),
            ],
        }),
    });
}
function f(e) {
    let { className: t, focusSectionProps: n } = e,
        [a, s] = i.useState(!1),
        [f, h] = i.useState(0),
        g = i.useRef(null),
        m = (e) => {
            clearTimeout(f),
                h(
                    setTimeout(() => {
                        s(e);
                    }, 100),
                );
        };
    return (0, r.jsx)("div", {
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        children: (0, r.jsx)(l.yRy, {
            targetElementRef: g,
            shouldShow: a,
            animation: l.yRy.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => s(!0),
            onRequestClose: () => s(!1),
            renderPopout: () => (0, r.jsx)(p, { onClose: () => s(!1) }),
            children: (e, i) => {
                let { isShown: a } = i;
                return (0, r.jsx)(
                    o.JO,
                    u(
                        {
                            ref: g,
                            onClick: d,
                            icon: l.nnZ,
                            "aria-label": c.intl.string(c.t["5LqopY"]),
                            selected: a,
                            className: t,
                        },
                        n,
                    ),
                );
            },
        }),
    });
}
