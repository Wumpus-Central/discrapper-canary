(r.d(t, { default: () => M }), r(539854), r(388685));
var n = r(255367),
    o = r(73800),
    i = r(120356),
    s = r.n(i),
    c = r(954955),
    a = r.n(c),
    l = r(442837),
    u = r(477690),
    f = r(755721),
    d = r(481060),
    b = r(691251),
    p = r(563132),
    m = r(409813),
    h = r(185139),
    j = r(624138),
    O = r(790954),
    g = r(453070),
    P = r(926491),
    k = r(378233),
    y = r(515005),
    S = r(282896),
    _ = r(929204),
    x = r(981631),
    I = r(388032),
    v = r(95547);
let C = (0, j.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
    E = (0, j.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
    N = (0, j.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
    w = C + 2 * E,
    T = a()(O.pF, 250),
    W = () => {
        T.cancel();
    },
    R = (e) => {
        let { visibleRowIndex: t, columnIndex: r } = e;
        (T.cancel(), (0, O.Mf)(r, t, b.u.MOUSE_EVENT));
    },
    A = (e) => {
        let { stickerPack: t, width: r, hasHeaderImage: i, isScrolling: c, onInspect: a } = e,
            l = o.useMemo(() => [(0, k.z)(t)], [t]),
            u = (0, O.Y6)((e) => e.inspectedStickerPosition),
            {
                rowCountBySection: f,
                stickersGrid: d,
                gutterWidth: b
            } = (0, g.el)({
                stickersCategories: l,
                stickerNodeMargin: N,
                stickerNodeWidth: w,
                listWidth: r
            });
        return (0, n.jsxs)('div', {
            className: s()(v.container, { [v.containerWithHeader]: i }),
            children: [
                (0, n.jsx)(
                    S.Z,
                    {
                        className: v.header,
                        stickerPack: t,
                        withDescription: !0
                    },
                    t.id
                ),
                (0, n.jsx)('div', {
                    onFocus: W,
                    onBlur: T,
                    onMouseOver: W,
                    onMouseOut: T,
                    children: (() => {
                        if (0 === f.length) return null;
                        let e = [];
                        for (let t = 0; t < f[0]; t++)
                            e.push(
                                (0, n.jsx)(
                                    y.Z,
                                    {
                                        enlargeOnInteraction: !0,
                                        preferAnimation: !0,
                                        gutterWidth: b,
                                        inspectedStickerPosition: u,
                                        isScrolling: c,
                                        onInspect: a,
                                        rowIndex: t,
                                        stickerDescriptors: d[t],
                                        stickerPadding: E,
                                        stickerSize: C,
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
    B = (e) => {
        let { onClose: t, stickerPack: r } = e;
        (0, g.fP)();
        let o = (0, l.e7)([P.Z], () => P.Z.isPremiumPack(r.id));
        return (0, n.jsxs)(d.mzw, {
            className: v.footer,
            children: [
                (0, n.jsx)(d.eee, {
                    onClick: t,
                    className: v.skuPreviewFooterCloseButton,
                    children: I.intl.string(I.t.cpT0Cg)
                }),
                o &&
                    (0, n.jsxs)(d.gtL, {
                        color: f.zx.Colors.GREEN,
                        type: 'submit',
                        innerClassName: v.premiumButtonInner,
                        onClick: () => {
                            (t(), (0, _.Z)({ section: x.jXE.STICKER_PACK_VIEW_ALL }));
                        },
                        children: [
                            (0, n.jsx)(d.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: v.premiumButtonNitroWheel
                            }),
                            I.intl.string(I.t['w+kuhY'])
                        ]
                    })
            ]
        });
    },
    D = (e) => {
        let { stickerPack: t, onClose: r } = e,
            o = (0, k.sM)(t, 1024);
        return null == o
            ? null
            : (0, n.jsxs)(d.xBx, {
                  className: v.headerWithImage,
                  children: [
                      (0, n.jsx)('div', {
                          role: 'image',
                          style: { backgroundImage: 'url('.concat(o, ')') },
                          className: v.backgroundImage
                      }),
                      (0, n.jsx)(d.olH, {
                          className: v.closeButton,
                          onClick: r
                      })
                  ]
              });
    };
function M(e) {
    var t,
        r,
        { onClose: i, stickerPack: s } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) ((r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
            }
            return o;
        })(e, ['onClose', 'stickerPack']);
    let [a, l] = o.useState(null),
        u = o.useCallback((e) => {
            null !== e && l(e.offsetWidth);
        }, []);
    return (
        o.useLayoutEffect(() => {
            (0, O.pF)();
        }, []),
        (0, n.jsx)(p.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, n.jsx)(
                d.Y0X,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                ((n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n));
                            }));
                    }
                    return e;
                })({}, c)),
                (r = r =
                    {
                        'aria-labelledby': 'sticker-pack-sku-preview-modal',
                        parentComponent: 'StickerPackViewAllModal',
                        children: (0, n.jsx)(h.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, n.jsx)('div', {
                                ref: u,
                                children:
                                    null != a &&
                                    (0, n.jsx)(A, {
                                        stickerPack: s,
                                        hasHeaderImage: !0,
                                        onInspect: R,
                                        width: a
                                    })
                            }),
                            footer: (0, n.jsx)(B, {
                                onClose: i,
                                stickerPack: s
                            }),
                            header: (0, n.jsx)(D, {
                                onClose: i,
                                stickerPack: s
                            }),
                            onScroll: T,
                            steps: [m.h8.SKU_PREVIEW],
                            currentStep: m.h8.SKU_PREVIEW
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t)
            )
        })
    );
}
