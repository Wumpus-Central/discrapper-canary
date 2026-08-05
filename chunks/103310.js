t.d(l, { A: () => C, N: () => I });
var a = t(477900),
    s = t(582128),
    i = t(503698),
    n = t.n(i),
    r = t(750943),
    c = t(691540),
    u = t(857250),
    d = t(97483),
    o = t(259678),
    m = t(289873),
    h = t(946274),
    x = t(38405),
    N = t(958805),
    p = t(652215),
    j = t(375708),
    f = t(902391);
function g(e, l) {
    let t = window.GLOBAL_ENV.CDN_HOST ?? p.f34;
    return `https://${t}/widget-assets/${e}/${l}`;
}
function I(e) {
    let { className: l, userId: t, image: s } = e;
    if ("localDataUri" in s) return (0, a.jsx)("img", { className: l, alt: "", src: s.localDataUri });
    let i = g(t, s.fileId);
    return (0, a.jsx)("img", { className: l, alt: "", src: i, width: s.width, height: s.height });
}
function w(e) {
    let { canEdit: l } = e;
    return (0, a.jsx)("div", {
        className: f.qf,
        children: l ? (0, a.jsx)(r.X, { className: f.Dm, size: "md" }) : null,
    });
}
function U(e) {
    let { className: l, userId: t, image: i, previewUri: r, onImageUploadStarted: p, onImageUploadCompleted: I } = e,
        U = s.useRef(0),
        C = s.useCallback(
            async (e, l) => {
                U.current = U.current + 1;
                let t = U.current;
                p?.(e);
                try {
                    let a = await N.A.uploadWidgetAsset(l);
                    if (U.current !== t) return;
                    I({ filename: a, localDataUri: e });
                } catch (e) {
                    if (U.current !== t) return;
                    (0, c.P0)((0, u.o)(j.intl.string(j.t.F4Neqh), d.Ck.FAILURE)), x.A.captureException(e), I(null);
                }
            },
            [p, I],
        ),
        S = r ?? (null != i ? ("localDataUri" in i ? i.localDataUri : g(t, i.fileId)) : null);
    return (0, a.jsx)(o.vN, {
        within: !0,
        children: (0, a.jsxs)("div", {
            className: n()(f.kL, l),
            children: [
                null != S ? (0, a.jsx)("img", { alt: "", src: S, className: f.Sl }) : (0, a.jsx)(w, { canEdit: !0 }),
                null != r
                    ? (0, a.jsx)("div", {
                          className: f.ob,
                          children: (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : null,
                (0, a.jsx)(h.Ay, {
                    tabIndex: 0,
                    onChange: C,
                    maxFileSizeBytes: 0xa00000,
                    multiple: !1,
                    "aria-label": j.intl.string(j.t["MsUY/S"]),
                }),
            ],
        }),
    });
}
function C(e) {
    let {
        className: l,
        canEdit: t,
        userId: s,
        image: i,
        previewUri: r,
        onImageUploadStarted: c,
        onImageUploadCompleted: u,
    } = e;
    return t
        ? (0, a.jsx)(U, {
              className: l,
              userId: s,
              image: i,
              previewUri: r,
              onImageUploadStarted: c,
              onImageUploadCompleted: u,
          })
        : null == i
          ? (0, a.jsx)("div", { className: l, children: (0, a.jsx)(w, { canEdit: !1 }) })
          : (0, a.jsx)(I, { className: n()(f.Sl, l), userId: s, image: i });
}
