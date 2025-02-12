r.d(t, { default: () => Z }), r(653041), r(47120);
var i = r(200651),
    n = r(192379),
    s = r(120356),
    o = r.n(s),
    a = r(954955),
    c = r.n(a),
    l = r(442837),
    d = r(477690),
    u = r(481060),
    f = r(691251),
    h = r(563132),
    m = r(409813),
    p = r(185139),
    _ = r(624138),
    b = r(790954),
    k = r(453070),
    x = r(926491),
    S = r(378233),
    I = r(515005),
    C = r(282896),
    g = r(929204),
    N = r(981631),
    P = r(388032),
    j = r(633881);
let E = (0, _.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
    v = (0, _.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
    T = (0, _.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
    W = E + 2 * v,
    R = c()(b.pF, 250),
    A = () => {
        R.cancel();
    },
    B = (e) => {
        let { visibleRowIndex: t, columnIndex: r } = e;
        R.cancel(), (0, b.Mf)(r, t, f.u.MOUSE_EVENT);
    },
    K = (e) => {
        let { stickerPack: t, width: r, hasHeaderImage: s, isScrolling: a, onInspect: c } = e,
            l = n.useMemo(() => [(0, S.z)(t)], [t]),
            d = (0, b.Y6)((e) => e.inspectedStickerPosition),
            {
                rowCountBySection: u,
                stickersGrid: f,
                gutterWidth: h
            } = (0, k.el)({
                stickersCategories: l,
                stickerNodeMargin: T,
                stickerNodeWidth: W,
                listWidth: r
            });
        return (0, i.jsxs)('div', {
            className: o()(j.container, { [j.containerWithHeader]: s }),
            children: [
                (0, i.jsx)(
                    C.Z,
                    {
                        className: j.header,
                        stickerPack: t,
                        withDescription: !0
                    },
                    t.id
                ),
                (0, i.jsx)('div', {
                    onFocus: A,
                    onBlur: R,
                    onMouseOver: A,
                    onMouseOut: R,
                    children: (() => {
                        if (0 === u.length) return null;
                        let e = [];
                        for (let t = 0; t < u[0]; t++)
                            e.push(
                                (0, i.jsx)(
                                    I.Z,
                                    {
                                        enlargeOnInteraction: !0,
                                        preferAnimation: !0,
                                        gutterWidth: h,
                                        inspectedStickerPosition: d,
                                        isScrolling: a,
                                        onInspect: c,
                                        rowIndex: t,
                                        stickerDescriptors: f[t],
                                        stickerPadding: v,
                                        stickerSize: E,
                                        isDisplayingIndividualStickers: !0,
                                        checkSendability: !1
                                    },
                                    t
                                )
                            );
                        return e;
                    })()
                })
            ]
        });
    },
    M = (e) => {
        let { onClose: t, stickerPack: r } = e;
        (0, k.fP)();
        let n = (0, l.e7)([x.Z], () => x.Z.isPremiumPack(r.id));
        return (0, i.jsxs)(u.mzw, {
            className: j.footer,
            children: [
                (0, i.jsx)(u.eee, {
                    onClick: t,
                    className: j.skuPreviewFooterCloseButton,
                    children: P.intl.string(P.t.cpT0Cg)
                }),
                n &&
                    (0, i.jsxs)(u.gtL, {
                        color: u.zxk.Colors.GREEN,
                        type: 'submit',
                        innerClassName: j.premiumButtonInner,
                        onClick: () => {
                            t(), (0, g.Z)({ section: N.jXE.STICKER_PACK_VIEW_ALL });
                        },
                        children: [
                            (0, i.jsx)(u.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: j.premiumButtonNitroWheel
                            }),
                            P.intl.string(P.t['w+kuhY'])
                        ]
                    })
            ]
        });
    },
    w = (e) => {
        let { stickerPack: t, onClose: r } = e,
            n = (0, S.sM)(t, 1024);
        return null == n
            ? null
            : (0, i.jsxs)(u.xBx, {
                  className: j.headerWithImage,
                  children: [
                      (0, i.jsx)('div', {
                          role: 'image',
                          style: { backgroundImage: 'url('.concat(n, ')') },
                          className: j.backgroundImage
                      }),
                      (0, i.jsx)(u.olH, {
                          className: j.closeButton,
                          onClick: r
                      })
                  ]
              });
    };
function Z(e) {
    let { onClose: t, stickerPack: r, ...s } = e,
        [o, a] = n.useState(null),
        c = n.useCallback((e) => {
            null !== e && a(e.offsetWidth);
        }, []);
    return (
        n.useLayoutEffect(() => {
            (0, b.pF)();
        }, []),
        (0, i.jsx)(h.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, i.jsx)(u.Y0X, {
                ...s,
                'aria-labelledby': 'sticker-pack-sku-preview-modal',
                children: (0, i.jsx)(p.Z, {
                    hideBreadcrumbs: !0,
                    body: (0, i.jsx)('div', {
                        ref: c,
                        children:
                            null != o &&
                            (0, i.jsx)(K, {
                                stickerPack: r,
                                hasHeaderImage: !0,
                                onInspect: B,
                                width: o
                            })
                    }),
                    footer: (0, i.jsx)(M, {
                        onClose: t,
                        stickerPack: r
                    }),
                    header: (0, i.jsx)(w, {
                        onClose: t,
                        stickerPack: r
                    }),
                    onScroll: R,
                    steps: [m.h8.SKU_PREVIEW],
                    currentStep: m.h8.SKU_PREVIEW
                })
            })
        })
    );
}
