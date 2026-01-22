n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(985018),
    a = n(875515);
let s = (e) => {
    let { hasHub: t } = e;
    return (0, r.jsxs)("div", {
        className: a.kL,
        children: [
            (0, r.jsx)("div", {
                className: a.zc,
                children: (0, r.jsx)(i.Pfh, {
                    size: "md",
                    color: i.LU0.colors.WHITE.css,
                }),
            }),
            (0, r.jsx)(i.Text, {
                color: "text-strong",
                variant: "text-lg/semibold",
                className: a.wx,
                children: t ? l.intl.string(l.t.hsSHh8) : l.intl.string(l.t.Wf6iij),
            }),
            (0, r.jsx)(i.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: a.__invalid_description,
                children: t ? l.intl.string(l.t.FZ2J3Y) : l.intl.string(l.t.TvHcv6),
            }),
            (0, r.jsx)("div", {
                className: a.rQ,
            }),
            (0, r.jsx)(i.Button, {
                fullWidth: !0,
                variant: t ? "secondary" : "active",
                onClick: () =>
                    (0, i.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("98363"), n.e("4543")]).then(n.bind(n, 780086));
                        return (t) =>
                            (0, r.jsx)(
                                e,
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
                                })({}, t),
                            );
                    }),
                text: t ? l.intl.string(l.t.IyjHD9) : l.intl.string(l.t["KU/aN4"]),
            }),
        ],
    });
};
