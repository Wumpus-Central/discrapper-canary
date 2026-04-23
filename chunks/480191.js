n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(835245),
    o = n(417597),
    d = n(827734),
    c = n(844222),
    u = n(778712),
    m = n(463930),
    _ = n(939249),
    h = n(834730),
    p = n(97808),
    g = n(251391),
    A = n(534514),
    f = n(821609),
    x = n(793574),
    C = n(58149),
    E = n(601255),
    I = n(562819),
    v = n(234914),
    b = n(22007),
    T = n(77350),
    S = n(112758),
    y = n(754459),
    N = n(967144),
    j = n(342296),
    L = n(253932),
    R = n(696451),
    P = n(287809),
    w = n(486020),
    D = n(449054),
    k = n(218394),
    O = n(19178),
    M = n(650724),
    U = n(652215),
    G = n(381941),
    B = n(985018),
    F = n(38208),
    H = n(278664);
function V(e) {
    let { embedUrl: t, message: n, channel: a } = e,
        V = l.useRef(null),
        q = l.useRef(null),
        W = (0, M.D)(t, n),
        { setPopout: z } = (0, y.A)(n.id, G.Fd),
        Y = (0, S.VL)(n, a, z, !0),
        Q = L.kt.useSetting(),
        K = (0, k.j)(),
        [Z, J] = l.useState(!1),
        [X, $] = l.useState(W?.coverImage == null),
        ee = (0, o.bG)([R.Ay, P.default], () => R.Ay.isMember(W?.guildId, P.default.getCurrentUser()?.id), [W]),
        et = (0, o.bG)([R.Ay], () => (W?.authorId != null ? R.Ay.getMember(W.guildId, W.authorId) : null)),
        en = (0, E.A)(et?.avatarDecoration != null ? et?.avatarDecoration : W?.user?.avatarDecoration),
        [ei, el, ea] = l.useMemo(() => [et?.colorString ?? "inherit", et?.colorStrings ?? null, et?.colorRoleId], [et]),
        es = (0, N.gn)(et?.guildId, W?.authorId ?? void 0, el),
        { reducedMotion: er } = l.useContext(c.C),
        [eo, ed] = l.useState(!1),
        ec = l.useCallback(() => {
            J(!0);
        }, [J]),
        eu = l.useCallback(() => {
            J(!1);
        }, [J]),
        em = l.useCallback(async () => {
            null != W &&
                ((0, C.zV)(U.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: W.threadId,
                    channel_id: a.id,
                    can_access: W.canAccess,
                    is_member: ee,
                }),
                W.canAccess
                    ? (0, b.A)(U.BVt.CHANNEL(W.guildId, W.threadId, W.messageId))
                    : ee
                      ? (0, b.A)(U.BVt.CHANNEL(W.guildId, W.parentChannelId))
                      : await D.Z2(W.guildId, {}, { channelId: W.parentChannelId }));
        }, [W, a, ee]);
    if (null == W) return null;
    let e_ = (0, w.F_)({ avatarDecoration: en, size: (0, I.Te)(u._3.SIZE_40), canAnimate: eo }),
        eh = W.user?.getAvatarURL(W.guildId, 40, eo),
        ep = () => {
            er.enabled || ed((e) => !e);
        },
        eg = W.coverImage,
        eA = null != eg && (0, T.ge)(eg);
    return (0, i.jsxs)("div", {
        className: F.wb,
        children: [
            (0, i.jsxs)("div", {
                className: F.iT,
                onMouseEnter: ec,
                onMouseLeave: eu,
                children: [
                    !X &&
                        (!0 === W.shouldShowBlurredThumbnailImage
                            ? (0, i.jsx)("img", {
                                  src: H,
                                  alt: B.intl.string(B.t.rIbh8H),
                                  className: s()(F.xn, { [F.p6]: W.shouldSpoiler }),
                                  onContextMenu: Y,
                                  onError: () => $(!0),
                              })
                            : (0, i.jsx)(v.A, {
                                  src: !(K && (Q || Z)) && eA ? `${eg}?format=png` : eg,
                                  backgroundSrc: `${eg}?format=png`,
                                  alt: B.intl.string(B.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: s()(F.xn, { [F.p6]: W.shouldSpoiler }),
                                  imageChildClassName: F.q_,
                                  onContextMenu: Y,
                                  onError: () => $(!0),
                              })),
                    null != W.coverImageOverlayText &&
                        (0, i.jsx)(_.D, {
                            onClick: em,
                            children: (0, i.jsx)("div", {
                                className: F.nx,
                                children: (0, i.jsxs)("div", {
                                    className: F.BS,
                                    children: [
                                        (0, i.jsx)(O.A, { color: d.A.colors.WHITE.css }),
                                        (0, i.jsx)(h.E, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: W.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: F.iQ,
                children: [
                    (0, i.jsxs)("div", {
                        className: F.OA,
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: F.hF,
                                children: W.title,
                            }),
                            (0, i.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: s()(F.hF, F.Fq),
                                children: W.subtitle,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: F._5,
                        children: [
                            null != W.authorId &&
                                null != eh &&
                                (0, i.jsx)(j.A, {
                                    targetElementRef: q,
                                    userId: W.authorId,
                                    guildId: W.guildId,
                                    channelId: a.id,
                                    messageId: n.id,
                                    roleId: ea,
                                    avatarUrl: W.avatarUrl,
                                    newAnalyticsLocations: [x.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, i.jsx)("div", {
                                            onMouseEnter: ep,
                                            onMouseLeave: ep,
                                            children: (0, i.jsx)(p.eu, {
                                                ...e,
                                                ref: q,
                                                size: u._3.SIZE_40,
                                                src: eh,
                                                "aria-label": B.intl.string(B.t.KXz3XB),
                                                avatarDecoration: e_,
                                            }),
                                        }),
                                }),
                            (0, i.jsxs)("div", {
                                className: F.Ny,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: F.O9,
                                        children: [
                                            null != W.channelName &&
                                                (0, i.jsx)(g.d, { size: "md", color: "currentColor", className: F.Xg }),
                                            (0, i.jsx)(_.D, {
                                                onClick: em,
                                                className: F.HA,
                                                children: (0, i.jsx)(A.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: W.channelName ?? W.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != W.authorName &&
                                        (0, i.jsx)(h.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: F.wn,
                                            children: B.intl.format(B.t.voIDKa, {
                                                authorName: W.authorName,
                                                authorNameHook: () =>
                                                    null == W.authorId
                                                        ? (0, i.jsx)(m.V, {
                                                              name: W.authorName,
                                                              colorString: ei,
                                                              colorStrings: es,
                                                              className: F.fh,
                                                          })
                                                        : (0, i.jsx)(
                                                              j.A,
                                                              {
                                                                  targetElementRef: V,
                                                                  userId: W.authorId,
                                                                  guildId: W.guildId,
                                                                  channelId: a.id,
                                                                  messageId: n.id,
                                                                  roleId: ea,
                                                                  avatarUrl: W.avatarUrl,
                                                                  newAnalyticsLocations: [x.A.USERNAME],
                                                                  children: (e) =>
                                                                      (0, i.jsx)(m.V, {
                                                                          ...e,
                                                                          ref: V,
                                                                          name: W.authorName,
                                                                          colorString: ei,
                                                                          colorStrings: es,
                                                                          className: F.fh,
                                                                      }),
                                                              },
                                                              (0, r.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            W.canAccess
                                ? (0, i.jsx)(f.$, { variant: "primary", onClick: em, text: W.ctaText })
                                : (0, i.jsx)(f.$, { onClick: em, variant: "primary", text: W.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
