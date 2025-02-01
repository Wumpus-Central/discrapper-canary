n.d(t, { Z: () => z }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    v = n(930282),
    C = n(524444),
    _ = n(695346),
    b = n(433355),
    j = n(592125),
    N = n(496675),
    T = n(456269),
    I = n(109590),
    S = n(368844),
    w = n(73315),
    y = n(404616),
    E = n(510060),
    R = n(983200),
    P = n(196255),
    k = n(858543),
    Z = n(482062),
    M = n(883728),
    A = n(710352),
    L = n(981631),
    F = n(388032),
    O = n(129702);
let z = l.memo(function (e) {
    let { id: t, threadId: n, goToThread: l, overrideMedia: r, className: a, coords: s, gridCoords: c, gridSectionBoundaries: d, observePostVisibilityAnalytics: u } = e,
        m = (0, o.e7)([j.Z], () => j.Z.getChannel(n));
    return null == m
        ? null
        : (0, i.jsx)(D, {
              id: t,
              channel: m,
              goToThread: l,
              overrideMedia: r,
              className: a,
              coords: s,
              gridCoords: c,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: d
          });
});
function D(e) {
    let { id: t, channel: n, goToThread: r, overrideMedia: u, className: m, coords: h, gridCoords: g, gridSectionBoundaries: x, observePostVisibilityAnalytics: f } = e,
        v = (0, o.e7)([j.Z], () => j.Z.getChannel(n.parent_id)),
        C = n.id,
        w = l.useRef(null),
        R = (0, o.e7)([b.ZP], () => b.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: z, loaded: D } = (0, I.cl)(n),
        { firstMedia: H } = (0, T.mX)({
            firstMessage: z,
            formatInline: !1,
            noStyleAndInteraction: !1
        }),
        { messageCountText: U } = (0, T.nP)(n),
        { isNew: G, hasUnreads: X } = (0, T.J$)(n),
        W = l.useRef(null),
        { handleLeftClick: K, handleRightClick: J } = (0, M.Z)({
            facepileRef: W,
            goToThread: r,
            channel: n
        });
    l.useEffect(() => {
        null == f || f(w.current, C);
    }, [f, C]);
    let Y = (0, o.e7)([N.Z], () => N.Z.can(L.Plq.MANAGE_MESSAGES, n)),
        Q = _.QK.useSetting(),
        $ = _.cC.useSetting(),
        ee = (0, p.Z)($, Y),
        et = (0, S.aU)(z, v, !1),
        [en, ei] = (0, E.rI)(h.width - 2 * E.LT),
        el = (0, T.xw)(n, s.z.CREATION_DATE, A.R6.POSTED_DURATION_AGO),
        er = (0, y.NN)(n),
        ea = (null == z ? void 0 : z.blocked) || null == (null != u ? u : H),
        { onFocus: es, ...eo } = (0, Z.nX)({
            id: t,
            row: g.row,
            column: g.column,
            section: g.section,
            boundaries: x
        }),
        ec = n.isMediaPost();
    return (0, i.jsxs)('li', {
        ref: w,
        onClick: K,
        onFocus: es,
        onContextMenu: J,
        className: a()(O.container, m, { [O.isOpen]: R }),
        style: { ...h },
        children: [
            (0, i.jsx)(d.P3F, {
                onClick: K,
                focusProps: { ringTarget: w },
                onContextMenu: J,
                'aria-label': F.intl.formatToPlainString(F.t.pgYN6e, {
                    title: n.name,
                    count: U
                }),
                className: O.focusTarget,
                ...eo
            }),
            (0, i.jsxs)('div', {
                className: O.header,
                children: [
                    (0, i.jsxs)('div', {
                        className: O.authorRow,
                        children: [
                            (0, i.jsxs)('div', {
                                className: O.rowGroup,
                                children: [
                                    (0, i.jsx)(P.Z, {
                                        channel: n,
                                        message: z
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: O.postCreationTimestamp,
                                        children: el
                                    })
                                ]
                            }),
                            G
                                ? (0, i.jsx)(d.IGR, {
                                      className: a()(O.newBadge),
                                      color: c.Z.unsafe_rawColors.BRAND_260.css,
                                      text: F.intl.string(F.t.y2b7CA)
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(d.y5t, {
                        children: (0, i.jsx)(d.X6q, {
                            variant: 'heading-md/extrabold',
                            className: O.title,
                            color: X ? 'header-primary' : 'text-muted',
                            style: { width: ''.concat(h.width - 2 * E.I8, 'px') },
                            children: er
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: O.postBody,
                children: (0, i.jsx)(d.Rny, {
                    children: ea
                        ? (0, i.jsx)(q, {
                              channel: n,
                              firstMessage: z,
                              isFirstMessageLoaded: D,
                              containerWidth: h.width,
                              hasUnreads: X
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(V, {
                                      mediaAttachments: et,
                                      globalSpoilerRenderSetting: ee,
                                      containerWidth: en,
                                      containerHeight: ec ? (9 / 16) * en : ei,
                                      canAutoPlay: Q,
                                      shouldMaintainAspectRatio: ec
                                  }),
                                  (0, i.jsx)('div', {
                                      className: O.tagsRow,
                                      children: (0, i.jsx)(k.ZP, {
                                          channel: n,
                                          tagsClassName: O.tagPill
                                      })
                                  })
                              ]
                          })
                })
            }),
            (0, i.jsx)('div', {
                className: O.footer,
                children: (0, i.jsx)(d.Rny, {
                    children: (0, i.jsx)(B, {
                        channel: n,
                        firstMessage: z,
                        facepileRef: W
                    })
                })
            })
        ]
    });
}
function B(e) {
    let { channel: t, facepileRef: n, firstMessage: l } = e,
        r = (0, m.Q)(t.id),
        a = (null == l ? void 0 : l.reactions) != null && l.reactions.length > 0;
    return (0, i.jsxs)('div', {
        className: O.forumPostControls,
        children: [
            (0, i.jsxs)('div', {
                className: O.controlsGroup,
                children: [
                    (0, i.jsx)('div', {
                        className: O.messageCountContainer,
                        children: (0, i.jsx)(y.m9, {
                            channel: t,
                            iconSize: 16,
                            showReadState: !0
                        })
                    }),
                    r.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('span', {
                                      className: O.bullet,
                                      children: '\u2022'
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: O.typing,
                                      children: [
                                          (0, i.jsx)(y.og, {
                                              channel: t,
                                              userIds: r,
                                              facepileRef: n
                                          }),
                                          (0, i.jsx)('div', {
                                              className: O.dots,
                                              children: (0, i.jsx)(d.bbz, {
                                                  themed: !0,
                                                  dotRadius: 2
                                              })
                                          }),
                                          (0, i.jsx)(u.Z, {
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
            (0, i.jsxs)('div', {
                className: O.controlsGroup,
                children: [
                    a || null == l
                        ? null
                        : (0, i.jsx)(y.kZ, {
                              firstMessage: l,
                              channel: t
                          }),
                    null == l
                        ? null
                        : (0, i.jsx)(y.au, {
                              firstMessage: l,
                              channel: t
                          })
                ]
            })
        ]
    });
}
let H = (e) => e.preventDefault(),
    U = l.memo(function (e) {
        return (0, i.jsx)(i.Fragment, {
            children: (0, C.Yi)({
                ...e,
                analyticsSource: 'ForumPostMediaPreviewImage'
            })
        });
    }),
    V = l.memo(function (e) {
        let { mediaAttachments: t, globalSpoilerRenderSetting: n, containerWidth: r, containerHeight: s, canAutoPlay: o, shouldMaintainAspectRatio: c = !1 } = e,
            { containsVideo: u, containsGif: m } = l.useMemo(() => (0, S.cp)(t), [t]),
            p = l.useMemo(() => t.slice(R.$x, R.GV), [t]),
            v = (0, R.tu)({
                numAttachments: p.length,
                containerWidth: r,
                containerHeight: s
            }),
            C = (0, R.S$)({
                imageContainerStyles: v,
                containerWidth: r,
                containerHeight: s
            }),
            _ = (0, g.m)(),
            b = l.useMemo(
                () =>
                    p.map((e, t) => {
                        var l;
                        let [r, s] = (0, f.As)(e, !n, _),
                            g = (0, f.MC)(s),
                            p = {
                                ...C[t],
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && r ? g : e.alt,
                                onClick: H,
                                shouldRenderAccessory: !m && !u
                            },
                            b = (0, x.d$)(e.src) ? ''.concat(e.src, '?format=png') : e.src,
                            j = o && !r ? e.src : b;
                        return (0, i.jsxs)(
                            'div',
                            {
                                className: O.bodyMediaFrame,
                                style: v[t],
                                children: [
                                    c
                                        ? (0, i.jsx)(h.Z, {
                                              ...p,
                                              src: j,
                                              backgroundSrc: b,
                                              aspectRatio: p.maxWidth / p.maxHeight,
                                              alt: null !== (l = p.alt) && void 0 !== l ? l : '',
                                              className: a()(O.mediaPostContainer, { [O.obscured]: r }),
                                              imageChildClassName: O.mediaPostThumbnail
                                          })
                                        : e.src.startsWith('data:')
                                          ? (0, i.jsx)(d.Eep, {
                                                ...p,
                                                className: O.mediaContainer,
                                                imageClassName: a()(O.thumbnailOverride, { [O.obscured]: r })
                                            })
                                          : (0, i.jsx)(U, {
                                                ...p,
                                                autoPlay: o && !r,
                                                containerClassName: O.mosaicMediaContainer,
                                                imageClassName: a()(O.imageCover, { [O.obscured]: r }),
                                                responsive: !0
                                            }),
                                    r &&
                                        (0, i.jsx)('div', {
                                            className: O.obscuredTagContainer,
                                            children: (0, i.jsx)(w.Z, {
                                                obscureReason: s,
                                                iconClassname: O.obscuredTag
                                            })
                                        })
                                ]
                            },
                            e.src
                        );
                    }),
                [o, m, u, n, v, C, p, c, _]
            );
        return (0, i.jsxs)('div', {
            className: O.bodyMedia,
            style: {
                width: r,
                height: s
            },
            children: [
                (0, i.jsx)(i.Fragment, { children: b }),
                (m || u) &&
                    (0, i.jsxs)('div', {
                        className: O.mediaIconsRow,
                        children: [
                            u &&
                                (0, i.jsx)(d.o1U, {
                                    color: 'currentColor',
                                    size: 'custom',
                                    width: 22,
                                    height: 22,
                                    className: O.mediaIcon
                                }),
                            m &&
                                (0, i.jsx)(d.OUq, {
                                    size: 'custom',
                                    width: 29,
                                    height: 29,
                                    color: 'currentColor',
                                    className: O.mediaIcon
                                })
                        ]
                    }),
                t.length > R.Vn &&
                    (0, i.jsx)(G, {
                        text: (t.length - R.Vn).toString(),
                        icon: d.XBm,
                        pillClassName: O.moreImagesPill,
                        iconClassName: O.moreImagesPillIcon,
                        textClassName: O.moreImagesPillText
                    })
            ]
        });
    });
function G(e) {
    let { text: t, icon: n, pillClassName: l, iconClassName: r, textClassName: a } = e;
    return (0, i.jsxs)('div', {
        className: l,
        children: [
            (0, i.jsx)(n, {
                className: r,
                color: 'currentColor'
            }),
            (0, i.jsxs)(d.Text, {
                variant: 'text-xs/medium',
                className: a,
                children: ['+', t]
            })
        ]
    });
}
function q(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: r, containerWidth: s, hasUnreads: o } = e,
        [c, u] = (0, E.rI)(s - 2 * E.LT),
        { content: m } = (0, T.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !0
        }),
        { shouldRenderTagsRow: h } = (0, k.DM)({
            channel: t,
            isNew: !1
        }),
        g = l.useMemo(
            () => ({
                width: c,
                height: u
            }),
            [c, u]
        ),
        x = o ? O.textContentUnread : O.textContentRead;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: O.contentPreview,
            style: g,
            children: [
                (0, i.jsxs)('div', {
                    className: O.content,
                    children: [
                        r &&
                            null == n &&
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                color: o ? 'header-secondary' : 'text-muted',
                                children: F.intl.string(F.t.mE3KJC)
                            }),
                        r &&
                            null != n &&
                            (0, i.jsx)(v.ZP, {
                                message: n,
                                content: m,
                                className: x
                            })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: a()(O.textContentFooter, { [O.noTags]: !h }),
                    children: h
                        ? (0, i.jsx)(k.ZP, {
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
