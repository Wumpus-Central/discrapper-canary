var i,
    e,
    c = d(783285),
    a = d(768611),
    s = d(71072),
    n = d(200503),
    Z = d(628926),
    b = d(658299),
    m = d(918676),
    o = d(326144),
    u = d(264957),
    h = d(540647),
    W = d(995489),
    G = d(987683),
    p = d(100068),
    N = d(844887),
    M = d(41851);
d(118464);
var r = ({ message: l, onRetry: t }) => {
    let { t: d } = (0, c.n)(),
        i = (0, a.l)(null);
    return (
        (0, a._)(() => {
            i.current?.focus();
        }, []),
        (0, a.v)(o.t, {
            className: "IncodeTerminalErrorPage",
            "data-testid": "terminal-error-page",
            children: (0, a.v)("div", {
                class: "IncodeTerminalErrorPageBody",
                children: [
                    (0, a.v)("div", {
                        class: "IncodeTerminalErrorPageStatus",
                        children: [
                            (0, a.v)(h.t, { size: 64 }),
                            (0, a.v)("h2", {
                                ref: i,
                                class: "IncodeTerminalErrorPageTitle",
                                tabIndex: -1,
                                children: d("common.somethingWentWrong"),
                            }),
                            (0, a.v)("p", {
                                class: "IncodeTerminalErrorPageMessage",
                                children: l ?? d("common.unexpectedError"),
                            }),
                        ],
                    }),
                    (0, a.v)("div", {
                        class: "IncodeTerminalErrorPageFooter",
                        children: (0, a.v)(u.t, {
                            onClick: () => {
                                t ? t() : "u" > typeof window && window.location.reload();
                            },
                            children: d("common.tryAgain"),
                        }),
                    }),
                ],
            }),
        })
    );
};
function X(l, t, d) {
    let i,
        e,
        c,
        a = l / 360,
        s = t / 100,
        n = d / 100;
    if (0 === s) i = e = c = n;
    else {
        let l = (l, t, d) =>
                (d < 0 && (d += 1), d > 1 && (d -= 1), d < 1 / 6)
                    ? l + (t - l) * 6 * d
                    : d < 0.5
                      ? t
                      : d < 2 / 3
                        ? l + (t - l) * (2 / 3 - d) * 6
                        : l,
            t = n < 0.5 ? n * (1 + s) : n + s - n * s,
            d = 2 * n - t;
        ((i = l(d, t, a + 1 / 3)), (e = l(d, t, a)), (c = l(d, t, a - 1 / 3)));
    }
    let Z = (l) => {
        let t = Math.round(255 * l).toString(16);
        return 1 === t.length ? `0${t}` : t;
    };
    return `#${Z(i)}${Z(e)}${Z(c)}`;
}
var y = new Map(),
    Y = () =>
        Promise.resolve()
            .then(d.bind(d, 250216))
            .then((l) => l.Id),
    T = new Set(["IP_ADDRESS", "TRUST_GRAPH"]);
function V(l) {
    return "IP_ADDRESS" === l
        ? () =>
              Promise.resolve()
                  .then(d.bind(d, 100068))
                  .then((l) => l.noOpFlowModuleMachine)
        : "TRUST_GRAPH" === l
          ? () =>
                d
                    .e(383233)
                    .then(d.bind(d, 816984))
                    .then((l) => l.trustGraphMachine)
          : "REDIRECT_TO_MOBILE" === l
            ? () =>
                  Promise.all([d.e(864805), d.e(369997)])
                      .then(d.bind(d, 311836))
                      .then((l) => l.redirectToMobileMachine)
            : "PHONE" === l
              ? () =>
                    Promise.all([d.e(1879), d.e(199451)])
                        .then(d.bind(d, 680022))
                        .then((l) => l.phoneMachine)
              : "EMAIL" === l
                ? () =>
                      Promise.all([d.e(1879), d.e(470420)])
                          .then(d.bind(d, 428671))
                          .then((l) => l.emailMachine)
                : "SELFIE" === l
                  ? () =>
                        Promise.resolve()
                            .then(d.bind(d, 423649))
                            .then((l) => l.selfieMachine)
                  : "AUTHENTICATION" === l
                    ? () =>
                          d
                              .e(284452)
                              .then(d.bind(d, 956175))
                              .then((l) => l.authenticationMachine)
                    : "ID" === l || "TUTORIAL_ID" === l || "SECOND_ID" === l
                      ? () =>
                            Promise.resolve()
                                .then(d.bind(d, 251586))
                                .then((l) => l.idCaptureMachine)
                      : "ID_OCR" === l
                        ? () =>
                              Promise.all([d.e(934377), d.e(430634)])
                                  .then(d.bind(d, 965681))
                                  .then((l) => l.idOcrStateMachine)
                        : "CPF_OCR" === l
                          ? () =>
                                Promise.all([d.e(934377), d.e(567057)])
                                    .then(d.bind(d, 581736))
                                    .then((l) => l.cpfOcrMachine)
                          : "FACE_MATCH" === l
                            ? () =>
                                  d
                                      .e(122615)
                                      .then(d.bind(d, 33898))
                                      .then((l) => l.faceMatchMachine)
                            : "CURP_VALIDATION" === l
                              ? () =>
                                    d
                                        .e(863834)
                                        .then(d.bind(d, 883425))
                                        .then((l) => l.curpValidationMachine)
                              : "GOVT_VALIDATION_PROVISIONING" === l || "INE_VALIDATION" === l
                                ? () =>
                                      Promise.all([d.e(1879), d.e(469840)])
                                          .then(d.bind(d, 227219))
                                          .then((l) => l.governmentValidationMachine)
                                : "GEOLOCATION" === l
                                  ? () =>
                                        d
                                            .e(274385)
                                            .then(d.bind(d, 689960))
                                            .then((l) => l.geolocationMachine)
                                  : "EXTERNAL_VERIFICATION" === l
                                    ? () =>
                                          Promise.all([d.e(934377), d.e(921353), d.e(845780)])
                                              .then(d.bind(d, 389503))
                                              .then((l) => l.ekycMachine)
                                    : "EKYB" === l
                                      ? () =>
                                            Promise.all([d.e(921353), d.e(830086)])
                                                .then(d.bind(d, 324901))
                                                .then((l) => l.ekybMachine)
                                      : "DOCUMENT_CAPTURE" === l || "ADDRESS" === l
                                        ? () =>
                                              d
                                                  .e(405598)
                                                  .then(d.bind(d, 660717))
                                                  .then((l) => l.documentCaptureMachine)
                                        : "COMBINED_CONSENT" === l
                                          ? () =>
                                                Promise.resolve()
                                                    .then(d.bind(d, 310644))
                                                    .then((l) => l.consentMachine)
                                          : "MANDATORY_CONSENT" === l || "ML_CONSENT" === l
                                            ? () =>
                                                  d
                                                      .e(636066)
                                                      .then(d.bind(d, 424313))
                                                      .then((l) => l.mandatoryConsentMachine)
                                            : "SIGNATURE" === l
                                              ? () =>
                                                    d
                                                        .e(255772)
                                                        .then(d.bind(d, 527703))
                                                        .then((l) => l.signatureMachine)
                                              : "ANTIFRAUD" === l
                                                ? () =>
                                                      d
                                                          .e(524821)
                                                          .then(d.bind(d, 282804))
                                                          .then((l) => l.antifraudMachine)
                                                : "CUSTOM_FIELDS" === l
                                                  ? () =>
                                                        Promise.all([d.e(461478), d.e(367017)])
                                                            .then(d.bind(d, 920272))
                                                            .then((l) => l.customFieldsMachine)
                                                  : "WATCHLIST" === l
                                                    ? () =>
                                                          d
                                                              .e(425353)
                                                              .then(d.bind(d, 669360))
                                                              .then((l) => l.watchlistMachine)
                                                    : "WATCHLIST_BUSINESS" === l
                                                      ? () =>
                                                            d
                                                                .e(281972)
                                                                .then(d.bind(d, 467167))
                                                                .then((l) => l.watchlistForBusinessMachine)
                                                      : "INCODE_WATCHLIST" === l
                                                        ? () =>
                                                              d
                                                                  .e(427413)
                                                                  .then(d.bind(d, 776820))
                                                                  .then((l) => l.customWatchlistMachine)
                                                        : "AE_SIGNATURE" === l
                                                          ? () =>
                                                                Promise.all([
                                                                    d.e(864805),
                                                                    d.e(253234),
                                                                    d.e(228368),
                                                                    d.e(810820),
                                                                ])
                                                                    .then(d.bind(d, 950767))
                                                                    .then((l) => l.aeSignatureMachine)
                                                          : "QE_SIGNATURE" === l
                                                            ? () =>
                                                                  Promise.all([
                                                                      d.e(864805),
                                                                      d.e(253234),
                                                                      d.e(228368),
                                                                      d.e(502111),
                                                                  ])
                                                                      .then(d.bind(d, 400546))
                                                                      .then((l) => l.qeSignatureMachine)
                                                            : "CROSS_DOCUMENT_DATA_MATCH" === l
                                                              ? () =>
                                                                    d
                                                                        .e(909771)
                                                                        .then(d.bind(d, 136966))
                                                                        .then((l) => l.crossDocumentDataMatchMachine)
                                                              : "DYNAMIC_FORMS" === l
                                                                ? () =>
                                                                      Promise.all([d.e(461478), d.e(752804)])
                                                                          .then(d.bind(d, 170831))
                                                                          .then((l) => l.dynamicFormsMachine)
                                                                : "CERTIFICATE_ISSUANCE" === l
                                                                  ? () =>
                                                                        Promise.all([
                                                                            d.e(864805),
                                                                            d.e(253234),
                                                                            d.e(345511),
                                                                        ])
                                                                            .then(d.bind(d, 935450))
                                                                            .then((l) => l.certificateIssuanceMachine)
                                                                  : "FIELD_COMPARISON" === l
                                                                    ? () =>
                                                                          d
                                                                              .e(889972)
                                                                              .then(d.bind(d, 893151))
                                                                              .then((l) => l.fieldComparisonMachine)
                                                                    : "FISCAL_QR" === l
                                                                      ? () =>
                                                                            d
                                                                                .e(22678)
                                                                                .then(d.bind(d, 348085))
                                                                                .then((l) => l.fiscalQrMachine)
                                                                      : "VIDEO_ONBOARDING" === l
                                                                        ? () =>
                                                                              d
                                                                                  .e(37680)
                                                                                  .then(d.bind(d, 756147))
                                                                                  .then(
                                                                                      (l) =>
                                                                                          l.videoSelfieFlowModuleMachine,
                                                                                  )
                                                                        : void 0;
}
var L = {
    REDIRECT_TO_MOBILE: () =>
        Promise.all([d.e(864805), d.e(369997), d.e(884713), d.e(27005)])
            .then(d.bind(d, 760396))
            .then((l) => l.RedirectToMobile),
    PHONE: () =>
        Promise.all([d.e(1879), d.e(199451), d.e(6233)])
            .then(d.bind(d, 527827))
            .then((l) => l.Phone),
    EMAIL: () =>
        Promise.all([d.e(1879), d.e(470420), d.e(405136), d.e(762165)])
            .then(d.bind(d, 501268))
            .then((l) => l.Email),
    SELFIE: () =>
        Promise.resolve()
            .then(d.bind(d, 11414))
            .then((l) => l.Selfie),
    AUTHENTICATION: () =>
        Promise.all([d.e(284452), d.e(42215)])
            .then(d.bind(d, 751386))
            .then((l) => l.Authentication),
    ID: Y,
    ID_CAPTURE: Y,
    TUTORIAL_ID: Y,
    SECOND_ID: Y,
    FACE_MATCH: () =>
        Promise.all([d.e(122615), d.e(884713), d.e(88228)])
            .then(d.bind(d, 456079))
            .then((l) => l.FaceMatch),
    CURP_VALIDATION: () =>
        Promise.all([d.e(863834), d.e(659337)])
            .then(d.bind(d, 462704))
            .then((l) => l.CurpValidation),
    GOVT_VALIDATION_PROVISIONING: () =>
        Promise.all([d.e(1879), d.e(469840), d.e(278897)])
            .then(d.bind(d, 844296))
            .then((l) => l.GovernmentValidation),
    INE_VALIDATION: () =>
        Promise.all([d.e(1879), d.e(469840), d.e(278897)])
            .then(d.bind(d, 844296))
            .then((l) => l.GovernmentValidation),
    GEOLOCATION: () =>
        Promise.all([d.e(274385), d.e(388545)])
            .then(d.bind(d, 420568))
            .then((l) => l.Geolocation),
    EXTERNAL_VERIFICATION: () =>
        Promise.all([d.e(934377), d.e(921353), d.e(845780), d.e(612916), d.e(206270)])
            .then(d.bind(d, 752589))
            .then((l) => l.EkycModule),
    EKYB: () =>
        Promise.all([d.e(921353), d.e(830086), d.e(612916), d.e(637235), d.e(107281)])
            .then(d.bind(d, 526888))
            .then((l) => l.EkybModule),
    DOCUMENT_CAPTURE: () =>
        Promise.all([d.e(405598), d.e(320782)])
            .then(d.bind(d, 488285))
            .then((l) => l.DocumentCapture),
    ADDRESS: () =>
        Promise.all([d.e(405598), d.e(320782)])
            .then(d.bind(d, 488285))
            .then((l) => l.DocumentCapture),
    COMBINED_CONSENT: () =>
        Promise.resolve()
            .then(d.bind(d, 66580))
            .then((l) => l.Consent),
    MANDATORY_CONSENT: () =>
        Promise.all([d.e(636066), d.e(457732)])
            .then(d.bind(d, 19503))
            .then((l) => l.MandatoryConsent),
    ML_CONSENT: () =>
        Promise.all([d.e(636066), d.e(457732)])
            .then(d.bind(d, 19503))
            .then((l) => l.MandatoryConsent),
    SIGNATURE: () =>
        Promise.all([d.e(255772), d.e(401177)])
            .then(d.bind(d, 428544))
            .then((l) => l.Signature),
    ID_OCR: () =>
        Promise.all([d.e(934377), d.e(430634), d.e(336976)])
            .then(d.bind(d, 180627))
            .then((l) => l.IdOcr),
    CPF_OCR: () =>
        Promise.all([d.e(934377), d.e(567057), d.e(338709)])
            .then(d.bind(d, 938804))
            .then((l) => l.CpfOcr),
    ANTIFRAUD: () =>
        Promise.all([d.e(524821), d.e(631761)])
            .then(d.bind(d, 657e3))
            .then((l) => l.Antifraud),
    CUSTOM_FIELDS: () =>
        Promise.all([d.e(169188), d.e(461478), d.e(367017), d.e(260835)])
            .then(d.bind(d, 453806))
            .then((l) => l.CustomFields),
    WATCHLIST: () =>
        Promise.all([d.e(169188), d.e(425353), d.e(548845)])
            .then(d.bind(d, 81596))
            .then((l) => l.Watchlist),
    WATCHLIST_BUSINESS: () =>
        Promise.all([d.e(169188), d.e(281972), d.e(637235), d.e(487729)])
            .then(d.bind(d, 869320))
            .then((l) => l.WatchlistForBusiness),
    INCODE_WATCHLIST: () =>
        Promise.all([d.e(169188), d.e(427413), d.e(86495)])
            .then(d.bind(d, 174434))
            .then((l) => l.CustomWatchlist),
    AE_SIGNATURE: () =>
        Promise.all([d.e(864805), d.e(253234), d.e(228368), d.e(408388), d.e(458905)])
            .then(d.bind(d, 86144))
            .then((l) => l.AeSignature),
    QE_SIGNATURE: () =>
        Promise.all([d.e(864805), d.e(253234), d.e(228368), d.e(408388), d.e(595897)])
            .then(d.bind(d, 503520))
            .then((l) => l.QeSignature),
    CROSS_DOCUMENT_DATA_MATCH: () =>
        Promise.all([d.e(909771), d.e(804633)])
            .then(d.bind(d, 814784))
            .then((l) => l.CrossDocumentDataMatch),
    DYNAMIC_FORMS: () =>
        Promise.all([d.e(934377), d.e(461478), d.e(567057), d.e(752804), d.e(405136), d.e(442563)])
            .then(d.bind(d, 582222))
            .then((l) => l.DynamicForms),
    CERTIFICATE_ISSUANCE: () =>
        Promise.all([d.e(864805), d.e(253234), d.e(345511), d.e(426209)])
            .then(d.bind(d, 103480))
            .then((l) => l.CertificateIssuance),
    FIELD_COMPARISON: () =>
        Promise.all([d.e(889972), d.e(469673)])
            .then(d.bind(d, 94800))
            .then((l) => l.FieldComparison),
    FISCAL_QR: () =>
        Promise.all([d.e(22678), d.e(737557)])
            .then(d.bind(d, 8500))
            .then((l) => l.FiscalQr),
    VIDEO_ONBOARDING: () =>
        Promise.all([d.e(37680), d.e(899795)])
            .then(d.bind(d, 266334))
            .then((l) => l.VideoSelfie),
};
function I() {
    i ||
        (i = d
            .e(248086)
            .then(d.bind(d, 429429))
            .then((l) => l.HomeScreen)).catch(() => {
            i = void 0;
        });
}
var z = ({ moduleKey: l, onNext: t }) =>
    (0, a.v)("section", {
        class: "IncodeUnsupportedModule",
        "aria-live": "polite",
        children: (0, a.v)("div", {
            class: "IncodeUnsupportedModuleContent",
            children: [
                (0, a.v)("h2", { class: "IncodeUnsupportedModuleTitle", children: "Module not available" }),
                (0, a.v)("p", {
                    class: "IncodeUnsupportedModuleMessage",
                    children: ['The "', l, '" module is not yet supported in this version.'],
                }),
                (0, a.v)(u.t, {
                    onClick: t,
                    class: "IncodeUnsupportedModuleButton",
                    "data-testid": "unsupported-module-next-button",
                    children: "Next",
                }),
            ],
        }),
    });
function w(l) {
    if ("object" == typeof l && null !== l && "status" in l && "number" == typeof l.status) return l.status;
}
var R = () => null,
    S = () => Promise.resolve(R),
    C = new WeakMap(),
    x = new WeakMap();
function g(l) {
    if (l) return C.get(l);
}
function D(l) {
    if (!l) return { status: "idle" };
    let t = g(l);
    return t ? { status: "loaded", Component: t } : { status: "loading" };
}
function j(l) {
    let { loader: t, onLoading: d, onLoaded: i, onError: e } = l,
        [c, s] = (0, a.p)(() => D(t)),
        n = (0, a.l)(t),
        Z = (0, a.l)(d),
        b = (0, a.l)(i),
        m = (0, a.l)(e);
    return (
        (0, a._)(() => {
            ((Z.current = d), (b.current = i), (m.current = e));
        }, [d, i, e]),
        n.current !== t && ((n.current = t), s(D(t))),
        (0, a._)(() => {
            if (!t) return;
            if (g(t)) return void b.current?.();
            Z.current?.();
            let l = !1;
            return (
                (function (l) {
                    let t = C.get(l);
                    if (t) return Promise.resolve(t);
                    let d = x.get(l);
                    if (d) return d;
                    let i = l()
                        .then((t) => (C.set(l, t), x.delete(l), t))
                        .catch((t) => {
                            throw (x.delete(l), t);
                        });
                    return (x.set(l, i), i);
                })(t)
                    .then((t) => {
                        l || (s({ status: "loaded", Component: t }), b.current?.());
                    })
                    .catch((t) => {
                        if (!l) {
                            let l = t instanceof Error ? t.message : "Failed to load component";
                            (s({ status: "error", error: l }), m.current?.(l));
                        }
                    }),
                () => {
                    l = !0;
                }
            );
        }, [t]),
        c
    );
}
function U(l, t) {
    let [d, i] = (0, a.p)(!1);
    return (
        (0, a._)(() => {
            if (!1 === l) return void i(!1);
            let d = window.setTimeout(() => {
                i(!0);
            }, t);
            return () => {
                window.clearTimeout(d);
            };
        }, [l, t]),
        d
    );
}
function F(l) {
    return "string" == typeof l.token;
}
var O = new Map();
function J(l) {
    return O.get(l) ?? null;
}
function k(l) {
    let t = J(l);
    return (t && O.delete(l), t);
}
function E(l) {
    l.getState().presentation.shouldPrefetchHome && I();
}
function v() {
    "desktop" === (0, G.l3)() &&
        (function () {
            if (e) return;
            let l = L.REDIRECT_TO_MOBILE,
                t = V("REDIRECT_TO_MOBILE"),
                d = [];
            (l && d.push(l()),
                t && d.push(t()),
                (e = Promise.all(d)).catch(() => {
                    e = void 0;
                }));
        })();
}
var K = (0, a.c)(() =>
        d
            .e(248086)
            .then(d.bind(d, 429429))
            .then((l) => ({ default: l.HomeScreen })),
    ),
    H = ({ config: l, onFinish: t, onError: d }) => {
        var i, e;
        let Z,
            { i18n: m } = (0, c.n)(),
            o = (function (l) {
                let { lang: t, disableDashboardTheme: d, enableHome: i, onError: e, useCPF: n } = l,
                    Z = F(l) ? l.token : void 0,
                    b = (0, a.l)(null),
                    [m, o] = (0, a.p)(() => {
                        let t = Z ? J(Z) : null;
                        if (Z && t?.status === "ready") {
                            let l = k(Z);
                            if (l)
                                return (
                                    (b.current = l.flowManager),
                                    E(l.flowManager),
                                    v(),
                                    l.uiConfig && (0, s.t)(l.uiConfig),
                                    { status: "ready", flowManager: l.flowManager }
                                );
                        }
                        let d = (function (l = {}) {
                            let t = {},
                                d = l.isDesktop ?? "desktop" === (0, G.l3)(),
                                { enableHome: i, ...e } = l,
                                c = { endScreenTitle: null, endScreenText: null };
                            return Object.assign(
                                (0, p.createOrchestratedFlowManager)({
                                    enableHome: i,
                                    getFlow: async (l) => {
                                        let i = await (0, p.getFlow)(l, { ...e, isDesktop: d }),
                                            c = (function (l) {
                                                let t = {};
                                                for (let d of l) {
                                                    let l = d.key;
                                                    if (t[l]) continue;
                                                    let i = V(l);
                                                    i && (t[l] = i);
                                                }
                                                return t;
                                            })(i.flowModules ?? []);
                                        for (let l of Object.keys(t)) delete t[l];
                                        return (Object.assign(t, c), i);
                                    },
                                    getFinishStatus: async (l, t) => ({ ...(await (0, N.uR)(l, t)), ...c }),
                                    lazyModules: t,
                                }),
                                {
                                    setEndScreenTexts(l, t) {
                                        c = { endScreenTitle: l, endScreenText: t };
                                    },
                                },
                            );
                        })({ authHint: l.authHint, lang: l.lang, enableHome: l.enableHome, useCPF: l.useCPF });
                        return ((b.current = d), E(d), v(), t?.status === "error")
                            ? { status: "error", error: t.error ?? "Preload failed", flowManager: d }
                            : { status: "initializing", flowManager: d };
                    }),
                    u = (0, a.l)(!1);
                return (
                    (0, a._)(() => {
                        if ("initializing" !== m.status) return;
                        let i = Z ? J(Z) : null;
                        if (Z && i?.status === "loading")
                            return void i.readyPromise
                                .then(() => {
                                    let l = k(Z);
                                    l &&
                                        ((b.current = l.flowManager),
                                        E(l.flowManager),
                                        v(),
                                        l.uiConfig && (0, s.t)(l.uiConfig),
                                        o({ status: "ready", flowManager: l.flowManager }));
                                })
                                .catch((l) => {
                                    let t = l instanceof Error ? l.message : "Preload failed",
                                        d = w(l);
                                    (o({ status: "error", error: t, errorCode: d, flowManager: m.flowManager }),
                                        e?.(t, d));
                                });
                        if (u.current) return;
                        u.current = !0;
                        let a = new AbortController(),
                            { signal: n } = a;
                        return (
                            (async () => {
                                try {
                                    let i;
                                    if (F(l))
                                        ((i = l.token),
                                            l.urlUuid &&
                                                (await (0, N.jq)(
                                                    {
                                                        urlUuid: l.urlUuid,
                                                        onboardingId: null,
                                                        onRefreshed: l.onUrlUuidRefreshed,
                                                    },
                                                    n,
                                                )));
                                    else if (
                                        "string" == typeof l.configurationId &&
                                        ("string" == typeof l.apiKey || "string" == typeof l.clientId)
                                    ) {
                                        let t = await (async function (l, t) {
                                            return (0, N.DU)(
                                                await (async function (l) {
                                                    if ("string" == typeof l.apiKey) return l.apiKey;
                                                    if ("string" == typeof l.clientId)
                                                        return (async function (l) {
                                                            let t = globalThis.crypto?.subtle;
                                                            if (!t)
                                                                throw Error(
                                                                    "SHA-1 is not available in this environment",
                                                                );
                                                            return Array.from(
                                                                new Uint8Array(
                                                                    await t.digest(
                                                                        "SHA-1",
                                                                        new TextEncoder().encode(l),
                                                                    ),
                                                                ),
                                                                (l) => l.toString(16).padStart(2, "0"),
                                                            ).join("");
                                                        })(l.clientId);
                                                    throw Error("Self-loading mode requires apiKey or clientId");
                                                })(l),
                                                {
                                                    configurationId: l.configurationId,
                                                    externalId: l.externalId,
                                                    externalCustomerId: l.externalCustomerId,
                                                    language: l.lang,
                                                    customFields: l.customFields,
                                                    uuid: l.uuid,
                                                    urlUuid: l.urlUuid,
                                                    interviewId: l.interviewId,
                                                    loginHint: l.loginHint,
                                                    onUrlUuidRefreshed: l.onUrlUuidRefreshed,
                                                },
                                                t,
                                            );
                                        })(l, n);
                                        ((i = t.token),
                                            m.flowManager.setEndScreenTexts(
                                                t.endScreenTitle ?? null,
                                                t.endScreenText ?? null,
                                            ));
                                    } else
                                        throw Error("Flow requires token, or configurationId with apiKey or clientId");
                                    await (async function (l) {
                                        let { token: t, lang: d, flowManager: i } = l;
                                        (await (async function (l) {
                                            (await (0, N.T7)({ token: l.token }),
                                                (0, c.r)() || (0, c.i)((0, c.a)(l.lang ? { lang: l.lang } : void 0)));
                                        })({ token: t, lang: d }),
                                            i.load());
                                    })({ token: i, lang: t, flowManager: m.flowManager });
                                    let e = d
                                            ? Promise.resolve()
                                            : (async function () {
                                                  try {
                                                      let l = await (async function () {
                                                              let l = await (async function () {
                                                                  let l,
                                                                      t = await (async function () {
                                                                          return (
                                                                              await M.t.get("/omni/asset/fetch-all")
                                                                          ).data;
                                                                      })();
                                                                  if (!t.theme)
                                                                      throw Error(
                                                                          "Theme URL not found in assets response",
                                                                      );
                                                                  let d = t.theme;
                                                                  if (
                                                                      d.startsWith("http://") ||
                                                                      d.startsWith("https://")
                                                                  ) {
                                                                      let t = await fetch(d);
                                                                      if (!t.ok)
                                                                          throw Error(
                                                                              `Failed to fetch theme: ${t.statusText}`,
                                                                          );
                                                                      l = await t.json();
                                                                  } else l = (await M.t.get(d)).data;
                                                                  let i =
                                                                          t["logo.png"] ||
                                                                          t["logo.svg"] ||
                                                                          t["logo.jpg"] ||
                                                                          t["logo.jpeg"] ||
                                                                          t["logo.webp"] ||
                                                                          l.logo,
                                                                      e = i;
                                                                  return (
                                                                      i &&
                                                                          (e = await (async function (l) {
                                                                              if (l.startsWith("data:")) return l;
                                                                              let t = y.get(l);
                                                                              if (t) return t;
                                                                              let d = await (await fetch(l)).blob(),
                                                                                  i = await new Promise((l, t) => {
                                                                                      let i = new FileReader();
                                                                                      ((i.onloadend = () =>
                                                                                          l(i.result)),
                                                                                          (i.onerror = t),
                                                                                          i.readAsDataURL(d));
                                                                                  });
                                                                              return (y.set(l, i), i);
                                                                          })(i)),
                                                                      { ...l, logo: e }
                                                                  );
                                                              })();
                                                              return (
                                                                  l.main &&
                                                                      (function (l, t) {
                                                                          if ("u" < typeof document) return;
                                                                          let d = (function (l) {
                                                                                  let t = (function (l) {
                                                                                      let t = l.replace("#", "");
                                                                                      3 === t.length &&
                                                                                          (t = t
                                                                                              .split("")
                                                                                              .map((l) => l + l)
                                                                                              .join(""));
                                                                                      let d =
                                                                                          /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                                                                                              t,
                                                                                          );
                                                                                      if (!d) return null;
                                                                                      let i =
                                                                                              Number.parseInt(
                                                                                                  d[1],
                                                                                                  16,
                                                                                              ) / 255,
                                                                                          e =
                                                                                              Number.parseInt(
                                                                                                  d[2],
                                                                                                  16,
                                                                                              ) / 255,
                                                                                          c =
                                                                                              Number.parseInt(
                                                                                                  d[3],
                                                                                                  16,
                                                                                              ) / 255,
                                                                                          a = Math.max(i, e, c),
                                                                                          s = Math.min(i, e, c),
                                                                                          n = 0,
                                                                                          Z = 0,
                                                                                          b = (a + s) / 2;
                                                                                      if (a !== s) {
                                                                                          let l = a - s;
                                                                                          switch (
                                                                                              ((Z =
                                                                                                  b > 0.5
                                                                                                      ? l / (2 - a - s)
                                                                                                      : l / (a + s)),
                                                                                              a)
                                                                                          ) {
                                                                                              case i:
                                                                                                  n =
                                                                                                      ((e - c) / l +
                                                                                                          6 * (e < c)) /
                                                                                                      6;
                                                                                                  break;
                                                                                              case e:
                                                                                                  n =
                                                                                                      ((c - i) / l +
                                                                                                          2) /
                                                                                                      6;
                                                                                                  break;
                                                                                              case c:
                                                                                                  n =
                                                                                                      ((i - e) / l +
                                                                                                          4) /
                                                                                                      6;
                                                                                          }
                                                                                      }
                                                                                      return {
                                                                                          h: 360 * n,
                                                                                          s: 100 * Z,
                                                                                          l: 100 * b,
                                                                                      };
                                                                                  })(l);
                                                                                  if (!t)
                                                                                      throw Error(
                                                                                          `Invalid color format: ${l}`,
                                                                                      );
                                                                                  return {
                                                                                      50: X(t.h, t.s, 95),
                                                                                      200: X(t.h, t.s, 80),
                                                                                      300: X(t.h, t.s, 65),
                                                                                      400: X(
                                                                                          t.h,
                                                                                          t.s,
                                                                                          Math.min(100, t.l + 10),
                                                                                      ),
                                                                                      500: l,
                                                                                      600: X(
                                                                                          t.h,
                                                                                          t.s,
                                                                                          Math.max(0, t.l - 10),
                                                                                      ),
                                                                                      900: X(t.h, t.s, 20),
                                                                                  };
                                                                              })(l),
                                                                              i =
                                                                                  document.getElementById(
                                                                                      "incode-theme",
                                                                                  );
                                                                          i ||
                                                                              (((i =
                                                                                  document.createElement("style")).id =
                                                                                  "incode-theme"),
                                                                              document.head.appendChild(i));
                                                                          let e = `
    :root,
    :host {
      --primitive-color-brand-50: ${d["50"]};
      --primitive-color-brand-200: ${d["200"]};
      --primitive-color-brand-300: ${d["300"]};
      --primitive-color-brand-400: ${d["400"]};
      --primitive-color-brand-500: ${d["500"]};
      --primitive-color-brand-600: ${d["600"]};
      --primitive-color-brand-900: ${d["900"]};
      --button-primary-text-default: ${t || "#ffffff"};
    }
  `;
                                                                          i.textContent = e;
                                                                      })(l.main, l.buttonColor),
                                                                  l
                                                              );
                                                          })(),
                                                          t = {
                                                              logoSrc: l.logo,
                                                              subtitle: l.subtitle,
                                                              hideFooterBranding: l.hideFooterBranding,
                                                          };
                                                      return ((0, s.t)(t), { theme: l, uiConfig: t });
                                                  } catch {
                                                      return {};
                                                  }
                                              })().then((l) => {
                                                  l.uiConfig && (0, s.t)(l.uiConfig);
                                              }),
                                        a = m.flowManager.waitForReady();
                                    (await Promise.all([a, e]), o({ status: "ready", flowManager: m.flowManager }));
                                } catch (d) {
                                    if (n.aborted) return;
                                    let l = d instanceof Error ? d.message : "Failed to initialize SDK",
                                        t = w(d);
                                    (o({ status: "error", error: l, errorCode: t, flowManager: m.flowManager }),
                                        e?.(l, t));
                                }
                            })(),
                            () => a.abort()
                        );
                    }, [Z, t, d, i, n, e, l, m]),
                    m
                );
            })((0, a.d)(() => ({ ...l, onError: d }), [l, d])),
            [u, h] = (0, n.u)(() => o.flowManager, { autoLoad: !1 }),
            Y = u.presentation.lazyModuleKey,
            R = "ready" === u.status ? u.currentStep : void 0,
            C = (function (l) {
                let {
                        moduleKey: t,
                        modules: d,
                        headlessModuleKeys: i,
                        onModuleLoading: e,
                        onModuleLoaded: c,
                        onError: s,
                    } = l,
                    [n, Z] = (0, a.p)(void 0),
                    b = (function (l, t, d) {
                        if (l) return t[l] ?? (d?.has(l) ? S : void 0);
                    })(t, d, i),
                    m = j({
                        loader: b,
                        onLoading: t ? () => e?.(t) : void 0,
                        onLoaded: t ? () => c?.(t) : void 0,
                        onError: t ? (l) => s?.(`Failed to load ${t}: ${l}`) : void 0,
                    });
                return ((0, a._)(() => {
                    t ? (b ? Z(void 0) : Z(t)) : Z(void 0);
                }, [b, t]),
                t)
                    ? n
                        ? { status: "unsupported", moduleKey: n }
                        : "idle" === m.status || "loading" === m.status
                          ? { status: "loading", moduleKey: t }
                          : "error" === m.status
                            ? { status: "error", moduleKey: t, error: m.error }
                            : { status: "loaded", moduleKey: t, Component: m.Component }
                    : { status: "idle" };
            })({
                moduleKey: Y,
                modules: L,
                onModuleLoading: l.onModuleLoading,
                onModuleLoaded: l.onModuleLoaded,
                onError: d,
            });
        !(function (l) {
            let { moduleKey: t, modules: d } = l,
                i = t ? d[t] : void 0,
                e = j({ loader: i });
            null != i && e.status;
        })({ moduleKey: "ready" === u.status && u.homeScreen.visible ? R : void 0, modules: L });
        let x = "loaded" === C.status,
            g =
                !0 === l.enableHome &&
                "ready" === u.status &&
                !0 !== u.flow.disableLaunchScreen &&
                0 === u.currentStepIndex &&
                !1 === u.homeScreen.visible &&
                "loading" === C.status,
            D = U(!0 === u.presentation.isAwaitingReady, 150),
            O = U("ready" === u.status && ("idle" === C.status || "loading" === C.status || "error" === C.status), 150);
        ((i = u?.status === "ready" ? u.steps : []),
            (e = u?.status === "ready" ? u.currentStepIndex : -1),
            (Z = (0, a.l)(new Set())),
            (0, a._)(() => {
                if (x && e < i.length - 1) {
                    let t = i[e + 1];
                    if (t && !Z.current.has(t)) {
                        var l;
                        Z.current.add(t);
                        let d = L[t];
                        d &&
                            ((l = () => {
                                d().catch(() => {
                                    Z.current.delete(t);
                                });
                            }),
                            "u" > typeof requestIdleCallback
                                ? requestIdleCallback(() => {
                                      l();
                                  })
                                : setTimeout(l, 0));
                    }
                }
            }, [i, e, L, x]),
            (0, a._)(() => {
                if (l.onFlowEvent) return h.subscribeFlowEvent(l.onFlowEvent);
            }, [h, l.onFlowEvent]),
            (0, a._)(() => {
                u.presentation.shouldPrefetchHome && I();
            }, [u.presentation.shouldPrefetchHome]),
            (0, a._)(() => {
                !(0, c.o)() && l.lang && m.language !== l.lang && m.changeLanguage(l.lang);
            }, [l.lang, m]),
            (0, a._)(() => {
                if (u?.status !== "ready" || "REDIRECT_TO_MOBILE" === u.currentStep) return;
                let t = (0, p.getRequiredWasmPipelines)(u.flow);
                t.length > 0 &&
                    (l.onWasmWarmup?.(t),
                    (function (l, t) {
                        if ("REDIRECT_TO_MOBILE" === l.currentStep) return;
                        let d = (0, p.getRequiredWasmPipelines)(l.flow);
                        if (d.length > 0) {
                            let l = (0, W.Dz)({ ...(t ?? {}), pipelines: d }),
                                i = { ...l, pipelines: l.pipelines ? [...l.pipelines] : void 0 };
                            ((0, W.hA)(i),
                                (0, W.ZU)(l)
                                    .then(() => (0, W.fu)(i))
                                    .then(() => (0, W.Ri)(i))
                                    .catch((l) => {
                                        console.error("WASM warmup failed:", l);
                                    }));
                        }
                    })(u, l.wasmConfig));
            }, [u, l]));
        let H = (0, a.l)(!1);
        ((0, a._)(() => {
            if (!H.current) {
                if (u?.status === "finished") {
                    H.current = !0;
                    let l = u.finishStatus;
                    queueMicrotask(() => t(l));
                    return;
                }
                if (u?.status === "error" && d) {
                    H.current = !0;
                    let { error: l, errorCode: t, moduleErrorCode: i } = u;
                    queueMicrotask(() => d(l, t, i));
                }
            }
        }, [u?.status, t, d, u]),
            (0, a._)(() => {
                u?.status === "ready" &&
                    "ID" === u.currentStep &&
                    u.steps.includes("TUTORIAL_ID") &&
                    h.completeModule();
            }, [u, h]));
        let Q = !(l.spinnerConfig?.title || l.spinnerConfig?.subtitle);
        if ("error" === o.status)
            return (0, a.v)("div", { class: "IncodeFlow", children: (0, a.v)(r, { message: o.error }) });
        if (u.homeScreen.visible || g)
            return (0, a.v)("div", {
                class: "IncodeFlow",
                children: (0, a.v)(a.o, {
                    fallback: null,
                    children: (0, a.v)(K, {
                        isContinueLoading: u.homeScreen.isContinueLoading || g,
                        onContinue: () => h.continueFromHome(),
                    }),
                }),
            });
        if ("initializing" === o.status)
            return (0, a.v)("div", {
                class: "IncodeFlow",
                children: (0, a.v)(b.t, { spinnerConfig: l.spinnerConfig, hideText: Q }),
            });
        if (u.presentation.isAwaitingReady)
            return D
                ? (0, a.v)("div", {
                      class: "IncodeFlow",
                      children: (0, a.v)(b.t, { spinnerConfig: l.spinnerConfig, hideText: Q }),
                  })
                : (0, a.v)("div", { class: "IncodeFlow" });
        if ("error" === u.status)
            return (0, a.v)("div", { class: "IncodeFlow", children: (0, a.v)(r, { message: u.error }) });
        if ("completing" === u.status) return (0, a.v)("div", { class: "IncodeFlow", children: (0, a.v)(b.t, {}) });
        if ("finished" === u.status) return null;
        if (u?.status === "ready") {
            let { currentStep: t, config: i, flow: e } = u,
                { flowId: c } = e;
            if (!t || !i)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(b.t, { spinnerConfig: l.spinnerConfig, hideText: Q }),
                });
            if (T.has(t)) return (0, a.v)("div", { class: "IncodeFlow" });
            if ("unsupported" === C.status)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(z, { moduleKey: t, onNext: () => h.completeModule() }),
                });
            if ("idle" === C.status || "loading" === C.status || "error" === C.status)
                return O
                    ? (0, a.v)("div", {
                          class: "IncodeFlow",
                          children: (0, a.v)(b.t, { spinnerConfig: l.spinnerConfig, hideText: Q }),
                      })
                    : (0, a.v)("div", { class: "IncodeFlow" });
            let { Component: s } = C;
            if ("REDIRECT_TO_MOBILE" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        { config: i, onFinish: () => h.finishFlow(), onContinue: () => h.completeModule(), onError: d },
                        `redirect-to-mobile-${u.currentStepIndex}`,
                    ),
                });
            if ("SELFIE" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Selfie verification error");
                            },
                        },
                        `selfie-${u.currentStepIndex}`,
                    ),
                });
            if ("VIDEO_ONBOARDING" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Video selfie error");
                            },
                        },
                        `video-onboarding-${u.currentStepIndex}`,
                    ),
                });
            if ("AUTHENTICATION" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: { ...i, authHint: l.authHint },
                            onFinish: () => h.completeModule(),
                            onError: (l, t, d) => h.errorModule(l ?? "Authentication error", d),
                        },
                        `authentication-${u.currentStepIndex}`,
                    ),
                });
            if ("PHONE" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Phone verification error");
                            },
                        },
                        `phone-${u.currentStepIndex}`,
                    ),
                });
            if ("EMAIL" === t)
                return i && "boolean" == typeof i.otpVerification && "number" == typeof i.otpExpirationInMinutes
                    ? (0, a.v)("div", {
                          class: "IncodeFlow",
                          children: (0, a.v)(
                              s,
                              {
                                  config: i,
                                  onFinish: () => h.completeModule(),
                                  onError: (l) => {
                                      d?.(l ?? "Email verification error");
                                  },
                              },
                              `email-${u.currentStepIndex}`,
                          ),
                      })
                    : (0, a.v)("div", {
                          class: "IncodeFlow",
                          children: (0, a.v)("div", { children: "Error: Invalid email configuration" }),
                      });
            if ("ID" === t || "SECOND_ID" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: "SECOND_ID" === t ? { ...i, isSecondId: !0 } : i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "ID capture error");
                            },
                        },
                        `id-${u.currentStepIndex}`,
                    ),
                });
            if ("ID_OCR" === t) {
                let l = u.steps.includes("SECOND_ID");
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: { ...i, secondId: i.secondId ?? l, flowId: c },
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "ID OCR error");
                            },
                        },
                        `id-ocr-${u.currentStepIndex}`,
                    ),
                });
            }
            if ("CPF_OCR" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "CPF OCR error");
                            },
                        },
                        `cpf-ocr-${u.currentStepIndex}`,
                    ),
                });
            if ("FACE_MATCH" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Face match error");
                            },
                        },
                        `face-match-${u.currentStepIndex}`,
                    ),
                });
            if ("CURP_VALIDATION" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "CURP validation error");
                            },
                        },
                        `curp-validation-${u.currentStepIndex}`,
                    ),
                });
            if ("GOVT_VALIDATION_PROVISIONING" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Government validation error");
                            },
                        },
                        `govt-validation-${u.currentStepIndex}`,
                    ),
                });
            if ("INE_VALIDATION" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "INE validation error");
                            },
                        },
                        `ine-validation-${u.currentStepIndex}`,
                    ),
                });
            if ("GEOLOCATION" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Geolocation error");
                            },
                        },
                        `geolocation-${u.currentStepIndex}`,
                    ),
                });
            if ("EXTERNAL_VERIFICATION" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: { flowId: u.flow.flowId },
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "External verification error");
                            },
                        },
                        `ekyc-${u.currentStepIndex}`,
                    ),
                });
            if ("DOCUMENT_CAPTURE" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Document capture error");
                            },
                        },
                        `document-capture-${u.currentStepIndex}`,
                    ),
                });
            if ("ADDRESS" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: { ...i, processingType: "addressStatement" },
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Address capture error");
                            },
                        },
                        `address-${u.currentStepIndex}`,
                    ),
                });
            if ("SIGNATURE" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Signature capture error");
                            },
                        },
                        `signature-${u.currentStepIndex}`,
                    ),
                });
            if ("EKYB" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: {
                                flowId: c,
                                checkBusinessName: i.checkBusinessName,
                                checkAddress: i.checkAddress,
                                checkTaxId: i.checkTaxId,
                                checkUniqueBeneficialOwner: i.checkUniqueBeneficialOwner,
                            },
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "eKYB verification error");
                            },
                        },
                        `ekyb-${u.currentStepIndex}`,
                    ),
                });
            if ("COMBINED_CONSENT" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Combined consent error");
                            },
                        },
                        `combined-consent-${u.currentStepIndex}`,
                    ),
                });
            if ("MANDATORY_CONSENT" === t || "ML_CONSENT" === t) {
                let l = "ML_CONSENT" === t;
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: { ...i, type: l ? "ML" : "MANDATORY" },
                            onFinish: () => h.completeModule(),
                            onError: (t) => {
                                d?.(t ?? (l ? "ML consent error" : "Mandatory consent error"));
                            },
                        },
                        `${l ? "ml" : "mandatory"}-consent-${u.currentStepIndex}`,
                    ),
                });
            }
            if ("AE_SIGNATURE" === t || "QE_SIGNATURE" === t) {
                let l = "QE_SIGNATURE" === t ? "qe" : "ae";
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: { uploadDocument: i.uploadDocument, downloadDocument: i.downloadDocument },
                            onFinish: () => h.completeModule(),
                            onError: (t) => {
                                d?.(t ?? `${l.toUpperCase()} Signature error`);
                            },
                        },
                        `${l}-signature-${u.currentStepIndex}`,
                    ),
                });
            }
            if ("ANTIFRAUD" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Antifraud check error");
                            },
                        },
                        `antifraud-${u.currentStepIndex}`,
                    ),
                });
            if ("CUSTOM_FIELDS" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Custom fields error");
                            },
                        },
                        `custom-fields-${u.currentStepIndex}`,
                    ),
                });
            if ("WATCHLIST" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Watchlist check error");
                            },
                        },
                        `watchlist-${u.currentStepIndex}`,
                    ),
                });
            if ("WATCHLIST_BUSINESS" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Watchlist for business check error");
                            },
                        },
                        `watchlist-for-business-${u.currentStepIndex}`,
                    ),
                });
            if ("INCODE_WATCHLIST" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Custom watchlist check error");
                            },
                        },
                        `incode-watchlist-${u.currentStepIndex}`,
                    ),
                });
            if ("CROSS_DOCUMENT_DATA_MATCH" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Cross document data match error");
                            },
                        },
                        `cross-document-data-match-${u.currentStepIndex}`,
                    ),
                });
            if ("CERTIFICATE_ISSUANCE" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Certificate issuance error");
                            },
                        },
                        `certificate-issuance-${u.currentStepIndex}`,
                    ),
                });
            if ("FIELD_COMPARISON" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Field comparison error");
                            },
                        },
                        `field-comparison-${u.currentStepIndex}`,
                    ),
                });
            if ("DYNAMIC_FORMS" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            config: {
                                screens: i.screens.map((l) => ({
                                    title: l.title,
                                    hideTitle: l.hideTitle,
                                    questions: l.questions.map((l) => ({
                                        questionId: l.questionId,
                                        question: l.question,
                                        inputType: l.inputType,
                                        isOptional: l.isOptional,
                                        overrides: l.overrides ?? void 0,
                                        isPredefined: l.isPredefined,
                                        options: l.options,
                                    })),
                                })),
                            },
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Dynamic forms error");
                            },
                        },
                        `dynamic-forms-${u.currentStepIndex}`,
                    ),
                });
            if ("FISCAL_QR" === t)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(
                        s,
                        {
                            onFinish: () => h.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Fiscal QR error");
                            },
                        },
                        `fiscal-qr-${u.currentStepIndex}`,
                    ),
                });
        }
        return null;
    };
(0, m.t)(
    ({ config: l, onFinish: t = () => {}, onError: d }) =>
        (0, a.v)(Z.t, { children: l ? (0, a.v)(H, { config: l, onFinish: t, onError: d }) : null }),
    "incode-flow",
);
