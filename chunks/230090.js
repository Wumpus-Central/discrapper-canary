n.d(t, { A: () => X });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(132500),
    o = n(702841),
    d = n(661531),
    c = n(844222),
    u = n(778712),
    m = n(463930),
    h = n(939249),
    g = n(834730),
    A = n(97808),
    p = n(251391),
    x = n(534514),
    f = n(821609),
    C = n(793574),
    E = n(58149),
    v = n(601255),
    I = n(562819),
    _ = n(234914),
    j = n(22007),
    N = n(77350),
    T = n(112758),
    y = n(754459),
    S = n(967144),
    b = n(342296),
    k = n(253932),
    L = n(696451),
    R = n(287809),
    P = n(486020),
    M = n(449054),
    D = n(218394),
    w = n(953727);
function O(e) {
    let { width: t = 14, height: n = 18, color: l = "currentColor", ...s } = e;
    return (0, i.jsx)("svg", {
        ...(0, w.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 10 14",
        fill: "none",
        children: (0, i.jsx)("path", {
            d: "M8.33325 6.33301V3.66634C8.33325 1.82834 6.83725 0.333008 4.99992 0.333008C3.16125 0.333008 1.66659 1.82834 1.66659 3.66634V6.33301C0.931252 6.33301 0.333252 6.93034 0.333252 7.66634V12.333C0.333252 13.0683 0.931252 13.6663 1.66659 13.6663H8.33325C9.06859 13.6663 9.66659 13.0683 9.66659 12.333V7.66634C9.66659 6.93034 9.06859 6.33301 8.33325 6.33301ZM4.99992 10.9997C4.44792 10.9997 3.99992 10.5517 3.99992 9.99967C3.99992 9.44767 4.44792 8.99967 4.99992 8.99967C5.55192 8.99967 5.99992 9.44767 5.99992 9.99967C5.99992 10.5517 5.55192 10.9997 4.99992 10.9997ZM6.99992 6.33301H2.99992V3.66634C2.99992 2.56367 3.89725 1.66634 4.99992 1.66634C6.10259 1.66634 6.99992 2.56367 6.99992 3.66634V6.33301Z",
            fill: l,
        }),
    });
}
var U = n(717125),
    G = n(376943),
    V = n(495544),
    B = n(734057),
    H = n(71393),
    F = n(967198),
    z = n(36491),
    Y = n(752755),
    W = n(461715),
    K = n(652215),
    J = n(381941),
    q = n(985018),
    Z = n(38208);
function X(e) {
    let { embedUrl: t, message: n, channel: s } = e,
        w = l.useRef(null),
        X = l.useRef(null),
        $ = (function (e, t) {
            let n = (0, W.CI)(e),
                i = (0, o.bG)([L.Ay, V.default], () => {
                    let e = V.default.getId();
                    return L.Ay.isMember(n?.guildId, e);
                }, [n]),
                s = (0, o.bG)(
                    [U.A],
                    () => null != n && n?.channelId != null && U.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                a = t.hasFlag(K.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: r,
                    guild: d,
                    parentChannel: c,
                    user: u,
                    selectedGuildId: m,
                    canAccess: h,
                } = (0, o.cf)([Y.A, H.A, B.A, R.default, F.A], () => {
                    let e = Y.A.getMediaPostEmbed(n?.threadId)?.media,
                        t = H.A.getGuild(n?.guildId),
                        i = B.A.getChannel(n?.channelId),
                        l = R.default.getUser(e?.author_id),
                        s = F.A.getGuildId(),
                        a = null != i && (0, G.nc)(i);
                    return {
                        rawMediaPostEmbedData: e,
                        guild: t,
                        parentChannel: i,
                        user: l,
                        selectedGuildId: s,
                        canAccess: a,
                    };
                }, [n]),
                g = l.useMemo(() => {
                    let e = (0, W.tU)({
                        mediaPostEmbedData: r,
                        guild: d,
                        parentChannel: c,
                        user: u,
                        selectedGuildId: m,
                        canAccess: h,
                    });
                    return null == e ? null : { ...e, user: u };
                }, [r, d, c, u, m, h]);
            return (
                l.useEffect(() => {
                    n?.threadId != null &&
                        (Y.A.getEmbedFetchState(n.threadId) !== Y.e.NOT_FETCHED ||
                            (i && !1 === s) ||
                            (!i && a) ||
                            (0, z.O0)(n?.threadId));
                }, [n, i, s, a]),
                g
            );
        })(t, n),
        { setPopout: Q } = (0, y.A)(n.id, J.Fd),
        ee = (0, T.VL)(n, s, Q, !0),
        et = k.kt.useSetting(),
        en = (0, D.j)(),
        [ei, el] = l.useState(!1),
        [es, ea] = l.useState($?.coverImage == null),
        er = (0, o.bG)([L.Ay, R.default], () => L.Ay.isMember($?.guildId, R.default.getCurrentUser()?.id), [$]),
        eo = (0, o.bG)([L.Ay], () => ($?.authorId != null ? L.Ay.getMember($.guildId, $.authorId) : null)),
        ed = (0, v.A)(eo?.avatarDecoration != null ? eo?.avatarDecoration : $?.user?.avatarDecoration),
        [ec, eu, em] = l.useMemo(() => [eo?.colorString ?? "inherit", eo?.colorStrings ?? null, eo?.colorRoleId], [eo]),
        eh = (0, S.gn)(eo?.guildId, $?.authorId ?? void 0, eu),
        { reducedMotion: eg } = l.useContext(c.C),
        [eA, ep] = l.useState(!1),
        ex = l.useCallback(() => {
            el(!0);
        }, [el]),
        ef = l.useCallback(() => {
            el(!1);
        }, [el]),
        eC = l.useCallback(async () => {
            null != $ &&
                ((0, E.zV)(K.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: $.threadId,
                    channel_id: s.id,
                    can_access: $.canAccess,
                    is_member: er,
                }),
                $.canAccess
                    ? (0, j.A)(K.BVt.CHANNEL($.guildId, $.threadId, $.messageId))
                    : er
                      ? (0, j.A)(K.BVt.CHANNEL($.guildId, $.parentChannelId))
                      : await M.Z2($.guildId, {}, { channelId: $.parentChannelId }));
        }, [$, s, er]);
    if (null == $) return null;
    let eE = (0, P.F_)({ avatarDecoration: ed, size: (0, I.Te)(u._3.SIZE_40), canAnimate: eA }),
        ev = $.user?.getAvatarURL($.guildId, 40, eA),
        eI = () => {
            eg.enabled || ep((e) => !e);
        },
        e_ = $.coverImage,
        ej = null != e_ && (0, N.ge)(e_);
    return (0, i.jsxs)("div", {
        className: Z.wb,
        children: [
            (0, i.jsxs)("div", {
                className: Z.iT,
                onMouseEnter: ex,
                onMouseLeave: ef,
                children: [
                    !es &&
                        (!0 === $.shouldShowBlurredThumbnailImage
                            ? (0, i.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: q.intl.string(q.t.rIbh8H),
                                  className: a()(Z.xn, { [Z.p6]: $.shouldSpoiler }),
                                  onContextMenu: ee,
                                  onError: () => ea(!0),
                              })
                            : (0, i.jsx)(_.A, {
                                  src: !(en && (et || ei)) && ej ? `${e_}?format=png` : e_,
                                  backgroundSrc: `${e_}?format=png`,
                                  alt: q.intl.string(q.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: a()(Z.xn, { [Z.p6]: $.shouldSpoiler }),
                                  imageChildClassName: Z.q_,
                                  onContextMenu: ee,
                                  onError: () => ea(!0),
                              })),
                    null != $.coverImageOverlayText &&
                        (0, i.jsx)(h.D, {
                            onClick: eC,
                            children: (0, i.jsx)("div", {
                                className: Z.nx,
                                children: (0, i.jsxs)("div", {
                                    className: Z.BS,
                                    children: [
                                        (0, i.jsx)(O, { color: d.A.colors.WHITE.css }),
                                        (0, i.jsx)(g.E, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: $.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: Z.iQ,
                children: [
                    (0, i.jsxs)("div", {
                        className: Z.OA,
                        children: [
                            (0, i.jsx)(g.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: Z.hF,
                                children: $.title,
                            }),
                            (0, i.jsx)(g.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: a()(Z.hF, Z.Fq),
                                children: $.subtitle,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: Z._5,
                        children: [
                            null != $.authorId &&
                                null != ev &&
                                (0, i.jsx)(b.A, {
                                    targetElementRef: X,
                                    userId: $.authorId,
                                    guildId: $.guildId,
                                    channelId: s.id,
                                    messageId: n.id,
                                    roleId: em,
                                    avatarUrl: $.avatarUrl,
                                    newAnalyticsLocations: [C.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, i.jsx)("div", {
                                            onMouseEnter: eI,
                                            onMouseLeave: eI,
                                            children: (0, i.jsx)(A.eu, {
                                                ...e,
                                                ref: X,
                                                size: u._3.SIZE_40,
                                                src: ev,
                                                "aria-label": q.intl.string(q.t.KXz3XB),
                                                avatarDecoration: eE,
                                            }),
                                        }),
                                }),
                            (0, i.jsxs)("div", {
                                className: Z.Ny,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: Z.O9,
                                        children: [
                                            null != $.channelName &&
                                                (0, i.jsx)(p.d, { size: "md", color: "currentColor", className: Z.Xg }),
                                            (0, i.jsx)(h.D, {
                                                onClick: eC,
                                                className: Z.HA,
                                                children: (0, i.jsx)(x.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: $.channelName ?? $.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != $.authorName &&
                                        (0, i.jsx)(g.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: Z.wn,
                                            children: q.intl.format(q.t.voIDKa, {
                                                authorName: $.authorName,
                                                authorNameHook: () =>
                                                    null == $.authorId
                                                        ? (0, i.jsx)(m.V, {
                                                              name: $.authorName,
                                                              colorString: ec,
                                                              colorStrings: eh,
                                                              className: Z.fh,
                                                          })
                                                        : (0, i.jsx)(
                                                              b.A,
                                                              {
                                                                  targetElementRef: w,
                                                                  userId: $.authorId,
                                                                  guildId: $.guildId,
                                                                  channelId: s.id,
                                                                  messageId: n.id,
                                                                  roleId: em,
                                                                  avatarUrl: $.avatarUrl,
                                                                  newAnalyticsLocations: [C.A.USERNAME],
                                                                  children: (e) =>
                                                                      (0, i.jsx)(m.V, {
                                                                          ...e,
                                                                          ref: w,
                                                                          name: $.authorName,
                                                                          colorString: ec,
                                                                          colorStrings: eh,
                                                                          className: Z.fh,
                                                                      }),
                                                              },
                                                              (0, r.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            $.canAccess
                                ? (0, i.jsx)(f.$, { variant: "primary", onClick: eC, text: $.ctaText })
                                : (0, i.jsx)(f.$, { onClick: eC, variant: "primary", text: $.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
