n.d(t, { default: () => m }), n(388685);
var r = n(54381),
    a = n(473749),
    i = n(120356),
    o = n.n(i),
    c = n(793030),
    s = n(481060),
    p = n(626135),
    l = n(585483),
    d = n(637538),
    u = n(747387),
    h = n(981631),
    f = n(388032),
    y = n(518840),
    b = n(140238);
let v = new Set([s.Dvm.ENTERING, s.Dvm.ENTERED]);
function m(e) {
    var {
            onClose: t,
            onCaptchaVerify: n,
            onReject: i,
            transitionState: m,
            headerText: O,
            bodyText: g,
            rqtoken: C,
            serveInvisible: E,
        } = e,
        w = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, [
            "onClose",
            "onCaptchaVerify",
            "onReject",
            "transitionState",
            "headerText",
            "bodyText",
            "rqtoken",
            "serveInvisible",
        ]);
    let R = (0, d.Z)({ onReject: i });
    if (
        (a.useEffect(() => {
            l.S.subscribe(h.CkL.LAYER_POP_ESCAPE_KEY, t);
        }, [t]),
        a.useEffect(() => {
            p.default.track(h.rMx.OPEN_MODAL, { type: "Captcha Modal" });
        }, []),
        null == m || !v.has(m))
    )
        return null;
    let j = (0, r.jsxs)("div", {
        className: o()(y.captchaContainer, y.manaDesktopModal),
        children: [
            E && (0, r.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE }),
            (0, r.jsx)(
                u.Z,
                (function (e) {
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
                        size: E ? "invisible" : void 0,
                        onVerify: (e) => {
                            R(), n(e, C), t();
                        },
                        onClose: E ? t : void 0,
                    },
                    w,
                ),
            ),
        ],
    });
    return (0, r.jsx)(c.ExpressiveModal, {
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
        children: j,
    });
}
