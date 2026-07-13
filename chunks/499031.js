var i,
    c = d(31144),
    e = d(248702),
    a = d(115977),
    s = d(899656),
    Z = d(458741),
    n = d(321724),
    b = d(868282),
    m = d(242003),
    o = d(307221),
    u = d(976886);
d(133237), d(257300);
var h = d(209688);
d(588233), d(171251), d(886421), d(799201), d(401959);
var W = d(295985),
    G = d(766200),
    p = d(347989);
function N(l, t, d) {
    let i = l / 360,
        c = t / 100,
        e = d / 100,
        a,
        s,
        Z;
    if (0 === c) a = s = Z = e;
    else {
        let l = (l, t, d) => (
                d < 0 && (d += 1),
                d > 1 && --d,
                d < 1 / 6 ? l + (t - l) * 6 * d : d < 0.5 ? t : d < 2 / 3 ? l + (t - l) * (2 / 3 - d) * 6 : l
            ),
            t = e < 0.5 ? e * (1 + c) : e + c - e * c,
            d = 2 * e - t;
        (a = l(d, t, i + 1 / 3)), (s = l(d, t, i)), (Z = l(d, t, i - 1 / 3));
    }
    let n = (l) => {
        let t = Math.round(255 * l).toString(16);
        return 1 === t.length ? `0${t}` : t;
    };
    return `#${n(a)}${n(s)}${n(Z)}`;
}
async function M() {
    return (await h.t.get("/omni/asset/fetch-all")).data;
}
var X = new Map();
async function y(l) {
    if (l.startsWith("data:")) return l;
    let t = X.get(l);
    if (t) return t;
    let d = await (await fetch(l)).blob(),
        i = await new Promise((l, t) => {
            let i = new FileReader();
            (i.onloadend = () => l(i.result)), (i.onerror = t), i.readAsDataURL(d);
        });
    return X.set(l, i), i;
}
async function Y() {
    let l = await M();
    if (!l.theme) throw Error("Theme URL not found in assets response");
    let t = l.theme,
        d;
    if (t.startsWith("http://") || t.startsWith("https://")) {
        let l = await fetch(t);
        if (!l.ok) throw Error(`Failed to fetch theme: ${l.statusText}`);
        d = await l.json();
    } else d = (await h.t.get(t)).data;
    let i = l["logo.png"] || l["logo.svg"] || l["logo.jpg"] || l["logo.jpeg"] || l["logo.webp"] || d.logo,
        c = i;
    return i && (c = await y(i)), { ...d, logo: c };
}
async function r() {
    let l = await Y();
    return (
        l.main &&
            (function (l, t) {
                if (typeof document > "u") return;
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
                                c = Number.parseInt(d[2], 16) / 255,
                                e = Number.parseInt(d[3], 16) / 255,
                                a = Math.max(i, c, e),
                                s = Math.min(i, c, e),
                                Z = 0,
                                n = 0,
                                b = (a + s) / 2;
                            if (a !== s) {
                                let l = a - s;
                                switch (((n = b > 0.5 ? l / (2 - a - s) : l / (a + s)), a)) {
                                    case i:
                                        Z = ((c - e) / l + 6 * (c < e)) / 6;
                                        break;
                                    case c:
                                        Z = ((e - i) / l + 2) / 6;
                                        break;
                                    case e:
                                        Z = ((i - c) / l + 4) / 6;
                                }
                            }
                            return { h: 360 * Z, s: 100 * n, l: 100 * b };
                        })(l);
                        if (!t) throw Error(`Invalid color format: ${l}`);
                        return {
                            50: N(t.h, t.s, 95),
                            200: N(t.h, t.s, 80),
                            300: N(t.h, t.s, 65),
                            400: N(t.h, t.s, Math.min(100, t.l + 10)),
                            500: l,
                            600: N(t.h, t.s, Math.max(0, t.l - 10)),
                            900: N(t.h, t.s, 20),
                        };
                    })(l),
                    i = document.getElementById("incode-theme");
                i || (((i = document.createElement("style")).id = "incode-theme"), document.head.appendChild(i));
                let c = `
    :root,
    :host {
      --primitive-color-brand-50: ${d[50]};
      --primitive-color-brand-200: ${d[200]};
      --primitive-color-brand-300: ${d[300]};
      --primitive-color-brand-400: ${d[400]};
      --primitive-color-brand-500: ${d[500]};
      --primitive-color-brand-600: ${d[600]};
      --primitive-color-brand-900: ${d[900]};
      --button-primary-text-default: ${t || "#ffffff"};
    }
  `;
                i.textContent = c;
            })(l.main, l.buttonColor),
        l
    );
}
var T,
    V = () =>
        Promise.resolve()
            .then(d.bind(d, 590327))
            .then((l) => l.Id),
    L = new Set(["IP_ADDRESS", "TRUST_GRAPH"]);
function I(l) {
    return "IP_ADDRESS" === l
        ? () =>
              Promise.resolve()
                  .then(d.bind(d, 766200))
                  .then((l) => l.noOpFlowModuleMachine)
        : "TRUST_GRAPH" === l
          ? () =>
                d
                    .e("847")
                    .then(d.bind(d, 279058))
                    .then((l) => l.trustGraphMachine)
          : "REDIRECT_TO_MOBILE" === l
            ? () =>
                  d
                      .e("81378")
                      .then(d.bind(d, 749113))
                      .then((l) => l.redirectToMobileMachine)
            : "PHONE" === l
              ? () =>
                    d
                        .e("26827")
                        .then(d.bind(d, 158406))
                        .then((l) => l.phoneMachine)
              : "EMAIL" === l
                ? () =>
                      d
                          .e("40761")
                          .then(d.bind(d, 317760))
                          .then((l) => l.emailMachine)
                : "SELFIE" === l
                  ? () =>
                        Promise.resolve()
                            .then(d.bind(d, 835385))
                            .then((l) => l.selfieMachine)
                  : "AUTHENTICATION" === l
                    ? () =>
                          d
                              .e("72307")
                              .then(d.bind(d, 209054))
                              .then((l) => l.authenticationMachine)
                    : "ID" === l || "TUTORIAL_ID" === l || "SECOND_ID" === l
                      ? () =>
                            Promise.resolve()
                                .then(d.bind(d, 438273))
                                .then((l) => l.idCaptureMachine)
                      : "ID_OCR" === l
                        ? () =>
                              Promise.all([d.e("87601"), d.e("47898")])
                                  .then(d.bind(d, 745345))
                                  .then((l) => l.idOcrStateMachine)
                        : "CPF_OCR" === l
                          ? () =>
                                Promise.all([d.e("87601"), d.e("87168")])
                                    .then(d.bind(d, 21603))
                                    .then((l) => l.cpfOcrMachine)
                          : "FACE_MATCH" === l
                            ? () =>
                                  d
                                      .e("54584")
                                      .then(d.bind(d, 334891))
                                      .then((l) => l.faceMatchMachine)
                            : "CURP_VALIDATION" === l
                              ? () =>
                                    d
                                        .e("90407")
                                        .then(d.bind(d, 457274))
                                        .then((l) => l.curpValidationMachine)
                              : "GOVT_VALIDATION_PROVISIONING" === l
                                ? () =>
                                      d
                                          .e("23907")
                                          .then(d.bind(d, 457230))
                                          .then((l) => l.governmentValidationMachine)
                                : "GEOLOCATION" === l
                                  ? () =>
                                        d
                                            .e("72302")
                                            .then(d.bind(d, 594461))
                                            .then((l) => l.geolocationMachine)
                                  : "EXTERNAL_VERIFICATION" === l
                                    ? () =>
                                          Promise.all([d.e("87601"), d.e("25526"), d.e("72245")])
                                              .then(d.bind(d, 485108))
                                              .then((l) => l.ekycMachine)
                                    : "EKYB" === l
                                      ? () =>
                                            Promise.all([d.e("25526"), d.e("79039")])
                                                .then(d.bind(d, 449538))
                                                .then((l) => l.ekybMachine)
                                      : "DOCUMENT_CAPTURE" === l || "ADDRESS" === l
                                        ? () =>
                                              d
                                                  .e("87205")
                                                  .then(d.bind(d, 118116))
                                                  .then((l) => l.documentCaptureMachine)
                                        : "COMBINED_CONSENT" === l
                                          ? () =>
                                                Promise.resolve()
                                                    .then(d.bind(d, 778186))
                                                    .then((l) => l.consentMachine)
                                          : "MANDATORY_CONSENT" === l
                                            ? () =>
                                                  d
                                                      .e("30682")
                                                      .then(d.bind(d, 916577))
                                                      .then((l) => l.mandatoryConsentMachine)
                                            : "SIGNATURE" === l
                                              ? () =>
                                                    d
                                                        .e("58349")
                                                        .then(d.bind(d, 792828))
                                                        .then((l) => l.signatureMachine)
                                              : "ANTIFRAUD" === l
                                                ? () =>
                                                      d
                                                          .e("7078")
                                                          .then(d.bind(d, 895173))
                                                          .then((l) => l.antifraudMachine)
                                                : "CUSTOM_FIELDS" === l
                                                  ? () =>
                                                        Promise.all([d.e("52061"), d.e("36027")])
                                                            .then(d.bind(d, 665846))
                                                            .then((l) => l.customFieldsMachine)
                                                  : "WATCHLIST" === l
                                                    ? () =>
                                                          Promise.all([d.e("96185"), d.e("13059")])
                                                              .then(d.bind(d, 915438))
                                                              .then((l) => l.watchlistMachine)
                                                    : "WATCHLIST_BUSINESS" === l
                                                      ? () =>
                                                            d
                                                                .e("72994")
                                                                .then(d.bind(d, 984441))
                                                                .then((l) => l.watchlistForBusinessMachine)
                                                      : "INCODE_WATCHLIST" === l
                                                        ? () =>
                                                              Promise.all([d.e("96185"), d.e("9972")])
                                                                  .then(d.bind(d, 442266))
                                                                  .then((l) => l.customWatchlistMachine)
                                                        : "AE_SIGNATURE" === l
                                                          ? () =>
                                                                Promise.all([d.e("26001"), d.e("8190")])
                                                                    .then(d.bind(d, 203309))
                                                                    .then((l) => l.aeSignatureMachine)
                                                          : "QE_SIGNATURE" === l
                                                            ? () =>
                                                                  Promise.all([d.e("26001"), d.e("15828")])
                                                                      .then(d.bind(d, 328351))
                                                                      .then((l) => l.qeSignatureMachine)
                                                            : "CROSS_DOCUMENT_DATA_MATCH" === l
                                                              ? () =>
                                                                    d
                                                                        .e("44541")
                                                                        .then(d.bind(d, 189036))
                                                                        .then((l) => l.crossDocumentDataMatchMachine)
                                                              : "DYNAMIC_FORMS" === l
                                                                ? () =>
                                                                      Promise.all([
                                                                          d.e("87601"),
                                                                          d.e("52061"),
                                                                          d.e("52315"),
                                                                      ])
                                                                          .then(d.bind(d, 586966))
                                                                          .then((l) => l.dynamicFormsMachine)
                                                                : void 0;
}
var z = {
    REDIRECT_TO_MOBILE: () =>
        Promise.all([d.e("11716"), d.e("81378"), d.e("58875"), d.e("69784")])
            .then(d.bind(d, 531147))
            .then((l) => l.RedirectToMobile),
    PHONE: () =>
        Promise.all([d.e("26827"), d.e("12224")])
            .then(d.bind(d, 515907))
            .then((l) => l.Phone),
    EMAIL: () =>
        Promise.all([d.e("40761"), d.e("12880"), d.e("79940")])
            .then(d.bind(d, 227663))
            .then((l) => l.Email),
    SELFIE: () =>
        Promise.resolve()
            .then(d.bind(d, 934281))
            .then((l) => l.Selfie),
    AUTHENTICATION: () =>
        Promise.all([d.e("72307"), d.e("44950")])
            .then(d.bind(d, 843893))
            .then((l) => l.Authentication),
    ID: V,
    ID_CAPTURE: V,
    TUTORIAL_ID: V,
    SECOND_ID: V,
    FACE_MATCH: () =>
        Promise.all([d.e("54584"), d.e("58875"), d.e("2239")])
            .then(d.bind(d, 814338))
            .then((l) => l.FaceMatch),
    CURP_VALIDATION: () =>
        Promise.all([d.e("11716"), d.e("90407"), d.e("44800")])
            .then(d.bind(d, 752387))
            .then((l) => l.CurpValidation),
    GOVT_VALIDATION_PROVISIONING: () =>
        Promise.all([d.e("11716"), d.e("23907"), d.e("51762")])
            .then(d.bind(d, 161193))
            .then((l) => l.GovernmentValidation),
    GEOLOCATION: () =>
        Promise.all([d.e("72302"), d.e("84136")])
            .then(d.bind(d, 328379))
            .then((l) => l.Geolocation),
    EXTERNAL_VERIFICATION: () =>
        Promise.all([d.e("87601"), d.e("25526"), d.e("72245"), d.e("78970"), d.e("43352")])
            .then(d.bind(d, 748043))
            .then((l) => l.EkycModule),
    EKYB: () =>
        Promise.all([d.e("25526"), d.e("79039"), d.e("78970"), d.e("35653"), d.e("20113")])
            .then(d.bind(d, 253288))
            .then((l) => l.EkybModule),
    DOCUMENT_CAPTURE: () =>
        Promise.all([d.e("87205"), d.e("99104")])
            .then(d.bind(d, 997923))
            .then((l) => l.DocumentCapture),
    ADDRESS: () =>
        Promise.all([d.e("87205"), d.e("99104")])
            .then(d.bind(d, 997923))
            .then((l) => l.DocumentCapture),
    COMBINED_CONSENT: () =>
        Promise.resolve()
            .then(d.bind(d, 225055))
            .then((l) => l.Consent),
    MANDATORY_CONSENT: () =>
        Promise.all([d.e("30682"), d.e("2895")])
            .then(d.bind(d, 962098))
            .then((l) => l.MandatoryConsent),
    SIGNATURE: () =>
        Promise.all([d.e("58349"), d.e("88680")])
            .then(d.bind(d, 947515))
            .then((l) => l.Signature),
    ID_OCR: () =>
        Promise.all([d.e("87601"), d.e("47898"), d.e("72051")])
            .then(d.bind(d, 703198))
            .then((l) => l.IdOcr),
    CPF_OCR: () =>
        Promise.all([d.e("87601"), d.e("87168"), d.e("71967")])
            .then(d.bind(d, 761730))
            .then((l) => l.CpfOcr),
    ANTIFRAUD: () =>
        Promise.all([d.e("7078"), d.e("74432")])
            .then(d.bind(d, 154211))
            .then((l) => l.Antifraud),
    CUSTOM_FIELDS: () =>
        Promise.all([d.e("52061"), d.e("98808"), d.e("36027"), d.e("85041")])
            .then(d.bind(d, 704584))
            .then((l) => l.CustomFields),
    WATCHLIST: () =>
        Promise.all([d.e("98808"), d.e("96185"), d.e("13059"), d.e("68764")])
            .then(d.bind(d, 640951))
            .then((l) => l.Watchlist),
    WATCHLIST_BUSINESS: () =>
        Promise.all([d.e("98808"), d.e("72994"), d.e("35653"), d.e("56491")])
            .then(d.bind(d, 221446))
            .then((l) => l.WatchlistForBusiness),
    INCODE_WATCHLIST: () =>
        Promise.all([d.e("98808"), d.e("96185"), d.e("9972"), d.e("73459")])
            .then(d.bind(d, 716670))
            .then((l) => l.CustomWatchlist),
    AE_SIGNATURE: () =>
        Promise.all([d.e("26001"), d.e("61135"), d.e("27516")])
            .then(d.bind(d, 607191))
            .then((l) => l.AeSignature),
    QE_SIGNATURE: () =>
        Promise.all([d.e("26001"), d.e("61135"), d.e("46332")])
            .then(d.bind(d, 666615))
            .then((l) => l.QeSignature),
    CROSS_DOCUMENT_DATA_MATCH: () =>
        Promise.all([d.e("44541"), d.e("9576")])
            .then(d.bind(d, 840219))
            .then((l) => l.CrossDocumentDataMatch),
    DYNAMIC_FORMS: () =>
        Promise.all([d.e("87601"), d.e("52061"), d.e("87168"), d.e("52315"), d.e("12880"), d.e("5761")])
            .then(d.bind(d, 660376))
            .then((l) => l.DynamicForms),
};
function w() {
    T ||
        (T = d
            .e("14989")
            .then(d.bind(d, 783228))
            .then((l) => l.HomeScreen)).catch(() => {
            T = void 0;
        });
}
async function R(l) {
    await (0, p.T7)({ token: l.token }), (0, c.r)((0, c.i)(l.lang ? { lang: l.lang } : void 0));
}
async function C(l) {
    let { token: t, lang: d, flowManager: i } = l;
    await R({ token: t, lang: d }), i.load();
}
async function S() {
    try {
        let l = await r(),
            t = { logoSrc: l.logo, subtitle: l.subtitle, hideFooterBranding: l.hideFooterBranding };
        return (0, a.t)(t), { theme: l, uiConfig: t };
    } catch {
        return {};
    }
}
var x = ({ moduleKey: l, onNext: t }) =>
        (0, e.v)("section", {
            class: "IncodeUnsupportedModule",
            "aria-live": "polite",
            children: (0, e.v)("div", {
                class: "IncodeUnsupportedModuleContent",
                children: [
                    (0, e.v)("h2", { class: "IncodeUnsupportedModuleTitle", children: "Module not available" }),
                    (0, e.v)("p", {
                        class: "IncodeUnsupportedModuleMessage",
                        children: ['The "', l, '" module is not yet supported in this version.'],
                    }),
                    (0, e.v)(m.t, {
                        onClick: t,
                        class: "IncodeUnsupportedModuleButton",
                        "data-testid": "unsupported-module-next-button",
                        children: "Next",
                    }),
                ],
            }),
        }),
    g = () => null,
    D = () => Promise.resolve(g),
    j = new WeakMap(),
    U = new WeakMap();
function F(l) {
    if (l) return j.get(l);
}
function J(l) {
    if (!l) return { status: "idle" };
    let t = F(l);
    return t ? { status: "loaded", Component: t } : { status: "loading" };
}
function O(l) {
    let { loader: t, onLoading: d, onLoaded: i, onError: c } = l,
        [a, s] = (0, e.p)(() => J(t)),
        Z = (0, e.l)(t),
        n = (0, e.l)(d),
        b = (0, e.l)(i),
        m = (0, e.l)(c);
    return (
        (0, e._)(() => {
            (n.current = d), (b.current = i), (m.current = c);
        }, [d, i, c]),
        Z.current !== t && ((Z.current = t), s(J(t))),
        (0, e._)(() => {
            if (!t) return;
            if (F(t)) return void b.current?.();
            n.current?.();
            let l = !1;
            return (
                (function (l) {
                    let t = j.get(l);
                    if (t) return Promise.resolve(t);
                    let d = U.get(l);
                    if (d) return d;
                    let i = l()
                        .then((t) => (j.set(l, t), U.delete(l), t))
                        .catch((t) => {
                            throw (U.delete(l), t);
                        });
                    return U.set(l, i), i;
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
        a
    );
}
function k(l, t) {
    let [d, i] = (0, e.p)(!1);
    return (
        (0, e._)(() => {
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
async function E(l) {
    let t = globalThis.crypto?.subtle;
    if (!t) throw Error("SHA-1 is not available in this environment");
    return Array.from(new Uint8Array(await t.digest("SHA-1", new TextEncoder().encode(l))), (l) =>
        l.toString(16).padStart(2, "0"),
    ).join("");
}
async function v(l) {
    if ("string" == typeof l.apiKey) return l.apiKey;
    if ("string" == typeof l.clientId) return E(l.clientId);
    throw Error("Flow self-loading mode requires apiKey or clientId");
}
async function K(l, t) {
    return (0, p.DU)(
        await v(l),
        {
            configurationId: l.configurationId,
            externalId: l.externalId,
            externalCustomerId: l.externalCustomerId,
            language: l.lang,
            customFields: l.customFields,
            uuid: l.uuid,
            urlUuid: l.urlUuid,
            interviewId: l.interviewId,
            onUrlUuidRefreshed: l.onUrlUuidRefreshed,
        },
        t,
    );
}
function H(l) {
    return "string" == typeof l.token;
}
var Q = new Map();
function P(l) {
    return Q.get(l) ?? null;
}
function f(l) {
    let t = P(l);
    return t && Q.delete(l), t;
}
function B(l) {
    l.getState().presentation.shouldPrefetchHome && w();
}
function A() {
    "desktop" === (0, W.l3)() &&
        (function () {
            if (i) return;
            let l = z.REDIRECT_TO_MOBILE,
                t = I("REDIRECT_TO_MOBILE"),
                d = [];
            l && d.push(l()),
                t && d.push(t()),
                (i = Promise.all(d)).catch(() => {
                    i = void 0;
                });
        })();
}
var _ = (0, e.c)(() =>
        d
            .e("14989")
            .then(d.bind(d, 783228))
            .then((l) => ({ default: l.HomeScreen })),
    ),
    $ = ({ config: l, onFinish: t, onError: d }) => {
        var i, Z;
        let b,
            { i18n: m } = (0, c.n)(),
            h = (function (l) {
                let { lang: t, disableDashboardTheme: d, enableHome: i, onError: c, useCPF: s } = l,
                    Z = H(l) ? l.token : void 0,
                    n = (0, e.l)(null),
                    [b, m] = (0, e.p)(() => {
                        let t = Z ? P(Z) : null;
                        if (Z && t?.status === "ready") {
                            let l = f(Z);
                            if (l)
                                return (
                                    (n.current = l.flowManager),
                                    B(l.flowManager),
                                    A(),
                                    l.uiConfig && (0, a.t)(l.uiConfig),
                                    { status: "ready", flowManager: l.flowManager }
                                );
                        }
                        let d = (function (l = {}) {
                            let t = {},
                                d = l.isDesktop ?? "desktop" === (0, W.l3)(),
                                { enableHome: i, ...c } = l;
                            return (0, G.ET)({
                                enableHome: i,
                                getFlow: async (l) => {
                                    let i = await (0, G.lv)(l, { ...c, isDesktop: d }),
                                        e = (function (l) {
                                            let t = {};
                                            for (let d of l) {
                                                let l = d.key;
                                                if (t[l]) continue;
                                                let i = I(l);
                                                i && (t[l] = i);
                                            }
                                            return t;
                                        })(i.flowModules ?? []);
                                    for (let l of Object.keys(t)) delete t[l];
                                    return Object.assign(t, e), i;
                                },
                                lazyModules: t,
                            });
                        })({ authHint: l.authHint, lang: l.lang, enableHome: l.enableHome, useCPF: l.useCPF });
                        return (
                            (n.current = d),
                            B(d),
                            A(),
                            t?.status === "error"
                                ? { status: "error", error: t.error ?? "Preload failed", flowManager: d }
                                : { status: "initializing", flowManager: d }
                        );
                    }),
                    o = (0, e.l)(!1);
                return (
                    (0, e._)(() => {
                        if ("initializing" !== b.status) return;
                        let i = Z ? P(Z) : null;
                        if (Z && i?.status === "loading")
                            return void i.readyPromise
                                .then(() => {
                                    let l = f(Z);
                                    l &&
                                        ((n.current = l.flowManager),
                                        B(l.flowManager),
                                        A(),
                                        l.uiConfig && (0, a.t)(l.uiConfig),
                                        m({ status: "ready", flowManager: l.flowManager }));
                                })
                                .catch((l) => {
                                    let t = l instanceof Error ? l.message : "Preload failed",
                                        d = l instanceof p.LJ ? l.status : void 0;
                                    m({ status: "error", error: t, errorCode: d, flowManager: b.flowManager }),
                                        c?.(t, d);
                                });
                        if (o.current) return;
                        o.current = !0;
                        let e = new AbortController(),
                            { signal: s } = e;
                        return (
                            (async () => {
                                try {
                                    let i;
                                    if (H(l))
                                        (i = l.token),
                                            l.urlUuid &&
                                                (await (0, p.jq)(
                                                    {
                                                        urlUuid: l.urlUuid,
                                                        onboardingId: null,
                                                        onRefreshed: l.onUrlUuidRefreshed,
                                                    },
                                                    s,
                                                ));
                                    else if (
                                        "string" == typeof l.configurationId &&
                                        ("string" == typeof l.apiKey || "string" == typeof l.clientId)
                                    )
                                        i = (await K(l, s)).token;
                                    else throw Error("Flow requires token, or configurationId with apiKey or clientId");
                                    await C({ token: i, lang: t, flowManager: b.flowManager });
                                    let c = d
                                            ? Promise.resolve()
                                            : S().then((l) => {
                                                  l.uiConfig && (0, a.t)(l.uiConfig);
                                              }),
                                        e = b.flowManager.waitForReady();
                                    await Promise.all([e, c]), m({ status: "ready", flowManager: b.flowManager });
                                } catch (d) {
                                    if (s.aborted) return;
                                    let l = d instanceof Error ? d.message : "Failed to initialize SDK",
                                        t = d instanceof p.LJ ? d.status : void 0;
                                    m({ status: "error", error: l, errorCode: t, flowManager: b.flowManager }),
                                        c?.(l, t);
                                }
                            })(),
                            () => e.abort()
                        );
                    }, [Z, t, d, i, s, c, l, b]),
                    b
                );
            })((0, e.d)(() => ({ ...l, onError: d }), [l, d])),
            [N, M] = (0, s.o)(() => h.flowManager, { autoLoad: !1 }),
            X = N.presentation.lazyModuleKey,
            y = "ready" === N.status ? N.currentStep : void 0,
            Y = (function (l) {
                let {
                        moduleKey: t,
                        modules: d,
                        headlessModuleKeys: i,
                        onModuleLoading: c,
                        onModuleLoaded: a,
                        onError: s,
                    } = l,
                    [Z, n] = (0, e.p)(void 0),
                    b = (function (l, t, d) {
                        if (l) return t[l] ?? (d?.has(l) ? D : void 0);
                    })(t, d, i),
                    m = O({
                        loader: b,
                        onLoading: t ? () => c?.(t) : void 0,
                        onLoaded: t ? () => a?.(t) : void 0,
                        onError: t ? (l) => s?.(`Failed to load ${t}: ${l}`) : void 0,
                    });
                return (
                    (0, e._)(() => {
                        t ? n(b ? void 0 : t) : n(void 0);
                    }, [b, t]),
                    t
                        ? Z
                            ? { status: "unsupported", moduleKey: Z }
                            : "idle" === m.status || "loading" === m.status
                              ? { status: "loading", moduleKey: t }
                              : "error" === m.status
                                ? { status: "error", moduleKey: t, error: m.error }
                                : { status: "loaded", moduleKey: t, Component: m.Component }
                        : { status: "idle" }
                );
            })({
                moduleKey: X,
                modules: z,
                onModuleLoading: l.onModuleLoading,
                onModuleLoaded: l.onModuleLoaded,
                onError: d,
            });
        !(function (l) {
            let { moduleKey: t, modules: d } = l,
                i = t ? d[t] : void 0,
                c = O({ loader: i });
            null != i && c.status;
        })({ moduleKey: "ready" === N.status && N.homeScreen.visible ? y : void 0, modules: z });
        let r = "loaded" === Y.status,
            T =
                !0 === l.enableHome &&
                "ready" === N.status &&
                !0 !== N.flow.disableLaunchScreen &&
                0 === N.currentStepIndex &&
                !1 === N.homeScreen.visible &&
                "loading" === Y.status,
            V = k(!0 === N.presentation.isAwaitingReady, 150),
            R = k("ready" === N.status && ("idle" === Y.status || "loading" === Y.status || "error" === Y.status), 150);
        (i = N?.status === "ready" ? N.steps : []),
            (Z = N?.status === "ready" ? N.currentStepIndex : -1),
            (b = (0, e.l)(new Set())),
            (0, e._)(() => {
                if (r && Z < i.length - 1) {
                    let t = i[Z + 1];
                    if (t && !b.current.has(t)) {
                        var l;
                        b.current.add(t);
                        let d = z[t];
                        d &&
                            ((l = () => {
                                d().catch(() => {
                                    b.current.delete(t);
                                });
                            }),
                            "u" > typeof requestIdleCallback
                                ? requestIdleCallback(() => {
                                      l();
                                  })
                                : setTimeout(l, 0));
                    }
                }
            }, [i, Z, z, r]),
            (0, e._)(() => {
                if (l.onFlowEvent) return M.subscribeFlowEvent(l.onFlowEvent);
            }, [M, l.onFlowEvent]),
            (0, e._)(() => {
                N.presentation.shouldPrefetchHome && w();
            }, [N.presentation.shouldPrefetchHome]),
            (0, e._)(() => {
                l.lang && m.language !== l.lang && m.changeLanguage(l.lang);
            }, [l.lang, m]),
            (0, e._)(() => {
                if (N?.status !== "ready" || "REDIRECT_TO_MOBILE" === N.currentStep) return;
                let t = (0, G.Ni)(N.flow);
                t.length > 0 &&
                    (l.onWasmWarmup?.(t),
                    (function (l, t) {
                        if ("REDIRECT_TO_MOBILE" === l.currentStep) return;
                        let d = (0, G.Ni)(l.flow);
                        if (d.length > 0) {
                            let l = (0, o.l)({ ...(t ?? {}), pipelines: d }),
                                i = { ...l, pipelines: l.pipelines ? [...l.pipelines] : void 0 };
                            (0, o.i)(i),
                                (0, u.n)(l)
                                    .then(() => (0, o.t)(i))
                                    .then(() => (0, o.o)(i))
                                    .catch((l) => {
                                        console.error("WASM warmup failed:", l);
                                    });
                        }
                    })(N, l.wasmConfig));
            }, [N, l]),
            (0, e._)(() => {
                N?.status === "finished" && t(N.finishStatus);
            }, [N?.status, t, N]),
            (0, e._)(() => {
                N?.status === "error" && d && d(N.error, N.errorCode);
            }, [N?.status, d, N]),
            (0, e._)(() => {
                N?.status === "ready" &&
                    "ID" === N.currentStep &&
                    N.steps.includes("TUTORIAL_ID") &&
                    M.completeModule();
            }, [N, M]);
        let g = !(l.spinnerConfig?.title || l.spinnerConfig?.subtitle);
        if ("error" === h.status)
            return (0, e.v)("div", {
                class: "IncodeFlow",
                children: (0, e.v)("div", { children: ["Error: ", h.error] }),
            });
        if (N.homeScreen.visible || T)
            return (0, e.v)("div", {
                class: "IncodeFlow",
                children: (0, e.v)(e.o, {
                    fallback: null,
                    children: (0, e.v)(_, {
                        isContinueLoading: N.homeScreen.isContinueLoading || T,
                        onContinue: () => M.continueFromHome(),
                    }),
                }),
            });
        if ("initializing" === h.status)
            return (0, e.v)("div", {
                class: "IncodeFlow",
                children: (0, e.v)(n.t, { spinnerConfig: l.spinnerConfig, hideText: g }),
            });
        if (N.presentation.isAwaitingReady)
            return V
                ? (0, e.v)("div", {
                      class: "IncodeFlow",
                      children: (0, e.v)(n.t, { spinnerConfig: l.spinnerConfig, hideText: g }),
                  })
                : (0, e.v)("div", { class: "IncodeFlow" });
        if ("error" === N.status)
            return (0, e.v)("div", {
                class: "IncodeFlow",
                children: (0, e.v)("div", { children: ["Error: ", N.error] }),
            });
        if ("finished" === N.status) return null;
        if (N?.status === "ready") {
            let { currentStep: t, config: i, flow: c } = N,
                { flowId: a } = c;
            if (!t || !i)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(n.t, { spinnerConfig: l.spinnerConfig, hideText: g }),
                });
            if (L.has(t)) return (0, e.v)("div", { class: "IncodeFlow" });
            if ("unsupported" === Y.status)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(x, { moduleKey: t, onNext: () => M.completeModule() }),
                });
            if ("idle" === Y.status || "loading" === Y.status || "error" === Y.status)
                return R
                    ? (0, e.v)("div", {
                          class: "IncodeFlow",
                          children: (0, e.v)(n.t, { spinnerConfig: l.spinnerConfig, hideText: g }),
                      })
                    : (0, e.v)("div", { class: "IncodeFlow" });
            let { Component: s } = Y;
            if ("REDIRECT_TO_MOBILE" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeFlow(),
                            onContinue: () => M.completeModule(),
                            onError: d,
                        },
                        `redirect-to-mobile-${N.currentStepIndex}`,
                    ),
                });
            if ("SELFIE" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Selfie verification error");
                            },
                        },
                        `selfie-${N.currentStepIndex}`,
                    ),
                });
            if ("AUTHENTICATION" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: { ...i, authHint: l.authHint },
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Authentication error");
                            },
                        },
                        `authentication-${N.currentStepIndex}`,
                    ),
                });
            if ("PHONE" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Phone verification error");
                            },
                        },
                        `phone-${N.currentStepIndex}`,
                    ),
                });
            if ("EMAIL" === t)
                return i && "boolean" == typeof i.otpVerification && "number" == typeof i.otpExpirationInMinutes
                    ? (0, e.v)("div", {
                          class: "IncodeFlow",
                          children: (0, e.v)(
                              s,
                              {
                                  config: i,
                                  onFinish: () => M.completeModule(),
                                  onError: (l) => {
                                      d?.(l ?? "Email verification error");
                                  },
                              },
                              `email-${N.currentStepIndex}`,
                          ),
                      })
                    : (0, e.v)("div", {
                          class: "IncodeFlow",
                          children: (0, e.v)("div", { children: "Error: Invalid email configuration" }),
                      });
            if ("ID" === t || "SECOND_ID" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: "SECOND_ID" === t ? { ...i, isSecondId: !0 } : i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "ID capture error");
                            },
                        },
                        `id-${N.currentStepIndex}`,
                    ),
                });
            if ("ID_OCR" === t) {
                let l = N.steps.includes("SECOND_ID");
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: { ...i, secondId: i.secondId ?? l, flowId: a },
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "ID OCR error");
                            },
                        },
                        `id-ocr-${N.currentStepIndex}`,
                    ),
                });
            }
            if ("CPF_OCR" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "CPF OCR error");
                            },
                        },
                        `cpf-ocr-${N.currentStepIndex}`,
                    ),
                });
            if ("FACE_MATCH" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Face match error");
                            },
                        },
                        `face-match-${N.currentStepIndex}`,
                    ),
                });
            if ("CURP_VALIDATION" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "CURP validation error");
                            },
                        },
                        `curp-validation-${N.currentStepIndex}`,
                    ),
                });
            if ("GOVT_VALIDATION_PROVISIONING" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Government validation error");
                            },
                        },
                        `govt-validation-${N.currentStepIndex}`,
                    ),
                });
            if ("GEOLOCATION" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Geolocation error");
                            },
                        },
                        `geolocation-${N.currentStepIndex}`,
                    ),
                });
            if ("EXTERNAL_VERIFICATION" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: { flowId: N.flow.flowId },
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "External verification error");
                            },
                        },
                        `ekyc-${N.currentStepIndex}`,
                    ),
                });
            if ("DOCUMENT_CAPTURE" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Document capture error");
                            },
                        },
                        `document-capture-${N.currentStepIndex}`,
                    ),
                });
            if ("ADDRESS" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: { ...i, processingType: "addressStatement" },
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Address capture error");
                            },
                        },
                        `address-${N.currentStepIndex}`,
                    ),
                });
            if ("SIGNATURE" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Signature capture error");
                            },
                        },
                        `signature-${N.currentStepIndex}`,
                    ),
                });
            if ("EKYB" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: {
                                flowId: a,
                                checkBusinessName: i.checkBusinessName,
                                checkAddress: i.checkAddress,
                                checkTaxId: i.checkTaxId,
                                checkUniqueBeneficialOwner: i.checkUniqueBeneficialOwner,
                            },
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "eKYB verification error");
                            },
                        },
                        `ekyb-${N.currentStepIndex}`,
                    ),
                });
            if ("COMBINED_CONSENT" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Combined consent error");
                            },
                        },
                        `combined-consent-${N.currentStepIndex}`,
                    ),
                });
            if ("MANDATORY_CONSENT" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Mandatory consent error");
                            },
                        },
                        `mandatory-consent-${N.currentStepIndex}`,
                    ),
                });
            if ("AE_SIGNATURE" === t || "QE_SIGNATURE" === t) {
                let l = "QE_SIGNATURE" === t ? "qe" : "ae";
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: { uploadDocument: i.uploadDocument, downloadDocument: i.downloadDocument },
                            onFinish: () => M.completeModule(),
                            onError: (t) => {
                                d?.(t ?? `${l.toUpperCase()} Signature error`);
                            },
                        },
                        `${l}-signature-${N.currentStepIndex}`,
                    ),
                });
            }
            if ("ANTIFRAUD" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Antifraud check error");
                            },
                        },
                        `antifraud-${N.currentStepIndex}`,
                    ),
                });
            if ("CUSTOM_FIELDS" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Custom fields error");
                            },
                        },
                        `custom-fields-${N.currentStepIndex}`,
                    ),
                });
            if ("WATCHLIST" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Watchlist check error");
                            },
                        },
                        `watchlist-${N.currentStepIndex}`,
                    ),
                });
            if ("WATCHLIST_BUSINESS" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Watchlist for business check error");
                            },
                        },
                        `watchlist-for-business-${N.currentStepIndex}`,
                    ),
                });
            if ("INCODE_WATCHLIST" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            config: i,
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Custom watchlist check error");
                            },
                        },
                        `incode-watchlist-${N.currentStepIndex}`,
                    ),
                });
            if ("CROSS_DOCUMENT_DATA_MATCH" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
                        s,
                        {
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Cross document data match error");
                            },
                        },
                        `cross-document-data-match-${N.currentStepIndex}`,
                    ),
                });
            if ("DYNAMIC_FORMS" === t)
                return (0, e.v)("div", {
                    class: "IncodeFlow",
                    children: (0, e.v)(
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
                            onFinish: () => M.completeModule(),
                            onError: (l) => {
                                d?.(l ?? "Dynamic forms error");
                            },
                        },
                        `dynamic-forms-${N.currentStepIndex}`,
                    ),
                });
        }
        return null;
    };
(0, b.t)(
    ({ config: l, onFinish: t = () => {}, onError: d }) =>
        (0, e.v)(Z.t, { children: l ? (0, e.v)($, { config: l, onFinish: t, onError: d }) : null }),
    "incode-flow",
);
