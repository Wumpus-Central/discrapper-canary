n.d(t, { Z: () => z }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
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
    N = n(456269),
    O = n(109590),
    w = n(368844),
    S = n(73315),
    P = n(404616),
    T = n(510060),
    I = n(983200),
    E = n(196255),
    k = n(858543),
    R = n(482062),
    Z = n(883728),
    M = n(710352),
    A = n(981631),
    L = n(388032),
    W = n(365494);
function F(e) {
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
let z = a.memo(function (e) {
    let { id: t, threadId: n, goToThread: a, overrideMedia: i, className: l, coords: s, gridCoords: c, gridSectionBoundaries: d, observePostVisibilityAnalytics: u } = e,
        m = (0, o.e7)([_.Z], () => _.Z.getChannel(n));
    return null == m
        ? null
        : (0, r.jsx)(B, {
              id: t,
              channel: m,
              goToThread: a,
              overrideMedia: i,
              className: l,
              coords: s,
              gridCoords: c,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: d
          });
});
function B(e) {
    let { id: t, channel: n, goToThread: i, overrideMedia: u, className: m, coords: h, gridCoords: g, gridSectionBoundaries: f, observePostVisibilityAnalytics: p } = e,
        b = (0, o.e7)([_.Z], () => _.Z.getChannel(n.parent_id)),
        j = n.id,
        S = a.useRef(null),
        I = (0, o.e7)([C.ZP], () => C.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: D, loaded: z } = (0, O.cl)(n),
        { firstMedia: B } = (0, N.mX)({
            firstMessage: D,
            formatInline: !1,
            noStyleAndInteraction: !1
        }),
        { messageCountText: U } = (0, N.nP)(n),
        { isNew: V, hasUnreads: q } = (0, N.J$)(n),
        K = a.useRef(null),
        { handleLeftClick: J, handleRightClick: Y } = (0, Z.Z)({
            facepileRef: K,
            goToThread: i,
            channel: n
        });
    a.useEffect(() => {
        null == p || p(S.current, j);
    }, [p, j]);
    let Q = (0, o.e7)([y.Z], () => y.Z.can(A.Plq.MANAGE_MESSAGES, n)),
        $ = v.QK.useSetting(),
        ee = v.cC.useSetting(),
        et = (0, x.Z)(ee, Q),
        en = (0, w.aU)(D, b, !1),
        [er, ea] = (0, T.rI)(h.width - 2 * T.LT),
        ei = (0, N.xw)(n, s.z.CREATION_DATE, M.R6.POSTED_DURATION_AGO),
        el = (0, P.NN)(n),
        es = (null == D ? void 0 : D.blocked) || null == (null != u ? u : B),
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
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(eo, ['onFocus']),
        eu = n.isMediaPost();
    return (0, r.jsxs)('li', {
        ref: S,
        onClick: J,
        onFocus: ec,
        onContextMenu: Y,
        className: l()(W.container, m, { [W.isOpen]: I }),
        style: F({}, h),
        children: [
            (0, r.jsx)(
                d.P3F,
                F(
                    {
                        onClick: J,
                        focusProps: { ringTarget: S },
                        onContextMenu: Y,
                        'aria-label': L.NW.formatToPlainString(L.t.pgYN6e, {
                            title: n.name,
                            count: U
                        }),
                        className: W.focusTarget
                    },
                    ed
                )
            ),
            (0, r.jsxs)('div', {
                className: W.header,
                children: [
                    (0, r.jsxs)('div', {
                        className: W.authorRow,
                        children: [
                            (0, r.jsxs)('div', {
                                className: W.rowGroup,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        channel: n,
                                        message: D
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: W.postCreationTimestamp,
                                        children: ei
                                    })
                                ]
                            }),
                            V
                                ? (0, r.jsx)(d.IGR, {
                                      className: W.newBadge,
                                      color: c.Z.unsafe_rawColors.BRAND_260.css,
                                      text: L.NW.string(L.t.y2b7CA)
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(d.y5t, {
                        children: (0, r.jsx)(d.X6q, {
                            variant: 'heading-md/extrabold',
                            className: W.title,
                            color: q ? 'header-primary' : 'text-muted',
                            style: { width: ''.concat(h.width - 2 * T.I8, 'px') },
                            children: el
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: W.postBody,
                children: (0, r.jsx)(d.Rny, {
                    children: es
                        ? (0, r.jsx)(X, {
                              channel: n,
                              firstMessage: D,
                              isFirstMessageLoaded: z,
                              containerWidth: h.width,
                              hasUnreads: q
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(G, {
                                      mediaAttachments: en,
                                      globalSpoilerRenderSetting: et,
                                      containerWidth: er,
                                      containerHeight: eu ? (9 / 16) * er : ea,
                                      canAutoPlay: $,
                                      shouldMaintainAspectRatio: eu
                                  }),
                                  (0, r.jsx)('div', {
                                      className: W.tagsRow,
                                      children: (0, r.jsx)(k.ZP, {
                                          channel: n,
                                          tagsClassName: W.tagPill
                                      })
                                  })
                              ]
                          })
                })
            }),
            (0, r.jsx)('div', {
                className: W.footer,
                children: (0, r.jsx)(d.Rny, {
                    children: (0, r.jsx)(H, {
                        channel: n,
                        firstMessage: D,
                        facepileRef: K
                    })
                })
            })
        ]
    });
}
function H(e) {
    let { channel: t, facepileRef: n, firstMessage: a } = e,
        i = (0, m.Q)(t.id),
        l = (null == a ? void 0 : a.reactions) != null && a.reactions.length > 0;
    return (0, r.jsxs)('div', {
        className: W.forumPostControls,
        children: [
            (0, r.jsxs)('div', {
                className: W.controlsGroup,
                children: [
                    (0, r.jsx)('div', {
                        className: W.messageCountContainer,
                        children: (0, r.jsx)(P.m9, {
                            channel: t,
                            iconSize: 16,
                            showReadState: !0
                        })
                    }),
                    i.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('span', {
                                      className: W.bullet,
                                      children: '\u2022'
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: W.typing,
                                      children: [
                                          (0, r.jsx)(P.og, {
                                              channel: t,
                                              userIds: i,
                                              facepileRef: n
                                          }),
                                          (0, r.jsx)('div', {
                                              className: W.dots,
                                              children: (0, r.jsx)(d.bbz, {
                                                  themed: !0,
                                                  dotRadius: 2
                                              })
                                          }),
                                          (0, r.jsx)(u.Z, {
                                              channel: t,
                                              className: W.typingUsers,
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
                className: W.controlsGroup,
                children: [
                    l || null == a
                        ? null
                        : (0, r.jsx)(P.kZ, {
                              firstMessage: a,
                              channel: t
                          }),
                    null == a
                        ? null
                        : (0, r.jsx)(P.au, {
                              firstMessage: a,
                              channel: t
                          })
                ]
            })
        ]
    });
}
let U = (e) => e.preventDefault(),
    V = a.memo(function (e) {
        return (0, r.jsx)(r.Fragment, { children: (0, j.Yi)(D(F({}, e), { analyticsSource: 'ForumPostMediaPreviewImage' })) });
    }),
    G = a.memo(function (e) {
        let { mediaAttachments: t, globalSpoilerRenderSetting: n, containerWidth: i, containerHeight: s, canAutoPlay: o, shouldMaintainAspectRatio: c = !1 } = e,
            { containsVideo: u, containsGif: m } = a.useMemo(() => (0, w.cp)(t), [t]),
            x = a.useMemo(() => t.slice(I.$x, I.GV), [t]),
            b = (0, I.tu)({
                numAttachments: x.length,
                containerWidth: i,
                containerHeight: s
            }),
            j = (0, I.S$)({
                imageContainerStyles: b,
                containerWidth: i,
                containerHeight: s
            }),
            v = (0, g.m)(),
            C = a.useMemo(
                () =>
                    x.map((e, t) => {
                        var a;
                        let [i, s] = (0, p.As)(e, !n, v),
                            g = (0, p.MC)(s),
                            x = D(F({}, j[t]), {
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && i ? g : e.alt,
                                onClick: U,
                                shouldRenderAccessory: !m && !u
                            }),
                            C = (0, f.d$)(e.src) ? ''.concat(e.src, '?format=png') : e.src,
                            _ = o && !i ? e.src : C;
                        return (0, r.jsxs)(
                            'div',
                            {
                                className: W.bodyMediaFrame,
                                style: b[t],
                                children: [
                                    c
                                        ? (0, r.jsx)(
                                              h.Z,
                                              D(F({}, x), {
                                                  src: _,
                                                  backgroundSrc: C,
                                                  aspectRatio: x.maxWidth / x.maxHeight,
                                                  alt: null != (a = x.alt) ? a : '',
                                                  className: l()(W.mediaPostContainer, { [W.obscured]: i }),
                                                  imageChildClassName: W.mediaPostThumbnail
                                              })
                                          )
                                        : e.src.startsWith('data:')
                                          ? (0, r.jsx)(
                                                d.Eep,
                                                D(F({}, x), {
                                                    className: W.mediaContainer,
                                                    imageClassName: l()(W.thumbnailOverride, { [W.obscured]: i })
                                                })
                                            )
                                          : (0, r.jsx)(
                                                V,
                                                D(F({}, x), {
                                                    autoPlay: o && !i,
                                                    containerClassName: W.mosaicMediaContainer,
                                                    imageClassName: l()(W.imageCover, { [W.obscured]: i }),
                                                    responsive: !0
                                                })
                                            ),
                                    i &&
                                        (0, r.jsx)('div', {
                                            className: W.obscuredTagContainer,
                                            children: (0, r.jsx)(S.Z, {
                                                obscureReason: s,
                                                iconClassname: W.obscuredTag
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
            className: W.bodyMedia,
            style: {
                width: i,
                height: s
            },
            children: [
                C,
                (m || u) &&
                    (0, r.jsxs)('div', {
                        className: W.mediaIconsRow,
                        children: [
                            u &&
                                (0, r.jsx)(d.o1U, {
                                    color: 'currentColor',
                                    size: 'custom',
                                    width: 22,
                                    height: 22,
                                    className: W.mediaIcon
                                }),
                            m &&
                                (0, r.jsx)(d.OUq, {
                                    size: 'custom',
                                    width: 29,
                                    height: 29,
                                    color: 'currentColor',
                                    className: W.mediaIcon
                                })
                        ]
                    }),
                t.length > I.Vn &&
                    (0, r.jsx)(q, {
                        text: (t.length - I.Vn).toString(),
                        icon: d.XBm,
                        pillClassName: W.moreImagesPill,
                        iconClassName: W.moreImagesPillIcon,
                        textClassName: W.moreImagesPillText
                    })
            ]
        });
    });
function q(e) {
    let { text: t, icon: n, pillClassName: a, iconClassName: i, textClassName: l } = e;
    return (0, r.jsxs)('div', {
        className: a,
        children: [
            (0, r.jsx)(n, {
                className: i,
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
function X(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: i, containerWidth: s, hasUnreads: o } = e,
        [c, u] = (0, T.rI)(s - 2 * T.LT),
        { content: m } = (0, N.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !0
        }),
        { shouldRenderTagsRow: h } = (0, k.DM)({
            channel: t,
            isNew: !1
        }),
        g = a.useMemo(
            () => ({
                width: c,
                height: u
            }),
            [c, u]
        ),
        f = o ? W.textContentUnread : W.textContentRead;
    return (0, r.jsxs)('div', {
        className: W.contentPreview,
        style: g,
        children: [
            (0, r.jsxs)('div', {
                className: W.content,
                children: [
                    i &&
                        null == n &&
                        (0, r.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: o ? 'header-secondary' : 'text-muted',
                            children: L.NW.string(L.t.mE3KJC)
                        }),
                    i &&
                        null != n &&
                        (0, r.jsx)(b.ZP, {
                            message: n,
                            content: m,
                            className: f
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: l()(W.textContentFooter, { [W.noTags]: !h }),
                children: h
                    ? (0, r.jsx)(k.ZP, {
                          channel: t,
                          tagsClassName: W.tagPill,
                          className: W.__invalid_row
                      })
                    : null
            })
        ]
    });
}
