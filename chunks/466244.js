n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var l = n(158954),
    i = n(397927),
    a = n(915089),
    s = n(985018),
    o = n(535134);
let c = () =>
        n
            .e("44678")
            .then(n.t.bind(n, 144759, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    u = (e) => {
        var t, n;
        let u = (0, a.GV)();
        return (0, r.jsxs)(
            l.dWK,
            ((t = (function (e) {
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
            })({}, e)),
            (n = n =
                {
                    size: "sm",
                    children: [
                        (0, r.jsx)("div", {
                            className: o.Mp,
                            children: (0, r.jsx)(i.akl, {
                                importData: c,
                                className: o.WG,
                            }),
                        }),
                        (0, r.jsx)(l.cwr, {
                            children: (0, r.jsxs)("div", {
                                className: o.lq,
                                children: [
                                    (0, r.jsx)(i.Heading, {
                                        variant: "heading-lg/semibold",
                                        className: o.wx,
                                        id: u,
                                        children: s.intl.format(s.t.z9qozJ, {
                                            guildName: e.guildName,
                                        }),
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        children: s.intl.string(s.t.nwpqyc),
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(l.H7u, {
                            actions: [
                                {
                                    variant: "primary",
                                    onClick: () => {
                                        e.onAccept(), e.onClose();
                                    },
                                    text: s.intl.string(s.t.NuzmOA),
                                },
                            ],
                            actionsFullWidth: !0,
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        );
    };
