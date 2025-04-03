r.d(t, { default: () => D }), r(653041), r(47120);
var n = r(200651),
    o = r(192379),
    i = r(120356),
    s = r.n(i),
    c = r(954955),
    a = r.n(c),
    l = r(442837),
    u = r(477690),
    f = r(481060),
    d = r(691251),
    b = r(563132),
    p = r(409813),
    m = r(185139),
    h = r(624138),
    j = r(790954),
    O = r(453070),
    g = r(926491),
    P = r(378233),
    k = r(515005),
    y = r(282896),
    S = r(929204),
    _ = r(981631),
    x = r(388032),
    I = r(95547);
let v = (0, h.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
    N = (0, h.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
    C = (0, h.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
    E = v + 2 * N,
    w = a()(j.pF, 250),
    W = () => {
        w.cancel();
    },
    T = (e) => {
        let { visibleRowIndex: t, columnIndex: r } = e;
        w.cancel(), (0, j.Mf)(r, t, d.u.MOUSE_EVENT);
    },
    R = (e) => {
        let { stickerPack: t, width: r, hasHeaderImage: i, isScrolling: c, onInspect: a } = e,
            l = o.useMemo(() => [(0, P.z)(t)], [t]),
            u = (0, j.Y6)((e) => e.inspectedStickerPosition),
            {
                rowCountBySection: f,
                stickersGrid: d,
                gutterWidth: b
            } = (0, O.el)({
                stickersCategories: l,
                stickerNodeMargin: C,
                stickerNodeWidth: E,
                listWidth: r
            });
        return (0, n.jsxs)('div', {
            className: s()(I.container, { [I.containerWithHeader]: i }),
            children: [
                (0, n.jsx)(
                    y.Z,
                    {
                        className: I.header,
                        stickerPack: t,
                        withDescription: !0
                    },
                    t.id
                ),
                (0, n.jsx)('div', {
                    onFocus: W,
                    onBlur: w,
                    onMouseOver: W,
                    onMouseOut: w,
                    children: (() => {
                        if (0 === f.length) return null;
                        let e = [];
                        for (let t = 0; t < f[0]; t++)
                            e.push(
                                (0, n.jsx)(
                                    k.Z,
                                    {
                                        enlargeOnInteraction: !0,
                                        preferAnimation: !0,
                                        gutterWidth: b,
                                        inspectedStickerPosition: u,
                                        isScrolling: c,
                                        onInspect: a,
                                        rowIndex: t,
                                        stickerDescriptors: d[t],
                                        stickerPadding: N,
                                        stickerSize: v,
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
    A = (e) => {
        let { onClose: t, stickerPack: r } = e;
        (0, O.fP)();
        let o = (0, l.e7)([g.Z], () => g.Z.isPremiumPack(r.id));
        return (0, n.jsxs)(f.mzw, {
            className: I.footer,
            children: [
                (0, n.jsx)(f.eee, {
                    onClick: t,
                    className: I.skuPreviewFooterCloseButton,
                    children: x.NW.string(x.t.cpT0Cg)
                }),
                o &&
                    (0, n.jsxs)(f.gtL, {
                        color: f.zxk.Colors.GREEN,
                        type: 'submit',
                        innerClassName: I.premiumButtonInner,
                        onClick: () => {
                            t(), (0, S.Z)({ section: _.jXE.STICKER_PACK_VIEW_ALL });
                        },
                        children: [
                            (0, n.jsx)(f.SrA, {
                                size: 'md',
                                color: 'currentColor',
                                className: I.premiumButtonNitroWheel
                            }),
                            x.NW.string(x.t['w+kuhY'])
                        ]
                    })
            ]
        });
    },
    B = (e) => {
        let { stickerPack: t, onClose: r } = e,
            o = (0, P.sM)(t, 1024);
        return null == o
            ? null
            : (0, n.jsxs)(f.xBx, {
                  className: I.headerWithImage,
                  children: [
                      (0, n.jsx)('div', {
                          role: 'image',
                          style: { backgroundImage: 'url('.concat(o, ')') },
                          className: I.backgroundImage
                      }),
                      (0, n.jsx)(f.olH, {
                          className: I.closeButton,
                          onClick: r
                      })
                  ]
              });
    };
function D(e) {
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
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['onClose', 'stickerPack']);
    let [a, l] = o.useState(null),
        u = o.useCallback((e) => {
            null !== e && l(e.offsetWidth);
        }, []);
    return (
        o.useLayoutEffect(() => {
            (0, j.pF)();
        }, []),
        (0, n.jsx)(b.PaymentContextProvider, {
            activeSubscription: null,
            stepConfigs: [],
            skuIDs: [],
            children: (0, n.jsx)(
                f.Y0X,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, c)),
                (r = r =
                    {
                        'aria-labelledby': 'sticker-pack-sku-preview-modal',
                        children: (0, n.jsx)(m.Z, {
                            hideBreadcrumbs: !0,
                            body: (0, n.jsx)('div', {
                                ref: u,
                                children:
                                    null != a &&
                                    (0, n.jsx)(R, {
                                        stickerPack: s,
                                        hasHeaderImage: !0,
                                        onInspect: T,
                                        width: a
                                    })
                            }),
                            footer: (0, n.jsx)(A, {
                                onClose: i,
                                stickerPack: s
                            }),
                            header: (0, n.jsx)(B, {
                                onClose: i,
                                stickerPack: s
                            }),
                            onScroll: w,
                            steps: [p.h8.SKU_PREVIEW],
                            currentStep: p.h8.SKU_PREVIEW
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
