n.d(t, { Z: () => F }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(442837),
    i = n(481060),
    o = n(100527),
    s = n(906732),
    c = n(807582),
    u = n(813197),
    d = n(222062),
    f = n(530329),
    p = n(430824),
    m = n(914010),
    g = n(594174),
    x = n(451478),
    b = n(626135),
    h = n(74538),
    j = n(621961),
    v = n(884858),
    y = n(981631),
    O = n(486324),
    C = n(869783),
    A = n(388032),
    N = n(420270);
function E(e) {
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
let S = [
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
function w(e) {
    let { shouldAnimate: t = !0 } = e,
        [n, l] = a.useState(!1);
    return (0, r.jsx)('div', {
        className: N.gifGrid,
        onMouseMove: () => l(!0),
        onMouseLeave: () => l(!1),
        children: S.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: N.gif,
                    style: { backgroundImage: 'url('.concat(t || n ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function P(e) {
    let { guildFeature: t, guild: n } = e;
    return null == t || null == n
        ? null
        : (0, r.jsx)('div', {
              className: N.pillWrapper,
              children: (0, r.jsx)(c.Z, {
                  guildFeature: t,
                  guild: n,
                  hideTooltip: !0
              })
          });
}
function T(e) {
    let { uploadType: t, guild: n } = e;
    return (0, r.jsxs)('div', {
        className: N.optionBoxText,
        children: [
            (0, r.jsx)(P, {
                guild: n,
                guildFeature: (0, j.C6)(t, { isGIF: !0 })
            }),
            (0, r.jsxs)('div', {
                className: N.optionBoxDescription,
                children: [
                    (0, j.Kq)(t) &&
                        (0, r.jsx)(i.DY3, {
                            className: N.nitroWheelFlairContainer,
                            text: A.NW.string(A.t['5AFxuL']),
                            children: (0, r.jsx)(i.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: N.nitroWheelFlair
                            })
                        }),
                    A.NW.string(A.t['xsC+//'])
                ]
            })
        ]
    });
}
function _(e) {
    let { title: t, uploadType: n, guild: a } = e;
    return (0, r.jsxs)('div', {
        className: N.optionBoxText,
        children: [
            (0, r.jsx)(P, {
                guildFeature: (0, j.C6)(n, { isGIF: !1 }),
                guild: a
            }),
            (0, r.jsxs)('div', {
                className: N.optionBoxDescription,
                children: [
                    n === O.pC.BANNER &&
                        (0, r.jsx)(i.DY3, {
                            className: N.nitroWheelFlairContainer,
                            text: A.NW.string(A.t['5AFxuL']),
                            children: (0, r.jsx)(i.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: N.nitroWheelFlair
                            })
                        }),
                    t
                ]
            })
        ]
    });
}
function F(e) {
    let { transitionState: t, onClose: c, onComplete: j, uploadType: S, maxFileSizeBytes: P, showUpsellHeader: F, filters: R, analyticsLocation: I, analyticsLocations: Z = [], modalSubTitle: D, imageSpecifications: L, modalTitle: k = A.NW.string(A.t.DToW4e), uploadOptionTitle: M = A.NW.string(A.t['MsUY/f']) } = e,
        U = (0, l.e7)([x.Z], () => x.Z.isFocused()),
        W = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        B = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
        H = (0, l.e7)([p.Z], () => p.Z.getGuild(B)),
        { reducedMotion: V } = a.useContext(i.Sfi),
        G = (0, i.vRw)(),
        z = !h.ZP.canUseAnimatedAvatar(W) && S === O.pC.AVATAR,
        { analyticsLocations: q } = (0, s.ZP)(Z, o.Z.SELECT_IMAGE_MODAL);
    function X(e) {
        let { imageUri: t, file: n, isFromTenor: r = !1 } = e;
        c(),
            j({
                imageUri: t,
                file: n,
                isFromTenor: r
            });
    }
    a.useEffect(() => {
        z &&
            b.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
                type: y.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: q
            }),
            b.default.track(y.rMx.OPEN_MODAL, {
                type: y.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: I
            });
    }, [z, I, q]);
    let Y = S === O.pC.AVATAR || S === O.pC.BANNER,
        $ = (0, d.M)(!Y);
    return (0, r.jsxs)(i.Y0X, {
        transitionState: t,
        size: i.CgR.SMALL,
        children: [
            (0, r.jsxs)(i.xBx, {
                className: N.modalHeader,
                separator: !1,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(i.vwX, {
                                tag: i.RB0.H1,
                                className: N.modalTitle,
                                children: k
                            }),
                            null != D
                                ? (0, r.jsx)(i.Text, {
                                      variant: 'text-md/normal',
                                      children: D
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(i.olH, {
                        onClick: c,
                        className: N.modalCloseButton
                    })
                ]
            }),
            (0, r.jsxs)(i.hzk, {
                className: N.modalContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: N.imagePickerContainer,
                        children: [
                            (0, r.jsxs)(i.P3F, {
                                className: N.optionBox,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: N.contentCircle,
                                        children: (0, r.jsx)(i.FmF, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: N.uploadIcon
                                        })
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, r.jsx)(_, {
                                            title: M,
                                            uploadType: S,
                                            guild: H
                                        })
                                    }),
                                    (0, r.jsx)(u.ZP, {
                                        onChange: function (e, t) {
                                            if (t.type === C.m.MP4)
                                                return X({
                                                    imageUri: e,
                                                    file: t
                                                });
                                            (0, i.ZDy)(
                                                async () => {
                                                    let { default: a } = await n.e('48017').then(n.bind(n, 850085));
                                                    return (n) =>
                                                        (0, r.jsx)(
                                                            a,
                                                            E(
                                                                {
                                                                    imageUri: e,
                                                                    file: t,
                                                                    onCrop: X,
                                                                    uploadType: S,
                                                                    showUpsellHeader: F,
                                                                    allowSkip: !0,
                                                                    analyticsPage: null == I ? void 0 : I.page
                                                                },
                                                                n
                                                            )
                                                        );
                                                },
                                                { contextKey: G }
                                            );
                                        },
                                        maxFileSizeBytes: P,
                                        onFileSizeError: function () {
                                            c(), (0, v.Z)(P);
                                        },
                                        filters: R
                                    })
                                ]
                            }),
                            (0, r.jsxs)(i.P3F, {
                                className: N.optionBox,
                                onClick: function () {
                                    (0, i.ZDy)(
                                        async () => {
                                            let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    E(
                                                        {
                                                            uploadType: S,
                                                            onComplete: (e) => {
                                                                let { imageUri: t, file: n } = e;
                                                                return X({
                                                                    imageUri: t,
                                                                    file: n,
                                                                    isFromTenor: !0
                                                                });
                                                            },
                                                            showUpsellHeader: F,
                                                            analyticsPage: null == I ? void 0 : I.page
                                                        },
                                                        t
                                                    )
                                                );
                                        },
                                        { contextKey: G }
                                    );
                                },
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: N.contentCircle,
                                        children: [
                                            (0, r.jsx)(w, { shouldAnimate: U && !V.enabled }),
                                            (0, r.jsx)('div', {
                                                className: N.gifIconContainer,
                                                children: (0, r.jsx)(i.OUq, {
                                                    size: 'custom',
                                                    width: 29,
                                                    height: 29,
                                                    color: 'currentColor',
                                                    className: N.gifIcon
                                                })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, r.jsx)(T, {
                                            uploadType: S,
                                            guild: H
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    null != L
                        ? (0, r.jsx)(i.Text, {
                              className: N.imageSpecifications,
                              variant: 'text-sm/normal',
                              children: L
                          })
                        : null,
                    F &&
                        $ &&
                        (0, r.jsx)(f.Z, {
                            uploadType: S,
                            showUpsell: !0,
                            position: 'inline',
                            showShadow: !1,
                            className: N.nitroUpsell
                        })
                ]
            })
        ]
    });
}
