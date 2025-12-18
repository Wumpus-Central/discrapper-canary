n.d(t, { J: () => d });
var r = n(54381);
n(473749);
var s = n(120356),
    l = n.n(s),
    a = n(481060),
    i = n(493683),
    o = n(518950),
    c = n(342386),
    u = n(51144),
    p = n(353149),
    f = n(388032),
    h = n(116741);
let d = (e) => {
    let { recipient: t, isSuccess: n, onClose: s } = e,
        { avatarSrc: d, eventHandlers: g } = (0, o.Z)({
            userId: null == t ? void 0 : t.id,
            size: a.EFr.SIZE_56,
        }),
        b = u.ZP.getName(t),
        v = !n;
    return (0, r.jsxs)("div", {
        className: l()(h.row, { [h.error]: v }),
        children: [
            (0, r.jsx)(
                a.qEK,
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
                        src: d,
                        "aria-label": b,
                        size: a.EFr.SIZE_32,
                    },
                    g,
                ),
            ),
            (0, r.jsxs)("div", {
                className: h.content,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: h.displayName,
                        children: b,
                    }),
                    v &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            className: h.errorText,
                            children: f.intl.format(p.default["Y/oMwY"], { userName: b }),
                        }),
                ],
            }),
            n &&
                (0, r.jsx)(a.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: f.intl.string(f.t["g33r/P"]),
                    icon: a.kBi,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, c.default)(), i.Z.openPrivateChannel({ recipientIds: e }), s());
                    },
                }),
        ],
    });
};
