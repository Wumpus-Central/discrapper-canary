n.d(t, { J: () => f });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(493683),
    l = n(518950),
    c = n(342386),
    u = n(51144),
    d = n(606097),
    b = n(388032),
    h = n(456577);
let f = (e) => {
    let { recipient: t, isSuccess: n, onClose: i } = e,
        { avatarSrc: f, eventHandlers: p } = (0, l.Z)({
            userId: null == t ? void 0 : t.id,
            size: s.EFr.SIZE_56,
        }),
        m = u.ZP.getName(t),
        y = !n;
    return (0, r.jsxs)("div", {
        className: h.row,
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
                        imageClassName: a()({ [h.erroredAvatar]: y }),
                        src: f,
                        "aria-label": m,
                        size: s.EFr.SIZE_32,
                    },
                    p,
                ),
            ),
            y
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Text, {
                              className: h.error,
                              variant: "text-md/medium",
                              color: "text-primary",
                              children: m,
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/medium",
                              className: h.error,
                              color: "text-primary",
                              children: b.intl.format(d.default["Y/oMwY"], { userName: m }),
                          }),
                      ],
                  })
                : (0, r.jsx)(s.Text, {
                      variant: "text-md/medium",
                      className: h.displayName,
                      color: "text-primary",
                      children: m,
                  }),
            (0, r.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                text: b.intl.string(b.t["g33r/P"]),
                icon: s.kBi,
                onClick: () => {
                    var e;
                    return (e = t.id), void ((0, c.default)(), o.Z.openPrivateChannel({ recipientIds: e }), i());
                },
            }),
        ],
    });
};
