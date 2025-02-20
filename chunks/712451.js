n.d(t, { default: () => G }), n(627341), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
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
    f = n(626135),
    C = n(823379),
    R = n(197712),
    A = n(511004),
    w = n(486324),
    O = n(981631),
    y = n(678916),
    b = n(388032),
    D = n(488629);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
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
        y: 0
    },
    T = (e, t) => {
        let { width: n, height: r } = e;
        return t % 180 != 0
            ? {
                  width: r,
                  height: n
              }
            : {
                  width: n,
                  height: r
              };
    };
function v(e) {
    return (0, l.EQ)(e)
        .with(w.pC.BANNER, () => ({
            height: w.f,
            width: w.L0
        }))
        .with(w.pC.VIDEO_BACKGROUND, () => y.HE)
        .with(w.pC.AVATAR, () => ({
            height: O.dGM,
            width: O.dGM
        }))
        .with(w.pC.AVATAR_DECORATION, () => ({
            height: O.dGM,
            width: O.dGM
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
function _(e) {
    let { zoomRatio: t, imageRotation: n, imageTransformCoordinates: r } = e;
    return 1 !== t || 0 !== n || 0 !== r.x || 0 !== r.y;
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
function k(e, t) {
    var n, r, i, a, o, s;
    switch (t.type) {
        case 'SET_DIMENSIONS':
            return x(N({}, e), {
                imageDimensions: t.imageDimensions,
                cropDimensions: t.cropDimensions,
                dragBoundaries: t.dragBoundaries
            });
        case 'START_DRAGGING_IMAGE':
            return x(N({}, e), {
                startingCoordinates: t.startingCoordinates,
                isDragging: !0
            });
        case 'STOP_DRAGGING_IMAGE':
            return x(N({}, e), {
                isDragging: !1,
                hasImageEdits: _({
                    zoomRatio: e.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'ROTATE_IMAGE':
            return x(N({}, e), {
                imageRotation: t.imageRotation,
                imageTransformCoordinates: t.imageTransformCoordinates,
                imageDimensions: null !== (n = t.imageDimensions) && void 0 !== n ? n : e.imageDimensions,
                cropDimensions: null !== (r = t.cropDimensions) && void 0 !== r ? r : e.cropDimensions,
                dragBoundaries: null !== (i = t.dragBoundaries) && void 0 !== i ? i : e.dragBoundaries,
                hasImageEdits: _({
                    zoomRatio: e.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'SET_IMAGE_ZOOM_RATIO':
            return x(N({}, e), {
                imageTransformCoordinates: t.imageTransformCoordinates,
                zoomRatio: t.zoomRatio,
                dragBoundaries: t.dragBoundaries,
                hasImageEdits: _({
                    zoomRatio: t.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates
                })
            });
        case 'RESET':
            return x(N({}, e), {
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: null !== (a = t.imageDimensions) && void 0 !== a ? a : e.imageDimensions,
                cropDimensions: null !== (o = t.cropDimensions) && void 0 !== o ? o : e.cropDimensions,
                dragBoundaries: null !== (s = t.dragBoundaries) && void 0 !== s ? s : e.dragBoundaries,
                hasImageEdits: !1
            });
        default:
            return (0, C.vE)(t);
    }
}
function G(e) {
    let { file: t, imgURI: n, transitionState: a, onCrop: l, onClose: C, uploadType: y = w.pC.AVATAR, showUpsellHeader: _ = !1, analyticsPage: G } = e,
        j = i.useRef(I),
        S = i.useRef(null),
        B = i.useRef(null),
        [P, z] = i.useReducer(k, M),
        { cropDimensions: L, dragBoundaries: V, imageDimensions: U, imageRotation: H, zoomRatio: F, startingCoordinates: W, isDragging: X, hasImageEdits: K } = P,
        [Z, Y] = i.useState(!1),
        [$, q] = i.useState(0),
        { analyticsLocations: J } = (0, m.ZP)(d.Z.IMAGE_CROPPING_MODAL),
        Q = (0, g.Q3)('ImageEditingModal'),
        ee = 'image/gif' === t.type;
    i.useEffect(() => {
        (0, A.Z)();
    }, []),
        i.useEffect(() => {
            ee &&
                _ &&
                f.default.track(O.rMx.OPEN_MODAL, {
                    type: O.jXE.CROP_GIF_MODAL,
                    location: { page: G },
                    location_stack: J
                });
        }, [_, G, ee, J]);
    let et = i.useCallback(
            (e, t, n, r) => {
                (j.current = (0, R.U$)(e, t, n)), null != S.current && (S.current.style.transform = 'translate3d('.concat(j.current.x, 'px, ').concat(j.current.y, 'px, 0) rotate(').concat(r, 'deg)'));
            },
            [S]
        ),
        en = i.useCallback(() => {
            if (null == S.current || F > 1) return;
            let { width: e, height: t } = S.current.getBoundingClientRect(),
                { width: n, height: r } = (0, R.Es)(y, e, t, Q),
                i = (0, R.AK)(y, n, r, t, Q),
                a = (0, R.kH)(n, r, i);
            z({
                type: 'SET_DIMENSIONS',
                imageDimensions: {
                    width: n,
                    height: r
                },
                cropDimensions: i,
                dragBoundaries: a
            });
        }, [Q, y, F]),
        er = i.useCallback((e) => {
            z({
                type: 'START_DRAGGING_IMAGE',
                startingCoordinates: {
                    x: e.clientX - j.current.x,
                    y: e.clientY - j.current.y
                }
            });
        }, []),
        ei = i.useCallback(
            (e) => {
                let { x: t, y: n } = j.current;
                if (X && (e.clientX !== t || e.clientY !== n)) et(e.clientX - W.x, e.clientY - W.y, V, H);
            },
            [V, H, X, W.x, W.y, et]
        ),
        ea = i.useCallback(() => {
            z({
                type: 'STOP_DRAGGING_IMAGE',
                imageTransformCoordinates: j.current
            });
        }, []),
        eo = i.useCallback(
            (e) => {
                if (null == U) return;
                let { width: t, height: n } = U,
                    r = (0, R.kH)(t * e, n * e, L),
                    { x: i, y: a } = j.current;
                ((0, s.inRange)(i, r.right, r.left) && (0, s.inRange)(a, r.top, r.bottom)) || et(i, a, r, H),
                    z({
                        type: 'SET_IMAGE_ZOOM_RATIO',
                        zoomRatio: e,
                        dragBoundaries: r,
                        imageTransformCoordinates: j.current
                    });
            },
            [L, U, H, et]
        ),
        es = i.useCallback(
            (e, t) => {
                let { width: n, height: r } = e,
                    { width: i, height: a } = (0, R.Es)(y, r, n, Q),
                    o = (0, R.AK)(y, i, a, n, Q),
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
            [Q, y]
        ),
        el = i.useCallback(() => {
            var e;
            if (null == S.current || null == U) return;
            let t = (H + 90) % 360,
                { x: n, y: r } =
                    ((e = j.current.x),
                    {
                        x: -j.current.y,
                        y: e
                    });
            if (U.width !== U.height) {
                let { newImageDimensions: e, newCropDimensions: i, newDragBoundaries: a } = es(U, F);
                et(n, r, a, t),
                    z({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: j.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: i,
                        dragBoundaries: a
                    });
            } else
                et(n, r, V, t),
                    z({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: j.current,
                        imageRotation: t
                    });
        }, [V, es, U, H, et, F]),
        ec = i.useCallback(() => {
            if (null != S.current && null != U) {
                if (U.width !== U.height && (H - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: n } = es(U, 1);
                    z({
                        type: 'RESET',
                        imageDimensions: e,
                        cropDimensions: t,
                        dragBoundaries: n
                    }),
                        et(0, 0, n, 0);
                } else {
                    let e = (0, R.kH)(+U.width, +U.height, L);
                    z({
                        type: 'RESET',
                        dragBoundaries: e
                    }),
                        et(0, 0, e, 0);
                }
                q((e) => e + 1);
            }
        }, [L, es, U, H, et]),
        eu = i.useCallback(() => {
            let e = v(y);
            return e.width !== e.height;
        }, [y]),
        ed = i.useCallback(() => {
            if (null == U) return {};
            let e = U.width / U.height,
                t = eu() && e > w.MY ? L.height / U.height : 1,
                { width: n, height: r } = T(U, H);
            return {
                width: n * F * t,
                minWidth: n * F * t,
                height: r * F * t,
                minHeight: r * F * t
            };
        }, [L.height, U, H, eu, F]),
        em = i.useCallback(async () => {
            let e;
            if (null == S.current) return;
            Y(!0);
            let n = S.current,
                r = v(y);
            if (ee)
                try {
                    let { result: i, cancelFn: a } = await (0, R.$p)({
                        file: t,
                        image: n,
                        cropDimensions: L,
                        cropOriginCoordinates: j.current,
                        maxDimensions: r,
                        imageRotation: H
                    });
                    (B.current = a), (e = await i), (B.current = null);
                } catch (e) {
                    var i;
                    throw (null === (i = B.current) || void 0 === i || i.call(B), (B.current = null), Error('Error cropping GIF: '.concat(e instanceof Error ? e.toString() : String(e))));
                }
            else
                e = (0, c.PT)({
                    image: n,
                    cropDimensions: L,
                    cropOriginCoordinates: j.current,
                    maxDimensions: r,
                    imageRotation: H
                });
            await l(e, t), Y(!1), C();
        }, [L, t, H, ee, C, l, y]),
        eg = i.useCallback(() => {
            if (null != B.current) {
                B.current(), (B.current = null), Y(!1);
                return;
            }
            C();
        }, [C]);
    i.useEffect(
        () => (
            window.addEventListener('mouseup', ea),
            window.addEventListener('resize', en),
            () => {
                window.removeEventListener('mouseup', ea), window.removeEventListener('resize', en);
            }
        ),
        [en, ea]
    ),
        i.useEffect(() => {
            if (X) return window.addEventListener('mousemove', ei), () => window.removeEventListener('mousemove', ei);
        }, [ei, X]),
        i.useEffect(() => {
            if (null != B.current)
                return () => {
                    var e;
                    return null === (e = B.current) || void 0 === e ? void 0 : e.call(B);
                };
        }, []);
    let eh = y === w.pC.AVATAR || y === w.pC.BANNER,
        ep = (0, p.M)(!eh);
    return (0, r.jsx)(m.Gt, {
        value: J,
        children: (0, r.jsxs)(u.Y0X, {
            onAnimationEnd: en,
            transitionState: a,
            size: u.CgR.MEDIUM,
            children: [
                _ &&
                    !ep &&
                    (0, r.jsx)(h.Z, {
                        type: y,
                        analyticsPage: G,
                        analyticsSection: O.jXE.CROP_GIF_MODAL,
                        isGIF: ee,
                        banner: n
                    }),
                (0, r.jsxs)(u.xBx, {
                    className: D.modalHeader,
                    separator: !1,
                    children: [
                        (0, r.jsx)(u.X6q, {
                            variant: 'heading-lg/semibold',
                            children: b.NW.string(b.t.DxAYCA)
                        }),
                        (0, r.jsx)(u.olH, {
                            onClick: C,
                            className: D.modalCloseButton
                        })
                    ]
                }),
                (0, r.jsxs)(u.hzk, {
                    className: D.modalContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: D.editingContainer,
                            children: [
                                (0, r.jsx)('img', {
                                    style: N(
                                        {
                                            opacity: +(null != U),
                                            transform: 'translate3d('.concat(j.current.x, 'px, ').concat(j.current.y, 'px, 0) rotate(').concat(H, 'deg)')
                                        },
                                        ed()
                                    ),
                                    className: o()(Z ? D.imageDisabled : D.imageEnabled, D.rotationSupported),
                                    src: n,
                                    alt: 'avatar',
                                    ref: S,
                                    onMouseDown: er,
                                    draggable: !1
                                }),
                                (0, r.jsx)('div', {
                                    className: y === w.pC.AVATAR ? D.overlayAvatar : D.overlayBanner,
                                    style: {
                                        opacity: +(null != U),
                                        width: L.width,
                                        height: L.height
                                    }
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: D.toolsContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: D.zoomControls,
                                    children: [
                                        (0, r.jsx)(u.XBm, {
                                            size: 'xxs',
                                            className: D.zoomIcon
                                        }),
                                        (0, r.jsx)(
                                            u.iRW,
                                            {
                                                className: D.slider,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: eo,
                                                disabled: Z,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                'aria-label': b.NW.string(b.t.dnvZSk)
                                            },
                                            $
                                        ),
                                        (0, r.jsx)(u.XBm, {
                                            size: 'md',
                                            className: D.zoomIcon
                                        })
                                    ]
                                }),
                                (0, r.jsx)(u.ua7, {
                                    text: b.NW.string(b.t.E36Wd3),
                                    'aria-label': b.NW.string(b.t.LzFiKC),
                                    children: (e) => {
                                        var { onClick: t } = e,
                                            n = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    i = (function (e, t) {
                                                        if (null == e) return {};
                                                        var n,
                                                            r,
                                                            i = {},
                                                            a = Object.keys(e);
                                                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                        return i;
                                                    })(e, t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var a = Object.getOwnPropertySymbols(e);
                                                    for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                                }
                                                return i;
                                            })(e, ['onClick']);
                                        return (0, r.jsx)(
                                            u.P3F,
                                            x(
                                                N(
                                                    {
                                                        onClick: el,
                                                        'aria-label': b.NW.string(b.t.LzFiKC),
                                                        className: D.rotateButton
                                                    },
                                                    n
                                                ),
                                                { children: (0, r.jsx)(u.Vk2, {}) }
                                            )
                                        );
                                    }
                                })
                            ]
                        }),
                        _ &&
                            ep &&
                            (0, r.jsx)('div', {
                                children: (0, r.jsx)(E.Z, {
                                    uploadType: y,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: D.premiumUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, r.jsxs)(u.mzw, {
                    className: D.modalFooter,
                    children: [
                        (0, r.jsx)(u.zxk, {
                            className: D.resetButton,
                            look: u.zxk.Looks.LINK,
                            size: u.PhG.MIN,
                            color: u.zxk.Colors.PRIMARY,
                            onClick: ec,
                            disabled: !K,
                            children: b.NW.string(b.t.yBZMsb)
                        }),
                        (0, r.jsx)(u.zxk, {
                            className: D.linkButton,
                            look: u.zxk.Looks.LINK,
                            size: u.PhG.MIN,
                            color: u.zxk.Colors.PRIMARY,
                            onClick: eg,
                            children: b.NW.string(b.t['9TG40t'])
                        }),
                        (0, r.jsx)(u.zxk, {
                            submitting: Z,
                            onClick: em,
                            children: b.NW.string(b.t.ZSHmKC)
                        })
                    ]
                })
            ]
        })
    });
}
