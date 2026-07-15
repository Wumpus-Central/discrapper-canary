i.d(t, { DocumentCapture: () => O });
var n = i(529058),
    a = i(287822),
    r = i(748922),
    l = i(898159),
    o = i(898369),
    d = i(188043),
    c = i(48913),
    u = i(211396),
    s = i(787146),
    p = i(748158),
    C = i(430671),
    v = i(398297),
    m = i(351572),
    h = i(836234),
    f = i(115242),
    g = i(296767),
    H = i(645826),
    I = ({ stream: e, manager: t, onOpenHelp: i }) => {
        let { t: r } = (0, n.n)(),
            l = (0, a.l)(null),
            d = (0, a.h)(() => {
                let e = l.current;
                if (!e) return;
                let i = (function (e) {
                    if (e.readyState < 2 || 0 === e.videoWidth || 0 === e.videoHeight) return null;
                    let t = document.createElement("canvas");
                    (t.width = e.videoWidth), (t.height = e.videoHeight);
                    let i = t.getContext("2d");
                    return i ? (i.drawImage(e, 0, 0), t.toDataURL("image/jpeg", 0.92).split(",")[1] ?? null) : null;
                })(e);
                if (!i) return;
                let n = new File(
                    [new Blob([Uint8Array.from(atob(i), (e) => e.charCodeAt(0))], { type: "image/jpeg" })],
                    "document.jpg",
                    { type: "image/jpeg" },
                );
                t.setFile(n, `data:image/jpeg;base64,${i}`);
            }, [t]);
        return (0, a.v)(h.t, {
            stream: e,
            videoRef: l,
            "data-testid": "document-capture-camera",
            children: (0, a.v)(c.d, {
                children: [
                    (0, a.v)(c.u, {
                        title: r("documentCapture.camera.title"),
                        subtitle: r("documentCapture.camera.subtitle"),
                    }),
                    (0, a.v)(o.r, { size: 16 }),
                    (0, a.v)(h.n, { variant: "fill" }),
                    (0, a.v)(c.l, {
                        onOpenHelp: i,
                        onCapture: d,
                        isManualCapture: !0,
                        captureAriaLabel: r("manualCapture.ariaLabel"),
                        helpAriaLabel: r("documentCapture.needHelp.open"),
                        encryptionLabel: r("encryptionLabel.encryptedPhotos"),
                    }),
                ],
            }),
        });
    },
    w = [
        {
            titleKey: "documentCapture.commonIssues.farPresent",
            bodyKey: "documentCapture.commonIssues.farPresentDescription",
            Icon: () =>
                (0, a.v)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: [
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M17.1072 2.54785H15.8492C15.4352 2.54785 15.0992 2.88385 15.0992 3.29785C15.0992 3.71185 15.4352 4.04785 15.8492 4.04785H17.1072C18.8392 4.04785 20.2502 5.45785 20.2502 7.19085V8.76785C20.2502 9.18185 20.5862 9.51785 21.0002 9.51785C21.4142 9.51785 21.7502 9.18185 21.7502 8.76785V7.19085C21.7502 4.63085 19.6672 2.54785 17.1072 2.54785Z",
                            fill: "currentColor",
                        }),
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M2.99976 9.51785C3.41376 9.51785 3.74976 9.18185 3.74976 8.76785V7.19085C3.74976 5.45785 5.15976 4.04785 6.89276 4.04785H8.18176C8.59576 4.04785 8.93176 3.71185 8.93176 3.29785C8.93176 2.88385 8.59576 2.54785 8.18176 2.54785H6.89276C4.33276 2.54785 2.24976 4.63085 2.24976 7.19085V8.76785C2.24976 9.18185 2.58576 9.51785 2.99976 9.51785Z",
                            fill: "currentColor",
                        }),
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M8.15012 20.553H6.89212C5.16012 20.553 3.75012 19.143 3.75012 17.411V15.834C3.75012 15.42 3.41412 15.084 3.00012 15.084C2.58612 15.084 2.25012 15.42 2.25012 15.834V17.411C2.25012 19.97 4.33312 22.053 6.89212 22.053H8.15012C8.56412 22.053 8.90012 21.717 8.90012 21.303C8.90012 20.889 8.56412 20.553 8.15012 20.553Z",
                            fill: "currentColor",
                        }),
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M20.9997 15.083C20.5857 15.083 20.2497 15.419 20.2497 15.833V17.41C20.2497 19.143 18.8397 20.552 17.1067 20.552H15.8177C15.4037 20.552 15.0677 20.888 15.0677 21.302C15.0677 21.716 15.4037 22.052 15.8177 22.052H17.1067C19.6667 22.052 21.7497 19.97 21.7497 17.41V15.833C21.7497 15.419 21.4137 15.083 20.9997 15.083Z",
                            fill: "currentColor",
                        }),
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M17.0984 12.2984C17.0984 10.7004 15.7974 9.40039 14.1994 9.40039H9.80037C8.20237 9.40039 6.90137 10.7004 6.90137 12.2984C6.90137 13.8974 8.20237 15.1974 9.80037 15.1974H14.1994C15.7974 15.1974 17.0984 13.8974 17.0984 12.2984Z",
                            fill: "currentColor",
                        }),
                    ],
                }),
        },
        {
            titleKey: "documentCapture.commonIssues.foldedIdPresent",
            bodyKey: "documentCapture.commonIssues.foldedIdPresentDescription",
            Icon: () =>
                (0, a.v)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: [
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M3.20994 9.27056H18.8829C19.0379 9.27056 19.1849 9.20144 19.2789 9.08239C19.3739 8.96431 19.4059 8.81071 19.3659 8.66671L18.3169 4.90447C18.0499 3.94831 17.4109 3.1496 16.5179 2.65424C15.6249 2.15984 14.5849 2.02736 13.5879 2.28464L5.45694 4.37552C3.40094 4.90544 2.17694 6.94159 2.72694 8.9144C2.78594 9.12464 2.98294 9.27056 3.20994 9.27056Z",
                            fill: "currentColor",
                        }),
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M20.5679 14.3484H4.89485C4.73985 14.3484 4.59285 14.4175 4.49885 14.5365C4.40385 14.6546 4.37185 14.8082 4.41185 14.9522L5.46085 18.7135C5.92185 20.3676 7.48585 21.461 9.19185 21.461C9.52085 21.461 9.85585 21.4207 10.1899 21.3343L18.3209 19.2425C19.3169 18.9871 20.1499 18.3737 20.6649 17.5164C21.1809 16.6591 21.3179 15.6597 21.0509 14.7045C20.9919 14.4943 20.7949 14.3484 20.5679 14.3484Z",
                            fill: "currentColor",
                        }),
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M13.603 11.0906C13.189 11.0906 12.853 11.4131 12.853 11.8106C12.853 12.208 13.189 12.5306 13.603 12.5306H15.7C16.114 12.5306 16.45 12.208 16.45 11.8106C16.45 11.4131 16.114 11.0906 15.7 11.0906H13.603Z",
                            fill: "currentColor",
                        }),
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M20.9999 11.0906H18.9029C18.4889 11.0906 18.1529 11.4131 18.1529 11.8106C18.1529 12.208 18.4889 12.5306 18.9029 12.5306H20.9999C21.4139 12.5306 21.7499 12.208 21.7499 11.8106C21.7499 11.4131 21.4139 11.0906 20.9999 11.0906Z",
                            fill: "currentColor",
                        }),
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M8.29977 11.0906C7.88577 11.0906 7.54977 11.4131 7.54977 11.8106C7.54977 12.208 7.88577 12.5306 8.29977 12.5306H10.3968C10.8108 12.5306 11.1468 12.208 11.1468 11.8106C11.1468 11.4131 10.8108 11.0906 10.3968 11.0906H8.29977Z",
                            fill: "currentColor",
                        }),
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M5.84709 11.8106C5.84709 11.4131 5.51109 11.0906 5.09709 11.0906H3.00009C2.58609 11.0906 2.25009 11.4131 2.25009 11.8106C2.25009 12.208 2.58609 12.5306 3.00009 12.5306H5.09709C5.51109 12.5306 5.84709 12.208 5.84709 11.8106Z",
                            fill: "currentColor",
                        }),
                    ],
                }),
        },
        {
            titleKey: "documentCapture.commonIssues.shadowPresent",
            bodyKey: "documentCapture.commonIssues.shadowPresentDescription",
            Icon: () =>
                (0, a.v)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: [
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M20.2262 14.0884C20.2153 14.0934 20.2052 14.0984 20.1943 14.1044C17.2803 15.6594 13.6082 15.1114 11.2653 12.7724C8.92225 10.4234 8.36725 6.75042 9.92525 3.82142C10.0192 3.62542 9.99525 3.39742 9.86125 3.22742C9.73525 3.06742 9.46825 2.97642 9.27125 3.03442C5.22925 4.19442 2.40625 7.94142 2.40625 12.1454C2.40625 17.3724 6.65725 21.6254 11.8833 21.6254C16.0913 21.6254 19.8372 18.7984 20.9963 14.7464C21.0473 14.5604 20.9672 14.3004 20.8202 14.1754C20.6742 14.0494 20.4012 14.0094 20.2262 14.0884Z",
                            fill: "currentColor",
                        }),
                        (0, a.v)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M11.8748 2.375C11.4608 2.375 11.1248 2.711 11.1248 3.125C11.1248 3.539 11.4608 3.875 11.8748 3.875C16.4068 3.875 20.0938 7.562 20.0938 12.095C20.0938 12.509 20.4298 12.845 20.8438 12.845C21.2578 12.845 21.5938 12.509 21.5938 12.095C21.5938 6.735 17.2338 2.375 11.8748 2.375Z",
                            fill: "currentColor",
                        }),
                    ],
                }),
        },
        {
            titleKey: "documentCapture.commonIssues.dirtyPresent",
            bodyKey: "documentCapture.commonIssues.dirtyPresentDescription",
            Icon: () =>
                (0, a.v)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, a.v)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M14.314 13.9858C14.607 14.2671 14.607 14.7231 14.314 15.0043C14.168 15.1445 13.976 15.2146 13.784 15.2146C13.592 15.2146 13.4 15.1445 13.253 15.0043L12 13.8005L10.744 15.0063C10.597 15.1474 10.405 15.2175 10.213 15.2175C10.022 15.2175 9.83 15.1474 9.683 15.0063C9.39 14.7259 9.39 14.269 9.683 13.9887L10.939 12.7829L9.683 11.5771C9.39 11.2959 9.39 10.8408 9.683 10.5595C9.976 10.2783 10.451 10.2783 10.744 10.5595L12 11.7653L13.253 10.5624C13.546 10.2811 14.021 10.2811 14.314 10.5624C14.607 10.8437 14.607 11.2997 14.314 11.581L13.061 12.7829L14.314 13.9858ZM17.957 6.57747C17.594 6.56403 17.255 6.41811 17.013 6.17427C16.968 6.12723 16.791 5.91507 16.376 5.16819C15.898 4.31187 14.974 3.78003 13.964 3.78003H10.053C9.058 3.78003 8.142 4.29939 7.661 5.13459C7.224 5.89395 7.043 6.11763 6.995 6.16947C6.744 6.42195 6.405 6.56787 6.062 6.58227C4.1 6.58227 2.502 8.11443 2.5 9.99795V15.4143C2.5 17.8527 4.566 19.837 7.106 19.837H16.894C19.433 19.837 21.5 17.8527 21.5 15.4143V9.99603C21.5 8.11059 19.902 6.57747 17.957 6.57747Z",
                        fill: "currentColor",
                    }),
                }),
        },
    ],
    V = ({ onClose: e }) => {
        let { t } = (0, n.n)();
        return (0, a.v)(c.v, {
            "aria-labelledby": "document-common-issues-title",
            children: [
                (0, a.v)("h2", {
                    id: "document-common-issues-title",
                    class: "IncodeDocumentCommonIssuesTitle",
                    children: t("commonIssues.commonIssues"),
                }),
                (0, a.v)(o.r, { size: 32 }),
                (0, a.v)("div", {
                    class: "IncodeDocumentCommonIssuesCards",
                    children: w.map((e) =>
                        (0, a.v)(
                            "div",
                            {
                                class: "IncodeDocumentCommonIssuesCard",
                                children: [
                                    (0, a.v)("div", {
                                        class: "IncodeDocumentCommonIssuesCardIcon",
                                        children: (0, a.v)(e.Icon, {}),
                                    }),
                                    (0, a.v)("div", {
                                        class: "IncodeDocumentCommonIssuesCardText",
                                        children: [
                                            (0, a.v)("h5", {
                                                class: "IncodeDocumentCommonIssuesCardTitle",
                                                children: t(e.titleKey),
                                            }),
                                            (0, a.v)("p", {
                                                class: "IncodeDocumentCommonIssuesCardBody",
                                                children: t(e.bodyKey),
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            e.titleKey,
                        ),
                    ),
                }),
                (0, a.v)("div", {
                    class: "IncodeDocumentCommonIssuesButtons",
                    children: (0, a.v)(s.t, { onClick: e, children: t("commonIssues.tryAgain") }),
                }),
            ],
        });
    },
    D = ({ manager: e }) => {
        let { t } = (0, n.n)();
        return (0, a.v)("div", {
            class: "IncodeDocumentCaptureActionRow",
            children: [
                (0, a.v)(s.t, {
                    variant: "secondary",
                    onClick: () => e.retake(),
                    "data-testid": "document-capture-retake-button",
                    children: t("documentCapture.review.replace"),
                }),
                (0, a.v)(s.t, {
                    onClick: () => e.accept(),
                    "data-testid": "document-capture-accept-button",
                    children: t("documentCapture.review.continue"),
                }),
            ],
        });
    },
    y = ({ isFilePdf: e }) => {
        let { t } = (0, n.n)();
        return (0, a.v)(a.x, {
            children: [
                (0, a.v)("h2", {
                    class: "IncodeDocumentCaptureReviewTitle",
                    children: t(e ? "documentCapture.review.titlePdfUpload" : "documentCapture.review.titleCaptured"),
                }),
                (0, a.v)(o.r, { size: 12 }),
                (0, a.v)("p", {
                    class: "IncodeDocumentCaptureReviewSubtitle",
                    children: t(
                        e ? "documentCapture.review.subtitlePdfUpload" : "documentCapture.review.subtitleCaptured",
                    ),
                }),
            ],
        });
    },
    M = ({ manager: e }) => {
        let { t } = (0, n.n)();
        return (0, a.v)(s.t, {
            onClick: () => e.continue(),
            "data-testid": "document-capture-continue-button",
            children: t("documentCapture.review.continue"),
        });
    },
    b = () => {
        let { t: e } = (0, n.n)();
        return (0, a.v)(a.x, {
            children: [
                (0, a.v)(C.t, { size: 30 }),
                (0, a.v)(o.r, { size: 16 }),
                (0, a.v)("h2", {
                    class: "IncodeDocumentCaptureReviewTitle",
                    children: e("documentCapture.review.successTitle"),
                }),
            ],
        });
    },
    L = ({ progress: e, isFilePdf: t }) => {
        let { t: i } = (0, n.n)(),
            r = i(t ? "documentCapture.review.uploading" : "documentCapture.review.analyzing");
        return (0, a.v)(a.x, { children: [(0, a.v)(o.r, { size: 8 }), (0, a.v)(c._, { progress: e, label: r })] });
    },
    _ = (0, a.c)(() =>
        Promise.resolve()
            .then(i.bind(i, 219300))
            .then((e) => e.n)
            .then((e) => ({ default: e.PdfViewer })),
    ),
    Z = ({ state: e, manager: t }) => {
        let { t: i } = (0, n.n)();
        if ("failure" === e.status)
            return (0, a.v)(v.a, {
                "data-testid": "document-capture-error",
                title: i("documentCapture.review.error.title"),
                description: i(
                    e.attemptsRemaining <= 0 ? "notifications.noTries" : "documentCapture.review.error.description",
                ),
                attemptsRemaining: e.attemptsRemaining,
                onButtonClick: () => t.retry(),
            });
        let r = "application/pdf" === e.fileType || e.imageBase64.startsWith("data:application/pdf"),
            { fileName: l } = e,
            c = "preview" === e.status,
            u = "uploading" === e.status,
            s = "success" === e.status,
            C = "nextPage" === e.status,
            m = s || C;
        return (0, a.v)(d.t, {
            hideHeader: !0,
            hideFooterBranding: !0,
            className: "IncodeDocumentCapturePage IncodeDocumentCaptureReviewPage",
            "data-testid": "document-capture-review",
            children: (0, a.v)("div", {
                class: "IncodeDocumentCaptureReviewLayout",
                children: [
                    (0, a.v)("div", {
                        class: "IncodeDocumentCaptureReviewHeader",
                        children: [
                            c ? (0, a.v)(y, { isFilePdf: r }) : null,
                            u ? (0, a.v)(L, { progress: e.progress, isFilePdf: r }) : null,
                            m ? (0, a.v)(b, {}) : null,
                        ],
                    }),
                    (0, a.v)("div", {
                        class: (0, o.n)(
                            "IncodeDocumentCaptureReviewPreview",
                            r && "IncodeDocumentCaptureReviewPreviewPdf",
                        ),
                        children: [
                            r
                                ? (0, a.v)(a.x, {
                                      children: [
                                          (0, a.v)("div", {
                                              class: "IncodeDocumentCapturePdfCard",
                                              children: [
                                                  (0, a.v)("div", {
                                                      class: "ImageDocumentCapturePdfPreviewContainer",
                                                      children: (0, a.v)(a.o, {
                                                          fallback: null,
                                                          children: (0, a.v)(_, {
                                                              url: e.imageBase64,
                                                              mode: "thumbnail",
                                                              "aria-label": i("documentCapture.review.titlePdfUpload"),
                                                              className: "ImageDocumentCapturePdfPreview",
                                                          }),
                                                      }),
                                                  }),
                                                  (0, a.v)("p", {
                                                      class: "IncodeDocumentCapturePdfFileName",
                                                      children: l,
                                                  }),
                                              ],
                                          }),
                                          (0, a.v)(o.r, { size: 16 }),
                                      ],
                                  })
                                : e.imageBase64
                                  ? (0, a.v)("div", {
                                        class: "IncodeDocumentCaptureReviewImageContainer",
                                        children: (0, a.v)("img", {
                                            src: e.imageBase64,
                                            alt: "",
                                            class: (0, o.n)(
                                                "IncodeDocumentCaptureReviewImage",
                                                m && "IncodeDocumentCaptureSuccessBorder",
                                            ),
                                            "data-testid": "document-capture-review-image",
                                        }),
                                    })
                                  : null,
                            (0, a.v)(o.r, { size: 8 }),
                            (0, a.v)("div", {
                                class: "IncodeCaptureEncryptionLabel",
                                children: [
                                    (0, a.v)(p.r, { className: "IncodeCaptureEncryptionIcon" }),
                                    (0, a.v)("span", { children: [" ", i("encryptionLabel.encryptedPhotos")] }),
                                ],
                            }),
                            (0, a.v)(o.r, { size: 8 }),
                        ],
                    }),
                    (0, a.v)(o.r, { size: 24 }),
                    (0, a.v)("div", {
                        class: (0, o.n)(
                            "IncodeDocumentCaptureReviewFooter",
                            u && "IncodeDocumentCaptureReviewFooterEmpty",
                        ),
                        children: [c ? (0, a.v)(D, { manager: t }) : null, s ? (0, a.v)(M, { manager: t }) : null],
                    }),
                ],
            }),
        });
    },
    x = (e) =>
        (0, a.v)("svg", {
            viewBox: "0 0 292 305",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
                (0, a.v)("circle", { cx: 145.743, cy: 152.074, r: 139.295, fill: "#E5F0FF" }),
                (0, a.v)("g", {
                    filter: "url(#filter0_d_4533_6792)",
                    children: [
                        (0, a.v)("path", {
                            d: "M58.6299 32.6143C58.6299 29.8528 60.8685 27.6143 63.6299 27.6143H227.017C229.779 27.6143 232.017 29.8528 232.017 32.6143V248.24C232.017 251.002 229.779 253.24 227.017 253.24H63.6299C60.8685 253.24 58.6299 251.002 58.6299 248.24V32.6143Z",
                            fill: "white",
                        }),
                        (0, a.v)("path", {
                            d: "M58.6299 32.6143C58.6299 29.8528 60.8685 27.6143 63.6299 27.6143H227.017C229.779 27.6143 232.017 29.8528 232.017 32.6143V248.24C232.017 251.002 229.779 253.24 227.017 253.24H63.6299C60.8685 253.24 58.6299 251.002 58.6299 248.24V32.6143Z",
                            fill: "black",
                            fillOpacity: 0.01,
                        }),
                    ],
                }),
                (0, a.v)("g", {
                    opacity: 0.5,
                    children: [
                        (0, a.v)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M73.4139 60.0905C73.4139 59.62 73.7953 59.2385 74.2658 59.2385H216.865C217.336 59.2385 217.717 59.62 217.717 60.0905V62.7331C217.717 63.2036 217.336 63.585 216.865 63.585H74.2658C73.7953 63.585 73.4139 63.2036 73.4139 62.7331V60.0905Z",
                            fill: "#C6C8D2",
                        }),
                        (0, a.v)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M73.4139 220.911C73.4139 220.44 73.7953 220.059 74.2658 220.059H216.865C217.336 220.059 217.717 220.44 217.717 220.911V223.553C217.717 224.024 217.336 224.405 216.865 224.405H74.2658C73.7953 224.405 73.4139 224.024 73.4139 223.553V220.911Z",
                            fill: "#C6C8D2",
                        }),
                        (0, a.v)("path", {
                            d: "M73.4139 83.5619C73.4139 83.0914 73.7953 82.7099 74.2658 82.7099H130.805C131.275 82.7099 131.657 83.0914 131.657 83.5619V91.4202C131.657 91.8907 131.275 92.2722 130.805 92.2722H74.2658C73.7953 92.2722 73.4139 91.8907 73.4139 91.4202L73.4139 83.5619Z",
                            fill: "#C6C8D2",
                        }),
                        (0, a.v)("path", {
                            d: "M73.4138 101.817C73.4138 101.347 73.7953 100.965 74.2658 100.965H130.805C131.275 100.965 131.657 101.347 131.657 101.817V109.676C131.657 110.146 131.275 110.528 130.805 110.528H74.2658C73.7953 110.528 73.4138 110.146 73.4138 109.676L73.4138 101.817Z",
                            fill: "#C6C8D2",
                        }),
                        (0, a.v)("path", {
                            d: "M73.399 120.072C73.4072 119.601 73.7952 119.227 74.2657 119.235L154.263 120.631C154.734 120.639 155.109 121.028 155.1 121.498L154.963 129.355C154.955 129.826 154.567 130.2 154.097 130.192L74.0988 128.796C73.6284 128.787 73.2536 128.399 73.2619 127.929L73.399 120.072Z",
                            fill: "#C6C8D2",
                        }),
                        (0, a.v)("path", {
                            d: "M73.399 138.327C73.4072 137.857 73.7952 137.482 74.2657 137.49L97.7678 137.9C98.2383 137.909 98.613 138.297 98.6048 138.767L98.498 144.886C98.4897 145.356 98.1017 145.731 97.6313 145.723L74.1292 145.313C73.6587 145.304 73.284 144.916 73.2922 144.446L73.399 138.327Z",
                            fill: "#C6C8D2",
                        }),
                        (0, a.v)("path", {
                            d: "M73.4139 38.3582C73.4139 37.8877 73.7953 37.5063 74.2658 37.5063H180.355C180.825 37.5063 181.207 37.8877 181.207 38.3582V47.0859C181.207 47.5564 180.825 47.9378 180.355 47.9378H74.2658C73.7953 47.9378 73.4139 47.5564 73.4139 47.0859V38.3582Z",
                            fill: "#C6C8D2",
                        }),
                        (0, a.v)("path", {
                            d: "M195.985 37.4887C195.985 37.0182 196.366 36.6367 196.837 36.6367H216.865C217.336 36.6367 217.717 37.0182 217.717 37.4887V46.2163C217.717 46.6868 217.336 47.0683 216.865 47.0683H196.837C196.366 47.0683 195.985 46.6868 195.985 46.2163V37.4887Z",
                            fill: "#C6C8D2",
                        }),
                    ],
                }),
                (0, a.v)("mask", {
                    id: "path-4-inside-1_4533_6792",
                    fill: "white",
                    children: (0, a.v)("path", {
                        d: "M63.8701 255.593C60.0041 255.593 56.8701 252.459 56.8701 248.593L56.8701 32.5516C56.8701 28.6856 60.0041 25.5516 63.8701 25.5516L227.68 25.5516C231.546 25.5516 234.68 28.6856 234.68 32.5516V248.593C234.68 252.459 231.546 255.593 227.68 255.593L63.8701 255.593Z",
                    }),
                }),
                (0, a.v)("g", {
                    clipPath: "url(#paint0_diamond_4533_6792_clip_path)",
                    "data-figma-skip-parse": "true",
                    mask: "url(#path-4-inside-1_4533_6792)",
                    children: (0, a.v)("g", {
                        transform: "matrix(0.0908399 -0.0986632 0.220271 0.965929 54.935 239.235)",
                        children: [
                            (0, a.v)("rect", {
                                x: 0,
                                y: 0,
                                width: 2037.51,
                                height: 179.024,
                                fill: "url(#paint0_diamond_4533_6792)",
                                opacity: 1,
                                shapeRendering: "crispEdges",
                            }),
                            (0, a.v)("rect", {
                                x: 0,
                                y: 0,
                                width: 2037.51,
                                height: 179.024,
                                transform: "scale(1 -1)",
                                fill: "url(#paint0_diamond_4533_6792)",
                                opacity: 1,
                                shapeRendering: "crispEdges",
                            }),
                            (0, a.v)("rect", {
                                x: 0,
                                y: 0,
                                width: 2037.51,
                                height: 179.024,
                                transform: "scale(-1 1)",
                                fill: "url(#paint0_diamond_4533_6792)",
                                opacity: 1,
                                shapeRendering: "crispEdges",
                            }),
                            (0, a.v)("rect", {
                                x: 0,
                                y: 0,
                                width: 2037.51,
                                height: 179.024,
                                transform: "scale(-1)",
                                fill: "url(#paint0_diamond_4533_6792)",
                                opacity: 1,
                                shapeRendering: "crispEdges",
                            }),
                        ],
                    }),
                }),
                (0, a.v)("path", {
                    d: "M56.8701 248.593H58.8701L58.8701 32.5516H56.8701H54.8701L54.8701 248.593H56.8701ZM63.8701 25.5516V27.5516L227.68 27.5516V25.5516L227.68 23.5516L63.8701 23.5516V25.5516ZM234.68 32.5516H232.68V248.593H234.68H236.68V32.5516H234.68ZM227.68 255.593V253.593L63.8701 253.593V255.593V257.593H227.68V255.593ZM234.68 248.593H232.68C232.68 251.354 230.441 253.593 227.68 253.593V255.593V257.593C232.65 257.593 236.68 253.563 236.68 248.593H234.68ZM227.68 25.5516V27.5516C230.441 27.5516 232.68 29.7901 232.68 32.5516H234.68H236.68C236.68 27.581 232.65 23.5516 227.68 23.5516L227.68 25.5516ZM56.8701 32.5516H58.8701C58.8701 29.7902 61.1087 27.5516 63.8701 27.5516V25.5516V23.5516C58.8996 23.5516 54.8701 27.581 54.8701 32.5516H56.8701ZM56.8701 248.593H54.8701C54.8701 253.563 58.8996 257.593 63.8701 257.593V255.593V253.593C61.1087 253.593 58.8701 251.354 58.8701 248.593H56.8701Z",
                    "data-figma-gradient-fill":
                        '{"type":"GRADIENT_DIAMOND","stops":[{"color":{"r":1.0,"g":1.0,"b":1.0,"a":1.0},"position":0.0},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.0},"position":1.0},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.54000002145767212},"position":1.0}],"stopsVar":[],"transform":{"m00":181.67984008789062,"m01":440.54235839843750,"m02":-256.17605590820312,"m10":-197.32632446289062,"m11":1931.8571777343750,"m12":-628.03063964843750},"opacity":1.0,"blendMode":"NORMAL","visible":true}',
                    mask: "url(#path-4-inside-1_4533_6792)",
                }),
                (0, a.v)("path", {
                    d: "M56.8701 248.593H58.8701L58.8701 32.5516H56.8701H54.8701L54.8701 248.593H56.8701ZM63.8701 25.5516V27.5516L227.68 27.5516V25.5516L227.68 23.5516L63.8701 23.5516V25.5516ZM234.68 32.5516H232.68V248.593H234.68H236.68V32.5516H234.68ZM227.68 255.593V253.593L63.8701 253.593V255.593V257.593H227.68V255.593ZM234.68 248.593H232.68C232.68 251.354 230.441 253.593 227.68 253.593V255.593V257.593C232.65 257.593 236.68 253.563 236.68 248.593H234.68ZM227.68 25.5516V27.5516C230.441 27.5516 232.68 29.7901 232.68 32.5516H234.68H236.68C236.68 27.581 232.65 23.5516 227.68 23.5516L227.68 25.5516ZM56.8701 32.5516H58.8701C58.8701 29.7902 61.1087 27.5516 63.8701 27.5516V25.5516V23.5516C58.8996 23.5516 54.8701 27.581 54.8701 32.5516H56.8701ZM56.8701 248.593H54.8701C54.8701 253.563 58.8996 257.593 63.8701 257.593V255.593V253.593C61.1087 253.593 58.8701 251.354 58.8701 248.593H56.8701Z",
                    fill: "white",
                    fillOpacity: 0.5,
                    mask: "url(#path-4-inside-1_4533_6792)",
                }),
                (0, a.v)("defs", {
                    children: [
                        (0, a.v)("filter", {
                            id: "filter0_d_4533_6792",
                            x: 34.6299,
                            y: 6.61426,
                            width: 221.387,
                            height: 273.626,
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, a.v)("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                                (0, a.v)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, a.v)("feOffset", { dy: 3 }),
                                (0, a.v)("feGaussianBlur", { stdDeviation: 12 }),
                                (0, a.v)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",
                                }),
                                (0, a.v)("feBlend", {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_4533_6792",
                                }),
                                (0, a.v)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_4533_6792",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, a.v)("clipPath", {
                            id: "paint0_diamond_4533_6792_clip_path",
                            children: (0, a.v)("path", {
                                d: "M56.8701 248.593H58.8701L58.8701 32.5516H56.8701H54.8701L54.8701 248.593H56.8701ZM63.8701 25.5516V27.5516L227.68 27.5516V25.5516L227.68 23.5516L63.8701 23.5516V25.5516ZM234.68 32.5516H232.68V248.593H234.68H236.68V32.5516H234.68ZM227.68 255.593V253.593L63.8701 253.593V255.593V257.593H227.68V255.593ZM234.68 248.593H232.68C232.68 251.354 230.441 253.593 227.68 253.593V255.593V257.593C232.65 257.593 236.68 253.563 236.68 248.593H234.68ZM227.68 25.5516V27.5516C230.441 27.5516 232.68 29.7901 232.68 32.5516H234.68H236.68C236.68 27.581 232.65 23.5516 227.68 23.5516L227.68 25.5516ZM56.8701 32.5516H58.8701C58.8701 29.7902 61.1087 27.5516 63.8701 27.5516V25.5516V23.5516C58.8996 23.5516 54.8701 27.581 54.8701 32.5516H56.8701ZM56.8701 248.593H54.8701C54.8701 253.563 58.8996 257.593 63.8701 257.593V255.593V253.593C61.1087 253.593 58.8701 251.354 58.8701 248.593H56.8701Z",
                                mask: "url(#path-4-inside-1_4533_6792)",
                            }),
                        }),
                        (0, a.v)("linearGradient", {
                            id: "paint0_diamond_4533_6792",
                            x1: 0,
                            y1: 0,
                            x2: 500,
                            y2: 500,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, a.v)("stop", { stopColor: "white" }),
                                (0, a.v)("stop", { offset: 1, stopColor: "white", stopOpacity: 0 }),
                                (0, a.v)("stop", { offset: 1, stopColor: "white", stopOpacity: 0.54 }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    P = ({
        isOpen: e,
        onClose: t,
        onCameraClick: i,
        onUploadClick: r,
        cameraOptionTestId: l,
        uploadOptionTestId: o,
    }) => {
        let { t: d } = (0, n.n)(),
            c = (0, a.m)();
        return e
            ? (0, a.v)(m.t, {
                  isOpen: e,
                  onClose: t,
                  labelledById: c,
                  children: (0, a.v)("div", {
                      class: "IncodeDocumentCaptureBottomSheetOptions",
                      children: [
                          (0, a.v)("button", {
                              type: "button",
                              class: "IncodeDocumentCaptureBottomSheetOption",
                              onClick: i,
                              "data-testid": `document-capture-${l}`,
                              children: [
                                  (0, a.v)(p.p, {}),
                                  (0, a.v)("span", { id: c, children: d("documentCapture.tutorial.takePhoto") }),
                              ],
                          }),
                          (0, a.v)("button", {
                              type: "button",
                              class: "IncodeDocumentCaptureBottomSheetOption",
                              onClick: r,
                              "data-testid": `document-capture-${o}`,
                              children: [
                                  (0, a.v)(p.a, {}),
                                  (0, a.v)("span", { children: d("documentCapture.tutorial.uploadDocument") }),
                              ],
                          }),
                      ],
                  }),
              })
            : null;
    };
function k(e) {
    return new Promise((t, i) => {
        let n = new FileReader();
        (n.onload = () => t(n.result)), (n.onerror = i), n.readAsDataURL(e);
    });
}
var R = ({ manager: e, title: t, text: i, allowSkipDocumentCapture: l, captureMode: o, error: c, pageNumber: u }) => {
        let { t: p } = (0, n.n)(),
            C = (0, r.a)(),
            v = (0, a.l)(null),
            [m, h] = (0, a.p)(!1),
            f = u > 1 ? "documentCapture.tutorial.multiPageDocument" : "documentCapture.tutorial",
            g = t?.trim() ? t : p(`${f}.title`),
            H = i?.trim() ? i : p(`${f}.subtitle`),
            I = "camera" === o && C,
            w = (0, a.h)(() => h(!1), []),
            V = () => {
                v.current?.click();
            },
            D = async (t) => {
                let i = t.target,
                    n = i.files?.[0];
                if (n) {
                    let t = await k(n);
                    e.setFile(n, t), I && w();
                }
                i.value = "";
            };
        return (0, a.v)(a.x, {
            children: [
                (0, a.v)(d.t, {
                    className: "IncodeDocumentCapturePageTutorial",
                    title: g,
                    subtitle: H,
                    "data-testid": "document-capture-tutorial",
                    children: [
                        (0, a.v)("input", {
                            ref: v,
                            type: "file",
                            accept: "image/*,application/pdf",
                            onChange: D,
                            "aria-hidden": !0,
                            tabIndex: -1,
                            class: "IncodeDocumentCaptureFileInput",
                        }),
                        (0, a.v)("div", {
                            class: "IncodeDocumentCaptureTutorialContent",
                            children: (0, a.v)("div", {
                                class: "IncodeDocumentCaptureTutorialIllustration",
                                "aria-hidden": !0,
                                children: (0, a.v)(x, { class: "IncodeDocumentCaptureTutorialImage" }),
                            }),
                        }),
                        c
                            ? (0, a.v)("p", {
                                  class: "IncodeDocumentCaptureError",
                                  role: "alert",
                                  children: p("nativeCamera.maximumSize"),
                              })
                            : null,
                        (0, a.v)("div", {
                            class: "IncodeDocumentCaptureActions",
                            children: [
                                (0, a.v)(s.t, {
                                    onClick: () => {
                                        I ? h(!0) : V();
                                    },
                                    "data-testid": "document-capture-continue-button",
                                    children: p("documentCapture.tutorial.continue"),
                                }),
                                l
                                    ? (0, a.v)("div", {
                                          class: "IncodeDocumentCaptureSkipWrapper",
                                          children: (0, a.v)(s.t, {
                                              variant: "link",
                                              onClick: () => e.skip(),
                                              "data-testid": "document-capture-skip-button",
                                              children: p("documentCapture.tutorial.skipButton"),
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                I
                    ? (0, a.v)(P, {
                          isOpen: m,
                          onClose: w,
                          onCameraClick: () => {
                              w(), e.capture();
                          },
                          onUploadClick: V,
                          cameraOptionTestId: "camera-option",
                          uploadOptionTestId: "file-option",
                      })
                    : null,
            ],
        });
    },
    B = ({ manager: e, nextPageType: t, captureMode: i }) => {
        let { t: l } = (0, n.n)(),
            c = (0, r.a)(),
            u = (0, a.l)(null),
            [p, C] = (0, a.p)(!1),
            v = "documentCapture.tutorial.multiPageDocument",
            m = l("optional" === t ? `${v}.optionalPage.subtitle` : `${v}.subtitle`),
            h = "camera" === i && c,
            f = (0, a.h)(() => C(!1), []),
            g = () => {
                u.current?.click();
            },
            H = async (t) => {
                let i = t.target,
                    n = i.files?.[0];
                if (n) {
                    f();
                    let t = await k(n);
                    e.captureNextPageFromFile(), e.setFile(n, t);
                }
                i.value = "";
            };
        return (0, a.v)(a.x, {
            children: [
                (0, a.v)(d.t, {
                    className: "IncodeDocumentCapturePageTutorial",
                    title: l("documentCapture.tutorial.multiPageDocument.title"),
                    subtitle: m,
                    "data-testid": "document-capture-tutorial",
                    children: [
                        (0, a.v)("input", {
                            ref: u,
                            type: "file",
                            accept: "image/jpeg,image/png",
                            onChange: H,
                            "aria-hidden": !0,
                            tabIndex: -1,
                            class: "IncodeDocumentCaptureFileInput",
                        }),
                        (0, a.v)("div", {
                            class: "IncodeDocumentCaptureTutorialContent",
                            children: (0, a.v)("div", {
                                class: "IncodeDocumentCaptureTutorialIllustration",
                                "aria-hidden": !0,
                                children: (0, a.v)(x, { class: "IncodeDocumentCaptureTutorialImage" }),
                            }),
                        }),
                        (0, a.v)(s.t, {
                            onClick: () => {
                                h ? C(!0) : g();
                            },
                            "data-testid": "document-capture-add-next-page-button",
                            children: l("documentCapture.button.nextPage"),
                        }),
                        (0, a.v)(o.r, { size: 12 }),
                        "optional" === t &&
                            (0, a.v)(a.x, {
                                children: [
                                    (0, a.v)(s.t, {
                                        variant: "link",
                                        onClick: () => e.finishPageCapture(),
                                        "data-testid": "document-capture-finish-pages-button",
                                        children: l("documentCapture.button.allPagesCaptured"),
                                    }),
                                    (0, a.v)(o.r, { size: 16 }),
                                ],
                            }),
                    ],
                }),
                h
                    ? (0, a.v)(P, {
                          isOpen: p,
                          onClose: f,
                          onCameraClick: () => {
                              f(), e.captureNextPageFromCamera();
                          },
                          onUploadClick: g,
                          cameraOptionTestId: "next-page-camera-option",
                          uploadOptionTestId: "next-page-upload-document-option",
                      })
                    : null,
            ],
        });
    },
    T = ({ title: e }) =>
        (0, a.v)(d.t, {
            hideHeader: !0,
            hideFooterBranding: !0,
            className: "IncodeDocumentCapturePage",
            children: (0, a.v)("div", {
                class: "IncodeDocumentCaptureCentered",
                children: (0, a.v)(u.t, { size: "large", title: e }),
            }),
        }),
    F = ({ config: e, onFinish: t, onError: i }) => {
        let [l, o] = (0, r.u)(() => (0, H.D)({ config: e })),
            [d, c] = (0, a.p)(!1),
            { t: u } = (0, n.n)();
        return ((0, r.c)({ status: l.status, onFinish: t, onError: i ? (e) => i(e) : void 0 }),
        "finished" === l.status || "closed" === l.status)
            ? null
            : "tutorial" === l.status
              ? (0, a.v)(R, {
                    manager: o,
                    title: l.title,
                    text: l.text,
                    allowSkipDocumentCapture: l.allowSkipDocumentCapture,
                    captureMode: l.captureMode,
                    error: l.error,
                    pageNumber: l.pageNumber,
                })
              : "nextPage" === l.status
                ? (0, a.v)(B, { manager: o, nextPageType: l.nextPageType, captureMode: l.captureMode })
                : "capturing" === l.status && "file" === l.captureMode
                  ? (0, a.v)(R, {
                        manager: o,
                        title: e.title,
                        text: e.text,
                        allowSkipDocumentCapture: !1,
                        captureMode: "file",
                        error: l.error,
                        pageNumber: l.pageNumber,
                    })
                  : "permissions" === l.status
                    ? (0, a.v)(f.i, { manager: o, permissionStatus: l.permissionStatus })
                    : "initializingCamera" === l.status
                      ? (0, a.v)(T, {})
                      : "capturing" === l.status && "camera" === l.captureMode
                        ? l.stream
                            ? (0, a.v)(a.x, {
                                  children: [
                                      (0, a.v)(I, { stream: l.stream, manager: o, onOpenHelp: () => c(!0) }),
                                      d ? (0, a.v)(V, { onClose: () => c(!1) }) : null,
                                  ],
                              })
                            : (0, a.v)(T, {})
                        : "finalizing" === l.status
                          ? (0, a.v)(T, { title: u("common.processing") })
                          : "preview" === l.status ||
                              "uploading" === l.status ||
                              "success" === l.status ||
                              "failure" === l.status
                            ? (0, a.v)(Z, { state: l, manager: o })
                            : null;
    },
    O = ({ config: e, onFinish: t, onError: i }) =>
        (0, a.v)(l.t, { children: e ? (0, a.v)(F, { config: e, onFinish: t, onError: i }) : null });
(0, g.t)(O, "incode-document-capture");
