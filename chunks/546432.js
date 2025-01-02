n.d(t, {
    OB: function () {
        return V;
    },
    mz: function () {
        return S;
    }
}),
    n(47120),
    n(653041),
    n(789020),
    n(411104);
var i = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    a = n(892814),
    r = n(481060),
    u = n(393238),
    d = n(399654),
    m = n(162609),
    c = n(370298),
    h = n(95398),
    I = n(167080),
    x = n(247206),
    g = n(25610),
    p = n(947849),
    f = n(982330),
    C = n(124347),
    j = n(976853),
    v = n(587906),
    y = n(592125),
    E = n(626135),
    M = n(630388),
    N = n(956664),
    T = n(169525),
    w = n(499376),
    O = n(217702),
    A = n(981631),
    L = n(388032),
    _ = n(157029),
    P = n(740909);
function V(e, t) {
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
let S = (e) => {
    let { mimeType: t, downloadURL: n, onRemoveItem: o, onViewItem: a, showDownload: d, showImageAppPicker: m, isVisualMediaType: h, channelId: x } = e,
        g = l.useRef(null),
        [p, C] = l.useState(0);
    (0, u.P)(g, (e) => {
        let { width: t } = e;
        null != t && C(Math.floor((t - 8) / 32));
    });
    let j = [],
        { mediaViewerAffordanceEnabled: y } = (0, f.dP)('MosaicItemHoverButtons');
    y &&
        null != a &&
        j.push(
            (0, i.jsx)(
                v.Z,
                {
                    className: P.hoverButton,
                    onClick: a
                },
                'mediaViewer'
            )
        );
    let [E, M] = l.useState(!1),
        N = l.useCallback(() => M((e) => !e), []);
    m &&
        j.push(
            (0, i.jsx)(
                c.Z,
                {
                    toggleShowMenu: N,
                    showMenu: E,
                    channelId: x,
                    className: s()(P.hoverButton, { [P.selected]: E }),
                    imageUrl: n,
                    mimeType: t
                },
                'app'
            )
        ),
        null != o &&
            j.push(
                (0, i.jsx)(
                    r.Tooltip,
                    {
                        text: L.intl.string(L.t['/XT3io']),
                        children: (e) =>
                            (0, i.jsx)(r.Clickable, {
                                ...e,
                                className: s()(P.hoverButton, _.removeMosaicItemHoverButton),
                                focusProps: { offset: 2 },
                                onClick: o,
                                'aria-label': L.intl.string(L.t['0+xZHx']),
                                children: (0, i.jsx)(r.TrashIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20
                                })
                            })
                    },
                    'remove'
                )
            ),
        d &&
            j.push(
                (0, i.jsx)(
                    r.Tooltip,
                    {
                        text: L.intl.string(L.t['1WjMbG']),
                        children: (e) =>
                            (0, i.jsx)(I.Z, {
                                ...e,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                className: P.hoverButton,
                                iconClassName: _.downloadHoverButtonIcon,
                                focusProps: { offset: 2 },
                                href: n,
                                mimeType: t
                            })
                    },
                    'download'
                )
            );
    let T = Math.max(0, j.length - p);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            p > 0 &&
                j.length > 0 &&
                (0, i.jsx)('div', {
                    className: s()(P.hoverButtonGroup, {
                        [P.nonMediaMosaicItem]: !h,
                        [P.forceShowHover]: E
                    }),
                    children: j.slice(T)
                }),
            (0, i.jsx)('div', {
                ref: g,
                className: P.sizer
            })
        ]
    });
};
function b(e) {
    var t;
    let { message: n, item: o, autoPlayGif: u, canRemoveItem: c, onRemoveItem: h, onViewItem: I, onClick: x, onContextMenu: g, onPlay: f, renderImageComponent: v, renderVideoComponent: T, renderAudioComponent: w, renderPlaintextFilePreview: P, renderGenericFileComponent: V, renderVisualPlaceholderComponent: b, className: F, imgContainerClassName: k, imgClassName: D, focusable: H, hiddenSpoilers: R, mediaLayoutType: B, maxWidth: G, maxHeight: W, hasFooter: Z, useFullWidth: U, isVisualMediaType: z, onVideoControlsShow: X, onVideoControlsHide: q, isSearchResult: J } = e,
        { width: Y, height: Q, spoiler: K, type: $, contentType: ee } = o,
        [et, en] = l.useState(!1),
        [ei, el] = l.useState(!1),
        eo = n.getChannelId(),
        es = y.Z.getChannel(eo),
        ea = (0, j.Z)(eo),
        er = m.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        eu = l.useMemo(() => (null != ee && -1 !== ee.indexOf('/') ? ee.split('/') : ['unknown', 'unknown']), [ee]),
        ed = o.originalItem,
        em = 'IMAGE' === $ && !C.uo.test(o.downloadUrl) && !(C.YG.test(o.downloadUrl) && (0, M.yE)(null !== (t = ed.flags) && void 0 !== t ? t : 0, A.J0y.IS_ANIMATED)),
        ec = !1;
    if (z) {
        (null == Y || null == Q) && (ec = !0);
        let e = (0, N.Dc)({
            width: null != Y ? Y : 0,
            height: null != Q ? Q : 0,
            maxWidth: O.mT,
            maxHeight: O.Jj
        });
        !U && (e * (null != Y ? Y : 0) < O.OF || e * (null != Q ? Q : 0) < O.OF) && (ec = !0);
    }
    let eh = l.useCallback(() => {
            h(o);
        }, [o, h]),
        eI = l.useCallback(
            (e) => {
                if (em && !ec && !0 !== J) {
                    if (e && !ei) {
                        if ((el(!0), er)) {
                            var t;
                            (0, d.a)({
                                channelId: null !== (t = null == es ? void 0 : es.id) && void 0 !== t ? t : '',
                                location: a.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        E.default.track(A.rMx.IMAGE_HOVERED, {
                            guild_id: null == es ? void 0 : es.guild_id,
                            channel_id: null == es ? void 0 : es.id,
                            image_recommendations_shown: er
                        });
                    } else !e && ei && el(!1);
                }
            },
            [ei, es, er, em, ec, J]
        ),
        ex = l.useCallback(() => {
            if (B === O.hV.MOSAIC) {
                let e = (!ea && ['VIDEO', 'CLIP', 'AUDIO'].includes($)) || 'OTHER' === $;
                return ec
                    ? null
                    : !et &&
                          (0, i.jsx)(S, {
                              mimeType: eu,
                              downloadURL: o.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: em && er && !0 !== J,
                              onRemoveItem: c ? eh : void 0,
                              onViewItem: I,
                              isVisualMediaType: z,
                              channelId: eo
                          });
            }
            return (
                c &&
                (0, i.jsx)(r.Clickable, {
                    className: K ? _.spoilerRemoveMosaicItemButton : _.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => h(o),
                    'aria-label': L.intl.string(L.t['0+xZHx']),
                    children: (0, i.jsx)(r.XSmallIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [B, c, K, ea, $, ec, et, eu, o, em, er, J, eh, I, z, eo, h]);
    switch ($) {
        case 'IMAGE':
            return (0, i.jsx)(p.h.Consumer, {
                children: (e) =>
                    (0, i.jsx)(v, {
                        item: o,
                        message: n,
                        width: Y,
                        height: Q,
                        autoPlay: u && !R,
                        onClick: x,
                        onContextMenu: g,
                        shouldHideMediaOptions: ea,
                        renderAccessory: e,
                        renderAdjacentContent: ex,
                        containerClassName: F,
                        className: k,
                        imageClassName: D,
                        shouldLink: H,
                        hiddenSpoilers: R,
                        responsive: !0,
                        mediaLayoutType: B,
                        maxWidth: G,
                        maxHeight: W,
                        useFullWidth: U,
                        onMouseEnter: () => eI(!0),
                        onMouseLeave: () => eI(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, i.jsx)(T, {
                item: o,
                message: n,
                width: Y,
                height: Q,
                onClick: x,
                onContextMenu: g,
                renderAdjacentContent: ex,
                naturalWidth: Y,
                naturalHeight: Q,
                className: s()(F, { [_.hasFooter]: Z }),
                playable: H,
                responsive: !0,
                mediaLayoutType: B,
                maxWidth: G,
                maxHeight: W,
                useFullWidth: U,
                mimeType: eu,
                onControlsShow: X,
                onControlsHide: q,
                downloadable: !ea,
                mediaPlayerClassName: Z ? _.hasFooter : void 0
            });
        case 'VISUAL_PLACEHOLDER':
            if (null == b) return null;
            return (0, i.jsx)(b, {
                item: o,
                message: n,
                className: k,
                imageClassName: D,
                maxWidth: G,
                maxHeight: W,
                mediaLayoutType: B,
                useFullWidth: U
            });
        case 'AUDIO':
            return (0, i.jsx)(w, {
                item: o,
                message: n,
                className: F,
                playable: H,
                mimeType: eu,
                renderAdjacentContent: ex,
                onVolumeShow: () => en(!0),
                onVolumeHide: () => en(!1),
                onPlay: f
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, i.jsx)(P, {
                item: o,
                message: n,
                className: F,
                onClick: x,
                onContextMenu: g,
                renderAdjacentContent: ex
            });
        case 'OTHER':
            return (0, i.jsx)(V, {
                item: o,
                message: n,
                className: F,
                onClick: x,
                onContextMenu: g,
                renderAdjacentContent: ex
            });
        case 'INVALID':
            return null;
    }
}
t.ZP = function (e) {
    var t;
    let { className: n, item: o, message: a, getObscureReason: r, useFullWidth: u, mediaLayoutType: d, isSingleMosaicItem: m, footer: c, ...I } = e,
        { width: p, height: f, type: C } = o,
        j = r(o, (0, g.V)(a.channel_id, a.author.id)),
        [v, y] = l.useState(null != j),
        E = d === O.hV.MOSAIC,
        M = !E && ((null != p && p < 200) || (null != f && f < 50));
    let A = 'IMAGE' === (t = C) || 'VIDEO' === t,
        L = (0, w.R_)(C),
        P = m && null != j && (0, x.bR)(p, f),
        [V, S] = l.useState(!1),
        F = () => {
            S(!0);
        },
        k = () => {
            S(!1);
        },
        D = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(b, {
                ...I,
                item: o,
                message: a,
                getObscureReason: r,
                hiddenSpoilers: e,
                className: s()(n, _.mosaicItemContent, {
                    [_.obscured]: v && !M,
                    [_.hiddenSpoiler]: v && j === T.wk.SPOILER,
                    [_.hiddenExplicit]: v && null != j && [T.wk.EXPLICIT_CONTENT, T.wk.POTENTIAL_EXPLICIT_CONTENT].includes(j),
                    [_.hiddenMosaicItem]: v && e,
                    [_.inline]: v && M
                }),
                focusable: !e,
                mediaLayoutType: d,
                hasFooter: null != c,
                useFullWidth: !!P || u,
                isVisualMediaType: L,
                onVideoControlsShow: F,
                onVideoControlsHide: k
            });
        };
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(_.mosaicItem, {
                [_.mosaicItemNoJustify]: A,
                [_.mosaicItemFullWidth]: u,
                [_.mosaicItemMediaMosaic]: E,
                [_.hideOverflow]: E && L,
                [_.mosaicItemWithFooter]: null != c
            }),
            children: [
                null != j
                    ? (0, i.jsx)(h.Z, {
                          type: h.Z.Types.ATTACHMENT,
                          inline: M,
                          reason: j,
                          isSingleMosaicItem: m,
                          obscured: v,
                          containerStyles: (function (e, t, n) {
                              if (!t) return;
                              let i = e.width;
                              if (void 0 !== e.width && void 0 !== e.height) {
                                  let { width: t } = (0, N.Tj)({
                                      width: e.width,
                                      height: e.height,
                                      maxWidth: 400,
                                      maxHeight: 300
                                  });
                                  i = t;
                              }
                              return {
                                  ...(n !== O.hV.MOSAIC && { maxWidth: null != i ? i : '400px' }),
                                  width: '100%',
                                  height: '100%',
                                  justifySelf: 'auto'
                              };
                          })(o, A, d),
                          obscurityControlClassName: s()({ [_.obscureVideoSpacing]: 'VIDEO' === C && m && !v && V }),
                          onToggleObscurity: () => y((e) => !e),
                          children: (e) => D(e)
                      })
                    : D(),
                c
            ]
        })
    });
};
