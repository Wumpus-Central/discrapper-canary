n.d(t, { J: () => d });
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    s = n(481060),
    i = n(493683),
    o = n(518950),
    c = n(342386),
    u = n(51144),
    p = n(353149),
    f = n(388032),
    h = n(116741);
let d = (e) => {
    let { recipient: t, isSuccess: n, onClose: l } = e,
        { avatarSrc: d, eventHandlers: g } = (0, o.Z)({
            userId: null == t ? void 0 : t.id,
            size: s.EFr.SIZE_56,
        }),
        b = u.ZP.getName(t),
        m = !n;
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
                        imageClassName: a()({ [h.erroredAvatar]: m }),
                        src: d,
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
                              className: h.error,
                              variant: "text-md/medium",
                              color: "text-strong",
                              children: b,
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/medium",
                              className: h.error,
                              color: "text-strong",
                              children: f.intl.format(p.default["Y/oMwY"], { userName: b }),
                          }),
                      ],
                  })
                : (0, r.jsx)(s.Text, {
                      variant: "text-md/medium",
                      className: h.displayName,
                      color: "text-strong",
                      children: b,
                  }),
            (0, r.jsx)(s.Button, {
                variant: "secondary",
                size: "sm",
                text: f.intl.string(f.t["g33r/P"]),
                icon: s.kBi,
                onClick: () => {
                    var e;
                    return (e = t.id), void ((0, c.default)(), i.Z.openPrivateChannel({ recipientIds: e }), l());
                },
            }),
        ],
    });
};
