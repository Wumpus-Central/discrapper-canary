n.d(t, {
    QU: () => O,
    UA: () => E,
    Vl: () => g,
    gk: () => y,
    kg: () => b,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(481060),
    c = n(518950),
    u = n(51144),
    d = n(137427),
    f = n(388032),
    p = n(779872);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let h = (e) => {
        let { user: t, isOwnUser: n, label: a, onRemove: s, isFaded: d } = e,
            { avatarSrc: _, eventHandlers: h } = (0, c.Z)({
                userId: null == t ? void 0 : t.id,
                size: l.EFr.SIZE_24,
            }),
            g = (0, u.XM)(t),
            [E, b] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: o()(p.container, { [p.hoverBackground]: null != s }),
            onMouseEnter: () => b(!0),
            onMouseLeave: () => b(!1),
            children: [
                (0, r.jsxs)("div", {
                    className: o()(p.userInfoContainer, { [p.faded]: d }),
                    children: [
                        (0, r.jsx)(
                            l.qEK,
                            m(
                                {
                                    className: p.avatar,
                                    src: _,
                                    "aria-label": g,
                                    size: l.EFr.SIZE_24,
                                },
                                h,
                            ),
                        ),
                        (0, r.jsxs)(l.Text, {
                            className: p.username,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: [g, !!n && " (".concat(f.intl.string(f.t.LuZzxn), ")")],
                        }),
                        null != a &&
                            (0, r.jsx)(l.Text, {
                                className: p.label,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: a,
                            }),
                    ],
                }),
                null != s &&
                    E &&
                    (0, r.jsx)("div", {
                        className: p.textButtonContainer,
                        children: (0, r.jsx)(l.Avr, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: f.intl.string(f.t.N86XcP),
                            onClick: s,
                        }),
                    }),
            ],
        });
    },
    g = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, r.jsx)(h, {
            user: t,
            isOwnUser: n,
            label: f.intl.string(d.default.vc2xys),
        });
    },
    E = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, r.jsx)(h, {
            user: t,
            label: f.intl.string(d.default.mnt50A),
            onRemove: n,
        });
    },
    b = (e) => {
        let { user: t, isOwnUser: n } = e;
        return (0, r.jsx)(h, {
            user: t,
            isOwnUser: n,
            label: f.intl.string(d.default.mnt50A),
        });
    },
    y = (e) => {
        let { user: t, onRemove: n } = e;
        return (0, r.jsx)(h, {
            user: t,
            label: f.intl.string(d.default["1RH5t9"]),
            isFaded: !0,
            onRemove: n,
        });
    },
    O = (e) => {
        let { onInvite: t, canInvite: n } = e,
            [a, c] = i.useState(!1);
        return (0, r.jsxs)("div", {
            className: o()(p.container, { [p.hoverBackground]: n }),
            onMouseEnter: () => c(!0),
            onMouseLeave: () => c(!1),
            children: [
                (0, r.jsxs)("div", {
                    className: p.userInfoContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(p.userIconCircle, p.avatar),
                            children: (0, r.jsx)(l.tBG, {
                                size: "xxs",
                                color: s.Z.colors.ICON_SUBTLE,
                            }),
                        }),
                        (0, r.jsx)(l.Text, {
                            className: p.username,
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: f.intl.string(d.default["/x7DVG"]),
                        }),
                    ],
                }),
                a &&
                    n &&
                    (0, r.jsx)("div", {
                        className: p.textButtonContainer,
                        children: (0, r.jsx)(l.Avr, {
                            textVariant: "text-sm/medium",
                            variant: "secondary",
                            text: f.intl.string(d.default.O15JWp),
                            onClick: t,
                        }),
                    }),
            ],
        });
    };
