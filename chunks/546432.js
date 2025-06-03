n.d(t, {
    OB: () => L,
    ZP: () => W,
    mz: () => D
}),
    n(997841),
    n(388685),
    n(539854),
    n(35282),
    n(415506);
var i = n(255367),
    o = n(73800),
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
    j = n(592125),
    O = n(626135),
    b = n(630388),
    v = n(956664),
    C = n(169525),
    w = n(499376),
    M = n(217702),
    P = n(981631),
    E = n(388032),
    N = n(308315),
    A = n(166011);
function S(e) {
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
function T(e, t) {
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
function L(e, t) {
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
        [I, j] = o.useState(!1),
        O = o.useCallback(() => j((e) => !e), []);
    d &&
        y.push(
            (0, i.jsx)(
                m.Z,
                {
                    toggleShowMenu: O,
                    showMenu: I,
                    channelId: h,
                    className: l()(A.hoverButton, { [A.selected]: I }),
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
                        text: E.intl.string(E.t['/XT3io']),
                        children: (e) =>
                            (0, i.jsx)(
                                s.P3F,
                                T(S({}, e), {
                                    className: l()(A.hoverButton, N.removeMosaicItemHoverButton),
                                    focusProps: { offset: 2 },
                                    onClick: r,
                                    'aria-label': E.intl.string(E.t['0+xZHx']),
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
                        text: E.intl.string(E.t['1WjMbG']),
                        children: (e) =>
                            (0, i.jsx)(
                                p.Z,
                                T(S({}, e), {
                                    target: '_blank',
                                    rel: 'noreferrer noopener',
                                    className: A.hoverButton,
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
                    className: l()(A.hoverButtonGroup, {
                        [A.nonMediaMosaicItem]: !c,
                        [A.forceShowHover]: I
                    }),
                    children: y.slice(b)
                }),
            (0, i.jsx)('div', {
                ref: g,
                className: A.sizer
            })
        ]
    });
};
function V(e) {
    let { message: t, item: n, autoPlayGif: r, canRemoveItem: u, onRemoveItem: m, onClick: h, handlePreloadImage: p, onContextMenu: g, onPlay: f, renderImageComponent: b, renderVideoComponent: C, renderAudioComponent: w, renderPlaintextFilePreview: A, renderGenericFileComponent: S, renderVisualPlaceholderComponent: T, className: L, imgContainerClassName: V, imgClassName: W, focusable: F, hiddenSpoilers: _, mediaLayoutType: H, maxWidth: k, maxHeight: R, hasFooter: G, useFullWidth: B, isVisualMediaType: U, onVideoControlsShow: Z, onVideoControlsHide: z, isSearchResult: q } = e,
        { width: J, height: X, spoiler: Y, type: $, contentType: K } = n,
        [Q, ee] = o.useState(!1),
        [et, en] = o.useState(!1),
        ei = t.getChannelId(),
        eo = j.Z.getChannel(ei),
        er = (0, I.Z)(ei),
        el = c.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        ea = o.useMemo(() => (null != K && -1 !== K.indexOf('/') ? K.split('/') : ['unknown', 'unknown']), [K]),
        es = 'IMAGE' === $ && !y.uo.test(n.downloadUrl) && !((y.YG.test(n.downloadUrl) || y.FH.test(n.downloadUrl)) && !0 === n.srcIsAnimated),
        eu = !1;
    if (U) {
        (null == J || null == X) && (eu = !0);
        let e = (0, v.Dc)({
            width: null != J ? J : 0,
            height: null != X ? X : 0,
            maxWidth: null != k ? k : M.mT,
            maxHeight: null != R ? R : M.Jj
        });
        !B && (e * (null != J ? J : 0) < M.OF || e * (null != X ? X : 0) < M.OF) && (eu = !0);
    }
    let ed = o.useCallback(() => {
            m(n);
        }, [n, m]),
        ec = o.useCallback(
            (e) => {
                if (es && !eu && !0 !== q)
                    if (e && !et) {
                        if ((en(!0), el)) {
                            var t;
                            (0, d.a)({
                                channelId: null != (t = null == eo ? void 0 : eo.id) ? t : '',
                                location: a.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        O.default.track(P.rMx.IMAGE_HOVERED, {
                            guild_id: null == eo ? void 0 : eo.guild_id,
                            channel_id: null == eo ? void 0 : eo.id,
                            image_recommendations_shown: el
                        });
                    } else !e && et && en(!1);
            },
            [et, eo, el, es, eu, q]
        ),
        em = o.useCallback(() => {
            if (H === M.hV.MOSAIC) {
                let e = (!er && ['VIDEO', 'CLIP', 'AUDIO'].includes($)) || 'OTHER' === $;
                return eu
                    ? null
                    : !Q &&
                          (0, i.jsx)(D, {
                              mimeType: ea,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: es && el && !0 !== q,
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
                    'aria-label': E.intl.string(E.t['0+xZHx']),
                    children: (0, i.jsx)(s.Dio, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [H, u, Y, er, $, eu, Q, ea, n, es, el, q, ed, U, ei, m]);
    switch ($) {
        case 'IMAGE':
            return (0, i.jsx)(x.h.Consumer, {
                children: (e) =>
                    (0, i.jsx)(b, {
                        item: n,
                        message: t,
                        width: J,
                        height: X,
                        autoPlay: r && !_,
                        onClick: h,
                        onContextMenu: g,
                        shouldHideMediaOptions: er,
                        renderAccessory: e,
                        renderAdjacentContent: em,
                        containerClassName: L,
                        className: V,
                        imageClassName: W,
                        shouldLink: F,
                        hiddenSpoilers: _,
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
            return (0, i.jsx)(C, {
                item: n,
                message: t,
                width: J,
                height: X,
                onClick: h,
                onContextMenu: g,
                renderAdjacentContent: em,
                naturalWidth: J,
                naturalHeight: X,
                className: l()(L, { [N.hasFooter]: G }),
                playable: F,
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
            if (null == T) return null;
            return (0, i.jsx)(T, {
                item: n,
                message: t,
                className: V,
                imageClassName: W,
                maxWidth: k,
                maxHeight: R,
                mediaLayoutType: H,
                useFullWidth: B
            });
        case 'AUDIO':
            return (0, i.jsx)(w, {
                item: n,
                message: t,
                className: L,
                playable: F,
                mimeType: ea,
                renderAdjacentContent: em,
                onVolumeShow: () => ee(!0),
                onVolumeHide: () => ee(!1),
                onPlay: f
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, i.jsx)(A, {
                item: n,
                message: t,
                className: L,
                onClick: h,
                onContextMenu: g,
                renderAdjacentContent: em
            });
        case 'OTHER':
            return (0, i.jsx)(S, {
                item: n,
                message: t,
                className: L,
                onClick: h,
                onContextMenu: g,
                renderAdjacentContent: em
            });
        case 'INVALID':
            return null;
    }
}
let W = function (e) {
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
        [j, O] = o.useState(null != I),
        b = u === M.hV.MOSAIC,
        P = !b && ((null != p && p < 200) || (null != x && x < 50)),
        E = 'IMAGE' === y || 'VIDEO' === y,
        A = (0, w.R_)(y),
        L = d && null != I && (0, g.bR)(p, x),
        [D, W] = o.useState(!1),
        F = () => {
            W(!0);
        },
        _ = () => {
            W(!1);
        },
        H = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(
                V,
                T(S({}, m), {
                    item: n,
                    message: r,
                    getObscureReason: a,
                    hiddenSpoilers: e,
                    className: l()(t, N.mosaicItemContent, {
                        [N.obscured]: j && !P,
                        [N.hiddenSpoiler]: j && I === C.wk.SPOILER,
                        [N.hiddenExplicit]: j && null != I && C.Xh.has(I),
                        [N.hiddenMosaicItem]: j && e,
                        [N.inline]: j && P
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    hasFooter: null != c,
                    useFullWidth: !!L || s,
                    isVisualMediaType: A,
                    onVideoControlsShow: F,
                    onVideoControlsHide: _
                })
            );
        };
    return (0, i.jsxs)('div', {
        className: l()(N.mosaicItem, {
            [N.mosaicItemNoJustify]: E,
            [N.mosaicItemFullWidth]: s,
            [N.mosaicItemMediaMosaic]: b,
            [N.hideOverflow]: b && A,
            [N.mosaicItemWithFooter]: null != c
        }),
        children: [
            null != I
                ? (0, i.jsx)(h.ZP, {
                      type: h.ZP.Types.ATTACHMENT,
                      inline: P,
                      reason: I,
                      isSingleMosaicItem: d,
                      obscured: j,
                      containerStyles: (function (e, t, n) {
                          if (!t) return;
                          let i = e.width;
                          if (void 0 !== e.width && void 0 !== e.height) {
                              let { width: t } = (0, v.Tj)({
                                  width: e.width,
                                  height: e.height,
                                  maxWidth: 400,
                                  maxHeight: 300
                              });
                              i = t;
                          }
                          return T(S({}, n !== M.hV.MOSAIC && { maxWidth: null != i ? i : '400px' }), {
                              width: '100%',
                              height: '100%',
                              justifySelf: 'auto'
                          });
                      })(n, E, u),
                      obscurityControlClassName: l()({ [N.obscureVideoSpacing]: 'VIDEO' === y && d && !j && D }),
                      onToggleObscurity: () => O((e) => !e),
                      children: (e) => H(e)
                  })
                : H(),
            c
        ]
    });
};
