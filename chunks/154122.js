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
    d = r(606097),
    p = r(388032),
    f = r(456577);
let b = (e) => {
    let { recipient: t, isSuccess: r, onClose: i } = e,
        { avatarSrc: b, eventHandlers: m } = (0, l.Z)({
            userId: null == t ? void 0 : t.id,
            size: a.EFr.SIZE_56,
        }),
        y = u.ZP.getName(t),
        h = !r;
    return (0, n.jsxs)("div", {
        className: f.row,
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
                        imageClassName: s()({ [f.erroredAvatar]: h }),
                        src: b,
                        "aria-label": y,
                        size: a.EFr.SIZE_32,
                    },
                    m,
                ),
            ),
            h
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(a.Text, {
                              className: f.error,
                              variant: "text-md/medium",
                              color: "text-strong",
                              children: y,
                          }),
                          (0, n.jsx)(a.Text, {
                              variant: "text-md/medium",
                              className: f.error,
                              color: "text-strong",
                              children: p.intl.format(d.default["Y/oMwY"], { userName: y }),
                          }),
                      ],
                  })
                : (0, n.jsx)(a.Text, {
                      variant: "text-md/medium",
                      className: f.displayName,
                      color: "text-strong",
                      children: y,
                  }),
            (0, n.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: p.intl.string(p.t["g33r/P"]),
                icon: a.kBi,
                onClick: () => {
                    var e;
                    return (e = t.id), void ((0, c.default)(), o.Z.openPrivateChannel({ recipientIds: e }), i());
                },
            }),
        ],
    });
};
