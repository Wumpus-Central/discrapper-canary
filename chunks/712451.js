n.d(e, { default: () => b }), n(627341), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(392711),
    c = n(278074),
    o = n(36793),
    u = n(481060),
    h = n(100527),
    d = n(906732),
    p = n(540059),
    C = n(488499),
    g = n(222062),
    m = n(530329),
    E = n(626135),
    A = n(197712),
    w = n(511004),
    x = n(486324),
    f = n(981631),
    R = n(678916),
    N = n(388032),
    k = n(310857);
let M = (t, e) => {
    let { width: n, height: i } = t;
    return e % 180 != 0
        ? {
              width: i,
              height: n
          }
        : {
              width: n,
              height: i
          };
};
function v(t) {
    return (0, c.EQ)(t)
        .with(x.pC.BANNER, () => ({
            height: x.f,
            width: x.L0
        }))
        .with(x.pC.VIDEO_BACKGROUND, () => R.HE)
        .with(x.pC.AVATAR, () => ({
            height: f.dGM,
            width: f.dGM
        }))
        .with(x.pC.AVATAR_DECORATION, () => ({
            height: f.dGM,
            width: f.dGM
        }))
        .with(x.pC.GUILD_BANNER, () => ({
            height: x._T,
            width: x.X_
        }))
        .with(x.pC.SCHEDULED_EVENT_IMAGE, () => ({
            height: x.xT,
            width: x.d6
        }))
        .with(x.pC.HOME_HEADER, () => ({
            height: x.Uo,
            width: x.N8
        }))
        .exhaustive();
}
function b(t) {
    let { file: e, imgURI: n, transitionState: a, allowSkip: c = !1, onCrop: R, onClose: b, uploadType: y = x.pC.AVATAR, showUpsellHeader: _ = !1, analyticsPage: D } = t,
        [L, I] = r.useState({
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
        [B, P] = r.useState(1),
        [T, z] = r.useState({
            x: 0,
            y: 0
        }),
        [V, U] = r.useState(null),
        [H, F] = r.useState(0),
        [X, K] = r.useState(!1),
        { analyticsLocations: Y } = (0, d.ZP)(h.Z.IMAGE_CROPPING_MODAL),
        Z = (0, p.Q3)('ImageCroppingNModal'),
        W = r.useRef({
            x: 0,
            y: 0
        }),
        $ = r.useRef(null),
        q = r.useRef(null),
        J = 'image/gif' === e.type;
    r.useEffect(() => {
        (0, w.Z)();
    }, []),
        r.useEffect(() => {
            J &&
                _ &&
                E.default.track(f.rMx.OPEN_MODAL, {
                    type: f.jXE.CROP_GIF_MODAL,
                    location: { page: D },
                    location_stack: Y
                });
        }, [_, D, J, Y]);
    let Q = r.useCallback(
            (t, e, n, i) => {
                (W.current = (0, A.U$)(t, e, n)), F(i), null != $.current && ($.current.style.transform = 'translate3d('.concat(W.current.x, 'px, ').concat(W.current.y, 'px, 0) rotate(').concat(i, 'deg)'));
            },
            [$]
        ),
        tt = r.useCallback(() => {
            if (null == $.current || B > 1) return;
            let { width: t, height: e } = $.current.getBoundingClientRect(),
                { width: n, height: i } = (0, A.Es)(y, t, e, Z),
                r = (0, A.AK)(y, n, i, e, Z);
            U({
                width: n,
                height: i
            }),
                I(r),
                G((0, A.kH)(n, i, r));
        }, [Z, y, B]),
        te = r.useCallback((t) => {
            z({
                x: t.clientX - W.current.x,
                y: t.clientY - W.current.y
            }),
                j(!0);
        }, []),
        tn = r.useCallback(
            (t) => {
                let { x: e, y: n } = W.current;
                if (S && (t.clientX !== e || t.clientY !== n)) Q(t.clientX - T.x, t.clientY - T.y, O, H);
            },
            [O, H, S, T.x, T.y, Q]
        ),
        ti = r.useCallback(() => {
            j(!1);
        }, []),
        tr = r.useCallback(
            (t) => {
                if (null == V) return;
                let { width: e, height: n } = V,
                    i = (0, A.kH)(e * t, n * t, L),
                    { x: r, y: a } = W.current;
                ((0, s.inRange)(r, i.right, i.left) && (0, s.inRange)(a, i.top, i.bottom)) || Q(r, a, i, H), P(t), G(i);
            },
            [L, V, H, Q]
        ),
        ta = r.useCallback(() => {
            var t;
            if (null == $.current || null == V) return;
            let e = (H + 90) % 360,
                { width: n, height: i } = V,
                { width: r, height: a } = (0, A.Es)(y, i, n, Z),
                l = (0, A.AK)(y, r, a, n, Z),
                s = (0, A.kH)(r * B, a * B, l),
                { x: c, y: o } =
                    ((t = W.current.x),
                    {
                        x: -W.current.y,
                        y: t
                    });
            U({
                width: r,
                height: a
            }),
                I(l),
                G(s),
                Q(c, o, s, e);
        }, [V, H, Z, Q, y, B]),
        tl = r.useCallback(() => {
            let t = v(y);
            return t.width !== t.height;
        }, [y]),
        ts = r.useCallback(() => {
            if (null == V) return {};
            let t = V.width / V.height,
                e = tl() && t > x.MY ? L.height / V.height : 1,
                { width: n, height: i } = M(V, H);
            return {
                width: n * B * e,
                minWidth: n * B * e,
                height: i * B * e,
                minHeight: i * B * e
            };
        }, [L.height, V, H, tl, B]),
        tc = r.useCallback(async () => {
            let t;
            if (null == $.current) return;
            K(!0);
            let n = $.current,
                i = v(y);
            if (J)
                try {
                    let { result: r, cancelFn: a } = await (0, A.$p)({
                        file: e,
                        image: n,
                        cropDimensions: L,
                        cropOriginCoordinates: W.current,
                        maxDimensions: i,
                        imageRotation: H
                    });
                    (q.current = a), (t = await r), (q.current = null);
                } catch (t) {
                    var r;
                    throw (null === (r = q.current) || void 0 === r || r.call(q), (q.current = null), Error('Error cropping GIF: '.concat(t instanceof Error ? t.toString() : String(t))));
                }
            else
                t = (0, o.PT)({
                    image: n,
                    cropDimensions: L,
                    cropOriginCoordinates: W.current,
                    maxDimensions: i,
                    imageRotation: H
                });
            await R(t, e), K(!1), b();
        }, [L, e, H, J, b, R, y]),
        to = r.useCallback(() => {
            if (null != q.current) {
                q.current(), (q.current = null), K(!1);
                return;
            }
            b();
        }, [b]);
    r.useEffect(
        () => (
            window.addEventListener('mouseup', ti),
            window.addEventListener('resize', tt),
            () => {
                window.removeEventListener('mouseup', ti), window.removeEventListener('resize', tt);
            }
        ),
        [tt, ti]
    ),
        r.useEffect(
            () => () => {
                null != q.current && q.current();
            },
            []
        ),
        r.useEffect(() => {
            if (S) return window.addEventListener('mousemove', tn), () => window.removeEventListener('mousemove', tn);
        }, [tn, S]);
    let tu = y === x.pC.AVATAR || y === x.pC.BANNER,
        th = (0, g.M)(!tu);
    return (0, i.jsx)(d.Gt, {
        value: Y,
        children: (0, i.jsxs)(u.Y0X, {
            onAnimationEnd: tt,
            transitionState: a,
            size: u.CgR.MEDIUM,
            children: [
                _ &&
                    !th &&
                    (0, i.jsx)(C.Z, {
                        type: y,
                        analyticsPage: D,
                        analyticsSection: f.jXE.CROP_GIF_MODAL,
                        isGIF: J,
                        banner: n
                    }),
                (0, i.jsx)(u.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(u.vwX, {
                        className: k.titleCase,
                        tag: u.RB0.H1,
                        children: N.intl.string(N.t.DxAYCA)
                    })
                }),
                (0, i.jsxs)(u.hzk, {
                    className: k.modalContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: k.editingContainer,
                            children: [
                                (0, i.jsx)('img', {
                                    style: {
                                        opacity: null == V ? 0 : 1,
                                        transform: 'translate3d('.concat(W.current.x, 'px, ').concat(W.current.y, 'px, 0) rotate(').concat(H, 'deg)'),
                                        ...ts()
                                    },
                                    className: l()(X ? k.imageDisabled : k.imageEnabled, k.rotationSupported),
                                    src: n,
                                    alt: 'avatar',
                                    ref: $,
                                    onMouseDown: te,
                                    draggable: !1
                                }),
                                (0, i.jsx)('div', {
                                    className: y === x.pC.AVATAR ? k.overlayAvatar : k.overlayBanner,
                                    style: {
                                        opacity: null == V ? 0 : 1,
                                        width: L.width,
                                        height: L.height
                                    }
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: k.toolsContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: k.zoomControls,
                                    children: [
                                        (0, i.jsx)(u.XBm, {
                                            size: 'xxs',
                                            className: k.zoomIcon
                                        }),
                                        (0, i.jsx)(u.iRW, {
                                            className: k.slider,
                                            initialValue: 1,
                                            minValue: 1,
                                            maxValue: 2,
                                            keyboardStep: 0.025,
                                            asValueChanges: tr,
                                            disabled: X,
                                            equidistant: !0,
                                            hideBubble: !0,
                                            'aria-label': N.intl.string(N.t.dnvZSk)
                                        }),
                                        (0, i.jsx)(u.XBm, {
                                            size: 'md',
                                            className: k.zoomIcon
                                        })
                                    ]
                                }),
                                (0, i.jsx)(u.ua7, {
                                    text: N.intl.string(N.t.E36Wd3),
                                    'aria-label': N.intl.string(N.t.LzFiKC),
                                    children: (t) => {
                                        let { onClick: e, ...n } = t;
                                        return (0, i.jsx)(u.P3F, {
                                            onClick: ta,
                                            'aria-label': N.intl.string(N.t.LzFiKC),
                                            className: k.rotateButton,
                                            ...n,
                                            children: (0, i.jsx)(u.Vk2, {})
                                        });
                                    }
                                })
                            ]
                        }),
                        _ &&
                            th &&
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(m.Z, {
                                    uploadType: y,
                                    showUpsell: !0,
                                    position: 'inline',
                                    className: k.nitroUpsell,
                                    showShadow: !1
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(u.mzw, {
                    className: k.modalFooter,
                    children: [
                        c
                            ? (0, i.jsx)(u.zxk, {
                                  className: k.cancelButton,
                                  look: u.zxk.Looks.LINK,
                                  color: u.zxk.Colors.PRIMARY,
                                  size: u.PhG.SMALL,
                                  onClick: () => {
                                      c && (R(n, e), b());
                                  },
                                  children: N.intl.string(N.t.B944ys)
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: k.buttonsRight,
                            children: [
                                (0, i.jsx)(u.zxk, {
                                    className: k.cancelButton,
                                    look: u.zxk.Looks.LINK,
                                    color: u.zxk.Colors.PRIMARY,
                                    size: u.PhG.SMALL,
                                    onClick: to,
                                    children: N.intl.string(N.t['9TG40t'])
                                }),
                                (0, i.jsx)(u.zxk, {
                                    submitting: X,
                                    size: u.PhG.SMALL,
                                    onClick: tc,
                                    children: N.intl.string(N.t.ZSHmKC)
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
