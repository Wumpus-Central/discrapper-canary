n.d(t, { default: () => S }), n(627341), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(278074),
    c = n(36793),
    u = n(481060),
    d = n(100527),
    m = n(906732),
    g = n(540059),
    h = n(488499),
    p = n(222062),
    E = n(530329),
    f = n(72703),
    C = n(626135),
    R = n(823379),
    A = n(197712),
    w = n(511004),
    O = n(486324),
    y = n(981631),
    D = n(678916),
    b = n(388032),
    N = n(488629);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = {
        x: 0,
        y: 0
    },
    _ = (e, t) => {
        let { width: n, height: i } = e;
        return t % 180 != 0
            ? {
                  width: i,
                  height: n
              }
            : {
                  width: n,
                  height: i
              };
    };
function v(e) {
    return (0, l.EQ)(e)
        .with(O.pC.BANNER, () => ({
            height: O.f,
            width: O.L0
        }))
        .with(O.pC.VIDEO_BACKGROUND, () => D.HE)
        .with(O.pC.AVATAR, () => ({
            height: y.dGM,
            width: y.dGM
        }))
        .with(O.pC.AVATAR_DECORATION, () => ({
            height: y.dGM,
            width: y.dGM
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
function M(e) {
    let { zoomRatio: t, imageRotation: n, imageTransformCoordinates: i } = e;
    return 1 !== t || 0 !== n || 0 !== i.x || 0 !== i.y;
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
function G(e, t) {
    var n, i, r, a, o, s;
    switch (t.type) {
        case 'SET_DIMENSIONS':
            return I(T({}, e), {
                imageDimensions: t.imageDimensions,
                cropDimensions: t.cropDimensions,
                dragBoundaries: t.dragBoundaries
            });
        case 'START_DRAGGING_IMAGE':
            return I(T({}, e), {
                startingCoordinates: t.startingCoordinates,
                isDragging: !0
            });
        case 'STOP_DRAGGING_IMAGE':
            return I(T({}, e), {
                isDragging: !1,
                hasImageEdits: M({
                    zoomRatio: e.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'ROTATE_IMAGE':
            return I(T({}, e), {
                imageRotation: t.imageRotation,
                imageTransformCoordinates: t.imageTransformCoordinates,
                imageDimensions: null !== (n = t.imageDimensions) && void 0 !== n ? n : e.imageDimensions,
                cropDimensions: null !== (i = t.cropDimensions) && void 0 !== i ? i : e.cropDimensions,
                dragBoundaries: null !== (r = t.dragBoundaries) && void 0 !== r ? r : e.dragBoundaries,
                hasImageEdits: M({
                    zoomRatio: e.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'SET_IMAGE_ZOOM_RATIO':
            return I(T({}, e), {
                imageTransformCoordinates: t.imageTransformCoordinates,
                zoomRatio: t.zoomRatio,
                dragBoundaries: t.dragBoundaries,
                hasImageEdits: M({
                    zoomRatio: t.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'RESET':
            return I(T({}, e), {
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: null !== (a = t.imageDimensions) && void 0 !== a ? a : e.imageDimensions,
                cropDimensions: null !== (o = t.cropDimensions) && void 0 !== o ? o : e.cropDimensions,
                dragBoundaries: null !== (s = t.dragBoundaries) && void 0 !== s ? s : e.dragBoundaries,
                hasImageEdits: !1
            });
        default:
            return (0, R.vE)(t);
    }
}
function S(e) {
    let { file: t, imageUri: n, originalAsset: a, transitionState: l, onCrop: R, onClose: D, uploadType: M = O.pC.AVATAR, showUpsellHeader: S = !1, analyticsPage: j } = e,
        B = r.useRef(x),
        P = r.useRef(null),
        z = r.useRef(null),
        [L, V] = r.useReducer(G, k),
        { cropDimensions: H, dragBoundaries: U, imageDimensions: F, imageRotation: W, zoomRatio: X, startingCoordinates: K, isDragging: Z, hasImageEdits: Y } = L,
        [q, $] = r.useState(!1),
        [J, Q] = r.useState(0),
        { analyticsLocations: ee } = (0, m.ZP)(d.Z.IMAGE_CROPPING_MODAL),
        et = (0, g.Q3)('ImageEditingModal'),
        en = 'image/gif' === t.type;
    r.useEffect(() => {
        (0, w.Z)();
    }, []),
        r.useEffect(() => {
            en &&
                S &&
                C.default.track(y.rMx.OPEN_MODAL, {
                    type: y.jXE.CROP_GIF_MODAL,
                    location: { page: j },
                    location_stack: ee
                });
        }, [S, j, en, ee]);
    let ei = r.useCallback(
            (e, t, n, i) => {
                (B.current = (0, A.U$)(e, t, n)), null != P.current && (P.current.style.transform = 'translate3d('.concat(B.current.x, 'px, ').concat(B.current.y, 'px, 0) rotate(').concat(i, 'deg)'));
            },
            [P]
        ),
        er = r.useCallback(() => {
            if (null == P.current || X > 1) return;
            let { width: e, height: t } = P.current.getBoundingClientRect(),
                { width: n, height: i } = (0, A.Es)(M, e, t, et),
                r = (0, A.AK)(M, n, i, t, et),
                a = (0, A.kH)(n, i, r);
            V({
                type: 'SET_DIMENSIONS',
                imageDimensions: {
                    width: n,
                    height: i
                },
                cropDimensions: r,
                dragBoundaries: a
            });
        }, [et, M, X]),
        ea = r.useCallback((e) => {
            V({
                type: 'START_DRAGGING_IMAGE',
                startingCoordinates: {
                    x: e.clientX - B.current.x,
                    y: e.clientY - B.current.y
                }
            });
        }, []),
        eo = r.useCallback(
            (e) => {
                let { x: t, y: n } = B.current;
                if (Z && (e.clientX !== t || e.clientY !== n)) ei(e.clientX - K.x, e.clientY - K.y, U, W);
            },
            [U, W, Z, K.x, K.y, ei]
        ),
        es = r.useCallback(() => {
            V({
                type: 'STOP_DRAGGING_IMAGE',
                imageTransformCoordinates: B.current
            });
        }, []),
        el = r.useCallback(
            (e) => {
                if (null == F) return;
                let { width: t, height: n } = F,
                    i = (0, A.kH)(t * e, n * e, H),
                    { x: r, y: a } = B.current;
                ((0, s.inRange)(r, i.right, i.left) && (0, s.inRange)(a, i.top, i.bottom)) || ei(r, a, i, W),
                    V({
                        type: 'SET_IMAGE_ZOOM_RATIO',
                        zoomRatio: e,
                        dragBoundaries: i,
                        imageTransformCoordinates: B.current
                    });
            },
            [H, F, W, ei]
        ),
        ec = r.useCallback(
            (e, t) => {
                let { width: n, height: i } = e,
                    { width: r, height: a } = (0, A.Es)(M, i, n, et),
                    o = (0, A.AK)(M, r, a, n, et),
                    s = (0, A.kH)(r * t, a * t, o);
                return {
                    newImageDimensions: {
                        width: r,
                        height: a
                    },
                    newCropDimensions: o,
                    newDragBoundaries: s
                };
            },
            [et, M]
        ),
        eu = r.useCallback(() => {
            var e;
            if (null == P.current || null == F) return;
            let t = (W + 90) % 360,
                { x: n, y: i } =
                    ((e = B.current.x),
                    {
                        x: -B.current.y,
                        y: e
                    });
            if (F.width !== F.height) {
                let { newImageDimensions: e, newCropDimensions: r, newDragBoundaries: a } = ec(F, X);
                ei(n, i, a, t),
                    V({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: B.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: r,
                        dragBoundaries: a
                    });
            } else
                ei(n, i, U, t),
                    V({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: B.current,
                        imageRotation: t
                    });
        }, [U, ec, F, W, ei, X]),
        ed = r.useCallback(() => {
            if (null != P.current && null != F) {
                if (F.width !== F.height && (W - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: n } = ec(F, 1);
                    V({
                        type: 'RESET',
                        imageDimensions: e,
                        cropDimensions: t,
                        dragBoundaries: n
                    }),
                        ei(0, 0, n, 0);
                } else {
                    let e = (0, A.kH)(+F.width, +F.height, H);
                    V({
                        type: 'RESET',
                        dragBoundaries: e
                    }),
                        ei(0, 0, e, 0);
                }
                Q((e) => e + 1);
            }
        }, [H, ec, F, W, ei]),
        em = r.useCallback(() => {
            let e = v(M);
            return e.width !== e.height;
        }, [M]),
        eg = r.useCallback(() => {
            if (null == F) return {};
            let e = F.width / F.height,
                t = em() && e > O.MY ? H.height / F.height : 1,
                { width: n, height: i } = _(F, W);
            return {
                width: n * X * t,
                minWidth: n * X * t,
                height: i * X * t,
                minHeight: i * X * t
            };
        }, [H.height, F, W, em, X]),
        eh = r.useCallback(async () => {
            let e;
            if (null == P.current) return;
            $(!0);
            let n = P.current,
                i = v(M);
            if (en)
                try {
                    let { result: r, cancelFn: a } = await (0, A.$p)({
                        file: t,
                        image: n,
                        cropDimensions: H,
                        cropOriginCoordinates: B.current,
                        maxDimensions: i,
                        imageRotation: W
                    });
                    (z.current = a), (e = await r), (z.current = null);
                } catch (e) {
                    var r;
                    throw (null === (r = z.current) || void 0 === r || r.call(z), (z.current = null), Error('Error cropping GIF: '.concat(e instanceof Error ? e.toString() : String(e))));
                }
            else
                e = (0, c.PT)({
                    image: n,
                    cropDimensions: H,
                    cropOriginCoordinates: B.current,
                    maxDimensions: i,
                    imageRotation: W
                });
            await R({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: n } = e;
                    return n ? (t ? f.q.EDITED_ARCHIVED_ASSET : f.q.ARCHIVED_ASSET) : f.q.NEW_ASSET;
                })({
                    hasImageEdits: Y,
                    hasOriginalAsset: null == a
                }),
                imageUri: e,
                file: t,
                originalAsset: a
            }),
                $(!1),
                D();
        }, [H, t, Y, W, en, D, R, a, M]),
        ep = r.useCallback(() => {
            if (null != z.current) {
                z.current(), (z.current = null), $(!1);
                return;
            }
            D();
        }, [D]);
    r.useEffect(
        () => (
            window.addEventListener('mouseup', es),
            window.addEventListener('resize', er),
            () => {
                window.removeEventListener('mouseup', es), window.removeEventListener('resize', er);
            }
        ),
        [er, es]
    ),
        r.useEffect(() => {
            if (Z) return window.addEventListener('mousemove', eo), () => window.removeEventListener('mousemove', eo);
        }, [eo, Z]),
        r.useEffect(() => {
            if (null != z.current)
                return () => {
                    var e;
                    return null === (e = z.current) || void 0 === e ? void 0 : e.call(z);
                };
        }, []);
    let eE = M === O.pC.AVATAR || M === O.pC.BANNER,
        ef = (0, p.M)(!eE);
    return (0, i.jsx)(m.Gt, {
        value: ee,
        children: (0, i.jsxs)(u.Y0X, {
            onAnimationEnd: er,
            transitionState: l,
            size: u.CgR.MEDIUM,
            children: [
                S &&
                    !ef &&
                    (0, i.jsx)(h.Z, {
                        type: M,
                        analyticsPage: j,
                        analyticsSection: y.jXE.CROP_GIF_MODAL,
                        isGIF: en,
                        banner: n
                    }),
                (0, i.jsxs)(u.xBx, {
                    className: N.modalHeader,
                    separator: !1,
                    children: [
                        (0, i.jsx)(u.X6q, {
                            variant: 'heading-lg/semibold',
                            children: b.NW.string(b.t.DxAYCA)
                        }),
                        (0, i.jsx)(u.olH, {
                            onClick: D,
                            className: N.modalCloseButton
                        })
                    ]
                }),
                (0, i.jsxs)(u.hzk, {
                    className: N.modalContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: N.editingContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    style: T(
                                        {
                                            opacity: +(null != F),
                                            transform: 'translate3d('.concat(B.current.x, 'px, ').concat(B.current.y, 'px, 0) rotate(').concat(W, 'deg)')
                                        },
                                        eg()
                                    ),
                                    className: o()(q ? N.imageDisabled : N.imageEnabled, N.rotationSupported),
                                    src: n,
                                    alt: 'avatar',
                                    ref: P,
                                    onMouseDown: ea,
                                    draggable: !1,
                                    crossOrigin: 'anonymous'
                                }),
                                (0, i.jsx)('div', {
                                    className: M === O.pC.AVATAR ? N.overlayAvatar : N.overlayBanner,
                                    style: {
                                        opacity: +(null != F),
                                        width: H.width,
                                        height: H.height
                                    }
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: N.toolsContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: N.zoomControls,
                                    children: [
                                        (0, i.jsx)(u.XBm, {
                                            size: 'xxs',
                                            className: N.zoomIcon
                                        }),
                                        (0, i.jsx)(
                                            u.iRW,
                                            {
                                                className: N.slider,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: el,
                                                disabled: q,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                'aria-label': b.NW.string(b.t.dnvZSk)
                                            },
                                            J
                                        ),
                                        (0, i.jsx)(u.XBm, {
                                            size: 'md',
                                            className: N.zoomIcon
                                        })
                                    ]
                                }),
                                (0, i.jsx)(u.ua7, {
                                    text: b.NW.string(b.t.E36Wd3),
                                    'aria-label': b.NW.string(b.t.LzFiKC),
                                    children: (e) => {
                                        var { onClick: t } = e,
                                            n = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    i,
                                                    r = (function (e, t) {
                                                        if (null == e) return {};
                                                        var n,
                                                            i,
                                                            r = {},
                                                            a = Object.keys(e);
                                                        for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                        return r;
                                                    })(e, t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var a = Object.getOwnPropertySymbols(e);
                                                    for (i = 0; i < a.length; i++) (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                                                }
                                                return r;
                                            })(e, ['onClick']);
                                        return (0, i.jsx)(
                                            u.P3F,
                                            I(
                                                T(
                                                    {
                                                        onClick: eu,
                                                        'aria-label': b.NW.string(b.t.LzFiKC),
                                                        className: N.rotateButton
                                                    },
                                                    n
                                                ),
                                                { children: (0, i.jsx)(u.Vk2, {}) }
                                            )
                                        );
                                    }
                                })
                            ]
                        }),
                        S &&
                            ef &&
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(E.Z, {
                                    uploadType: M,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: N.premiumUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(u.mzw, {
                    className: N.modalFooter,
                    children: [
                        (0, i.jsx)(u.zxk, {
                            className: N.resetButton,
                            look: u.zxk.Looks.LINK,
                            size: u.PhG.MIN,
                            color: u.zxk.Colors.PRIMARY,
                            onClick: ed,
                            disabled: !Y,
                            children: b.NW.string(b.t.yBZMsb)
                        }),
                        (0, i.jsx)(u.zxk, {
                            className: N.linkButton,
                            look: u.zxk.Looks.LINK,
                            size: u.PhG.MIN,
                            color: u.zxk.Colors.PRIMARY,
                            onClick: ep,
                            children: b.NW.string(b.t['9TG40t'])
                        }),
                        (0, i.jsx)(u.zxk, {
                            submitting: q,
                            onClick: eh,
                            children: b.NW.string(b.t.ZSHmKC)
                        })
                    ]
                })
            ]
        })
    });
}
