n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(442837),
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
    h = n(626135),
    b = n(74538),
    j = n(621961),
    v = n(884858),
    y = n(981631),
    O = n(486324),
    C = n(869783),
    N = n(388032),
    A = n(420270);
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
let w = [
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
function P(e) {
    let { shouldAnimate: t = !0 } = e,
        [n, a] = l.useState(!1);
    return (0, r.jsx)('div', {
        className: A.gifGrid,
        onMouseMove: () => a(!0),
        onMouseLeave: () => a(!1),
        children: w.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: A.gif,
                    style: { backgroundImage: 'url('.concat(t || n ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function S(e) {
    let { guildFeature: t, guild: n } = e;
    return null == t || null == n
        ? null
        : (0, r.jsx)('div', {
              className: A.pillWrapper,
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
        className: A.optionBoxText,
        children: [
            (0, r.jsx)(S, {
                guild: n,
                guildFeature: (0, j.C6)(t, { isGIF: !0 })
            }),
            (0, r.jsxs)('div', {
                className: A.optionBoxDescription,
                children: [
                    (0, j.Kq)(t) &&
                        (0, r.jsx)(i.DY3, {
                            className: A.nitroWheelFlairContainer,
                            text: N.NW.string(N.t['5AFxuL']),
                            children: (0, r.jsx)(i.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: A.nitroWheelFlair
                            })
                        }),
                    N.NW.string(N.t['xsC+//'])
                ]
            })
        ]
    });
}
function F(e) {
    let { title: t, uploadType: n, guild: l } = e;
    return (0, r.jsxs)('div', {
        className: A.optionBoxText,
        children: [
            (0, r.jsx)(S, {
                guildFeature: (0, j.C6)(n, { isGIF: !1 }),
                guild: l
            }),
            (0, r.jsxs)('div', {
                className: A.optionBoxDescription,
                children: [
                    n === O.pC.BANNER &&
                        (0, r.jsx)(i.DY3, {
                            className: A.nitroWheelFlairContainer,
                            text: N.NW.string(N.t['5AFxuL']),
                            children: (0, r.jsx)(i.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: A.nitroWheelFlair
                            })
                        }),
                    t
                ]
            })
        ]
    });
}
function _(e) {
    let { transitionState: t, onClose: c, onComplete: j, uploadType: w, maxFileSizeBytes: S, showUpsellHeader: _, filters: R, analyticsLocation: Z, analyticsLocations: I = [], modalSubTitle: L, imageSpecifications: k, modalTitle: D = N.NW.string(N.t.DToW4e), uploadOptionTitle: M = N.NW.string(N.t['MsUY/f']) } = e,
        U = (0, a.e7)([x.Z], () => x.Z.isFocused()),
        W = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        B = (0, a.e7)([m.Z], () => m.Z.getGuildId()),
        H = (0, a.e7)([p.Z], () => p.Z.getGuild(B)),
        { reducedMotion: G } = l.useContext(i.Sfi),
        z = (0, i.vRw)(),
        V = !b.ZP.canUseAnimatedAvatar(W) && w === O.pC.AVATAR,
        { analyticsLocations: q } = (0, s.ZP)(I, o.Z.SELECT_IMAGE_MODAL);
    function X(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        c(), j(e, t, n);
    }
    l.useEffect(() => {
        V &&
            h.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
                type: y.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: q
            }),
            h.default.track(y.rMx.OPEN_MODAL, {
                type: y.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: Z
            });
    }, [V, Z, q]);
    let Y = w === O.pC.AVATAR || w === O.pC.BANNER,
        $ = (0, d.M)(!Y);
    return (0, r.jsxs)(i.Y0X, {
        transitionState: t,
        size: i.CgR.SMALL,
        children: [
            (0, r.jsxs)(i.xBx, {
                className: A.modalHeader,
                separator: !1,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(i.vwX, {
                                tag: i.RB0.H1,
                                className: A.modalTitle,
                                children: D
                            }),
                            null != L
                                ? (0, r.jsx)(i.Text, {
                                      variant: 'text-md/normal',
                                      children: L
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(i.olH, {
                        onClick: c,
                        className: A.modalCloseButton
                    })
                ]
            }),
            (0, r.jsxs)(i.hzk, {
                className: A.modalContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: A.imagePickerContainer,
                        children: [
                            (0, r.jsxs)(i.P3F, {
                                className: A.optionBox,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: A.contentCircle,
                                        children: (0, r.jsx)(i.FmF, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: A.uploadIcon
                                        })
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, r.jsx)(F, {
                                            title: M,
                                            uploadType: w,
                                            guild: H
                                        })
                                    }),
                                    (0, r.jsx)(u.ZP, {
                                        onChange: function (e, t) {
                                            if (t.type === C.m.MP4) return X(e, t);
                                            (0, i.ZDy)(
                                                async () => {
                                                    let { default: l } = await n.e('48017').then(n.bind(n, 850085));
                                                    return (n) =>
                                                        (0, r.jsx)(
                                                            l,
                                                            E(
                                                                {
                                                                    imgURI: e,
                                                                    file: t,
                                                                    onCrop: X,
                                                                    uploadType: w,
                                                                    showUpsellHeader: _,
                                                                    allowSkip: !0,
                                                                    analyticsPage: null == Z ? void 0 : Z.page
                                                                },
                                                                n
                                                            )
                                                        );
                                                },
                                                { contextKey: z }
                                            );
                                        },
                                        maxFileSizeBytes: S,
                                        onFileSizeError: function () {
                                            c(), (0, v.Z)(S);
                                        },
                                        filters: R
                                    })
                                ]
                            }),
                            (0, r.jsxs)(i.P3F, {
                                className: A.optionBox,
                                onClick: function () {
                                    (0, i.ZDy)(
                                        async () => {
                                            let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    E(
                                                        {
                                                            uploadType: w,
                                                            onComplete: (e, t) => X(e, t, !0),
                                                            showUpsellHeader: _,
                                                            analyticsPage: null == Z ? void 0 : Z.page
                                                        },
                                                        t
                                                    )
                                                );
                                        },
                                        { contextKey: z }
                                    );
                                },
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: A.contentCircle,
                                        children: [
                                            (0, r.jsx)(P, { shouldAnimate: U && !G.enabled }),
                                            (0, r.jsx)('div', {
                                                className: A.gifIconContainer,
                                                children: (0, r.jsx)(i.OUq, {
                                                    size: 'custom',
                                                    width: 29,
                                                    height: 29,
                                                    color: 'currentColor',
                                                    className: A.gifIcon
                                                })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, r.jsx)(T, {
                                            uploadType: w,
                                            guild: H
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    null != k
                        ? (0, r.jsx)(i.Text, {
                              className: A.imageSpecifications,
                              variant: 'text-sm/normal',
                              children: k
                          })
                        : null,
                    _ &&
                        $ &&
                        (0, r.jsx)(f.Z, {
                            uploadType: w,
                            showUpsell: !0,
                            position: 'inline',
                            showShadow: !1,
                            className: A.nitroUpsell
                        })
                ]
            })
        ]
    });
}
