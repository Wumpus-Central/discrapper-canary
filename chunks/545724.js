n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(748780),
    s = n(91192),
    c = n(481060),
    u = n(239091),
    d = n(687683),
    p = n(718726);
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
function g(e, t) {
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
            channel: m,
            onClick: b,
            isFocused: _,
            isActive: E,
            onOtherHover: O,
            className: v,
        } = e,
        [y, I] = i.useState(!1),
        [C, S] = i.useState(!1),
        T = () => {
            I(!0), !_ || E || C || null == O || O();
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
                    g(
                        f(
                            {
                                className: a()(p.messageRequestItem, v, {
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
                                                    n.e("18030"),
                                                ]).then(n.bind(n, 881351));
                                                return (t) => (0, r.jsx)(e, g(f({}, t), { user: h }));
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
                                onClick: null != b ? b : void 0,
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
