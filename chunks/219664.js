n(47120);
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(683860),
    o = n(442837),
    c = n(692547),
    d = n(481060),
    u = n(738619),
    m = n(824578),
    h = n(841762),
    g = n(25610),
    x = n(406432),
    f = n(169525),
    p = n(255269),
    C = n(930282),
    v = n(524444),
    b = n(695346),
    j = n(433355),
    _ = n(592125),
    I = n(496675),
    T = n(456269),
    N = n(109590),
    S = n(368844),
    w = n(73315),
    y = n(404616),
    E = n(510060),
    R = n(983200),
    P = n(196255),
    M = n(858543),
    k = n(482062),
    Z = n(883728),
    A = n(710352),
    L = n(981631),
    F = n(388032),
    O = n(129702);
function B(e) {
    let { id: t, channel: n, goToThread: r, overrideMedia: u, className: m, coords: h, gridCoords: g, gridSectionBoundaries: x, observePostVisibilityAnalytics: f } = e,
        C = (0, o.e7)([_.Z], () => _.Z.getChannel(n.parent_id)),
        v = n.id,
        w = i.useRef(null),
        R = (0, o.e7)([j.ZP], () => j.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: B, loaded: H } = (0, N.cl)(n),
        { firstMedia: D } = (0, T.mX)({
            firstMessage: B,
            formatInline: !1,
            noStyleAndInteraction: !1
        }),
        { messageCountText: V } = (0, T.nP)(n),
        { isNew: W, hasUnreads: q } = (0, T.J$)(n),
        X = i.useRef(null),
        { handleLeftClick: K, handleRightClick: J } = (0, Z.Z)({
            facepileRef: X,
            goToThread: r,
            channel: n
        });
    i.useEffect(() => {
        null == f || f(w.current, v);
    }, [f, v]);
    let Y = (0, o.e7)([I.Z], () => I.Z.can(L.Plq.MANAGE_MESSAGES, n)),
        Q = b.QK.useSetting(),
        $ = b.cC.useSetting(),
        ee = (0, p.Z)($, Y),
        et = (0, S.aU)(B, C, !1),
        [en, ea] = (0, E.rI)(h.width - 2 * E.LT),
        ei = (0, T.xw)(n, s.z.CREATION_DATE, A.R6.POSTED_DURATION_AGO),
        er = (0, y.NN)(n),
        el = (null == B ? void 0 : B.blocked) || null == (null != u ? u : D),
        { onFocus: es, ...eo } = (0, k.nX)({
            id: t,
            row: g.row,
            column: g.column,
            section: g.section,
            boundaries: x
        }),
        ec = n.isMediaPost();
    return (0, a.jsxs)('li', {
        ref: w,
        onClick: K,
        onFocus: es,
        onContextMenu: J,
        className: l()(O.container, m, { [O.isOpen]: R }),
        style: { ...h },
        children: [
            (0, a.jsx)(d.Clickable, {
                onClick: K,
                focusProps: { ringTarget: w },
                onContextMenu: J,
                'aria-label': F.intl.formatToPlainString(F.t.pgYN6e, {
                    title: n.name,
                    count: V
                }),
                className: O.focusTarget,
                ...eo
            }),
            (0, a.jsxs)('div', {
                className: O.header,
                children: [
                    (0, a.jsxs)('div', {
                        className: O.authorRow,
                        children: [
                            (0, a.jsxs)('div', {
                                className: O.rowGroup,
                                children: [
                                    (0, a.jsx)(P.Z, {
                                        channel: n,
                                        message: B
                                    }),
                                    (0, a.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: O.postCreationTimestamp,
                                        children: ei
                                    })
                                ]
                            }),
                            W
                                ? (0, a.jsx)(d.TextBadge, {
                                      className: l()(O.newBadge),
                                      color: c.Z.unsafe_rawColors.BRAND_260.css,
                                      text: F.intl.string(F.t.y2b7CA)
                                  })
                                : null
                        ]
                    }),
                    (0, a.jsx)(d.HeadingLevel, {
                        children: (0, a.jsx)(d.Heading, {
                            variant: 'heading-md/extrabold',
                            className: O.title,
                            color: q ? 'header-primary' : 'text-muted',
                            style: { width: ''.concat(h.width - 2 * E.I8, 'px') },
                            children: er
                        })
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: O.postBody,
                children: (0, a.jsx)(d.FocusBlock, {
                    children: el
                        ? (0, a.jsx)(G, {
                              channel: n,
                              firstMessage: B,
                              isFirstMessageLoaded: H,
                              containerWidth: h.width,
                              hasUnreads: q
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(U, {
                                      mediaAttachments: et,
                                      globalSpoilerRenderSetting: ee,
                                      containerWidth: en,
                                      containerHeight: ec ? (9 / 16) * en : ea,
                                      canAutoPlay: Q,
                                      shouldMaintainAspectRatio: ec
                                  }),
                                  (0, a.jsx)('div', {
                                      className: O.tagsRow,
                                      children: (0, a.jsx)(M.ZP, {
                                          channel: n,
                                          tagsClassName: O.tagPill
                                      })
                                  })
                              ]
                          })
                })
            }),
            (0, a.jsx)('div', {
                className: O.footer,
                children: (0, a.jsx)(d.FocusBlock, {
                    children: (0, a.jsx)(z, {
                        channel: n,
                        firstMessage: B,
                        facepileRef: X
                    })
                })
            })
        ]
    });
}
function z(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        r = (0, m.Q)(t.id),
        l = (null == i ? void 0 : i.reactions) != null && i.reactions.length > 0;
    return (0, a.jsxs)('div', {
        className: O.forumPostControls,
        children: [
            (0, a.jsxs)('div', {
                className: O.controlsGroup,
                children: [
                    (0, a.jsx)('div', {
                        className: O.messageCountContainer,
                        children: (0, a.jsx)(y.m9, {
                            channel: t,
                            iconSize: 16,
                            showReadState: !0
                        })
                    }),
                    r.length > 0
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)('span', {
                                      className: O.bullet,
                                      children: '\u2022'
                                  }),
                                  (0, a.jsxs)('div', {
                                      className: O.typing,
                                      children: [
                                          (0, a.jsx)(y.og, {
                                              channel: t,
                                              userIds: r,
                                              facepileRef: n
                                          }),
                                          (0, a.jsx)('div', {
                                              className: O.dots,
                                              children: (0, a.jsx)(d.Dots, {
                                                  themed: !0,
                                                  dotRadius: 2
                                              })
                                          }),
                                          (0, a.jsx)(u.Z, {
                                              channel: t,
                                              className: O.typingUsers,
                                              renderDots: !1
                                          })
                                      ]
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, a.jsxs)('div', {
                className: O.controlsGroup,
                children: [
                    l || null == i
                        ? null
                        : (0, a.jsx)(y.kZ, {
                              firstMessage: i,
                              channel: t
                          }),
                    null == i
                        ? null
                        : (0, a.jsx)(y.au, {
                              firstMessage: i,
                              channel: t
                          })
                ]
            })
        ]
    });
}
t.Z = i.memo(function (e) {
    let { id: t, threadId: n, goToThread: i, overrideMedia: r, className: l, coords: s, gridCoords: c, gridSectionBoundaries: d, observePostVisibilityAnalytics: u } = e,
        m = (0, o.e7)([_.Z], () => _.Z.getChannel(n));
    return null == m
        ? null
        : (0, a.jsx)(B, {
              id: t,
              channel: m,
              goToThread: i,
              overrideMedia: r,
              className: l,
              coords: s,
              gridCoords: c,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: d
          });
});
let H = (e) => e.preventDefault(),
    D = i.memo(function (e) {
        return (0, a.jsx)(a.Fragment, {
            children: (0, v.Yi)({
                ...e,
                analyticsSource: 'ForumPostMediaPreviewImage'
            })
        });
    }),
    U = i.memo(function (e) {
        let { mediaAttachments: t, globalSpoilerRenderSetting: n, containerWidth: r, containerHeight: s, canAutoPlay: o, shouldMaintainAspectRatio: c = !1 } = e,
            { containsVideo: u, containsGif: m } = i.useMemo(() => (0, S.cp)(t), [t]),
            p = i.useMemo(() => t.slice(R.$x, R.GV), [t]),
            C = (0, R.tu)({
                numAttachments: p.length,
                containerWidth: r,
                containerHeight: s
            }),
            v = (0, R.S$)({
                imageContainerStyles: C,
                containerWidth: r,
                containerHeight: s
            }),
            b = (0, g.m)(),
            j = i.useMemo(
                () =>
                    p.map((e, t) => {
                        var i;
                        let [r, s] = (0, f.As)(e, !n, b),
                            g = (0, f.MC)(s),
                            p = {
                                ...v[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && r ? g : e.alt,
                                onClick: H,
                                shouldRenderAccessory: !m && !u
                            },
                            j = (0, x.d$)(e.src) ? ''.concat(e.src, '?format=png') : e.src,
                            _ = o && !r ? e.src : j;
                        return (0, a.jsxs)(
                            'div',
                            {
                                className: O.bodyMediaFrame,
                                style: C[t],
                                children: [
                                    c
                                        ? (0, a.jsx)(h.Z, {
                                              ...p,
                                              src: _,
                                              backgroundSrc: j,
                                              aspectRatio: p.maxWidth / p.maxHeight,
                                              alt: null !== (i = p.alt) && void 0 !== i ? i : '',
                                              className: l()(O.mediaPostContainer, { [O.obscured]: r }),
                                              imageChildClassName: O.mediaPostThumbnail
                                          })
                                        : e.src.startsWith('data:')
                                          ? (0, a.jsx)(d.Image, {
                                                ...p,
                                                className: O.mediaContainer,
                                                imageClassName: l()(O.thumbnailOverride, { [O.obscured]: r })
                                            })
                                          : (0, a.jsx)(D, {
                                                ...p,
                                                autoPlay: o && !r,
                                                containerClassName: O.mosaicMediaContainer,
                                                imageClassName: l()(O.imageCover, { [O.obscured]: r }),
                                                responsive: !0
                                            }),
                                    r &&
                                        (0, a.jsx)('div', {
                                            className: O.obscuredTagContainer,
                                            children: (0, a.jsx)(w.Z, {
                                                obscureReason: s,
                                                iconClassname: O.obscuredTag
                                            })
                                        })
                                ]
                            },
                            e.src
                        );
                    }),
                [o, m, u, n, C, v, p, c, b]
            );
        return (0, a.jsxs)('div', {
            className: O.bodyMedia,
            style: {
                width: r,
                height: s
            },
            children: [
                (0, a.jsx)(a.Fragment, { children: j }),
                (m || u) &&
                    (0, a.jsxs)('div', {
                        className: O.mediaIconsRow,
                        children: [
                            u &&
                                (0, a.jsx)(d.PlayIcon, {
                                    color: 'currentColor',
                                    size: 'custom',
                                    width: 22,
                                    height: 22,
                                    className: O.mediaIcon
                                }),
                            m &&
                                (0, a.jsx)(d.GifIcon, {
                                    size: 'custom',
                                    width: 29,
                                    height: 29,
                                    color: 'currentColor',
                                    className: O.mediaIcon
                                })
                        ]
                    }),
                t.length > R.Vn &&
                    (0, a.jsx)(V, {
                        text: (t.length - R.Vn).toString(),
                        icon: d.ImageIcon,
                        pillClassName: O.moreImagesPill,
                        iconClassName: O.moreImagesPillIcon,
                        textClassName: O.moreImagesPillText
                    })
            ]
        });
    });
function V(e) {
    let { text: t, icon: n, pillClassName: i, iconClassName: r, textClassName: l } = e;
    return (0, a.jsxs)('div', {
        className: i,
        children: [
            (0, a.jsx)(n, {
                className: r,
                color: 'currentColor'
            }),
            (0, a.jsxs)(d.Text, {
                variant: 'text-xs/medium',
                className: l,
                children: ['+', t]
            })
        ]
    });
}
function G(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: r, containerWidth: s, hasUnreads: o } = e,
        [c, u] = (0, E.rI)(s - 2 * E.LT),
        { content: m } = (0, T.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !0
        }),
        { shouldRenderTagsRow: h } = (0, M.DM)({
            channel: t,
            isNew: !1
        }),
        g = i.useMemo(
            () => ({
                width: c,
                height: u
            }),
            [c, u]
        ),
        x = o ? O.textContentUnread : O.textContentRead;
    return (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)('div', {
            className: O.contentPreview,
            style: g,
            children: [
                (0, a.jsxs)('div', {
                    className: O.content,
                    children: [
                        r &&
                            null == n &&
                            (0, a.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: o ? 'header-secondary' : 'text-muted',
                                children: F.intl.string(F.t.mE3KJC)
                            }),
                        r &&
                            null != n &&
                            (0, a.jsx)(C.ZP, {
                                message: n,
                                content: m,
                                className: x
                            })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: l()(O.textContentFooter, { [O.noTags]: !h }),
                    children: h
                        ? (0, a.jsx)(M.ZP, {
                              channel: t,
                              tagsClassName: O.tagPill,
                              className: O.__invalid_row
                          })
                        : null
                })
            ]
        })
    });
}
