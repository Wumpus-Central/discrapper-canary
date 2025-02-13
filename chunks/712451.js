i.d(t, { default: () => y }), i(627341), i(47120), i(411104);
var n = i(200651),
    r = i(192379),
    a = i(120356),
    o = i.n(a),
    s = i(392711),
    l = i(278074),
    u = i(36793),
    c = i(481060),
    d = i(100527),
    m = i(906732),
    g = i(540059),
    h = i(488499),
    E = i(222062),
    C = i(530329),
    p = i(626135),
    R = i(823379),
    A = i(197712),
    f = i(511004),
    w = i(486324),
    D = i(981631),
    T = i(678916),
    I = i(388032),
    x = i(91536);
let _ = {
        x: 0,
        y: 0
    },
    M = (e, t) => {
        let { width: i, height: n } = e;
        return t % 180 != 0
            ? {
                  width: n,
                  height: i
              }
            : {
                  width: i,
                  height: n
              };
    };
function N(e) {
    return (0, l.EQ)(e)
        .with(w.pC.BANNER, () => ({
            height: w.f,
            width: w.L0
        }))
        .with(w.pC.VIDEO_BACKGROUND, () => T.HE)
        .with(w.pC.AVATAR, () => ({
            height: D.dGM,
            width: D.dGM
        }))
        .with(w.pC.AVATAR_DECORATION, () => ({
            height: D.dGM,
            width: D.dGM
        }))
        .with(w.pC.GUILD_BANNER, () => ({
            height: w._T,
            width: w.X_
        }))
        .with(w.pC.SCHEDULED_EVENT_IMAGE, () => ({
            height: w.xT,
            width: w.d6
        }))
        .with(w.pC.HOME_HEADER, () => ({
            height: w.Uo,
            width: w.N8
        }))
        .exhaustive();
}
function G(e) {
    let { zoomRatio: t, imageRotation: i, imageTransformCoordinates: n } = e;
    return 1 !== t || 0 !== i || 0 !== n.x || 0 !== n.y;
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
    imageTransformCoordinates: _,
    imageRotation: 0,
    zoomRatio: 1,
    startingCoordinates: {
        x: 0,
        y: 0
    },
    isDragging: !1,
    hasImageEdits: !1
};
function v(e, t) {
    var i, n, r, a, o, s;
    switch (t.type) {
        case 'SET_DIMENSIONS':
            return {
                ...e,
                imageDimensions: t.imageDimensions,
                cropDimensions: t.cropDimensions,
                dragBoundaries: t.dragBoundaries
            };
        case 'START_DRAGGING_IMAGE':
            return {
                ...e,
                startingCoordinates: t.startingCoordinates,
                isDragging: !0
            };
        case 'STOP_DRAGGING_IMAGE':
            return {
                ...e,
                isDragging: !1,
                hasImageEdits: G({
                    zoomRatio: e.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            };
        case 'ROTATE_IMAGE':
            return {
                ...e,
                imageRotation: t.imageRotation,
                imageTransformCoordinates: t.imageTransformCoordinates,
                imageDimensions: null !== (i = t.imageDimensions) && void 0 !== i ? i : e.imageDimensions,
                cropDimensions: null !== (n = t.cropDimensions) && void 0 !== n ? n : e.cropDimensions,
                dragBoundaries: null !== (r = t.dragBoundaries) && void 0 !== r ? r : e.dragBoundaries,
                hasImageEdits: G({
                    zoomRatio: e.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            };
        case 'SET_IMAGE_ZOOM_RATIO':
            return {
                ...e,
                imageTransformCoordinates: t.imageTransformCoordinates,
                zoomRatio: t.zoomRatio,
                dragBoundaries: t.dragBoundaries,
                hasImageEdits: G({
                    zoomRatio: t.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            };
        case 'RESET':
            return {
                ...e,
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: null !== (a = t.imageDimensions) && void 0 !== a ? a : e.imageDimensions,
                cropDimensions: null !== (o = t.cropDimensions) && void 0 !== o ? o : e.cropDimensions,
                dragBoundaries: null !== (s = t.dragBoundaries) && void 0 !== s ? s : e.dragBoundaries,
                hasImageEdits: !1
            };
        default:
            return (0, R.vE)(t);
    }
}
function y(e) {
    let { file: t, imgURI: i, transitionState: a, onCrop: l, onClose: R, uploadType: T = w.pC.AVATAR, showUpsellHeader: G = !1, analyticsPage: y } = e,
        O = r.useRef(_),
        b = r.useRef(null),
        B = r.useRef(null),
        [S, z] = r.useReducer(v, k),
        { cropDimensions: j, dragBoundaries: L, imageDimensions: P, imageRotation: V, zoomRatio: U, startingCoordinates: H, isDragging: F, hasImageEdits: X } = S,
        [K, Z] = r.useState(!1),
        [Y, W] = r.useState(0),
        { analyticsLocations: $ } = (0, m.ZP)(d.Z.IMAGE_CROPPING_MODAL),
        q = (0, g.Q3)('ImageEditingModal'),
        J = 'image/gif' === t.type;
    r.useEffect(() => {
        (0, f.Z)();
    }, []),
        r.useEffect(() => {
            J &&
                G &&
                p.default.track(D.rMx.OPEN_MODAL, {
                    type: D.jXE.CROP_GIF_MODAL,
                    location: { page: y },
                    location_stack: $
                });
        }, [G, y, J, $]);
    let Q = r.useCallback(
            (e, t, i, n) => {
                (O.current = (0, A.U$)(e, t, i)), null != b.current && (b.current.style.transform = 'translate3d('.concat(O.current.x, 'px, ').concat(O.current.y, 'px, 0) rotate(').concat(n, 'deg)'));
            },
            [b]
        ),
        ee = r.useCallback(() => {
            if (null == b.current || U > 1) return;
            let { width: e, height: t } = b.current.getBoundingClientRect(),
                { width: i, height: n } = (0, A.Es)(T, e, t, q),
                r = (0, A.AK)(T, i, n, t, q),
                a = (0, A.kH)(i, n, r);
            z({
                type: 'SET_DIMENSIONS',
                imageDimensions: {
                    width: i,
                    height: n
                },
                cropDimensions: r,
                dragBoundaries: a
            });
        }, [q, T, U]),
        et = r.useCallback((e) => {
            z({
                type: 'START_DRAGGING_IMAGE',
                startingCoordinates: {
                    x: e.clientX - O.current.x,
                    y: e.clientY - O.current.y
                }
            });
        }, []),
        ei = r.useCallback(
            (e) => {
                let { x: t, y: i } = O.current;
                if (F && (e.clientX !== t || e.clientY !== i)) Q(e.clientX - H.x, e.clientY - H.y, L, V);
            },
            [L, V, F, H.x, H.y, Q]
        ),
        en = r.useCallback(() => {
            z({
                type: 'STOP_DRAGGING_IMAGE',
                imageTransformCoordinates: O.current
            });
        }, []),
        er = r.useCallback(
            (e) => {
                if (null == P) return;
                let { width: t, height: i } = P,
                    n = (0, A.kH)(t * e, i * e, j),
                    { x: r, y: a } = O.current;
                ((0, s.inRange)(r, n.right, n.left) && (0, s.inRange)(a, n.top, n.bottom)) || Q(r, a, n, V),
                    z({
                        type: 'SET_IMAGE_ZOOM_RATIO',
                        zoomRatio: e,
                        dragBoundaries: n,
                        imageTransformCoordinates: O.current
                    });
            },
            [j, P, V, Q]
        ),
        ea = r.useCallback(
            (e, t) => {
                let { width: i, height: n } = e,
                    { width: r, height: a } = (0, A.Es)(T, n, i, q),
                    o = (0, A.AK)(T, r, a, i, q),
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
            [q, T]
        ),
        eo = r.useCallback(() => {
            var e;
            if (null == b.current || null == P) return;
            let t = (V + 90) % 360,
                { x: i, y: n } =
                    ((e = O.current.x),
                    {
                        x: -O.current.y,
                        y: e
                    });
            if (P.width !== P.height) {
                let { newImageDimensions: e, newCropDimensions: r, newDragBoundaries: a } = ea(P, U);
                Q(i, n, a, t),
                    z({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: O.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: r,
                        dragBoundaries: a
                    });
            } else
                Q(i, n, L, t),
                    z({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: O.current,
                        imageRotation: t
                    });
        }, [L, ea, P, V, Q, U]),
        es = r.useCallback(() => {
            if (null != b.current && null != P) {
                if (P.width !== P.height && (V - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: i } = ea(P, 1);
                    z({
                        type: 'RESET',
                        imageDimensions: e,
                        cropDimensions: t,
                        dragBoundaries: i
                    }),
                        Q(0, 0, i, 0);
                } else {
                    let e = (0, A.kH)(1 * P.width, 1 * P.height, j);
                    z({
                        type: 'RESET',
                        dragBoundaries: e
                    }),
                        Q(0, 0, e, 0);
                }
                W((e) => e + 1);
            }
        }, [j, ea, P, V, Q]),
        el = r.useCallback(() => {
            let e = N(T);
            return e.width !== e.height;
        }, [T]),
        eu = r.useCallback(() => {
            if (null == P) return {};
            let e = P.width / P.height,
                t = el() && e > w.MY ? j.height / P.height : 1,
                { width: i, height: n } = M(P, V);
            return {
                width: i * U * t,
                minWidth: i * U * t,
                height: n * U * t,
                minHeight: n * U * t
            };
        }, [j.height, P, V, el, U]),
        ec = r.useCallback(async () => {
            if (null != b.current) {
                if ((Z(!0), X)) {
                    let i;
                    let n = b.current,
                        r = N(T);
                    if (J)
                        try {
                            let { result: e, cancelFn: a } = await (0, A.$p)({
                                file: t,
                                image: n,
                                cropDimensions: j,
                                cropOriginCoordinates: O.current,
                                maxDimensions: r,
                                imageRotation: V
                            });
                            (B.current = a), (i = await e), (B.current = null);
                        } catch (t) {
                            var e;
                            throw (null === (e = B.current) || void 0 === e || e.call(B), (B.current = null), Error('Error cropping GIF: '.concat(t instanceof Error ? t.toString() : String(t))));
                        }
                    else
                        i = (0, u.PT)({
                            image: n,
                            cropDimensions: j,
                            cropOriginCoordinates: O.current,
                            maxDimensions: r,
                            imageRotation: V
                        });
                    await l(i, t);
                } else l(i, t);
                Z(!1), R();
            }
        }, [j, t, X, V, i, J, R, l, T]),
        ed = r.useCallback(() => {
            if (null != B.current) {
                B.current(), (B.current = null), Z(!1);
                return;
            }
            R();
        }, [R]);
    r.useEffect(
        () => (
            window.addEventListener('mouseup', en),
            window.addEventListener('resize', ee),
            () => {
                window.removeEventListener('mouseup', en), window.removeEventListener('resize', ee);
            }
        ),
        [ee, en]
    ),
        r.useEffect(() => {
            if (F) return window.addEventListener('mousemove', ei), () => window.removeEventListener('mousemove', ei);
        }, [ei, F]),
        r.useEffect(() => {
            if (null != B.current)
                return () => {
                    var e;
                    return null === (e = B.current) || void 0 === e ? void 0 : e.call(B);
                };
        }, []);
    let em = T === w.pC.AVATAR || T === w.pC.BANNER,
        eg = (0, E.M)(!em);
    return (0, n.jsx)(m.Gt, {
        value: $,
        children: (0, n.jsxs)(c.Y0X, {
            onAnimationEnd: ee,
            transitionState: a,
            size: c.CgR.MEDIUM,
            children: [
                G &&
                    !eg &&
                    (0, n.jsx)(h.Z, {
                        type: T,
                        analyticsPage: y,
                        analyticsSection: D.jXE.CROP_GIF_MODAL,
                        isGIF: J,
                        banner: i
                    }),
                (0, n.jsx)(c.xBx, {
                    className: x.modalHeader,
                    separator: !1,
                    children: (0, n.jsx)(c.X6q, {
                        variant: 'heading-lg/semibold',
                        children: I.intl.string(I.t.DxAYCA)
                    })
                }),
                (0, n.jsxs)(c.hzk, {
                    className: x.modalContent,
                    children: [
                        (0, n.jsxs)('div', {
                            className: x.editingContainer,
                            children: [
                                (0, n.jsx)('img', {
                                    style: {
                                        opacity: null == P ? 0 : 1,
                                        transform: 'translate3d('.concat(O.current.x, 'px, ').concat(O.current.y, 'px, 0) rotate(').concat(V, 'deg)'),
                                        ...eu()
                                    },
                                    className: o()(K ? x.imageDisabled : x.imageEnabled, x.rotationSupported),
                                    src: i,
                                    alt: 'avatar',
                                    ref: b,
                                    onMouseDown: et,
                                    draggable: !1
                                }),
                                (0, n.jsx)('div', {
                                    className: T === w.pC.AVATAR ? x.overlayAvatar : x.overlayBanner,
                                    style: {
                                        opacity: null == P ? 0 : 1,
                                        width: j.width,
                                        height: j.height
                                    }
                                })
                            ]
                        }),
                        (0, n.jsxs)('div', {
                            className: x.toolsContainer,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: x.zoomControls,
                                    children: [
                                        (0, n.jsx)(c.XBm, {
                                            size: 'xxs',
                                            className: x.zoomIcon
                                        }),
                                        (0, n.jsx)(
                                            c.iRW,
                                            {
                                                className: x.slider,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: er,
                                                disabled: K,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                'aria-label': I.intl.string(I.t.dnvZSk)
                                            },
                                            Y
                                        ),
                                        (0, n.jsx)(c.XBm, {
                                            size: 'md',
                                            className: x.zoomIcon
                                        })
                                    ]
                                }),
                                (0, n.jsx)(c.ua7, {
                                    text: I.intl.string(I.t.E36Wd3),
                                    'aria-label': I.intl.string(I.t.LzFiKC),
                                    children: (e) => {
                                        let { onClick: t, ...i } = e;
                                        return (0, n.jsx)(c.P3F, {
                                            onClick: eo,
                                            'aria-label': I.intl.string(I.t.LzFiKC),
                                            className: x.rotateButton,
                                            ...i,
                                            children: (0, n.jsx)(c.Vk2, {})
                                        });
                                    }
                                })
                            ]
                        }),
                        G &&
                            eg &&
                            (0, n.jsx)('div', {
                                children: (0, n.jsx)(C.Z, {
                                    uploadType: T,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: x.premiumUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, n.jsxs)(c.mzw, {
                    className: x.modalFooter,
                    children: [
                        (0, n.jsx)(c.zxk, {
                            className: x.resetButton,
                            look: c.zxk.Looks.LINK,
                            size: c.PhG.MIN,
                            color: c.zxk.Colors.PRIMARY,
                            onClick: es,
                            disabled: !X,
                            children: I.intl.string(I.t.yBZMsb)
                        }),
                        (0, n.jsx)(c.zxk, {
                            className: x.linkButton,
                            look: c.zxk.Looks.LINK,
                            size: c.PhG.MIN,
                            color: c.zxk.Colors.PRIMARY,
                            onClick: ed,
                            children: I.intl.string(I.t['9TG40t'])
                        }),
                        (0, n.jsx)(c.zxk, {
                            submitting: K,
                            onClick: ec,
                            children: I.intl.string(I.t.ZSHmKC)
                        })
                    ]
                })
            ]
        })
    });
}
