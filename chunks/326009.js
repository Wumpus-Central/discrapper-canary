a.d(t, { A: () => k, N: () => U });
var l = a(477900),
    i = a(582128),
    n = a(503698),
    s = a.n(n),
    r = a(866665),
    o = a(750943),
    c = a(259678),
    d = a(289873),
    u = a(22231),
    p = a(661531),
    m = a(922016),
    g = a(939249),
    h = a(693875),
    v = a(946274),
    f = a(885386),
    x = a(486020),
    j = a(652215);
function w(e, t) {
    let { animated: a = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = window.GLOBAL_ENV.CDN_HOST ?? j.f34,
        i = `https://${l}/widget-assets/${e}/${t}`,
        n = x.QB ? "webp" : a ? "gif" : "png";
    return `${i}?format=${n}&animated=${a}`;
}
var A = a(458499),
    N = a(375708),
    y = a(842730);
function b(e, t, a) {
    let l = f.kt.useSetting(),
        [n, s] = i.useState(!1),
        r = i.useCallback(() => s(!0), []),
        o = i.useCallback(() => s(!1), []),
        c = a && null != t && !("localDataUri" in t) && t.isAnimated && !l;
    return (i.useEffect(() => {
        !c || null == t || "localDataUri" in t || (new Image().src = w(e, t.fileId, { animated: !0 }));
    }, [c, e, t]),
    null == t)
        ? { src: void 0, showGifTag: !1, onMouseMove: r, onMouseLeave: o, isHovering: n }
        : "localDataUri" in t
          ? { src: t.localDataUri, showGifTag: !1, onMouseMove: r, onMouseLeave: o, isHovering: n }
          : {
                src: w(e, t.fileId, { animated: a && t.isAnimated && (l || n) }),
                showGifTag: c,
                isHovering: n,
                onMouseMove: r,
                onMouseLeave: o,
            };
}
function U(e) {
    let { className: t, userId: a, image: i, canAnimate: n = !0 } = e,
        { src: r, showGifTag: o, onMouseMove: c, onMouseLeave: d } = b(a, i, n);
    return "localDataUri" in i
        ? (0, l.jsx)("div", { className: t, children: (0, l.jsx)("img", { className: y.Sl, alt: "", src: r }) })
        : (0, l.jsxs)("div", {
              className: s()(y.ZS, t),
              onMouseMove: c,
              onMouseLeave: d,
              children: [
                  (0, l.jsx)("img", { className: y.Sl, alt: "", src: r, width: i.width, height: i.height }),
                  o ? (0, l.jsx)(h.A, { className: y.pH }) : null,
              ],
          });
}
function I(e) {
    let { canEdit: t, isHovering: a } = e;
    return (0, l.jsx)("div", {
        className: y.qf,
        children: t
            ? (0, l.jsx)(r.m, {
                  text: N.intl.string(N.t["MsUY/S"]),
                  forceOpen: a,
                  ariaHidden: !0,
                  children: (0, l.jsx)(o.X, { className: y.Dm, size: "md" }),
              })
            : null,
    });
}
function C(e) {
    let {
            className: t,
            userId: a,
            image: n,
            imageInputRef: r,
            previewUri: o,
            canAnimate: f = !0,
            cropAndUpload: x,
            editVariant: j,
            lastEdit: w,
        } = e,
        { src: U, showGifTag: C, onMouseMove: k, onMouseLeave: L, isHovering: R } = b(a, n, f),
        E = o ?? U,
        M = i.useRef(null),
        S = r ?? M,
        D = i.useRef(null);
    function H() {
        S.current?.activateUploadDialogue();
    }
    let _ = null != w && null != E && null == o;
    return (0, l.jsx)(c.vN, {
        within: !0,
        children: (0, l.jsxs)("div", {
            className: s()(y.kL, t),
            onMouseMove: k,
            onMouseLeave: L,
            children: [
                null != E
                    ? (0, l.jsx)("img", { alt: "", src: E, className: y.Sl })
                    : (0, l.jsx)(I, { canEdit: !0, isHovering: "tooltip" === j && R }),
                null != o
                    ? (0, l.jsx)("div", {
                          className: y.ob,
                          children: (0, l.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : C
                      ? (0, l.jsx)(h.A, { className: y.pH })
                      : null,
                "overlay" === j && null != E && null == o
                    ? (0, l.jsx)("div", {
                          className: y.HU,
                          "aria-hidden": !0,
                          children: (0, l.jsx)(u.PencilIcon, { size: "md", color: p.A.colors.WHITE, className: y._1 }),
                      })
                    : null,
                (0, l.jsx)(v.Ay, {
                    ref: S,
                    tabIndex: _ ? -1 : 0,
                    className: _ ? y.YZ : void 0,
                    "aria-hidden": _,
                    onChange: x,
                    multiple: !1,
                    "aria-label": N.intl.string(N.t["MsUY/S"]),
                    title: "",
                }),
                _ && null != w
                    ? (0, l.jsx)(m.Y, {
                          targetElementRef: D,
                          position: "bottom",
                          disablePointerEvents: !1,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, l.jsx)(A.A, { lastEdit: w, cropAndUpload: x, onChangeImage: H, onClose: t });
                          },
                          children: (e) =>
                              (0, l.jsx)(g.D, {
                                  ...e,
                                  innerRef: D,
                                  className: y.Eq,
                                  "aria-haspopup": "menu",
                                  "aria-label": N.intl.string(N.t.RWkUzH),
                              }),
                      })
                    : null,
            ],
        }),
    });
}
function k(e) {
    let {
        className: t,
        canEdit: a,
        userId: i,
        image: n,
        imageInputRef: s,
        previewUri: r,
        canAnimate: o = !0,
        cropAndUpload: c,
        editVariant: d,
        lastEdit: u,
    } = e;
    return a
        ? (0, l.jsx)(C, {
              className: t,
              userId: i,
              image: n,
              imageInputRef: s,
              previewUri: r,
              canAnimate: o,
              cropAndUpload: c,
              editVariant: d,
              lastEdit: u,
          })
        : null == n
          ? (0, l.jsx)("div", { className: t, children: (0, l.jsx)(I, { canEdit: !1, isHovering: !1 }) })
          : (0, l.jsx)(U, { className: t, userId: i, image: n, canAnimate: o });
}
