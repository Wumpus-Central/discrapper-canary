n.d(t, { v: () => C }), n(388685);
var l = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(36793),
    s = n(33309),
    u = n(755721),
    c = n(481060),
    d = n(638730),
    m = n(710845),
    h = n(197712),
    g = n(511004),
    f = n(598117),
    x = n(231338),
    p = n(388032),
    _ = n(645765);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = new m.Z("ImageEditor"),
    N = {
        width: 240,
        height: 240,
    },
    C = (e) => {
        let { file: t, imageUri: n, onUpdate: i, onThrottledEdit: m } = e,
            C = r.useRef({
                x: 0,
                y: 0,
            }),
            [y, w] = r.useState({
                x: 0,
                y: 0,
            }),
            T = r.useRef(null),
            [M, R] = r.useState(1),
            [k, A] = r.useState(null),
            [P, D] = r.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }),
            [z, G] = r.useState(0),
            [L, Z] = r.useState({
                x: 0,
                y: 0,
            }),
            [B, U] = r.useState(!1),
            H = "image/gif" === t.type,
            F = (0, s.v)(t.type),
            V = F && !H,
            [J, W] = r.useState(null),
            Y = (0, d.h)(null != m ? m : x.dG, 500);
        r.useEffect(() => {
            (0, g.Z)();
        }, []);
        let K = r.useCallback(
                (e) => {
                    if (null == T.current) return;
                    let { x: t, y: n } = (0, h.U$)(e.x, e.y, P);
                    (C.current = {
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
                [T, z, P],
            ),
            X = r.useCallback(
                (e) => {
                    if (null == k) return;
                    let t = O(k, e, F),
                        { x: n, y: l } = C.current;
                    R(e),
                        D(t),
                        K({
                            x: n,
                            y: l,
                        }),
                        null == Y || Y();
                },
                [k, K, F, Y],
            ),
            q = r.useCallback(() => {
                if (null == T.current || null == k) return;
                let e = (z + 90) % 360,
                    t = -C.current.x,
                    n = C.current.y,
                    l = k.height,
                    r = k.width,
                    i = O(
                        {
                            width: l,
                            height: r,
                        },
                        M,
                        F,
                    );
                K({
                    x: n,
                    y: t,
                }),
                    G(e),
                    A({
                        width: l,
                        height: r,
                    }),
                    D(i),
                    null == Y || Y();
            }, [k, z, K, M, F, Y]),
            $ = r.useCallback(() => {
                if (null == k) return {};
                let { height: e, width: t } = I(E(k, z), M);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t,
                };
            }, [k, z, M]),
            Q = r.useCallback((e) => {
                Z({
                    x: e.clientX - C.current.x,
                    y: e.clientY - C.current.y,
                }),
                    U(!0);
            }, []);
        r.useEffect(() => {
            let e = () => U(!1);
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let ee = r.useCallback(
            (e) => {
                let { x: t, y: n } = C.current;
                B &&
                    (e.clientX !== t || e.clientY !== n) &&
                    (K({
                        x: (t = e.clientX - L.x),
                        y: (n = e.clientY - L.y),
                    }),
                    null == Y || Y());
            },
            [B, L, K, Y],
        );
        r.useEffect(() => {
            if (B) return window.addEventListener("mousemove", ee), () => window.removeEventListener("mousemove", ee);
        }, [ee, B]);
        let et = r.useRef(null),
            en = r.useCallback(async () => {
                let e;
                if (null == T.current || null == k) return;
                let l = Date.now(),
                    r = T.current,
                    a = {
                        height: f.eT,
                        width: f.eT,
                    },
                    s = null;
                if ((null != et.current && (et.current(), (et.current = null)), H))
                    try {
                        let n = S(
                                {
                                    file: t,
                                    image: r,
                                    cropDimensions: N,
                                    cropOriginCoordinates: C.current,
                                    maxDimensions: a,
                                    imageRotation: z,
                                    resizeWidth: f.eT,
                                    resizeHeight: f.eT,
                                },
                                k,
                                M,
                            ),
                            { result: l, cancelFn: i } = await (0, h.$p)(n);
                        (et.current = i), (e = await l);
                    } catch (e) {
                        j.error("Error cropping GIF", e), (s = f.ze.GIF_CROPPING);
                    } finally {
                        var u;
                        null == (u = et.current) || u.call(et), (et.current = null);
                    }
                else
                    e = V
                        ? n
                        : (0, o.PT)({
                              image: r,
                              cropDimensions: N,
                              cropOriginCoordinates: C.current,
                              maxDimensions: a,
                              imageRotation: z,
                          });
                return (
                    i({
                        imageData: e,
                        imageDataTimestamp: l,
                        error: s,
                        loading: !1,
                    }),
                    () => {
                        var e;
                        null == (e = et.current) || e.call(et), (et.current = null);
                    }
                );
            }, [t, z, H, V, i, k, M, n]);
        r.useEffect(() => {
            en();
        }, [en, y, z, k, B, M, J]);
        let el = r.useCallback(() => {
            if (null == T.current) return;
            let e = T.current.naturalWidth,
                t = T.current.naturalHeight;
            A({
                width: e,
                height: t,
            });
            let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            W(n),
                R(n),
                D(
                    O(
                        {
                            width: e,
                            height: t,
                        },
                        n,
                        F,
                    ),
                );
        }, [F]);
        return (0, l.jsxs)("div", {
            className: a()(_.imageEditor, { [_.isDragging]: B }),
            style: { "--custom-image-editor-size": "".concat(240, "px") },
            children: [
                (0, l.jsxs)("div", {
                    className: _.editingContainer,
                    children: [
                        (0, l.jsx)("img", {
                            onLoad: el,
                            onError: () => {
                                i({
                                    error: f.ze.IMAGE_LOAD,
                                    loading: !1,
                                });
                            },
                            style: b(
                                {
                                    opacity: +(null != k),
                                    transform: "translate3d("
                                        .concat(C.current.x, "px, ")
                                        .concat(C.current.y, "px, 0) rotate(")
                                        .concat(z, "deg)"),
                                },
                                $(),
                            ),
                            className: _.image,
                            src: n,
                            crossOrigin: "anonymous",
                            alt: p.intl.string(p.t.EYR1FR),
                            ref: T,
                            onMouseDown: Q,
                            draggable: !1,
                        }),
                        !V &&
                            (0, l.jsx)("div", {
                                className: _.overlay,
                                style: {
                                    opacity: +(null != k),
                                    width: N.width,
                                    height: N.height,
                                },
                                children: (0, l.jsx)(c.Text, {
                                    className: _.panHint,
                                    variant: "text-xs/normal",
                                    color: "text-primary",
                                    children: p.intl.string(p.t.oBPhdH),
                                }),
                            }),
                    ],
                }),
                V
                    ? (0, l.jsx)("div", {
                          className: _.animatedInfoContainer,
                          children: (0, l.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: p.intl.string(p.t["5XCxio"]),
                          }),
                      })
                    : (0, l.jsxs)("div", {
                          className: _.toolsContainer,
                          children: [
                              (0, l.jsx)(c.ua7, {
                                  text: p.intl.string(p.t["oCs/+P"]),
                                  "aria-label": p.intl.string(p.t["oCs/+P"]),
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = (function (e, t) {
                                              if (null == e) return {};
                                              var n,
                                                  l,
                                                  r = (function (e, t) {
                                                      if (null == e) return {};
                                                      var n,
                                                          l,
                                                          r = {},
                                                          i = Object.keys(e);
                                                      for (l = 0; l < i.length; l++)
                                                          (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                      return r;
                                                  })(e, t);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(e);
                                                  for (l = 0; l < i.length; l++)
                                                      (n = i[l]),
                                                          !(t.indexOf(n) >= 0) &&
                                                              Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                              (r[n] = e[n]);
                                              }
                                              return r;
                                          })(e, ["onClick"]);
                                      return (0, l.jsx)(
                                          u.zx,
                                          v(
                                              b(
                                                  {
                                                      className: _.toolButton,
                                                      look: u.zx.Looks.BLANK,
                                                      size: u.Ph.NONE,
                                                      color: u.zx.Colors.TRANSPARENT,
                                                      grow: !1,
                                                  },
                                                  n,
                                              ),
                                              {
                                                  onClick: q,
                                                  children: (0, l.jsx)(c.Vk2, {
                                                      size: "sm",
                                                      color: "currentColor",
                                                  }),
                                              },
                                          ),
                                      );
                                  },
                              }),
                              (0, l.jsxs)("div", {
                                  className: _.zoomControls,
                                  children: [
                                      (0, l.jsx)(c.BlJ, {
                                          color: c.TVs.colors.ICON_SECONDARY,
                                          size: "sm",
                                      }),
                                      null != J &&
                                          (0, l.jsx)(c.iRW, {
                                              className: _.slider,
                                              initialValue: J,
                                              minValue: 1,
                                              maxValue: 4,
                                              keyboardStep: 0.025,
                                              asValueChanges: X,
                                              equidistant: !0,
                                              hideBubble: !0,
                                              "aria-label": p.intl.string(p.t["2hPcVF"]),
                                          }),
                                      (0, l.jsx)(c.OyE, {
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
    E = (e, t) => {
        let { width: n, height: l } = e;
        return t % 180 != 0
            ? {
                  width: l,
                  height: n,
              }
            : {
                  width: n,
                  height: l,
              };
    },
    I = (e, t) => {
        let { width: n, height: l } = e,
            r = 240 * t,
            i = n / l;
        return (
            n > l ? (l = (n = r) / i) : (n = (l = r) * i),
            {
                width: n,
                height: l,
            }
        );
    };
function O(e, t, n) {
    let { width: l, height: r } = I(e, t),
        i = Math.abs(240 - l) / 2,
        a = Math.abs(240 - r) / 2;
    return n && (l < 240 || r < 240)
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
let S = (e, t, n) => {
    let { height: l, width: r } = I(t, n),
        i = (l = Math.min(l, 240)) / (r = Math.min(r, 240)),
        a = {
            height: l,
            width: r,
        },
        o = Math.floor(i < 1 ? f.eT * i : f.eT / i),
        s = i < 1 ? o : f.eT,
        u = i > 1 ? o : f.eT;
    return v(b({}, e), {
        cropDimensions: a,
        resizeHeight: s,
        resizeWidth: u,
    });
};
