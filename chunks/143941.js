n.d(t, { s: () => E });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(727637),
    c = n(607550),
    u = n(388032),
    d = n(890088),
    f = n(583140);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = (e) => {
        let { message: t } = e;
        return (0, r.jsxs)("div", {
            className: f.toast,
            children: [
                (0, r.jsx)(s.kSu, {
                    size: "refresh_sm",
                    className: d.toastIcon,
                    color: s.TVs.colors.STATUS_POSITIVE,
                }),
                (0, r.jsx)(s.Text, {
                    color: "text-default",
                    variant: "text-sm/semibold",
                    children: t,
                }),
            ],
        });
    },
    E = (e) => {
        let { skuId: t, className: n } = e,
            a = (0, c.ny)(t),
            f = i.useRef(null),
            _ = a ? u.intl.string(u.t.yr9TTU) : u.intl.string(u.t["8DkMER"]),
            h = (0, l.Z)(f),
            E = a ? s.h_8 : s.Pzh,
            b = a || h ? d.wishlistedOrHoveredIconColor : d.normalIconColor,
            y = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        a
                            ? ((0, c.yj)(t),
                              (0, s.showToast)(
                                  (0, s.createToast)("", s.ToastType.CUSTOM, {
                                      component: (0, r.jsx)(g, { message: u.intl.string(u.t.DSXOiI) }),
                                  }),
                              ))
                            : ((0, c.iI)(t),
                              (0, s.showToast)(
                                  (0, s.createToast)("", s.ToastType.CUSTOM, {
                                      component: (0, r.jsx)(g, { message: u.intl.string(u.t["3T2jbW"]) }),
                                  }),
                              ));
                },
                [a, t],
            );
        return (0, r.jsx)(s.ua7, {
            text: _,
            children: (e) =>
                (0, r.jsx)(
                    s.P3F,
                    m(p({}, e), {
                        className: o()(n, d.wishlistButton),
                        innerRef: f,
                        onClick: y,
                        "aria-label": _,
                        children: (0, r.jsx)(E, {
                            colorClass: b,
                            size: "custom",
                            height: 20,
                            width: 20,
                        }),
                    }),
                ),
        });
    };
