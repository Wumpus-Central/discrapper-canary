r.d(t, { default: () => j }), r(627341), r(47120), r(411104);
var n = r(200651),
    i = r(192379),
    o = r(120356),
    a = r.n(o),
    s = r(392711),
    l = r(278074),
    c = r(36793),
    u = r(481060),
    d = r(100527),
    m = r(906732),
    g = r(540059),
    h = r(488499),
    p = r(222062),
    E = r(530329),
    C = r(72703),
    f = r(626135),
    R = r(823379),
    A = r(197712),
    w = r(511004),
    O = r(486324),
    D = r(981631),
    y = r(678916),
    T = r(388032),
    b = r(126847);
function x(e) {
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
let I = {
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
function v(e) {
    return (0, l.EQ)(e)
        .with(O.pC.BANNER, () => ({
            height: O.f,
            width: O.L0
        }))
        .with(O.pC.VIDEO_BACKGROUND, () => y.HE)
        .with(O.pC.AVATAR, () => ({
            height: D.dGM,
            width: D.dGM
        }))
        .with(O.pC.AVATAR_DECORATION, () => ({
            height: D.dGM,
            width: D.dGM
        }))
        .with(O.pC.GUILD_BANNER, () => ({
            height: O._T,
            width: O.X_
        }))
        .with(O.pC.SCHEDULED_EVENT_IMAGE, () => ({
            height: O.xT,
            width: O.d6
        }))
        .with(O.pC.HOME_HEADER, () => ({
            height: O.Uo,
            width: O.N8
        }))
        .exhaustive();
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
    imageTransformCoordinates: I,
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
    var r, n, i, o, a, s;
    switch (t.type) {
        case 'SET_DIMENSIONS':
            return N(x({}, e), {
                imageDimensions: t.imageDimensions,
                cropDimensions: t.cropDimensions,
                dragBoundaries: t.dragBoundaries
            });
        case 'START_DRAGGING_IMAGE':
            return N(x({}, e), {
                startingCoordinates: t.startingCoordinates,
                isDragging: !0
            });
        case 'STOP_DRAGGING_IMAGE':
            return N(x({}, e), {
                isDragging: !1,
                hasImageEdits: k({
                    zoomRatio: e.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'ROTATE_IMAGE':
            return N(x({}, e), {
                imageRotation: t.imageRotation,
                imageTransformCoordinates: t.imageTransformCoordinates,
                imageDimensions: null !== (r = t.imageDimensions) && void 0 !== r ? r : e.imageDimensions,
                cropDimensions: null !== (n = t.cropDimensions) && void 0 !== n ? n : e.cropDimensions,
                dragBoundaries: null !== (i = t.dragBoundaries) && void 0 !== i ? i : e.dragBoundaries,
                hasImageEdits: k({
                    zoomRatio: e.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'SET_IMAGE_ZOOM_RATIO':
            return N(x({}, e), {
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
            return N(x({}, e), {
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: null !== (o = t.imageDimensions) && void 0 !== o ? o : e.imageDimensions,
                cropDimensions: null !== (a = t.cropDimensions) && void 0 !== a ? a : e.cropDimensions,
                dragBoundaries: null !== (s = t.dragBoundaries) && void 0 !== s ? s : e.dragBoundaries,
                hasImageEdits: !1
            });
        default:
            return (0, R.vE)(t);
    }
}
function j(e) {
    let { file: t, imageUri: r, originalAsset: o, transitionState: l, onCrop: R, onClose: y, uploadType: k = O.pC.AVATAR, showUpsellHeader: j = !1, analyticsPage: S } = e,
        B = i.useRef(I),
        P = i.useRef(null),
        z = i.useRef(null),
        [L, V] = i.useReducer(G, M),
        { cropDimensions: H, dragBoundaries: U, imageDimensions: W, imageRotation: F, zoomRatio: X, startingCoordinates: K, isDragging: Y, hasImageEdits: Z } = L,
        [q, $] = i.useState(!1),
        [J, Q] = i.useState(!1),
        [ee, et] = i.useState(0),
        { analyticsLocations: er } = (0, m.ZP)(d.Z.IMAGE_CROPPING_MODAL),
        en = (0, g.Q3)('ImageEditingModal'),
        ei = 'image/gif' === t.type;
    i.useEffect(() => {
        (0, w.Z)();
    }, []),
        i.useEffect(() => {
            ei &&
                j &&
                f.default.track(D.rMx.OPEN_MODAL, {
                    type: D.jXE.CROP_GIF_MODAL,
                    location: { page: S },
                    location_stack: er,
                    upload_type: k
                });
        }, [j, S, ei, er, k]);
    let eo = i.useCallback(
            (e, t, r, n) => {
                (B.current = (0, A.U$)(e, t, r)), null != P.current && (P.current.style.transform = 'translate3d('.concat(B.current.x, 'px, ').concat(B.current.y, 'px, 0) rotate(').concat(n, 'deg)'));
            },
            [P]
        ),
        ea = i.useCallback(() => {
            if (null == P.current || X > 1) return;
            let { width: e, height: t } = P.current.getBoundingClientRect(),
                { width: r, height: n } = (0, A.Es)(k, e, t, en),
                i = (0, A.AK)(k, r, n, t, en),
                o = (0, A.kH)(r, n, i);
            V({
                type: 'SET_DIMENSIONS',
                imageDimensions: {
                    width: r,
                    height: n
                },
                cropDimensions: i,
                dragBoundaries: o
            });
        }, [en, k, X]),
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
                if (Y && (e.clientX !== t || e.clientY !== r)) eo(e.clientX - K.x, e.clientY - K.y, U, F);
            },
            [U, F, Y, K.x, K.y, eo]
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
                    n = (0, A.kH)(t * e, r * e, H),
                    { x: i, y: o } = B.current;
                ((0, s.inRange)(i, n.right, n.left) && (0, s.inRange)(o, n.top, n.bottom)) || eo(i, o, n, F),
                    V({
                        type: 'SET_IMAGE_ZOOM_RATIO',
                        zoomRatio: e,
                        dragBoundaries: n,
                        imageTransformCoordinates: B.current
                    });
            },
            [H, W, F, eo]
        ),
        ed = i.useCallback(
            (e, t) => {
                let { width: r, height: n } = e,
                    { width: i, height: o } = (0, A.Es)(k, n, r, en),
                    a = (0, A.AK)(k, i, o, r, en),
                    s = (0, A.kH)(i * t, o * t, a);
                return {
                    newImageDimensions: {
                        width: i,
                        height: o
                    },
                    newCropDimensions: a,
                    newDragBoundaries: s
                };
            },
            [en, k]
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
                let { newImageDimensions: e, newCropDimensions: i, newDragBoundaries: o } = ed(W, X);
                eo(r, n, o, t),
                    V({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: B.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: i,
                        dragBoundaries: o
                    });
            } else
                eo(r, n, U, t),
                    V({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: B.current,
                        imageRotation: t
                    });
        }, [U, ed, W, F, eo, X]),
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
                        eo(0, 0, r, 0);
                } else {
                    let e = (0, A.kH)(+W.width, +W.height, H);
                    V({
                        type: 'RESET',
                        dragBoundaries: e
                    }),
                        eo(0, 0, e, 0);
                }
                et((e) => e + 1);
            }
        }, [H, ed, W, F, eo]),
        eh = i.useCallback(() => {
            let e = v(k);
            return e.width !== e.height;
        }, [k]),
        ep = i.useCallback(() => {
            if (null == W) return {};
            let e = W.width / W.height,
                t = eh() && e > O.MY ? H.height / W.height : 1,
                { width: r, height: n } = _(W, F);
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
                n = v(k);
            if (ei)
                try {
                    let { result: i, cancelFn: o } = await (0, A.$p)({
                        file: t,
                        image: r,
                        cropDimensions: H,
                        cropOriginCoordinates: B.current,
                        maxDimensions: n,
                        imageRotation: F
                    });
                    (z.current = o), (e = await i), (z.current = null);
                } catch (e) {
                    var i;
                    throw (null === (i = z.current) || void 0 === i || i.call(z), (z.current = null), Error('Error cropping GIF: '.concat(e instanceof Error ? e.toString() : String(e))));
                }
            else
                e = (0, c.PT)({
                    image: r,
                    cropDimensions: H,
                    cropOriginCoordinates: B.current,
                    maxDimensions: n,
                    imageRotation: F
                });
            await R({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: r } = e;
                    return r ? (t ? C.q.EDITED_ARCHIVED_ASSET : C.q.ARCHIVED_ASSET) : C.q.NEW_ASSET;
                })({
                    hasImageEdits: Z,
                    hasOriginalAsset: null != o
                }),
                imageUri: e,
                file: t,
                originalAsset: o
            }),
                Q(!1),
                y();
        }, [H, t, Z, F, ei, y, R, o, k]),
        eC = i.useCallback(() => {
            if (null != z.current) {
                z.current(), (z.current = null), Q(!1);
                return;
            }
            y();
        }, [y]);
    i.useEffect(
        () => (
            window.addEventListener('mouseup', ec),
            window.addEventListener('resize', ea),
            () => {
                window.removeEventListener('mouseup', ec), window.removeEventListener('resize', ea);
            }
        ),
        [ea, ec]
    ),
        i.useEffect(() => {
            if (Y) return window.addEventListener('mousemove', el), () => window.removeEventListener('mousemove', el);
        }, [el, Y]),
        i.useEffect(() => {
            if (null != z.current)
                return () => {
                    var e;
                    return null === (e = z.current) || void 0 === e ? void 0 : e.call(z);
                };
        }, []);
    let ef = k === O.pC.AVATAR || k === O.pC.BANNER,
        eR = (0, p.M)(!ef);
    return (0, n.jsx)(m.Gt, {
        value: er,
        children: (0, n.jsxs)(u.Y0X, {
            transitionState: l,
            size: u.CgR.MEDIUM,
            children: [
                j &&
                    !eR &&
                    (0, n.jsx)(h.Z, {
                        type: k,
                        analyticsPage: S,
                        analyticsSection: D.jXE.CROP_GIF_MODAL,
                        isGIF: ei,
                        banner: r
                    }),
                (0, n.jsxs)(u.xBx, {
                    className: b.modalHeader,
                    separator: !1,
                    children: [
                        (0, n.jsx)(u.X6q, {
                            variant: 'heading-lg/semibold',
                            children: T.NW.string(T.t.DxAYCA)
                        }),
                        (0, n.jsx)(u.olH, {
                            onClick: y,
                            className: b.modalCloseButton
                        })
                    ]
                }),
                (0, n.jsxs)(u.hzk, {
                    className: b.modalContent,
                    children: [
                        (0, n.jsx)('div', {
                            className: b.editingContainer,
                            children: q
                                ? (0, n.jsxs)('div', {
                                      className: b.errorContainer,
                                      children: [
                                          (0, n.jsx)(u.P4T, {
                                              size: 'sm',
                                              color: u.TVs.colors.TEXT_DANGER
                                          }),
                                          (0, n.jsx)(u.Text, {
                                              variant: 'text-md/normal',
                                              color: 'text-danger',
                                              children: T.NW.string(T.t['+ITMYW'])
                                          })
                                      ]
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)('img', {
                                              onLoad: ea,
                                              onError: () => $(!0),
                                              style: x(
                                                  {
                                                      opacity: +(null != W),
                                                      transform: 'translate3d('.concat(B.current.x, 'px, ').concat(B.current.y, 'px, 0) rotate(').concat(F, 'deg)')
                                                  },
                                                  ep()
                                              ),
                                              className: a()(J ? b.imageDisabled : b.imageEnabled, b.rotationSupported),
                                              src: r,
                                              alt: 'avatar',
                                              ref: P,
                                              onMouseDown: es,
                                              draggable: !1
                                          }),
                                          (0, n.jsx)('div', {
                                              className: k === O.pC.AVATAR ? b.overlayAvatar : b.overlayBanner,
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
                            className: b.toolsContainer,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: b.zoomControls,
                                    children: [
                                        (0, n.jsx)(u.XBm, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: b.zoomIcon
                                        }),
                                        (0, n.jsx)(
                                            u.iRW,
                                            {
                                                className: b.slider,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: eu,
                                                disabled: J || q,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                'aria-label': T.NW.string(T.t.dnvZSk)
                                            },
                                            ee
                                        ),
                                        (0, n.jsx)(u.XBm, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: b.zoomIcon
                                        })
                                    ]
                                }),
                                (0, n.jsx)(u.ua7, {
                                    text: T.NW.string(T.t.E36Wd3),
                                    'aria-label': T.NW.string(T.t.LzFiKC),
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
                                                            o = Object.keys(e);
                                                        for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                                        return i;
                                                    })(e, t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var o = Object.getOwnPropertySymbols(e);
                                                    for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                                                }
                                                return i;
                                            })(e, ['onClick']);
                                        return (0, n.jsx)(
                                            u.zxk,
                                            N(
                                                x(
                                                    {
                                                        className: b.rotateButton,
                                                        look: u.zxk.Looks.BLANK,
                                                        size: u.PhG.NONE,
                                                        color: u.zxk.Colors.TRANSPARENT,
                                                        grow: !1
                                                    },
                                                    r
                                                ),
                                                {
                                                    onClick: em,
                                                    disabled: J || q,
                                                    children: (0, n.jsx)(u.Vk2, {
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
                        j &&
                            eR &&
                            (0, n.jsx)('div', {
                                children: (0, n.jsx)(E.Z, {
                                    uploadType: k,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: b.premiumUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, n.jsxs)(u.mzw, {
                    className: b.modalFooter,
                    children: [
                        (0, n.jsx)(u.zxk, {
                            className: b.resetButton,
                            look: u.zxk.Looks.LINK,
                            size: u.PhG.MIN,
                            color: u.zxk.Colors.PRIMARY,
                            onClick: eg,
                            disabled: !Z,
                            children: T.NW.string(T.t.yBZMsb)
                        }),
                        (0, n.jsx)(u.zxk, {
                            className: b.linkButton,
                            look: u.zxk.Looks.LINK,
                            size: u.PhG.MIN,
                            color: u.zxk.Colors.PRIMARY,
                            onClick: eC,
                            children: T.NW.string(T.t['9TG40t'])
                        }),
                        (0, n.jsx)(u.zxk, {
                            submitting: J,
                            onClick: eE,
                            disabled: J || q,
                            children: T.NW.string(T.t.ZSHmKC)
                        })
                    ]
                })
            ]
        })
    });
}
