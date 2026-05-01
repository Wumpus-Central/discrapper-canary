"use strict";
n.d(t, { n: () => z, A: () => Z });
var l = n(627968),
    i = n(64700),
    s = n(808380),
    a = n(17928),
    r = n(687966),
    o = n(39623),
    c = n(833349),
    u = n(765379),
    d = n(960076),
    h = n(709309),
    m = n(737393),
    p = n(110259),
    f = n(821609),
    g = n(414499),
    x = n(688810),
    C = n(139286),
    A = n(985018);
function E(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: i } = (0, x.Ay)(n),
        s = (0, m.A)({ application: t, analyticsLocations: i });
    return (
        (0, C.A)({
            name: p.ImpressionNames.CLOUD_PLAY_CTA,
            type: p.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            f.$,
            {
                variant: "primary",
                size: "md",
                icon: g.h,
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
var I = n(284525),
    y = n(913948),
    v = n(648246),
    S = n(793574),
    N = n(627363),
    j = n(308335),
    _ = n(773669),
    T = n(790381),
    b = n(266080),
    R = n(403362),
    O = n(939341),
    L = n(576757),
    w = n(202195),
    M = n(583846),
    k = n(821988),
    P = n(329575),
    D = n(434200),
    U = n(140651),
    V = n(322789),
    G = n(506326),
    F = n(236812),
    H = n(18282),
    W = n(299846),
    B = n(652215);
let K = [...V.n, G.Yq],
    z = {
        [s.Y.DESKTOP]: null,
        [s.Y.LINUX]: null,
        [s.Y.MACOS]: null,
        [s.Y.NINTENDO]: null,
        [s.Y.IOS]: null,
        [s.Y.ANDROID]: null,
        [s.Y.XBOX]: b.A,
        [s.Y.PLAYSTATION]: T.A,
    },
    Z = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: p,
                onReaction: f,
                onVoiceChannelPreview: g,
                onUserPopoutClosed: x,
                trackRankingItemInteraction: C,
            } = e,
            { largeImage: T } = (0, O.nO)({ entry: n }),
            { user: b, details: V, appName: Z, activity: q, embeddedActivity: J } = (0, W.u)(n),
            { primaryColor: Y, secondaryColor: X } = (0, U.A)(T?.src),
            $ = (0, a.bG)([_.default], () => _.default.locale),
            { streamPreviewUrl: Q, stream: ee } = (0, w.A)(n),
            { displayParticipants: et, participant1: en, participant2: el, numOtherParticipants: ei } = (0, L.A)(n, 3),
            es = n.extra.platform,
            ea = null != es ? z[es] : null,
            er = es === s.Y.XBOX ? B.fg2.XBOX : es === s.Y.PLAYSTATION ? B.fg2.PLAYSTATION : void 0,
            eo = (0, D.A)(er),
            { data: ec } = (0, N.YY)(n.extra.application_id),
            eu = (0, h.A)("member_list_gaming_content_popout", n.extra.application_id),
            ed = (0, m.J)(ec),
            eh = (0, j.o)(q?.application_id ?? J?.applicationId ?? ec?.id),
            em = i.useCallback(
                (e) => {
                    if (T?.src == null || null == t || null == b) return;
                    let l =
                        ei > 0
                            ? (0, P.v$)({ entry: n, channel: t, users: [en, el], countOthers: ei })
                            : (0, P.op)(n, t, b);
                    return (0, k.p6)({
                        entry: n,
                        applicationImageSrc: T?.src,
                        avatarSrcs: et.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: l,
                        timestamp: (0, M.As)(n, $),
                        colors: [Y, X],
                        channelId: e,
                    });
                },
                [T?.src, t, et, n, $, ei, en, el, Y, X, b],
            );
        if (null == b) return null;
        let ep = (0, l.jsx)(G.mG, {
                location: null == Q ? G.N5.POPOUT : G.N5.STREAMING_POPOUT,
                children: K.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
            }),
            ef =
                null == ee
                    ? (0, l.jsx)(F.BC, {
                          channel: t,
                          headerIcons:
                              null == ea
                                  ? null
                                  : (0, l.jsx)(H.A, { onClick: eo, Icon: ea, "aria-label": A.intl.string(A.t.YR4cHH) }),
                          userDescription: (0, M.JM)(n) ? A.t.vPg1JT : A.t.rPqqts,
                          title: Z,
                          subtitle: V,
                          badges: ep,
                          entry: n,
                          disableGameProfileLinks: p,
                          onUserPopoutClosed: x,
                          trackRankingItemInteraction: C,
                          children:
                              eu.length > 0
                                  ? (0, l.jsx)(y.A, { distributorCTAConfigs: eu, buttonVariant: "overlay-primary" })
                                  : null,
                      })
                    : (0, l.jsx)(F.Fl, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: V,
                          badges: ep,
                          userDescription: A.t["6oWFUN"],
                          entry: n,
                          stream: ee,
                          onUserPopoutClosed: x,
                          trackRankingItemInteraction: C,
                          children:
                              eu.length > 0
                                  ? (0, l.jsx)(y.A, { distributorCTAConfigs: eu, buttonVariant: "overlay-primary" })
                                  : null,
                      }),
            eg =
                !eh && ed
                    ? (0, l.jsx)(
                          E,
                          { application: ec, analyticsLocation: S.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            ex = [
                null == eg && ((0, c.A)(q, B.jUm.JOIN) || (0, u.A)(q))
                    ? (0, l.jsx)(I.A, { activity: q, user: b, variant: "primary", size: "md", icon: r._ }, "join")
                    : null,
                (0, d.A)(q)
                    ? (0, l.jsx)(v.A, { activity: q, size: "md", variant: "primary", icon: o.b }, "watch")
                    : null,
                eg,
            ].filter(R.Vq);
        return (0, l.jsxs)(F.YN, {
            children: [
                ef,
                (0, l.jsx)(F.Eh, {
                    children: (0, l.jsx)(F.fD, {
                        onReaction: f,
                        onVoiceChannelPreview: g,
                        user: b,
                        channel: t,
                        generateReactionImage: em,
                        reactionImageAltText: (0, P.uG)(n, b),
                        entry: n,
                        buttons: ex,
                    }),
                }),
            ],
        });
    };
