"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(892491),
    a = n(192308),
    s = n(80556),
    l = n(207560),
    o = n(945810);
let d = (0, o.mj)({
    kind: "user",
    name: "2025-11-age-verification-expressive-everywhere",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function c(e) {
    return d.getConfig({ location: e }).enabled;
}
let u = (0, o.mj)({
    kind: "user",
    name: "2026-06-age-verification-incode",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var _ = n(36149),
    E = n(40449);
function A(e) {
    if (null != e) return (0, _.Sr)(e) ? r.F.LIGHTBOX : void 0;
}
let h = {
    showAgeVerification: function (e) {
        let {
                onClose: t,
                entryPoint: r,
                shouldShowExpressiveModal: l = !1,
                webviewUrl: o,
                verificationVendorName: d,
                incodeParameters: _,
                ...h
            } = e,
            I = { modalKey: E.SW, onCloseCallback: t, backdropStyle: A(r), Layer: s.Ay };
        if (d === E.XM.INCODE && u.getConfig({ location: r }).enabled) {
            let { api_url: e, session_token: t, interview_id: s } = _ ?? {};
            return (
                null != e &&
                null != t &&
                null != s &&
                ((0, a.openModalLazy)(async () => {
                    let { default: a } = await Promise.all([
                        n.e("47449"),
                        n.e("10723"),
                        n.e("14651"),
                        n.e("62041"),
                        n.e("10849"),
                        n.e("46883"),
                        n.e("44381"),
                        n.e("35956"),
                        n.e("69464"),
                        n.e("38394"),
                    ]).then(n.bind(n, 832417));
                    return (n) =>
                        (0, i.jsx)(a, { apiUrl: e, sessionToken: t, interviewId: s, entryPoint: r, ...h, ...n });
                }, I),
                !0)
            );
        }
        return (
            null != o &&
            (l || c(r)
                ? (0, a.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("44381"), n.e("18024"), n.e("24947")]).then(
                          n.bind(n, 662558),
                      );
                      return (t) => (0, i.jsx)(e, { webviewUrl: o, ...h, ...t });
                  }, I)
                : (0, a.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("44381"), n.e("69464"), n.e("23425")]).then(
                          n.bind(n, 745336),
                      );
                      return (t) => (0, i.jsx)(e, { webviewUrl: o, ...h, ...t });
                  }, I),
            !0)
        );
    },
    showAgeVerificationGetStartedModal: function (e) {
        let { onClose: t, entryPoint: r } = e;
        (0, _.Q9)() && (0, l.u0)()
            ? (0, a.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("40854"),
                          n.e("54398"),
                          n.e("607"),
                          n.e("84794"),
                          n.e("34260"),
                          n.e("18467"),
                      ]).then(n.bind(n, 297102));
                      return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                  },
                  { modalKey: E.NC, backdropStyle: A(r), Layer: s.Ay, onCloseCallback: t },
              )
            : c(r)
              ? (0, a.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("40854"),
                            n.e("607"),
                            n.e("84794"),
                            n.e("99487"),
                        ]).then(n.bind(n, 595746));
                        return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                    },
                    { modalKey: E.NC, backdropStyle: A(r), Layer: s.Ay, onCloseCallback: t },
                )
              : (0, a.openModalLazy)(
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
                    { modalKey: E.NC, backdropStyle: A(r), Layer: s.Ay, onCloseCallback: t },
                );
    },
    openUrl: function (e) {
        window.open(e, "_blank");
    },
};
