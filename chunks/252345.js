r.d(t, {
    default: () => m,
}),
    r(896048);
var n = r(627968),
    a = r(64700),
    i = r(503698),
    o = r.n(i),
    c = r(158954),
    s = r(397927),
    p = r(954571),
    l = r(203982),
    d = r(231003),
    u = r(929488),
    h = r(652215),
    f = r(985018),
    y = r(996629),
    b = r(894101);
let v = new Set([s.ip4.ENTERING, s.ip4.ENTERED]);

function m(e) {
    let {
            onClose: t,
            onCaptchaVerify: r,
            onReject: i,
            transitionState: m,
            headerText: O,
            bodyText: g,
            rqtoken: C,
            serveInvisible: E,
        } = e,
        w = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++)
                    (n = r[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    return a;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                    (n = r[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, [
            "onClose",
            "onCaptchaVerify",
            "onReject",
            "transitionState",
            "headerText",
            "bodyText",
            "rqtoken",
            "serveInvisible",
        ]),
        A = (0, d.A)({
            onReject: i,
        });
    if (
        (a.useEffect(() => {
            l._.subscribe(h.jej.LAYER_POP_ESCAPE_KEY, t);
        }, [t]),
        a.useEffect(() => {
            p.default.track(h.HAw.OPEN_MODAL, {
                type: "Captcha Modal",
            });
        }, []),
        null == m || !v.has(m))
    )
        return null;
    let R = (0, n.jsxs)("div", {
        className: o()(y.GC, y.P),
        children: [
            E &&
                (0, n.jsx)(s.y$y, {
                    type: s.y$y.Type.SPINNING_CIRCLE,
                }),
            (0, n.jsx)(
                u.A,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })(
                    {
                        size: E ? "invisible" : void 0,
                        onVerify: (e) => {
                            A(), r(e, C), t();
                        },
                        onClose: E ? t : void 0,
                    },
                    w,
                ),
            ),
        ],
    });
    return (0, n.jsx)(c.ExpressiveModal, {
        transitionState: m,
        onClose: t,
        size: "sm",
        gradientColor: "blue",
        graphic: {
            type: "image",
            src: b,
        },
        title: null != O ? O : f.intl.string(f.t.FpoiHe),
        subtitle: null != g ? g : f.intl.string(f.t["/CidxO"]),
        children: R,
    });
}
