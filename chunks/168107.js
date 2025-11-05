n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(429142),
    o = n(128064),
    s = n(312870),
    l = n(580222),
    c = n(81643),
    u = n(469775);
function d(e, t, n) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    if (null != e) return (0, c.AY)(e) ? i.fCB.LIGHTBOX : void 0;
}
let E = {
    showAgeVerification: (e) => {
        var { onClose: t, entryPoint: o, shouldShowExpressiveModal: s = !1 } = e,
            c = h(e, ["onClose", "entryPoint", "shouldShowExpressiveModal"]);
        let d = {
            modalKey: u.zJ,
            onCloseCallback: t,
            backdropStyle: g(o),
            Layer: a.ZP,
        };
        s || (0, l.v)(o)
            ? (0, i.ZDy)(async () => {
                  let { default: e } = await n.e("67749").then(n.bind(n, 91175));
                  return (t) => (0, r.jsx)(e, f({}, c, t));
              }, d)
            : (0, i.ZDy)(async () => {
                  let { default: e } = await n.e("12014").then(n.bind(n, 879367));
                  return (t) => (0, r.jsx)(e, f({}, c, t));
              }, d);
    },
    showAgeVerificationGetStartedModal: (e) => {
        let { onClose: t, entryPoint: l } = e;
        if ((0, c.kJ)() && ((0, o.c_)("age_verification_utils") || (0, s.U)("age_verification_utils")))
            return void (0, i.ZDy)(
                async () => {
                    let { default: e } = await n.e("22447").then(n.bind(n, 686768));
                    return (t) => (0, r.jsx)(e, p(f({}, t), { entryPoint: l }));
                },
                {
                    modalKey: u.ux,
                    backdropStyle: g(l),
                    Layer: a.ZP,
                    onCloseCallback: t,
                },
            );
        (0, i.ZDy)(
            async () => {
                let { default: e } = await n.e("80144").then(n.bind(n, 634997));
                return (t) => (0, r.jsx)(e, p(f({}, t), { entryPoint: l }));
            },
            {
                modalKey: u.ux,
                backdropStyle: g(l),
                Layer: a.ZP,
                onCloseCallback: t,
            },
        );
    },
    openUrl: (e) => {
        window.open(e, "_blank");
    },
};
