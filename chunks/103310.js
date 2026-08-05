"use strict";
n.d(t, { A: () => N, N: () => m });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(750943),
    o = n(691540),
    d = n(857250),
    c = n(97483),
    u = n(259678),
    _ = n(289873),
    E = n(946274),
    A = n(38405),
    h = n(958805),
    I = n(652215),
    f = n(375708),
    p = n(902391);
function T(e, t) {
    let n = window.GLOBAL_ENV.CDN_HOST ?? I.f34;
    return `https://${n}/widget-assets/${e}/${t}`;
}
function m(e) {
    let { className: t, userId: n, image: r } = e;
    if ("localDataUri" in r) return (0, i.jsx)("img", { className: t, alt: "", src: r.localDataUri });
    let a = T(n, r.fileId);
    return (0, i.jsx)("img", { className: t, alt: "", src: a, width: r.width, height: r.height });
}
function g(e) {
    let { canEdit: t } = e;
    return (0, i.jsx)("div", {
        className: p.qf,
        children: t ? (0, i.jsx)(l.X, { className: p.Dm, size: "md" }) : null,
    });
}
function S(e) {
    let { className: t, userId: n, image: a, previewUri: l, onImageUploadStarted: I, onImageUploadCompleted: m } = e,
        S = r.useRef(0),
        N = r.useCallback(
            async (e, t) => {
                S.current = S.current + 1;
                let n = S.current;
                I?.(e);
                try {
                    let i = await h.A.uploadWidgetAsset(t);
                    if (S.current !== n) return;
                    m({ filename: i, localDataUri: e });
                } catch (e) {
                    if (S.current !== n) return;
                    (0, o.P0)((0, d.o)(f.intl.string(f.t.F4Neqh), c.Ck.FAILURE)), A.A.captureException(e), m(null);
                }
            },
            [I, m],
        ),
        C = l ?? (null != a ? ("localDataUri" in a ? a.localDataUri : T(n, a.fileId)) : null);
    return (0, i.jsx)(u.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: s()(p.kL, t),
            children: [
                null != C ? (0, i.jsx)("img", { alt: "", src: C, className: p.Sl }) : (0, i.jsx)(g, { canEdit: !0 }),
                null != l
                    ? (0, i.jsx)("div", {
                          className: p.ob,
                          children: (0, i.jsx)(_.y, { type: _.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : null,
                (0, i.jsx)(E.Ay, {
                    tabIndex: 0,
                    onChange: N,
                    maxFileSizeBytes: 0xa00000,
                    multiple: !1,
                    "aria-label": f.intl.string(f.t["MsUY/S"]),
                }),
            ],
        }),
    });
}
function N(e) {
    let {
        className: t,
        canEdit: n,
        userId: r,
        image: a,
        previewUri: l,
        onImageUploadStarted: o,
        onImageUploadCompleted: d,
    } = e;
    return n
        ? (0, i.jsx)(S, {
              className: t,
              userId: r,
              image: a,
              previewUri: l,
              onImageUploadStarted: o,
              onImageUploadCompleted: d,
          })
        : null == a
          ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)(g, { canEdit: !1 }) })
          : (0, i.jsx)(m, { className: s()(p.Sl, t), userId: r, image: a });
}
