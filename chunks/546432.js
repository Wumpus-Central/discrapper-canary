n.d(t, {
    OB: () => S,
    ZP: () => _,
    mz: () => D
}),
    n(997841),
    n(388685),
    n(539854),
    n(35282),
    n(415506);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(228458),
    s = n(481060),
    u = n(393238),
    d = n(399654),
    c = n(162609),
    m = n(370298),
    h = n(95398),
    p = n(167080),
    g = n(247206),
    f = n(25610),
    x = n(947849),
    y = n(124347),
    I = n(976853),
    O = n(592125),
    j = n(626135),
    b = n(630388),
    C = n(956664),
    v = n(169525),
    w = n(499376),
    E = n(217702),
    P = n(981631),
    M = n(388032),
    N = n(308315),
    T = n(166011);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
        type: (0, w.aw)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type,
        srcIsAnimated: (0, b.yE)(null != (n = e.flags) ? n : 0, P.J0y.IS_ANIMATED)
    };
}
let D = (e) => {
    let { mimeType: t, downloadURL: n, onRemoveItem: r, showDownload: a, showImageAppPicker: d, isVisualMediaType: c, channelId: h } = e,
        g = o.useRef(null),
        [f, x] = o.useState(0);
    (0, u.PM)(g, (e) => {
        let { width: t } = e;
        null != t && x(Math.floor((t - 8) / 32));
    });
    let y = [],
        [I, O] = o.useState(!1),
        j = o.useCallback(() => O((e) => !e), []);
    d &&
        y.push(
            (0, i.jsx)(
                m.Z,
                {
                    toggleShowMenu: j,
                    showMenu: I,
                    channelId: h,
                    className: l()(T.hoverButton, { [T.selected]: I }),
                    imageUrl: n,
                    mimeType: t
                },
                'app'
            )
        ),
        null != r &&
            y.push(
                (0, i.jsx)(
                    s.ua7,
                    {
                        text: M.intl.string(M.t['/XT3io']),
                        children: (e) =>
                            (0, i.jsx)(
                                s.P3F,
                                L(A({}, e), {
                                    className: l()(T.hoverButton, N.removeMosaicItemHoverButton),
                                    focusProps: { offset: 2 },
                                    onClick: r,
                                    'aria-label': M.intl.string(M.t['0+xZHx']),
                                    children: (0, i.jsx)(s.XHJ, {
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
            y.push(
                (0, i.jsx)(
                    s.ua7,
                    {
                        text: M.intl.string(M.t['1WjMbG']),
                        children: (e) =>
                            (0, i.jsx)(
                                p.Z,
                                L(A({}, e), {
                                    target: '_blank',
                                    rel: 'noreferrer noopener',
                                    className: T.hoverButton,
                                    iconClassName: N.downloadHoverButtonIcon,
                                    focusProps: { offset: 2 },
                                    href: n,
                                    mimeType: t
                                })
                            )
                    },
                    'download'
                )
            );
    let b = Math.max(0, y.length - f);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            f > 0 &&
                y.length > 0 &&
                (0, i.jsx)('div', {
                    className: l()(T.hoverButtonGroup, {
                        [T.nonMediaMosaicItem]: !c,
                        [T.forceShowHover]: I
                    }),
                    children: y.slice(b)
                }),
            (0, i.jsx)('div', {
                ref: g,
                className: T.sizer
            })
        ]
    });
};
function V(e) {
    let { message: t, item: n, autoPlayGif: r, canRemoveItem: u, onRemoveItem: m, onClick: h, handlePreloadImage: p, onContextMenu: g, onPlay: f, renderImageComponent: b, renderVideoComponent: v, renderAudioComponent: w, renderPlaintextFilePreview: T, renderGenericFileComponent: A, renderVisualPlaceholderComponent: L, className: S, imgContainerClassName: V, imgClassName: _, focusable: W, hiddenSpoilers: F, mediaLayoutType: H, maxWidth: k, maxHeight: R, hasFooter: G, useFullWidth: B, isVisualMediaType: U, onVideoControlsShow: Z, onVideoControlsHide: z, isSearchResult: X } = e,
        { width: q, height: J, spoiler: Y, type: $, contentType: K } = n,
        [Q, ee] = o.useState(!1),
        [et, en] = o.useState(!1),
        ei = t.getChannelId(),
        eo = O.Z.getChannel(ei),
        er = (0, I.Z)(ei),
        el = c.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        ea = o.useMemo(() => (null != K && -1 !== K.indexOf('/') ? K.split('/') : ['unknown', 'unknown']), [K]),
        es = 'IMAGE' === $ && !y.uo.test(n.downloadUrl) && !((y.YG.test(n.downloadUrl) || y.FH.test(n.downloadUrl)) && !0 === n.srcIsAnimated),
        eu = !1;
    if (U) {
        (null == q || null == J) && (eu = !0);
        let e = (0, C.Dc)({
            width: null != q ? q : 0,
            height: null != J ? J : 0,
            maxWidth: null != k ? k : E.mT,
            maxHeight: null != R ? R : E.Jj
        });
        !B && (e * (null != q ? q : 0) < E.OF || e * (null != J ? J : 0) < E.OF) && (eu = !0);
    }
    let ed = o.useCallback(() => {
            m(n);
        }, [n, m]),
        ec = o.useCallback(
            (e) => {
                if (es && !eu && !0 !== X)
                    if (e && !et) {
                        if ((en(!0), el)) {
                            var t;
                            (0, d.a)({
                                channelId: null != (t = null == eo ? void 0 : eo.id) ? t : '',
                                location: a.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        j.default.track(P.rMx.IMAGE_HOVERED, {
                            guild_id: null == eo ? void 0 : eo.guild_id,
                            channel_id: null == eo ? void 0 : eo.id,
                            image_recommendations_shown: el
                        });
                    } else !e && et && en(!1);
            },
            [et, eo, el, es, eu, X]
        ),
        em = o.useCallback(() => {
            if (H === E.hV.MOSAIC) {
                let e = (!er && ['VIDEO', 'CLIP', 'AUDIO'].includes($)) || 'OTHER' === $;
                return eu
                    ? null
                    : !Q &&
                          (0, i.jsx)(D, {
                              mimeType: ea,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: es && el && !0 !== X,
                              onRemoveItem: u ? ed : void 0,
                              isVisualMediaType: U,
                              channelId: ei
                          });
            }
            return (
                u &&
                (0, i.jsx)(s.P3F, {
                    className: Y ? N.spoilerRemoveMosaicItemButton : N.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => m(n),
                    'aria-label': M.intl.string(M.t['0+xZHx']),
                    children: (0, i.jsx)(s.Dio, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [H, u, Y, er, $, eu, Q, ea, n, es, el, X, ed, U, ei, m]);
    switch ($) {
        case 'IMAGE':
            return (0, i.jsx)(x.h.Consumer, {
                children: (e) =>
                    (0, i.jsx)(b, {
                        item: n,
                        message: t,
                        width: q,
                        height: J,
                        autoPlay: r && !F,
                        onClick: h,
                        onContextMenu: g,
                        shouldHideMediaOptions: er,
                        renderAccessory: e,
                        renderAdjacentContent: em,
                        containerClassName: S,
                        className: V,
                        imageClassName: _,
                        shouldLink: W,
                        hiddenSpoilers: F,
                        responsive: !0,
                        mediaLayoutType: H,
                        maxWidth: k,
                        maxHeight: R,
                        useFullWidth: B,
                        handlePreloadImage: p,
                        onMouseEnter: () => ec(!0),
                        onMouseLeave: () => ec(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, i.jsx)(v, {
                item: n,
                message: t,
                width: q,
                height: J,
                onClick: h,
                onContextMenu: g,
                renderAdjacentContent: em,
                naturalWidth: q,
                naturalHeight: J,
                className: l()(S, { [N.hasFooter]: G }),
                playable: W,
                responsive: !0,
                mediaLayoutType: H,
                maxWidth: k,
                maxHeight: R,
                useFullWidth: B,
                mimeType: ea,
                onControlsShow: Z,
                onControlsHide: z,
                downloadable: !er,
                mediaPlayerClassName: G ? N.hasFooter : void 0
            });
        case 'VISUAL_PLACEHOLDER':
            if (null == L) return null;
            return (0, i.jsx)(L, {
                item: n,
                message: t,
                className: V,
                imageClassName: _,
                maxWidth: k,
                maxHeight: R,
                mediaLayoutType: H,
                useFullWidth: B
            });
        case 'AUDIO':
            return (0, i.jsx)(w, {
                item: n,
                message: t,
                className: S,
                playable: W,
                mimeType: ea,
                renderAdjacentContent: em,
                onVolumeShow: () => ee(!0),
                onVolumeHide: () => ee(!1),
                onPlay: f
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, i.jsx)(T, {
                item: n,
                message: t,
                className: S,
                onClick: h,
                onContextMenu: g,
                renderAdjacentContent: em
            });
        case 'OTHER':
            return (0, i.jsx)(A, {
                item: n,
                message: t,
                className: S,
                onClick: h,
                onContextMenu: g,
                renderAdjacentContent: em
            });
        case 'INVALID':
            return null;
    }
}
let _ = function (e) {
    var { className: t, item: n, message: r, getObscureReason: a, useFullWidth: s, mediaLayoutType: u, isSingleMosaicItem: d, footer: c } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        o = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['className', 'item', 'message', 'getObscureReason', 'useFullWidth', 'mediaLayoutType', 'isSingleMosaicItem', 'footer']);
    let { width: p, height: x, type: y } = n,
        I = a(n, (0, f.V)(r.channel_id, r.author.id)),
        [O, j] = o.useState(null != I),
        b = u === E.hV.MOSAIC,
        P = !b && ((null != p && p < 200) || (null != x && x < 50)),
        M = 'IMAGE' === y || 'VIDEO' === y,
        T = (0, w.R_)(y),
        S = d && null != I && (0, g.bR)(p, x),
        [D, _] = o.useState(!1),
        W = () => {
            _(!0);
        },
        F = () => {
            _(!1);
        },
        H = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(
                V,
                L(A({}, m), {
                    item: n,
                    message: r,
                    getObscureReason: a,
                    hiddenSpoilers: e,
                    className: l()(t, N.mosaicItemContent, {
                        [N.obscured]: O && !P,
                        [N.hiddenSpoiler]: O && I === v.wk.SPOILER,
                        [N.hiddenExplicit]: O && null != I && [v.wk.EXPLICIT_CONTENT, v.wk.POTENTIAL_EXPLICIT_CONTENT].includes(I),
                        [N.hiddenMosaicItem]: O && e,
                        [N.inline]: O && P
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    hasFooter: null != c,
                    useFullWidth: !!S || s,
                    isVisualMediaType: T,
                    onVideoControlsShow: W,
                    onVideoControlsHide: F
                })
            );
        };
    return (0, i.jsxs)('div', {
        className: l()(N.mosaicItem, {
            [N.mosaicItemNoJustify]: M,
            [N.mosaicItemFullWidth]: s,
            [N.mosaicItemMediaMosaic]: b,
            [N.hideOverflow]: b && T,
            [N.mosaicItemWithFooter]: null != c
        }),
        children: [
            null != I
                ? (0, i.jsx)(h.ZP, {
                      type: h.ZP.Types.ATTACHMENT,
                      inline: P,
                      reason: I,
                      isSingleMosaicItem: d,
                      obscured: O,
                      containerStyles: (function (e, t, n) {
                          if (!t) return;
                          let i = e.width;
                          if (void 0 !== e.width && void 0 !== e.height) {
                              let { width: t } = (0, C.Tj)({
                                  width: e.width,
                                  height: e.height,
                                  maxWidth: 400,
                                  maxHeight: 300
                              });
                              i = t;
                          }
                          return L(A({}, n !== E.hV.MOSAIC && { maxWidth: null != i ? i : '400px' }), {
                              width: '100%',
                              height: '100%',
                              justifySelf: 'auto'
                          });
                      })(n, M, u),
                      obscurityControlClassName: l()({ [N.obscureVideoSpacing]: 'VIDEO' === y && d && !O && D }),
                      onToggleObscurity: () => j((e) => !e),
                      children: (e) => H(e)
                  })
                : H(),
            c
        ]
    });
};
