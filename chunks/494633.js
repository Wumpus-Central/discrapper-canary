t.d(a, { N: () => b, A: () => L });
var i = t(477900),
    n = t(582128),
    l = t(503698),
    s = t.n(l),
    r = t(866665),
    c = t(750943),
    o = t(559106),
    d = t(289873),
    u = t(22231),
    m = t(646514),
    p = t(265872),
    g = t(939249),
    h = t(693875),
    v = t(946274),
    f = t(253932),
    x = t(486020);
function j(e, a) {
    let { animated: t = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { CDN_HOST: i, API_ENDPOINT: n } = window.GLOBAL_ENV,
        l = null != i ? `https://${i}` : location.protocol + n,
        s = `${l}/widget-assets/${e}/${a}`,
        r = x.QB ? "webp" : t ? "gif" : "png";
    return `${s}?format=${r}&animated=${t}`;
}
var I = t(458499),
    N = t(792996),
    A = t(842730);
function U(e, a, t) {
    let i = f.kt.useSetting(),
        [l, s] = n.useState(!1),
        r = n.useCallback(() => s(!0), []),
        c = n.useCallback(() => s(!1), []),
        o = t && null != a && !("localDataUri" in a) && a.isAnimated && !i;
    return (n.useEffect(() => {
        !o || null == a || "localDataUri" in a || (new Image().src = j(e, a.fileId, { animated: !0 }));
    }, [o, e, a]),
    null == a)
        ? { src: void 0, showGifTag: !1, onMouseMove: r, onMouseLeave: c, isHovering: l }
        : "localDataUri" in a
          ? { src: a.localDataUri, showGifTag: !1, onMouseMove: r, onMouseLeave: c, isHovering: l }
          : {
                src: j(e, a.fileId, { animated: t && a.isAnimated && (i || l) }),
                showGifTag: o,
                isHovering: l,
                onMouseMove: r,
                onMouseLeave: c,
            };
}
function b(e) {
    let { className: a, userId: t, image: n, canAnimate: l = !0 } = e,
        { src: r, showGifTag: c, onMouseMove: o, onMouseLeave: d } = U(t, n, l);
    return "localDataUri" in n
        ? (0, i.jsx)("div", { className: a, children: (0, i.jsx)("img", { className: A.Sl, alt: "", src: r }) })
        : (0, i.jsxs)("div", {
              className: s()(A.ZS, a),
              onMouseMove: o,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)("img", { className: A.Sl, alt: "", src: r, width: n.width, height: n.height }),
                  c ? (0, i.jsx)(h.A, { className: A.pH }) : null,
              ],
          });
}
function w(e) {
    let { canEdit: a, isHovering: t } = e;
    return (0, i.jsx)("div", {
        className: A.qf,
        children: a
            ? (0, i.jsx)(r.m, {
                  text: N.intl.string(N.t["MsUY/S"]),
                  forceOpen: t,
                  ariaHidden: !0,
                  children: (0, i.jsx)(c.ImagePlusIcon, { className: A.Dm, size: "md" }),
              })
            : null,
    });
}
function y(e) {
    let {
            className: a,
            userId: t,
            image: l,
            imageInputRef: r,
            previewUri: c,
            canAnimate: f = !0,
            cropAndUpload: x,
            editVariant: j,
            lastEdit: b,
        } = e,
        { src: y, showGifTag: L, onMouseMove: R, onMouseLeave: E, isHovering: k } = U(t, l, f),
        _ = c ?? y,
        S = n.useRef(null),
        M = r ?? S,
        C = n.useRef(null);
    function D() {
        M.current?.activateUploadDialogue();
    }
    let H = null != b && null != _ && null == c;
    return (0, i.jsx)(o.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: s()(A.kL, a),
            onMouseMove: R,
            onMouseLeave: E,
            children: [
                null != _
                    ? (0, i.jsx)("img", { alt: "", src: _, className: A.Sl })
                    : (0, i.jsx)(w, { canEdit: !0, isHovering: "tooltip" === j && k }),
                null != c
                    ? (0, i.jsx)("div", {
                          className: A.ob,
                          children: (0, i.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : L
                      ? (0, i.jsx)(h.A, { className: A.pH })
                      : null,
                "overlay" === j && null != _ && null == c
                    ? (0, i.jsx)("div", {
                          className: A.HU,
                          "aria-hidden": !0,
                          children: (0, i.jsx)(u.PencilIcon, { size: "md", color: m.A.colors.WHITE, className: A._1 }),
                      })
                    : null,
                (0, i.jsx)(v.Ay, {
                    ref: M,
                    tabIndex: H ? -1 : 0,
                    className: H ? A.YZ : void 0,
                    "aria-hidden": H,
                    onChange: x,
                    multiple: !1,
                    "aria-label": N.intl.string(N.t["MsUY/S"]),
                    title: "",
                }),
                H && null != b
                    ? (0, i.jsx)(p.Y, {
                          targetElementRef: C,
                          position: "bottom",
                          disablePointerEvents: !1,
                          renderPopout: (e) => {
                              let { closePopout: a } = e;
                              return (0, i.jsx)(I.A, { lastEdit: b, cropAndUpload: x, onChangeImage: D, onClose: a });
                          },
                          children: (e) =>
                              (0, i.jsx)(g.D, {
                                  ...e,
                                  innerRef: C,
                                  className: A.Eq,
                                  "aria-haspopup": "menu",
                                  "aria-label": N.intl.string(N.t.RWkUzH),
                              }),
                      })
                    : null,
            ],
        }),
    });
}
function L(e) {
    let {
        className: a,
        canEdit: t,
        userId: n,
        image: l,
        imageInputRef: s,
        previewUri: r,
        canAnimate: c = !0,
        cropAndUpload: o,
        editVariant: d,
        lastEdit: u,
    } = e;
    return t
        ? (0, i.jsx)(y, {
              className: a,
              userId: n,
              image: l,
              imageInputRef: s,
              previewUri: r,
              canAnimate: c,
              cropAndUpload: o,
              editVariant: d,
              lastEdit: u,
          })
        : null == l
          ? (0, i.jsx)("div", { className: a, children: (0, i.jsx)(w, { canEdit: !1, isHovering: !1 }) })
          : (0, i.jsx)(b, { className: a, userId: n, image: l, canAnimate: c });
}
