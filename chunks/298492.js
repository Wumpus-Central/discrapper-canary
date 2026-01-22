r.d(t, { q: () => b });
var n = r(627968);
r(64700);
var s = r(503698),
    i = r.n(s),
    l = r(397927),
    a = r(308528),
    c = r(854627),
    o = r(12901),
    u = r(427262),
    d = r(519412),
    f = r(985018),
    p = r(712685);
let b = (e) => {
    let { recipient: t, isSuccess: r, onClose: s } = e,
        { avatarSrc: b, eventHandlers: g } = (0, c.A)({
            userId: null == t ? void 0 : t.id,
            size: l._3J.SIZE_56,
        }),
        m = u.Ay.getName(t),
        y = !r;
    return (0, n.jsxs)("div", {
        className: i()(p.nM, { [p.z3]: y }),
        children: [
            (0, n.jsx)(
                l.euF,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })(
                    {
                        src: b,
                        "aria-label": m,
                        size: l._3J.SIZE_32,
                    },
                    g,
                ),
            ),
            (0, n.jsxs)("div", {
                className: p.Qs,
                children: [
                    (0, n.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: p.QC,
                        children: m,
                    }),
                    y &&
                        (0, n.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            className: p.kc,
                            children: f.intl.format(d.default["Y/oMwY"], { userName: m }),
                        }),
                ],
            }),
            r &&
                (0, n.jsx)(l.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: f.intl.string(f.t["g33r/P"]),
                    icon: l.oyn,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, o.default)(), a.A.openPrivateChannel({ recipientIds: e }), s());
                    },
                }),
        ],
    });
};
