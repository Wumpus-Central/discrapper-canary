n.d(t, { default: () => G }), n(627341), n(47120), n(411104);
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
function x(e, t) {
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
let I = {
        x: 0,
        y: 0
    },
    T = (e, t) => {
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
    let { zoomRatio: t, imageRotation: n, imageTransformCoordinates: i } = e;
    return 1 !== t || 0 !== n || 0 !== i.x || 0 !== i.y;
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
    var n, i, r, a, o, s;
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
                cropDimensions: null !== (i = t.cropDimensions) && void 0 !== i ? i : e.cropDimensions,
                dragBoundaries: null !== (r = t.dragBoundaries) && void 0 !== r ? r : e.dragBoundaries,
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
        j = r.useRef(I),
        S = r.useRef(null),
        B = r.useRef(null),
        [P, z] = r.useReducer(k, M),
        { cropDimensions: L, dragBoundaries: V, imageDimensions: U, imageRotation: H, zoomRatio: F, startingCoordinates: W, isDragging: X, hasImageEdits: K } = P,
        [Z, Y] = r.useState(!1),
        [$, q] = r.useState(0),
        { analyticsLocations: J } = (0, m.ZP)(d.Z.IMAGE_CROPPING_MODAL),
        Q = (0, g.Q3)('ImageEditingModal'),
        ee = 'image/gif' === t.type;
    r.useEffect(() => {
        (0, A.Z)();
    }, []),
        r.useEffect(() => {
            ee &&
                _ &&
                f.default.track(O.rMx.OPEN_MODAL, {
                    type: O.jXE.CROP_GIF_MODAL,
                    location: { page: G },
                    location_stack: J
                });
        }, [_, G, ee, J]);
    let et = r.useCallback(
            (e, t, n, i) => {
                (j.current = (0, R.U$)(e, t, n)), null != S.current && (S.current.style.transform = 'translate3d('.concat(j.current.x, 'px, ').concat(j.current.y, 'px, 0) rotate(').concat(i, 'deg)'));
            },
            [S]
        ),
        en = r.useCallback(() => {
            if (null == S.current || F > 1) return;
            let { width: e, height: t } = S.current.getBoundingClientRect(),
                { width: n, height: i } = (0, R.Es)(y, e, t, Q),
                r = (0, R.AK)(y, n, i, t, Q),
                a = (0, R.kH)(n, i, r);
            z({
                type: 'SET_DIMENSIONS',
                imageDimensions: {
                    width: n,
                    height: i
                },
                cropDimensions: r,
                dragBoundaries: a
            });
        }, [Q, y, F]),
        ei = r.useCallback((e) => {
            z({
                type: 'START_DRAGGING_IMAGE',
                startingCoordinates: {
                    x: e.clientX - j.current.x,
                    y: e.clientY - j.current.y
                }
            });
        }, []),
        er = r.useCallback(
            (e) => {
                let { x: t, y: n } = j.current;
                if (X && (e.clientX !== t || e.clientY !== n)) et(e.clientX - W.x, e.clientY - W.y, V, H);
            },
            [V, H, X, W.x, W.y, et]
        ),
        ea = r.useCallback(() => {
            z({
                type: 'STOP_DRAGGING_IMAGE',
                imageTransformCoordinates: j.current
            });
        }, []),
        eo = r.useCallback(
            (e) => {
                if (null == U) return;
                let { width: t, height: n } = U,
                    i = (0, R.kH)(t * e, n * e, L),
                    { x: r, y: a } = j.current;
                ((0, s.inRange)(r, i.right, i.left) && (0, s.inRange)(a, i.top, i.bottom)) || et(r, a, i, H),
                    z({
                        type: 'SET_IMAGE_ZOOM_RATIO',
                        zoomRatio: e,
                        dragBoundaries: i,
                        imageTransformCoordinates: j.current
                    });
            },
            [L, U, H, et]
        ),
        es = r.useCallback(
            (e, t) => {
                let { width: n, height: i } = e,
                    { width: r, height: a } = (0, R.Es)(y, i, n, Q),
                    o = (0, R.AK)(y, r, a, n, Q),
                    s = (0, R.kH)(r * t, a * t, o);
                return {
                    newImageDimensions: {
                        width: r,
                        height: a
                    },
                    newCropDimensions: o,
                    newDragBoundaries: s
                };
            },
            [Q, y]
        ),
        el = r.useCallback(() => {
            var e;
            if (null == S.current || null == U) return;
            let t = (H + 90) % 360,
                { x: n, y: i } =
                    ((e = j.current.x),
                    {
                        x: -j.current.y,
                        y: e
                    });
            if (U.width !== U.height) {
                let { newImageDimensions: e, newCropDimensions: r, newDragBoundaries: a } = es(U, F);
                et(n, i, a, t),
                    z({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: j.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: r,
                        dragBoundaries: a
                    });
            } else
                et(n, i, V, t),
                    z({
                        type: 'ROTATE_IMAGE',
                        imageTransformCoordinates: j.current,
                        imageRotation: t
                    });
        }, [V, es, U, H, et, F]),
        ec = r.useCallback(() => {
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
        eu = r.useCallback(() => {
            let e = v(y);
            return e.width !== e.height;
        }, [y]),
        ed = r.useCallback(() => {
            if (null == U) return {};
            let e = U.width / U.height,
                t = eu() && e > w.MY ? L.height / U.height : 1,
                { width: n, height: i } = T(U, H);
            return {
                width: n * F * t,
                minWidth: n * F * t,
                height: i * F * t,
                minHeight: i * F * t
            };
        }, [L.height, U, H, eu, F]),
        em = r.useCallback(async () => {
            if (null != S.current) {
                if ((Y(!0), K)) {
                    let n;
                    let i = S.current,
                        r = v(y);
                    if (ee)
                        try {
                            let { result: e, cancelFn: a } = await (0, R.$p)({
                                file: t,
                                image: i,
                                cropDimensions: L,
                                cropOriginCoordinates: j.current,
                                maxDimensions: r,
                                imageRotation: H
                            });
                            (B.current = a), (n = await e), (B.current = null);
                        } catch (t) {
                            var e;
                            throw (null === (e = B.current) || void 0 === e || e.call(B), (B.current = null), Error('Error cropping GIF: '.concat(t instanceof Error ? t.toString() : String(t))));
                        }
                    else
                        n = (0, c.PT)({
                            image: i,
                            cropDimensions: L,
                            cropOriginCoordinates: j.current,
                            maxDimensions: r,
                            imageRotation: H
                        });
                    await l(n, t);
                } else l(n, t);
                Y(!1), C();
            }
        }, [L, t, K, H, n, ee, C, l, y]),
        eg = r.useCallback(() => {
            if (null != B.current) {
                B.current(), (B.current = null), Y(!1);
                return;
            }
            C();
        }, [C]);
    r.useEffect(
        () => (
            window.addEventListener('mouseup', ea),
            window.addEventListener('resize', en),
            () => {
                window.removeEventListener('mouseup', ea), window.removeEventListener('resize', en);
            }
        ),
        [en, ea]
    ),
        r.useEffect(() => {
            if (X) return window.addEventListener('mousemove', er), () => window.removeEventListener('mousemove', er);
        }, [er, X]),
        r.useEffect(() => {
            if (null != B.current)
                return () => {
                    var e;
                    return null === (e = B.current) || void 0 === e ? void 0 : e.call(B);
                };
        }, []);
    let eh = y === w.pC.AVATAR || y === w.pC.BANNER,
        ep = (0, p.M)(!eh);
    return (0, i.jsx)(m.Gt, {
        value: J,
        children: (0, i.jsxs)(u.Y0X, {
            onAnimationEnd: en,
            transitionState: a,
            size: u.CgR.MEDIUM,
            children: [
                _ &&
                    !ep &&
                    (0, i.jsx)(h.Z, {
                        type: y,
                        analyticsPage: G,
                        analyticsSection: O.jXE.CROP_GIF_MODAL,
                        isGIF: ee,
                        banner: n
                    }),
                (0, i.jsxs)(u.xBx, {
                    className: D.modalHeader,
                    separator: !1,
                    children: [
                        (0, i.jsx)(u.X6q, {
                            variant: 'heading-lg/semibold',
                            children: b.NW.string(b.t.DxAYCA)
                        }),
                        (0, i.jsx)(u.olH, {
                            onClick: C,
                            className: D.modalCloseButton
                        })
                    ]
                }),
                (0, i.jsxs)(u.hzk, {
                    className: D.modalContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: D.editingContainer,
                            children: [
                                (0, i.jsx)('img', {
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
                                    onMouseDown: ei,
                                    draggable: !1
                                }),
                                (0, i.jsx)('div', {
                                    className: y === w.pC.AVATAR ? D.overlayAvatar : D.overlayBanner,
                                    style: {
                                        opacity: +(null != U),
                                        width: L.width,
                                        height: L.height
                                    }
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: D.toolsContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: D.zoomControls,
                                    children: [
                                        (0, i.jsx)(u.XBm, {
                                            size: 'xxs',
                                            className: D.zoomIcon
                                        }),
                                        (0, i.jsx)(
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
                                        (0, i.jsx)(u.XBm, {
                                            size: 'md',
                                            className: D.zoomIcon
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
                                            x(
                                                N(
                                                    {
                                                        onClick: el,
                                                        'aria-label': b.NW.string(b.t.LzFiKC),
                                                        className: D.rotateButton
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
                        _ &&
                            ep &&
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(E.Z, {
                                    uploadType: y,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: D.premiumUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(u.mzw, {
                    className: D.modalFooter,
                    children: [
                        (0, i.jsx)(u.zxk, {
                            className: D.resetButton,
                            look: u.zxk.Looks.LINK,
                            size: u.PhG.MIN,
                            color: u.zxk.Colors.PRIMARY,
                            onClick: ec,
                            disabled: !K,
                            children: b.NW.string(b.t.yBZMsb)
                        }),
                        (0, i.jsx)(u.zxk, {
                            className: D.linkButton,
                            look: u.zxk.Looks.LINK,
                            size: u.PhG.MIN,
                            color: u.zxk.Colors.PRIMARY,
                            onClick: eg,
                            children: b.NW.string(b.t['9TG40t'])
                        }),
                        (0, i.jsx)(u.zxk, {
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
