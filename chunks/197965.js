"use strict";
n.d(t, { n: () => K, A: () => z });
var i = n(627968),
    r = n(64700),
    s = n(808380),
    a = n(17928),
    o = n(687966),
    l = n(39623),
    d = n(833349),
    _ = n(765379),
    u = n(960076),
    c = n(709309),
    E = n(737393),
    h = n(110259),
    m = n(821609),
    f = n(414499),
    g = n(688810),
    p = n(139286),
    A = n(985018);
function I(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: r } = (0, g.Ay)(n),
        s = (0, E.A)({ application: t, analyticsLocations: r });
    return (
        (0, p.A)({
            name: h.ImpressionNames.CLOUD_PLAY_CTA,
            type: h.ImpressionTypes.VIEW,
            properties: { location_stack: r },
        }),
        (0, i.jsx)(
            m.$,
            {
                variant: "primary",
                size: "md",
                icon: f.h,
                text: A.intl.string(A.t["jaYS/h"]),
                onClick: () => {
                    s?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
var T = n(284525),
    S = n(913948),
    N = n(648246),
    C = n(793574),
    R = n(627363),
    O = n(308335),
    y = n(773669),
    v = n(790381),
    D = n(266080),
    L = n(403362),
    b = n(939341),
    w = n(576757),
    P = n(202195),
    k = n(583846),
    M = n(821988),
    U = n(329575),
    x = n(434200),
    G = n(140651),
    V = n(322789),
    F = n(506326),
    B = n(236812),
    H = n(18282),
    j = n(299846),
    W = n(652215);
let Y = [...V.n, F.Yq],
    K = {
        [s.Y.DESKTOP]: null,
        [s.Y.LINUX]: null,
        [s.Y.MACOS]: null,
        [s.Y.NINTENDO]: null,
        [s.Y.IOS]: null,
        [s.Y.ANDROID]: null,
        [s.Y.XBOX]: D.A,
        [s.Y.PLAYSTATION]: v.A,
    },
    z = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: h,
                onReaction: m,
                onVoiceChannelPreview: f,
                onUserPopoutClosed: g,
                trackRankingItemInteraction: p,
            } = e,
            { largeImage: v } = (0, b.nO)({ entry: n }),
            { user: D, details: V, appName: z, activity: $, embeddedActivity: q } = (0, j.u)(n),
            { primaryColor: X, secondaryColor: Z } = (0, G.A)(v?.src),
            Q = (0, a.bG)([y.default], () => y.default.locale),
            { streamPreviewUrl: J, stream: ee } = (0, P.A)(n),
            { displayParticipants: et, participant1: en, participant2: ei, numOtherParticipants: er } = (0, w.A)(n, 3),
            es = n.extra.platform,
            ea = null != es ? K[es] : null,
            eo = es === s.Y.XBOX ? W.fg2.XBOX : es === s.Y.PLAYSTATION ? W.fg2.PLAYSTATION : void 0,
            el = (0, x.A)(eo),
            { data: ed } = (0, R.YY)(n.extra.application_id),
            e_ = (0, c.A)("member_list_gaming_content_popout", n.extra.application_id),
            eu = (0, E.J)(ed),
            ec = (0, O.o)($?.application_id ?? q?.applicationId ?? ed?.id),
            eE = r.useCallback(
                (e) => {
                    if (v?.src == null || null == t || null == D) return;
                    let i =
                        er > 0
                            ? (0, U.v$)({ entry: n, channel: t, users: [en, ei], countOthers: er })
                            : (0, U.op)(n, t, D);
                    return (0, M.p6)({
                        entry: n,
                        applicationImageSrc: v?.src,
                        avatarSrcs: et.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: i,
                        timestamp: (0, k.As)(n, Q),
                        colors: [X, Z],
                        channelId: e,
                    });
                },
                [v?.src, t, et, n, Q, er, en, ei, X, Z, D],
            );
        if (null == D) return null;
        let eh = (0, i.jsx)(F.mG, {
                location: null == J ? F.N5.POPOUT : F.N5.STREAMING_POPOUT,
                children: Y.map((e, t) => (0, i.jsx)(e, { entry: n }, t)),
            }),
            em =
                null == ee
                    ? (0, i.jsx)(B.BC, {
                          channel: t,
                          headerIcons:
                              null == ea
                                  ? null
                                  : (0, i.jsx)(H.A, { onClick: el, Icon: ea, "aria-label": A.intl.string(A.t.YR4cHH) }),
                          userDescription: (0, k.JM)(n) ? A.t.vPg1JT : A.t.rPqqts,
                          title: z,
                          subtitle: V,
                          badges: eh,
                          entry: n,
                          disableGameProfileLinks: h,
                          onUserPopoutClosed: g,
                          trackRankingItemInteraction: p,
                          children:
                              e_.length > 0
                                  ? (0, i.jsx)(S.A, { distributorCTAConfigs: e_, buttonVariant: "overlay-primary" })
                                  : null,
                      })
                    : (0, i.jsx)(B.Fl, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: V,
                          badges: eh,
                          userDescription: A.t["6oWFUN"],
                          entry: n,
                          stream: ee,
                          onUserPopoutClosed: g,
                          trackRankingItemInteraction: p,
                          children:
                              e_.length > 0
                                  ? (0, i.jsx)(S.A, { distributorCTAConfigs: e_, buttonVariant: "overlay-primary" })
                                  : null,
                      }),
            ef =
                !ec && eu
                    ? (0, i.jsx)(
                          I,
                          { application: ed, analyticsLocation: C.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            eg = [
                null == ef && ((0, d.A)($, W.jUm.JOIN) || (0, _.A)($))
                    ? (0, i.jsx)(T.A, { activity: $, user: D, variant: "primary", size: "md", icon: o._ }, "join")
                    : null,
                (0, u.A)($)
                    ? (0, i.jsx)(N.A, { activity: $, size: "md", variant: "primary", icon: l.b }, "watch")
                    : null,
                ef,
            ].filter(L.Vq);
        return (0, i.jsxs)(B.YN, {
            children: [
                em,
                (0, i.jsx)(B.Eh, {
                    children: (0, i.jsx)(B.fD, {
                        onReaction: m,
                        onVoiceChannelPreview: f,
                        user: D,
                        channel: t,
                        generateReactionImage: eE,
                        reactionImageAltText: (0, U.uG)(n, D),
                        entry: n,
                        buttons: eg,
                    }),
                }),
            ],
        });
    };
