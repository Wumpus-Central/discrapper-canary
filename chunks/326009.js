t.d(a, { A: () => E, N: () => w });
var l = t(477900),
    i = t(582128),
    n = t(503698),
    s = t.n(n),
    r = t(17928),
    c = t(750943),
    d = t(691540),
    u = t(857250),
    o = t(97483),
    m = t(192308),
    p = t(259678),
    g = t(289873),
    h = t(775602),
    x = t(946274),
    N = t(515718),
    f = t(38405),
    j = t(958805),
    k = t(486020),
    v = t(652215),
    y = t(375708),
    A = t(902391);
function b(e, a) {
    let t = (0, r.bG)([h.Ay], () => h.Ay.useReducedMotion);
    return null == a
        ? null
        : "localDataUri" in a
          ? a.localDataUri
          : (function (e, a) {
                let { animated: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = window.GLOBAL_ENV.CDN_HOST ?? v.f34,
                    i = `https://${l}/widget-assets/${e}/${a}`,
                    n = k.QB ? "webp" : t ? "gif" : "png";
                return `${i}?format=${n}&animated=${t}`;
            })(e, a.fileId, { animated: a.isAnimated && !t });
}
function w(e) {
    let { className: a, userId: t, image: i } = e,
        n = b(t, i) ?? void 0;
    return "localDataUri" in i
        ? (0, l.jsx)("div", { className: a, children: (0, l.jsx)("img", { className: A.Sl, alt: "", src: n }) })
        : (0, l.jsx)("div", {
              className: a,
              children: (0, l.jsx)("img", { className: A.Sl, alt: "", src: n, width: i.width, height: i.height }),
          });
}
function C(e) {
    let { canEdit: a } = e;
    return (0, l.jsx)("div", {
        className: A.qf,
        children: a ? (0, l.jsx)(c.X, { className: A.Dm, size: "md" }) : null,
    });
}
function U(e) {
    let {
            className: a,
            userId: n,
            image: r,
            previewUri: c,
            uploadType: h,
            onImageUploadStarted: k,
            onImageUploadCompleted: v,
        } = e,
        w = i.useRef(0),
        U = i.useCallback(
            async (e, a) => {
                w.current = w.current + 1;
                let t = w.current;
                k?.(e);
                try {
                    let l = await j.A.uploadWidgetAsset(a);
                    if (w.current !== t) return;
                    v({ filename: l, localDataUri: e });
                } catch (e) {
                    if (w.current !== t) return;
                    (0, d.P0)((0, u.o)(y.intl.string(y.t.F4Neqh), o.Ck.FAILURE)), f.A.captureException(e), v(null);
                }
            },
            [k, v],
        ),
        E = i.useCallback(
            (e) => {
                var a, t;
                let l,
                    { imageUri: i, file: n } = e,
                    s = (0, N.aU)(i);
                s.size > 0xa00000
                    ? (0, d.P0)((0, u.o)(y.intl.string(y.t.YbdEFK), o.Ck.FAILURE))
                    : U(
                          i,
                          new File(
                              [s],
                              ((a = n.name),
                              (t = s.type),
                              (l = a.replace(/\.[^.]+$/, "")),
                              `${"" !== l ? l : "image"}.${"image/gif" === t ? "gif" : "image/webp" === t ? "webp" : "png"}`),
                              { type: s.type },
                          ),
                      );
            },
            [U],
        ),
        I = i.useCallback(
            (e, a) => {
                (0, m.openModalLazy)(
                    async () => {
                        let { default: i } = await Promise.all([
                            t.e("14520"),
                            t.e("42083"),
                            t.e("97250"),
                            t.e("63232"),
                            t.e("43437"),
                            t.e("58164"),
                            t.e("71470"),
                            t.e("37490"),
                            t.e("50342"),
                            t.e("63726"),
                            t.e("93513"),
                            t.e("7406"),
                            t.e("55524"),
                            t.e("79149"),
                            t.e("89908"),
                            t.e("90017"),
                            t.e("74571"),
                            t.e("27967"),
                        ]).then(t.bind(t, 142630));
                        return (t) => (0, l.jsx)(i, { ...t, file: a, imageUri: e, uploadType: h, onCrop: E });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [E, h],
        ),
        L = b(n, r),
        S = c ?? L;
    return (0, l.jsx)(p.vN, {
        within: !0,
        children: (0, l.jsxs)("div", {
            className: s()(A.kL, a),
            children: [
                null != S ? (0, l.jsx)("img", { alt: "", src: S, className: A.Sl }) : (0, l.jsx)(C, { canEdit: !0 }),
                null != c
                    ? (0, l.jsx)("div", {
                          className: A.ob,
                          children: (0, l.jsx)(g.y, { type: g.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : null,
                (0, l.jsx)(x.Ay, {
                    tabIndex: 0,
                    onChange: I,
                    multiple: !1,
                    "aria-label": y.intl.string(y.t["MsUY/S"]),
                    title: "",
                }),
            ],
        }),
    });
}
function E(e) {
    let {
        className: a,
        canEdit: t,
        userId: i,
        image: n,
        previewUri: s,
        uploadType: r,
        onImageUploadStarted: c,
        onImageUploadCompleted: d,
    } = e;
    return t
        ? (0, l.jsx)(U, {
              className: a,
              userId: i,
              image: n,
              previewUri: s,
              uploadType: r,
              onImageUploadStarted: c,
              onImageUploadCompleted: d,
          })
        : null == n
          ? (0, l.jsx)("div", { className: a, children: (0, l.jsx)(C, { canEdit: !1 }) })
          : (0, l.jsx)(w, { className: a, userId: i, image: n });
}
