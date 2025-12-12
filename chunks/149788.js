n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(749210),
    s = n(322665),
    o = n(484474),
    c = n(374939),
    u = n(283293),
    d = n(469988),
    p = n(526383),
    f = n(294330),
    g = n(388032),
    h = n(663448),
    m = n(988050);
let _ = function (e) {
    let { onScroll: t } = e,
        n = (0, p.Z)(),
        _ = i.useMemo(
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
    return (0, r.jsxs)(u.Z, {
        onScroll: t,
        children: [
            (0, r.jsx)(o.Z, {
                title: g.intl.string(g.t.X5xPlb),
                description: g.intl.string(g.t["F/IQCI"]),
                children: (0, r.jsx)(s.Z, {}),
            }),
            (0, r.jsxs)(c.Z, {
                children: [
                    n.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(l.Heading, {
                                      className: h.sectionTitle,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: g.intl.string(g.t["2DfZIQ"]),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: h.content,
                                      children: [
                                          _.map((e) =>
                                              (0, r.jsx)(
                                                  f.VD,
                                                  {
                                                      guild: e,
                                                      onClick: () => a.Z.transitionToGuildSync(e.id),
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                          (0, r.jsx)(d.Z, { hasHub: !0 }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, r.jsx)("div", {
                              className: h.content,
                              children: (0, r.jsx)(d.Z, { hasHub: !1 }),
                          }),
                    (0, r.jsx)("div", { className: m.divider }),
                    (0, r.jsxs)("div", {
                        className: m.disclaimer,
                        children: [
                            (0, r.jsxs)(l.Text, {
                                className: m.text,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [g.intl.string(g.t.O1k9XX), " "],
                            }),
                            (0, r.jsx)(l.Text, {
                                className: m.text,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: g.intl.string(g.t.FV5dvh),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
