n.d(t, { Z: () => N });
var r = n(54381);
n(473749);
var i = n(657707),
    l = n(442837),
    a = n(692547),
    s = n(320582),
    o = n(246016),
    c = n(189156),
    d = n(699516),
    u = n(246946),
    p = n(5192),
    h = n(621853),
    f = n(172351),
    g = n(648052),
    m = n(280885),
    b = n(407699),
    y = n(78806),
    O = n(91433),
    x = n(900927),
    j = n(944043),
    v = n(678738),
    C = n(638970),
    I = n(502762),
    _ = n(530),
    S = n(827313),
    E = n(981631),
    Z = n(671955),
    P = n(388032),
    T = n(82600);
function N(e) {
    let { user: t, currentUser: n, displayProfile: N, channel: R, isHoveringOrFocusing: w, onOpenProfile: A } = e,
        { relationshipType: D, originApplicationId: L } = (0, l.cj)([d.Z], () => ({
            relationshipType: d.Z.getRelationshipType(t.id),
            originApplicationId: d.Z.getOriginApplicationId(t.id),
        })),
        M = (0, s.vh)(t.id),
        k = (0, o.Y)({ userId: t.id }),
        U = (0, l.e7)([u.Z], () => u.Z.hidePersonalInformation),
        G = (0, l.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getUserProfile(t.id)) ? void 0 : e.application;
        });
    return (0, r.jsxs)("div", {
        className: T.body,
        children: [
            (0, r.jsx)(b.Z, { userId: t.id }),
            (0, r.jsx)(_.Z, {
                user: t,
                guildId: R.guild_id,
                nickname: p.ZP.getName(null, R.id, t),
                pronouns: null == N ? void 0 : N.pronouns,
                onOpenProfile: A,
                tags: (0, r.jsx)(g.Z, {
                    displayProfile: N,
                    themeType: Z.l.SIDEBAR,
                }),
                nicknameIcons: U
                    ? null
                    : (0, r.jsx)(S.Z, {
                          userId: t.id,
                          isVisible: w,
                          onOpenProfile: A,
                      }),
            }),
            D === E.OGo.PENDING_INCOMING &&
                (0, r.jsx)(I.Z.Overlay, {
                    children: (0, r.jsx)(O.Z, {
                        user: t,
                        channelId: R.id,
                        applicationId: L,
                    }),
                }),
            M.map((e) =>
                (0, r.jsx)(
                    I.Z.Overlay,
                    {
                        children: (0, r.jsx)(O.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: R.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(j.Z, { user: t }),
            t.isProvisional &&
                (0, r.jsx)(I.Z.Overlay, {
                    children: (0, r.jsx)(v.Z, {
                        heading: P.intl.string(P.t.Iyka0U),
                        headingIcon: (0, r.jsx)(i.Mgn, {
                            size: "xxs",
                            color: a.Z.colors.TEXT_STRONG,
                        }),
                        headingColor: "text-strong",
                        children: (0, r.jsx)(c.n, { userId: t.id }),
                    }),
                }),
            (0, r.jsx)(C.Z, {
                user: t,
                currentUser: n,
                onOpenUserProfileModal: A,
            }),
            (0, r.jsxs)(I.Z.Overlay, {
                className: T.overlay,
                children: [
                    !U &&
                        (null == N ? void 0 : N.bio) != null &&
                        (null == N ? void 0 : N.bio) !== "" &&
                        (0, r.jsx)(v.Z, {
                            heading: P.intl.string(P.t["61W33d"]),
                            headingColor: "text-strong",
                            children: (0, r.jsx)(m.Z, {
                                userId: t.id,
                                userBio: N.bio,
                                isHoveringOrFocusing: w,
                                animateOnHoverOrFocusOnly: !0,
                            }),
                        }),
                    (null == G ? void 0 : G.popularApplicationCommandIds) != null &&
                        (0, r.jsx)(f.Z, {
                            applicationId: G.id,
                            commandIds: G.popularApplicationCommandIds,
                            channel: R,
                        }),
                    k.length > 0 &&
                        (0, r.jsx)(v.Z, {
                            heading: P.intl.string(P.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, r.jsx)(y.Z, { applicationIds: k }),
                        }),
                    (0, r.jsx)(v.Z, {
                        heading: t.bot ? P.intl.string(P.t["A//N4k"]) : P.intl.string(P.t.a6XYD9),
                        headingColor: "text-strong",
                        children: (0, r.jsx)(x.Z, { userId: t.id }),
                    }),
                ],
            }),
        ],
    });
}
