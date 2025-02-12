n.d(t, { Z: () => R }), n(47120);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    s = n(481060),
    r = n(100527),
    o = n(906732),
    c = n(807582),
    d = n(813197),
    u = n(222062),
    m = n(530329),
    x = n(430824),
    p = n(914010),
    f = n(594174),
    g = n(451478),
    h = n(626135),
    C = n(74538),
    A = n(621961),
    j = n(884858),
    v = n(981631),
    N = n(486324),
    E = n(869783),
    T = n(388032),
    F = n(471015);
let _ = [
    {
        gif: n(495682),
        png: n(458060)
    },
    {
        gif: n(842786),
        png: n(460790)
    },
    {
        gif: n(578831),
        png: n(642193)
    },
    {
        gif: n(145908),
        png: n(690695)
    }
];
function S(e) {
    let { shouldAnimate: t = !0 } = e,
        [n, i] = a.useState(!1);
    return (0, l.jsx)('div', {
        className: F.gifGrid,
        onMouseMove: () => i(!0),
        onMouseLeave: () => i(!1),
        children: _.map((e) =>
            (0, l.jsx)(
                'div',
                {
                    className: F.gif,
                    style: { backgroundImage: 'url('.concat(t || n ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function b(e) {
    let { guildFeature: t, guild: n } = e;
    return null == t || null == n
        ? null
        : (0, l.jsx)('div', {
              className: F.pillWrapper,
              children: (0, l.jsx)(c.Z, {
                  guildFeature: t,
                  guild: n,
                  hideTooltip: !0
              })
          });
}
function Z(e) {
    let { uploadType: t, guild: n } = e;
    return (0, l.jsxs)('div', {
        className: F.optionBoxText,
        children: [
            (0, l.jsx)(b, {
                guild: n,
                guildFeature: (0, A.C6)(t, { isGIF: !0 })
            }),
            (0, l.jsxs)('div', {
                className: F.optionBoxDescription,
                children: [
                    (0, A.Kq)(t) &&
                        (0, l.jsx)(s.DY3, {
                            className: F.nitroWheelFlairContainer,
                            text: T.intl.string(T.t['5AFxuL']),
                            children: (0, l.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: F.nitroWheelFlair
                            })
                        }),
                    T.intl.string(T.t['xsC+//'])
                ]
            })
        ]
    });
}
function L(e) {
    let { title: t, uploadType: n, guild: a } = e;
    return (0, l.jsxs)('div', {
        className: F.optionBoxText,
        children: [
            (0, l.jsx)(b, {
                guildFeature: (0, A.C6)(n, { isGIF: !1 }),
                guild: a
            }),
            (0, l.jsxs)('div', {
                className: F.optionBoxDescription,
                children: [
                    n === N.pC.BANNER &&
                        (0, l.jsx)(s.DY3, {
                            className: F.nitroWheelFlairContainer,
                            text: T.intl.string(T.t['5AFxuL']),
                            children: (0, l.jsx)(s.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: F.nitroWheelFlair
                            })
                        }),
                    t
                ]
            })
        ]
    });
}
function R(e) {
    let { transitionState: t, onClose: c, onComplete: A, uploadType: _, maxFileSizeBytes: b, showUpsellHeader: R, filters: y, analyticsLocation: I, analyticsLocations: M = [], modalSubTitle: w, imageSpecifications: P, modalTitle: O = T.intl.string(T.t.DToW4e), uploadOptionTitle: U = T.intl.string(T.t['MsUY/f']) } = e,
        k = (0, i.e7)([g.Z], () => g.Z.isFocused()),
        D = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        B = (0, i.e7)([p.Z], () => p.Z.getGuildId()),
        G = (0, i.e7)([x.Z], () => x.Z.getGuild(B)),
        { reducedMotion: H } = a.useContext(s.Sfi),
        z = (0, s.vRw)(),
        V = !C.ZP.canUseAnimatedAvatar(D) && _ === N.pC.AVATAR,
        { analyticsLocations: W } = (0, o.ZP)(M, r.Z.SELECT_IMAGE_MODAL);
    function q(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        c(), A(e, t, n);
    }
    a.useEffect(() => {
        V &&
            h.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: W
            }),
            h.default.track(v.rMx.OPEN_MODAL, {
                type: v.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: I
            });
    }, [V, I, W]);
    let Y = _ === N.pC.AVATAR || _ === N.pC.BANNER,
        X = (0, u.M)(!Y);
    return (0, l.jsxs)(s.Y0X, {
        transitionState: t,
        size: s.CgR.SMALL,
        children: [
            (0, l.jsxs)(s.xBx, {
                className: F.modalHeader,
                separator: !1,
                children: [
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(s.vwX, {
                                tag: s.RB0.H1,
                                className: F.modalTitle,
                                children: O
                            }),
                            null != w
                                ? (0, l.jsx)(s.Text, {
                                      variant: 'text-md/normal',
                                      children: w
                                  })
                                : null
                        ]
                    }),
                    (0, l.jsx)(s.olH, {
                        onClick: c,
                        className: F.modalCloseButton
                    })
                ]
            }),
            (0, l.jsxs)(s.hzk, {
                className: F.modalContent,
                children: [
                    (0, l.jsxs)('div', {
                        className: F.imagePickerContainer,
                        children: [
                            (0, l.jsxs)(s.P3F, {
                                className: F.optionBox,
                                children: [
                                    (0, l.jsx)('div', {
                                        className: F.contentCircle,
                                        children: (0, l.jsx)(s.FmF, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: F.uploadIcon
                                        })
                                    }),
                                    (0, l.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, l.jsx)(L, {
                                            title: U,
                                            uploadType: _,
                                            guild: G
                                        })
                                    }),
                                    (0, l.jsx)(d.ZP, {
                                        onChange: function (e, t) {
                                            if (t.type === E.m.MP4) return q(e, t);
                                            (0, s.ZDy)(
                                                async () => {
                                                    let { default: a } = await n.e('48017').then(n.bind(n, 850085));
                                                    return (n) =>
                                                        (0, l.jsx)(a, {
                                                            imgURI: e,
                                                            file: t,
                                                            onCrop: q,
                                                            uploadType: _,
                                                            showUpsellHeader: R,
                                                            allowSkip: !0,
                                                            analyticsPage: null == I ? void 0 : I.page,
                                                            ...n
                                                        });
                                                },
                                                { contextKey: z }
                                            );
                                        },
                                        maxFileSizeBytes: b,
                                        onFileSizeError: function () {
                                            c(), (0, j.Z)(b);
                                        },
                                        filters: y
                                    })
                                ]
                            }),
                            (0, l.jsxs)(s.P3F, {
                                className: F.optionBox,
                                onClick: function () {
                                    (0, s.ZDy)(
                                        async () => {
                                            let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                                            return (t) =>
                                                (0, l.jsx)(e, {
                                                    uploadType: _,
                                                    onComplete: (e, t) => q(e, t, !0),
                                                    showUpsellHeader: R,
                                                    analyticsPage: null == I ? void 0 : I.page,
                                                    ...t
                                                });
                                        },
                                        { contextKey: z }
                                    );
                                },
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: F.contentCircle,
                                        children: [
                                            (0, l.jsx)(S, { shouldAnimate: k && !H.enabled }),
                                            (0, l.jsx)('div', {
                                                className: F.gifIconContainer,
                                                children: (0, l.jsx)(s.OUq, {
                                                    size: 'custom',
                                                    width: 29,
                                                    height: 29,
                                                    color: 'currentColor',
                                                    className: F.gifIcon
                                                })
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, l.jsx)(Z, {
                                            uploadType: _,
                                            guild: G
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    null != P
                        ? (0, l.jsx)(s.Text, {
                              className: F.imageSpecifications,
                              variant: 'text-sm/normal',
                              children: P
                          })
                        : null,
                    R &&
                        X &&
                        (0, l.jsx)(m.Z, {
                            uploadType: _,
                            showUpsell: !0,
                            position: 'inline',
                            showShadow: !1,
                            className: F.nitroUpsell
                        })
                ]
            })
        ]
    });
}
