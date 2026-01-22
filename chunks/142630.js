n.d(t, { default: () => v }), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(830917),
    c = n(158954),
    u = n(435371),
    d = n(397927),
    m = n(793574),
    g = n(688810),
    h = n(504974),
    E = n(702211),
    f = n(699576),
    p = n(392107),
    A = n(954571),
    D = n(403362),
    R = n(424632),
    C = n(726785),
    y = n(339984),
    O = n(652215),
    T = n(577718),
    b = n(985018),
    w = n(18644);
function x(e) {
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
function _(e, t) {
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
let I = {
    x: 0,
    y: 0,
};
function L(e) {
    switch (e) {
        case y.HL.BANNER:
            return {
                height: y.yZ,
                width: y.nI,
            };
        case y.HL.VIDEO_BACKGROUND:
            return T.Im;
        case y.HL.AVATAR:
        case y.HL.AVATAR_DECORATION:
        case y.HL.GUILD_ICON:
            return {
                height: O.XAf,
                width: O.XAf,
            };
        case y.HL.GUILD_BANNER:
            return {
                height: y.cN,
                width: y.Xb,
            };
        case y.HL.SCHEDULED_EVENT_IMAGE:
            return {
                height: y.Wz,
                width: y.PU,
            };
        case y.HL.HOME_HEADER:
            return {
                height: y.PS,
                width: y.CK,
            };
        default:
            return (0, D.xb)(e);
    }
}
function N(e) {
    let { zoomRatio: t, imageRotation: n, imageTransformCoordinates: r } = e;
    return 1 !== t || 0 !== n || 0 !== r.x || 0 !== r.y;
}
let S = {
    imageDimensions: null,
    cropDimensions: {
        width: 0,
        height: 0,
    },
    dragBoundaries: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    imageTransformCoordinates: I,
    imageRotation: 0,
    zoomRatio: 1,
    startingCoordinates: {
        x: 0,
        y: 0,
    },
    isDragging: !1,
    hasImageEdits: !1,
};
function j(e, t) {
    var n, r, i, a, s, o;
    switch (t.type) {
        case "SET_DIMENSIONS":
            return _(x({}, e), {
                imageDimensions: t.imageDimensions,
                cropDimensions: t.cropDimensions,
                dragBoundaries: t.dragBoundaries,
            });
        case "START_DRAGGING_IMAGE":
            return _(x({}, e), {
                startingCoordinates: t.startingCoordinates,
                isDragging: !0,
            });
        case "STOP_DRAGGING_IMAGE":
            return _(x({}, e), {
                isDragging: !1,
                hasImageEdits: N({
                    zoomRatio: e.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            });
        case "ROTATE_IMAGE":
            return _(x({}, e), {
                imageRotation: t.imageRotation,
                imageTransformCoordinates: t.imageTransformCoordinates,
                imageDimensions: null != (n = t.imageDimensions) ? n : e.imageDimensions,
                cropDimensions: null != (r = t.cropDimensions) ? r : e.cropDimensions,
                dragBoundaries: null != (i = t.dragBoundaries) ? i : e.dragBoundaries,
                hasImageEdits: N({
                    zoomRatio: e.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            });
        case "SET_IMAGE_ZOOM_RATIO":
            return _(x({}, e), {
                imageTransformCoordinates: t.imageTransformCoordinates,
                zoomRatio: t.zoomRatio,
                dragBoundaries: t.dragBoundaries,
                hasImageEdits: N({
                    zoomRatio: t.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            });
        case "RESET":
            return _(x({}, e), {
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: null != (a = t.imageDimensions) ? a : e.imageDimensions,
                cropDimensions: null != (s = t.cropDimensions) ? s : e.cropDimensions,
                dragBoundaries: null != (o = t.dragBoundaries) ? o : e.dragBoundaries,
                hasImageEdits: !1,
            });
        default:
            return (0, D.xb)(t);
    }
}
function v(e) {
    let {
            file: t,
            imageUri: n,
            originalAsset: a,
            transitionState: D,
            onCrop: T,
            onClose: _,
            uploadType: N = y.HL.AVATAR,
            showUpsellHeader: v = !1,
            analyticsPage: G,
        } = e,
        H = i.useRef(I),
        B = i.useRef(null),
        k = i.useRef(null),
        [M, z] = i.useReducer(j, S),
        {
            cropDimensions: P,
            dragBoundaries: V,
            imageDimensions: U,
            imageRotation: F,
            zoomRatio: Q,
            startingCoordinates: X,
            isDragging: K,
            hasImageEdits: W,
        } = M,
        [Z, Y] = i.useState(!1),
        [$, J] = i.useState(!1),
        [q, ee] = i.useState(0),
        { analyticsLocations: et, newestAnalyticsLocation: en } = (0, g.Ay)(m.A.IMAGE_CROPPING_MODAL),
        { isGIF: er, isCheckingAnimation: ei, isEditableAnimatedImage: ea } = (0, C._)(t),
        es = $ || Z || ei;
    i.useEffect(() => {
        er &&
            v &&
            A.default.track(O.HAw.OPEN_MODAL, {
                type: O.JJy.CROP_GIF_MODAL,
                location: { page: G },
                location_stack: et,
                upload_type: N,
            });
    }, [v, G, er, et, N]);
    let eo = i.useCallback(
            (e, t, n, r) => {
                (H.current = (0, R.F3)(e, t, n)),
                    null != B.current &&
                        (B.current.style.transform = "translate3d("
                            .concat(H.current.x, "px, ")
                            .concat(H.current.y, "px, 0) rotate(")
                            .concat(r, "deg)"));
            },
            [B],
        ),
        el = i.useCallback(() => {
            if (null == B.current || Q > 1) return;
            let { width: e, height: t } = B.current.getBoundingClientRect(),
                { width: n, height: r } = (0, R.Qx)(N, e, t),
                i = (0, R.Qp)(N, n, r, t),
                a = (0, R.l$)(n, r, i);
            z({
                type: "SET_DIMENSIONS",
                imageDimensions: {
                    width: n,
                    height: r,
                },
                cropDimensions: i,
                dragBoundaries: a,
            });
        }, [N, Q]),
        ec = i.useCallback((e) => {
            z({
                type: "START_DRAGGING_IMAGE",
                startingCoordinates: {
                    x: e.clientX - H.current.x,
                    y: e.clientY - H.current.y,
                },
            });
        }, []),
        eu = i.useCallback(
            (e) => {
                let { x: t, y: n } = H.current;
                K && (e.clientX !== t || e.clientY !== n) && eo(e.clientX - X.x, e.clientY - X.y, V, F);
            },
            [V, F, K, X.x, X.y, eo],
        ),
        ed = i.useCallback(() => {
            z({
                type: "STOP_DRAGGING_IMAGE",
                imageTransformCoordinates: H.current,
            });
        }, []),
        em = i.useCallback(
            (e) => {
                if (null == U) return;
                let { width: t, height: n } = U,
                    r = (0, R.l$)(t * e, n * e, P),
                    { x: i, y: a } = H.current;
                ((0, o.inRange)(i, r.right, r.left) && (0, o.inRange)(a, r.top, r.bottom)) || eo(i, a, r, F),
                    z({
                        type: "SET_IMAGE_ZOOM_RATIO",
                        zoomRatio: e,
                        dragBoundaries: r,
                        imageTransformCoordinates: H.current,
                    });
            },
            [P, U, F, eo],
        ),
        eg = i.useCallback(
            (e, t) => {
                let { width: n, height: r } = e,
                    { width: i, height: a } = (0, R.Qx)(N, r, n),
                    s = (0, R.Qp)(N, i, a, n),
                    o = (0, R.l$)(i * t, a * t, s);
                return {
                    newImageDimensions: {
                        width: i,
                        height: a,
                    },
                    newCropDimensions: s,
                    newDragBoundaries: o,
                };
            },
            [N],
        ),
        eh = i.useCallback(() => {
            var e;
            if (null == B.current || null == U) return;
            let t = (F + 90) % 360,
                { x: n, y: r } =
                    ((e = H.current.x),
                    {
                        x: -H.current.y,
                        y: e,
                    });
            if (U.width !== U.height) {
                let { newImageDimensions: e, newCropDimensions: i, newDragBoundaries: a } = eg(U, Q);
                eo(n, r, a, t),
                    z({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: H.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: i,
                        dragBoundaries: a,
                    });
            } else
                eo(n, r, V, t),
                    z({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: H.current,
                        imageRotation: t,
                    });
        }, [V, eg, U, F, eo, Q]),
        eE = i.useCallback(() => {
            if (null != B.current && null != U) {
                if (U.width !== U.height && (F - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: n } = eg(U, 1);
                    z({
                        type: "RESET",
                        imageDimensions: e,
                        cropDimensions: t,
                        dragBoundaries: n,
                    }),
                        eo(0, 0, n, 0);
                } else {
                    let e = (0, R.l$)(+U.width, +U.height, P);
                    z({
                        type: "RESET",
                        dragBoundaries: e,
                    }),
                        eo(0, 0, e, 0);
                }
                ee((e) => e + 1);
            }
        }, [P, eg, U, F, eo]),
        ef = i.useCallback(() => {
            let e = L(N);
            return e.width !== e.height;
        }, [N]),
        ep = i.useCallback(() => {
            if (null == U) return {};
            let e = U.width / U.height,
                t = ef() && e > y.wL ? P.height / U.height : 1,
                { width: n, height: r } = ((e, t) => {
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
                })(U, F);
            return {
                width: n * Q * t,
                minWidth: n * Q * t,
                height: r * Q * t,
                minHeight: r * Q * t,
            };
        }, [P.height, U, F, ef, Q]),
        eA = i.useCallback(async () => {
            let e;
            if (null == B.current) return;
            J(!0);
            let n = B.current,
                r = L(N);
            if (ea)
                try {
                    let { result: i, cancelFn: a } = await (0, R.ny)({
                        file: t,
                        image: n,
                        cropDimensions: P,
                        cropOriginCoordinates: H.current,
                        maxDimensions: r,
                        imageRotation: F,
                    });
                    (k.current = a), (e = await i), (k.current = null);
                } catch (e) {
                    var i;
                    throw (
                        (null == (i = k.current) || i.call(k),
                        (k.current = null),
                        Error("Error cropping animated image: ".concat(e instanceof Error ? e.toString() : String(e))))
                    );
                }
            else
                e = (0, l.iL)({
                    image: n,
                    cropDimensions: P,
                    cropOriginCoordinates: H.current,
                    maxDimensions: r,
                    imageRotation: F,
                });
            await T({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: n } = e;
                    return n ? (t ? p.E.EDITED_ARCHIVED_ASSET : p.E.ARCHIVED_ASSET) : p.E.NEW_ASSET;
                })({
                    hasImageEdits: W,
                    hasOriginalAsset: null != a,
                }),
                imageUri: e,
                file: t,
                originalAsset: a,
            }),
                J(!1),
                await _();
        }, [P, t, W, F, ea, _, T, a, N]),
        eD = i.useCallback(async () => {
            if (null != k.current) {
                k.current(), (k.current = null), J(!1);
                return;
            }
            await _();
        }, [_]);
    i.useEffect(
        () => (
            window.addEventListener("mouseup", ed),
            window.addEventListener("resize", el),
            () => {
                window.removeEventListener("mouseup", ed), window.removeEventListener("resize", el);
            }
        ),
        [el, ed],
    ),
        i.useEffect(() => {
            if (K) return window.addEventListener("mousemove", eu), () => window.removeEventListener("mousemove", eu);
        }, [eu, K]),
        i.useEffect(() => {
            if (null != k.current)
                return () => {
                    var e;
                    return null == (e = k.current) ? void 0 : e.call(k);
                };
        }, []);
    let eR = N === y.HL.AVATAR || N === y.HL.BANNER,
        eC = (0, E.b)(!eR);
    return (0, r.jsx)(g.f5, {
        value: et,
        children: (0, r.jsxs)(c.Modal, {
            title: b.intl.string(b.t.DxAYCF),
            size: "md",
            actionBarInput: (0, r.jsx)(d.QWc, {
                text: b.intl.string(b.t.yBZMsQ),
                textVariant: "text-md/medium",
                onClick: eE,
                disabled: !W,
            }),
            actions: [
                {
                    text: b.intl.string(b.t["9TG40l"]),
                    onClick: eD,
                    variant: "secondary",
                },
                {
                    text: b.intl.string(b.t.ZSHmKD),
                    onClick: eA,
                    variant: "primary",
                    loading: $,
                    disabled: es,
                },
            ],
            transitionState: D,
            onClose: _,
            children: [
                v &&
                    !eC &&
                    (0, r.jsx)(h.A, {
                        type: N,
                        analyticsPage: G,
                        analyticsSection: O.JJy.CROP_GIF_MODAL,
                        isGIF: er,
                        banner: n,
                    }),
                (0, r.jsxs)("div", {
                    className: w.jE,
                    children: [
                        (0, r.jsx)("div", {
                            className: w.oW,
                            children: Z
                                ? (0, r.jsxs)("div", {
                                      className: w.Un,
                                      children: [
                                          (0, r.jsx)(d.EpV, {
                                              size: "sm",
                                              color: d.LU0.colors.TEXT_FEEDBACK_CRITICAL,
                                          }),
                                          (0, r.jsx)(d.Text, {
                                              variant: "text-md/normal",
                                              color: "text-feedback-critical",
                                              children: b.intl.string(b.t["+ITMYX"]),
                                          }),
                                      ],
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("img", {
                                              onLoad: el,
                                              onError: () => Y(!0),
                                              style: x(
                                                  {
                                                      opacity: +(null != U),
                                                      transform: "translate3d("
                                                          .concat(H.current.x, "px, ")
                                                          .concat(H.current.y, "px, 0) rotate(")
                                                          .concat(F, "deg)"),
                                                  },
                                                  ep(),
                                              ),
                                              className: s()($ ? w.As : w.nu, w.hh),
                                              src: n,
                                              crossOrigin: "anonymous",
                                              alt: "avatar",
                                              ref: B,
                                              onMouseDown: ec,
                                              draggable: !1,
                                          }),
                                          (0, r.jsx)("div", {
                                              className: (function (e) {
                                                  switch (e) {
                                                      case y.HL.GUILD_ICON:
                                                          return w.$A;
                                                      case y.HL.BANNER:
                                                      case y.HL.GUILD_BANNER:
                                                      case y.HL.VIDEO_BACKGROUND:
                                                      case y.HL.SCHEDULED_EVENT_IMAGE:
                                                      case y.HL.HOME_HEADER:
                                                          return w.rn;
                                                      case y.HL.AVATAR:
                                                      case y.HL.AVATAR_DECORATION:
                                                          return w._h;
                                                  }
                                              })(N),
                                              style: {
                                                  opacity: +(null != U),
                                                  width: P.width,
                                                  height: P.height,
                                              },
                                          }),
                                      ],
                                  }),
                        }),
                        (0, r.jsxs)("div", {
                            className: w.bK,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: w.mu,
                                    children: [
                                        (0, r.jsx)(d.xfq, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: w.HQ,
                                        }),
                                        (0, r.jsx)(
                                            d.Apm,
                                            {
                                                className: w.aw,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: em,
                                                disabled: es,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                "aria-label": b.intl.string(b.t.dnvZSg),
                                            },
                                            q,
                                        ),
                                        (0, r.jsx)(d.xfq, {
                                            size: "md",
                                            color: "currentColor",
                                            className: w.HQ,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.m_, {
                                    text: b.intl.string(b.t.E36Wd4),
                                    ariaHidden: !0,
                                    children: (0, r.jsx)(d.DUT, {
                                        className: s()(w.On, { [w.r9]: es }),
                                        onClick: es ? void 0 : eh,
                                        "aria-label": b.intl.string(b.t.LzFiKG),
                                        "aria-disabled": es,
                                        children: (0, r.jsx)(d.H_z, {
                                            size: "md",
                                            color: "currentColor",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        v &&
                            eC &&
                            (0, r.jsx)(f.A, {
                                uploadType: N,
                                analyticsSource: en,
                                showUpsell: !0,
                                position: "inline",
                                className: w.Lu,
                            }),
                    ],
                }),
            ],
        }),
    });
}
