n.d(t, { default: () => B });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
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
    v = n(594174),
    C = n(626135),
    A = n(267642),
    E = n(74538),
    N = n(621961),
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
    let r = (0, A._p)(t),
        l = n.hasFeature(t);
    if (null == r) return;
    let a = (0, A.nW)(r);
    return l ? T.intl.formatToPlainString(T.t.u3L3TU, { levelName: a }) : T.intl.formatToPlainString(T.t['r/v25e'], { levelName: a });
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
    let { icon: t, label: n, guildFeature: l, guild: a, shouldShowPremiumIcon: s } = e,
        c = null != a && null != l;
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
                                    text: T.intl.string(T.t['5AFxuL']),
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
                    guild: a,
                    guildFeature: l
                })
        ]
    });
}
function U(e) {
    let { label: t, uploadType: n, guild: l, maxFileSizeBytes: a, filters: s, handleOpenImageEditingModal: c, handleFileSizeError: u } = e,
        f = (0, N.GY)(n),
        p = (0, N.C6)(n, { isGIF: !1 }),
        m = F({
            guildFeature: p,
            guild: l
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
                            guild: l,
                            shouldShowPremiumIcon: f
                        }),
                        (0, r.jsx)(d.ZP, {
                            'aria-label': t,
                            tabIndex: 0,
                            onChange: c,
                            maxFileSizeBytes: a,
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
function M(e) {
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: l } = e,
        { shouldAnimate: a, onMouseEnter: i, onMouseLeave: s } = (0, y.Z)(),
        c = (0, N.Kq)(t),
        u = (0, N.C6)(t, { isGIF: !0 }),
        f = F({
            guildFeature: u,
            guild: n
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.P3F, {
                className: k.option,
                onClick: l,
                'aria-label': T.intl.string(T.t['xsC+//']),
                onMouseEnter: i,
                onMouseLeave: s,
                children: [
                    (0, r.jsx)(L, { shouldAnimate: a }),
                    (0, r.jsx)(D, {
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
            null != f && (0, r.jsx)(o.nn4, { children: f })
        ]
    });
}
function B(e) {
    let { transitionState: t, onClose: a, onComplete: i, uploadType: f, maxFileSizeBytes: d, showUpsellHeader: y, filters: A, analyticsLocation: N, analyticsLocations: I = [], imageSpecifications: L, modalTitle: F = T.intl.string(T.t.DToW4e), uploadOptionTitle: Z = T.intl.string(T.t['MsUY/f']), allowRecentAvatarsSelection: D = !0 } = e,
        B = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        z = (0, s.e7)([O.Z], () => O.Z.getGuildId()),
        H = (0, s.e7)([x.Z], () => x.Z.getGuild(z)),
        V = (0, o.vRw)(),
        G = f === w.pC.AVATAR || f === w.pC.BANNER,
        q = !E.ZP.canUseAnimatedAvatar(B) && f === w.pC.AVATAR,
        X = (0, p.M)(!G),
        W = (0, b.T)({ location: 'NewSelectImageModal' }) && D,
        { analyticsLocations: Y } = (0, u.ZP)(I, c.Z.SELECT_IMAGE_MODAL),
        J = l.useCallback(
            (e) => {
                let { assetOrigin: t = g.q.NEW_ASSET, imageUri: n, file: r, originalAsset: l, isFromTenor: s = !1 } = e;
                a(),
                    i({
                        assetOrigin: t,
                        imageUri: n,
                        file: r,
                        originalAsset: l,
                        isFromTenor: s
                    });
            },
            [a, i]
        ),
        K = l.useCallback(
            (e, t) => {
                if (t.type === R.m.MP4)
                    return J({
                        imageUri: e,
                        file: t
                    });
                (0, o.ZDy)(
                    async () => {
                        let { default: l } = await Promise.all([n.e('59732'), n.e('58989')]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, r.jsx)(
                                l,
                                _(
                                    {
                                        imageUri: e,
                                        file: t,
                                        onCrop: J,
                                        uploadType: f,
                                        showUpsellHeader: y,
                                        analyticsPage: null == N ? void 0 : N.page
                                    },
                                    n
                                )
                            );
                    },
                    { contextKey: V }
                );
            },
            [null == N ? void 0 : N.page, V, J, y, f]
        ),
        $ = l.useCallback(() => {
            (0, P.Z)(d);
        }, [d]),
        Q = l.useCallback(() => {
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
                                        return J({
                                            imageUri: t,
                                            file: n,
                                            isFromTenor: !0
                                        });
                                    },
                                    showUpsellHeader: y,
                                    analyticsPage: null == N ? void 0 : N.page
                                },
                                t
                            )
                        );
                },
                { contextKey: V }
            );
        }, [null == N ? void 0 : N.page, V, J, y, f]);
    l.useEffect(() => {
        q &&
            C.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: S.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: Y
            }),
            C.default.track(S.rMx.OPEN_MODAL, {
                type: S.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: N,
                location_stack: Y,
                upload_type: f
            });
    }, [q, N, Y, f]);
    let ee = y && X,
        et = f === w.pC.AVATAR && W;
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
                        onClick: a,
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
                                'aria-label': T.intl.string(T.t.iBnqtb),
                                children: [
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(U, {
                                            label: Z,
                                            uploadType: f,
                                            guild: H,
                                            handleOpenImageEditingModal: K,
                                            maxFileSizeBytes: d,
                                            filters: A,
                                            handleFileSizeError: $
                                        })
                                    }),
                                    (0, r.jsx)('li', {
                                        children: (0, r.jsx)(M, {
                                            uploadType: f,
                                            guild: H,
                                            handleOpenGIFPickerModal: Q
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
                    et
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(h.Z, { onComplete: J }),
                                  ee &&
                                      (0, r.jsx)(j.Z, {
                                          className: k.premiumUpsell,
                                          showUpsell: !0,
                                          position: 'inline',
                                          showShadow: !1
                                      })
                              ]
                          })
                        : ee &&
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
