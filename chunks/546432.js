n.d(t, {
    OB: () => S,
    ZP: () => k,
    mz: () => _
}),
    n(997841),
    n(388685),
    n(539854),
    n(35282),
    n(415506);
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
    O = n(936141),
    g = n(262777),
    y = n(947849),
    I = n(124347),
    j = n(976853),
    x = n(592125),
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
        [O, g] = i.useState(0);
    (0, u.PM)(f, (e) => {
        let { width: t } = e;
        null != t && g(Math.floor((t - 8) / 32));
    });
    let y = [],
        [I, j] = i.useState(!1),
        x = i.useCallback(() => j((e) => !e), []);
    c &&
        y.push(
            (0, r.jsx)(
                m.Z,
                {
                    toggleShowMenu: x,
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
            y.push(
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
            y.push(
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
            );
    let E = Math.max(0, y.length - O);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            O > 0 &&
                y.length > 0 &&
                (0, r.jsx)('div', {
                    className: o()(M.hoverButtonGroup, {
                        [M.nonMediaMosaicItem]: !d,
                        [M.forceShowHover]: I
                    }),
                    children: y.slice(E)
                }),
            (0, r.jsx)('div', {
                ref: f,
                className: M.sizer
            })
        ]
    });
};
function D(e) {
    let { message: t, item: n, autoPlayGif: l, canRemoveItem: u, onRemoveItem: m, onClick: h, handlePreloadImage: p, onContextMenu: f, onPlay: O, renderImageComponent: g, renderVideoComponent: b, renderAudioComponent: C, renderPlaintextFilePreview: M, renderGenericFileComponent: A, renderVisualPlaceholderComponent: L, className: S, imgContainerClassName: D, imgClassName: k, focusable: W, hiddenSpoilers: F, mediaLayoutType: G, maxWidth: R, maxHeight: H, hasFooter: V, useFullWidth: Z, isVisualMediaType: B, onVideoControlsShow: U, onVideoControlsHide: X, isSearchResult: J } = e,
        { width: q, height: z, spoiler: Y, type: K, contentType: Q } = n,
        [$, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        er = t.getChannelId(),
        ei = x.Z.getChannel(er),
        el = (0, j.Z)(er),
        eo = d.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        ea = i.useMemo(() => (null != Q && -1 !== Q.indexOf('/') ? Q.split('/') : ['unknown', 'unknown']), [Q]),
        es = 'IMAGE' === K && !I.uo.test(n.downloadUrl) && !((I.YG.test(n.downloadUrl) || I.FH.test(n.downloadUrl)) && !0 === n.srcIsAnimated),
        eu = !1;
    if (B) {
        (null == q || null == z) && (eu = !0);
        let e = (0, w.Dc)({
            width: null != q ? q : 0,
            height: null != z ? z : 0,
            maxWidth: null != R ? R : v.mT,
            maxHeight: null != H ? H : v.Jj
        });
        !Z && (e * (null != q ? q : 0) < v.OF || e * (null != z ? z : 0) < v.OF) && (eu = !0);
    }
    let ec = i.useCallback(() => {
            m(n);
        }, [n, m]),
        ed = i.useCallback(
            (e) => {
                if (es && !eu && !0 !== J)
                    if (e && !et) {
                        if ((en(!0), eo)) {
                            var t;
                            (0, c.a)({
                                channelId: null != (t = null == ei ? void 0 : ei.id) ? t : '',
                                location: a.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        E.default.track(P.rMx.IMAGE_HOVERED, {
                            guild_id: null == ei ? void 0 : ei.guild_id,
                            channel_id: null == ei ? void 0 : ei.id,
                            image_recommendations_shown: eo
                        });
                    } else !e && et && en(!1);
            },
            [et, ei, eo, es, eu, J]
        ),
        em = i.useCallback(() => {
            if (G === v.hV.MOSAIC) {
                let e = (!el && ['VIDEO', 'CLIP', 'AUDIO'].includes(K)) || 'OTHER' === K;
                return eu
                    ? null
                    : !$ &&
                          (0, r.jsx)(_, {
                              mimeType: ea,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: es && eo && !0 !== J,
                              onRemoveItem: u ? ec : void 0,
                              isVisualMediaType: B,
                              channelId: er
                          });
            }
            return (
                u &&
                (0, r.jsx)(s.P3F, {
                    className: Y ? N.spoilerRemoveMosaicItemButton : N.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => m(n),
                    'aria-label': T.intl.string(T.t['0+xZHx']),
                    children: (0, r.jsx)(s.Dio, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [G, u, Y, el, K, eu, $, ea, n, es, eo, J, ec, B, er, m]);
    switch (K) {
        case 'IMAGE':
            return (0, r.jsx)(y.h.Consumer, {
                children: (e) =>
                    (0, r.jsx)(g, {
                        item: n,
                        message: t,
                        width: q,
                        height: z,
                        autoPlay: l && !F,
                        onClick: h,
                        onContextMenu: f,
                        shouldHideMediaOptions: el,
                        renderAccessory: e,
                        renderAdjacentContent: em,
                        containerClassName: S,
                        className: D,
                        imageClassName: k,
                        shouldLink: W,
                        hiddenSpoilers: F,
                        responsive: !0,
                        mediaLayoutType: G,
                        maxWidth: R,
                        maxHeight: H,
                        useFullWidth: Z,
                        handlePreloadImage: p,
                        onMouseEnter: () => ed(!0),
                        onMouseLeave: () => ed(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, r.jsx)(b, {
                item: n,
                message: t,
                width: q,
                height: z,
                onClick: h,
                onContextMenu: f,
                renderAdjacentContent: em,
                naturalWidth: q,
                naturalHeight: z,
                className: o()(S, { [N.hasFooter]: V }),
                playable: W,
                responsive: !0,
                mediaLayoutType: G,
                maxWidth: R,
                maxHeight: H,
                useFullWidth: Z,
                mimeType: ea,
                onControlsShow: U,
                onControlsHide: X,
                downloadable: !el,
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
                mediaLayoutType: G,
                useFullWidth: Z
            });
        case 'AUDIO':
            return (0, r.jsx)(C, {
                item: n,
                message: t,
                className: S,
                playable: W,
                mimeType: ea,
                renderAdjacentContent: em,
                onVolumeShow: () => ee(!0),
                onVolumeHide: () => ee(!1),
                onPlay: O
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, r.jsx)(M, {
                item: n,
                message: t,
                className: S,
                onClick: h,
                onContextMenu: f,
                renderAdjacentContent: em
            });
        case 'OTHER':
            return (0, r.jsx)(A, {
                item: n,
                message: t,
                className: S,
                onClick: h,
                onContextMenu: f,
                renderAdjacentContent: em
            });
        case 'INVALID':
            return null;
    }
}
let k = function (e) {
    var { className: t, item: n, message: l, getObscureReason: a, useFullWidth: s, mediaLayoutType: u, isSingleMosaicItem: c, footer: d } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['className', 'item', 'message', 'getObscureReason', 'useFullWidth', 'mediaLayoutType', 'isSingleMosaicItem', 'footer']);
    let { width: p, height: y, type: I } = n,
        j = a(n, (0, g.v)(l)),
        [x, E] = i.useState(null != j && O.Xh.has(j));
    i.useEffect(() => {
        E(null != j && O.Xh.has(j));
    }, [j]);
    let b = u === v.hV.MOSAIC,
        P = !b && ((null != p && p < 200) || (null != y && y < 50)),
        T = 'IMAGE' === I || 'VIDEO' === I,
        M = (0, C.R_)(I),
        S = c && null != j && (0, f.yf)(p, y),
        [_, k] = i.useState(!1),
        W = () => {
            k(!0);
        },
        F = () => {
            k(!1);
        },
        G = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, r.jsx)(
                D,
                L(A({}, m), {
                    item: n,
                    message: l,
                    getObscureReason: a,
                    hiddenSpoilers: e,
                    className: o()(t, N.mosaicItemContent, {
                        [N.obscured]: x && !P,
                        [N.hiddenSpoiler]: x && j === O.wk.SPOILER,
                        [N.hiddenExplicit]: x,
                        [N.hiddenMosaicItem]: x && e,
                        [N.inline]: x && P
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    hasFooter: null != d,
                    useFullWidth: !!S || s,
                    isVisualMediaType: M,
                    onVideoControlsShow: W,
                    onVideoControlsHide: F
                })
            );
        };
    return (0, r.jsxs)('div', {
        className: o()(N.mosaicItem, {
            [N.mosaicItemNoJustify]: T,
            [N.mosaicItemFullWidth]: s,
            [N.mosaicItemMediaMosaic]: b,
            [N.hideOverflow]: b && M,
            [N.mosaicItemWithFooter]: null != d
        }),
        children: [
            null != j
                ? (0, r.jsx)(h.ZP, {
                      type: h.ZP.Types.ATTACHMENT,
                      inline: P,
                      reason: j,
                      isSingleMosaicItem: c,
                      obscured: x,
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
                      })(n, T, u),
                      obscurityControlClassName: o()({ [N.obscureVideoSpacing]: 'VIDEO' === I && c && !x && _ }),
                      onToggleObscurity: () => E((e) => !e),
                      children: (e) => G(e)
                  })
                : G(),
            d
        ]
    });
};
