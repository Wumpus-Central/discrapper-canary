"use strict";
n.d(t, { Ay: () => F });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(808666),
    o = n(821609),
    l = n(414499),
    d = n(323384),
    _ = n(833349),
    u = n(765379),
    c = n(737393),
    E = n(284525),
    h = n(793574),
    m = n(297486),
    f = n(627363),
    g = n(773669),
    p = n(403362),
    A = n(562153),
    I = n(939341),
    T = n(576757),
    S = n(583846);
n(321073), n(284009);
var N = n(989349),
    C = n.n(N),
    R = n(379834);
n(587895);
var O = n(491533);
n(654107);
var y = n(583954),
    v = n(745162);
n(287809);
var D = n(927813),
    L = n(935208),
    b = n(140651),
    w = n(365170),
    P = n(241678),
    k = n(985018);
let M = async (e) => {
    let { applicationImageSrc: t, entry: n, avatarSrcs: i, description: r, timestamp: s, colors: a, channelId: o } = e,
        l = n.extra.activity_name,
        d = {
            AvatarImage1: i[0],
            ...(null != i[1] && { AvatarImage2: i[1] }),
            ...(null != i[2] && { AvatarImage3: i[2] }),
            ...(null != t && { ApplicationImage: t }),
        };
    return await (0, v.r)({
        assetsToLoad: d,
        drawImage: (e) =>
            ((e, t) => {
                let { timestamp: n, colors: i, description: r, entry: s, numAvatars: a } = t,
                    o = i.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(o, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === y.uS.Failure &&
                        e.drawPath(O.f, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    (0, w.v)({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, a),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: P.mw, weight: 500, truncate: y.Kq.Wrap }),
                    e.drawText(r, { x: 120, y: 64, h: 32, w: 260 }, !0);
                let l = ((e, t) => {
                    let n = [{ iconPath: P.AS, text: t }],
                        i = L.default.extractTimestamp(e.extra.application_id);
                    if (
                        (7 >= C()().diff(C()(i), "days") && n.push({ iconPath: P.fB, text: k.intl.string(k.t.vYuyWf) }),
                        (0, S.Rf)(e) && n.push({ iconPath: P._P, text: k.intl.string(k.t.keY6mW) }),
                        (0, S.BZ)(e))
                    ) {
                        let t = (0, S.iy)(e);
                        n.push({ iconPath: P.Jd, text: k.intl.formatToPlainString(k.t["Klie/P"], { days: t }) });
                    }
                    (0, S.CZ)(e) === R.m.GLOBAL && n.push({ iconPath: P.Cv, text: k.intl.string(k.t.kAlUsy) });
                    let r = (0, S.KH)(e);
                    if ((null != r && n.push({ iconPath: P.$S, text: (0, S.us)(r) }), (0, S.L7)(e))) {
                        let { text: t } = (0, S.Pj)(e);
                        null != t && n.push({ iconPath: P.iI, text: t });
                    }
                    if ((0, S.uw)(e)) {
                        let t = (0, S.ty)(e);
                        if (null != t) {
                            let e = k.intl.formatToPlainString(k.t.C0AxoR, { hours: Math.round(t / D.A.Seconds.HOUR) });
                            return [{ iconPath: P.pc, text: `${k.intl.string(k.t["/50eHi"])} — ${e}` }];
                        }
                    }
                    return n;
                })(s, n);
                (0, w.$)({ canvas: e, badges: l, startPosition: 120, maxWidth: 260 });
            })(e, { timestamp: s, colors: a, description: r, entry: n, numAvatars: i.length }),
        exportConfigs: {
            format: y.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${l}.png`.toLowerCase(),
            fileType: "png",
            channelId: o,
        },
    });
};
var U = n(506326),
    x = n(236812),
    G = n(299846),
    V = n(652215);
let F = (e) => {
    let { channel: t, entry: n, onReaction: N, onVoiceChannelPreview: C, disableActivityProfileLinks: R } = e,
        { largeImage: O } = (0, I.nO)({ entry: n, showCoverImage: !1 }),
        { user: y, details: v, activity: D, embeddedActivity: L } = (0, G.u)(n),
        { primaryColor: w, secondaryColor: P } = (0, b.A)(O?.src),
        F = (0, s.bG)([g.default], () => g.default.locale),
        { displayParticipants: B, participant1: H, participant2: j, numOtherParticipants: W } = (0, T.A)(n, 3),
        Y = () => {
            (0, m.hg)(n.extra.application_id);
        },
        K = r.useCallback(
            (e) => {
                let i, r, s;
                if (O?.src == null || null == t || null == y) return;
                let a =
                    W > 0
                        ? ((e) => {
                              let { entry: t, channel: n, users: i, countOthers: r } = e,
                                  s = k.t["7j/5mg"];
                              return k.intl
                                  .formatToMarkdownString(s, {
                                      gameName: t.extra.activity_name,
                                      user1: A.Ay.getName(n?.guild_id, n?.id, i[0]),
                                      user2: A.Ay.getName(n?.guild_id, n?.id, i[1]),
                                      countOthers: r,
                                  })
                                  .replaceAll("*", "");
                          })({ entry: n, channel: t, users: [H, j], countOthers: W })
                        : ((i = k.t["bES+y2"]),
                          (r = A.Ay.getName(t.guild_id, t.id, y)),
                          (s = n.extra.activity_name),
                          k.intl.formatToMarkdownString(i, { gameName: s, userName: r }).replaceAll("*", ""));
                return M({
                    entry: n,
                    applicationImageSrc: O?.src,
                    avatarSrcs: B.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: a,
                    timestamp: (0, S.As)(n, F),
                    colors: [w, P],
                    channelId: e,
                });
            },
            [O?.src, t, B, n, F, W, H, j, w, P, y],
        ),
        { data: z } = (0, f.YY)(n.extra.application_id),
        $ = (0, c.A)({ application: z, analyticsLocations: [h.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == y) return null;
    let q = (0, i.jsx)(U.iT, { location: U.N5.POPOUT, entry: n }),
        X = (0, i.jsx)(x.BC, {
            channel: t,
            userDescription: (0, S.JM)(n) ? k.t.vPg1JT : k.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: v,
            badges: q,
            entry: n,
            showCoverImage: !1,
            onClickTitle: R ? void 0 : Y,
            onClickSubtitle: R ? void 0 : Y,
            onClickThumbnail: R ? void 0 : Y,
        }),
        Z = (0, _.A)(D, V.jUm.JOIN) || (0, u.A)(D),
        Q = Z
            ? (0, i.jsx)(E.A, { embeddedActivity: L, activity: D, user: y, variant: "primary", size: "md", icon: a.I })
            : null,
        J =
            null == $
                ? null
                : (0, i.jsx)(o.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: $,
                      text: k.intl.string(k.t["jaYS/h"]),
                      icon: l.h,
                  }),
        ee =
            null != J || R
                ? null
                : (0, i.jsx)(o.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: Y,
                      text: k.intl.string(k.t.GDWYR8),
                      icon: d.k,
                  }),
        et = [J, Z && !R ? Q : ee].filter(p.Vq);
    return (0, i.jsxs)(x.YN, {
        children: [
            X,
            (0, i.jsx)(x.Eh, {
                children: (0, i.jsx)(x.fD, {
                    onReaction: N,
                    onVoiceChannelPreview: C,
                    user: y,
                    channel: t,
                    generateReactionImage: K,
                    reactionImageAltText: k.intl.formatToPlainString(k.t.tAwI1k, {
                        username: y.username,
                        activity: n.extra.activity_name,
                    }),
                    entry: n,
                    buttons: et,
                }),
            }),
        ],
    });
};
