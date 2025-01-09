n.r(r),
    n.d(r, {
        StickerPackViewAllModalFooter: function () {
            return W;
        },
        default: function () {
            return O;
        }
    }),
    n(653041),
    n(47120);
var t = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    s = n(954955),
    a = n.n(s),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    m = n(691251),
    p = n(563132),
    h = n(409813),
    _ = n(185139),
    f = n(624138),
    S = n(790954),
    N = n(453070),
    E = n(926491),
    C = n(378233),
    x = n(515005),
    P = n(282896),
    g = n(929204),
    v = n(981631),
    y = n(388032),
    I = n(9520);
let k = (0, f.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
    b = (0, f.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
    j = (0, f.Mg)(d.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
    A = k + 2 * b,
    T = a()(S.pF, 250),
    M = () => {
        T.cancel();
    },
    R = (e) => {
        let { visibleRowIndex: r, columnIndex: n } = e;
        T.cancel(), (0, S.Mf)(n, r, m.u.MOUSE_EVENT);
    },
    B = (e) => {
        let { stickerPack: r, width: n, hasHeaderImage: o, isScrolling: s, onInspect: a } = e,
            c = l.useMemo(() => [(0, C.z)(r)], [r]),
            d = (0, S.Y6)((e) => e.inspectedStickerPosition),
            {
                rowCountBySection: u,
                stickersGrid: m,
                gutterWidth: p
            } = (0, N.el)({
                stickersCategories: c,
                stickerNodeMargin: j,
                stickerNodeWidth: A,
                listWidth: n
            });
        return (0, t.jsxs)('div', {
            className: i()(I.container, { [I.containerWithHeader]: o }),
            children: [
                (0, t.jsx)(
                    P.Z,
                    {
                        className: I.header,
                        stickerPack: r,
                        withDescription: !0
                    },
                    r.id
                ),
                (0, t.jsx)('div', {
                    onFocus: M,
                    onBlur: T,
                    onMouseOver: M,
                    onMouseOut: T,
                    children: (() => {
                        if (0 === u.length) return null;
                        let e = [];
                        for (let r = 0; r < u[0]; r++)
                            e.push(
                                (0, t.jsx)(
                                    x.Z,
                                    {
                                        enlargeOnInteraction: !0,
                                        preferAnimation: !0,
                                        gutterWidth: p,
                                        inspectedStickerPosition: d,
                                        isScrolling: s,
                                        onInspect: a,
                                        rowIndex: r,
                                        stickerDescriptors: m[r],
                                        stickerPadding: b,
                                        stickerSize: k,
                                        isDisplayingIndividualStickers: !0,
                                        checkSendability: !1
                                    },
                                    r
                                )
                            );
                        return e;
                    })()
                })
            ]
        });
    },
    W = (e) => {
        let { onClose: r, stickerPack: n } = e;
        (0, N.fP)();
        let l = (0, c.e7)([E.Z], () => E.Z.isPremiumPack(n.id));
        return (0, t.jsxs)(u.ModalFooter, {
            className: I.footer,
            children: [
                (0, t.jsx)(u.Anchor, {
                    onClick: r,
                    className: I.skuPreviewFooterCloseButton,
                    children: y.intl.string(y.t.cpT0Cg)
                }),
                l &&
                    (0, t.jsxs)(u.ShinyButton, {
                        color: u.Button.Colors.GREEN,
                        type: 'submit',
                        innerClassName: I.premiumButtonInner,
                        onClick: () => {
                            r(), (0, g.Z)({ section: v.jXE.STICKER_PACK_VIEW_ALL });
                        },
                        children: [
                            (0, t.jsx)(u.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: I.premiumButtonNitroWheel
                            }),
                            y.intl.string(y.t['w+kuhY'])
                        ]
                    })
            ]
        });
    },
    D = (e) => {
        let { stickerPack: r, onClose: n } = e,
            l = (0, C.sM)(r, 1024);
        return null == l
            ? null
            : (0, t.jsxs)(u.ModalHeader, {
                  className: I.headerWithImage,
                  children: [
                      (0, t.jsx)('div', {
                          role: 'image',
                          style: { backgroundImage: 'url('.concat(l, ')') },
                          className: I.backgroundImage
                      }),
                      (0, t.jsx)(u.ModalCloseButton, {
                          className: I.closeButton,
                          onClick: n
                      })
                  ]
              });
    };
function O(e) {
    let { onClose: r, stickerPack: n, ...o } = e,
        [i, s] = l.useState(null),
        a = l.useCallback((e) => {
            null !== e && s(e.offsetWidth);
        }, []);
    return (
        l.useLayoutEffect(() => {
            (0, S.pF)();
        }, []),
        (0, t.jsx)(p.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, t.jsx)(u.ModalRoot, {
                ...o,
                'aria-labelledby': 'sticker-pack-sku-preview-modal',
                children: (0, t.jsx)(_.Z, {
                    hideBreadcrumbs: !0,
                    body: (0, t.jsx)('div', {
                        ref: a,
                        children:
                            null != i &&
                            (0, t.jsx)(B, {
                                stickerPack: n,
                                hasHeaderImage: !0,
                                onInspect: R,
                                width: i
                            })
                    }),
                    footer: (0, t.jsx)(W, {
                        onClose: r,
                        stickerPack: n
                    }),
                    header: (0, t.jsx)(D, {
                        onClose: r,
                        stickerPack: n
                    }),
                    onScroll: T,
                    steps: [h.h8.SKU_PREVIEW],
                    currentStep: h.h8.SKU_PREVIEW
                })
            })
        })
    );
}
