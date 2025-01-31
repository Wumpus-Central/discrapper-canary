n.d(i, { default: () => b }), n(47120);
var t = n(200651),
    l = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(100527),
    r = n(906732),
    c = n(807582),
    d = n(813197),
    u = n(222062),
    p = n(530329),
    f = n(430824),
    x = n(914010),
    m = n(594174),
    g = n(451478),
    h = n(626135),
    _ = n(74538),
    C = n(621961),
    j = n(884858),
    N = n(981631),
    v = n(486324),
    A = n(869783),
    F = n(388032),
    I = n(398497);
let E = [
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
function y(e) {
    let { shouldAnimate: i = !0 } = e,
        [n, o] = l.useState(!1);
    return (0, t.jsx)('div', {
        className: I.gifGrid,
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        children: E.map((e) =>
            (0, t.jsx)(
                'div',
                {
                    className: I.gif,
                    style: { backgroundImage: 'url('.concat(i || n ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function B(e) {
    let { guildFeature: i, guild: n } = e;
    return null == i || null == n
        ? null
        : (0, t.jsx)('div', {
              className: I.pillWrapper,
              children: (0, t.jsx)(c.Z, {
                  guildFeature: i,
                  guild: n,
                  hideTooltip: !0
              })
          });
}
function T(e) {
    let { uploadType: i, guild: n } = e;
    return (0, t.jsxs)('div', {
        className: I.optionBoxText,
        children: [
            (0, t.jsx)(B, {
                guild: n,
                guildFeature: (0, C.C)(i, { isGIF: !0 })
            }),
            (0, t.jsxs)('div', {
                className: I.optionBoxDescription,
                children: [
                    (0, C.K)(i) &&
                        (0, t.jsx)(a.DY3, {
                            className: I.nitroWheelFlairContainer,
                            text: F.intl.string(F.t['5AFxuL']),
                            children: (0, t.jsx)(a.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: I.nitroWheelFlair
                            })
                        }),
                    F.intl.string(F.t['xsC+//'])
                ]
            })
        ]
    });
}
function k(e) {
    let { title: i, uploadType: n, guild: l } = e;
    return (0, t.jsxs)('div', {
        className: I.optionBoxText,
        children: [
            (0, t.jsx)(B, {
                guildFeature: (0, C.C)(n, { isGIF: !1 }),
                guild: l
            }),
            (0, t.jsxs)('div', {
                className: I.optionBoxDescription,
                children: [
                    n === v.pC.BANNER &&
                        (0, t.jsx)(a.DY3, {
                            className: I.nitroWheelFlairContainer,
                            text: F.intl.string(F.t['5AFxuL']),
                            children: (0, t.jsx)(a.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: I.nitroWheelFlair
                            })
                        }),
                    i
                ]
            })
        ]
    });
}
function b(e) {
    let { transitionState: i, onClose: c, onComplete: C, uploadType: E, maxFileSizeBytes: B, showUpsellHeader: b, filters: P, analyticsLocation: w, analyticsLocations: L = [], modalSubTitle: S, imageSpecifications: Z, modalTitle: D = F.intl.string(F.t.DToW4e), uploadOptionTitle: M = F.intl.string(F.t['MsUY/f']) } = e,
        U = (0, o.e7)([g.Z], () => g.Z.isFocused()),
        R = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        O = (0, o.e7)([x.Z], () => x.Z.getGuildId()),
        W = (0, o.e7)([f.Z], () => f.Z.getGuild(O)),
        { reducedMotion: G } = l.useContext(a.Sfi),
        z = (0, a.vRw)(),
        H = !_.ZP.canUseAnimatedAvatar(R) && E === v.pC.AVATAR,
        { analyticsLocations: X } = (0, r.ZP)(L, s.Z.SELECT_IMAGE_MODAL);
    function Y(e, i) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        c(), C(e, i, n);
    }
    l.useEffect(() => {
        H &&
            h.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                type: N.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: X
            }),
            h.default.track(N.rMx.OPEN_MODAL, {
                type: N.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: w
            });
    }, [H, w, X]);
    let V = E === v.pC.AVATAR || E === v.pC.BANNER,
        q = (0, u.M)(!V);
    return (0, t.jsxs)(a.Y0X, {
        transitionState: i,
        size: a.CgR.SMALL,
        children: [
            (0, t.jsxs)(a.xBx, {
                className: I.modalHeader,
                separator: !1,
                children: [
                    (0, t.jsxs)('div', {
                        children: [
                            (0, t.jsx)(a.vwX, {
                                tag: a.RB0.H1,
                                className: I.modalTitle,
                                children: D
                            }),
                            null != S
                                ? (0, t.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: S
                                  })
                                : null
                        ]
                    }),
                    (0, t.jsx)(a.olH, {
                        onClick: c,
                        className: I.modalCloseButton
                    })
                ]
            }),
            (0, t.jsxs)(a.hzk, {
                className: I.modalContent,
                children: [
                    (0, t.jsxs)('div', {
                        className: I.imagePickerContainer,
                        children: [
                            (0, t.jsxs)(a.P3F, {
                                className: I.optionBox,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: I.contentCircle,
                                        children: (0, t.jsx)(a.FmF, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: I.uploadIcon
                                        })
                                    }),
                                    (0, t.jsx)(a.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, t.jsx)(k, {
                                            title: M,
                                            uploadType: E,
                                            guild: W
                                        })
                                    }),
                                    (0, t.jsx)(d.ZP, {
                                        onChange: function (e, i) {
                                            if (i.type === A.m.MP4) return Y(e, i);
                                            (0, a.ZDy)(
                                                async () => {
                                                    let { default: l } = await Promise.all([n.e('48017'), n.e('62224')]).then(n.bind(n, 850085));
                                                    return (n) =>
                                                        (0, t.jsx)(l, {
                                                            imgURI: e,
                                                            file: i,
                                                            onCrop: Y,
                                                            uploadType: E,
                                                            showUpsellHeader: b,
                                                            allowSkip: !0,
                                                            analyticsPage: null == w ? void 0 : w.page,
                                                            ...n
                                                        });
                                                },
                                                { contextKey: z }
                                            );
                                        },
                                        maxFileSizeBytes: B,
                                        onFileSizeError: function () {
                                            c(), (0, j.Z)(B);
                                        },
                                        filters: P
                                    })
                                ]
                            }),
                            (0, t.jsxs)(a.P3F, {
                                className: I.optionBox,
                                onClick: function () {
                                    (0, a.ZDy)(
                                        async () => {
                                            let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                                            return (i) =>
                                                (0, t.jsx)(e, {
                                                    uploadType: E,
                                                    onComplete: (e, i) => Y(e, i, !0),
                                                    showUpsellHeader: b,
                                                    analyticsPage: null == w ? void 0 : w.page,
                                                    ...i
                                                });
                                        },
                                        { contextKey: z }
                                    );
                                },
                                children: [
                                    (0, t.jsxs)('div', {
                                        className: I.contentCircle,
                                        children: [
                                            (0, t.jsx)(y, { shouldAnimate: U && !G.enabled }),
                                            (0, t.jsx)('div', {
                                                className: I.gifIconContainer,
                                                children: (0, t.jsx)(a.OUq, {
                                                    size: 'custom',
                                                    width: 29,
                                                    height: 29,
                                                    color: 'currentColor',
                                                    className: I.gifIcon
                                                })
                                            })
                                        ]
                                    }),
                                    (0, t.jsx)(a.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, t.jsx)(T, {
                                            uploadType: E,
                                            guild: W
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    null != Z
                        ? (0, t.jsx)(a.Text, {
                              className: I.imageSpecifications,
                              variant: 'text-sm/normal',
                              children: Z
                          })
                        : null,
                    b &&
                        q &&
                        (0, t.jsx)(p.Z, {
                            uploadType: E,
                            showUpsell: !0,
                            position: 'inline',
                            showShadow: !1,
                            className: I.nitroUpsell
                        })
                ]
            })
        ]
    });
}
