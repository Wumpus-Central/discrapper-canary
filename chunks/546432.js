n.d(t, {
    OB: () => _,
    ZP: () => H,
    mz: () => F
}),
    n(47120),
    n(653041),
    n(789020),
    n(411104);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    o = n.n(s),
    a = n(228458),
    r = n(481060),
    u = n(393238),
    d = n(399654),
    m = n(162609),
    c = n(370298),
    h = n(95398),
    I = n(167080),
    x = n(247206),
    p = n(25610),
    g = n(947849),
    C = n(982330),
    f = n(124347),
    j = n(976853),
    v = n(587906),
    y = n(592125),
    E = n(626135),
    M = n(630388),
    N = n(956664),
    w = n(169525),
    T = n(499376),
    A = n(217702),
    O = n(981631),
    L = n(388032),
    P = n(158045),
    V = n(27178);
function _(e, t) {
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, T.aw)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type
    };
}
let F = (e) => {
    let { mimeType: t, downloadURL: n, onRemoveItem: s, onViewItem: a, showDownload: d, showImageAppPicker: m, isVisualMediaType: h, channelId: x } = e,
        p = l.useRef(null),
        [g, f] = l.useState(0);
    (0, u.P)(p, (e) => {
        let { width: t } = e;
        null != t && f(Math.floor((t - 8) / 32));
    });
    let j = [],
        { mediaViewerAffordanceEnabled: y } = (0, C.dP)('MosaicItemHoverButtons');
    y &&
        null != a &&
        j.push(
            (0, i.jsx)(
                v.Z,
                {
                    className: V.hoverButton,
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
                    className: o()(V.hoverButton, { [V.selected]: E }),
                    imageUrl: n,
                    mimeType: t
                },
                'app'
            )
        ),
        null != s &&
            j.push(
                (0, i.jsx)(
                    r.ua7,
                    {
                        text: L.intl.string(L.t['/XT3io']),
                        children: (e) =>
                            (0, i.jsx)(r.P3F, {
                                ...e,
                                className: o()(V.hoverButton, P.removeMosaicItemHoverButton),
                                focusProps: { offset: 2 },
                                onClick: s,
                                'aria-label': L.intl.string(L.t['0+xZHx']),
                                children: (0, i.jsx)(r.XHJ, {
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
                    r.ua7,
                    {
                        text: L.intl.string(L.t['1WjMbG']),
                        children: (e) =>
                            (0, i.jsx)(I.Z, {
                                ...e,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                className: V.hoverButton,
                                iconClassName: P.downloadHoverButtonIcon,
                                focusProps: { offset: 2 },
                                href: n,
                                mimeType: t
                            })
                    },
                    'download'
                )
            );
    let w = Math.max(0, j.length - g);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            g > 0 &&
                j.length > 0 &&
                (0, i.jsx)('div', {
                    className: o()(V.hoverButtonGroup, {
                        [V.nonMediaMosaicItem]: !h,
                        [V.forceShowHover]: E
                    }),
                    children: j.slice(w)
                }),
            (0, i.jsx)('div', {
                ref: p,
                className: V.sizer
            })
        ]
    });
};
function S(e) {
    var t;
    let { message: n, item: s, autoPlayGif: u, canRemoveItem: c, onRemoveItem: h, onViewItem: I, onClick: x, handlePreloadImage: p, onContextMenu: C, onPlay: v, renderImageComponent: w, renderVideoComponent: T, renderAudioComponent: V, renderPlaintextFilePreview: _, renderGenericFileComponent: S, renderVisualPlaceholderComponent: H, className: D, imgContainerClassName: b, imgClassName: k, focusable: R, hiddenSpoilers: B, mediaLayoutType: G, maxWidth: W, maxHeight: Z, hasFooter: U, useFullWidth: z, isVisualMediaType: J, onVideoControlsShow: X, onVideoControlsHide: q, isSearchResult: Y } = e,
        { width: Q, height: K, spoiler: $, type: ee, contentType: et } = s,
        [en, ei] = l.useState(!1),
        [el, es] = l.useState(!1),
        eo = n.getChannelId(),
        ea = y.Z.getChannel(eo),
        er = (0, j.Z)(eo),
        eu = m.P.useExperiment({ location: 'MediaMosaicItem' }, { autoTrackExposure: !0 }).imageRecsEnabled,
        ed = l.useMemo(() => (null != et && -1 !== et.indexOf('/') ? et.split('/') : ['unknown', 'unknown']), [et]),
        em = s.originalItem,
        ec = 'IMAGE' === ee && !f.uo.test(s.downloadUrl) && !((f.YG.test(s.downloadUrl) || f.FH.test(s.downloadUrl)) && (0, M.yE)(null !== (t = em.flags) && void 0 !== t ? t : 0, O.J0y.IS_ANIMATED)),
        eh = !1;
    if (J) {
        (null == Q || null == K) && (eh = !0);
        let e = (0, N.Dc)({
            width: null != Q ? Q : 0,
            height: null != K ? K : 0,
            maxWidth: A.mT,
            maxHeight: A.Jj
        });
        !z && (e * (null != Q ? Q : 0) < A.OF || e * (null != K ? K : 0) < A.OF) && (eh = !0);
    }
    let eI = l.useCallback(() => {
            h(s);
        }, [s, h]),
        ex = l.useCallback(
            (e) => {
                if (ec && !eh && !0 !== Y) {
                    if (e && !el) {
                        if ((es(!0), eu)) {
                            var t;
                            (0, d.a)({
                                channelId: null !== (t = null == ea ? void 0 : ea.id) && void 0 !== t ? t : '',
                                location: a.I.CONTEXTUAL_IMAGE,
                                withCommands: !0
                            });
                        }
                        E.default.track(O.rMx.IMAGE_HOVERED, {
                            guild_id: null == ea ? void 0 : ea.guild_id,
                            channel_id: null == ea ? void 0 : ea.id,
                            image_recommendations_shown: eu
                        });
                    } else !e && el && es(!1);
                }
            },
            [el, ea, eu, ec, eh, Y]
        ),
        ep = l.useCallback(() => {
            if (G === A.hV.MOSAIC) {
                let e = (!er && ['VIDEO', 'CLIP', 'AUDIO'].includes(ee)) || 'OTHER' === ee;
                return eh
                    ? null
                    : !en &&
                          (0, i.jsx)(F, {
                              mimeType: ed,
                              downloadURL: s.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: ec && eu && !0 !== Y,
                              onRemoveItem: c ? eI : void 0,
                              onViewItem: I,
                              isVisualMediaType: J,
                              channelId: eo
                          });
            }
            return (
                c &&
                (0, i.jsx)(r.P3F, {
                    className: $ ? P.spoilerRemoveMosaicItemButton : P.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => h(s),
                    'aria-label': L.intl.string(L.t['0+xZHx']),
                    children: (0, i.jsx)(r.Dio, {
                        size: 'xs',
                        color: 'currentColor'
                    })
                })
            );
        }, [G, c, $, er, ee, eh, en, ed, s, ec, eu, Y, eI, I, J, eo, h]);
    switch (ee) {
        case 'IMAGE':
            return (0, i.jsx)(g.h.Consumer, {
                children: (e) =>
                    (0, i.jsx)(w, {
                        item: s,
                        message: n,
                        width: Q,
                        height: K,
                        autoPlay: u && !B,
                        onClick: x,
                        onContextMenu: C,
                        shouldHideMediaOptions: er,
                        renderAccessory: e,
                        renderAdjacentContent: ep,
                        containerClassName: D,
                        className: b,
                        imageClassName: k,
                        shouldLink: R,
                        hiddenSpoilers: B,
                        responsive: !0,
                        mediaLayoutType: G,
                        maxWidth: W,
                        maxHeight: Z,
                        useFullWidth: z,
                        handlePreloadImage: p,
                        onMouseEnter: () => ex(!0),
                        onMouseLeave: () => ex(!1)
                    })
            });
        case 'VIDEO':
        case 'CLIP':
            return (0, i.jsx)(T, {
                item: s,
                message: n,
                width: Q,
                height: K,
                onClick: x,
                onContextMenu: C,
                renderAdjacentContent: ep,
                naturalWidth: Q,
                naturalHeight: K,
                className: o()(D, { [P.hasFooter]: U }),
                playable: R,
                responsive: !0,
                mediaLayoutType: G,
                maxWidth: W,
                maxHeight: Z,
                useFullWidth: z,
                mimeType: ed,
                onControlsShow: X,
                onControlsHide: q,
                downloadable: !er,
                mediaPlayerClassName: U ? P.hasFooter : void 0
            });
        case 'VISUAL_PLACEHOLDER':
            if (null == H) return null;
            return (0, i.jsx)(H, {
                item: s,
                message: n,
                className: b,
                imageClassName: k,
                maxWidth: W,
                maxHeight: Z,
                mediaLayoutType: G,
                useFullWidth: z
            });
        case 'AUDIO':
            return (0, i.jsx)(V, {
                item: s,
                message: n,
                className: D,
                playable: R,
                mimeType: ed,
                renderAdjacentContent: ep,
                onVolumeShow: () => ei(!0),
                onVolumeHide: () => ei(!1),
                onPlay: v
            });
        case 'PLAINTEXT_PREVIEW':
            return (0, i.jsx)(_, {
                item: s,
                message: n,
                className: D,
                onClick: x,
                onContextMenu: C,
                renderAdjacentContent: ep
            });
        case 'OTHER':
            return (0, i.jsx)(S, {
                item: s,
                message: n,
                className: D,
                onClick: x,
                onContextMenu: C,
                renderAdjacentContent: ep
            });
        case 'INVALID':
            return null;
    }
}
let H = function (e) {
    let { className: t, item: n, message: s, getObscureReason: a, useFullWidth: r, mediaLayoutType: u, isSingleMosaicItem: d, footer: m, ...c } = e,
        { width: I, height: g, type: C } = n,
        f = a(n, (0, p.V)(s.channel_id, s.author.id)),
        [j, v] = l.useState(null != f),
        y = u === A.hV.MOSAIC,
        E = !y && ((null != I && I < 200) || (null != g && g < 50)),
        M = 'IMAGE' === C || 'VIDEO' === C,
        O = (0, T.R_)(C),
        L = d && null != f && (0, x.bR)(I, g),
        [V, _] = l.useState(!1),
        F = () => {
            _(!0);
        },
        H = () => {
            _(!1);
        },
        D = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, i.jsx)(S, {
                ...c,
                item: n,
                message: s,
                getObscureReason: a,
                hiddenSpoilers: e,
                className: o()(t, P.mosaicItemContent, {
                    [P.obscured]: j && !E,
                    [P.hiddenSpoiler]: j && f === w.wk.SPOILER,
                    [P.hiddenExplicit]: j && null != f && [w.wk.EXPLICIT_CONTENT, w.wk.POTENTIAL_EXPLICIT_CONTENT].includes(f),
                    [P.hiddenMosaicItem]: j && e,
                    [P.inline]: j && E
                }),
                focusable: !e,
                mediaLayoutType: u,
                hasFooter: null != m,
                useFullWidth: !!L || r,
                isVisualMediaType: O,
                onVideoControlsShow: F,
                onVideoControlsHide: H
            });
        };
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: o()(P.mosaicItem, {
                [P.mosaicItemNoJustify]: M,
                [P.mosaicItemFullWidth]: r,
                [P.mosaicItemMediaMosaic]: y,
                [P.hideOverflow]: y && O,
                [P.mosaicItemWithFooter]: null != m
            }),
            children: [
                null != f
                    ? (0, i.jsx)(h.Z, {
                          type: h.Z.Types.ATTACHMENT,
                          inline: E,
                          reason: f,
                          isSingleMosaicItem: d,
                          obscured: j,
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
                                  ...(n !== A.hV.MOSAIC && { maxWidth: null != i ? i : '400px' }),
                                  width: '100%',
                                  height: '100%',
                                  justifySelf: 'auto'
                              };
                          })(n, M, u),
                          obscurityControlClassName: o()({ [P.obscureVideoSpacing]: 'VIDEO' === C && d && !j && V }),
                          onToggleObscurity: () => v((e) => !e),
                          children: (e) => D(e)
                      })
                    : D(),
                m
            ]
        })
    });
};
