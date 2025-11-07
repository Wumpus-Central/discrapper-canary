n.d(t, { v: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(36793),
    o = n(33309),
    u = n(28664),
    c = n(481060),
    d = n(638730),
    h = n(710845),
    m = n(197712),
    g = n(511004),
    p = n(598117),
    f = n(231338),
    v = n(388032),
    x = n(645765);
function b(e) {
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
let j = new h.Z("ImageEditor"),
    _ = {
        width: 240,
        height: 240,
    },
    O = (e) => {
        let { file: t, imageUri: n, onUpdate: l, onThrottledEdit: h } = e,
            O = i.useRef({
                x: 0,
                y: 0,
            }),
            [N, C] = i.useState({
                x: 0,
                y: 0,
            }),
            I = i.useRef(null),
            [S, T] = i.useState(1),
            [M, A] = i.useState(null),
            [P, R] = i.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }),
            [k, Z] = i.useState(0),
            [L, G] = i.useState({
                x: 0,
                y: 0,
            }),
            [z, U] = i.useState(!1),
            F = "image/gif" === t.type,
            W = (0, o.v)(t.type),
            H = W && !F,
            [B, V] = i.useState(null),
            J = (0, d.h)(null != h ? h : f.dG, 500);
        i.useEffect(() => {
            (0, g.Z)();
        }, []);
        let Y = i.useCallback(
                (e) => {
                    if (null == I.current) return;
                    let { x: t, y: n } = (0, m.U$)(e.x, e.y, P);
                    (O.current = {
                        x: t,
                        y: n,
                    }),
                        (I.current.style.transform = "translate3d("
                            .concat(t, "px, ")
                            .concat(n, "px, 0) rotate(")
                            .concat(k, "deg)")),
                        C({
                            x: t,
                            y: n,
                        });
                },
                [I, k, P],
            ),
            K = i.useCallback(
                (e) => {
                    if (null == M) return;
                    let t = D(M, e, W),
                        { x: n, y: r } = O.current;
                    T(e),
                        R(t),
                        Y({
                            x: n,
                            y: r,
                        }),
                        null == J || J();
                },
                [M, Y, W, J],
            ),
            X = i.useCallback(() => {
                if (null == I.current || null == M) return;
                let e = (k + 90) % 360,
                    t = -O.current.x,
                    n = O.current.y,
                    r = M.height,
                    i = M.width,
                    l = D(
                        {
                            width: r,
                            height: i,
                        },
                        S,
                        W,
                    );
                Y({
                    x: n,
                    y: t,
                }),
                    Z(e),
                    A({
                        width: r,
                        height: i,
                    }),
                    R(l),
                    null == J || J();
            }, [M, k, Y, S, W, J]),
            q = i.useCallback(() => {
                if (null == M) return {};
                let { height: e, width: t } = E(y(M, k), S);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t,
                };
            }, [M, k, S]),
            $ = i.useCallback((e) => {
                G({
                    x: e.clientX - O.current.x,
                    y: e.clientY - O.current.y,
                }),
                    U(!0);
            }, []);
        i.useEffect(() => {
            let e = () => U(!1);
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let Q = i.useCallback(
            (e) => {
                let { x: t, y: n } = O.current;
                z &&
                    (e.clientX !== t || e.clientY !== n) &&
                    (Y({
                        x: (t = e.clientX - L.x),
                        y: (n = e.clientY - L.y),
                    }),
                    null == J || J());
            },
            [z, L, Y, J],
        );
        i.useEffect(() => {
            if (z) return window.addEventListener("mousemove", Q), () => window.removeEventListener("mousemove", Q);
        }, [Q, z]);
        let ee = i.useRef(null),
            et = i.useCallback(async () => {
                let e;
                if (null == I.current || null == M) return;
                let r = Date.now(),
                    i = I.current,
                    a = {
                        height: p.eT,
                        width: p.eT,
                    },
                    o = null;
                if ((null != ee.current && (ee.current(), (ee.current = null)), F))
                    try {
                        let n = w(
                                {
                                    file: t,
                                    image: i,
                                    cropDimensions: _,
                                    cropOriginCoordinates: O.current,
                                    maxDimensions: a,
                                    imageRotation: k,
                                    resizeWidth: p.eT,
                                    resizeHeight: p.eT,
                                },
                                M,
                                S,
                            ),
                            { result: r, cancelFn: l } = await (0, m.$p)(n);
                        (ee.current = l), (e = await r);
                    } catch (e) {
                        j.error("Error cropping GIF", e), (o = p.ze.GIF_CROPPING);
                    } finally {
                        var u;
                        null == (u = ee.current) || u.call(ee), (ee.current = null);
                    }
                else
                    e = H
                        ? n
                        : (0, s.PT)({
                              image: i,
                              cropDimensions: _,
                              cropOriginCoordinates: O.current,
                              maxDimensions: a,
                              imageRotation: k,
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
                        null == (e = ee.current) || e.call(ee), (ee.current = null);
                    }
                );
            }, [t, k, F, H, l, M, S, n]);
        i.useEffect(() => {
            et();
        }, [et, N, k, M, z, S, B]);
        let en = i.useCallback(() => {
            if (null == I.current) return;
            let e = I.current.naturalWidth,
                t = I.current.naturalHeight;
            A({
                width: e,
                height: t,
            });
            let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
            V(n),
                T(n),
                R(
                    D(
                        {
                            width: e,
                            height: t,
                        },
                        n,
                        W,
                    ),
                );
        }, [W]);
        return (0, r.jsxs)("div", {
            className: a()(x.imageEditor, { [x.isDragging]: z }),
            style: { "--custom-image-editor-size": "".concat(240, "px") },
            children: [
                (0, r.jsxs)("div", {
                    className: x.editingContainer,
                    children: [
                        (0, r.jsx)("img", {
                            onLoad: en,
                            onError: () => {
                                l({
                                    error: p.ze.IMAGE_LOAD,
                                    loading: !1,
                                });
                            },
                            style: b(
                                {
                                    opacity: +(null != M),
                                    transform: "translate3d("
                                        .concat(O.current.x, "px, ")
                                        .concat(O.current.y, "px, 0) rotate(")
                                        .concat(k, "deg)"),
                                },
                                q(),
                            ),
                            className: x.image,
                            src: n,
                            crossOrigin: "anonymous",
                            alt: v.intl.string(v.t.EYR1Fa),
                            ref: I,
                            onMouseDown: $,
                            draggable: !1,
                        }),
                        !H &&
                            (0, r.jsx)("div", {
                                className: x.overlay,
                                style: {
                                    opacity: +(null != M),
                                    width: _.width,
                                    height: _.height,
                                },
                                children: (0, r.jsx)(c.Text, {
                                    className: x.panHint,
                                    variant: "text-xs/normal",
                                    color: "text-primary",
                                    children: v.intl.string(v.t.oBPhdN),
                                }),
                            }),
                    ],
                }),
                H
                    ? (0, r.jsx)("div", {
                          className: x.animatedInfoContainer,
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: v.intl.string(v.t["5XCxir"]),
                          }),
                      })
                    : (0, r.jsxs)("div", {
                          className: x.toolsContainer,
                          children: [
                              (0, r.jsx)(u.u, {
                                  text: v.intl.string(v.t["oCs/+G"]),
                                  "aria-label": v.intl.string(v.t["oCs/+G"]),
                                  children: (0, r.jsx)(c.P3F, {
                                      className: x.toolButton,
                                      onClick: X,
                                      children: (0, r.jsx)(c.Vk2, {
                                          size: "sm",
                                          color: "currentColor",
                                      }),
                                  }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: x.zoomControls,
                                  children: [
                                      (0, r.jsx)(c.BlJ, {
                                          color: c.TVs.colors.ICON_SECONDARY,
                                          size: "sm",
                                      }),
                                      null != B &&
                                          (0, r.jsx)(c.iRW, {
                                              className: x.slider,
                                              initialValue: B,
                                              minValue: 1,
                                              maxValue: 4,
                                              keyboardStep: 0.025,
                                              asValueChanges: K,
                                              equidistant: !0,
                                              hideBubble: !0,
                                              "aria-label": v.intl.string(v.t["2hPcVJ"]),
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
    y = (e, t) => {
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
    E = (e, t) => {
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
function D(e, t, n) {
    let { width: r, height: i } = E(e, t),
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
let w = (e, t, n) => {
    var r, i;
    let { height: l, width: a } = E(t, n),
        s = (l = Math.min(l, 240)) / (a = Math.min(a, 240)),
        o = {
            height: l,
            width: a,
        },
        u = Math.floor(s < 1 ? p.eT * s : p.eT / s),
        c = s < 1 ? u : p.eT,
        d = s > 1 ? u : p.eT;
    return (
        (r = b({}, e)),
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
