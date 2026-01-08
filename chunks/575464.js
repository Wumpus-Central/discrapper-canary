n.d(t, { Z: () => g }), n(35282);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(91192),
    o = n(442837),
    s = n(481060),
    c = n(129861),
    u = n(700582),
    d = n(600164),
    p = n(158776),
    f = n(51144),
    h = n(828377);
function g(e) {
    var t, n;
    let {
            user: i,
            row: g,
            hideDiscriminator: m,
            comparator: b,
            selected: y,
            checked: v,
            disabled: O = !1,
            onClick: j,
            onMouseEnter: x,
            "aria-setsize": C,
            "aria-posinset": E,
        } = e,
        S = (0, o.e7)([p.Z], () => p.Z.getStatus(i.id)),
        _ = (0, a.JA)(String(i.id));
    return (0, r.jsx)(
        s.P3F,
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
                id: "user-row-".concat(g),
                className: l()(h.friendWrapper, { [h.disabled]: O }),
                onClick: () => {
                    null != j && j(i.id);
                },
                onMouseEnter: () => {
                    null != x && x(g);
                },
            },
            _,
        )),
        (n = n =
            {
                role: "option",
                "aria-selected": v,
                "aria-disabled": O,
                "aria-setsize": C,
                "aria-posinset": E,
                children: (0, r.jsxs)(d.Z, {
                    align: d.Z.Align.CENTER,
                    className: l()(h.friend, { [h.friendSelected]: y }),
                    children: [
                        (0, r.jsx)(u.Z, {
                            user: i,
                            status: S,
                            className: h.avatar,
                        }),
                        (0, r.jsxs)(d.Z, {
                            className: h.match,
                            align: d.Z.Align.BASELINE,
                            direction: d.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    tag: "strong",
                                    className: h.nickname,
                                    "aria-hidden": !0,
                                    variant: "text-md/medium",
                                    children:
                                        null != b && b === i.tag
                                            ? f.ZP.getName(i)
                                            : null != b && "" !== b
                                              ? b
                                              : f.ZP.getName(i),
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: (0, r.jsx)(c.Z, {
                                        user: i,
                                        hideDiscriminator: m,
                                        className: h.discordTag,
                                        usernameClass: h.__invalid_weightMedium,
                                        discriminatorClass: h.__invalid_weightMedium,
                                        forceUsername: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.FZ5, {
                            checked: v,
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
