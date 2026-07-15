var i,
    e,
    c = d(529058),
    a = d(287822),
    s = d(450139),
    n = d(748922),
    Z = d(898159),
    b = d(486234),
    m = d(296767),
    o = d(188043),
    u = d(787146),
    h = d(606742),
    W = d(277262),
    G = d(389956),
    p = d(885974),
    N = d(651386),
    M = d(768672);
d(584480);
var X = ({ message: l, onRetry: t }) => {
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
function r(l, t, d) {
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
        (i = l(d, t, a + 1 / 3)), (e = l(d, t, a)), (c = l(d, t, a - 1 / 3));
    }
    let Z = (l) => {
        let t = Math.round(255 * l).toString(16);
        return 1 === t.length ? `0${t}` : t;
    };
    return `#${Z(i)}${Z(e)}${Z(c)}`;
}
async function y() {
    return (await M.t.get("/omni/asset/fetch-all")).data;
}
var Y = new Map();
async function T(l) {
    if (l.startsWith("data:")) return l;
    let t = Y.get(l);
    if (t) return t;
    let d = await (await fetch(l)).blob(),
        i = await new Promise((l, t) => {
            let i = new FileReader();
            (i.onloadend = () => l(i.result)), (i.onerror = t), i.readAsDataURL(d);
        });
    return Y.set(l, i), i;
}
async function V() {
    let l,
        t = await y();
    if (!t.theme) throw Error("Theme URL not found in assets response");
    let d = t.theme;
    if (d.startsWith("http://") || d.startsWith("https://")) {
        let t = await fetch(d);
        if (!t.ok) throw Error(`Failed to fetch theme: ${t.statusText}`);
        l = await t.json();
    } else l = (await M.t.get(d)).data;
    let i = t["logo.png"] || t["logo.svg"] || t["logo.jpg"] || t["logo.jpeg"] || t["logo.webp"] || l.logo,
        e = i;
    return i && (e = await T(i)), { ...l, logo: e };
}
async function L() {
    let l = await V();
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
                            let d = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                            if (!d) return null;
                            let i = Number.parseInt(d[1], 16) / 255,
                                e = Number.parseInt(d[2], 16) / 255,
                                c = Number.parseInt(d[3], 16) / 255,
                                a = Math.max(i, e, c),
                                s = Math.min(i, e, c),
                                n = 0,
                                Z = 0,
                                b = (a + s) / 2;
                            if (a !== s) {
                                let l = a - s;
                                switch (((Z = b > 0.5 ? l / (2 - a - s) : l / (a + s)), a)) {
                                    case i:
                                        n = ((e - c) / l + 6 * (e < c)) / 6;
                                        break;
                                    case e:
                                        n = ((c - i) / l + 2) / 6;
                                        break;
                                    case c:
                                        n = ((i - e) / l + 4) / 6;
                                }
                            }
                            return { h: 360 * n, s: 100 * Z, l: 100 * b };
                        })(l);
                        if (!t) throw Error(`Invalid color format: ${l}`);
                        return {
                            50: r(t.h, t.s, 95),
                            200: r(t.h, t.s, 80),
                            300: r(t.h, t.s, 65),
                            400: r(t.h, t.s, Math.min(100, t.l + 10)),
                            500: l,
                            600: r(t.h, t.s, Math.max(0, t.l - 10)),
                            900: r(t.h, t.s, 20),
                        };
                    })(l),
                    i = document.getElementById("incode-theme");
                i || (((i = document.createElement("style")).id = "incode-theme"), document.head.appendChild(i));
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
}
var I = () =>
        Promise.resolve()
            .then(d.bind(d, 743601))
            .then((l) => l.Id),
    z = new Set(["IP_ADDRESS", "TRUST_GRAPH"]);
function w(l) {
    return "IP_ADDRESS" === l
        ? () =>
              Promise.resolve()
                  .then(d.bind(d, 885974))
                  .then((l) => l.noOpFlowModuleMachine)
        : "TRUST_GRAPH" === l
          ? () =>
                d
                    .e("45550")
                    .then(d.bind(d, 589245))
                    .then((l) => l.trustGraphMachine)
          : "REDIRECT_TO_MOBILE" === l
            ? () =>
                  Promise.all([d.e("1106"), d.e("27621")])
                      .then(d.bind(d, 886788))
                      .then((l) => l.redirectToMobileMachine)
            : "PHONE" === l
              ? () =>
                    Promise.all([d.e("12492"), d.e("89697")])
                        .then(d.bind(d, 938040))
                        .then((l) => l.phoneMachine)
              : "EMAIL" === l
                ? () =>
                      Promise.all([d.e("12492"), d.e("83270")])
                          .then(d.bind(d, 119621))
                          .then((l) => l.emailMachine)
                : "SELFIE" === l
                  ? () =>
                        Promise.resolve()
                            .then(d.bind(d, 356479))
                            .then((l) => l.selfieMachine)
                  : "AUTHENTICATION" === l
                    ? () =>
                          d
                              .e("71745")
                              .then(d.bind(d, 760024))
                              .then((l) => l.authenticationMachine)
                    : "ID" === l || "TUTORIAL_ID" === l || "SECOND_ID" === l
                      ? () =>
                            Promise.resolve()
                                .then(d.bind(d, 722135))
                                .then((l) => l.idCaptureMachine)
                      : "ID_OCR" === l
                        ? () =>
                              Promise.all([d.e("97925"), d.e("4641")])
                                  .then(d.bind(d, 803581))
                                  .then((l) => l.idOcrStateMachine)
                        : "CPF_OCR" === l
                          ? () =>
                                Promise.all([d.e("97925"), d.e("25343")])
                                    .then(d.bind(d, 364162))
                                    .then((l) => l.cpfOcrMachine)
                          : "FACE_MATCH" === l
                            ? () =>
                                  d
                                      .e("21920")
                                      .then(d.bind(d, 559491))
                                      .then((l) => l.faceMatchMachine)
                            : "CURP_VALIDATION" === l
                              ? () =>
                                    d
                                        .e("32712")
                                        .then(d.bind(d, 431835))
                                        .then((l) => l.curpValidationMachine)
                              : "GOVT_VALIDATION_PROVISIONING" === l || "INE_VALIDATION" === l
                                ? () =>
                                      Promise.all([d.e("12492"), d.e("7350")])
                                          .then(d.bind(d, 459061))
                                          .then((l) => l.governmentValidationMachine)
                                : "GEOLOCATION" === l
                                  ? () =>
                                        d
                                            .e("81500")
                                            .then(d.bind(d, 201207))
                                            .then((l) => l.geolocationMachine)
                                  : "EXTERNAL_VERIFICATION" === l
                                    ? () =>
                                          Promise.all([d.e("97925"), d.e("43188"), d.e("74065")])
                                              .then(d.bind(d, 419208))
                                              .then((l) => l.ekycMachine)
                                    : "EKYB" === l
                                      ? () =>
                                            Promise.all([d.e("43188"), d.e("11293")])
                                                .then(d.bind(d, 264140))
                                                .then((l) => l.ekybMachine)
                                      : "DOCUMENT_CAPTURE" === l || "ADDRESS" === l
                                        ? () =>
                                              d
                                                  .e("99807")
                                                  .then(d.bind(d, 645826))
                                                  .then((l) => l.documentCaptureMachine)
                                        : "COMBINED_CONSENT" === l
                                          ? () =>
                                                Promise.resolve()
                                                    .then(d.bind(d, 88918))
                                                    .then((l) => l.consentMachine)
                                          : "MANDATORY_CONSENT" === l || "ML_CONSENT" === l
                                            ? () =>
                                                  d
                                                      .e("69439")
                                                      .then(d.bind(d, 721378))
                                                      .then((l) => l.mandatoryConsentMachine)
                                            : "SIGNATURE" === l
                                              ? () =>
                                                    d
                                                        .e("17294")
                                                        .then(d.bind(d, 17853))
                                                        .then((l) => l.signatureMachine)
                                              : "ANTIFRAUD" === l
                                                ? () =>
                                                      d
                                                          .e("29398")
                                                          .then(d.bind(d, 995605))
                                                          .then((l) => l.antifraudMachine)
                                                : "CUSTOM_FIELDS" === l
                                                  ? () =>
                                                        Promise.all([d.e("7626"), d.e("2278")])
                                                            .then(d.bind(d, 18181))
                                                            .then((l) => l.customFieldsMachine)
                                                  : "WATCHLIST" === l
                                                    ? () =>
                                                          d
                                                              .e("5085")
                                                              .then(d.bind(d, 435628))
                                                              .then((l) => l.watchlistMachine)
                                                    : "WATCHLIST_BUSINESS" === l
                                                      ? () =>
                                                            d
                                                                .e("3")
                                                                .then(d.bind(d, 786414))
                                                                .then((l) => l.watchlistForBusinessMachine)
                                                      : "INCODE_WATCHLIST" === l
                                                        ? () =>
                                                              d
                                                                  .e("86640")
                                                                  .then(d.bind(d, 751667))
                                                                  .then((l) => l.customWatchlistMachine)
                                                        : "AE_SIGNATURE" === l
                                                          ? () =>
                                                                Promise.all([
                                                                    d.e("1106"),
                                                                    d.e("95"),
                                                                    d.e("98651"),
                                                                    d.e("82458"),
                                                                ])
                                                                    .then(d.bind(d, 119393))
                                                                    .then((l) => l.aeSignatureMachine)
                                                          : "QE_SIGNATURE" === l
                                                            ? () =>
                                                                  Promise.all([
                                                                      d.e("1106"),
                                                                      d.e("95"),
                                                                      d.e("98651"),
                                                                      d.e("62739"),
                                                                  ])
                                                                      .then(d.bind(d, 515166))
                                                                      .then((l) => l.qeSignatureMachine)
                                                            : "CROSS_DOCUMENT_DATA_MATCH" === l
                                                              ? () =>
                                                                    d
                                                                        .e("59240")
                                                                        .then(d.bind(d, 86843))
                                                                        .then((l) => l.crossDocumentDataMatchMachine)
                                                              : "DYNAMIC_FORMS" === l
                                                                ? () =>
                                                                      Promise.all([d.e("7626"), d.e("67311")])
                                                                          .then(d.bind(d, 70098))
                                                                          .then((l) => l.dynamicFormsMachine)
                                                                : "CERTIFICATE_ISSUANCE" === l
                                                                  ? () =>
                                                                        Promise.all([
                                                                            d.e("1106"),
                                                                            d.e("95"),
                                                                            d.e("33083"),
                                                                        ])
                                                                            .then(d.bind(d, 944982))
                                                                            .then((l) => l.certificateIssuanceMachine)
                                                                  : "FIELD_COMPARISON" === l
                                                                    ? () =>
                                                                          d
                                                                              .e("45395")
                                                                              .then(d.bind(d, 326014))
                                                                              .then((l) => l.fieldComparisonMachine)
                                                                    : "FISCAL_QR" === l
                                                                      ? () =>
                                                                            d
                                                                                .e("52038")
                                                                                .then(d.bind(d, 661605))
                                                                                .then((l) => l.fiscalQrMachine)
                                                                      : "VIDEO_ONBOARDING" === l
                                                                        ? () =>
                                                                              d
                                                                                  .e("79417")
                                                                                  .then(d.bind(d, 278176))
                                                                                  .then(
                                                                                      (l) =>
                                                                                          l.videoSelfieFlowModuleMachine,
                                                                                  )
                                                                        : void 0;
}
var R = {
    REDIRECT_TO_MOBILE: () =>
        Promise.all([d.e("1106"), d.e("27621"), d.e("27164"), d.e("33278")])
            .then(d.bind(d, 605805))
            .then((l) => l.RedirectToMobile),
    PHONE: () =>
        Promise.all([d.e("12492"), d.e("89697"), d.e("74326")])
            .then(d.bind(d, 643541))
            .then((l) => l.Phone),
    EMAIL: () =>
        Promise.all([d.e("12492"), d.e("83270"), d.e("5217"), d.e("82674")])
            .then(d.bind(d, 849865))
            .then((l) => l.Email),
    SELFIE: () =>
        Promise.resolve()
            .then(d.bind(d, 238819))
            .then((l) => l.Selfie),
    AUTHENTICATION: () =>
        Promise.all([d.e("71745"), d.e("89916")])
            .then(d.bind(d, 141431))
            .then((l) => l.Authentication),
    ID: I,
    ID_CAPTURE: I,
    TUTORIAL_ID: I,
    SECOND_ID: I,
    FACE_MATCH: () =>
        Promise.all([d.e("21920"), d.e("27164"), d.e("9425")])
            .then(d.bind(d, 487528))
            .then((l) => l.FaceMatch),
    CURP_VALIDATION: () =>
        Promise.all([d.e("32712"), d.e("77862")])
            .then(d.bind(d, 329669))
            .then((l) => l.CurpValidation),
    GOVT_VALIDATION_PROVISIONING: () =>
        Promise.all([d.e("12492"), d.e("7350"), d.e("61393")])
            .then(d.bind(d, 55725))
            .then((l) => l.GovernmentValidation),
    INE_VALIDATION: () =>
        Promise.all([d.e("12492"), d.e("7350"), d.e("61393")])
            .then(d.bind(d, 55725))
            .then((l) => l.GovernmentValidation),
    GEOLOCATION: () =>
        Promise.all([d.e("81500"), d.e("84342")])
            .then(d.bind(d, 942741))
            .then((l) => l.Geolocation),
    EXTERNAL_VERIFICATION: () =>
        Promise.all([d.e("97925"), d.e("43188"), d.e("74065"), d.e("40231"), d.e("68915")])
            .then(d.bind(d, 279070))
            .then((l) => l.EkycModule),
    EKYB: () =>
        Promise.all([d.e("43188"), d.e("11293"), d.e("40231"), d.e("67340"), d.e("60891")])
            .then(d.bind(d, 633302))
            .then((l) => l.EkybModule),
    DOCUMENT_CAPTURE: () =>
        Promise.all([d.e("99807"), d.e("26927")])
            .then(d.bind(d, 348178))
            .then((l) => l.DocumentCapture),
    ADDRESS: () =>
        Promise.all([d.e("99807"), d.e("26927")])
            .then(d.bind(d, 348178))
            .then((l) => l.DocumentCapture),
    COMBINED_CONSENT: () =>
        Promise.resolve()
            .then(d.bind(d, 740737))
            .then((l) => l.Consent),
    MANDATORY_CONSENT: () =>
        Promise.all([d.e("69439"), d.e("87961")])
            .then(d.bind(d, 121856))
            .then((l) => l.MandatoryConsent),
    ML_CONSENT: () =>
        Promise.all([d.e("69439"), d.e("87961")])
            .then(d.bind(d, 121856))
            .then((l) => l.MandatoryConsent),
    SIGNATURE: () =>
        Promise.all([d.e("17294"), d.e("54457")])
            .then(d.bind(d, 704325))
            .then((l) => l.Signature),
    ID_OCR: () =>
        Promise.all([d.e("97925"), d.e("4641"), d.e("31907")])
            .then(d.bind(d, 758350))
            .then((l) => l.IdOcr),
    CPF_OCR: () =>
        Promise.all([d.e("97925"), d.e("25343"), d.e("51840")])
            .then(d.bind(d, 338147))
            .then((l) => l.CpfOcr),
    ANTIFRAUD: () =>
        Promise.all([d.e("29398"), d.e("80014")])
            .then(d.bind(d, 866013))
            .then((l) => l.Antifraud),
    CUSTOM_FIELDS: () =>
        Promise.all([d.e("84301"), d.e("7626"), d.e("2278"), d.e("62626")])
            .then(d.bind(d, 917849))
            .then((l) => l.CustomFields),
    WATCHLIST: () =>
        Promise.all([d.e("84301"), d.e("5085"), d.e("71002")])
            .then(d.bind(d, 314145))
            .then((l) => l.Watchlist),
    WATCHLIST_BUSINESS: () =>
        Promise.all([d.e("84301"), d.e("3"), d.e("67340"), d.e("45332")])
            .then(d.bind(d, 189791))
            .then((l) => l.WatchlistForBusiness),
    INCODE_WATCHLIST: () =>
        Promise.all([d.e("84301"), d.e("86640"), d.e("41844")])
            .then(d.bind(d, 379231))
            .then((l) => l.CustomWatchlist),
    AE_SIGNATURE: () =>
        Promise.all([d.e("1106"), d.e("95"), d.e("98651"), d.e("97306"), d.e("86250")])
            .then(d.bind(d, 440881))
            .then((l) => l.AeSignature),
    QE_SIGNATURE: () =>
        Promise.all([d.e("1106"), d.e("95"), d.e("98651"), d.e("97306"), d.e("90826")])
            .then(d.bind(d, 504433))
            .then((l) => l.QeSignature),
    CROSS_DOCUMENT_DATA_MATCH: () =>
        Promise.all([d.e("59240"), d.e("10934")])
            .then(d.bind(d, 425461))
            .then((l) => l.CrossDocumentDataMatch),
    DYNAMIC_FORMS: () =>
        Promise.all([d.e("97925"), d.e("7626"), d.e("25343"), d.e("67311"), d.e("5217"), d.e("76150")])
            .then(d.bind(d, 608021))
            .then((l) => l.DynamicForms),
    CERTIFICATE_ISSUANCE: () =>
        Promise.all([d.e("1106"), d.e("95"), d.e("33083"), d.e("83274")])
            .then(d.bind(d, 442673))
            .then((l) => l.CertificateIssuance),
    FIELD_COMPARISON: () =>
        Promise.all([d.e("45395"), d.e("1409")])
            .then(d.bind(d, 875083))
            .then((l) => l.FieldComparison),
    FISCAL_QR: () =>
        Promise.all([d.e("52038"), d.e("8546")])
            .then(d.bind(d, 224665))
            .then((l) => l.FiscalQr),
    VIDEO_ONBOARDING: () =>
        Promise.all([d.e("79417"), d.e("1640")])
            .then(d.bind(d, 225307))
            .then((l) => l.VideoSelfie),
};
function S() {
    i ||
        (i = d
            .e("58795")
            .then(d.bind(d, 810918))
            .then((l) => l.HomeScreen)).catch(() => {
            i = void 0;
        });
}
async function C(l) {
    await (0, N.T7)({ token: l.token }), (0, c.r)() || (0, c.i)((0, c.a)(l.lang ? { lang: l.lang } : void 0));
}
async function x(l) {
    let { token: t, lang: d, flowManager: i } = l;
    await C({ token: t, lang: d }), i.load();
}
async function g() {
    try {
        let l = await L(),
            t = { logoSrc: l.logo, subtitle: l.subtitle, hideFooterBranding: l.hideFooterBranding };
        return (0, s.t)(t), { theme: l, uiConfig: t };
    } catch {
        return {};
    }
}
var D = ({ moduleKey: l, onNext: t }) =>
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
function j(l) {
    if ("object" == typeof l && null !== l && "status" in l && "number" == typeof l.status) return l.status;
}
async function U(l) {
    let t = globalThis.crypto?.subtle;
    if (!t) throw Error("SHA-1 is not available in this environment");
    return Array.from(new Uint8Array(await t.digest("SHA-1", new TextEncoder().encode(l))), (l) =>
        l.toString(16).padStart(2, "0"),
    ).join("");
}
async function F(l) {
    if ("string" == typeof l.apiKey) return l.apiKey;
    if ("string" == typeof l.clientId) return U(l.clientId);
    throw Error("Self-loading mode requires apiKey or clientId");
}
var O = () => null,
    J = () => Promise.resolve(O),
    k = new WeakMap(),
    E = new WeakMap();
function v(l) {
    if (l) return k.get(l);
}
function K(l) {
    if (!l) return { status: "idle" };
    let t = v(l);
    return t ? { status: "loaded", Component: t } : { status: "loading" };
}
function H(l) {
    let { loader: t, onLoading: d, onLoaded: i, onError: e } = l,
        [c, s] = (0, a.p)(() => K(t)),
        n = (0, a.l)(t),
        Z = (0, a.l)(d),
        b = (0, a.l)(i),
        m = (0, a.l)(e);
    return (
        (0, a._)(() => {
            (Z.current = d), (b.current = i), (m.current = e);
        }, [d, i, e]),
        n.current !== t && ((n.current = t), s(K(t))),
        (0, a._)(() => {
            if (!t) return;
            if (v(t)) return void b.current?.();
            Z.current?.();
            let l = !1;
            return (
                (function (l) {
                    let t = k.get(l);
                    if (t) return Promise.resolve(t);
                    let d = E.get(l);
                    if (d) return d;
                    let i = l()
                        .then((t) => (k.set(l, t), E.delete(l), t))
                        .catch((t) => {
                            throw (E.delete(l), t);
                        });
                    return E.set(l, i), i;
                })(t)
                    .then((t) => {
                        l || (s({ status: "loaded", Component: t }), b.current?.());
                    })
                    .catch((t) => {
                        if (!l) {
                            let l = t instanceof Error ? t.message : "Failed to load component";
                            s({ status: "error", error: l }), m.current?.(l);
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
function Q(l, t) {
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
async function P(l, t) {
    return (0, N.DU)(
        await F(l),
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
}
function f(l) {
    return "string" == typeof l.token;
}
var B = new Map();
function A(l) {
    return B.get(l) ?? null;
}
function _(l) {
    let t = A(l);
    return t && B.delete(l), t;
}
function $(l) {
    l.getState().presentation.shouldPrefetchHome && S();
}
function q() {
    "desktop" === (0, G.l3)() &&
        (function () {
            if (e) return;
            let l = R.REDIRECT_TO_MOBILE,
                t = w("REDIRECT_TO_MOBILE"),
                d = [];
            l && d.push(l()),
                t && d.push(t()),
                (e = Promise.all(d)).catch(() => {
                    e = void 0;
                });
        })();
}
var ll = (0, a.c)(() =>
        d
            .e("58795")
            .then(d.bind(d, 810918))
            .then((l) => ({ default: l.HomeScreen })),
    ),
    lt = ({ config: l, onFinish: t, onError: d }) => {
        var i, e;
        let Z,
            { i18n: m } = (0, c.n)(),
            o = (function (l) {
                let { lang: t, disableDashboardTheme: d, enableHome: i, onError: e, useCPF: c } = l,
                    n = f(l) ? l.token : void 0,
                    Z = (0, a.l)(null),
                    [b, m] = (0, a.p)(() => {
                        let t = n ? A(n) : null;
                        if (n && t?.status === "ready") {
                            let l = _(n);
                            if (l)
                                return (
                                    (Z.current = l.flowManager),
                                    $(l.flowManager),
                                    q(),
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
                                (0, p.ET)({
                                    enableHome: i,
                                    getFlow: async (l) => {
                                        let i = await (0, p.lv)(l, { ...e, isDesktop: d }),
                                            c = (function (l) {
                                                let t = {};
                                                for (let d of l) {
                                                    let l = d.key;
                                                    if (t[l]) continue;
                                                    let i = w(l);
                                                    i && (t[l] = i);
                                                }
                                                return t;
                                            })(i.flowModules ?? []);
                                        for (let l of Object.keys(t)) delete t[l];
                                        return Object.assign(t, c), i;
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
                        return ((Z.current = d), $(d), q(), t?.status === "error")
                            ? { status: "error", error: t.error ?? "Preload failed", flowManager: d }
                            : { status: "initializing", flowManager: d };
                    }),
                    o = (0, a.l)(!1);
                return (
                    (0, a._)(() => {
                        if ("initializing" !== b.status) return;
                        let i = n ? A(n) : null;
                        if (n && i?.status === "loading")
                            return void i.readyPromise
                                .then(() => {
                                    let l = _(n);
                                    l &&
                                        ((Z.current = l.flowManager),
                                        $(l.flowManager),
                                        q(),
                                        l.uiConfig && (0, s.t)(l.uiConfig),
                                        m({ status: "ready", flowManager: l.flowManager }));
                                })
                                .catch((l) => {
                                    let t = l instanceof Error ? l.message : "Preload failed",
                                        d = j(l);
                                    m({ status: "error", error: t, errorCode: d, flowManager: b.flowManager }),
                                        e?.(t, d);
                                });
                        if (o.current) return;
                        o.current = !0;
                        let c = new AbortController(),
                            { signal: a } = c;
                        return (
                            (async () => {
                                try {
                                    let i;
                                    if (f(l))
                                        (i = l.token),
                                            l.urlUuid &&
                                                (await (0, N.jq)(
                                                    {
                                                        urlUuid: l.urlUuid,
                                                        onboardingId: null,
                                                        onRefreshed: l.onUrlUuidRefreshed,
                                                    },
                                                    a,
                                                ));
                                    else if (
                                        "string" == typeof l.configurationId &&
                                        ("string" == typeof l.apiKey || "string" == typeof l.clientId)
                                    ) {
                                        let t = await P(l, a);
                                        (i = t.token),
                                            b.flowManager.setEndScreenTexts(
                                                t.endScreenTitle ?? null,
                                                t.endScreenText ?? null,
                                            );
                                    } else
                                        throw Error("Flow requires token, or configurationId with apiKey or clientId");
                                    await x({ token: i, lang: t, flowManager: b.flowManager });
                                    let e = d
                                            ? Promise.resolve()
                                            : g().then((l) => {
                                                  l.uiConfig && (0, s.t)(l.uiConfig);
                                              }),
                                        c = b.flowManager.waitForReady();
                                    await Promise.all([c, e]), m({ status: "ready", flowManager: b.flowManager });
                                } catch (d) {
                                    if (a.aborted) return;
                                    let l = d instanceof Error ? d.message : "Failed to initialize SDK",
                                        t = j(d);
                                    m({ status: "error", error: l, errorCode: t, flowManager: b.flowManager }),
                                        e?.(l, t);
                                }
                            })(),
                            () => c.abort()
                        );
                    }, [n, t, d, i, c, e, l, b]),
                    b
                );
            })((0, a.d)(() => ({ ...l, onError: d }), [l, d])),
            [u, h] = (0, n.u)(() => o.flowManager, { autoLoad: !1 }),
            M = u.presentation.lazyModuleKey,
            r = "ready" === u.status ? u.currentStep : void 0,
            y = (function (l) {
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
                        if (l) return t[l] ?? (d?.has(l) ? J : void 0);
                    })(t, d, i),
                    m = H({
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
                moduleKey: M,
                modules: R,
                onModuleLoading: l.onModuleLoading,
                onModuleLoaded: l.onModuleLoaded,
                onError: d,
            });
        !(function (l) {
            let { moduleKey: t, modules: d } = l,
                i = t ? d[t] : void 0,
                e = H({ loader: i });
            null != i && e.status;
        })({ moduleKey: "ready" === u.status && u.homeScreen.visible ? r : void 0, modules: R });
        let Y = "loaded" === y.status,
            T =
                !0 === l.enableHome &&
                "ready" === u.status &&
                !0 !== u.flow.disableLaunchScreen &&
                0 === u.currentStepIndex &&
                !1 === u.homeScreen.visible &&
                "loading" === y.status,
            V = Q(!0 === u.presentation.isAwaitingReady, 150),
            L = Q("ready" === u.status && ("idle" === y.status || "loading" === y.status || "error" === y.status), 150);
        (i = u?.status === "ready" ? u.steps : []),
            (e = u?.status === "ready" ? u.currentStepIndex : -1),
            (Z = (0, a.l)(new Set())),
            (0, a._)(() => {
                if (Y && e < i.length - 1) {
                    let t = i[e + 1];
                    if (t && !Z.current.has(t)) {
                        var l;
                        Z.current.add(t);
                        let d = R[t];
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
            }, [i, e, R, Y]),
            (0, a._)(() => {
                if (l.onFlowEvent) return h.subscribeFlowEvent(l.onFlowEvent);
            }, [h, l.onFlowEvent]),
            (0, a._)(() => {
                u.presentation.shouldPrefetchHome && S();
            }, [u.presentation.shouldPrefetchHome]),
            (0, a._)(() => {
                !(0, c.o)() && l.lang && m.language !== l.lang && m.changeLanguage(l.lang);
            }, [l.lang, m]),
            (0, a._)(() => {
                if (u?.status !== "ready" || "REDIRECT_TO_MOBILE" === u.currentStep) return;
                let t = (0, p.Ni)(u.flow);
                t.length > 0 &&
                    (l.onWasmWarmup?.(t),
                    (function (l, t) {
                        if ("REDIRECT_TO_MOBILE" === l.currentStep) return;
                        let d = (0, p.Ni)(l.flow);
                        if (d.length > 0) {
                            let l = (0, W.Dz)({ ...(t ?? {}), pipelines: d }),
                                i = { ...l, pipelines: l.pipelines ? [...l.pipelines] : void 0 };
                            (0, W.hA)(i),
                                (0, W.ZU)(l)
                                    .then(() => (0, W.fu)(i))
                                    .then(() => (0, W.Ri)(i))
                                    .catch((l) => {
                                        console.error("WASM warmup failed:", l);
                                    });
                        }
                    })(u, l.wasmConfig));
            }, [u, l]);
        let I = (0, a.l)(!1);
        (0, a._)(() => {
            if (!I.current) {
                if (u?.status === "finished") {
                    I.current = !0;
                    let l = u.finishStatus;
                    queueMicrotask(() => t(l));
                    return;
                }
                if (u?.status === "error" && d) {
                    I.current = !0;
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
            }, [u, h]);
        let C = !(l.spinnerConfig?.title || l.spinnerConfig?.subtitle);
        if ("error" === o.status)
            return (0, a.v)("div", { class: "IncodeFlow", children: (0, a.v)(X, { message: o.error }) });
        if (u.homeScreen.visible || T)
            return (0, a.v)("div", {
                class: "IncodeFlow",
                children: (0, a.v)(a.o, {
                    fallback: null,
                    children: (0, a.v)(ll, {
                        isContinueLoading: u.homeScreen.isContinueLoading || T,
                        onContinue: () => h.continueFromHome(),
                    }),
                }),
            });
        if ("initializing" === o.status)
            return (0, a.v)("div", {
                class: "IncodeFlow",
                children: (0, a.v)(b.t, { spinnerConfig: l.spinnerConfig, hideText: C }),
            });
        if (u.presentation.isAwaitingReady)
            return V
                ? (0, a.v)("div", {
                      class: "IncodeFlow",
                      children: (0, a.v)(b.t, { spinnerConfig: l.spinnerConfig, hideText: C }),
                  })
                : (0, a.v)("div", { class: "IncodeFlow" });
        if ("error" === u.status)
            return (0, a.v)("div", { class: "IncodeFlow", children: (0, a.v)(X, { message: u.error }) });
        if ("completing" === u.status) return (0, a.v)("div", { class: "IncodeFlow", children: (0, a.v)(b.t, {}) });
        if ("finished" === u.status) return null;
        if (u?.status === "ready") {
            let { currentStep: t, config: i, flow: e } = u,
                { flowId: c } = e;
            if (!t || !i)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(b.t, { spinnerConfig: l.spinnerConfig, hideText: C }),
                });
            if (z.has(t)) return (0, a.v)("div", { class: "IncodeFlow" });
            if ("unsupported" === y.status)
                return (0, a.v)("div", {
                    class: "IncodeFlow",
                    children: (0, a.v)(D, { moduleKey: t, onNext: () => h.completeModule() }),
                });
            if ("idle" === y.status || "loading" === y.status || "error" === y.status)
                return L
                    ? (0, a.v)("div", {
                          class: "IncodeFlow",
                          children: (0, a.v)(b.t, { spinnerConfig: l.spinnerConfig, hideText: C }),
                      })
                    : (0, a.v)("div", { class: "IncodeFlow" });
            let { Component: s } = y;
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
        (0, a.v)(Z.t, { children: l ? (0, a.v)(lt, { config: l, onFinish: t, onError: d }) : null }),
    "incode-flow",
);
