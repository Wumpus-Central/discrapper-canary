"use strict";
n.d(t, { Ay: () => G });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(808666),
    r = n(821609),
    o = n(414499),
    c = n(323384),
    u = n(833349),
    d = n(765379),
    h = n(737393),
    m = n(284525),
    p = n(793574),
    f = n(297486),
    g = n(627363),
    _ = n(773669),
    x = n(403362),
    C = n(562153),
    A = n(939341),
    E = n(576757),
    I = n(583846);
n(321073), n(284009);
var v = n(989349),
    y = n.n(v),
    b = n(379834);
n(587895);
var S = n(491533);
n(654107);
var N = n(583954),
    j = n(745162);
n(287809);
var T = n(927813),
    w = n(935208),
    R = n(140651),
    L = n(365170),
    k = n(241678),
    M = n(985018);
let O = async (e) => {
    let { applicationImageSrc: t, entry: n, avatarSrcs: l, description: i, timestamp: s, colors: a, channelId: r } = e,
        o = n.extra.activity_name,
        c = {
            AvatarImage1: l[0],
            ...(null != l[1] && { AvatarImage2: l[1] }),
            ...(null != l[2] && { AvatarImage3: l[2] }),
            ...(null != t && { ApplicationImage: t }),
        };
    return await (0, j.r)({
        assetsToLoad: c,
        drawImage: (e) =>
            ((e, t) => {
                let { timestamp: n, colors: l, description: i, entry: s, numAvatars: a } = t,
                    r = l.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(r, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === N.uS.Failure &&
                        e.drawPath(S.f, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    (0, L.v)({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, a),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: k.mw, weight: 500, truncate: N.Kq.Wrap }),
                    e.drawText(i, { x: 120, y: 64, h: 32, w: 260 }, !0);
                let o = ((e, t) => {
                    let n = [{ iconPath: k.AS, text: t }],
                        l = w.default.extractTimestamp(e.extra.application_id);
                    if (
                        (7 >= y()().diff(y()(l), "days") && n.push({ iconPath: k.fB, text: M.intl.string(M.t.vYuyWf) }),
                        (0, I.Rf)(e) && n.push({ iconPath: k._P, text: M.intl.string(M.t.keY6mW) }),
                        (0, I.BZ)(e))
                    ) {
                        let t = (0, I.iy)(e);
                        n.push({ iconPath: k.Jd, text: M.intl.formatToPlainString(M.t["Klie/P"], { days: t }) });
                    }
                    (0, I.CZ)(e) === b.m.GLOBAL && n.push({ iconPath: k.Cv, text: M.intl.string(M.t.kAlUsy) });
                    let i = (0, I.KH)(e);
                    if ((null != i && n.push({ iconPath: k.$S, text: (0, I.us)(i) }), (0, I.L7)(e))) {
                        let { text: t } = (0, I.Pj)(e);
                        null != t && n.push({ iconPath: k.iI, text: t });
                    }
                    if ((0, I.uw)(e)) {
                        let t = (0, I.ty)(e);
                        if (null != t) {
                            let e = M.intl.formatToPlainString(M.t.C0AxoR, { hours: Math.round(t / T.A.Seconds.HOUR) });
                            return [{ iconPath: k.pc, text: `${M.intl.string(M.t["/50eHi"])} — ${e}` }];
                        }
                    }
                    return n;
                })(s, n);
                (0, L.$)({ canvas: e, badges: o, startPosition: 120, maxWidth: 260 });
            })(e, { timestamp: s, colors: a, description: i, entry: n, numAvatars: l.length }),
        exportConfigs: {
            format: N.z5.CloudUpload,
            quality: 1,
            fileName: `user-reacting-to-${o}.png`.toLowerCase(),
            fileType: "png",
            channelId: r,
        },
    });
};
var P = n(506326),
    D = n(236812),
    U = n(299846),
    V = n(652215);
let G = (e) => {
    let { channel: t, entry: n, onReaction: v, onVoiceChannelPreview: y, disableActivityProfileLinks: b } = e,
        { largeImage: S } = (0, A.nO)({ entry: n, showCoverImage: !1 }),
        { user: N, details: j, activity: T, embeddedActivity: w } = (0, U.u)(n),
        { primaryColor: L, secondaryColor: k } = (0, R.A)(S?.src),
        G = (0, s.bG)([_.default], () => _.default.locale),
        { displayParticipants: F, participant1: B, participant2: H, numOtherParticipants: W } = (0, E.A)(n, 3),
        K = () => {
            (0, f.hg)(n.extra.application_id);
        },
        z = i.useCallback(
            (e) => {
                let l, i, s;
                if (S?.src == null || null == t || null == N) return;
                let a =
                    W > 0
                        ? ((e) => {
                              let { entry: t, channel: n, users: l, countOthers: i } = e,
                                  s = M.t["7j/5mg"];
                              return M.intl
                                  .formatToMarkdownString(s, {
                                      gameName: t.extra.activity_name,
                                      user1: C.Ay.getName(n?.guild_id, n?.id, l[0]),
                                      user2: C.Ay.getName(n?.guild_id, n?.id, l[1]),
                                      countOthers: i,
                                  })
                                  .replaceAll("*", "");
                          })({ entry: n, channel: t, users: [B, H], countOthers: W })
                        : ((l = M.t["bES+y2"]),
                          (i = C.Ay.getName(t.guild_id, t.id, N)),
                          (s = n.extra.activity_name),
                          M.intl.formatToMarkdownString(l, { gameName: s, userName: i }).replaceAll("*", ""));
                return O({
                    entry: n,
                    applicationImageSrc: S?.src,
                    avatarSrcs: F.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: a,
                    timestamp: (0, I.As)(n, G),
                    colors: [L, k],
                    channelId: e,
                });
            },
            [S?.src, t, F, n, G, W, B, H, L, k, N],
        ),
        { data: Z } = (0, g.YY)(n.extra.application_id),
        q = (0, h.A)({ application: Z, analyticsLocations: [p.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == N) return null;
    let J = (0, l.jsx)(P.iT, { location: P.N5.POPOUT, entry: n }),
        Y = (0, l.jsx)(D.BC, {
            channel: t,
            userDescription: (0, I.JM)(n) ? M.t.vPg1JT : M.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: j,
            badges: J,
            entry: n,
            showCoverImage: !1,
            onClickTitle: b ? void 0 : K,
            onClickSubtitle: b ? void 0 : K,
            onClickThumbnail: b ? void 0 : K,
        }),
        X = (0, u.A)(T, V.jUm.JOIN) || (0, d.A)(T),
        $ = X
            ? (0, l.jsx)(m.A, { embeddedActivity: w, activity: T, user: N, variant: "primary", size: "md", icon: a.I })
            : null,
        Q =
            null == q
                ? null
                : (0, l.jsx)(r.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: q,
                      text: M.intl.string(M.t["jaYS/h"]),
                      icon: o.h,
                  }),
        ee =
            null != Q || b
                ? null
                : (0, l.jsx)(r.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: K,
                      text: M.intl.string(M.t.GDWYR8),
                      icon: c.k,
                  }),
        et = [Q, X && !b ? $ : ee].filter(x.Vq);
    return (0, l.jsxs)(D.YN, {
        children: [
            Y,
            (0, l.jsx)(D.Eh, {
                children: (0, l.jsx)(D.fD, {
                    onReaction: v,
                    onVoiceChannelPreview: y,
                    user: N,
                    channel: t,
                    generateReactionImage: z,
                    reactionImageAltText: M.intl.formatToPlainString(M.t.tAwI1k, {
                        username: N.username,
                        activity: n.extra.activity_name,
                    }),
                    entry: n,
                    buttons: et,
                }),
            }),
        ],
    });
};
