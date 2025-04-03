r.d(t, { default: () => v }), r(47120), r(411104);
var n = r(200651),
    i = r(192379),
    a = r(120356),
    o = r.n(a),
    s = r(392711),
    l = r(36793),
    c = r(481060),
    u = r(100527),
    d = r(906732),
    m = r(540059),
    g = r(488499),
    h = r(222062),
    p = r(530329),
    E = r(72703),
    C = r(626135),
    f = r(823379),
    R = r(197712),
    A = r(511004),
    O = r(486324),
    w = r(981631),
    y = r(678916),
    D = r(388032),
    T = r(253380);
function b(e) {
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
let x = {
        x: 0,
        y: 0
    },
    I = (e, t) => {
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
function _(e) {
    switch (e) {
        case O.pC.BANNER:
            return {
                height: O.f,
                width: O.L0
            };
        case O.pC.VIDEO_BACKGROUND:
            return y.HE;
        case O.pC.AVATAR:
        case O.pC.AVATAR_DECORATION:
            return {
                height: w.dGM,
                width: w.dGM
            };
        case O.pC.GUILD_BANNER:
            return {
                height: O._T,
                width: O.X_
            };
        case O.pC.SCHEDULED_EVENT_IMAGE:
            return {
                height: O.xT,
                width: O.d6
            };
        case O.pC.HOME_HEADER:
            return {
                height: O.Uo,
                width: O.N8
            };
        default:
            return (0, f.vE)(e);
    }
}
function k(e) {
    let { zoomRatio: t, imageRotation: r, imageTransformCoordinates: n } = e;
    return 1 !== t || 0 !== r || 0 !== n.x || 0 !== n.y;
}
let M = {
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
    imageTransformCoordinates: x,
    imageRotation: 0,
    zoomRatio: 1,
    startingCoordinates: {
        x: 0,
        y: 0
    },
    isDragging: !1,
    hasImageEdits: !1
};
function j(e, t) {
    var r, n, i, a, o, s;
    switch (t.type) {
        case 'SET_DIMENSIONS':
            return N(b({}, e), {
                imageDimensions: t.imageDimensions,
                cropDimensions: t.cropDimensions,
                dragBoundaries: t.dragBoundaries
            });
        case 'START_DRAGGING_IMAGE':
            return N(b({}, e), {
                startingCoordinates: t.startingCoordinates,
                isDragging: !0
            });
        case 'STOP_DRAGGING_IMAGE':
            return N(b({}, e), {
                isDragging: !1,
                hasImageEdits: k({
                    zoomRatio: e.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'ROTATE_IMAGE':
            return N(b({}, e), {
                imageRotation: t.imageRotation,
                imageTransformCoordinates: t.imageTransformCoordinates,
                imageDimensions: null != (r = t.imageDimensions) ? r : e.imageDimensions,
                cropDimensions: null != (n = t.cropDimensions) ? n : e.cropDimensions,
                dragBoundaries: null != (i = t.dragBoundaries) ? i : e.dragBoundaries,
                hasImageEdits: k({
                    zoomRatio: e.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'SET_IMAGE_ZOOM_RATIO':
            return N(b({}, e), {
                imageTransformCoordinates: t.imageTransformCoordinates,
                zoomRatio: t.zoomRatio,
                dragBoundaries: t.dragBoundaries,
                hasImageEdits: k({
                    zoomRatio: t.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'RESET':
            return N(b({}, e), {
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: null != (a = t.imageDimensions) ? a : e.imageDimensions,
                cropDimensions: null != (o = t.cropDimensions) ? o : e.cropDimensions,
                dragBoundaries: null != (s = t.dragBoundaries) ? s : e.dragBoundaries,
                hasImageEdits: !1
            });
        default:
            return (0, f.vE)(t);
    }
}
function v(e) {
    let { file: t, imageUri: r, originalAsset: a, transitionState: f, onCrop: y, onClose: k, uploadType: v = O.pC.AVATAR, showUpsellHeader: G = !1, analyticsPage: S } = e,
        B = i.useRef(x),
        P = i.useRef(null),
        z = i.useRef(null),
        [L, V] = i.useReducer(j, M),
        { cropDimensions: H, dragBoundaries: U, imageDimensions: W, imageRotation: F, zoomRatio: X, startingCoordinates: K, isDragging: Y, hasImageEdits: Z } = L,
        [q, $] = i.useState(!1),
        [J, Q] = i.useState(!1),
        [ee, et] = i.useState(0),
        { analyticsLocations: er } = (0, d.ZP)(u.Z.IMAGE_CROPPING_MODAL),
        en = (0, m.Q3)('ImageEditingModal'),
        ei = 'image/gif' === t.type;
    i.useEffect(() => {
        (0, A.Z)();
    }, []),
        i.useEffect(() => {
            ei &&
                G &&
                C.default.track(w.rMx.OPEN_MODAL, {
                    type: w.jXE.CROP_GIF_MODAL,
                    location: { page: S },
                    location_stack: er,
                    upload_type: v
                });
        }, [G, S, ei, er, v]);
    let ea = i.useCallback(
            (e, t, r, n) => {
                (B.current = (0, R.U$)(e, t, r)), null != P.current && (P.current.style.transform = 'translate3d('.concat(B.current.x, 'px, ').concat(B.current.y, 'px, 0) rotate(').concat(n, 'deg)'));
            },
            [P]
        ),
        eo = i.useCallback(() => {
            if (null == P.current || X > 1) return;
            let { width: e, height: t } = P.current.getBoundingClientRect(),
                { width: r, height: n } = (0, R.Es)(v, e, t, en),
                i = (0, R.AK)(v, r, n, t, en),
                a = (0, R.kH)(r, n, i);
            V({
                type: 'SET_DIMENSIONS',
                imageDimensions: {
                    width: r,
                    height: n
                },
                cropDimensions: i,
                dragBoundaries: a
            });
        }, [en, v, X]),
        es = i.useCallback((e) => {
            V({
                type: 'START_DRAGGING_IMAGE',
                startingCoordinates: {
                    x: e.clientX - B.current.x,
                    y: e.clientY - B.current.y
                }
            });
        }, []),
        el = i.useCallback(
            (e) => {
                let { x: t, y: r } = B.current;
                if (Y && (e.clientX !== t || e.clientY !== r)) ea(e.clientX - K.x, e.clientY - K.y, U, F);
            },
            [U, F, Y, K.x, K.y, ea]
        ),
        ec = i.useCallback(() => {
            V({
                type: 'STOP_DRAGGING_IMAGE',
                imageTransformCoordinates: B.current
            });
        }, []),
        eu = i.useCallback(
            (e) => {
                if (null == W) return;
                let { width: t, height: r } = W,
                    n = (0, R.kH)(t * e, r * e, H),
                    { x: i, y: a } = B.current;
                ((0, s.inRange)(i, n.right, n.left) && (0, s.inRange)(a, n.top, n.bottom)) || ea(i, a, n, F),
                    V({
                        type: 'SET_IMAGE_ZOOM_RATIO',
                        zoomRatio: e,
                        dragBoundaries: n,
                        imageTransformCoordinates: B.current
                    });
            },
            [H, W, F, ea]
        ),
        ed = i.useCallback(
            (e, t) => {
                let { width: r, height: n } = e,
                    { width: i, height: a } = (0, R.Es)(v, n, r, en),
                    o = (0, R.AK)(v, i, a, r, en),
                    s = (0, R.kH)(i * t, a * t, o);
                return {
                    newImageDimensions: {
                        width: i,
                        height: a
                    },
                    newCropDimensions: o,
                    newDragBoundaries: s
                };
            },
            [en, v]
        ),
        em = i.useCallback(() => {
            var e;
            if (null == P.current || null == W) return;
            let t = (F + 90) % 360,
                { x: r, y: n } =
                    ((e = B.current.x),
                    {
                        x: -B.current.y,
                        y: e
                    });
            if (W.width !== W.height) {
                let { newImageDimensions: e, newCropDimensions: i, newDragBoundaries: a } = ed(W, X);
                ea(r, n, a, t),
                    V({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: B.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: i,
                        dragBoundaries: a
                    });
            } else
                ea(r, n, U, t),
                    V({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: B.current,
                        imageRotation: t
                    });
        }, [U, ed, W, F, ea, X]),
        eg = i.useCallback(() => {
            if (null != P.current && null != W) {
                if (W.width !== W.height && (F - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: r } = ed(W, 1);
                    V({
                        type: 'RESET',
                        imageDimensions: e,
                        cropDimensions: t,
                        dragBoundaries: r
                    }),
                        ea(0, 0, r, 0);
                } else {
                    let e = (0, R.kH)(+W.width, +W.height, H);
                    V({
                        type: 'RESET',
                        dragBoundaries: e
                    }),
                        ea(0, 0, e, 0);
                }
                et((e) => e + 1);
            }
        }, [H, ed, W, F, ea]),
        eh = i.useCallback(() => {
            let e = _(v);
            return e.width !== e.height;
        }, [v]),
        ep = i.useCallback(() => {
            if (null == W) return {};
            let e = W.width / W.height,
                t = eh() && e > O.MY ? H.height / W.height : 1,
                { width: r, height: n } = I(W, F);
            return {
                width: r * X * t,
                minWidth: r * X * t,
                height: n * X * t,
                minHeight: n * X * t
            };
        }, [H.height, W, F, eh, X]),
        eE = i.useCallback(async () => {
            let e;
            if (null == P.current) return;
            Q(!0);
            let r = P.current,
                n = _(v);
            if (ei)
                try {
                    let { result: i, cancelFn: a } = await (0, R.$p)({
                        file: t,
                        image: r,
                        cropDimensions: H,
                        cropOriginCoordinates: B.current,
                        maxDimensions: n,
                        imageRotation: F
                    });
                    (z.current = a), (e = await i), (z.current = null);
                } catch (e) {
                    var i;
                    throw (null == (i = z.current) || i.call(z), (z.current = null), Error('Error cropping GIF: '.concat(e instanceof Error ? e.toString() : String(e))));
                }
            else
                e = (0, l.PT)({
                    image: r,
                    cropDimensions: H,
                    cropOriginCoordinates: B.current,
                    maxDimensions: n,
                    imageRotation: F
                });
            await y({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: r } = e;
                    return r ? (t ? E.q.EDITED_ARCHIVED_ASSET : E.q.ARCHIVED_ASSET) : E.q.NEW_ASSET;
                })({
                    hasImageEdits: Z,
                    hasOriginalAsset: null != a
                }),
                imageUri: e,
                file: t,
                originalAsset: a
            }),
                Q(!1),
                k();
        }, [H, t, Z, F, ei, k, y, a, v]),
        eC = i.useCallback(() => {
            if (null != z.current) {
                z.current(), (z.current = null), Q(!1);
                return;
            }
            k();
        }, [k]);
    i.useEffect(
        () => (
            window.addEventListener('mouseup', ec),
            window.addEventListener('resize', eo),
            () => {
                window.removeEventListener('mouseup', ec), window.removeEventListener('resize', eo);
            }
        ),
        [eo, ec]
    ),
        i.useEffect(() => {
            if (Y) return window.addEventListener('mousemove', el), () => window.removeEventListener('mousemove', el);
        }, [el, Y]),
        i.useEffect(() => {
            if (null != z.current)
                return () => {
                    var e;
                    return null == (e = z.current) ? void 0 : e.call(z);
                };
        }, []);
    let ef = v === O.pC.AVATAR || v === O.pC.BANNER,
        eR = (0, h.M)(!ef);
    return (0, n.jsx)(d.Gt, {
        value: er,
        children: (0, n.jsxs)(c.Y0X, {
            transitionState: f,
            size: c.CgR.MEDIUM,
            children: [
                G &&
                    !eR &&
                    (0, n.jsx)(g.Z, {
                        type: v,
                        analyticsPage: S,
                        analyticsSection: w.jXE.CROP_GIF_MODAL,
                        isGIF: ei,
                        banner: r
                    }),
                (0, n.jsxs)(c.xBx, {
                    className: T.modalHeader,
                    separator: !1,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            children: D.NW.string(D.t.DxAYCA)
                        }),
                        (0, n.jsx)(c.olH, {
                            onClick: k,
                            className: T.modalCloseButton
                        })
                    ]
                }),
                (0, n.jsxs)(c.hzk, {
                    className: T.modalContent,
                    children: [
                        (0, n.jsx)('div', {
                            className: T.editingContainer,
                            children: q
                                ? (0, n.jsxs)('div', {
                                      className: T.errorContainer,
                                      children: [
                                          (0, n.jsx)(c.P4T, {
                                              size: 'sm',
                                              color: c.TVs.colors.TEXT_DANGER
                                          }),
                                          (0, n.jsx)(c.Text, {
                                              variant: 'text-md/normal',
                                              color: 'text-danger',
                                              children: D.NW.string(D.t['+ITMYW'])
                                          })
                                      ]
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)('img', {
                                              onLoad: eo,
                                              onError: () => $(!0),
                                              style: b(
                                                  {
                                                      opacity: +(null != W),
                                                      transform: 'translate3d('.concat(B.current.x, 'px, ').concat(B.current.y, 'px, 0) rotate(').concat(F, 'deg)')
                                                  },
                                                  ep()
                                              ),
                                              className: o()(J ? T.imageDisabled : T.imageEnabled, T.rotationSupported),
                                              src: r,
                                              crossOrigin: 'anonymous',
                                              alt: 'avatar',
                                              ref: P,
                                              onMouseDown: es,
                                              draggable: !1
                                          }),
                                          (0, n.jsx)('div', {
                                              className: v === O.pC.AVATAR ? T.overlayAvatar : T.overlayBanner,
                                              style: {
                                                  opacity: +(null != W),
                                                  width: H.width,
                                                  height: H.height
                                              }
                                          })
                                      ]
                                  })
                        }),
                        (0, n.jsxs)('div', {
                            className: T.toolsContainer,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: T.zoomControls,
                                    children: [
                                        (0, n.jsx)(c.XBm, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: T.zoomIcon
                                        }),
                                        (0, n.jsx)(
                                            c.iRW,
                                            {
                                                className: T.slider,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: eu,
                                                disabled: J || q,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                'aria-label': D.NW.string(D.t.dnvZSk)
                                            },
                                            ee
                                        ),
                                        (0, n.jsx)(c.XBm, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: T.zoomIcon
                                        })
                                    ]
                                }),
                                (0, n.jsx)(c.ua7, {
                                    text: D.NW.string(D.t.E36Wd3),
                                    'aria-label': D.NW.string(D.t.LzFiKC),
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
                                            N(
                                                b(
                                                    {
                                                        className: T.rotateButton,
                                                        look: c.zxk.Looks.BLANK,
                                                        size: c.PhG.NONE,
                                                        color: c.zxk.Colors.TRANSPARENT,
                                                        grow: !1
                                                    },
                                                    r
                                                ),
                                                {
                                                    onClick: em,
                                                    disabled: J || q,
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
                        G &&
                            eR &&
                            (0, n.jsx)('div', {
                                children: (0, n.jsx)(p.Z, {
                                    uploadType: v,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: T.premiumUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, n.jsxs)(c.mzw, {
                    className: T.modalFooter,
                    children: [
                        (0, n.jsx)(c.zxk, {
                            className: T.resetButton,
                            look: c.zxk.Looks.LINK,
                            size: c.PhG.MIN,
                            color: c.zxk.Colors.PRIMARY,
                            onClick: eg,
                            disabled: !Z,
                            children: D.NW.string(D.t.yBZMsb)
                        }),
                        (0, n.jsx)(c.zxk, {
                            className: T.linkButton,
                            look: c.zxk.Looks.LINK,
                            size: c.PhG.MIN,
                            color: c.zxk.Colors.PRIMARY,
                            onClick: eC,
                            children: D.NW.string(D.t['9TG40t'])
                        }),
                        (0, n.jsx)(c.zxk, {
                            submitting: J,
                            onClick: eE,
                            disabled: J || q,
                            children: D.NW.string(D.t.ZSHmKC)
                        })
                    ]
                })
            ]
        })
    });
}
