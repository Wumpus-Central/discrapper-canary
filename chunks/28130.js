n.d(t, { default: () => M });
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(100527),
    u = n(906732),
    f = n(807582),
    d = n(813197),
    p = n(222062),
    m = n(530329),
    b = n(373230),
    g = n(72703),
    j = n(960291),
    h = n(782818),
    y = n(442552),
    x = n(430824),
    O = n(914010),
    N = n(594174),
    v = n(626135),
    C = n(267642),
    A = n(74538),
    E = n(621961),
    P = n(884858),
    S = n(981631),
    w = n(486324),
    R = n(869783),
    T = n(388032),
    k = n(355484);
function _(e) {
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
let I = [
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
    let { shouldAnimate: t = !0 } = e;
    return (0, r.jsx)('div', {
        className: k.gifGrid,
        children: I.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: k.gif,
                    style: { backgroundImage: 'url('.concat(t ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function F(e) {
    let { guildFeature: t, guild: n } = e;
    if (null == t || null == n) return;
    let r = (0, C._p)(t),
        a = n.hasFeature(t);
    if (null == r) return;
    let l = (0, C.nW)(r);
    return a ? T.NW.formatToPlainString(T.t.u3L3TU, { levelName: l }) : T.NW.formatToPlainString(T.t['r/v25e'], { levelName: l });
}
function Z(e) {
    let { guildFeature: t, guild: n } = e;
    return (0, r.jsx)('div', {
        className: k.boostingPill,
        children: (0, r.jsx)(f.Z, {
            guildFeature: t,
            guild: n,
            hideTooltip: !0
        })
    });
}
function D(e) {
    let { icon: t, label: n, guildFeature: a, guild: l, shouldShowPremiumIcon: s } = e,
        c = null != l && null != a;
    return (0, r.jsxs)('div', {
        className: i()(k.optionDescription, { [k.hasBoostingPill]: c }),
        'aria-hidden': !0,
        children: [
            (0, r.jsxs)('div', {
                className: k.optionIconAndLabel,
                children: [
                    t,
                    (0, r.jsxs)(o.Text, {
                        variant: 'text-sm/semibold',
                        className: i()(k.optionLabelText, { [k.hasPremiumIcon]: s }),
                        children: [
                            s &&
                                (0, r.jsx)(o.DY3, {
                                    text: T.NW.string(T.t['5AFxuL']),
                                    children: (0, r.jsx)(o.SrA, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: k.premiumWheel
                                    })
                                }),
                            n
                        ]
                    })
                ]
            }),
            c &&
                (0, r.jsx)(Z, {
                    guild: l,
                    guildFeature: a
                })
        ]
    });
}
function W(e) {
    let { label: t, uploadType: n, guild: a, maxFileSizeBytes: l, filters: s, handleOpenImageEditingModal: c, handleFileSizeError: u } = e,
        f = (0, E.GY)(n),
        p = (0, E.C6)(n, { isGIF: !1 }),
        m = F({
            guildFeature: p,
            guild: a
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.tEY, {
                within: !0,
                children: (0, r.jsxs)('div', {
                    className: i()(k.option, k.imageUploadOption),
                    children: [
                        (0, r.jsx)(D, {
                            icon: (0, r.jsx)(o.FmF, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            label: t,
                            guildFeature: p,
                            guild: a,
                            shouldShowPremiumIcon: f
                        }),
                        (0, r.jsx)(d.ZP, {
                            'aria-label': t,
                            tabIndex: 0,
                            onChange: c,
                            maxFileSizeBytes: l,
                            onFileSizeError: u,
                            filters: s,
                            multiple: !1
                        })
                    ]
                })
            }),
            null != m && (0, r.jsx)(o.nn4, { children: m })
        ]
    });
}
function U(e) {
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: a } = e,
        { shouldAnimate: l, onMouseEnter: i, onMouseLeave: s } = (0, y.Z)(),
        c = (0, E.Kq)(t),
        u = (0, E.C6)(t, { isGIF: !0 }),
        f = F({
            guildFeature: u,
            guild: n
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.P3F, {
                className: k.option,
                onClick: a,
                'aria-label': T.NW.string(T.t['xsC+//']),
                onMouseEnter: i,
                onMouseLeave: s,
                children: [
                    (0, r.jsx)(L, { shouldAnimate: l }),
                    (0, r.jsx)(D, {
                        icon: (0, r.jsx)(o.OUq, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        label: T.NW.string(T.t['xsC+//']),
                        guildFeature: u,
                        guild: n,
                        shouldShowPremiumIcon: c
                    })
                ]
            }),
            null != f && (0, r.jsx)(o.nn4, { children: f })
        ]
    });
}
function M(e) {
    let { transitionState: t, onClose: l, onComplete: i, uploadType: f, maxFileSizeBytes: d, showUpsellHeader: y, filters: C, analyticsLocation: E, analyticsLocations: I = [], imageSpecifications: L, modalTitle: F = T.NW.string(T.t.DToW4e), uploadOptionTitle: Z = T.NW.string(T.t['MsUY/f']) } = e,
        D = (0, s.e7)([N.default], () => N.default.getCurrentUser()),
        M = (0, s.e7)([O.Z], () => O.Z.getGuildId()),
        B = (0, s.e7)([x.Z], () => x.Z.getGuild(M)),
        z = (0, o.vRw)(),
        H = f === w.pC.AVATAR || f === w.pC.BANNER,
        V = !A.ZP.canUseAnimatedAvatar(D) && f === w.pC.AVATAR,
        G = (0, p.M)(!H),
        q = (0, b.T)({ location: 'NewSelectImageModal' }),
        { analyticsLocations: X } = (0, u.ZP)(I, c.Z.SELECT_IMAGE_MODAL),
        Y = a.useCallback(
            (e) => {
                let { assetOrigin: t = g.q.NEW_ASSET, imageUri: n, file: r, originalAsset: a, isFromTenor: s = !1 } = e;
                l(),
                    i({
                        assetOrigin: t,
                        imageUri: n,
                        file: r,
                        originalAsset: a,
                        isFromTenor: s
                    });
            },
            [l, i]
        ),
        J = a.useCallback(
            (e, t) => {
                if (t.type === R.m.MP4)
                    return Y({
                        imageUri: e,
                        file: t
                    });
                (0, o.ZDy)(
                    async () => {
                        let { default: a } = await Promise.all([n.e('59732'), n.e('58989')]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, r.jsx)(
                                a,
                                _(
                                    {
                                        imageUri: e,
                                        file: t,
                                        onCrop: Y,
                                        uploadType: f,
                                        showUpsellHeader: y,
                                        analyticsPage: null == E ? void 0 : E.page
                                    },
                                    n
                                )
                            );
                    },
                    { contextKey: z }
                );
            },
            [null == E ? void 0 : E.page, z, Y, y, f]
        ),
        K = a.useCallback(() => {
            (0, P.Z)(d);
        }, [d]),
        $ = a.useCallback(() => {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            _(
                                {
                                    uploadType: f,
                                    onComplete: (e) => {
                                        let { imageUri: t, file: n } = e;
                                        return Y({
                                            imageUri: t,
                                            file: n,
                                            isFromTenor: !0
                                        });
                                    },
                                    showUpsellHeader: y,
                                    analyticsPage: null == E ? void 0 : E.page
                                },
                                t
                            )
                        );
                },
                { contextKey: z }
            );
        }, [null == E ? void 0 : E.page, z, Y, y, f]);
    a.useEffect(() => {
        V &&
            v.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: S.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: X
            }),
            v.default.track(S.rMx.OPEN_MODAL, {
                type: S.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: E,
                location_stack: X,
                upload_type: f
            });
    }, [V, E, X, f]);
    let Q = y && G,
        ee = f === w.pC.AVATAR && q;
    return (0, r.jsxs)(o.Y0X, {
        transitionState: t,
        size: o.CgR.DYNAMIC,
        className: k.modal,
        children: [
            (0, r.jsxs)(o.xBx, {
                className: k.modalHeader,
                separator: !1,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: F
                    }),
                    (0, r.jsx)(o.olH, {
                        onClick: l,
                        className: k.modalCloseButton
                    })
                ]
            }),
            (0, r.jsxs)(o.hzk, {
                className: k.modalContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: k.imageSelectionSection,
                        children: [
                            (0, r.jsxs)('ul', {
                                className: k.optionsList,
                                'aria-label': T.NW.string(T.t.iBnqtb),
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(W, {
                                            label: Z,
                                            uploadType: f,
                                            guild: B,
                                            handleOpenImageEditingModal: J,
                                            maxFileSizeBytes: d,
                                            filters: C,
                                            handleFileSizeError: K
                                        })
                                    }),
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(U, {
                                            uploadType: f,
                                            guild: B,
                                            handleOpenGIFPickerModal: $
                                        })
                                    })
                                ]
                            }),
                            null != L
                                ? (0, r.jsx)(o.Text, {
                                      className: k.imageSpecifications,
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: L
                                  })
                                : null
                        ]
                    }),
                    ee
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(h.Z, { onComplete: Y }),
                                  Q &&
                                      (0, r.jsx)(j.Z, {
                                          className: k.premiumUpsell,
                                          showUpsell: !0,
                                          position: 'inline',
                                          showShadow: !1
                                      })
                              ]
                          })
                        : Q &&
                          (0, r.jsx)(m.Z, {
                              uploadType: f,
                              showUpsell: !0,
                              position: 'inline',
                              showShadow: !1,
                              className: k.premiumUpsell
                          })
                ]
            })
        ]
    });
}
