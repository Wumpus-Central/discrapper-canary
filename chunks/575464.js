n.d(t, { Z: () => g }), n(35282);
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    a = n(91192),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(129861),
    d = n(700582),
    p = n(600164),
    h = n(158776),
    f = n(51144),
    m = n(469407);
function g(e) {
    var t, n;
    let {
            user: r,
            row: g,
            hideDiscriminator: b,
            comparator: C,
            selected: y,
            checked: _,
            disabled: v = !1,
            inlineUsername: x = !0,
            onClick: O,
            onMouseEnter: j,
            "aria-setsize": E,
            "aria-posinset": S,
        } = e,
        P = (0, o.e7)([h.Z], () => h.Z.getStatus(r.id)),
        I = (0, a.JA)(String(r.id));
    return (0, i.jsx)(
        c.P3F,
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
                id: "user-row-".concat(g),
                className: l()(m.friendWrapper, { [m.disabled]: v }),
                onClick: () => {
                    null != O && O(r.id);
                },
                onMouseEnter: () => {
                    null != j && j(g);
                },
            },
            I,
        )),
        (n = n =
            {
                role: "option",
                "aria-selected": _,
                "aria-disabled": v,
                "aria-setsize": E,
                "aria-posinset": S,
                children: (0, i.jsxs)(p.Z, {
                    align: p.Z.Align.CENTER,
                    className: l()(m.friend, {
                        [m.friendSelected]: y,
                        [m.twoRows]: !x,
                    }),
                    children: [
                        (0, i.jsx)(d.Z, {
                            user: r,
                            status: P,
                            className: m.avatar,
                        }),
                        (0, i.jsxs)(p.Z, {
                            className: m.match,
                            align: p.Z.Align.BASELINE,
                            direction: x ? p.Z.Direction.HORIZONTAL : p.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    tag: "strong",
                                    className: m.nickname,
                                    "aria-hidden": !0,
                                    variant: "text-md/medium",
                                    children:
                                        null != C && C === r.tag
                                            ? f.ZP.getName(r)
                                            : null != C && "" !== C
                                              ? C
                                              : f.ZP.getName(r),
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: (0, i.jsx)(u.Z, {
                                        user: r,
                                        hideDiscriminator: b,
                                        className: m.discordTag,
                                        usernameClass: m.__invalid_weightMedium,
                                        discriminatorClass: m.__invalid_weightMedium,
                                        forceUsername: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(s.$q, {
                            displayOnly: !0,
                            size: 22,
                            value: _,
                            disabled: v,
                            className: m.checkbox,
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
