n.d(t, { A: () => h });
var r = n(627968),
    l = n(64700),
    i = n(417597),
    a = n(397927),
    s = n(318937),
    o = n(533117),
    c = n(134753),
    u = n(709562),
    d = n(60504),
    f = n(985018);
function p() {
    return (p =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function h() {
    let e = (0, i.bG)([o.A], () => o.A.getDrawMode()),
        t = (null == e ? void 0 : e.type) === c.Z.LINE,
        n = l.useRef(null),
        h = () => {
            t ? (0, s.Ol)(null) : (0, s.Ol)({ type: c.Z.LINE });
        };
    return (0, r.jsx)(d.A, {
        renderPopout: () => null,
        popoutTargetRef: n,
        children: (e) => {
            var l, i;
            let {} = e,
                s = p({}, e);
            return (0, r.jsx)(
                u.A,
                ((l = (function (e) {
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
                })({}, s)),
                (i = i =
                    {
                        buttonRef: n,
                        label: f.intl.string(f.t.ZQCf9V),
                        isActive: t,
                        iconComponent: a.R2l,
                        onClick: h,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                l),
            );
        },
    });
}
