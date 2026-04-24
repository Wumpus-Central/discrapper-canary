n.d(t, { A: () => Q });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(132500),
    o = n(702841),
    c = n(661531),
    d = n(844222),
    u = n(778712),
    _ = n(463930),
    m = n(939249),
    h = n(834730),
    p = n(97808),
    g = n(251391),
    f = n(534514),
    x = n(821609),
    A = n(793574),
    C = n(58149),
    v = n(601255),
    I = n(562819),
    E = n(234914),
    b = n(22007),
    y = n(77350),
    T = n(112758),
    j = n(754459),
    N = n(967144),
    S = n(342296),
    k = n(253932),
    L = n(696451),
    R = n(287809),
    w = n(486020),
    P = n(449054),
    D = n(218394),
    M = n(953727);
function O(e) {
    let { width: t = 14, height: n = 18, color: l = "currentColor", ...a } = e;
    return (0, i.jsx)("svg", {
        ...(0, M.A)(a),
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
    B = n(495544),
    V = n(734057),
    F = n(71393),
    H = n(967198),
    z = n(36491),
    W = n(752755),
    Y = n(461715),
    K = n(652215),
    q = n(381941),
    Z = n(985018),
    J = n(38208);
function Q(e) {
    let { embedUrl: t, message: n, channel: a } = e,
        M = l.useRef(null),
        Q = l.useRef(null),
        X = (function (e, t) {
            let n = (0, Y.CI)(e),
                i = (0, o.bG)([L.Ay, B.default], () => {
                    let e = B.default.getId();
                    return L.Ay.isMember(n?.guildId, e);
                }, [n]),
                a = (0, o.bG)(
                    [U.A],
                    () => null != n && n?.channelId != null && U.A.isChannelGated(n.guildId, n.channelId),
                    [n],
                ),
                r = t.hasFlag(K.pr7.IS_CROSSPOST),
                {
                    rawMediaPostEmbedData: s,
                    guild: c,
                    parentChannel: d,
                    user: u,
                    selectedGuildId: _,
                    canAccess: m,
                } = (0, o.cf)([W.A, F.A, V.A, R.default, H.A], () => {
                    let e = W.A.getMediaPostEmbed(n?.threadId)?.media,
                        t = F.A.getGuild(n?.guildId),
                        i = V.A.getChannel(n?.channelId),
                        l = R.default.getUser(e?.author_id),
                        a = H.A.getGuildId(),
                        r = null != i && (0, G.nc)(i);
                    return {
                        rawMediaPostEmbedData: e,
                        guild: t,
                        parentChannel: i,
                        user: l,
                        selectedGuildId: a,
                        canAccess: r,
                    };
                }, [n]),
                h = l.useMemo(() => {
                    let e = (0, Y.tU)({
                        mediaPostEmbedData: s,
                        guild: c,
                        parentChannel: d,
                        user: u,
                        selectedGuildId: _,
                        canAccess: m,
                    });
                    return null == e ? null : { ...e, user: u };
                }, [s, c, d, u, _, m]);
            return (
                l.useEffect(() => {
                    n?.threadId != null &&
                        (W.A.getEmbedFetchState(n.threadId) !== W.e.NOT_FETCHED ||
                            (i && !1 === a) ||
                            (!i && r) ||
                            (0, z.O0)(n?.threadId));
                }, [n, i, a, r]),
                h
            );
        })(t, n),
        { setPopout: $ } = (0, j.A)(n.id, q.Fd),
        ee = (0, T.VL)(n, a, $, !0),
        et = k.kt.useSetting(),
        en = (0, D.j)(),
        [ei, el] = l.useState(!1),
        [ea, er] = l.useState(X?.coverImage == null),
        es = (0, o.bG)([L.Ay, R.default], () => L.Ay.isMember(X?.guildId, R.default.getCurrentUser()?.id), [X]),
        eo = (0, o.bG)([L.Ay], () => (X?.authorId != null ? L.Ay.getMember(X.guildId, X.authorId) : null)),
        ec = (0, v.A)(eo?.avatarDecoration != null ? eo?.avatarDecoration : X?.user?.avatarDecoration),
        [ed, eu, e_] = l.useMemo(() => [eo?.colorString ?? "inherit", eo?.colorStrings ?? null, eo?.colorRoleId], [eo]),
        em = (0, N.gn)(eo?.guildId, X?.authorId ?? void 0, eu),
        { reducedMotion: eh } = l.useContext(d.C),
        [ep, eg] = l.useState(!1),
        ef = l.useCallback(() => {
            el(!0);
        }, [el]),
        ex = l.useCallback(() => {
            el(!1);
        }, [el]),
        eA = l.useCallback(async () => {
            null != X &&
                ((0, C.zV)(K.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
                    media_post_id: X.threadId,
                    channel_id: a.id,
                    can_access: X.canAccess,
                    is_member: es,
                }),
                X.canAccess
                    ? (0, b.A)(K.BVt.CHANNEL(X.guildId, X.threadId, X.messageId))
                    : es
                      ? (0, b.A)(K.BVt.CHANNEL(X.guildId, X.parentChannelId))
                      : await P.Z2(X.guildId, {}, { channelId: X.parentChannelId }));
        }, [X, a, es]);
    if (null == X) return null;
    let eC = (0, w.F_)({ avatarDecoration: ec, size: (0, I.Te)(u._3.SIZE_40), canAnimate: ep }),
        ev = X.user?.getAvatarURL(X.guildId, 40, ep),
        eI = () => {
            eh.enabled || eg((e) => !e);
        },
        eE = X.coverImage,
        eb = null != eE && (0, y.ge)(eE);
    return (0, i.jsxs)("div", {
        className: J.wb,
        children: [
            (0, i.jsxs)("div", {
                className: J.iT,
                onMouseEnter: ef,
                onMouseLeave: ex,
                children: [
                    !ea &&
                        (!0 === X.shouldShowBlurredThumbnailImage
                            ? (0, i.jsx)("img", {
                                  src: "/assets/a4a6886d9e7caa05.jpg",
                                  alt: Z.intl.string(Z.t.rIbh8H),
                                  className: r()(J.xn, { [J.p6]: X.shouldSpoiler }),
                                  onContextMenu: ee,
                                  onError: () => er(!0),
                              })
                            : (0, i.jsx)(E.A, {
                                  src: !(en && (et || ei)) && eb ? `${eE}?format=png` : eE,
                                  backgroundSrc: `${eE}?format=png`,
                                  alt: Z.intl.string(Z.t.rIbh8H),
                                  aspectRatio: 16 / 9,
                                  className: r()(J.xn, { [J.p6]: X.shouldSpoiler }),
                                  imageChildClassName: J.q_,
                                  onContextMenu: ee,
                                  onError: () => er(!0),
                              })),
                    null != X.coverImageOverlayText &&
                        (0, i.jsx)(m.D, {
                            onClick: eA,
                            children: (0, i.jsx)("div", {
                                className: J.nx,
                                children: (0, i.jsxs)("div", {
                                    className: J.BS,
                                    children: [
                                        (0, i.jsx)(O, { color: c.A.colors.WHITE.css }),
                                        (0, i.jsx)(h.E, {
                                            variant: "text-sm/semibold",
                                            color: "always-white",
                                            children: X.coverImageOverlayText,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: J.iQ,
                children: [
                    (0, i.jsxs)("div", {
                        className: J.OA,
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                className: J.hF,
                                children: X.title,
                            }),
                            (0, i.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: r()(J.hF, J.Fq),
                                children: X.subtitle,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: J._5,
                        children: [
                            null != X.authorId &&
                                null != ev &&
                                (0, i.jsx)(S.A, {
                                    targetElementRef: Q,
                                    userId: X.authorId,
                                    guildId: X.guildId,
                                    channelId: a.id,
                                    messageId: n.id,
                                    roleId: e_,
                                    avatarUrl: X.avatarUrl,
                                    newAnalyticsLocations: [A.A.AVATAR],
                                    spacing: 12,
                                    children: (e) =>
                                        (0, i.jsx)("div", {
                                            onMouseEnter: eI,
                                            onMouseLeave: eI,
                                            children: (0, i.jsx)(p.eu, {
                                                ...e,
                                                ref: Q,
                                                size: u._3.SIZE_40,
                                                src: ev,
                                                "aria-label": Z.intl.string(Z.t.KXz3XB),
                                                avatarDecoration: eC,
                                            }),
                                        }),
                                }),
                            (0, i.jsxs)("div", {
                                className: J.Ny,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: J.O9,
                                        children: [
                                            null != X.channelName &&
                                                (0, i.jsx)(g.d, { size: "md", color: "currentColor", className: J.Xg }),
                                            (0, i.jsx)(m.D, {
                                                onClick: eA,
                                                className: J.HA,
                                                children: (0, i.jsx)(f.D, {
                                                    variant: "heading-md/semibold",
                                                    color: "text-strong",
                                                    children: X.channelName ?? X.guildName,
                                                }),
                                            }),
                                        ],
                                    }),
                                    null != X.authorName &&
                                        (0, i.jsx)(h.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: J.wn,
                                            children: Z.intl.format(Z.t.voIDKa, {
                                                authorName: X.authorName,
                                                authorNameHook: () =>
                                                    null == X.authorId
                                                        ? (0, i.jsx)(_.V, {
                                                              name: X.authorName,
                                                              colorString: ed,
                                                              colorStrings: em,
                                                              className: J.fh,
                                                          })
                                                        : (0, i.jsx)(
                                                              S.A,
                                                              {
                                                                  targetElementRef: M,
                                                                  userId: X.authorId,
                                                                  guildId: X.guildId,
                                                                  channelId: a.id,
                                                                  messageId: n.id,
                                                                  roleId: e_,
                                                                  avatarUrl: X.avatarUrl,
                                                                  newAnalyticsLocations: [A.A.USERNAME],
                                                                  children: (e) =>
                                                                      (0, i.jsx)(_.V, {
                                                                          ...e,
                                                                          ref: M,
                                                                          name: X.authorName,
                                                                          colorString: ed,
                                                                          colorStrings: em,
                                                                          className: J.fh,
                                                                      }),
                                                              },
                                                              (0, s.A)(),
                                                          ),
                                            }),
                                        }),
                                ],
                            }),
                            X.canAccess
                                ? (0, i.jsx)(x.$, { variant: "primary", onClick: eA, text: X.ctaText })
                                : (0, i.jsx)(x.$, { onClick: eA, variant: "primary", text: X.ctaText }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
