n.d(t, { v: () => E }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(36793),
    s = n(33309),
    u = n(755721),
    c = n(481060),
    d = n(638730),
    m = n(710845),
    f = n(197712),
    g = n(511004),
    h = n(598117),
    x = n(231338),
    p = n(388032),
    b = n(645765);
function v(e) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = new m.Z("ImageEditor"),
    N = {
        width: 240,
        height: 240,
    },
    E = (e) => {
        let { file: t, imageUri: n, onUpdate: i, onThrottledEdit: m } = e,
            E = l.useRef({
                x: 0,
                y: 0,
            }),
            [S, w] = l.useState({
                x: 0,
                y: 0,
            }),
            T = l.useRef(null),
            [P, A] = l.useState(1),
            [M, R] = l.useState(null),
            [k, D] = l.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }),
            [z, G] = l.useState(0),
            [L, Z] = l.useState({
                x: 0,
                y: 0,
            }),
            [U, B] = l.useState(!1),
            F = "image/gif" === t.type,
            H = (0, s.v)(t.type),
            V = H && !F,
            [J, Y] = l.useState(null),
            W = (0, d.h)(null != m ? m : x.dG, 500);
        l.useEffect(() => {
            (0, g.Z)();
        }, []);
        let K = l.useCallback(
                (e) => {
                    if (null == T.current) return;
                    let { x: t, y: n } = (0, f.U$)(e.x, e.y, k);
                    (E.current = {
                        x: t,
                        y: n,
                    }),
                        (T.current.style.transform = "translate3d("
                            .concat(t, "px, ")
                            .concat(n, "px, 0) rotate(")
                            .concat(z, "deg)")),
                        w({
                            x: t,
                            y: n,
                        });
                },
                [T, z, k],
            ),
            X = l.useCallback(
                (e) => {
                    if (null == M) return;
                    let t = I(M, e, H),
                        { x: n, y: r } = E.current;
                    A(e),
                        D(t),
                        K({
                            x: n,
                            y: r,
                        }),
                        null == W || W();
                },
                [M, K, H, W],
            ),
            q = l.useCallback(() => {
                if (null == T.current || null == M) return;
                let e = (z + 90) % 360,
                    t = -E.current.x,
                    n = E.current.y,
                    r = M.height,
                    l = M.width,
                    i = I(
                        {
                            width: r,
                            height: l,
                        },
                        P,
                        H,
                    );
                K({
                    x: n,
                    y: t,
                }),
                    G(e),
                    R({
                        width: r,
                        height: l,
                    }),
                    D(i),
                    null == W || W();
            }, [M, z, K, P, H, W]),
            Q = l.useCallback(() => {
                if (null == M) return {};
                let { height: e, width: t } = C(O(M, z), P);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t,
                };
            }, [M, z, P]),
            $ = l.useCallback((e) => {
                Z({
                    x: e.clientX - E.current.x,
                    y: e.clientY - E.current.y,
                }),
                    B(!0);
            }, []);
        l.useEffect(() => {
            let e = () => B(!1);
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let ee = l.useCallback(
            (e) => {
                let { x: t, y: n } = E.current;
                U &&
                    (e.clientX !== t || e.clientY !== n) &&
                    (K({
                        x: (t = e.clientX - L.x),
                        y: (n = e.clientY - L.y),
                    }),
                    null == W || W());
            },
            [U, L, K, W],
        );
        l.useEffect(() => {
            if (U) return window.addEventListener("mousemove", ee), () => window.removeEventListener("mousemove", ee);
        }, [ee, U]);
        let et = l.useRef(null),
            en = l.useCallback(async () => {
                let e;
                if (null == T.current || null == M) return;
                let r = Date.now(),
                    l = T.current,
                    a = {
                        height: h.eT,
                        width: h.eT,
                    },
                    s = null;
                if ((null != et.current && (et.current(), (et.current = null)), F))
                    try {
                        let n = y(
                                {
                                    file: t,
                                    image: l,
                                    cropDimensions: N,
                                    cropOriginCoordinates: E.current,
                                    maxDimensions: a,
                                    imageRotation: z,
                                    resizeWidth: h.eT,
                                    resizeHeight: h.eT,
                                },
                                M,
                                P,
                            ),
                            { result: r, cancelFn: i } = await (0, f.$p)(n);
                        (et.current = i), (e = await r);
                    } catch (e) {
                        _.error("Error cropping GIF", e), (s = h.ze.GIF_CROPPING);
                    } finally {
                        var u;
                        null == (u = et.current) || u.call(et), (et.current = null);
                    }
                else
                    e = V
                        ? n
                        : (0, o.PT)({
                              image: l,
                              cropDimensions: N,
                              cropOriginCoordinates: E.current,
                              maxDimensions: a,
                              imageRotation: z,
                          });
                return (
                    i({
                        imageData: e,
                        imageDataTimestamp: r,
                        error: s,
                        loading: !1,
                    }),
                    () => {
                        var e;
                        null == (e = et.current) || e.call(et), (et.current = null);
                    }
                );
            }, [t, z, F, V, i, M, P, n]);
        l.useEffect(() => {
            en();
        }, [en, S, z, M, U, P, J]);
        let er = l.useCallback(() => {
            if (null == T.current) return;
            let e = T.current.naturalWidth,
                t = T.current.naturalHeight;
            R({
                width: e,
                height: t,
            });
            let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            Y(n),
                A(n),
                D(
                    I(
                        {
                            width: e,
                            height: t,
                        },
                        n,
                        H,
                    ),
                );
        }, [H]);
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
                                i({
                                    error: h.ze.IMAGE_LOAD,
                                    loading: !1,
                                });
                            },
                            style: v(
                                {
                                    opacity: +(null != M),
                                    transform: "translate3d("
                                        .concat(E.current.x, "px, ")
                                        .concat(E.current.y, "px, 0) rotate(")
                                        .concat(z, "deg)"),
                                },
                                Q(),
                            ),
                            className: b.image,
                            src: n,
                            crossOrigin: "anonymous",
                            alt: p.intl.string(p.t.EYR1FR),
                            ref: T,
                            onMouseDown: $,
                            draggable: !1,
                        }),
                        !V &&
                            (0, r.jsx)("div", {
                                className: b.overlay,
                                style: {
                                    opacity: +(null != M),
                                    width: N.width,
                                    height: N.height,
                                },
                                children: (0, r.jsx)(c.Text, {
                                    className: b.panHint,
                                    variant: "text-xs/normal",
                                    color: "text-primary",
                                    children: p.intl.string(p.t.oBPhdH),
                                }),
                            }),
                    ],
                }),
                V
                    ? (0, r.jsx)("div", {
                          className: b.animatedInfoContainer,
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: p.intl.string(p.t["5XCxio"]),
                          }),
                      })
                    : (0, r.jsxs)("div", {
                          className: b.toolsContainer,
                          children: [
                              (0, r.jsx)(c.ua7, {
                                  text: p.intl.string(p.t["oCs/+P"]),
                                  "aria-label": p.intl.string(p.t["oCs/+P"]),
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = (function (e, t) {
                                              if (null == e) return {};
                                              var n,
                                                  r,
                                                  l = (function (e, t) {
                                                      if (null == e) return {};
                                                      var n,
                                                          r,
                                                          l = {},
                                                          i = Object.keys(e);
                                                      for (r = 0; r < i.length; r++)
                                                          (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                                      return l;
                                                  })(e, t);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(e);
                                                  for (r = 0; r < i.length; r++)
                                                      (n = i[r]),
                                                          !(t.indexOf(n) >= 0) &&
                                                              Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                              (l[n] = e[n]);
                                              }
                                              return l;
                                          })(e, ["onClick"]);
                                      return (0, r.jsx)(
                                          u.zx,
                                          j(
                                              v(
                                                  {
                                                      className: b.toolButton,
                                                      look: u.zx.Looks.BLANK,
                                                      size: u.Ph.NONE,
                                                      color: u.zx.Colors.TRANSPARENT,
                                                      grow: !1,
                                                  },
                                                  n,
                                              ),
                                              {
                                                  onClick: q,
                                                  children: (0, r.jsx)(c.Vk2, {
                                                      size: "sm",
                                                      color: "currentColor",
                                                  }),
                                              },
                                          ),
                                      );
                                  },
                              }),
                              (0, r.jsxs)("div", {
                                  className: b.zoomControls,
                                  children: [
                                      (0, r.jsx)(c.BlJ, {
                                          color: c.TVs.colors.ICON_SECONDARY,
                                          size: "sm",
                                      }),
                                      null != J &&
                                          (0, r.jsx)(c.iRW, {
                                              className: b.slider,
                                              initialValue: J,
                                              minValue: 1,
                                              maxValue: 4,
                                              keyboardStep: 0.025,
                                              asValueChanges: X,
                                              equidistant: !0,
                                              hideBubble: !0,
                                              "aria-label": p.intl.string(p.t["2hPcVF"]),
                                          }),
                                      (0, r.jsx)(c.OyE, {
                                          color: c.TVs.colors.ICON_SECONDARY,
                                          size: "sm",
                                      }),
                                  ],
                              }),
                          ],
                      }),
            ],
        });
    },
    O = (e, t) => {
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
    C = (e, t) => {
        let { width: n, height: r } = e,
            l = 240 * t,
            i = n / r;
        return (
            n > r ? (r = (n = l) / i) : (n = (r = l) * i),
            {
                width: n,
                height: r,
            }
        );
    };
function I(e, t, n) {
    let { width: r, height: l } = C(e, t),
        i = Math.abs(240 - r) / 2,
        a = Math.abs(240 - l) / 2;
    return n && (r < 240 || l < 240)
        ? {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
          }
        : {
              top: a,
              bottom: -a,
              left: -i,
              right: i,
          };
}
let y = (e, t, n) => {
    let { height: r, width: l } = C(t, n),
        i = (r = Math.min(r, 240)) / (l = Math.min(l, 240)),
        a = {
            height: r,
            width: l,
        },
        o = Math.floor(i < 1 ? h.eT * i : h.eT / i),
        s = i < 1 ? o : h.eT,
        u = i > 1 ? o : h.eT;
    return j(v({}, e), {
        cropDimensions: a,
        resizeHeight: s,
        resizeWidth: u,
    });
};
