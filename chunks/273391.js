n.d(t, { v: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(36793),
    o = n(33309),
    u = n(28664),
    c = n(755721),
    d = n(481060),
    h = n(638730),
    m = n(710845),
    g = n(197712),
    p = n(511004),
    f = n(598117),
    v = n(231338),
    x = n(388032),
    b = n(645765);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let _ = new m.Z("ImageEditor"),
    O = {
        width: 240,
        height: 240,
    },
    y = (e) => {
        let { file: t, imageUri: n, onUpdate: l, onThrottledEdit: m } = e,
            y = i.useRef({
                x: 0,
                y: 0,
            }),
            [C, I] = i.useState({
                x: 0,
                y: 0,
            }),
            S = i.useRef(null),
            [T, A] = i.useState(1),
            [M, P] = i.useState(null),
            [R, k] = i.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }),
            [Z, L] = i.useState(0),
            [z, G] = i.useState({
                x: 0,
                y: 0,
            }),
            [U, F] = i.useState(!1),
            W = "image/gif" === t.type,
            B = (0, o.v)(t.type),
            H = B && !W,
            [V, J] = i.useState(null),
            Y = (0, h.h)(null != m ? m : v.dG, 500);
        i.useEffect(() => {
            (0, p.Z)();
        }, []);
        let K = i.useCallback(
                (e) => {
                    if (null == S.current) return;
                    let { x: t, y: n } = (0, g.U$)(e.x, e.y, R);
                    (y.current = {
                        x: t,
                        y: n,
                    }),
                        (S.current.style.transform = "translate3d("
                            .concat(t, "px, ")
                            .concat(n, "px, 0) rotate(")
                            .concat(Z, "deg)")),
                        I({
                            x: t,
                            y: n,
                        });
                },
                [S, Z, R],
            ),
            X = i.useCallback(
                (e) => {
                    if (null == M) return;
                    let t = w(M, e, B),
                        { x: n, y: r } = y.current;
                    A(e),
                        k(t),
                        K({
                            x: n,
                            y: r,
                        }),
                        null == Y || Y();
                },
                [M, K, B, Y],
            ),
            q = i.useCallback(() => {
                if (null == S.current || null == M) return;
                let e = (Z + 90) % 360,
                    t = -y.current.x,
                    n = y.current.y,
                    r = M.height,
                    i = M.width,
                    l = w(
                        {
                            width: r,
                            height: i,
                        },
                        T,
                        B,
                    );
                K({
                    x: n,
                    y: t,
                }),
                    L(e),
                    P({
                        width: r,
                        height: i,
                    }),
                    k(l),
                    null == Y || Y();
            }, [M, Z, K, T, B, Y]),
            $ = i.useCallback(() => {
                if (null == M) return {};
                let { height: e, width: t } = N(E(M, Z), T);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t,
                };
            }, [M, Z, T]),
            Q = i.useCallback((e) => {
                G({
                    x: e.clientX - y.current.x,
                    y: e.clientY - y.current.y,
                }),
                    F(!0);
            }, []);
        i.useEffect(() => {
            let e = () => F(!1);
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let ee = i.useCallback(
            (e) => {
                let { x: t, y: n } = y.current;
                U &&
                    (e.clientX !== t || e.clientY !== n) &&
                    (K({
                        x: (t = e.clientX - z.x),
                        y: (n = e.clientY - z.y),
                    }),
                    null == Y || Y());
            },
            [U, z, K, Y],
        );
        i.useEffect(() => {
            if (U) return window.addEventListener("mousemove", ee), () => window.removeEventListener("mousemove", ee);
        }, [ee, U]);
        let et = i.useRef(null),
            en = i.useCallback(async () => {
                let e;
                if (null == S.current || null == M) return;
                let r = Date.now(),
                    i = S.current,
                    a = {
                        height: f.eT,
                        width: f.eT,
                    },
                    o = null;
                if ((null != et.current && (et.current(), (et.current = null)), W))
                    try {
                        let n = D(
                                {
                                    file: t,
                                    image: i,
                                    cropDimensions: O,
                                    cropOriginCoordinates: y.current,
                                    maxDimensions: a,
                                    imageRotation: Z,
                                    resizeWidth: f.eT,
                                    resizeHeight: f.eT,
                                },
                                M,
                                T,
                            ),
                            { result: r, cancelFn: l } = await (0, g.$p)(n);
                        (et.current = l), (e = await r);
                    } catch (e) {
                        _.error("Error cropping GIF", e), (o = f.ze.GIF_CROPPING);
                    } finally {
                        var u;
                        null == (u = et.current) || u.call(et), (et.current = null);
                    }
                else
                    e = H
                        ? n
                        : (0, s.PT)({
                              image: i,
                              cropDimensions: O,
                              cropOriginCoordinates: y.current,
                              maxDimensions: a,
                              imageRotation: Z,
                          });
                return (
                    l({
                        imageData: e,
                        imageDataTimestamp: r,
                        error: o,
                        loading: !1,
                    }),
                    () => {
                        var e;
                        null == (e = et.current) || e.call(et), (et.current = null);
                    }
                );
            }, [t, Z, W, H, l, M, T, n]);
        i.useEffect(() => {
            en();
        }, [en, C, Z, M, U, T, V]);
        let er = i.useCallback(() => {
            if (null == S.current) return;
            let e = S.current.naturalWidth,
                t = S.current.naturalHeight;
            P({
                width: e,
                height: t,
            });
            let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            J(n),
                A(n),
                k(
                    w(
                        {
                            width: e,
                            height: t,
                        },
                        n,
                        B,
                    ),
                );
        }, [B]);
        return (0, r.jsxs)("div", {
            className: a()(b.imageEditor, { [b.isDragging]: U }),
            style: { "--custom-image-editor-size": "".concat(240, "px") },
            children: [
                (0, r.jsxs)("div", {
                    className: b.editingContainer,
                    children: [
                        (0, r.jsx)("img", {
                            onLoad: er,
                            onError: () => {
                                l({
                                    error: f.ze.IMAGE_LOAD,
                                    loading: !1,
                                });
                            },
                            style: j(
                                {
                                    opacity: +(null != M),
                                    transform: "translate3d("
                                        .concat(y.current.x, "px, ")
                                        .concat(y.current.y, "px, 0) rotate(")
                                        .concat(Z, "deg)"),
                                },
                                $(),
                            ),
                            className: b.image,
                            src: n,
                            crossOrigin: "anonymous",
                            alt: x.intl.string(x.t.EYR1FR),
                            ref: S,
                            onMouseDown: Q,
                            draggable: !1,
                        }),
                        !H &&
                            (0, r.jsx)("div", {
                                className: b.overlay,
                                style: {
                                    opacity: +(null != M),
                                    width: O.width,
                                    height: O.height,
                                },
                                children: (0, r.jsx)(d.Text, {
                                    className: b.panHint,
                                    variant: "text-xs/normal",
                                    color: "text-primary",
                                    children: x.intl.string(x.t.oBPhdH),
                                }),
                            }),
                    ],
                }),
                H
                    ? (0, r.jsx)("div", {
                          className: b.animatedInfoContainer,
                          children: (0, r.jsx)(d.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: x.intl.string(x.t["5XCxio"]),
                          }),
                      })
                    : (0, r.jsxs)("div", {
                          className: b.toolsContainer,
                          children: [
                              (0, r.jsx)(u.u, {
                                  text: x.intl.string(x.t["oCs/+P"]),
                                  "aria-label": x.intl.string(x.t["oCs/+P"]),
                                  children: (0, r.jsx)(c.zx, {
                                      className: b.toolButton,
                                      look: c.zx.Looks.BLANK,
                                      size: c.Ph.NONE,
                                      color: c.zx.Colors.TRANSPARENT,
                                      grow: !1,
                                      onClick: q,
                                      children: (0, r.jsx)(d.Vk2, {
                                          size: "sm",
                                          color: "currentColor",
                                      }),
                                  }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: b.zoomControls,
                                  children: [
                                      (0, r.jsx)(d.BlJ, {
                                          color: d.TVs.colors.ICON_SECONDARY,
                                          size: "sm",
                                      }),
                                      null != V &&
                                          (0, r.jsx)(d.iRW, {
                                              className: b.slider,
                                              initialValue: V,
                                              minValue: 1,
                                              maxValue: 4,
                                              keyboardStep: 0.025,
                                              asValueChanges: X,
                                              equidistant: !0,
                                              hideBubble: !0,
                                              "aria-label": x.intl.string(x.t["2hPcVF"]),
                                          }),
                                      (0, r.jsx)(d.OyE, {
                                          color: d.TVs.colors.ICON_SECONDARY,
                                          size: "sm",
                                      }),
                                  ],
                              }),
                          ],
                      }),
            ],
        });
    },
    E = (e, t) => {
        let { width: n, height: r } = e;
        return t % 180 != 0
            ? {
                  width: r,
                  height: n,
              }
            : {
                  width: n,
                  height: r,
              };
    },
    N = (e, t) => {
        let { width: n, height: r } = e,
            i = 240 * t,
            l = n / r;
        return (
            n > r ? (r = (n = i) / l) : (n = (r = i) * l),
            {
                width: n,
                height: r,
            }
        );
    };
function w(e, t, n) {
    let { width: r, height: i } = N(e, t),
        l = Math.abs(240 - r) / 2,
        a = Math.abs(240 - i) / 2;
    return n && (r < 240 || i < 240)
        ? {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
          }
        : {
              top: a,
              bottom: -a,
              left: -l,
              right: l,
          };
}
let D = (e, t, n) => {
    var r, i;
    let { height: l, width: a } = N(t, n),
        s = (l = Math.min(l, 240)) / (a = Math.min(a, 240)),
        o = {
            height: l,
            width: a,
        },
        u = Math.floor(s < 1 ? f.eT * s : f.eT / s),
        c = s < 1 ? u : f.eT,
        d = s > 1 ? u : f.eT;
    return (
        (r = j({}, e)),
        (i = i =
            {
                cropDimensions: o,
                resizeHeight: c,
                resizeWidth: d,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(i)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
              }),
        r
    );
};
