a.d(t, { A: () => k, N: () => E });
var i = a(477900),
    l = a(582128),
    n = a(503698),
    s = a.n(n),
    r = a(866665),
    o = a(750943),
    d = a(259678),
    c = a(289873),
    u = a(22231),
    p = a(661531),
    m = a(922016),
    g = a(939249),
    h = a(693875),
    v = a(946274),
    f = a(885386),
    x = a(486020),
    j = a(652215);
function A(e, t) {
    let { animated: a = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = window.GLOBAL_ENV.CDN_HOST ?? j.f34,
        l = `https://${i}/widget-assets/${e}/${t}`,
        n = x.QB ? "webp" : a ? "gif" : "png";
    return `${l}?format=${n}&animated=${a}`;
}
var N = a(458499),
    U = a(375708),
    b = a(842730);
function y(e, t, a) {
    let i = f.kt.useSetting(),
        [n, s] = l.useState(!1),
        r = l.useCallback(() => s(!0), []),
        o = l.useCallback(() => s(!1), []),
        d = a && null != t && !("localDataUri" in t) && t.isAnimated && !i;
    return (l.useEffect(() => {
        !d || null == t || "localDataUri" in t || (new Image().src = A(e, t.fileId, { animated: !0 }));
    }, [d, e, t]),
    null == t)
        ? { src: void 0, showGifTag: !1, onMouseMove: r, onMouseLeave: o, isHovering: n }
        : "localDataUri" in t
          ? { src: t.localDataUri, showGifTag: !1, onMouseMove: r, onMouseLeave: o, isHovering: n }
          : {
                src: A(e, t.fileId, { animated: a && t.isAnimated && (i || n) }),
                showGifTag: d,
                isHovering: n,
                onMouseMove: r,
                onMouseLeave: o,
            };
}
function E(e) {
    let { className: t, userId: a, image: l, canAnimate: n = !0 } = e,
        { src: r, showGifTag: o, onMouseMove: d, onMouseLeave: c } = y(a, l, n);
    return "localDataUri" in l
        ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)("img", { className: b.Sl, alt: "", src: r }) })
        : (0, i.jsxs)("div", {
              className: s()(b.ZS, t),
              onMouseMove: d,
              onMouseLeave: c,
              children: [
                  (0, i.jsx)("img", { className: b.Sl, alt: "", src: r, width: l.width, height: l.height }),
                  o ? (0, i.jsx)(h.A, { className: b.pH }) : null,
              ],
          });
}
function I(e) {
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
function w(e) {
    let {
            className: t,
            userId: a,
            image: n,
            imageInputRef: r,
            previewUri: o,
            canAnimate: f = !0,
            cropAndUpload: x,
            editVariant: j,
            lastEdit: A,
        } = e,
        { src: E, showGifTag: w, onMouseMove: k, onMouseLeave: L, isHovering: R } = y(a, n, f),
        C = o ?? E,
        M = l.useRef(null),
        S = r ?? M,
        D = l.useRef(null);
    function _() {
        S.current?.activateUploadDialogue();
    }
    let H = null != A && null != C && null == o;
    return (0, i.jsx)(d.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: s()(b.kL, t),
            onMouseMove: k,
            onMouseLeave: L,
            children: [
                null != C
                    ? (0, i.jsx)("img", { alt: "", src: C, className: b.Sl })
                    : (0, i.jsx)(I, { canEdit: !0, isHovering: "tooltip" === j && R }),
                null != o
                    ? (0, i.jsx)("div", {
                          className: b.ob,
                          children: (0, i.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : w
                      ? (0, i.jsx)(h.A, { className: b.pH })
                      : null,
                "overlay" === j && null != C && null == o
                    ? (0, i.jsx)("div", {
                          className: b.HU,
                          "aria-hidden": !0,
                          children: (0, i.jsx)(u.PencilIcon, { size: "md", color: p.A.colors.WHITE, className: b._1 }),
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
                    ? (0, i.jsx)(m.Y, {
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
        userId: l,
        image: n,
        imageInputRef: s,
        previewUri: r,
        canAnimate: o = !0,
        cropAndUpload: d,
        editVariant: c,
        lastEdit: u,
    } = e;
    return a
        ? (0, i.jsx)(w, {
              className: t,
              userId: l,
              image: n,
              imageInputRef: s,
              previewUri: r,
              canAnimate: o,
              cropAndUpload: d,
              editVariant: c,
              lastEdit: u,
          })
        : null == n
          ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)(I, { canEdit: !1, isHovering: !1 }) })
          : (0, i.jsx)(E, { className: t, userId: l, image: n, canAnimate: o });
}
