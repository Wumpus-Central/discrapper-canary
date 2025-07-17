n.d(t, { default: () => U });
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(807582),
    f = n(813197),
    p = n(222062),
    g = n(530329),
    m = n(373230),
    h = n(72703),
    b = n(782818),
    j = n(442552),
    y = n(430824),
    x = n(914010),
    A = n(594174),
    C = n(626135),
    v = n(267642),
    O = n(74538),
    E = n(621961),
    N = n(884858),
    S = n(981631),
    w = n(486324),
    P = n(869783),
    T = n(388032),
    R = n(355484);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let F = [
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
function Z(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, r.jsx)('div', {
        className: R.gifGrid,
        children: F.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: R.gif,
                    style: { backgroundImage: 'url('.concat(t ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function D(e) {
    let { guildFeature: t, guild: n } = e;
    if (null == t || null == n) return;
    let r = (0, v._p)(t),
        a = n.features.has(t);
    if (null == r) return;
    let l = (0, v.nW)(r);
    return a ? T.intl.formatToPlainString(T.t.u3L3TU, { levelName: l }) : T.intl.formatToPlainString(T.t['r/v25e'], { levelName: l });
}
function I(e) {
    let { guildFeature: t, guild: n } = e;
    return (0, r.jsx)('div', {
        className: R.boostingPill,
        children: (0, r.jsx)(d.Z, {
            guildFeature: t,
            guild: n,
            hideTooltip: !0
        })
    });
}
function k(e) {
    let { icon: t, label: n, guildFeature: a, guild: l, shouldShowPremiumIcon: s } = e,
        c = null != l && null != a;
    return (0, r.jsxs)('div', {
        className: i()(R.optionDescription, { [R.hasBoostingPill]: c }),
        'aria-hidden': !0,
        children: [
            (0, r.jsxs)('div', {
                className: R.optionIconAndLabel,
                children: [
                    t,
                    (0, r.jsxs)(o.Text, {
                        variant: 'text-sm/semibold',
                        className: i()(R.optionLabelText, { [R.hasPremiumIcon]: s }),
                        children: [
                            s &&
                                (0, r.jsx)(o.DY3, {
                                    text: T.intl.string(T.t['5AFxuL']),
                                    children: (0, r.jsx)(o.SrA, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: R.premiumWheel
                                    })
                                }),
                            n
                        ]
                    })
                ]
            }),
            c &&
                (0, r.jsx)(I, {
                    guild: l,
                    guildFeature: a
                })
        ]
    });
}
function M(e) {
    let { label: t, uploadType: n, guild: a, maxFileSizeBytes: l, filters: s, handleOpenImageEditingModal: c, handleFileSizeError: u } = e,
        d = (0, E.GY)(n),
        p = (0, E.C6)(n, { isGIF: !1 }),
        g = D({
            guildFeature: p,
            guild: a
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.tEY, {
                within: !0,
                children: (0, r.jsxs)('div', {
                    className: i()(R.option, R.imageUploadOption),
                    children: [
                        (0, r.jsx)(k, {
                            icon: (0, r.jsx)(o.FmF, {
                                size: 'md',
                                color: 'currentColor'
                            }),
                            label: t,
                            guildFeature: p,
                            guild: a,
                            shouldShowPremiumIcon: d
                        }),
                        (0, r.jsx)(f.ZP, {
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
            null != g && (0, r.jsx)(o.nn4, { children: g })
        ]
    });
}
function L(e) {
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: a } = e,
        { shouldAnimate: l, onMouseEnter: i, onMouseLeave: s } = (0, j.Z)(),
        c = (0, E.Kq)(t),
        u = (0, E.C6)(t, { isGIF: !0 }),
        d = D({
            guildFeature: u,
            guild: n
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.P3F, {
                className: R.option,
                onClick: a,
                'aria-label': T.intl.string(T.t['xsC+//']),
                onMouseEnter: i,
                onMouseLeave: s,
                children: [
                    (0, r.jsx)(Z, { shouldAnimate: l }),
                    (0, r.jsx)(k, {
                        icon: (0, r.jsx)(o.OUq, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        label: T.intl.string(T.t['xsC+//']),
                        guildFeature: u,
                        guild: n,
                        shouldShowPremiumIcon: c
                    })
                ]
            }),
            null != d && (0, r.jsx)(o.nn4, { children: d })
        ]
    });
}
function U(e) {
    let { transitionState: t, onClose: l, onComplete: i, uploadType: d, maxFileSizeBytes: f, showUpsellHeader: j, filters: v, analyticsLocation: E, analyticsLocations: F = [], imageSpecifications: Z, modalTitle: D = T.intl.string(T.t.DToW4e), uploadOptionTitle: I = T.intl.string(T.t['MsUY/f']), allowRecentAvatarsSelection: k = !0 } = e,
        U = (0, s.e7)([A.default], () => A.default.getCurrentUser()),
        B = (0, s.e7)([x.Z], () => x.Z.getGuildId()),
        H = (0, s.e7)([y.Z], () => y.Z.getGuild(B)),
        V = (0, o.vRw)(),
        z = d === w.pC.AVATAR || d === w.pC.BANNER,
        G = !O.ZP.canUseAnimatedAvatar(U) && d === w.pC.AVATAR,
        q = (0, p.M)(!z),
        W = (0, m.T)({ location: 'NewSelectImageModal' }) && k,
        { analyticsLocations: Y, newestAnalyticsLocation: X } = (0, u.ZP)(F, c.Z.SELECT_IMAGE_MODAL),
        J = a.useCallback(
            (e) => {
                let { assetOrigin: t = h.q.NEW_ASSET, imageUri: n, file: r, originalAsset: a, isFromTenor: s = !1 } = e;
                (l(),
                    i({
                        assetOrigin: t,
                        imageUri: n,
                        file: r,
                        originalAsset: a,
                        isFromTenor: s
                    }));
            },
            [l, i]
        ),
        K = a.useCallback(
            (e, t) => {
                if (t.type === P.m.MP4)
                    return J({
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
                                        onCrop: J,
                                        uploadType: d,
                                        showUpsellHeader: j,
                                        analyticsPage: null == E ? void 0 : E.page
                                    },
                                    n
                                )
                            );
                    },
                    { contextKey: V }
                );
            },
            [null == E ? void 0 : E.page, V, J, j, d]
        ),
        $ = a.useCallback(() => {
            (0, N.Z)(f);
        }, [f]),
        Q = a.useCallback(() => {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await n.e('72891').then(n.bind(n, 195297));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            _(
                                {
                                    uploadType: d,
                                    onComplete: (e) => {
                                        let { imageUri: t, file: n } = e;
                                        return J({
                                            imageUri: t,
                                            file: n,
                                            isFromTenor: !0
                                        });
                                    },
                                    showUpsellHeader: j,
                                    analyticsPage: null == E ? void 0 : E.page
                                },
                                t
                            )
                        );
                },
                { contextKey: V }
            );
        }, [null == E ? void 0 : E.page, V, J, j, d]);
    a.useEffect(() => {
        (G &&
            C.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: S.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: Y
            }),
            C.default.track(S.rMx.OPEN_MODAL, {
                type: S.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: E,
                location_stack: Y,
                upload_type: d
            }));
    }, [G, E, Y, d]);
    let ee = j && q,
        et = d === w.pC.AVATAR && W;
    return (0, r.jsxs)(o.Y0X, {
        transitionState: t,
        size: o.CgR.DYNAMIC,
        className: R.modal,
        parentComponent: 'SelectImageModal',
        children: [
            (0, r.jsxs)(o.xBx, {
                className: R.modalHeader,
                separator: !1,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        children: D
                    }),
                    (0, r.jsx)(o.olH, {
                        onClick: l,
                        className: R.modalCloseButton
                    })
                ]
            }),
            (0, r.jsxs)(o.hzk, {
                className: R.modalContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: R.imageSelectionSection,
                        children: [
                            (0, r.jsxs)('ul', {
                                className: R.optionsList,
                                'aria-label': T.intl.string(T.t.iBnqtb),
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(M, {
                                            label: I,
                                            uploadType: d,
                                            guild: H,
                                            handleOpenImageEditingModal: K,
                                            maxFileSizeBytes: f,
                                            filters: v,
                                            handleFileSizeError: $
                                        })
                                    }),
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(L, {
                                            uploadType: d,
                                            guild: H,
                                            handleOpenGIFPickerModal: Q
                                        })
                                    })
                                ]
                            }),
                            null != Z
                                ? (0, r.jsx)(o.Text, {
                                      className: R.imageSpecifications,
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      children: Z
                                  })
                                : null
                        ]
                    }),
                    et && (0, r.jsx)(b.Z, { onComplete: J }),
                    ee &&
                        (0, r.jsx)(g.Z, {
                            uploadType: d,
                            analyticsSource: X,
                            showUpsell: !0,
                            position: 'inline',
                            showShadow: !1,
                            className: R.premiumUpsell
                        })
                ]
            })
        ]
    });
}
