n.d(t, { default: () => y }), n(627341), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(392711),
    c = n(278074),
    u = n(36793),
    o = n(481060),
    h = n(100527),
    d = n(906732),
    g = n(540059),
    C = n(488499),
    m = n(222062),
    p = n(530329),
    E = n(626135),
    w = n(197712),
    A = n(511004),
    f = n(486324),
    x = n(981631),
    R = n(678916),
    k = n(388032),
    N = n(91536);
let b = (e, t) => {
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
function M(e) {
    return (0, c.EQ)(e)
        .with(f.pC.BANNER, () => ({
            height: f.f,
            width: f.L0
        }))
        .with(f.pC.VIDEO_BACKGROUND, () => R.HE)
        .with(f.pC.AVATAR, () => ({
            height: x.dGM,
            width: x.dGM
        }))
        .with(f.pC.AVATAR_DECORATION, () => ({
            height: x.dGM,
            width: x.dGM
        }))
        .with(f.pC.GUILD_BANNER, () => ({
            height: f._T,
            width: f.X_
        }))
        .with(f.pC.SCHEDULED_EVENT_IMAGE, () => ({
            height: f.xT,
            width: f.d6
        }))
        .with(f.pC.HOME_HEADER, () => ({
            height: f.Uo,
            width: f.N8
        }))
        .exhaustive();
}
function y(e) {
    let { file: t, imgURI: n, transitionState: a, onCrop: c, onClose: R, uploadType: y = f.pC.AVATAR, showUpsellHeader: v = !1, analyticsPage: _ } = e,
        [I, D] = r.useState({
            width: 0,
            height: 0
        }),
        [O, G] = r.useState({
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }),
        [S, j] = r.useState(!1),
        [L, B] = r.useState(1),
        [T, P] = r.useState({
            x: 0,
            y: 0
        }),
        [z, V] = r.useState(null),
        [U, H] = r.useState(0),
        [F, X] = r.useState(!1),
        [K, Y] = r.useState(!1),
        [Z, W] = r.useState(0),
        { analyticsLocations: $ } = (0, d.ZP)(h.Z.IMAGE_CROPPING_MODAL),
        q = (0, g.Q3)('ImageEditingModal'),
        J = r.useRef({
            x: 0,
            y: 0
        }),
        Q = r.useRef(null),
        ee = r.useRef(null),
        et = 'image/gif' === t.type;
    r.useEffect(() => {
        (0, A.Z)();
    }, []),
        r.useEffect(() => {
            et &&
                v &&
                E.default.track(x.rMx.OPEN_MODAL, {
                    type: x.jXE.CROP_GIF_MODAL,
                    location: { page: _ },
                    location_stack: $
                });
        }, [v, _, et, $]);
    let en = r.useCallback(() => {
            X(1 !== L || 0 !== U || 0 !== J.current.x || 0 !== J.current.y);
        }, [U, L]),
        ei = r.useCallback(
            (e, t, n, i) => {
                (J.current = (0, w.U$)(e, t, n)), H(i), null != Q.current && (Q.current.style.transform = 'translate3d('.concat(J.current.x, 'px, ').concat(J.current.y, 'px, 0) rotate(').concat(i, 'deg)'));
            },
            [Q]
        ),
        er = r.useCallback(() => {
            if (null == Q.current || L > 1) return;
            let { width: e, height: t } = Q.current.getBoundingClientRect(),
                { width: n, height: i } = (0, w.Es)(y, e, t, q),
                r = (0, w.AK)(y, n, i, t, q);
            V({
                width: n,
                height: i
            }),
                D(r),
                G((0, w.kH)(n, i, r));
        }, [q, y, L]),
        ea = r.useCallback((e) => {
            P({
                x: e.clientX - J.current.x,
                y: e.clientY - J.current.y
            }),
                j(!0);
        }, []),
        el = r.useCallback(
            (e) => {
                let { x: t, y: n } = J.current;
                if (S && (e.clientX !== t || e.clientY !== n)) ei(e.clientX - T.x, e.clientY - T.y, O, U);
            },
            [O, U, S, T.x, T.y, ei]
        ),
        es = r.useCallback(() => {
            j(!1), en();
        }, [en]),
        ec = r.useCallback(
            (e) => {
                if (null == z) return;
                let { width: t, height: n } = z,
                    i = (0, w.kH)(t * e, n * e, I),
                    { x: r, y: a } = J.current;
                ((0, s.inRange)(r, i.right, i.left) && (0, s.inRange)(a, i.top, i.bottom)) || ei(r, a, i, U), B(e), G(i);
            },
            [I, z, U, ei]
        ),
        eu = r.useCallback(
            (e, t) => {
                let { width: n, height: i } = e,
                    { width: r, height: a } = (0, w.Es)(y, i, n, q),
                    l = (0, w.AK)(y, r, a, n, q),
                    s = (0, w.kH)(r * t, a * t, l);
                return {
                    newImageDimensions: {
                        width: r,
                        height: a
                    },
                    newCropBoxSize: l,
                    newDragBoundaries: s
                };
            },
            [q, y]
        ),
        eo = r.useCallback(() => {
            var e;
            if (null == Q.current || null == z) return;
            let t = (U + 90) % 360,
                { x: n, y: i } =
                    ((e = J.current.x),
                    {
                        x: -J.current.y,
                        y: e
                    });
            if (z.width !== z.height) {
                let { newImageDimensions: e, newCropBoxSize: r, newDragBoundaries: a } = eu(z, L),
                    { width: l, height: s } = e;
                V({
                    width: l,
                    height: s
                }),
                    D(r),
                    G(a),
                    ei(n, i, a, t);
            } else ei(n, i, O, t);
        }, [O, eu, z, U, ei, L]),
        eh = r.useCallback(() => {
            if (null != Q.current && null != z) {
                if (z.width !== z.height && (U - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropBoxSize: t, newDragBoundaries: n } = eu(z, 1),
                        { width: i, height: r } = e;
                    V({
                        width: i,
                        height: r
                    }),
                        D(t),
                        G(n),
                        ei(0, 0, n, 0);
                } else {
                    let e = (0, w.kH)(1 * z.width, 1 * z.height, I);
                    G(e), ei(0, 0, e, 0);
                }
                B(1), H(0), X(!1), W((e) => e + 1);
            }
        }, [I, eu, z, U, ei]),
        ed = r.useCallback(() => {
            let e = M(y);
            return e.width !== e.height;
        }, [y]),
        eg = r.useCallback(() => {
            if (null == z) return {};
            let e = z.width / z.height,
                t = ed() && e > f.MY ? I.height / z.height : 1,
                { width: n, height: i } = b(z, U);
            return {
                width: n * L * t,
                minWidth: n * L * t,
                height: i * L * t,
                minHeight: i * L * t
            };
        }, [I.height, z, U, ed, L]),
        eC = r.useCallback(async () => {
            if (null != Q.current) {
                if ((Y(!0), F)) {
                    let n;
                    let i = Q.current,
                        r = M(y);
                    if (et)
                        try {
                            let { result: e, cancelFn: a } = await (0, w.$p)({
                                file: t,
                                image: i,
                                cropDimensions: I,
                                cropOriginCoordinates: J.current,
                                maxDimensions: r,
                                imageRotation: U
                            });
                            (ee.current = a), (n = await e), (ee.current = null);
                        } catch (t) {
                            var e;
                            throw (null === (e = ee.current) || void 0 === e || e.call(ee), (ee.current = null), Error('Error cropping GIF: '.concat(t instanceof Error ? t.toString() : String(t))));
                        }
                    else
                        n = (0, u.PT)({
                            image: i,
                            cropDimensions: I,
                            cropOriginCoordinates: J.current,
                            maxDimensions: r,
                            imageRotation: U
                        });
                    await c(n, t);
                } else c(n, t);
                Y(!1), R();
            }
        }, [I, t, F, U, n, et, R, c, y]),
        em = r.useCallback(() => {
            if (null != ee.current) {
                ee.current(), (ee.current = null), Y(!1);
                return;
            }
            R();
        }, [R]);
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
        r.useEffect(
            () => () => {
                null != ee.current && ee.current();
            },
            []
        ),
        r.useEffect(() => {
            if (S) return window.addEventListener('mousemove', el), () => window.removeEventListener('mousemove', el);
        }, [el, S]),
        r.useEffect(() => {
            en();
        }, [en, L, U]);
    let ep = y === f.pC.AVATAR || y === f.pC.BANNER,
        eE = (0, m.M)(!ep);
    return (0, i.jsx)(d.Gt, {
        value: $,
        children: (0, i.jsxs)(o.Y0X, {
            onAnimationEnd: er,
            transitionState: a,
            size: o.CgR.MEDIUM,
            children: [
                v &&
                    !eE &&
                    (0, i.jsx)(C.Z, {
                        type: y,
                        analyticsPage: _,
                        analyticsSection: x.jXE.CROP_GIF_MODAL,
                        isGIF: et,
                        banner: n
                    }),
                (0, i.jsx)(o.xBx, {
                    className: N.modalHeader,
                    separator: !1,
                    children: (0, i.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: k.intl.string(k.t.DxAYCA)
                    })
                }),
                (0, i.jsxs)(o.hzk, {
                    className: N.modalContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: N.editingContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    style: {
                                        opacity: null == z ? 0 : 1,
                                        transform: 'translate3d('.concat(J.current.x, 'px, ').concat(J.current.y, 'px, 0) rotate(').concat(U, 'deg)'),
                                        ...eg()
                                    },
                                    className: l()(K ? N.imageDisabled : N.imageEnabled, N.rotationSupported),
                                    src: n,
                                    alt: 'avatar',
                                    ref: Q,
                                    onMouseDown: ea,
                                    draggable: !1
                                }),
                                (0, i.jsx)('div', {
                                    className: y === f.pC.AVATAR ? N.overlayAvatar : N.overlayBanner,
                                    style: {
                                        opacity: null == z ? 0 : 1,
                                        width: I.width,
                                        height: I.height
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
                                        (0, i.jsx)(o.XBm, {
                                            size: 'xxs',
                                            className: N.zoomIcon
                                        }),
                                        (0, i.jsx)(
                                            o.iRW,
                                            {
                                                className: N.slider,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: ec,
                                                disabled: K,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                'aria-label': k.intl.string(k.t.dnvZSk)
                                            },
                                            Z
                                        ),
                                        (0, i.jsx)(o.XBm, {
                                            size: 'md',
                                            className: N.zoomIcon
                                        })
                                    ]
                                }),
                                (0, i.jsx)(o.ua7, {
                                    text: k.intl.string(k.t.E36Wd3),
                                    'aria-label': k.intl.string(k.t.LzFiKC),
                                    children: (e) => {
                                        let { onClick: t, ...n } = e;
                                        return (0, i.jsx)(o.P3F, {
                                            onClick: eo,
                                            'aria-label': k.intl.string(k.t.LzFiKC),
                                            className: N.rotateButton,
                                            ...n,
                                            children: (0, i.jsx)(o.Vk2, {})
                                        });
                                    }
                                })
                            ]
                        }),
                        v &&
                            eE &&
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(p.Z, {
                                    uploadType: y,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: N.premiumUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    className: N.modalFooter,
                    children: [
                        (0, i.jsx)(o.zxk, {
                            className: N.resetButton,
                            look: o.zxk.Looks.LINK,
                            size: o.PhG.MIN,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: eh,
                            disabled: !F,
                            children: k.intl.string(k.t.yBZMsb)
                        }),
                        (0, i.jsx)(o.zxk, {
                            className: N.linkButton,
                            look: o.zxk.Looks.LINK,
                            size: o.PhG.MIN,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: em,
                            children: k.intl.string(k.t['9TG40t'])
                        }),
                        (0, i.jsx)(o.zxk, {
                            submitting: K,
                            onClick: eC,
                            children: k.intl.string(k.t.ZSHmKC)
                        })
                    ]
                })
            ]
        })
    });
}
