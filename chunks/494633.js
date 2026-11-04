a.d(t, { N: () => w, A: () => R });
var i = a(477900),
    n = a(582128),
    l = a(503698),
    s = a.n(l),
    r = a(866665),
    c = a(750943),
    d = a(559106),
    o = a(289873),
    u = a(22231),
    m = a(646514),
    h = a(265872),
    p = a(939249),
    g = a(693875),
    v = a(946274),
    f = a(253932),
    x = a(486020),
    j = a(652215);
function N(e, t) {
    let { animated: a = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = window.GLOBAL_ENV.CDN_HOST ?? j.f34,
        n = `https://${i}/widget-assets/${e}/${t}`,
        l = x.QB ? "webp" : a ? "gif" : "png";
    return `${n}?format=${l}&animated=${a}`;
}
var A = a(458499),
    U = a(792996),
    I = a(842730);
function b(e, t, a) {
    let i = f.kt.useSetting(),
        [l, s] = n.useState(!1),
        r = n.useCallback(() => s(!0), []),
        c = n.useCallback(() => s(!1), []),
        d = a && null != t && !("localDataUri" in t) && t.isAnimated && !i;
    return (n.useEffect(() => {
        !d || null == t || "localDataUri" in t || (new Image().src = N(e, t.fileId, { animated: !0 }));
    }, [d, e, t]),
    null == t)
        ? { src: void 0, showGifTag: !1, onMouseMove: r, onMouseLeave: c, isHovering: l }
        : "localDataUri" in t
          ? { src: t.localDataUri, showGifTag: !1, onMouseMove: r, onMouseLeave: c, isHovering: l }
          : {
                src: N(e, t.fileId, { animated: a && t.isAnimated && (i || l) }),
                showGifTag: d,
                isHovering: l,
                onMouseMove: r,
                onMouseLeave: c,
            };
}
function w(e) {
    let { className: t, userId: a, image: n, canAnimate: l = !0 } = e,
        { src: r, showGifTag: c, onMouseMove: d, onMouseLeave: o } = b(a, n, l);
    return "localDataUri" in n
        ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)("img", { className: I.Sl, alt: "", src: r }) })
        : (0, i.jsxs)("div", {
              className: s()(I.ZS, t),
              onMouseMove: d,
              onMouseLeave: o,
              children: [
                  (0, i.jsx)("img", { className: I.Sl, alt: "", src: r, width: n.width, height: n.height }),
                  c ? (0, i.jsx)(g.A, { className: I.pH }) : null,
              ],
          });
}
function y(e) {
    let { canEdit: t, isHovering: a } = e;
    return (0, i.jsx)("div", {
        className: I.qf,
        children: t
            ? (0, i.jsx)(r.m, {
                  text: U.intl.string(U.t["MsUY/S"]),
                  forceOpen: a,
                  ariaHidden: !0,
                  children: (0, i.jsx)(c.X, { className: I.Dm, size: "md" }),
              })
            : null,
    });
}
function L(e) {
    let {
            className: t,
            userId: a,
            image: l,
            imageInputRef: r,
            previewUri: c,
            canAnimate: f = !0,
            cropAndUpload: x,
            editVariant: j,
            lastEdit: N,
        } = e,
        { src: w, showGifTag: L, onMouseMove: R, onMouseLeave: E, isHovering: k } = b(a, l, f),
        _ = c ?? w,
        S = n.useRef(null),
        M = r ?? S,
        D = n.useRef(null);
    function C() {
        M.current?.activateUploadDialogue();
    }
    let H = null != N && null != _ && null == c;
    return (0, i.jsx)(d.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: s()(I.kL, t),
            onMouseMove: R,
            onMouseLeave: E,
            children: [
                null != _
                    ? (0, i.jsx)("img", { alt: "", src: _, className: I.Sl })
                    : (0, i.jsx)(y, { canEdit: !0, isHovering: "tooltip" === j && k }),
                null != c
                    ? (0, i.jsx)("div", {
                          className: I.ob,
                          children: (0, i.jsx)(o.y, { type: o.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : L
                      ? (0, i.jsx)(g.A, { className: I.pH })
                      : null,
                "overlay" === j && null != _ && null == c
                    ? (0, i.jsx)("div", {
                          className: I.HU,
                          "aria-hidden": !0,
                          children: (0, i.jsx)(u.PencilIcon, { size: "md", color: m.A.colors.WHITE, className: I._1 }),
                      })
                    : null,
                (0, i.jsx)(v.Ay, {
                    ref: M,
                    tabIndex: H ? -1 : 0,
                    className: H ? I.YZ : void 0,
                    "aria-hidden": H,
                    onChange: x,
                    multiple: !1,
                    "aria-label": U.intl.string(U.t["MsUY/S"]),
                    title: "",
                }),
                H && null != N
                    ? (0, i.jsx)(h.Y, {
                          targetElementRef: D,
                          position: "bottom",
                          disablePointerEvents: !1,
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, i.jsx)(A.A, { lastEdit: N, cropAndUpload: x, onChangeImage: C, onClose: t });
                          },
                          children: (e) =>
                              (0, i.jsx)(p.D, {
                                  ...e,
                                  innerRef: D,
                                  className: I.Eq,
                                  "aria-haspopup": "menu",
                                  "aria-label": U.intl.string(U.t.RWkUzH),
                              }),
                      })
                    : null,
            ],
        }),
    });
}
function R(e) {
    let {
        className: t,
        canEdit: a,
        userId: n,
        image: l,
        imageInputRef: s,
        previewUri: r,
        canAnimate: c = !0,
        cropAndUpload: d,
        editVariant: o,
        lastEdit: u,
    } = e;
    return a
        ? (0, i.jsx)(L, {
              className: t,
              userId: n,
              image: l,
              imageInputRef: s,
              previewUri: r,
              canAnimate: c,
              cropAndUpload: d,
              editVariant: o,
              lastEdit: u,
          })
        : null == l
          ? (0, i.jsx)("div", { className: t, children: (0, i.jsx)(y, { canEdit: !1, isHovering: !1 }) })
          : (0, i.jsx)(w, { className: t, userId: n, image: l, canAnimate: c });
}
