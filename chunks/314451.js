n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(782568),
    s = n(31336),
    c = n(678717),
    u = n(252899),
    d = n(478057),
    p = n(906467),
    f = n(63063),
    h = n(665149),
    g = n(388032);
function m(e) {
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
let b = () =>
    (0, a.ZDy)(async () => {
        let { default: e } = await n.e("83051").then(n.bind(n, 115072));
        return (t) => (0, r.jsx)(e, m({}, t));
    });
function _(e) {
    let { onClose: t, isDiscordDeveloper: n } = e,
        i = (0, c.useDevToolsTabConfig)(),
        l = (0, u.F)(i, s.d8),
        p = (0, d.Z)();
    return (0, r.jsx)(a.v2r, {
        onSelect: () => {},
        navId: "staff-help-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": g.intl.string(g.t.HpQykZ),
        children: (0, r.jsxs)(a.kSQ, {
            children: [
                (0, r.jsx)(a.sNh, {
                    id: "staff-help-bug-reporter",
                    label: g.intl.string(g.t["5Lqopa"]),
                    icon: a.nnZ,
                    action: b,
                }),
                n &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(a.sNh, {
                                id: "staff-devtools",
                                label: "DevTools",
                                action: () => (0, s.d8)(),
                                children: l,
                            }),
                            p,
                        ],
                    }),
                (0, r.jsx)(a.sNh, {
                    id: "staff-help-center",
                    label: "Go to Help Center",
                    icon: a.rgF,
                    action: () => (0, o.Z)(f.w),
                }),
            ],
        }),
    });
}
function O(e) {
    let { className: t, focusSectionProps: n } = e,
        o = (0, l.e7)([p.Z], () => p.Z.isDeveloper),
        [s, c] = i.useState(!1),
        [u, d] = i.useState(0),
        f = i.useRef(null),
        O = (e) => {
            clearTimeout(u),
                d(
                    setTimeout(() => {
                        c(e);
                    }, 100),
                );
        };
    return (0, r.jsx)("div", {
        onMouseEnter: () => O(!0),
        onMouseLeave: () => O(!1),
        children: (0, r.jsx)(a.yRy, {
            targetElementRef: f,
            shouldShow: s,
            animation: a.yRy.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => c(!0),
            onRequestClose: () => c(!1),
            renderPopout: () =>
                (0, r.jsx)(_, {
                    onClose: () => c(!1),
                    isDiscordDeveloper: o,
                }),
            children: (e, i) => {
                let { isShown: l } = i;
                return (0, r.jsx)(
                    h.JO,
                    m(
                        {
                            ref: f,
                            onClick: b,
                            icon: a.nnZ,
                            "aria-label": g.intl.string(g.t.cqEoj4),
                            selected: l,
                            className: t,
                        },
                        n,
                    ),
                );
            },
        }),
    });
}
