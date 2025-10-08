n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(748780),
    s = n(91192),
    c = n(481060),
    u = n(239091),
    d = n(687683),
    p = n(978070);
function f(e) {
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
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = function (e) {
    let {
            index: t,
            children: l,
            user: g,
            channel: m,
            onClick: b,
            isFocused: _,
            isActive: O,
            onOtherHover: E,
            className: y,
        } = e,
        [v, I] = i.useState(!1),
        [S, C] = i.useState(!1),
        T = () => {
            I(!0), !_ || O || S || null == E || E();
        },
        N = () => {
            I(!1);
        };
    return (0, r.jsx)(s.mh, {
        id: m.id,
        children: (e) =>
            (0, r.jsx)(c.tEY, {
                offset: {
                    left: -8,
                    right: -8,
                },
                children: (0, r.jsx)(
                    o.Z.div,
                    h(
                        f(
                            {
                                className: a()(p.messageRequestItem, y, {
                                    [p.active]: O || S,
                                    [p.firstItem]: 0 === t,
                                }),
                                onContextMenu: (e) => {
                                    null != g &&
                                        (C(!0),
                                        (0, u.jW)(
                                            e,
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("79695"),
                                                    n.e("69220"),
                                                ]).then(n.bind(n, 881351));
                                                return (t) => (0, r.jsx)(e, h(f({}, t), { user: g }));
                                            },
                                            {
                                                onClose: () => {
                                                    C(!1);
                                                },
                                            },
                                        ));
                                },
                                onMouseEnter: T,
                                onMouseLeave: N,
                                onClick: null != b ? b : void 0,
                                style: {
                                    LIST_ROW_HEIGHT: d.WN,
                                    opacity: 1,
                                },
                            },
                            e,
                        ),
                        { children: l(v || O || S) },
                    ),
                ),
            }),
    });
};
