n.d(t, {
    w: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(975807),
    s = n(975571),
    o = n(58736),
    c = n(985018);

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
    (0, l.mMO)(async () => {
        let { default: e } = await n.e("81008").then(n.bind(n, 572723));
        return (t) => (0, r.jsx)(e, u({}, t));
    });

function p(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(l.W1t, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "staff-help-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": c.intl.string(c.t.HpQykc),
        children: (0, r.jsxs)(l.rXV, {
            children: [
                (0, r.jsx)(l.Drp, {
                    id: "staff-help-bug-reporter",
                    label: c.intl.string(c.t["5LqopY"]),
                    icon: l.Q5O,
                    leadingAccessory: {
                        type: "icon",
                        icon: l.Q5O,
                    },
                    action: d,
                }),
                (0, r.jsx)(l.Drp, {
                    id: "staff-help-center",
                    label: "Go to Help Center",
                    icon: l.I9m,
                    leadingAccessory: {
                        type: "icon",
                        icon: l.cBN,
                    },
                    trailingIndicator: {
                        type: "icon",
                        icon: l.I9m,
                    },
                    action: () => (0, a.A)(s.C),
                }),
            ],
        }),
    });
}

function h(e) {
    let { className: t, focusSectionProps: n } = e,
        [a, s] = i.useState(!1),
        [h, g] = i.useState(0),
        f = i.useRef(null),
        m = (e) => {
            clearTimeout(h),
                g(
                    setTimeout(() => {
                        s(e);
                    }, 100),
                );
        };
    return (0, r.jsx)("div", {
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        children: (0, r.jsx)(l.YNO, {
            targetElementRef: f,
            shouldShow: a,
            animation: l.YNO.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => s(!0),
            onRequestClose: () => s(!1),
            renderPopout: () =>
                (0, r.jsx)(p, {
                    onClose: () => s(!1),
                }),
            children: (e, i) => {
                let { isShown: a } = i;
                return (0, r.jsx)(
                    o.In,
                    u(
                        {
                            ref: f,
                            onClick: d,
                            icon: l.Q5O,
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
