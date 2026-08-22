s.d(a, { A: () => k, N: () => g });
var i = s(477900),
    l = s(582128),
    n = s(503698),
    t = s.n(n),
    c = s(750943),
    r = s(259678),
    d = s(289873),
    u = s(693875),
    o = s(946274),
    m = s(885386),
    h = s(486020),
    p = s(652215);
function x(e, a) {
    let { animated: s = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = window.GLOBAL_ENV.CDN_HOST ?? p.f34,
        l = `https://${i}/widget-assets/${e}/${a}`,
        n = h.QB ? "webp" : s ? "gif" : "png";
    return `${l}?format=${n}&animated=${s}`;
}
var N = s(375708),
    j = s(842730);
function f(e, a, s) {
    let i = m.kt.useSetting(),
        [n, t] = l.useState(!1),
        c = l.useCallback(() => t(!0), []),
        r = l.useCallback(() => t(!1), []),
        d = s && null != a && !("localDataUri" in a) && a.isAnimated && !i;
    return (l.useEffect(() => {
        !d || null == a || "localDataUri" in a || (new Image().src = x(e, a.fileId, { animated: !0 }));
    }, [d, e, a]),
    null == a)
        ? { src: void 0, showGifTag: !1, onMouseMove: c, onMouseLeave: r }
        : "localDataUri" in a
          ? { src: a.localDataUri, showGifTag: !1, onMouseMove: c, onMouseLeave: r }
          : {
                src: x(e, a.fileId, { animated: s && a.isAnimated && (i || n) }),
                showGifTag: d,
                onMouseMove: c,
                onMouseLeave: r,
            };
}
function g(e) {
    let { className: a, userId: s, image: l, canAnimate: n = !0 } = e,
        { src: c, showGifTag: r, onMouseMove: d, onMouseLeave: o } = f(s, l, n);
    return "localDataUri" in l
        ? (0, i.jsx)("div", { className: a, children: (0, i.jsx)("img", { className: j.Sl, alt: "", src: c }) })
        : (0, i.jsxs)("div", {
              className: t()(j.ZS, a),
              onMouseMove: d,
              onMouseLeave: o,
              children: [
                  (0, i.jsx)("img", { className: j.Sl, alt: "", src: c, width: l.width, height: l.height }),
                  r ? (0, i.jsx)(u.A, { className: j.pH }) : null,
              ],
          });
}
function v(e) {
    let { canEdit: a } = e;
    return (0, i.jsx)("div", {
        className: j.qf,
        children: a ? (0, i.jsx)(c.X, { className: j.Dm, size: "md" }) : null,
    });
}
function A(e) {
    let {
            className: a,
            userId: s,
            image: l,
            imageInputRef: n,
            previewUri: c,
            canAnimate: m = !0,
            cropAndUpload: h,
        } = e,
        { src: p, showGifTag: x, onMouseMove: g, onMouseLeave: A } = f(s, l, m),
        k = c ?? p;
    return (0, i.jsx)(r.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: t()(j.kL, a),
            onMouseMove: g,
            onMouseLeave: A,
            children: [
                null != k ? (0, i.jsx)("img", { alt: "", src: k, className: j.Sl }) : (0, i.jsx)(v, { canEdit: !0 }),
                null != c
                    ? (0, i.jsx)("div", {
                          className: j.ob,
                          children: (0, i.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : x
                      ? (0, i.jsx)(u.A, { className: j.pH })
                      : null,
                (0, i.jsx)(o.Ay, {
                    ref: n,
                    tabIndex: 0,
                    onChange: h,
                    multiple: !1,
                    "aria-label": N.intl.string(N.t["MsUY/S"]),
                    title: "",
                }),
            ],
        }),
    });
}
function k(e) {
    let {
        className: a,
        canEdit: s,
        userId: l,
        image: n,
        imageInputRef: t,
        previewUri: c,
        canAnimate: r = !0,
        cropAndUpload: d,
    } = e;
    return s
        ? (0, i.jsx)(A, {
              className: a,
              userId: l,
              image: n,
              imageInputRef: t,
              previewUri: c,
              canAnimate: r,
              cropAndUpload: d,
          })
        : null == n
          ? (0, i.jsx)("div", { className: a, children: (0, i.jsx)(v, { canEdit: !1 }) })
          : (0, i.jsx)(g, { className: a, userId: l, image: n, canAnimate: r });
}
