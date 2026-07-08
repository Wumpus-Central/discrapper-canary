i.d(t, { n: () => l, t: () => h });
var r = i(209688),
    n = i(171251),
    o = i(886421);
let a = {
        SELFIE: "selfie",
        AUTHENTICATION: "selfie",
        FACE_MATCH: "selfie",
        VIDEO_ONBOARDING: "selfie",
        ID: "idCapture",
        TUTORIAL_ID: "idCapture",
        SECOND_ID: "idCapture",
    },
    s = new Set(["SELFIE", "AUTHENTICATION"]);
function l(e) {
    let t = new Set();
    for (let i of e.flowModules) {
        if (s.has(i.key) && i.configuration?.onDeviceFaceResultsSubmissionEnabled === !0) {
            t.add("onDeviceSelfie");
            continue;
        }
        let e = a[i.key];
        e && t.add(e);
    }
    return [...t];
}
function c(e, t) {
    return e.some((e) => e.key === t);
}
let d = ["US", "Worldwide", "Other", "US_Illinois", "US_Texas", "US_California", "US_Washington"],
    u = {
        us: "US",
        worldwide: "Worldwide",
        worldwide_consent: "Worldwide",
        other: "Other",
        us_illinois: "US_Illinois",
        usillinois: "US_Illinois",
        us_texas: "US_Texas",
        ustexas: "US_Texas",
        us_california: "US_California",
        uscalifornia: "US_California",
        us_washington: "US_Washington",
        uswashington: "US_Washington",
    },
    h = async (e, t = {}) => {
        let i = (0, o.r)({ signal: e }).catch(() => void 0),
            a = await r.t.get(n.t.flow, { signal: e });
        if (!a.ok) throw Error(`GET /flow failed: ${a.status} ${a.statusText}`);
        let s = a.data;
        !1 !== s.mandatoryConsentCheck && (await i);
        let l = (function (e) {
                var t;
                if (!1 === e.mandatoryConsentCheck) return e;
                let i = (0, o.n)();
                if (!i?.showMandatoryConsent || e.flowModules.find((e) => "MANDATORY_CONSENT" === e.key)) return e;
                let r = {
                    key: "MANDATORY_CONSENT",
                    configuration: {
                        consentType: (t = i.regulationType)
                            ? d.includes(t)
                                ? t
                                : (u[
                                      t
                                          .trim()
                                          .toLowerCase()
                                          .replace(/[\s-]+/g, "_")
                                  ] ?? "Other")
                            : "Other",
                    },
                };
                return { ...e, flowModules: [r, ...e.flowModules] };
            })(s),
            h = (function (e, t = {}) {
                var i, r, n, o, a, s, l;
                let d = e.flowModules.flatMap((e, t, i) => {
                    if ("TUTORIAL_ID" === e.key) {
                        let t = e.configuration,
                            i = [{ key: "ID", configuration: t }];
                        return t.secondId && i.push({ key: "SECOND_ID", configuration: { ...t, isSecondId: !0 } }), i;
                    }
                    let r = i[t - 1];
                    return "ID" === e.key && r?.key === "TUTORIAL_ID" ? [] : [e];
                });
                return (
                    (n = e),
                    (o = d =
                        c(
                            (r =
                                ((i = d),
                                (d =
                                    !0 !== t.useCPF
                                        ? i
                                        : i.map((e) =>
                                              "ID_OCR" === e.key ? { key: "CPF_OCR", configuration: {} } : e,
                                          )))),
                            "EKYB",
                        )
                            ? r.filter((e) => "WATCHLIST_BUSINESS" !== e.key)
                            : r),
                    !0 !== t.isDesktop ||
                        !0 !== n.redirectDesktopToMobile ||
                        c(o, "REDIRECT_TO_MOBILE") ||
                        ((a = e),
                        (s = d),
                        (l = t),
                        (d = [
                            {
                                key: "REDIRECT_TO_MOBILE",
                                configuration: {
                                    flowId: a.flowId,
                                    disableSmsOption: a.disableSmsOption ?? !1,
                                    addContinueToDesktop: a.addContinueToDesktop ?? !1,
                                    qrPhishingResistance: a.qrPhishingResistance ?? !1,
                                    authHint: l.authHint,
                                    lang: l.lang,
                                },
                            },
                            ...s,
                        ])),
                    d
                );
            })(l, t);
        return console.log({ ...l, flowModules: h }), { ...l, flowModules: h };
    };
