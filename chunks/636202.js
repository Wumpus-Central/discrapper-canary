n.d(t, {
    A: () => U,
    n: () => k,
});
var r = n(627968),
    i = n(64700),
    a = n(808380),
    s = n(311907),
    o = n(397927),
    l = n(833349),
    c = n(765379),
    u = n(960076),
    d = n(359549),
    f = n(566021),
    p = n(284525),
    _ = n(648246),
    h = n(793574),
    m = n(627363),
    g = n(308335),
    E = n(773669),
    b = n(790381),
    y = n(266080),
    O = n(403362),
    A = n(939341),
    v = n(576757),
    S = n(202195),
    I = n(583846),
    T = n(821988),
    C = n(329575),
    N = n(434200),
    R = n(176563),
    w = n(322789),
    P = n(506326),
    D = n(910692),
    x = n(18282),
    L = n(299846),
    j = n(652215),
    M = n(985018);
let k = {
        [a.Y.DESKTOP]: null,
        [a.Y.LINUX]: null,
        [a.Y.MACOS]: null,
        [a.Y.NINTENDO]: null,
        [a.Y.IOS]: null,
        [a.Y.ANDROID]: null,
        [a.Y.XBOX]: y.A,
        [a.Y.PLAYSTATION]: b.A,
    },
    U = (e) => {
        var t, n;
        let {
                channel: b,
                entry: y,
                disableGameProfileLinks: U,
                onReaction: G,
                onVoiceChannelPreview: V,
                onUserPopoutClosed: F,
                trackRankingItemInteraction: B,
            } = e,
            { largeImage: H } = (0, A.nO)({ entry: y }),
            { user: Y, details: W, appName: K, activity: z, embeddedActivity: q } = (0, L.u)(y),
            { primaryColor: X, secondaryColor: Z } = (0, R.A)(null == H ? void 0 : H.src),
            Q = (0, s.bG)([E.default], () => E.default.locale),
            { streamPreviewUrl: $, stream: J } = (0, S.A)(y),
            { displayParticipants: ee, participant1: et, participant2: en, numOtherParticipants: er } = (0, v.A)(y, 3),
            ei = y.extra.platform,
            ea = null != ei ? k[ei] : null,
            es = ei === a.Y.XBOX ? j.fg2.XBOX : ei === a.Y.PLAYSTATION ? j.fg2.PLAYSTATION : void 0,
            eo = (0, N.A)(es),
            { data: el } = (0, m.YY)(y.extra.application_id),
            ec = (0, d.J)(el),
            eu = (0, g.o)(
                null !=
                    (t = null != (n = null == z ? void 0 : z.application_id) ? n : null == q ? void 0 : q.applicationId)
                    ? t
                    : null == el
                      ? void 0
                      : el.id,
            ),
            ed = i.useCallback(
                (e) => {
                    if ((null == H ? void 0 : H.src) == null || null == b || null == Y) return;
                    let t =
                        er > 0
                            ? (0, C.v$)({
                                  entry: y,
                                  channel: b,
                                  users: [et, en],
                                  countOthers: er,
                              })
                            : (0, C.op)(y, b, Y);
                    return (0, T.p6)({
                        entry: y,
                        applicationImageSrc: null == H ? void 0 : H.src,
                        avatarSrcs: ee.map((e) => e.getAvatarURL(b.guild_id, 128)),
                        description: t,
                        timestamp: (0, I.As)(y, Q),
                        colors: [X, Z],
                        channelId: e,
                    });
                },
                [null == H ? void 0 : H.src, b, ee, y, Q, er, et, en, X, Z, Y],
            );
        if (null == Y) return null;
        let ef = (0, r.jsx)(P.mG, {
                location: null == $ ? P.N5.POPOUT : P.N5.STREAMING_POPOUT,
                children: w.n.map((e, t) => (0, r.jsx)(e, { entry: y }, t)),
            }),
            ep =
                null == J
                    ? (0, r.jsx)(D.BC, {
                          channel: b,
                          headerIcons:
                              null == ea
                                  ? null
                                  : (0, r.jsx)(x.A, {
                                        onClick: eo,
                                        Icon: ea,
                                        "aria-label": M.intl.string(M.t.YR4cHH),
                                    }),
                          userDescription: (0, I.JM)(y) ? M.t.vPg1JT : M.t.rPqqts,
                          title: K,
                          subtitle: W,
                          badges: ef,
                          entry: y,
                          disableGameProfileLinks: U,
                          onUserPopoutClosed: F,
                          trackRankingItemInteraction: B,
                      })
                    : (0, r.jsx)(D.Fl, {
                          channel: b,
                          title: y.extra.game_name,
                          subtitle: W,
                          badges: ef,
                          userDescription: M.t["6oWFUN"],
                          entry: y,
                          stream: J,
                          onUserPopoutClosed: F,
                          trackRankingItemInteraction: B,
                      }),
            e_ =
                !eu && ec
                    ? (0, r.jsx)(
                          f.A,
                          {
                              application: el,
                              analyticsLocation: h.A.MEMBER_LIST_GAMING_CONTENT_POPOUT,
                          },
                          "cloud-play",
                      )
                    : null,
            eh = [
                null == e_ && ((0, l.A)(z, j.jUm.JOIN) || (0, c.A)(z))
                    ? (0, r.jsx)(
                          p.A,
                          {
                              activity: z,
                              user: Y,
                              variant: "primary",
                              size: "md",
                              icon: o._xR,
                          },
                          "join",
                      )
                    : null,
                (0, u.A)(z)
                    ? (0, r.jsx)(
                          _.A,
                          {
                              activity: z,
                              size: "md",
                              variant: "primary",
                              icon: o.bMW,
                          },
                          "watch",
                      )
                    : null,
                e_,
            ].filter(O.Vq);
        return (0, r.jsxs)(D.YN, {
            children: [
                ep,
                (0, r.jsx)(D.Eh, {
                    children: (0, r.jsx)(D.fD, {
                        onReaction: G,
                        onVoiceChannelPreview: V,
                        user: Y,
                        channel: b,
                        generateReactionImage: ed,
                        reactionImageAltText: (0, C.uG)(y, Y),
                        entry: y,
                        buttons: eh,
                    }),
                }),
            ],
        });
    };
