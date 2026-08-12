"use strict";
n.d(t, { A: () => O, N: () => S });
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
    A = n(946274),
    h = n(515718),
    I = n(38405),
    f = n(958805),
    p = n(652215);
function T(e, t) {
    let n = window.GLOBAL_ENV.CDN_HOST ?? p.f34;
    return `https://${n}/widget-assets/${e}/${t}`;
}
var m = n(375708),
    g = n(902391);
function S(e) {
    let { className: t, userId: n, image: r } = e;
    if ("localDataUri" in r)
        return (0, i.jsx)("div", {
            className: t,
            children: (0, i.jsx)("img", { className: g.Sl, alt: "", src: r.localDataUri }),
        });
    let a = T(n, r.fileId);
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)("img", { className: g.Sl, alt: "", src: a, width: r.width, height: r.height }),
    });
}
function N(e) {
    let { canEdit: t } = e;
    return (0, i.jsx)("div", {
        className: g.qf,
        children: t ? (0, i.jsx)(l.X, { className: g.Dm, size: "md" }) : null,
    });
}
function C(e) {
    let {
            className: t,
            userId: a,
            image: l,
            previewUri: p,
            uploadType: S,
            onImageUploadStarted: C,
            onImageUploadCompleted: O,
        } = e,
        R = r.useRef(0),
        L = r.useCallback(
            async (e, t) => {
                R.current = R.current + 1;
                let n = R.current;
                C?.(e);
                try {
                    let i = await f.A.uploadWidgetAsset(t);
                    if (R.current !== n) return;
                    O({ filename: i, localDataUri: e });
                } catch (e) {
                    if (R.current !== n) return;
                    (0, o.P0)((0, d.o)(m.intl.string(m.t.F4Neqh), c.Ck.FAILURE)), I.A.captureException(e), O(null);
                }
            },
            [C, O],
        ),
        D = r.useCallback(
            (e) => {
                var t, n;
                let i,
                    { imageUri: r, file: a } = e,
                    s = (0, h.aU)(r);
                s.size > 0xa00000
                    ? (0, o.P0)((0, d.o)(m.intl.string(m.t.YbdEFK), c.Ck.FAILURE))
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
                        return (n) => (0, i.jsx)(r, { ...n, file: t, imageUri: e, uploadType: S, onCrop: D });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [D, S],
        ),
        v = p ?? (null != l ? ("localDataUri" in l ? l.localDataUri : T(a, l.fileId)) : null);
    return (0, i.jsx)(_.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: s()(g.kL, t),
            children: [
                null != v ? (0, i.jsx)("img", { alt: "", src: v, className: g.Sl }) : (0, i.jsx)(N, { canEdit: !0 }),
                null != p
                    ? (0, i.jsx)("div", {
                          className: g.ob,
                          children: (0, i.jsx)(E.y, { type: E.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : null,
                (0, i.jsx)(A.Ay, {
                    tabIndex: 0,
                    onChange: y,
                    maxFileSizeBytes: 0xa00000,
                    multiple: !1,
                    "aria-label": m.intl.string(m.t["MsUY/S"]),
                }),
            ],
        }),
    });
}
function O(e) {
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
        ? (0, i.jsx)(C, {
              className: t,
              userId: r,
              image: a,
              previewUri: s,
              uploadType: l,
              onImageUploadStarted: o,
              onImageUploadCompleted: d,
          })
        : null == a
          ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)(N, { canEdit: !1 }) })
          : (0, i.jsx)(S, { className: t, userId: r, image: a });
}
