n.d(t, { Z: () => H }), n(388685);
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
    _ = n(695346),
    C = n(433355),
    y = n(592125),
    O = n(496675),
    w = n(456269),
    S = n(109590),
    N = n(368844),
    T = n(73315),
    P = n(404616),
    I = n(510060),
    E = n(983200),
    R = n(196255),
    k = n(858543),
    Z = n(482062),
    M = n(883728),
    A = n(710352),
    L = n(981631),
    F = n(388032),
    D = n(365494);
function z(e) {
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
function B(e, t) {
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
let H = i.memo(function (e) {
    let { id: t, threadId: n, goToThread: i, overrideMedia: a, className: l, coords: s, gridCoords: c, gridSectionBoundaries: d, observePostVisibilityAnalytics: u } = e,
        m = (0, o.e7)([y.Z], () => y.Z.getChannel(n));
    return null == m
        ? null
        : (0, r.jsx)(U, {
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
function U(e) {
    let { id: t, channel: n, goToThread: a, overrideMedia: u, className: m, coords: h, gridCoords: g, gridSectionBoundaries: f, observePostVisibilityAnalytics: x } = e,
        p = (0, o.e7)([y.Z], () => y.Z.getChannel(n.parent_id)),
        j = n.id,
        v = i.useRef(null),
        T = (0, o.e7)([C.ZP], () => C.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: E, loaded: B } = (0, S.cl)(n),
        { firstMedia: H } = (0, w.mX)({
            firstMessage: E,
            formatInline: !1,
            noStyleAndInteraction: !1
        }),
        { messageCountText: U } = (0, w.nP)(n),
        { isNew: G, hasUnreads: q } = (0, w.J$)(n),
        X = i.useRef(null),
        { handleLeftClick: J, handleRightClick: Y } = (0, M.Z)({
            facepileRef: X,
            goToThread: a,
            channel: n
        });
    i.useEffect(() => {
        null == x || x(v.current, j);
    }, [x, j]);
    let Q = (0, o.e7)([O.Z], () => O.Z.can(L.Plq.MANAGE_MESSAGES, n)),
        $ = _.QK.useSetting(),
        ee = _.cC.useSetting(),
        et = (0, b.Z)(ee, Q),
        en = (0, N.aU)(E, p, !1),
        [er, ei] = (0, I.rI)(h.width - 2 * I.LT),
        ea = (0, w.xw)(n, s.z.CREATION_DATE, A.R6.POSTED_DURATION_AGO),
        el = (0, P.NN)(n),
        es = (null == E ? void 0 : E.blocked) || null == (null != u ? u : H),
        eo = (0, Z.nX)({
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
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(eo, ['onFocus']),
        eu = n.isMediaPost();
    return (0, r.jsxs)('li', {
        ref: v,
        onClick: J,
        onFocus: ec,
        onContextMenu: Y,
        className: l()(D.container, m, { [D.isOpen]: T }),
        style: z({}, h),
        children: [
            (0, r.jsx)(
                d.P3F,
                z(
                    {
                        onClick: J,
                        focusProps: { ringTarget: v },
                        onContextMenu: Y,
                        'aria-label': F.intl.formatToPlainString(F.t.pgYN6e, {
                            title: n.name,
                            count: U
                        }),
                        className: D.focusTarget
                    },
                    ed
                )
            ),
            (0, r.jsxs)('div', {
                className: D.header,
                children: [
                    (0, r.jsxs)('div', {
                        className: D.authorRow,
                        children: [
                            (0, r.jsxs)('div', {
                                className: D.rowGroup,
                                children: [
                                    (0, r.jsx)(R.Z, {
                                        channel: n,
                                        message: E
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: D.postCreationTimestamp,
                                        children: ea
                                    })
                                ]
                            }),
                            G
                                ? (0, r.jsx)(d.IGR, {
                                      className: D.newBadge,
                                      color: c.Z.unsafe_rawColors.BRAND_260.css,
                                      text: F.intl.string(F.t.y2b7CA)
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(d.y5t, {
                        children: (0, r.jsx)(d.X6q, {
                            variant: 'heading-md/extrabold',
                            className: D.title,
                            color: q ? 'header-primary' : 'text-muted',
                            style: { width: ''.concat(h.width - 2 * I.I8, 'px') },
                            children: el
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: D.postBody,
                children: (0, r.jsx)(d.Rny, {
                    children: es
                        ? (0, r.jsx)(K, {
                              channel: n,
                              firstMessage: E,
                              isFirstMessageLoaded: B,
                              containerWidth: h.width,
                              hasUnreads: q
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(W, {
                                      mediaAttachments: en,
                                      globalSpoilerRenderSetting: et,
                                      containerWidth: er,
                                      containerHeight: eu ? (9 / 16) * er : ei,
                                      canAutoPlay: $,
                                      shouldMaintainAspectRatio: eu
                                  }),
                                  (0, r.jsx)('div', {
                                      className: D.tagsRow,
                                      children: (0, r.jsx)(k.ZP, {
                                          channel: n,
                                          tagsClassName: D.tagPill
                                      })
                                  })
                              ]
                          })
                })
            }),
            (0, r.jsx)('div', {
                className: D.footer,
                children: (0, r.jsx)(d.Rny, {
                    children: (0, r.jsx)(V, {
                        channel: n,
                        firstMessage: E,
                        facepileRef: X
                    })
                })
            })
        ]
    });
}
function V(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        a = (0, m.Q)(t.id),
        l = (null == i ? void 0 : i.reactions) != null && i.reactions.length > 0;
    return (0, r.jsxs)('div', {
        className: D.forumPostControls,
        children: [
            (0, r.jsxs)('div', {
                className: D.controlsGroup,
                children: [
                    (0, r.jsx)('div', {
                        className: D.messageCountContainer,
                        children: (0, r.jsx)(P.m9, {
                            channel: t,
                            iconSize: 16,
                            showReadState: !0
                        })
                    }),
                    a.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('span', {
                                      className: D.bullet,
                                      children: '\u2022'
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: D.typing,
                                      children: [
                                          (0, r.jsx)(P.og, {
                                              channel: t,
                                              userIds: a,
                                              facepileRef: n
                                          }),
                                          (0, r.jsx)('div', {
                                              className: D.dots,
                                              children: (0, r.jsx)(d.bbz, {
                                                  themed: !0,
                                                  dotRadius: 2
                                              })
                                          }),
                                          (0, r.jsx)(u.Z, {
                                              channel: t,
                                              className: D.typingUsers,
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
                className: D.controlsGroup,
                children: [
                    l || null == i
                        ? null
                        : (0, r.jsx)(P.kZ, {
                              firstMessage: i,
                              channel: t
                          }),
                    null == i
                        ? null
                        : (0, r.jsx)(P.au, {
                              firstMessage: i,
                              channel: t
                          })
                ]
            })
        ]
    });
}
let G = (e) => e.preventDefault(),
    q = i.memo(function (e) {
        return (0, r.jsx)(r.Fragment, { children: (0, v.Yi)(B(z({}, e), { analyticsSource: 'ForumPostMediaPreviewImage' })) });
    }),
    W = i.memo(function (e) {
        let { mediaAttachments: t, globalSpoilerRenderSetting: n, containerWidth: a, containerHeight: s, canAutoPlay: o, shouldMaintainAspectRatio: c = !1 } = e,
            { containsVideo: u, containsGif: m } = i.useMemo(() => (0, N.cp)(t), [t]),
            b = i.useMemo(() => t.slice(E.$x, E.GV), [t]),
            j = (0, E.tu)({
                numAttachments: b.length,
                containerWidth: a,
                containerHeight: s
            }),
            v = (0, E.S$)({
                imageContainerStyles: j,
                containerWidth: a,
                containerHeight: s
            }),
            _ = (0, f.kh)(g.n.GUILD),
            C = i.useMemo(
                () =>
                    b.map((e, t) => {
                        var i;
                        let [a, s] = (0, p.As)(e, !n, _),
                            g = (0, p.MC)(s),
                            f = B(z({}, v[t]), {
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && a ? g : e.alt,
                                onClick: G,
                                shouldRenderAccessory: !m && !u
                            }),
                            b = (0, x.d$)(e.src) ? ''.concat(e.src, '?format=png') : e.src,
                            C = o && !a ? e.src : b;
                        return (0, r.jsxs)(
                            'div',
                            {
                                className: D.bodyMediaFrame,
                                style: j[t],
                                children: [
                                    c
                                        ? (0, r.jsx)(
                                              h.Z,
                                              B(z({}, f), {
                                                  src: C,
                                                  backgroundSrc: b,
                                                  aspectRatio: f.maxWidth / f.maxHeight,
                                                  alt: null != (i = f.alt) ? i : '',
                                                  className: l()(D.mediaPostContainer, { [D.obscured]: a }),
                                                  imageChildClassName: D.mediaPostThumbnail
                                              })
                                          )
                                        : e.src.startsWith('data:')
                                          ? (0, r.jsx)(
                                                d.Eep,
                                                B(z({}, f), {
                                                    className: D.mediaContainer,
                                                    imageClassName: l()(D.thumbnailOverride, { [D.obscured]: a })
                                                })
                                            )
                                          : (0, r.jsx)(
                                                q,
                                                B(z({}, f), {
                                                    autoPlay: o && !a,
                                                    containerClassName: D.mosaicMediaContainer,
                                                    imageClassName: l()(D.imageCover, { [D.obscured]: a }),
                                                    responsive: !0
                                                })
                                            ),
                                    a &&
                                        (0, r.jsx)('div', {
                                            className: D.obscuredTagContainer,
                                            children: (0, r.jsx)(T.Z, {
                                                obscureReason: s,
                                                iconClassname: D.obscuredTag
                                            })
                                        })
                                ]
                            },
                            e.src
                        );
                    }),
                [o, m, u, n, j, v, b, c, _]
            );
        return (0, r.jsxs)('div', {
            className: D.bodyMedia,
            style: {
                width: a,
                height: s
            },
            children: [
                C,
                (m || u) &&
                    (0, r.jsxs)('div', {
                        className: D.mediaIconsRow,
                        children: [
                            u &&
                                (0, r.jsx)(d.o1U, {
                                    color: 'currentColor',
                                    size: 'custom',
                                    width: 22,
                                    height: 22,
                                    className: D.mediaIcon
                                }),
                            m &&
                                (0, r.jsx)(d.OUq, {
                                    size: 'custom',
                                    width: 29,
                                    height: 29,
                                    color: 'currentColor',
                                    className: D.mediaIcon
                                })
                        ]
                    }),
                t.length > E.Vn &&
                    (0, r.jsx)(X, {
                        text: (t.length - E.Vn).toString(),
                        icon: d.XBm,
                        pillClassName: D.moreImagesPill,
                        iconClassName: D.moreImagesPillIcon,
                        textClassName: D.moreImagesPillText
                    })
            ]
        });
    });
function X(e) {
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
function K(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: a, containerWidth: s, hasUnreads: o } = e,
        c = _.jU.useSetting(),
        [u, m] = (0, I.rI)(s - 2 * I.LT),
        { content: h } = (0, w.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !0
        }),
        { shouldRenderTagsRow: g } = (0, k.DM)({
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
        x = o ? D.textContentUnread : D.textContentRead;
    return (0, r.jsxs)('div', {
        className: D.contentPreview,
        style: f,
        children: [
            (0, r.jsxs)('div', {
                className: D.content,
                children: [
                    a &&
                        null == n &&
                        (0, r.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: o ? 'header-secondary' : 'text-muted',
                            children: F.intl.string(F.t.mE3KJC)
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
                className: l()(D.textContentFooter, { [D.noTags]: !g }),
                children: g
                    ? (0, r.jsx)(k.ZP, {
                          channel: t,
                          tagsClassName: D.tagPill,
                          className: D.__invalid_row
                      })
                    : null
            })
        ]
    });
}
