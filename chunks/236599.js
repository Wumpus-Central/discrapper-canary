n.d(t, {
    A: () => p,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(773669),
    u = n(183555),
    d = n(985018),
    f = n(940319);

function p(e) {
    let { className: t } = e,
        i = ["en-US", "en-GB"].includes((0, s.bG)([c.default], () => c.default.locale))
            ? d.intl.string(d.t.OYlggR)
            : d.intl.string(d.t.Y55Tua),
        { trackUserProfileEditAction: p } = (0, u.NJ)(),
        b = l.useCallback(() => {
            p({
                action: "PRESS_ADD_WIDGET",
            }),
                (0, o.mMO)(
                    async () => {
                        let { default: e } = await n.e("87591").then(n.bind(n, 333114));
                        return (t) => {
                            var n, l;
                            return (0, r.jsx)(
                                e,
                                ((n = (function (e) {
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
                                })({}, t)),
                                (l = l =
                                    {
                                        trackUserProfileEditAction: p,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                n),
                            );
                        };
                    },
                    {
                        stackingBehavior: "stack",
                    },
                );
        }, [p]);
    return (0, r.jsxs)("div", {
        className: a()(f.w, t),
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: i,
            }),
            (0, r.jsx)(o.Button, {
                icon: o.j96,
                text: d.intl.string(d.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: b,
            }),
        ],
    });
}
