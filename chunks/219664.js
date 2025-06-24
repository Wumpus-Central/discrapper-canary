n.d(t, { Z: () => H }), n(388685);
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
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
    w = n(456269),
    S = n(109590),
    N = n(368844),
    P = n(73315),
    T = n(404616),
    I = n(510060),
    E = n(983200),
    R = n(196255),
    k = n(858543),
    M = n(482062),
    Z = n(883728),
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
let H = a.memo(function (e) {
    let { id: t, threadId: n, goToThread: a, overrideMedia: l, className: i, coords: s, gridCoords: c, gridSectionBoundaries: d, observePostVisibilityAnalytics: u } = e,
        m = (0, o.e7)([y.Z], () => y.Z.getChannel(n));
    return null == m
        ? null
        : (0, r.jsx)(U, {
              id: t,
              channel: m,
              goToThread: a,
              overrideMedia: l,
              className: i,
              coords: s,
              gridCoords: c,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: d
          });
});
function U(e) {
    let { id: t, channel: n, goToThread: l, overrideMedia: u, className: m, coords: h, gridCoords: g, gridSectionBoundaries: f, observePostVisibilityAnalytics: x } = e,
        p = (0, o.e7)([y.Z], () => y.Z.getChannel(n.parent_id)),
        j = n.id,
        v = a.useRef(null),
        P = (0, o.e7)([_.ZP], () => _.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: E, loaded: B } = (0, S.cl)(n),
        { firstMedia: H } = (0, w.mX)({
            firstMessage: E,
            formatInline: !1,
            noStyleAndInteraction: !1
        }),
        { messageCountText: U } = (0, w.nP)(n),
        { isNew: G, hasUnreads: q } = (0, w.J$)(n),
        X = a.useRef(null),
        { handleLeftClick: J, handleRightClick: Y } = (0, Z.Z)({
            facepileRef: X,
            goToThread: l,
            channel: n
        });
    a.useEffect(() => {
        null == x || x(v.current, j);
    }, [x, j]);
    let Q = (0, o.e7)([O.Z], () => O.Z.can(L.Plq.MANAGE_MESSAGES, n)),
        $ = C.QK.useSetting(),
        ee = C.cC.useSetting(),
        et = (0, b.Z)(ee, Q),
        en = (0, N.aU)(E, p, !1),
        [er, ea] = (0, I.rI)(h.width - 2 * I.LT),
        el = (0, w.xw)(n, s.z.CREATION_DATE, A.R6.POSTED_DURATION_AGO),
        ei = (0, T.NN)(n),
        es = (null == E ? void 0 : E.blocked) || null == (null != u ? u : H),
        eo = (0, M.nX)({
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
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(eo, ['onFocus']),
        eu = n.isMediaPost();
    return (0, r.jsxs)('li', {
        ref: v,
        onClick: J,
        onFocus: ec,
        onContextMenu: Y,
        className: i()(D.container, m, { [D.isOpen]: P }),
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
                                        children: el
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
                            children: ei
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
                                      containerHeight: eu ? (9 / 16) * er : ea,
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
    let { channel: t, facepileRef: n, firstMessage: a } = e,
        l = (0, m.Q)(t.id),
        i = (null == a ? void 0 : a.reactions) != null && a.reactions.length > 0;
    return (0, r.jsxs)('div', {
        className: D.forumPostControls,
        children: [
            (0, r.jsxs)('div', {
                className: D.controlsGroup,
                children: [
                    (0, r.jsx)('div', {
                        className: D.messageCountContainer,
                        children: (0, r.jsx)(T.m9, {
                            channel: t,
                            iconSize: 16,
                            showReadState: !0
                        })
                    }),
                    l.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('span', {
                                      className: D.bullet,
                                      children: '\u2022'
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: D.typing,
                                      children: [
                                          (0, r.jsx)(T.og, {
                                              channel: t,
                                              userIds: l,
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
                    i || null == a
                        ? null
                        : (0, r.jsx)(T.kZ, {
                              firstMessage: a,
                              channel: t
                          }),
                    null == a
                        ? null
                        : (0, r.jsx)(T.au, {
                              firstMessage: a,
                              channel: t
                          })
                ]
            })
        ]
    });
}
let G = (e) => e.preventDefault(),
    q = a.memo(function (e) {
        return (0, r.jsx)(r.Fragment, { children: (0, v.Yi)(B(z({}, e), { analyticsSource: 'ForumPostMediaPreviewImage' })) });
    }),
    W = a.memo(function (e) {
        let { mediaAttachments: t, globalSpoilerRenderSetting: n, containerWidth: l, containerHeight: s, canAutoPlay: o, shouldMaintainAspectRatio: c = !1 } = e,
            { containsVideo: u, containsGif: m } = a.useMemo(() => (0, N.cp)(t), [t]),
            b = a.useMemo(() => t.slice(E.$x, E.GV), [t]),
            j = (0, E.tu)({
                numAttachments: b.length,
                containerWidth: l,
                containerHeight: s
            }),
            v = (0, E.S$)({
                imageContainerStyles: j,
                containerWidth: l,
                containerHeight: s
            }),
            C = (0, f.kh)(g.n.GUILD),
            _ = a.useMemo(
                () =>
                    b.map((e, t) => {
                        var a;
                        let [l, s] = (0, p.As)(e, !n, C),
                            g = (0, p.MC)(s),
                            f = B(z({}, v[t]), {
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && l ? g : e.alt,
                                onClick: G,
                                shouldRenderAccessory: !m && !u
                            }),
                            b = (0, x.d$)(e.src) ? ''.concat(e.src, '?format=png') : e.src,
                            _ = o && !l ? e.src : b;
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
                                                  src: _,
                                                  backgroundSrc: b,
                                                  aspectRatio: f.maxWidth / f.maxHeight,
                                                  alt: null != (a = f.alt) ? a : '',
                                                  className: i()(D.mediaPostContainer, { [D.obscured]: l }),
                                                  imageChildClassName: D.mediaPostThumbnail
                                              })
                                          )
                                        : e.src.startsWith('data:')
                                          ? (0, r.jsx)(
                                                d.Eep,
                                                B(z({}, f), {
                                                    className: D.mediaContainer,
                                                    imageClassName: i()(D.thumbnailOverride, { [D.obscured]: l })
                                                })
                                            )
                                          : (0, r.jsx)(
                                                q,
                                                B(z({}, f), {
                                                    autoPlay: o && !l,
                                                    containerClassName: D.mosaicMediaContainer,
                                                    imageClassName: i()(D.imageCover, { [D.obscured]: l }),
                                                    responsive: !0
                                                })
                                            ),
                                    l &&
                                        (0, r.jsx)('div', {
                                            className: D.obscuredTagContainer,
                                            children: (0, r.jsx)(P.Z, {
                                                obscureReason: s,
                                                iconClassname: D.obscuredTag
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
            className: D.bodyMedia,
            style: {
                width: l,
                height: s
            },
            children: [
                _,
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
    let { text: t, icon: n, pillClassName: a, iconClassName: l, textClassName: i } = e;
    return (0, r.jsxs)('div', {
        className: a,
        children: [
            (0, r.jsx)(n, {
                className: l,
                color: 'currentColor'
            }),
            (0, r.jsxs)(d.Text, {
                variant: 'text-xs/medium',
                className: i,
                children: ['+', t]
            })
        ]
    });
}
function K(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: s, hasUnreads: o } = e,
        c = C.jU.useSetting(),
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
        f = a.useMemo(
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
                    l &&
                        null == n &&
                        (0, r.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: o ? 'header-secondary' : 'text-muted',
                            children: F.intl.string(F.t.mE3KJC)
                        }),
                    l &&
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
                className: i()(D.textContentFooter, { [D.noTags]: !g }),
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
