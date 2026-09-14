a.d(t, { A: () => k, N: () => E });
var i = a(477900),
    n = a(582128),
    l = a(503698),
    s = a.n(l),
    r = a(866665),
    o = a(750943),
    u = a(259678),
    d = a(289873),
    c = a(22231),
    m = a(661531),
    p = a(922016),
    g = a(939249),
    h = a(693875),
    v = a(946274),
    f = a(885386),
    x = a(486020),
    j = a(652215);
function A(e, t) {
    let { animated: a = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = window.GLOBAL_ENV.CDN_HOST ?? j.f34,
        n = `https://${i}/widget-assets/${e}/${t}`,
        l = x.QB ? "webp" : a ? "gif" : "png";
    return `${n}?format=${l}&animated=${a}`;
}
var N = a(458499),
    U = a(375708),
    b = a(842730);
function y(e, t, a) {
    let i = f.kt.useSetting(),
        [l, s] = n.useState(!1),
        r = n.useCallback(() => s(!0), []),
        o = n.useCallback(() => s(!1), []),
        u = a && null != t && !("localDataUri" in t) && t.isAnimated && !i;
    return (n.useEffect(() => {
        !u || null == t || "localDataUri" in t || (new Image().src = A(e, t.fileId, { animated: !0 }));
    }, [u, e, t]),
    null == t)
        ? { src: void 0, showGifTag: !1, onMouseMove: r, onMouseLeave: o, isHovering: l }
        : "localDataUri" in t
          ? { src: t.localDataUri, showGifTag: !1, onMouseMove: r, onMouseLeave: o, isHovering: l }
          : {
                src: A(e, t.fileId, { animated: a && t.isAnimated && (i || l) }),
                showGifTag: u,
                isHovering: l,
                onMouseMove: r,
                onMouseLeave: o,
            };
}
function E(e) {
    let { className: t, userId: a, image: n, canAnimate: l = !0 } = e,
        { src: r, showGifTag: o, onMouseMove: u, onMouseLeave: d } = y(a, n, l);
    return "localDataUri" in n
        ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)("img", { className: b.Sl, alt: "", src: r }) })
        : (0, i.jsxs)("div", {
              className: s()(b.ZS, t),
              onMouseMove: u,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)("img", { className: b.Sl, alt: "", src: r, width: n.width, height: n.height }),
                  o ? (0, i.jsx)(h.A, { className: b.pH }) : null,
              ],
          });
}
function w(e) {
    let { canEdit: t, isHovering: a } = e;
    return (0, i.jsx)("div", {
        className: b.qf,
        children: t
            ? (0, i.jsx)(r.m, {
                  text: U.intl.string(U.t["MsUY/S"]),
                  forceOpen: a,
                  ariaHidden: !0,
                  children: (0, i.jsx)(o.X, { className: b.Dm, size: "md" }),
              })
            : null,
    });
}
function I(e) {
    let {
            className: t,
            userId: a,
            image: l,
            imageInputRef: r,
            previewUri: o,
            canAnimate: f = !0,
            cropAndUpload: x,
            editVariant: j,
            lastEdit: A,
        } = e,
        { src: E, showGifTag: I, onMouseMove: k, onMouseLeave: L, isHovering: R } = y(a, l, f),
        C = o ?? E,
        M = n.useRef(null),
        S = r ?? M,
        D = n.useRef(null);
    function _() {
        S.current?.activateUploadDialogue();
    }
    let H = null != A && null != C && null == o;
    return (0, i.jsx)(u.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: s()(b.kL, t),
            onMouseMove: k,
            onMouseLeave: L,
            children: [
                null != C
                    ? (0, i.jsx)("img", { alt: "", src: C, className: b.Sl })
                    : (0, i.jsx)(w, { canEdit: !0, isHovering: "tooltip" === j && R }),
                null != o
                    ? (0, i.jsx)("div", {
                          className: b.ob,
                          children: (0, i.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : I
                      ? (0, i.jsx)(h.A, { className: b.pH })
                      : null,
                "overlay" === j && null != C && null == o
                    ? (0, i.jsx)("div", {
                          className: b.HU,
                          "aria-hidden": !0,
                          children: (0, i.jsx)(c.PencilIcon, { size: "md", color: m.A.colors.WHITE, className: b._1 }),
                      })
                    : null,
                (0, i.jsx)(v.Ay, {
                    ref: S,
                    tabIndex: H ? -1 : 0,
                    className: H ? b.YZ : void 0,
                    "aria-hidden": H,
                    onChange: x,
                    multiple: !1,
                    "aria-label": U.intl.string(U.t["MsUY/S"]),
                    title: "",
                }),
                H && null != A
                    ? (0, i.jsx)(p.Y, {
                          targetElementRef: D,
                          position: "bottom",
                          disablePointerEvents: !1,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, i.jsx)(N.A, { lastEdit: A, cropAndUpload: x, onChangeImage: _, onClose: t });
                          },
                          children: (e) =>
                              (0, i.jsx)(g.D, {
                                  ...e,
                                  innerRef: D,
                                  className: b.Eq,
                                  "aria-haspopup": "menu",
                                  "aria-label": U.intl.string(U.t.RWkUzH),
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
        userId: n,
        image: l,
        imageInputRef: s,
        previewUri: r,
        canAnimate: o = !0,
        cropAndUpload: u,
        editVariant: d,
        lastEdit: c,
    } = e;
    return a
        ? (0, i.jsx)(I, {
              className: t,
              userId: n,
              image: l,
              imageInputRef: s,
              previewUri: r,
              canAnimate: o,
              cropAndUpload: u,
              editVariant: d,
              lastEdit: c,
          })
        : null == l
          ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)(w, { canEdit: !1, isHovering: !1 }) })
          : (0, i.jsx)(E, { className: t, userId: n, image: l, canAnimate: o });
}
