n.d(t, { Z: () => U }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
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
    T = n(496675),
    w = n(699516),
    S = n(456269),
    N = n(109590),
    O = n(368844),
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
    H = n(740202);
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
let U = i.memo(function (e) {
    let {
            id: t,
            threadId: n,
            goToThread: i,
            overrideMedia: l,
            className: a,
            coords: s,
            gridCoords: c,
            gridSectionBoundaries: d,
            observePostVisibilityAnalytics: u,
        } = e,
        m = (0, o.e7)([y.Z], () => y.Z.getChannel(n));
    return null == m
        ? null
        : (0, r.jsx)(G, {
              id: t,
              channel: m,
              goToThread: i,
              overrideMedia: l,
              className: a,
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
            goToThread: l,
            overrideMedia: u,
            className: m,
            coords: h,
            gridCoords: g,
            gridSectionBoundaries: f,
            observePostVisibilityAnalytics: x,
        } = e,
        p = n.id,
        b = i.useRef(null),
        j = (0, o.e7)([C.ZP], () => C.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id),
        { firstMessage: v, loaded: _ } = (0, N.cl)(n),
        { messageCountText: y } = (0, S.nP)(n),
        { isNew: T, hasUnreads: w } = (0, S.J$)(n),
        O = i.useRef(null),
        { handleLeftClick: P, handleRightClick: R } = (0, A.Z)({
            facepileRef: O,
            goToThread: l,
            channel: n,
        });
    i.useEffect(() => {
        null == x || x(b.current, p);
    }, [x, p]);
    let Z = (0, S.xw)(n, s.z.CREATION_DATE, L.R6.POSTED_DURATION_AGO),
        F = (0, I.NN)(n),
        B = (0, k.nX)({
            id: t,
            row: g.row,
            column: g.column,
            section: g.section,
            boundaries: f,
        }),
        { onFocus: U } = B,
        G = (function (e, t) {
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(B, ["onFocus"]);
    return (0, r.jsxs)("li", {
        ref: b,
        onClick: P,
        onFocus: U,
        onContextMenu: R,
        className: a()(H.container, m, { [H.isOpen]: j }),
        style: z({}, h),
        children: [
            (0, r.jsx)(
                d.P3F,
                z(
                    {
                        onClick: P,
                        focusProps: { ringTarget: b },
                        onContextMenu: R,
                        "aria-label": D.intl.formatToPlainString(D.t.pgYN6c, {
                            title: n.name,
                            count: y,
                        }),
                        className: H.focusTarget,
                    },
                    G,
                ),
            ),
            (0, r.jsxs)("div", {
                className: H.header,
                children: [
                    (0, r.jsxs)("div", {
                        className: H.authorRow,
                        children: [
                            (0, r.jsxs)("div", {
                                className: H.rowGroup,
                                children: [
                                    (0, r.jsx)(M.Z, {
                                        channel: n,
                                        message: v,
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        className: H.postCreationTimestamp,
                                        children: Z,
                                    }),
                                ],
                            }),
                            T
                                ? (0, r.jsx)(d.IGR, {
                                      className: H.newBadge,
                                      color: c.Z.unsafe_rawColors.BRAND_260.css,
                                      text: D.intl.string(D.t.y2b7CA),
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(d.y5t, {
                        children: (0, r.jsx)(d.Heading, {
                            variant: "heading-md/extrabold",
                            className: H.title,
                            color: w ? "header-primary" : "text-muted",
                            style: { width: "".concat(h.width - 2 * E.I8, "px") },
                            children: F,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: H.postBody,
                children: (0, r.jsx)(d.Rny, {
                    children: (0, r.jsx)(V, {
                        channel: n,
                        firstMessage: v,
                        isFirstMessageLoaded: _,
                        overrideMedia: u,
                        coords: h,
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: H.footer,
                children: (0, r.jsx)(d.Rny, {
                    children: (0, r.jsx)(q, {
                        channel: n,
                        firstMessage: v,
                        facepileRef: O,
                    }),
                }),
            }),
        ],
    });
}
function V(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: i, overrideMedia: l, coords: a } = e,
        { isBlocked: s, isIgnored: c } = (0, o.cj)([w.Z], () => ({
            isBlocked: null != n && w.Z.isBlockedForMessage(n),
            isIgnored: null != n && w.Z.isIgnoredForMessage(n),
        }));
    return s
        ? (0, r.jsx)($, {
              message: D.intl.string(D.t.Lkp2fB),
              containerWidth: a.width,
              channel: t,
          })
        : c
          ? (0, r.jsx)($, {
                message: D.intl.string(D.t.yWK7ZM),
                containerWidth: a.width,
                channel: t,
            })
          : (0, r.jsx)(W, {
                channel: t,
                firstMessage: n,
                isFirstMessageLoaded: i,
                overrideMedia: l,
                coords: a,
            });
}
function W(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: i, overrideMedia: l, coords: a } = e,
        s = (0, o.e7)([y.Z], () => y.Z.getChannel(t.parent_id)),
        { firstMedia: c } = (0, S.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !1,
        }),
        { hasUnreads: d } = (0, S.J$)(t),
        u = (0, o.e7)([T.Z], () => T.Z.can(F.Plq.MANAGE_MESSAGES, t)),
        m = _.QK.useSetting(),
        h = _.cC.useSetting(),
        g = (0, b.Z)(h, u),
        f = (0, O.aU)(n, s, !1),
        x = t.isMediaPost(),
        [p, j] = (0, E.rI)(a.width - 2 * E.LT, x ? E.Lv.SIXTEEN_BY_NINE : E.Lv.THREE_BY_TWO);
    return (null == n ? void 0 : n.blocked) || null == (null != l ? l : c)
        ? (0, r.jsx)(Q, {
              channel: t,
              firstMessage: n,
              isFirstMessageLoaded: i,
              containerWidth: a.width,
              hasUnreads: d,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Y, {
                      mediaAttachments: f,
                      globalSpoilerRenderSetting: g,
                      containerWidth: p,
                      containerHeight: j,
                      canAutoPlay: m,
                      shouldMaintainAspectRatio: x,
                  }),
                  (0, r.jsx)("div", {
                      className: H.tagsRow,
                      children: (0, r.jsx)(Z.ZP, {
                          channel: t,
                          tagsClassName: H.tagPill,
                      }),
                  }),
              ],
          });
}
function q(e) {
    let { channel: t, facepileRef: n, firstMessage: i } = e,
        l = (0, m.Q)(t.id),
        a = (null == i ? void 0 : i.reactions) != null && i.reactions.length > 0;
    return (0, r.jsxs)("div", {
        className: H.forumPostControls,
        children: [
            (0, r.jsxs)("div", {
                className: H.controlsGroup,
                children: [
                    (0, r.jsx)("div", {
                        className: H.messageCountContainer,
                        children: (0, r.jsx)(I.m9, {
                            channel: t,
                            iconSize: 16,
                            showReadState: !0,
                        }),
                    }),
                    l.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("span", {
                                      className: H.bullet,
                                      children: "\u2022",
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: H.typing,
                                      children: [
                                          (0, r.jsx)(I.og, {
                                              channel: t,
                                              userIds: l,
                                              facepileRef: n,
                                          }),
                                          (0, r.jsx)("div", {
                                              className: H.dots,
                                              children: (0, r.jsx)(d.bbz, {
                                                  themed: !0,
                                                  dotRadius: 2,
                                              }),
                                          }),
                                          (0, r.jsx)(u.ZP, {
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
            (0, r.jsxs)("div", {
                className: H.controlsGroup,
                children: [
                    a || null == i
                        ? null
                        : (0, r.jsx)(I.kZ, {
                              firstMessage: i,
                              channel: t,
                          }),
                    null == i
                        ? null
                        : (0, r.jsx)(I.au, {
                              firstMessage: i,
                              channel: t,
                          }),
                ],
            }),
        ],
    });
}
let K = (e) => e.preventDefault(),
    X = i.memo(function (e) {
        return (0, r.jsx)(r.Fragment, {
            children: (0, v.Yi)(B(z({}, e), { analyticsSource: "ForumPostMediaPreviewImage" })),
        });
    }),
    Y = i.memo(function (e) {
        let {
                mediaAttachments: t,
                globalSpoilerRenderSetting: n,
                containerWidth: l,
                containerHeight: s,
                canAutoPlay: o,
                shouldMaintainAspectRatio: c = !1,
            } = e,
            { containsVideo: u, containsGif: m } = i.useMemo(() => (0, O.cp)(t), [t]),
            b = i.useMemo(() => t.slice(R.$x, R.GV), [t]),
            j = (0, R.tu)({
                numAttachments: b.length,
                containerWidth: l,
                containerHeight: s,
            }),
            v = (0, R.S$)({
                imageContainerStyles: j,
                containerWidth: l,
                containerHeight: s,
            }),
            _ = (0, f.kh)(g.n.GUILD),
            C = i.useMemo(
                () =>
                    b.map((e, t) => {
                        var i;
                        let [l, s] = (0, p.As)(e, !n, _),
                            g = (0, p.MC)(s),
                            f = B(z({}, v[t]), {
                                src: e.src,
                                width: e.width,
                                height: e.height,
                                alt: null != e.alt && l ? g : e.alt,
                                onClick: K,
                                shouldRenderAccessory: !m && !u,
                            }),
                            b = (0, x.d$)(e.src) ? "".concat(e.src, "?format=png") : e.src,
                            C = o && !l ? e.src : b;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: H.bodyMediaFrame,
                                style: j[t],
                                children: [
                                    c
                                        ? (0, r.jsx)(
                                              h.Z,
                                              B(z({}, f), {
                                                  src: C,
                                                  backgroundSrc: b,
                                                  aspectRatio: f.maxWidth / f.maxHeight,
                                                  alt: null != (i = f.alt) ? i : "",
                                                  className: a()(H.mediaPostContainer, { [H.obscured]: l }),
                                                  imageChildClassName: H.mediaPostThumbnail,
                                              }),
                                          )
                                        : e.src.startsWith("data:")
                                          ? (0, r.jsx)(
                                                d.Eep,
                                                B(z({}, f), {
                                                    className: H.mediaContainer,
                                                    imageClassName: a()(H.thumbnailOverride, { [H.obscured]: l }),
                                                }),
                                            )
                                          : (0, r.jsx)(
                                                X,
                                                B(z({}, f), {
                                                    autoPlay: o && !l,
                                                    containerClassName: H.mosaicMediaContainer,
                                                    imageClassName: a()(H.imageCover, { [H.obscured]: l }),
                                                    responsive: !0,
                                                }),
                                            ),
                                    l &&
                                        (0, r.jsx)("div", {
                                            className: H.obscuredTagContainer,
                                            children: (0, r.jsx)(P.Z, {
                                                obscureReason: s,
                                                iconClassname: H.obscuredTag,
                                            }),
                                        }),
                                ],
                            },
                            e.src,
                        );
                    }),
                [o, m, u, n, j, v, b, c, _],
            );
        return (0, r.jsxs)("div", {
            className: H.bodyMedia,
            style: {
                width: l,
                height: s,
            },
            children: [
                C,
                (m || u) &&
                    (0, r.jsxs)("div", {
                        className: H.mediaIconsRow,
                        children: [
                            u &&
                                (0, r.jsx)(d.o1U, {
                                    color: "currentColor",
                                    size: "custom",
                                    width: 22,
                                    height: 22,
                                    className: H.mediaIcon,
                                }),
                            m &&
                                (0, r.jsx)(d.OUq, {
                                    size: "custom",
                                    width: 29,
                                    height: 29,
                                    color: "currentColor",
                                    className: H.mediaIcon,
                                }),
                        ],
                    }),
                t.length > R.Vn &&
                    (0, r.jsx)(J, {
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
    let { text: t, icon: n, pillClassName: i, iconClassName: l, textClassName: a } = e;
    return (0, r.jsxs)("div", {
        className: i,
        children: [
            (0, r.jsx)(n, {
                className: l,
                color: "currentColor",
            }),
            (0, r.jsxs)(d.Text, {
                variant: "text-xs/medium",
                className: a,
                children: ["+", t],
            }),
        ],
    });
}
function Q(e) {
    let { channel: t, firstMessage: n, isFirstMessageLoaded: l, containerWidth: s, hasUnreads: o } = e,
        c = _.jU.useSetting(),
        [u, m] = (0, E.rI)(s - 2 * E.LT),
        { content: h } = (0, S.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !0,
        }),
        { shouldRenderTagsRow: g } = (0, Z.DM)({
            channel: t,
            isNew: !1,
        }),
        f = i.useMemo(
            () => ({
                width: u,
                height: m,
            }),
            [u, m],
        ),
        x = o ? H.textContentUnread : H.textContentRead;
    return (0, r.jsxs)("div", {
        className: H.contentPreview,
        style: f,
        children: [
            (0, r.jsxs)("div", {
                className: H.content,
                children: [
                    l &&
                        null == n &&
                        (0, r.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: o ? "text-default" : "text-muted",
                            children: D.intl.string(D.t.mE3KJN),
                        }),
                    l &&
                        null != n &&
                        (0, r.jsx)(j.ZP, {
                            message: n,
                            content: h,
                            className: x,
                            compact: c,
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a()(H.textContentFooter, { [H.noTags]: !g }),
                children: g
                    ? (0, r.jsx)(Z.ZP, {
                          channel: t,
                          tagsClassName: H.tagPill,
                      })
                    : null,
            }),
        ],
    });
}
function $(e) {
    let { message: t, containerWidth: n, channel: l } = e,
        [s, o] = (0, E.rI)(n - 2 * E.LT),
        { shouldRenderTagsRow: c } = (0, Z.DM)({
            channel: l,
            isNew: !1,
        }),
        u = i.useMemo(
            () => ({
                width: s,
                height: o,
            }),
            [s, o],
        );
    return (0, r.jsxs)("div", {
        className: H.contentPreview,
        style: u,
        children: [
            (0, r.jsx)("div", {
                className: H.content,
                children: (0, r.jsx)(d.Text, {
                    className: H.blockedMessage,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: t,
                }),
            }),
            (0, r.jsx)("div", {
                className: a()(H.textContentFooter, { [H.noTags]: !c }),
                children: c
                    ? (0, r.jsx)(Z.ZP, {
                          channel: l,
                          tagsClassName: H.tagPill,
                      })
                    : null,
            }),
        ],
    });
}
