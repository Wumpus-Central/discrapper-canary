n.d(t, { A: () => D });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(835245),
    o = n(417597),
    d = n(827734),
    c = n(397927),
    u = n(793574),
    m = n(58149),
    _ = n(325445),
    h = n(954921),
    p = n(234914),
    g = n(22007),
    A = n(77350),
    f = n(112758),
    x = n(754459),
    E = n(967144),
    C = n(342296),
    I = n(253932),
    T = n(696451),
    v = n(287809),
    N = n(486020),
    S = n(449054),
    b = n(218394),
    y = n(19178),
    j = n(650724),
    R = n(652215),
    L = n(381941),
    M = n(985018),
    O = n(780247),
    P = n(278664);
function D(e) {
    let { embedUrl: t, message: n, channel: a } = e,
        D = l.useRef(null),
        k = l.useRef(null),
        U = (0, j.D)(t, n),
        { setPopout: w } = (0, x.A)(n.id, L.Fd),
        G = (0, f.VL)(n, a, w, !0),
        B = I.kt.useSetting(),
        F = (0, b.j)(),
        [H, V] = l.useState(!1),
        [z, W] = l.useState(U?.coverImage == null),
        Y = (0, o.bG)([T.Ay, v.default], () => T.Ay.isMember(U?.guildId, v.default.getCurrentUser()?.id), [U]),
        q = (0, o.bG)([T.Ay], () => (U?.authorId != null ? T.Ay.getMember(U.guildId, U.authorId) : null)),
        K = (0, _.A)(q?.avatarDecoration != null ? q?.avatarDecoration : U?.user?.avatarDecoration),
        [Q, J, X] = l.useMemo(() => [q?.colorString ?? "inherit", q?.colorStrings ?? null, q?.colorRoleId], [q]),
        Z = (0, E.gn)(q?.guildId, U?.authorId ?? void 0, J),
        { reducedMotion: $ } = l.useContext(c.CZY),
        [ee, et] = l.useState(!1),
        en = l.useCallback(() => {
            V(!0);
        }, [V]),
        ei = l.useCallback(() => {
            V(!1);
        }, [V]),
        el = l.useCallback(async () => {
            null != U &&
                ((0, m.zV)(R.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: U.threadId,
                    channel_id: a.id,
                    can_access: U.canAccess,
                    is_member: Y,
                }),
                U.canAccess
                    ? (0, g.A)(R.BVt.CHANNEL(U.guildId, U.threadId, U.messageId))
                    : Y
                      ? (0, g.A)(R.BVt.CHANNEL(U.guildId, U.parentChannelId))
                      : await S.Z2(U.guildId, {}, { channelId: U.parentChannelId }));
        }, [U, a, Y]);
    if (null == U) return null;
    let ea = (0, N.F_)({ avatarDecoration: K, size: (0, h.Te)(c._3J.SIZE_40), canAnimate: ee }),
        er = U.user?.getAvatarURL(U.guildId, 40, ee),
        es = () => {
            $.enabled || et((e) => !e);
        },
        eo = U.coverImage,
        ed = null != eo && (0, A.ge)(eo);
    return (0, i.jsxs)("div", {
        className: O.wb,
        children: [
            (0, i.jsxs)("div", {
                className: O.iT,
                onMouseEnter: en,
                onMouseLeave: ei,
                children: [
                    !z &&
                        (!0 === U.shouldShowBlurredThumbnailImage
                            ? (0, i.jsx)("img", {
                                  src: P,
                                  alt: M.intl.string(M.t.rIbh8H),
                                  className: r()(O.xn, { [O.p6]: U.shouldSpoiler }),
                                  onContextMenu: G,
                                  onError: () => W(!0),
                              })
                            : (0, i.jsx)(p.A, {
                                  src: !(F && (B || H)) && ed ? `${eo}?format=png` : eo,
                                  backgroundSrc: `${eo}?format=png`,
                                  alt: M.intl.string(M.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: r()(O.xn, { [O.p6]: U.shouldSpoiler }),
                                  imageChildClassName: O.q_,
                                  onContextMenu: G,
                                  onError: () => W(!0),
                              })),
                    null != U.coverImageOverlayText &&
                        (0, i.jsx)(c.DUT, {
                            onClick: el,
                            children: (0, i.jsx)("div", {
                                className: O.nx,
                                children: (0, i.jsxs)("div", {
                                    className: O.BS,
                                    children: [
                                        (0, i.jsx)(y.A, { color: d.A.colors.WHITE.css }),
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: U.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: O.iQ,
                children: [
                    (0, i.jsxs)("div", {
                        className: O.OA,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: O.hF,
                                children: U.title,
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: r()(O.hF, O.Fq),
                                children: U.subtitle,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: O._5,
                        children: [
                            null != U.authorId &&
                                null != er &&
                                (0, i.jsx)(C.A, {
                                    targetElementRef: k,
                                    userId: U.authorId,
                                    guildId: U.guildId,
                                    channelId: a.id,
                                    messageId: n.id,
                                    roleId: X,
                                    avatarUrl: U.avatarUrl,
                                    newAnalyticsLocations: [u.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, i.jsx)("div", {
                                            onMouseEnter: es,
                                            onMouseLeave: es,
                                            children: (0, i.jsx)(c.euF, {
                                                ...e,
                                                ref: k,
                                                size: c._3J.SIZE_40,
                                                src: er,
                                                "aria-label": M.intl.string(M.t.KXz3XB),
                                                avatarDecoration: ea,
                                            }),
                                        }),
                                }),
                            (0, i.jsxs)("div", {
                                className: O.Ny,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: O.O9,
                                        children: [
                                            null != U.channelName &&
                                                (0, i.jsx)(c.d2$, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: O.Xg,
                                                }),
                                            (0, i.jsx)(c.DUT, {
                                                onClick: el,
                                                className: O.HA,
                                                children: (0, i.jsx)(c.Heading, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: U.channelName ?? U.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != U.authorName &&
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: O.wn,
                                            children: M.intl.format(M.t.voIDKa, {
                                                authorName: U.authorName,
                                                authorNameHook: () =>
                                                    null == U.authorId
                                                        ? (0, i.jsx)(c.V30, {
                                                              name: U.authorName,
                                                              colorString: Q,
                                                              colorStrings: Z,
                                                              className: O.fh,
                                                          })
                                                        : (0, i.jsx)(
                                                              C.A,
                                                              {
                                                                  targetElementRef: D,
                                                                  userId: U.authorId,
                                                                  guildId: U.guildId,
                                                                  channelId: a.id,
                                                                  messageId: n.id,
                                                                  roleId: X,
                                                                  avatarUrl: U.avatarUrl,
                                                                  newAnalyticsLocations: [u.A.USERNAME],
                                                                  children: (e) =>
                                                                      (0, i.jsx)(c.V30, {
                                                                          ...e,
                                                                          ref: D,
                                                                          name: U.authorName,
                                                                          colorString: Q,
                                                                          colorStrings: Z,
                                                                          className: O.fh,
                                                                      }),
                                                              },
                                                              (0, s.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            U.canAccess
                                ? (0, i.jsx)(c.Button, { variant: "primary", onClick: el, text: U.ctaText })
                                : (0, i.jsx)(c.Button, { onClick: el, variant: "primary", text: U.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
