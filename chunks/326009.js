a.d(l, { A: () => U, N: () => I });
var t = a(477900),
    s = a(582128),
    i = a(503698),
    n = a.n(i),
    r = a(750943),
    c = a(691540),
    u = a(857250),
    d = a(97483),
    m = a(259678),
    o = a(289873),
    h = a(946274),
    x = a(38405),
    N = a(958805),
    j = a(652215);
function p(e, l) {
    let a = window.GLOBAL_ENV.CDN_HOST ?? j.f34;
    return `https://${a}/widget-assets/${e}/${l}`;
}
var f = a(375708),
    g = a(902391);
function I(e) {
    let { className: l, userId: a, image: s } = e;
    if ("localDataUri" in s)
        return (0, t.jsx)("div", {
            className: l,
            children: (0, t.jsx)("img", { className: g.Sl, alt: "", src: s.localDataUri }),
        });
    let i = p(a, s.fileId);
    return (0, t.jsx)("div", {
        className: l,
        children: (0, t.jsx)("img", { className: g.Sl, alt: "", src: i, width: s.width, height: s.height }),
    });
}
function v(e) {
    let { canEdit: l } = e;
    return (0, t.jsx)("div", {
        className: g.qf,
        children: l ? (0, t.jsx)(r.X, { className: g.Dm, size: "md" }) : null,
    });
}
function w(e) {
    let { className: l, userId: a, image: i, previewUri: r, onImageUploadStarted: j, onImageUploadCompleted: I } = e,
        w = s.useRef(0),
        U = s.useCallback(
            async (e, l) => {
                w.current = w.current + 1;
                let a = w.current;
                j?.(e);
                try {
                    let t = await N.A.uploadWidgetAsset(l);
                    if (w.current !== a) return;
                    I({ filename: t, localDataUri: e });
                } catch (e) {
                    if (w.current !== a) return;
                    (0, c.P0)((0, u.o)(f.intl.string(f.t.F4Neqh), d.Ck.FAILURE)), x.A.captureException(e), I(null);
                }
            },
            [j, I],
        ),
        C = r ?? (null != i ? ("localDataUri" in i ? i.localDataUri : p(a, i.fileId)) : null);
    return (0, t.jsx)(m.vN, {
        within: !0,
        children: (0, t.jsxs)("div", {
            className: n()(g.kL, l),
            children: [
                null != C ? (0, t.jsx)("img", { alt: "", src: C, className: g.Sl }) : (0, t.jsx)(v, { canEdit: !0 }),
                null != r
                    ? (0, t.jsx)("div", {
                          className: g.ob,
                          children: (0, t.jsx)(o.y, { type: o.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : null,
                (0, t.jsx)(h.Ay, {
                    tabIndex: 0,
                    onChange: U,
                    maxFileSizeBytes: 0xa00000,
                    multiple: !1,
                    "aria-label": f.intl.string(f.t["MsUY/S"]),
                }),
            ],
        }),
    });
}
function U(e) {
    let {
        className: l,
        canEdit: a,
        userId: s,
        image: i,
        previewUri: n,
        onImageUploadStarted: r,
        onImageUploadCompleted: c,
    } = e;
    return a
        ? (0, t.jsx)(w, {
              className: l,
              userId: s,
              image: i,
              previewUri: n,
              onImageUploadStarted: r,
              onImageUploadCompleted: c,
          })
        : null == i
          ? (0, t.jsx)("div", { className: l, children: (0, t.jsx)(v, { canEdit: !1 }) })
          : (0, t.jsx)(I, { className: l, userId: s, image: i });
}
