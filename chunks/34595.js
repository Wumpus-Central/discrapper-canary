(r(323874), r(14289), r(35956));
var n = r(477900),
    l = r(582128),
    a = r(834730),
    i = r(289873),
    s = r(285796),
    o = r(666476),
    c = r(287111),
    u = r(922329),
    d = r(466280),
    f = r(191850),
    m = r(792996),
    p = r(153171);
function h(e, t, r, n) {
    let l = (0, c.GU)(e, t).length,
        a = r.map((e) => {
            let t = (0, d.Ft)(e),
                r = { name: e.name, contentType: t };
            if (l++ >= 10) return { draft: { ...r, status: "error", errorText: (0, d.XV)() } };
            switch ((0, d.R9)(e, t)) {
                case "too-large":
                    return { draft: { ...r, status: "error", errorText: (0, c.iW)(t) } };
                case "webp":
                    return {
                        draft: { ...r, status: "uploading", previewUrl: URL.createObjectURL(e) },
                        upload: async () => {
                            let r = await (0, d.th)(e);
                            return null == r
                                ? { errorText: (0, c.iW)(t) }
                                : { ...(await n(r)), converted: { name: r.name, contentType: r.type } };
                        },
                    };
                case "fits": {
                    let l = o.XB.has(t) ? URL.createObjectURL(e) : void 0;
                    return { draft: { ...r, status: "uploading", previewUrl: l }, upload: () => n(e) };
                }
            }
        });
    (0, c.fD)(e, t, a);
}
r.d(
    t,
    {},
    {
        FM: function (e) {
            let { projectId: t, surface: r, onUploadFile: n } = e,
                a = (0, c.G)(t, r),
                i = l.useCallback((e) => h(t, r, e, n), [t, r, n]),
                s = (0, d.sm)(i),
                o = l.useCallback((e) => (0, c.XR)(t, r, e), [t, r]),
                u = l.useCallback(() => (0, c.lc)(t, r), [t, r]);
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
            let { draft: t, onRemove: r } = e;
            return (0, n.jsxs)(u.p, {
                name: t.name,
                thumbSrc: t.previewUrl,
                subText:
                    "error" === t.status
                        ? (0, n.jsx)(a.E, {
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              children: t.errorText,
                          })
                        : null,
                children: [
                    "uploading" === t.status
                        ? (0, n.jsx)(i.y, { type: i.t.SPINNING_CIRCLE_SIMPLE, className: p.Rk })
                        : null,
                    (0, n.jsx)("button", {
                        type: "button",
                        className: p.o1,
                        onClick: () => r(t.localId),
                        "aria-label": m.intl.string(f.default.Slam9g),
                        children: (0, n.jsx)(s.CircleXIcon, { size: "xs", color: "currentColor" }),
                    }),
                ],
            });
        },
        gn: h,
    },
);
