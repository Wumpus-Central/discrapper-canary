n.d(t, { Z: () => U }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(683860),
    o = n(442837),
    c = n(692547),
    d = n(481060),
    u = n(738619),
    m = n(824578),
    f = n(841762),
    h = n(991621),
    g = n(629710),
    x = n(406432),
    b = n(169525),
    p = n(255269),
    j = n(930282),
    v = n(524444),
    C = n(695346),
    y = n(433355),
    T = n(592125),
    w = n(496675),
    S = n(699516),
    N = n(456269),
    O = n(109590),
    I = n(368844),
    P = n(73315),
    E = n(404616),
    _ = n(510060),
    R = n(983200),
    M = n(196255),
    Z = n(858543),
    k = n(482062),
    A = n(883728),
    L = n(710352),
    F = n(981631),
    D = n(388032),
    H = n(489549);
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
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
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = r.memo(function (e) {
    let {
            id: t,
            threadId: n,
            goToThread: r,
            overrideMedia: i,
            className: l,
            coords: s,
            gridCoords: c,
            gridSectionBoundaries: d,
            observePostVisibilityAnalytics: u,
        } = e,
        m = (0, o.e7)([T.Z], () => T.Z.getChannel(n));
    return null == m
        ? null
        : (0, a.jsx)(G, {
              id: t,
              channel: m,
              goToThread: r,
              overrideMedia: i,
              className: l,
              coords: s,
              gridCoords: c,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: d,
          });
});
function G(e) {
    let {
            id: t,
            channel: n,
            goToThread: i,
            overrideMedia: u,
            className: m,
            coords: f,
            gridCoords: h,
            gridSectionBoundaries: g,
            observePostVisibilityAnalytics: x,
        } = e,
        b = n.id,
        p = r.useRef(null),
        j = (0, o.e7)([y.ZP], () => y.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: v, loaded: C } = (0, O.cl)(n),
        { messageCountText: T } = (0, N.nP)(n),
        { isNew: w, hasUnreads: S } = (0, N.J$)(n),
        I = r.useRef(null),
        { handleLeftClick: P, handleRightClick: R } = (0, A.Z)({
            facepileRef: I,
            goToThread: i,
            channel: n,
        });
    r.useEffect(() => {
        null == x || x(p.current, b);
    }, [x, b]);
    let Z = (0, N.xw)(n, s.z.CREATION_DATE, L.R6.POSTED_DURATION_AGO),
        F = (0, E.NN)(n),
        B = (0, k.nX)({
            id: t,
            row: h.row,
            column: h.column,
            section: h.section,
            boundaries: g,
        }),
        { onFocus: U } = B,
        G = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    (n = i[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(B, ["onFocus"]);
    return (0, a.jsxs)("li", {
        ref: p,
        onClick: P,
        onFocus: U,
        onContextMenu: R,
        className: l()(H.container, m, { [H.isOpen]: j }),
        style: z({}, f),
        children: [
            (0, a.jsx)(
                d.P3F,
                z(
                    {
                        onClick: P,
                        focusProps: { ringTarget: p },
                        onContextMenu: R,
                        "aria-label": D.intl.formatToPlainString(D.t.pgYN6c, {
                            title: n.name,
                            count: T,
                        }),
                        className: H.focusTarget,
                    },
                    G,
                ),
            ),
            (0, a.jsxs)("div", {
                className: H.header,
                children: [
                    (0, a.jsxs)("div", {
                        className: H.authorRow,
                        children: [
                            (0, a.jsxs)("div", {
                                className: H.rowGroup,
                                children: [
                                    (0, a.jsx)(M.Z, {
                                        channel: n,
                                        message: v,
                                    }),
                                    (0, a.jsx)(d.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: H.postCreationTimestamp,
                                        children: Z,
                                    }),
                                ],
                            }),
                            w
                                ? (0, a.jsx)(d.IGR, {
                                      className: H.newBadge,
                                      color: c.Z.unsafe_rawColors.BRAND_260.css,
                                      text: D.intl.string(D.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, a.jsx)(d.y5t, {
                        children: (0, a.jsx)(d.Heading, {
                            variant: "heading-md/extrabold",
                            className: H.title,
                            color: S ? "text-strong" : "text-muted",
                            style: { width: "".concat(f.width - 2 * _.I8, "px") },
                            children: F,
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: H.postBody,
                children: (0, a.jsx)(d.Rny, {
                    children: (0, a.jsx)(V, {
                        channel: n,
                        firstMessage: v,
                        isFirstMessageLoaded: C,
                        overrideMedia: u,
                        coords: f,
                    }),
                }),
            }),
            (0, a.jsx)("div", {
                className: H.footer,
                children: (0, a.jsx)(d.Rny, {
                    children: (0, a.jsx)(q, {
                        channel: n,
                        firstMessage: v,
                        facepileRef: I,
                    }),
                }),
            }),
        ],
    });
}
function V(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: r, overrideMedia: i, coords: l } = e,
        { isBlocked: s, isIgnored: c } = (0, o.cj)([S.Z], () => ({
            isBlocked: null != n && S.Z.isBlockedForMessage(n),
            isIgnored: null != n && S.Z.isIgnoredForMessage(n),
        }));
    return s
        ? (0, a.jsx)($, {
              message: D.intl.string(D.t.Lkp2fB),
              containerWidth: l.width,
              channel: t,
          })
        : c
          ? (0, a.jsx)($, {
                message: D.intl.string(D.t.yWK7ZM),
                containerWidth: l.width,
                channel: t,
            })
          : (0, a.jsx)(W, {
                channel: t,
                firstMessage: n,
                isFirstMessageLoaded: r,
                overrideMedia: i,
                coords: l,
            });
}
function W(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: r, overrideMedia: i, coords: l } = e,
        s = (0, o.e7)([T.Z], () => T.Z.getChannel(t.parent_id)),
        { firstMedia: c } = (0, N.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !1,
        }),
        { hasUnreads: d } = (0, N.J$)(t),
        u = (0, o.e7)([w.Z], () => w.Z.can(F.Plq.MANAGE_MESSAGES, t)),
        m = C.QK.useSetting(),
        f = C.cC.useSetting(),
        h = (0, p.Z)(f, u),
        g = (0, I.aU)(n, s, !1),
        x = t.isMediaPost(),
        [b, j] = (0, _.rI)(l.width - 2 * _.LT, x ? _.Lv.SIXTEEN_BY_NINE : _.Lv.THREE_BY_TWO);
    return (null == n ? void 0 : n.blocked) || null == (null != i ? i : c)
        ? (0, a.jsx)(Q, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: r,
              containerWidth: l.width,
              hasUnreads: d,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(Y, {
                      mediaAttachments: g,
                      globalSpoilerRenderSetting: h,
                      containerWidth: b,
                      containerHeight: j,
                      canAutoPlay: m,
                      shouldMaintainAspectRatio: x,
                  }),
                  (0, a.jsx)("div", {
                      className: H.tagsRow,
                      children: (0, a.jsx)(Z.ZP, {
                          channel: t,
                          tagsClassName: H.tagPill,
                      }),
                  }),
              ],
          });
}
function q(e) {
    let { channel: t, facepileRef: n, firstMessage: r } = e,
        i = (0, m.Q)(t.id),
        l = (null == r ? void 0 : r.reactions) != null && r.reactions.length > 0;
    return (0, a.jsxs)("div", {
        className: H.forumPostControls,
        children: [
            (0, a.jsxs)("div", {
                className: H.controlsGroup,
                children: [
                    (0, a.jsx)("div", {
                        className: H.messageCountContainer,
                        children: (0, a.jsx)(E.m9, {
                            channel: t,
                            iconSize: 16,
                            showReadState: !0,
                        }),
                    }),
                    i.length > 0
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("span", {
                                      className: H.bullet,
                                      children: "\u2022",
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: H.typing,
                                      children: [
                                          (0, a.jsx)(E.og, {
                                              channel: t,
                                              userIds: i,
                                              facepileRef: n,
                                          }),
                                          (0, a.jsx)("div", {
                                              className: H.dots,
                                              children: (0, a.jsx)(d.bbz, {
                                                  themed: !0,
                                                  dotRadius: 2,
                                              }),
                                          }),
                                          (0, a.jsx)(u.ZP, {
                                              channel: t,
                                              className: H.typingUsers,
                                              renderDots: !1,
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("div", {
                className: H.controlsGroup,
                children: [
                    l || null == r
                        ? null
                        : (0, a.jsx)(E.kZ, {
                              firstMessage: r,
                              channel: t,
                          }),
                    null == r
                        ? null
                        : (0, a.jsx)(E.au, {
                              firstMessage: r,
                              channel: t,
                          }),
                ],
            }),
        ],
    });
}
let X = (e) => e.preventDefault(),
    K = r.memo(function (e) {
        return (0, a.jsx)(a.Fragment, {
            children: (0, v.Yi)(B(z({}, e), { analyticsSource: "ForumPostMediaPreviewImage" })),
        });
    }),
    Y = r.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: i,
                containerHeight: s,
                canAutoPlay: o,
                shouldMaintainAspectRatio: c = !1,
            } = e,
            { containsVideo: u, containsGif: m } = r.useMemo(() => (0, I.cp)(t), [t]),
            p = r.useMemo(() => t.slice(R.$x, R.GV), [t]),
            j = (0, R.tu)({
                numAttachments: p.length,
                containerWidth: i,
                containerHeight: s,
            }),
            v = (0, R.S$)({
                imageContainerStyles: j,
                containerWidth: i,
                containerHeight: s,
            }),
            C = (0, g.kh)(h.n.GUILD),
            y = r.useMemo(
                () =>
                    p.map((e, t) => {
                        var r;
                        let [i, s] = (0, b.As)(e, !n, C),
                            h = (0, b.MC)(s),
                            g = B(z({}, v[t]), {
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && i ? h : e.alt,
                                onClick: X,
                                shouldRenderAccessory: !m && !u,
                            }),
                            p = (0, x.d$)(e.src) ? "".concat(e.src, "?format=png") : e.src,
                            y = o && !i ? e.src : p;
                        return (0, a.jsxs)(
                            "div",
                            {
                                className: H.bodyMediaFrame,
                                style: j[t],
                                children: [
                                    c
                                        ? (0, a.jsx)(
                                              f.Z,
                                              B(z({}, g), {
                                                  src: y,
                                                  backgroundSrc: p,
                                                  aspectRatio: g.maxWidth / g.maxHeight,
                                                  alt: null != (r = g.alt) ? r : "",
                                                  className: l()(H.mediaPostContainer, { [H.obscured]: i }),
                                                  imageChildClassName: H.mediaPostThumbnail,
                                              }),
                                          )
                                        : e.src.startsWith("data:")
                                          ? (0, a.jsx)(
                                                d.Eep,
                                                B(z({}, g), {
                                                    className: H.mediaContainer,
                                                    imageClassName: l()(H.thumbnailOverride, { [H.obscured]: i }),
                                                }),
                                            )
                                          : (0, a.jsx)(
                                                K,
                                                B(z({}, g), {
                                                    autoPlay: o && !i,
                                                    containerClassName: H.mosaicMediaContainer,
                                                    imageClassName: l()(H.imageCover, { [H.obscured]: i }),
                                                    responsive: !0,
                                                }),
                                            ),
                                    i &&
                                        (0, a.jsx)("div", {
                                            className: H.obscuredTagContainer,
                                            children: (0, a.jsx)(P.Z, {
                                                obscureReason: s,
                                                iconClassname: H.obscuredTag,
                                            }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, m, u, n, j, v, p, c, C],
            );
        return (0, a.jsxs)("div", {
            className: H.bodyMedia,
            style: {
                width: i,
                height: s,
            },
            children: [
                y,
                (m || u) &&
                    (0, a.jsxs)("div", {
                        className: H.mediaIconsRow,
                        children: [
                            u &&
                                (0, a.jsx)(d.o1U, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: H.mediaIcon,
                                }),
                            m &&
                                (0, a.jsx)(d.OUq, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: H.mediaIcon,
                                }),
                        ],
                    }),
                t.length > R.Vn &&
                    (0, a.jsx)(J, {
                        text: (t.length - R.Vn).toString(),
                        icon: d.XBm,
                        pillClassName: H.moreImagesPill,
                        iconClassName: H.moreImagesPillIcon,
                        textClassName: H.moreImagesPillText,
                    }),
            ],
        });
    });
function J(e) {
    let { text: t, icon: n, pillClassName: r, iconClassName: i, textClassName: l } = e;
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsx)(n, {
                className: i,
                color: "currentColor",
            }),
            (0, a.jsxs)(d.Text, {
                variant: "text-xs/medium",
                className: l,
                children: ["+", t],
            }),
        ],
    });
}
function Q(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: i, containerWidth: s, hasUnreads: o } = e,
        c = C.jU.useSetting(),
        [u, m] = (0, _.rI)(s - 2 * _.LT),
        { content: f } = (0, N.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !0,
        }),
        { shouldRenderTagsRow: h } = (0, Z.DM)({
            channel: t,
            isNew: !1,
        }),
        g = r.useMemo(
            () => ({
                width: u,
                height: m,
            }),
            [u, m],
        ),
        x = o ? H.textContentUnread : H.textContentRead;
    return (0, a.jsxs)("div", {
        className: H.contentPreview,
        style: g,
        children: [
            (0, a.jsxs)("div", {
                className: H.content,
                children: [
                    i &&
                        null == n &&
                        (0, a.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: D.intl.string(D.t.mE3KJN),
                        }),
                    i &&
                        null != n &&
                        (0, a.jsx)(j.ZP, {
                            message: n,
                            content: f,
                            className: x,
                            compact: c,
                        }),
                ],
            }),
            (0, a.jsx)("div", {
                className: l()(H.textContentFooter, { [H.noTags]: !h }),
                children: h
                    ? (0, a.jsx)(Z.ZP, {
                          channel: t,
                          tagsClassName: H.tagPill,
                      })
                    : null,
            }),
        ],
    });
}
function $(e) {
    let { message: t, containerWidth: n, channel: i } = e,
        [s, o] = (0, _.rI)(n - 2 * _.LT),
        { shouldRenderTagsRow: c } = (0, Z.DM)({
            channel: i,
            isNew: !1,
        }),
        u = r.useMemo(
            () => ({
                width: s,
                height: o,
            }),
            [s, o],
        );
    return (0, a.jsxs)("div", {
        className: H.contentPreview,
        style: u,
        children: [
            (0, a.jsx)("div", {
                className: H.content,
                children: (0, a.jsx)(d.Text, {
                    className: H.blockedMessage,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, a.jsx)("div", {
                className: l()(H.textContentFooter, { [H.noTags]: !c }),
                children: c
                    ? (0, a.jsx)(Z.ZP, {
                          channel: i,
                          tagsClassName: H.tagPill,
                      })
                    : null,
            }),
        ],
    });
}
