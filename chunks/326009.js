t.d(a, { A: () => R, N: () => w });
var i = t(477900),
    n = t(582128),
    l = t(503698),
    s = t.n(l),
    r = t(866665),
    d = t(750943),
    c = t(559106),
    o = t(289873),
    u = t(22231),
    m = t(661531),
    h = t(922016),
    g = t(939249),
    p = t(693875),
    v = t(946274),
    f = t(885386),
    x = t(486020),
    j = t(652215);
function N(e, a) {
    let { animated: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = window.GLOBAL_ENV.CDN_HOST ?? j.f34,
        n = `https://${i}/widget-assets/${e}/${a}`,
        l = x.QB ? "webp" : t ? "gif" : "png";
    return `${n}?format=${l}&animated=${t}`;
}
var A = t(458499),
    I = t(105292),
    U = t(842730);
function b(e, a, t) {
    let i = f.kt.useSetting(),
        [l, s] = n.useState(!1),
        r = n.useCallback(() => s(!0), []),
        d = n.useCallback(() => s(!1), []),
        c = t && null != a && !("localDataUri" in a) && a.isAnimated && !i;
    return (n.useEffect(() => {
        !c || null == a || "localDataUri" in a || (new Image().src = N(e, a.fileId, { animated: !0 }));
    }, [c, e, a]),
    null == a)
        ? { src: void 0, showGifTag: !1, onMouseMove: r, onMouseLeave: d, isHovering: l }
        : "localDataUri" in a
          ? { src: a.localDataUri, showGifTag: !1, onMouseMove: r, onMouseLeave: d, isHovering: l }
          : {
                src: N(e, a.fileId, { animated: t && a.isAnimated && (i || l) }),
                showGifTag: c,
                isHovering: l,
                onMouseMove: r,
                onMouseLeave: d,
            };
}
function w(e) {
    let { className: a, userId: t, image: n, canAnimate: l = !0 } = e,
        { src: r, showGifTag: d, onMouseMove: c, onMouseLeave: o } = b(t, n, l);
    return "localDataUri" in n
        ? (0, i.jsx)("div", { className: a, children: (0, i.jsx)("img", { className: U.Sl, alt: "", src: r }) })
        : (0, i.jsxs)("div", {
              className: s()(U.ZS, a),
              onMouseMove: c,
              onMouseLeave: o,
              children: [
                  (0, i.jsx)("img", { className: U.Sl, alt: "", src: r, width: n.width, height: n.height }),
                  d ? (0, i.jsx)(p.A, { className: U.pH }) : null,
              ],
          });
}
function y(e) {
    let { canEdit: a, isHovering: t } = e;
    return (0, i.jsx)("div", {
        className: U.qf,
        children: a
            ? (0, i.jsx)(r.m, {
                  text: I.intl.string(I.t["MsUY/S"]),
                  forceOpen: t,
                  ariaHidden: !0,
                  children: (0, i.jsx)(d.X, { className: U.Dm, size: "md" }),
              })
            : null,
    });
}
function L(e) {
    let {
            className: a,
            userId: t,
            image: l,
            imageInputRef: r,
            previewUri: d,
            canAnimate: f = !0,
            cropAndUpload: x,
            editVariant: j,
            lastEdit: N,
        } = e,
        { src: w, showGifTag: L, onMouseMove: R, onMouseLeave: k, isHovering: E } = b(t, l, f),
        S = d ?? w,
        _ = n.useRef(null),
        M = r ?? _,
        D = n.useRef(null);
    function C() {
        M.current?.activateUploadDialogue();
    }
    let H = null != N && null != S && null == d;
    return (0, i.jsx)(c.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: s()(U.kL, a),
            onMouseMove: R,
            onMouseLeave: k,
            children: [
                null != S
                    ? (0, i.jsx)("img", { alt: "", src: S, className: U.Sl })
                    : (0, i.jsx)(y, { canEdit: !0, isHovering: "tooltip" === j && E }),
                null != d
                    ? (0, i.jsx)("div", {
                          className: U.ob,
                          children: (0, i.jsx)(o.y, { type: o.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : L
                      ? (0, i.jsx)(p.A, { className: U.pH })
                      : null,
                "overlay" === j && null != S && null == d
                    ? (0, i.jsx)("div", {
                          className: U.HU,
                          "aria-hidden": !0,
                          children: (0, i.jsx)(u.PencilIcon, { size: "md", color: m.A.colors.WHITE, className: U._1 }),
                      })
                    : null,
                (0, i.jsx)(v.Ay, {
                    ref: M,
                    tabIndex: H ? -1 : 0,
                    className: H ? U.YZ : void 0,
                    "aria-hidden": H,
                    onChange: x,
                    multiple: !1,
                    "aria-label": I.intl.string(I.t["MsUY/S"]),
                    title: "",
                }),
                H && null != N
                    ? (0, i.jsx)(h.Y, {
                          targetElementRef: D,
                          position: "bottom",
                          disablePointerEvents: !1,
                          renderPopout: (e) => {
                              let { closePopout: a } = e;
                              return (0, i.jsx)(A.A, { lastEdit: N, cropAndUpload: x, onChangeImage: C, onClose: a });
                          },
                          children: (e) =>
                              (0, i.jsx)(g.D, {
                                  ...e,
                                  innerRef: D,
                                  className: U.Eq,
                                  "aria-haspopup": "menu",
                                  "aria-label": I.intl.string(I.t.RWkUzH),
                              }),
                      })
                    : null,
            ],
        }),
    });
}
function R(e) {
    let {
        className: a,
        canEdit: t,
        userId: n,
        image: l,
        imageInputRef: s,
        previewUri: r,
        canAnimate: d = !0,
        cropAndUpload: c,
        editVariant: o,
        lastEdit: u,
    } = e;
    return t
        ? (0, i.jsx)(L, {
              className: a,
              userId: n,
              image: l,
              imageInputRef: s,
              previewUri: r,
              canAnimate: d,
              cropAndUpload: c,
              editVariant: o,
              lastEdit: u,
          })
        : null == l
          ? (0, i.jsx)("div", { className: a, children: (0, i.jsx)(y, { canEdit: !1, isHovering: !1 }) })
          : (0, i.jsx)(w, { className: a, userId: n, image: l, canAnimate: d });
}
