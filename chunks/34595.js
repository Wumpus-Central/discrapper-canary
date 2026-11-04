(n(323874), n(14289), n(35956));
var r = n(477900),
    l = n(582128),
    a = n(834730),
    i = n(289873),
    s = n(285796),
    o = n(666476),
    c = n(287111),
    u = n(922329),
    d = n(466280),
    f = n(191850),
    m = n(792996),
    p = n(153171);
function h(e, t, n, r) {
    let l = (0, c.GU)(e, t).length,
        a = n.map((e) => {
            let t = (0, d.Ft)(e),
                n = { name: e.name, contentType: t };
            if (l++ >= 10) return { draft: { ...n, status: "error", errorText: (0, d.XV)() } };
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
                                : { ...(await r(n)), converted: { name: n.name, contentType: n.type } };
                        },
                    };
                case "fits": {
                    let l = o.XB.has(t) ? URL.createObjectURL(e) : void 0;
                    return { draft: { ...n, status: "uploading", previewUrl: l }, upload: () => r(e) };
                }
            }
        });
    (0, c.fD)(e, t, a);
}
n.d(
    t,
    {},
    {
        FM: function (e) {
            let { projectId: t, surface: n, onUploadFile: r } = e,
                a = (0, c.G)(t, n),
                i = l.useCallback((e) => h(t, n, e, r), [t, n, r]),
                s = (0, d.sm)(i),
                o = l.useCallback((e) => (0, c.XR)(t, n, e), [t, n]),
                u = l.useCallback(() => (0, c.lc)(t, n), [t, n]);
            return {
                drafts: a,
                addFiles: i,
                pasteFiles: s,
                removeDraft: o,
                settled: a.every((e) => "ready" === e.status),
                takeRefs: u,
            };
        },
        Nl: function (e) {
            let { draft: t, onRemove: n } = e;
            return (0, r.jsxs)(u.p, {
                name: t.name,
                thumbSrc: t.previewUrl,
                subText:
                    "error" === t.status
                        ? (0, r.jsx)(a.E, {
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              children: t.errorText,
                          })
                        : null,
                children: [
                    "uploading" === t.status
                        ? (0, r.jsx)(i.y, { type: i.t.SPINNING_CIRCLE_SIMPLE, className: p.Rk })
                        : null,
                    (0, r.jsx)("button", {
                        type: "button",
                        className: p.o1,
                        onClick: () => n(t.localId),
                        "aria-label": m.intl.string(f.default.Slam9g),
                        children: (0, r.jsx)(s.a, { size: "xs", color: "currentColor" }),
                    }),
                ],
            });
        },
        gn: h,
    },
);
