n.d(t, { Z: () => B }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(683860),
    o = n(442837),
    c = n(692547),
    d = n(481060),
    u = n(738619),
    m = n(824578),
    h = n(841762),
    g = n(25610),
    f = n(406432),
    p = n(169525),
    x = n(255269),
    b = n(930282),
    j = n(524444),
    v = n(695346),
    C = n(433355),
    _ = n(592125),
    y = n(496675),
    O = n(456269),
    w = n(109590),
    S = n(368844),
    P = n(73315),
    N = n(404616),
    T = n(510060),
    I = n(983200),
    E = n(196255),
    k = n(858543),
    R = n(482062),
    Z = n(883728),
    M = n(710352),
    A = n(981631),
    L = n(388032),
    F = n(365494);
function D(e) {
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
function z(e, t) {
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
let B = i.memo(function (e) {
    let { id: t, threadId: n, goToThread: i, overrideMedia: l, className: a, coords: s, gridCoords: c, gridSectionBoundaries: d, observePostVisibilityAnalytics: u } = e,
        m = (0, o.e7)([_.Z], () => _.Z.getChannel(n));
    return null == m
        ? null
        : (0, r.jsx)(H, {
              id: t,
              channel: m,
              goToThread: i,
              overrideMedia: l,
              className: a,
              coords: s,
              gridCoords: c,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: d
          });
});
function H(e) {
    let { id: t, channel: n, goToThread: l, overrideMedia: u, className: m, coords: h, gridCoords: g, gridSectionBoundaries: f, observePostVisibilityAnalytics: p } = e,
        b = (0, o.e7)([_.Z], () => _.Z.getChannel(n.parent_id)),
        j = n.id,
        P = i.useRef(null),
        I = (0, o.e7)([C.ZP], () => C.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: z, loaded: B } = (0, w.cl)(n),
        { firstMedia: H } = (0, O.mX)({
            firstMessage: z,
            formatInline: !1,
            noStyleAndInteraction: !1
        }),
        { messageCountText: V } = (0, O.nP)(n),
        { isNew: G, hasUnreads: X } = (0, O.J$)(n),
        K = i.useRef(null),
        { handleLeftClick: J, handleRightClick: Y } = (0, Z.Z)({
            facepileRef: K,
            goToThread: l,
            channel: n
        });
    i.useEffect(() => {
        null == p || p(P.current, j);
    }, [p, j]);
    let Q = (0, o.e7)([y.Z], () => y.Z.can(A.Plq.MANAGE_MESSAGES, n)),
        $ = v.QK.useSetting(),
        ee = v.cC.useSetting(),
        et = (0, x.Z)(ee, Q),
        en = (0, S.aU)(z, b, !1),
        [er, ei] = (0, T.rI)(h.width - 2 * T.LT),
        el = (0, O.xw)(n, s.z.CREATION_DATE, M.R6.POSTED_DURATION_AGO),
        ea = (0, N.NN)(n),
        es = (null == z ? void 0 : z.blocked) || null == (null != u ? u : H),
        eo = (0, R.nX)({
            id: t,
            row: g.row,
            column: g.column,
            section: g.section,
            boundaries: f
        }),
        { onFocus: ec } = eo,
        ed = (function (e, t) {
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
        })(eo, ['onFocus']),
        eu = n.isMediaPost();
    return (0, r.jsxs)('li', {
        ref: P,
        onClick: J,
        onFocus: ec,
        onContextMenu: Y,
        className: a()(F.container, m, { [F.isOpen]: I }),
        style: D({}, h),
        children: [
            (0, r.jsx)(
                d.P3F,
                D(
                    {
                        onClick: J,
                        focusProps: { ringTarget: P },
                        onContextMenu: Y,
                        'aria-label': L.intl.formatToPlainString(L.t.pgYN6e, {
                            title: n.name,
                            count: V
                        }),
                        className: F.focusTarget
                    },
                    ed
                )
            ),
            (0, r.jsxs)('div', {
                className: F.header,
                children: [
                    (0, r.jsxs)('div', {
                        className: F.authorRow,
                        children: [
                            (0, r.jsxs)('div', {
                                className: F.rowGroup,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        channel: n,
                                        message: z
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: F.postCreationTimestamp,
                                        children: el
                                    })
                                ]
                            }),
                            G
                                ? (0, r.jsx)(d.IGR, {
                                      className: F.newBadge,
                                      color: c.Z.unsafe_rawColors.BRAND_260.css,
                                      text: L.intl.string(L.t.y2b7CA)
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(d.y5t, {
                        children: (0, r.jsx)(d.X6q, {
                            variant: 'heading-md/extrabold',
                            className: F.title,
                            color: X ? 'header-primary' : 'text-muted',
                            style: { width: ''.concat(h.width - 2 * T.I8, 'px') },
                            children: ea
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: F.postBody,
                children: (0, r.jsx)(d.Rny, {
                    children: es
                        ? (0, r.jsx)(W, {
                              channel: n,
                              firstMessage: z,
                              isFirstMessageLoaded: B,
                              containerWidth: h.width,
                              hasUnreads: X
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(q, {
                                      mediaAttachments: en,
                                      globalSpoilerRenderSetting: et,
                                      containerWidth: er,
                                      containerHeight: eu ? (9 / 16) * er : ei,
                                      canAutoPlay: $,
                                      shouldMaintainAspectRatio: eu
                                  }),
                                  (0, r.jsx)('div', {
                                      className: F.tagsRow,
                                      children: (0, r.jsx)(k.ZP, {
                                          channel: n,
                                          tagsClassName: F.tagPill
                                      })
                                  })
                              ]
                          })
                })
            }),
            (0, r.jsx)('div', {
                className: F.footer,
                children: (0, r.jsx)(d.Rny, {
                    children: (0, r.jsx)(U, {
                        channel: n,
                        firstMessage: z,
                        facepileRef: K
                    })
                })
            })
        ]
    });
}
function U(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        l = (0, m.Q)(t.id),
        a = (null == i ? void 0 : i.reactions) != null && i.reactions.length > 0;
    return (0, r.jsxs)('div', {
        className: F.forumPostControls,
        children: [
            (0, r.jsxs)('div', {
                className: F.controlsGroup,
                children: [
                    (0, r.jsx)('div', {
                        className: F.messageCountContainer,
                        children: (0, r.jsx)(N.m9, {
                            channel: t,
                            iconSize: 16,
                            showReadState: !0
                        })
                    }),
                    l.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('span', {
                                      className: F.bullet,
                                      children: '\u2022'
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: F.typing,
                                      children: [
                                          (0, r.jsx)(N.og, {
                                              channel: t,
                                              userIds: l,
                                              facepileRef: n
                                          }),
                                          (0, r.jsx)('div', {
                                              className: F.dots,
                                              children: (0, r.jsx)(d.bbz, {
                                                  themed: !0,
                                                  dotRadius: 2
                                              })
                                          }),
                                          (0, r.jsx)(u.Z, {
                                              channel: t,
                                              className: F.typingUsers,
                                              renderDots: !1
                                          })
                                      ]
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: F.controlsGroup,
                children: [
                    a || null == i
                        ? null
                        : (0, r.jsx)(N.kZ, {
                              firstMessage: i,
                              channel: t
                          }),
                    null == i
                        ? null
                        : (0, r.jsx)(N.au, {
                              firstMessage: i,
                              channel: t
                          })
                ]
            })
        ]
    });
}
let V = (e) => e.preventDefault(),
    G = i.memo(function (e) {
        return (0, r.jsx)(r.Fragment, { children: (0, j.Yi)(z(D({}, e), { analyticsSource: 'ForumPostMediaPreviewImage' })) });
    }),
    q = i.memo(function (e) {
        let { mediaAttachments: t, globalSpoilerRenderSetting: n, containerWidth: l, containerHeight: s, canAutoPlay: o, shouldMaintainAspectRatio: c = !1 } = e,
            { containsVideo: u, containsGif: m } = i.useMemo(() => (0, S.cp)(t), [t]),
            x = i.useMemo(() => t.slice(I.$x, I.GV), [t]),
            b = (0, I.tu)({
                numAttachments: x.length,
                containerWidth: l,
                containerHeight: s
            }),
            j = (0, I.S$)({
                imageContainerStyles: b,
                containerWidth: l,
                containerHeight: s
            }),
            v = (0, g.m)(),
            C = i.useMemo(
                () =>
                    x.map((e, t) => {
                        var i;
                        let [l, s] = (0, p.As)(e, !n, v),
                            g = (0, p.MC)(s),
                            x = z(D({}, j[t]), {
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && l ? g : e.alt,
                                onClick: V,
                                shouldRenderAccessory: !m && !u
                            }),
                            C = (0, f.d$)(e.src) ? ''.concat(e.src, '?format=png') : e.src,
                            _ = o && !l ? e.src : C;
                        return (0, r.jsxs)(
                            'div',
                            {
                                className: F.bodyMediaFrame,
                                style: b[t],
                                children: [
                                    c
                                        ? (0, r.jsx)(
                                              h.Z,
                                              z(D({}, x), {
                                                  src: _,
                                                  backgroundSrc: C,
                                                  aspectRatio: x.maxWidth / x.maxHeight,
                                                  alt: null != (i = x.alt) ? i : '',
                                                  className: a()(F.mediaPostContainer, { [F.obscured]: l }),
                                                  imageChildClassName: F.mediaPostThumbnail
                                              })
                                          )
                                        : e.src.startsWith('data:')
                                          ? (0, r.jsx)(
                                                d.Eep,
                                                z(D({}, x), {
                                                    className: F.mediaContainer,
                                                    imageClassName: a()(F.thumbnailOverride, { [F.obscured]: l })
                                                })
                                            )
                                          : (0, r.jsx)(
                                                G,
                                                z(D({}, x), {
                                                    autoPlay: o && !l,
                                                    containerClassName: F.mosaicMediaContainer,
                                                    imageClassName: a()(F.imageCover, { [F.obscured]: l }),
                                                    responsive: !0
                                                })
                                            ),
                                    l &&
                                        (0, r.jsx)('div', {
                                            className: F.obscuredTagContainer,
                                            children: (0, r.jsx)(P.Z, {
                                                obscureReason: s,
                                                iconClassname: F.obscuredTag
                                            })
                                        })
                                ]
                            },
                            e.src
                        );
                    }),
                [o, m, u, n, b, j, x, c, v]
            );
        return (0, r.jsxs)('div', {
            className: F.bodyMedia,
            style: {
                width: l,
                height: s
            },
            children: [
                C,
                (m || u) &&
                    (0, r.jsxs)('div', {
                        className: F.mediaIconsRow,
                        children: [
                            u &&
                                (0, r.jsx)(d.o1U, {
                                    color: 'currentColor',
                                    size: 'custom',
                                    width: 22,
                                    height: 22,
                                    className: F.mediaIcon
                                }),
                            m &&
                                (0, r.jsx)(d.OUq, {
                                    size: 'custom',
                                    width: 29,
                                    height: 29,
                                    color: 'currentColor',
                                    className: F.mediaIcon
                                })
                        ]
                    }),
                t.length > I.Vn &&
                    (0, r.jsx)(X, {
                        text: (t.length - I.Vn).toString(),
                        icon: d.XBm,
                        pillClassName: F.moreImagesPill,
                        iconClassName: F.moreImagesPillIcon,
                        textClassName: F.moreImagesPillText
                    })
            ]
        });
    });
function X(e) {
    let { text: t, icon: n, pillClassName: i, iconClassName: l, textClassName: a } = e;
    return (0, r.jsxs)('div', {
        className: i,
        children: [
            (0, r.jsx)(n, {
                className: l,
                color: 'currentColor'
            }),
            (0, r.jsxs)(d.Text, {
                variant: 'text-xs/medium',
                className: a,
                children: ['+', t]
            })
        ]
    });
}
function W(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: s, hasUnreads: o } = e,
        [c, u] = (0, T.rI)(s - 2 * T.LT),
        { content: m } = (0, O.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !0
        }),
        { shouldRenderTagsRow: h } = (0, k.DM)({
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
        f = o ? F.textContentUnread : F.textContentRead;
    return (0, r.jsxs)('div', {
        className: F.contentPreview,
        style: g,
        children: [
            (0, r.jsxs)('div', {
                className: F.content,
                children: [
                    l &&
                        null == n &&
                        (0, r.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: o ? 'header-secondary' : 'text-muted',
                            children: L.intl.string(L.t.mE3KJC)
                        }),
                    l &&
                        null != n &&
                        (0, r.jsx)(b.ZP, {
                            message: n,
                            content: m,
                            className: f
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(F.textContentFooter, { [F.noTags]: !h }),
                children: h
                    ? (0, r.jsx)(k.ZP, {
                          channel: t,
                          tagsClassName: F.tagPill,
                          className: F.__invalid_row
                      })
                    : null
            })
        ]
    });
}
