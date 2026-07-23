"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(892491),
    a = n(192308),
    s = n(228366),
    l = n(80556),
    o = n(207560),
    d = n(287809),
    c = n(945810);
let u = (0, c.mj)({
    kind: "user",
    name: "2025-11-age-verification-expressive-everywhere",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function _(e) {
    return u.getConfig({ location: e }).enabled;
}
let E = (0, c.mj)({
    kind: "user",
    name: "2026-06-age-verification-incode",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function A(e) {
    return E.getConfig({ location: e }).enabled;
}
var h = n(36149);
let I = (0, c.mj)({
    kind: "user",
    name: "2026-07-expressive-modal-v2",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var f = n(40449);
function p(e) {
    if (null != e) return (0, h.Sr)(e) ? r.F.LIGHTBOX : void 0;
}
function T(e) {
    var t;
    let { entryPoint: r, onClose: s, onComplete: o, onCancel: d, incodeParameters: c } = e,
        u = (t = c?.method) === f.VF.FACIAL_AGE_ESTIMATION || t === f.VF.ID_VERIFICATION ? c.method : null,
        _ =
            null != c && null != u
                ? {
                      apiUrl: c.api_url,
                      sessionToken: c.session_token,
                      consentId: c.consent_id,
                      interviewId: c.interview_id,
                  }
                : null;
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                n.e("55496"),
                n.e("22568"),
                n.e("52775"),
                n.e("17648"),
                n.e("520"),
                n.e("12211"),
                n.e("34696"),
                n.e("96402"),
                n.e("607"),
                n.e("84794"),
                n.e("69464"),
                n.e("8169"),
            ]).then(n.bind(n, 832417));
            return (t) =>
                null != _ && null != u
                    ? (0, i.jsx)(e, {
                          initialSession: _,
                          initialMethod: u,
                          entryPoint: r,
                          onComplete: o,
                          onCancel: d,
                          ...t,
                      })
                    : (0, i.jsx)(e, { pickerMode: !0, entryPoint: r, onComplete: o, onCancel: d, ...t });
        },
        { modalKey: f.SW, onCloseCallback: s, backdropStyle: p(r), Layer: l.Ay },
    );
}
let m = {
    showAgeVerification: function (e) {
        let {
                onClose: t,
                entryPoint: r,
                shouldShowExpressiveModal: s = !1,
                webviewUrl: o,
                verificationVendorName: d,
                incodeParameters: c,
                ...u
            } = e,
            E = { modalKey: f.SW, onCloseCallback: t, backdropStyle: p(r), Layer: l.Ay };
        if (d === f.XM.INCODE && A(r))
            return (
                !!(
                    null != c &&
                    ["api_url", "session_token", "interview_id", "consent_id"].every(
                        (e) => "string" == typeof c[e] && c[e].length > 0,
                    )
                ) &&
                (T({ entryPoint: r, onClose: t, onComplete: u.onComplete, onCancel: u.onCancel, incodeParameters: c }),
                !0)
            );
        return (
            null != o &&
            (s || _(r)
                ? (0, a.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("34696"), n.e("18024"), n.e("24947")]).then(
                          n.bind(n, 662558),
                      );
                      return (t) => (0, i.jsx)(e, { webviewUrl: o, ...u, ...t });
                  }, E)
                : (0, a.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e("34696"), n.e("69464"), n.e("23425")]).then(
                          n.bind(n, 745336),
                      );
                      return (t) => (0, i.jsx)(e, { webviewUrl: o, ...u, ...t });
                  }, E),
            !0)
        );
    },
    showAgeVerificationGetStartedModal: function (e) {
        let { onClose: t, entryPoint: r } = e;
        if (A(r)) {
            let e = d.default.getCurrentUser()?.ageVerificationStatus;
            function c() {
                s.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: e });
            }
            s.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" }),
                T({
                    entryPoint: r,
                    onClose: () => {
                        c(), t?.();
                    },
                    onComplete: () => {},
                    onCancel: c,
                });
            return;
        }
        (0, h.Q9)() && (0, o.u0)()
            ? (0, a.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("12211"),
                          n.e("15574"),
                          n.e("607"),
                          n.e("84794"),
                          n.e("34260"),
                          n.e("18467"),
                      ]).then(n.bind(n, 297102));
                      return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                  },
                  { modalKey: f.NC, backdropStyle: p(r), Layer: l.Ay, onCloseCallback: t },
              )
            : I.getConfig({ location: r }).enabled
              ? (0, a.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("63452"), n.e("51778"), n.e("22153")]).then(
                            n.bind(n, 808400),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                    },
                    { modalKey: f.NC, backdropStyle: p(r), Layer: l.Ay, onCloseCallback: t },
                )
              : _(r)
                ? (0, a.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("12211"),
                              n.e("607"),
                              n.e("84794"),
                              n.e("99487"),
                          ]).then(n.bind(n, 595746));
                          return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                      },
                      { modalKey: f.NC, backdropStyle: p(r), Layer: l.Ay, onCloseCallback: t },
                  )
                : (0, a.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("12211"),
                              n.e("2339"),
                              n.e("61268"),
                              n.e("607"),
                              n.e("18792"),
                              n.e("34260"),
                              n.e("42978"),
                          ]).then(n.bind(n, 654041));
                          return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                      },
                      { modalKey: f.NC, backdropStyle: p(r), Layer: l.Ay, onCloseCallback: t },
                  );
    },
    openUrl: function (e) {
        window.open(e, "_blank");
    },
};
