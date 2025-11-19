n.d(t, { Z: () => m }), n(35282);
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(91192),
    o = n(442837),
    s = n(481060),
    c = n(129861),
    u = n(700582),
    d = n(600164),
    p = n(158776),
    h = n(51144),
    f = n(469407);
function m(e) {
    var t, n;
    let {
            user: r,
            row: m,
            hideDiscriminator: g,
            comparator: b,
            selected: y,
            checked: C,
            disabled: v = !1,
            inlineUsername: _ = !0,
            onClick: x,
            onMouseEnter: j,
            "aria-setsize": O,
            "aria-posinset": E,
        } = e,
        S = (0, o.e7)([p.Z], () => p.Z.getStatus(r.id)),
        P = (0, a.JA)(String(r.id));
    return (0, i.jsx)(
        s.P3F,
        ((t = (function (e) {
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
        })(
            {
                id: "user-row-".concat(m),
                className: l()(f.friendWrapper, { [f.disabled]: v }),
                onClick: () => {
                    null != x && x(r.id);
                },
                onMouseEnter: () => {
                    null != j && j(m);
                },
            },
            P,
        )),
        (n = n =
            {
                role: "option",
                "aria-selected": C,
                "aria-disabled": v,
                "aria-setsize": O,
                "aria-posinset": E,
                children: (0, i.jsxs)(d.Z, {
                    align: d.Z.Align.CENTER,
                    className: l()(f.friend, {
                        [f.friendSelected]: y,
                        [f.twoRows]: !_,
                    }),
                    children: [
                        (0, i.jsx)(u.Z, {
                            user: r,
                            status: S,
                            className: f.avatar,
                        }),
                        (0, i.jsxs)(d.Z, {
                            className: f.match,
                            align: d.Z.Align.BASELINE,
                            direction: _ ? d.Z.Direction.HORIZONTAL : d.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    tag: "strong",
                                    className: f.nickname,
                                    "aria-hidden": !0,
                                    variant: "text-md/medium",
                                    children:
                                        null != b && b === r.tag
                                            ? h.ZP.getName(r)
                                            : null != b && "" !== b
                                              ? b
                                              : h.ZP.getName(r),
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: (0, i.jsx)(c.Z, {
                                        user: r,
                                        hideDiscriminator: g,
                                        className: f.discordTag,
                                        usernameClass: f.__invalid_weightMedium,
                                        discriminatorClass: f.__invalid_weightMedium,
                                        forceUsername: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.FZ5, {
                            checked: C,
                            disabled: v,
                        }),
                    ],
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
