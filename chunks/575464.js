n.d(t, { Z: () => b }), n(35282);
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(91192),
    s = n(442837),
    l = n(481060),
    c = n(129861),
    u = n(700582),
    d = n(600164),
    f = n(158776),
    _ = n(51144),
    p = n(469407);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let {
            user: t,
            row: n,
            hideDiscriminator: i,
            comparator: h,
            selected: g,
            checked: b,
            disabled: y = !1,
            inlineUsername: O = !0,
            onClick: v,
            onMouseEnter: I,
            "aria-setsize": T,
            "aria-posinset": S,
        } = e,
        A = (0, s.e7)([f.Z], () => f.Z.getStatus(t.id)),
        N = () => (null != h && h === t.tag ? _.ZP.getName(t) : null != h && "" !== h ? h : _.ZP.getName(t)),
        C = () => {
            null != I && I(n);
        },
        R = () => {
            null != v && v(t.id);
        },
        P = (0, a.JA)(String(t.id));
    return (0, r.jsx)(
        l.P3F,
        E(
            m(
                {
                    id: "user-row-".concat(n),
                    className: o()(p.friendWrapper, { [p.disabled]: y }),
                    onClick: R,
                    onMouseEnter: C,
                },
                P,
            ),
            {
                role: "option",
                "aria-selected": b,
                "aria-disabled": y,
                "aria-setsize": T,
                "aria-posinset": S,
                children: (0, r.jsxs)(d.Z, {
                    align: d.Z.Align.CENTER,
                    className: o()(p.friend, {
                        [p.friendSelected]: g,
                        [p.twoRows]: !O,
                    }),
                    children: [
                        (0, r.jsx)(u.Z, {
                            user: t,
                            status: A,
                            className: p.avatar,
                        }),
                        (0, r.jsxs)(d.Z, {
                            className: p.match,
                            align: d.Z.Align.BASELINE,
                            direction: O ? d.Z.Direction.HORIZONTAL : d.Z.Direction.VERTICAL,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    tag: "strong",
                                    className: p.nickname,
                                    "aria-hidden": !0,
                                    variant: "text-md/medium",
                                    children: N(),
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: (0, r.jsx)(c.Z, {
                                        user: t,
                                        hideDiscriminator: i,
                                        className: p.discordTag,
                                        usernameClass: p.__invalid_weightMedium,
                                        discriminatorClass: p.__invalid_weightMedium,
                                        forceUsername: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(l.XZJ, {
                            displayOnly: !0,
                            size: 22,
                            value: b,
                            disabled: y,
                            className: p.checkbox,
                        }),
                    ],
                }),
            },
        ),
    );
}
