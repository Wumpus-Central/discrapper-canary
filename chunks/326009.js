l.d(a, { A: () => w, N: () => y });
var t = l(477900),
    i = l(582128),
    s = l(503698),
    n = l.n(s),
    r = l(750943),
    c = l(691540),
    d = l(857250),
    u = l(97483),
    o = l(192308),
    p = l(259678),
    m = l(289873),
    h = l(946274),
    g = l(515718),
    x = l(38405),
    N = l(958805),
    j = l(652215);
function f(e, a) {
    let l = window.GLOBAL_ENV.CDN_HOST ?? j.f34;
    return `https://${l}/widget-assets/${e}/${a}`;
}
var k = l(375708),
    v = l(902391);
function y(e) {
    let { className: a, userId: l, image: i } = e;
    if ("localDataUri" in i)
        return (0, t.jsx)("div", {
            className: a,
            children: (0, t.jsx)("img", { className: v.Sl, alt: "", src: i.localDataUri }),
        });
    let s = f(l, i.fileId);
    return (0, t.jsx)("div", {
        className: a,
        children: (0, t.jsx)("img", { className: v.Sl, alt: "", src: s, width: i.width, height: i.height }),
    });
}
function U(e) {
    let { canEdit: a } = e;
    return (0, t.jsx)("div", {
        className: v.qf,
        children: a ? (0, t.jsx)(r.X, { className: v.Dm, size: "md" }) : null,
    });
}
function b(e) {
    let {
            className: a,
            userId: s,
            image: r,
            previewUri: j,
            uploadType: y,
            onImageUploadStarted: b,
            onImageUploadCompleted: w,
        } = e,
        A = i.useRef(0),
        C = i.useCallback(
            async (e, a) => {
                A.current = A.current + 1;
                let l = A.current;
                b?.(e);
                try {
                    let t = await N.A.uploadWidgetAsset(a);
                    if (A.current !== l) return;
                    w({ filename: t, localDataUri: e });
                } catch (e) {
                    if (A.current !== l) return;
                    (0, c.P0)((0, d.o)(k.intl.string(k.t.F4Neqh), u.Ck.FAILURE)), x.A.captureException(e), w(null);
                }
            },
            [b, w],
        ),
        I = i.useCallback(
            (e) => {
                var a, l;
                let t,
                    { imageUri: i, file: s } = e,
                    n = (0, g.aU)(i);
                n.size > 0xa00000
                    ? (0, c.P0)((0, d.o)(k.intl.string(k.t.YbdEFK), u.Ck.FAILURE))
                    : C(
                          i,
                          new File(
                              [n],
                              ((a = s.name),
                              (l = n.type),
                              (t = a.replace(/\.[^.]+$/, "")),
                              `${"" !== t ? t : "image"}.${"image/gif" === l ? "gif" : "image/webp" === l ? "webp" : "png"}`),
                              { type: n.type },
                          ),
                      );
            },
            [C],
        ),
        E = i.useCallback(
            (e, a) => {
                (0, o.openModalLazy)(
                    async () => {
                        let { default: i } = await Promise.all([
                            l.e("14520"),
                            l.e("42083"),
                            l.e("97250"),
                            l.e("63232"),
                            l.e("43437"),
                            l.e("58164"),
                            l.e("71470"),
                            l.e("37490"),
                            l.e("50342"),
                            l.e("63726"),
                            l.e("93513"),
                            l.e("7406"),
                            l.e("55524"),
                            l.e("79149"),
                            l.e("89908"),
                            l.e("90017"),
                            l.e("74571"),
                            l.e("27967"),
                        ]).then(l.bind(l, 142630));
                        return (l) => (0, t.jsx)(i, { ...l, file: a, imageUri: e, uploadType: y, onCrop: I });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [I, y],
        ),
        L = j ?? (null != r ? ("localDataUri" in r ? r.localDataUri : f(s, r.fileId)) : null);
    return (0, t.jsx)(p.vN, {
        within: !0,
        children: (0, t.jsxs)("div", {
            className: n()(v.kL, a),
            children: [
                null != L ? (0, t.jsx)("img", { alt: "", src: L, className: v.Sl }) : (0, t.jsx)(U, { canEdit: !0 }),
                null != j
                    ? (0, t.jsx)("div", {
                          className: v.ob,
                          children: (0, t.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : null,
                (0, t.jsx)(h.Ay, {
                    tabIndex: 0,
                    onChange: E,
                    multiple: !1,
                    "aria-label": k.intl.string(k.t["MsUY/S"]),
                }),
            ],
        }),
    });
}
function w(e) {
    let {
        className: a,
        canEdit: l,
        userId: i,
        image: s,
        previewUri: n,
        uploadType: r,
        onImageUploadStarted: c,
        onImageUploadCompleted: d,
    } = e;
    return l
        ? (0, t.jsx)(b, {
              className: a,
              userId: i,
              image: s,
              previewUri: n,
              uploadType: r,
              onImageUploadStarted: c,
              onImageUploadCompleted: d,
          })
        : null == s
          ? (0, t.jsx)("div", { className: a, children: (0, t.jsx)(U, { canEdit: !1 }) })
          : (0, t.jsx)(y, { className: a, userId: i, image: s });
}
