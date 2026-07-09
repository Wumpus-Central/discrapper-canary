var n,
    r = i(31144),
    o = i(248702),
    a = i(115977),
    s = i(899656),
    l = i(458741),
    c = i(321724),
    d = i(868282),
    u = i(242003),
    h = i(307221),
    p = i(976886);
i(133237), i(257300);
var f = i(209688);
i(588233), i(171251), i(886421), i(799201), i(401959);
var m = i(295985),
    g = i(766200),
    v = i(347989);
function C(e, t, i) {
    let n = e / 360,
        r = t / 100,
        o = i / 100,
        a,
        s,
        l;
    if (0 === r) a = s = l = o;
    else {
        let e = (e, t, i) => (
                i < 0 && (i += 1),
                i > 1 && --i,
                i < 1 / 6 ? e + (t - e) * 6 * i : i < 0.5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
            ),
            t = o < 0.5 ? o * (1 + r) : o + r - o * r,
            i = 2 * o - t;
        (a = e(i, t, n + 1 / 3)), (s = e(i, t, n)), (l = e(i, t, n - 1 / 3));
    }
    let c = (e) => {
        let t = Math.round(255 * e).toString(16);
        return 1 === t.length ? `0${t}` : t;
    };
    return `#${c(a)}${c(s)}${c(l)}`;
}
async function y() {
    return (await f.t.get("/omni/asset/fetch-all")).data;
}
var w = new Map();
async function b(e) {
    if (e.startsWith("data:")) return e;
    let t = w.get(e);
    if (t) return t;
    let i = await (await fetch(e)).blob(),
        n = await new Promise((e, t) => {
            let n = new FileReader();
            (n.onloadend = () => e(n.result)), (n.onerror = t), n.readAsDataURL(i);
        });
    return w.set(e, n), n;
}
async function _() {
    let e = await y();
    if (!e.theme) throw Error("Theme URL not found in assets response");
    let t = e.theme,
        i;
    if (t.startsWith("http://") || t.startsWith("https://")) {
        let e = await fetch(t);
        if (!e.ok) throw Error(`Failed to fetch theme: ${e.statusText}`);
        i = await e.json();
    } else i = (await f.t.get(t)).data;
    let n = e["logo.png"] || e["logo.svg"] || e["logo.jpg"] || e["logo.jpeg"] || e["logo.webp"] || i.logo,
        r = n;
    return n && (r = await b(n)), { ...i, logo: r };
}
async function S() {
    let e = await _();
    return (
        e.main &&
            (function (e, t) {
                if (typeof document > "u") return;
                let i = (function (e) {
                        let t = (function (e) {
                            let t = e.replace("#", "");
                            3 === t.length &&
                                (t = t
                                    .split("")
                                    .map((e) => e + e)
                                    .join(""));
                            let i = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                            if (!i) return null;
                            let n = Number.parseInt(i[1], 16) / 255,
                                r = Number.parseInt(i[2], 16) / 255,
                                o = Number.parseInt(i[3], 16) / 255,
                                a = Math.max(n, r, o),
                                s = Math.min(n, r, o),
                                l = 0,
                                c = 0,
                                d = (a + s) / 2;
                            if (a !== s) {
                                let e = a - s;
                                switch (((c = d > 0.5 ? e / (2 - a - s) : e / (a + s)), a)) {
                                    case n:
                                        l = ((r - o) / e + 6 * (r < o)) / 6;
                                        break;
                                    case r:
                                        l = ((o - n) / e + 2) / 6;
                                        break;
                                    case o:
                                        l = ((n - r) / e + 4) / 6;
                                }
                            }
                            return { h: 360 * l, s: 100 * c, l: 100 * d };
                        })(e);
                        if (!t) throw Error(`Invalid color format: ${e}`);
                        return {
                            50: C(t.h, t.s, 95),
                            200: C(t.h, t.s, 80),
                            300: C(t.h, t.s, 65),
                            400: C(t.h, t.s, Math.min(100, t.l + 10)),
                            500: e,
                            600: C(t.h, t.s, Math.max(0, t.l - 10)),
                            900: C(t.h, t.s, 20),
                        };
                    })(e),
                    n = document.getElementById("incode-theme");
                n || (((n = document.createElement("style")).id = "incode-theme"), document.head.appendChild(n));
                let r = `
    :root,
    :host {
      --primitive-color-brand-50: ${i[50]};
      --primitive-color-brand-200: ${i[200]};
      --primitive-color-brand-300: ${i[300]};
      --primitive-color-brand-400: ${i[400]};
      --primitive-color-brand-500: ${i[500]};
      --primitive-color-brand-600: ${i[600]};
      --primitive-color-brand-900: ${i[900]};
      --button-primary-text-default: ${t || "#ffffff"};
    }
  `;
                n.textContent = r;
            })(e.main, e.buttonColor),
        e
    );
}
var L,
    E = () =>
        Promise.all([
            i.e("98936"),
            i.e("26725"),
            i.e("47673"),
            i.e("51944"),
            i.e("66850"),
            i.e("58941"),
            i.e("50894"),
            i.e("87127"),
            i.e("49786"),
            i.e("30606"),
            i.e("33144"),
            i.e("6940"),
            i.e("67862"),
            i.e("84621"),
            i.e("24493"),
            i.e("20156"),
        ])
            .then(i.bind(i, 590327))
            .then((e) => e.Id),
    k = new Set(["IP_ADDRESS", "TRUST_GRAPH"]);
function x(e) {
    return "IP_ADDRESS" === e
        ? () =>
              Promise.resolve()
                  .then(i.bind(i, 766200))
                  .then((e) => e.noOpFlowModuleMachine)
        : "TRUST_GRAPH" === e
          ? () =>
                i
                    .e("847")
                    .then(i.bind(i, 279058))
                    .then((e) => e.trustGraphMachine)
          : "REDIRECT_TO_MOBILE" === e
            ? () =>
                  i
                      .e("81378")
                      .then(i.bind(i, 749113))
                      .then((e) => e.redirectToMobileMachine)
            : "PHONE" === e
              ? () =>
                    i
                        .e("26827")
                        .then(i.bind(i, 158406))
                        .then((e) => e.phoneMachine)
              : "EMAIL" === e
                ? () =>
                      i
                          .e("40761")
                          .then(i.bind(i, 317760))
                          .then((e) => e.emailMachine)
                : "SELFIE" === e
                  ? () =>
                        Promise.resolve()
                            .then(i.bind(i, 835385))
                            .then((e) => e.selfieMachine)
                  : "AUTHENTICATION" === e
                    ? () =>
                          i
                              .e("72307")
                              .then(i.bind(i, 209054))
                              .then((e) => e.authenticationMachine)
                    : "ID" === e || "TUTORIAL_ID" === e || "SECOND_ID" === e
                      ? () =>
                            i
                                .e("49786")
                                .then(i.bind(i, 438273))
                                .then((e) => e.idCaptureMachine)
                      : "ID_OCR" === e
                        ? () =>
                              Promise.all([i.e("87601"), i.e("47898")])
                                  .then(i.bind(i, 745345))
                                  .then((e) => e.idOcrStateMachine)
                        : "CPF_OCR" === e
                          ? () =>
                                Promise.all([i.e("87601"), i.e("87168")])
                                    .then(i.bind(i, 21603))
                                    .then((e) => e.cpfOcrMachine)
                          : "FACE_MATCH" === e
                            ? () =>
                                  i
                                      .e("54584")
                                      .then(i.bind(i, 334891))
                                      .then((e) => e.faceMatchMachine)
                            : "CURP_VALIDATION" === e
                              ? () =>
                                    i
                                        .e("90407")
                                        .then(i.bind(i, 457274))
                                        .then((e) => e.curpValidationMachine)
                              : "GOVT_VALIDATION_PROVISIONING" === e
                                ? () =>
                                      i
                                          .e("23907")
                                          .then(i.bind(i, 457230))
                                          .then((e) => e.governmentValidationMachine)
                                : "GEOLOCATION" === e
                                  ? () =>
                                        i
                                            .e("72302")
                                            .then(i.bind(i, 594461))
                                            .then((e) => e.geolocationMachine)
                                  : "EXTERNAL_VERIFICATION" === e
                                    ? () =>
                                          Promise.all([i.e("87601"), i.e("25526"), i.e("72245")])
                                              .then(i.bind(i, 485108))
                                              .then((e) => e.ekycMachine)
                                    : "EKYB" === e
                                      ? () =>
                                            Promise.all([i.e("25526"), i.e("79039")])
                                                .then(i.bind(i, 449538))
                                                .then((e) => e.ekybMachine)
                                      : "DOCUMENT_CAPTURE" === e || "ADDRESS" === e
                                        ? () =>
                                              i
                                                  .e("87205")
                                                  .then(i.bind(i, 118116))
                                                  .then((e) => e.documentCaptureMachine)
                                        : "COMBINED_CONSENT" === e
                                          ? () =>
                                                Promise.resolve()
                                                    .then(i.bind(i, 778186))
                                                    .then((e) => e.consentMachine)
                                          : "MANDATORY_CONSENT" === e
                                            ? () =>
                                                  i
                                                      .e("30682")
                                                      .then(i.bind(i, 916577))
                                                      .then((e) => e.mandatoryConsentMachine)
                                            : "SIGNATURE" === e
                                              ? () =>
                                                    i
                                                        .e("58349")
                                                        .then(i.bind(i, 792828))
                                                        .then((e) => e.signatureMachine)
                                              : "ANTIFRAUD" === e
                                                ? () =>
                                                      i
                                                          .e("7078")
                                                          .then(i.bind(i, 895173))
                                                          .then((e) => e.antifraudMachine)
                                                : "CUSTOM_FIELDS" === e
                                                  ? () =>
                                                        Promise.all([i.e("52061"), i.e("36027")])
                                                            .then(i.bind(i, 665846))
                                                            .then((e) => e.customFieldsMachine)
                                                  : "WATCHLIST" === e
                                                    ? () =>
                                                          Promise.all([i.e("96185"), i.e("13059")])
                                                              .then(i.bind(i, 915438))
                                                              .then((e) => e.watchlistMachine)
                                                    : "WATCHLIST_BUSINESS" === e
                                                      ? () =>
                                                            i
                                                                .e("72994")
                                                                .then(i.bind(i, 984441))
                                                                .then((e) => e.watchlistForBusinessMachine)
                                                      : "INCODE_WATCHLIST" === e
                                                        ? () =>
                                                              Promise.all([i.e("96185"), i.e("9972")])
                                                                  .then(i.bind(i, 442266))
                                                                  .then((e) => e.customWatchlistMachine)
                                                        : "AE_SIGNATURE" === e
                                                          ? () =>
                                                                Promise.all([i.e("26001"), i.e("8190")])
                                                                    .then(i.bind(i, 203309))
                                                                    .then((e) => e.aeSignatureMachine)
                                                          : "QE_SIGNATURE" === e
                                                            ? () =>
                                                                  Promise.all([i.e("26001"), i.e("15828")])
                                                                      .then(i.bind(i, 328351))
                                                                      .then((e) => e.qeSignatureMachine)
                                                            : "CROSS_DOCUMENT_DATA_MATCH" === e
                                                              ? () =>
                                                                    i
                                                                        .e("44541")
                                                                        .then(i.bind(i, 189036))
                                                                        .then((e) => e.crossDocumentDataMatchMachine)
                                                              : "DYNAMIC_FORMS" === e
                                                                ? () =>
                                                                      Promise.all([
                                                                          i.e("87601"),
                                                                          i.e("52061"),
                                                                          i.e("52315"),
                                                                      ])
                                                                          .then(i.bind(i, 586966))
                                                                          .then((e) => e.dynamicFormsMachine)
                                                                : void 0;
}
var I = {
    REDIRECT_TO_MOBILE: () =>
        Promise.all([
            i.e("98936"),
            i.e("26725"),
            i.e("66850"),
            i.e("11716"),
            i.e("81378"),
            i.e("24493"),
            i.e("58875"),
            i.e("69784"),
        ])
            .then(i.bind(i, 531147))
            .then((e) => e.RedirectToMobile),
    PHONE: () =>
        Promise.all([i.e("98936"), i.e("26725"), i.e("47673"), i.e("66850"), i.e("50894"), i.e("26827"), i.e("12224")])
            .then(i.bind(i, 515907))
            .then((e) => e.Phone),
    EMAIL: () =>
        Promise.all([
            i.e("98936"),
            i.e("26725"),
            i.e("47673"),
            i.e("51944"),
            i.e("66850"),
            i.e("58941"),
            i.e("50894"),
            i.e("87127"),
            i.e("49786"),
            i.e("30606"),
            i.e("33144"),
            i.e("6940"),
            i.e("40761"),
            i.e("12880"),
            i.e("79940"),
        ])
            .then(i.bind(i, 227663))
            .then((e) => e.Email),
    SELFIE: () =>
        Promise.resolve()
            .then(i.bind(i, 934281))
            .then((e) => e.Selfie),
    AUTHENTICATION: () =>
        Promise.all([i.e("72307"), i.e("44950")])
            .then(i.bind(i, 843893))
            .then((e) => e.Authentication),
    ID: E,
    ID_CAPTURE: E,
    TUTORIAL_ID: E,
    SECOND_ID: E,
    FACE_MATCH: () =>
        Promise.all([i.e("54584"), i.e("58875"), i.e("2239")])
            .then(i.bind(i, 814338))
            .then((e) => e.FaceMatch),
    CURP_VALIDATION: () =>
        Promise.all([
            i.e("98936"),
            i.e("26725"),
            i.e("47673"),
            i.e("58941"),
            i.e("87127"),
            i.e("33144"),
            i.e("11716"),
            i.e("90407"),
            i.e("44800"),
        ])
            .then(i.bind(i, 752387))
            .then((e) => e.CurpValidation),
    GOVT_VALIDATION_PROVISIONING: () =>
        Promise.all([i.e("98936"), i.e("47673"), i.e("50894"), i.e("11716"), i.e("23907"), i.e("51762")])
            .then(i.bind(i, 161193))
            .then((e) => e.GovernmentValidation),
    GEOLOCATION: () =>
        Promise.all([i.e("72302"), i.e("84136")])
            .then(i.bind(i, 328379))
            .then((e) => e.Geolocation),
    EXTERNAL_VERIFICATION: () =>
        Promise.all([
            i.e("98936"),
            i.e("26725"),
            i.e("47673"),
            i.e("51944"),
            i.e("66850"),
            i.e("58941"),
            i.e("30606"),
            i.e("87601"),
            i.e("25526"),
            i.e("72245"),
            i.e("78970"),
            i.e("43352"),
        ])
            .then(i.bind(i, 748043))
            .then((e) => e.EkycModule),
    EKYB: () =>
        Promise.all([
            i.e("98936"),
            i.e("26725"),
            i.e("47673"),
            i.e("51944"),
            i.e("66850"),
            i.e("58941"),
            i.e("50894"),
            i.e("87127"),
            i.e("49786"),
            i.e("30606"),
            i.e("33144"),
            i.e("6940"),
            i.e("25526"),
            i.e("79039"),
            i.e("78970"),
            i.e("35653"),
            i.e("20113"),
        ])
            .then(i.bind(i, 253288))
            .then((e) => e.EkybModule),
    DOCUMENT_CAPTURE: () =>
        Promise.all([
            i.e("98936"),
            i.e("26725"),
            i.e("47673"),
            i.e("51944"),
            i.e("66850"),
            i.e("58941"),
            i.e("50894"),
            i.e("87127"),
            i.e("49786"),
            i.e("30606"),
            i.e("33144"),
            i.e("6940"),
            i.e("87205"),
            i.e("99104"),
        ])
            .then(i.bind(i, 997923))
            .then((e) => e.DocumentCapture),
    ADDRESS: () =>
        Promise.all([
            i.e("98936"),
            i.e("26725"),
            i.e("47673"),
            i.e("51944"),
            i.e("66850"),
            i.e("58941"),
            i.e("50894"),
            i.e("87127"),
            i.e("49786"),
            i.e("30606"),
            i.e("33144"),
            i.e("6940"),
            i.e("87205"),
            i.e("99104"),
        ])
            .then(i.bind(i, 997923))
            .then((e) => e.DocumentCapture),
    COMBINED_CONSENT: () =>
        Promise.resolve()
            .then(i.bind(i, 225055))
            .then((e) => e.Consent),
    MANDATORY_CONSENT: () =>
        Promise.all([i.e("30682"), i.e("2895")])
            .then(i.bind(i, 962098))
            .then((e) => e.MandatoryConsent),
    SIGNATURE: () =>
        Promise.all([
            i.e("98936"),
            i.e("26725"),
            i.e("47673"),
            i.e("51944"),
            i.e("66850"),
            i.e("58941"),
            i.e("50894"),
            i.e("87127"),
            i.e("49786"),
            i.e("30606"),
            i.e("33144"),
            i.e("6940"),
            i.e("58349"),
            i.e("88680"),
        ])
            .then(i.bind(i, 947515))
            .then((e) => e.Signature),
    ID_OCR: () =>
        Promise.all([
            i.e("98936"),
            i.e("26725"),
            i.e("47673"),
            i.e("51944"),
            i.e("66850"),
            i.e("58941"),
            i.e("50894"),
            i.e("87127"),
            i.e("49786"),
            i.e("30606"),
            i.e("87601"),
            i.e("33144"),
            i.e("6940"),
            i.e("47898"),
            i.e("72051"),
        ])
            .then(i.bind(i, 703198))
            .then((e) => e.IdOcr),
    CPF_OCR: () =>
        Promise.all([i.e("98936"), i.e("51944"), i.e("87601"), i.e("87168"), i.e("71967")])
            .then(i.bind(i, 761730))
            .then((e) => e.CpfOcr),
    ANTIFRAUD: () =>
        Promise.all([i.e("7078"), i.e("74432")])
            .then(i.bind(i, 154211))
            .then((e) => e.Antifraud),
    CUSTOM_FIELDS: () =>
        Promise.all([i.e("98936"), i.e("47673"), i.e("58941"), i.e("52061"), i.e("98808"), i.e("36027"), i.e("85041")])
            .then(i.bind(i, 704584))
            .then((e) => e.CustomFields),
    WATCHLIST: () =>
        Promise.all([i.e("98808"), i.e("96185"), i.e("13059"), i.e("68764")])
            .then(i.bind(i, 640951))
            .then((e) => e.Watchlist),
    WATCHLIST_BUSINESS: () =>
        Promise.all([i.e("98936"), i.e("26725"), i.e("98808"), i.e("72994"), i.e("35653"), i.e("56491")])
            .then(i.bind(i, 221446))
            .then((e) => e.WatchlistForBusiness),
    INCODE_WATCHLIST: () =>
        Promise.all([i.e("98808"), i.e("96185"), i.e("9972"), i.e("73459")])
            .then(i.bind(i, 716670))
            .then((e) => e.CustomWatchlist),
    AE_SIGNATURE: () =>
        Promise.all([i.e("51944"), i.e("26001"), i.e("67862"), i.e("61135"), i.e("27516")])
            .then(i.bind(i, 607191))
            .then((e) => e.AeSignature),
    QE_SIGNATURE: () =>
        Promise.all([i.e("51944"), i.e("26001"), i.e("67862"), i.e("61135"), i.e("46332")])
            .then(i.bind(i, 666615))
            .then((e) => e.QeSignature),
    CROSS_DOCUMENT_DATA_MATCH: () =>
        Promise.all([i.e("44541"), i.e("9576")])
            .then(i.bind(i, 840219))
            .then((e) => e.CrossDocumentDataMatch),
    DYNAMIC_FORMS: () =>
        Promise.all([
            i.e("98936"),
            i.e("26725"),
            i.e("47673"),
            i.e("51944"),
            i.e("66850"),
            i.e("58941"),
            i.e("50894"),
            i.e("87127"),
            i.e("49786"),
            i.e("30606"),
            i.e("87601"),
            i.e("33144"),
            i.e("6940"),
            i.e("52061"),
            i.e("87168"),
            i.e("52315"),
            i.e("12880"),
            i.e("5761"),
        ])
            .then(i.bind(i, 660376))
            .then((e) => e.DynamicForms),
};
function T() {
    L ||
        (L = Promise.all([i.e("26725"), i.e("87127"), i.e("14989")])
            .then(i.bind(i, 783228))
            .then((e) => e.HomeScreen)).catch(() => {
            L = void 0;
        });
}
async function M(e) {
    await (0, v.T7)({ token: e.token }), (0, r.r)((0, r.i)(e.lang ? { lang: e.lang } : void 0));
}
async function A(e) {
    let { token: t, lang: i, flowManager: n } = e;
    await M({ token: t, lang: i }), n.load();
}
async function R() {
    try {
        let e = await S(),
            t = { logoSrc: e.logo, subtitle: e.subtitle, hideFooterBranding: e.hideFooterBranding };
        return (0, a.t)(t), { theme: e, uiConfig: t };
    } catch {
        return {};
    }
}
var O = ({ moduleKey: e, onNext: t }) =>
        (0, o.v)("section", {
            class: "IncodeUnsupportedModule",
            "aria-live": "polite",
            children: (0, o.v)("div", {
                class: "IncodeUnsupportedModuleContent",
                children: [
                    (0, o.v)("h2", { class: "IncodeUnsupportedModuleTitle", children: "Module not available" }),
                    (0, o.v)("p", {
                        class: "IncodeUnsupportedModuleMessage",
                        children: ['The "', e, '" module is not yet supported in this version.'],
                    }),
                    (0, o.v)(u.t, {
                        onClick: t,
                        class: "IncodeUnsupportedModuleButton",
                        "data-testid": "unsupported-module-next-button",
                        children: "Next",
                    }),
                ],
            }),
        }),
    P = () => null,
    D = () => Promise.resolve(P),
    F = new WeakMap(),
    N = new WeakMap();
function U(e) {
    if (e) return F.get(e);
}
function H(e) {
    if (!e) return { status: "idle" };
    let t = U(e);
    return t ? { status: "loaded", Component: t } : { status: "loading" };
}
function $(e) {
    let { loader: t, onLoading: i, onLoaded: n, onError: r } = e,
        [a, s] = (0, o.p)(() => H(t)),
        l = (0, o.l)(t),
        c = (0, o.l)(i),
        d = (0, o.l)(n),
        u = (0, o.l)(r);
    return (
        (0, o._)(() => {
            (c.current = i), (d.current = n), (u.current = r);
        }, [i, n, r]),
        l.current !== t && ((l.current = t), s(H(t))),
        (0, o._)(() => {
            if (!t) return;
            if (U(t)) return void d.current?.();
            c.current?.();
            let e = !1;
            return (
                (function (e) {
                    let t = F.get(e);
                    if (t) return Promise.resolve(t);
                    let i = N.get(e);
                    if (i) return i;
                    let n = e()
                        .then((t) => (F.set(e, t), N.delete(e), t))
                        .catch((t) => {
                            throw (N.delete(e), t);
                        });
                    return N.set(e, n), n;
                })(t)
                    .then((t) => {
                        e || (s({ status: "loaded", Component: t }), d.current?.());
                    })
                    .catch((t) => {
                        if (!e) {
                            let e = t instanceof Error ? t.message : "Failed to load component";
                            s({ status: "error", error: e }), u.current?.(e);
                        }
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t]),
        a
    );
}
function B(e, t) {
    let [i, n] = (0, o.p)(!1);
    return (
        (0, o._)(() => {
            if (!1 === e) return void n(!1);
            let i = window.setTimeout(() => {
                n(!0);
            }, t);
            return () => {
                window.clearTimeout(i);
            };
        }, [e, t]),
        i
    );
}
async function V(e) {
    let t = globalThis.crypto?.subtle;
    if (!t) throw Error("SHA-1 is not available in this environment");
    return Array.from(new Uint8Array(await t.digest("SHA-1", new TextEncoder().encode(e))), (e) =>
        e.toString(16).padStart(2, "0"),
    ).join("");
}
async function z(e) {
    if ("string" == typeof e.apiKey) return e.apiKey;
    if ("string" == typeof e.clientId) return V(e.clientId);
    throw Error("Flow self-loading mode requires apiKey or clientId");
}
async function j(e, t) {
    return (0, v.DU)(
        await z(e),
        {
            configurationId: e.configurationId,
            externalId: e.externalId,
            externalCustomerId: e.externalCustomerId,
            language: e.lang,
            customFields: e.customFields,
            uuid: e.uuid,
            urlUuid: e.urlUuid,
            interviewId: e.interviewId,
            onUrlUuidRefreshed: e.onUrlUuidRefreshed,
        },
        t,
    );
}
function Z(e) {
    return "string" == typeof e.token;
}
var W = new Map();
function G(e) {
    return W.get(e) ?? null;
}
function K(e) {
    let t = G(e);
    return t && W.delete(e), t;
}
function q(e) {
    e.getState().presentation.shouldPrefetchHome && T();
}
function Y() {
    "desktop" === (0, m.l3)() &&
        (function () {
            if (n) return;
            let e = I.REDIRECT_TO_MOBILE,
                t = x("REDIRECT_TO_MOBILE"),
                i = [];
            e && i.push(e()),
                t && i.push(t()),
                (n = Promise.all(i)).catch(() => {
                    n = void 0;
                });
        })();
}
var Q = (0, o.c)(() =>
        Promise.all([i.e("26725"), i.e("87127"), i.e("14989")])
            .then(i.bind(i, 783228))
            .then((e) => ({ default: e.HomeScreen })),
    ),
    X = ({ config: e, onFinish: t, onError: i }) => {
        var n, l;
        let d,
            { i18n: u } = (0, r.n)(),
            f = (function (e) {
                let { lang: t, disableDashboardTheme: i, enableHome: n, onError: r, useCPF: s } = e,
                    l = Z(e) ? e.token : void 0,
                    c = (0, o.l)(null),
                    [d, u] = (0, o.p)(() => {
                        let t = l ? G(l) : null;
                        if (l && t?.status === "ready") {
                            let e = K(l);
                            if (e)
                                return (
                                    (c.current = e.flowManager),
                                    q(e.flowManager),
                                    Y(),
                                    e.uiConfig && (0, a.t)(e.uiConfig),
                                    { status: "ready", flowManager: e.flowManager }
                                );
                        }
                        let i = (function (e = {}) {
                            let t = {},
                                i = e.isDesktop ?? "desktop" === (0, m.l3)(),
                                { enableHome: n, ...r } = e;
                            return (0, g.ET)({
                                enableHome: n,
                                getFlow: async (e) => {
                                    let n = await (0, g.lv)(e, { ...r, isDesktop: i }),
                                        o = (function (e) {
                                            let t = {};
                                            for (let i of e) {
                                                let e = i.key;
                                                if (t[e]) continue;
                                                let n = x(e);
                                                n && (t[e] = n);
                                            }
                                            return t;
                                        })(n.flowModules ?? []);
                                    for (let e of Object.keys(t)) delete t[e];
                                    return Object.assign(t, o), n;
                                },
                                lazyModules: t,
                            });
                        })({ authHint: e.authHint, lang: e.lang, enableHome: e.enableHome, useCPF: e.useCPF });
                        return (
                            (c.current = i),
                            q(i),
                            Y(),
                            t?.status === "error"
                                ? { status: "error", error: t.error ?? "Preload failed", flowManager: i }
                                : { status: "initializing", flowManager: i }
                        );
                    }),
                    h = (0, o.l)(!1);
                return (
                    (0, o._)(() => {
                        if ("initializing" !== d.status) return;
                        let n = l ? G(l) : null;
                        if (l && n?.status === "loading")
                            return void n.readyPromise
                                .then(() => {
                                    let e = K(l);
                                    e &&
                                        ((c.current = e.flowManager),
                                        q(e.flowManager),
                                        Y(),
                                        e.uiConfig && (0, a.t)(e.uiConfig),
                                        u({ status: "ready", flowManager: e.flowManager }));
                                })
                                .catch((e) => {
                                    let t = e instanceof Error ? e.message : "Preload failed",
                                        i = e instanceof v.LJ ? e.status : void 0;
                                    u({ status: "error", error: t, errorCode: i, flowManager: d.flowManager }),
                                        r?.(t, i);
                                });
                        if (h.current) return;
                        h.current = !0;
                        let o = new AbortController(),
                            { signal: s } = o;
                        return (
                            (async () => {
                                try {
                                    let n;
                                    if (Z(e))
                                        (n = e.token),
                                            e.urlUuid &&
                                                (await (0, v.jq)(
                                                    {
                                                        urlUuid: e.urlUuid,
                                                        onboardingId: null,
                                                        onRefreshed: e.onUrlUuidRefreshed,
                                                    },
                                                    s,
                                                ));
                                    else if (
                                        "string" == typeof e.configurationId &&
                                        ("string" == typeof e.apiKey || "string" == typeof e.clientId)
                                    )
                                        n = (await j(e, s)).token;
                                    else throw Error("Flow requires token, or configurationId with apiKey or clientId");
                                    await A({ token: n, lang: t, flowManager: d.flowManager });
                                    let r = i
                                            ? Promise.resolve()
                                            : R().then((e) => {
                                                  e.uiConfig && (0, a.t)(e.uiConfig);
                                              }),
                                        o = d.flowManager.waitForReady();
                                    await Promise.all([o, r]), u({ status: "ready", flowManager: d.flowManager });
                                } catch (i) {
                                    if (s.aborted) return;
                                    let e = i instanceof Error ? i.message : "Failed to initialize SDK",
                                        t = i instanceof v.LJ ? i.status : void 0;
                                    u({ status: "error", error: e, errorCode: t, flowManager: d.flowManager }),
                                        r?.(e, t);
                                }
                            })(),
                            () => o.abort()
                        );
                    }, [l, t, i, n, s, r, e, d]),
                    d
                );
            })((0, o.d)(() => ({ ...e, onError: i }), [e, i])),
            [C, y] = (0, s.o)(() => f.flowManager, { autoLoad: !1 }),
            w = C.presentation.lazyModuleKey,
            b = "ready" === C.status ? C.currentStep : void 0,
            _ = (function (e) {
                let {
                        moduleKey: t,
                        modules: i,
                        headlessModuleKeys: n,
                        onModuleLoading: r,
                        onModuleLoaded: a,
                        onError: s,
                    } = e,
                    [l, c] = (0, o.p)(void 0),
                    d = (function (e, t, i) {
                        if (e) return t[e] ?? (i?.has(e) ? D : void 0);
                    })(t, i, n),
                    u = $({
                        loader: d,
                        onLoading: t ? () => r?.(t) : void 0,
                        onLoaded: t ? () => a?.(t) : void 0,
                        onError: t ? (e) => s?.(`Failed to load ${t}: ${e}`) : void 0,
                    });
                return (
                    (0, o._)(() => {
                        t ? c(d ? void 0 : t) : c(void 0);
                    }, [d, t]),
                    t
                        ? l
                            ? { status: "unsupported", moduleKey: l }
                            : "idle" === u.status || "loading" === u.status
                              ? { status: "loading", moduleKey: t }
                              : "error" === u.status
                                ? { status: "error", moduleKey: t, error: u.error }
                                : { status: "loaded", moduleKey: t, Component: u.Component }
                        : { status: "idle" }
                );
            })({
                moduleKey: w,
                modules: I,
                onModuleLoading: e.onModuleLoading,
                onModuleLoaded: e.onModuleLoaded,
                onError: i,
            });
        !(function (e) {
            let { moduleKey: t, modules: i } = e,
                n = t ? i[t] : void 0,
                r = $({ loader: n });
            null != n && r.status;
        })({ moduleKey: "ready" === C.status && C.homeScreen.visible ? b : void 0, modules: I });
        let S = "loaded" === _.status,
            L =
                !0 === e.enableHome &&
                "ready" === C.status &&
                !0 !== C.flow.disableLaunchScreen &&
                0 === C.currentStepIndex &&
                !1 === C.homeScreen.visible &&
                "loading" === _.status,
            E = B(!0 === C.presentation.isAwaitingReady, 150),
            M = B("ready" === C.status && ("idle" === _.status || "loading" === _.status || "error" === _.status), 150);
        (n = C?.status === "ready" ? C.steps : []),
            (l = C?.status === "ready" ? C.currentStepIndex : -1),
            (d = (0, o.l)(new Set())),
            (0, o._)(() => {
                if (S && l < n.length - 1) {
                    let t = n[l + 1];
                    if (t && !d.current.has(t)) {
                        var e;
                        d.current.add(t);
                        let i = I[t];
                        i &&
                            ((e = () => {
                                i().catch(() => {
                                    d.current.delete(t);
                                });
                            }),
                            "u" > typeof requestIdleCallback
                                ? requestIdleCallback(() => {
                                      e();
                                  })
                                : setTimeout(e, 0));
                    }
                }
            }, [n, l, I, S]),
            (0, o._)(() => {
                if (e.onFlowEvent) return y.subscribeFlowEvent(e.onFlowEvent);
            }, [y, e.onFlowEvent]),
            (0, o._)(() => {
                C.presentation.shouldPrefetchHome && T();
            }, [C.presentation.shouldPrefetchHome]),
            (0, o._)(() => {
                e.lang && u.language !== e.lang && u.changeLanguage(e.lang);
            }, [e.lang, u]),
            (0, o._)(() => {
                if (C?.status !== "ready" || "REDIRECT_TO_MOBILE" === C.currentStep) return;
                let t = (0, g.Ni)(C.flow);
                t.length > 0 &&
                    (e.onWasmWarmup?.(t),
                    (function (e, t) {
                        if ("REDIRECT_TO_MOBILE" === e.currentStep) return;
                        let i = (0, g.Ni)(e.flow);
                        if (i.length > 0) {
                            let e = (0, h.l)({ ...(t ?? {}), pipelines: i }),
                                n = { ...e, pipelines: e.pipelines ? [...e.pipelines] : void 0 };
                            (0, h.i)(n),
                                (0, p.n)(e)
                                    .then(() => (0, h.t)(n))
                                    .then(() => (0, h.o)(n))
                                    .catch((e) => {
                                        console.error("WASM warmup failed:", e);
                                    });
                        }
                    })(C, e.wasmConfig));
            }, [C, e]),
            (0, o._)(() => {
                C?.status === "finished" && t(C.finishStatus);
            }, [C?.status, t, C]),
            (0, o._)(() => {
                C?.status === "error" && i && i(C.error, C.errorCode);
            }, [C?.status, i, C]),
            (0, o._)(() => {
                C?.status === "ready" &&
                    "ID" === C.currentStep &&
                    C.steps.includes("TUTORIAL_ID") &&
                    y.completeModule();
            }, [C, y]);
        let P = !(e.spinnerConfig?.title || e.spinnerConfig?.subtitle);
        if ("error" === f.status)
            return (0, o.v)("div", {
                class: "IncodeFlow",
                children: (0, o.v)("div", { children: ["Error: ", f.error] }),
            });
        if (C.homeScreen.visible || L)
            return (0, o.v)("div", {
                class: "IncodeFlow",
                children: (0, o.v)(o.o, {
                    fallback: null,
                    children: (0, o.v)(Q, {
                        isContinueLoading: C.homeScreen.isContinueLoading || L,
                        onContinue: () => y.continueFromHome(),
                    }),
                }),
            });
        if ("initializing" === f.status)
            return (0, o.v)("div", {
                class: "IncodeFlow",
                children: (0, o.v)(c.t, { spinnerConfig: e.spinnerConfig, hideText: P }),
            });
        if (C.presentation.isAwaitingReady)
            return E
                ? (0, o.v)("div", {
                      class: "IncodeFlow",
                      children: (0, o.v)(c.t, { spinnerConfig: e.spinnerConfig, hideText: P }),
                  })
                : (0, o.v)("div", { class: "IncodeFlow" });
        if ("error" === C.status)
            return (0, o.v)("div", {
                class: "IncodeFlow",
                children: (0, o.v)("div", { children: ["Error: ", C.error] }),
            });
        if ("finished" === C.status) return null;
        if (C?.status === "ready") {
            let { currentStep: t, config: n, flow: r } = C,
                { flowId: a } = r;
            if (!t || !n)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(c.t, { spinnerConfig: e.spinnerConfig, hideText: P }),
                });
            if (k.has(t)) return (0, o.v)("div", { class: "IncodeFlow" });
            if ("unsupported" === _.status)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(O, { moduleKey: t, onNext: () => y.completeModule() }),
                });
            if ("idle" === _.status || "loading" === _.status || "error" === _.status)
                return M
                    ? (0, o.v)("div", {
                          class: "IncodeFlow",
                          children: (0, o.v)(c.t, { spinnerConfig: e.spinnerConfig, hideText: P }),
                      })
                    : (0, o.v)("div", { class: "IncodeFlow" });
            let { Component: s } = _;
            if ("REDIRECT_TO_MOBILE" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeFlow(),
                            onContinue: () => y.completeModule(),
                            onError: i,
                        },
                        `redirect-to-mobile-${C.currentStepIndex}`,
                    ),
                });
            if ("SELFIE" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Selfie verification error");
                            },
                        },
                        `selfie-${C.currentStepIndex}`,
                    ),
                });
            if ("AUTHENTICATION" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: { ...n, authHint: e.authHint },
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Authentication error");
                            },
                        },
                        `authentication-${C.currentStepIndex}`,
                    ),
                });
            if ("PHONE" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Phone verification error");
                            },
                        },
                        `phone-${C.currentStepIndex}`,
                    ),
                });
            if ("EMAIL" === t)
                return n && "boolean" == typeof n.otpVerification && "number" == typeof n.otpExpirationInMinutes
                    ? (0, o.v)("div", {
                          class: "IncodeFlow",
                          children: (0, o.v)(
                              s,
                              {
                                  config: n,
                                  onFinish: () => y.completeModule(),
                                  onError: (e) => {
                                      i?.(e ?? "Email verification error");
                                  },
                              },
                              `email-${C.currentStepIndex}`,
                          ),
                      })
                    : (0, o.v)("div", {
                          class: "IncodeFlow",
                          children: (0, o.v)("div", { children: "Error: Invalid email configuration" }),
                      });
            if ("ID" === t || "SECOND_ID" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: "SECOND_ID" === t ? { ...n, isSecondId: !0 } : n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "ID capture error");
                            },
                        },
                        `id-${C.currentStepIndex}`,
                    ),
                });
            if ("ID_OCR" === t) {
                let e = C.steps.includes("SECOND_ID");
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: { ...n, secondId: n.secondId ?? e, flowId: a },
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "ID OCR error");
                            },
                        },
                        `id-ocr-${C.currentStepIndex}`,
                    ),
                });
            }
            if ("CPF_OCR" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "CPF OCR error");
                            },
                        },
                        `cpf-ocr-${C.currentStepIndex}`,
                    ),
                });
            if ("FACE_MATCH" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Face match error");
                            },
                        },
                        `face-match-${C.currentStepIndex}`,
                    ),
                });
            if ("CURP_VALIDATION" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "CURP validation error");
                            },
                        },
                        `curp-validation-${C.currentStepIndex}`,
                    ),
                });
            if ("GOVT_VALIDATION_PROVISIONING" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Government validation error");
                            },
                        },
                        `govt-validation-${C.currentStepIndex}`,
                    ),
                });
            if ("GEOLOCATION" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Geolocation error");
                            },
                        },
                        `geolocation-${C.currentStepIndex}`,
                    ),
                });
            if ("EXTERNAL_VERIFICATION" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: { flowId: C.flow.flowId },
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "External verification error");
                            },
                        },
                        `ekyc-${C.currentStepIndex}`,
                    ),
                });
            if ("DOCUMENT_CAPTURE" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Document capture error");
                            },
                        },
                        `document-capture-${C.currentStepIndex}`,
                    ),
                });
            if ("ADDRESS" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: { ...n, processingType: "addressStatement" },
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Address capture error");
                            },
                        },
                        `address-${C.currentStepIndex}`,
                    ),
                });
            if ("SIGNATURE" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Signature capture error");
                            },
                        },
                        `signature-${C.currentStepIndex}`,
                    ),
                });
            if ("EKYB" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: {
                                flowId: a,
                                checkBusinessName: n.checkBusinessName,
                                checkAddress: n.checkAddress,
                                checkTaxId: n.checkTaxId,
                                checkUniqueBeneficialOwner: n.checkUniqueBeneficialOwner,
                            },
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "eKYB verification error");
                            },
                        },
                        `ekyb-${C.currentStepIndex}`,
                    ),
                });
            if ("COMBINED_CONSENT" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Combined consent error");
                            },
                        },
                        `combined-consent-${C.currentStepIndex}`,
                    ),
                });
            if ("MANDATORY_CONSENT" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Mandatory consent error");
                            },
                        },
                        `mandatory-consent-${C.currentStepIndex}`,
                    ),
                });
            if ("AE_SIGNATURE" === t || "QE_SIGNATURE" === t) {
                let e = "QE_SIGNATURE" === t ? "qe" : "ae";
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: { uploadDocument: n.uploadDocument, downloadDocument: n.downloadDocument },
                            onFinish: () => y.completeModule(),
                            onError: (t) => {
                                i?.(t ?? `${e.toUpperCase()} Signature error`);
                            },
                        },
                        `${e}-signature-${C.currentStepIndex}`,
                    ),
                });
            }
            if ("ANTIFRAUD" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Antifraud check error");
                            },
                        },
                        `antifraud-${C.currentStepIndex}`,
                    ),
                });
            if ("CUSTOM_FIELDS" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Custom fields error");
                            },
                        },
                        `custom-fields-${C.currentStepIndex}`,
                    ),
                });
            if ("WATCHLIST" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Watchlist check error");
                            },
                        },
                        `watchlist-${C.currentStepIndex}`,
                    ),
                });
            if ("WATCHLIST_BUSINESS" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Watchlist for business check error");
                            },
                        },
                        `watchlist-for-business-${C.currentStepIndex}`,
                    ),
                });
            if ("INCODE_WATCHLIST" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: n,
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Custom watchlist check error");
                            },
                        },
                        `incode-watchlist-${C.currentStepIndex}`,
                    ),
                });
            if ("CROSS_DOCUMENT_DATA_MATCH" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Cross document data match error");
                            },
                        },
                        `cross-document-data-match-${C.currentStepIndex}`,
                    ),
                });
            if ("DYNAMIC_FORMS" === t)
                return (0, o.v)("div", {
                    class: "IncodeFlow",
                    children: (0, o.v)(
                        s,
                        {
                            config: {
                                screens: n.screens.map((e) => ({
                                    title: e.title,
                                    hideTitle: e.hideTitle,
                                    questions: e.questions.map((e) => ({
                                        questionId: e.questionId,
                                        question: e.question,
                                        inputType: e.inputType,
                                        isOptional: e.isOptional,
                                        overrides: e.overrides ?? void 0,
                                        isPredefined: e.isPredefined,
                                        options: e.options,
                                    })),
                                })),
                            },
                            onFinish: () => y.completeModule(),
                            onError: (e) => {
                                i?.(e ?? "Dynamic forms error");
                            },
                        },
                        `dynamic-forms-${C.currentStepIndex}`,
                    ),
                });
        }
        return null;
    };
(0, d.t)(
    ({ config: e, onFinish: t = () => {}, onError: i }) =>
        (0, o.v)(l.t, { children: e ? (0, o.v)(X, { config: e, onFinish: t, onError: i }) : null }),
    "incode-flow",
);
