a.d(t, { A: () => y, N: () => N });
var i = a(477900),
    n = a(582128),
    l = a(503698),
    s = a.n(l),
    r = a(866665),
    o = a(750943),
    d = a(259678),
    u = a(289873),
    c = a(22231),
    m = a(661531),
    p = a(922016),
    g = a(939249),
    h = a(693875),
    v = a(946274),
    f = a(885386),
    x = a(486020),
    E = a(652215);
function j(e, t) {
    let { animated: a = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = window.GLOBAL_ENV.CDN_HOST ?? E.f34,
        n = `https://${i}/widget-assets/${e}/${t}`,
        l = x.QB ? "webp" : a ? "gif" : "png";
    return `${n}?format=${l}&animated=${a}`;
}
var A = a(458499),
    I = a(375708),
    L = a(842730);
function U(e, t, a) {
    let i = f.kt.useSetting(),
        [l, s] = n.useState(!1),
        r = n.useCallback(() => s(!0), []),
        o = n.useCallback(() => s(!1), []),
        d = a && null != t && !("localDataUri" in t) && t.isAnimated && !i;
    return (n.useEffect(() => {
        !d || null == t || "localDataUri" in t || (new Image().src = j(e, t.fileId, { animated: !0 }));
    }, [d, e, t]),
    null == t)
        ? { src: void 0, showGifTag: !1, onMouseMove: r, onMouseLeave: o, isHovering: l }
        : "localDataUri" in t
          ? { src: t.localDataUri, showGifTag: !1, onMouseMove: r, onMouseLeave: o, isHovering: l }
          : {
                src: j(e, t.fileId, { animated: a && t.isAnimated && (i || l) }),
                showGifTag: d,
                isHovering: l,
                onMouseMove: r,
                onMouseLeave: o,
            };
}
function N(e) {
    let { className: t, userId: a, image: n, canAnimate: l = !0 } = e,
        { src: r, showGifTag: o, onMouseMove: d, onMouseLeave: u } = U(a, n, l);
    return "localDataUri" in n
        ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)("img", { className: L.Sl, alt: "", src: r }) })
        : (0, i.jsxs)("div", {
              className: s()(L.ZS, t),
              onMouseMove: d,
              onMouseLeave: u,
              children: [
                  (0, i.jsx)("img", { className: L.Sl, alt: "", src: r, width: n.width, height: n.height }),
                  o ? (0, i.jsx)(h.A, { className: L.pH }) : null,
              ],
          });
}
function b(e) {
    let { canEdit: t, isHovering: a } = e;
    return (0, i.jsx)("div", {
        className: L.qf,
        children: t
            ? (0, i.jsx)(r.m, {
                  text: I.intl.string(I.t["MsUY/S"]),
                  forceOpen: a,
                  ariaHidden: !0,
                  children: (0, i.jsx)(o.X, { className: L.Dm, size: "md" }),
              })
            : null,
    });
}
function w(e) {
    let {
            className: t,
            userId: a,
            image: l,
            imageInputRef: r,
            previewUri: o,
            canAnimate: f = !0,
            cropAndUpload: x,
            editVariant: E,
            lastEdit: j,
        } = e,
        { src: N, showGifTag: w, onMouseMove: y, onMouseLeave: R, isHovering: C } = U(a, l, f),
        _ = o ?? N,
        k = n.useRef(null),
        D = r ?? k,
        S = n.useRef(null);
    function M() {
        D.current?.activateUploadDialogue();
    }
    let P = null != j && null != _ && null == o;
    return (0, i.jsx)(d.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: s()(L.kL, t),
            onMouseMove: y,
            onMouseLeave: R,
            children: [
                null != _
                    ? (0, i.jsx)("img", { alt: "", src: _, className: L.Sl })
                    : (0, i.jsx)(b, { canEdit: !0, isHovering: "tooltip" === E && C }),
                null != o
                    ? (0, i.jsx)("div", {
                          className: L.ob,
                          children: (0, i.jsx)(u.y, { type: u.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : w
                      ? (0, i.jsx)(h.A, { className: L.pH })
                      : null,
                "overlay" === E && null != _ && null == o
                    ? (0, i.jsx)("div", {
                          className: L.HU,
                          "aria-hidden": !0,
                          children: (0, i.jsx)(c.PencilIcon, { size: "md", color: m.A.colors.WHITE, className: L._1 }),
                      })
                    : null,
                (0, i.jsx)(v.Ay, {
                    ref: D,
                    tabIndex: P ? -1 : 0,
                    className: P ? L.YZ : void 0,
                    "aria-hidden": P,
                    onChange: x,
                    multiple: !1,
                    "aria-label": I.intl.string(I.t["MsUY/S"]),
                    title: "",
                }),
                P && null != j
                    ? (0, i.jsx)(p.Y, {
                          targetElementRef: S,
                          position: "bottom",
                          disablePointerEvents: !1,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, i.jsx)(A.A, { lastEdit: j, cropAndUpload: x, onChangeImage: M, onClose: t });
                          },
                          children: (e) =>
                              (0, i.jsx)(g.D, {
                                  ...e,
                                  innerRef: S,
                                  className: L.Eq,
                                  "aria-haspopup": "menu",
                                  "aria-label": I.intl.string(I.t.RWkUzH),
                              }),
                      })
                    : null,
            ],
        }),
    });
}
function y(e) {
    let {
        className: t,
        canEdit: a,
        userId: n,
        image: l,
        imageInputRef: s,
        previewUri: r,
        canAnimate: o = !0,
        cropAndUpload: d,
        editVariant: u,
        lastEdit: c,
    } = e;
    return a
        ? (0, i.jsx)(w, {
              className: t,
              userId: n,
              image: l,
              imageInputRef: s,
              previewUri: r,
              canAnimate: o,
              cropAndUpload: d,
              editVariant: u,
              lastEdit: c,
          })
        : null == l
          ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)(b, { canEdit: !1, isHovering: !1 }) })
          : (0, i.jsx)(N, { className: t, userId: n, image: l, canAnimate: o });
}
