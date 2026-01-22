n.d(t, {
    A: () => m,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(686956),
    s = n(292455),
    o = n(701508),
    c = n(979590),
    u = n(783531),
    d = n(506999),
    p = n(212165),
    f = n(599907),
    h = n(985018),
    A = n(27740),
    g = n(541318);
let m = function (e) {
    let { onScroll: t } = e,
        n = (0, p.A)(),
        m = i.useMemo(
            () =>
                n.map((e) => {
                    var t, n;
                    return (
                        (t = (function (e) {
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
                                presenceCount: void 0,
                                memberCount: void 0,
                                premiumSubscriptionCount: void 0,
                                emojis: void 0,
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
                        t
                    );
                }),
            [n],
        );
    return (0, r.jsxs)(u.A, {
        onScroll: t,
        children: [
            (0, r.jsx)(o.A, {
                title: h.intl.string(h.t.X5xPlb),
                description: h.intl.string(h.t["F/IQCI"]),
                children: (0, r.jsx)(s.A, {}),
            }),
            (0, r.jsxs)(c.A, {
                children: [
                    n.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(l.Heading, {
                                      className: A.G,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: h.intl.string(h.t["2DfZIQ"]),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: A.Q,
                                      children: [
                                          m.map((e) =>
                                              (0, r.jsx)(
                                                  f.nO,
                                                  {
                                                      guild: e,
                                                      onClick: () => a.A.transitionToGuildSync(e.id),
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                          (0, r.jsx)(d.A, {
                                              hasHub: !0,
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, r.jsx)("div", {
                              className: A.Q,
                              children: (0, r.jsx)(d.A, {
                                  hasHub: !1,
                              }),
                          }),
                    (0, r.jsx)("div", {
                        className: g.yF,
                    }),
                    (0, r.jsxs)("div", {
                        className: g.ed,
                        children: [
                            (0, r.jsxs)(l.Text, {
                                className: g.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [h.intl.string(h.t.O1k9XX), " "],
                            }),
                            (0, r.jsx)(l.Text, {
                                className: g.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: h.intl.string(h.t.FV5dvh),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
