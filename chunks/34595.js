(a.d(t, { FM: () => p, Nl: () => v, gn: () => g }), a(323874), a(14289), a(35956));
var s = a(477900),
    n = a(582128),
    l = a(834730),
    r = a(289873),
    i = a(285796),
    o = a(666476),
    c = a(287111),
    u = a(922329),
    d = a(139255),
    m = a(248675),
    f = a(105292),
    h = a(153171);
let x = o.lN;
function g(e, t, a, s) {
    let n = (0, c.GU)(e, t).length,
        l = a.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                a = { name: e.name, contentType: t };
            if (n++ >= x)
                return {
                    draft: {
                        ...a,
                        status: "error",
                        errorText: f.intl.formatToPlainString(m.default.Q0aCVZ, { count: x }),
                    },
                };
            if (!(0, o.Oq)(e.size, t))
                return "image/png" === t && e.size <= o.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...a, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let a = await (0, d.c)(e).catch(() => null);
                              return null != a && (0, o.Oq)(a.size, a.type)
                                  ? { ...(await s(a)), converted: { name: a.name, contentType: a.type } }
                                  : { errorText: (0, c.iW)(t) };
                          },
                      }
                    : { draft: { ...a, status: "error", errorText: (0, c.iW)(t) } };
            let l = o.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...a, status: "uploading", previewUrl: l }, upload: () => s(e) };
        });
    (0, c.fD)(e, t, l);
}
function p(e) {
    let { projectId: t, surface: a, onUploadFile: s } = e,
        l = (0, c.G)(t, a),
        r = n.useCallback((e) => g(t, a, e, s), [t, a, s]),
        i = n.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), r(t));
            },
            [r],
        ),
        o = n.useCallback((e) => (0, c.XR)(t, a, e), [t, a]),
        u = n.useCallback(() => (0, c.lc)(t, a), [t, a]);
    return {
        drafts: l,
        addFiles: r,
        pasteFiles: i,
        removeDraft: o,
        settled: l.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function v(e) {
    let { draft: t, onRemove: a } = e;
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
                onClick: () => a(t.localId),
                "aria-label": f.intl.string(m.default.Slam9g),
                children: (0, s.jsx)(i.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
