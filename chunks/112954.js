n.d(t, { default: () => W });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    l = n.n(a),
    s = n(462887),
    o = n(192308),
    c = n(821609),
    u = n(663417),
    d = n(123292),
    f = n(772707),
    _ = n(331322),
    I = n(834730),
    p = n(289873);
(n(11414), n(250216), n(723847), n(66580));
var A = n(736653),
    E = n(632738),
    g = n(295972),
    C = n(36149),
    F = n(979555),
    v = n(200432),
    b = n(844887),
    k = n(995489),
    T = n(677085),
    h = n(731738),
    y = n(913379),
    R = n(40449),
    m = n(664188),
    w = n(792996),
    L = n(77825);
let N = !1,
    D = { da: "da-DK", fi: "fi-FI", no: "nb-NO" },
    S = {
        showTutorial: !0,
        autoCaptureTimeout: 10,
        captureAttempts: 3,
        showPreview: !1,
        assistedOnboarding: !1,
        enableFaceRecording: !1,
        validateLenses: !0,
        validateFaceMask: !0,
        validateHeadCover: !0,
        validateClosedEyes: !0,
        validateBrightness: !0,
        deepsightLiveness: "SINGLE_FRAME",
        onDeviceFaceResultsSubmissionEnabled: !0,
    };
function V(e, t) {
    switch (t.type) {
        case "CAPTURE_COMPLETED":
            return "waiting_for_result";
        case "FALLBACK_AVAILABLE":
            return "fallback_available";
        case "FALLBACK_STARTED":
            return "bootstrapping_fallback";
        case "VERIFICATION_FAILED":
        case "CAPTURE_FAILED":
            return "error";
        case "FALLBACK_READY":
        case "RETRY_CAPTURE":
            return "capturing";
    }
}
function O() {
    try {
        (0, F.cL)();
    } catch {}
}
function x(e) {
    return e.aborted;
}
function P(e) {
    y.A.increment({ name: h.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
function j(e, t) {
    let { container: n, config: i, signal: r, onFinish: a, onError: l } = t,
        s = document.createElement(e);
    s.className = L.x;
    let o = !1;
    function c(e) {
        x(r) || o || ((o = !0), e());
    }
    return ((s.onFinish = () => c(a)), (s.onError = () => c(l)), (s.config = i), n.appendChild(s), s);
}
function M(e, t) {
    return t
        ? []
        : e !== R.VF.ID_VERIFICATION
          ? !0 === S.onDeviceFaceResultsSubmissionEnabled
              ? ["selfie", "onDeviceSelfie"]
              : ["selfie"]
          : [];
}
let B = function (e) {
    let {
            apiUrl: t,
            sessionToken: n,
            consentId: i,
            interviewId: a,
            flow: l = R.VF.FACIAL_AGE_ESTIMATION,
            onDeviceIdCapture: s = !1,
            enabled: o = !0,
            webviewHost: c,
        } = e,
        u = r.useRef(null),
        d = r.useRef(null),
        f = r.useRef(!1),
        [_, I] = r.useReducer(V, "capturing"),
        [p, A] = r.useState(!1),
        [E, C] = r.useState(!1),
        [h, y] = r.useState({ sessionToken: n, interviewId: a, consentId: i });
    (r.useEffect(() => {
        let e = M(l, s);
        0 !== e.length && (0, k.ZU)((0, k.Dz)({ pipelines: e })).catch(() => {});
    }, []),
        r.useEffect(() => {
            y((e) =>
                e.sessionToken === n && e.interviewId === a && e.consentId === i
                    ? e
                    : ((f.current = !1), { sessionToken: n, interviewId: a, consentId: i }),
            );
        }, [n, a, i]),
        r.useEffect(() => {
            C(!1);
        }, [h.sessionToken, h.interviewId]));
    let L = "waiting_for_result" === _,
        B = "error" === _,
        U = "fallback_available" === _,
        q = "bootstrapping_fallback" === _,
        K = "waiting_for_result" === _ || "bootstrapping_fallback" === _,
        G = r.useCallback(
            (e) => {
                if ("bootstrapping_fallback" === _) {
                    if ("error" in e) {
                        (P("fallback_bootstrap_failed"), (f.current = !1), I({ type: "CAPTURE_FAILED" }));
                        return;
                    }
                    (y((t) => ({ sessionToken: e.sessionToken, interviewId: e.interviewId, consentId: t.consentId })),
                        I({ type: "FALLBACK_READY" }));
                }
            },
            [_],
        ),
        W = r.useCallback(async () => {
            if (!f.current) {
                if (((f.current = !0), I({ type: "FALLBACK_STARTED" }), null != c))
                    return void c.onFallbackRequest(h.interviewId);
                try {
                    let e = (await (0, g.eb)({ previousInterviewId: h.interviewId })).incode_parameters;
                    if (e?.session_token == null || null == e.interview_id || null == e.consent_id) {
                        (P("fallback_bootstrap_incomplete"), I({ type: "CAPTURE_FAILED" }));
                        return;
                    }
                    (y({ sessionToken: e.session_token, interviewId: e.interview_id, consentId: e.consent_id }),
                        I({ type: "FALLBACK_READY" }));
                } catch (e) {
                    (P("fallback_bootstrap_failed"), (f.current = !1), I({ type: "CAPTURE_FAILED" }));
                }
            }
        }, [h.interviewId, c]),
        Q = r.useCallback(() => {
            ((f.current = !1),
                C(!1),
                y({ sessionToken: n, interviewId: a, consentId: i }),
                I({ type: "RETRY_CAPTURE" }));
        }, [n, a, i]);
    return (
        r.useEffect(() => {
            if (!L) return;
            let e = new AbortController(),
                { signal: t } = e;
            return (
                !(async function () {
                    let e = h.interviewId;
                    if (0 === e.length) {
                        (P("missing_interview_id"), x(t) || I({ type: "VERIFICATION_FAILED" }));
                        return;
                    }
                    if (null != c) return void c.onCaptureComplete(e);
                    let n = await (async function (e) {
                        try {
                            return (await (0, g.Zo)(e), !0);
                        } catch {
                            return !1;
                        }
                    })(e);
                    !x(t) && (n || (P("registration_failed"), I({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [L, h.interviewId, c]),
        r.useEffect(() => {
            if ("bootstrapping_fallback" === _) {
                let e = setTimeout(() => {
                    (P("fallback_bootstrap_failed"), (f.current = !1), I({ type: "CAPTURE_FAILED" }));
                }, 3e4);
                return () => {
                    clearTimeout(e);
                };
            }
            if ("waiting_for_result" !== _ && !E) return;
            let e = setTimeout(() => {
                (C(!1), P("result_wait_timeout"), I({ type: "VERIFICATION_FAILED" }));
            }, 3e4);
            return () => {
                clearTimeout(e);
            };
        }, [_, E]),
        r.useEffect(() => {
            var e, n;
            let i, r, a;
            if (!o || "capturing" !== _ || 0 === h.sessionToken.length) return;
            let c = new AbortController(),
                { signal: p } = c,
                E =
                    ((e = f.current ? R.VF.ID_VERIFICATION : l),
                    (n = h.sessionToken),
                    (r = M(e, s)),
                    (a = e === R.VF.FACIAL_AGE_ESTIMATION),
                    s
                        ? {
                              tag: "incode-flow",
                              config: { token: n },
                              wasmPipelines: r,
                              captureFailureReason:
                                  e === R.VF.ID_VERIFICATION ? "id_capture_error" : "selfie_capture_error",
                              requiresManualFinish: !1,
                              allowsIdFallback: a,
                          }
                        : e !== R.VF.ID_VERIFICATION
                          ? {
                                tag: "incode-selfie",
                                config: S,
                                wasmPipelines: r,
                                captureFailureReason: "selfie_capture_error",
                                requiresManualFinish: !0,
                                allowsIdFallback: a,
                            }
                          : {
                                tag: "incode-flow",
                                config: { token: n },
                                wasmPipelines: r,
                                captureFailureReason: "id_capture_error",
                                requiresManualFinish: !1,
                                allowsIdFallback: a,
                            }),
                g = !1;
            function k(e) {
                (f.current || P(e), C(!1), I({ type: "FALLBACK_AVAILABLE" }));
            }
            return (
                !(async function () {
                    try {
                        let n;
                        if (
                            (O(),
                            (function () {
                                if (N) return;
                                N = !0;
                                let e = D[w.intl.currentLocale] ?? w.intl.currentLocale,
                                    t = w.intl.string(m.default["S+mgl0"]),
                                    n = { idv2: { capture: { processing: { uploading: t, verifying: t } } } },
                                    i = (0, T.hU)({ lang: e, translations: { en: n, [e]: n } });
                                (i.changeLanguage(e), (0, T.Q5)(i));
                            })(),
                            await (0, F.mj)({
                                apiURL: (n = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? n : `${n}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: E.wasmPipelines },
                            }),
                            x(p) || (await (0, b.T7)({ token: h.sessionToken }), x(p)))
                        )
                            return;
                        let r = u.current;
                        if (null == r) throw Error("Incode capture failed to initialize.");
                        function e() {
                            null != r &&
                                ("incode-selfie" === E.tag &&
                                    (i = (0, v.Ns)((e) => {
                                        "screenOpened" === e.code && e.screen?.endsWith("Exhausted") && (g = !0);
                                    })),
                                (d.current = j(E.tag, {
                                    container: r,
                                    config: E.config,
                                    signal: p,
                                    onFinish: () => {
                                        E.allowsIdFallback && g && !f.current
                                            ? k("selfie_error_triggered_fallback")
                                            : E.requiresManualFinish || E.allowsIdFallback
                                              ? (C(!0),
                                                (async () => {
                                                    try {
                                                        let e = await (0, b.uR)(void 0, p);
                                                        if (x(p)) return;
                                                        let t =
                                                            e?.action === "rejected" ||
                                                            e?.scoreStatus === "FAIL" ||
                                                            e?.scoreStatus === "MANUAL_FAIL";
                                                        if (E.allowsIdFallback && !f.current && t)
                                                            return void k("result_gate_triggered_fallback");
                                                        (C(!1), I({ type: "CAPTURE_COMPLETED" }));
                                                    } catch {
                                                        if (x(p)) return;
                                                        (C(!1),
                                                            P("finish_status_error"),
                                                            I({ type: "VERIFICATION_FAILED" }));
                                                    }
                                                })())
                                              : I({ type: "CAPTURE_COMPLETED" });
                                    },
                                    onError: () => {
                                        E.allowsIdFallback && h.interviewId.length > 0
                                            ? k("selfie_error_triggered_fallback")
                                            : (P(E.captureFailureReason), I({ type: "CAPTURE_FAILED" }));
                                    },
                                })),
                                A(!0));
                        }
                        if (s) e();
                        else {
                            let t = j("incode-consent", {
                                container: r,
                                config: { consentId: h.consentId },
                                signal: p,
                                onFinish: () => {
                                    (t.parentNode?.removeChild(t), e());
                                },
                                onError: () => {
                                    (P("consent_error"), I({ type: "CAPTURE_FAILED" }));
                                },
                            });
                            ((d.current = t), A(!0));
                        }
                    } catch (e) {
                        if (x(p)) return;
                        (P("sdk_init_error"), I({ type: "CAPTURE_FAILED" }));
                    }
                })(),
                () => {
                    (c.abort(), i?.(), A(!1));
                    let e = d.current;
                    (e?.parentNode != null && e.parentNode.removeChild(e), (d.current = null), O());
                }
            );
        }, [t, h, _, l, s, o]),
        {
            containerRef: u,
            error: B,
            waitingForResult: K,
            awaitingFinishStatus: E,
            incodeElementMounted: p,
            retryCapture: Q,
            continueWithIdFallback: W,
            applyFallbackSession: G,
            isFallbackAvailable: U,
            isAwaitingFallbackSession: q,
        }
    );
};
var U = n(793163),
    q = n(610402),
    K = n(603494),
    G = n(700129);
let W = function (e) {
    let { onClose: t, onComplete: n, onCancel: a, hideFooter: F, onDeviceIdCapture: v, transitionState: b } = e,
        k = !0 === e.pickerMode ? null : e.initialSession,
        T = !0 === e.pickerMode ? null : e.initialMethod,
        h = r.useRef(!1),
        [y, L] = r.useState(T),
        [N, D] = r.useState(k),
        [S, V] = r.useState(!1),
        O = r.useCallback(async (e) => {
            (L(e), V(!1), D(null));
            try {
                let t = await (0, g.D0)(e);
                null == t ? V(!0) : D(t);
            } catch {
                V(!0);
            }
        }, []),
        x = r.useCallback(() => {
            h.current || ((h.current = !0), n(), t());
        }, [n, t]),
        P = (0, s.M)((0, A.Ay)()),
        j = !0 === F,
        M = r.useMemo(() => (j ? { onCaptureComplete: q.Qk, onFallbackRequest: q.qm } : void 0), [j]),
        {
            containerRef: W,
            error: Q,
            waitingForResult: Y,
            awaitingFinishStatus: J,
            incodeElementMounted: X,
            retryCapture: Z,
            continueWithIdFallback: $,
            applyFallbackSession: z,
            isFallbackAvailable: H,
            isAwaitingFallbackSession: ee,
        } = B({
            apiUrl: N?.apiUrl ?? "",
            sessionToken: N?.sessionToken ?? "",
            consentId: N?.consentId ?? "",
            interviewId: N?.interviewId ?? "",
            flow: y ?? void 0,
            onDeviceIdCapture: v,
            enabled: null != y && null != N,
            webviewHost: M,
        });
    r.useEffect(() => {
        if (!j || !ee) return;
        let e = window;
        return (
            (e[q.fl] = z),
            () => {
                e[q.fl] === z && delete e[q.fl];
            }
        );
    }, [j, ee, z]);
    let et = Q || S,
        en = r.useCallback(() => {
            S && null != y ? O(y) : Z();
        }, [S, y, O, Z]),
        ei = r.useCallback(() => {
            !F && (0, o.kB)(R.SW) && (0, C.Q9)() && x();
        }, [x, F]);
    (0, C.dZ)(ei);
    let er = r.useCallback(() => {
            (a?.(), t());
        }, [a, t]),
        ea = null;
    return (H ||
        ee ||
        (et
            ? (ea = (0, i.jsx)(c.$, {
                  variant: "secondary",
                  icon: u.RefreshIcon,
                  text: w.intl.string(w.t["/nicWo"]),
                  onClick: en,
              }))
            : null != a &&
              (ea = (0, i.jsx)(d.Q, { variant: "secondary", text: w.intl.string(w.t["4gTnU0"]), onClick: er }))),
    null == y)
        ? (0, i.jsx)(f.k, {
              transitionState: b,
              onClose: t,
              gradientColor: "blue",
              graphic: { type: "image", src: G.A },
              title: w.intl.string(m.default.eZvwAe),
              subtitle: w.intl.string(m.default["5yWXmT"]),
              actionBarInput: (0, i.jsx)(d.Q, { variant: "secondary", text: w.intl.string(w.t.fjKFae), onClick: t }),
              children: (0, i.jsxs)(_.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, i.jsx)(E.PQ, {
                          variant: "clickable",
                          title: w.intl.string(m.default.rgXXcW),
                          description: w.intl.string(m.default.fm7qBC),
                          onButtonPress: () => {
                              O(R.VF.FACIAL_AGE_ESTIMATION);
                          },
                      }),
                      (0, i.jsx)(E.PQ, {
                          variant: "clickable",
                          title: w.intl.string(m.default["NeVlw/"]),
                          description: w.intl.string(m.default.ARmJ0M),
                          onButtonPress: () => {
                              O(R.VF.ID_VERIFICATION);
                          },
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(U.A, {
              parentComponent: "IncodeAgeVerificationModal",
              transitionState: b,
              onBackToStart: t,
              footerRightSlot: ea,
              hideFooter: F,
              children: et
                  ? (0, i.jsx)(
                        "div",
                        {
                            className: l()(K.qV, K.eg),
                            children: (0, i.jsx)(I.E, {
                                variant: "body-sm/medium",
                                color: "text-muted",
                                className: K.h5,
                                children: w.intl.string(w.t.c6kn6F),
                            }),
                        },
                        "status",
                    )
                  : H || ee
                    ? (0, i.jsx)(
                          "div",
                          {
                              className: l()(K.qV, K.eg),
                              children: (0, i.jsxs)(_.B, {
                                  direction: "vertical",
                                  gap: 24,
                                  align: "center",
                                  children: [
                                      (0, i.jsx)(I.E, {
                                          variant: "body-md/medium",
                                          color: "text-default",
                                          className: K.h5,
                                          children: w.intl.string(ee ? m.default["s+qGhK"] : m.default["Ae/g7X"]),
                                      }),
                                      (0, i.jsx)(c.$, {
                                          variant: "primary",
                                          text: w.intl.string(m.default.eVjNWp),
                                          loading: ee,
                                          onClick: () => {
                                              $();
                                          },
                                      }),
                                  ],
                              }),
                          },
                          "status",
                      )
                    : Y
                      ? (0, i.jsxs)(
                            "div",
                            {
                                className: l()(K.qV, K.eg),
                                children: [
                                    (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE }),
                                    (0, i.jsx)(I.E, {
                                        variant: "body-sm/medium",
                                        color: "text-muted",
                                        className: K.h5,
                                        children: w.intl.string(w.t.wJVyYR),
                                    }),
                                ],
                            },
                            "status",
                        )
                      : (0, i.jsxs)(
                            "div",
                            {
                                className: l()(K.yq, { [K.GS]: F }),
                                children: [
                                    (0, i.jsx)("div", {
                                        ref: W,
                                        "data-incode-theme": P ? "dark" : "light",
                                        className: l()(K.qV, { [K.GS]: F }),
                                    }),
                                    !X || J
                                        ? (0, i.jsx)("div", {
                                              className: K.BT,
                                              children: (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE }),
                                          })
                                        : null,
                                ],
                            },
                            "capture",
                        ),
          });
};
