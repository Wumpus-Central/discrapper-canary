r.d(t, { default: () => p });
var n = r(54381),
    a = r(473749),
    i = r(793030),
    c = r(481060),
    o = r(933557),
    s = r(925329),
    l = r(296023),
    d = r(388032),
    b = r(167550);
let p = (e) => {
    let { channel: t, application: p, onClose: u, transitionState: m } = e,
        j = (0, l.w)(t),
        x = a.useCallback(
            () => (
                u(),
                (0, c.ZDy)(async () => {
                    let { default: e } = await r.e("31907").then(r.bind(r, 366854));
                    return (r) => {
                        var a, i;
                        return (0, n.jsx)(
                            e,
                            ((a = (function (e) {
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
                            })({}, r)),
                            (i = i =
                                {
                                    channelId: t.id,
                                    application: p,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            a),
                        );
                    };
                })
            ),
            [p, t.id, u],
        ),
        O = (0, o.ZP)(t, !0);
    return (0, n.jsx)(i.Modal, {
        transitionState: m,
        "aria-label": d.intl.string(d.t.OJknhi),
        onClose: u,
        title: d.intl.string(d.t.OJknhi),
        actions: [
            {
                text: d.intl.string(d.t["ETE/oC"]),
                onClick: u,
                variant: "secondary",
            },
            {
                text: d.intl.string(d.t.LLWaxQ),
                onClick: x,
                variant: "critical-primary",
            },
        ],
        children: (0, n.jsxs)("div", {
            className: b.content,
            children: [
                (0, n.jsx)(s.Z, {
                    game: p,
                    size: s.A.XLARGE,
                }),
                (0, n.jsxs)("div", {
                    className: b.metadata,
                    children: [
                        (0, n.jsxs)("div", {
                            className: b.metadataHeader,
                            children: [
                                (0, n.jsx)(c.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: p.name,
                                }),
                                (0, n.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: d.intl.format(d.t["0NJZAU"], { channelName: O }),
                                }),
                            ],
                        }),
                        null != j &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", { className: b.divider }),
                                    (0, n.jsx)(c.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: j,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
    });
};
