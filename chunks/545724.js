n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(748780),
    o = n(91192),
    c = n(481060),
    u = n(239091),
    d = n(687683),
    p = n(24665);
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
function m(e, t) {
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
let h = function (e) {
    let {
            index: t,
            children: l,
            user: h,
            channel: g,
            onClick: _,
            isFocused: b,
            isActive: E,
            onOtherHover: O,
            className: I,
        } = e,
        [y, v] = i.useState(!1),
        [C, S] = i.useState(!1),
        T = () => {
            v(!0), !b || E || C || null == O || O();
        },
        N = () => {
            v(!1);
        };
    return (0, r.jsx)(o.mh, {
        id: g.id,
        children: (e) =>
            (0, r.jsx)(c.tEY, {
                offset: {
                    left: -8,
                    right: -8,
                },
                children: (0, r.jsx)(
                    s.Z.div,
                    m(
                        f(
                            {
                                className: a()(p.messageRequestItem, I, {
                                    [p.active]: E || C,
                                    [p.firstItem]: 0 === t,
                                }),
                                onContextMenu: (e) => {
                                    null != h &&
                                        (S(!0),
                                        (0, u.jW)(
                                            e,
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("79695"),
                                                    n.e("69220"),
                                                ]).then(n.bind(n, 881351));
                                                return (t) => (0, r.jsx)(e, m(f({}, t), { user: h }));
                                            },
                                            {
                                                onClose: () => {
                                                    S(!1);
                                                },
                                            },
                                        ));
                                },
                                onMouseEnter: T,
                                onMouseLeave: N,
                                onClick: null != _ ? _ : void 0,
                                style: {
                                    LIST_ROW_HEIGHT: d.WN,
                                    opacity: 1,
                                },
                            },
                            e,
                        ),
                        { children: l(y || E || C) },
                    ),
                ),
            }),
    });
};
