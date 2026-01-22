r.d(e, {
    default: () => u,
});
var n = r(627968),
    i = r(64700),
    a = r(158954),
    c = r(397927),
    s = r(47167),
    l = r(769015),
    o = r(514810),
    d = r(985018),
    p = r(869527);
let u = (t) => {
    let { channel: e, application: u, onClose: b, transitionState: y } = t,
        j = (0, o.N)(e),
        x = i.useCallback(
            () => (
                b(),
                (0, c.mMO)(async () => {
                    let { default: t } = await r.e("93154").then(r.bind(r, 428185));
                    return (r) => {
                        var i, a;
                        return (0, n.jsx)(
                            t,
                            ((i = (function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = null != arguments[e] ? arguments[e] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(r, t).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (e) {
                                            var n;
                                            (n = r[e]),
                                                e in t
                                                    ? Object.defineProperty(t, e, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (t[e] = n);
                                        });
                                }
                                return t;
                            })({}, r)),
                            (a = a =
                                {
                                    channelId: e.id,
                                    application: u,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                : (function (t, e) {
                                      var r = Object.keys(t);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(t);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(a)).forEach(function (t) {
                                      Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(a, t));
                                  }),
                            i),
                        );
                    };
                })
            ),
            [u, e.id, b],
        ),
        O = (0, s.Ay)(e, !0);
    return (0, n.jsx)(a.Modal, {
        transitionState: y,
        "aria-label": d.intl.string(d.t.OJknhi),
        onClose: b,
        title: d.intl.string(d.t.OJknhi),
        actions: [
            {
                text: d.intl.string(d.t["ETE/oC"]),
                onClick: b,
                variant: "secondary",
            },
            {
                text: d.intl.string(d.t.LLWaxQ),
                onClick: x,
                variant: "critical-primary",
            },
        ],
        children: (0, n.jsxs)("div", {
            className: p.Qs,
            children: [
                (0, n.jsx)(l.A, {
                    game: u,
                    size: l.M.XLARGE,
                }),
                (0, n.jsxs)("div", {
                    className: p.yu,
                    children: [
                        (0, n.jsxs)("div", {
                            className: p.py,
                            children: [
                                (0, n.jsx)(c.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: u.name,
                                }),
                                (0, n.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: d.intl.format(d.t["0NJZAU"], {
                                        channelName: O,
                                    }),
                                }),
                            ],
                        }),
                        null != j &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", {
                                        className: p.yF,
                                    }),
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
