n.d(t, {
    OB: () => V,
    ZP: () => k,
    mz: () => _
}),
    n(47120),
    n(653041),
    n(301563),
    n(789020),
    n(411104);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(228458),
    a = n(481060),
    u = n(393238),
    c = n(399654),
    d = n(162609),
    m = n(370298),
    h = n(95398),
    p = n(167080),
    f = n(247206),
    g = n(25610),
    y = n(947849),
    O = n(982330),
    j = n(124347),
    I = n(976853),
    x = n(423877),
    b = n(592125),
    v = n(626135),
    C = n(630388),
    w = n(956664),
    P = n(169525),
    E = n(499376),
    N = n(217702),
    M = n(981631),
    T = n(388032),
    A = n(308315),
    S = n(166011);
function L(e) {
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
function D(e, t) {
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
function V(e, t) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, E.aw)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type
    };
}
let _ = (e) => {
    let { mimeType: t, downloadURL: n, onRemoveItem: i, onViewItem: s, showDownload: c, showImageAppPicker: d, isVisualMediaType: h, channelId: f } = e,
        g = o.useRef(null),
        [y, j] = o.useState(0);
    (0, u.P)(g, (e) => {
        let { width: t } = e;
        null != t && j(Math.floor((t - 8) / 32));
    });
    let I = [],
        { mediaViewerAffordanceEnabled: b } = (0, O.dP)('MosaicItemHoverButtons');
    b &&
        null != s &&
        I.push(
            (0, r.jsx)(
                x.Z,
                {
                    className: S.hoverButton,
                    onClick: s
                },
                'mediaViewer'
            )
        );
    let [v, C] = o.useState(!1),
        w = o.useCallback(() => C((e) => !e), []);
    d &&
        I.push(
            (0, r.jsx)(
                m.Z,
                {
                    toggleShowMenu: w,
                    showMenu: v,
                    channelId: f,
                    className: l()(S.hoverButton, { [S.selected]: v }),
                    imageUrl: n,
                    mimeType: t
                },
                'app'
            )
        ),
        null != i &&
            I.push(
                (0, r.jsx)(
                    a.ua7,
                    {
                        text: T.NW.string(T.t['/XT3io']),
                        children: (e) =>
                            (0, r.jsx)(
                                a.P3F,
                                D(L({}, e), {
                                    className: l()(S.hoverButton, A.removeMosaicItemHoverButton),
                                    focusProps: { offset: 2 },
                                    onClick: i,
                                    'aria-label': T.NW.string(T.t['0+xZHx']),
                                    children: (0, r.jsx)(a.XHJ, {
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
        c &&
            I.push(
                (0, r.jsx)(
                    a.ua7,
                    {
                        text: T.NW.string(T.t['1WjMbG']),
                        children: (e) =>
                            (0, r.jsx)(
                                p.Z,
                                D(L({}, e), {
                                    target: '_blank',
                                    rel: 'noreferrer noopener',
                                    className: S.hoverButton,
                                    iconClassName: A.downloadHoverButtonIcon,
                                    focusProps: { offset: 2 },
                                    href: n,
                                    mimeType: t
                                })
                            )
                    },
                    'download'
                )
            );
    let P = Math.max(0, I.length - y);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            y > 0 &&
                I.length > 0 &&
                (0, r.jsx)('div', {
                    className: l()(S.hoverButtonGroup, {
                        [S.nonMediaMosaicItem]: !h,
                        [S.forceShowHover]: v
                    }),
                    children: I.slice(P)
                }),
            (0, r.jsx)('div', {
                ref: g,
                className: S.sizer
            })
        ]
    });
};
function F(e) {
    var t;
    let { message: n, item: i, autoPlayGif: u, canRemoveItem: m, onRemoveItem: h, onViewItem: p, onClick: f, handlePreloadImage: g, onContextMenu: O, onPlay: x, renderImageComponent: P, renderVideoComponent: E, renderAudioComponent: S, renderPlaintextFilePreview: L, renderGenericFileComponent: D, renderVisualPlaceholderComponent: V, className: F, imgContainerClassName: k, imgClassName: H, focusable: W, hiddenSpoilers: R, mediaLayoutType: B, maxWidth: G, maxHeight: Z, hasFooter: U, useFullWidth: z, isVisualMediaType: J, onVideoControlsShow: X, onVideoControlsHide: q, isSearchResult: Y } = e,
        { width: Q, height: K, spoiler: $, type: ee, contentType: et } = i,
        [en, er] = o.useState(!1),
        [eo, ei] = o.useState(!1),
        el = n.getChannelId(),
        es = b.Z.getChannel(el),
        ea = (0, I.Z)(el),
        eu = d.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        ec = o.useMemo(() => (null != et && -1 !== et.indexOf('/') ? et.split('/') : ['unknown', 'unknown']), [et]),
        ed = i.originalItem,
        em = 'IMAGE' === ee && !j.uo.test(i.downloadUrl) && !((j.YG.test(i.downloadUrl) || j.FH.test(i.downloadUrl)) && (0, C.yE)(null != (t = ed.flags) ? t : 0, M.J0y.IS_ANIMATED)),
        eh = !1;
    if (J) {
        (null == Q || null == K) && (eh = !0);
        let e = (0, w.Dc)({
            width: null != Q ? Q : 0,
            height: null != K ? K : 0,
            maxWidth: N.mT,
            maxHeight: N.Jj
        });
        !z && (e * (null != Q ? Q : 0) < N.OF || e * (null != K ? K : 0) < N.OF) && (eh = !0);
    }
    let ep = o.useCallback(() => {
            h(i);
        }, [i, h]),
        ef = o.useCallback(
            (e) => {
                if (em && !eh && !0 !== Y)
                    if (e && !eo) {
                        if ((ei(!0), eu)) {
                            var t;
                            (0, c.a)({
                                channelId: null != (t = null == es ? void 0 : es.id) ? t : '',
                                location: s.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        v.default.track(M.rMx.IMAGE_HOVERED, {
                            guild_id: null == es ? void 0 : es.guild_id,
                            channel_id: null == es ? void 0 : es.id,
                            image_recommendations_shown: eu
                        });
                    } else !e && eo && ei(!1);
            },
            [eo, es, eu, em, eh, Y]
        ),
        eg = o.useCallback(() => {
            if (B === N.hV.MOSAIC) {
                let e = (!ea && ['VIDEO', 'CLIP', 'AUDIO'].includes(ee)) || 'OTHER' === ee;
                return eh
                    ? null
                    : !en &&
                          (0, r.jsx)(_, {
                              mimeType: ec,
                              downloadURL: i.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: em && eu && !0 !== Y,
                              onRemoveItem: m ? ep : void 0,
                              onViewItem: p,
                              isVisualMediaType: J,
                              channelId: el
                          });
            }
            return (
                m &&
                (0, r.jsx)(a.P3F, {
                    className: $ ? A.spoilerRemoveMosaicItemButton : A.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => h(i),
                    'aria-label': T.NW.string(T.t['0+xZHx']),
                    children: (0, r.jsx)(a.Dio, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [B, m, $, ea, ee, eh, en, ec, i, em, eu, Y, ep, p, J, el, h]);
    switch (ee) {
        case 'IMAGE':
            return (0, r.jsx)(y.h.Consumer, {
                children: (e) =>
                    (0, r.jsx)(P, {
                        item: i,
                        message: n,
                        width: Q,
                        height: K,
                        autoPlay: u && !R,
                        onClick: f,
                        onContextMenu: O,
                        shouldHideMediaOptions: ea,
                        renderAccessory: e,
                        renderAdjacentContent: eg,
                        containerClassName: F,
                        className: k,
                        imageClassName: H,
                        shouldLink: W,
                        hiddenSpoilers: R,
                        responsive: !0,
                        mediaLayoutType: B,
                        maxWidth: G,
                        maxHeight: Z,
                        useFullWidth: z,
                        handlePreloadImage: g,
                        onMouseEnter: () => ef(!0),
                        onMouseLeave: () => ef(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, r.jsx)(E, {
                item: i,
                message: n,
                width: Q,
                height: K,
                onClick: f,
                onContextMenu: O,
                renderAdjacentContent: eg,
                naturalWidth: Q,
                naturalHeight: K,
                className: l()(F, { [A.hasFooter]: U }),
                playable: W,
                responsive: !0,
                mediaLayoutType: B,
                maxWidth: G,
                maxHeight: Z,
                useFullWidth: z,
                mimeType: ec,
                onControlsShow: X,
                onControlsHide: q,
                downloadable: !ea,
                mediaPlayerClassName: U ? A.hasFooter : void 0
            });
        case 'VISUAL_PLACEHOLDER':
            if (null == V) return null;
            return (0, r.jsx)(V, {
                item: i,
                message: n,
                className: k,
                imageClassName: H,
                maxWidth: G,
                maxHeight: Z,
                mediaLayoutType: B,
                useFullWidth: z
            });
        case 'AUDIO':
            return (0, r.jsx)(S, {
                item: i,
                message: n,
                className: F,
                playable: W,
                mimeType: ec,
                renderAdjacentContent: eg,
                onVolumeShow: () => er(!0),
                onVolumeHide: () => er(!1),
                onPlay: x
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, r.jsx)(L, {
                item: i,
                message: n,
                className: F,
                onClick: f,
                onContextMenu: O,
                renderAdjacentContent: eg
            });
        case 'OTHER':
            return (0, r.jsx)(D, {
                item: i,
                message: n,
                className: F,
                onClick: f,
                onContextMenu: O,
                renderAdjacentContent: eg
            });
        case 'INVALID':
            return null;
    }
}
let k = function (e) {
    var { className: t, item: n, message: i, getObscureReason: s, useFullWidth: a, mediaLayoutType: u, isSingleMosaicItem: c, footer: d } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['className', 'item', 'message', 'getObscureReason', 'useFullWidth', 'mediaLayoutType', 'isSingleMosaicItem', 'footer']);
    let { width: p, height: y, type: O } = n,
        j = s(n, (0, g.V)(i.channel_id, i.author.id)),
        [I, x] = o.useState(null != j),
        b = u === N.hV.MOSAIC,
        v = !b && ((null != p && p < 200) || (null != y && y < 50)),
        C = 'IMAGE' === O || 'VIDEO' === O,
        M = (0, E.R_)(O),
        T = c && null != j && (0, f.bR)(p, y),
        [S, V] = o.useState(!1),
        _ = () => {
            V(!0);
        },
        k = () => {
            V(!1);
        },
        H = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, r.jsx)(
                F,
                D(L({}, m), {
                    item: n,
                    message: i,
                    getObscureReason: s,
                    hiddenSpoilers: e,
                    className: l()(t, A.mosaicItemContent, {
                        [A.obscured]: I && !v,
                        [A.hiddenSpoiler]: I && j === P.wk.SPOILER,
                        [A.hiddenExplicit]: I && null != j && [P.wk.EXPLICIT_CONTENT, P.wk.POTENTIAL_EXPLICIT_CONTENT].includes(j),
                        [A.hiddenMosaicItem]: I && e,
                        [A.inline]: I && v
                    }),
                    focusable: !e,
                    mediaLayoutType: u,
                    hasFooter: null != d,
                    useFullWidth: !!T || a,
                    isVisualMediaType: M,
                    onVideoControlsShow: _,
                    onVideoControlsHide: k
                })
            );
        };
    return (0, r.jsxs)('div', {
        className: l()(A.mosaicItem, {
            [A.mosaicItemNoJustify]: C,
            [A.mosaicItemFullWidth]: a,
            [A.mosaicItemMediaMosaic]: b,
            [A.hideOverflow]: b && M,
            [A.mosaicItemWithFooter]: null != d
        }),
        children: [
            null != j
                ? (0, r.jsx)(h.ZP, {
                      type: h.ZP.Types.ATTACHMENT,
                      inline: v,
                      reason: j,
                      isSingleMosaicItem: c,
                      obscured: I,
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
                          return D(L({}, n !== N.hV.MOSAIC && { maxWidth: null != r ? r : '400px' }), {
                              width: '100%',
                              height: '100%',
                              justifySelf: 'auto'
                          });
                      })(n, C, u),
                      obscurityControlClassName: l()({ [A.obscureVideoSpacing]: 'VIDEO' === O && c && !I && S }),
                      onToggleObscurity: () => x((e) => !e),
                      children: (e) => H(e)
                  })
                : H(),
            d
        ]
    });
};
