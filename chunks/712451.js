r.d(t, { default: () => P }),
    r(388685),
    r(410992),
    r(227481),
    r(730884),
    r(20464),
    r(341884),
    r(364341),
    r(629680),
    r(505025),
    r(918970),
    r(121784),
    r(644351),
    r(146733),
    r(415506);
var n = r(54381),
    a = r(473749),
    i = r(120356),
    o = r.n(i),
    s = r(392711),
    l = r(36793),
    c = r(793030),
    u = r(681715),
    m = r(481060),
    d = r(100527),
    g = r(906732),
    h = r(488499),
    f = r(222062),
    E = r(530329),
    p = r(72703),
    A = r(626135),
    C = r(823379),
    w = r(197712),
    y = r(76674),
    _ = r(586818),
    b = r(486324),
    D = r(981631),
    R = r(678916),
    O = r(388032),
    I = r(201313);
function T(e) {
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
function N(e, t) {
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
let M = {
    x: 0,
    y: 0,
};
function G(e) {
    switch (e) {
        case b.pC.BANNER:
            return {
                height: b.f,
                width: b.L0,
            };
        case b.pC.VIDEO_BACKGROUND:
            return R.HE;
        case b.pC.AVATAR:
        case b.pC.AVATAR_DECORATION:
        case b.pC.GUILD_ICON:
            return {
                height: D.dGM,
                width: D.dGM,
            };
        case b.pC.GUILD_BANNER:
            return {
                height: b._T,
                width: b.X_,
            };
        case b.pC.SCHEDULED_EVENT_IMAGE:
            return {
                height: b.xT,
                width: b.d6,
            };
        case b.pC.HOME_HEADER:
            return {
                height: b.Uo,
                width: b.N8,
            };
        default:
            return (0, C.vE)(e);
    }
}
function v(e) {
    let { zoomRatio: t, imageRotation: r, imageTransformCoordinates: n } = e;
    return 1 !== t || 0 !== r || 0 !== n.x || 0 !== n.y;
}
let x = {
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
    imageTransformCoordinates: M,
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
    var r, n, a, i, o, s;
    switch (t.type) {
        case "SET_DIMENSIONS":
            return N(T({}, e), {
                imageDimensions: t.imageDimensions,
                cropDimensions: t.cropDimensions,
                dragBoundaries: t.dragBoundaries,
            });
        case "START_DRAGGING_IMAGE":
            return N(T({}, e), {
                startingCoordinates: t.startingCoordinates,
                isDragging: !0,
            });
        case "STOP_DRAGGING_IMAGE":
            return N(T({}, e), {
                isDragging: !1,
                hasImageEdits: v({
                    zoomRatio: e.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            });
        case "ROTATE_IMAGE":
            return N(T({}, e), {
                imageRotation: t.imageRotation,
                imageTransformCoordinates: t.imageTransformCoordinates,
                imageDimensions: null != (r = t.imageDimensions) ? r : e.imageDimensions,
                cropDimensions: null != (n = t.cropDimensions) ? n : e.cropDimensions,
                dragBoundaries: null != (a = t.dragBoundaries) ? a : e.dragBoundaries,
                hasImageEdits: v({
                    zoomRatio: e.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            });
        case "SET_IMAGE_ZOOM_RATIO":
            return N(T({}, e), {
                imageTransformCoordinates: t.imageTransformCoordinates,
                zoomRatio: t.zoomRatio,
                dragBoundaries: t.dragBoundaries,
                hasImageEdits: v({
                    zoomRatio: t.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            });
        case "RESET":
            return N(T({}, e), {
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: null != (i = t.imageDimensions) ? i : e.imageDimensions,
                cropDimensions: null != (o = t.cropDimensions) ? o : e.cropDimensions,
                dragBoundaries: null != (s = t.dragBoundaries) ? s : e.dragBoundaries,
                hasImageEdits: !1,
            });
        default:
            return (0, C.vE)(t);
    }
}
function P(e) {
    let {
            file: t,
            imageUri: r,
            originalAsset: i,
            transitionState: C,
            onCrop: R,
            onClose: N,
            uploadType: v = b.pC.AVATAR,
            showUpsellHeader: P = !1,
            analyticsPage: B,
        } = e,
        U = a.useRef(M),
        j = a.useRef(null),
        k = a.useRef(null),
        [H, L] = a.useReducer(S, x),
        {
            cropDimensions: V,
            dragBoundaries: W,
            imageDimensions: z,
            imageRotation: F,
            zoomRatio: X,
            startingCoordinates: Z,
            isDragging: K,
            hasImageEdits: Y,
        } = H,
        [J, q] = a.useState(!1),
        [$, Q] = a.useState(!1),
        [ee, et] = a.useState(0),
        { analyticsLocations: er, newestAnalyticsLocation: en } = (0, g.ZP)(d.Z.IMAGE_CROPPING_MODAL),
        ea = "image/gif" === t.type,
        ei = "image/webp" === t.type,
        [eo, es] = a.useState(!1),
        [el, ec] = a.useState(ei),
        eu = $ || J || el;
    a.useEffect(() => {
        ea
            ? (0, y.Z)()
            : ei &&
              (async () => {
                  try {
                      let e = await t.arrayBuffer(),
                          r = new Uint8Array(e),
                          n = await (0, _.b0)(r);
                      es(n), n && (0, _.GS)();
                  } finally {
                      ec(!1);
                  }
              })();
    }, [t, ea, ei]),
        a.useEffect(() => {
            ea &&
                P &&
                A.default.track(D.rMx.OPEN_MODAL, {
                    type: D.jXE.CROP_GIF_MODAL,
                    location: { page: B },
                    location_stack: er,
                    upload_type: v,
                });
        }, [P, B, ea, er, v]);
    let em = a.useCallback(
            (e, t, r, n) => {
                (U.current = (0, w.U$)(e, t, r)),
                    null != j.current &&
                        (j.current.style.transform = "translate3d("
                            .concat(U.current.x, "px, ")
                            .concat(U.current.y, "px, 0) rotate(")
                            .concat(n, "deg)"));
            },
            [j],
        ),
        ed = a.useCallback(() => {
            if (null == j.current || X > 1) return;
            let { width: e, height: t } = j.current.getBoundingClientRect(),
                { width: r, height: n } = (0, w.Es)(v, e, t),
                a = (0, w.AK)(v, r, n, t),
                i = (0, w.kH)(r, n, a);
            L({
                type: "SET_DIMENSIONS",
                imageDimensions: {
                    width: r,
                    height: n,
                },
                cropDimensions: a,
                dragBoundaries: i,
            });
        }, [v, X]),
        eg = a.useCallback((e) => {
            L({
                type: "START_DRAGGING_IMAGE",
                startingCoordinates: {
                    x: e.clientX - U.current.x,
                    y: e.clientY - U.current.y,
                },
            });
        }, []),
        eh = a.useCallback(
            (e) => {
                let { x: t, y: r } = U.current;
                if (K && (e.clientX !== t || e.clientY !== r)) em(e.clientX - Z.x, e.clientY - Z.y, W, F);
            },
            [W, F, K, Z.x, Z.y, em],
        ),
        ef = a.useCallback(() => {
            L({
                type: "STOP_DRAGGING_IMAGE",
                imageTransformCoordinates: U.current,
            });
        }, []),
        eE = a.useCallback(
            (e) => {
                if (null == z) return;
                let { width: t, height: r } = z,
                    n = (0, w.kH)(t * e, r * e, V),
                    { x: a, y: i } = U.current;
                ((0, s.inRange)(a, n.right, n.left) && (0, s.inRange)(i, n.top, n.bottom)) || em(a, i, n, F),
                    L({
                        type: "SET_IMAGE_ZOOM_RATIO",
                        zoomRatio: e,
                        dragBoundaries: n,
                        imageTransformCoordinates: U.current,
                    });
            },
            [V, z, F, em],
        ),
        ep = a.useCallback(
            (e, t) => {
                let { width: r, height: n } = e,
                    { width: a, height: i } = (0, w.Es)(v, n, r),
                    o = (0, w.AK)(v, a, i, r),
                    s = (0, w.kH)(a * t, i * t, o);
                return {
                    newImageDimensions: {
                        width: a,
                        height: i,
                    },
                    newCropDimensions: o,
                    newDragBoundaries: s,
                };
            },
            [v],
        ),
        eA = a.useCallback(() => {
            var e;
            if (null == j.current || null == z) return;
            let t = (F + 90) % 360,
                { x: r, y: n } =
                    ((e = U.current.x),
                    {
                        x: -U.current.y,
                        y: e,
                    });
            if (z.width !== z.height) {
                let { newImageDimensions: e, newCropDimensions: a, newDragBoundaries: i } = ep(z, X);
                em(r, n, i, t),
                    L({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: U.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: a,
                        dragBoundaries: i,
                    });
            } else
                em(r, n, W, t),
                    L({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: U.current,
                        imageRotation: t,
                    });
        }, [W, ep, z, F, em, X]),
        eC = a.useCallback(() => {
            if (null != j.current && null != z) {
                if (z.width !== z.height && (F - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: r } = ep(z, 1);
                    L({
                        type: "RESET",
                        imageDimensions: e,
                        cropDimensions: t,
                        dragBoundaries: r,
                    }),
                        em(0, 0, r, 0);
                } else {
                    let e = (0, w.kH)(+z.width, +z.height, V);
                    L({
                        type: "RESET",
                        dragBoundaries: e,
                    }),
                        em(0, 0, e, 0);
                }
                et((e) => e + 1);
            }
        }, [V, ep, z, F, em]),
        ew = a.useCallback(() => {
            let e = G(v);
            return e.width !== e.height;
        }, [v]),
        ey = a.useCallback(() => {
            if (null == z) return {};
            let e = z.width / z.height,
                t = ew() && e > b.MY ? V.height / z.height : 1,
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
                })(z, F);
            return {
                width: r * X * t,
                minWidth: r * X * t,
                height: n * X * t,
                minHeight: n * X * t,
            };
        }, [V.height, z, F, ew, X]),
        e_ = a.useCallback(async () => {
            let e;
            if (null == j.current) return;
            Q(!0);
            let r = j.current,
                n = G(v);
            if (ea || eo)
                try {
                    let { result: a, cancelFn: i } = await (0, w.GU)({
                        file: t,
                        image: r,
                        cropDimensions: V,
                        cropOriginCoordinates: U.current,
                        maxDimensions: n,
                        imageRotation: F,
                    });
                    (k.current = i), (e = await a), (k.current = null);
                } catch (e) {
                    var a;
                    throw (
                        (null == (a = k.current) || a.call(k),
                        (k.current = null),
                        Error("Error cropping animated image: ".concat(e instanceof Error ? e.toString() : String(e))))
                    );
                }
            else
                e = (0, l.PT)({
                    image: r,
                    cropDimensions: V,
                    cropOriginCoordinates: U.current,
                    maxDimensions: n,
                    imageRotation: F,
                });
            await R({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: r } = e;
                    return r ? (t ? p.q.EDITED_ARCHIVED_ASSET : p.q.ARCHIVED_ASSET) : p.q.NEW_ASSET;
                })({
                    hasImageEdits: Y,
                    hasOriginalAsset: null != i,
                }),
                imageUri: e,
                file: t,
                originalAsset: i,
            }),
                Q(!1),
                await N();
        }, [V, t, Y, F, ea, eo, N, R, i, v]),
        eb = a.useCallback(async () => {
            if (null != k.current) {
                k.current(), (k.current = null), Q(!1);
                return;
            }
            await N();
        }, [N]);
    a.useEffect(
        () => (
            window.addEventListener("mouseup", ef),
            window.addEventListener("resize", ed),
            () => {
                window.removeEventListener("mouseup", ef), window.removeEventListener("resize", ed);
            }
        ),
        [ed, ef],
    ),
        a.useEffect(() => {
            if (K) return window.addEventListener("mousemove", eh), () => window.removeEventListener("mousemove", eh);
        }, [eh, K]),
        a.useEffect(() => {
            if (null != k.current)
                return () => {
                    var e;
                    return null == (e = k.current) ? void 0 : e.call(k);
                };
        }, []);
    let eD = v === b.pC.AVATAR || v === b.pC.BANNER,
        eR = (0, f.M)(!eD);
    return (0, n.jsx)(g.Gt, {
        value: er,
        children: (0, n.jsxs)(c.Modal, {
            title: O.intl.string(O.t.DxAYCF),
            size: "md",
            actionBarInput: (0, n.jsx)(m.Avr, {
                text: O.intl.string(O.t.yBZMsQ),
                textVariant: "text-md/medium",
                onClick: eC,
                disabled: !Y,
            }),
            actions: [
                {
                    text: O.intl.string(O.t["9TG40l"]),
                    onClick: eb,
                    variant: "secondary",
                },
                {
                    text: O.intl.string(O.t.ZSHmKD),
                    onClick: e_,
                    variant: "primary",
                    loading: $,
                    disabled: eu,
                },
            ],
            transitionState: C,
            onClose: N,
            children: [
                P &&
                    !eR &&
                    (0, n.jsx)(h.Z, {
                        type: v,
                        analyticsPage: B,
                        analyticsSection: D.jXE.CROP_GIF_MODAL,
                        isGIF: ea,
                        banner: r,
                    }),
                (0, n.jsxs)("div", {
                    className: I.modalContent,
                    children: [
                        (0, n.jsx)("div", {
                            className: I.editingContainer,
                            children: J
                                ? (0, n.jsxs)("div", {
                                      className: I.errorContainer,
                                      children: [
                                          (0, n.jsx)(m.Mgn, {
                                              size: "sm",
                                              color: m.TVs.colors.TEXT_FEEDBACK_CRITICAL,
                                          }),
                                          (0, n.jsx)(m.Text, {
                                              variant: "text-md/normal",
                                              color: "text-feedback-critical",
                                              children: O.intl.string(O.t["+ITMYX"]),
                                          }),
                                      ],
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("img", {
                                              onLoad: ed,
                                              onError: () => q(!0),
                                              style: T(
                                                  {
                                                      opacity: +(null != z),
                                                      transform: "translate3d("
                                                          .concat(U.current.x, "px, ")
                                                          .concat(U.current.y, "px, 0) rotate(")
                                                          .concat(F, "deg)"),
                                                  },
                                                  ey(),
                                              ),
                                              className: o()($ ? I.imageDisabled : I.imageEnabled, I.rotationSupported),
                                              src: r,
                                              crossOrigin: "anonymous",
                                              alt: "avatar",
                                              ref: j,
                                              onMouseDown: eg,
                                              draggable: !1,
                                          }),
                                          (0, n.jsx)("div", {
                                              className: (function (e) {
                                                  switch (e) {
                                                      case b.pC.GUILD_ICON:
                                                          return I.overlayGuildIcon;
                                                      case b.pC.BANNER:
                                                      case b.pC.GUILD_BANNER:
                                                      case b.pC.VIDEO_BACKGROUND:
                                                      case b.pC.SCHEDULED_EVENT_IMAGE:
                                                      case b.pC.HOME_HEADER:
                                                          return I.overlayBanner;
                                                      case b.pC.AVATAR:
                                                      case b.pC.AVATAR_DECORATION:
                                                          return I.overlayAvatar;
                                                  }
                                              })(v),
                                              style: {
                                                  opacity: +(null != z),
                                                  width: V.width,
                                                  height: V.height,
                                              },
                                          }),
                                      ],
                                  }),
                        }),
                        (0, n.jsxs)("div", {
                            className: I.toolsContainer,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: I.zoomControls,
                                    children: [
                                        (0, n.jsx)(m.XBm, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: I.zoomIcon,
                                        }),
                                        (0, n.jsx)(
                                            m.iRW,
                                            {
                                                className: I.slider,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: eE,
                                                disabled: eu,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                "aria-label": O.intl.string(O.t.dnvZSg),
                                            },
                                            ee,
                                        ),
                                        (0, n.jsx)(m.XBm, {
                                            size: "md",
                                            color: "currentColor",
                                            className: I.zoomIcon,
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(u.u, {
                                    text: O.intl.string(O.t.E36Wd4),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(m.P3F, {
                                        className: o()(I.rotateButton, { [I.disabled]: eu }),
                                        onClick: eu ? void 0 : eA,
                                        "aria-label": O.intl.string(O.t.LzFiKG),
                                        "aria-disabled": eu,
                                        children: (0, n.jsx)(m.Vk2, {
                                            size: "md",
                                            color: "currentColor",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        P &&
                            eR &&
                            (0, n.jsx)(E.Z, {
                                uploadType: v,
                                analyticsSource: en,
                                showUpsell: !0,
                                position: "inline",
                                className: I.premiumUpsell,
                                showShadow: !1,
                            }),
                    ],
                }),
            ],
        }),
    });
}
