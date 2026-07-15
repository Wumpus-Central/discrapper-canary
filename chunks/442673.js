s.d(t, { CertificateIssuance: () => S });
var a = s(529058),
    c = s(287822),
    i = s(748922),
    r = s(898159),
    n = s(898369),
    d = s(188043);
s(48913);
var l = s(728718),
    o = s(787146);
s(748158);
var u = s(430671),
    v = s(34050),
    I = s(878176),
    h = s(96798),
    f = s(296767),
    w = s(944982),
    p = ({ blob: e, onDownloaded: t, onError: s }) => {
        let { t: i } = (0, a.n)(),
            r = (0, c.l)(null),
            u = (0, c.d)(() => {
                try {
                    return URL.createObjectURL(e);
                } catch {
                    return null;
                }
            }, [e]);
        return ((0, c._)(
            () => () => {
                u && URL.revokeObjectURL(u);
            },
            [u],
        ),
        (0, c._)(() => {
            u || s();
        }, [u, s]),
        u)
            ? (0, c.v)(d.t, {
                  className: "IncodeCertificateIssuancePage",
                  children: (0, c.v)("div", {
                      className: "IncodeCertificateIssuanceScreenContent",
                      children: [
                          (0, c.v)(n.r, {}),
                          (0, c.v)("div", {
                              className: "IncodeCertificateIssuanceScreenArea",
                              children: [
                                  (0, c.v)(v.t, { children: i("certificateIssuance.v2.download.title") }),
                                  (0, c.v)(l.a, {
                                      className: "IncodeCertificateIssuanceScreenText",
                                      children: i("certificateIssuance.v2.download.text"),
                                  }),
                              ],
                          }),
                          (0, c.v)(n.r, {}),
                          (0, c.v)("a", {
                              ref: r,
                              href: u,
                              download: "certificate.cer",
                              "aria-label": i("certificateIssuance.download.button"),
                              tabIndex: -1,
                              hidden: !0,
                          }),
                          (0, c.v)(o.t, {
                              onClick: () => {
                                  r.current?.click(), t();
                              },
                              children: i("certificateIssuance.download.button"),
                          }),
                      ],
                  }),
              })
            : null;
    },
    m = ({ size: e = 16 }) =>
        (0, c.v)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: e,
            viewBox: "0 0 16 16",
            fill: "none",
            "aria-hidden": "true",
            children: [
                (0, c.v)("title", { children: "Ellipse icon" }),
                (0, c.v)("circle", {
                    cx: "8",
                    cy: "8",
                    r: "5.585",
                    stroke: "var(--icon-neutral-500)",
                    "stroke-width": "1.5",
                }),
            ],
        }),
    C = ({ validations: e }) => {
        let { t } = (0, a.n)();
        return (0, c.v)("ul", {
            class: "IncodeCertificateIssuanceRequirements",
            "aria-live": "polite",
            "data-testid": "password-requirements",
            children: w.Nj.map((s) => {
                let a = e[s];
                return (0, c.v)(
                    "li",
                    {
                        class: "IncodeCertificateIssuanceRequirement",
                        "data-testid": `password-requirement-${s}`,
                        "data-met": a,
                        children: [
                            (0, c.v)("span", {
                                "aria-hidden": "true",
                                class: "IncodeCertificateIssuanceRequirementIcon",
                                children: a ? (0, c.v)(u.t, { size: 16 }) : (0, c.v)(m, {}),
                            }),
                            (0, c.v)("span", {
                                class: "IncodeCertificateIssuanceRequirementLabel",
                                children: t(w.K1[s], { min: w.AG }),
                            }),
                            (0, c.v)("span", {
                                class: "IncodeSrOnly",
                                children: a
                                    ? t("certificateIssuance.password.requirementMet")
                                    : t("certificateIssuance.password.requirementNotMet"),
                            }),
                        ],
                    },
                    s,
                );
            }),
        });
    },
    b = ({ password: e, passwordValidations: t, canSubmit: s, onPasswordChange: i, onSubmit: r }) => {
        let { t: n } = (0, a.n)();
        return (0, c.v)(d.t, {
            title: n("certificateIssuance.password.title"),
            subtitle: n("certificateIssuance.password.description"),
            className: "IncodeCertificateIssuancePage",
            children: (0, c.v)("div", {
                className: "IncodeCertificateIssuanceContent",
                children: [
                    (0, c.v)("div", {
                        className: "IncodeCertificateIssuancePasswordSection",
                        children: (0, c.v)("div", {
                            className: "IncodeCertificateIssuancePassword",
                            children: [
                                (0, c.v)(h.t, {
                                    id: "certificate-password",
                                    "data-testid": "certificate-password",
                                    type: "password",
                                    placeholder: n("certificateIssuance.password.placeholder"),
                                    value: e,
                                    autocomplete: "new-password",
                                    onInput: (e) => {
                                        i(e.target.value);
                                    },
                                    closeButton: { show: e.length > 0, onClose: () => i("") },
                                }),
                                (0, c.v)(l.o, { children: n("certificateIssuance.passwordRequirements.description") }),
                                (0, c.v)(C, { validations: t }),
                            ],
                        }),
                    }),
                    (0, c.v)(o.t, { disabled: !s, onClick: r, children: n("certificateIssuance.continue") }),
                ],
            }),
        });
    },
    g = ({ onDone: e }) => {
        let { t } = (0, a.n)();
        return (0, c.v)(d.t, {
            className: "IncodeCertificateIssuancePage",
            children: (0, c.v)("div", {
                className: "IncodeCertificateIssuanceScreenContent",
                children: [
                    (0, c.v)(n.r, {}),
                    (0, c.v)(u.t, {}),
                    (0, c.v)(n.r, { size: 16 }),
                    (0, c.v)("div", {
                        className: "IncodeCertificateIssuanceScreenArea",
                        children: [
                            (0, c.v)(v.t, { children: t("certificateIssuance.success.title") }),
                            (0, c.v)(l.a, {
                                className: "IncodeCertificateIssuanceScreenText",
                                children: t("certificateIssuance.success.text"),
                            }),
                        ],
                    }),
                    (0, c.v)(n.r, {}),
                    (0, c.v)(o.t, { onClick: e, children: t("certificateIssuance.success.done") }),
                ],
            }),
        });
    },
    N = ({ config: e, manager: t, onFinish: s }) => {
        let { t: r } = (0, a.n)(),
            [n, d] = (0, i.u)(() => t || (0, w.uT)({ config: e }), { manageLifecycle: !t });
        switch (
            ((0, c._)(() => {
                "idle" === n.status && d.load();
            }, [n.status, d]),
            (0, i.c)({ status: n.status, onFinish: s, errorStatuses: [] }),
            n.status)
        ) {
            case "idle":
            case "processing":
                return (0, c.v)(I.t, {
                    submittingTitle: r("common.processing"),
                    submittingSubtitle: r("qes.processing.subtitle"),
                    status: "submitting",
                    hideFooterBranding: !1,
                });
            case "password":
                return (0, c.v)(b, {
                    password: n.password,
                    passwordValidations: n.passwordValidations,
                    canSubmit: n.canSubmit,
                    onPasswordChange: (e) => d.setPassword(e),
                    onSubmit: () => d.submitPassword(),
                });
            case "success":
                return (0, c.v)(p, {
                    blob: n.blob,
                    onDownloaded: () => d.markDownloaded(),
                    onError: () => d.reportDownloadError(),
                });
            case "downloaded":
                return (0, c.v)(g, { onDone: () => d.finish() });
            case "error":
                return (0, c.v)(I.t, {
                    failureTitle: r("certificateIssuance.errorTitle"),
                    status: "failure",
                    hideFooterBranding: !1,
                });
            case "finished":
                return null;
            default:
                return n;
        }
    },
    S = ({ config: e, manager: t, onFinish: s }) =>
        e ? (0, c.v)(r.t, { children: (0, c.v)(N, { config: e, manager: t, onFinish: s }) }) : null;
(0, f.t)(S, "incode-certificate-issuance");
