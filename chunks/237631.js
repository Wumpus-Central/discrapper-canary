let r, l;
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var a = n(397927),
    s = n(73153),
    o = n(255940),
    c = n(652215);
let u = null;
function d(e) {
    null != r && e ? r() : null != l && l(), (r = null), (l = null);
}
let f = {
    init() {
        s.h.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", (e) => {
            let t;
            d(!1),
                (u = e.context),
                (r = e.resolve),
                (l = e.reject),
                c.QCW === e.context &&
                    ((t = !1),
                    (0, a.mMO)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("12206"), n.e("24806"), n.e("48403")]).then(
                                n.bind(n, 183742),
                            );
                            return (n) => {
                                var r, l;
                                let { onClose: a } = n,
                                    s = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            l,
                                            i = {};
                                        if ("u" > typeof Reflect && Reflect.ownKeys) {
                                            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                                                (r = n[l]),
                                                    !(t.indexOf(r) >= 0) &&
                                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                        (i[r] = e[r]);
                                            return i;
                                        }
                                        if (
                                            ((i = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    l = {},
                                                    i = Object.getOwnPropertyNames(e);
                                                for (r = 0; r < i.length; r++)
                                                    (n = i[r]),
                                                        !(t.indexOf(n) >= 0) &&
                                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                            (l[n] = e[n]);
                                                return l;
                                            })(e, t)),
                                            Object.getOwnPropertySymbols)
                                        )
                                            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                                                (r = n[l]),
                                                    !(t.indexOf(r) >= 0) &&
                                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                        (i[r] = e[r]);
                                        return i;
                                    })(n, ["onClose"]);
                                return (0, i.jsx)(
                                    e,
                                    ((r = (function (e) {
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
                                    (l = l =
                                        {
                                            onClose: (e) => {
                                                (t = e), a();
                                            },
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(l)).forEach(function (e) {
                                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                          }),
                                    r),
                                );
                            };
                        },
                        {
                            onCloseCallback: () => {
                                (0, o.O)(t);
                            },
                        },
                    ));
        }),
            s.h.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", (e) => {
                let { shouldContinue: t } = e;
                (u = null), d(t);
            }),
            s.h.subscribe("OVERLAY_SET_INPUT_LOCKED", (e) => {
                let { locked: t } = e;
                t && null != u && ((u = null), d(!1));
            });
    },
};
