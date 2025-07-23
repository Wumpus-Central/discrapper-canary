(n.d(t, {
    OB: () => S,
    ZP: () => k,
    mz: () => _
}),
    n(997841),
    n(388685),
    n(539854),
    n(35282),
    n(415506));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(228458),
    s = n(481060),
    u = n(393238),
    c = n(399654),
    d = n(162609),
    m = n(370298),
    h = n(95398),
    p = n(167080),
    f = n(247206),
    y = n(936141),
    g = n(262777),
    O = n(947849),
    I = n(124347),
    x = n(976853),
    j = n(592125),
    E = n(626135),
    b = n(630388),
    w = n(956664),
    C = n(499376),
    v = n(217702),
    P = n(981631),
    T = n(388032),
    N = n(308315),
    M = n(166011);
function A(e) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    var n;
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, C.aw)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type,
        srcIsAnimated: (0, b.yE)(null != (n = e.flags) ? n : 0, P.J0y.IS_ANIMATED)
    };
}
let _ = (e) => {
    let { mimeType: t, downloadURL: n, onRemoveItem: l, showDownload: a, showImageAppPicker: c, isVisualMediaType: d, channelId: h } = e,
        f = i.useRef(null),
        [y, g] = i.useState(0);
    (0, u.PM)(f, (e) => {
        let { width: t } = e;
        null != t && g(Math.floor((t - 8) / 32));
    });
    let O = [],
        [I, x] = i.useState(!1),
        j = i.useCallback(() => x((e) => !e), []);
    (c &&
        O.push(
            (0, r.jsx)(
                m.Z,
                {
                    toggleShowMenu: j,
                    showMenu: I,
                    channelId: h,
                    className: o()(M.hoverButton, { [M.selected]: I }),
                    imageUrl: n,
                    mimeType: t
                },
                'app'
            )
        ),
        null != l &&
            O.push(
                (0, r.jsx)(
                    s.ua7,
                    {
                        text: T.intl.string(T.t['/XT3io']),
                        children: (e) =>
                            (0, r.jsx)(
                                s.P3F,
                                L(A({}, e), {
                                    className: o()(M.hoverButton, N.removeMosaicItemHoverButton),
                                    focusProps: { offset: 2 },
                                    onClick: l,
                                    'aria-label': T.intl.string(T.t['0+xZHx']),
                                    children: (0, r.jsx)(s.XHJ, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 20,
                                        height: 20
                                    })
                                })
                            )
                    },
                    'remove'
                )
            ),
        a &&
            O.push(
                (0, r.jsx)(
                    s.ua7,
                    {
                        text: T.intl.string(T.t['1WjMbG']),
                        children: (e) =>
                            (0, r.jsx)(
                                p.Z,
                                L(A({}, e), {
                                    target: '_blank',
                                    rel: 'noreferrer noopener',
                                    className: M.hoverButton,
                                    iconClassName: N.downloadHoverButtonIcon,
                                    focusProps: { offset: 2 },
                                    href: n,
                                    mimeType: t
                                })
                            )
                    },
                    'download'
                )
            ));
    let E = Math.max(0, O.length - y);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            y > 0 &&
                O.length > 0 &&
                (0, r.jsx)('div', {
                    className: o()(M.hoverButtonGroup, {
                        [M.nonMediaMosaicItem]: !d,
                        [M.forceShowHover]: I
                    }),
                    children: O.slice(E)
                }),
            (0, r.jsx)('div', {
                ref: f,
                className: M.sizer
            })
        ]
    });
};
function D(e) {
    let { message: t, item: n, autoPlayGif: l, canRemoveItem: u, onRemoveItem: m, onClick: h, handlePreloadImage: p, onContextMenu: f, onPlay: y, renderImageComponent: g, renderVideoComponent: b, renderAudioComponent: C, renderPlaintextFilePreview: M, renderGenericFileComponent: A, renderVisualPlaceholderComponent: L, className: S, imgContainerClassName: D, imgClassName: k, focusable: W, hiddenSpoilers: G, mediaLayoutType: F, maxWidth: R, maxHeight: H, hasFooter: V, useFullWidth: Z, isVisualMediaType: B, onVideoControlsShow: U, onVideoControlsHide: X, isSearchResult: J, forcePlaceholder: z } = e,
        { width: q, height: Y, spoiler: K, type: Q, contentType: $ } = n,
        [ee, et] = i.useState(!1),
        [en, er] = i.useState(!1),
        ei = t.getChannelId(),
        el = j.Z.getChannel(ei),
        eo = (0, x.Z)(ei),
        ea = d.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        es = i.useMemo(() => (null != $ && -1 !== $.indexOf('/') ? $.split('/') : ['unknown', 'unknown']), [$]),
        eu = 'IMAGE' === Q && !I.uo.test(n.downloadUrl) && !((I.YG.test(n.downloadUrl) || I.FH.test(n.downloadUrl)) && !0 === n.srcIsAnimated),
        ec = !1;
    if (B) {
        (null == q || null == Y) && (ec = !0);
        let e = (0, w.Dc)({
            width: null != q ? q : 0,
            height: null != Y ? Y : 0,
            maxWidth: null != R ? R : v.mT,
            maxHeight: null != H ? H : v.Jj
        });
        !Z && (e * (null != q ? q : 0) < v.OF || e * (null != Y ? Y : 0) < v.OF) && (ec = !0);
    }
    let ed = i.useCallback(() => {
            m(n);
        }, [n, m]),
        em = i.useCallback(
            (e) => {
                if (eu && !ec && !0 !== J)
                    if (e && !en) {
                        if ((er(!0), ea)) {
                            var t;
                            (0, c.a)({
                                channelId: null != (t = null == el ? void 0 : el.id) ? t : '',
                                location: a.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        E.default.track(P.rMx.IMAGE_HOVERED, {
                            guild_id: null == el ? void 0 : el.guild_id,
                            channel_id: null == el ? void 0 : el.id,
                            image_recommendations_shown: ea
                        });
                    } else !e && en && er(!1);
            },
            [en, el, ea, eu, ec, J]
        ),
        eh = i.useCallback(() => {
            if (F === v.hV.MOSAIC) {
                let e = (!eo && ['VIDEO', 'CLIP', 'AUDIO'].includes(Q)) || 'OTHER' === Q;
                return ec
                    ? null
                    : !ee &&
                          (0, r.jsx)(_, {
                              mimeType: es,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: eu && ea && !0 !== J,
                              onRemoveItem: u ? ed : void 0,
                              isVisualMediaType: B,
                              channelId: ei
                          });
            }
            return (
                u &&
                (0, r.jsx)(s.P3F, {
                    className: K ? N.spoilerRemoveMosaicItemButton : N.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => m(n),
                    'aria-label': T.intl.string(T.t['0+xZHx']),
                    children: (0, r.jsx)(s.Dio, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [F, u, K, eo, Q, ec, ee, es, n, eu, ea, J, ed, B, ei, m]);
    if (z)
        return (0, r.jsx)(s.Eep, {
            className: S,
            readyState: P.zo9.READY,
            src: '',
            width: null != q ? q : 350,
            height: null != Y ? Y : 350,
            maxWidth: R,
            maxHeight: H,
            mediaLayoutType: F,
            useFullWidth: Z,
            zoomable: !1
        });
    switch (Q) {
        case 'IMAGE':
            return (0, r.jsx)(O.h.Consumer, {
                children: (e) =>
                    (0, r.jsx)(g, {
                        item: n,
                        message: t,
                        width: q,
                        height: Y,
                        autoPlay: l && !G,
                        onClick: h,
                        onContextMenu: f,
                        shouldHideMediaOptions: eo,
                        renderAccessory: e,
                        renderAdjacentContent: eh,
                        containerClassName: S,
                        className: D,
                        imageClassName: k,
                        shouldLink: W,
                        hiddenSpoilers: G,
                        responsive: !0,
                        mediaLayoutType: F,
                        maxWidth: R,
                        maxHeight: H,
                        useFullWidth: Z,
                        handlePreloadImage: p,
                        onMouseEnter: () => em(!0),
                        onMouseLeave: () => em(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, r.jsx)(b, {
                item: n,
                message: t,
                width: q,
                height: Y,
                onClick: h,
                onContextMenu: f,
                renderAdjacentContent: eh,
                naturalWidth: q,
                naturalHeight: Y,
                className: o()(S, { [N.hasFooter]: V }),
                playable: W,
                responsive: !0,
                mediaLayoutType: F,
                maxWidth: R,
                maxHeight: H,
                useFullWidth: Z,
                mimeType: es,
                onControlsShow: U,
                onControlsHide: X,
                downloadable: !eo,
                mediaPlayerClassName: V ? N.hasFooter : void 0
            });
        case 'VISUAL_PLACEHOLDER':
            if (null == L) return null;
            return (0, r.jsx)(L, {
                item: n,
                message: t,
                className: D,
                imageClassName: k,
                maxWidth: R,
                maxHeight: H,
                mediaLayoutType: F,
                useFullWidth: Z
            });
        case 'AUDIO':
            return (0, r.jsx)(C, {
                item: n,
                message: t,
                className: S,
                playable: W,
                mimeType: es,
                renderAdjacentContent: eh,
                onVolumeShow: () => et(!0),
                onVolumeHide: () => et(!1),
                onPlay: y
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, r.jsx)(M, {
                item: n,
                message: t,
                className: S,
                onClick: h,
                onContextMenu: f,
                renderAdjacentContent: eh
            });
        case 'OTHER':
            return (0, r.jsx)(A, {
                item: n,
                message: t,
                className: S,
                onClick: h,
                onContextMenu: f,
                renderAdjacentContent: eh
            });
        case 'INVALID':
            return null;
    }
}
let k = function (e) {
    var { className: t, item: n, message: l, getObscureReason: a, useFullWidth: s, mediaLayoutType: u, isSingleMosaicItem: c, footer: d, displayGridItem: m } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['className', 'item', 'message', 'getObscureReason', 'useFullWidth', 'mediaLayoutType', 'isSingleMosaicItem', 'footer', 'displayGridItem']);
    let { width: O, height: I, type: x } = n,
        j = a(n, (0, g.v)(l)),
        [E, b] = i.useState(null != j),
        P = (0, f.JO)(j),
        T = u === v.hV.MOSAIC,
        M = !T && ((null != O && O < 200) || (null != I && I < 50)),
        S = 'IMAGE' === x || 'VIDEO' === x,
        _ = (0, C.R_)(x),
        k = c && null != j && (0, f.yf)(O, I),
        [W, G] = i.useState(!1),
        F = () => {
            G(!0);
        },
        R = () => {
            G(!1);
        },
        H = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, r.jsx)(
                D,
                L(A({}, p), {
                    item: n,
                    message: l,
                    getObscureReason: a,
                    hiddenSpoilers: e,
                    className: o()(t, N.mosaicItemContent, {
                        [N.obscured]: E && !M,
                        [N.hiddenSpoiler]: E && j === y.wk.SPOILER,
                        [N.hiddenExplicit]: E && null != j && y.Xh.has(j),
                        [N.hiddenMosaicItem]: E && e,
                        [N.inline]: E && M
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    hasFooter: null != d,
                    useFullWidth: !!k || s,
                    isVisualMediaType: _,
                    onVideoControlsShow: F,
                    onVideoControlsHide: R,
                    forcePlaceholder: P && E
                })
            );
        };
    return (0, r.jsxs)('div', {
        style: m
            ? {
                  minWidth: 0,
                  width: ''.concat(p.maxWidth, 'px')
              }
            : void 0,
        className: o()(N.mosaicItem, {
            [N.mosaicItemNoJustify]: S,
            [N.mosaicItemFullWidth]: s,
            [N.mosaicItemMediaMosaic]: T,
            [N.hideOverflow]: T && _,
            [N.mosaicItemWithFooter]: null != d
        }),
        children: [
            null != j
                ? (0, r.jsx)(h.ZP, {
                      type: h.ZP.Types.ATTACHMENT,
                      inline: M,
                      reason: j,
                      isSingleMosaicItem: c,
                      obscured: E,
                      containerStyles: (function (e, t, n) {
                          if (!t) return;
                          let r = e.width;
                          if (void 0 !== e.width && void 0 !== e.height) {
                              let { width: t } = (0, w.Tj)({
                                  width: e.width,
                                  height: e.height,
                                  maxWidth: 400,
                                  maxHeight: 300
                              });
                              r = t;
                          }
                          return L(A({}, n !== v.hV.MOSAIC && { maxWidth: null != r ? r : '400px' }), {
                              width: '100%',
                              height: '100%',
                              justifySelf: 'auto'
                          });
                      })(n, S, u),
                      obscurityControlClassName: o()({ [N.obscureVideoSpacing]: 'VIDEO' === x && c && !E && W }),
                      onToggleObscurity: () => b((e) => !e),
                      children: (e) => H(e)
                  })
                : H(),
            d
        ]
    });
};
