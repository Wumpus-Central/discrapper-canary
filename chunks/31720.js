"use strict";
n.d(t, { A: () => g });
var i = n(477900);
n(582128);
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
var h = n(931374);
let I = (0, c.mj)({
    kind: "user",
    name: "2026-07-expressive-modal-v2",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 }, 2: { enabled: !0 } },
});
function f(e) {
    return I.getConfig({ location: e }).enabled;
}
var p = n(40449);
function T(e) {
    if (null != e) return (0, h.Sr)(e) ? r.F.LIGHTBOX : void 0;
}
function m(e) {
    var t;
    let { entryPoint: r, onClose: s, onComplete: o, onCancel: d, incodeParameters: c } = e,
        u = (t = c?.method) === p.VF.FACIAL_AGE_ESTIMATION || t === p.VF.ID_VERIFICATION ? c.method : null,
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
                n.e("896162"),
                n.e("762230"),
                n.e("140082"),
                n.e("360639"),
                n.e("514670"),
                n.e("3322"),
                n.e("847727"),
                n.e("387132"),
                n.e("810994"),
                n.e("454048"),
                n.e("188941"),
                n.e("600607"),
                n.e("384794"),
                n.e("669464"),
                n.e("708169"),
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
        { modalKey: p.SW, onCloseCallback: s, backdropStyle: T(r), Layer: l.Ay },
    );
}
let g = {
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
            E = { modalKey: p.SW, onCloseCallback: t, backdropStyle: T(r), Layer: l.Ay };
        if (d === p.XM.INCODE && A(r))
            return (
                !!(
                    null != c &&
                    ["api_url", "session_token", "interview_id", "consent_id"].every(
                        (e) => "string" == typeof c[e] && c[e].length > 0,
                    )
                ) &&
                (m({ entryPoint: r, onClose: t, onComplete: u.onComplete, onCancel: u.onCancel, incodeParameters: c }),
                !0)
            );
        if (null == o) return !1;
        if (s || _(r)) {
            let e = f(r);
            (0, a.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("387132"), n.e("918024"), n.e("324947")]).then(
                    n.bind(n, 662558),
                );
                return (n) => (0, i.jsx)(t, { webviewUrl: o, isExpressiveModalV2: e, ...u, ...n });
            }, E);
        } else
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("896162"),
                    n.e("387132"),
                    n.e("188941"),
                    n.e("669464"),
                    n.e("123425"),
                ]).then(n.bind(n, 745336));
                return (t) => (0, i.jsx)(e, { webviewUrl: o, ...u, ...t });
            }, E);
        return !0;
    },
    showAgeVerificationGetStartedModal: function (e) {
        let { onClose: t, entryPoint: r } = e;
        if (A(r)) {
            let e = d.default.getCurrentUser()?.ageVerificationStatus;
            function c() {
                s.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: e });
            }
            s.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" }),
                m({
                    entryPoint: r,
                    onClose: () => {
                        c(), t?.();
                    },
                    onComplete: () => {},
                    onCancel: c,
                });
            return;
        }
        f(r)
            ? (0, a.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.all([
                          n.e("32039"),
                          n.e("454048"),
                          n.e("253729"),
                          n.e("985505"),
                      ]).then(n.bind(n, 630008));
                      return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                  },
                  { modalKey: p.NC, backdropStyle: T(r), Layer: l.Ay, onCloseCallback: t },
              )
            : (0, h.Q9)() && (0, o.u0)()
              ? (0, a.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("847727"),
                            n.e("469663"),
                            n.e("454048"),
                            n.e("600607"),
                            n.e("384794"),
                            n.e("334260"),
                            n.e("518467"),
                        ]).then(n.bind(n, 297102));
                        return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                    },
                    { modalKey: p.NC, backdropStyle: T(r), Layer: l.Ay, onCloseCallback: t },
                )
              : _(r)
                ? (0, a.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("896162"),
                              n.e("847727"),
                              n.e("262546"),
                              n.e("454048"),
                              n.e("188941"),
                              n.e("600607"),
                              n.e("384794"),
                              n.e("699487"),
                          ]).then(n.bind(n, 595746));
                          return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                      },
                      { modalKey: p.NC, backdropStyle: T(r), Layer: l.Ay, onCloseCallback: t },
                  )
                : (0, a.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("847727"),
                              n.e("67032"),
                              n.e("538887"),
                              n.e("600607"),
                              n.e("718792"),
                              n.e("334260"),
                              n.e("942978"),
                          ]).then(n.bind(n, 654041));
                          return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                      },
                      { modalKey: p.NC, backdropStyle: T(r), Layer: l.Ay, onCloseCallback: t },
                  );
    },
    showManualReviewPendingModal: function () {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("632364"), n.e("492758")]).then(n.bind(n, 174453));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    },
    openUrl: function (e) {
        window.open(e, "_blank");
    },
};
