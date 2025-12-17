n.d(t, { Z: () => m });
var i = n(54381),
    r = n(473749),
    l = n(481060),
    a = n(239091),
    o = n(911969),
    s = n(399860),
    c = n(388032),
    d = n(664775);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function m(e) {
    let { applicationIcon: t, applicationName: m, canNavigate: b, command: p, guildId: g } = e,
        f = r.useMemo(() => {
            var e;
            return 0 !== Object.keys(null != (e = p.permissions) ? e : {}).length;
        }, [p.permissions]),
        h = r.useCallback(() => {
            null != p &&
                b() &&
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("78786").then(n.bind(n, 50474));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            u(
                                {
                                    applicationIcon: t,
                                    applicationId: p.applicationId,
                                    applicationName: m,
                                    command: p,
                                    guildId: g,
                                },
                                n,
                            ),
                        );
                });
        }, [t, m, b, p, g]),
        x = r.useCallback(
            (e) => {
                (0, a.jW)(e, async () => {
                    let { default: e } = await n.e("5396").then(n.bind(n, 731646));
                    return (t) => {
                        var n, r;
                        return (0, i.jsx)(
                            e,
                            ((n = u({}, t)),
                            (r = r =
                                {
                                    id: p.id,
                                    label: c.intl.string(c.t.oJ1Muw),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n),
                        );
                    };
                });
            },
            [p],
        ),
        j = p.type === o.yU.CHAT ? l.SsZ : l.hH0,
        v = (0, s.gw)(p.type, p.displayName);
    return (0, i.jsxs)(l.P3F, {
        onClick: h,
        className: d.item,
        onContextMenu: x,
        children: [
            (0, i.jsxs)("div", {
                className: d.identifier,
                children: [
                    (0, i.jsx)(j, {
                        className: d.icon,
                        size: "md",
                        color: "currentColor",
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: v,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: d.statusContainer,
                children: f
                    ? (0, i.jsxs)("div", {
                          className: d.statusLine,
                          children: [
                              (0, i.jsx)(l.Text, {
                                  variant: "text-md/normal",
                                  children: c.intl.string(c.t.jH4B9O),
                              }),
                              (0, i.jsx)(l.d3s, {
                                  size: "sm",
                                  color: "currentColor",
                                  className: d.statusIcon,
                              }),
                          ],
                      })
                    : null,
            }),
        ],
    });
}
