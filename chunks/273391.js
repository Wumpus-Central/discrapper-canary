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
    g = n(197712),
    h = n(981713),
    b = n(598117),
    f = n(231338),
    v = n(388032),
    x = n(595756);
function j(e) {
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
let p = new m.Z("ImageEditor"),
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
            [w, C] = r.useState({
                x: 0,
                y: 0,
            }),
            M = r.useRef(null),
            [T, P] = r.useState(1),
            [k, A] = r.useState(null),
            [R, Z] = r.useState(!1),
            [D, z] = r.useState({
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }),
            [G, U] = r.useState(0),
            [L, B] = r.useState({
                x: 0,
                y: 0,
            }),
            [J, H] = r.useState(!1),
            { isGIF: F, isWebP: W, isCheckingAnimation: Y, isEditableAnimatedImage: q } = (0, h.T)(n),
            K = (0, s.v)(n.type) && !F && !W,
            [V, X] = r.useState(null),
            Q = (0, d.h)(null != O ? O : f.dG, 500),
            $ = r.useRef(null),
            ee = r.useRef(0),
            et = r.useCallback(
                function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {
                                  x: _.current.x,
                                  y: _.current.y,
                              };
                    if (null == M.current) return;
                    let { x: t, y: n } = (0, g.U$)(e.x, e.y, D);
                    (_.current = {
                        x: t,
                        y: n,
                    }),
                        (M.current.style.transform = "translate3d("
                            .concat(t, "px, ")
                            .concat(n, "px, 0) rotate(")
                            .concat(G, "deg) scaleX(")
                            .concat(R ? "-1" : "1", ")")),
                        C({
                            x: t,
                            y: n,
                        });
                },
                [M, G, D, R],
            );
        r.useEffect(() => {
            null == k || Y || z(I(k, T, q));
        }, [k, T, q, Y]);
        let en = r.useCallback(
                (e) => {
                    if (null == k) return;
                    let t = I(k, e, q);
                    P(e), z(t), et(), null == Q || Q();
                },
                [k, et, q, Q],
            ),
            el = r.useCallback(() => {
                if (null == M.current || null == k) return;
                let e = (G + 90) % 360,
                    t = k.height,
                    n = k.width,
                    l = I(
                        {
                            width: t,
                            height: n,
                        },
                        T,
                        q,
                    );
                U(e),
                    A({
                        width: t,
                        height: n,
                    }),
                    z(l),
                    et(),
                    null == Q || Q();
            }, [k, G, et, T, q, Q]),
            er = r.useCallback(() => {
                null != M.current && (Z((e) => !e), et(), null == Q || Q());
            }, [M, et, Q]),
            ei = r.useCallback(() => {
                if (null == k) return {};
                let { height: e, width: t } = S(y(k, G), T);
                return {
                    height: e,
                    width: t,
                    minHeight: e,
                    minWidth: t,
                };
            }, [k, G, T]),
            ea = r.useCallback(() => {
                var e;
                null == (e = $.current) || e.moveGrabber(-0.025);
            }, []),
            eo = r.useCallback(() => {
                var e;
                null == (e = $.current) || e.moveGrabber(0.025);
            }, []),
            es = r.useCallback((e) => {
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
        let eu = r.useCallback(
            (e) => {
                let { x: t, y: n } = _.current;
                J &&
                    (e.clientX !== t || e.clientY !== n) &&
                    (et({
                        x: (t = e.clientX - L.x),
                        y: (n = e.clientY - L.y),
                    }),
                    null == Q || Q());
            },
            [J, L, et, Q],
        );
        r.useEffect(() => {
            if (J) return window.addEventListener("mousemove", eu), () => window.removeEventListener("mousemove", eu);
        }, [eu, J]);
        let ec = r.useRef(null),
            ed = r.useCallback(async () => {
                let e;
                if (null == M.current || null == k || Y) return;
                let t = Date.now(),
                    l = M.current,
                    r = {
                        height: b.eT,
                        width: b.eT,
                    },
                    a = null;
                if ((null != ec.current && (ec.current(), (ec.current = null)), q))
                    try {
                        let t = N(
                                {
                                    file: n,
                                    image: l,
                                    cropDimensions: E,
                                    cropOriginCoordinates: _.current,
                                    maxDimensions: r,
                                    imageRotation: G,
                                    resizeWidth: b.eT,
                                    resizeHeight: b.eT,
                                },
                                k,
                                T,
                            ),
                            { result: i, cancelFn: a } = await (0, g.GU)(t);
                        (ec.current = a), (e = await i);
                    } catch (e) {
                        p.error("Error cropping animated image", e), (a = b.ze.ANIMATED_CROPPING);
                    } finally {
                        var s;
                        null == (s = ec.current) || s.call(ec), (ec.current = null);
                    }
                else
                    e = K
                        ? i
                        : (0, o.PT)({
                              image: l,
                              cropDimensions: E,
                              cropOriginCoordinates: _.current,
                              maxDimensions: r,
                              imageRotation: G,
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
                        null == (e = ec.current) || e.call(ec), (ec.current = null);
                    }
                );
            }, [n, G, q, K, Y, m, k, T, i]);
        r.useEffect(() => {
            ed();
        }, [ed, w, G, k, J, T, V, R]);
        let em = r.useCallback(() => {
                if (null == M.current) return;
                let e = M.current.naturalWidth,
                    t = M.current.naturalHeight;
                A({
                    width: e,
                    height: t,
                }),
                    U(0),
                    Z(!1);
                let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                P(n),
                    X(n),
                    (ee.current += 1),
                    z(
                        I(
                            {
                                width: e,
                                height: t,
                            },
                            n,
                            q,
                        ),
                    ),
                    et({
                        x: 0,
                        y: 0,
                    });
            }, [M, q, et]),
            eg = r.useCallback(() => {
                em();
            }, [em]);
        return (
            r.useImperativeHandle(t, () => ({ reset: em })),
            (0, l.jsxs)("div", {
                className: a()(x.imageEditor, { [x.isDragging]: J }),
                style: { "--custom-image-editor-size": "".concat(288, "px") },
                children: [
                    (0, l.jsxs)("div", {
                        className: x.editingContainer,
                        children: [
                            (0, l.jsx)("img", {
                                onLoad: eg,
                                onError: () => {
                                    m({
                                        error: b.ze.IMAGE_LOAD,
                                        loading: !1,
                                    });
                                },
                                style: j(
                                    {
                                        opacity: +(null != k),
                                        transform: "translate3d("
                                            .concat(_.current.x, "px, ")
                                            .concat(_.current.y, "px, 0) rotate(")
                                            .concat(G, "deg) scaleX(")
                                            .concat(R ? "-1" : "1", ")"),
                                    },
                                    ei(),
                                ),
                                className: x.image,
                                src: i,
                                crossOrigin: "anonymous",
                                alt: v.intl.string(v.t.EYR1Fa),
                                ref: M,
                                onMouseDown: es,
                                draggable: !1,
                            }),
                            !K &&
                                !Y &&
                                (0, l.jsx)("div", {
                                    className: x.overlay,
                                    style: {
                                        opacity: +(null != k),
                                        width: E.width,
                                        height: E.height,
                                    },
                                    children: (0, l.jsx)(c.Text, {
                                        className: x.panHint,
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: v.intl.string(v.t.oBPhdN),
                                    }),
                                }),
                        ],
                    }),
                    K
                        ? (0, l.jsx)("div", {
                              className: x.animatedInfoContainer,
                              children: (0, l.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: v.intl.string(v.t.AjdEvM),
                              }),
                          })
                        : (0, l.jsxs)("div", {
                              className: x.toolbar,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: x.toolbarGroup,
                                      children: [
                                          (0, l.jsx)(u.u, {
                                              text: v.intl.string(v.t.FEIIO9),
                                              "aria-label": v.intl.string(v.t.FEIIO9),
                                              children: (0, l.jsx)("div", {
                                                  className: x.toolbarButton,
                                                  children: (0, l.jsx)(c.hU, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.Vk2,
                                                      onClick: el,
                                                      "aria-label": v.intl.string(v.t.FEIIO9),
                                                  }),
                                              }),
                                          }),
                                          (0, l.jsx)(u.u, {
                                              text: v.intl.string(v.t["4LRS2p"]),
                                              "aria-label": v.intl.string(v.t["4LRS2p"]),
                                              children: (0, l.jsx)("div", {
                                                  className: x.toolbarButton,
                                                  children: (0, l.jsx)(c.hU, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.xby,
                                                      onClick: er,
                                                      "aria-label": v.intl.string(v.t["4LRS2p"]),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: a()(x.zoomControls, x.toolbarGroup),
                                      children: [
                                          (0, l.jsx)(u.u, {
                                              text: v.intl.string(v.t.QlArhK),
                                              "aria-label": v.intl.string(v.t.QlArhK),
                                              children: (0, l.jsx)("div", {
                                                  className: x.toolbarButton,
                                                  children: (0, l.jsx)(c.hU, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.BlJ,
                                                      onClick: ea,
                                                      "aria-label": v.intl.string(v.t.QlArhK),
                                                  }),
                                              }),
                                          }),
                                          null != V &&
                                              (0, l.jsx)(
                                                  c.iRW,
                                                  {
                                                      ref: $,
                                                      className: x.slider,
                                                      initialValue: V,
                                                      minValue: 1,
                                                      maxValue: 4,
                                                      keyboardStep: 0.025,
                                                      asValueChanges: en,
                                                      equidistant: !0,
                                                      hideBubble: !0,
                                                      "aria-label": v.intl.string(v.t["2hPcVJ"]),
                                                  },
                                                  ee.current,
                                              ),
                                          (0, l.jsx)(u.u, {
                                              text: v.intl.string(v.t.Ch32tT),
                                              "aria-label": v.intl.string(v.t.Ch32tT),
                                              children: (0, l.jsx)("div", {
                                                  className: x.toolbarButton,
                                                  children: (0, l.jsx)(c.hU, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.OyE,
                                                      onClick: eo,
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
    S = (e, t) => {
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
function I(e, t, n) {
    let { width: l, height: r } = S(e, t),
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
    let { height: i, width: a } = S(t, n),
        o = (i = Math.min(i, 288)) / (a = Math.min(a, 288)),
        s = {
            height: i,
            width: a,
        },
        u = Math.floor(o < 1 ? b.eT * o : b.eT / o),
        c = o < 1 ? u : b.eT,
        d = o > 1 ? u : b.eT;
    return (
        (l = j({}, e)),
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
