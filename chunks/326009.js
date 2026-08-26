s.d(a, { A: () => S, N: () => k });
var i = s(477900),
    l = s(582128),
    n = s(503698),
    t = s.n(n),
    r = s(866665),
    c = s(750943),
    d = s(259678),
    o = s(289873),
    u = s(22231),
    m = s(661531),
    h = s(693875),
    x = s(946274),
    p = s(885386),
    j = s(486020),
    v = s(652215);
function N(e, a) {
    let { animated: s = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = window.GLOBAL_ENV.CDN_HOST ?? v.f34,
        l = `https://${i}/widget-assets/${e}/${a}`,
        n = j.QB ? "webp" : s ? "gif" : "png";
    return `${l}?format=${n}&animated=${s}`;
}
var g = s(375708),
    f = s(842730);
function A(e, a, s) {
    let i = p.kt.useSetting(),
        [n, t] = l.useState(!1),
        r = l.useCallback(() => t(!0), []),
        c = l.useCallback(() => t(!1), []),
        d = s && null != a && !("localDataUri" in a) && a.isAnimated && !i;
    return (l.useEffect(() => {
        !d || null == a || "localDataUri" in a || (new Image().src = N(e, a.fileId, { animated: !0 }));
    }, [d, e, a]),
    null == a)
        ? { src: void 0, showGifTag: !1, onMouseMove: r, onMouseLeave: c, isHovering: n }
        : "localDataUri" in a
          ? { src: a.localDataUri, showGifTag: !1, onMouseMove: r, onMouseLeave: c, isHovering: n }
          : {
                src: N(e, a.fileId, { animated: s && a.isAnimated && (i || n) }),
                showGifTag: d,
                isHovering: n,
                onMouseMove: r,
                onMouseLeave: c,
            };
}
function k(e) {
    let { className: a, userId: s, image: l, canAnimate: n = !0 } = e,
        { src: r, showGifTag: c, onMouseMove: d, onMouseLeave: o } = A(s, l, n);
    return "localDataUri" in l
        ? (0, i.jsx)("div", { className: a, children: (0, i.jsx)("img", { className: f.Sl, alt: "", src: r }) })
        : (0, i.jsxs)("div", {
              className: t()(f.ZS, a),
              onMouseMove: d,
              onMouseLeave: o,
              children: [
                  (0, i.jsx)("img", { className: f.Sl, alt: "", src: r, width: l.width, height: l.height }),
                  c ? (0, i.jsx)(h.A, { className: f.pH }) : null,
              ],
          });
}
function w(e) {
    let { canEdit: a, isHovering: s } = e;
    return (0, i.jsx)("div", {
        className: f.qf,
        children: a
            ? (0, i.jsx)(r.m, {
                  text: g.intl.string(g.t["MsUY/S"]),
                  forceOpen: s,
                  ariaHidden: !0,
                  children: (0, i.jsx)(c.X, { className: f.Dm, size: "md" }),
              })
            : null,
    });
}
function I(e) {
    let {
            className: a,
            userId: s,
            image: l,
            imageInputRef: n,
            previewUri: r,
            canAnimate: c = !0,
            cropAndUpload: p,
            editVariant: j,
        } = e,
        { src: v, showGifTag: N, onMouseMove: k, onMouseLeave: I, isHovering: S } = A(s, l, c),
        U = r ?? v;
    return (0, i.jsx)(d.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: t()(f.kL, a),
            onMouseMove: k,
            onMouseLeave: I,
            children: [
                null != U
                    ? (0, i.jsx)("img", { alt: "", src: U, className: f.Sl })
                    : (0, i.jsx)(w, { canEdit: !0, isHovering: "tooltip" === j && S }),
                null != r
                    ? (0, i.jsx)("div", {
                          className: f.ob,
                          children: (0, i.jsx)(o.y, { type: o.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : N
                      ? (0, i.jsx)(h.A, { className: f.pH })
                      : null,
                "overlay" === j && null != U && null == r
                    ? (0, i.jsx)("div", {
                          className: f.HU,
                          "aria-hidden": !0,
                          children: (0, i.jsx)(u.PencilIcon, { size: "md", color: m.A.colors.WHITE, className: f._1 }),
                      })
                    : null,
                (0, i.jsx)(x.Ay, {
                    ref: n,
                    tabIndex: 0,
                    onChange: p,
                    multiple: !1,
                    "aria-label": g.intl.string(g.t["MsUY/S"]),
                    title: "",
                }),
            ],
        }),
    });
}
function S(e) {
    let {
        className: a,
        canEdit: s,
        userId: l,
        image: n,
        imageInputRef: t,
        previewUri: r,
        canAnimate: c = !0,
        cropAndUpload: d,
        editVariant: o,
    } = e;
    return s
        ? (0, i.jsx)(I, {
              className: a,
              userId: l,
              image: n,
              imageInputRef: t,
              previewUri: r,
              canAnimate: c,
              cropAndUpload: d,
              editVariant: o,
          })
        : null == n
          ? (0, i.jsx)("div", { className: a, children: (0, i.jsx)(w, { canEdit: !1, isHovering: !1 }) })
          : (0, i.jsx)(k, { className: a, userId: l, image: n, canAnimate: c });
}
