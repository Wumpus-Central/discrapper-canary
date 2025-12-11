r.d(t, { J: () => b });
var n = r(54381);
r(473749);
var i = r(120356),
    s = r.n(i),
    a = r(481060),
    o = r(493683),
    l = r(518950),
    c = r(342386),
    u = r(51144),
    f = r(137427),
    d = r(388032),
    p = r(116741);
let b = (e) => {
    let { recipient: t, isSuccess: r, onClose: i } = e,
        { avatarSrc: b, eventHandlers: m } = (0, l.Z)({
            userId: null == t ? void 0 : t.id,
            size: a.EFr.SIZE_56,
        }),
        g = u.ZP.getName(t),
        y = !r;
    return (0, n.jsxs)("div", {
        className: p.row,
        children: [
            (0, n.jsx)(
                a.qEK,
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
                        imageClassName: s()({ [p.erroredAvatar]: y }),
                        src: b,
                        "aria-label": g,
                        size: a.EFr.SIZE_32,
                    },
                    m,
                ),
            ),
            y
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(a.Text, {
                              className: p.error,
                              variant: "text-md/medium",
                              color: "text-strong",
                              children: g,
                          }),
                          (0, n.jsx)(a.Text, {
                              variant: "text-md/medium",
                              className: p.error,
                              color: "text-strong",
                              children: d.intl.format(f.default["Y/oMwY"], { userName: g }),
                          }),
                      ],
                  })
                : (0, n.jsx)(a.Text, {
                      variant: "text-md/medium",
                      className: p.displayName,
                      color: "text-strong",
                      children: g,
                  }),
            (0, n.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: d.intl.string(d.t["g33r/P"]),
                icon: a.kBi,
                onClick: () => {
                    var e;
                    return (e = t.id), void ((0, c.default)(), o.Z.openPrivateChannel({ recipientIds: e }), i());
                },
            }),
        ],
    });
};
