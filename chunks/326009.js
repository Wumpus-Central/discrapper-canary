l.d(a, { A: () => E, N: () => U });
var t = l(477900),
    i = l(582128),
    s = l(503698),
    n = l.n(s),
    r = l(750943),
    c = l(691540),
    u = l(857250),
    d = l(97483),
    o = l(192308),
    m = l(259678),
    p = l(289873),
    g = l(693875),
    h = l(946274),
    f = l(885386),
    x = l(515718),
    N = l(38405),
    j = l(958805),
    v = l(486020),
    k = l(652215);
function A(e, a) {
    let { animated: l = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        t = window.GLOBAL_ENV.CDN_HOST ?? k.f34,
        i = `https://${t}/widget-assets/${e}/${a}`,
        s = v.QB ? "webp" : l ? "gif" : "png";
    return `${i}?format=${s}&animated=${l}`;
}
var w = l(375708),
    b = l(842730);
function C(e, a, l) {
    let t = f.kt.useSetting(),
        [s, n] = i.useState(!1),
        r = i.useCallback(() => n(!0), []),
        c = i.useCallback(() => n(!1), []),
        u = l && null != a && !("localDataUri" in a) && a.isAnimated && !t;
    return (i.useEffect(() => {
        !u || null == a || "localDataUri" in a || (new Image().src = A(e, a.fileId, { animated: !0 }));
    }, [u, e, a]),
    null == a)
        ? { src: void 0, showGifTag: !1, onMouseMove: r, onMouseLeave: c }
        : "localDataUri" in a
          ? { src: a.localDataUri, showGifTag: !1, onMouseMove: r, onMouseLeave: c }
          : {
                src: A(e, a.fileId, { animated: l && a.isAnimated && (t || s) }),
                showGifTag: u,
                onMouseMove: r,
                onMouseLeave: c,
            };
}
function U(e) {
    let { className: a, userId: l, image: i, canAnimate: s = !0 } = e,
        { src: r, showGifTag: c, onMouseMove: u, onMouseLeave: d } = C(l, i, s);
    return "localDataUri" in i
        ? (0, t.jsx)("div", { className: a, children: (0, t.jsx)("img", { className: b.Sl, alt: "", src: r }) })
        : (0, t.jsxs)("div", {
              className: n()(b.ZS, a),
              onMouseMove: u,
              onMouseLeave: d,
              children: [
                  (0, t.jsx)("img", { className: b.Sl, alt: "", src: r, width: i.width, height: i.height }),
                  c ? (0, t.jsx)(g.A, { className: b.pH }) : null,
              ],
          });
}
function y(e) {
    let { canEdit: a } = e;
    return (0, t.jsx)("div", {
        className: b.qf,
        children: a ? (0, t.jsx)(r.X, { className: b.Dm, size: "md" }) : null,
    });
}
function I(e) {
    let {
            className: a,
            userId: s,
            image: r,
            previewUri: f,
            uploadType: v,
            canAnimate: k,
            onImageUploadStarted: A,
            onImageUploadCompleted: U,
        } = e,
        I = i.useRef(0),
        E = i.useCallback(
            async (e, a) => {
                I.current = I.current + 1;
                let l = I.current;
                A?.(e);
                try {
                    let t = await j.A.uploadWidgetAsset(a);
                    if (I.current !== l) return;
                    U({ filename: t, localDataUri: e });
                } catch (e) {
                    if (I.current !== l) return;
                    (0, c.P0)((0, u.o)(w.intl.string(w.t.F4Neqh), d.Ck.FAILURE)), N.A.captureException(e), U(null);
                }
            },
            [A, U],
        ),
        L = i.useCallback(
            (e) => {
                var a, l;
                let t,
                    { imageUri: i, file: s } = e,
                    n = (0, x.aU)(i);
                n.size > 0xa00000
                    ? (0, c.P0)((0, u.o)(w.intl.string(w.t.YbdEFK), d.Ck.FAILURE))
                    : E(
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
            [E],
        ),
        S = i.useCallback(
            (e, a) => {
                (0, o.openModalLazy)(
                    async () => {
                        let { default: i } = await Promise.all([
                            l.e("321603"),
                            l.e("655327"),
                            l.e("411430"),
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
                        return (l) => (0, t.jsx)(i, { ...l, file: a, imageUri: e, uploadType: v, onCrop: L });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [L, v],
        ),
        { src: M, showGifTag: $, onMouseMove: D, onMouseLeave: R } = C(s, r, k),
        T = f ?? M;
    return (0, t.jsx)(m.vN, {
        within: !0,
        children: (0, t.jsxs)("div", {
            className: n()(b.kL, a),
            onMouseMove: D,
            onMouseLeave: R,
            children: [
                null != T ? (0, t.jsx)("img", { alt: "", src: T, className: b.Sl }) : (0, t.jsx)(y, { canEdit: !0 }),
                null != f
                    ? (0, t.jsx)("div", {
                          className: b.ob,
                          children: (0, t.jsx)(p.y, { type: p.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : $
                      ? (0, t.jsx)(g.A, { className: b.pH })
                      : null,
                (0, t.jsx)(h.Ay, {
                    tabIndex: 0,
                    onChange: S,
                    multiple: !1,
                    "aria-label": w.intl.string(w.t["MsUY/S"]),
                    title: "",
                }),
            ],
        }),
    });
}
function E(e) {
    let {
        className: a,
        canEdit: l,
        userId: i,
        image: s,
        previewUri: n,
        uploadType: r,
        canAnimate: c = !0,
        onImageUploadStarted: u,
        onImageUploadCompleted: d,
    } = e;
    return l
        ? (0, t.jsx)(I, {
              className: a,
              userId: i,
              image: s,
              previewUri: n,
              uploadType: r,
              canAnimate: c,
              onImageUploadStarted: u,
              onImageUploadCompleted: d,
          })
        : null == s
          ? (0, t.jsx)("div", { className: a, children: (0, t.jsx)(y, { canEdit: !1 }) })
          : (0, t.jsx)(U, { className: a, userId: i, image: s, canAnimate: c });
}
