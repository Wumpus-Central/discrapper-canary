n.d(a, { A: () => E, N: () => U });
var t = n(477900),
    i = n(582128),
    l = n(503698),
    s = n.n(l),
    r = n(866665),
    c = n(750943),
    d = n(259678),
    o = n(289873),
    u = n(22231),
    m = n(661531),
    h = n(922016),
    g = n(939249),
    p = n(693875),
    v = n(946274),
    f = n(885386),
    x = n(486020),
    j = n(652215);
function N(e, a) {
    let { animated: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        t = window.GLOBAL_ENV.CDN_HOST ?? j.f34,
        i = `https://${t}/widget-assets/${e}/${a}`,
        l = x.QB ? "webp" : n ? "gif" : "png";
    return `${i}?format=${l}&animated=${n}`;
}
var A = n(458499),
    b = n(375708),
    w = n(842730);
function y(e, a, n) {
    let t = f.kt.useSetting(),
        [l, s] = i.useState(!1),
        r = i.useCallback(() => s(!0), []),
        c = i.useCallback(() => s(!1), []),
        d = n && null != a && !("localDataUri" in a) && a.isAnimated && !t;
    return (i.useEffect(() => {
        !d || null == a || "localDataUri" in a || (new Image().src = N(e, a.fileId, { animated: !0 }));
    }, [d, e, a]),
    null == a)
        ? { src: void 0, showGifTag: !1, onMouseMove: r, onMouseLeave: c, isHovering: l }
        : "localDataUri" in a
          ? { src: a.localDataUri, showGifTag: !1, onMouseMove: r, onMouseLeave: c, isHovering: l }
          : {
                src: N(e, a.fileId, { animated: n && a.isAnimated && (t || l) }),
                showGifTag: d,
                isHovering: l,
                onMouseMove: r,
                onMouseLeave: c,
            };
}
function U(e) {
    let { className: a, userId: n, image: i, canAnimate: l = !0 } = e,
        { src: r, showGifTag: c, onMouseMove: d, onMouseLeave: o } = y(n, i, l);
    return "localDataUri" in i
        ? (0, t.jsx)("div", { className: a, children: (0, t.jsx)("img", { className: w.Sl, alt: "", src: r }) })
        : (0, t.jsxs)("div", {
              className: s()(w.ZS, a),
              onMouseMove: d,
              onMouseLeave: o,
              children: [
                  (0, t.jsx)("img", { className: w.Sl, alt: "", src: r, width: i.width, height: i.height }),
                  c ? (0, t.jsx)(p.A, { className: w.pH }) : null,
              ],
          });
}
function I(e) {
    let { canEdit: a, isHovering: n } = e;
    return (0, t.jsx)("div", {
        className: w.qf,
        children: a
            ? (0, t.jsx)(r.m, {
                  text: b.intl.string(b.t["MsUY/S"]),
                  forceOpen: n,
                  ariaHidden: !0,
                  children: (0, t.jsx)(c.X, { className: w.Dm, size: "md" }),
              })
            : null,
    });
}
function k(e) {
    let {
            className: a,
            userId: n,
            image: l,
            imageInputRef: r,
            previewUri: c,
            canAnimate: f = !0,
            cropAndUpload: x,
            editVariant: j,
            lastEdit: N,
        } = e,
        { src: U, showGifTag: k, onMouseMove: E, onMouseLeave: L, isHovering: R } = y(n, l, f),
        S = c ?? U,
        M = i.useRef(null),
        D = r ?? M,
        C = i.useRef(null);
    function _() {
        D.current?.activateUploadDialogue();
    }
    let H = null != N && null != S && null == c;
    return (0, t.jsx)(d.vN, {
        within: !0,
        children: (0, t.jsxs)("div", {
            className: s()(w.kL, a),
            onMouseMove: E,
            onMouseLeave: L,
            children: [
                null != S
                    ? (0, t.jsx)("img", { alt: "", src: S, className: w.Sl })
                    : (0, t.jsx)(I, { canEdit: !0, isHovering: "tooltip" === j && R }),
                null != c
                    ? (0, t.jsx)("div", {
                          className: w.ob,
                          children: (0, t.jsx)(o.y, { type: o.t.SPINNING_CIRCLE_SIMPLE }),
                      })
                    : k
                      ? (0, t.jsx)(p.A, { className: w.pH })
                      : null,
                "overlay" === j && null != S && null == c
                    ? (0, t.jsx)("div", {
                          className: w.HU,
                          "aria-hidden": !0,
                          children: (0, t.jsx)(u.PencilIcon, { size: "md", color: m.A.colors.WHITE, className: w._1 }),
                      })
                    : null,
                (0, t.jsx)(v.Ay, {
                    ref: D,
                    tabIndex: H ? -1 : 0,
                    className: H ? w.YZ : void 0,
                    "aria-hidden": H,
                    onChange: x,
                    multiple: !1,
                    "aria-label": b.intl.string(b.t["MsUY/S"]),
                    title: "",
                }),
                H && null != N
                    ? (0, t.jsx)(h.Y, {
                          targetElementRef: C,
                          position: "bottom",
                          disablePointerEvents: !1,
                          renderPopout: (e) => {
                              let { closePopout: a } = e;
                              return (0, t.jsx)(A.A, { lastEdit: N, cropAndUpload: x, onChangeImage: _, onClose: a });
                          },
                          children: (e) =>
                              (0, t.jsx)(g.D, {
                                  ...e,
                                  innerRef: C,
                                  className: w.Eq,
                                  "aria-haspopup": "menu",
                                  "aria-label": b.intl.string(b.t.RWkUzH),
                              }),
                      })
                    : null,
            ],
        }),
    });
}
function E(e) {
    let {
        className: a,
        canEdit: n,
        userId: i,
        image: l,
        imageInputRef: s,
        previewUri: r,
        canAnimate: c = !0,
        cropAndUpload: d,
        editVariant: o,
        lastEdit: u,
    } = e;
    return n
        ? (0, t.jsx)(k, {
              className: a,
              userId: i,
              image: l,
              imageInputRef: s,
              previewUri: r,
              canAnimate: c,
              cropAndUpload: d,
              editVariant: o,
              lastEdit: u,
          })
        : null == l
          ? (0, t.jsx)("div", { className: a, children: (0, t.jsx)(I, { canEdit: !1, isHovering: !1 }) })
          : (0, t.jsx)(U, { className: a, userId: i, image: l, canAnimate: c });
}
