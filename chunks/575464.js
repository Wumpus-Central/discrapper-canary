n.d(t, { Z: () => g }), n(35282);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
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
            user: i,
            row: g,
            hideDiscriminator: b,
            comparator: y,
            selected: _,
            checked: C,
            disabled: v = !1,
            inlineUsername: x = !0,
            onClick: O,
            onMouseEnter: j,
            "aria-setsize": E,
            "aria-posinset": S,
        } = e,
        I = (0, o.e7)([h.Z], () => h.Z.getStatus(i.id)),
        P = (0, a.JA)(String(i.id));
    return (0, r.jsx)(
        c.P3F,
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
                className: l()(m.friendWrapper, { [m.disabled]: v }),
                onClick: () => {
                    null != O && O(i.id);
                },
                onMouseEnter: () => {
                    null != j && j(g);
                },
            },
            P,
        )),
        (n = n =
            {
                role: "option",
                "aria-selected": C,
                "aria-disabled": v,
                "aria-setsize": E,
                "aria-posinset": S,
                children: (0, r.jsxs)(p.Z, {
                    align: p.Z.Align.CENTER,
                    className: l()(m.friend, {
                        [m.friendSelected]: _,
                        [m.twoRows]: !x,
                    }),
                    children: [
                        (0, r.jsx)(d.Z, {
                            user: i,
                            status: I,
                            className: m.avatar,
                        }),
                        (0, r.jsxs)(p.Z, {
                            className: m.match,
                            align: p.Z.Align.BASELINE,
                            direction: x ? p.Z.Direction.HORIZONTAL : p.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    tag: "strong",
                                    className: m.nickname,
                                    "aria-hidden": !0,
                                    variant: "text-md/medium",
                                    children:
                                        null != y && y === i.tag
                                            ? f.ZP.getName(i)
                                            : null != y && "" !== y
                                              ? y
                                              : f.ZP.getName(i),
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: (0, r.jsx)(u.Z, {
                                        user: i,
                                        hideDiscriminator: b,
                                        className: m.discordTag,
                                        usernameClass: m.__invalid_weightMedium,
                                        discriminatorClass: m.__invalid_weightMedium,
                                        forceUsername: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.$q, {
                            displayOnly: !0,
                            size: 22,
                            value: C,
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
