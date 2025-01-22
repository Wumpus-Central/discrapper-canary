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
    a = n(228458),
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
function F(e) {
    var t;
    let { message: n, item: o, autoPlayGif: u, canRemoveItem: c, onRemoveItem: h, onViewItem: I, onClick: x, handlePreloadImage: g, onContextMenu: f, onPlay: v, renderImageComponent: T, renderVideoComponent: w, renderAudioComponent: P, renderPlaintextFilePreview: V, renderGenericFileComponent: F, renderVisualPlaceholderComponent: b, className: k, imgContainerClassName: H, imgClassName: D, focusable: R, hiddenSpoilers: B, mediaLayoutType: G, maxWidth: W, maxHeight: Z, hasFooter: U, useFullWidth: z, isVisualMediaType: X, onVideoControlsShow: q, onVideoControlsHide: J, isSearchResult: Y } = e,
        { width: Q, height: K, spoiler: $, type: ee, contentType: et } = o,
        [en, ei] = l.useState(!1),
        [el, eo] = l.useState(!1),
        es = n.getChannelId(),
        ea = y.Z.getChannel(es),
        er = (0, j.Z)(es),
        eu = m.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        ed = l.useMemo(() => (null != et && -1 !== et.indexOf('/') ? et.split('/') : ['unknown', 'unknown']), [et]),
        em = o.originalItem,
        ec = 'IMAGE' === ee && !C.uo.test(o.downloadUrl) && !((C.YG.test(o.downloadUrl) || C.FH.test(o.downloadUrl)) && (0, M.yE)(null !== (t = em.flags) && void 0 !== t ? t : 0, A.J0y.IS_ANIMATED)),
        eh = !1;
    if (X) {
        (null == Q || null == K) && (eh = !0);
        let e = (0, N.Dc)({
            width: null != Q ? Q : 0,
            height: null != K ? K : 0,
            maxWidth: O.mT,
            maxHeight: O.Jj
        });
        !z && (e * (null != Q ? Q : 0) < O.OF || e * (null != K ? K : 0) < O.OF) && (eh = !0);
    }
    let eI = l.useCallback(() => {
            h(o);
        }, [o, h]),
        ex = l.useCallback(
            (e) => {
                if (ec && !eh && !0 !== Y) {
                    if (e && !el) {
                        if ((eo(!0), eu)) {
                            var t;
                            (0, d.a)({
                                channelId: null !== (t = null == ea ? void 0 : ea.id) && void 0 !== t ? t : '',
                                location: a.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        E.default.track(A.rMx.IMAGE_HOVERED, {
                            guild_id: null == ea ? void 0 : ea.guild_id,
                            channel_id: null == ea ? void 0 : ea.id,
                            image_recommendations_shown: eu
                        });
                    } else !e && el && eo(!1);
                }
            },
            [el, ea, eu, ec, eh, Y]
        ),
        eg = l.useCallback(() => {
            if (G === O.hV.MOSAIC) {
                let e = (!er && ['VIDEO', 'CLIP', 'AUDIO'].includes(ee)) || 'OTHER' === ee;
                return eh
                    ? null
                    : !en &&
                          (0, i.jsx)(S, {
                              mimeType: ed,
                              downloadURL: o.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: ec && eu && !0 !== Y,
                              onRemoveItem: c ? eI : void 0,
                              onViewItem: I,
                              isVisualMediaType: X,
                              channelId: es
                          });
            }
            return (
                c &&
                (0, i.jsx)(r.Clickable, {
                    className: $ ? _.spoilerRemoveMosaicItemButton : _.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => h(o),
                    'aria-label': L.intl.string(L.t['0+xZHx']),
                    children: (0, i.jsx)(r.XSmallIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [G, c, $, er, ee, eh, en, ed, o, ec, eu, Y, eI, I, X, es, h]);
    switch (ee) {
        case 'IMAGE':
            return (0, i.jsx)(p.h.Consumer, {
                children: (e) =>
                    (0, i.jsx)(T, {
                        item: o,
                        message: n,
                        width: Q,
                        height: K,
                        autoPlay: u && !B,
                        onClick: x,
                        onContextMenu: f,
                        shouldHideMediaOptions: er,
                        renderAccessory: e,
                        renderAdjacentContent: eg,
                        containerClassName: k,
                        className: H,
                        imageClassName: D,
                        shouldLink: R,
                        hiddenSpoilers: B,
                        responsive: !0,
                        mediaLayoutType: G,
                        maxWidth: W,
                        maxHeight: Z,
                        useFullWidth: z,
                        handlePreloadImage: g,
                        onMouseEnter: () => ex(!0),
                        onMouseLeave: () => ex(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, i.jsx)(w, {
                item: o,
                message: n,
                width: Q,
                height: K,
                onClick: x,
                onContextMenu: f,
                renderAdjacentContent: eg,
                naturalWidth: Q,
                naturalHeight: K,
                className: s()(k, { [_.hasFooter]: U }),
                playable: R,
                responsive: !0,
                mediaLayoutType: G,
                maxWidth: W,
                maxHeight: Z,
                useFullWidth: z,
                mimeType: ed,
                onControlsShow: q,
                onControlsHide: J,
                downloadable: !er,
                mediaPlayerClassName: U ? _.hasFooter : void 0
            });
        case 'VISUAL_PLACEHOLDER':
            if (null == b) return null;
            return (0, i.jsx)(b, {
                item: o,
                message: n,
                className: H,
                imageClassName: D,
                maxWidth: W,
                maxHeight: Z,
                mediaLayoutType: G,
                useFullWidth: z
            });
        case 'AUDIO':
            return (0, i.jsx)(P, {
                item: o,
                message: n,
                className: k,
                playable: R,
                mimeType: ed,
                renderAdjacentContent: eg,
                onVolumeShow: () => ei(!0),
                onVolumeHide: () => ei(!1),
                onPlay: v
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, i.jsx)(V, {
                item: o,
                message: n,
                className: k,
                onClick: x,
                onContextMenu: f,
                renderAdjacentContent: eg
            });
        case 'OTHER':
            return (0, i.jsx)(F, {
                item: o,
                message: n,
                className: k,
                onClick: x,
                onContextMenu: f,
                renderAdjacentContent: eg
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
        b = () => {
            S(!0);
        },
        k = () => {
            S(!1);
        },
        H = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(F, {
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
                onVideoControlsShow: b,
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
                          children: (e) => H(e)
                      })
                    : H(),
                c
            ]
        })
    });
};
