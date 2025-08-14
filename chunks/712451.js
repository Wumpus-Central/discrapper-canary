r.d(t, { default: () => v }), r(388685), r(415506);
var n = r(255367),
    i = r(73800),
    a = r(120356),
    o = r.n(a),
    s = r(392711),
    l = r(36793),
    c = r(755721),
    u = r(481060),
    d = r(100527),
    m = r(906732),
    g = r(488499),
    h = r(222062),
    p = r(530329),
    E = r(72703),
    C = r(626135),
    f = r(823379),
    A = r(197712),
    R = r(511004),
    O = r(486324),
    D = r(981631),
    y = r(678916),
    I = r(388032),
    w = r(932173);
function N(e) {
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
function T(e, t) {
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
let _ = {
    x: 0,
    y: 0,
};
function x(e) {
    switch (e) {
        case O.pC.BANNER:
            return {
                height: O.f,
                width: O.L0,
            };
        case O.pC.VIDEO_BACKGROUND:
            return y.HE;
        case O.pC.AVATAR:
        case O.pC.AVATAR_DECORATION:
        case O.pC.GUILD_ICON:
            return {
                height: D.dGM,
                width: D.dGM,
            };
        case O.pC.GUILD_BANNER:
            return {
                height: O._T,
                width: O.X_,
            };
        case O.pC.SCHEDULED_EVENT_IMAGE:
            return {
                height: O.xT,
                width: O.d6,
            };
        case O.pC.HOME_HEADER:
            return {
                height: O.Uo,
                width: O.N8,
            };
        default:
            return (0, f.vE)(e);
    }
}
function b(e) {
    let { zoomRatio: t, imageRotation: r, imageTransformCoordinates: n } = e;
    return 1 !== t || 0 !== r || 0 !== n.x || 0 !== n.y;
}
let M = {
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
    imageTransformCoordinates: _,
    imageRotation: 0,
    zoomRatio: 1,
    startingCoordinates: {
        x: 0,
        y: 0,
    },
    isDragging: !1,
    hasImageEdits: !1,
};
function G(e, t) {
    var r, n, i, a, o, s;
    switch (t.type) {
        case "SET_DIMENSIONS":
            return T(N({}, e), {
                imageDimensions: t.imageDimensions,
                cropDimensions: t.cropDimensions,
                dragBoundaries: t.dragBoundaries,
            });
        case "START_DRAGGING_IMAGE":
            return T(N({}, e), {
                startingCoordinates: t.startingCoordinates,
                isDragging: !0,
            });
        case "STOP_DRAGGING_IMAGE":
            return T(N({}, e), {
                isDragging: !1,
                hasImageEdits: b({
                    zoomRatio: e.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            });
        case "ROTATE_IMAGE":
            return T(N({}, e), {
                imageRotation: t.imageRotation,
                imageTransformCoordinates: t.imageTransformCoordinates,
                imageDimensions: null != (r = t.imageDimensions) ? r : e.imageDimensions,
                cropDimensions: null != (n = t.cropDimensions) ? n : e.cropDimensions,
                dragBoundaries: null != (i = t.dragBoundaries) ? i : e.dragBoundaries,
                hasImageEdits: b({
                    zoomRatio: e.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            });
        case "SET_IMAGE_ZOOM_RATIO":
            return T(N({}, e), {
                imageTransformCoordinates: t.imageTransformCoordinates,
                zoomRatio: t.zoomRatio,
                dragBoundaries: t.dragBoundaries,
                hasImageEdits: b({
                    zoomRatio: t.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            });
        case "RESET":
            return T(N({}, e), {
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: null != (a = t.imageDimensions) ? a : e.imageDimensions,
                cropDimensions: null != (o = t.cropDimensions) ? o : e.cropDimensions,
                dragBoundaries: null != (s = t.dragBoundaries) ? s : e.dragBoundaries,
                hasImageEdits: !1,
            });
        default:
            return (0, f.vE)(t);
    }
}
function v(e) {
    let {
            file: t,
            imageUri: r,
            originalAsset: a,
            transitionState: f,
            onCrop: y,
            onClose: b,
            uploadType: v = O.pC.AVATAR,
            showUpsellHeader: S = !1,
            analyticsPage: j,
        } = e,
        k = i.useRef(_),
        B = i.useRef(null),
        z = i.useRef(null),
        [P, L] = i.useReducer(G, M),
        {
            cropDimensions: U,
            dragBoundaries: V,
            imageDimensions: H,
            imageRotation: F,
            zoomRatio: X,
            startingCoordinates: K,
            isDragging: Y,
            hasImageEdits: Z,
        } = P,
        [W, q] = i.useState(!1),
        [$, J] = i.useState(!1),
        [Q, ee] = i.useState(0),
        { analyticsLocations: et, newestAnalyticsLocation: er } = (0, m.ZP)(d.Z.IMAGE_CROPPING_MODAL),
        en = "image/gif" === t.type;
    i.useEffect(() => {
        (0, R.Z)();
    }, []),
        i.useEffect(() => {
            en &&
                S &&
                C.default.track(D.rMx.OPEN_MODAL, {
                    type: D.jXE.CROP_GIF_MODAL,
                    location: { page: j },
                    location_stack: et,
                    upload_type: v,
                });
        }, [S, j, en, et, v]);
    let ei = i.useCallback(
            (e, t, r, n) => {
                (k.current = (0, A.U$)(e, t, r)),
                    null != B.current &&
                        (B.current.style.transform = "translate3d("
                            .concat(k.current.x, "px, ")
                            .concat(k.current.y, "px, 0) rotate(")
                            .concat(n, "deg)"));
            },
            [B],
        ),
        ea = i.useCallback(() => {
            if (null == B.current || X > 1) return;
            let { width: e, height: t } = B.current.getBoundingClientRect(),
                { width: r, height: n } = (0, A.Es)(v, e, t),
                i = (0, A.AK)(v, r, n, t),
                a = (0, A.kH)(r, n, i);
            L({
                type: "SET_DIMENSIONS",
                imageDimensions: {
                    width: r,
                    height: n,
                },
                cropDimensions: i,
                dragBoundaries: a,
            });
        }, [v, X]),
        eo = i.useCallback((e) => {
            L({
                type: "START_DRAGGING_IMAGE",
                startingCoordinates: {
                    x: e.clientX - k.current.x,
                    y: e.clientY - k.current.y,
                },
            });
        }, []),
        es = i.useCallback(
            (e) => {
                let { x: t, y: r } = k.current;
                if (Y && (e.clientX !== t || e.clientY !== r)) ei(e.clientX - K.x, e.clientY - K.y, V, F);
            },
            [V, F, Y, K.x, K.y, ei],
        ),
        el = i.useCallback(() => {
            L({
                type: "STOP_DRAGGING_IMAGE",
                imageTransformCoordinates: k.current,
            });
        }, []),
        ec = i.useCallback(
            (e) => {
                if (null == H) return;
                let { width: t, height: r } = H,
                    n = (0, A.kH)(t * e, r * e, U),
                    { x: i, y: a } = k.current;
                ((0, s.inRange)(i, n.right, n.left) && (0, s.inRange)(a, n.top, n.bottom)) || ei(i, a, n, F),
                    L({
                        type: "SET_IMAGE_ZOOM_RATIO",
                        zoomRatio: e,
                        dragBoundaries: n,
                        imageTransformCoordinates: k.current,
                    });
            },
            [U, H, F, ei],
        ),
        eu = i.useCallback(
            (e, t) => {
                let { width: r, height: n } = e,
                    { width: i, height: a } = (0, A.Es)(v, n, r),
                    o = (0, A.AK)(v, i, a, r),
                    s = (0, A.kH)(i * t, a * t, o);
                return {
                    newImageDimensions: {
                        width: i,
                        height: a,
                    },
                    newCropDimensions: o,
                    newDragBoundaries: s,
                };
            },
            [v],
        ),
        ed = i.useCallback(() => {
            var e;
            if (null == B.current || null == H) return;
            let t = (F + 90) % 360,
                { x: r, y: n } =
                    ((e = k.current.x),
                    {
                        x: -k.current.y,
                        y: e,
                    });
            if (H.width !== H.height) {
                let { newImageDimensions: e, newCropDimensions: i, newDragBoundaries: a } = eu(H, X);
                ei(r, n, a, t),
                    L({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: k.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: i,
                        dragBoundaries: a,
                    });
            } else
                ei(r, n, V, t),
                    L({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: k.current,
                        imageRotation: t,
                    });
        }, [V, eu, H, F, ei, X]),
        em = i.useCallback(() => {
            if (null != B.current && null != H) {
                if (H.width !== H.height && (F - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: r } = eu(H, 1);
                    L({
                        type: "RESET",
                        imageDimensions: e,
                        cropDimensions: t,
                        dragBoundaries: r,
                    }),
                        ei(0, 0, r, 0);
                } else {
                    let e = (0, A.kH)(+H.width, +H.height, U);
                    L({
                        type: "RESET",
                        dragBoundaries: e,
                    }),
                        ei(0, 0, e, 0);
                }
                ee((e) => e + 1);
            }
        }, [U, eu, H, F, ei]),
        eg = i.useCallback(() => {
            let e = x(v);
            return e.width !== e.height;
        }, [v]),
        eh = i.useCallback(() => {
            if (null == H) return {};
            let e = H.width / H.height,
                t = eg() && e > O.MY ? U.height / H.height : 1,
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
                })(H, F);
            return {
                width: r * X * t,
                minWidth: r * X * t,
                height: n * X * t,
                minHeight: n * X * t,
            };
        }, [U.height, H, F, eg, X]),
        ep = i.useCallback(async () => {
            let e;
            if (null == B.current) return;
            J(!0);
            let r = B.current,
                n = x(v);
            if (en)
                try {
                    let { result: i, cancelFn: a } = await (0, A.$p)({
                        file: t,
                        image: r,
                        cropDimensions: U,
                        cropOriginCoordinates: k.current,
                        maxDimensions: n,
                        imageRotation: F,
                    });
                    (z.current = a), (e = await i), (z.current = null);
                } catch (e) {
                    var i;
                    throw (
                        (null == (i = z.current) || i.call(z),
                        (z.current = null),
                        Error("Error cropping GIF: ".concat(e instanceof Error ? e.toString() : String(e))))
                    );
                }
            else
                e = (0, l.PT)({
                    image: r,
                    cropDimensions: U,
                    cropOriginCoordinates: k.current,
                    maxDimensions: n,
                    imageRotation: F,
                });
            await y({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: r } = e;
                    return r ? (t ? E.q.EDITED_ARCHIVED_ASSET : E.q.ARCHIVED_ASSET) : E.q.NEW_ASSET;
                })({
                    hasImageEdits: Z,
                    hasOriginalAsset: null != a,
                }),
                imageUri: e,
                file: t,
                originalAsset: a,
            }),
                J(!1),
                b();
        }, [U, t, Z, F, en, b, y, a, v]),
        eE = i.useCallback(() => {
            if (null != z.current) {
                z.current(), (z.current = null), J(!1);
                return;
            }
            b();
        }, [b]);
    i.useEffect(
        () => (
            window.addEventListener("mouseup", el),
            window.addEventListener("resize", ea),
            () => {
                window.removeEventListener("mouseup", el), window.removeEventListener("resize", ea);
            }
        ),
        [ea, el],
    ),
        i.useEffect(() => {
            if (Y) return window.addEventListener("mousemove", es), () => window.removeEventListener("mousemove", es);
        }, [es, Y]),
        i.useEffect(() => {
            if (null != z.current)
                return () => {
                    var e;
                    return null == (e = z.current) ? void 0 : e.call(z);
                };
        }, []);
    let eC = v === O.pC.AVATAR || v === O.pC.BANNER,
        ef = (0, h.M)(!eC);
    return (0, n.jsx)(m.Gt, {
        value: et,
        children: (0, n.jsxs)(u.Y0X, {
            transitionState: f,
            size: u.CgR.MEDIUM,
            parentComponent: "ImageEditingModal",
            children: [
                S &&
                    !ef &&
                    (0, n.jsx)(g.Z, {
                        type: v,
                        analyticsPage: j,
                        analyticsSection: D.jXE.CROP_GIF_MODAL,
                        isGIF: en,
                        banner: r,
                    }),
                (0, n.jsxs)(u.xBx, {
                    className: w.modalHeader,
                    separator: !1,
                    children: [
                        (0, n.jsx)(u.X6q, {
                            variant: "heading-lg/semibold",
                            children: I.intl.string(I.t.DxAYCA),
                        }),
                        (0, n.jsx)(u.olH, {
                            onClick: b,
                            className: w.modalCloseButton,
                        }),
                    ],
                }),
                (0, n.jsxs)(u.hzk, {
                    className: w.modalContent,
                    children: [
                        (0, n.jsx)("div", {
                            className: w.editingContainer,
                            children: W
                                ? (0, n.jsxs)("div", {
                                      className: w.errorContainer,
                                      children: [
                                          (0, n.jsx)(u.Mgn, {
                                              size: "sm",
                                              color: u.TVs.colors.TEXT_DANGER,
                                          }),
                                          (0, n.jsx)(u.Text, {
                                              variant: "text-md/normal",
                                              color: "text-danger",
                                              children: I.intl.string(I.t["+ITMYW"]),
                                          }),
                                      ],
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("img", {
                                              onLoad: ea,
                                              onError: () => q(!0),
                                              style: N(
                                                  {
                                                      opacity: +(null != H),
                                                      transform: "translate3d("
                                                          .concat(k.current.x, "px, ")
                                                          .concat(k.current.y, "px, 0) rotate(")
                                                          .concat(F, "deg)"),
                                                  },
                                                  eh(),
                                              ),
                                              className: o()($ ? w.imageDisabled : w.imageEnabled, w.rotationSupported),
                                              src: r,
                                              crossOrigin: "anonymous",
                                              alt: "avatar",
                                              ref: B,
                                              onMouseDown: eo,
                                              draggable: !1,
                                          }),
                                          (0, n.jsx)("div", {
                                              className: (function (e) {
                                                  switch (e) {
                                                      case O.pC.GUILD_ICON:
                                                          return w.overlayGuildIcon;
                                                      case O.pC.BANNER:
                                                      case O.pC.GUILD_BANNER:
                                                      case O.pC.VIDEO_BACKGROUND:
                                                      case O.pC.SCHEDULED_EVENT_IMAGE:
                                                      case O.pC.HOME_HEADER:
                                                          return w.overlayBanner;
                                                      case O.pC.AVATAR:
                                                      case O.pC.AVATAR_DECORATION:
                                                          return w.overlayAvatar;
                                                  }
                                              })(v),
                                              style: {
                                                  opacity: +(null != H),
                                                  width: U.width,
                                                  height: U.height,
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
                                        (0, n.jsx)(u.XBm, {
                                            size: "xxs",
                                            color: "currentColor",
                                            className: w.zoomIcon,
                                        }),
                                        (0, n.jsx)(
                                            u.iRW,
                                            {
                                                className: w.slider,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: ec,
                                                disabled: $ || W,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                "aria-label": I.intl.string(I.t.dnvZSk),
                                            },
                                            Q,
                                        ),
                                        (0, n.jsx)(u.XBm, {
                                            size: "md",
                                            color: "currentColor",
                                            className: w.zoomIcon,
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(u.ua7, {
                                    text: I.intl.string(I.t.E36Wd3),
                                    "aria-label": I.intl.string(I.t.LzFiKC),
                                    children: (e) => {
                                        var { onClick: t } = e,
                                            r = (function (e, t) {
                                                if (null == e) return {};
                                                var r,
                                                    n,
                                                    i = (function (e, t) {
                                                        if (null == e) return {};
                                                        var r,
                                                            n,
                                                            i = {},
                                                            a = Object.keys(e);
                                                        for (n = 0; n < a.length; n++)
                                                            (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                                        return i;
                                                    })(e, t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var a = Object.getOwnPropertySymbols(e);
                                                    for (n = 0; n < a.length; n++)
                                                        (r = a[n]),
                                                            !(t.indexOf(r) >= 0) &&
                                                                Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                                (i[r] = e[r]);
                                                }
                                                return i;
                                            })(e, ["onClick"]);
                                        return (0, n.jsx)(
                                            c.zx,
                                            T(
                                                N(
                                                    {
                                                        className: w.rotateButton,
                                                        look: c.zx.Looks.BLANK,
                                                        size: c.Ph.NONE,
                                                        color: c.zx.Colors.TRANSPARENT,
                                                        grow: !1,
                                                    },
                                                    r,
                                                ),
                                                {
                                                    onClick: ed,
                                                    disabled: $ || W,
                                                    children: (0, n.jsx)(u.Vk2, {
                                                        size: "md",
                                                        color: "currentColor",
                                                    }),
                                                },
                                            ),
                                        );
                                    },
                                }),
                            ],
                        }),
                        S &&
                            ef &&
                            (0, n.jsx)("div", {
                                children: (0, n.jsx)(p.Z, {
                                    uploadType: v,
                                    analyticsSource: er,
                                    showUpsell: !0,
                                    position: "inline",
                                    className: w.premiumUpsell,
                                    showShadow: !1,
                                }),
                            }),
                    ],
                }),
                (0, n.jsxs)(u.mzw, {
                    className: w.modalFooter,
                    children: [
                        (0, n.jsx)(c.zx, {
                            className: w.resetButton,
                            look: c.zx.Looks.LINK,
                            size: c.Ph.MIN,
                            color: c.zx.Colors.PRIMARY,
                            onClick: em,
                            disabled: !Z,
                            children: I.intl.string(I.t.yBZMsb),
                        }),
                        (0, n.jsx)(c.zx, {
                            className: w.linkButton,
                            look: c.zx.Looks.LINK,
                            size: c.Ph.MIN,
                            color: c.zx.Colors.PRIMARY,
                            onClick: eE,
                            children: I.intl.string(I.t["9TG40t"]),
                        }),
                        (0, n.jsx)(u.zxk, {
                            variant: "primary",
                            text: I.intl.string(I.t.ZSHmKC),
                            loading: $,
                            onClick: ep,
                            disabled: $ || W,
                        }),
                    ],
                }),
            ],
        }),
    });
}
