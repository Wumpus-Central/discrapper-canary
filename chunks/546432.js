n.d(t, {
    OB: () => S,
    ZP: () => _,
    mz: () => D
}),
    n(388685),
    n(539854),
    n(35282),
    n(997841),
    n(415506);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(228458),
    a = n(481060),
    u = n(393238),
    c = n(399654),
    d = n(162609),
    m = n(370298),
    h = n(95398),
    p = n(167080),
    g = n(247206),
    f = n(25610),
    y = n(947849),
    I = n(124347),
    x = n(976853),
    O = n(592125),
    j = n(626135),
    b = n(630388),
    C = n(956664),
    v = n(169525),
    w = n(499376),
    E = n(217702),
    P = n(981631),
    N = n(388032),
    M = n(308315),
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
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, w.aw)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type
    };
}
let D = (e) => {
    let { mimeType: t, downloadURL: n, onRemoveItem: r, showDownload: s, showImageAppPicker: c, isVisualMediaType: d, channelId: h } = e,
        g = o.useRef(null),
        [f, y] = o.useState(0);
    (0, u.P)(g, (e) => {
        let { width: t } = e;
        null != t && y(Math.floor((t - 8) / 32));
    });
    let I = [],
        [x, O] = o.useState(!1),
        j = o.useCallback(() => O((e) => !e), []);
    c &&
        I.push(
            (0, i.jsx)(
                m.Z,
                {
                    toggleShowMenu: j,
                    showMenu: x,
                    channelId: h,
                    className: l()(T.hoverButton, { [T.selected]: x }),
                    imageUrl: n,
                    mimeType: t
                },
                'app'
            )
        ),
        null != r &&
            I.push(
                (0, i.jsx)(
                    a.ua7,
                    {
                        text: N.NW.string(N.t['/XT3io']),
                        children: (e) =>
                            (0, i.jsx)(
                                a.P3F,
                                L(A({}, e), {
                                    className: l()(T.hoverButton, M.removeMosaicItemHoverButton),
                                    focusProps: { offset: 2 },
                                    onClick: r,
                                    'aria-label': N.NW.string(N.t['0+xZHx']),
                                    children: (0, i.jsx)(a.XHJ, {
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
        s &&
            I.push(
                (0, i.jsx)(
                    a.ua7,
                    {
                        text: N.NW.string(N.t['1WjMbG']),
                        children: (e) =>
                            (0, i.jsx)(
                                p.Z,
                                L(A({}, e), {
                                    target: '_blank',
                                    rel: 'noreferrer noopener',
                                    className: T.hoverButton,
                                    iconClassName: M.downloadHoverButtonIcon,
                                    focusProps: { offset: 2 },
                                    href: n,
                                    mimeType: t
                                })
                            )
                    },
                    'download'
                )
            );
    let b = Math.max(0, I.length - f);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            f > 0 &&
                I.length > 0 &&
                (0, i.jsx)('div', {
                    className: l()(T.hoverButtonGroup, {
                        [T.nonMediaMosaicItem]: !d,
                        [T.forceShowHover]: x
                    }),
                    children: I.slice(b)
                }),
            (0, i.jsx)('div', {
                ref: g,
                className: T.sizer
            })
        ]
    });
};
function V(e) {
    var t;
    let { message: n, item: r, autoPlayGif: u, canRemoveItem: m, onRemoveItem: h, onClick: p, handlePreloadImage: g, onContextMenu: f, onPlay: v, renderImageComponent: w, renderVideoComponent: T, renderAudioComponent: A, renderPlaintextFilePreview: L, renderGenericFileComponent: S, renderVisualPlaceholderComponent: V, className: _, imgContainerClassName: F, imgClassName: H, focusable: k, hiddenSpoilers: W, mediaLayoutType: R, maxWidth: G, maxHeight: B, hasFooter: U, useFullWidth: Z, isVisualMediaType: z, onVideoControlsShow: X, onVideoControlsHide: q, isSearchResult: J } = e,
        { width: Y, height: $, spoiler: K, type: Q, contentType: ee } = r,
        [et, en] = o.useState(!1),
        [ei, eo] = o.useState(!1),
        er = n.getChannelId(),
        el = O.Z.getChannel(er),
        es = (0, x.Z)(er),
        ea = d.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        eu = o.useMemo(() => (null != ee && -1 !== ee.indexOf('/') ? ee.split('/') : ['unknown', 'unknown']), [ee]),
        ec = r.originalItem,
        ed = 'IMAGE' === Q && !I.uo.test(r.downloadUrl) && !((I.YG.test(r.downloadUrl) || I.FH.test(r.downloadUrl)) && (0, b.yE)(null != (t = ec.flags) ? t : 0, P.J0y.IS_ANIMATED)),
        em = !1;
    if (z) {
        (null == Y || null == $) && (em = !0);
        let e = (0, C.Dc)({
            width: null != Y ? Y : 0,
            height: null != $ ? $ : 0,
            maxWidth: E.mT,
            maxHeight: E.Jj
        });
        !Z && (e * (null != Y ? Y : 0) < E.OF || e * (null != $ ? $ : 0) < E.OF) && (em = !0);
    }
    let eh = o.useCallback(() => {
            h(r);
        }, [r, h]),
        ep = o.useCallback(
            (e) => {
                if (ed && !em && !0 !== J)
                    if (e && !ei) {
                        if ((eo(!0), ea)) {
                            var t;
                            (0, c.a)({
                                channelId: null != (t = null == el ? void 0 : el.id) ? t : '',
                                location: s.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        j.default.track(P.rMx.IMAGE_HOVERED, {
                            guild_id: null == el ? void 0 : el.guild_id,
                            channel_id: null == el ? void 0 : el.id,
                            image_recommendations_shown: ea
                        });
                    } else !e && ei && eo(!1);
            },
            [ei, el, ea, ed, em, J]
        ),
        eg = o.useCallback(() => {
            if (R === E.hV.MOSAIC) {
                let e = (!es && ['VIDEO', 'CLIP', 'AUDIO'].includes(Q)) || 'OTHER' === Q;
                return em
                    ? null
                    : !et &&
                          (0, i.jsx)(D, {
                              mimeType: eu,
                              downloadURL: r.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: ed && ea && !0 !== J,
                              onRemoveItem: m ? eh : void 0,
                              isVisualMediaType: z,
                              channelId: er
                          });
            }
            return (
                m &&
                (0, i.jsx)(a.P3F, {
                    className: K ? M.spoilerRemoveMosaicItemButton : M.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => h(r),
                    'aria-label': N.NW.string(N.t['0+xZHx']),
                    children: (0, i.jsx)(a.Dio, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [R, m, K, es, Q, em, et, eu, r, ed, ea, J, eh, z, er, h]);
    switch (Q) {
        case 'IMAGE':
            return (0, i.jsx)(y.h.Consumer, {
                children: (e) =>
                    (0, i.jsx)(w, {
                        item: r,
                        message: n,
                        width: Y,
                        height: $,
                        autoPlay: u && !W,
                        onClick: p,
                        onContextMenu: f,
                        shouldHideMediaOptions: es,
                        renderAccessory: e,
                        renderAdjacentContent: eg,
                        containerClassName: _,
                        className: F,
                        imageClassName: H,
                        shouldLink: k,
                        hiddenSpoilers: W,
                        responsive: !0,
                        mediaLayoutType: R,
                        maxWidth: G,
                        maxHeight: B,
                        useFullWidth: Z,
                        handlePreloadImage: g,
                        onMouseEnter: () => ep(!0),
                        onMouseLeave: () => ep(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, i.jsx)(T, {
                item: r,
                message: n,
                width: Y,
                height: $,
                onClick: p,
                onContextMenu: f,
                renderAdjacentContent: eg,
                naturalWidth: Y,
                naturalHeight: $,
                className: l()(_, { [M.hasFooter]: U }),
                playable: k,
                responsive: !0,
                mediaLayoutType: R,
                maxWidth: G,
                maxHeight: B,
                useFullWidth: Z,
                mimeType: eu,
                onControlsShow: X,
                onControlsHide: q,
                downloadable: !es,
                mediaPlayerClassName: U ? M.hasFooter : void 0
            });
        case 'VISUAL_PLACEHOLDER':
            if (null == V) return null;
            return (0, i.jsx)(V, {
                item: r,
                message: n,
                className: F,
                imageClassName: H,
                maxWidth: G,
                maxHeight: B,
                mediaLayoutType: R,
                useFullWidth: Z
            });
        case 'AUDIO':
            return (0, i.jsx)(A, {
                item: r,
                message: n,
                className: _,
                playable: k,
                mimeType: eu,
                renderAdjacentContent: eg,
                onVolumeShow: () => en(!0),
                onVolumeHide: () => en(!1),
                onPlay: v
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, i.jsx)(L, {
                item: r,
                message: n,
                className: _,
                onClick: p,
                onContextMenu: f,
                renderAdjacentContent: eg
            });
        case 'OTHER':
            return (0, i.jsx)(S, {
                item: r,
                message: n,
                className: _,
                onClick: p,
                onContextMenu: f,
                renderAdjacentContent: eg
            });
        case 'INVALID':
            return null;
    }
}
let _ = function (e) {
    var { className: t, item: n, message: r, getObscureReason: s, useFullWidth: a, mediaLayoutType: u, isSingleMosaicItem: c, footer: d } = e,
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
    let { width: p, height: y, type: I } = n,
        x = s(n, (0, f.V)(r.channel_id, r.author.id)),
        [O, j] = o.useState(null != x),
        b = u === E.hV.MOSAIC,
        P = !b && ((null != p && p < 200) || (null != y && y < 50)),
        N = 'IMAGE' === I || 'VIDEO' === I,
        T = (0, w.R_)(I),
        S = c && null != x && (0, g.bR)(p, y),
        [D, _] = o.useState(!1),
        F = () => {
            _(!0);
        },
        H = () => {
            _(!1);
        },
        k = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(
                V,
                L(A({}, m), {
                    item: n,
                    message: r,
                    getObscureReason: s,
                    hiddenSpoilers: e,
                    className: l()(t, M.mosaicItemContent, {
                        [M.obscured]: O && !P,
                        [M.hiddenSpoiler]: O && x === v.wk.SPOILER,
                        [M.hiddenExplicit]: O && null != x && [v.wk.EXPLICIT_CONTENT, v.wk.POTENTIAL_EXPLICIT_CONTENT].includes(x),
                        [M.hiddenMosaicItem]: O && e,
                        [M.inline]: O && P
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    hasFooter: null != d,
                    useFullWidth: !!S || a,
                    isVisualMediaType: T,
                    onVideoControlsShow: F,
                    onVideoControlsHide: H
                })
            );
        };
    return (0, i.jsxs)('div', {
        className: l()(M.mosaicItem, {
            [M.mosaicItemNoJustify]: N,
            [M.mosaicItemFullWidth]: a,
            [M.mosaicItemMediaMosaic]: b,
            [M.hideOverflow]: b && T,
            [M.mosaicItemWithFooter]: null != d
        }),
        children: [
            null != x
                ? (0, i.jsx)(h.ZP, {
                      type: h.ZP.Types.ATTACHMENT,
                      inline: P,
                      reason: x,
                      isSingleMosaicItem: c,
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
                      })(n, N, u),
                      obscurityControlClassName: l()({ [M.obscureVideoSpacing]: 'VIDEO' === I && c && !O && D }),
                      onToggleObscurity: () => j((e) => !e),
                      children: (e) => k(e)
                  })
                : k(),
            d
        ]
    });
};
