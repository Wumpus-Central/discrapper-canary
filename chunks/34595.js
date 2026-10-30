(s.d(t, { FM: () => g, Nl: () => p, gn: () => x }), s(323874), s(14289), s(35956));
var n = s(477900),
    l = s(582128),
    a = s(834730),
    r = s(289873),
    i = s(285796),
    o = s(666476),
    c = s(287111),
    u = s(922329),
    d = s(177676),
    m = s(809526),
    f = s(105292),
    h = s(153171);
function x(e, t, s, n) {
    let l = (0, c.GU)(e, t).length,
        a = s.map((e) => {
            let t = (0, d.Ft)(e),
                s = { name: e.name, contentType: t };
            if (l++ >= o.lN) return { draft: { ...s, status: "error", errorText: (0, d.XV)() } };
            switch ((0, d.R9)(e, t)) {
                case "too-large":
                    return { draft: { ...s, status: "error", errorText: (0, c.iW)(t) } };
                case "webp":
                    return {
                        draft: { ...s, status: "uploading", previewUrl: URL.createObjectURL(e) },
                        upload: async () => {
                            let s = await (0, d.th)(e);
                            return null == s
                                ? { errorText: (0, c.iW)(t) }
                                : { ...(await n(s)), converted: { name: s.name, contentType: s.type } };
                        },
                    };
                case "fits": {
                    let l = o.XB.has(t) ? URL.createObjectURL(e) : void 0;
                    return { draft: { ...s, status: "uploading", previewUrl: l }, upload: () => n(e) };
                }
            }
        });
    (0, c.fD)(e, t, a);
}
function g(e) {
    let { projectId: t, surface: s, onUploadFile: n } = e,
        a = (0, c.G)(t, s),
        r = l.useCallback((e) => x(t, s, e, n), [t, s, n]),
        i = (0, d.sm)(r),
        o = l.useCallback((e) => (0, c.XR)(t, s, e), [t, s]),
        u = l.useCallback(() => (0, c.lc)(t, s), [t, s]);
    return {
        drafts: a,
        addFiles: r,
        pasteFiles: i,
        removeDraft: o,
        settled: a.every((e) => "ready" === e.status),
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
                ? (0, n.jsx)(a.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, n.jsx)(r.y, { type: r.t.SPINNING_CIRCLE_SIMPLE, className: h.Rk }) : null,
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
