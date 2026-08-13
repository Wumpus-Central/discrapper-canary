"use strict";
n.d(t, { A: () => D, N: () => R });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(750943),
    d = n(691540),
    c = n(857250),
    u = n(97483),
    _ = n(192308),
    E = n(259678),
    A = n(289873),
    h = n(775602),
    I = n(946274),
    f = n(515718),
    p = n(38405),
    T = n(958805),
    m = n(486020),
    g = n(652215),
    S = n(375708),
    N = n(902391);
function C(e, t) {
    let n = (0, l.bG)([h.Ay], () => h.Ay.useReducedMotion);
    return null == t
        ? null
        : "localDataUri" in t
          ? t.localDataUri
          : (function (e, t) {
                let { animated: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = window.GLOBAL_ENV.CDN_HOST ?? g.f34,
                    r = `https://${i}/widget-assets/${e}/${t}`,
                    a = m.QB ? "webp" : n ? "gif" : "png";
                return `${r}?format=${a}&animated=${n}`;
            })(e, t.fileId, { animated: t.isAnimated && !n });
}
function R(e) {
    let { className: t, userId: n, image: r } = e,
        a = C(n, r) ?? void 0;
    return "localDataUri" in r
        ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)("img", { className: N.Sl, alt: "", src: a }) })
        : (0, i.jsx)("div", {
              className: t,
              children: (0, i.jsx)("img", { className: N.Sl, alt: "", src: a, width: r.width, height: r.height }),
          });
}
function O(e) {
    let { canEdit: t } = e;
    return (0, i.jsx)("div", {
        className: N.qf,
        children: t ? (0, i.jsx)(o.X, { className: N.Dm, size: "md" }) : null,
    });
}
function L(e) {
    let {
            className: t,
            userId: a,
            image: l,
            previewUri: o,
            uploadType: h,
            onImageUploadStarted: m,
            onImageUploadCompleted: g,
        } = e,
        R = r.useRef(0),
        L = r.useCallback(
            async (e, t) => {
                R.current = R.current + 1;
                let n = R.current;
                m?.(e);
                try {
                    let i = await T.A.uploadWidgetAsset(t);
                    if (R.current !== n) return;
                    g({ filename: i, localDataUri: e });
                } catch (e) {
                    if (R.current !== n) return;
                    (0, d.P0)((0, c.o)(S.intl.string(S.t.F4Neqh), u.Ck.FAILURE)), p.A.captureException(e), g(null);
                }
            },
            [m, g],
        ),
        D = r.useCallback(
            (e) => {
                var t, n;
                let i,
                    { imageUri: r, file: a } = e,
                    s = (0, f.aU)(r);
                s.size > 0xa00000
                    ? (0, d.P0)((0, c.o)(S.intl.string(S.t.YbdEFK), u.Ck.FAILURE))
                    : L(
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
            [L],
        ),
        y = r.useCallback(
            (e, t) => {
                (0, _.openModalLazy)(
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
                        return (n) => (0, i.jsx)(r, { ...n, file: t, imageUri: e, uploadType: h, onCrop: D });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [D, h],
        ),
        v = C(a, l),
        b = o ?? v;
    return (0, i.jsx)(E.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: s()(N.kL, t),
            children: [
                null != b ? (0, i.jsx)("img", { alt: "", src: b, className: N.Sl }) : (0, i.jsx)(O, { canEdit: !0 }),
                null != o
                    ? (0, i.jsx)("div", {
                          className: N.ob,
                          children: (0, i.jsx)(A.y, { type: A.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : null,
                (0, i.jsx)(I.Ay, {
                    tabIndex: 0,
                    onChange: y,
                    multiple: !1,
                    "aria-label": S.intl.string(S.t["MsUY/S"]),
                    title: "",
                }),
            ],
        }),
    });
}
function D(e) {
    let {
        className: t,
        canEdit: n,
        userId: r,
        image: a,
        previewUri: s,
        uploadType: l,
        onImageUploadStarted: o,
        onImageUploadCompleted: d,
    } = e;
    return n
        ? (0, i.jsx)(L, {
              className: t,
              userId: r,
              image: a,
              previewUri: s,
              uploadType: l,
              onImageUploadStarted: o,
              onImageUploadCompleted: d,
          })
        : null == a
          ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)(O, { canEdit: !1 }) })
          : (0, i.jsx)(R, { className: t, userId: r, image: a });
}
