n.d(t, { A: () => D });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(835245),
    o = n(417597),
    d = n(827734),
    c = n(397927),
    u = n(793574),
    _ = n(58149),
    m = n(601255),
    h = n(562819),
    p = n(234914),
    g = n(22007),
    A = n(77350),
    x = n(112758),
    f = n(754459),
    C = n(967144),
    E = n(342296),
    I = n(253932),
    v = n(696451),
    b = n(287809),
    T = n(486020),
    y = n(449054),
    S = n(218394),
    N = n(19178),
    j = n(650724),
    L = n(652215),
    R = n(381941),
    P = n(985018),
    M = n(960240),
    w = n(278664);
function D(e) {
    let { embedUrl: t, message: n, channel: l } = e,
        D = a.useRef(null),
        k = a.useRef(null),
        O = (0, j.D)(t, n),
        { setPopout: U } = (0, f.A)(n.id, R.Fd),
        B = (0, x.VL)(n, l, U, !0),
        G = I.kt.useSetting(),
        F = (0, S.j)(),
        [H, V] = a.useState(!1),
        [q, W] = a.useState(O?.coverImage == null),
        z = (0, o.bG)([v.Ay, b.default], () => v.Ay.isMember(O?.guildId, b.default.getCurrentUser()?.id), [O]),
        Y = (0, o.bG)([v.Ay], () => (O?.authorId != null ? v.Ay.getMember(O.guildId, O.authorId) : null)),
        Q = (0, m.A)(Y?.avatarDecoration != null ? Y?.avatarDecoration : O?.user?.avatarDecoration),
        [K, X, J] = a.useMemo(() => [Y?.colorString ?? "inherit", Y?.colorStrings ?? null, Y?.colorRoleId], [Y]),
        Z = (0, C.gn)(Y?.guildId, O?.authorId ?? void 0, X),
        { reducedMotion: $ } = a.useContext(c.CZY),
        [ee, et] = a.useState(!1),
        en = a.useCallback(() => {
            V(!0);
        }, [V]),
        ei = a.useCallback(() => {
            V(!1);
        }, [V]),
        ea = a.useCallback(async () => {
            null != O &&
                ((0, _.zV)(L.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: O.threadId,
                    channel_id: l.id,
                    can_access: O.canAccess,
                    is_member: z,
                }),
                O.canAccess
                    ? (0, g.A)(L.BVt.CHANNEL(O.guildId, O.threadId, O.messageId))
                    : z
                      ? (0, g.A)(L.BVt.CHANNEL(O.guildId, O.parentChannelId))
                      : await y.Z2(O.guildId, {}, { channelId: O.parentChannelId }));
        }, [O, l, z]);
    if (null == O) return null;
    let el = (0, T.F_)({ avatarDecoration: Q, size: (0, h.Te)(c._3J.SIZE_40), canAnimate: ee }),
        er = O.user?.getAvatarURL(O.guildId, 40, ee),
        es = () => {
            $.enabled || et((e) => !e);
        },
        eo = O.coverImage,
        ed = null != eo && (0, A.ge)(eo);
    return (0, i.jsxs)("div", {
        className: M.wb,
        children: [
            (0, i.jsxs)("div", {
                className: M.iT,
                onMouseEnter: en,
                onMouseLeave: ei,
                children: [
                    !q &&
                        (!0 === O.shouldShowBlurredThumbnailImage
                            ? (0, i.jsx)("img", {
                                  src: w,
                                  alt: P.intl.string(P.t.rIbh8H),
                                  className: r()(M.xn, { [M.p6]: O.shouldSpoiler }),
                                  onContextMenu: B,
                                  onError: () => W(!0),
                              })
                            : (0, i.jsx)(p.A, {
                                  src: !(F && (G || H)) && ed ? `${eo}?format=png` : eo,
                                  backgroundSrc: `${eo}?format=png`,
                                  alt: P.intl.string(P.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: r()(M.xn, { [M.p6]: O.shouldSpoiler }),
                                  imageChildClassName: M.q_,
                                  onContextMenu: B,
                                  onError: () => W(!0),
                              })),
                    null != O.coverImageOverlayText &&
                        (0, i.jsx)(c.DUT, {
                            onClick: ea,
                            children: (0, i.jsx)("div", {
                                className: M.nx,
                                children: (0, i.jsxs)("div", {
                                    className: M.BS,
                                    children: [
                                        (0, i.jsx)(N.A, { color: d.A.colors.WHITE.css }),
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: O.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: M.iQ,
                children: [
                    (0, i.jsxs)("div", {
                        className: M.OA,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: M.hF,
                                children: O.title,
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: r()(M.hF, M.Fq),
                                children: O.subtitle,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: M._5,
                        children: [
                            null != O.authorId &&
                                null != er &&
                                (0, i.jsx)(E.default, {
                                    targetElementRef: k,
                                    userId: O.authorId,
                                    guildId: O.guildId,
                                    channelId: l.id,
                                    messageId: n.id,
                                    roleId: J,
                                    avatarUrl: O.avatarUrl,
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
                                                "aria-label": P.intl.string(P.t.KXz3XB),
                                                avatarDecoration: el,
                                            }),
                                        }),
                                }),
                            (0, i.jsxs)("div", {
                                className: M.Ny,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: M.O9,
                                        children: [
                                            null != O.channelName &&
                                                (0, i.jsx)(c.d2$, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: M.Xg,
                                                }),
                                            (0, i.jsx)(c.DUT, {
                                                onClick: ea,
                                                className: M.HA,
                                                children: (0, i.jsx)(c.Heading, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: O.channelName ?? O.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != O.authorName &&
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: M.wn,
                                            children: P.intl.format(P.t.voIDKa, {
                                                authorName: O.authorName,
                                                authorNameHook: () =>
                                                    null == O.authorId
                                                        ? (0, i.jsx)(c.V30, {
                                                              name: O.authorName,
                                                              colorString: K,
                                                              colorStrings: Z,
                                                              className: M.fh,
                                                          })
                                                        : (0, i.jsx)(
                                                              E.default,
                                                              {
                                                                  targetElementRef: D,
                                                                  userId: O.authorId,
                                                                  guildId: O.guildId,
                                                                  channelId: l.id,
                                                                  messageId: n.id,
                                                                  roleId: J,
                                                                  avatarUrl: O.avatarUrl,
                                                                  newAnalyticsLocations: [u.A.USERNAME],
                                                                  children: (e) =>
                                                                      (0, i.jsx)(c.V30, {
                                                                          ...e,
                                                                          ref: D,
                                                                          name: O.authorName,
                                                                          colorString: K,
                                                                          colorStrings: Z,
                                                                          className: M.fh,
                                                                      }),
                                                              },
                                                              (0, s.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            O.canAccess
                                ? (0, i.jsx)(c.Button, { variant: "primary", onClick: ea, text: O.ctaText })
                                : (0, i.jsx)(c.Button, { onClick: ea, variant: "primary", text: O.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
