n.d(t, { J: () => f });
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    s = n(481060),
    i = n(493683),
    o = n(518950),
    u = n(342386),
    c = n(51144),
    p = n(941651),
    h = n(388032),
    d = n(456577);
let f = (e) => {
    let { recipient: t, isSuccess: n, onClose: l } = e,
        { avatarSrc: f, eventHandlers: g } = (0, o.Z)({
            userId: null == t ? void 0 : t.id,
            size: s.EFr.SIZE_56,
        }),
        b = c.ZP.getName(t),
        m = !n;
    return (0, r.jsxs)("div", {
        className: d.row,
        children: [
            (0, r.jsx)(
                s.qEK,
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
                        imageClassName: a()({ [d.erroredAvatar]: m }),
                        src: f,
                        "aria-label": b,
                        size: s.EFr.SIZE_32,
                    },
                    g,
                ),
            ),
            m
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Text, {
                              className: d.error,
                              variant: "text-md/medium",
                              color: "text-strong",
                              children: b,
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/medium",
                              className: d.error,
                              color: "text-strong",
                              children: h.intl.format(p.default["Y/oMwY"], { userName: b }),
                          }),
                      ],
                  })
                : (0, r.jsx)(s.Text, {
                      variant: "text-md/medium",
                      className: d.displayName,
                      color: "text-strong",
                      children: b,
                  }),
            (0, r.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                text: h.intl.string(h.t["g33r/P"]),
                icon: s.kBi,
                onClick: () => {
                    var e;
                    return (e = t.id), void ((0, u.default)(), i.Z.openPrivateChannel({ recipientIds: e }), l());
                },
            }),
        ],
    });
};
