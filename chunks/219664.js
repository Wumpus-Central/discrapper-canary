(n.d(t, { Z: () => U }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(683860),
    o = n(442837),
    c = n(692547),
    d = n(481060),
    u = n(738619),
    m = n(824578),
    h = n(841762),
    g = n(991621),
    f = n(629710),
    x = n(406432),
    p = n(169525),
    b = n(255269),
    j = n(930282),
    v = n(524444),
    C = n(695346),
    _ = n(433355),
    y = n(592125),
    O = n(496675),
    w = n(699516),
    S = n(456269),
    T = n(109590),
    N = n(368844),
    P = n(73315),
    I = n(404616),
    E = n(510060),
    R = n(983200),
    M = n(196255),
    Z = n(858543),
    k = n(482062),
    A = n(883728),
    L = n(710352),
    F = n(981631),
    D = n(388032),
    z = n(365494);
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function H(e, t) {
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
let U = i.memo(function (e) {
    let { id: t, threadId: n, goToThread: i, overrideMedia: a, className: l, coords: s, gridCoords: c, gridSectionBoundaries: d, observePostVisibilityAnalytics: u } = e,
        m = (0, o.e7)([y.Z], () => y.Z.getChannel(n));
    return null == m
        ? null
        : (0, r.jsx)(V, {
              id: t,
              channel: m,
              goToThread: i,
              overrideMedia: a,
              className: l,
              coords: s,
              gridCoords: c,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: d
          });
});
function V(e) {
    let { id: t, channel: n, goToThread: a, overrideMedia: u, className: m, coords: h, gridCoords: g, gridSectionBoundaries: f, observePostVisibilityAnalytics: x } = e,
        p = n.id,
        b = i.useRef(null),
        j = (0, o.e7)([_.ZP], () => _.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: v, loaded: C } = (0, T.cl)(n),
        { messageCountText: y } = (0, S.nP)(n),
        { isNew: O, hasUnreads: w } = (0, S.J$)(n),
        N = i.useRef(null),
        { handleLeftClick: P, handleRightClick: R } = (0, A.Z)({
            facepileRef: N,
            goToThread: a,
            channel: n
        });
    i.useEffect(() => {
        null == x || x(b.current, p);
    }, [x, p]);
    let Z = (0, S.xw)(n, s.z.CREATION_DATE, L.R6.POSTED_DURATION_AGO),
        F = (0, I.NN)(n),
        H = (0, k.nX)({
            id: t,
            row: g.row,
            column: g.column,
            section: g.section,
            boundaries: f
        }),
        { onFocus: U } = H,
        V = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(H, ['onFocus']);
    return (0, r.jsxs)('li', {
        ref: b,
        onClick: P,
        onFocus: U,
        onContextMenu: R,
        className: l()(z.container, m, { [z.isOpen]: j }),
        style: B({}, h),
        children: [
            (0, r.jsx)(
                d.P3F,
                B(
                    {
                        onClick: P,
                        focusProps: { ringTarget: b },
                        onContextMenu: R,
                        'aria-label': D.intl.formatToPlainString(D.t.pgYN6e, {
                            title: n.name,
                            count: y
                        }),
                        className: z.focusTarget
                    },
                    V
                )
            ),
            (0, r.jsxs)('div', {
                className: z.header,
                children: [
                    (0, r.jsxs)('div', {
                        className: z.authorRow,
                        children: [
                            (0, r.jsxs)('div', {
                                className: z.rowGroup,
                                children: [
                                    (0, r.jsx)(M.Z, {
                                        channel: n,
                                        message: v
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: z.postCreationTimestamp,
                                        children: Z
                                    })
                                ]
                            }),
                            O
                                ? (0, r.jsx)(d.IGR, {
                                      className: z.newBadge,
                                      color: c.Z.unsafe_rawColors.BRAND_260.css,
                                      text: D.intl.string(D.t.y2b7CA)
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(d.y5t, {
                        children: (0, r.jsx)(d.X6q, {
                            variant: 'heading-md/extrabold',
                            className: z.title,
                            color: w ? 'header-primary' : 'text-muted',
                            style: { width: ''.concat(h.width - 2 * E.I8, 'px') },
                            children: F
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: z.postBody,
                children: (0, r.jsx)(d.Rny, {
                    children: (0, r.jsx)(G, {
                        channel: n,
                        firstMessage: v,
                        isFirstMessageLoaded: C,
                        overrideMedia: u,
                        coords: h
                    })
                })
            }),
            (0, r.jsx)('div', {
                className: z.footer,
                children: (0, r.jsx)(d.Rny, {
                    children: (0, r.jsx)(W, {
                        channel: n,
                        firstMessage: v,
                        facepileRef: N
                    })
                })
            })
        ]
    });
}
function G(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: i, overrideMedia: a, coords: l } = e,
        { isBlocked: s, isIgnored: c } = (0, o.cj)([w.Z], () => ({
            isBlocked: null != n && w.Z.isBlockedForMessage(n),
            isIgnored: null != n && w.Z.isIgnoredForMessage(n)
        }));
    return s
        ? (0, r.jsx)($, {
              message: D.intl.string(D.t.Lkp2fH),
              containerWidth: l.width,
              channel: t
          })
        : c
          ? (0, r.jsx)($, {
                message: D.intl.string(D.t.yWK7ZG),
                containerWidth: l.width,
                channel: t
            })
          : (0, r.jsx)(q, {
                channel: t,
                firstMessage: n,
                isFirstMessageLoaded: i,
                overrideMedia: a,
                coords: l
            });
}
function q(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: i, overrideMedia: a, coords: l } = e,
        s = (0, o.e7)([y.Z], () => y.Z.getChannel(t.parent_id)),
        { firstMedia: c } = (0, S.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !1
        }),
        { hasUnreads: d } = (0, S.J$)(t),
        u = (0, o.e7)([O.Z], () => O.Z.can(F.Plq.MANAGE_MESSAGES, t)),
        m = C.QK.useSetting(),
        h = C.cC.useSetting(),
        g = (0, b.Z)(h, u),
        f = (0, N.aU)(n, s, !1),
        [x, p] = (0, E.rI)(l.width - 2 * E.LT),
        j = (null == n ? void 0 : n.blocked) || null == (null != a ? a : c),
        v = t.isMediaPost();
    return j
        ? (0, r.jsx)(Q, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: i,
              containerWidth: l.width,
              hasUnreads: d
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(J, {
                      mediaAttachments: f,
                      globalSpoilerRenderSetting: g,
                      containerWidth: x,
                      containerHeight: v ? (9 / 16) * x : p,
                      canAutoPlay: m,
                      shouldMaintainAspectRatio: v
                  }),
                  (0, r.jsx)('div', {
                      className: z.tagsRow,
                      children: (0, r.jsx)(Z.ZP, {
                          channel: t,
                          tagsClassName: z.tagPill
                      })
                  })
              ]
          });
}
function W(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        a = (0, m.Q)(t.id),
        l = (null == i ? void 0 : i.reactions) != null && i.reactions.length > 0;
    return (0, r.jsxs)('div', {
        className: z.forumPostControls,
        children: [
            (0, r.jsxs)('div', {
                className: z.controlsGroup,
                children: [
                    (0, r.jsx)('div', {
                        className: z.messageCountContainer,
                        children: (0, r.jsx)(I.m9, {
                            channel: t,
                            iconSize: 16,
                            showReadState: !0
                        })
                    }),
                    a.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('span', {
                                      className: z.bullet,
                                      children: '\u2022'
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: z.typing,
                                      children: [
                                          (0, r.jsx)(I.og, {
                                              channel: t,
                                              userIds: a,
                                              facepileRef: n
                                          }),
                                          (0, r.jsx)('div', {
                                              className: z.dots,
                                              children: (0, r.jsx)(d.bbz, {
                                                  themed: !0,
                                                  dotRadius: 2
                                              })
                                          }),
                                          (0, r.jsx)(u.ZP, {
                                              channel: t,
                                              className: z.typingUsers,
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
                className: z.controlsGroup,
                children: [
                    l || null == i
                        ? null
                        : (0, r.jsx)(I.kZ, {
                              firstMessage: i,
                              channel: t
                          }),
                    null == i
                        ? null
                        : (0, r.jsx)(I.au, {
                              firstMessage: i,
                              channel: t
                          })
                ]
            })
        ]
    });
}
let X = (e) => e.preventDefault(),
    K = i.memo(function (e) {
        return (0, r.jsx)(r.Fragment, { children: (0, v.Yi)(H(B({}, e), { analyticsSource: 'ForumPostMediaPreviewImage' })) });
    }),
    J = i.memo(function (e) {
        let { mediaAttachments: t, globalSpoilerRenderSetting: n, containerWidth: a, containerHeight: s, canAutoPlay: o, shouldMaintainAspectRatio: c = !1 } = e,
            { containsVideo: u, containsGif: m } = i.useMemo(() => (0, N.cp)(t), [t]),
            b = i.useMemo(() => t.slice(R.$x, R.GV), [t]),
            j = (0, R.tu)({
                numAttachments: b.length,
                containerWidth: a,
                containerHeight: s
            }),
            v = (0, R.S$)({
                imageContainerStyles: j,
                containerWidth: a,
                containerHeight: s
            }),
            C = (0, f.kh)(g.n.GUILD),
            _ = i.useMemo(
                () =>
                    b.map((e, t) => {
                        var i;
                        let [a, s] = (0, p.As)(e, !n, C),
                            g = (0, p.MC)(s),
                            f = H(B({}, v[t]), {
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && a ? g : e.alt,
                                onClick: X,
                                shouldRenderAccessory: !m && !u
                            }),
                            b = (0, x.d$)(e.src) ? ''.concat(e.src, '?format=png') : e.src,
                            _ = o && !a ? e.src : b;
                        return (0, r.jsxs)(
                            'div',
                            {
                                className: z.bodyMediaFrame,
                                style: j[t],
                                children: [
                                    c
                                        ? (0, r.jsx)(
                                              h.Z,
                                              H(B({}, f), {
                                                  src: _,
                                                  backgroundSrc: b,
                                                  aspectRatio: f.maxWidth / f.maxHeight,
                                                  alt: null != (i = f.alt) ? i : '',
                                                  className: l()(z.mediaPostContainer, { [z.obscured]: a }),
                                                  imageChildClassName: z.mediaPostThumbnail
                                              })
                                          )
                                        : e.src.startsWith('data:')
                                          ? (0, r.jsx)(
                                                d.Eep,
                                                H(B({}, f), {
                                                    className: z.mediaContainer,
                                                    imageClassName: l()(z.thumbnailOverride, { [z.obscured]: a })
                                                })
                                            )
                                          : (0, r.jsx)(
                                                K,
                                                H(B({}, f), {
                                                    autoPlay: o && !a,
                                                    containerClassName: z.mosaicMediaContainer,
                                                    imageClassName: l()(z.imageCover, { [z.obscured]: a }),
                                                    responsive: !0
                                                })
                                            ),
                                    a &&
                                        (0, r.jsx)('div', {
                                            className: z.obscuredTagContainer,
                                            children: (0, r.jsx)(P.Z, {
                                                obscureReason: s,
                                                iconClassname: z.obscuredTag
                                            })
                                        })
                                ]
                            },
                            e.src
                        );
                    }),
                [o, m, u, n, j, v, b, c, C]
            );
        return (0, r.jsxs)('div', {
            className: z.bodyMedia,
            style: {
                width: a,
                height: s
            },
            children: [
                _,
                (m || u) &&
                    (0, r.jsxs)('div', {
                        className: z.mediaIconsRow,
                        children: [
                            u &&
                                (0, r.jsx)(d.o1U, {
                                    color: 'currentColor',
                                    size: 'custom',
                                    width: 22,
                                    height: 22,
                                    className: z.mediaIcon
                                }),
                            m &&
                                (0, r.jsx)(d.OUq, {
                                    size: 'custom',
                                    width: 29,
                                    height: 29,
                                    color: 'currentColor',
                                    className: z.mediaIcon
                                })
                        ]
                    }),
                t.length > R.Vn &&
                    (0, r.jsx)(Y, {
                        text: (t.length - R.Vn).toString(),
                        icon: d.XBm,
                        pillClassName: z.moreImagesPill,
                        iconClassName: z.moreImagesPillIcon,
                        textClassName: z.moreImagesPillText
                    })
            ]
        });
    });
function Y(e) {
    let { text: t, icon: n, pillClassName: i, iconClassName: a, textClassName: l } = e;
    return (0, r.jsxs)('div', {
        className: i,
        children: [
            (0, r.jsx)(n, {
                className: a,
                color: 'currentColor'
            }),
            (0, r.jsxs)(d.Text, {
                variant: 'text-xs/medium',
                className: l,
                children: ['+', t]
            })
        ]
    });
}
function Q(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: a, containerWidth: s, hasUnreads: o } = e,
        c = C.jU.useSetting(),
        [u, m] = (0, E.rI)(s - 2 * E.LT),
        { content: h } = (0, S.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !0
        }),
        { shouldRenderTagsRow: g } = (0, Z.DM)({
            channel: t,
            isNew: !1
        }),
        f = i.useMemo(
            () => ({
                width: u,
                height: m
            }),
            [u, m]
        ),
        x = o ? z.textContentUnread : z.textContentRead;
    return (0, r.jsxs)('div', {
        className: z.contentPreview,
        style: f,
        children: [
            (0, r.jsxs)('div', {
                className: z.content,
                children: [
                    a &&
                        null == n &&
                        (0, r.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: o ? 'header-secondary' : 'text-muted',
                            children: D.intl.string(D.t.mE3KJC)
                        }),
                    a &&
                        null != n &&
                        (0, r.jsx)(j.ZP, {
                            message: n,
                            content: h,
                            className: x,
                            compact: c
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: l()(z.textContentFooter, { [z.noTags]: !g }),
                children: g
                    ? (0, r.jsx)(Z.ZP, {
                          channel: t,
                          tagsClassName: z.tagPill
                      })
                    : null
            })
        ]
    });
}
function $(e) {
    let { message: t, containerWidth: n, channel: a } = e,
        [s, o] = (0, E.rI)(n - 2 * E.LT),
        { shouldRenderTagsRow: c } = (0, Z.DM)({
            channel: a,
            isNew: !1
        }),
        u = i.useMemo(
            () => ({
                width: s,
                height: o
            }),
            [s, o]
        );
    return (0, r.jsxs)('div', {
        className: z.contentPreview,
        style: u,
        children: [
            (0, r.jsx)('div', {
                className: z.content,
                children: (0, r.jsx)(d.Text, {
                    className: z.blockedMessage,
                    variant: 'text-sm/medium',
                    color: 'text-muted',
                    children: t
                })
            }),
            (0, r.jsx)('div', {
                className: l()(z.textContentFooter, { [z.noTags]: !c }),
                children: c
                    ? (0, r.jsx)(Z.ZP, {
                          channel: a,
                          tagsClassName: z.tagPill
                      })
                    : null
            })
        ]
    });
}
