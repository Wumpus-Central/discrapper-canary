n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(87664),
    u = n(287809),
    d = n(427262),
    p = n(198525),
    f = n(652215),
    h = n(985018),
    A = n(816751),
    g = n(140869);
let m = function (e) {
    let { quest: t } = e,
        [n, l] = i.useState(!1),
        m = i.useRef(null),
        b = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        _ = d.Ay.useName(b),
        E = (0, c.A)(null == b ? void 0 : b.id),
        O = i.useCallback(
            (e) => {
                var n, i;
                return (0, r.jsx)(
                    p.A,
                    ((n = (function (e) {
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
                            name: _,
                            quest: t,
                            memberListItemRef: m,
                            applicationStream: E,
                        },
                        e,
                    )),
                    (i = i =
                        {
                            closePopout: () => {
                                l(!1);
                            },
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n),
                );
            },
            [t, E, _],
        );
    return (0, r.jsx)("div", {
        className: A.x3,
        children: (0, r.jsxs)("div", {
            className: A.B0,
            children: [
                (0, r.jsx)(o.Heading, {
                    className: g.R_,
                    variant: "heading-md/semibold",
                    children: h.intl.string(h.t.jY7Zxg),
                }),
                (0, r.jsx)("div", {
                    className: g.$Q,
                    children: h.intl.string(h.t.q3hbne),
                }),
                (0, r.jsx)("div", {
                    className: g.k0,
                    children: (0, r.jsx)(o.YNO, {
                        targetElementRef: m,
                        renderPopout: O,
                        position: "bottom",
                        shouldShow: n,
                        onRequestClose: () => l(!1),
                        nudgeAlignIntoViewport: !1,
                        useRawTargetDimensions: !0,
                        animation: o.YNO.Animation.NONE,
                        spacing: -3,
                        fixed: !0,
                        scrollBehavior: "close",
                        children: () =>
                            (0, r.jsx)("div", {
                                ref: m,
                                className: a()(g.Tn, {
                                    [g.wH]: n,
                                }),
                                children: (0, r.jsx)(o.DUT, {
                                    onClick: () => l(!n),
                                    tabIndex: 0,
                                    children: (0, r.jsxs)("div", {
                                        className: g.lm,
                                        children: [
                                            (0, r.jsx)(o.euF, {
                                                size: o._3J.SIZE_32,
                                                src: null == b ? void 0 : b.getAvatarURL(void 0, 32),
                                                status: f.clD.ONLINE,
                                                "aria-label": null == b ? void 0 : b.username,
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: g.Fj,
                                                children: [
                                                    (0, r.jsx)(o.Text, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        children: _,
                                                    }),
                                                    (0, r.jsx)(o.Text, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: h.intl.string(h.t.b9w3bO),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                    }),
                }),
            ],
        }),
    });
};
