n.d(t, { A: () => w });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(835245),
    o = n(417597),
    d = n(827734),
    c = n(397927),
    u = n(793574),
    m = n(58149),
    _ = n(601255),
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
    N = n(449054),
    y = n(218394),
    S = n(19178),
    j = n(650724),
    L = n(652215),
    R = n(381941),
    P = n(985018),
    D = n(960240),
    M = n(278664);
function w(e) {
    let { embedUrl: t, message: n, channel: s } = e,
        w = l.useRef(null),
        O = l.useRef(null),
        k = (0, j.D)(t, n),
        { setPopout: U } = (0, f.A)(n.id, R.Fd),
        B = (0, x.VL)(n, s, U, !0),
        G = I.kt.useSetting(),
        F = (0, y.j)(),
        [H, V] = l.useState(!1),
        [q, W] = l.useState(k?.coverImage == null),
        Y = (0, o.bG)([v.Ay, b.default], () => v.Ay.isMember(k?.guildId, b.default.getCurrentUser()?.id), [k]),
        z = (0, o.bG)([v.Ay], () => (k?.authorId != null ? v.Ay.getMember(k.guildId, k.authorId) : null)),
        Q = (0, _.A)(z?.avatarDecoration != null ? z?.avatarDecoration : k?.user?.avatarDecoration),
        [K, J, X] = l.useMemo(() => [z?.colorString ?? "inherit", z?.colorStrings ?? null, z?.colorRoleId], [z]),
        Z = (0, C.gn)(z?.guildId, k?.authorId ?? void 0, J),
        { reducedMotion: $ } = l.useContext(c.CZY),
        [ee, et] = l.useState(!1),
        en = l.useCallback(() => {
            V(!0);
        }, [V]),
        ei = l.useCallback(() => {
            V(!1);
        }, [V]),
        el = l.useCallback(async () => {
            null != k &&
                ((0, m.zV)(L.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: k.threadId,
                    channel_id: s.id,
                    can_access: k.canAccess,
                    is_member: Y,
                }),
                k.canAccess
                    ? (0, g.A)(L.BVt.CHANNEL(k.guildId, k.threadId, k.messageId))
                    : Y
                      ? (0, g.A)(L.BVt.CHANNEL(k.guildId, k.parentChannelId))
                      : await N.Z2(k.guildId, {}, { channelId: k.parentChannelId }));
        }, [k, s, Y]);
    if (null == k) return null;
    let es = (0, T.F_)({ avatarDecoration: Q, size: (0, h.Te)(c._3J.SIZE_40), canAnimate: ee }),
        er = k.user?.getAvatarURL(k.guildId, 40, ee),
        ea = () => {
            $.enabled || et((e) => !e);
        },
        eo = k.coverImage,
        ed = null != eo && (0, A.ge)(eo);
    return (0, i.jsxs)("div", {
        className: D.wb,
        children: [
            (0, i.jsxs)("div", {
                className: D.iT,
                onMouseEnter: en,
                onMouseLeave: ei,
                children: [
                    !q &&
                        (!0 === k.shouldShowBlurredThumbnailImage
                            ? (0, i.jsx)("img", {
                                  src: M,
                                  alt: P.intl.string(P.t.rIbh8H),
                                  className: r()(D.xn, { [D.p6]: k.shouldSpoiler }),
                                  onContextMenu: B,
                                  onError: () => W(!0),
                              })
                            : (0, i.jsx)(p.A, {
                                  src: !(F && (G || H)) && ed ? `${eo}?format=png` : eo,
                                  backgroundSrc: `${eo}?format=png`,
                                  alt: P.intl.string(P.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: r()(D.xn, { [D.p6]: k.shouldSpoiler }),
                                  imageChildClassName: D.q_,
                                  onContextMenu: B,
                                  onError: () => W(!0),
                              })),
                    null != k.coverImageOverlayText &&
                        (0, i.jsx)(c.DUT, {
                            onClick: el,
                            children: (0, i.jsx)("div", {
                                className: D.nx,
                                children: (0, i.jsxs)("div", {
                                    className: D.BS,
                                    children: [
                                        (0, i.jsx)(S.A, { color: d.A.colors.WHITE.css }),
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: k.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: D.iQ,
                children: [
                    (0, i.jsxs)("div", {
                        className: D.OA,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: D.hF,
                                children: k.title,
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: r()(D.hF, D.Fq),
                                children: k.subtitle,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: D._5,
                        children: [
                            null != k.authorId &&
                                null != er &&
                                (0, i.jsx)(E.default, {
                                    targetElementRef: O,
                                    userId: k.authorId,
                                    guildId: k.guildId,
                                    channelId: s.id,
                                    messageId: n.id,
                                    roleId: X,
                                    avatarUrl: k.avatarUrl,
                                    newAnalyticsLocations: [u.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, i.jsx)("div", {
                                            onMouseEnter: ea,
                                            onMouseLeave: ea,
                                            children: (0, i.jsx)(c.euF, {
                                                ...e,
                                                ref: O,
                                                size: c._3J.SIZE_40,
                                                src: er,
                                                "aria-label": P.intl.string(P.t.KXz3XB),
                                                avatarDecoration: es,
                                            }),
                                        }),
                                }),
                            (0, i.jsxs)("div", {
                                className: D.Ny,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: D.O9,
                                        children: [
                                            null != k.channelName &&
                                                (0, i.jsx)(c.d2$, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: D.Xg,
                                                }),
                                            (0, i.jsx)(c.DUT, {
                                                onClick: el,
                                                className: D.HA,
                                                children: (0, i.jsx)(c.Heading, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: k.channelName ?? k.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != k.authorName &&
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: D.wn,
                                            children: P.intl.format(P.t.voIDKa, {
                                                authorName: k.authorName,
                                                authorNameHook: () =>
                                                    null == k.authorId
                                                        ? (0, i.jsx)(c.V30, {
                                                              name: k.authorName,
                                                              colorString: K,
                                                              colorStrings: Z,
                                                              className: D.fh,
                                                          })
                                                        : (0, i.jsx)(
                                                              E.default,
                                                              {
                                                                  targetElementRef: w,
                                                                  userId: k.authorId,
                                                                  guildId: k.guildId,
                                                                  channelId: s.id,
                                                                  messageId: n.id,
                                                                  roleId: X,
                                                                  avatarUrl: k.avatarUrl,
                                                                  newAnalyticsLocations: [u.A.USERNAME],
                                                                  children: (e) =>
                                                                      (0, i.jsx)(c.V30, {
                                                                          ...e,
                                                                          ref: w,
                                                                          name: k.authorName,
                                                                          colorString: K,
                                                                          colorStrings: Z,
                                                                          className: D.fh,
                                                                      }),
                                                              },
                                                              (0, a.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            k.canAccess
                                ? (0, i.jsx)(c.Button, { variant: "primary", onClick: el, text: k.ctaText })
                                : (0, i.jsx)(c.Button, { onClick: el, variant: "primary", text: k.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
