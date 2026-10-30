(s.d(t, { FM: () => g, Nl: () => p, gn: () => x }), s(323874), s(14289), s(35956));
var n = s(477900),
    l = s(582128),
    r = s(834730),
    a = s(289873),
    i = s(285796),
    c = s(666476),
    o = s(287111),
    u = s(922329),
    d = s(177676),
    m = s(87501),
    f = s(105292),
    h = s(153171);
function x(e, t, s, n) {
    let l = (0, o.GU)(e, t).length,
        r = s.map((e) => {
            let t = (0, d.Ft)(e),
                s = { name: e.name, contentType: t };
            if (l++ >= c.lN) return { draft: { ...s, status: "error", errorText: (0, d.XV)() } };
            switch ((0, d.R9)(e, t)) {
                case "too-large":
                    return { draft: { ...s, status: "error", errorText: (0, o.iW)(t) } };
                case "webp":
                    return {
                        draft: { ...s, status: "uploading", previewUrl: URL.createObjectURL(e) },
                        upload: async () => {
                            let s = await (0, d.th)(e);
                            return null == s
                                ? { errorText: (0, o.iW)(t) }
                                : { ...(await n(s)), converted: { name: s.name, contentType: s.type } };
                        },
                    };
                case "fits": {
                    let l = c.XB.has(t) ? URL.createObjectURL(e) : void 0;
                    return { draft: { ...s, status: "uploading", previewUrl: l }, upload: () => n(e) };
                }
            }
        });
    (0, o.fD)(e, t, r);
}
function g(e) {
    let { projectId: t, surface: s, onUploadFile: n } = e,
        r = (0, o.G)(t, s),
        a = l.useCallback((e) => x(t, s, e, n), [t, s, n]),
        i = (0, d.sm)(a),
        c = l.useCallback((e) => (0, o.XR)(t, s, e), [t, s]),
        u = l.useCallback(() => (0, o.lc)(t, s), [t, s]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: i,
        removeDraft: c,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function p(e) {
    let { draft: t, onRemove: s } = e;
    return (0, n.jsxs)(u.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, n.jsx)(r.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(a.y, { type: a.t.SPINNING_CIRCLE_SIMPLE, className: h.Rk }) : null,
            (0, n.jsx)("button", {
                type: "button",
                className: h.o1,
                onClick: () => s(t.localId),
                "aria-label": f.intl.string(m.default.Slam9g),
                children: (0, n.jsx)(i.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
