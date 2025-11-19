n.d(t, { v: () => E }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(36793),
    s = n(33309),
    u = n(28664),
    c = n(481060),
    d = n(638730),
    m = n(710845),
    h = n(197712),
    g = n(511004),
    f = n(598117),
    b = n(231338),
    v = n(388032),
    p = n(645765);
function x(e) {
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
let j = new m.Z("ImageEditor"),
    _ = {
        width: 288,
        height: 288,
    },
    E = r.forwardRef(function (e, t) {
        let { file: n, imageUri: i, onUpdate: m, onThrottledEdit: E } = e,
            N = r.useRef({
                x: 0,
                y: 0,
            }),
            [S, w] = r.useState({
                x: 0,
                y: 0,
            }),
            M = r.useRef(null),
            [R, A] = r.useState(1),
            [T, P] = r.useState(null),
            [D, k] = r.useState(!1),
            [G, Z] = r.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }),
            [z, L] = r.useState(0),
            [U, B] = r.useState({
                x: 0,
                y: 0,
            }),
            [F, J] = r.useState(!1),
            H = "image/gif" === n.type,
            V = (0, s.v)(n.type),
            W = V && !H,
            [Y, q] = r.useState(null),
            K = (0, d.h)(null != E ? E : b.dG, 500),
            X = r.useRef(null),
            Q = r.useRef(0);
        r.useEffect(() => {
            (0, g.Z)();
        }, []);
        let $ = r.useCallback(
                function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {
                                  x: N.current.x,
                                  y: N.current.y,
                              };
                    if (null == M.current) return;
                    let { x: t, y: n } = (0, h.U$)(e.x, e.y, G);
                    (N.current = {
                        x: t,
                        y: n,
                    }),
                        (M.current.style.transform = "translate3d("
                            .concat(t, "px, ")
                            .concat(n, "px, 0) rotate(")
                            .concat(z, "deg) scaleX(")
                            .concat(D ? "-1" : "1", ")")),
                        w({
                            x: t,
                            y: n,
                        });
                },
                [M, z, G, D],
            ),
            ee = r.useCallback(
                (e) => {
                    if (null == T) return;
                    let t = C(T, e, V);
                    A(e), Z(t), $(), null == K || K();
                },
                [T, $, V, K],
            ),
            et = r.useCallback(() => {
                if (null == M.current || null == T) return;
                let e = (z + 90) % 360,
                    t = T.height,
                    n = T.width,
                    l = C(
                        {
                            width: t,
                            height: n,
                        },
                        R,
                        V,
                    );
                L(e),
                    P({
                        width: t,
                        height: n,
                    }),
                    Z(l),
                    $(),
                    null == K || K();
            }, [T, z, $, R, V, K]),
            en = r.useCallback(() => {
                null != M.current && (k((e) => !e), $(), null == K || K());
            }, [M, $, K]),
            el = r.useCallback(() => {
                if (null == T) return {};
                let { height: e, width: t } = y(O(T, z), R);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t,
                };
            }, [T, z, R]),
            er = r.useCallback(() => {
                var e;
                null == (e = X.current) || e.moveGrabber(-0.025);
            }, []),
            ei = r.useCallback(() => {
                var e;
                null == (e = X.current) || e.moveGrabber(0.025);
            }, []),
            ea = r.useCallback((e) => {
                B({
                    x: e.clientX - N.current.x,
                    y: e.clientY - N.current.y,
                }),
                    J(!0);
            }, []);
        r.useEffect(() => {
            let e = () => J(!1);
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let eo = r.useCallback(
            (e) => {
                let { x: t, y: n } = N.current;
                F &&
                    (e.clientX !== t || e.clientY !== n) &&
                    ($({
                        x: (t = e.clientX - U.x),
                        y: (n = e.clientY - U.y),
                    }),
                    null == K || K());
            },
            [F, U, $, K],
        );
        r.useEffect(() => {
            if (F) return window.addEventListener("mousemove", eo), () => window.removeEventListener("mousemove", eo);
        }, [eo, F]);
        let es = r.useRef(null),
            eu = r.useCallback(async () => {
                let e;
                if (null == M.current || null == T) return;
                let t = Date.now(),
                    l = M.current,
                    r = {
                        height: f.eT,
                        width: f.eT,
                    },
                    a = null;
                if ((null != es.current && (es.current(), (es.current = null)), H))
                    try {
                        let t = I(
                                {
                                    file: n,
                                    image: l,
                                    cropDimensions: _,
                                    cropOriginCoordinates: N.current,
                                    maxDimensions: r,
                                    imageRotation: z,
                                    resizeWidth: f.eT,
                                    resizeHeight: f.eT,
                                },
                                T,
                                R,
                            ),
                            { result: i, cancelFn: a } = await (0, h.$p)(t);
                        (es.current = a), (e = await i);
                    } catch (e) {
                        j.error("Error cropping GIF", e), (a = f.ze.GIF_CROPPING);
                    } finally {
                        var s;
                        null == (s = es.current) || s.call(es), (es.current = null);
                    }
                else
                    e = W
                        ? i
                        : (0, o.PT)({
                              image: l,
                              cropDimensions: _,
                              cropOriginCoordinates: N.current,
                              maxDimensions: r,
                              imageRotation: z,
                          });
                return (
                    m({
                        imageData: e,
                        imageDataTimestamp: t,
                        error: a,
                        loading: !1,
                    }),
                    () => {
                        var e;
                        null == (e = es.current) || e.call(es), (es.current = null);
                    }
                );
            }, [n, z, H, W, m, T, R, i]);
        r.useEffect(() => {
            eu();
        }, [eu, S, z, T, F, R, Y, D]);
        let ec = r.useCallback(() => {
                if (null == M.current) return;
                let e = M.current.naturalWidth,
                    t = M.current.naturalHeight;
                P({
                    width: e,
                    height: t,
                }),
                    L(0),
                    k(!1);
                let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                A(n),
                    q(n),
                    (Q.current += 1),
                    Z(
                        C(
                            {
                                width: e,
                                height: t,
                            },
                            n,
                            V,
                        ),
                    ),
                    $({
                        x: 0,
                        y: 0,
                    });
            }, [M, V, $]),
            ed = r.useCallback(() => {
                ec();
            }, [ec]);
        return (
            r.useImperativeHandle(t, () => ({ reset: ec })),
            (0, l.jsxs)("div", {
                className: a()(p.imageEditor, { [p.isDragging]: F }),
                style: { "--custom-image-editor-size": "".concat(288, "px") },
                children: [
                    (0, l.jsxs)("div", {
                        className: p.editingContainer,
                        children: [
                            (0, l.jsx)("img", {
                                onLoad: ed,
                                onError: () => {
                                    m({
                                        error: f.ze.IMAGE_LOAD,
                                        loading: !1,
                                    });
                                },
                                style: x(
                                    {
                                        opacity: +(null != T),
                                        transform: "translate3d("
                                            .concat(N.current.x, "px, ")
                                            .concat(N.current.y, "px, 0) rotate(")
                                            .concat(z, "deg) scaleX(")
                                            .concat(D ? "-1" : "1", ")"),
                                    },
                                    el(),
                                ),
                                className: p.image,
                                src: i,
                                crossOrigin: "anonymous",
                                alt: v.intl.string(v.t.EYR1Fa),
                                ref: M,
                                onMouseDown: ea,
                                draggable: !1,
                            }),
                            !W &&
                                (0, l.jsx)("div", {
                                    className: p.overlay,
                                    style: {
                                        opacity: +(null != T),
                                        width: _.width,
                                        height: _.height,
                                    },
                                    children: (0, l.jsx)(c.Text, {
                                        className: p.panHint,
                                        variant: "text-xs/normal",
                                        color: "text-primary",
                                        children: v.intl.string(v.t.oBPhdN),
                                    }),
                                }),
                        ],
                    }),
                    W
                        ? (0, l.jsx)("div", {
                              className: p.animatedInfoContainer,
                              children: (0, l.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: v.intl.string(v.t["5XCxir"]),
                              }),
                          })
                        : (0, l.jsxs)("div", {
                              className: p.toolbar,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: p.toolbarGroup,
                                      children: [
                                          (0, l.jsx)(u.u, {
                                              text: v.intl.string(v.t.FEIIO9),
                                              "aria-label": v.intl.string(v.t.FEIIO9),
                                              children: (0, l.jsx)("div", {
                                                  className: p.toolbarButton,
                                                  children: (0, l.jsx)(c.hU, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.Vk2,
                                                      onClick: et,
                                                      "aria-label": v.intl.string(v.t.FEIIO9),
                                                  }),
                                              }),
                                          }),
                                          (0, l.jsx)(u.u, {
                                              text: v.intl.string(v.t["4LRS2p"]),
                                              "aria-label": v.intl.string(v.t["4LRS2p"]),
                                              children: (0, l.jsx)("div", {
                                                  className: p.toolbarButton,
                                                  children: (0, l.jsx)(c.hU, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.xby,
                                                      onClick: en,
                                                      "aria-label": v.intl.string(v.t["4LRS2p"]),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: a()(p.zoomControls, p.toolbarGroup),
                                      children: [
                                          (0, l.jsx)(u.u, {
                                              text: v.intl.string(v.t.QlArhK),
                                              "aria-label": v.intl.string(v.t.QlArhK),
                                              children: (0, l.jsx)("div", {
                                                  className: p.toolbarButton,
                                                  children: (0, l.jsx)(c.hU, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.BlJ,
                                                      onClick: er,
                                                      "aria-label": v.intl.string(v.t.QlArhK),
                                                  }),
                                              }),
                                          }),
                                          null != Y &&
                                              (0, l.jsx)(
                                                  c.iRW,
                                                  {
                                                      ref: X,
                                                      className: p.slider,
                                                      initialValue: Y,
                                                      minValue: 1,
                                                      maxValue: 4,
                                                      keyboardStep: 0.025,
                                                      asValueChanges: ee,
                                                      equidistant: !0,
                                                      hideBubble: !0,
                                                      "aria-label": v.intl.string(v.t["2hPcVJ"]),
                                                  },
                                                  Q.current,
                                              ),
                                          (0, l.jsx)(u.u, {
                                              text: v.intl.string(v.t.Ch32tT),
                                              "aria-label": v.intl.string(v.t.Ch32tT),
                                              children: (0, l.jsx)("div", {
                                                  className: p.toolbarButton,
                                                  children: (0, l.jsx)(c.hU, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.OyE,
                                                      onClick: ei,
                                                      "aria-label": v.intl.string(v.t.Ch32tT),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                ],
            })
        );
    }),
    O = (e, t) => {
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
    y = (e, t) => {
        let { width: n, height: l } = e,
            r = 288 * t,
            i = n / l;
        return (
            n > l ? (l = (n = r) / i) : (n = (l = r) * i),
            {
                width: n,
                height: l,
            }
        );
    };
function C(e, t, n) {
    let { width: l, height: r } = y(e, t),
        i = Math.abs(288 - l) / 2,
        a = Math.abs(288 - r) / 2;
    return n && (l < 288 || r < 288)
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
let I = (e, t, n) => {
    var l, r;
    let { height: i, width: a } = y(t, n),
        o = (i = Math.min(i, 288)) / (a = Math.min(a, 288)),
        s = {
            height: i,
            width: a,
        },
        u = Math.floor(o < 1 ? f.eT * o : f.eT / o),
        c = o < 1 ? u : f.eT,
        d = o > 1 ? u : f.eT;
    return (
        (l = x({}, e)),
        (r = r =
            {
                cropDimensions: s,
                resizeHeight: c,
                resizeWidth: d,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        l
    );
};
