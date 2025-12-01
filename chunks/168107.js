n.d(t, { Z: () => v });
var r = n(54381);
n(473749);
var i = n(147829),
    a = n(481060),
    o = n(429142),
    s = n(681678),
    l = n(128064),
    c = n(312870),
    u = n(580222),
    d = n(240758),
    f = n(81643),
    p = n(469775),
    _ = n(484710);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
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
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e) {
    if (null != e) return (0, f.AY)(e) ? a.fCB.LIGHTBOX : void 0;
}
let v = {
    showAgeVerification: (e) => {
        var {
                onClose: t,
                entryPoint: l,
                shouldShowExpressiveModal: c = !1,
                verificationVendorName: f,
                verificationRequestId: m,
                webviewUrl: g,
            } = e,
            E = b(e, [
                "onClose",
                "entryPoint",
                "shouldShowExpressiveModal",
                "verificationVendorName",
                "verificationRequestId",
                "webviewUrl",
            ]);
        if (f === p.Rh.PERSONA) {
            if (!(0, d.e)("AgeVerificationActionCreators") || null == m) return;
            new i.Client({
                inquiryId: m,
                onComplete: () => {
                    E.onComplete(), null != t && t();
                },
                onError: (e) => {
                    s.Z.showFailedToast(_.wQ.TIGGER_PAWTECT_ERROR), null != t && t();
                },
                onCancel: () => {
                    null != t && t();
                },
            }).open();
            return;
        }
        if (null == g) return;
        let y = {
            modalKey: p.zJ,
            onCloseCallback: t,
            backdropStyle: O(l),
            Layer: o.ZP,
        };
        c || (0, u.v)(l)
            ? (0, a.ZDy)(async () => {
                  let { default: e } = await n.e("67749").then(n.bind(n, 91175));
                  return (t) => (0, r.jsx)(e, h({ webviewUrl: g }, E, t));
              }, y)
            : (0, a.ZDy)(async () => {
                  let { default: e } = await n.e("12014").then(n.bind(n, 879367));
                  return (t) => (0, r.jsx)(e, h({ webviewUrl: g }, E, t));
              }, y);
    },
    showAgeVerificationGetStartedModal: (e) => {
        let { onClose: t, entryPoint: i } = e;
        if ((0, f.kJ)() && ((0, l.c_)("age_verification_utils") || (0, c.U)("age_verification_utils")))
            return void (0, a.ZDy)(
                async () => {
                    let { default: e } = await n.e("22447").then(n.bind(n, 686768));
                    return (t) => (0, r.jsx)(e, E(h({}, t), { entryPoint: i }));
                },
                {
                    modalKey: p.ux,
                    backdropStyle: O(i),
                    Layer: o.ZP,
                    onCloseCallback: t,
                },
            );
        (0, a.ZDy)(
            async () => {
                let { default: e } = await n.e("80144").then(n.bind(n, 634997));
                return (t) => (0, r.jsx)(e, E(h({}, t), { entryPoint: i }));
            },
            {
                modalKey: p.ux,
                backdropStyle: O(i),
                Layer: o.ZP,
                onCloseCallback: t,
            },
        );
    },
    openUrl: (e) => {
        window.open(e, "_blank");
    },
};
