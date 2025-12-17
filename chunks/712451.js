r.d(t, { default: () => j }), r(388685), r(415506);
var n = r(54381),
    i = r(473749),
    a = r(120356),
    o = r.n(a),
    s = r(392711),
    l = r(36793),
    c = r(793030),
    u = r(681715),
    d = r(481060),
    m = r(100527),
    g = r(906732),
    h = r(488499),
    p = r(222062),
    E = r(530329),
    C = r(72703),
    f = r(626135),
    A = r(823379),
    R = r(197712),
    D = r(981713),
    T = r(486324),
    y = r(981631),
    O = r(678916),
    b = r(388032),
    w = r(201313);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let x = {
    x: 0,
    y: 0,
};
function v(e) {
    switch (e) {
        case T.pC.BANNER:
            return {
                height: T.f,
                width: T.L0,
            };
        case T.pC.VIDEO_BACKGROUND:
            return O.HE;
        case T.pC.AVATAR:
        case T.pC.AVATAR_DECORATION:
        case T.pC.GUILD_ICON:
            return {
                height: y.dGM,
                width: y.dGM,
            };
        case T.pC.GUILD_BANNER:
            return {
                height: T._T,
                width: T.X_,
            };
        case T.pC.SCHEDULED_EVENT_IMAGE:
            return {
                height: T.xT,
                width: T.d6,
            };
        case T.pC.HOME_HEADER:
            return {
                height: T.Uo,
                width: T.N8,
            };
        default:
            return (0, A.vE)(e);
    }
}
function N(e) {
    let { zoomRatio: t, imageRotation: r, imageTransformCoordinates: n } = e;
    return 1 !== t || 0 !== r || 0 !== n.x || 0 !== n.y;
}
let G = {
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
    imageTransformCoordinates: x,
    imageRotation: 0,
    zoomRatio: 1,
    startingCoordinates: {
        x: 0,
        y: 0,
    },
    isDragging: !1,
    hasImageEdits: !1,
};
function S(e, t) {
    var r, n, i, a, o, s;
    switch (t.type) {
        case "SET_DIMENSIONS":
            return _(I({}, e), {
                imageDimensions: t.imageDimensions,
                cropDimensions: t.cropDimensions,
                dragBoundaries: t.dragBoundaries,
            });
        case "START_DRAGGING_IMAGE":
            return _(I({}, e), {
                startingCoordinates: t.startingCoordinates,
                isDragging: !0,
            });
        case "STOP_DRAGGING_IMAGE":
            return _(I({}, e), {
                isDragging: !1,
                hasImageEdits: N({
                    zoomRatio: e.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            });
        case "ROTATE_IMAGE":
            return _(I({}, e), {
                imageRotation: t.imageRotation,
                imageTransformCoordinates: t.imageTransformCoordinates,
                imageDimensions: null != (r = t.imageDimensions) ? r : e.imageDimensions,
                cropDimensions: null != (n = t.cropDimensions) ? n : e.cropDimensions,
                dragBoundaries: null != (i = t.dragBoundaries) ? i : e.dragBoundaries,
                hasImageEdits: N({
                    zoomRatio: e.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            });
        case "SET_IMAGE_ZOOM_RATIO":
            return _(I({}, e), {
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
            return _(I({}, e), {
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: null != (a = t.imageDimensions) ? a : e.imageDimensions,
                cropDimensions: null != (o = t.cropDimensions) ? o : e.cropDimensions,
                dragBoundaries: null != (s = t.dragBoundaries) ? s : e.dragBoundaries,
                hasImageEdits: !1,
            });
        default:
            return (0, A.vE)(t);
    }
}
function j(e) {
    let {
            file: t,
            imageUri: r,
            originalAsset: a,
            transitionState: A,
            onCrop: O,
            onClose: _,
            uploadType: N = T.pC.AVATAR,
            showUpsellHeader: j = !1,
            analyticsPage: k,
        } = e,
        B = i.useRef(x),
        M = i.useRef(null),
        z = i.useRef(null),
        [P, L] = i.useReducer(S, G),
        {
            cropDimensions: V,
            dragBoundaries: H,
            imageDimensions: U,
            imageRotation: X,
            zoomRatio: Z,
            startingCoordinates: F,
            isDragging: K,
            hasImageEdits: Y,
        } = P,
        [q, W] = i.useState(!1),
        [Q, $] = i.useState(!1),
        [J, ee] = i.useState(0),
        { analyticsLocations: et, newestAnalyticsLocation: er } = (0, g.ZP)(m.Z.IMAGE_CROPPING_MODAL),
        { isGIF: en, isCheckingAnimation: ei, isEditableAnimatedImage: ea } = (0, D.T)(t),
        eo = Q || q || ei;
    i.useEffect(() => {
        en &&
            j &&
            f.default.track(y.rMx.OPEN_MODAL, {
                type: y.jXE.CROP_GIF_MODAL,
                location: { page: k },
                location_stack: et,
                upload_type: N,
            });
    }, [j, k, en, et, N]);
    let es = i.useCallback(
            (e, t, r, n) => {
                (B.current = (0, R.U$)(e, t, r)),
                    null != M.current &&
                        (M.current.style.transform = "translate3d("
                            .concat(B.current.x, "px, ")
                            .concat(B.current.y, "px, 0) rotate(")
                            .concat(n, "deg)"));
            },
            [M],
        ),
        el = i.useCallback(() => {
            if (null == M.current || Z > 1) return;
            let { width: e, height: t } = M.current.getBoundingClientRect(),
                { width: r, height: n } = (0, R.Es)(N, e, t),
                i = (0, R.AK)(N, r, n, t),
                a = (0, R.kH)(r, n, i);
            L({
                type: "SET_DIMENSIONS",
                imageDimensions: {
                    width: r,
                    height: n,
                },
                cropDimensions: i,
                dragBoundaries: a,
            });
        }, [N, Z]),
        ec = i.useCallback((e) => {
            L({
                type: "START_DRAGGING_IMAGE",
                startingCoordinates: {
                    x: e.clientX - B.current.x,
                    y: e.clientY - B.current.y,
                },
            });
        }, []),
        eu = i.useCallback(
            (e) => {
                let { x: t, y: r } = B.current;
                if (K && (e.clientX !== t || e.clientY !== r)) es(e.clientX - F.x, e.clientY - F.y, H, X);
            },
            [H, X, K, F.x, F.y, es],
        ),
        ed = i.useCallback(() => {
            L({
                type: "STOP_DRAGGING_IMAGE",
                imageTransformCoordinates: B.current,
            });
        }, []),
        em = i.useCallback(
            (e) => {
                if (null == U) return;
                let { width: t, height: r } = U,
                    n = (0, R.kH)(t * e, r * e, V),
                    { x: i, y: a } = B.current;
                ((0, s.inRange)(i, n.right, n.left) && (0, s.inRange)(a, n.top, n.bottom)) || es(i, a, n, X),
                    L({
                        type: "SET_IMAGE_ZOOM_RATIO",
                        zoomRatio: e,
                        dragBoundaries: n,
                        imageTransformCoordinates: B.current,
                    });
            },
            [V, U, X, es],
        ),
        eg = i.useCallback(
            (e, t) => {
                let { width: r, height: n } = e,
                    { width: i, height: a } = (0, R.Es)(N, n, r),
                    o = (0, R.AK)(N, i, a, r),
                    s = (0, R.kH)(i * t, a * t, o);
                return {
                    newImageDimensions: {
                        width: i,
                        height: a,
                    },
                    newCropDimensions: o,
                    newDragBoundaries: s,
                };
            },
            [N],
        ),
        eh = i.useCallback(() => {
            var e;
            if (null == M.current || null == U) return;
            let t = (X + 90) % 360,
                { x: r, y: n } =
                    ((e = B.current.x),
                    {
                        x: -B.current.y,
                        y: e,
                    });
            if (U.width !== U.height) {
                let { newImageDimensions: e, newCropDimensions: i, newDragBoundaries: a } = eg(U, Z);
                es(r, n, a, t),
                    L({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: B.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: i,
                        dragBoundaries: a,
                    });
            } else
                es(r, n, H, t),
                    L({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: B.current,
                        imageRotation: t,
                    });
        }, [H, eg, U, X, es, Z]),
        ep = i.useCallback(() => {
            if (null != M.current && null != U) {
                if (U.width !== U.height && (X - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: r } = eg(U, 1);
                    L({
                        type: "RESET",
                        imageDimensions: e,
                        cropDimensions: t,
                        dragBoundaries: r,
                    }),
                        es(0, 0, r, 0);
                } else {
                    let e = (0, R.kH)(+U.width, +U.height, V);
                    L({
                        type: "RESET",
                        dragBoundaries: e,
                    }),
                        es(0, 0, e, 0);
                }
                ee((e) => e + 1);
            }
        }, [V, eg, U, X, es]),
        eE = i.useCallback(() => {
            let e = v(N);
            return e.width !== e.height;
        }, [N]),
        eC = i.useCallback(() => {
            if (null == U) return {};
            let e = U.width / U.height,
                t = eE() && e > T.MY ? V.height / U.height : 1,
                { width: r, height: n } = ((e, t) => {
                    let { width: r, height: n } = e;
                    return t % 180 != 0
                        ? {
                              width: n,
                              height: r,
                          }
                        : {
                              width: r,
                              height: n,
                          };
                })(U, X);
            return {
                width: r * Z * t,
                minWidth: r * Z * t,
                height: n * Z * t,
                minHeight: n * Z * t,
            };
        }, [V.height, U, X, eE, Z]),
        ef = i.useCallback(async () => {
            let e;
            if (null == M.current) return;
            $(!0);
            let r = M.current,
                n = v(N);
            if (ea)
                try {
                    let { result: i, cancelFn: a } = await (0, R.GU)({
                        file: t,
                        image: r,
                        cropDimensions: V,
                        cropOriginCoordinates: B.current,
                        maxDimensions: n,
                        imageRotation: X,
                    });
                    (z.current = a), (e = await i), (z.current = null);
                } catch (e) {
                    var i;
                    throw (
                        (null == (i = z.current) || i.call(z),
                        (z.current = null),
                        Error("Error cropping animated image: ".concat(e instanceof Error ? e.toString() : String(e))))
                    );
                }
            else
                e = (0, l.PT)({
                    image: r,
                    cropDimensions: V,
                    cropOriginCoordinates: B.current,
                    maxDimensions: n,
                    imageRotation: X,
                });
            await O({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: r } = e;
                    return r ? (t ? C.q.EDITED_ARCHIVED_ASSET : C.q.ARCHIVED_ASSET) : C.q.NEW_ASSET;
                })({
                    hasImageEdits: Y,
                    hasOriginalAsset: null != a,
                }),
                imageUri: e,
                file: t,
                originalAsset: a,
            }),
                $(!1),
                await _();
        }, [V, t, Y, X, ea, _, O, a, N]),
        eA = i.useCallback(async () => {
            if (null != z.current) {
                z.current(), (z.current = null), $(!1);
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
            if (null != z.current)
                return () => {
                    var e;
                    return null == (e = z.current) ? void 0 : e.call(z);
                };
        }, []);
    let eR = N === T.pC.AVATAR || N === T.pC.BANNER,
        eD = (0, p.M)(!eR);
    return (0, n.jsx)(g.Gt, {
        value: et,
        children: (0, n.jsxs)(c.Modal, {
            title: b.intl.string(b.t.DxAYCF),
            size: "md",
            actionBarInput: (0, n.jsx)(d.Avr, {
                text: b.intl.string(b.t.yBZMsQ),
                textVariant: "text-md/medium",
                onClick: ep,
                disabled: !Y,
            }),
            actions: [
                {
                    text: b.intl.string(b.t["9TG40l"]),
                    onClick: eA,
                    variant: "secondary",
                },
                {
                    text: b.intl.string(b.t.ZSHmKD),
                    onClick: ef,
                    variant: "primary",
                    loading: Q,
                    disabled: eo,
                },
            ],
            transitionState: A,
            onClose: _,
            children: [
                j &&
                    !eD &&
                    (0, n.jsx)(h.Z, {
                        type: N,
                        analyticsPage: k,
                        analyticsSection: y.jXE.CROP_GIF_MODAL,
                        isGIF: en,
                        banner: r,
                    }),
                (0, n.jsxs)("div", {
                    className: w.modalContent,
                    children: [
                        (0, n.jsx)("div", {
                            className: w.editingContainer,
                            children: q
                                ? (0, n.jsxs)("div", {
                                      className: w.errorContainer,
                                      children: [
                                          (0, n.jsx)(d.Mgn, {
                                              size: "sm",
                                              color: d.TVs.colors.TEXT_FEEDBACK_CRITICAL,
                                          }),
                                          (0, n.jsx)(d.Text, {
                                              variant: "text-md/normal",
                                              color: "text-feedback-critical",
                                              children: b.intl.string(b.t["+ITMYX"]),
                                          }),
                                      ],
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("img", {
                                              onLoad: el,
                                              onError: () => W(!0),
                                              style: I(
                                                  {
                                                      opacity: +(null != U),
                                                      transform: "translate3d("
                                                          .concat(B.current.x, "px, ")
                                                          .concat(B.current.y, "px, 0) rotate(")
                                                          .concat(X, "deg)"),
                                                  },
                                                  eC(),
                                              ),
                                              className: o()(Q ? w.imageDisabled : w.imageEnabled, w.rotationSupported),
                                              src: r,
                                              crossOrigin: "anonymous",
                                              alt: "avatar",
                                              ref: M,
                                              onMouseDown: ec,
                                              draggable: !1,
                                          }),
                                          (0, n.jsx)("div", {
                                              className: (function (e) {
                                                  switch (e) {
                                                      case T.pC.GUILD_ICON:
                                                          return w.overlayGuildIcon;
                                                      case T.pC.BANNER:
                                                      case T.pC.GUILD_BANNER:
                                                      case T.pC.VIDEO_BACKGROUND:
                                                      case T.pC.SCHEDULED_EVENT_IMAGE:
                                                      case T.pC.HOME_HEADER:
                                                          return w.overlayBanner;
                                                      case T.pC.AVATAR:
                                                      case T.pC.AVATAR_DECORATION:
                                                          return w.overlayAvatar;
                                                  }
                                              })(N),
                                              style: {
                                                  opacity: +(null != U),
                                                  width: V.width,
                                                  height: V.height,
                                              },
                                          }),
                                      ],
                                  }),
                        }),
                        (0, n.jsxs)("div", {
                            className: w.toolsContainer,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: w.zoomControls,
                                    children: [
                                        (0, n.jsx)(d.XBm, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: w.zoomIcon,
                                        }),
                                        (0, n.jsx)(
                                            d.iRW,
                                            {
                                                className: w.slider,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: em,
                                                disabled: eo,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                "aria-label": b.intl.string(b.t.dnvZSg),
                                            },
                                            J,
                                        ),
                                        (0, n.jsx)(d.XBm, {
                                            size: "md",
                                            color: "currentColor",
                                            className: w.zoomIcon,
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(u.u, {
                                    text: b.intl.string(b.t.E36Wd4),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(d.P3F, {
                                        className: o()(w.rotateButton, { [w.disabled]: eo }),
                                        onClick: eo ? void 0 : eh,
                                        "aria-label": b.intl.string(b.t.LzFiKG),
                                        "aria-disabled": eo,
                                        children: (0, n.jsx)(d.Vk2, {
                                            size: "md",
                                            color: "currentColor",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        j &&
                            eD &&
                            (0, n.jsx)(E.Z, {
                                uploadType: N,
                                analyticsSource: er,
                                showUpsell: !0,
                                position: "inline",
                                className: w.premiumUpsell,
                                showShadow: !1,
                            }),
                    ],
                }),
            ],
        }),
    });
}
