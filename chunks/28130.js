n.d(l, { Z: () => y }), n(47120);
var i = n(200651),
    t = n(192379),
    s = n(442837),
    a = n(481060),
    o = n(100527),
    r = n(906732),
    c = n(807582),
    d = n(813197),
    u = n(222062),
    x = n(530329),
    p = n(430824),
    m = n(914010),
    g = n(594174),
    f = n(451478),
    h = n(626135),
    j = n(74538),
    C = n(621961),
    N = n(884858),
    v = n(981631),
    A = n(486324),
    E = n(869783),
    F = n(388032),
    b = n(471015);
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
function L(e) {
    let { shouldAnimate: l = !0 } = e,
        [n, s] = t.useState(!1);
    return (0, i.jsx)('div', {
        className: b.gifGrid,
        onMouseMove: () => s(!0),
        onMouseLeave: () => s(!1),
        children: _.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: b.gif,
                    style: { backgroundImage: 'url('.concat(l || n ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function I(e) {
    let { guildFeature: l, guild: n } = e;
    return null == l || null == n
        ? null
        : (0, i.jsx)('div', {
              className: b.pillWrapper,
              children: (0, i.jsx)(c.Z, {
                  guildFeature: l,
                  guild: n,
                  hideTooltip: !0
              })
          });
}
function S(e) {
    let { uploadType: l, guild: n } = e;
    return (0, i.jsxs)('div', {
        className: b.optionBoxText,
        children: [
            (0, i.jsx)(I, {
                guild: n,
                guildFeature: (0, C.C6)(l, { isGIF: !0 })
            }),
            (0, i.jsxs)('div', {
                className: b.optionBoxDescription,
                children: [
                    (0, C.Kq)(l) &&
                        (0, i.jsx)(a.DY3, {
                            className: b.nitroWheelFlairContainer,
                            text: F.intl.string(F.t['5AFxuL']),
                            children: (0, i.jsx)(a.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: b.nitroWheelFlair
                            })
                        }),
                    F.intl.string(F.t['xsC+//'])
                ]
            })
        ]
    });
}
function T(e) {
    let { title: l, uploadType: n, guild: t } = e;
    return (0, i.jsxs)('div', {
        className: b.optionBoxText,
        children: [
            (0, i.jsx)(I, {
                guildFeature: (0, C.C6)(n, { isGIF: !1 }),
                guild: t
            }),
            (0, i.jsxs)('div', {
                className: b.optionBoxDescription,
                children: [
                    n === A.pC.BANNER &&
                        (0, i.jsx)(a.DY3, {
                            className: b.nitroWheelFlairContainer,
                            text: F.intl.string(F.t['5AFxuL']),
                            children: (0, i.jsx)(a.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: b.nitroWheelFlair
                            })
                        }),
                    l
                ]
            })
        ]
    });
}
function y(e) {
    let { transitionState: l, onClose: c, onComplete: C, uploadType: _, maxFileSizeBytes: I, showUpsellHeader: y, filters: M, analyticsLocation: P, analyticsLocations: Z = [], modalSubTitle: O, imageSpecifications: k, modalTitle: U = F.intl.string(F.t.DToW4e), uploadOptionTitle: w = F.intl.string(F.t['MsUY/f']) } = e,
        D = (0, s.e7)([f.Z], () => f.Z.isFocused()),
        R = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        B = (0, s.e7)([m.Z], () => m.Z.getGuildId()),
        G = (0, s.e7)([p.Z], () => p.Z.getGuild(B)),
        { reducedMotion: z } = t.useContext(a.Sfi),
        H = (0, a.vRw)(),
        W = !j.ZP.canUseAnimatedAvatar(R) && _ === A.pC.AVATAR,
        { analyticsLocations: Y } = (0, r.ZP)(Z, o.Z.SELECT_IMAGE_MODAL);
    function X(e, l) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        c(), C(e, l, n);
    }
    t.useEffect(() => {
        W &&
            h.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: Y
            }),
            h.default.track(v.rMx.OPEN_MODAL, {
                type: v.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: P
            });
    }, [W, P, Y]);
    let q = _ === A.pC.AVATAR || _ === A.pC.BANNER,
        V = (0, u.M)(!q);
    return (0, i.jsxs)(a.Y0X, {
        transitionState: l,
        size: a.CgR.SMALL,
        children: [
            (0, i.jsxs)(a.xBx, {
                className: b.modalHeader,
                separator: !1,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(a.vwX, {
                                tag: a.RB0.H1,
                                className: b.modalTitle,
                                children: U
                            }),
                            null != O
                                ? (0, i.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: O
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(a.olH, {
                        onClick: c,
                        className: b.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)(a.hzk, {
                className: b.modalContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: b.imagePickerContainer,
                        children: [
                            (0, i.jsxs)(a.P3F, {
                                className: b.optionBox,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: b.contentCircle,
                                        children: (0, i.jsx)(a.FmF, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: b.uploadIcon
                                        })
                                    }),
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, i.jsx)(T, {
                                            title: w,
                                            uploadType: _,
                                            guild: G
                                        })
                                    }),
                                    (0, i.jsx)(d.ZP, {
                                        onChange: function (e, l) {
                                            if (l.type === E.m.MP4) return X(e, l);
                                            (0, a.ZDy)(
                                                async () => {
                                                    let { default: t } = await n.e('48017').then(n.bind(n, 850085));
                                                    return (n) =>
                                                        (0, i.jsx)(t, {
                                                            imgURI: e,
                                                            file: l,
                                                            onCrop: X,
                                                            uploadType: _,
                                                            showUpsellHeader: y,
                                                            allowSkip: !0,
                                                            analyticsPage: null == P ? void 0 : P.page,
                                                            ...n
                                                        });
                                                },
                                                { contextKey: H }
                                            );
                                        },
                                        maxFileSizeBytes: I,
                                        onFileSizeError: function () {
                                            c(), (0, N.Z)(I);
                                        },
                                        filters: M
                                    })
                                ]
                            }),
                            (0, i.jsxs)(a.P3F, {
                                className: b.optionBox,
                                onClick: function () {
                                    (0, a.ZDy)(
                                        async () => {
                                            let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                                            return (l) =>
                                                (0, i.jsx)(e, {
                                                    uploadType: _,
                                                    onComplete: (e, l) => X(e, l, !0),
                                                    showUpsellHeader: y,
                                                    analyticsPage: null == P ? void 0 : P.page,
                                                    ...l
                                                });
                                        },
                                        { contextKey: H }
                                    );
                                },
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: b.contentCircle,
                                        children: [
                                            (0, i.jsx)(L, { shouldAnimate: D && !z.enabled }),
                                            (0, i.jsx)('div', {
                                                className: b.gifIconContainer,
                                                children: (0, i.jsx)(a.OUq, {
                                                    size: 'custom',
                                                    width: 29,
                                                    height: 29,
                                                    color: 'currentColor',
                                                    className: b.gifIcon
                                                })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, i.jsx)(S, {
                                            uploadType: _,
                                            guild: G
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    null != k
                        ? (0, i.jsx)(a.Text, {
                              className: b.imageSpecifications,
                              variant: 'text-sm/normal',
                              children: k
                          })
                        : null,
                    y &&
                        V &&
                        (0, i.jsx)(x.Z, {
                            uploadType: _,
                            showUpsell: !0,
                            position: 'inline',
                            showShadow: !1,
                            className: b.nitroUpsell
                        })
                ]
            })
        ]
    });
}
