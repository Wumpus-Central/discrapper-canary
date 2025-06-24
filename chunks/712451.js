r.d(t, { default: () => M }), r(388685), r(415506);
var n = r(255367),
    i = r(73800),
    a = r(120356),
    o = r.n(a),
    s = r(392711),
    l = r(36793),
    c = r(481060),
    u = r(100527),
    d = r(906732),
    m = r(488499),
    g = r(222062),
    h = r(530329),
    p = r(72703),
    E = r(626135),
    C = r(823379),
    f = r(197712),
    A = r(511004),
    R = r(486324),
    O = r(981631),
    D = r(678916),
    I = r(388032),
    w = r(253380);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
let N = {
        x: 0,
        y: 0
    },
    _ = (e, t) => {
        let { width: r, height: n } = e;
        return t % 180 != 0
            ? {
                  width: n,
                  height: r
              }
            : {
                  width: r,
                  height: n
              };
    };
function b(e) {
    switch (e) {
        case R.pC.BANNER:
            return {
                height: R.f,
                width: R.L0
            };
        case R.pC.VIDEO_BACKGROUND:
            return D.HE;
        case R.pC.AVATAR:
        case R.pC.AVATAR_DECORATION:
        case R.pC.GUILD_ICON:
            return {
                height: O.dGM,
                width: O.dGM
            };
        case R.pC.GUILD_BANNER:
            return {
                height: R._T,
                width: R.X_
            };
        case R.pC.SCHEDULED_EVENT_IMAGE:
            return {
                height: R.xT,
                width: R.d6
            };
        case R.pC.HOME_HEADER:
            return {
                height: R.Uo,
                width: R.N8
            };
        default:
            return (0, C.vE)(e);
    }
}
function x(e) {
    let { zoomRatio: t, imageRotation: r, imageTransformCoordinates: n } = e;
    return 1 !== t || 0 !== r || 0 !== n.x || 0 !== n.y;
}
let k = {
    imageDimensions: null,
    cropDimensions: {
        width: 0,
        height: 0
    },
    dragBoundaries: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    imageTransformCoordinates: N,
    imageRotation: 0,
    zoomRatio: 1,
    startingCoordinates: {
        x: 0,
        y: 0
    },
    isDragging: !1,
    hasImageEdits: !1
};
function G(e, t) {
    var r, n, i, a, o, s;
    switch (t.type) {
        case 'SET_DIMENSIONS':
            return T(y({}, e), {
                imageDimensions: t.imageDimensions,
                cropDimensions: t.cropDimensions,
                dragBoundaries: t.dragBoundaries
            });
        case 'START_DRAGGING_IMAGE':
            return T(y({}, e), {
                startingCoordinates: t.startingCoordinates,
                isDragging: !0
            });
        case 'STOP_DRAGGING_IMAGE':
            return T(y({}, e), {
                isDragging: !1,
                hasImageEdits: x({
                    zoomRatio: e.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'ROTATE_IMAGE':
            return T(y({}, e), {
                imageRotation: t.imageRotation,
                imageTransformCoordinates: t.imageTransformCoordinates,
                imageDimensions: null != (r = t.imageDimensions) ? r : e.imageDimensions,
                cropDimensions: null != (n = t.cropDimensions) ? n : e.cropDimensions,
                dragBoundaries: null != (i = t.dragBoundaries) ? i : e.dragBoundaries,
                hasImageEdits: x({
                    zoomRatio: e.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'SET_IMAGE_ZOOM_RATIO':
            return T(y({}, e), {
                imageTransformCoordinates: t.imageTransformCoordinates,
                zoomRatio: t.zoomRatio,
                dragBoundaries: t.dragBoundaries,
                hasImageEdits: x({
                    zoomRatio: t.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'RESET':
            return T(y({}, e), {
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: null != (a = t.imageDimensions) ? a : e.imageDimensions,
                cropDimensions: null != (o = t.cropDimensions) ? o : e.cropDimensions,
                dragBoundaries: null != (s = t.dragBoundaries) ? s : e.dragBoundaries,
                hasImageEdits: !1
            });
        default:
            return (0, C.vE)(t);
    }
}
function M(e) {
    let { file: t, imageUri: r, originalAsset: a, transitionState: C, onCrop: D, onClose: x, uploadType: M = R.pC.AVATAR, showUpsellHeader: S = !1, analyticsPage: v } = e,
        j = i.useRef(N),
        B = i.useRef(null),
        P = i.useRef(null),
        [z, L] = i.useReducer(G, k),
        { cropDimensions: U, dragBoundaries: V, imageDimensions: H, imageRotation: F, zoomRatio: X, startingCoordinates: K, isDragging: Y, hasImageEdits: Z } = z,
        [W, q] = i.useState(!1),
        [$, J] = i.useState(!1),
        [Q, ee] = i.useState(0),
        { analyticsLocations: et, newestAnalyticsLocation: er } = (0, d.ZP)(u.Z.IMAGE_CROPPING_MODAL),
        en = 'image/gif' === t.type;
    i.useEffect(() => {
        (0, A.Z)();
    }, []),
        i.useEffect(() => {
            en &&
                S &&
                E.default.track(O.rMx.OPEN_MODAL, {
                    type: O.jXE.CROP_GIF_MODAL,
                    location: { page: v },
                    location_stack: et,
                    upload_type: M
                });
        }, [S, v, en, et, M]);
    let ei = i.useCallback(
            (e, t, r, n) => {
                (j.current = (0, f.U$)(e, t, r)), null != B.current && (B.current.style.transform = 'translate3d('.concat(j.current.x, 'px, ').concat(j.current.y, 'px, 0) rotate(').concat(n, 'deg)'));
            },
            [B]
        ),
        ea = i.useCallback(() => {
            if (null == B.current || X > 1) return;
            let { width: e, height: t } = B.current.getBoundingClientRect(),
                { width: r, height: n } = (0, f.Es)(M, e, t),
                i = (0, f.AK)(M, r, n, t),
                a = (0, f.kH)(r, n, i);
            L({
                type: 'SET_DIMENSIONS',
                imageDimensions: {
                    width: r,
                    height: n
                },
                cropDimensions: i,
                dragBoundaries: a
            });
        }, [M, X]),
        eo = i.useCallback((e) => {
            L({
                type: 'START_DRAGGING_IMAGE',
                startingCoordinates: {
                    x: e.clientX - j.current.x,
                    y: e.clientY - j.current.y
                }
            });
        }, []),
        es = i.useCallback(
            (e) => {
                let { x: t, y: r } = j.current;
                if (Y && (e.clientX !== t || e.clientY !== r)) ei(e.clientX - K.x, e.clientY - K.y, V, F);
            },
            [V, F, Y, K.x, K.y, ei]
        ),
        el = i.useCallback(() => {
            L({
                type: 'STOP_DRAGGING_IMAGE',
                imageTransformCoordinates: j.current
            });
        }, []),
        ec = i.useCallback(
            (e) => {
                if (null == H) return;
                let { width: t, height: r } = H,
                    n = (0, f.kH)(t * e, r * e, U),
                    { x: i, y: a } = j.current;
                ((0, s.inRange)(i, n.right, n.left) && (0, s.inRange)(a, n.top, n.bottom)) || ei(i, a, n, F),
                    L({
                        type: 'SET_IMAGE_ZOOM_RATIO',
                        zoomRatio: e,
                        dragBoundaries: n,
                        imageTransformCoordinates: j.current
                    });
            },
            [U, H, F, ei]
        ),
        eu = i.useCallback(
            (e, t) => {
                let { width: r, height: n } = e,
                    { width: i, height: a } = (0, f.Es)(M, n, r),
                    o = (0, f.AK)(M, i, a, r),
                    s = (0, f.kH)(i * t, a * t, o);
                return {
                    newImageDimensions: {
                        width: i,
                        height: a
                    },
                    newCropDimensions: o,
                    newDragBoundaries: s
                };
            },
            [M]
        ),
        ed = i.useCallback(() => {
            var e;
            if (null == B.current || null == H) return;
            let t = (F + 90) % 360,
                { x: r, y: n } =
                    ((e = j.current.x),
                    {
                        x: -j.current.y,
                        y: e
                    });
            if (H.width !== H.height) {
                let { newImageDimensions: e, newCropDimensions: i, newDragBoundaries: a } = eu(H, X);
                ei(r, n, a, t),
                    L({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: j.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: i,
                        dragBoundaries: a
                    });
            } else
                ei(r, n, V, t),
                    L({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: j.current,
                        imageRotation: t
                    });
        }, [V, eu, H, F, ei, X]),
        em = i.useCallback(() => {
            if (null != B.current && null != H) {
                if (H.width !== H.height && (F - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: r } = eu(H, 1);
                    L({
                        type: 'RESET',
                        imageDimensions: e,
                        cropDimensions: t,
                        dragBoundaries: r
                    }),
                        ei(0, 0, r, 0);
                } else {
                    let e = (0, f.kH)(+H.width, +H.height, U);
                    L({
                        type: 'RESET',
                        dragBoundaries: e
                    }),
                        ei(0, 0, e, 0);
                }
                ee((e) => e + 1);
            }
        }, [U, eu, H, F, ei]),
        eg = i.useCallback(() => {
            let e = b(M);
            return e.width !== e.height;
        }, [M]),
        eh = i.useCallback(() => {
            if (null == H) return {};
            let e = H.width / H.height,
                t = eg() && e > R.MY ? U.height / H.height : 1,
                { width: r, height: n } = _(H, F);
            return {
                width: r * X * t,
                minWidth: r * X * t,
                height: n * X * t,
                minHeight: n * X * t
            };
        }, [U.height, H, F, eg, X]),
        ep = i.useCallback(async () => {
            let e;
            if (null == B.current) return;
            J(!0);
            let r = B.current,
                n = b(M);
            if (en)
                try {
                    let { result: i, cancelFn: a } = await (0, f.$p)({
                        file: t,
                        image: r,
                        cropDimensions: U,
                        cropOriginCoordinates: j.current,
                        maxDimensions: n,
                        imageRotation: F
                    });
                    (P.current = a), (e = await i), (P.current = null);
                } catch (e) {
                    var i;
                    throw (null == (i = P.current) || i.call(P), (P.current = null), Error('Error cropping GIF: '.concat(e instanceof Error ? e.toString() : String(e))));
                }
            else
                e = (0, l.PT)({
                    image: r,
                    cropDimensions: U,
                    cropOriginCoordinates: j.current,
                    maxDimensions: n,
                    imageRotation: F
                });
            await D({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: r } = e;
                    return r ? (t ? p.q.EDITED_ARCHIVED_ASSET : p.q.ARCHIVED_ASSET) : p.q.NEW_ASSET;
                })({
                    hasImageEdits: Z,
                    hasOriginalAsset: null != a
                }),
                imageUri: e,
                file: t,
                originalAsset: a
            }),
                J(!1),
                x();
        }, [U, t, Z, F, en, x, D, a, M]),
        eE = i.useCallback(() => {
            if (null != P.current) {
                P.current(), (P.current = null), J(!1);
                return;
            }
            x();
        }, [x]);
    i.useEffect(
        () => (
            window.addEventListener('mouseup', el),
            window.addEventListener('resize', ea),
            () => {
                window.removeEventListener('mouseup', el), window.removeEventListener('resize', ea);
            }
        ),
        [ea, el]
    ),
        i.useEffect(() => {
            if (Y) return window.addEventListener('mousemove', es), () => window.removeEventListener('mousemove', es);
        }, [es, Y]),
        i.useEffect(() => {
            if (null != P.current)
                return () => {
                    var e;
                    return null == (e = P.current) ? void 0 : e.call(P);
                };
        }, []);
    let eC = M === R.pC.AVATAR || M === R.pC.BANNER,
        ef = (0, g.M)(!eC);
    return (0, n.jsx)(d.Gt, {
        value: et,
        children: (0, n.jsxs)(c.Y0X, {
            transitionState: C,
            size: c.CgR.MEDIUM,
            parentComponent: 'ImageEditingModal',
            children: [
                S &&
                    !ef &&
                    (0, n.jsx)(m.Z, {
                        type: M,
                        analyticsPage: v,
                        analyticsSection: O.jXE.CROP_GIF_MODAL,
                        isGIF: en,
                        banner: r
                    }),
                (0, n.jsxs)(c.xBx, {
                    className: w.modalHeader,
                    separator: !1,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            children: I.intl.string(I.t.DxAYCA)
                        }),
                        (0, n.jsx)(c.olH, {
                            onClick: x,
                            className: w.modalCloseButton
                        })
                    ]
                }),
                (0, n.jsxs)(c.hzk, {
                    className: w.modalContent,
                    children: [
                        (0, n.jsx)('div', {
                            className: w.editingContainer,
                            children: W
                                ? (0, n.jsxs)('div', {
                                      className: w.errorContainer,
                                      children: [
                                          (0, n.jsx)(c.P4T, {
                                              size: 'sm',
                                              color: c.TVs.colors.TEXT_DANGER
                                          }),
                                          (0, n.jsx)(c.Text, {
                                              variant: 'text-md/normal',
                                              color: 'text-danger',
                                              children: I.intl.string(I.t['+ITMYW'])
                                          })
                                      ]
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)('img', {
                                              onLoad: ea,
                                              onError: () => q(!0),
                                              style: y(
                                                  {
                                                      opacity: +(null != H),
                                                      transform: 'translate3d('.concat(j.current.x, 'px, ').concat(j.current.y, 'px, 0) rotate(').concat(F, 'deg)')
                                                  },
                                                  eh()
                                              ),
                                              className: o()($ ? w.imageDisabled : w.imageEnabled, w.rotationSupported),
                                              src: r,
                                              crossOrigin: 'anonymous',
                                              alt: 'avatar',
                                              ref: B,
                                              onMouseDown: eo,
                                              draggable: !1
                                          }),
                                          (0, n.jsx)('div', {
                                              className: (function (e) {
                                                  switch (e) {
                                                      case R.pC.GUILD_ICON:
                                                          return w.overlayGuildIcon;
                                                      case R.pC.BANNER:
                                                      case R.pC.GUILD_BANNER:
                                                      case R.pC.VIDEO_BACKGROUND:
                                                      case R.pC.SCHEDULED_EVENT_IMAGE:
                                                      case R.pC.HOME_HEADER:
                                                          return w.overlayBanner;
                                                      case R.pC.AVATAR:
                                                      case R.pC.AVATAR_DECORATION:
                                                          return w.overlayAvatar;
                                                  }
                                              })(M),
                                              style: {
                                                  opacity: +(null != H),
                                                  width: U.width,
                                                  height: U.height
                                              }
                                          })
                                      ]
                                  })
                        }),
                        (0, n.jsxs)('div', {
                            className: w.toolsContainer,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: w.zoomControls,
                                    children: [
                                        (0, n.jsx)(c.XBm, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: w.zoomIcon
                                        }),
                                        (0, n.jsx)(
                                            c.iRW,
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
                                                'aria-label': I.intl.string(I.t.dnvZSk)
                                            },
                                            Q
                                        ),
                                        (0, n.jsx)(c.XBm, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: w.zoomIcon
                                        })
                                    ]
                                }),
                                (0, n.jsx)(c.ua7, {
                                    text: I.intl.string(I.t.E36Wd3),
                                    'aria-label': I.intl.string(I.t.LzFiKC),
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
                                                        for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                                        return i;
                                                    })(e, t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var a = Object.getOwnPropertySymbols(e);
                                                    for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                                                }
                                                return i;
                                            })(e, ['onClick']);
                                        return (0, n.jsx)(
                                            c.zxk,
                                            T(
                                                y(
                                                    {
                                                        className: w.rotateButton,
                                                        look: c.zxk.Looks.BLANK,
                                                        size: c.PhG.NONE,
                                                        color: c.zxk.Colors.TRANSPARENT,
                                                        grow: !1
                                                    },
                                                    r
                                                ),
                                                {
                                                    onClick: ed,
                                                    disabled: $ || W,
                                                    children: (0, n.jsx)(c.Vk2, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    })
                                                }
                                            )
                                        );
                                    }
                                })
                            ]
                        }),
                        S &&
                            ef &&
                            (0, n.jsx)('div', {
                                children: (0, n.jsx)(h.Z, {
                                    uploadType: M,
                                    analyticsSource: er,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: w.premiumUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, n.jsxs)(c.mzw, {
                    className: w.modalFooter,
                    children: [
                        (0, n.jsx)(c.zxk, {
                            className: w.resetButton,
                            look: c.zxk.Looks.LINK,
                            size: c.PhG.MIN,
                            color: c.zxk.Colors.PRIMARY,
                            onClick: em,
                            disabled: !Z,
                            children: I.intl.string(I.t.yBZMsb)
                        }),
                        (0, n.jsx)(c.zxk, {
                            className: w.linkButton,
                            look: c.zxk.Looks.LINK,
                            size: c.PhG.MIN,
                            color: c.zxk.Colors.PRIMARY,
                            onClick: eE,
                            children: I.intl.string(I.t['9TG40t'])
                        }),
                        (0, n.jsx)(c.zxk, {
                            submitting: $,
                            onClick: ep,
                            disabled: $ || W,
                            children: I.intl.string(I.t.ZSHmKC)
                        })
                    ]
                })
            ]
        })
    });
}
