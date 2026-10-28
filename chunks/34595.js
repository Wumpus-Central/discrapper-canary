(n.d(t, { FM: () => p, Nl: () => g, gn: () => x }), n(323874), n(14289), n(35956));
var s = n(477900),
    a = n(582128),
    l = n(834730),
    r = n(289873),
    i = n(285796),
    o = n(666476),
    c = n(287111),
    u = n(922329),
    d = n(177676),
    m = n(248675),
    f = n(105292),
    h = n(153171);
function x(e, t, n, s) {
    let a = (0, c.GU)(e, t).length,
        l = n.map((e) => {
            let t = (0, d.Ft)(e),
                n = { name: e.name, contentType: t };
            if (a++ >= o.lN) return { draft: { ...n, status: "error", errorText: (0, d.XV)() } };
            switch ((0, d.R9)(e, t)) {
                case "too-large":
                    return { draft: { ...n, status: "error", errorText: (0, c.iW)(t) } };
                case "webp":
                    return {
                        draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                        upload: async () => {
                            let n = await (0, d.th)(e);
                            return null == n
                                ? { errorText: (0, c.iW)(t) }
                                : { ...(await s(n)), converted: { name: n.name, contentType: n.type } };
                        },
                    };
                case "fits": {
                    let a = o.XB.has(t) ? URL.createObjectURL(e) : void 0;
                    return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => s(e) };
                }
            }
        });
    (0, c.fD)(e, t, l);
}
function p(e) {
    let { projectId: t, surface: n, onUploadFile: s } = e,
        l = (0, c.G)(t, n),
        r = a.useCallback((e) => x(t, n, e, s), [t, n, s]),
        i = (0, d.sm)(r),
        o = a.useCallback((e) => (0, c.XR)(t, n, e), [t, n]),
        u = a.useCallback(() => (0, c.lc)(t, n), [t, n]);
    return {
        drafts: l,
        addFiles: r,
        pasteFiles: i,
        removeDraft: o,
        settled: l.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function g(e) {
    let { draft: t, onRemove: n } = e;
    return (0, s.jsxs)(u.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, s.jsx)(l.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, s.jsx)(r.y, { type: r.t.SPINNING_CIRCLE_SIMPLE, className: h.Rk }) : null,
            (0, s.jsx)("button", {
                type: "button",
                className: h.o1,
                onClick: () => n(t.localId),
                "aria-label": f.intl.string(m.default.Slam9g),
                children: (0, s.jsx)(i.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
