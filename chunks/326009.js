"use strict";
n.d(t, { A: () => y, N: () => O });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(750943),
    o = n(691540),
    d = n(857250),
    c = n(97483),
    u = n(192308),
    _ = n(259678),
    E = n(289873),
    A = n(693875),
    h = n(946274),
    I = n(885386),
    f = n(515718),
    p = n(38405),
    T = n(958805),
    m = n(486020),
    g = n(652215);
function S(e, t) {
    let { animated: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = window.GLOBAL_ENV.CDN_HOST ?? g.f34,
        r = `https://${i}/widget-assets/${e}/${t}`,
        a = m.QB ? "webp" : n ? "gif" : "png";
    return `${r}?format=${a}&animated=${n}`;
}
var N = n(375708),
    C = n(902391);
function R(e, t, n) {
    let i = I.kt.useSetting(),
        [a, s] = r.useState(!1),
        l = r.useCallback(() => s(!0), []),
        o = r.useCallback(() => s(!1), []),
        d = n && null != t && !("localDataUri" in t) && t.isAnimated && !i;
    return (r.useEffect(() => {
        !d || null == t || "localDataUri" in t || (new Image().src = S(e, t.fileId, { animated: !0 }));
    }, [d, e, t]),
    null == t)
        ? { src: void 0, showGifTag: !1, onMouseMove: l, onMouseLeave: o }
        : "localDataUri" in t
          ? { src: t.localDataUri, showGifTag: !1, onMouseMove: l, onMouseLeave: o }
          : {
                src: S(e, t.fileId, { animated: n && t.isAnimated && (i || a) }),
                showGifTag: d,
                onMouseMove: l,
                onMouseLeave: o,
            };
}
function O(e) {
    let { className: t, userId: n, image: r, canAnimate: a = !0 } = e,
        { src: l, showGifTag: o, onMouseMove: d, onMouseLeave: c } = R(n, r, a);
    return "localDataUri" in r
        ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)("img", { className: C.Sl, alt: "", src: l }) })
        : (0, i.jsxs)("div", {
              className: s()(C.ZS, t),
              onMouseMove: d,
              onMouseLeave: c,
              children: [
                  (0, i.jsx)("img", { className: C.Sl, alt: "", src: l, width: r.width, height: r.height }),
                  o ? (0, i.jsx)(A.A, { className: C.pH }) : null,
              ],
          });
}
function L(e) {
    let { canEdit: t } = e;
    return (0, i.jsx)("div", {
        className: C.qf,
        children: t ? (0, i.jsx)(l.X, { className: C.Dm, size: "md" }) : null,
    });
}
function D(e) {
    let {
            className: t,
            userId: a,
            image: l,
            previewUri: I,
            uploadType: m,
            canAnimate: g,
            onImageUploadStarted: S,
            onImageUploadCompleted: O,
        } = e,
        D = r.useRef(0),
        y = r.useCallback(
            async (e, t) => {
                D.current = D.current + 1;
                let n = D.current;
                S?.(e);
                try {
                    let i = await T.A.uploadWidgetAsset(t);
                    if (D.current !== n) return;
                    O({ filename: i, localDataUri: e });
                } catch (e) {
                    if (D.current !== n) return;
                    (0, o.P0)((0, d.o)(N.intl.string(N.t.F4Neqh), c.Ck.FAILURE)), p.A.captureException(e), O(null);
                }
            },
            [S, O],
        ),
        v = r.useCallback(
            (e) => {
                var t, n;
                let i,
                    { imageUri: r, file: a } = e,
                    s = (0, f.aU)(r);
                s.size > 0xa00000
                    ? (0, o.P0)((0, d.o)(N.intl.string(N.t.YbdEFK), c.Ck.FAILURE))
                    : y(
                          r,
                          new File(
                              [s],
                              ((t = a.name),
                              (n = s.type),
                              (i = t.replace(/\.[^.]+$/, "")),
                              `${"" !== i ? i : "image"}.${"image/gif" === n ? "gif" : "image/webp" === n ? "webp" : "png"}`),
                              { type: s.type },
                          ),
                      );
            },
            [y],
        ),
        b = r.useCallback(
            (e, t) => {
                (0, u.openModalLazy)(
                    async () => {
                        let { default: r } = await Promise.all([
                            n.e("14520"),
                            n.e("42083"),
                            n.e("97250"),
                            n.e("63232"),
                            n.e("43437"),
                            n.e("58164"),
                            n.e("71470"),
                            n.e("37490"),
                            n.e("50342"),
                            n.e("63726"),
                            n.e("93513"),
                            n.e("7406"),
                            n.e("55524"),
                            n.e("79149"),
                            n.e("89908"),
                            n.e("90017"),
                            n.e("74571"),
                            n.e("27967"),
                        ]).then(n.bind(n, 142630));
                        return (n) => (0, i.jsx)(r, { ...n, file: t, imageUri: e, uploadType: m, onCrop: v });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [v, m],
        ),
        { src: M, showGifTag: P, onMouseMove: U, onMouseLeave: w } = R(a, l, g),
        G = I ?? M;
    return (0, i.jsx)(_.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: s()(C.kL, t),
            onMouseMove: U,
            onMouseLeave: w,
            children: [
                null != G ? (0, i.jsx)("img", { alt: "", src: G, className: C.Sl }) : (0, i.jsx)(L, { canEdit: !0 }),
                null != I
                    ? (0, i.jsx)("div", {
                          className: C.ob,
                          children: (0, i.jsx)(E.y, { type: E.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : P
                      ? (0, i.jsx)(A.A, { className: C.pH })
                      : null,
                (0, i.jsx)(h.Ay, {
                    tabIndex: 0,
                    onChange: b,
                    multiple: !1,
                    "aria-label": N.intl.string(N.t["MsUY/S"]),
                    title: "",
                }),
            ],
        }),
    });
}
function y(e) {
    let {
        className: t,
        canEdit: n,
        userId: r,
        image: a,
        previewUri: s,
        uploadType: l,
        canAnimate: o = !0,
        onImageUploadStarted: d,
        onImageUploadCompleted: c,
    } = e;
    return n
        ? (0, i.jsx)(D, {
              className: t,
              userId: r,
              image: a,
              previewUri: s,
              uploadType: l,
              canAnimate: o,
              onImageUploadStarted: d,
              onImageUploadCompleted: c,
          })
        : null == a
          ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)(L, { canEdit: !1 }) })
          : (0, i.jsx)(O, { className: t, userId: r, image: a, canAnimate: o });
}
