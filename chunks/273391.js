n.d(t, { v: () => O }), n(388685);
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
    g = n(76674),
    b = n(598117),
    f = n(231338),
    v = n(388032),
    p = n(595756);
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
    E = {
        width: 288,
        height: 288,
    },
    O = r.forwardRef(function (e, t) {
        let { file: n, imageUri: i, onUpdate: m, onThrottledEdit: O } = e,
            _ = r.useRef({
                x: 0,
                y: 0,
            }),
            [w, S] = r.useState({
                x: 0,
                y: 0,
            }),
            M = r.useRef(null),
            [A, R] = r.useState(1),
            [T, P] = r.useState(null),
            [D, k] = r.useState(!1),
            [G, Z] = r.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }),
            [U, z] = r.useState(0),
            [L, B] = r.useState({
                x: 0,
                y: 0,
            }),
            [J, H] = r.useState(!1),
            F = "image/gif" === n.type,
            V = (0, s.v)(n.type),
            W = V && !F,
            [Y, q] = r.useState(null),
            K = (0, d.h)(null != O ? O : f.dG, 500),
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
                                  x: _.current.x,
                                  y: _.current.y,
                              };
                    if (null == M.current) return;
                    let { x: t, y: n } = (0, h.U$)(e.x, e.y, G);
                    (_.current = {
                        x: t,
                        y: n,
                    }),
                        (M.current.style.transform = "translate3d("
                            .concat(t, "px, ")
                            .concat(n, "px, 0) rotate(")
                            .concat(U, "deg) scaleX(")
                            .concat(D ? "-1" : "1", ")")),
                        S({
                            x: t,
                            y: n,
                        });
                },
                [M, U, G, D],
            ),
            ee = r.useCallback(
                (e) => {
                    if (null == T) return;
                    let t = C(T, e, V);
                    R(e), Z(t), $(), null == K || K();
                },
                [T, $, V, K],
            ),
            et = r.useCallback(() => {
                if (null == M.current || null == T) return;
                let e = (U + 90) % 360,
                    t = T.height,
                    n = T.width,
                    l = C(
                        {
                            width: t,
                            height: n,
                        },
                        A,
                        V,
                    );
                z(e),
                    P({
                        width: t,
                        height: n,
                    }),
                    Z(l),
                    $(),
                    null == K || K();
            }, [T, U, $, A, V, K]),
            en = r.useCallback(() => {
                null != M.current && (k((e) => !e), $(), null == K || K());
            }, [M, $, K]),
            el = r.useCallback(() => {
                if (null == T) return {};
                let { height: e, width: t } = I(y(T, U), A);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t,
                };
            }, [T, U, A]),
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
                    x: e.clientX - _.current.x,
                    y: e.clientY - _.current.y,
                }),
                    H(!0);
            }, []);
        r.useEffect(() => {
            let e = () => H(!1);
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let eo = r.useCallback(
            (e) => {
                let { x: t, y: n } = _.current;
                J &&
                    (e.clientX !== t || e.clientY !== n) &&
                    ($({
                        x: (t = e.clientX - L.x),
                        y: (n = e.clientY - L.y),
                    }),
                    null == K || K());
            },
            [J, L, $, K],
        );
        r.useEffect(() => {
            if (J) return window.addEventListener("mousemove", eo), () => window.removeEventListener("mousemove", eo);
        }, [eo, J]);
        let es = r.useRef(null),
            eu = r.useCallback(async () => {
                let e;
                if (null == M.current || null == T) return;
                let t = Date.now(),
                    l = M.current,
                    r = {
                        height: b.eT,
                        width: b.eT,
                    },
                    a = null;
                if ((null != es.current && (es.current(), (es.current = null)), F))
                    try {
                        let t = N(
                                {
                                    file: n,
                                    image: l,
                                    cropDimensions: E,
                                    cropOriginCoordinates: _.current,
                                    maxDimensions: r,
                                    imageRotation: U,
                                    resizeWidth: b.eT,
                                    resizeHeight: b.eT,
                                },
                                T,
                                A,
                            ),
                            { result: i, cancelFn: a } = await (0, h.GU)(t);
                        (es.current = a), (e = await i);
                    } catch (e) {
                        j.error("Error cropping GIF", e), (a = b.ze.GIF_CROPPING);
                    } finally {
                        var s;
                        null == (s = es.current) || s.call(es), (es.current = null);
                    }
                else
                    e = W
                        ? i
                        : (0, o.PT)({
                              image: l,
                              cropDimensions: E,
                              cropOriginCoordinates: _.current,
                              maxDimensions: r,
                              imageRotation: U,
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
            }, [n, U, F, W, m, T, A, i]);
        r.useEffect(() => {
            eu();
        }, [eu, w, U, T, J, A, Y, D]);
        let ec = r.useCallback(() => {
                if (null == M.current) return;
                let e = M.current.naturalWidth,
                    t = M.current.naturalHeight;
                P({
                    width: e,
                    height: t,
                }),
                    z(0),
                    k(!1);
                let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                R(n),
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
                className: a()(p.imageEditor, { [p.isDragging]: J }),
                style: { "--custom-image-editor-size": "".concat(288, "px") },
                children: [
                    (0, l.jsxs)("div", {
                        className: p.editingContainer,
                        children: [
                            (0, l.jsx)("img", {
                                onLoad: ed,
                                onError: () => {
                                    m({
                                        error: b.ze.IMAGE_LOAD,
                                        loading: !1,
                                    });
                                },
                                style: x(
                                    {
                                        opacity: +(null != T),
                                        transform: "translate3d("
                                            .concat(_.current.x, "px, ")
                                            .concat(_.current.y, "px, 0) rotate(")
                                            .concat(U, "deg) scaleX(")
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
                                        width: E.width,
                                        height: E.height,
                                    },
                                    children: (0, l.jsx)(c.Text, {
                                        className: p.panHint,
                                        variant: "text-xs/normal",
                                        color: "text-strong",
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
    y = (e, t) => {
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
    let { width: l, height: r } = I(e, t),
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
let N = (e, t, n) => {
    var l, r;
    let { height: i, width: a } = I(t, n),
        o = (i = Math.min(i, 288)) / (a = Math.min(a, 288)),
        s = {
            height: i,
            width: a,
        },
        u = Math.floor(o < 1 ? b.eT * o : b.eT / o),
        c = o < 1 ? u : b.eT,
        d = o > 1 ? u : b.eT;
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
