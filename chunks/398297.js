d.d(t, { a: () => G, i: () => M, n: () => x, r: () => T, t: () => D });
var i = d(327169),
    e = d(529058),
    c = d(287822),
    a = d(898369),
    s = d(188043),
    n = d(728718),
    Z = d(486234),
    b = d(787146),
    m = d(606742),
    o = d(748158),
    u = d(430671),
    h = d(157705),
    W = d(115242),
    G = ({ title: l, description: t, attemptsRemaining: d, onButtonClick: i, "data-testid": Z }) => {
        let { t: u } = (0, e.n)(),
            W = d <= 0,
            G = (0, c.l)(null);
        return (
            (0, c._)(() => {
                G.current?.focus();
            }, []),
            (0, c.v)(h.t.Root, {
                open: !0,
                dismissible: !1,
                hasBackdrop: !1,
                manageInitialFocus: !1,
                class: "IncodeErrorContent",
                children: (0, c.v)(h.t.Content, {
                    class: "IncodeErrorContentContent",
                    children: (0, c.v)(s.t, {
                        "data-testid": Z,
                        className: "IncodeErrorContentPage",
                        children: (0, c.v)("div", {
                            class: "IncodeErrorContentContainer",
                            children: [
                                (0, c.v)("div", {
                                    class: "IncodeErrorContentIconContainer",
                                    children: [
                                        W ? (0, c.v)(m.t, { size: 32 }) : (0, c.v)(o.h, { size: 32 }),
                                        (0, c.v)(a.r, { size: 16 }),
                                        (0, c.v)(n.t, {
                                            ref: G,
                                            id: "incode-modal-title",
                                            tabIndex: -1,
                                            className: "IncodeErrorContentTitle",
                                            children: l,
                                        }),
                                        (0, c.v)(a.r, { size: 12 }),
                                        (0, c.v)("p", { class: "IncodeErrorContentDescription", children: t }),
                                    ],
                                }),
                                (0, c.v)("div", {
                                    class: "IncodeErrorContentAttemptsContainer",
                                    children: [
                                        W
                                            ? null
                                            : (0, c.v)("p", {
                                                  class: "IncodeErrorContentAttemptsText",
                                                  children: u("common.attemptsRemaining", { count: d }),
                                              }),
                                        (0, c.v)(b.t, {
                                            onClick: i,
                                            children: u(W ? "common.continue" : "common.tryAgain"),
                                        }),
                                        (0, c.v)(a.r, { size: 16 }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            })
        );
    },
    p = null;
async function N() {
    return (
        p ||
        (p = d
            .e("51018")
            .then(d.bind(d, 500753))
            .then((l) => (0, i.r)(l.default, 1))
            .then((l) => l.default))
    );
}
function M({
    animationData: l,
    loop: t = !0,
    autoplay: d = !0,
    reverse: i = !1,
    style: e,
    className: a,
    onComplete: s,
    autoStop: n = !1,
    stopFramePosition: Z,
}) {
    let b = (0, c.l)(null),
        m = !i && d,
        o = (0, c.l)({ container: b.current, renderer: "svg", loop: t, autoplay: m, animationData: l });
    return (
        (0, c._)(() => {
            o.current = { container: b.current, renderer: "svg", loop: t, autoplay: m, animationData: l };
        }, [l, t, m]),
        (0, c._)(() => {
            let l, t;
            if (!b.current) return;
            let d = !0;
            return (
                N().then((e) => {
                    d &&
                        ((l = e.loadAnimation(o.current)),
                        i && (l.setDirection(-1), l.goToAndPlay(l.totalFrames - 1, !0)),
                        s && l.addEventListener("complete", s),
                        n &&
                            (t = window.setTimeout(() => {
                                let t = l;
                                if (!t) return;
                                if (!Z) return void t.pause();
                                let d = t.totalFrames;
                                if (!d || d <= 0) return void t.stop();
                                let i = "last" === Z ? Math.max(d - 1, 0) : "first" === Z ? 0 : Math.floor((d - 1) / 2);
                                t.goToAndStop(i, !0);
                            }, 5e3)));
                }),
                () => {
                    (d = !1),
                        void 0 !== t && window.clearTimeout(t),
                        l && (s && l.removeEventListener("complete", s), l.destroy());
                }
            );
        }, [s, i, n, Z]),
        (0, c.v)("div", { ref: b, style: e, className: a, "aria-hidden": "true" })
    );
}
var X = ["#007aff", "#006aff"].map(r).filter((l) => null !== l);
function r(l) {
    let t = l.replace("#", "").trim();
    3 === t.length &&
        (t = t
            .split("")
            .map((l) => l + l)
            .join(""));
    let d = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return d
        ? [Number.parseInt(d[1], 16) / 255, Number.parseInt(d[2], 16) / 255, Number.parseInt(d[3], 16) / 255]
        : null;
}
function y(l, t) {
    return 0.02 >= Math.abs(l - t);
}
function Y(l, t, d) {
    return X.some(([i, e, c]) => y(l, i) && y(t, e) && y(d, c));
}
var T = ({
        className: l = "",
        animationData: t,
        title: d,
        titleId: i,
        subtitle: e,
        onContinue: n,
        buttonText: Z,
        disclaimerText: m,
        isLoading: o,
        stopFramePosition: u = "middle",
    }) => {
        let h = (0, c.d)(
            () =>
                t
                    ? (function (l, t) {
                          let d = r(t);
                          if (!d) return l;
                          let i = JSON.parse(JSON.stringify(l));
                          return (
                              !(function l(t, d) {
                                  if (Array.isArray(t)) {
                                      for (let i of t) l(i, d);
                                      return;
                                  }
                                  if (t && "object" == typeof t)
                                      for (let i of ("fl" === t.ty || "st" === t.ty
                                          ? !(function (l, t) {
                                                let d = l.c;
                                                if (!d || "object" != typeof d) return;
                                                let i = d.k;
                                                Array.isArray(i) &&
                                                    i.length >= 3 &&
                                                    i.every((l) => "number" == typeof l) &&
                                                    Y(i[0], i[1], i[2]) &&
                                                    ((i[0] = t[0]), (i[1] = t[1]), (i[2] = t[2]));
                                            })(t, d)
                                          : ("gf" === t.ty || "gs" === t.ty) &&
                                            (function (l, t) {
                                                let d = l.g;
                                                if (!d || "object" != typeof d) return;
                                                let { p: i, k: e } = d,
                                                    c = "number" == typeof i ? i : 0,
                                                    a = e?.k;
                                                if (!(c <= 0) && Array.isArray(a))
                                                    for (let l = 0; l < c; l++) {
                                                        let d = 4 * l,
                                                            i = a[d + 1],
                                                            e = a[d + 2],
                                                            c = a[d + 3];
                                                        "number" == typeof i &&
                                                            "number" == typeof e &&
                                                            "number" == typeof c &&
                                                            Y(i, e, c) &&
                                                            ((a[d + 1] = t[0]), (a[d + 2] = t[1]), (a[d + 3] = t[2]));
                                                    }
                                            })(t, d),
                                      Object.keys(t)))
                                          l(t[i], d);
                              })(i, d),
                              i
                          );
                      })(
                          t,
                          (function (l, t = "") {
                              return "u" < typeof document
                                  ? t
                                  : getComputedStyle(document.documentElement).getPropertyValue(l).trim() || t;
                          })("--primitive-color-brand-500"),
                      )
                    : null,
            [t],
        );
        return (0, c.v)(s.t, {
            className: (0, a.n)("IncodeTutorialPage", l),
            title: d,
            titleId: i,
            subtitle: e,
            children: [
                (0, c.v)("div", {
                    class: "IncodeBaseTutorialContainer",
                    children: (0, c.v)("div", {
                        class: "IncodeBaseTutorialAnimationContainer",
                        "aria-hidden": "true",
                        children: h
                            ? (0, c.v)(M, {
                                  animationData: h,
                                  className: "IncodeBaseTutorialAnimation",
                                  autoStop: !0,
                                  stopFramePosition: u,
                              })
                            : null,
                    }),
                }),
                (0, c.v)("div", {
                    children: [
                        (0, c.v)("p", { class: "IncodeBaseTutorialDisclaimer", children: m }),
                        (0, c.v)("div", {
                            class: "IncodeBaseTutorialButtonContainer",
                            children: (0, c.v)(b.t, {
                                onClick: n,
                                class: "m-auto max-w-[420px]",
                                isLoading: o,
                                children: Z,
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    V = ({ canvas: l, mirrored: t }) => {
        let d = (0, c.l)(null);
        return (
            (0, c._)(() => {
                let i = d.current;
                if (i && l)
                    return (
                        l.classList.add("IncodeCaptureAvatarElement"),
                        l.classList.toggle("IncodeCaptureAvatarMirrored", t),
                        i.appendChild(l),
                        () => {
                            l.parentElement === i && i.removeChild(l);
                        }
                    );
            }, [l, t]),
            (0, c.v)("div", { ref: d, class: "IncodeCaptureAvatarHost", "aria-hidden": "true" })
        );
    },
    L = ({ icon: l, title: t, className: d, isLoading: i }) => {
        let e = (0, c.l)(null);
        return (
            (0, c._)(() => {
                e.current?.focus();
            }, []),
            (0, c.v)(s.t, {
                className: `IncodeCaptureStatusPage ${d ?? ""}`,
                children: [
                    (0, c.v)(a.r, { size: 40 }),
                    (0, c.v)("div", {
                        class: "IncodeCaptureStatusContainer",
                        role: i ? "status" : void 0,
                        "aria-live": i ? "polite" : void 0,
                        children: [
                            (0, c.v)(a.r, { size: 120 }),
                            l,
                            (0, c.v)(a.r, { size: 16 }),
                            (0, c.v)(n.t, { ref: e, className: "IncodeCaptureStatusTitle", tabIndex: -1, children: t }),
                        ],
                    }),
                ],
            })
        );
    },
    I = { title: "Something went wrong", description: "Please try again later" },
    z = {
        MASK_ERROR: { title: "notifications.mask", description: "notifications.maskDescription" },
        BRIGHTNESS_ERROR: { title: "notifications.brightness", description: "notifications.brightnessDescription" },
        LIVENESS_ERROR: { title: "notifications.spoof", description: "notifications.spoofDescription" },
        CLOSED_EYES_ERROR: { title: "notifications.closedEyes", description: "notifications.closedEyesDescription" },
        HEAD_COVER_ERROR: {
            title: "notifications.removeHeadwear",
            description: "notifications.removeHeadwearDescription",
        },
        LENSES_ERROR: { title: "notifications.lenses", description: "notifications.lensesDescription" },
        FACE_NOT_FOUND: { title: "notifications.faceNotFound", description: "notifications.faceNotFoundDescription" },
        MULTIPLE_FACES: { title: "notifications.multiple", description: "notifications.multipleDescription" },
        TOO_BLURRY_ERROR: I,
        TOO_DARK_ERROR: I,
        SERVER_ERROR: I,
        FACE_CROPPING_FAILED: I,
        FACE_TOO_SMALL: I,
        PROCESSING_ERROR: I,
        BAD_REQUEST: I,
        USER_IS_NOT_RECOGNIZED: {
            title: "notifications.accessDenied",
            description: "notifications.accessDeniedDescription",
        },
        SPOOF_ATTEMPT_DETECTED: { title: "notifications.spoof", description: "notifications.spoofDescription" },
        FACE_TOO_DARK: { title: "notifications.brightness", description: "notifications.brightnessDescription" },
        LENSES_DETECTED: { title: "notifications.lenses", description: "notifications.lensesDescription" },
        FACE_MASK_DETECTED: { title: "notifications.mask", description: "notifications.maskDescription" },
        CLOSED_EYES_DETECTED: { title: "notifications.closedEyes", description: "notifications.closedEyesDescription" },
        HEAD_COVER_DETECTED: {
            title: "notifications.removeHeadwear",
            description: "notifications.removeHeadwearDescription",
        },
        FACE_TOO_BLURRY: { title: "notifications.spoof", description: "notifications.spoofDescription" },
        BAD_PHOTO_QUALITY: {
            title: "notifications.lowQualityImage",
            description: "notifications.lowQualityImageDescription",
        },
        NONEXISTENT_CUSTOMER: {
            title: "notifications.nonexistentCustomer",
            description: "notifications.nonexistentCustomerDescription",
        },
        HINT_NOT_PROVIDED: {
            title: "notifications.hintNotProvided",
            description: "notifications.hintNotProvidedDescription",
        },
        SELFIE_IMAGE_LOW_QUALITY: {
            title: "notifications.selfieImageLowQuality",
            description: "notifications.selfieImageLowQualityDescription",
        },
    },
    w = [
        "LIVENESS_ERROR",
        "BRIGHTNESS_ERROR",
        "LENSES_ERROR",
        "MASK_ERROR",
        "CLOSED_EYES_ERROR",
        "HEAD_COVER_ERROR",
        "SERVER_ERROR",
        "FACE_NOT_FOUND",
        "MULTIPLE_FACES",
        "TOO_BLURRY_ERROR",
        "TOO_DARK_ERROR",
        "USER_IS_NOT_RECOGNIZED",
        "SPOOF_ATTEMPT_DETECTED",
        "FACE_TOO_DARK",
        "LENSES_DETECTED",
        "FACE_MASK_DETECTED",
        "CLOSED_EYES_DETECTED",
        "HEAD_COVER_DETECTED",
        "FACE_CROPPING_FAILED",
        "FACE_TOO_SMALL",
        "FACE_TOO_BLURRY",
        "BAD_PHOTO_QUALITY",
        "PROCESSING_ERROR",
        "BAD_REQUEST",
        "NONEXISTENT_CUSTOMER",
        "HINT_NOT_PROVIDED",
        "SELFIE_IMAGE_LOW_QUALITY",
    ],
    R = ({ error: l, attemptsRemaining: t, onTryAgain: d }) => {
        let { t: i } = (0, e.n)();
        if (!l) return null;
        let { title: a, description: s } =
                z[
                    ((l) => {
                        let t = l.toUpperCase();
                        if (t.includes("HTTP 400") || t.includes("BAD_REQUEST")) return "BAD_REQUEST";
                        if (t.includes("HTTP 500") || t.includes("SERVER_ERROR")) return "SERVER_ERROR";
                        for (let l of w) if (t.includes(l)) return l;
                        return null;
                    })(l) ?? l
                ] ?? I,
            n = i(a) ?? a,
            Z = i(t <= 0 ? "notifications.selfieCaptureFailedDescription" : s);
        return (0, c.v)(G, {
            "data-testid": "face-capture-error-modal",
            title: n,
            description: Z,
            attemptsRemaining: t,
            onButtonClick: d,
        });
    },
    S = () =>
        (0, c.v)("div", {
            class: "IncodeCameraButton",
            children: (0, c.v)("svg", {
                width: "64",
                height: "64",
                viewBox: "0 0 64 64",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: [
                    (0, c.v)("circle", { cx: "32", cy: "32", r: "32", class: "IncodeCameraButtonBackground" }),
                    (0, c.v)("path", {
                        d: "M55.5874 31.8191C55.5872 18.6938 44.9464 8.0537 31.821 8.0537C18.6958 8.05385 8.05581 18.6939 8.05566 31.8191C8.05566 44.9444 18.6958 55.5853 31.821 55.5854C44.9465 55.5854 55.5874 44.9445 55.5874 31.8191ZM57.5566 31.8191C57.5566 46.0321 46.034 57.5547 31.821 57.5547C17.6082 57.5545 6.08643 46.032 6.08643 31.8191C6.08657 17.6063 17.6083 6.08462 31.821 6.08447C46.0339 6.08447 57.5565 17.6062 57.5566 31.8191Z",
                        class: "IncodeCameraButtonRing",
                    }),
                    (0, c.v)("path", {
                        d: "M35.5186 20.6768C36.887 20.677 37.995 21.777 37.9951 23.1338V24.1045H41.4766C43.0397 24.1052 44.3074 25.3626 44.3076 26.9131V38.5459C44.3076 40.0966 43.0398 41.3535 41.4766 41.3535H21.5381C19.975 41.3533 18.7081 40.0965 18.708 38.5459V26.9131C18.7083 25.3627 19.9751 24.1057 21.5381 24.1055H25.0205V23.1338C25.0206 21.7769 26.1285 20.6768 27.4971 20.6768H35.5186ZM31.5068 26.5273C28.0604 26.5273 25.2559 29.309 25.2559 32.7285C25.2559 36.148 28.0604 38.9297 31.5068 38.9297C34.954 38.9297 37.7588 36.148 37.7588 32.7285C37.7588 29.309 34.954 26.5274 31.5068 26.5273ZM31.5068 28.6348C33.7835 28.6348 35.6357 30.4728 35.6357 32.7305C35.6356 34.9887 33.7833 36.8252 31.5068 36.8252C29.2303 36.8252 27.3791 34.9887 27.3789 32.7305C27.3789 30.4721 29.2302 28.6348 31.5068 28.6348Z",
                        class: "IncodeCameraButtonPath",
                    }),
                ],
            }),
        }),
    C = (0, c.a)(({ onClick: l, disabled: t }, d) => {
        let { t: i } = (0, e.n)();
        return (0, c.v)("div", {
            class: "IncodeSelfieManualCapture",
            "data-testid": "manual-capture-button",
            children: [
                (0, c.v)("p", {
                    id: "manual-capture-instructions",
                    class: "IncodeSelfieManualCaptureText",
                    children: i("selfiev2.manualCapture.instructions"),
                }),
                (0, c.v)(a.r, { size: 32 }),
                (0, c.v)("div", {
                    children: (0, c.v)(b.t, {
                        ref: d,
                        id: "manual-capture-button",
                        variant: "link",
                        onClick: l,
                        disabled: t,
                        class: "IncodeSelfieManualCaptureButton",
                        "aria-label": i("selfiev2.manualCapture.captureButton"),
                        children: (0, c.v)(S, {}),
                    }),
                }),
            ],
        });
    }),
    x = ({ manager: l, state: t }) => {
        let {
                captureStatus: d,
                stream: i,
                detectionStatus: m,
                attemptsRemaining: o,
                uploadError: h,
                assistedOnboarding: G,
                ageAssurance: p,
                onDeviceMode: N,
                obfuscateWithAvatar: M,
                avatarCanvas: X,
                avatarVariant: r,
            } = t,
            [y, Y] = (0, c.p)(!1),
            { t: T } = (0, e.n)(),
            I = (0, c.l)(null),
            z = M && "privacy-lens" === r && !!X;
        return ((0, c._)(() => {
            "manualCapture" === m && I.current?.focus();
        }, [m]),
        "initializing" === d)
            ? (0, c.v)(Z.t, { spinnerConfig: { subtitle: T("loadingCircle.preparingCamera") } })
            : "detecting" === d
              ? "offline" === m
                  ? (0, c.v)(s.t, { title: "No internet connection" })
                  : (0, c.v)(s.t, {
                        "data-testid": "capture-container",
                        children: [
                            (0, c.v)(n.t, {
                                className: "IncodeCaptureVisuallyHidden",
                                children: T("selfiev2.capture.title"),
                            }),
                            (0, c.v)(a.r, { size: 48 }),
                            z
                                ? (0, c.v)("p", {
                                      class: "IncodePrivacyLensBanner",
                                      children: T("selfiev2.capture.privacyLensMessage"),
                                  })
                                : null,
                            (0, c.v)("div", {
                                class: "IncodeCaptureContainer",
                                children: [
                                    (0, c.v)(W.n, {
                                        borderState: y
                                            ? "capturing"
                                            : "detecting" === m
                                              ? "idle"
                                              : "getReady" === m || "getReadyFinished" === m
                                                ? "loading"
                                                : "success" === m
                                                  ? "success"
                                                  : "error" === m
                                                    ? "error"
                                                    : "idle",
                                    }),
                                    (0, c.v)("div", {
                                        class: "IncodeCaptureFrame",
                                        children: (0, c.v)("div", {
                                            class: "IncodeCaptureVideoWrapper",
                                            "aria-hidden": "true",
                                            children: i
                                                ? (0, c.v)(c.x, {
                                                      children: [
                                                          M
                                                              ? (0, c.v)(V, { canvas: X, mirrored: !G })
                                                              : (0, c.v)(g, { stream: i, mirrored: !G }),
                                                          M && "privacy-lens" !== r
                                                              ? null
                                                              : (0, c.v)("div", {
                                                                    class: "IncodeCaptureVideo",
                                                                    children: (0, c.v)(W.r, {}),
                                                                }),
                                                      ],
                                                  })
                                                : null,
                                        }),
                                    }),
                                    (0, c.v)(a.r, { size: 32 }),
                                    m ? (0, c.v)(W.t, { detectionState: m, disabled: !!h || y }) : null,
                                    "manualCapture" !== m || N
                                        ? null
                                        : (0, c.v)(C, {
                                              ref: I,
                                              onClick: () => {
                                                  Y(!0), l.capture();
                                              },
                                              disabled: y,
                                          }),
                                ],
                            }),
                            h
                                ? (0, c.v)(R, {
                                      error: h,
                                      attemptsRemaining: o,
                                      onTryAgain: () => {
                                          l.retryCapture(), Y(!1);
                                      },
                                  })
                                : null,
                        ],
                    })
              : "capturing" === d
                ? (0, c.v)(s.t, {
                      className: "IncodeCaptureCapturingPage",
                      title: "Capturing",
                      subtitle: "Taking photo...",
                      children: (0, c.v)("div", {
                          class: "IncodeCaptureCapturingActions",
                          children: (0, c.v)(b.t, { isLoading: !0, children: "Capturing..." }),
                      }),
                  })
                : "uploading" === d
                  ? (0, c.v)(L, {
                        className: "IncodeCaptureStatusUploading",
                        isLoading: !0,
                        icon: (0, c.v)(a.t, { size: 64 }),
                        title: T(p ? "idv2.capture.processing.verifying" : "idv2.capture.processing.uploading"),
                    })
                  : "uploadError" === d
                    ? (0, c.v)(R, {
                          error: h,
                          attemptsRemaining: o,
                          onTryAgain: () => {
                              l.retryCapture(), Y(!1);
                          },
                      })
                    : "success" === d
                      ? (0, c.v)(L, { icon: (0, c.v)(u.t, { size: 64 }), title: T("idv2.capture.processing.success") })
                      : null;
    },
    g = ({ stream: l, mirrored: t }) => {
        let d = (0, c.l)(null);
        return (
            (0, c._)(() => {
                d.current && l && (d.current.srcObject = l);
            }, [l]),
            (0, c.v)("video", {
                ref: d,
                autoplay: !0,
                playsInline: !0,
                muted: !0,
                "aria-hidden": "true",
                class: t ? "IncodeCaptureVideoElement IncodeCaptureVideoMirrored" : "IncodeCaptureVideoElement",
            })
        );
    },
    D = ({ manager: l, ageAssurance: t = !1 }) => {
        let { t: i } = (0, e.n)(),
            [a, s] = (0, c.p)(!1),
            [n, Z] = (0, c.p)(null);
        (0, c._)(() => {
            d.e("82983")
                .then(d.bind(d, 984154))
                .then((l) => {
                    Z(l.default);
                });
        }, []);
        let b = async () => {
            s(!0), await l.nextStep();
        };
        return (0, c.v)(T, {
            animationData: n,
            title: i(t ? "face.tutorial.ageAssuranceTitle" : "face.tutorial.title"),
            titleId: "face-tutorial-heading",
            subtitle: i(t ? "face.tutorial.ageAssuranceSubtitle" : "face.tutorial.subtitle"),
            onContinue: b,
            buttonText: i(t ? "face.tutorial.ageAssuranceStartCapture" : "face.tutorial.startCapture"),
            disclaimerText: i("face.tutorial.autoCapture"),
            isLoading: a,
            className: "IncodeSelfieTutorial",
        });
    };
