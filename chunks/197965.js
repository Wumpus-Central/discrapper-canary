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
    _ = n(688810),
    x = n(139286),
    C = n(985018);
function A(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: i } = (0, _.Ay)(n),
        s = (0, m.A)({ application: t, analyticsLocations: i });
    return (
        (0, x.A)({
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
                text: C.intl.string(C.t["jaYS/h"]),
                onClick: () => {
                    s?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
var E = n(284525),
    I = n(913948),
    v = n(648246),
    y = n(793574),
    b = n(627363),
    S = n(308335),
    N = n(773669),
    j = n(790381),
    T = n(266080),
    w = n(403362),
    R = n(939341),
    L = n(576757),
    k = n(202195),
    O = n(583846),
    M = n(821988),
    P = n(329575),
    D = n(434200),
    U = n(140651),
    V = n(322789),
    G = n(506326),
    F = n(236812),
    B = n(18282),
    H = n(299846),
    W = n(652215);
let K = [...V.n, G.Yq],
    z = {
        [s.Y.DESKTOP]: null,
        [s.Y.LINUX]: null,
        [s.Y.MACOS]: null,
        [s.Y.NINTENDO]: null,
        [s.Y.IOS]: null,
        [s.Y.ANDROID]: null,
        [s.Y.XBOX]: T.A,
        [s.Y.PLAYSTATION]: j.A,
    },
    Z = (e) => {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: p,
                onReaction: f,
                onVoiceChannelPreview: g,
                onUserPopoutClosed: _,
                trackRankingItemInteraction: x,
            } = e,
            { largeImage: j } = (0, R.nO)({ entry: n }),
            { user: T, details: V, appName: Z, activity: q, embeddedActivity: J } = (0, H.u)(n),
            { primaryColor: Y, secondaryColor: $ } = (0, U.A)(j?.src),
            X = (0, a.bG)([N.default], () => N.default.locale),
            { streamPreviewUrl: Q, stream: ee } = (0, k.A)(n),
            { displayParticipants: et, participant1: en, participant2: el, numOtherParticipants: ei } = (0, L.A)(n, 3),
            es = n.extra.platform,
            ea = null != es ? z[es] : null,
            er = es === s.Y.XBOX ? W.fg2.XBOX : es === s.Y.PLAYSTATION ? W.fg2.PLAYSTATION : void 0,
            eo = (0, D.A)(er),
            { data: ec } = (0, b.YY)(n.extra.application_id),
            eu = (0, h.A)("member_list_gaming_content_popout", n.extra.application_id),
            ed = (0, m.J)(ec),
            eh = (0, S.o)(q?.application_id ?? J?.applicationId ?? ec?.id),
            em = i.useCallback(
                (e) => {
                    if (j?.src == null || null == t || null == T) return;
                    let l =
                        ei > 0
                            ? (0, P.v$)({ entry: n, channel: t, users: [en, el], countOthers: ei })
                            : (0, P.op)(n, t, T);
                    return (0, M.p6)({
                        entry: n,
                        applicationImageSrc: j?.src,
                        avatarSrcs: et.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: l,
                        timestamp: (0, O.As)(n, X),
                        colors: [Y, $],
                        channelId: e,
                    });
                },
                [j?.src, t, et, n, X, ei, en, el, Y, $, T],
            );
        if (null == T) return null;
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
                                  : (0, l.jsx)(B.A, { onClick: eo, Icon: ea, "aria-label": C.intl.string(C.t.YR4cHH) }),
                          userDescription: (0, O.JM)(n) ? C.t.vPg1JT : C.t.rPqqts,
                          title: Z,
                          subtitle: V,
                          badges: ep,
                          entry: n,
                          disableGameProfileLinks: p,
                          onUserPopoutClosed: _,
                          trackRankingItemInteraction: x,
                          children:
                              eu.length > 0
                                  ? (0, l.jsx)(I.A, { distributorCTAConfigs: eu, buttonVariant: "overlay-primary" })
                                  : null,
                      })
                    : (0, l.jsx)(F.Fl, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: V,
                          badges: ep,
                          userDescription: C.t["6oWFUN"],
                          entry: n,
                          stream: ee,
                          onUserPopoutClosed: _,
                          trackRankingItemInteraction: x,
                          children:
                              eu.length > 0
                                  ? (0, l.jsx)(I.A, { distributorCTAConfigs: eu, buttonVariant: "overlay-primary" })
                                  : null,
                      }),
            eg =
                !eh && ed
                    ? (0, l.jsx)(
                          A,
                          { application: ec, analyticsLocation: y.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            e_ = [
                null == eg && ((0, c.A)(q, W.jUm.JOIN) || (0, u.A)(q))
                    ? (0, l.jsx)(E.A, { activity: q, user: T, variant: "primary", size: "md", icon: r._ }, "join")
                    : null,
                (0, d.A)(q)
                    ? (0, l.jsx)(v.A, { activity: q, size: "md", variant: "primary", icon: o.b }, "watch")
                    : null,
                eg,
            ].filter(w.Vq);
        return (0, l.jsxs)(F.YN, {
            children: [
                ef,
                (0, l.jsx)(F.Eh, {
                    children: (0, l.jsx)(F.fD, {
                        onReaction: f,
                        onVoiceChannelPreview: g,
                        user: T,
                        channel: t,
                        generateReactionImage: em,
                        reactionImageAltText: (0, P.uG)(n, T),
                        entry: n,
                        buttons: e_,
                    }),
                }),
            ],
        });
    };
