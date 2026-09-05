n.d(t, { A: () => C });
var i = n(477900);
n(582128);
var r = n(892491),
    a = n(192308),
    s = n(228366),
    l = n(80556),
    o = n(207560),
    d = n(287809),
    c = n(847599),
    u = n(945810);
let _ = (0, u.mj)({
    kind: "user",
    name: "2025-11-age-verification-expressive-everywhere",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function E(e) {
    return _.getConfig({ location: e }).enabled;
}
let A = (0, u.mj)({
    kind: "user",
    name: "2026-06-age-verification-incode",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function h(e) {
    return A.getConfig({ location: e }).enabled;
}
var I = n(36149),
    f = n(462924),
    p = n(895595),
    T = n(40449);
function m(e) {
    if (null != e) return (0, I.Sr)(e) ? r.F.LIGHTBOX : void 0;
}
function g(e) {
    var t;
    let { entryPoint: r, onClose: s, onComplete: o, onCancel: d, incodeParameters: c } = e,
        u = (t = c?.method) === T.VF.FACIAL_AGE_ESTIMATION || t === T.VF.ID_VERIFICATION ? c.method : null,
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
                n.e("722514"),
                n.e("451094"),
                n.e("599314"),
                n.e("180355"),
                n.e("110798"),
                n.e("985626"),
                n.e("847727"),
                n.e("387132"),
                n.e("390253"),
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
        { modalKey: T.SW, onCloseCallback: s, backdropStyle: m(r), Layer: l.Ay },
    );
}
function S(e) {
    let {
            onClose: t,
            entryPoint: r,
            shouldShowExpressiveModal: s = !1,
            webviewUrl: o,
            verificationVendorName: d,
            incodeParameters: c,
            ...u
        } = e,
        _ = { modalKey: T.SW, onCloseCallback: t, backdropStyle: m(r), Layer: l.Ay };
    if (d === T.XM.INCODE && h(r))
        return (
            !!(
                null != c &&
                ["api_url", "session_token", "interview_id", "consent_id"].every(
                    (e) => "string" == typeof c[e] && c[e].length > 0,
                )
            ) &&
            (g({ entryPoint: r, onClose: t, onComplete: u.onComplete, onCancel: u.onCancel, incodeParameters: c }), !0)
        );
    if (null == o) return !1;
    if (s || E(r)) {
        let e = (0, f.d)(r);
        (0, a.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e("387132"), n.e("918024"), n.e("324947")]).then(
                n.bind(n, 662558),
            );
            return (n) => (0, i.jsx)(t, { webviewUrl: o, isExpressiveModalV2: e, ...u, ...n });
        }, _);
    } else
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("722514"),
                n.e("387132"),
                n.e("188941"),
                n.e("669464"),
                n.e("123425"),
            ]).then(n.bind(n, 745336));
            return (t) => (0, i.jsx)(e, { webviewUrl: o, ...u, ...t });
        }, _);
    return !0;
}
function N(e, t) {
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("164776"), n.e("409609")]).then(n.bind(n, 475376));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        { modalKey: T.NC, backdropStyle: m(e), Layer: l.Ay, onCloseCallback: t },
    );
}
let C = {
    showAgeVerification: S,
    showAgeVerificationGetStartedModal: function (e) {
        let { onClose: t, entryPoint: r } = e;
        if (h(r)) {
            let e = d.default.getCurrentUser()?.ageVerificationStatus;
            function c() {
                s.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: e });
            }
            s.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" }),
                g({
                    entryPoint: r,
                    onClose: () => {
                        c(), t?.();
                    },
                    onComplete: () => {},
                    onCancel: c,
                });
            return;
        }
        (0, f.d)(r)
            ? (async () => {
                  if (await (0, p.L)(r)) return N(r, t);
                  (0, a.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("32039"),
                              n.e("454048"),
                              n.e("253729"),
                              n.e("930375"),
                          ]).then(n.bind(n, 188602));
                          return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                      },
                      { modalKey: T.NC, backdropStyle: m(r), Layer: l.Ay, onCloseCallback: t },
                  );
              })()
            : (0, I.Q9)() && (0, o.u0)()
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
                    { modalKey: T.NC, backdropStyle: m(r), Layer: l.Ay, onCloseCallback: t },
                )
              : E(r)
                ? (0, a.openModalLazy)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e("722514"),
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
                      { modalKey: T.NC, backdropStyle: m(r), Layer: l.Ay, onCloseCallback: t },
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
                              n.e("720597"),
                          ]).then(n.bind(n, 654041));
                          return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                      },
                      { modalKey: T.NC, backdropStyle: m(r), Layer: l.Ay, onCloseCallback: t },
                  );
    },
    showManualReviewWebview: function (e) {
        return S({
            webviewUrl: e,
            verificationVendorName: T.XM.K_ID,
            entryPoint: c.q1.SYSTEM_DM_MANUAL_REVIEW,
            onComplete: () => {},
        });
    },
    showManualReviewDecidedTeenModal: function () {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("164776"), n.e("272647")]).then(n.bind(n, 986362));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    },
    showManualReviewFallbackModal: N,
    openUrl: function (e) {
        window.open(e, "_blank");
    },
};
