n.d(t, {
    A: () => b,
}),
    n(747238);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(837381),
    s = n(311907),
    o = n(397927),
    c = n(297413),
    u = n(966327),
    d = n(235986),
    f = n(290863),
    p = n(427262),
    h = n(318880);

function b(e) {
    var t, n;
    let {
            user: l,
            row: b,
            hideDiscriminator: g,
            comparator: m,
            selected: A,
            checked: y,
            disabled: O = !1,
            onClick: j,
            onMouseEnter: v,
            "aria-setsize": x,
            "aria-posinset": E,
        } = e,
        _ = (0, s.bG)([f.A], () => f.A.getStatus(l.id)),
        C = (0, a.rm)(String(l.id));
    return (0, r.jsx)(
        o.DUT,
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
        })(
            {
                id: "user-row-".concat(b),
                className: i()(h.Se, {
                    [h.r9]: O,
                }),
                onClick: () => {
                    null != j && j(l.id);
                },
                onMouseEnter: () => {
                    null != v && v(b);
                },
            },
            C,
        )),
        (n = n =
            {
                role: "option",
                "aria-selected": y,
                "aria-disabled": O,
                "aria-setsize": x,
                "aria-posinset": E,
                children: (0, r.jsxs)(d.A, {
                    align: d.A.Align.CENTER,
                    className: i()(h.Bc, {
                        [h.oz]: A,
                    }),
                    children: [
                        (0, r.jsx)(u.A, {
                            user: l,
                            status: _,
                            className: h.my,
                        }),
                        (0, r.jsxs)(d.A, {
                            className: h.YW,
                            align: d.A.Align.BASELINE,
                            direction: d.A.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    tag: "strong",
                                    className: h.$R,
                                    "aria-hidden": !0,
                                    variant: "text-md/medium",
                                    children:
                                        null != m && m === l.tag
                                            ? p.Ay.getName(l)
                                            : null != m && "" !== m
                                              ? m
                                              : p.Ay.getName(l),
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: (0, r.jsx)(c.A, {
                                        user: l,
                                        hideDiscriminator: g,
                                        className: h.xK,
                                        usernameClass: h.__invalid_weightMedium,
                                        discriminatorClass: h.__invalid_weightMedium,
                                        forceUsername: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.P7L, {
                            checked: y,
                            disabled: O,
                        }),
                    ],
                }),
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
}
