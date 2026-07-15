d.d(t, { n: () => b, t: () => h });
var i = d(768672),
    e = d(288052),
    c = d(943956),
    a = d(769308),
    s = d(802016);
let n = {
        SELFIE: "selfie",
        AUTHENTICATION: "selfie",
        FACE_MATCH: "selfie",
        ID: "idCapture",
        TUTORIAL_ID: "idCapture",
        SECOND_ID: "idCapture",
    },
    Z = new Set(["SELFIE", "AUTHENTICATION"]);
function b(l) {
    let t = new Set();
    for (let d of l.flowModules) {
        if (Z.has(d.key) && d.configuration?.onDeviceFaceResultsSubmissionEnabled === !0) {
            t.add("onDeviceSelfie");
            continue;
        }
        if ("VIDEO_ONBOARDING" === d.key) {
            for (let l of (0, s.r)(d.configuration)) t.add(l);
            continue;
        }
        let l = n[d.key];
        l && t.add(l);
    }
    return [...t];
}
function m(l, t) {
    return l.some((l) => l.key === t);
}
let o = ["US", "Worldwide", "Other", "US_Illinois", "US_Texas", "US_California", "US_Washington"],
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
    h = async (l, t = {}) => {
        let d,
            s = (0, c.i)({ signal: l }).catch(() => void 0),
            n = i.t.get(e.t.flow, { signal: l });
        try {
            d = (await n).data;
        } catch (l) {
            (0, a.n)(e.t.flow, l);
        }
        !1 !== d.mandatoryConsentCheck && (await s);
        let Z = (function (l) {
                var t;
                if (!1 === l.mandatoryConsentCheck) return l;
                let d = (0, c.r)();
                if (!d?.showMandatoryConsent || l.flowModules.find((l) => "MANDATORY_CONSENT" === l.key)) return l;
                let i = {
                    key: "MANDATORY_CONSENT",
                    configuration: {
                        consentType: (t = d.regulationType)
                            ? o.includes(t)
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
                return { ...l, flowModules: [i, ...l.flowModules] };
            })(d),
            b = (function (l, t = {}) {
                var d, i, e, c, a, s, n, Z;
                let b = l.flowModules.flatMap((l, t, d) => {
                    if ("TUTORIAL_ID" === l.key) {
                        let t = l.configuration,
                            d = [{ key: "ID", configuration: t }];
                        return t.secondId && d.push({ key: "SECOND_ID", configuration: { ...t, isSecondId: !0 } }), d;
                    }
                    let i = d[t - 1];
                    return "ID" === l.key && i?.key === "TUTORIAL_ID" ? [] : [l];
                });
                return (
                    (c = l),
                    (a = b =
                        (e = b =
                            m(
                                (i =
                                    ((d = b),
                                    (b =
                                        !0 !== t.useCPF
                                            ? d
                                            : d.map((l) =>
                                                  "ID_OCR" === l.key ? { key: "CPF_OCR", configuration: {} } : l,
                                              )))),
                                "EKYB",
                            )
                                ? i.filter((l) => "WATCHLIST_BUSINESS" !== l.key)
                                : i).some((l) => "VIDEO_ONBOARDING" === l.key && !0 === l.configuration.useAsSelfie)
                            ? e.filter((l) => "SELFIE" !== l.key)
                            : e),
                    !0 !== t.isDesktop ||
                        !0 !== c.redirectDesktopToMobile ||
                        m(a, "REDIRECT_TO_MOBILE") ||
                        ((s = l),
                        (n = b),
                        (Z = t),
                        (b = [
                            {
                                key: "REDIRECT_TO_MOBILE",
                                configuration: {
                                    flowId: s.flowId,
                                    disableSmsOption: s.disableSmsOption ?? !1,
                                    addContinueToDesktop: s.addContinueToDesktop ?? !1,
                                    qrPhishingResistance: s.qrPhishingResistance ?? !1,
                                    authHint: Z.authHint,
                                    lang: Z.lang,
                                },
                            },
                            ...n,
                        ])),
                    b
                );
            })(Z, t);
        return { ...Z, flowModules: b };
    };
