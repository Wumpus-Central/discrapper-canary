"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(892491),
    s = n(192308),
    a = n(80556),
    o = n(207560),
    l = n(945810);
let u = (0, l.mj)({
    kind: "user",
    name: "2025-11-age-verification-expressive-everywhere",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function c(e) {
    return u.getConfig({ location: e }).enabled;
}
let d = (0, l.mj)({
    kind: "user",
    name: "2026-06-age-verification-incode",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var _ = n(36149),
    h = n(40449);
function f(e) {
    if (null != e) return (0, _.Sr)(e) ? r.F.LIGHTBOX : void 0;
}
let p = {
    showAgeVerification: function (e) {
        let {
                onClose: t,
                entryPoint: r,
                shouldShowExpressiveModal: o = !1,
                webviewUrl: l,
                verificationVendorName: u,
                incodeParameters: _,
                ...p
            } = e,
            E = { modalKey: h.SW, onCloseCallback: t, backdropStyle: f(r), Layer: a.Ay };
        if (u === h.XM.INCODE && d.getConfig({ location: r }).enabled) {
            let { api_url: e, session_token: t, interview_id: a } = _ ?? {};
            return (
                null != e &&
                null != t &&
                null != a &&
                ((0, s.openModalLazy)(async () => {
                    let { default: s } = await Promise.all([
                        n.e("33287"),
                        n.e("47449"),
                        n.e("10723"),
                        n.e("14651"),
                        n.e("62041"),
                        n.e("44381"),
                        n.e("59482"),
                        n.e("88941"),
                        n.e("69464"),
                        n.e("38394"),
                    ]).then(n.bind(n, 832417));
                    return (n) =>
                        (0, i.jsx)(s, { apiUrl: e, sessionToken: t, interviewId: a, entryPoint: r, ...p, ...n });
                }, E),
                !0)
            );
        }
        return (
            null != l &&
            (o || c(r)
                ? (0, s.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("44381"), n.e("18024"), n.e("24947")]).then(
                          n.bind(n, 662558),
                      );
                      return (t) => (0, i.jsx)(e, { webviewUrl: l, ...p, ...t });
                  }, E)
                : (0, s.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("33287"),
                          n.e("44381"),
                          n.e("88941"),
                          n.e("69464"),
                          n.e("23425"),
                      ]).then(n.bind(n, 745336));
                      return (t) => (0, i.jsx)(e, { webviewUrl: l, ...p, ...t });
                  }, E),
            !0)
        );
    },
    showAgeVerificationGetStartedModal: function (e) {
        let { onClose: t, entryPoint: r } = e;
        (0, _.Q9)() && (0, o.u0)()
            ? (0, s.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("40854"),
                          n.e("54398"),
                          n.e("54048"),
                          n.e("607"),
                          n.e("84794"),
                          n.e("34260"),
                          n.e("18467"),
                      ]).then(n.bind(n, 297102));
                      return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                  },
                  { modalKey: h.NC, backdropStyle: f(r), Layer: a.Ay, onCloseCallback: t },
              )
            : c(r)
              ? (0, s.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("33287"),
                            n.e("40854"),
                            n.e("54048"),
                            n.e("88941"),
                            n.e("607"),
                            n.e("84794"),
                            n.e("99487"),
                        ]).then(n.bind(n, 595746));
                        return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                    },
                    { modalKey: h.NC, backdropStyle: f(r), Layer: a.Ay, onCloseCallback: t },
                )
              : (0, s.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("40854"),
                            n.e("34763"),
                            n.e("61268"),
                            n.e("607"),
                            n.e("18792"),
                            n.e("34260"),
                            n.e("42978"),
                        ]).then(n.bind(n, 654041));
                        return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                    },
                    { modalKey: h.NC, backdropStyle: f(r), Layer: a.Ay, onCloseCallback: t },
                );
    },
    openUrl: function (e) {
        window.open(e, "_blank");
    },
};
