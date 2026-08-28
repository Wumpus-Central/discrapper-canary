a.d(n, { A: () => S, N: () => U });
var i = a(477900),
    l = a(582128),
    s = a(503698),
    t = a.n(s),
    r = a(866665),
    c = a(750943),
    o = a(259678),
    d = a(289873),
    u = a(22231),
    m = a(661531),
    h = a(922016),
    g = a(939249),
    p = a(693875),
    x = a(946274),
    j = a(885386),
    v = a(486020),
    f = a(652215);
function N(e, n) {
    let { animated: a = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = window.GLOBAL_ENV.CDN_HOST ?? f.f34,
        l = `https://${i}/widget-assets/${e}/${n}`,
        s = v.QB ? "webp" : a ? "gif" : "png";
    return `${l}?format=${s}&animated=${a}`;
}
var A = a(458499),
    b = a(375708),
    k = a(842730);
function I(e, n, a) {
    let i = j.kt.useSetting(),
        [s, t] = l.useState(!1),
        r = l.useCallback(() => t(!0), []),
        c = l.useCallback(() => t(!1), []),
        o = a && null != n && !("localDataUri" in n) && n.isAnimated && !i;
    return (l.useEffect(() => {
        !o || null == n || "localDataUri" in n || (new Image().src = N(e, n.fileId, { animated: !0 }));
    }, [o, e, n]),
    null == n)
        ? { src: void 0, showGifTag: !1, onMouseMove: r, onMouseLeave: c, isHovering: s }
        : "localDataUri" in n
          ? { src: n.localDataUri, showGifTag: !1, onMouseMove: r, onMouseLeave: c, isHovering: s }
          : {
                src: N(e, n.fileId, { animated: a && n.isAnimated && (i || s) }),
                showGifTag: o,
                isHovering: s,
                onMouseMove: r,
                onMouseLeave: c,
            };
}
function U(e) {
    let { className: n, userId: a, image: l, canAnimate: s = !0 } = e,
        { src: r, showGifTag: c, onMouseMove: o, onMouseLeave: d } = I(a, l, s);
    return "localDataUri" in l
        ? (0, i.jsx)("div", { className: n, children: (0, i.jsx)("img", { className: k.Sl, alt: "", src: r }) })
        : (0, i.jsxs)("div", {
              className: t()(k.ZS, n),
              onMouseMove: o,
              onMouseLeave: d,
              children: [
                  (0, i.jsx)("img", { className: k.Sl, alt: "", src: r, width: l.width, height: l.height }),
                  c ? (0, i.jsx)(p.A, { className: k.pH }) : null,
              ],
          });
}
function w(e) {
    let { canEdit: n, isHovering: a } = e;
    return (0, i.jsx)("div", {
        className: k.qf,
        children: n
            ? (0, i.jsx)(r.m, {
                  text: b.intl.string(b.t["MsUY/S"]),
                  forceOpen: a,
                  ariaHidden: !0,
                  children: (0, i.jsx)(c.X, { className: k.Dm, size: "md" }),
              })
            : null,
    });
}
function E(e) {
    let {
            className: n,
            userId: a,
            image: s,
            imageInputRef: r,
            previewUri: c,
            canAnimate: j = !0,
            cropAndUpload: v,
            editVariant: f,
            lastEdit: N,
        } = e,
        { src: U, showGifTag: E, onMouseMove: S, onMouseLeave: y, isHovering: C } = I(a, s, j),
        D = c ?? U,
        L = l.useRef(null),
        H = r ?? L,
        M = l.useRef(null);
    function R() {
        H.current?.activateUploadDialogue();
    }
    let _ = null != N && null != D && null == c;
    return (0, i.jsx)(o.vN, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: t()(k.kL, n),
            onMouseMove: S,
            onMouseLeave: y,
            children: [
                null != D
                    ? (0, i.jsx)("img", { alt: "", src: D, className: k.Sl })
                    : (0, i.jsx)(w, { canEdit: !0, isHovering: "tooltip" === f && C }),
                null != c
                    ? (0, i.jsx)("div", {
                          className: k.ob,
                          children: (0, i.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : E
                      ? (0, i.jsx)(p.A, { className: k.pH })
                      : null,
                "overlay" === f && null != D && null == c
                    ? (0, i.jsx)("div", {
                          className: k.HU,
                          "aria-hidden": !0,
                          children: (0, i.jsx)(u.PencilIcon, { size: "md", color: m.A.colors.WHITE, className: k._1 }),
                      })
                    : null,
                (0, i.jsx)(x.Ay, {
                    ref: H,
                    tabIndex: _ ? -1 : 0,
                    className: _ ? k.YZ : void 0,
                    "aria-hidden": _,
                    onChange: v,
                    multiple: !1,
                    "aria-label": b.intl.string(b.t["MsUY/S"]),
                    title: "",
                }),
                _ && null != N
                    ? (0, i.jsx)(h.Y, {
                          targetElementRef: M,
                          position: "bottom",
                          disablePointerEvents: !1,
                          renderPopout: (e) => {
                              let { closePopout: n } = e;
                              return (0, i.jsx)(A.A, { lastEdit: N, cropAndUpload: v, onChangeImage: R, onClose: n });
                          },
                          children: (e) =>
                              (0, i.jsx)(g.D, {
                                  ...e,
                                  innerRef: M,
                                  className: k.Eq,
                                  "aria-haspopup": "menu",
                                  "aria-label": b.intl.string(b.t.RWkUzH),
                              }),
                      })
                    : null,
            ],
        }),
    });
}
function S(e) {
    let {
        className: n,
        canEdit: a,
        userId: l,
        image: s,
        imageInputRef: t,
        previewUri: r,
        canAnimate: c = !0,
        cropAndUpload: o,
        editVariant: d,
        lastEdit: u,
    } = e;
    return a
        ? (0, i.jsx)(E, {
              className: n,
              userId: l,
              image: s,
              imageInputRef: t,
              previewUri: r,
              canAnimate: c,
              cropAndUpload: o,
              editVariant: d,
              lastEdit: u,
          })
        : null == s
          ? (0, i.jsx)("div", { className: n, children: (0, i.jsx)(w, { canEdit: !1, isHovering: !1 }) })
          : (0, i.jsx)(U, { className: n, userId: l, image: s, canAnimate: c });
}
