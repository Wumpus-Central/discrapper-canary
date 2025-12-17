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
    f = n(51144),
    h = n(828377);
function m(e) {
    var t, n;
    let {
            user: r,
            row: m,
            hideDiscriminator: g,
            comparator: b,
            selected: C,
            checked: y,
            disabled: v = !1,
            inlineUsername: x = !0,
            onClick: O,
            onMouseEnter: E,
            "aria-setsize": j,
            "aria-posinset": S,
        } = e,
        _ = (0, o.e7)([p.Z], () => p.Z.getStatus(r.id)),
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
                className: l()(h.friendWrapper, { [h.disabled]: v }),
                onClick: () => {
                    null != O && O(r.id);
                },
                onMouseEnter: () => {
                    null != E && E(m);
                },
            },
            P,
        )),
        (n = n =
            {
                role: "option",
                "aria-selected": y,
                "aria-disabled": v,
                "aria-setsize": j,
                "aria-posinset": S,
                children: (0, i.jsxs)(d.Z, {
                    align: d.Z.Align.CENTER,
                    className: l()(h.friend, {
                        [h.friendSelected]: C,
                        [h.twoRows]: !x,
                    }),
                    children: [
                        (0, i.jsx)(u.Z, {
                            user: r,
                            status: _,
                            className: h.avatar,
                        }),
                        (0, i.jsxs)(d.Z, {
                            className: h.match,
                            align: d.Z.Align.BASELINE,
                            direction: x ? d.Z.Direction.HORIZONTAL : d.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    tag: "strong",
                                    className: h.nickname,
                                    "aria-hidden": !0,
                                    variant: "text-md/medium",
                                    children:
                                        null != b && b === r.tag
                                            ? f.ZP.getName(r)
                                            : null != b && "" !== b
                                              ? b
                                              : f.ZP.getName(r),
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: (0, i.jsx)(c.Z, {
                                        user: r,
                                        hideDiscriminator: g,
                                        className: h.discordTag,
                                        usernameClass: h.__invalid_weightMedium,
                                        discriminatorClass: h.__invalid_weightMedium,
                                        forceUsername: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.FZ5, {
                            checked: y,
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
