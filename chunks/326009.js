l.d(a, { A: () => S, N: () => I });
var t = l(477900),
    s = l(582128),
    i = l(503698),
    n = l.n(i),
    r = l(750943),
    c = l(691540),
    u = l(857250),
    d = l(97483),
    o = l(192308),
    m = l(259678),
    p = l(289873),
    h = l(693875),
    g = l(946274),
    x = l(229531),
    f = l(885386),
    N = l(515718),
    j = l(741394),
    k = l(38405),
    v = l(958805),
    A = l(486020),
    w = l(652215);
function C(e, a) {
    let { animated: l = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        t = window.GLOBAL_ENV.CDN_HOST ?? w.f34,
        s = `https://${t}/widget-assets/${e}/${a}`,
        i = A.QB ? "webp" : l ? "gif" : "png";
    return `${s}?format=${i}&animated=${l}`;
}
var U = l(375708),
    b = l(842730);
function y(e, a, l) {
    let t = f.kt.useSetting(),
        [i, n] = s.useState(!1),
        r = s.useCallback(() => n(!0), []),
        c = s.useCallback(() => n(!1), []),
        u = l && null != a && !("localDataUri" in a) && a.isAnimated && !t;
    return (s.useEffect(() => {
        !u || null == a || "localDataUri" in a || (new Image().src = C(e, a.fileId, { animated: !0 }));
    }, [u, e, a]),
    null == a)
        ? { src: void 0, showGifTag: !1, onMouseMove: r, onMouseLeave: c }
        : "localDataUri" in a
          ? { src: a.localDataUri, showGifTag: !1, onMouseMove: r, onMouseLeave: c }
          : {
                src: C(e, a.fileId, { animated: l && a.isAnimated && (t || i) }),
                showGifTag: u,
                onMouseMove: r,
                onMouseLeave: c,
            };
}
function I(e) {
    let { className: a, userId: l, image: s, canAnimate: i = !0 } = e,
        { src: r, showGifTag: c, onMouseMove: u, onMouseLeave: d } = y(l, s, i);
    return "localDataUri" in s
        ? (0, t.jsx)("div", { className: a, children: (0, t.jsx)("img", { className: b.Sl, alt: "", src: r }) })
        : (0, t.jsxs)("div", {
              className: n()(b.ZS, a),
              onMouseMove: u,
              onMouseLeave: d,
              children: [
                  (0, t.jsx)("img", { className: b.Sl, alt: "", src: r, width: s.width, height: s.height }),
                  c ? (0, t.jsx)(h.A, { className: b.pH }) : null,
              ],
          });
}
function E(e) {
    let { canEdit: a } = e;
    return (0, t.jsx)("div", {
        className: b.qf,
        children: a ? (0, t.jsx)(r.X, { className: b.Dm, size: "md" }) : null,
    });
}
function L(e) {
    let {
            className: a,
            userId: i,
            image: r,
            previewUri: f,
            uploadType: A,
            canAnimate: w,
            onImageUploadStarted: C,
            onImageUploadCompleted: I,
        } = e,
        L = s.useRef(0),
        S = s.useCallback(
            async (e, a) => {
                L.current = L.current + 1;
                let l = L.current;
                C?.(e);
                try {
                    let t = await v.A.uploadWidgetAsset(a);
                    if (L.current !== l) return;
                    I({ filename: t, localDataUri: e });
                } catch (e) {
                    if (L.current !== l) return;
                    (0, c.P0)((0, u.o)(U.intl.string(U.t.F4Neqh), d.Ck.FAILURE)), k.A.captureException(e), I(null);
                }
            },
            [C, I],
        ),
        M = s.useCallback(
            (e) => {
                var a, l;
                let t,
                    s,
                    { imageUri: i, file: n } = e,
                    r = (0, N.aU)(i);
                r.size > 0xa00000
                    ? (0, c.P0)((0, u.o)(U.intl.string(U.t.YbdEFK), d.Ck.FAILURE))
                    : S(
                          i,
                          new File(
                              [r],
                              ((a = n.name),
                              (l = r.type),
                              (t = (0, x.B)(l) ?? "png"),
                              (s = (0, j.kh)(a)),
                              `${"" !== s ? s : "image"}.${t}`),
                              { type: r.type },
                          ),
                      );
            },
            [S],
        ),
        D = s.useCallback(
            (e, a) => {
                (0, o.openModalLazy)(
                    async () => {
                        let { default: s } = await Promise.all([
                            l.e("940226"),
                            l.e("655327"),
                            l.e("67702"),
                            l.e("1214"),
                            l.e("863232"),
                            l.e("343437"),
                            l.e("858164"),
                            l.e("571470"),
                            l.e("837490"),
                            l.e("50342"),
                            l.e("463726"),
                            l.e("93513"),
                            l.e("779149"),
                            l.e("507406"),
                            l.e("455524"),
                            l.e("90017"),
                            l.e("489908"),
                            l.e("574571"),
                            l.e("750348"),
                        ]).then(l.bind(l, 142630));
                        return (l) => (0, t.jsx)(s, { ...l, file: a, imageUri: e, uploadType: A, onCrop: M });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [M, A],
        ),
        { src: $, showGifTag: B, onMouseMove: R, onMouseLeave: T } = y(i, r, w),
        _ = f ?? $;
    return (0, t.jsx)(m.vN, {
        within: !0,
        children: (0, t.jsxs)("div", {
            className: n()(b.kL, a),
            onMouseMove: R,
            onMouseLeave: T,
            children: [
                null != _ ? (0, t.jsx)("img", { alt: "", src: _, className: b.Sl }) : (0, t.jsx)(E, { canEdit: !0 }),
                null != f
                    ? (0, t.jsx)("div", {
                          className: b.ob,
                          children: (0, t.jsx)(p.y, { type: p.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : B
                      ? (0, t.jsx)(h.A, { className: b.pH })
                      : null,
                (0, t.jsx)(g.Ay, {
                    tabIndex: 0,
                    onChange: D,
                    multiple: !1,
                    "aria-label": U.intl.string(U.t["MsUY/S"]),
                    title: "",
                }),
            ],
        }),
    });
}
function S(e) {
    let {
        className: a,
        canEdit: l,
        userId: s,
        image: i,
        previewUri: n,
        uploadType: r,
        canAnimate: c = !0,
        onImageUploadStarted: u,
        onImageUploadCompleted: d,
    } = e;
    return l
        ? (0, t.jsx)(L, {
              className: a,
              userId: s,
              image: i,
              previewUri: n,
              uploadType: r,
              canAnimate: c,
              onImageUploadStarted: u,
              onImageUploadCompleted: d,
          })
        : null == i
          ? (0, t.jsx)("div", { className: a, children: (0, t.jsx)(E, { canEdit: !1 }) })
          : (0, t.jsx)(I, { className: a, userId: s, image: i, canAnimate: c });
}
