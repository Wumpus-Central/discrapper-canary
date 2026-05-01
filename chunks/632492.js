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
    x = n(773669),
    C = n(403362),
    A = n(562153),
    E = n(939341),
    I = n(576757),
    y = n(583846);
n(321073), n(284009);
var v = n(989349),
    S = n.n(v),
    N = n(379834);
n(587895);
var j = n(491533);
n(654107);
var _ = n(583954),
    T = n(745162);
n(287809);
var b = n(927813),
    R = n(935208),
    O = n(140651),
    L = n(365170),
    w = n(241678),
    M = n(985018);
let k = async (e) => {
    let { applicationImageSrc: t, entry: n, avatarSrcs: l, description: i, timestamp: s, colors: a, channelId: r } = e,
        o = n.extra.activity_name,
        c = {
            AvatarImage1: l[0],
            ...(null != l[1] && { AvatarImage2: l[1] }),
            ...(null != l[2] && { AvatarImage3: l[2] }),
            ...(null != t && { ApplicationImage: t }),
        };
    return await (0, T.r)({
        assetsToLoad: c,
        drawImage: (e) =>
            ((e, t) => {
                let { timestamp: n, colors: l, description: i, entry: s, numAvatars: a } = t,
                    r = l.map((e, t) => ({ color: e, stop: t }));
                e.setSize({ w: 400, h: 120 }, 4),
                    e.drawRoundedGradientRect(r, { x: 0, y: 120 }, { x: 400, y: 0 }, { x: 0, y: 0, h: 120, w: 400 }, 8),
                    e.setColor("white"),
                    e.drawRoundedImage("ApplicationImage", { x: 12, y: 12 }, { w: 96, h: 96 }, 8) === _.uS.Failure &&
                        e.drawPath(j.f, { x: 12, y: 12 }, !0, 2 + 2 / 3),
                    (0, L.v)({
                        canvas: e,
                        avatarSrcs: ["AvatarImage1", "AvatarImage2", "AvatarImage3"].slice(0, a),
                        position: { x: 120, y: 12 },
                        avatarImageSize: 32,
                    }),
                    e.setColor("white"),
                    e.setFont({ size: 16, family: w.mw, weight: 500, truncate: _.Kq.Wrap }),
                    e.drawText(i, { x: 120, y: 64, h: 32, w: 260 }, !0);
                let o = ((e, t) => {
                    let n = [{ iconPath: w.AS, text: t }],
                        l = R.default.extractTimestamp(e.extra.application_id);
                    if (
                        (7 >= S()().diff(S()(l), "days") && n.push({ iconPath: w.fB, text: M.intl.string(M.t.vYuyWf) }),
                        (0, y.Rf)(e) && n.push({ iconPath: w._P, text: M.intl.string(M.t.keY6mW) }),
                        (0, y.BZ)(e))
                    ) {
                        let t = (0, y.iy)(e);
                        n.push({ iconPath: w.Jd, text: M.intl.formatToPlainString(M.t["Klie/P"], { days: t }) });
                    }
                    (0, y.CZ)(e) === N.m.GLOBAL && n.push({ iconPath: w.Cv, text: M.intl.string(M.t.kAlUsy) });
                    let i = (0, y.KH)(e);
                    if ((null != i && n.push({ iconPath: w.$S, text: (0, y.us)(i) }), (0, y.L7)(e))) {
                        let { text: t } = (0, y.Pj)(e);
                        null != t && n.push({ iconPath: w.iI, text: t });
                    }
                    if ((0, y.uw)(e)) {
                        let t = (0, y.ty)(e);
                        if (null != t) {
                            let e = M.intl.formatToPlainString(M.t.C0AxoR, { hours: Math.round(t / b.A.Seconds.HOUR) });
                            return [{ iconPath: w.pc, text: `${M.intl.string(M.t["/50eHi"])} — ${e}` }];
                        }
                    }
                    return n;
                })(s, n);
                (0, L.$)({ canvas: e, badges: o, startPosition: 120, maxWidth: 260 });
            })(e, { timestamp: s, colors: a, description: i, entry: n, numAvatars: l.length }),
        exportConfigs: {
            format: _.z5.CloudUpload,
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
    let { channel: t, entry: n, onReaction: v, onVoiceChannelPreview: S, disableActivityProfileLinks: N } = e,
        { largeImage: j } = (0, E.nO)({ entry: n, showCoverImage: !1 }),
        { user: _, details: T, activity: b, embeddedActivity: R } = (0, U.u)(n),
        { primaryColor: L, secondaryColor: w } = (0, O.A)(j?.src),
        G = (0, s.bG)([x.default], () => x.default.locale),
        { displayParticipants: F, participant1: H, participant2: W, numOtherParticipants: B } = (0, I.A)(n, 3),
        K = () => {
            (0, f.hg)(n.extra.application_id);
        },
        z = i.useCallback(
            (e) => {
                let l, i, s;
                if (j?.src == null || null == t || null == _) return;
                let a =
                    B > 0
                        ? ((e) => {
                              let { entry: t, channel: n, users: l, countOthers: i } = e,
                                  s = M.t["7j/5mg"];
                              return M.intl
                                  .formatToMarkdownString(s, {
                                      gameName: t.extra.activity_name,
                                      user1: A.Ay.getName(n?.guild_id, n?.id, l[0]),
                                      user2: A.Ay.getName(n?.guild_id, n?.id, l[1]),
                                      countOthers: i,
                                  })
                                  .replaceAll("*", "");
                          })({ entry: n, channel: t, users: [H, W], countOthers: B })
                        : ((l = M.t["bES+y2"]),
                          (i = A.Ay.getName(t.guild_id, t.id, _)),
                          (s = n.extra.activity_name),
                          M.intl.formatToMarkdownString(l, { gameName: s, userName: i }).replaceAll("*", ""));
                return k({
                    entry: n,
                    applicationImageSrc: j?.src,
                    avatarSrcs: F.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: a,
                    timestamp: (0, y.As)(n, G),
                    colors: [L, w],
                    channelId: e,
                });
            },
            [j?.src, t, F, n, G, B, H, W, L, w, _],
        ),
        { data: Z } = (0, g.YY)(n.extra.application_id),
        q = (0, h.A)({ application: Z, analyticsLocations: [p.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == _) return null;
    let J = (0, l.jsx)(P.iT, { location: P.N5.POPOUT, entry: n }),
        Y = (0, l.jsx)(D.BC, {
            channel: t,
            userDescription: (0, y.JM)(n) ? M.t.vPg1JT : M.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: T,
            badges: J,
            entry: n,
            showCoverImage: !1,
            onClickTitle: N ? void 0 : K,
            onClickSubtitle: N ? void 0 : K,
            onClickThumbnail: N ? void 0 : K,
        }),
        X = (0, u.A)(b, V.jUm.JOIN) || (0, d.A)(b),
        $ = X
            ? (0, l.jsx)(m.A, { embeddedActivity: R, activity: b, user: _, variant: "primary", size: "md", icon: a.I })
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
            null != Q || N
                ? null
                : (0, l.jsx)(r.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: K,
                      text: M.intl.string(M.t.GDWYR8),
                      icon: c.k,
                  }),
        et = [Q, X && !N ? $ : ee].filter(C.Vq);
    return (0, l.jsxs)(D.YN, {
        children: [
            Y,
            (0, l.jsx)(D.Eh, {
                children: (0, l.jsx)(D.fD, {
                    onReaction: v,
                    onVoiceChannelPreview: S,
                    user: _,
                    channel: t,
                    generateReactionImage: z,
                    reactionImageAltText: M.intl.formatToPlainString(M.t.tAwI1k, {
                        username: _.username,
                        activity: n.extra.activity_name,
                    }),
                    entry: n,
                    buttons: et,
                }),
            }),
        ],
    });
};
